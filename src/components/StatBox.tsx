import { useEffect, useState } from 'react';
import Counter from './Counter';

interface StatBoxProps {
  value?: number;
  valueText?: string;
  suffix?: string;
  label: string;
  sublabel?: string;
  color: string;
  visible: boolean;
  delay?: number;
  offset?: number;
}

export function StatBox({ value, valueText, suffix = '', label, sublabel, color, visible, delay = 0, offset = 0 }: StatBoxProps) {
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => setTriggered(true), delay);
    return () => clearTimeout(timer);
  }, [visible, delay]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '16px 20px',
        background: 'rgba(255,255,255,0.02)',
        border: `1px solid ${color}30`,
        borderRadius: '8px',
        position: 'relative',
        flex: 1,
        boxShadow: `0 0 20px ${color}10, inset 0 0 20px ${color}05`,
        transition: 'all 0.3s ease',
        transform: `translateY(${offset}px)`,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '10%',
          right: '10%',
          height: '1px',
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          opacity: 0.6,
        }}
      />
      <div style={{ position: 'absolute', top: '-1px', left: '-1px', width: '8px', height: '8px', borderTop: `1px solid ${color}`, borderLeft: `1px solid ${color}`, borderRadius: '2px 0 0 0' }} />
      <div style={{ position: 'absolute', top: '-1px', right: '-1px', width: '8px', height: '8px', borderTop: `1px solid ${color}`, borderRight: `1px solid ${color}`, borderRadius: '0 2px 0 0' }} />
      <div style={{ position: 'absolute', bottom: '-1px', left: '-1px', width: '8px', height: '8px', borderBottom: `1px solid ${color}`, borderLeft: `1px solid ${color}`, borderRadius: '0 0 0 2px' }} />
      <div style={{ position: 'absolute', bottom: '-1px', right: '-1px', width: '8px', height: '8px', borderBottom: `1px solid ${color}`, borderRight: `1px solid ${color}`, borderRadius: '0 0 2px 0' }} />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(ellipse at center top, ${color}10 0%, transparent 60%)`,
          borderRadius: '8px',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          color,
          textShadow: `0 0 20px ${color}60`,
          lineHeight: 1,
        }}
      >
        {valueText !== undefined ? (
          <span
            style={{
              fontFamily: 'Nevera, sans-serif',
              fontSize: '32px',
              fontWeight: 800,
              opacity: triggered ? 1 : 0,
              transition: 'opacity 0.6s ease',
            }}
          >
            {valueText}
          </span>
        ) : (
          <Counter
            value={triggered ? (value ?? 0) : 0}
            fontSize={32}
            padding={0}
            gap={2}
            textColor={color}
            fontWeight={800}
            containerStyle={{ fontFamily: 'Nevera, sans-serif' }}
            gradientFrom="transparent"
            gradientTo="transparent"
          />
        )}
        {suffix && (
          <span
            style={{
              fontFamily: 'Nevera, sans-serif',
              fontSize: '24px',
              fontWeight: 800,
              marginLeft: '2px',
            }}
          >
            {suffix}
          </span>
        )}
      </div>
      <div
        style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '9px',
          color: '#555566',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          marginTop: '6px',
        }}
      >
        {label}
      </div>
      {sublabel && (
        <div
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '9px',
            color,
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            marginTop: '4px',
            opacity: 0.7,
          }}
        >
          {sublabel}
        </div>
      )}
    </div>
  );
}
