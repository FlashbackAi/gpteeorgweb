import { useEffect, useRef } from 'react';

interface AuroraProps {
  className?: string;
  colors?: string[];
  speed?: number;
  opacity?: number;
}

export const Aurora = ({
  className = '',
  colors = ['#ff2d7b', '#00f0ff', '#a855f7', '#b8ff00'],
  speed = 1,
  opacity = 0.3,
}: AuroraProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    const blobs = colors.map((color, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.max(width, height) * (0.3 + Math.random() * 0.3),
      color,
      vx: (Math.random() - 0.5) * speed * 0.5,
      vy: (Math.random() - 0.5) * speed * 0.5,
      phase: i * (Math.PI / colors.length),
    }));

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      blobs.forEach((blob) => {
        blob.x += blob.vx + Math.sin(time * 0.0005 + blob.phase) * 0.5;
        blob.y += blob.vy + Math.cos(time * 0.0003 + blob.phase) * 0.5;

        // Bounce at edges
        if (blob.x < -blob.radius) blob.x = width + blob.radius;
        if (blob.x > width + blob.radius) blob.x = -blob.radius;
        if (blob.y < -blob.radius) blob.y = height + blob.radius;
        if (blob.y > height + blob.radius) blob.y = -blob.radius;

        const gradient = ctx.createRadialGradient(
          blob.x,
          blob.y,
          0,
          blob.x,
          blob.y,
          blob.radius
        );
        gradient.addColorStop(0, blob.color + Math.round(opacity * 255).toString(16).padStart(2, '0'));
        gradient.addColorStop(1, blob.color + '00');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      });

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    const handleResize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [colors, speed, opacity]);

  return (
    <canvas
      ref={canvasRef}
      className={`aurora-canvas ${className}`}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        filter: 'blur(80px)',
      }}
    />
  );
};
