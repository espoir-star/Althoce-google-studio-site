'use client';

/** Outlined ghost pill button — secondary actions (outline, hover-fill with accent). */

import React from 'react';

interface GhostButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  accentFill?: boolean;
  className?: string;
}

export function GhostButton({ children, onClick, href, accentFill = false, className = '' }: GhostButtonProps) {
  const AC = '#2563eb';
  const base: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: '12px 24px',
    borderRadius: 9999,
    background: 'transparent',
    color: AC,
    border: `1px solid ${AC}40`,
    cursor: 'pointer',
    fontSize: 14,
    fontWeight: 700,
    fontFamily: 'inherit',
    transition: 'all .15s',
    textDecoration: 'none',
  };

  const handleEnter = (e: React.MouseEvent<HTMLElement>) => {
    if (accentFill) {
      (e.currentTarget as HTMLElement).style.background = AC;
      (e.currentTarget as HTMLElement).style.color = '#fff';
    } else {
      (e.currentTarget as HTMLElement).style.background = '#f9fafb';
    }
  };
  const handleLeave = (e: React.MouseEvent<HTMLElement>) => {
    (e.currentTarget as HTMLElement).style.background = 'transparent';
    (e.currentTarget as HTMLElement).style.color = AC;
  };

  if (href) {
    return (
      <a href={href} style={base} className={className} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" style={base} className={className} onClick={onClick} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      {children}
    </button>
  );
}
