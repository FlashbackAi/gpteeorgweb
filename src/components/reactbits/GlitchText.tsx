import { useEffect, useRef, useState, useCallback } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  speed?: number;
  enableShadow?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'p' | 'div';
}

const glitchChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/~`ΔΩψξφλπ§¤░▒▓█';

export const GlitchText = ({
  text,
  className = '',
  speed = 50,
  enableShadow = true,
  as: Tag = 'span',
}: GlitchTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const containerRef = useRef<HTMLElement>(null);

  const triggerGlitch = useCallback(() => {
    if (isGlitching) return;
    setIsGlitching(true);

    let iteration = 0;
    const maxIteration = text.length;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) return text[index];
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          })
          .join('')
      );

      if (iteration >= maxIteration) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(text);
        setIsGlitching(false);
      }

      iteration += 1 / 3;
    }, speed);
  }, [text, speed, isGlitching]);

  useEffect(() => {
    triggerGlitch();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Periodic subtle glitch
  useEffect(() => {
    const periodicGlitch = setInterval(() => {
      if (!isGlitching) triggerGlitch();
    }, 5000 + Math.random() * 3000);
    return () => clearInterval(periodicGlitch);
  }, [isGlitching, triggerGlitch]);

  const shadowStyle = enableShadow
    ? {
        textShadow: `
          2px 0 var(--cyber-cyan),
          -2px 0 var(--cyber-magenta),
          0 0 10px rgba(255, 45, 123, 0.5),
          0 0 20px rgba(0, 240, 255, 0.3),
          0 0 40px rgba(168, 85, 247, 0.2)
        `,
      }
    : {};

  return (
    <Tag
      ref={containerRef as any}
      className={`glitch-text-component ${className}`}
      style={{
        ...shadowStyle,
        position: 'relative',
        display: 'inline-block',
        cursor: 'pointer',
      }}
      onMouseEnter={triggerGlitch}
      data-text={text}
    >
      {displayText}
      {isGlitching && (
        <>
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 0,
              left: '2px',
              color: 'var(--cyber-cyan)',
              opacity: 0.7,
              clipPath: 'inset(10% 0 60% 0)',
              animation: 'glitch 0.3s infinite',
            }}
          >
            {displayText}
          </span>
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 0,
              left: '-2px',
              color: 'var(--cyber-magenta)',
              opacity: 0.7,
              clipPath: 'inset(55% 0 5% 0)',
              animation: 'glitch 0.3s infinite reverse',
            }}
          >
            {displayText}
          </span>
        </>
      )}
    </Tag>
  );
};
