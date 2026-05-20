'use client';

/** Infinite horizontal marquee (ticker) — wraps children, doubles them for seamless loop. */

import React from 'react';

interface MarqueeProps {
  children: React.ReactNode;
  slow?: boolean;
  className?: string;
}

export function Marquee({ children, slow = false, className = '' }: MarqueeProps) {
  return (
    <div style={{ overflow: 'hidden', position: 'relative' }} className={className}>
      <div className={slow ? 'ticker-slow' : 'ticker'} style={{ gap: 0 }}>
        {children}
        {children}
      </div>
    </div>
  );
}
