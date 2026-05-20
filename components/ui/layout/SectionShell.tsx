/** Wrapper for a standard page section — controls max-width, padding, and background. */

import React from 'react';

interface SectionShellProps {
  children: React.ReactNode;
  id?: string;
  dark?: boolean;
  /** Extra Tailwind classes on the outer <section>. */
  className?: string;
  /** Extra Tailwind classes on the inner content container. */
  innerClassName?: string;
}

export function SectionShell({ children, id, dark = false, className = '', innerClassName = '' }: SectionShellProps) {
  return (
    <section
      id={id}
      className={`border-t py-24 px-6 ${dark ? 'bg-[#09090b] border-[#1a1a1a]' : 'bg-white border-[#e4e4e7]'} ${className}`}
    >
      <div className={`max-w-[1160px] mx-auto ${innerClassName}`}>
        {children}
      </div>
    </section>
  );
}
