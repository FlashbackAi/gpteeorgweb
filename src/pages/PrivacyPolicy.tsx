import { CyberTerminal } from '../components/CyberTerminal';
import { ScrollReveal } from '../components/ScrollReveal';
import { NeonButton } from '../components/NeonButton';

const SidebarLink = ({ href, label, isActive, color }: { href: string; label: string; isActive?: boolean; color: string }) => (
  <a
    href={href}
    style={{
      display: 'block',
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: '11px',
      color: isActive ? color : '#888899',
      textDecoration: 'none',
      padding: '6px 0',
      paddingLeft: isActive ? '10px' : '12px',
      borderLeft: isActive ? `2px solid ${color}` : '2px solid transparent',
      transition: 'all 0.2s ease',
    }}
    onMouseEnter={(e) => { (e.target as HTMLElement).style.color = color; }}
    onMouseLeave={(e) => { if (!isActive) (e.target as HTMLElement).style.color = '#888899'; }}
  >
    {label}
  </a>
);

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

const CodeBlock = ({ children }: { children: React.ReactNode }) => (
  <div style={{
    background: 'rgba(0,0,0,0.4)',
    border: '1px solid rgba(255,45,123,0.1)',
    borderRadius: '6px',
    padding: '16px',
    fontFamily: 'JetBrains Mono, monospace',
    fontSize: '11px',
    marginTop: '8px',
  }}>
    {children}
  </div>
);

export const PrivacyPolicy = () => {
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
                border: '1px solid rgba(255,45,123,0.1)',
                borderRadius: '8px',
                padding: '20px',
              }}>
                <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '9px', color: '#ff2d7b', fontWeight: 700, letterSpacing: '0.15em', marginBottom: '16px' }}>
                  DIRECTORY
                </div>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <SidebarLink href="#privacy" label="01 PRIVACY_POLICY" isActive color="#ff2d7b" />
                  <SidebarLink href="#data-collection" label="02 DATA_COLLECTION" color="#00f0ff" />
                  <SidebarLink href="#personal-id" label="03 PERSONAL_ID" color="#00f0ff" />
                  <SidebarLink href="#zero-knowledge" label="04 ZERO_KNOWLEDGE" color="#a855f7" />
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <ScrollReveal animation="fadeUp">
              <CyberTerminal title="GPTEE_LEGAL_DOCS_V1.0.SH" subtitle="READ-ONLY" accentColor="#ff2d7b">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>

                  <section id="privacy">
                    <SectionTitle>01 // Privacy Policy</SectionTitle>
                    <LegalText>
                      <p>
                        <span style={{ color: '#ff2d7b', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px' }}>001</span>{' '}
                        [SUMMARY] GPTEE.org values data sovereignty. This document outlines how we process information within our neural-node infrastructure.
                      </p>
                    </LegalText>
                  </section>

                  <section id="data-collection">
                    <SectionTitle color="#00f0ff">02 // Data Collection Protocols</SectionTitle>
                    <LegalText>
                      <p>
                        Our systems automatically harvest metadata necessary for P2P handshake stabilization.
                        This includes IP addresses, browser fingerprints, and operational telemetry.
                      </p>
                    </LegalText>
                  </section>

                  <section id="personal-id">
                    <SectionTitle color="#00f0ff">03 // Personal Identification</SectionTitle>
                    <LegalText>
                      <p>
                        GPTEE does not require real-world identities. All user profiles are hashed using SHA-256
                        upon creation. We do not store plain-text email addresses or names.
                      </p>
                    </LegalText>
                  </section>

                  <section id="zero-knowledge">
                    <SectionTitle color="#a855f7">04 // Zero-Knowledge Proofs</SectionTitle>
                    <LegalText>
                      <p>
                        We implement <span style={{ color: '#a855f7' }}>Zero-Knowledge Proofs</span> for authentication,
                        ensuring that even our core administrators cannot access your decrypted communication logs.
                      </p>
                    </LegalText>
                  </section>

                  <section>
                    <SectionTitle color="#b8ff00">05 // Encryption Standards</SectionTitle>
                    <LegalText>
                      <p>
                        All inference requests are encrypted end-to-end using ChaCha20-Poly1305. Your prompts
                        are never stored in plaintext on any server.
                      </p>
                      <CodeBlock>
                        <div style={{ color: '#b8ff00', marginBottom: '8px' }}>ENCRYPTION_SPEC:</div>
                        <div style={{ color: '#a0a0b5' }}>• Algorithm: ChaCha20-Poly1305</div>
                        <div style={{ color: '#a0a0b5' }}>• Key Exchange: X25519 (Curve25519)</div>
                        <div style={{ color: '#a0a0b5' }}>• Forward Secrecy: <span style={{ color: '#b8ff00' }}>Enabled</span></div>
                      </CodeBlock>
                    </LegalText>
                  </section>

                  <section>
                    <SectionTitle>06 // Data Retention</SectionTitle>
                    <LegalText>
                      <p>
                        System logs are retained for <span style={{ color: '#00f0ff' }}>30 days</span> for debugging purposes.
                        After this period, all logs are permanently deleted from our infrastructure.
                      </p>
                    </LegalText>
                  </section>

                  <section>
                    <SectionTitle color="#00f0ff">07 // Contact</SectionTitle>
                    <LegalText>
                      <p>
                        For privacy inquiries, contact us at{' '}
                        <a href="mailto:privacy@gptee.org" style={{ color: '#ff2d7b', textDecoration: 'none' }}>
                          privacy@gptee.org
                        </a>
                      </p>
                    </LegalText>
                  </section>

                  {/* Footer */}
                  <div style={{
                    borderTop: '1px solid rgba(255,45,123,0.1)',
                    paddingTop: '20px',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '10px',
                  }}>
                    <div style={{ color: '#ff2d7b', marginBottom: '4px' }}>[EOF-PRIVACY_POLICY]</div>
                    <div style={{ color: '#555566' }}>Last Updated: March 28, 2026 | Version: 1.0.4</div>
                  </div>
                </div>
              </CyberTerminal>
            </ScrollReveal>

            {/* Action Cards */}
            <ScrollReveal animation="fadeUp" delay={200}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '32px' }}>
                {[
                  { title: '📧 Legal Inquiries', desc: 'Contact our automated compliance bot for specific regulatory requests.', btn: 'OPEN CHANNEL', color: '#ff2d7b' },
                  { title: '📊 Data Export', desc: 'Download your hashed activity log in .JSON format for local audit.', btn: 'INITIATE EXPORT', color: '#00f0ff' },
                ].map((card, i) => (
                  <div key={i} style={{
                    background: 'rgba(18,16,26,0.7)',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${card.color}15`,
                    borderRadius: '8px',
                    padding: '24px',
                  }}>
                    <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '14px', color: card.color, fontWeight: 700, marginBottom: '12px' }}>
                      {card.title}
                    </div>
                    <p style={{ color: '#a0a0b5', fontSize: '12px', lineHeight: 1.6, marginBottom: '16px' }}>
                      {card.desc}
                    </p>
                    <NeonButton variant={i === 0 ? 'magenta' : 'cyan'} size="sm">
                      {card.btn}
                    </NeonButton>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
};
