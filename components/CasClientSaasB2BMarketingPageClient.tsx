'use client';

import React, { useState, useEffect, useRef } from 'react';
import { steps } from '@/lib/data';

const AC     = '#2563eb';
const ORANGE = '#ea580c';
const RED    = '#ef4444';
const AMBER  = '#d97706';
const GREEN  = '#16a34a';

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

function H2({ children, style: sx = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <h2 style={{ fontSize: 'clamp(22px,2.8vw,36px)', fontWeight: 800, letterSpacing: '-.03em', color: '#09090b', lineHeight: 1.15, ...sx }}>
      {children}
    </h2>
  );
}

// ── Hero Stat ─────────────────────────────────────────────────
function HeroStat() {
  const [count, setCount] = useState(false);
  useEffect(() => { const t = setTimeout(() => setCount(true), 400); return () => clearTimeout(t); }, []);
  return (
    <div style={{ borderRadius: 24, background: '#09090b', border: '1px solid #1a1a1a', padding: '48px 36px', position: 'relative', overflow: 'hidden', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 260 }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.018) 1px,transparent 1px)', backgroundSize: '32px 32px' }} />
      <div aria-hidden="true" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 320, height: 220, background: `radial-gradient(ellipse,${ORANGE}18 0%,transparent 65%)`, filter: 'blur(40px)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', zIndex: 1, opacity: count ? 1 : 0, transform: count ? 'none' : 'translateY(16px)', transition: 'all .6s ease' }}>
        <div style={{ fontSize: 'clamp(72px,10vw,120px)', fontWeight: 900, color: ORANGE, letterSpacing: '-.06em', lineHeight: 0.9, marginBottom: 16 }}>×4</div>
        <div style={{ fontSize: 16, fontWeight: 700, color: '#a1a1aa', lineHeight: 1.65, maxWidth: 240 }}>production de contenu sans embauche</div>
        <div style={{ marginTop: 12, fontSize: 14, color: '#3f3f46', fontWeight: 500 }}>1 article/mois → 4 · 4 posts → 12 · séquences ×7,5</div>
      </div>
      <div style={{ position: 'absolute', bottom: 16, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 20, zIndex: 1 }}>
        {[{ v: '+140 %', l: 'trafic organique 6 mois' }, { v: '11 %', l: 'détection IA (test blind)' }, { v: '60', l: 'emails nurture / mois' }].map((s, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 15, fontWeight: 900, color: ORANGE }}>{s.v}</div>
            <div style={{ fontSize: 10, color: '#3f3f46', fontWeight: 500 }}>{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{ padding: '120px 24px 80px', position: 'relative', overflow: 'hidden', borderBottom: '1px solid #e4e4e7' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: 500, height: 500, borderRadius: '50%', background: `radial-gradient(circle,${ORANGE}0a 0%,transparent 65%)`, filter: 'blur(80px)', animation: 'gradDrift1 14s ease-in-out infinite' }} />
      </div>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.025) 1px,transparent 1px)', backgroundSize: '48px 48px', maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%,black,transparent)', zIndex: 0 }} aria-hidden="true" />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1160, margin: '0 auto' }}>
        <div className="cc6-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: '#a1a1aa', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', fontWeight: 500 }}>
              <a href="/" style={{ color: '#8a8a95', textDecoration: 'none' }}>Accueil</a><span>›</span>
              <a href="/cas-clients/" style={{ color: '#8a8a95', textDecoration: 'none' }}>Cas clients</a><span>›</span>
              <span style={{ color: '#09090b' }}>Éditeur SaaS B2B marketing</span>
            </nav>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 20 }}>
              {['Content Marketing', 'Éditeur SaaS B2B', '90 collab.', '1 500 clients PME', 'cas anonymisé · 2025-2026'].map((t) => (
                <span key={t} style={{ padding: '3px 10px', borderRadius: 9999, background: '#f4f4f5', fontSize: 11, fontWeight: 700, color: '#8a8a95' }}>{t}</span>
              ))}
            </div>
            <h1 style={{ fontSize: 'clamp(26px,3.8vw,48px)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-.03em', color: '#09090b', marginBottom: 20 }}>
              Production de contenu multipliée par 4 et trafic organique +140 % pour un éditeur SaaS B2B.
            </h1>
            <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 28, maxWidth: 520 }}>
              90 collaborateurs, 1 500 clients PME, une équipe marketing 3 personnes étranglée par l'ambition content de la direction. Un agent IA marketing déployé en 3 semaines avec cadrage strict du ton de marque. Voici comment l'équipe a multiplié sa production par 4 sans embaucher de content manager.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="/contact" style={{ padding: '14px 28px', borderRadius: 9999, background: '#09090b', color: '#fff', textDecoration: 'none', fontSize: 15, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'transform .15s,box-shadow .15s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.03)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 6px 24px rgba(0,0,0,.25)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'; }}>
                Discuter de votre projet →
              </a>
              <a href="#resultats" style={{ padding: '14px 28px', borderRadius: 9999, border: '1.5px solid #e4e4e7', color: '#09090b', textDecoration: 'none', fontSize: 15, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, background: '#fff', transition: 'border-color .15s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = ORANGE; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#e4e4e7'; }}>
                Voir les résultats ↓
              </a>
            </div>
          </div>
          <div className="cc6-stat-col"><HeroStat /></div>
        </div>
      </div>
    </section>
  );
}

