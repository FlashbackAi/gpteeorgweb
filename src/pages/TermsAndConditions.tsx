import { CyberTerminal } from '../components/CyberTerminal';
import { ScrollReveal } from '../components/ScrollReveal';
import { NeonButton } from '../components/NeonButton';

const SectionTitle = ({ children, color = '#ff2d7b' }: { children: string; color?: string }) => (
  <h2 style={{
    fontFamily: 'Orbitron, sans-serif',
    fontSize: '16px',
    fontWeight: 700,
    color,
    marginBottom: '16px',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  }}>
    {children}
  </h2>
);

const LegalText = ({ children }: { children: React.ReactNode }) => (
  <div style={{ color: '#a0a0b5', fontSize: '13px', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '12px' }}>
    {children}
  </div>
);

const ListItem = ({ allowed, children }: { allowed: boolean; children: string }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '12px' }}>
    <span style={{ color: allowed ? '#b8ff00' : '#ff5f56', fontWeight: 700, flexShrink: 0 }}>
      {allowed ? '✓' : '✗'}
    </span>
    <span style={{ color: '#a0a0b5' }}>{children}</span>
  </div>
);

const BulletItem = ({ children }: { children: string }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '12px' }}>
    <span style={{ color: '#ff2d7b', flexShrink: 0 }}>•</span>
    <span style={{ color: '#a0a0b5' }}>{children}</span>
  </div>
);

