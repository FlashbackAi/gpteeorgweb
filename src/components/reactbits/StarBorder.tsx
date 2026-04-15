import { ReactNode } from 'react';

interface StarBorderProps {
  children: ReactNode;
  className?: string;
  color?: string;
  speed?: string;
  as?: any;
  [key: string]: any;
}

export const StarBorder = ({
  children,
  className = '',
  color = '#ff2d7b',
  speed = '4s',
  as: Tag = 'div',
  ...props
}: StarBorderProps) => {
  return (
    <Tag
      className={`star-border-container ${className}`}
      style={{
        position: 'relative',
        display: 'inline-block',
        borderRadius: 'inherit',
        overflow: 'hidden',
      }}
      {...props}
    >
      {/* Animated border layer */}
      <div
        style={{
          position: 'absolute',
          inset: '-2px',
          borderRadius: 'inherit',
          background: `conic-gradient(from 0deg, transparent 0%, ${color} 10%, transparent 20%, transparent 40%, #00f0ff 50%, transparent 60%, transparent 80%, #a855f7 90%, transparent 100%)`,
          animation: `starSpin ${speed} linear infinite`,
          zIndex: 0,
        }}
      />
      {/* Inner content container */}
      <div
        style={{
          position: 'relative',
          borderRadius: 'inherit',
          background: 'var(--cyber-void-light)',
          zIndex: 1,
          margin: '1px',
        }}
      >
        {children}
      </div>

      <style>{`
        @keyframes starSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </Tag>
  );
};
