'use client';

import React, { useState } from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';
import type { BlogPost } from '../lib/blog';

const CATEGORY_STYLES: Record<string, { bg: string; color: string; border: string }> = {
  "Cas d'usage":   { bg: '#eff6ff', color: '#2563eb', border: '#bfdbfe' },
  "Guide pratique":{ bg: '#eff6ff', color: '#2563eb', border: '#bfdbfe' },
  "Décryptage":    { bg: '#fefce8', color: '#a16207', border: '#fef08a' },
  "Coulisses":     { bg: '#f0fdf4', color: '#15803d', border: '#bbf7d0' },
};

const DEFAULT_CAT_STYLE = { bg: '#f4f4f5', color: '#52525b', border: '#e4e4e7' };

const ALL_CATEGORIES = ["Tous", "Cas d'usage", "Guide pratique", "Décryptage", "Coulisses"];

export default function BlogIndexClient({ posts }: { posts: BlogPost[] }) {
  const [activeCategory, setActiveCategory] = useState('Tous');

  const filtered = activeCategory === 'Tous' ? posts : posts.filter(p => p.category === activeCategory);

  return (
    <div style={{ paddingTop: 96, paddingBottom: 80, minHeight: '100vh', background: '#fafafa' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 14px', borderRadius: 9999, background: '#eff6ff', border: '1px solid #bfdbfe', fontSize: 12, fontWeight: 700, color: '#2563eb', letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 20 }}>
            <BookOpen style={{ width: 12, height: 12 }} />
            Blog
          </div>
          <h1 style={{ fontSize: 'clamp(30px,4vw,52px)', fontWeight: 800, letterSpacing: '-.04em', color: '#09090b', lineHeight: 1.1, marginBottom: 16 }}>
            Nos <span style={{ color: '#2563eb' }}>insights</span>
          </h1>
          <p style={{ fontSize: 17, color: '#52525b', lineHeight: 1.7, maxWidth: 520, margin: '0 auto' }}>
            Cas d'usage, guides pratiques et décryptages sur l'IA pour les PME françaises.
          </p>
        </div>

        {/* Category filters */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8, marginBottom: 48 }}>
          {ALL_CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '8px 18px', borderRadius: 9999, fontSize: 14, fontWeight: 600,
                border: `1px solid ${activeCategory === cat ? '#09090b' : '#e4e4e7'}`,
                background: activeCategory === cat ? '#09090b' : '#fff',
                color: activeCategory === cat ? '#fff' : '#52525b',
                cursor: 'pointer', transition: 'all .15s', fontFamily: 'inherit',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <p style={{ color: '#a1a1aa', fontSize: 17 }}>Aucun article publié pour l'instant.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
            {filtered.map((post) => {
              const cs = CATEGORY_STYLES[post.category] ?? DEFAULT_CAT_STYLE;
              return (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  style={{ background: '#fff', borderRadius: 20, border: '1px solid #e4e4e7', padding: 24, display: 'flex', flexDirection: 'column', textDecoration: 'none', transition: 'box-shadow .2s, border-color .2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,.08)'; e.currentTarget.style.borderColor = '#d4d4d8'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#e4e4e7'; }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                    <span style={{ padding: '4px 12px', borderRadius: 9999, fontSize: 11, fontWeight: 700, background: cs.bg, color: cs.color, border: `1px solid ${cs.border}` }}>
                      {post.category}
                    </span>
                    <span style={{ fontSize: 13, color: '#71717a' }}>{post.readingTime}</span>
                  </div>
                  <h2 style={{ fontSize: 17, fontWeight: 700, color: '#09090b', marginBottom: 10, lineHeight: 1.4, flex: 1 }}>
                    {post.title}
                  </h2>
                  <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.68, marginBottom: 16 }}>{post.excerpt}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 16, borderTop: '1px solid #f4f4f5' }}>
                    <span style={{ fontSize: 13, color: '#71717a' }}>
                      {new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </span>
                    <span style={{ fontSize: 13.5, fontWeight: 600, color: '#2563eb', display: 'flex', alignItems: 'center', gap: 4 }}>
                      Lire <ArrowRight style={{ width: 14, height: 14 }} />
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
