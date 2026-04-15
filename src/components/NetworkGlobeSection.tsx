import { useState, useEffect, useRef } from 'react';
import { Globe3D, GlobeMarker } from './ui/3d-globe';
import { ScrollReveal } from './ScrollReveal';

// ============================================================================
// Marker image: SVG data URIs for cyberpunk node types
// ============================================================================

const NODE_ICONS = {
  gpu: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='15' fill='%230a0a0f'/%3E%3Ccircle cx='16' cy='16' r='9' fill='none' stroke='%2300f0ff' stroke-width='2' opacity='0.7'/%3E%3Ccircle cx='16' cy='16' r='4' fill='%2300f0ff'/%3E%3C/svg%3E",
  datacenter: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='15' fill='%230a0a0f'/%3E%3Ccircle cx='16' cy='16' r='9' fill='none' stroke='%23ff2d7b' stroke-width='2' opacity='0.7'/%3E%3Ccircle cx='16' cy='16' r='4' fill='%23ff2d7b'/%3E%3C/svg%3E",
  mobile: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='15' fill='%230a0a0f'/%3E%3Ccircle cx='16' cy='16' r='9' fill='none' stroke='%23b8ff00' stroke-width='2' opacity='0.7'/%3E%3Ccircle cx='16' cy='16' r='4' fill='%23b8ff00'/%3E%3C/svg%3E",
};

// ============================================================================
// Network nodes scattered across the globe
// ============================================================================

