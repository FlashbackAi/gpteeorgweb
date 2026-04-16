"use client";
import React, { useRef, useMemo, useState, useCallback, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Html, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { clsx } from "clsx";

// ============================================================================
// Starfield Background
// ============================================================================

function Starfield({ count = 2000 }: { count?: number }) {
  const points = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 20 + Math.random() * 30;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, [count]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#ffffff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// ============================================================================
// Connection Arcs Between Markers
// ============================================================================

interface ConnectionArcsProps {
  markers: GlobeMarker[];
  radius: number;
  maxConnections?: number;
}

function ConnectionArcs({ markers, radius, maxConnections = 50 }: ConnectionArcsProps) {
  const arcs = useMemo(() => {
    const connections: Array<{ start: THREE.Vector3; end: THREE.Vector3; color: string }> = [];
    const colors = ["#00f0ff", "#ff2d7b", "#b8ff00", "#a855f7"];

    // Create connections between nearby markers
    for (let i = 0; i < markers.length && connections.length < maxConnections; i++) {
      const marker1 = markers[i];
      for (let j = i + 1; j < markers.length && connections.length < maxConnections; j++) {
        const marker2 = markers[j];

        // Calculate distance
        const pos1 = latLngToVector3(marker1.lat, marker1.lng, radius);
        const pos2 = latLngToVector3(marker2.lat, marker2.lng, radius);
        const distance = pos1.distanceTo(pos2);

        // Only connect if reasonably close (but not too close)
        if (distance > radius * 0.3 && distance < radius * 1.5) {
          connections.push({
            start: pos1,
            end: pos2,
            color: colors[Math.floor(Math.random() * colors.length)],
          });
        }
      }
    }
    return connections;
  }, [markers, radius, maxConnections]);

  return (
    <>
      {arcs.map((arc, index) => (
        <ArcLine key={index} start={arc.start} end={arc.end} color={arc.color} />
      ))}
    </>
  );
}

// Single arc line component
function ArcLine({ start, end, color }: { start: THREE.Vector3; end: THREE.Vector3; color: string }) {
  const lineRef = useRef<THREE.Line>(null);

  const geometry = useMemo(() => {
    // Create curved path
    const mid = start.clone().add(end).multiplyScalar(0.5);
    const dist = start.distanceTo(end);
    mid.setLength(start.length() + dist * 0.3);

    const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
    const points = curve.getPoints(50);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    // Add progress attribute
    const progressArray = new Float32Array(points.length);
    for (let i = 0; i < points.length; i++) {
      progressArray[i] = i / (points.length - 1);
    }
    geometry.setAttribute("progress", new THREE.BufferAttribute(progressArray, 1));

    return geometry;
  }, [start, end]);

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color(color) },
        time: { value: 0 },
        opacity: { value: 0.6 },
      },
      vertexShader: `
        varying float vProgress;
        attribute float progress;
        void main() {
          vProgress = progress;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        uniform float time;
        uniform float opacity;
        varying float vProgress;
        void main() {
          float flow = sin(vProgress * 10.0 - time * 3.0) * 0.5 + 0.5;
          float alpha = opacity * (0.3 + 0.7 * flow);
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });
  }, [color]);

  useFrame(({ clock }) => {
    material.uniforms.time.value = clock.getElapsedTime();
  });

  return (
    <primitive
      ref={lineRef}
      object={new THREE.Line(geometry, material)}
    />
  );
}

// ============================================================================
// Types
// ============================================================================

export interface GlobeMarker {
  lat: number;
  lng: number;
  src: string;
  label?: string;
  size?: number;
}

export interface Globe3DConfig {
  radius?: number;
  globeColor?: string;
  textureUrl?: string;
  bumpMapUrl?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereIntensity?: number;
  atmosphereBlur?: number;
  bumpScale?: number;
  autoRotateSpeed?: number;
  enableZoom?: boolean;
  enablePan?: boolean;
  minDistance?: number;
  maxDistance?: number;
  initialRotation?: { x: number; y: number };
  markerSize?: number;
  showWireframe?: boolean;
  wireframeColor?: string;
  ambientIntensity?: number;
  pointLightIntensity?: number;
  backgroundColor?: string | null;
}

interface Globe3DProps {
  markers?: GlobeMarker[];
  config?: Globe3DConfig;
  className?: string;
  onMarkerClick?: (marker: GlobeMarker) => void;
  onMarkerHover?: (marker: GlobeMarker | null) => void;
}

// ============================================================================
// Constants
// ============================================================================

const DEFAULT_EARTH_TEXTURE =
  "https://unpkg.com/three-globe@2.31.0/example/img/earth-blue-marble.jpg";
const DEFAULT_BUMP_TEXTURE =
  "https://unpkg.com/three-globe@2.31.0/example/img/earth-topology.png";

// ============================================================================
// Utility
// ============================================================================

function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

// ============================================================================
// Marker Component (Enhanced with Glow)
// ============================================================================

interface MarkerProps {
  marker: GlobeMarker;
  radius: number;
  defaultSize: number;
  onClick?: (marker: GlobeMarker) => void;
  onHover?: (marker: GlobeMarker | null) => void;
  markerType?: string;
}

function Marker({ marker, radius, onClick, onHover, markerType = "gpu" }: MarkerProps) {
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const groupRef = useRef<THREE.Group>(null);
  const imageGroupRef = useRef<THREE.Group>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const { camera } = useThree();

  const surfacePosition = useMemo(
    () => latLngToVector3(marker.lat, marker.lng, radius * 1.001),
    [marker.lat, marker.lng, radius]
  );

  const topPosition = useMemo(
    () => latLngToVector3(marker.lat, marker.lng, radius * 1.18),
    [marker.lat, marker.lng, radius]
  );

  const lineHeight = topPosition.distanceTo(surfacePosition);

  const markerColor = useMemo(() => {
    const colors: Record<string, string> = {
      gpu: "#00f0ff",
      datacenter: "#ff2d7b",
      mobile: "#b8ff00",
    };
    return colors[markerType] || "#00f0ff";
  }, [markerType]);

  useFrame(({ clock }) => {
    if (!imageGroupRef.current) return;
    const worldPos = new THREE.Vector3();
    imageGroupRef.current.getWorldPosition(worldPos);
    const markerDirection = worldPos.clone().normalize();
    const cameraDirection = camera.position.clone().normalize();
    const dot = markerDirection.dot(cameraDirection);
    setIsVisible(dot > 0.1);

    // Pulse animation for glow
    if (glowRef.current) {
      const scale = 1 + Math.sin(clock.getElapsedTime() * 3) * 0.2;
      glowRef.current.scale.setScalar(scale);
    }
  });

  const handlePointerEnter = useCallback(() => {
    setHovered(true);
    onHover?.(marker);
  }, [marker, onHover]);

  const handlePointerLeave = useCallback(() => {
    setHovered(false);
    onHover?.(null);
  }, [onHover]);

  const handleClick = useCallback(() => {
    onClick?.(marker);
  }, [marker, onClick]);

  const { lineCenter, lineQuaternion } = useMemo(() => {
    const center = surfacePosition.clone().lerp(topPosition, 0.5);
    const direction = topPosition.clone().sub(surfacePosition).normalize();
    const quaternion = new THREE.Quaternion();
    quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);
    return { lineCenter: center, lineQuaternion: quaternion };
  }, [surfacePosition, topPosition]);

  return (
    <group ref={groupRef} visible={isVisible}>
      {/* Enhanced line with glow */}
      <mesh position={lineCenter} quaternion={lineQuaternion}>
        <cylinderGeometry args={[0.004, 0.004, lineHeight, 8]} />
        <meshBasicMaterial
          color={hovered ? "#ffffff" : markerColor}
          transparent
          opacity={hovered ? 0.95 : 0.7}
        />
      </mesh>

      {/* Glow line behind */}
      <mesh position={lineCenter} quaternion={lineQuaternion}>
        <cylinderGeometry args={[0.008, 0.008, lineHeight, 8]} />
        <meshBasicMaterial
          color={markerColor}
          transparent
          opacity={0.2}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Surface marker with glow */}
      <mesh position={surfacePosition} quaternion={lineQuaternion}>
        <sphereGeometry args={[0.02, 16, 16]} />
        <meshBasicMaterial color={markerColor} />
      </mesh>

      {/* Pulsing glow ring */}
      <mesh ref={glowRef} position={surfacePosition}>
        <ringGeometry args={[0.03, 0.035, 32]} />
        <meshBasicMaterial
          color={markerColor}
          transparent
          opacity={0.5}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      <group ref={imageGroupRef} position={topPosition}>
        <Html
          transform
          center
          sprite
          distanceFactor={10}
          style={{
            pointerEvents: isVisible ? "auto" : "none",
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.15s ease-out",
          }}
        >
          <div
            className={clsx(
              "cursor-pointer overflow-hidden rounded-full transition-all duration-200",
              hovered && "scale-150"
            )}
            style={{
              width: "10px",
              height: "10px",
              boxShadow: hovered
                ? `0 0 20px ${markerColor}, 0 0 40px ${markerColor}80`
                : `0 0 10px ${markerColor}60`,
              border: `1px solid ${markerColor}`,
              background: "rgba(10,10,15,0.9)",
            }}
            onMouseEnter={handlePointerEnter}
            onMouseLeave={handlePointerLeave}
            onClick={handleClick}
          >
            <img
              src={marker.src}
              alt={marker.label || "Marker"}
              className="h-full w-full object-cover"
              draggable={false}
            />
          </div>
        </Html>
      </group>
    </group>
  );
}

// ============================================================================
// Rotating Globe (Enhanced)
// ============================================================================

interface RotatingGlobeProps {
  config: Required<Globe3DConfig>;
  markers: GlobeMarker[];
  onMarkerClick?: (marker: GlobeMarker) => void;
  onMarkerHover?: (marker: GlobeMarker | null) => void;
}

function RotatingGlobe({ config, markers, onMarkerClick, onMarkerHover }: RotatingGlobeProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += config.autoRotateSpeed * 0.01;
    }
  });

  const [earthTexture, bumpTexture] = useTexture([
    config.textureUrl,
    config.bumpMapUrl,
  ]);

  useMemo(() => {
    if (earthTexture) {
      earthTexture.colorSpace = THREE.SRGBColorSpace;
      earthTexture.anisotropy = 16;
    }
    if (bumpTexture) {
      bumpTexture.anisotropy = 8;
    }
  }, [earthTexture, bumpTexture]);

  const geometry = useMemo(() => new THREE.SphereGeometry(config.radius, 64, 64), [config.radius]);
  const wireframeGeometry = useMemo(() => new THREE.SphereGeometry(config.radius * 1.002, 32, 16), [config.radius]);

  return (
    <group ref={groupRef}>
      <mesh geometry={geometry}>
        <meshStandardMaterial
          map={earthTexture}
          bumpMap={bumpTexture}
          bumpScale={config.bumpScale * 0.05}
          roughness={0.6}
          metalness={0.1}
          emissive="#001133"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Enhanced wireframe with glow */}
      {config.showWireframe && (
        <mesh geometry={wireframeGeometry}>
          <meshBasicMaterial
            color={config.wireframeColor}
            wireframe
            transparent
            opacity={0.12}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      )}

      {/* Inner glow layer */}
      <mesh scale={[0.98, 0.98, 0.98]}>
        <sphereGeometry args={[config.radius, 32, 32]} />
        <meshBasicMaterial
          color="#001a33"
          transparent
          opacity={0.4}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Core glow */}
      <mesh scale={[0.5, 0.5, 0.5]}>
        <sphereGeometry args={[config.radius, 32, 32]} />
        <meshBasicMaterial
          color="#00f0ff"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Connection arcs */}
      <ConnectionArcs markers={markers} radius={config.radius} maxConnections={50} />

      {markers.map((marker, index) => {
        // Determine marker type from src
        let markerType = "gpu";
        if (marker.src.includes("ff2d7b")) markerType = "datacenter";
        else if (marker.src.includes("b8ff00")) markerType = "mobile";

        return (
          <Marker
            key={`marker-${index}-${marker.lat}-${marker.lng}`}
            marker={marker}
            radius={config.radius}
            defaultSize={config.markerSize}
            onClick={onMarkerClick}
            onHover={onMarkerHover}
            markerType={markerType}
          />
        );
      })}
    </group>
  );
}

// ============================================================================
// Atmosphere
// ============================================================================

interface AtmosphereProps {
  radius: number;
  color: string;
  intensity: number;
  blur: number;
}

function Atmosphere({ radius, color, intensity, blur }: AtmosphereProps) {
  const fresnelPower = Math.max(0.5, 5 - blur);

  const atmosphereMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        atmosphereColor: { value: new THREE.Color(color) },
        intensity: { value: intensity },
        fresnelPower: { value: fresnelPower },
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 atmosphereColor;
        uniform float intensity;
        uniform float fresnelPower;
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          float fresnel = pow(1.0 - abs(dot(vNormal, normalize(-vPosition))), fresnelPower);
          gl_FragColor = vec4(atmosphereColor, fresnel * intensity);
        }
      `,
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
    });
  }, [color, intensity, fresnelPower]);

  return (
    <mesh scale={[1.12, 1.12, 1.12]}>
      <sphereGeometry args={[radius, 64, 32]} />
      <primitive object={atmosphereMaterial} attach="material" />
    </mesh>
  );
}

