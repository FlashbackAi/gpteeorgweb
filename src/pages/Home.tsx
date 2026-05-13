import React, { useEffect, useState } from 'react';
import { GlitchText } from '../components/reactbits/GlitchText';
import { SplitText } from '../components/reactbits/SplitText';
import Dither from '../components/reactbits/Dither';
import { Aurora } from '../components/reactbits/Aurora';
import FuzzyText from '../components/FuzzyText';
import GridMotion from '../components/reactbits/GridMotion';
import ScrollFloat from '../components/reactbits/ScrollFloat';
import MagicRings from '../components/reactbits/MagicRings';
import { ParticleNetwork } from '../components/ParticleNetwork';
import DecayCard from '../components/DecayCard';
import ElectricBorder from '../components/ElectricBorder';
import { CyberTerminal } from '../components/CyberTerminal';
import { Terminal } from '../components/ui/terminal';
import { NeonButton } from '../components/NeonButton';
import { ScrollReveal } from '../components/ScrollReveal';
import { StatsCounter } from '../components/StatsCounter';
import { NetworkGlobeSection } from '../components/NetworkGlobeSection';

export const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const cardW = isMobile ? Math.min(320, window.innerWidth - 64) : 340;
  const cardH = isMobile ? 420 : 460;

  return (
    <div style={{ width: '100%', position: 'relative' }}>

      {/* ═══════════════════════════════════════
          HERO SECTION — Full Viewport
          ═══════════════════════════════════════ */}
      <section
        style={{
          position: 'relative',
          minHeight: '110vh',
          height: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          padding: '120px 24px 80px',
        }}
      >
        {/* Background Layers */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Dither
            waveColor={[0.0, 1.0, 0.2]} // Neon green
            disableAnimation={false}
            enableMouseInteraction={true}
            mouseRadius={1.0}
            colorNum={5}
            waveAmplitude={0.3}
            waveFrequency={3}
            waveSpeed={0.05}
          />
        </div>

        {/* Vignette overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at center, transparent 30%, rgba(10,10,15,0.8) 100%)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {/* Hero Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '1200px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '64px',
            alignItems: 'flex-start',
            pointerEvents: 'none',
            textAlign: 'left',
          }}
        >
          {/* Top: Text Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
            {/* Protocol Badge */}
            <ScrollReveal animation="fadeLeft" delay={300}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 16px',
                  borderRadius: '20px',
                  border: '1px solid rgba(255,45,123,0.2)',
                  background: 'rgba(255,45,123,0.05)',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '11px',
                  color: '#ff2d7b',
                  textTransform: 'lowercase',
                  width: 'fit-content',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#b8ff00',
                    boxShadow: '0 0 8px rgba(184,255,0,0.6)',
                    animation: 'blink 2s ease-in-out infinite',
                  }}
                />
                protocol initiated // [auth_level_0]
              </div>
            </ScrollReveal>

            {/* Main Title */}
            <div>
              <h1
                style={{
                  fontFamily: 'Glitch Goblin, cursive',
                  fontSize: 'clamp(3rem, 8vw, 6rem)',
                  fontWeight: 700,
                  lineHeight: 0.95,
                  marginBottom: '16px',
                }}
              >
                <GlitchText
                  text="TEEPIN"
                  className="text-cyber-magenta text-3d-magenta"
                  speed={35}
                  as="span"
                />
              </h1>
              <SplitText
                text="your compute. your ai. local first. global p2p mesh when needed."
                className="text-cyber-grey-light"
                splitBy="words"
                animation="fadeUp"
                trigger="mount"
                delay={500}
                staggerDelay={80}
              />
              <span className="terminal-cursor" style={{ marginLeft: '4px' }} />
            </div>

            {/* Description */}
            <ScrollReveal animation="fadeUp" delay={700}>
              <p
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '15px',
                  lineHeight: 1.7,
                  color: '#a0a0b5',
                  maxWidth: '500px',
                  textTransform: 'lowercase',
                }}
              >
                teepin runs ai on your own devices first. when your household hits its limit,
                it spills to the teepin network. a global mesh of other people's devices,
                tee-protected and incentivized. your data stays private at every layer
                while rewarding your participation in the p2p network.
              </p>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal animation="fadeUp" delay={900}>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', pointerEvents: 'auto', justifyContent: 'flex-start' }}>
                <NeonButton variant="magenta" size="lg" comingSoon>
                  start p2p node
                </NeonButton>
                <NeonButton variant="cyan" size="lg" comingSoon>
                  network explorer
                </NeonButton>
              </div>
            </ScrollReveal>
          </div>

          {/* Bottom: Terminal */}
          <ScrollReveal animation="fadeUp" delay={600} className="w-full max-w-[900px]">
            <div style={{ pointerEvents: 'auto', marginBottom: '40px' }}>
              <Terminal
              commands={[
                "npx teepin@latest init",
                "npm install motion",
                "npx teepin@latest compile",
                "establishing p2p mesh connection...",
                "connecting to genesis-node-01...",
                "establishing shard replication...",
                "Start P2P Node",
              ]}
              outputs={{
                0: [
                  "✔ Distributed network checks passed.",
                  "✔ Created components.json",
                  "✔ Initialized TEEPIN node.",
                ],
                1: ["added 1 package in 2.1s"],
                2: ["✔ Done. Compiled ZK-proofs, model weights."],
                3: ["looking for peers..."],
                4: ["connected. latency: 24ms"],
                5: ["replication successful.", "syncing state root: 0x9f8...a1b"],
              }}
              typingSpeed={45}
              delayBetweenCommands={1000}
            />
            </div>
          </ScrollReveal>

          {/* ═══════════════════════════════════════
              STATS BAR — Integrated into Hero
              ═══════════════════════════════════════ */}
          <ScrollReveal animation="fadeUp" delay={800} className="w-full">
            <div
              style={{
                position: 'relative',
                maxWidth: '1000px',
                width: '100%',
                pointerEvents: 'auto',
              }}
            >
              {/* Hex frame — clean single-color border with subtle outer glow */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-1px',
                  background: 'rgba(255,255,255,0.18)',
                  clipPath: isMobile
                    ? 'polygon(15% 0, 85% 0, 100% 50%, 85% 100%, 15% 100%, 0 50%)'
                    : 'polygon(5% 0, 95% 0, 100% 50%, 95% 100%, 5% 100%, 0 50%)',
                  zIndex: -1,
                  filter: 'drop-shadow(0 0 12px rgba(0,240,255,0.08))',
                }}
              />

              <div
                style={{
                  background: 'rgba(10, 10, 15, 0.88)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  clipPath: isMobile
                    ? 'polygon(15% 0, 85% 0, 100% 50%, 85% 100%, 15% 100%, 0 50%)'
                    : 'polygon(5% 0, 95% 0, 100% 50%, 95% 100%, 5% 100%, 0 50%)',
                  padding: isMobile ? '14px 50px' : '16px 60px',
                  display: 'grid',
                  gridTemplateColumns: isMobile ? 'repeat(2, minmax(0, 1fr))' : 'repeat(auto-fit, minmax(120px, 1fr))',
                  gap: isMobile ? '0' : '20px',
                  position: 'relative',
                }}
              >
                {/* Vertical divider (centered) */}
                <div
                  style={{
                    position: 'absolute',
                    top: isMobile ? '20%' : '15%',
                    bottom: isMobile ? '20%' : '15%',
                    left: '50%',
                    width: '1px',
                    background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.14) 30%, rgba(255,255,255,0.14) 70%, transparent)',
                    transform: 'translateX(-50%)',
                    pointerEvents: 'none',
                  }}
                />
                {/* Horizontal divider (mobile only — 2x2 grid) */}
                {isMobile && (
                  <div
                    style={{
                      position: 'absolute',
                      left: '22%',
                      right: '22%',
                      top: '50%',
                      height: '1px',
                      background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.14) 30%, rgba(255,255,255,0.14) 70%, transparent)',
                      transform: 'translateY(-50%)',
                      pointerEvents: 'none',
                    }}
                  />
                )}

                <StatsCounter value={14} label="Active Nodes" color="#ff2d7b" suffix="+" />
                <StatsCounter value={3} label="Countries" color="#00f0ff" suffix="+" />
                <StatsCounter value={99} label="Uptime" color="#b8ff00" suffix="%" prefix="" />
                <StatsCounter value={2} label="Models Live" color="#a855f7" suffix="+" />
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            animation: 'float 3s ease-in-out infinite',
          }}
        >
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', color: '#555566', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
            scroll
          </span>
          <div style={{ width: '1px', height: '30px', background: 'linear-gradient(to bottom, #ff2d7b, transparent)' }} />
        </div>

        {/* Bottom fade — blends hero into next section */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '200px', background: 'linear-gradient(to bottom, transparent, #0a0a0f)', zIndex: 3, pointerEvents: 'none' }} />
      </section>

      {/* ═══════════════════════════════════════
          FEATURES SECTION — HoloCards
          ═══════════════════════════════════════ */}
      <section style={{ padding: '120px 24px', position: 'relative', background: '#0a0a0f' }}>
        {/* Top fade — blends from hero */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '120px', background: 'linear-gradient(to bottom, #0a0a0f, transparent)', zIndex: 3, pointerEvents: 'none' }} />
        {/* Bottom fade — blends into privacy section */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px', background: 'linear-gradient(to bottom, transparent, #0a0a0f)', zIndex: 3, pointerEvents: 'none' }} />
        <Aurora colors={['#ff2d7b', '#00f0ff', '#a855f7']} speed={0.5} opacity={0.12} />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse at center, rgba(10,10,15,0.35) 0%, rgba(10,10,15,0.9) 75%, rgba(10,10,15,0.98) 100%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Section Header */}
          <ScrollReveal animation="fadeUp">
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <div
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '11px',
                  color: '#ff2d7b',
                  textTransform: 'uppercase',
                  letterSpacing: '0.3em',
                  marginBottom: '16px',
                  opacity: 0.8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px'
                }}
              >
                <span style={{ width: '20px', height: '1px', background: 'linear-gradient(90deg, transparent, #ff2d7b)' }} />
                distributed stack
                <span style={{ width: '20px', height: '1px', background: 'linear-gradient(90deg, #ff2d7b, transparent)' }} />
              </div>
              <div
                style={{
                  marginBottom: '20px',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <FuzzyText
                  baseIntensity={0.50}
                  hoverIntensity={0.5}
                  enableHover
                  fontFamily="Nevera"
                  fontSize={isMobile ? 'clamp(1.3rem, 7vw, 1.8rem)' : 'clamp(2rem, 5vw, 4rem)'}
                  color="#fff"
                >
                  CORE INFRASTRUCTURE
                </FuzzyText>
              </div>
              <p style={{ 
                color: '#a0a0b5', 
                fontSize: '15px', 
                maxWidth: '600px', 
                margin: '0 auto', 
                textTransform: 'lowercase',
                lineHeight: 1.7,
                fontFamily: 'Space Grotesk, sans-serif'
              }}>
                teepin orchestrates where your ai runs. it starts with your own devices, routes to your household mesh, and spills to the global network only when needed. every handoff is automatic, private, and tee-protected.
              </p>
            </div>
          </ScrollReveal>

          {/* Feature Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px',
              maxWidth: '1200px',
              margin: '0 auto',
              width: '100%',
              justifyContent: 'center'
            }}
          >
            <ScrollReveal animation="fadeUp" delay={0}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ElectricBorder
                  color="#ff2d7b"
                  speed={1}
                  chaos={0.12}
                  borderRadius={12}
                  style={{ transform: isMobile ? 'none' : 'translateY(40px) rotate(-3deg)' }}
                >
                  <DecayCard
                    width={cardW}
                    height={cardH}
                    image="/P2P.png"
                    baseFrequency={0.012}
                    numOctaves={6}
                    maxDisplacement={300}
                  >
                    <div style={{ color: 'white' }}>
                      <h3 style={{ 
                        fontFamily: 'Nevera, sans-serif', 
                        fontSize: '2.2rem', 
                        lineHeight: 1.1,
                        marginBottom: '0.75rem',
                        color: '#ff2d7b'
                      }}>
                        HOUSEHOLD<br/>MESH
                      </h3>
                      <p style={{ fontSize: '13px', color: '#a0a0b5', lineHeight: 1.6 }}>
                        teepin connects your phone, laptop, gaming pc, and home companion into a private compute mesh. it automatically routes inference tasks across your own devices. nothing leaves your household unless your devices can't handle it.
                      </p>
                    </div>
                  </DecayCard>
                </ElectricBorder>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={150}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ElectricBorder
                  color="#00f0ff"
                  speed={1}
                  chaos={0.12}
                  borderRadius={12}
                  style={{ transform: isMobile ? 'none' : 'translateY(-35px) rotate(2.5deg)' }}
                >
                  <DecayCard
                    width={cardW}
                    height={cardH}
                    image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                    baseFrequency={0.015}
                    seed={42}
                  >
                    <div style={{ color: 'white' }}>
                      <h3 style={{ 
                        fontFamily: 'Nevera, sans-serif', 
                        fontSize: '2.2rem', 
                        lineHeight: 1.1,
                        marginBottom: '0.75rem',
                        color: '#00f0ff'
                      }}>
                        GLOBAL P2P<br/>NETWORK
                      </h3>
                      <p style={{ fontSize: '13px', color: '#a0a0b5', textTransform: 'lowercase', lineHeight: 1.6 }}>
                        when your household mesh hits its limit, teepin orchestrates the handoff to the global network. thousands of other household devices contributing compute and earning for it. teepin manages the routing. every inference still runs inside a tee. no one sees your data. not even the node running it.
                      </p>
                    </div>
                  </DecayCard>
                </ElectricBorder>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={300}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ElectricBorder
                  color="#b8ff00"
                  speed={1}
                  chaos={0.12}
                  borderRadius={12}
                  style={{ transform: isMobile ? 'none' : 'translateY(55px) rotate(-1.5deg)' }}
                >
                  <DecayCard
                    width={cardW}
                    height={cardH}
                    image="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2070&auto=format&fit=crop"
                    baseFrequency={0.02}
                    numOctaves={4}
                  >
                    <div style={{ color: 'white' }}>
                      <h3 style={{ 
                      fontFamily: 'Nevera, sans-serif', 
                        fontSize: '2.2rem', 
                        lineHeight: 1.1,
                        marginBottom: '0.75rem',
                        color: '#b8ff00'
                      }}>
                        TEE<br/>PROTECTED
                      </h3>
                      <p style={{ fontSize: '13px', color: '#a0a0b5', textTransform: 'lowercase', lineHeight: 1.6 }}>
                        every inference runs inside a trusted execution environment. private on your device. private on theirs. hardware-guaranteed.
                      </p>
                    </div>
                  </DecayCard>
                </ElectricBorder>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PRIVACY SECTION — Magic Rings
          ═══════════════════════════════════════ */}
      <section
        style={{
          position: 'relative',
          height: '100vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          background: '#0a0a0f',
        }}
      >
        {/* Top fade */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '120px', background: 'linear-gradient(to bottom, #0a0a0f, transparent)', zIndex: 3, pointerEvents: 'none' }} />
        {/* Bottom fade */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px', background: 'linear-gradient(to bottom, transparent, #0a0a0f)', zIndex: 3, pointerEvents: 'none' }} />

        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <MagicRings
            color="#A855F7"
            colorTwo="#6366F1"
            ringCount={6}
            speed={1}
            attenuation={10}
            lineThickness={2}
            baseRadius={0.35}
            radiusStep={0.1}
            scaleRate={0.1}
            opacity={1}
            blur={0}
            noiseAmount={0.1}
            rotation={0}
            ringGap={1.5}
            fadeIn={0.7}
            fadeOut={0.5}
            followMouse={true}
            mouseInfluence={0.2}
            hoverScale={1.2}
            parallax={0.05}
            clickBurst={true}
          />
        </div>

        {/* Animated Privacy Text */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            pointerEvents: 'none',
          }}
        >
          <ScrollReveal animation="scaleIn" duration={1200}>
            <h2
              style={{
                fontFamily: 'Orbitron, sans-serif',
                fontSize: 'clamp(3rem, 10vw, 8rem)',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '0.4em',
                margin: 0,
                paddingLeft: '0.4em', // Offset for letter spacing centering
              }}
            >
              <GlitchText
                text="PRIVACY"
                speed={80}
                enableShadow={true}
                className="text-white opacity-90"
              />
            </h2>
            <div
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '12px',
                color: '#a0a0b5',
                textTransform: 'uppercase',
                letterSpacing: '0.5em',
                marginTop: '20px',
                opacity: 0.6,
              }}
            >
              ── hardware-level inference ──
            </div>
          </ScrollReveal>
        </div>

        {/* Subtle overlay to blend rings */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at center, transparent 0%, rgba(10,10,15,0.4) 100%)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
      </section>

      {/* ═══════════════════════════════════════
          SYSTEM CAPABILITIES — Grid Motion
          ═══════════════════════════════════════ */}
      <section style={{ position: 'relative', minHeight: isMobile ? '125vh' : '100vh', height: 'auto', overflow: 'hidden', background: '#0a0a0f', padding: isMobile ? '60px 0 80px' : '100px 0' }}>
        {/* Top Transition Gradient */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '200px', background: 'linear-gradient(to bottom, #0a0a0f, transparent)', zIndex: 10, pointerEvents: 'none' }} />

        {/* Full-section noise overlay - static SVG turbulence (zero runtime cost) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 5,
            pointerEvents: 'none',
            opacity: 0.5,
            mixBlendMode: 'overlay',
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
            backgroundSize: '180px 180px',
          }}
        />
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <GridMotion
            items={(() => {
              const layers = [
                { num: '01', color: '#ff2d7b', title: 'HOUSEHOLD MESH', body: 'your devices talk first. phone, laptop, home companion. everything stays inside your home. maximum privacy. zero network dependency.' },
                { num: '02', color: '#00f0ff', title: 'TEEPIN NETWORK', body: 'spills to thousands of teepin nodes. every inference runs inside a tee. you never see their data. they never see yours.' },
                { num: '03', color: '#b8ff00', title: 'ENTERPRISE GPU', body: 'zero gravity h100s and h200s as fallback. enterprise-grade. fully auditable on-chain. no centralized cloud dependency.' },
              ];
              const perRow = isMobile ? 3 : 7;
              const rowCount = isMobile ? 3 : 4;
              const out: React.ReactNode[] = [];
              for (let r = 0; r < rowCount; r++) {
                const layer = layers[r % 3];
                for (let c = 0; c < perRow; c++) {
                  out.push(
                    <div key={`r${r}-c${c}`} style={{ textAlign: 'left', padding: isMobile ? '16px' : '20px' }}>
                      <div style={{ fontFamily: 'JetBrains Mono, monospace', color: layer.color, fontSize: isMobile ? '0.65rem' : '0.7rem', letterSpacing: '0.25em', marginBottom: '6px', opacity: 0.85 }}>LAYER {layer.num}</div>
                      <div style={{ fontFamily: 'Nevera', color: layer.color, fontSize: isMobile ? '1.4rem' : '1.8rem', fontWeight: 900, marginBottom: '8px', lineHeight: 1.1 }}>{layer.title}</div>
                      <p style={{ fontFamily: 'Space Grotesk', color: '#a0a0b5', fontSize: isMobile ? '0.8rem' : '0.9rem', maxWidth: '300px', textTransform: 'lowercase', lineHeight: 1.5 }}>{layer.body}</p>
                    </div>
                  );
                }
              }
              return out;
            })()}
          />
        </div>

        {/* Content Overlay - Much subtler for visibility */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: isMobile ? 'flex-start' : 'center',
            alignItems: 'center',
            paddingTop: isMobile ? '60px' : 0,
            pointerEvents: 'none',
          }}
        >
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 0%, rgba(10,10,15,0.8) 100%)', zIndex: -1 }} />

          {/* Glassmorphism Backdrop for Text */}
          <div
            style={{
              position: 'absolute',
              top: isMobile ? '40px' : '50%',
              transform: isMobile ? 'none' : 'translateY(-50%)',
              width: '100%',
              height: isMobile ? '180px' : '240px',
              background: 'rgba(10, 10, 15, 0.4)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              zIndex: -1,
              maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
              overflow: 'hidden',
            }}
          >
          </div>

          <ScrollReveal animation="fadeUp">
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '11px',
                  color: '#00f0ff',
                  textTransform: 'uppercase',
                  letterSpacing: '0.4em',
                  marginBottom: '24px',
                  opacity: 0.9,
                  textShadow: '0 0 10px rgba(0,240,255,0.5)'
                }}
              >
                // [system_capabilities_active]
              </div>
              <div
                style={{
                  marginBottom: '20px',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <ScrollFloat
                  animationDuration={0.6}
                  ease='cubic-bezier(0.22, 1, 0.36, 1)'
                  stagger={0.12}
                  splitBy="word"
                  textClassName="text-white font-['Nevera']"
                  containerClassName="my-0"
                >
                  THREE LAYERS
                </ScrollFloat>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          GLOBAL NETWORK GLOBE SECTION
          ═══════════════════════════════════════ */}
      <div style={{ position: 'relative', marginTop: '-100px', zIndex: 20 }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '200px', background: 'linear-gradient(to bottom, transparent, #0a0a0f)', transform: 'translateY(-100%)', pointerEvents: 'none' }} />
        <div style={{ background: '#0a0a0f' }}>
          <NetworkGlobeSection />
        </div>
      </div>

      {/* ═══════════════════════════════════════
          NETWORK VISUALIZATION SECTION
          ═══════════════════════════════════════ */}
      <section
        style={{
          position: 'relative',
          padding: '120px 24px',
          overflow: 'hidden',
          minHeight: '500px',
          background: '#0a0a0f',
        }}
      >
        {/* Top fade */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '150px', background: 'linear-gradient(to bottom, #0a0a0f, transparent)', zIndex: 3, pointerEvents: 'none' }} />
        {/* Bottom fade */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '150px', background: 'linear-gradient(to bottom, transparent, #0a0a0f)', zIndex: 3, pointerEvents: 'none' }} />

        <ParticleNetwork
          particleCount={80}
          connectionDistance={130}
          speed={0.4}
          colors={['#ff2d7b', '#00f0ff', '#a855f7', '#b8ff00']}
        />

        {/* Gradient overlay for readability */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at center, rgba(10,10,15,0.3) 0%, rgba(10,10,15,0.85) 100%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <ScrollReveal animation="scaleIn">
            <div
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '10px',
                color: '#b8ff00',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                marginBottom: '16px',
              }}
            >
              — live network mesh —
            </div>
            <h2
              style={{
                fontFamily: 'Orbitron, sans-serif',
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                fontWeight: 800,
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              <GlitchText text="TEEPIN NETWORK" className="text-white" speed={50} enableShadow={false} as="span" />
            </h2>
            <p
              style={{
                fontSize: '15px',
                color: '#a0a0b5',
                lineHeight: 1.7,
                maxWidth: '600px',
                margin: '0 auto 32px',
                textTransform: 'lowercase',
              }}
            >
              every dot is a real device. household nodes and global nodes,
              orchestrated by teepin in real time. compute flows to where
              it's needed. private at every hop.
            </p>
            <NeonButton variant="lime" size="md" comingSoon>
              explore network
            </NeonButton>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA SECTION — Command Terminal
          ═══════════════════════════════════════ */}
      <section style={{ padding: '80px 24px 120px', position: 'relative', background: '#0a0a0f' }}>
        {/* Top fade */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '120px', background: 'linear-gradient(to bottom, #0a0a0f, transparent)', zIndex: 3, pointerEvents: 'none' }} />

        <Aurora
          colors={['#ff2d7b', '#a855f7', '#0a0a2f']}
          speed={0.5}
          opacity={0.1}
        />

        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <ScrollReveal animation="fadeUp">
            <CyberTerminal
              title="deploy_node"
              subtitle="READY"
              accentColor="#b8ff00"
            >
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <h2
                  style={{
                    fontFamily: 'Orbitron, sans-serif',
                    fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                    fontWeight: 800,
                    color: '#fff',
                    textTransform: 'lowercase',
                    marginBottom: '24px',
                  }}
                >
                  ready to join the p2p ai network?
                </h2>

                <div
                  style={{
                    background: 'rgba(0,0,0,0.5)',
                    border: '1px solid rgba(184,255,0,0.15)',
                    borderRadius: '8px',
                    padding: '16px 20px',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '13px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '20px',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ color: '#b8ff00', fontWeight: 700 }}>$</span>
                  <span style={{ color: '#a0a0b5', wordBreak: 'break-word', flex: 1, textAlign: 'left' }}>install teepin on mobile or desktop to join the network.</span>
                  <span style={{ position: 'relative', display: 'inline-block' }}>
                    <button
                      disabled
                      aria-disabled="true"
                      style={{
                        padding: '6px 16px',
                        background: '#b8ff00',
                        color: '#000',
                        border: 'none',
                        fontFamily: 'Orbitron, sans-serif',
                        fontWeight: 700,
                        fontSize: '10px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        cursor: 'not-allowed',
                        clipPath: 'polygon(5px 0, 100% 0, calc(100% - 5px) 100%, 0 100%)',
                        boxShadow: '0 0 15px rgba(184,255,0,0.3)',
                      }}
                    >
                      Download App
                    </button>
                    <span
                      style={{
                        position: 'absolute',
                        top: '-10px',
                        right: '-10px',
                        padding: '1px',
                        background: '#b8ff00',
                        clipPath: 'polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)',
                        filter: 'drop-shadow(0 0 6px rgba(184,255,0,0.6))',
                        whiteSpace: 'nowrap',
                        pointerEvents: 'none',
                        zIndex: 2,
                      }}
                    >
                      <span
                        style={{
                          display: 'inline-block',
                          padding: '3px 14px',
                          background: '#0a0a0f',
                          color: '#b8ff00',
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '9px',
                          letterSpacing: '0.15em',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          clipPath: 'polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)',
                        }}
                      >
                        coming soon
                      </span>
                    </span>
                  </span>
                </div>

                <p
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '10px',
                    color: '#555566',
                    textTransform: 'lowercase',
                  }}
                >
                  android · ios · laptops · gaming pcs
                </p>
              </div>
            </CyberTerminal>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
