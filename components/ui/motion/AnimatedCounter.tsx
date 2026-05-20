'use client';

/** Animates a number from 0 to target when it enters the viewport. */

import { useRef, useState, useEffect } from 'react';

interface AnimatedCounterProps {
  /** Numeric target value (e.g. 150 for "+150"). */
  target: number;
  /** String prefix like '+' or '-' or ''. */
  prefix?: string;
  /** String suffix like '%', ' M€', etc. */
  suffix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({ target, prefix = '', suffix = '', duration = 2000, className = '' }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) { setCount(target); return; }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setStarted(true); obs.disconnect(); }
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  useEffect(() => {
    if (!started) return;
    const steps = 60;
    const stepTime = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(target * eased));
      if (step >= steps) { setCount(target); clearInterval(timer); }
    }, stepTime);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return (
    <span ref={ref} className={className} style={{ fontVariantNumeric: 'tabular-nums' }}>
      {prefix}{count}{suffix}
    </span>
  );
}
