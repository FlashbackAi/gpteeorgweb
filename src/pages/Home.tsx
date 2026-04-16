import { GlitchText } from '../components/reactbits/GlitchText';
import { SplitText } from '../components/reactbits/SplitText';
import Dither from '../components/reactbits/Dither';
import { Aurora } from '../components/reactbits/Aurora';
import FuzzyText from '../components/FuzzyText';
import GridMotion from '../components/reactbits/GridMotion';
import ScrollFloat from '../components/reactbits/ScrollFloat';
import Noise from '../components/reactbits/Noise';
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
            <div style={{ pointerEvents: 'auto', marginBottom: '40px' }}>
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
              {/* Angled Border Glow */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-1px',
                  background: 'linear-gradient(90deg, transparent, rgba(255,45,123,0.3), rgba(0,240,255,0.3), transparent)',
                  clipPath: 'polygon(5% 0, 95% 0, 100% 50%, 95% 100%, 5% 100%, 0 50%)',
                  zIndex: -1,
                }}
              />
              
              <div
                style={{
                  background: 'rgba(10, 10, 15, 0.6)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,45,123,0.15)',
                  clipPath: 'polygon(5% 0, 95% 0, 100% 50%, 95% 100%, 5% 100%, 0 50%)',
                  padding: '20px 60px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '20px',
                  position: 'relative',
                }}
              >
                <StatsCounter value={4921} label="Active Nodes" color="#ff2d7b" suffix="+" />
                <StatsCounter value={60} label="Countries" color="#00f0ff" suffix="+" />
                <StatsCounter value={99} label="Uptime" color="#b8ff00" suffix="%" prefix="" />
                <StatsCounter value={12} label="Models Live" color="#a855f7" />
              </div>
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
                decentralized stack
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
                  fontSize="clamp(2rem, 5vw, 4rem)"
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
                every component of gptee is engineered for decentralization, privacy, and scale.
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
                  style={{ transform: 'translateY(40px) rotate(-3deg)' }}
                >
                  <DecayCard 
                    width={340} 
                    height={460} 
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
                        P2P<br/>MESH
                      </h3>
                      <p style={{ fontSize: '13px', color: '#a0a0b5', textTransform: 'lowercase', lineHeight: 1.6 }}>
                        decentralized infrastructure where nodes contribute compute power directly.
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
                  style={{ transform: 'translateY(-35px) rotate(2.5deg)' }}
                >
                  <DecayCard 
                    width={340} 
                    height={460} 
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
                        GLOBAL<br/>NODES
                      </h3>
                      <p style={{ fontSize: '13px', color: '#a0a0b5', textTransform: 'lowercase', lineHeight: 1.6 }}>
                        thousands of community-operated nodes across 60+ countries.
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
                  style={{ transform: 'translateY(55px) rotate(-1.5deg)' }}
                >
                  <DecayCard 
                    width={340} 
                    height={460} 
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
                        ZK<br/>PROOF
                      </h3>
                      <p style={{ fontSize: '13px', color: '#a0a0b5', textTransform: 'lowercase', lineHeight: 1.6 }}>
                        zero-knowledge encrypted inference ensuring total data privacy.
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
          SYSTEM CAPABILITIES — Grid Motion
          ═══════════════════════════════════════ */}
      <section style={{ position: 'relative', minHeight: '100vh', height: 'auto', overflow: 'hidden', background: '#0a0a0f', padding: '100px 0' }}>
        {/* Top Transition Gradient */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '200px', background: 'linear-gradient(to bottom, #0a0a0f, transparent)', zIndex: 10, pointerEvents: 'none' }} />
        
        {/* Full-section noise overlay - subtle base layer */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 5, pointerEvents: 'none' }}>
          <Noise 
            patternRefreshInterval={1} 
            patternAlpha={25} 
            patternScaleX={2} 
            patternScaleY={2} 
            patternSize={250} 
          />
        </div>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <GridMotion 
            items={[
              // Row 1: Privacy Theme (Repeated)
              <div key="p1" style={{ textAlign: 'left', padding: '20px' }}>
                <div style={{ fontFamily: 'Nevera', color: '#ff2d7b', fontSize: '1.8rem', fontWeight: 900, marginBottom: '8px' }}>PRIVATE BY DEFAULT</div>
                <p style={{ fontFamily: 'Space Grotesk', color: '#a0a0b5', fontSize: '0.9rem', maxWidth: '300px', textTransform: 'lowercase' }}>end-to-end encrypted requests ensure your data never touches a central server.</p>
              </div>,
              <div key="p2" style={{ textAlign: 'left', padding: '20px' }}>
                <div style={{ fontFamily: 'Nevera', color: '#ff2d7b', fontSize: '1.8rem', fontWeight: 900, marginBottom: '8px' }}>PRIVATE BY DEFAULT</div>
                <p style={{ fontFamily: 'Space Grotesk', color: '#a0a0b5', fontSize: '0.9rem', maxWidth: '300px', textTransform: 'lowercase' }}>end-to-end encrypted requests ensure your data never touches a central server.</p>
              </div>,
              <div key="p3" style={{ textAlign: 'left', padding: '20px' }}>
                <div style={{ fontFamily: 'Nevera', color: '#ff2d7b', fontSize: '1.8rem', fontWeight: 900, marginBottom: '8px' }}>PRIVATE BY DEFAULT</div>
                <p style={{ fontFamily: 'Space Grotesk', color: '#a0a0b5', fontSize: '0.9rem', maxWidth: '300px', textTransform: 'lowercase' }}>end-to-end encrypted requests ensure your data never touches a central server.</p>
              </div>,
              <div key="p4" style={{ textAlign: 'left', padding: '20px' }}>
                <div style={{ fontFamily: 'Nevera', color: '#ff2d7b', fontSize: '1.8rem', fontWeight: 900, marginBottom: '8px' }}>PRIVATE BY DEFAULT</div>
                <p style={{ fontFamily: 'Space Grotesk', color: '#a0a0b5', fontSize: '0.9rem', maxWidth: '300px', textTransform: 'lowercase' }}>end-to-end encrypted requests ensure your data never touches a central server.</p>
              </div>,
              <div key="p5" style={{ textAlign: 'left', padding: '20px' }}>
                <div style={{ fontFamily: 'Nevera', color: '#ff2d7b', fontSize: '1.8rem', fontWeight: 900, marginBottom: '8px' }}>PRIVATE BY DEFAULT</div>
                <p style={{ fontFamily: 'Space Grotesk', color: '#a0a0b5', fontSize: '0.9rem', maxWidth: '300px', textTransform: 'lowercase' }}>end-to-end encrypted requests ensure your data never touches a central server.</p>
              </div>,
              <div key="p6" style={{ textAlign: 'left', padding: '20px' }}>
                <div style={{ fontFamily: 'Nevera', color: '#ff2d7b', fontSize: '1.8rem', fontWeight: 900, marginBottom: '8px' }}>PRIVATE BY DEFAULT</div>
                <p style={{ fontFamily: 'Space Grotesk', color: '#a0a0b5', fontSize: '0.9rem', maxWidth: '300px', textTransform: 'lowercase' }}>end-to-end encrypted requests ensure your data never touches a central server.</p>
              </div>,
              <div key="p7" style={{ textAlign: 'left', padding: '20px' }}>
                <div style={{ fontFamily: 'Nevera', color: '#ff2d7b', fontSize: '1.8rem', fontWeight: 900, marginBottom: '8px' }}>PRIVATE BY DEFAULT</div>
                <p style={{ fontFamily: 'Space Grotesk', color: '#a0a0b5', fontSize: '0.9rem', maxWidth: '300px', textTransform: 'lowercase' }}>end-to-end encrypted requests ensure your data never touches a central server.</p>
              </div>,
              
              // Row 2: Efficiency Theme (Repeated)
              <div key="e1" style={{ textAlign: 'left', padding: '20px' }}>
                <div style={{ fontFamily: 'Nevera', color: '#00f0ff', fontSize: '1.8rem', fontWeight: 900, marginBottom: '8px' }}>HIGH EFFICIENCY</div>
                <p style={{ fontFamily: 'Space Grotesk', color: '#a0a0b5', fontSize: '0.9rem', maxWidth: '300px', textTransform: 'lowercase' }}>optimized model sharding allows gptee to run effectively even on consumer-grade hardware.</p>
              </div>,
              <div key="e2" style={{ textAlign: 'left', padding: '20px' }}>
                <div style={{ fontFamily: 'Nevera', color: '#00f0ff', fontSize: '1.8rem', fontWeight: 900, marginBottom: '8px' }}>HIGH EFFICIENCY</div>
                <p style={{ fontFamily: 'Space Grotesk', color: '#a0a0b5', fontSize: '0.9rem', maxWidth: '300px', textTransform: 'lowercase' }}>optimized model sharding allows gptee to run effectively even on consumer-grade hardware.</p>
              </div>,
              <div key="e3" style={{ textAlign: 'left', padding: '20px' }}>
                <div style={{ fontFamily: 'Nevera', color: '#00f0ff', fontSize: '1.8rem', fontWeight: 900, marginBottom: '8px' }}>HIGH EFFICIENCY</div>
                <p style={{ fontFamily: 'Space Grotesk', color: '#a0a0b5', fontSize: '0.9rem', maxWidth: '300px', textTransform: 'lowercase' }}>optimized model sharding allows gptee to run effectively even on consumer-grade hardware.</p>
              </div>,
              <div key="e4" style={{ textAlign: 'left', padding: '20px' }}>
                <div style={{ fontFamily: 'Nevera', color: '#00f0ff', fontSize: '1.8rem', fontWeight: 900, marginBottom: '8px' }}>HIGH EFFICIENCY</div>
                <p style={{ fontFamily: 'Space Grotesk', color: '#a0a0b5', fontSize: '0.9rem', maxWidth: '300px', textTransform: 'lowercase' }}>optimized model sharding allows gptee to run effectively even on consumer-grade hardware.</p>
              </div>,
              <div key="e5" style={{ textAlign: 'left', padding: '20px' }}>
                <div style={{ fontFamily: 'Nevera', color: '#00f0ff', fontSize: '1.8rem', fontWeight: 900, marginBottom: '8px' }}>HIGH EFFICIENCY</div>
                <p style={{ fontFamily: 'Space Grotesk', color: '#a0a0b5', fontSize: '0.9rem', maxWidth: '300px', textTransform: 'lowercase' }}>optimized model sharding allows gptee to run effectively even on consumer-grade hardware.</p>
              </div>,
              <div key="e6" style={{ textAlign: 'left', padding: '20px' }}>
                <div style={{ fontFamily: 'Nevera', color: '#00f0ff', fontSize: '1.8rem', fontWeight: 900, marginBottom: '8px' }}>HIGH EFFICIENCY</div>
                <p style={{ fontFamily: 'Space Grotesk', color: '#a0a0b5', fontSize: '0.9rem', maxWidth: '300px', textTransform: 'lowercase' }}>optimized model sharding allows gptee to run effectively even on consumer-grade hardware.</p>
              </div>,
              <div key="e7" style={{ textAlign: 'left', padding: '20px' }}>
                <div style={{ fontFamily: 'Nevera', color: '#00f0ff', fontSize: '1.8rem', fontWeight: 900, marginBottom: '8px' }}>HIGH EFFICIENCY</div>
                <p style={{ fontFamily: 'Space Grotesk', color: '#a0a0b5', fontSize: '0.9rem', maxWidth: '300px', textTransform: 'lowercase' }}>optimized model sharding allows gptee to run effectively even on consumer-grade hardware.</p>
              </div>,

              // Row 3: Scale Theme (Repeated)
              <div key="s1" style={{ textAlign: 'left', padding: '20px' }}>
                <div style={{ fontFamily: 'Nevera', color: '#b8ff00', fontSize: '1.8rem', fontWeight: 900, marginBottom: '8px' }}>GLOBAL SCALE</div>
                <p style={{ fontFamily: 'Space Grotesk', color: '#a0a0b5', fontSize: '0.9rem', maxWidth: '300px', textTransform: 'lowercase' }}>nodes distributed across 60+ countries ensure low latency and high availability.</p>
              </div>,
              <div key="s2" style={{ textAlign: 'left', padding: '20px' }}>
                <div style={{ fontFamily: 'Nevera', color: '#b8ff00', fontSize: '1.8rem', fontWeight: 900, marginBottom: '8px' }}>GLOBAL SCALE</div>
                <p style={{ fontFamily: 'Space Grotesk', color: '#a0a0b5', fontSize: '0.9rem', maxWidth: '300px', textTransform: 'lowercase' }}>nodes distributed across 60+ countries ensure low latency and high availability.</p>
              </div>,
              <div key="s3" style={{ textAlign: 'left', padding: '20px' }}>
                <div style={{ fontFamily: 'Nevera', color: '#b8ff00', fontSize: '1.8rem', fontWeight: 900, marginBottom: '8px' }}>GLOBAL SCALE</div>
                <p style={{ fontFamily: 'Space Grotesk', color: '#a0a0b5', fontSize: '0.9rem', maxWidth: '300px', textTransform: 'lowercase' }}>nodes distributed across 60+ countries ensure low latency and high availability.</p>
              </div>,
              <div key="s4" style={{ textAlign: 'left', padding: '20px' }}>
                <div style={{ fontFamily: 'Nevera', color: '#b8ff00', fontSize: '1.8rem', fontWeight: 900, marginBottom: '8px' }}>GLOBAL SCALE</div>
                <p style={{ fontFamily: 'Space Grotesk', color: '#a0a0b5', fontSize: '0.9rem', maxWidth: '300px', textTransform: 'lowercase' }}>nodes distributed across 60+ countries ensure low latency and high availability.</p>
              </div>,
              <div key="s5" style={{ textAlign: 'left', padding: '20px' }}>
                <div style={{ fontFamily: 'Nevera', color: '#b8ff00', fontSize: '1.8rem', fontWeight: 900, marginBottom: '8px' }}>GLOBAL SCALE</div>
                <p style={{ fontFamily: 'Space Grotesk', color: '#a0a0b5', fontSize: '0.9rem', maxWidth: '300px', textTransform: 'lowercase' }}>nodes distributed across 60+ countries ensure low latency and high availability.</p>
              </div>,
              <div key="s6" style={{ textAlign: 'left', padding: '20px' }}>
                <div style={{ fontFamily: 'Nevera', color: '#b8ff00', fontSize: '1.8rem', fontWeight: 900, marginBottom: '8px' }}>GLOBAL SCALE</div>
                <p style={{ fontFamily: 'Space Grotesk', color: '#a0a0b5', fontSize: '0.9rem', maxWidth: '300px', textTransform: 'lowercase' }}>nodes distributed across 60+ countries ensure low latency and high availability.</p>
              </div>,
              <div key="s7" style={{ textAlign: 'left', padding: '20px' }}>
                <div style={{ fontFamily: 'Nevera', color: '#b8ff00', fontSize: '1.8rem', fontWeight: 900, marginBottom: '8px' }}>GLOBAL SCALE</div>
                <p style={{ fontFamily: 'Space Grotesk', color: '#a0a0b5', fontSize: '0.9rem', maxWidth: '300px', textTransform: 'lowercase' }}>nodes distributed across 60+ countries ensure low latency and high availability.</p>
              </div>,

              // Row 4: Network Theme (Repeated)
              <div key="n1" style={{ textAlign: 'left', padding: '20px' }}>
                <div style={{ fontFamily: 'Nevera', color: '#a855f7', fontSize: '1.8rem', fontWeight: 900, marginBottom: '8px' }}>GPTEE.ORG</div>
                <p style={{ fontFamily: 'Space Grotesk', color: '#a0a0b5', fontSize: '0.9rem', maxWidth: '300px', textTransform: 'lowercase' }}>the leading decentralized p2p ai network for private inference.</p>
              </div>,
              <div key="n2" style={{ textAlign: 'left', padding: '20px' }}>
                <div style={{ fontFamily: 'Nevera', color: '#a855f7', fontSize: '1.8rem', fontWeight: 900, marginBottom: '8px' }}>GPTEE.ORG</div>
                <p style={{ fontFamily: 'Space Grotesk', color: '#a0a0b5', fontSize: '0.9rem', maxWidth: '300px', textTransform: 'lowercase' }}>the leading decentralized p2p ai network for private inference.</p>
              </div>,
              <div key="n3" style={{ textAlign: 'left', padding: '20px' }}>
                <div style={{ fontFamily: 'Nevera', color: '#a855f7', fontSize: '1.8rem', fontWeight: 900, marginBottom: '8px' }}>GPTEE.ORG</div>
                <p style={{ fontFamily: 'Space Grotesk', color: '#a0a0b5', fontSize: '0.9rem', maxWidth: '300px', textTransform: 'lowercase' }}>the leading decentralized p2p ai network for private inference.</p>
              </div>,
              <div key="n4" style={{ textAlign: 'left', padding: '20px' }}>
                <div style={{ fontFamily: 'Nevera', color: '#a855f7', fontSize: '1.8rem', fontWeight: 900, marginBottom: '8px' }}>GPTEE.ORG</div>
                <p style={{ fontFamily: 'Space Grotesk', color: '#a0a0b5', fontSize: '0.9rem', maxWidth: '300px', textTransform: 'lowercase' }}>the leading decentralized p2p ai network for private inference.</p>
              </div>,
              <div key="n5" style={{ textAlign: 'left', padding: '20px' }}>
                <div style={{ fontFamily: 'Nevera', color: '#a855f7', fontSize: '1.8rem', fontWeight: 900, marginBottom: '8px' }}>GPTEE.ORG</div>
                <p style={{ fontFamily: 'Space Grotesk', color: '#a0a0b5', fontSize: '0.9rem', maxWidth: '300px', textTransform: 'lowercase' }}>the leading decentralized p2p ai network for private inference.</p>
              </div>,
              <div key="n6" style={{ textAlign: 'left', padding: '20px' }}>
                <div style={{ fontFamily: 'Nevera', color: '#a855f7', fontSize: '1.8rem', fontWeight: 900, marginBottom: '8px' }}>GPTEE.ORG</div>
                <p style={{ fontFamily: 'Space Grotesk', color: '#a0a0b5', fontSize: '0.9rem', maxWidth: '300px', textTransform: 'lowercase' }}>the leading decentralized p2p ai network for private inference.</p>
              </div>,
              <div key="n7" style={{ textAlign: 'left', padding: '20px' }}>
                <div style={{ fontFamily: 'Nevera', color: '#a855f7', fontSize: '1.8rem', fontWeight: 900, marginBottom: '8px' }}>GPTEE.ORG</div>
                <p style={{ fontFamily: 'Space Grotesk', color: '#a0a0b5', fontSize: '0.9rem', maxWidth: '300px', textTransform: 'lowercase' }}>the leading decentralized p2p ai network for private inference.</p>
              </div>
            ]}
          />
        </div>

        {/* Content Overlay - Much subtler for visibility */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 0%, rgba(10,10,15,0.8) 100%)', zIndex: -1 }} />
          
          {/* Glassmorphism Backdrop for Text */}
          <div 
            style={{
              position: 'absolute',
              width: '100%',
              height: '240px',
              background: 'rgba(10, 10, 15, 0.4)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              zIndex: -1,
              maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
              overflow: 'hidden'
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
                  animationDuration={1}
                  ease='power2.out'
                  scrollStart='top 90%'
                  scrollEnd='top 50%'
                  stagger={0.03}
                  textClassName="text-white font-['Nevera']"
                  containerClassName="my-0"
                >
                  THREE PILLARS
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
