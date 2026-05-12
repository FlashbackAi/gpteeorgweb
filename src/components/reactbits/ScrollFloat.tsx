import React, { useEffect, useMemo, useRef, useState, ReactNode, RefObject } from 'react';

interface ScrollFloatProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
  splitBy?: 'char' | 'word';
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  containerClassName = '',
  textClassName = '',
  animationDuration = 0.6,
  ease = 'cubic-bezier(0.22, 1, 0.36, 1)',
  stagger = 0.1,
  splitBy = 'char',
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const [visible, setVisible] = useState(false);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    if (splitBy === 'word') {
      return text.split(/(\s+)/).map((part, index) =>
        /^\s+$/.test(part) ? (
          <span key={index}>{part}</span>
        ) : (
          <span className="sf-piece" key={index} style={{ display: 'inline-block', animationDelay: `${(index / 2) * stagger}s` }}>{part}</span>
        )
      );
    }
    return text.split('').map((char, index) => (
      <span
        className="sf-piece"
        key={index}
        style={{ display: 'inline-block', animationDelay: `${index * stagger}s` }}
      >
        {char === ' ' ? ' ' : char}
      </span>
    ));
  }, [children, splitBy, stagger]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25, rootMargin: '0px 0px -10% 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <h2
      ref={containerRef}
      className={`overflow-visible ${containerClassName} ${visible ? 'sf-visible' : ''}`}
      style={{ transform: 'translateZ(0)', contain: 'layout paint' }}
    >
      <span className={`inline-block text-[clamp(2.5rem,8vw,5rem)] leading-[1.2] ${textClassName}`}>{splitText}</span>
      <style>{`
        .sf-piece {
          opacity: 0;
          transform: translate3d(0, 28px, 0);
          will-change: opacity, transform;
          backface-visibility: hidden;
        }
        .sf-visible .sf-piece {
          animation: sfRise ${animationDuration}s ${ease} forwards;
        }
        @keyframes sfRise {
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>
    </h2>
  );
};

export default ScrollFloat;
