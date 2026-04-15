import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { animate } from 'animejs';
import { GlitchText } from './reactbits/GlitchText';

export const Header = () => {
  const location = useLocation();
  const [systemStatus, setSystemStatus] = useState({ status: 'OPTIMAL', latency: '24ms', session: '0XBFF...A1C' });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSystemStatus({
        status: 'OPTIMAL',
        latency: `${Math.floor(Math.random() * 20 + 20)}ms`,
        session: '0XBFF...A1C'
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (headerRef.current) {
      animate(headerRef.current, {
        opacity: [0, 1],
        translateY: [-20, 0],
        duration: 600,
        easing: 'easeOutExpo',
        delay: 200,
      });
    }
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/nodes', label: 'nodes' },
    { path: '/p2p-network', label: 'p2p network' },
  ];

  return (
    <header
      ref={headerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? 'rgba(10, 10, 15, 0.85)' : 'rgba(10, 10, 15, 0.5)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid rgba(255, 45, 123, 0.15)' : '1px solid rgba(255, 255, 255, 0.03)',
        transition: 'all 0.3s ease',
        opacity: 0,
      }}
    >
      {/* System Status Bar */}
      <div
        style={{
          background: 'rgba(0,0,0,0.3)',
          padding: '4px 24px',
          fontSize: '10px',
          fontFamily: 'JetBrains Mono, monospace',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          textTransform: 'lowercase',
          borderBottom: '1px solid rgba(255,255,255,0.02)',
        }}
      >
        <div style={{ display: 'flex', gap: '24px', color: '#888899' }}>
          <span>sys_status: <span style={{ color: '#b8ff00' }}>{systemStatus.status}</span></span>
          <span className="hidden sm:inline">latency: <span style={{ color: '#00f0ff' }}>{systemStatus.latency}</span></span>
          <span className="hidden md:inline">session: <span style={{ color: '#a855f7' }}>{systemStatus.session}</span></span>
        </div>
        <div style={{ color: '#ff2d7b', fontWeight: 600 }}>
          v1.0.4-stable
        </div>
      </div>

      {/* Main Navigation */}
      <div
        style={{
          padding: '12px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span
            style={{
              fontFamily: 'Glitch Goblin, cursive',
              fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
              fontWeight: 700,
            }}
          >
            <GlitchText text="gptee.org" className="text-cyber-magenta" speed={40} />
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          style={{
            display: 'flex',
            gap: '32px',
            alignItems: 'center',
          }}
          className="hidden sm:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                fontFamily: 'Orbitron, sans-serif',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: isActive(link.path) ? '#ff2d7b' : '#a0a0b5',
                position: 'relative',
                padding: '4px 0',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                if (!isActive(link.path)) {
                  (e.target as HTMLElement).style.color = '#ff2d7b';
                  (e.target as HTMLElement).style.textShadow = '0 0 10px rgba(255,45,123,0.5)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive(link.path)) {
                  (e.target as HTMLElement).style.color = '#a0a0b5';
                  (e.target as HTMLElement).style.textShadow = 'none';
                }
              }}
            >
              {link.label}
              {isActive(link.path) && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: '-2px',
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, #ff2d7b, #00f0ff)',
                    borderRadius: '1px',
                    boxShadow: '0 0 8px rgba(255,45,123,0.5)',
                  }}
                />
              )}
            </Link>
          ))}

          {/* GitHub Icon */}
          <a
            href="https://github.com/gptee-org"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#a0a0b5',
              transition: 'all 0.3s ease',
              display: 'flex',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = '#ff2d7b';
              (e.currentTarget as HTMLElement).style.filter = 'drop-shadow(0 0 6px rgba(255,45,123,0.5))';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = '#a0a0b5';
              (e.currentTarget as HTMLElement).style.filter = 'none';
            }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="sm:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: '#ff2d7b',
            cursor: 'pointer',
            padding: '4px',
          }}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="sm:hidden"
          style={{
            padding: '16px 24px',
            borderTop: '1px solid rgba(255,45,123,0.1)',
            background: 'rgba(10,10,15,0.95)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: 'Orbitron, sans-serif',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: isActive(link.path) ? '#ff2d7b' : '#a0a0b5',
                padding: '8px 0',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};
