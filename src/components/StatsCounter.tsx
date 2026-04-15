import { useEffect, useRef, useState } from 'react';
import { animate } from 'animejs';

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
  const [displayValue, setDisplayValue] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            const counter = { val: 0 };
            animate(counter, {
              val: value,
              duration,
              easing: 'easeOutExpo',
              onUpdate: () => setDisplayValue(Math.round(counter.val)),
            });

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
      }}
    >
      <div
        style={{
          fontFamily: 'Orbitron, sans-serif',
          fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
          fontWeight: 800,
          color,
          textShadow: `0 0 10px ${color}60, 0 0 20px ${color}30`,
          lineHeight: 1,
          marginBottom: '0.5rem',
        }}
      >
        {prefix}{displayValue.toLocaleString()}{suffix}
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
