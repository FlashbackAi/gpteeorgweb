import { useEffect, useRef } from 'react';

interface CyberGridProps {
  className?: string;
  color?: string;
  lineWidth?: number;
  gridSize?: number;
  perspective?: boolean;
  pulse?: boolean;
}

export const CyberGrid = ({
  className = '',
  color = '#ff2d7b',
  lineWidth = 0.5,
  gridSize = 50,
  perspective = true,
  pulse = true,
}: CyberGridProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      const pulseAlpha = pulse
        ? 0.08 + Math.sin(time * 0.001) * 0.04
        : 0.1;

      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;

      if (perspective) {
        // Draw perspective grid converging toward horizon
        const horizonY = height * 0.35;
        const vanishX = width / 2;

        // Horizontal lines (getting closer together near horizon)
        const numHLines = 30;
        for (let i = 0; i <= numHLines; i++) {
          const t = i / numHLines;
          const y = horizonY + (height - horizonY) * Math.pow(t, 1.5);
          const alpha = pulseAlpha * (0.3 + t * 0.7);

          ctx.globalAlpha = alpha;
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }

        // Vertical lines radiating from vanishing point
        const numVLines = 20;
        for (let i = -numVLines; i <= numVLines; i++) {
          const x = vanishX + (i / numVLines) * width * 1.5;
          const alpha = pulseAlpha * (1 - Math.abs(i / numVLines) * 0.5);

          ctx.globalAlpha = alpha;
          ctx.beginPath();
          ctx.moveTo(vanishX, horizonY);
          ctx.lineTo(x, height);
          ctx.stroke();
        }

        // Horizon glow
        const gradient = ctx.createLinearGradient(0, horizonY - 30, 0, horizonY + 30);
        gradient.addColorStop(0, 'transparent');
        gradient.addColorStop(0.5, color + '30');
        gradient.addColorStop(1, 'transparent');
        ctx.globalAlpha = 0.6;
        ctx.fillStyle = gradient;
        ctx.fillRect(0, horizonY - 30, width, 60);
      } else {
        // Flat grid
        ctx.globalAlpha = pulseAlpha;
        for (let x = 0; x <= width; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
          ctx.stroke();
        }
        for (let y = 0; y <= height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }
      }

      ctx.globalAlpha = 1;
      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    const handleResize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [color, lineWidth, gridSize, perspective, pulse]);

  return (
    <canvas
      ref={canvasRef}
      className={`cyber-grid-canvas ${className}`}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  );
};
