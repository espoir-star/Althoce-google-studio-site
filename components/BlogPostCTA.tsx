'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function BlogPostCTA() {
  return (
    <>
      <style>{`
        .bpcta-card { padding: 48px 40px; border-radius: 24px; }
        .bpcta-title { font-size: 24px; }
        .bpcta-desc { display: block; }
        @media (max-width: 600px) {
          .bpcta-card { padding: 32px 20px; border-radius: 16px; }
          .bpcta-title { font-size: 20px; }
          .bpcta-desc { display: none; }
        }
      `}</style>
      <div className="bpcta-card" style={{ background: '#09090b', textAlign: 'center', position: 'relative', overflow: 'hidden', marginBottom: 32, border: '1px solid #1a1a1a' }}>
        <div style={{ position: 'absolute', top: -80, left: -80, width: 280, height: 280, background: 'radial-gradient(circle,#2563eb22,transparent)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -80, right: -80, width: 280, height: 280, background: 'radial-gradient(circle,#3b82f614,transparent)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg,transparent,#2563eb40,transparent)' }} aria-hidden="true" />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 12px', borderRadius: 9999, background: 'rgba(37,99,235,.14)', border: '1px solid rgba(37,99,235,.28)', fontSize: 12, fontWeight: 800, color: '#93c5fd', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 16 }}>
            Audit offert
          </div>
          <h3 className="bpcta-title" style={{ fontWeight: 800, color: '#fff', marginBottom: 12, letterSpacing: '-.03em', lineHeight: 1.2 }}>
            Prêt à passer à l'action ?
          </h3>
          <p className="bpcta-desc" style={{ color: '#52525b', marginBottom: 24, fontSize: 16, lineHeight: 1.68 }}>
            Discutons de votre premier agent IA lors d'un audit gratuit.
          </p>
          <a
            href="/contact"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 26px', background: '#fff', color: '#09090b', borderRadius: 9999, fontWeight: 700, fontSize: 15, textDecoration: 'none', transition: 'transform .18s cubic-bezier(.16,1,.3,1), box-shadow .18s ease', marginTop: 4, boxShadow: '0 2px 8px rgba(0,0,0,.16)' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(255,255,255,.18)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,.16)'; }}
          >
            Réserver un audit gratuit
            <ArrowRight style={{ width: 15, height: 15 }} />
          </a>
        </div>
      </div>
    </>
  );
}
