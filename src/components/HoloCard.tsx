import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

interface HoloCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  moduleId?: string;
  link?: string;
  linkText?: string;
  accentColor?: string;
  index?: number;
}

export const HoloCard = ({
  icon,
  title,
  description,
  moduleId,
  link,
  linkText,
  accentColor = '#ff2d7b',
  index: _index = 0,
}: HoloCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const rafRef = useRef<number | null>(null);
  const pendingTiltRef = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    pendingTiltRef.current = { x: y * -10, y: x * 10 };

    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      setTilt(pendingTiltRef.current);
    });
  };

  const handleMouseLeave = () => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      className="holo-card"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        padding: '2rem',
        borderRadius: '12px',
        background:
          'linear-gradient(180deg, rgba(18, 16, 26, 0.55) 0%, rgba(10, 10, 15, 0.72) 100%)',
        backdropFilter: 'blur(24px)',
        border: `1px solid ${isHovered ? accentColor + '55' : 'rgba(255,255,255,0.06)'}`,
        boxShadow: isHovered
          ? `0 18px 60px rgba(0,0,0,0.55), 0 0 0 1px ${accentColor}22, 0 0 40px ${accentColor}14`
          : '0 12px 42px rgba(0,0,0,0.35)',
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(${isHovered ? '8px' : '0px'})`,
        transition:
          'transform 240ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 280ms ease, border-color 280ms ease',
        cursor: 'default',
        overflow: 'hidden',
        willChange: 'transform',
      }}
    >
      {/* Holographic shine overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(${135 + tilt.y * 5}deg, transparent 0%, ${accentColor}10 28%, transparent 52%, ${accentColor}08 75%, transparent 100%)`,
          borderRadius: 'inherit',
          pointerEvents: 'none',
          opacity: isHovered ? 0.9 : 0.6,
          transition: 'background 240ms ease, opacity 240ms ease',
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          border: '1px solid rgba(255,255,255,0.04)',
          pointerEvents: 'none',
          opacity: isHovered ? 1 : 0.7,
          transition: 'opacity 280ms ease',
        }}
      />

      {/* Top accent line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '10%',
          right: '10%',
          height: '1px',
          background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
          opacity: isHovered ? 0.8 : 0.3,
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Icon */}
      <div
        style={{
          color: accentColor,
          marginBottom: '1rem',
          filter: isHovered ? `drop-shadow(0 0 8px ${accentColor}80)` : 'none',
          transition: 'filter 0.3s ease',
          position: 'relative',
        }}
      >
        {icon}
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: 'Orbitron, sans-serif',
          fontSize: '1rem',
          fontWeight: 700,
          color: '#fff',
          marginBottom: '0.75rem',
          textTransform: 'lowercase',
          letterSpacing: '0.05em',
          position: 'relative',
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: '0.875rem',
          lineHeight: 1.7,
          color: '#a0a0b5',
          marginBottom: '1.25rem',
          textTransform: 'lowercase',
          position: 'relative',
        }}
      >
        {description}
      </p>

      {/* Bottom section */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
        }}
      >
        {moduleId && (
          <div
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '10px',
              color: '#888899',
              textTransform: 'lowercase',
            }}
          >
            module_id: <span style={{ color: accentColor }}>{moduleId}</span>
          </div>
        )}
        {link && (
          <Link
            to={link}
            style={{
              fontFamily: 'Orbitron, sans-serif',
              fontSize: '11px',
              fontWeight: 600,
              color: accentColor,
              textDecoration: 'none',
              textTransform: 'lowercase',
              letterSpacing: '0.1em',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.textShadow = `0 0 10px ${accentColor}80`;
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.textShadow = 'none';
            }}
          >
            {linkText}
            <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>

      {/* Corner decorations */}
      <div style={{ position: 'absolute', top: '8px', right: '8px', width: '12px', height: '12px', borderTop: `1px solid ${accentColor}40`, borderRight: `1px solid ${accentColor}40` }} />
      <div style={{ position: 'absolute', bottom: '8px', left: '8px', width: '12px', height: '12px', borderBottom: `1px solid ${accentColor}40`, borderLeft: `1px solid ${accentColor}40` }} />
    </div>
  );
};
