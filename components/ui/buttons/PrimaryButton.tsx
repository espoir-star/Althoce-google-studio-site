'use client';

/** Dark pill CTA button — primary action across all v2 sections. */

import React from 'react';

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: 'button' | 'submit';
}

export function PrimaryButton({ children, onClick, href, className = '', type = 'button' }: PrimaryButtonProps) {
  const base: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: '13px 26px',
    borderRadius: 9999,
    background: '#09090b',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontSize: 14,
    fontWeight: 700,
    fontFamily: 'inherit',
    transition: 'transform .15s, box-shadow .15s',
    textDecoration: 'none',
  };

  const handleEnter = (e: React.MouseEvent<HTMLElement>) => {
    (e.currentTarget as HTMLElement).style.transform = 'scale(1.03)';
    (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 24px rgba(0,0,0,.25)';
  };
  const handleLeave = (e: React.MouseEvent<HTMLElement>) => {
    (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
  };

  if (href) {
    return (
      <a href={href} style={base} className={className} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} style={base} className={className} onClick={onClick} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      {children}
    </button>
  );
}
