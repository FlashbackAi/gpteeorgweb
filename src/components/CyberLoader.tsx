import { useState, useEffect, useRef } from 'react';
import { animate } from 'animejs';

interface CyberLoaderProps {
  onComplete: () => void;
  duration?: number;
}

const bootSequence = [
  { text: '> INITIALIZING NEURAL MESH PROTOCOL...', delay: 0 },
  { text: '> LOADING DISTRIBUTED AI WEIGHTS [████████░░] 78%', delay: 300 },
  { text: '> DECRYPTING P2P CHANNELS... OK', delay: 600 },
  { text: '> CONNECTING TO 4,921 ACTIVE NODES...', delay: 900 },
  { text: '> WEBRTC HANDSHAKE PROTOCOL ENGAGED', delay: 1200 },
  { text: '> GPTEE.ORG INTERFACE ONLINE', delay: 1500 },
];

export const CyberLoader = ({ onComplete, duration = 3500 }: CyberLoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [visibleLines, setVisibleLines] = useState<number[]>([]);

  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Show boot lines progressively
    bootSequence.forEach((_, i) => {
      setTimeout(() => {
        setVisibleLines(prev => [...prev, i]);
      }, bootSequence[i].delay);
    });

    // Animate progress bar
    const progressAnim = { value: 0 };
    animate(progressAnim, {
      value: 100,
      duration: duration * 0.8,
      easing: 'easeInOutQuad',
      onUpdate: () => setProgress(Math.round(progressAnim.value)),
    });

    // Logo pulse
    if (logoRef.current) {
      animate(logoRef.current, {
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutExpo',
      });
    }

    // Exit sequence
    const exitTimer = setTimeout(() => {

      
      if (containerRef.current) {
        animate(containerRef.current, {
          opacity: [1, 0],
          scale: [1, 1.05],
          duration: 600,
          easing: 'easeInQuad',
          onComplete: () => onComplete(),
        });
      }
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
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', opacity: 0.15 }}>
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
        ref={logoRef}
        style={{
          fontFamily: 'Glitch Goblin, cursive',
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          color: '#ff2d7b',
          marginBottom: '2rem',
          textShadow: '0 0 20px rgba(255,45,123,0.6), 0 0 40px rgba(255,45,123,0.3), 0 0 80px rgba(0,240,255,0.2), 2px 0 #00f0ff, -2px 0 #a855f7',
          letterSpacing: '0.1em',
        }}
      >
        gptee.org
      </div>

      {/* Boot Sequence Text */}
      <div
        style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '11px',
          color: 'var(--cyber-grey)',
          maxWidth: '500px',
          width: '90%',
          marginBottom: '2rem',
          minHeight: '140px',
        }}
      >
        {bootSequence.map((line, i) => (
          <div
            key={i}
            style={{
              opacity: visibleLines.includes(i) ? 1 : 0,
              transform: visibleLines.includes(i) ? 'translateX(0)' : 'translateX(-10px)',
              transition: 'all 0.3s ease',
              marginBottom: '4px',
              color: i === bootSequence.length - 1 ? '#b8ff00' : undefined,
            }}
          >
            {line.text}
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div
        style={{
          width: '300px',
          maxWidth: '80%',
          height: '3px',
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '2px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div
          ref={progressRef}
          style={{
            height: '100%',
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #ff2d7b, #00f0ff, #a855f7)',
            borderRadius: '2px',
            transition: 'width 0.1s linear',
            boxShadow: '0 0 10px rgba(255,45,123,0.5), 0 0 20px rgba(0,240,255,0.3)',
          }}
        />
      </div>

      {/* Progress Text */}
      <div
        style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '10px',
          color: '#ff2d7b',
          marginTop: '0.75rem',
          letterSpacing: '0.2em',
        }}
      >
        NEURAL MESH SYNC {progress}%
      </div>

      <style>{`
        @keyframes matrixFall {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
      `}</style>
    </div>
  );
};
