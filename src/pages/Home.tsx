
import { GlitchText } from '../components/reactbits/GlitchText';
import { SplitText } from '../components/reactbits/SplitText';
import { StarBorder } from '../components/reactbits/StarBorder';
import { LetterGlitch } from '../components/reactbits/LetterGlitch';
import Dither from '../components/reactbits/Dither';
import { Aurora } from '../components/reactbits/Aurora';
import MagicRings from '../components/reactbits/MagicRings';
import { ParticleNetwork } from '../components/ParticleNetwork';
import { HoloCard } from '../components/HoloCard';
import { CyberTerminal } from '../components/CyberTerminal';
import { Terminal } from '../components/ui/terminal';
import { NeonButton } from '../components/NeonButton';
import { ScrollReveal } from '../components/ScrollReveal';
import { StatsCounter } from '../components/StatsCounter';

export const Home = () => {

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
                  text="gptee"
                  className="text-cyber-magenta text-3d-magenta"
                  speed={35}
                  as="span"
                />
                <span
                  style={{
                    color: '#00f0ff',
                    textShadow: '0 0 20px rgba(0,240,255,0.5), 0 0 40px rgba(0,240,255,0.2)',
                  }}
                >
                  .org
                </span>
              </h1>
              <SplitText
                text="gpt for everyone, free"
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
                a decentralized p2p ai network enabling private, encrypted inference
                on mobile devices. run your own llm or contribute compute to the mesh.
              </p>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal animation="fadeUp" delay={900}>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', pointerEvents: 'auto', justifyContent: 'flex-start' }}>
                <NeonButton variant="magenta" size="lg">
                  initialize node
                </NeonButton>
                <NeonButton variant="cyan" size="lg">
                  network explorer
                </NeonButton>
              </div>
            </ScrollReveal>
          </div>

          {/* Bottom: Terminal */}
          <ScrollReveal animation="fadeUp" delay={600} className="w-full max-w-[900px]">
            <div style={{ pointerEvents: 'auto' }}>
              <Terminal
              commands={[
                "npx gptee@latest init",
                "npm install motion",
                "npx gptee@latest compile",
                "establishing p2p mesh connection...",
                "connecting to genesis-node-01...",
                "establishing shard replication...",
                "Start P2P Node",
              ]}
              outputs={{
                0: [
                  "✔ Distributed network checks passed.",
                  "✔ Created components.json",
                  "✔ Initialized GPTEE node.",
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
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
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
      </section>

      {/* ═══════════════════════════════════════
          STATS BAR — Floating Glassmorphism
          ═══════════════════════════════════════ */}
      <section
        style={{
          position: 'relative',
          padding: '0 24px',
          marginTop: '-40px',
          zIndex: 10,
        }}
      >
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            background: 'rgba(18, 16, 26, 0.7)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,45,123,0.1)',
            borderRadius: '12px',
            padding: '20px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '16px',
          }}
        >
          <StatsCounter value={4921} label="Active Nodes" color="#ff2d7b" suffix="+" />
          <StatsCounter value={60} label="Countries" color="#00f0ff" suffix="+" />
          <StatsCounter value={99} label="Uptime" color="#b8ff00" suffix="%" prefix="" />
          <StatsCounter value={12} label="Models Live" color="#a855f7" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FEATURES SECTION — HoloCards
          ═══════════════════════════════════════ */}
      <section style={{ padding: '120px 24px', position: 'relative' }}>
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
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <div
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '10px',
                  color: '#ff2d7b',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  marginBottom: '12px',
                }}
              >
                ── core infrastructure ──
              </div>
              <h2
                style={{
                  fontFamily: 'Orbitron, sans-serif',
                  fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  background: 'linear-gradient(135deg, #ff2d7b, #00f0ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '12px',
                }}
              >
                <SplitText
                  text="Built Different"
                  splitBy="chars"
                  animation="perspective"
                  trigger="scroll"
                  staggerDelay={28}
                />
              </h2>
              <p style={{ color: '#888899', fontSize: '14px', maxWidth: '500px', margin: '0 auto', textTransform: 'lowercase' }}>
                every component of gptee is engineered for decentralization, privacy, and scale.
              </p>
            </div>
          </ScrollReveal>

          {/* Feature Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
            }}
          >
            <ScrollReveal animation="fadeUp" delay={0}>
              <HoloCard
                icon={
                  <svg width="40" height="40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                }
                title="decentralized ai infrastructure"
                description="operate on a peer-to-peer mesh where thousands of nodes contribute compute power to run massive ai models without central authority."
                moduleId="001_core_infra"
                link="/p2p-network"
                linkText="read protocol"
                accentColor="#ff2d7b"
              />
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={150}>
              <HoloCard
                icon={
                  <svg width="40" height="40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 0 0 014 0z" />
                  </svg>
                }
                title="community powered"
                description="every node is owned and operated by individuals like you. no corporate gatekeepers, no proprietary black boxes. pure open-source mesh."
                moduleId="002_community"
                accentColor="#00f0ff"
              />
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
              ── zero knowledge inference ──
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
          BENEFITS SECTION — 3 Pillars
          ═══════════════════════════════════════ */}
      <section style={{ padding: '80px 24px', position: 'relative' }}>
        {/* Subtle background */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.3 }}>
          <LetterGlitch
            glitchColors={['#ff2d7b20', '#00f0ff15', '#a855f710']}
            glitchSpeed={100}
            smooth={true}
          />
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <ScrollReveal animation="fadeUp">
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <div
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '10px',
                  color: '#00f0ff',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  marginBottom: '12px',
                }}
              >
                ── system capabilities ──
              </div>
              <h2
                style={{
                  fontFamily: 'Orbitron, sans-serif',
                  fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  background: 'linear-gradient(135deg, #00f0ff, #a855f7)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Three Pillars
              </h2>
            </div>
          </ScrollReveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {[
              {
                icon: (
                  <svg width="36" height="36" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
                title: 'private by default',
                desc: 'end-to-end encrypted requests ensure your data never touches a central server in plaintext. zero-knowledge inference.',
                moduleId: 'privacy_001',
                color: '#ff2d7b',
              },
              {
                icon: (
                  <svg width="36" height="36" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'high efficiency',
                desc: 'optimized model sharding allows gptee to run effectively even on consumer-grade hardware. mobile-first architecture.',
                moduleId: 'efficiency_002',
                color: '#00f0ff',
              },
              {
                icon: (
                  <svg width="36" height="36" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'global scale',
                desc: 'nodes distributed across 60+ countries ensure low latency and high availability worldwide. resilient mesh topology.',
                moduleId: 'scale_003',
                color: '#a855f7',
              },
            ].map((item, i) => (
              <ScrollReveal key={i} animation="fadeUp" delay={i * 150}>
                <StarBorder color={item.color} speed="6s">
                  <div
                    style={{
                      padding: '32px',
                      background: 'rgba(10,10,15,0.9)',
                      borderRadius: '12px',
                      minHeight: '220px',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <div
                      style={{
                        color: item.color,
                        marginBottom: '16px',
                        filter: `drop-shadow(0 0 8px ${item.color}50)`,
                      }}
                    >
                      {item.icon}
                    </div>
                    <h3
                      style={{
                        fontFamily: 'Orbitron, sans-serif',
                        fontSize: '14px',
                        fontWeight: 700,
                        color: '#fff',
                        textTransform: 'lowercase',
                        marginBottom: '12px',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '13px',
                        lineHeight: 1.7,
                        color: '#a0a0b5',
                        textTransform: 'lowercase',
                        flex: 1,
                      }}
                    >
                      {item.desc}
                    </p>
                    <div
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '9px',
                        color: '#555566',
                        marginTop: '16px',
                        textTransform: 'lowercase',
                      }}
                    >
                      module_id: <span style={{ color: item.color }}>{item.moduleId}</span>
                    </div>
                  </div>
                </StarBorder>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          NETWORK VISUALIZATION SECTION
          ═══════════════════════════════════════ */}
      <section
        style={{
          position: 'relative',
          padding: '120px 24px',
          overflow: 'hidden',
          minHeight: '500px',
        }}
      >
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
              ── live network mesh ──
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
              <GlitchText text="THE MESH IS ALIVE" className="text-white" speed={50} enableShadow={false} as="span" />
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
              every particle you see represents a real node in the gptee network.
              move your cursor to interact with the decentralized mesh topology.
            </p>
            <NeonButton variant="lime" size="md">
              explore network
            </NeonButton>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA SECTION — Command Terminal
          ═══════════════════════════════════════ */}
      <section style={{ padding: '80px 24px 120px', position: 'relative' }}>
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
                  ready to join the network?
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
                  <span style={{ color: '#a0a0b5', wordBreak: 'break-all' }}>curl -sSL https://get.gptee.org | bash</span>
                  <button
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
                      cursor: 'pointer',
                      clipPath: 'polygon(5px 0, 100% 0, calc(100% - 5px) 100%, 0 100%)',
                      boxShadow: '0 0 15px rgba(184,255,0,0.3)',
                    }}
                  >
                    Execute
                  </button>
                </div>

                <p
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '10px',
                    color: '#555566',
                    textTransform: 'lowercase',
                  }}
                >
                  supports linux, macos, and windows (wsl2)
                </p>
              </div>
            </CyberTerminal>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