// ── Le Client ─────────────────────────────────────────────────
function LeClient() {
  const [ref, visible] = useInView(0.08);
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all .6s ease' }}>
        <H2 style={{ marginBottom: 28 }}>L'éditeur SaaS : 3 marketeurs pour soutenir l'ambition d'une vraie content factory</H2>
        <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.8, marginBottom: 24 }}>
          L'éditeur SaaS B2B (nom anonymisé) propose une plateforme spécialisée pour les PME françaises 50-250 collaborateurs. <strong style={{ color: '#09090b' }}>90 collaborateurs</strong> : product/engineering 35, customer success 15, commercial 12, marketing 3, support 12, ops 8, direction 5. Croissance organique <strong style={{ color: '#09090b' }}>+60 % par an</strong> depuis 3 ans. <strong style={{ color: '#09090b' }}>1 500 clients actifs</strong> à fin 2025. La direction commerciale et la direction générale avaient validé une stratégie content marketing ambitieuse comme accélérateur principal de la croissance pour les 18 mois à venir.
        </p>
        <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.8, marginBottom: 32 }}>
          L'équipe marketing 3 personnes (1 responsable, 1 chargée content et social, 1 chargé acquisition payante) tenait un rythme tenable d'environ <strong style={{ color: '#09090b' }}>25 % de l'ambition</strong> : 1 article SEO par mois au lieu de 4, 4 posts LinkedIn par mois au lieu de 12, séquences nurture génériques au lieu de segmentées par persona. La direction commençait à parler d'un recrutement content manager senior (~55-65 k€ chargés).
        </p>
        <div style={{ padding: '28px 32px', borderRadius: 20, background: '#fafafa', border: '1px solid #e4e4e7', borderLeft: `4px solid ${ORANGE}` }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: ORANGE, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 14 }}>Le gap entre ambition et capacité</div>
          <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75 }}>
            La responsable marketing nous a contactés via la communauté Product Marketing Alliance. Son diagnostic était précis : <strong style={{ color: '#09090b' }}>l'équipe passait 50 % de son temps en production opérationnelle</strong>, sans jamais avoir le temps de travailler la stratégie de positionnement, les partenariats ou les événements. Un recrutement aurait coûté 60 k€/an pour un résultat partiel. Un agent IA marketing a tout changé en 3 semaines.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Avant Althoce ─────────────────────────────────────────────
