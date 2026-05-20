'use client';

/** Fades-in children when they enter the viewport. Respects prefers-reduced-motion. */

import React, { useRef, useState, useEffect } from 'react';

interface InViewWrapperProps {
  children: React.ReactNode;
  /** Delay in ms before the fade starts, used for staggered children. */
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  as?: keyof React.JSX.IntrinsicElements;
}

export function InViewWrapper({ children, delay = 0, className = '', style, as: Tag = 'div' }: InViewWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) { setVisible(true); return; }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const Component = Tag as React.ElementType;
  return (
    <Component
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(20px)',
        transition: `opacity .6s ${delay}ms ease, transform .6s ${delay}ms ease`,
        ...style,
      }}
    >
      {children}
    </Component>
  );
}