// ============================================================================
// Scene
// ============================================================================

interface SceneProps {
  markers: GlobeMarker[];
  config: Required<Globe3DConfig>;
  onMarkerClick?: (marker: GlobeMarker) => void;
  onMarkerHover?: (marker: GlobeMarker | null) => void;
}

function Scene({ markers, config, onMarkerClick, onMarkerHover }: SceneProps) {
  const { camera } = useThree();

  React.useEffect(() => {
    camera.position.set(0, 0, config.radius * 3.5);
    camera.lookAt(0, 0, 0);
  }, [camera, config.radius]);

  return (
    <>
      {/* Starfield background */}
      <Starfield count={1500} />

      {/* Enhanced lighting */}
      <ambientLight intensity={config.ambientIntensity * 0.8} />
      <directionalLight
        position={[config.radius * 5, config.radius * 3, config.radius * 5]}
        intensity={config.pointLightIntensity * 1.2}
        color="#ffffff"
        castShadow
      />
      <directionalLight
        position={[-config.radius * 3, config.radius * 2, -config.radius * 2]}
        intensity={config.pointLightIntensity * 0.4}
        color="#00f0ff"
      />
      {/* Rim light for dramatic effect */}
      <pointLight
        position={[0, -config.radius * 4, 0]}
        intensity={0.5}
        color="#a855f7"
        distance={config.radius * 10}
      />

      <RotatingGlobe
        config={config}
        markers={markers}
        onMarkerClick={onMarkerClick}
        onMarkerHover={onMarkerHover}
      />

      {config.showAtmosphere && (
        <Atmosphere
          radius={config.radius}
          color={config.atmosphereColor}
          intensity={config.atmosphereIntensity * 1.2}
          blur={config.atmosphereBlur}
        />
      )}

      {/* Outer atmosphere glow layers */}
      <mesh scale={[1.15, 1.15, 1.15]}>
        <sphereGeometry args={[config.radius, 32, 32]} />
        <meshBasicMaterial
          color={config.atmosphereColor}
          transparent
          opacity={0.08}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <mesh scale={[1.3, 1.3, 1.3]}>
        <sphereGeometry args={[config.radius, 32, 32]} />
        <meshBasicMaterial
          color="#a855f7"
          transparent
          opacity={0.03}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      <OrbitControls
        makeDefault
        enablePan={config.enablePan}
        enableZoom={config.enableZoom}
        minDistance={config.minDistance}
        maxDistance={config.maxDistance}
        rotateSpeed={0.4}
        autoRotate={config.autoRotateSpeed > 0}
        autoRotateSpeed={config.autoRotateSpeed}
        enableDamping
        dampingFactor={0.1}
      />
    </>
  );
}

