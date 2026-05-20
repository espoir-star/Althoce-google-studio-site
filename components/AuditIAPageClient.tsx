'use client';

import React, { useState, useEffect, useRef } from 'react';
import { securityItems, heroLogos } from '@/lib/data';
import { FAQAccordion } from '@/components/ui/data-display/FAQAccordion';
import type { FAQv2Item } from '@/lib/data';

const AC = '#2563eb';

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) { setVisible(true); return; }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible] as const;
}

function H2({ children, white = false, style: sx = {} }: { children: React.ReactNode; white?: boolean; style?: React.CSSProperties }) {
  return (
    <h2 style={{ fontSize: 'clamp(26px,3.5vw,44px)', fontWeight: 800, letterSpacing: '-.03em', color: white ? '#fff' : '#09090b', lineHeight: 1.15, ...sx }}>
      {children}
    </h2>
  );
}

const faqAudit: FAQv2Item[] = [
  { q: "Quelle est la différence entre les 30 minutes offertes avec un expert et l'audit IA Althoce ?", a: "Les 30 minutes offertes sont gratuites et servent à qualifier un cas borné : faut-il déployer un agent IA simple, un chatbot RAG, ou cadrer un projet à 1 400 € HT ? C'est l'entrée naturelle. L'audit IA payant sert à cartographier l'ensemble des opportunités IA dans votre entreprise, calculer le ROI projet par projet, et produire 6 livrables actionnables. Il s'adresse aux structures qui veulent une vue d'ensemble avant de lancer plusieurs projets." },
  { q: "Combien coûte un audit IA chez Althoce ?", a: "Sur devis selon scope. Le coût varie selon le format choisi (Express, Standard, Approfondi, Post-incident), le périmètre couvert (une direction ou toute l'entreprise), et la taille de la structure. Tous les chiffrages se font après les 30 minutes offertes avec un expert pour cadrer le scope exact." },
  { q: "Combien de temps prend un audit IA ?", a: "Entre 2 et 6 semaines selon le format. Audit Express : 2 semaines. Audit Standard : 4 semaines. Audit Approfondi sectoriel : 6 semaines. Audit Post-incident : 3 semaines. La restitution se fait en atelier avec direction et DSI, suivie d'une semaine de Q&R pour les précisions." },
  { q: "Que se passe-t-il après l'audit ? Est-on lié à Althoce pour les projets identifiés ?", a: "Non. Aucune clause d'exclusivité. Les 6 livrables vous appartiennent et restent actionnables avec n'importe quel prestataire. Nous proposons logiquement un devis pour les projets prioritaires, mais vous êtes libres de les confier à votre équipe interne, à un freelance, à une autre agence, ou de ne rien lancer du tout." },
  { q: "Comment garantissez-vous la qualité des chiffrages ROI ?", a: "Méthodologie transparente. Chaque calcul ROI s'appuie sur des hypothèses explicites : coût horaire chargé, heures absorbées par le processus, coût build (chiffré au cadrage), coût run mensuel. Vous recevez le tableur source et vous pouvez challenger chaque hypothèse et recalculer vous-même." },
  { q: "Pouvez-vous auditer une solution IA déployée par un autre prestataire ?", a: "Oui. C'est le format Audit Post-incident. Nous auditons l'existant (architecture, conformité, sécurité, performance), identifions les causes des dérives, et proposons un plan de remédiation. Fréquent sur des solutions ChatGPT entreprise mal cadrées, des RPA qui n'ont jamais bien tourné, ou des agents IA externes qui ont créé des incidents." },
];

