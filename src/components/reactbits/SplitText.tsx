import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  splitBy?: 'chars' | 'words';
  animation?: 'fadeUp' | 'glitchIn' | 'perspective' | 'scaleIn';
  trigger?: 'mount' | 'scroll';
  staggerDelay?: number;
}

export const SplitText = ({
  text,
  className = '',
  delay = 0,
  duration = 600,
  splitBy = 'chars',
  animation = 'fadeUp',
  trigger = 'scroll',
  staggerDelay = 30,
}: SplitTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const getAnimationConfig = () => {
    switch (animation) {
      case 'fadeUp':
        return {
          initial: { opacity: 0, transform: 'translateY(30px)' },
          target: { opacity: [0, 1], translateY: [30, 0] },
        };
      case 'glitchIn':
        return {
          initial: { opacity: 0, transform: 'translateX(-20px) skewX(10deg)' },
          target: { opacity: [0, 1], translateX: [-20, 0], skewX: [10, 0] },
        };
      case 'perspective':
        return {
          initial: { opacity: 0, transform: 'perspective(600px) rotateX(90deg)' },
          target: { opacity: [0, 1], rotateX: [90, 0] },
        };
      case 'scaleIn':
        return {
          initial: { opacity: 0, transform: 'scale(0) rotate(10deg)' },
          target: { opacity: [0, 1], scale: [0, 1], rotate: [10, 0] },
        };
      default:
        return {
          initial: { opacity: 0 },
          target: { opacity: [0, 1] },
        };
    }
  };

  const runAnimation = () => {
    if (hasAnimated.current || !containerRef.current) return;
    hasAnimated.current = true;

    const elements = containerRef.current.querySelectorAll('.split-unit');
    const config = getAnimationConfig();

    animate(elements, {
      ...(config.target as any),
      duration,
      delay: stagger(staggerDelay, { start: delay }),
      easing: 'easeOutExpo',
    });
  };

  useEffect(() => {
    if (!containerRef.current) return;

    // Set initial styles
    const elements = containerRef.current.querySelectorAll('.split-unit');
    const config = getAnimationConfig();
    elements.forEach((el) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = '0';
      htmlEl.style.transform = config.initial.transform || '';
      htmlEl.style.display = 'inline-block';
      htmlEl.style.willChange = 'transform, opacity';
    });

    if (trigger === 'mount') {
      setTimeout(runAnimation, 100);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runAnimation();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const units = splitBy === 'words' ? text.split(' ') : text.split('');

  return (
    <div ref={containerRef} className={`split-text-container ${className}`} style={{ overflow: 'hidden' }}>
      {units.map((unit, i) => (
        <span
          key={i}
          className="split-unit"
          style={{
            display: 'inline-block',
            whiteSpace: unit === ' ' ? 'pre' : 'normal',
          }}
        >
          {unit}
          {splitBy === 'words' && i < units.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </div>
  );
};
