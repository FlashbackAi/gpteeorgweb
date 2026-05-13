import { useEffect, useRef } from 'react';

interface CyberLoaderProps {
  onComplete: () => void;
  duration?: number;
}

export const CyberLoader = ({ onComplete, duration = 3500 }: CyberLoaderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Exit sequence - Harsh cut
    const exitTimer = setTimeout(() => {
      onComplete();
    }, duration);

    return () => clearTimeout(exitTimer);
  }, [duration, onComplete]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0a0a0f',
        overflow: 'hidden',
      }}
    >
      {/* Scanlines */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,45,123,0.015) 2px, rgba(255,45,123,0.015) 4px)',
          pointerEvents: 'none',
        }}
      />

      {/* Matrix rain columns in background */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', opacity: 0.1 }}>
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${(i / 20) * 100}%`,
              top: '-100%',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '12px',
              color: '#ff2d7b',
              writingMode: 'vertical-rl',
              animation: `matrixFall ${3 + Math.random() * 4}s linear ${Math.random() * 2}s infinite`,
              whiteSpace: 'nowrap',
              opacity: 0.3 + Math.random() * 0.4,
            }}
          >
            {Array.from({ length: 30 }).map(() => 
              String.fromCharCode(0x30A0 + Math.random() * 96)
            ).join('')}
          </div>
        ))}
      </div>

      {/* Logo */}
      <div
        style={{
          fontFamily: 'Glitch Goblin, cursive',
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          color: '#ff2d7b',
          textShadow: '0 0 20px rgba(255,45,123,0.6), 0 0 40px rgba(255,45,123,0.3), 0 0 80px rgba(0,240,255,0.2), 2px 0 #00f0ff, -2px 0 #a855f7',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          userSelect: 'none',
          animation: 'glitch 3s infinite',
        }}
      >
        teepin
      </div>

      {/* Circular loader */}
      <div
        style={{
          marginTop: '32px',
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          border: '2px solid rgba(255,45,123,0.15)',
          borderTopColor: '#ff2d7b',
          borderRightColor: '#00f0ff',
          boxShadow: '0 0 12px rgba(255,45,123,0.4), inset 0 0 8px rgba(0,240,255,0.15)',
          animation: 'cyberSpin 1.1s linear infinite',
        }}
      />

      {/* Loading text */}
      <div
        style={{
          marginTop: '18px',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '12px',
          letterSpacing: '0.25em',
          textTransform: 'lowercase',
          color: '#a0a0b5',
          textShadow: '0 0 8px rgba(255,45,123,0.25)',
          animation: 'cyberPulse 1.6s ease-in-out infinite',
          userSelect: 'none',
        }}
      >
        loading ..
      </div>

      <style>{`
        @keyframes matrixFall {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
        @keyframes glitch {
          0% { text-shadow: 3px 0 #00f0ff, -3px 0 #a855f7; }
          2% { text-shadow: 5px 0 #00f0ff, -5px 0 #a855f7; transform: translate(2px, 0); }
          4% { text-shadow: -5px 0 #00f0ff, 5px 0 #a855f7; transform: translate(-2px, 0); }
          6% { text-shadow: 3px 0 #00f0ff, -3px 0 #a855f7; transform: translate(0, 0); }
          100% { text-shadow: 3px 0 #00f0ff, -3px 0 #a855f7; }
        }
        @keyframes cyberSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes cyberPulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};
