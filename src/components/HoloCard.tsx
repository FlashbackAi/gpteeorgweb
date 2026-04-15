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

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -15, y: x * 15 });
  };

  const handleMouseLeave = () => {
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
        background: 'rgba(18, 16, 26, 0.8)',
        backdropFilter: 'blur(20px)',
        border: `1px solid ${isHovered ? accentColor + '60' : 'rgba(255,255,255,0.05)'}`,
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(${isHovered ? '10px' : '0px'})`,
        transition: 'all 0.15s ease-out, border-color 0.3s ease',
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
          background: `linear-gradient(${135 + tilt.y * 5}deg, transparent 0%, ${accentColor}08 30%, transparent 50%, ${accentColor}05 70%, transparent 100%)`,
          borderRadius: 'inherit',
          pointerEvents: 'none',
          transition: 'background 0.15s ease',
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
