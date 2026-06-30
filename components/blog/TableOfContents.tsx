'use client';

import { useEffect, useState } from 'react';
import type { TocItem } from '@/lib/extract-toc';

interface Props {
  items: TocItem[];
}

export default function TableOfContents({ items }: Props) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav
      aria-label="Sommaire de l'article"
      style={{ paddingRight: 8 }}
    >
      <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', color: '#a1a1aa', marginBottom: 16 }}>
        Sommaire
      </p>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
        {items.map((item) => (
          <li key={item.id} style={{ paddingLeft: item.level === 3 ? 12 : 0 }}>
            <a
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(item.id);
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  window.history.pushState(null, '', `#${item.id}`);
                }
              }}
              style={{
                display: 'block',
                padding: '5px 0 5px 12px',
                borderLeft: `2px solid ${activeId === item.id ? '#2563eb' : '#e4e4e7'}`,
                fontSize: 13.5,
                lineHeight: 1.45,
                color: activeId === item.id ? '#09090b' : '#71717a',
                fontWeight: activeId === item.id ? 600 : 400,
                textDecoration: 'none',
                transition: 'color .15s, border-color .15s',
              }}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
