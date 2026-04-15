import { useEffect, useRef, useState, ReactNode } from 'react';
import { animate } from 'animejs';

interface CyberTerminalProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  accentColor?: string;
  typewriter?: boolean;
}

export const CyberTerminal = ({
  title,
  subtitle,
  children,
  className = '',
  accentColor = '#ff2d7b',
  typewriter: _typewriter = false,
}: CyberTerminalProps) => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!terminalRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            animate(terminalRef.current!, {
              opacity: [0, 1],
              translateY: [30, 0],
              duration: 800,
              easing: 'easeOutExpo',
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(terminalRef.current);
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div
      ref={terminalRef}
      className={`cyber-terminal ${className}`}
      style={{
        position: 'relative',
        background: 'rgba(10, 10, 15, 0.9)',
        backdropFilter: 'blur(10px)',
        border: `1px solid ${accentColor}30`,
        borderRadius: '8px',
        overflow: 'hidden',
        opacity: 0,
      }}
    >
      {/* Scanline effect */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.01) 2px, rgba(255,255,255,0.01) 4px)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {/* Glow line at top */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
        }}
      />

      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 16px',
          borderBottom: `1px solid ${accentColor}15`,
          background: 'rgba(255,255,255,0.02)',
        }}
      >
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56', boxShadow: '0 0 6px rgba(255,95,86,0.4)' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e', boxShadow: '0 0 6px rgba(255,189,46,0.4)' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f', boxShadow: '0 0 6px rgba(39,201,63,0.4)' }} />
        </div>
        {title && (
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#888899', textTransform: 'lowercase' }}>
              {title}
            </div>
            {subtitle && (
              <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '13px', color: accentColor, fontWeight: 700 }}>
                {subtitle}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '16px', position: 'relative', zIndex: 1 }}>
        {children}
      </div>

      {/* Bottom glow */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '20%',
          right: '20%',
          height: '1px',
          background: `linear-gradient(90deg, transparent, ${accentColor}40, transparent)`,
        }}
      />
    </div>
  );
};