// ── Audit Report Cover Mockup ─────────────────────────────────
function AuditReportCoverMockup() {
  const livrables = ['Cartographie processus', 'Diagnostic maturité IA', 'ROI projet par projet', 'Feuille de route chiffrée', 'Plan de gouvernance', 'Plan de formation'];
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 380, margin: '0 auto', paddingTop: 28 }}>
      {/* Stacked paper effect — CSS shadows only, no overflow risk */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Back sheet */}
        <div aria-hidden="true" style={{ position: 'absolute', top: 12, left: -10, right: 10, bottom: -12, borderRadius: 18, background: '#e9ecf0', zIndex: 0 }} />
        {/* Mid sheet */}
        <div aria-hidden="true" style={{ position: 'absolute', top: 6, left: -5, right: 5, bottom: -6, borderRadius: 18, background: '#f0f2f5', zIndex: 1 }} />

        {/* Main card */}
        <div style={{ position: 'relative', zIndex: 2, background: '#fff', borderRadius: 18, border: '1px solid #e2e8f0', padding: '24px 24px 20px', boxShadow: '0 16px 48px rgba(0,0,0,.12), 0 2px 8px rgba(0,0,0,.06)' }}>

          {/* Header stripe */}
          <div style={{ height: 3, background: `linear-gradient(90deg,${AC},#7c3aed)`, borderRadius: 9999, marginBottom: 20 }} />

          {/* Client row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div style={{ width: 34, height: 34, borderRadius: 8, background: 'linear-gradient(135deg,#0f172a,#1e293b)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <rect x="2" y="2" width="5" height="5" rx="1.5" fill="#fff" opacity=".9"/>
                <rect x="9" y="2" width="5" height="5" rx="1.5" fill="#fff" opacity=".6"/>
                <rect x="2" y="9" width="5" height="5" rx="1.5" fill="#fff" opacity=".6"/>
                <rect x="9" y="9" width="5" height="5" rx="1.5" fill={AC} opacity=".9"/>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#0f172a' }}>Entreprise confidentielle</div>
              <div style={{ fontSize: 10, color: '#94a3b8' }}>250 salariés · Secteur services</div>
            </div>
          </div>

          {/* Title block */}
          <div style={{ fontSize: 9, fontWeight: 800, color: '#94a3b8', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: 5 }}>Rapport d'audit</div>
          <div style={{ fontSize: 18, fontWeight: 800, color: '#0f172a', letterSpacing: '-.03em', lineHeight: 1.2, marginBottom: 16 }}>
            Audit IA Stratégique<br /><span style={{ color: AC }}>& Cartographie</span>
          </div>

          <div style={{ height: 1, background: '#f1f5f9', marginBottom: 14 }} />

          {/* Livrables */}
          <div style={{ fontSize: 9, fontWeight: 800, color: '#94a3b8', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 10 }}>6 livrables inclus</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            {livrables.map((l, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 16, height: 16, borderRadius: '50%', background: '#f0f7ff', border: `1px solid ${AC}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true"><path d="M1.5 4L3.5 6L6.5 2" stroke={AC} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span style={{ fontSize: 12.5, fontWeight: 600, color: '#374151' }}>{l}</span>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div style={{ marginTop: 18, paddingTop: 14, borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: '#09090b' }}>Althoce<span style={{ color: AC }}>.</span></div>
            <div style={{ fontSize: 10, color: '#94a3b8' }}>Restitution 2026</div>
          </div>
        </div>
      </div>

      {/* Badge floating above the card */}
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', background: '#dcfce7', border: '1px solid #86efac', borderRadius: 9999, padding: '5px 14px', display: 'flex', alignItems: 'center', gap: 6, boxShadow: '0 4px 14px rgba(0,0,0,.10)', zIndex: 10, whiteSpace: 'nowrap' }}>
        <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#16a34a', animation: 'pulseDot 2s ease-in-out infinite' }} />
        <span style={{ fontSize: 10, fontWeight: 800, color: '#15803d' }}>Livré en 2 à 6 semaines</span>
      </div>
    </div>
  );
}

// ── Trust logos band ──────────────────────────────────────────
function TrustLogos() {
  return (
    <section style={{ borderTop: '1px solid #e4e4e7', borderBottom: '1px solid #e4e4e7', padding: '28px 0', background: '#fafafa' }}>
      <p style={{ textAlign: 'center', fontSize: 10, fontWeight: 800, color: '#a1a1aa', letterSpacing: '.14em', textTransform: 'uppercase', marginBottom: 20, paddingInline: 24 }}>Ils nous font confiance</p>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to right,#fafafa,transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to left,#fafafa,transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div className="ticker" role="marquee" aria-label="Logos clients">
          {[...heroLogos, ...heroLogos].map((src, i) => (
            <div key={i} style={{ padding: '0 36px', flexShrink: 0 }}>
              <img src={src} alt="client Althoce" style={{ height: 30, width: 'auto', objectFit: 'contain', opacity: .45, filter: 'grayscale(1)' }} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Section 1 — Hero ──────────────────────────────────────────
function Hero() {
  return (
    <section style={{ padding: '100px 24px 80px', background: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{ position: 'absolute', top: '-10%', right: '-5%', width: 600, height: 600, borderRadius: '50%', background: `radial-gradient(circle,${AC}0e 0%,transparent 65%)`, filter: 'blur(80px)', pointerEvents: 'none' }} />
      <div aria-hidden="true" style={{ position: 'absolute', bottom: '0%', left: '-8%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle,#7c3aed09 0%,transparent 65%)', filter: 'blur(100px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <nav aria-label="Breadcrumb" style={{ marginBottom: 32 }}>
          <ol style={{ display: 'flex', alignItems: 'center', gap: 6, listStyle: 'none', margin: 0, padding: 0, fontSize: 13, color: '#52525b' }}>
            <li><a href="/" style={{ color: '#8a8a95', textDecoration: 'none' }}>Accueil</a></li>
            <li aria-hidden="true" style={{ color: '#d4d4d8' }}>›</li>
            <li><a href="/services/" style={{ color: '#8a8a95', textDecoration: 'none' }}>Services</a></li>
            <li aria-hidden="true" style={{ color: '#d4d4d8' }}>›</li>
            <li style={{ color: '#09090b', fontWeight: 600 }}>Audit IA</li>
          </ol>
        </nav>

        <div className="aud-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
          {/* Left */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 12px', borderRadius: 9999, background: `${AC}10`, border: `1px solid ${AC}25`, fontSize: 12, fontWeight: 800, color: AC, letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 20 }}>
              Audit IA stratégique
            </div>

            <h1 style={{ fontSize: 'clamp(32px,4.5vw,56px)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-.04em', color: '#09090b', marginBottom: 22 }}>
              La cartographie complète des opportunités IA dans votre entreprise.{' '}
              <span style={{ color: AC }}>Pas un PowerPoint de cabinet de conseil.</span>
            </h1>

            <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 28, maxWidth: 520 }}>
              Vous voulez investir dans l'IA mais ne savez pas par où commencer, combien ça coûte, ni ce que ça rapporte. Notre audit livre <strong style={{ color: '#09090b' }}>6 livrables actionnables</strong> : cartographie processus, maturité IA, ROI projet par projet, roadmap chiffrée, gouvernance, formation. Sur devis. Restitution sous 2 à 6 semaines.
            </p>

            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
              {['+150 PME équipées', '6 livrables actionnables', 'Restitution 2 à 6 sem.'].map((t) => (
                <span key={t} style={{ padding: '5px 13px', borderRadius: 9999, background: '#f4f4f5', fontSize: 13, fontWeight: 700, color: '#8a8a95' }}>{t}</span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="/contact" style={{ padding: '13px 26px', borderRadius: 9999, background: '#09090b', color: '#fff', fontSize: 15, fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'transform .15s,box-shadow .15s' }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.transform = 'scale(1.03)'; el.style.boxShadow = '0 6px 24px rgba(0,0,0,.25)'; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.transform = 'scale(1)'; el.style.boxShadow = 'none'; }}>
                Discuter de votre projet →
              </a>
              <a href="#livrables" style={{ padding: '13px 4px', fontSize: 15, fontWeight: 700, color: '#8a8a95', textDecoration: 'none', transition: 'color .15s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#09090b'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#8a8a95'; }}>
                Voir les 6 livrables ↓
              </a>
            </div>
          </div>

          {/* Right — report mockup */}
          <div className="aud-mockup-col" style={{ display: 'flex', justifyContent: 'center', paddingTop: 20, paddingBottom: 20 }}>
            <AuditReportCoverMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Section 2 — Définition ────────────────────────────────────
function Definition() {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} style={{ padding: '80px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all .6s ease' }}>
          <H2 style={{ marginBottom: 24 }}>30 minutes offertes, audit Althoce, audit cabinet conseil. Trois échelles, trois usages.</H2>

          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.8, marginBottom: 18 }}>
            Quand un dirigeant nous dit "je veux un audit IA", il faut clarifier l'échelle. Les <strong style={{ color: '#09090b' }}>30 minutes offertes avec un expert</strong> servent à qualifier un cas borné : faut-il déployer un <a href="/services/agents-ia/" style={{ color: AC, textDecoration: 'none', fontWeight: 700 }}>agent IA</a>, un <a href="/services/chatbot-ia/" style={{ color: AC, textDecoration: 'none', fontWeight: 700 }}>chatbot RAG</a>, ou autre, et chiffrer un projet. C'est gratuit, rapide, l'entrée naturelle vers un projet à 1 400 € HT.
          </p>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.8, marginBottom: 18 }}>
            Notre <strong style={{ color: '#09090b' }}>audit IA payant</strong> sert à cartographier l'ensemble des opportunités IA dans l'entreprise, calculer le ROI projet par projet, et bâtir une feuille de route chiffrée. Pour les structures qui veulent une vue d'ensemble avant d'engager plusieurs projets.
          </p>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.8, marginBottom: 32 }}>
            Un <strong style={{ color: '#09090b' }}>audit cabinet de conseil</strong> (BCG, McKinsey, Accenture) produit un PowerPoint stratégique long, abstrait, présenté en CODIR, souvent à 80 à 200 K€. Nous ne nous battons pas sur ce terrain.
          </p>

          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.8, marginBottom: 32 }}>
            Un audit IA Althoce est conçu pour être <strong style={{ color: '#09090b' }}>directement actionnable</strong>. Chaque opportunité identifiée est chiffrée (coût build, coût run, ROI, payback), priorisée, et associée à un livrable concret : un <a href="/services/agents-ia/" style={{ color: AC, textDecoration: 'none', fontWeight: 700 }}>agent IA</a>, un <a href="/services/automatisation-ia/" style={{ color: AC, textDecoration: 'none', fontWeight: 700 }}>système d'automatisation</a>, un <a href="/services/employe-ia/" style={{ color: AC, textDecoration: 'none', fontWeight: 700 }}>employé IA</a>, ou une <a href="/services/formation-ia/" style={{ color: AC, textDecoration: 'none', fontWeight: 700 }}>formation</a>. Pas de slide générique. Pas de "il faudrait étudier plus en profondeur". À la fin, vous savez quel projet lancer en premier, à quel coût, avec quel payback.
          </p>

          {/* Dark callout */}
          <div className="aud-dark-callout" style={{ background: '#09090b', borderRadius: 20, padding: '32px 36px' }}>
            <div style={{ fontSize: 12, fontWeight: 800, color: `${AC}cc`, textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 18 }}>L'audit IA Althoce répond à 4 questions concrètes</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                'Quels sont les 5 à 10 cas d\'usage IA à plus haut ROI dans mon entreprise, classés par payback ?',
                'Combien coûte chacun (build, run, formation) et combien il rapporte ?',
                'Dans quel ordre les lancer pour minimiser le risque et maximiser l\'apprentissage ?',
                'Quelle gouvernance, quelle conformité RGPD, quelle formation mettre en place pour rendre tout ça pérenne ?',
              ].map((q, i) => (
                <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{ width: 24, height: 24, borderRadius: '50%', background: `${AC}20`, border: `1px solid ${AC}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                    <span style={{ fontSize: 12, fontWeight: 800, color: AC }}>{i + 1}</span>
                  </div>
                  <p style={{ fontSize: 15, color: '#cbd5e1', lineHeight: 1.65, margin: 0 }}>{q}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Section 3 — Comparison ────────────────────────────────────
function ComparisonTable() {
  const [ref, visible] = useInView();
  const compRows = [
    {
      critere: 'Livrable principal',
      cabinet: 'PowerPoint 60–120 slides',
      althoce: 'Rapport 30–60 pages + tableur ROI + roadmap chiffrée',
    },
    {
      critere: 'Chiffrage projet',
      cabinet: 'Rare ou ordres de grandeur',
      althoce: 'Build + run + formation chiffrés projet par projet',
    },
    {
      critere: 'Délai de livraison',
      cabinet: '2 à 6 mois',
      althoce: '2 à 6 semaines selon format',
    },
    {
      critere: 'Suite logique',
      cabinet: 'Nouveau cycle de conseil',
      althoce: 'Lancement direct des projets identifiés',
    },
  ];

  return (
    <section ref={ref} style={{ padding: '80px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all .6s ease' }}>
          <H2 style={{ marginBottom: 12 }}>Audit cabinet de conseil vs Audit Althoce.</H2>
          <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.7, maxWidth: 640, marginBottom: 40 }}>
            Si vous cherchez un PowerPoint stratégique pour votre conseil d'administration, prenez un cabinet. Si vous voulez une cartographie chiffrée et actionnable, voici ce qui change.
          </p>

          {/* Column labels */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12, paddingLeft: 2 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#d4d4d8', flexShrink: 0 }} />
              <span style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em' }}>Cabinet de conseil</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: AC, flexShrink: 0 }} />
              <span style={{ fontSize: 12, fontWeight: 800, color: AC, textTransform: 'uppercase', letterSpacing: '.1em' }}>Audit Althoce</span>
            </div>
          </div>

          {/* Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {compRows.map((row, i) => (
              <div key={i} style={{ borderRadius: 14, border: '1px solid #e4e4e7', overflow: 'hidden', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(12px)', transition: `all .5s ${i * .08}s ease` }}>
                {/* Criterion label */}
                <div style={{ padding: '10px 18px', background: '#f8fafc', borderBottom: '1px solid #e4e4e7' }}>
                  <span style={{ fontSize: 13, fontWeight: 800, color: '#374151', letterSpacing: '-.01em' }}>{row.critere}</span>
                </div>
                {/* Two values side by side */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                  <div style={{ padding: '14px 18px', borderRight: '1px solid #f1f5f9' }}>
                    <div style={{ fontSize: 9, fontWeight: 700, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 5 }}>Cabinet</div>
                    <p style={{ fontSize: 14, color: '#8a8a95', lineHeight: 1.65, margin: 0 }}>{row.cabinet}</p>
                  </div>
                  <div style={{ padding: '14px 18px', background: `${AC}04` }}>
                    <div style={{ fontSize: 9, fontWeight: 700, color: AC, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 5 }}>Althoce</div>
                    <p style={{ fontSize: 14, color: '#09090b', fontWeight: 600, lineHeight: 1.65, margin: 0 }}>{row.althoce}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 14, color: '#8a8a95', lineHeight: 1.7, marginTop: 24, maxWidth: 780 }}>
            Les deux approches sont légitimes dans des contextes différents. Pour une PME ou ETI qui veut passer à l'action en quelques semaines, notre audit livre directement le carburant pour démarrer. Pour qualifier votre besoin, prenez les <strong style={{ color: '#09090b' }}>30 minutes offertes avec un expert</strong> : nous vous orienterons honnêtement.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Section 4 — 6 livrables ───────────────────────────────────
function Livrables() {
  const [ref, visible] = useInView();
  const [open, setOpen] = useState<number | null>(null);

  const livrables = [
    {
      num: '01', title: 'Cartographie des processus IA-éligibles',
      summary: 'Inventaire de vos processus avec qualification IA par processus.',
      detail: 'Inventaire structuré des processus métier par direction et équipe, avec une qualification IA par processus : automatisable simple, automatisable avec agent, automatisable avec employé IA, ou non automatisable à ce stade. Format livré : tableur navigable + carte visuelle des processus.',
      icon: '🗺️',
    },
    {
      num: '02', title: 'Diagnostic de maturité IA',
      summary: 'Score sur 6 axes + benchmark vs PME / ETI comparables.',
      detail: 'Évaluation de votre maturité actuelle sur 6 axes : data, outils, gouvernance, compétences, culture, conformité. Score sur chaque axe + benchmark par rapport à un panel de PME / ETI comparables. Permet d\'identifier les blocages structurels avant tout build technique.',
      icon: '📊',
    },
    {
      num: '03', title: 'ROI projet par projet (top 5 à 10 candidats)',
      summary: 'Coût build, coût run, gains attendus, payback, ROI 3 ans par cas.',
      detail: 'Pour les 5 à 10 cas d\'usage à plus haut potentiel : calcul du coût build, du coût run mensuel, des gains attendus (heures économisées, capacité ajoutée, qualité améliorée), du payback en mois, et du ROI 3 ans. Méthodologie transparente, vous pouvez challenger chaque hypothèse.',
      icon: '💶',
    },
    {
      num: '04', title: 'Feuille de route chiffrée 12 à 24 mois',
      summary: 'Roadmap des projets dans le bon ordre, avec budget et jalons.',
      detail: 'Roadmap proposée des projets IA à lancer dans le bon ordre, avec budget annuel, prérequis (données, outils, équipes), et jalons de validation. Pensée pour minimiser le risque (commencer petit, apprendre, scaler), pas pour maximiser le volume de prestations.',
      icon: '🛣️',
    },
    {
      num: '05', title: 'Plan de gouvernance et conformité',
      summary: 'Qui décide, qui valide, comment gérer les incidents, RGPD.',
      detail: 'Règles internes pour piloter l\'IA dans la durée : qui décide d\'un nouveau projet, qui valide les déploiements, comment gérer les escalades et incidents, comment documenter en RGPD, quels indicateurs suivre. Voir aussi notre service ' + 'Intégration IA pour la mise en œuvre technique.',
      icon: '🛡️',
      link: { text: 'Intégration IA', href: '/services/integration-ia/' },
    },
    {
      num: '06', title: 'Plan de formation associé',
      summary: 'Cartographie des formations par public, budget, dispositifs OPCO.',
      detail: 'Cartographie des formations à prévoir pour chaque public (utilisateurs, pilotes, architectes), planning de déploiement, budget formation, dispositifs OPCO mobilisables.',
      icon: '🎓',
      link: { text: 'Formation IA', href: '/services/formation-ia/' },
    },
  ];

  return (
    <section id="livrables" ref={ref} style={{ padding: '80px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all .6s ease' }}>
          <H2 style={{ marginBottom: 12 }}>Les 6 livrables que vous recevez à la fin de l'audit</H2>
          <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.7, maxWidth: 620, margin: '0 auto' }}>
            Six documents et tableurs que vous gardez, que vous diffusez en interne, et qui restent actionnables 12 mois plus tard. Pas de slide marketing.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {livrables.map((l, i) => (
            <div
              key={i}
              style={{ borderRadius: 14, border: `1.5px solid ${open === i ? AC + '30' : '#e4e4e7'}`, background: open === i ? `${AC}04` : '#fff', overflow: 'hidden', transition: 'all .3s ease', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(16px)', transitionDelay: `${i * .07}s` }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '18px 22px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
              >
                <div style={{ width: 48, height: 48, borderRadius: 12, background: '#f4f4f5', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: 8, fontWeight: 800, color: AC, letterSpacing: '.1em' }}>{l.num}</span>
                  <span style={{ fontSize: 18, lineHeight: 1 }}>{l.icon}</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 16, fontWeight: 800, color: '#09090b', marginBottom: 3, letterSpacing: '-.01em' }}>{l.title}</div>
                  <div style={{ fontSize: 13.5, color: '#8a8a95' }}>{l.summary}</div>
                </div>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" style={{ flexShrink: 0, transform: open === i ? 'rotate(180deg)' : 'none', transition: 'transform .3s ease', color: '#8a8a95' }}>
                  <path d="M4 6L9 11L14 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {open === i && (
                <div className="aud-livrable-detail" style={{ padding: '0 22px 20px 86px' }}>
                  <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.7, margin: 0 }}>
                    {l.detail}
                    {l.link && <>{' '}<a href={l.link.href} style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>{l.link.text}</a> pour en savoir plus.</>}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Section 5 — 4 typologies ──────────────────────────────────
function Typologies() {
  const [ref, visible] = useInView();
  const types = [
    {
      num: '01', title: 'Audit Express', duration: '2 semaines',
      desc: 'Pour les PME qui veulent avancer vite. Périmètre 1 direction (commercial, comptabilité ou support). 4 livrables sur les 6 : cartographie, ROI top 3 cas, roadmap 12 mois, plan formation court. Idéal pour démarrer sans ralentir l\'organisation.',
      color: '#22c55e',
      tags: ['1 direction', '4 livrables', 'PME 20–100 pers.'],
    },
    {
      num: '02', title: 'Audit Standard', duration: '4 semaines',
      desc: 'Le format le plus demandé. Périmètre toute l\'entreprise, 6 livrables complets, atelier de restitution avec direction et DSI, plan de mise en œuvre détaillé pour les 3 premiers projets prioritaires.',
      color: AC,
      tags: ['Toutes directions', '6 livrables', 'PME & ETI'],
    },
    {
      num: '03', title: 'Audit Approfondi sectoriel', duration: '6 semaines',
      desc: 'Pour les ETI ou groupes avec spécificités sectorielles fortes (industrie, santé, finance, juridique). Inclut une analyse des contraintes réglementaires sectorielles (HDS, MIFID, RGPD avancé, IA Act), un benchmark sectoriel, et un volet souveraineté approfondi.',
      color: '#7c3aed',
      tags: ['ETI / Groupes', 'Contraintes sectorielles', '6 livrables + benchmark'],
    },
    {
      num: '04', title: 'Audit Post-incident', duration: '3 semaines',
      desc: 'Vous avez déployé une solution IA qui a posé problème : dérive, fuite de données, hallucination, conformité contestée. Nous auditons l\'existant, identifions les causes, proposons un plan de remédiation. Angle sécurité / conformité prioritaire.',
      color: '#dc2626',
      tags: ['Remédiation', 'Sécurité / conformité', 'Tout périmètre'],
    },
  ];

  return (
    <section ref={ref} style={{ padding: '80px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all .6s ease' }}>
          <H2 style={{ marginBottom: 12 }}>4 formats d'audit selon votre contexte</H2>
          <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.7, maxWidth: 580, margin: '0 auto' }}>
            Tous les audits ne se ressemblent pas. Le bon format est identifié pendant les <strong style={{ color: '#09090b' }}>30 minutes offertes avec un expert</strong>.
          </p>
        </div>

        <div className="aud-types-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16 }}>
          {types.map((t, i) => (
            <div key={i} style={{ borderRadius: 18, border: '1px solid #e4e4e7', padding: '28px 28px 24px', background: '#fafafa', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: `all .6s ${i * .1}s ease`, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: t.color }} />
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 14 }}>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 800, color: t.color, letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: 4 }}>{t.num}</div>
                  <div style={{ fontSize: 17, fontWeight: 800, color: '#09090b', letterSpacing: '-.02em' }}>{t.title}</div>
                </div>
                <div style={{ padding: '4px 12px', borderRadius: 9999, background: `${t.color}12`, border: `1px solid ${t.color}30`, fontSize: 12, fontWeight: 700, color: t.color, flexShrink: 0 }}>{t.duration}</div>
              </div>
              <p style={{ fontSize: 14.5, color: '#8a8a95', lineHeight: 1.7, marginBottom: 16 }}>{t.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {t.tags.map((tag) => (
                  <span key={tag} style={{ padding: '3px 10px', borderRadius: 9999, background: '#f4f4f5', fontSize: 11, fontWeight: 600, color: '#52525b' }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p style={{ fontSize: 14, color: '#8a8a95', textAlign: 'center', marginTop: 24 }}>
          Vous hésitez entre les 4 formats ? Les <strong style={{ color: '#09090b' }}>30 minutes offertes</strong> servent précisément à cadrer le format adapté avant tout devis. <a href="/contact" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>Prendre rendez-vous →</a>
        </p>
      </div>
    </section>
  );
}

// ── Section 6 — Marquee métiers ───────────────────────────────
function Marquee() {
  const tags = [
    'Direction commerciale', 'Finance & comptabilité', 'Support client', 'RH & recrutement',
    'Marketing & contenu', 'Juridique & conformité', 'DSI / Ops IT', 'Logistique & supply chain',
    'R&D & innovation', 'Direction générale', 'Achats', 'Qualité & audit interne',
  ];
  return (
    <section style={{ padding: '56px 0', background: '#fafafa', borderTop: '1px solid #e4e4e7', overflow: 'hidden' }}>
      <p style={{ textAlign: 'center', fontSize: 12, fontWeight: 800, color: '#a1a1aa', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: 20 }}>Directions auditées</p>
      <div style={{ position: 'relative' }}>
        <div aria-hidden="true" style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 120, background: 'linear-gradient(to right,#fafafa,transparent)', zIndex: 2 }} />
        <div aria-hidden="true" style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 120, background: 'linear-gradient(to left,#fafafa,transparent)', zIndex: 2 }} />
        <div style={{ display: 'flex', gap: 12, animation: 'tickerScroll 38s linear infinite', width: 'max-content' }}>
          {[...tags, ...tags].map((t, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 18px', borderRadius: 9999, background: '#fff', border: '1px solid #e4e4e7', fontSize: 14, fontWeight: 600, color: '#374151', whiteSpace: 'nowrap', boxShadow: '0 1px 4px rgba(0,0,0,.04)' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: AC, flexShrink: 0, display: 'inline-block' }} />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Section 7 — Souveraineté ──────────────────────────────────
function Security() {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} style={{ padding: '80px 24px', background: '#09090b', borderTop: '1px solid #1e1e1e' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="v2-grid-hero" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all .6s ease' }}>
            <H2 white style={{ marginBottom: 20 }}>
              Vos données restent vos données.<br /><span style={{ color: AC }}>En Europe, sous votre contrôle.</span>
            </H2>
            <p style={{ fontSize: 16, color: '#94a3b8', lineHeight: 1.75, marginBottom: 32 }}>
              Pendant l'audit, nous traitons des informations sensibles sur vos processus, vos données, vos systèmes. Tout reste confidentiel, hébergé en Union Européenne, avec un accord de confidentialité signé avant le démarrage.
            </p>
          </div>
          <div className="v2-grid2 aud-sec-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all .6s .15s ease' }}>
            {securityItems.map((it, i) => (
              <div key={i} style={{ border: '1px solid #1e1e1e', borderRadius: 16, padding: '24px 20px', background: '#0f0f0f', position: 'relative', overflow: 'hidden' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = `${AC}44`; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = '#1e1e1e'; }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(to right,transparent,${AC}40,transparent)` }} aria-hidden="true" />
                <h3 style={{ fontSize: 14, fontWeight: 800, color: '#d4d4d8', marginBottom: 6, lineHeight: 1.3 }}>{it.title}</h3>
                <p style={{ fontSize: 13, color: '#8a8a95', lineHeight: 1.65 }}>{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Section 10 — FAQ ──────────────────────────────────────────
function FAQ() {
  return (
    <section style={{ padding: '80px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <H2 style={{ marginBottom: 12 }}>Questions fréquentes sur l'audit IA</H2>
          <p style={{ fontSize: 16, color: '#52525b' }}>Chaque question vient vraiment de prospects ou clients. Les réponses sont factuelles, sans jargon.</p>
        </div>
        <FAQAccordion items={faqAudit} />
      </div>
    </section>
  );
}

// ── Section 11 — CTA Final ────────────────────────────────────
function CTAFinal() {
  return (
    <section style={{ padding: '80px 24px', background: '#09090b' }}>
      <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 12px', borderRadius: 9999, background: `${AC}20`, border: `1px solid ${AC}40`, fontSize: 12, fontWeight: 800, color: AC, letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 20 }}>
          30 min offertes avec un expert
        </div>
        <h2 style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 800, color: '#fff', letterSpacing: '-.04em', lineHeight: 1.1, marginBottom: 18 }}>
          Prêt à savoir ce que l'IA peut vraiment faire pour vous ?
        </h2>
        <p style={{ fontSize: 16, color: '#94a3b8', lineHeight: 1.7, marginBottom: 36 }}>
          30 minutes avec un expert Althoce. Vous repartez avec une direction claire : format d'audit adapté, scope, estimation. Ou avec le chiffrage d'un projet simple si c'est ce dont vous avez besoin.
        </p>
        <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px', borderRadius: 9999, background: AC, color: '#fff', fontSize: 16, fontWeight: 700, textDecoration: 'none', transition: 'transform .15s,box-shadow .15s' }}
          onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.transform = 'scale(1.03)'; el.style.boxShadow = `0 8px 32px ${AC}50`; }}
          onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.transform = 'scale(1)'; el.style.boxShadow = 'none'; }}>
          Discuter de votre projet →
        </a>
      </div>
    </section>
  );
}

// ── Global styles ─────────────────────────────────────────────
const globalStyles = `
  @keyframes tickerScroll {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
`;

export default function AuditIAPageClient() {
  return (
    <main>
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      <Hero />
      <TrustLogos />
      <Definition />
      <ComparisonTable />
      <Livrables />
      <Typologies />
      <Marquee />
      <Security />
      <FAQ />
      <CTAFinal />
    </main>
  );
}
