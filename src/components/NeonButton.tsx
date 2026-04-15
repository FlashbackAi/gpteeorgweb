import { useRef } from 'react';
import { animate } from 'animejs';

interface NeonButtonProps {
  children: React.ReactNode;
  variant?: 'magenta' | 'cyan' | 'lime';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
}

const variantColors = {
  magenta: {
    bg: '#ff2d7b',
    glow: 'rgba(255, 45, 123, 0.5)',
    glowStrong: 'rgba(255, 45, 123, 0.8)',
    text: '#000',
  },
  cyan: {
    bg: '#00f0ff',
    glow: 'rgba(0, 240, 255, 0.5)',
    glowStrong: 'rgba(0, 240, 255, 0.8)',
    text: '#000',
  },
  lime: {
    bg: '#b8ff00',
    glow: 'rgba(184, 255, 0, 0.5)',
    glowStrong: 'rgba(184, 255, 0, 0.8)',
    text: '#000',
  },
};

const sizeStyles = {
  sm: { padding: '8px 20px', fontSize: '12px' },
  md: { padding: '12px 32px', fontSize: '14px' },
  lg: { padding: '16px 44px', fontSize: '16px' },
};

export const NeonButton = ({
  children,
  variant = 'magenta',
  size = 'md',
  className = '',
  onClick,
  href,
}: NeonButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement & HTMLAnchorElement>(null);
  const colors = variantColors[variant];

  const handleMouseEnter = () => {
    if (!buttonRef.current) return;
    animate(buttonRef.current, {
      scale: 1.05,
      duration: 300,
      easing: 'easeOutExpo',
    });
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current) return;
    animate(buttonRef.current, {
      scale: 1,
      duration: 300,
      easing: 'easeOutExpo',
    });
  };

  const handleClick = () => {
    if (!buttonRef.current) return;

    // Flash effect
    animate(buttonRef.current, {
      scale: [1.05, 0.95, 1.05],
      duration: 300,
      easing: 'easeInOutQuad',
    });

    onClick?.();
  };

  const Tag = href ? 'a' : 'button';

  return (
    <Tag
      ref={buttonRef as any}
      className={`neon-button ${className}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      href={href}
      style={{
        ...sizeStyles[size],
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        background: colors.bg,
        color: colors.text,
        border: 'none',
        fontFamily: 'Orbitron, sans-serif',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        textDecoration: 'none',
        transition: 'box-shadow 0.3s ease',
        boxShadow: `0 0 15px ${colors.glow}, 0 0 30px ${colors.glow}40, inset 0 0 15px ${colors.glow}20`,
        clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)',
      }}
    >
      {/* Shine sweep */}
      <span
        style={{
          position: 'absolute',
          top: 0,
          left: '-100%',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
          animation: 'shineSweep 3s ease-in-out infinite',
        }}
      />
      <span style={{ position: 'relative', zIndex: 1 }}>{children}</span>

      <style>{`
        @keyframes shineSweep {
          0%, 100% { left: -100%; }
          50% { left: 100%; }
        }
        .neon-button:hover {
          box-shadow: 0 0 25px ${colors.glowStrong}, 0 0 50px ${colors.glow}, 0 0 75px ${colors.glow}40 !important;
        }
      `}</style>
    </Tag>
  );
};