export const TermsAndConditions = () => {
  return (
    <div style={{ paddingTop: '100px', position: 'relative', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px' }} className="lg:grid-cols-4">

          {/* Sidebar */}
          <div className="lg:col-span-1 hidden lg:block">
            <div style={{ position: 'sticky', top: '120px' }}>
              <div style={{
                background: 'rgba(18,16,26,0.7)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(0,240,255,0.1)',
                borderRadius: '8px',
                padding: '20px',
              }}>
                <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '9px', color: '#00f0ff', fontWeight: 700, letterSpacing: '0.15em', marginBottom: '16px' }}>
                  DIRECTORY
                </div>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {[
                    { href: '#terms', label: '01 TERMS_OF_SERVICE', color: '#ff2d7b' },
                    { href: '#acceptable-use', label: '02 ACCEPTABLE_USE', color: '#00f0ff' },
                    { href: '#node-operators', label: '03 NODE_OPERATORS', color: '#a855f7' },
                    { href: '#liability', label: '04 LIABILITY', color: '#b8ff00' },
                  ].map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '10px',
                        color: i === 0 ? link.color : '#888899',
                        textDecoration: 'none',
                        padding: '4px 0',
                        paddingLeft: i === 0 ? '0' : '8px',
                        borderLeft: i === 0 ? `2px solid ${link.color}` : '2px solid transparent',
                        transition: 'color 0.2s ease',
                      }}
                      onMouseEnter={(e) => { (e.target as HTMLElement).style.color = link.color; }}
                      onMouseLeave={(e) => { if (i !== 0) (e.target as HTMLElement).style.color = '#888899'; }}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <ScrollReveal animation="fadeUp">
              <CyberTerminal title="GPTEE_TERMS_V1.0.SH" subtitle="READ-ONLY" accentColor="#00f0ff">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>

                  <section id="terms">
                    <SectionTitle>01 // Terms of Service</SectionTitle>
                    <LegalText>
                      <p>
                        <span style={{ color: '#ff2d7b', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px' }}>101</span>{' '}
                        By accessing the <span style={{ color: '#ff2d7b' }}>gptee.org network</span>, you agree to abide by
                        the digital brutalist ethics of decentralized compute.
                      </p>
                    </LegalText>
                  </section>

                  <section id="acceptable-use">
                    <SectionTitle color="#00f0ff">02 // Acceptable Use Matrix</SectionTitle>
                    <LegalText>
                      <p>You may <span style={{ color: '#ff5f56' }}>NOT</span> use GPTEE for:</p>
                      <div style={{
                        background: 'rgba(0,0,0,0.3)',
                        border: '1px solid rgba(255,95,86,0.15)',
                        borderRadius: '6px',
                        padding: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                      }}>
                        <ListItem allowed={false}>Generating malware, exploits, or harmful code</ListItem>
                        <ListItem allowed={false}>Mass surveillance or privacy-violating activities</ListItem>
                        <ListItem allowed={false}>Disseminating illegal content or hate speech</ListItem>
                        <ListItem allowed={false}>DDoS attacks or network disruption</ListItem>
                      </div>

                      <p style={{ marginTop: '12px' }}>You <span style={{ color: '#b8ff00' }}>MAY</span> use GPTEE for:</p>
                      <div style={{
                        background: 'rgba(0,0,0,0.3)',
                        border: '1px solid rgba(184,255,0,0.15)',
                        borderRadius: '6px',
                        padding: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                      }}>
                        <ListItem allowed={true}>Private AI inference and research</ListItem>
                        <ListItem allowed={true}>Educational purposes and learning</ListItem>
                        <ListItem allowed={true}>Creative writing and content generation</ListItem>
                        <ListItem allowed={true}>Code development and debugging</ListItem>
                      </div>
                    </LegalText>
                  </section>

                  <section id="node-operators">
                    <SectionTitle color="#a855f7">03 // Node Operator Responsibilities</SectionTitle>
                    <LegalText>
                      <p>By running a GPTEE node, you agree to:</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '8px' }}>
                        <BulletItem>Maintain minimum uptime of 95% for provider nodes</BulletItem>
                        <BulletItem>Process inference requests in good faith</BulletItem>
                        <BulletItem>Not tamper with encrypted data streams</BulletItem>
                        <BulletItem>Report security vulnerabilities responsibly</BulletItem>
                      </div>
                    </LegalText>
                  </section>

                  <section>
                    <SectionTitle color="#b8ff00">04 // Compute Rewards</SectionTitle>
                    <LegalText>
                      <p>
                        Provider nodes earn rewards based on tokens generated and uptime. Rewards are
                        distributed via smart contracts on the Solana blockchain.
                      </p>
                      <div style={{
                        background: 'rgba(0,0,0,0.4)',
                        border: '1px solid rgba(184,255,0,0.1)',
                        borderRadius: '6px',
                        padding: '16px',
                      }}>
                        <div style={{ color: '#b8ff00', fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>REWARD_CALCULATION:</div>
                        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: '#fff' }}>
                          reward = (tokens_generated × 0.001) + (uptime_bonus × 0.5)
                        </div>
                      </div>
                    </LegalText>
                  </section>

                  <section id="liability">
                    <SectionTitle>05 // Liability Limitations</SectionTitle>
                    <LegalText>
                      <p>GPTEE.ORG is provided "AS IS" without warranties. We are not liable for:</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '8px' }}>
                        <BulletItem>Network downtime or service interruptions</BulletItem>
                        <BulletItem>Loss of rewards due to node misconfiguration</BulletItem>
                        <BulletItem>Content generated by the AI models</BulletItem>
                        <BulletItem>Actions of third-party node operators</BulletItem>
                      </div>
                    </LegalText>
                  </section>

                  <section>
                    <SectionTitle color="#00f0ff">06 // Termination</SectionTitle>
                    <LegalText>
                      <p>
                        We reserve the right to ban nodes that violate these terms. Banned nodes
                        will be blacklisted from the DHT and forfeit all pending rewards.
                      </p>
                    </LegalText>
                  </section>

                  <section>
                    <SectionTitle color="#a855f7">07 // Governing Law</SectionTitle>
                    <LegalText>
                      <p>
                        These terms are governed by the laws of decentralized autonomous organizations
                        and international internet law where applicable.
                      </p>
                    </LegalText>
                  </section>

                  {/* Footer */}
                  <div style={{
                    borderTop: '1px solid rgba(0,240,255,0.1)',
                    paddingTop: '20px',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '10px',
                  }}>
                    <div style={{ color: '#00f0ff', marginBottom: '4px' }}>[EOF-TERMS_OF_SERVICE]</div>
                    <div style={{ color: '#555566' }}>Last Updated: March 28, 2026 | Version: 1.0.4</div>
                  </div>
                </div>
              </CyberTerminal>
            </ScrollReveal>

            {/* Dispute Card */}
            <ScrollReveal animation="fadeUp" delay={200}>
              <div style={{
                marginTop: '32px',
                background: 'rgba(18,16,26,0.7)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(168,85,247,0.15)',
                borderRadius: '8px',
                padding: '28px',
              }}>
                <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '14px', color: '#a855f7', fontWeight: 700, marginBottom: '12px' }}>
                  ⚖ DISPUTE RESOLUTION
                </div>
                <p style={{ color: '#a0a0b5', fontSize: '13px', lineHeight: 1.6, marginBottom: '16px' }}>
                  For disputes, contact our decentralized arbitration DAO for peer-mediated resolution.
                </p>
                <NeonButton variant="cyan" size="sm">
                  Submit Dispute
                </NeonButton>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
};