function AvantAlthoce() {
  const [ref, visible] = useInView(0.06);
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        <H2 style={{ marginBottom: 40 }}>La situation avant : ambition 4× supérieure à la capacité humaine</H2>
        <div className="cc6-avant-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 36 }}>
          <div style={{ borderRadius: 18, background: '#fff', border: `1px solid ${RED}22`, overflow: 'hidden', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(-16px)', transition: 'all .6s ease' }}>
            <div style={{ padding: '16px 22px', background: `${RED}08`, borderBottom: `1px solid ${RED}15`, display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: RED }} />
              <span style={{ fontSize: 13, fontWeight: 800, color: RED, textTransform: 'uppercase', letterSpacing: '.08em' }}>Côté production</span>
            </div>
            <div style={{ padding: '8px 0' }}>
              {[
                '1 article SEO publié par mois (objectif : 4)',
                '4 posts LinkedIn / mois (objectif : 12, dont 3 CEO)',
                '1 newsletter / mois avec retards récurrents',
                'Séquences nurture : 1 générique pour tous les leads (objectif : 4 segmentées)',
                'Veille concurrentielle : bricolée une fois par mois',
                '25 % de l\'ambition content tenue réellement',
              ].map((item, i, arr) => (
                <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 22px', borderBottom: i < arr.length - 1 ? '1px solid #f4f4f5' : 'none' }}>
                  <div style={{ flexShrink: 0, width: 18, height: 18, borderRadius: '50%', background: `${RED}12`, border: `1.5px solid ${RED}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1 }}>
                    <span style={{ fontSize: 9, fontWeight: 900, color: RED }}>✕</span>
                  </div>
                  <p style={{ fontSize: 14, color: '#52525b', lineHeight: 1.65, margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ borderRadius: 18, background: '#fff', border: `1px solid ${AMBER}22`, overflow: 'hidden', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(16px)', transition: 'all .6s .1s ease' }}>
            <div style={{ padding: '16px 22px', background: `${AMBER}08`, borderBottom: `1px solid ${AMBER}15`, display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: AMBER }} />
              <span style={{ fontSize: 13, fontWeight: 800, color: AMBER, textTransform: 'uppercase', letterSpacing: '.08em' }}>Côté équipe</span>
            </div>
            <div style={{ padding: '8px 0' }}>
              {[
                'Responsable marketing : 50 % du temps en production opérationnelle',
                'Chargée content : saturée sur la rédaction et le social',
                'Stratégie de positionnement reportée depuis 2 ans',
                'Aucun temps pour les partenariats ou les événements',
                'Frustration croissante : "on n\'a jamais le temps de bien faire"',
                'Recrutement content manager senior envisagé : ~60 k€ chargés/an',
              ].map((item, i, arr) => (
                <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 22px', borderBottom: i < arr.length - 1 ? '1px solid #f4f4f5' : 'none' }}>
                  <div style={{ flexShrink: 0, width: 18, height: 18, borderRadius: '50%', background: `${AMBER}12`, border: `1.5px solid ${AMBER}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1 }}>
                    <span style={{ fontSize: 9, fontWeight: 900, color: AMBER }}>✕</span>
                  </div>
                  <p style={{ fontSize: 14, color: '#52525b', lineHeight: 1.65, margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ borderRadius: 20, background: '#09090b', border: '1px solid #1e1e1e', overflow: 'hidden' }}>
          <div style={{ padding: '14px 24px', borderBottom: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', gap: 8 }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <rect x="1.5" y="2" width="11" height="10" rx="1.5" stroke={ORANGE} strokeWidth="1.2"/>
              <path d="M4 6h6M4 8.5h4" stroke={ORANGE} strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            <p style={{ fontSize: 12, fontWeight: 800, color: '#52525b', textTransform: 'uppercase', letterSpacing: '.12em', margin: 0 }}>L'atout existant : une bibliothèque de 180 articles + 200 posts + 25 newsletters</p>
          </div>
          <div style={{ padding: '24px 28px' }}>
            <p style={{ fontSize: 16, color: '#a1a1aa', lineHeight: 1.75, margin: 0 }}>
              L'éditeur avait 3 ans de production éditoriale archivée. Cette bibliothèque a servi de <strong style={{ color: '#e4e4e7' }}>référence vivante pour cadrer le ton de marque de l'agent IA</strong>. L'agent ne travaille pas à partir d'un brief abstrait mais à partir de vraies productions de la marque : cohérence parfaite et zéro dérive stylistique, validée par un test blind à <strong style={{ color: ORANGE }}>11 % de détection IA seulement</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Solution ──────────────────────────────────────────────────
const timeline = [
  {
    week: 'Sem. 0', title: 'Cadrage initial', color: AC,
    items: [
      'Qualification des 4 lignes de produit cible : articles SEO, posts LinkedIn (dont 3 CEO), newsletters, séquences nurture',
      'Validation stack : HubSpot CMS + Marketing, Buffer, bibliothèque contenu à indexer',
      'Définition des 4 personas client cibles pour la segmentation nurture',
      'Devis ferme sous 5 jours',
    ],
  },
  {
    week: 'Sem. 1', title: 'Build et cadrage marque', color: ORANGE,
    items: [
      'Indexation des 180 articles, 200 posts LinkedIn et 25 newsletters dans une base vectorielle interne',
      'Rédaction du brief de marque : ton (professionnel direct, pédagogique sans condescendance), vocabulaire interdit (corporatese, anglicismes), structures favorites, longueur cible par format',
      'Configuration HubSpot (lecture/écriture blog + email + listes segmentées) et Buffer (posts LinkedIn)',
      'Test : production de 10 articles candidats sur sujets passés pour comparer avec les versions humaines',
    ],
  },
  {
    week: 'Sem. 2', title: 'POC et calibrage ton', color: ORANGE,
    items: [
      'Production parallèle : l\'agent produit, l\'équipe humaine compare sur les mêmes sujets',
      'Test blind : 30 contenus mélangés (15 agent / 15 humain) soumis à la responsable et au CEO',
      'Résultat : taux de détection "c\'est de l\'IA" = 11 % (vs 50 % en aléatoire)',
      'Ajustements finaux : 5 expressions caractéristiques renforcées, 3 expressions à éviter ajoutées',
    ],
  },
  {
    week: 'Sem. 3', title: 'Mise en production', color: GREEN,
    items: [
      'Bascule complète sur les 4 lignes (articles, posts, newsletters, séquences)',
      'Validation humaine systématique avant publication (1 à 2h par jour cumulées)',
      'Reporting hebdo automatique au CEO sur les KPI content',
      'Rituel de revue mensuelle : ajustement ton, sujets, segments',
    ],
  },
];

function ArchitectureSVG() {
  const canaux = [
    { label: 'Articles SEO (×4/mois)', color: ORANGE },
    { label: 'Posts LinkedIn CEO (×3/mois)', color: AC },
    { label: 'Posts LinkedIn brand (×9/mois)', color: AC },
    { label: 'Newsletters segmentées', color: ORANGE },
    { label: 'Séquences nurture (4 personas)', color: GREEN },
    { label: 'Veille concurrentielle', color: AMBER },
  ];
  return (
    <div style={{ borderRadius: 16, background: '#09090b', border: '1px solid #1a1a1a', padding: '24px 20px', overflow: 'hidden' }}>
      <div style={{ fontSize: 12, fontWeight: 800, color: '#3f3f46', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 20 }}>Architecture déployée · Agent IA marketing Althoce</div>
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: '#8a8a95', marginBottom: 10 }}>Pipeline de production</div>
        <div className="cc6-arch-flow-desktop" style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
          {[
            { label: 'Bibliothèque contenu (180 art. + 200 posts + 25 newsletters)', color: '#3f3f46' },
            { label: 'Brief de marque détaillé', color: AMBER },
            { label: 'Agent IA Althoce (Mistral + Claude)', color: ORANGE },
            { label: 'Validation humaine équipe marketing (1-2h/j)', color: AC },
            { label: 'Publication HubSpot + Buffer', color: GREEN },
          ].map((node, i, arr) => (
            <React.Fragment key={i}>
              <div style={{ padding: '6px 12px', borderRadius: 8, background: '#111', border: `1px solid ${node.color}30`, fontSize: 10, fontWeight: 700, color: node.color, whiteSpace: 'nowrap' }}>{node.label}</div>
              {i < arr.length - 1 && <span style={{ color: '#2a2a2a', fontSize: 15, fontWeight: 900 }}>→</span>}
            </React.Fragment>
          ))}
        </div>
        <div className="cc6-arch-flow-mobile">
          {[
            { label: 'Bibliothèque contenu existant', color: '#3f3f46' },
            { label: 'Brief de marque détaillé', color: AMBER },
            { label: 'Agent IA Althoce (Mistral + Claude)', color: ORANGE },
            { label: 'Validation humaine (1-2h/jour)', color: AC },
            { label: 'Publication HubSpot + Buffer', color: GREEN },
          ].map((node, i, arr) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ padding: '7px 14px', borderRadius: 8, background: '#111', border: `1px solid ${node.color}30`, fontSize: 13, fontWeight: 700, color: node.color }}>{node.label}</div>
              {i < arr.length - 1 && <div style={{ width: 2, height: 10, background: '#2a2a2a', marginLeft: 20 }} />}
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: '#8a8a95', marginBottom: 10 }}>6 lignes de production automatisées</div>
        <div className="cc6-canaux-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
          {canaux.map((c, i) => (
            <div key={i} style={{ padding: '10px 12px', borderRadius: 8, background: '#111', border: `1px solid ${c.color}20` }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: c.color }}>{c.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ padding: '10px 14px', borderRadius: 8, background: '#0a0a0a', border: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: ORANGE, flexShrink: 0 }} />
        <span style={{ fontSize: 12, color: '#3f3f46', fontWeight: 600 }}>Mistral + Claude · HubSpot CMS + Marketing · Buffer · Base vectorielle ton de marque · Validation humaine obligatoire avant publication</span>
      </div>
    </div>
  );
}

function LaSolution() {
  const [ref, visible] = useInView(0.05);
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        <H2 style={{ marginBottom: 12 }}>Agent IA marketing au ton de marque cadré déployé en 3 semaines sur HubSpot</H2>
        <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.75, marginBottom: 48, maxWidth: 700 }}>
          L'éditeur avait une bibliothèque de 180 articles, 200 posts LinkedIn et 25 newsletters publiés au fil des 3 dernières années. Cette base a servi de référence vivante pour cadrer le ton de marque de l'agent IA. La stack technique cible : HubSpot CMS pour le blog, Buffer pour le social, HubSpot Marketing pour l'email, agent IA Althoce, équipe humaine valide avant publication.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginBottom: 48 }}>
          {timeline.map((step, i) => (
            <div key={i} className="cc6-tl-row" style={{ display: 'flex', gap: 0, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(-10px)', transition: `all .5s ${i * .08}s ease` }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: 100 }}>
                <div style={{ padding: '6px 10px', borderRadius: 9999, background: `${step.color}10`, border: `2px solid ${step.color}40`, display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                  <span style={{ fontSize: 10, fontWeight: 900, color: step.color }}>{step.week}</span>
                </div>
                {i < timeline.length - 1 && <div style={{ width: 2, flex: 1, minHeight: 24, background: `linear-gradient(to bottom,${step.color}30,#e4e4e7)` }} />}
              </div>
              <div style={{ flex: 1, marginBottom: i < timeline.length - 1 ? 16 : 0, paddingBottom: i < timeline.length - 1 ? 8 : 0 }}>
                <div style={{ borderRadius: 14, background: '#fafafa', border: '1px solid #e4e4e7', borderLeft: `3px solid ${step.color}`, padding: '18px 22px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                    <span style={{ fontSize: 16, fontWeight: 800, color: '#09090b' }}>{step.title}</span>
                    <span className="cc6-tl-week-inline" style={{ padding: '2px 8px', borderRadius: 9999, background: `${step.color}10`, border: `1px solid ${step.color}25`, fontSize: 10, fontWeight: 800, color: step.color, flexShrink: 0 }}>{step.week}</span>
                  </div>
                  <div className="cc6-tl-items">
                    {step.items.map((item, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                        <div style={{ flexShrink: 0, width: 5, height: 5, borderRadius: '50%', background: step.color, marginTop: 7, opacity: 0.6 }} />
                        <span style={{ fontSize: 14, color: '#52525b', lineHeight: 1.65 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ArchitectureSVG />
      </div>
    </section>
  );
}

// ── Résultats ─────────────────────────────────────────────────
const kpiCards = [
  { delta: '×4', label: 'production de contenu sans embauche', avant: '25 % de l\'ambition tenue', apres: '100 % de l\'ambition tenue', color: AC, size: 'hero' },
  { delta: '+140 %', label: 'trafic organique en 6 mois', avant: 'base 100 mois 0', apres: 'indice 240 mois 6', color: AC, size: 'normal' },
  { delta: '×3', label: 'articles SEO publiés / mois', avant: '1 article / mois', apres: '4 articles / mois', color: AC, size: 'normal' },
  { delta: '×7,5', label: 'emails nurture segmentés / mois', avant: '8 emails génériques', apres: '60 emails (4 personas)', color: AC, size: 'normal' },
  { delta: '60 k€', label: 'recrutement content annulé / an', avant: 'Poste content senior prévu', apres: 'Redéployé sur acquisition payante', color: AC, size: 'small' },
  { delta: '11 %', label: 'taux de détection IA au test blind', avant: 'Seuil aléatoire : 50 %', apres: 'Ton de marque validé CEO', color: AC, size: 'small' },
];

function KPICard({ k, i, visible }: { k: typeof kpiCards[0]; i: number; visible: boolean }) {
  const isHero = k.size === 'hero';
  const isSmall = k.size === 'small';
  return (
    <div className={isHero ? 'cc6-kpi-card cc6-kpi-hero' : 'cc6-kpi-card'}
      style={{ borderRadius: 18, background: isHero ? 'linear-gradient(135deg,#080c18 0%,#0d1220 100%)' : '#111', border: `1px solid ${k.color}${isHero ? '40' : '20'}`, padding: isHero ? '32px 28px' : '22px 20px', display: 'flex', flexDirection: 'column', gap: isHero ? 14 : 10, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: `all .55s ${i * .08}s ease`, position: 'relative', overflow: 'hidden' }}>
      {isHero && <div aria-hidden="true" style={{ position: 'absolute', top: '-20%', right: '-10%', width: 180, height: 180, borderRadius: '50%', background: `radial-gradient(circle,${AC}18 0%,transparent 65%)`, filter: 'blur(30px)', pointerEvents: 'none' }} />}
      <div style={{ fontSize: isHero ? 'clamp(48px,6vw,72px)' : isSmall ? 28 : 38, fontWeight: 900, color: k.color, letterSpacing: '-.04em', lineHeight: 0.95, position: 'relative' }}>{k.delta}</div>
      <div style={{ fontSize: isHero ? 14 : 12, fontWeight: 700, color: '#8a8a95', lineHeight: 1.4, textTransform: isHero ? 'none' : 'uppercase', letterSpacing: isHero ? 'normal' : '.06em' }}>{k.label}</div>
      <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: '#3f3f46', textDecoration: 'line-through', textDecorationColor: `${RED}60` }}>{k.avant}</span>
        <span style={{ fontSize: 10, color: '#2a2a2a', fontWeight: 900 }}>→</span>
        <span style={{ fontSize: 13, fontWeight: 800, color: '#d4d4d8' }}>{k.apres}</span>
      </div>
    </div>
  );
}

function Resultats() {
  const [ref, visible] = useInView(0.06);
  return (
    <section id="resultats" ref={ref} style={{ padding: '96px 24px', background: '#09090b', borderTop: '1px solid #1a1a1a', position: 'relative' }}>
      <div aria-hidden="true" style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 2, background: `linear-gradient(to right,transparent,${ORANGE},transparent)` }} />
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: '#3f3f46', textTransform: 'uppercase', letterSpacing: '.14em', marginBottom: 14 }}>Mesure 6 mois après mise en production</div>
          <H2 style={{ color: '#fff' }}>Ce qui a changé concrètement</H2>
        </div>
        <div className="cc6-kpi-bento">
          {kpiCards.map((k, i) => <KPICard key={i} k={k} i={i} visible={visible} />)}
        </div>
        <div style={{ marginTop: 32, padding: '24px 28px', borderRadius: 18, background: `${AC}0c`, border: `1px solid ${AC}22` }}>
          <p style={{ fontSize: 16, color: '#a1a1aa', lineHeight: 1.75, margin: 0 }}>
            L'éditeur a multiplié sa production par 4 sans embaucher. La responsable marketing consacre 30 à 50 % de son temps désormais à la stratégie de positionnement (reportée depuis 2 ans), à la relation avec 2 macro-influenceurs sectoriels, et à la mise en place de partenariats événementiels. Le trafic organique du blog a progressé de 140 % en 6 mois. Le budget recrutement (<strong style={{ color: '#f0f0f0' }}>60 k€/an</strong>) a été redéployé sur l'acquisition payante.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Témoignage ────────────────────────────────────────────────
function Temoignage() {
  const [ref, visible] = useInView(0.08);
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        <div style={{ fontSize: 13, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.14em', marginBottom: 32, textAlign: 'center' }}>Le mot de la responsable marketing</div>
        <div style={{ position: 'relative', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(28px)', transition: 'all .7s ease' }}>
          <div aria-hidden="true" style={{ fontSize: 120, lineHeight: 0.6, color: ORANGE, fontFamily: 'Georgia, serif', fontWeight: 900, opacity: 0.1, marginBottom: 24, display: 'block', textAlign: 'center' }}>"</div>
          <blockquote style={{ fontSize: 'clamp(18px,2.4vw,26px)', fontWeight: 700, color: '#09090b', lineHeight: 1.65, margin: '0 0 40px', fontStyle: 'normal', textAlign: 'center' }}>
            On était 3 au marketing pour un SaaS qui voulait jouer dans la cour des grands. La direction nous demandait du contenu chaque semaine, on rendait à peine 1 article et 4 posts LinkedIn par mois. On a déployé l'agent IA marketing en 3 semaines. Aujourd'hui, on publie 4 articles SEO par mois, 12 posts LinkedIn, 2 newsletters, et nos séquences nurture sont segmentées par persona. Tout dans notre ton de marque. Et on a enfin le temps de faire de la <span style={{ color: ORANGE }}>stratégie sérieuse</span>.
          </blockquote>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: `${ORANGE}15`, border: `1.5px solid ${ORANGE}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="9" r="4.5" stroke={ORANGE} strokeWidth="1.5"/>
                <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" stroke={ORANGE} strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 15, fontWeight: 800, color: '#09090b' }}>Responsable marketing, éditeur SaaS B2B</div>
              <div style={{ fontSize: 13, color: '#8a8a95', marginTop: 2 }}>90 collaborateurs · 1 500 clients PME · 6 mois après mise en production</div>
            </div>
            <div style={{ padding: '6px 16px', borderRadius: 9999, background: `${ORANGE}10`, border: `1px solid ${ORANGE}30`, fontSize: 13, fontWeight: 800, color: ORANGE }}>×4 production</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Apprentissages ────────────────────────────────────────────
function IconCheck() {
  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="9" stroke={GREEN} strokeWidth="1.5"/><path d="M6 10l3 3 5-5" stroke={GREEN} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
function IconWrench() {
  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="9" stroke={AMBER} strokeWidth="1.5"/><path d="M13 7a3 3 0 01-4 4L6 14" stroke={AMBER} strokeWidth="1.6" strokeLinecap="round"/><circle cx="6.5" cy="13.5" r="1" fill={AMBER}/></svg>;
}
function IconWarning() {
  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 3L18 16H2L10 3z" stroke={RED} strokeWidth="1.5" strokeLinejoin="round"/><path d="M10 9v3" stroke={RED} strokeWidth="1.8" strokeLinecap="round"/><circle cx="10" cy="14" r="0.8" fill={RED}/></svg>;
}

const lessons = [
  {
    num: '01', Icon: IconCheck, tag: 'Facteurs de succès', title: 'Ce qui a très bien marché', color: GREEN,
    items: [
      { bold: 'Le test blind sur 30 contenus mélangés avant la mise en production.', text: ' Taux de détection IA = 11 %. Validation forte que le ton de marque est respecté. C\'est ce qui a permis à la responsable de signer en confiance et à la direction de comprendre l\'enjeu réel de l\'outil.' },
      { bold: 'L\'indexation de la bibliothèque de contenu existant comme référence vivante.', text: ' L\'agent ne travaille pas à partir d\'un brief abstrait mais à partir de vraies productions de la marque. Cohérence parfaite dès la semaine 1.' },
    ],
  },
  {
    num: '02', Icon: IconWrench, tag: 'Ajustements', title: "Ce qu'on ajusterait", color: AMBER,
    items: [
      { bold: 'Les posts LinkedIn pour le CEO ont demandé une calibration plus fine que prévu.', text: ' Le ton personnel du CEO est plus subjectif que le ton corporate de la marque. 2 semaines de calibration au lieu d\'1 prévue. À anticiper sur les futurs déploiements similaires.' },
      { bold: 'Les visuels d\'articles SEO sont restés à la charge de la chargée content.', text: ' L\'agent ne produit pas de visuels de qualité éditoriale fine. Sur les futurs déploiements, nous proposons en parallèle un agent visuel (DALL-E ou Midjourney) avec validation humaine pour la cohérence brand.' },
    ],
  },
  {
    num: '03', Icon: IconWarning, tag: 'Piège fréquent', title: 'Le piège à éviter', color: RED,
    items: [
      { bold: 'Ne pas tomber dans la sur-production sans stratégie.', text: ' L\'agent permet de produire massivement, mais la valeur du content marketing reste dans la pertinence éditoriale : les bons sujets, le bon timing, le bon angle. Risque observé : produire plus de contenu sans plus de stratégie = bruit organique. Notre recommandation : libérer 30 à 50 % du temps de la responsable marketing pour la stratégie éditoriale, pas pour produire encore plus.' },
    ],
  },
];

function Apprentissages() {
  const [ref, visible] = useInView(0.06);
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#09090b', borderTop: '1px solid #1a1a1a' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        <div style={{ marginBottom: 52 }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: '#3f3f46', textTransform: 'uppercase', letterSpacing: '.14em', marginBottom: 12 }}>Retour d'expérience</div>
          <H2 style={{ color: '#fff' }}>Trois choses qui ont fait la réussite de ce déploiement</H2>
        </div>
        <div className="cc6-lessons-grid">
          {lessons.map((lesson, i) => (
            <div key={i} style={{ borderRadius: 20, background: '#111', border: `1px solid ${lesson.color}20`, overflow: 'hidden', display: 'flex', flexDirection: 'column', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: `all .55s ${i * .12}s ease`, position: 'relative' }}>
              <div style={{ height: 3, background: `linear-gradient(to right,${lesson.color},${lesson.color}44)` }} />
              <div aria-hidden="true" style={{ position: 'absolute', top: 12, right: 16, fontSize: 72, fontWeight: 900, color: `${lesson.color}08`, letterSpacing: '-.06em', lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>{lesson.num}</div>
              <div style={{ padding: '24px 24px 16px', display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <div style={{ flexShrink: 0, width: 36, height: 36, borderRadius: 10, background: `${lesson.color}12`, border: `1px solid ${lesson.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <lesson.Icon />
                </div>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 800, color: lesson.color, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 4 }}>{lesson.tag}</div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: '#f0f0f0', lineHeight: 1.3 }}>{lesson.title}</div>
                </div>
              </div>
              <div style={{ height: 1, background: '#1a1a1a', margin: '0 24px' }} />
              <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 16, flex: 1 }}>
                {lesson.items.map((item, j) => (
                  <div key={j} style={{ display: 'flex', gap: 10 }}>
                    <div style={{ flexShrink: 0, width: 5, height: 5, borderRadius: '50%', background: lesson.color, marginTop: 8, opacity: 0.7 }} />
                    <p style={{ fontSize: 14, color: '#52525b', lineHeight: 1.75, margin: 0 }}>
                      <strong style={{ color: '#d4d4d8' }}>{item.bold}</strong>{item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Methodology ───────────────────────────────────────────────
function StepVisual({ stepIndex, active }: { stepIndex: number; active: boolean }) {
  if (stepIndex === 0) return (
    <div style={{ background: '#fff', borderRadius: 12, padding: 16, boxShadow: '0 4px 24px rgba(0,0,0,.08)', border: '1px solid #e4e4e7', animation: active ? 'floatCard 4s ease-in-out infinite' : 'none' }}>
      <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 12 }}>Audit content</div>
      {['4 lignes de produit ciblées', 'HubSpot + Buffer + bibliothèque', '4 personas nurture définis', 'Devis ferme 5 jours'].map((t, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0', borderBottom: '1px solid #f4f4f5', animation: active ? `slideIn .4s ${i * .15}s ease both` : 'none' }}>
          <div style={{ width: 16, height: 16, borderRadius: '50%', background: i < 3 ? '#22c55e22' : '#f4f4f5', border: i < 3 ? '1.5px solid #22c55e' : '1.5px solid #d4d4d8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 9, color: '#22c55e', fontWeight: 900 }}>{i < 3 && '✓'}</div>
          <span style={{ fontSize: 13, color: i < 3 ? '#52525b' : '#a1a1aa', fontWeight: i < 3 ? 600 : 400 }}>{t}</span>
          {i < 3 && <span style={{ marginLeft: 'auto', fontSize: 10, fontWeight: 800, color: '#22c55e' }}>OK</span>}
        </div>
      ))}
    </div>
  );
  if (stepIndex === 1) return (
    <div style={{ background: '#fff', borderRadius: 12, padding: 16, boxShadow: '0 4px 24px rgba(0,0,0,.08)', border: '1px solid #e4e4e7', animation: active ? 'floatCard 4s 1s ease-in-out infinite' : 'none' }}>
      <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 12 }}>Roadmap marketing</div>
      {[{ l: 'Indexation bibliothèque contenu', w: 90 }, { l: 'Brief ton de marque', w: 75 }, { l: 'HubSpot + Buffer config', w: 60 }, { l: 'Test blind 30 contenus', w: 40 }].map((r, i) => (
        <div key={i} style={{ marginBottom: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#52525b' }}>{r.l}</span>
            <span style={{ fontSize: 12, fontWeight: 800, color: AC }}>S{i + 1}</span>
          </div>
          <div style={{ height: 5, background: '#f4f4f5', borderRadius: 9999, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: active ? `${r.w}%` : '0%', background: `linear-gradient(to right,${AC},${AC}88)`, borderRadius: 9999, transition: `width .8s ${i * .1 + .3}s ease` }} />
          </div>
        </div>
      ))}
    </div>
  );
  if (stepIndex === 2) return (
    <div style={{ background: '#fff', borderRadius: 12, padding: 16, boxShadow: '0 4px 24px rgba(0,0,0,.08)', border: '1px solid #e4e4e7', animation: active ? 'floatCard 4s 2s ease-in-out infinite' : 'none' }}>
      <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 14 }}>Intégrations actives</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        {[{ n: 'HubSpot CMS', c: '#ff7a59' }, { n: 'HubSpot Marketing', c: '#ff7a59' }, { n: 'Buffer (social)', c: '#168eea' }, { n: 'Mistral (LLM)', c: '#6366f1' }, { n: 'Claude (LLM)', c: '#d97706' }, { n: 'Base vectorielle', c: '#7c3aed' }].map((t, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '7px 10px', borderRadius: 8, border: '1px solid #f0f0f0', background: '#fafafa', animation: active ? `slideIn .4s ${i * .1}s ease both` : 'none' }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: t.c }} />
            <span style={{ fontSize: 11, fontWeight: 700, color: '#52525b' }}>{t.n}</span>
            <span style={{ marginLeft: 'auto', fontSize: 9, color: '#22c55e', fontWeight: 800 }}>●</span>
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <div style={{ background: '#fff', borderRadius: 12, padding: 16, boxShadow: '0 4px 24px rgba(0,0,0,.08)', border: '1px solid #e4e4e7', animation: active ? 'floatCard 4s 1.5s ease-in-out infinite' : 'none' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <span style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em' }}>Résultats 6 mois</span>
        <span style={{ padding: '2px 8px', borderRadius: 9999, background: '#22c55e15', border: '1px solid #22c55e30', fontSize: 10, fontWeight: 800, color: '#22c55e' }}>Actif</span>
      </div>
      {[{ t: 'Articles SEO / mois', v: '4 (×4)' }, { t: 'Posts LinkedIn / mois', v: '12 (×3)' }, { t: 'Trafic organique', v: '+140 %' }, { t: 'Recrutement annulé', v: '60 k€/an' }].map((r, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7px 0', borderBottom: '1px solid #f4f4f5', animation: active ? `countUp .5s ${i * .12}s ease both` : 'none' }}>
          <span style={{ fontSize: 12, color: '#52525b', fontWeight: 500 }}>{r.t}</span>
          <span style={{ fontSize: 14, fontWeight: 800, color: GREEN }}>{r.v}</span>
        </div>
      ))}
    </div>
  );
}

function Methodology() {
  const [ref, visible] = useInView(0.05);
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <H2 style={{ marginBottom: 12 }}>Comment se passe une mission avec Althoce ?</H2>
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 500, margin: '0 auto' }}>La même méthode appliquée ici en 3 semaines. Vérifiable sur ce cas concret.</p>
        </div>
        <div className="v2-grid4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
          {steps.map((s, i) => (
            <div key={i}>
              <div style={{ marginBottom: 24, minHeight: 180, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(16px)', transition: `all .6s ${i * .12}s ease` }}>
                <StepVisual stepIndex={i} active={visible} />
              </div>
              <div style={{ fontSize: 13, fontWeight: 800, color: AC, textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 6 }}>STEP {i + 1}</div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '2px 10px', borderRadius: 9999, background: '#f0f7ff', border: `1px solid ${AC}20`, fontSize: 12, fontWeight: 700, color: AC, marginBottom: 10 }}>{s.time}</div>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: '#09090b', marginBottom: 8, letterSpacing: '-.02em' }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: '#8a8a95', lineHeight: 1.65 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Votre cas similaire ───────────────────────────────────────
function VotreCas() {
  const [ref, visible] = useInView(0.08);
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 860, margin: '0 auto', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all .6s ease' }}>
        <H2 style={{ marginBottom: 12 }}>Vous êtes un éditeur SaaS, un service marketing PME ou une agence content sous-dimensionnée ?</H2>
        <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 36 }}>
          Trois questions pour évaluer si ce cas est transposable au vôtre.
        </p>
        <div style={{ borderRadius: 20, background: '#09090b', border: '1px solid #1e1e1e', overflow: 'hidden', marginBottom: 28 }}>
          <div style={{ padding: '14px 24px', borderBottom: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: ORANGE }} />
            <p style={{ fontSize: 12, fontWeight: 800, color: '#8a8a95', textTransform: 'uppercase', letterSpacing: '.12em', margin: 0 }}>3 critères de transposabilité</p>
          </div>
          {[
            { n: '01', text: 'Vous avez une équipe marketing de 2 à 5 personnes qui ne tient pas le rythme content marketing voulu par la direction.' },
            { n: '02', text: 'Vous publiez moins de 50 % de votre ambition content (articles SEO, posts LinkedIn, newsletters, séquences email).' },
            { n: '03', text: 'Vous avez une bibliothèque de contenu existant d\'au moins 50 articles ou posts qui peut servir de référence ton de marque.' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 16, padding: '18px 24px', borderBottom: i < 2 ? '1px solid #1a1a1a' : 'none' }}>
              <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: 8, background: `${ORANGE}18`, border: `1px solid ${ORANGE}35`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 10, fontWeight: 900, color: ORANGE }}>{item.n}</span>
              </div>
              <p style={{ fontSize: 15, color: '#a1a1aa', lineHeight: 1.65, margin: 0 }}>{item.text}</p>
            </div>
          ))}
          <div style={{ padding: '16px 24px', borderTop: '1px solid #1a1a1a', background: '#0a0a0a' }}>
            <p style={{ fontSize: 14, color: '#52525b', lineHeight: 1.65, margin: 0 }}>
              Si vous répondez oui aux 3, la transposition est très probable. Les <strong style={{ color: '#a1a1aa' }}>30 minutes offertes avec un expert</strong> servent à valider en détail.
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href="/agent-ia/marketing/" style={{ padding: '14px 28px', borderRadius: 9999, background: '#09090b', color: '#fff', textDecoration: 'none', fontSize: 15, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'transform .15s' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.03)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)'; }}>
            Découvrir Agent IA pour le marketing →
          </a>
          <a href="/contact" style={{ padding: '14px 28px', borderRadius: 9999, border: `1.5px solid ${ORANGE}40`, color: ORANGE, textDecoration: 'none', fontSize: 15, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, background: `${ORANGE}08`, transition: 'border-color .15s,background .15s' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = `${ORANGE}80`; (e.currentTarget as HTMLAnchorElement).style.background = `${ORANGE}14`; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = `${ORANGE}40`; (e.currentTarget as HTMLAnchorElement).style.background = `${ORANGE}08`; }}>
            Discuter de votre projet (30 min offertes) →
          </a>
        </div>
        <div style={{ marginTop: 40, paddingTop: 32, borderTop: '1px solid #e4e4e7' }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 16 }}>Voir d'autres cas clients</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a href="/cas-clients/" style={{ padding: '9px 18px', borderRadius: 9999, border: '1px solid #e4e4e7', fontSize: 14, fontWeight: 700, color: '#8a8a95', textDecoration: 'none', background: '#fff', display: 'inline-flex', alignItems: 'center', gap: 7, transition: 'border-color .15s,color .15s' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = '#09090b'; el.style.color = '#09090b'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = '#e4e4e7'; el.style.color = '#8a8a95'; }}>
              <span style={{ fontSize: 12 }}>←</span> Tous les cas clients
            </a>
            {[
              { href: '/cas-clients/saas-b2b-agent-ia-service-client/', label: 'SaaS B2B · Service client' },
              { href: '/cas-clients/cabinet-recrutement-paris-agent-ia-tri-cv/', label: 'Cabinet recrutement Paris' },
            ].map((c) => (
              <a key={c.href} href={c.href} style={{ padding: '9px 18px', borderRadius: 9999, border: '1px solid #e4e4e7', fontSize: 14, fontWeight: 700, color: '#8a8a95', textDecoration: 'none', background: '#fff', display: 'inline-flex', alignItems: 'center', gap: 7, transition: 'border-color .15s,color .15s' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = '#09090b'; el.style.color = '#09090b'; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = '#e4e4e7'; el.style.color = '#8a8a95'; }}>
                {c.label} <span style={{ fontSize: 12 }}>→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── CSS ───────────────────────────────────────────────────────
const globalStyles = `
  @keyframes gradDrift1 { 0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(3%,4%) scale(1.06)} }
  @keyframes floatCard { 0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)} }
  @keyframes slideIn { from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:translateX(0)} }
  @keyframes countUp { from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)} }

  .cc6-kpi-bento { display:grid; grid-template-columns:1fr 1fr 1fr; grid-template-rows:auto auto auto; gap:14px; }
  .cc6-kpi-hero { grid-column:1/2; grid-row:1/3; }
  .cc6-tl-items { display:grid; grid-template-columns:repeat(2,1fr); gap:6px 20px; }
  .cc6-tl-week-inline { display:inline-flex; }
  .cc6-lessons-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; align-items:start; }
  .cc6-arch-flow-mobile { display:none; }
  .cc6-canaux-grid { grid-template-columns:repeat(3,1fr); }

  @media (max-width:860px) {
    .cc6-hero-grid { grid-template-columns:1fr !important; }
    .cc6-stat-col { display:none !important; }
    .cc6-avant-grid { grid-template-columns:1fr !important; }
    .cc6-kpi-bento { grid-template-columns:1fr 1fr !important; grid-template-rows:auto !important; }
    .cc6-kpi-hero { grid-column:1/-1 !important; grid-row:auto !important; }
    .cc6-lessons-grid { grid-template-columns:1fr !important; }
    .v2-grid4 { grid-template-columns:repeat(2,1fr) !important; }
    .cc6-arch-flow-desktop { display:none !important; }
    .cc6-arch-flow-mobile { display:flex; flex-direction:column; gap:0; }
    .cc6-canaux-grid { grid-template-columns:repeat(2,1fr) !important; }
  }
  @media (max-width:680px) {
    .cc6-tl-items { grid-template-columns:1fr !important; }
    .cc6-tl-row > div:first-child { width:52px !important; }
    .cc6-tl-week-inline { display:none !important; }
    .cc6-canaux-grid { grid-template-columns:1fr !important; }
  }
  @media (max-width:500px) {
    .cc6-kpi-bento { grid-template-columns:1fr !important; }
    .cc6-kpi-hero { grid-column:1/-1 !important; }
    .v2-grid4 { grid-template-columns:1fr !important; }
  }
`;

export default function CasClientSaasB2BMarketingPageClient() {
  return (
    <main>
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      <Hero />
      <LeClient />
      <AvantAlthoce />
      <LaSolution />
      <Resultats />
      <Temoignage />
      <Apprentissages />
      <Methodology />
      <VotreCas />
    </main>
  );
}
