import { useEffect, useRef, useState, FC, ReactNode } from 'react';
import { gsap } from 'gsap';
import Noise from './Noise';

interface GridMotionProps {
  items?: (string | ReactNode)[];
}

const GridMotion: FC<GridMotionProps> = ({ items = [] }) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mouseXRef = useRef<number>(window.innerWidth / 2);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const cols = isMobile ? 3 : 7;
  const rows = isMobile ? 3 : 4;
  const totalItems = cols * rows;
  const defaultItems = Array.from({ length: totalItems }, (_, index) => `Item ${index + 1}`);
  const combinedItems = items.length > 0 ? items.slice(0, totalItems) : defaultItems;

  useEffect(() => {
    if (isMobile) {
      // Auto-drift slow-motion on mobile (no mouse)
      const tweens: gsap.core.Tween[] = [];
      rowRefs.current.forEach((row, index) => {
        if (!row) return;
        const direction = index % 2 === 0 ? 1 : -1;
        const driftDistance = 80 * direction;
        const t = gsap.fromTo(
          row,
          { x: -driftDistance },
          {
            x: driftDistance,
            duration: 14 + index * 2,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1,
            delay: index * 0.6,
          }
        );
        tweens.push(t);
      });
      return () => {
        tweens.forEach((t) => t.kill());
        rowRefs.current.forEach((row) => row && gsap.set(row, { x: 0 }));
      };
    }

    // Desktop: mouse-driven parallax with delta threshold
    const updateMotion = (): void => {
      const maxMoveAmount = 300;
      const baseDuration = 0.8;
      const inertiaFactors = [0.6, 0.4, 0.3, 0.2];

      rowRefs.current.forEach((row, index) => {
        if (!row) return;
        const direction = index % 2 === 0 ? 1 : -1;
        const moveAmount = ((mouseXRef.current / window.innerWidth) * maxMoveAmount - maxMoveAmount / 2) * direction;

        gsap.to(row, {
          x: moveAmount,
          duration: baseDuration + inertiaFactors[index % inertiaFactors.length],
          ease: 'power3.out',
          overwrite: 'auto',
        });
      });
    };

    let lastX = mouseXRef.current;
    const handleMouseMove = (e: MouseEvent): void => {
      mouseXRef.current = e.clientX;
      if (Math.abs(e.clientX - lastX) < 8) return;
      lastX = e.clientX;
      updateMotion();
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile, rows]);

  return (
    <div ref={gridRef} className="h-full w-full overflow-hidden">
      <section
        className="w-full h-full overflow-hidden relative flex items-center justify-center bg-[#0a0a0f]"
      >
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        </div>

        {/* Ambient Glow */}
        <div className="absolute inset-0 z-[1] opacity-70 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]">
          <div className="absolute -inset-[25%] bg-[radial-gradient(circle_at_30%_30%,rgba(255,45,123,0.14),transparent_55%),radial-gradient(circle_at_70%_60%,rgba(0,240,255,0.12),transparent_55%),radial-gradient(circle_at_50%_80%,rgba(184,255,0,0.10),transparent_60%)] blur-2xl"></div>
        </div>

        <div className="absolute inset-0 pointer-events-none z-[4] bg-[length:250px]"></div>
        <div
          className="gap-4 flex-none relative origin-center z-[2] grid grid-cols-1"
          style={{
            width: isMobile ? '170vw' : '150vw',
            height: isMobile ? `${rows * 55}vw` : '150vh',
            transform: isMobile ? 'rotate(-6deg)' : 'rotate(-15deg)',
            gridTemplateRows: isMobile ? `repeat(${rows}, 55vw)` : `repeat(${rows}, minmax(0, 1fr))`,
          }}
        >
          {Array.from({ length: rows }, (_, rowIndex) => (
            <div
              key={rowIndex}
              className="grid gap-4"
              style={{
                willChange: 'transform',
                gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
              }}
              ref={el => {
                if (el) rowRefs.current[rowIndex] = el;
              }}
            >
              {Array.from({ length: cols }, (_, itemIndex) => {
                const content = combinedItems[rowIndex * cols + itemIndex];
                return (
                  <div key={itemIndex} className="relative p-3 group">
                    <div 
                      className="relative w-full h-full overflow-hidden flex items-center justify-center text-white text-[1.5rem] transition-all duration-500 group-hover:scale-[1.05]"
                      style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        backdropFilter: 'blur(8px)',
                        WebkitBackdropFilter: 'blur(8px)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        clipPath: 'polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%)',
                        boxShadow: 'inset 0 0 30px rgba(0,0,0,0.5)',
                      }}
                    >
                      {/* Animated Background Pulse */}
                      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-700 pointer-events-none"></div>

                      {/* Technical Grid Overlay */}
                      <div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                      {/* Cyberpunk Glow Border (simulated with absolute div) */}
                      <div 
                        className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity duration-500"
                        style={{
                          background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.2) 50%, transparent 60%)',
                          backgroundSize: '200% 200%',
                          animation: 'shimmer 3s infinite linear',
                          clipPath: 'polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%)',
                        }}
                      />

                      {/* Top Accent Line */}
                      <div className="absolute top-0 left-[20%] right-[10%] h-[1px] bg-white/20 group-hover:bg-white/40 transition-colors"></div>
                      {/* Left Accent Line */}
                      <div className="absolute top-[20%] bottom-[10%] left-0 w-[1px] bg-white/20 group-hover:bg-white/40 transition-colors"></div>

                      {/* Hardware Tag Label */}
                      <div className="absolute top-2 right-4 text-[8px] font-mono text-white/20 uppercase tracking-[0.2em] group-hover:text-white/40">SYS_UNIT_808</div>
                      <div className="absolute bottom-2 left-4 text-[8px] font-mono text-white/20 uppercase tracking-[0.2em] group-hover:text-white/40">TEEPIN_MESH_V1</div>

                      {/* Corner Brackets with Glow */}
                      <div className="absolute top-0 left-[15%] w-4 h-[2px] bg-white/30 group-hover:bg-white/60 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all"></div>
                      <div className="absolute top-[15%] left-0 w-[2px] h-4 bg-white/30 group-hover:bg-white/60 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all"></div>
                      
                      <div className="absolute bottom-0 right-[15%] w-4 h-[2px] bg-white/30 group-hover:bg-white/60 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all"></div>
                      <div className="absolute bottom-[15%] right-0 w-[2px] h-4 bg-white/30 group-hover:bg-white/60 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all"></div>
                      
                      {/* Scanline Effect Overlay */}
                      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>

                      {typeof content === 'string' && content.startsWith('http') ? (
                        <div
                          className="w-full h-full bg-cover bg-center absolute top-0 left-0 opacity-70 transition-all duration-500"
                          style={{ backgroundImage: `url(${content})` }}
                        ></div>
                      ) : (
                        <div className="p-4 text-center z-[1]">{content}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Grain / Noise Overlay (Above tiles so it's visible) */}
        <div className="absolute inset-0 z-[6] opacity-60 mix-blend-overlay pointer-events-none">
          <Noise patternRefreshInterval={1} patternAlpha={22} patternScaleX={2} patternScaleY={2} patternSize={250} />
        </div>
        <div className="relative w-full h-full top-0 left-0 pointer-events-none"></div>
      </section>
    </div>
  );
};

export default GridMotion;
