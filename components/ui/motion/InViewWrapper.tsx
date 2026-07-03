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
  // SEO : visible par défaut — le HTML servi au crawler contient le contenu (opacity 1).
  // Le masquage + animation ne s'appliquent qu'au montage JS, sous la ligne de flottaison.
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    setVisible(false);
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.12 });
    obs.observe(el);
    // Failsafe : le renderer de Google ne scrolle pas — révèle après 3s.
    const failsafe = setTimeout(() => { setVisible(true); obs.disconnect(); }, 3000);
    return () => { clearTimeout(failsafe); obs.disconnect(); };
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