const networkNodes: Array<GlobeMarker & { type: keyof typeof NODE_ICONS; city: string }> = [
  // North America
  { lat: 40.7128, lng: -74.006,   type: 'datacenter', city: 'New York',      src: NODE_ICONS.datacenter, label: 'New York' },
  { lat: 37.7749, lng: -122.4194, type: 'gpu',         city: 'San Francisco', src: NODE_ICONS.gpu,        label: 'San Francisco' },
  { lat: 43.6532, lng: -79.3832,  type: 'gpu',         city: 'Toronto',       src: NODE_ICONS.gpu,        label: 'Toronto' },
  { lat: 47.6062, lng: -122.3321, type: 'gpu',         city: 'Seattle',       src: NODE_ICONS.gpu,        label: 'Seattle' },
  { lat: 34.0522, lng: -118.2437, type: 'mobile',      city: 'Los Angeles',   src: NODE_ICONS.mobile,     label: 'Los Angeles' },
  { lat: 41.8781, lng: -87.6298,  type: 'gpu',         city: 'Chicago',       src: NODE_ICONS.gpu,        label: 'Chicago' },
  { lat: 29.7604, lng: -95.3698,  type: 'mobile',      city: 'Houston',       src: NODE_ICONS.mobile,     label: 'Houston' },
  { lat: 25.7617, lng: -80.1918,  type: 'mobile',      city: 'Miami',         src: NODE_ICONS.mobile,     label: 'Miami' },
  // Europe
  { lat: 51.5074, lng: -0.1278,   type: 'datacenter', city: 'London',       src: NODE_ICONS.datacenter, label: 'London' },
  { lat: 52.5200, lng: 13.4050,   type: 'gpu',         city: 'Berlin',        src: NODE_ICONS.gpu,        label: 'Berlin' },
  { lat: 52.3676, lng: 4.9041,    type: 'datacenter', city: 'Amsterdam',     src: NODE_ICONS.datacenter, label: 'Amsterdam' },
  { lat: 48.8566, lng: 2.3522,    type: 'gpu',         city: 'Paris',         src: NODE_ICONS.gpu,        label: 'Paris' },
  { lat: 59.3293, lng: 18.0686,   type: 'gpu',         city: 'Stockholm',     src: NODE_ICONS.gpu,        label: 'Stockholm' },
  { lat: 48.2082, lng: 16.3738,   type: 'mobile',      city: 'Vienna',        src: NODE_ICONS.mobile,     label: 'Vienna' },
  { lat: 45.4642, lng: 9.1900,    type: 'mobile',      city: 'Milan',         src: NODE_ICONS.mobile,     label: 'Milan' },
  { lat: 37.9838, lng: 23.7275,   type: 'mobile',      city: 'Athens',        src: NODE_ICONS.mobile,     label: 'Athens' },
  { lat: 50.0755, lng: 14.4378,   type: 'gpu',         city: 'Prague',        src: NODE_ICONS.gpu,        label: 'Prague' },
  // Asia
  { lat: 35.6762, lng: 139.6503,  type: 'datacenter', city: 'Tokyo',         src: NODE_ICONS.datacenter, label: 'Tokyo' },
  { lat: 1.3521,  lng: 103.8198,  type: 'datacenter', city: 'Singapore',     src: NODE_ICONS.datacenter, label: 'Singapore' },
  { lat: 37.5665, lng: 126.9780,  type: 'gpu',         city: 'Seoul',         src: NODE_ICONS.gpu,        label: 'Seoul' },
  { lat: 22.3193, lng: 114.1694,  type: 'gpu',         city: 'Hong Kong',     src: NODE_ICONS.gpu,        label: 'Hong Kong' },
  { lat: 19.0760, lng: 72.8777,   type: 'mobile',      city: 'Mumbai',        src: NODE_ICONS.mobile,     label: 'Mumbai' },
  { lat: 31.2304, lng: 121.4737,  type: 'datacenter', city: 'Shanghai',      src: NODE_ICONS.datacenter, label: 'Shanghai' },
  { lat: 39.9042, lng: 116.4074,  type: 'gpu',         city: 'Beijing',       src: NODE_ICONS.gpu,        label: 'Beijing' },
  { lat: 13.7563, lng: 100.5018,  type: 'mobile',      city: 'Bangkok',       src: NODE_ICONS.mobile,     label: 'Bangkok' },
  { lat: 3.1390,  lng: 101.6869,  type: 'mobile',      city: 'Kuala Lumpur',  src: NODE_ICONS.mobile,     label: 'Kuala Lumpur' },
  { lat: 28.6139, lng: 77.2090,   type: 'gpu',         city: 'New Delhi',     src: NODE_ICONS.gpu,        label: 'New Delhi' },
  // Middle East
  { lat: 25.2048, lng: 55.2708,   type: 'datacenter', city: 'Dubai',         src: NODE_ICONS.datacenter, label: 'Dubai' },
  { lat: 24.7136, lng: 46.6753,   type: 'gpu',         city: 'Riyadh',        src: NODE_ICONS.gpu,        label: 'Riyadh' },
  // South America
  { lat: -23.5505, lng: -46.6333, type: 'gpu',         city: 'São Paulo',     src: NODE_ICONS.gpu,        label: 'São Paulo' },
  { lat: -34.6037, lng: -58.3816, type: 'mobile',      city: 'Buenos Aires',  src: NODE_ICONS.mobile,     label: 'Buenos Aires' },
  { lat: -22.9068, lng: -43.1729, type: 'mobile',      city: 'Rio de Janeiro',src: NODE_ICONS.mobile,     label: 'Rio' },
  // Africa & Oceania
  { lat: -26.2041, lng: 28.0473,  type: 'gpu',         city: 'Johannesburg',  src: NODE_ICONS.gpu,        label: 'Johannesburg' },
  { lat: -33.8688, lng: 151.2093, type: 'gpu',         city: 'Sydney',        src: NODE_ICONS.gpu,        label: 'Sydney' },
  { lat: 6.5244,   lng: 3.3792,   type: 'mobile',      city: 'Lagos',         src: NODE_ICONS.mobile,     label: 'Lagos' },
  { lat: -1.2921,  lng: 36.8219,  type: 'mobile',      city: 'Nairobi',       src: NODE_ICONS.mobile,     label: 'Nairobi' },
];

