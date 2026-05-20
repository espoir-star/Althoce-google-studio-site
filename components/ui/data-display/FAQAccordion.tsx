'use client';

import { useState } from 'react';
import type { FAQv2Item } from '@/lib/data';

const AC = '#2563eb';

interface FAQAccordionProps {
  items: FAQv2Item[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0, border: '1px solid #e4e4e7', borderRadius: 18, overflow: 'hidden', background: '#fff', boxShadow: '0 2px 12px rgba(0,0,0,.04)' }}>
      {items.map((f, i) => {
        const isOpen = open === i;
        const isLast = i === items.length - 1;
        return (
          <div
            key={i}
            style={{ borderBottom: isLast ? 'none' : '1px solid #f0f0f0', background: isOpen ? `${AC}03` : '#fff', transition: 'background .2s ease' }}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              style={{ width: '100%', textAlign: 'left', padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, fontFamily: 'inherit' }}
              aria-expanded={isOpen}
            >
              <span style={{ fontSize: 15, fontWeight: 700, color: isOpen ? AC : '#09090b', flex: 1, lineHeight: 1.45, letterSpacing: '-.01em', transition: 'color .2s ease' }}>{f.q}</span>
              <span style={{ flexShrink: 0, width: 26, height: 26, borderRadius: '50%', background: isOpen ? AC : '#f4f4f5', color: isOpen ? '#fff' : '#71717a', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background .22s ease, color .22s ease, transform .22s ease', transform: isOpen ? 'rotate(45deg)' : 'none', fontSize: 18, fontWeight: 300, lineHeight: 1, paddingBottom: 1 }}>
                +
              </span>
            </button>
            <div className={`faq-body${isOpen ? ' open' : ''}`}>
              <p style={{ padding: '0 24px 22px', fontSize: 14.5, color: '#52525b', lineHeight: 1.75 }}>
                {f.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
