import { useEffect, useRef, ReactNode } from 'react';
import { animate } from 'animejs';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scaleIn' | 'glitchIn';
  delay?: number;
  duration?: number;
  threshold?: number;
}

export const ScrollReveal = ({
  children,
  className = '',
  animation = 'fadeUp',
  delay = 0,
  duration = 800,
  threshold = 0.15,
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;

    // Set initial state
    el.style.opacity = '0';
    switch (animation) {
      case 'fadeUp':
        el.style.transform = 'translateY(40px)';
        break;
      case 'fadeLeft':
        el.style.transform = 'translateX(-40px)';
        break;
      case 'fadeRight':
        el.style.transform = 'translateX(40px)';
        break;
      case 'scaleIn':
        el.style.transform = 'scale(0.9)';
        break;
      case 'glitchIn':
        el.style.transform = 'translateX(-20px) skewX(5deg)';
        break;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            const animProps: any = {
              opacity: [0, 1],
              duration,
              delay,
              easing: 'easeOutExpo',
            };

            switch (animation) {
              case 'fadeUp':
                animProps.translateY = [40, 0];
                break;
              case 'fadeLeft':
                animProps.translateX = [-40, 0];
                break;
              case 'fadeRight':
                animProps.translateX = [40, 0];
                break;
              case 'scaleIn':
                animProps.scale = [0.9, 1];
                break;
              case 'glitchIn':
                animProps.translateX = [-20, 0];
                animProps.skewX = [5, 0];
                break;
            }

            animate(el, animProps);
            observer.disconnect();
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animation, delay, duration, threshold]);

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform, opacity' }}>
      {children}
    </div>
  );
};