// ============================================================================
// Animated counter hook
// ============================================================================

function useCountUp(target: number, duration: number = 2000, trigger: boolean = false) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration, trigger]);

  return value;
}

// ============================================================================
// NodeTypeBadge
// ============================================================================

interface NodeTypeBadgeProps {
  color: string;
  label: string;
  count: string;
  percent: number;
  delay?: number;
  visible: boolean;
}

function NodeTypeBadge({ color, label, count, percent, delay = 0, visible }: NodeTypeBadgeProps) {
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => setBarWidth(percent), delay + 400);
    return () => clearTimeout(timer);
  }, [visible, percent, delay]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        padding: '12px 16px',
        background: 'rgba(255,255,255,0.03)',
        border: `1px solid ${color}20`,
        borderRadius: '6px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Left accent */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '2px',
          background: color,
          boxShadow: `0 0 8px ${color}`,
        }}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: color,
              boxShadow: `0 0 6px ${color}`,
              animation: 'pulse 2s infinite',
            }}
          />
          <span
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '11px',
              color: '#a0a0b5',
              textTransform: 'lowercase',
            }}
          >
            {label}
          </span>
        </div>
        <span
          style={{
            fontFamily: 'Orbitron, sans-serif',
            fontSize: '11px',
            fontWeight: 700,
            color,
          }}
        >
          {count}
        </span>
      </div>
      {/* Progress bar */}
      <div
        style={{
          height: '2px',
          background: 'rgba(255,255,255,0.06)',
          borderRadius: '1px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${barWidth}%`,
            background: `linear-gradient(90deg, ${color}80, ${color})`,
            borderRadius: '1px',
            transition: 'width 1.2s cubic-bezier(0.23, 1, 0.32, 1)',
            boxShadow: `0 0 8px ${color}60`,
          }}
        />
      </div>
    </div>
  );
}

// ============================================================================
// StatBox
// ============================================================================

interface StatBoxProps {
  value: number;
  suffix: string;
  label: string;
  color: string;
  visible: boolean;
  delay?: number;
}