// ============================================================================
// Loading Fallback
// ============================================================================

function LoadingFallback() {
  return (
    <Html center>
      <div style={{ color: "#00f0ff", fontFamily: "JetBrains Mono, monospace", fontSize: "12px" }}>
        initializing globe...
      </div>
    </Html>
  );
}

// ============================================================================
// Default Config
// ============================================================================

const defaultConfig: Required<Globe3DConfig> = {
  radius: 2,
  globeColor: "#1a1a2e",
  textureUrl: DEFAULT_EARTH_TEXTURE,
  bumpMapUrl: DEFAULT_BUMP_TEXTURE,
  showAtmosphere: false,
  atmosphereColor: "#4da6ff",
  atmosphereIntensity: 0.5,
  atmosphereBlur: 2,
  bumpScale: 1,
  autoRotateSpeed: 0.3,
  enableZoom: false,
  enablePan: false,
  minDistance: 5,
  maxDistance: 15,
  initialRotation: { x: 0, y: 0 },
  markerSize: 0.06,
  showWireframe: false,
  wireframeColor: "#4a9eff",
  ambientIntensity: 0.6,
  pointLightIntensity: 1.5,
  backgroundColor: null,
};

// ============================================================================
// Main Export
// ============================================================================

export function Globe3D({ markers = [], config = {}, className, onMarkerClick, onMarkerHover }: Globe3DProps) {
  const mergedConfig = useMemo(() => ({ ...defaultConfig, ...config }), [config]);

  return (
    <div className={clsx("relative h-[600px] w-full", className)}>
      <Canvas
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 2]}
        camera={{
          fov: 40,
          near: 0.1,
          far: 1000,
          position: [0, 0, mergedConfig.radius * 3.2],
        }}
        style={{ background: mergedConfig.backgroundColor || "transparent" }}
      >
        <Suspense fallback={<LoadingFallback />}>
          <Scene
            markers={markers}
            config={mergedConfig}
            onMarkerClick={onMarkerClick}
            onMarkerHover={onMarkerHover}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
