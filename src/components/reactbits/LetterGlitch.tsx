import { useEffect, useRef } from 'react';

interface LetterGlitchProps {
  className?: string;
  glitchColors?: string[];
  glitchSpeed?: number;
  charSet?: string;
  centerVignette?: boolean;
  outerVignette?: boolean;
  smooth?: boolean;
}

export const LetterGlitch = ({
  className = '',
  glitchColors = ['#ff2d7b', '#00f0ff', '#a855f7'],
  glitchSpeed = 50,
  charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*ΔΩψξφ░▒▓',
  centerVignette = false,
  outerVignette = true,
  smooth = true,
}: LetterGlitchProps) => {
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

    const fontSize = 14;
    const cols = Math.ceil(width / (fontSize * 0.6));
    const rows = Math.ceil(height / fontSize);

    const grid: string[][] = [];
    const colorGrid: string[][] = [];
    const alphaGrid: number[][] = [];

    for (let r = 0; r < rows; r++) {
      grid[r] = [];
      colorGrid[r] = [];
      alphaGrid[r] = [];
      for (let c = 0; c < cols; c++) {
        grid[r][c] = charSet[Math.floor(Math.random() * charSet.length)];
        colorGrid[r][c] = glitchColors[Math.floor(Math.random() * glitchColors.length)];
        alphaGrid[r][c] = Math.random() * 0.3 + 0.1;
      }
    }

    let lastTime = 0;

    const draw = (time: number) => {
      if (time - lastTime < glitchSpeed) {
        animRef.current = requestAnimationFrame(draw);
        return;
      }
      lastTime = time;

      ctx.fillStyle = 'rgba(10, 10, 15, 0.9)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;
      ctx.textBaseline = 'top';

      // Randomly update some cells
      const updates = Math.floor(cols * rows * 0.05);
      for (let u = 0; u < updates; u++) {
        const r = Math.floor(Math.random() * rows);
        const c = Math.floor(Math.random() * cols);
        grid[r][c] = charSet[Math.floor(Math.random() * charSet.length)];
        colorGrid[r][c] = glitchColors[Math.floor(Math.random() * glitchColors.length)];
        alphaGrid[r][c] = Math.random() * 0.4 + 0.05;
      }

      // Occasional glitch burst - a full row or column
      if (Math.random() < 0.03) {
        const burstRow = Math.floor(Math.random() * rows);
        for (let c = 0; c < cols; c++) {
          grid[burstRow][c] = charSet[Math.floor(Math.random() * charSet.length)];
          colorGrid[burstRow][c] = glitchColors[0];
          alphaGrid[burstRow][c] = 0.6;
        }
      }

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const alpha = smooth ? alphaGrid[r][c] : (alphaGrid[r][c] > 0.2 ? 0.3 : 0.05);
          ctx.fillStyle = colorGrid[r][c];
          ctx.globalAlpha = alpha;
          ctx.fillText(grid[r][c], c * fontSize * 0.6, r * fontSize);
        }
      }

      ctx.globalAlpha = 1;

      // Vignette effects
      if (outerVignette) {
        const gradient = ctx.createRadialGradient(
          width / 2, height / 2, Math.min(width, height) * 0.3,
          width / 2, height / 2, Math.max(width, height) * 0.7
        );
        gradient.addColorStop(0, 'transparent');
        gradient.addColorStop(1, 'rgba(10, 10, 15, 0.8)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      if (centerVignette) {
        const gradient = ctx.createRadialGradient(
          width / 2, height / 2, 0,
          width / 2, height / 2, Math.min(width, height) * 0.4
        );
        gradient.addColorStop(0, 'rgba(10, 10, 15, 0.6)');
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

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
  }, [glitchColors, glitchSpeed, charSet, centerVignette, outerVignette, smooth]);

  return (
    <canvas
      ref={canvasRef}
      className={`letter-glitch-canvas ${className}`}
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