function StatBox({ value, suffix, label, color, visible, delay = 0 }: StatBoxProps) {
  const [triggered, setTriggered] = useState(false);
  const count = useCountUp(value, 1800, triggered);

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => setTriggered(true), delay);
    return () => clearTimeout(timer);
  }, [visible, delay]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '16px 20px',
        background: 'rgba(255,255,255,0.03)',
        border: `1px solid ${color}25`,
        borderRadius: '8px',
        position: 'relative',
        flex: 1,
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(ellipse at center top, ${color}08 0%, transparent 70%)`,
          borderRadius: '8px',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          fontFamily: 'Orbitron, sans-serif',
          fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
          fontWeight: 800,
          color,
          textShadow: `0 0 20px ${color}60`,
          lineHeight: 1,
        }}
      >
        {count.toLocaleString()}{suffix}
      </div>
      <div
        style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '9px',
          color: '#555566',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          marginTop: '6px',
        }}
      >
        {label}
      </div>
    </div>
  );
}

// ============================================================================
// HoveredNodeInfo
// ============================================================================

interface HoveredNodeInfoProps {
  node: (typeof networkNodes)[0] | null;
}

function HoveredNodeInfo({ node }: HoveredNodeInfoProps) {
  if (!node) return null;
  const typeColor = { gpu: '#00f0ff', datacenter: '#ff2d7b', mobile: '#b8ff00' }[node.type];
  const typeLabel = { gpu: 'GPU Device', datacenter: 'Data Center', mobile: 'Mobile Node' }[node.type];

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '10px 14px',
        background: 'rgba(10,10,15,0.9)',
        border: `1px solid ${typeColor}40`,
        borderRadius: '6px',
        backdropFilter: 'blur(12px)',
        animation: 'fadeIn 0.15s ease-out',
      }}
    >
      <div
        style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: typeColor,
          boxShadow: `0 0 8px ${typeColor}`,
          flexShrink: 0,
        }}
      />
      <div>
        <div
          style={{
            fontFamily: 'Orbitron, sans-serif',
            fontSize: '11px',
            fontWeight: 700,
            color: '#fff',
            textTransform: 'uppercase',
          }}
        >
          {node.city}
        </div>
        <div
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '9px',
            color: typeColor,
            textTransform: 'lowercase',
            marginTop: '2px',
          }}
        >
          {typeLabel} · active
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// Main Section
// ============================================================================

export function NetworkGlobeSection() {
  const [hoveredMarker, setHoveredMarker] = useState<GlobeMarker | null>(null);
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const hoveredNode = hoveredMarker
    ? networkNodes.find((n) => n.label === hoveredMarker.label) ?? null
    : null;

  // IntersectionObserver to trigger count-up animations
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setSectionVisible(true); },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const globeConfig = {
    showAtmosphere: true,
    atmosphereColor: '#00f0ff',
    atmosphereIntensity: 0.65,
    atmosphereBlur: 2.5,
    bumpScale: 3,
    autoRotateSpeed: 0.25,
    enableZoom: false,
    enablePan: false,
    showWireframe: true,
    wireframeColor: '#00f0ff',
    ambientIntensity: 0.5,
    pointLightIntensity: 1.8,
  };

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        padding: '100px 24px',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #0a0a0f 0%, #0d0a18 50%, #0a0a0f 100%)',
      }}
    >
      {/* Background: subtle dot grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(0,240,255,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
        }}
      />

      {/* Top edge glow */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '10%',
          right: '10%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #00f0ff40, #a855f740, transparent)',
        }}
      />

      {/* Bottom edge glow */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '10%',
          right: '10%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #ff2d7b40, #00f0ff40, transparent)',
        }}
      />

      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
          gap: '40px',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* ── LEFT: Text content ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

          {/* Label */}
          <ScrollReveal animation="fadeUp">
            <div
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '10px',
                color: '#00f0ff',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#00f0ff',
                  boxShadow: '0 0 8px #00f0ff',
                  animation: 'pulse 1.5s ease-in-out infinite',
                }}
              />
              live network status
            </div>
          </ScrollReveal>

          {/* Headline */}
          <ScrollReveal animation="fadeUp" delay={80}>
            <div>
              <h2
                style={{
                  fontFamily: 'Orbitron, sans-serif',
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                  fontWeight: 900,
                  lineHeight: 1.1,
                  textTransform: 'uppercase',
                  letterSpacing: '-0.02em',
                  marginBottom: '4px',
                }}
              >
                <span
                  style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #a0a0b5 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  real devices.
                </span>
              </h2>
              <h2
                style={{
                  fontFamily: 'Orbitron, sans-serif',
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                  fontWeight: 900,
                  lineHeight: 1.1,
                  textTransform: 'uppercase',
                  letterSpacing: '-0.02em',
                }}
              >
                <span
                  style={{
                    background: 'linear-gradient(135deg, #00f0ff, #a855f7)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: 'none',
                    filter: 'drop-shadow(0 0 20px #00f0ff40)',
                  }}
                >
                  global reach.
                </span>
              </h2>
            </div>
          </ScrollReveal>

          {/* Description */}
          <ScrollReveal animation="fadeUp" delay={160}>
            <p
              style={{
                fontSize: '14px',
                lineHeight: 1.8,
                color: '#a0a0b5',
                textTransform: 'lowercase',
                maxWidth: '440px',
              }}
            >
              every pin on this globe is a real device running the gptee network.
              from consumer gpus in tokyo to mobile nodes in lagos — the compute
              is owned by the people, not a corporation. decentralized, encrypted,
              and always on.
            </p>
          </ScrollReveal>

          {/* Stats row */}
          <ScrollReveal animation="fadeUp" delay={240}>
            <div style={{ display: 'flex', gap: '12px' }}>
              <StatBox
                value={14283}
                suffix=""
                label="active nodes"
                color="#00f0ff"
                visible={sectionVisible}
                delay={0}
              />
              <StatBox
                value={63}
                suffix="+"
                label="countries"
                color="#a855f7"
                visible={sectionVisible}
                delay={200}
              />
              <StatBox
                value={99}
                suffix="%"
                label="uptime"
                color="#b8ff00"
                visible={sectionVisible}
                delay={400}
              />
            </div>
          </ScrollReveal>

          {/* Node type breakdown */}
          <ScrollReveal animation="fadeUp" delay={320}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '9px',
                  color: '#444455',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  marginBottom: '4px',
                }}
              >
                node distribution
              </div>
              <NodeTypeBadge
                color="#00f0ff"
                label="consumer gpu nodes"
                count="8,412"
                percent={59}
                delay={0}
                visible={sectionVisible}
              />
              <NodeTypeBadge
                color="#b8ff00"
                label="mobile devices"
                count="4,231"
                percent={30}
                delay={100}
                visible={sectionVisible}
              />
              <NodeTypeBadge
                color="#ff2d7b"
                label="data center nodes"
                count="1,640"
                percent={11}
                delay={200}
                visible={sectionVisible}
              />
            </div>
          </ScrollReveal>

          {/* Hovered node info */}
          <div style={{ minHeight: '48px' }}>
            {hoveredNode && <HoveredNodeInfo node={hoveredNode} />}
          </div>
        </div>

        {/* ── RIGHT: Globe ── */}
        <div style={{ position: 'relative' }}>
          <ScrollReveal animation="fadeUp" delay={200}>
            {/* Glow ring behind globe */}
            <div
              style={{
                position: 'absolute',
                inset: '-20px',
                background: 'radial-gradient(ellipse at center, #00f0ff08 0%, #a855f705 40%, transparent 70%)',
                pointerEvents: 'none',
                borderRadius: '50%',
              }}
            />

            {/* Label tag */}
            <div
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '5px 10px',
                background: 'rgba(10,10,15,0.8)',
                border: '1px solid rgba(0,240,255,0.2)',
                borderRadius: '4px',
                backdropFilter: 'blur(8px)',
                pointerEvents: 'none',
              }}
            >
              <div
                style={{
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  background: '#00f0ff',
                  boxShadow: '0 0 6px #00f0ff',
                  animation: 'pulse 1.5s ease-in-out infinite',
                }}
              />
              <span
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '9px',
                  color: '#00f0ff',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                live · {networkNodes.length} nodes
              </span>
            </div>

            {/* Legend */}
            <div
              style={{
                position: 'absolute',
                bottom: '24px',
                left: '16px',
                zIndex: 10,
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                padding: '8px 12px',
                background: 'rgba(10,10,15,0.75)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '6px',
                backdropFilter: 'blur(8px)',
                pointerEvents: 'none',
              }}
            >
              {[
                { color: '#00f0ff', label: 'GPU node' },
                { color: '#b8ff00', label: 'Mobile node' },
                { color: '#ff2d7b', label: 'Data center' },
              ].map(({ color, label }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div
                    style={{
                      width: '5px',
                      height: '5px',
                      borderRadius: '50%',
                      background: color,
                      boxShadow: `0 0 5px ${color}`,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '9px',
                      color: '#666677',
                      textTransform: 'lowercase',
                    }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <Globe3D
              markers={networkNodes}
              config={globeConfig}
              className="h-[560px] w-full"
              onMarkerHover={setHoveredMarker}
              onMarkerClick={(marker) => {
                const node = networkNodes.find((n) => n.label === marker.label);
                if (node) console.log('Node clicked:', node.city, node.type);
              }}
            />
          </ScrollReveal>
        </div>
      </div>

      {/* Mobile: stack layout via media query override */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .network-globe-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
