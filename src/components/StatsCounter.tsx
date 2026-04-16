import { useEffect, useRef, useState } from 'react';
import { animate } from 'animejs';
import Counter from './Counter';

interface StatsCounterProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  color?: string;
  duration?: number;
}

export const StatsCounter = ({
  value,
  label,
  suffix = '',
  prefix = '',
  color = '#ff2d7b',
  duration = 2000,
}: StatsCounterProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            setIsIntersecting(true);

            // Entrance animation
            animate(containerRef.current!, {
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 600,
              easing: 'easeOutExpo',
            });

            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <div
      ref={containerRef}
      style={{
        textAlign: 'center',
        opacity: 0,
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          color,
          textShadow: `0 0 10px ${color}60, 0 0 20px ${color}30`,
          lineHeight: 1,
          marginBottom: '0.5rem',
        }}
      >
        {prefix && (
          <span style={{ 
            fontFamily: 'Nevera, Orbitron, sans-serif', 
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 900 
          }}>
            {prefix}
          </span>
        )}
        <Counter
          value={isIntersecting ? value : 0}
          fontSize={60} // Matches the screenshot better
          padding={0}
          gap={2}
          textColor={color}
          fontWeight={900}
          containerStyle={{ fontFamily: 'Nevera, Orbitron, sans-serif' }}
          gradientFrom="rgba(18, 16, 26, 0.7)"
          gradientTo="transparent"
        />
        {suffix && (
          <span style={{ 
            fontFamily: 'Nevera, Orbitron, sans-serif', 
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 900 
          }}>
            {suffix}
          </span>
        )}
      </div>
      <div
        style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '10px',
          color: '#888899',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
        }}
      >
        {label}
      </div>
    </div>
  );
};
