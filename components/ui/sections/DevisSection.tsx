'use client';

/**
 * Section devis — remplace les anciennes sections Pricing.
 * On vend une mission et des livrables : le chiffrage se construit au cadrage,
 * cette section explique les facteurs qui le font varier.
 */

import React, { useState, useEffect, useRef } from 'react';

const AC = '#2563eb';

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  // SEO : visible par defaut — le HTML servi au crawler contient tout le contenu.
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    setVisible(false);
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    const failsafe = setTimeout(() => { setVisible(true); obs.disconnect(); }, 3000);
    return () => { clearTimeout(failsafe); obs.disconnect(); };
  }, [threshold]);
  return [ref, visible] as const;
}

const facteurs = [
  { title: 'Vos outils', desc: "Un connecteur natif ne demande pas le même travail qu'un logiciel sans API." },
  { title: 'Le périmètre', desc: "Une tâche bornée et un processus complet ne sont pas le même projet." },
  { title: 'La souveraineté', desc: "Hébergement dédié, conformité IA Act, supervision renforcée : ces exigences changent l'architecture." },
  { title: 'Votre organisation', desc: "Un site avec un décideur, ou plusieurs sites avec plusieurs directions." },
];

const reassurance = ['Devis sous 48 heures', 'Aucun engagement', 'Réponse honnête si nous ne sommes pas le bon partenaire'];

function CheckIcon({ dark = false }: { dark?: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" style={{ flexShrink: 0 }} aria-hidden="true">
      <circle cx="9" cy="9" r="8" fill={dark ? `${AC}15` : '#f0f7ff'} stroke={AC} strokeWidth="1.5" />
      <path d="M6 9L8 11L12 7" stroke={AC} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Bloc sombre : l'engagement sur le devis ferme + le CTA. */
function DarkBlock({ visible }: { visible: boolean }) {
  return (
    <div style={{ borderRadius: 28, padding: '48px 40px', background: 'linear-gradient(135deg,#09090b 0%,#0d1117 100%)', border: `2px solid ${AC}`, position: 'relative', textAlign: 'center', maxWidth: 900, margin: '0 auto', boxShadow: `0 20px 60px ${AC}20`, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: 'all .6s .3s ease' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,transparent,${AC},transparent)`, borderRadius: '28px 28px 0 0' }} aria-hidden="true" />
      <h3 style={{ fontSize: 'clamp(20px,2.4vw,28px)', fontWeight: 800, letterSpacing: '-.03em', color: '#fff', lineHeight: 1.2, marginBottom: 16 }}>
        Un devis ferme, <span style={{ color: '#93c5fd' }}>pas une fourchette</span>
      </h3>
      <p style={{ fontSize: 16, color: '#a1a1aa', lineHeight: 1.75, maxWidth: 560, margin: '0 auto 32px' }}>
        Après 30 minutes d'échange, vous repartez avec un chiffrage engageant et un périmètre écrit.
        Si un outil du marché suffit, on vous le dit et on ne développe pas.
      </p>
      <a href="/contact/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 9999, background: AC, color: '#fff', fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: 'transform .2s', boxShadow: `0 4px 16px ${AC}40` }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; }}>
        Obtenir un devis →
      </a>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px 28px', marginTop: 32 }}>
        {reassurance.map((r) => (
          <div key={r} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 600, color: '#a1a1aa' }}>
            <CheckIcon dark />
            <span>{r}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

interface DevisSectionProps {
  /** `compact` n'affiche que le bloc sombre et le CTA. */
  variant?: 'default' | 'compact';
  id?: string;
  /** Fond de section — `#fafafa` sur les pages service, `#fff` sur la home. */
  background?: string;
}

export function DevisSection({ variant = 'default', id, background = '#fafafa' }: DevisSectionProps) {
  const [ref, visible] = useInView();
  return (
    <section id={id} ref={ref} style={{ padding: variant === 'compact' ? '72px 24px' : '96px 24px', background, borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        {variant === 'default' && (
          <>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <h2 style={{ fontSize: 'clamp(26px,3.5vw,44px)', fontWeight: 800, letterSpacing: '-.03em', color: '#09090b', lineHeight: 1.12, marginBottom: 14 }}>
                Chaque projet est chiffré sur mesure
              </h2>
              <p style={{ fontSize: 16, color: '#52525b', maxWidth: 480, margin: '0 auto', lineHeight: 1.75 }}>
                Voici ce qui fait varier le devis.
              </p>
            </div>
            <div className="v2-grid2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20, maxWidth: 900, margin: '0 auto 40px' }}>
              {facteurs.map((f, i) => (
                <div key={f.title} style={{ border: '1px solid #e4e4e7', borderRadius: 20, padding: '28px 26px', background: '#fff', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: `all .6s ${i * .08}s ease`, boxShadow: '0 4px 20px rgba(0,0,0,.04)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                    <CheckIcon />
                    <h3 style={{ fontSize: 16, fontWeight: 800, color: '#09090b', letterSpacing: '-.01em' }}>{f.title}</h3>
                  </div>
                  <p style={{ fontSize: 14, color: '#52525b', lineHeight: 1.7 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </>
        )}
        <DarkBlock visible={visible} />
      </div>
    </section>
  );
}
