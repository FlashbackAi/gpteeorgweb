import { Link } from 'react-router-dom';
import { GlitchText } from './reactbits/GlitchText';

export const Footer = () => {
  return (
    <footer
      style={{
        position: 'relative',
        borderTop: '1px solid rgba(255, 45, 123, 0.1)',
        background: 'linear-gradient(180deg, rgba(10,10,15,0.9) 0%, rgba(10,10,15,1) 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Animated top border line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #ff2d7b, #00f0ff, #a855f7, transparent)',
          backgroundSize: '200% 100%',
          animation: 'borderTravel 4s linear infinite',
        }}
      />

      {/* Grid background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,45,123,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,45,123,0.02) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
        }}
      />

      <div style={{ padding: '40px 24px', position: 'relative' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
          }}
        >
          {/* Top Row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '24px',
            }}
          >
            {/* Brand */}
            <div>
              <div style={{ marginBottom: '8px' }}>
                <GlitchText
                  text="gptee.org"
                  className="text-cyber-magenta"
                  as="span"
                  speed={60}
                  enableShadow={true}
                />
              </div>
              <p
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '10px',
                  color: '#888899',
                  textTransform: 'lowercase',
                  maxWidth: '300px',
                  lineHeight: 1.6,
                }}
              >
                decentralized p2p ai network. gpt for everyone, free.
                <br />
                <span style={{ color: '#a855f7' }}>© 2026 gptee.org. all system logs archived.</span>
              </p>
            </div>

            {/* Links */}
            <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
              <div>
                <div
                  style={{
                    fontFamily: 'Orbitron, sans-serif',
                    fontSize: '9px',
                    fontWeight: 700,
                    color: '#ff2d7b',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    marginBottom: '12px',
                  }}
                >
                  Protocol
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    { to: '/nodes', label: 'nodes' },
                    { to: '/p2p-network', label: 'p2p network' },
                  ].map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '11px',
                        color: '#a0a0b5',
                        textDecoration: 'none',
                        textTransform: 'lowercase',
                        transition: 'color 0.2s ease',
                      }}
                      onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#00f0ff'; }}
                      onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#a0a0b5'; }}
                    >
                      → {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: 'Orbitron, sans-serif',
                    fontSize: '9px',
                    fontWeight: 700,
                    color: '#00f0ff',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    marginBottom: '12px',
                  }}
                >
                  Legal
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    { to: '/privacy-policy', label: 'privacy policy' },
                    { to: '/terms-and-conditions', label: 'terms & conditions' },
                  ].map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '11px',
                        color: '#a0a0b5',
                        textDecoration: 'none',
                        textTransform: 'lowercase',
                        transition: 'color 0.2s ease',
                      }}
                      onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#00f0ff'; }}
                      onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#a0a0b5'; }}
                    >
                      → {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              {[
                {
                  href: 'https://github.com/gptee-org',
                  icon: <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />,
                  color: '#ff2d7b',
                },
                {
                  href: 'https://twitter.com/gptee_org',
                  icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />,
                  color: '#00f0ff',
                },
                {
                  href: 'https://discord.gg/gptee',
                  icon: <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />,
                  color: '#a855f7',
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#a0a0b5',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    padding: '8px',
                    borderRadius: '6px',
                    border: '1px solid rgba(255,255,255,0.05)',
                    background: 'rgba(255,255,255,0.02)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = social.color;
                    (e.currentTarget as HTMLElement).style.borderColor = social.color + '40';
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 15px ${social.color}30`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = '#a0a0b5';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.05)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                >
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div
            style={{
              borderTop: '1px solid rgba(255,255,255,0.03)',
              paddingTop: '16px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '8px',
            }}
          >
            <div
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '9px',
                color: '#555566',
                textTransform: 'lowercase',
              }}
            >
              sys_admin_access_only // built for the decentralized future
            </div>
            <div
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '9px',
                color: '#555566',
              }}
            >
              <span style={{ color: '#ff2d7b' }}>■</span>{' '}
              <span style={{ color: '#00f0ff' }}>■</span>{' '}
              <span style={{ color: '#a855f7' }}>■</span>{' '}
              <span style={{ color: '#b8ff00' }}>■</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
