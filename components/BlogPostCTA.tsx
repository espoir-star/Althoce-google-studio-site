'use client';

import React from 'react';

export default function BlogPostCTA() {
  return (
    <section style={{ padding: '0 0 32px' }}>
      <style>{`
        .bpcta-wrap  { padding: 72px 48px; border-radius: 32px; }
        .bpcta-title { font-size: clamp(24px, 4vw, 48px); }
        .bpcta-desc  { display: block; }
        @media (max-width: 640px) {
          .bpcta-wrap  { padding: 40px 24px; border-radius: 20px; }
          .bpcta-desc  { display: none; }
        }
      `}</style>

      <div
        className="bpcta-wrap"
        style={{
          background: '#09090b',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Ambiance lumineuse — identique au footer CTA */}
        <div style={{ position: 'absolute', top: -80, left: -80,  width: 320, height: 320, background: 'radial-gradient(circle,#2563eb35,transparent)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -80, right: -80, width: 320, height: 320, background: 'radial-gradient(circle,#3b82f625,transparent)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 600, margin: '0 auto' }}>
          <h2
            className="bpcta-title"
            style={{ fontWeight: 800, letterSpacing: '-.04em', color: '#fff', lineHeight: 1.1, marginBottom: 16 }}
          >
            Prêt à déployer votre premier agent IA ?
          </h2>

          <p
            className="bpcta-desc"
            style={{ fontSize: 16, color: '#a1a1aa', marginBottom: 32, lineHeight: 1.7 }}
          >
            30 minutes d'échange, trois idées concrètes d'automatisation — même si on ne travaille pas ensemble.
          </p>

          <a
            href="/contact/"
            style={{
              padding: '14px 28px',
              borderRadius: 9999,
              background: '#fff',
              color: '#09090b',
              border: 'none',
              cursor: 'pointer',
              fontSize: 14,
              fontWeight: 700,
              fontFamily: 'inherit',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 16,
              textDecoration: 'none',
              transition: 'transform .15s, box-shadow .15s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.03)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(255,255,255,.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Discutons de votre projet →
          </a>

          <p style={{ fontSize: 13, color: '#71717a' }}>
            Sans engagement · 30 min offertes · Réponse sous 24h
          </p>
        </div>
      </div>
    </section>
  );
}
