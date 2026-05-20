'use client';

import React, { useState, useEffect, useRef } from 'react';
import { steps, agentTags, securityItems } from '@/lib/data';
import { FAQAccordion } from '@/components/ui/data-display/FAQAccordion';
import { FranceMapSVG } from '@/components/FranceMapSVG';

const AC = '#2563eb';

function useInView(threshold = 0.1) {
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
    <h2 style={{ fontSize: 'clamp(24px,3vw,40px)', fontWeight: 800, letterSpacing: '-.03em', color: '#09090b', lineHeight: 1.15, ...sx }}>
      {children}
    </h2>
  );
}

// ── Hero ──────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{ padding: '120px 24px 80px', position: 'relative', overflow: 'hidden', borderBottom: '1px solid #e4e4e7' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: 600, height: 600, borderRadius: '50%', background: `radial-gradient(circle,${AC}0a 0%,transparent 65%)`, filter: 'blur(80px)', animation: 'ren-drift 14s ease-in-out infinite' }} />
      </div>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.025) 1px,transparent 1px)', backgroundSize: '48px 48px', maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%,black,transparent)', zIndex: 0 }} aria-hidden="true" />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1160, margin: '0 auto' }}>
        <div className="ren-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: '#a1a1aa', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', fontWeight: 500 }}>
              <a href="/" style={{ color: '#8a8a95', textDecoration: 'none' }}>Accueil</a><span>›</span>
              <a href="/agences/" style={{ color: '#8a8a95', textDecoration: 'none' }}>Agences</a><span>›</span>
              <span style={{ color: '#09090b' }}>Rennes</span>
            </nav>

            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
              {['+150 PME équipées en France', 'Expertise numérique et agroalimentaire Bretagne', 'Présentiel + distanciel'].map((t) => (
                <span key={t} style={{ padding: '4px 12px', borderRadius: 9999, background: '#f0f7ff', border: `1px solid ${AC}25`, fontSize: 12, fontWeight: 700, color: AC }}>{t}</span>
              ))}
            </div>

            <h1 style={{ fontSize: 'clamp(26px,3.8vw,50px)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-.04em', color: '#09090b', marginBottom: 20 }}>
              Agence IA à Rennes : agents IA, automatisation et formation pour PME et ETI bretonnes.
            </h1>

            <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 32, maxWidth: 520 }}>
              Vous dirigez une PME ou une ETI à Rennes, dans Rennes Métropole ou en Bretagne. Althoce vous accompagne avec une expertise sur les secteurs forts régionaux (numérique FrenchTech Rennes Saint-Malo, agroalimentaire Lactalis-Bridor, industrie automobile La Janais) et une approche hybride présentiel-distanciel.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="/contact" style={{ padding: '14px 28px', borderRadius: 9999, background: '#09090b', color: '#fff', textDecoration: 'none', fontSize: 15, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'transform .15s,box-shadow .15s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.03)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 6px 24px rgba(0,0,0,.25)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'; }}>
                Discuter de votre projet →
              </a>
              <a href="#pourquoi" style={{ padding: '14px 28px', borderRadius: 9999, border: '1.5px solid #e4e4e7', color: '#09090b', textDecoration: 'none', fontSize: 15, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, background: '#fff', transition: 'border-color .15s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = AC; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#e4e4e7'; }}>
                Pourquoi nous choisir ↓
              </a>
            </div>
          </div>

          <div className="ren-map-col" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <FranceMapSVG mainCity="Rennes" presentielLabel="Présentiel Rennes" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Pourquoi Althoce ──────────────────────────────────────────
const raisons = [
  {
    n: '01',
    title: "Expertise opérationnelle sur les 8 métiers cœur de l'entreprise",
    body: (
      <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.8, margin: 0 }}>
        Nous avons déployé des agents IA dans tous les métiers : <a href="/agent-ia/finance/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>finance</a>, <a href="/agent-ia/commercial/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>commercial</a>, <a href="/agent-ia/service-client/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>service client</a>, <a href="/agent-ia/marketing/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>marketing</a>, <a href="/agent-ia/rh/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>RH</a>, <a href="/agent-ia/ops/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>ops</a>, <a href="/agent-ia/juridique/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>juridique</a>, <a href="/agent-ia/achats/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>achats</a>. Cette profondeur multi-métiers nous permet de <strong style={{ color: '#09090b' }}>comprendre votre quotidien rapidement</strong> sans courbe d'apprentissage facturée à votre charge.
      </p>
    ),
  },
  {
    n: '02',
    title: 'Présentiel à Rennes ET distanciel structuré',
    body: (
      <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.8, margin: 0 }}>
        Déplacements réguliers à Rennes (centre-ville, Beauregard, La Courrouze, Atalante Champeaux), au technopôle Rennes Atalante, à Saint-Malo (FrenchTech), Cesson-Sévigné, et plus largement en Bretagne (Lorient sur demande). Pour la phase de build, <strong style={{ color: '#09090b' }}>mode distanciel structuré</strong> avec points hebdomadaires de 30 minutes. Vous choisissez la modalité.
      </p>
    ),
  },
  {
    n: '03',
    title: 'Formation IA pour vos équipes bretonnes',
    body: (
      <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.8, margin: 0 }}>
        <a href="/services/formation-ia/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>Ateliers de formation IA</a> en présentiel à Rennes ou en distanciel synchrone. Formats <strong style={{ color: '#09090b' }}>4h à 21h</strong>, adaptés par métier. Particulièrement utiles pour les équipes FrenchTech (scale-up tech), agroalimentaire (conformité IFS/BRC) et sous-traitance automobile (IATF).
      </p>
    ),
  },
  {
    n: '04',
    title: 'Souveraineté France par défaut',
    body: (
      <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.8, margin: 0 }}>
        Mistral hébergé France, infrastructure auto-hébergeable, aucune donnée envoyée à OpenAI ou Anthropic sans accord client. <strong style={{ color: '#09090b' }}>Critique pour le tissu rennais</strong> : agroalimentaire premium (Lactalis, Bridor, Brocéliande — secret recettes, conformité IFS et BRC), numérique scale-up FrenchTech (données utilisateurs SaaS), sous-traitance automobile (PSA Stellantis La Janais — compliance constructeurs), recherche numérique IRT b-com. Voir <a href="/#souverainete" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>Souveraineté</a>.
      </p>
    ),
  },
  {
    n: '05',
    title: 'Premier agent en 1 semaine, ROI mesurable en moins de 6 mois',
    body: (
      <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.8, margin: 0 }}>
        Pas de PowerPoint à 100 000 € en 6 mois. <strong style={{ color: '#09090b' }}>Un agent IA simple en production sous 1 semaine</strong> après cadrage signé. ROI typique en moins de 6 mois. +758 agents en production, +5 M€ d'économies cumulées. Voir <a href="/cas-clients/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>nos cas clients</a>.
      </p>
    ),
  },
];

function PourquoiAlthoce() {
  const [ref, visible] = useInView(0.06);
  return (
    <section id="pourquoi" ref={ref} style={{ padding: '96px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        <div style={{ marginBottom: 52, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(16px)', transition: 'all .5s ease' }}>
          <H2 style={{ marginBottom: 16 }}>Pourquoi travailler avec Althoce pour votre projet IA à Rennes</H2>
          <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.7, maxWidth: 640 }}>
            Cinq raisons concrètes qui nous distinguent des autres prestataires IA en Bretagne.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {raisons.map((r, i) => (
            <div key={i} style={{ display: 'flex', gap: 0, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(16px)', transition: `all .5s ${i * .09}s ease` }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: 64 }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: i === 0 ? AC : `${AC}10`, border: `2px solid ${i === 0 ? AC : `${AC}30`}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: 12, fontWeight: 900, color: i === 0 ? '#fff' : AC }}>{r.n}</span>
                </div>
                {i < raisons.length - 1 && <div style={{ width: 2, flex: 1, minHeight: 24, background: `linear-gradient(to bottom,${AC}25,${AC}08)`, marginTop: 4 }} />}
              </div>
              <div style={{ flex: 1, paddingBottom: i < raisons.length - 1 ? 40 : 0, paddingLeft: 24 }}>
                <h3 style={{ fontSize: 17, fontWeight: 800, color: '#09090b', marginBottom: 12, letterSpacing: '-.02em', lineHeight: 1.35 }}>{r.title}</h3>
                {r.body}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 48, borderRadius: 20, background: '#09090b', border: '1px solid #1e1e1e', overflow: 'hidden', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(16px)', transition: 'all .5s .5s ease' }}>
          <div style={{ padding: '14px 28px', borderBottom: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: AC }} />
            <p style={{ fontSize: 12, fontWeight: 800, color: '#8a8a95', textTransform: 'uppercase', letterSpacing: '.12em', margin: 0 }}>Présentiel ou distanciel : vous choisissez selon le projet</p>
          </div>
          <div style={{ padding: '24px 28px' }}>
            <p style={{ fontSize: 16, color: '#a1a1aa', lineHeight: 1.8, margin: '0 0 16px' }}>
              <strong style={{ color: '#e4e4e7' }}>Mêmes délais, même qualité quel que soit le mode.</strong> Présentiel pertinent pour le cadrage à Rennes (Atalante Champeaux, La Courrouze, Beauregard) ou Cesson-Sévigné. Distanciel pour le build (60 à 70 % du projet) gagne du temps à tout le monde.
            </p>
            <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: '#a1a1aa' }}>Aucune pénalité distanciel, aucune surcharge présentiel.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Métiers ───────────────────────────────────────────────────
function MetierMockup({ index }: { index: number }) {
  const mockups = [
    // Service client — SaaS FrenchTech Atalante
    <div style={{ background: '#09090b', borderRadius: 14, padding: 20, boxShadow: '0 4px 28px rgba(0,0,0,.18)', border: `1px solid ${AC}30` }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
        <span style={{ fontSize: 12, fontWeight: 800, color: '#3f3f46', textTransform: 'uppercase', letterSpacing: '.1em' }}>Scale-up FrenchTech · Atalante Rennes</span>
        <span style={{ padding: '2px 8px', borderRadius: 9999, background: '#22c55e15', border: '1px solid #22c55e30', fontSize: 10, fontWeight: 800, color: '#22c55e' }}>Live</span>
      </div>
      {[{ l: 'N1 absorbé en autonomie', v: '70 %' }, { l: 'Temps de première réponse', v: '4 min' }, { l: 'CSAT', v: '+12 pts' }, { l: 'Embauches annulées', v: '4 postes' }].map((r, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: i < 3 ? '1px solid #1a1a1a' : 'none' }}>
          <span style={{ fontSize: 13, color: '#52525b', fontWeight: 500 }}>{r.l}</span>
          <span style={{ fontSize: 14, fontWeight: 800, color: AC }}>{r.v}</span>
        </div>
      ))}
    </div>,
    // Marketing — agences digitales, scale-up FrenchTech
    <div style={{ background: '#fff', borderRadius: 14, padding: 20, boxShadow: '0 4px 28px rgba(0,0,0,.09)', border: '1px solid #e4e4e7' }}>
      <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 14 }}>Éditeur SaaS B2B · Atalante Champeaux</div>
      {[{ l: 'Articles SEO / mois', v: '×4' }, { l: 'Trafic organique', v: '+140 %' }, { l: 'Budget content manager annulé', v: '60 k€/an' }, { l: 'Délai 1er article', v: '3 semaines' }].map((r, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 0', borderBottom: i < 3 ? '1px solid #f4f4f5' : 'none' }}>
          <span style={{ fontSize: 13, color: '#52525b', fontWeight: 500 }}>{r.l}</span>
          <span style={{ fontSize: 14, fontWeight: 800, color: AC }}>{r.v}</span>
        </div>
      ))}
    </div>,
    // Achats — agroalimentaire IFS/BRC, sous-traitance auto
    <div style={{ background: '#fff', borderRadius: 14, padding: 20, boxShadow: '0 4px 28px rgba(0,0,0,.09)', border: '1px solid #e4e4e7' }}>
      <div style={{ fontSize: 11, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 14 }}>ETI agroalimentaire · Bretagne</div>
      {[{ l: 'Sourcing fournisseur', v: '×6 rapide' }, { l: 'Économies achats captées', v: '1,2 M€' }, { l: 'Fournisseurs surveillés', v: '80' }, { l: 'Ruptures surprises', v: '0' }].map((r, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 0', borderBottom: i < 3 ? '1px solid #f4f4f5' : 'none' }}>
          <span style={{ fontSize: 13, color: '#52525b', fontWeight: 500 }}>{r.l}</span>
          <span style={{ fontSize: 14, fontWeight: 800, color: AC }}>{r.v}</span>
        </div>
      ))}
    </div>,
    // Finance — cabinets Rennes, ETI bretonnes
    <div style={{ background: '#fff', borderRadius: 14, padding: 20, boxShadow: '0 4px 28px rgba(0,0,0,.09)', border: '1px solid #e4e4e7' }}>
      <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 10 }}>Cabinet comptable · Rennes centre</div>
      {[{ l: 'Capacité gérée', v: '×2' }, { l: 'Saisie répétitive absorbée', v: '80 %' }, { l: 'Nouveaux clients / 4 mois', v: '+80' }, { l: 'Souveraineté Mistral', v: '100 % FR' }].map((r, i) => (
        <div key={i} style={{ marginBottom: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#52525b' }}>{r.l}</span>
            <span style={{ fontSize: 12, fontWeight: 800, color: AC }}>{r.v}</span>
          </div>
          <div style={{ height: 4, background: '#f4f4f5', borderRadius: 9999, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${[90, 80, 75, 100][i]}%`, background: `linear-gradient(to right,${AC},${AC}88)`, borderRadius: 9999 }} />
          </div>
        </div>
      ))}
    </div>,
  ];
  return mockups[index] || null;
}

const metiers = [
  {
    n: '01', href: '/agent-ia/service-client/', label: 'Service client (SaaS, scale-up FrenchTech)', tag: 'Agent IA Service client →',
    desc: "Les éditeurs SaaS et scale-up FrenchTech Rennes Saint-Malo (densité forte à Atalante Champeaux et Beauregard) croulent sous les tickets répétitifs. Notre agent IA absorbe 70 % du N1 en autonomie. Cas signature : éditeur SaaS B2B 8 000 clients PME, CSAT +12 points en 3 mois, temps de première réponse de 18h à 4 minutes.",
    pub: "Scale-up FrenchTech Rennes Saint-Malo · Éditeurs SaaS Atalante · Plateformes B2B Bretagne · Startups tech Beauregard",
    reverse: false,
  },
  {
    n: '02', href: '/agent-ia/marketing/', label: 'Marketing et content (agences digitales, scale-up tech)', tag: 'Agent IA Marketing →',
    desc: "Les agences digitales rennaises et les équipes content des scale-up FrenchTech doivent produire un contenu multi-canal soutenu avec un ton de marque cohérent. Notre agent IA marketing produit articles SEO, posts LinkedIn, séquences nurture. Cas type : éditeur SaaS B2B rennais, content ×4 sans embauche, trafic organique +140 % en 6 mois.",
    pub: "Agences digitales Rennes · Scale-up FrenchTech · Éditeurs SaaS B2B · Startups tech Atalante Champeaux",
    reverse: true,
  },
  {
    n: '03', href: '/agent-ia/achats/', label: 'Achats (agroalimentaire, sous-traitance automobile)', tag: 'Agent IA Achats →',
    desc: "Les directions achats des ETI agroalimentaires bretonnes (Lactalis, Bridor, Brocéliande et autres acteurs régionaux) et des sous-traitants automobile autour de La Janais gèrent des panels fournisseurs étendus avec exigences fortes (IFS/BRC pour l'agro, IATF pour l'auto). Notre agent IA combine sourcing accéléré, analyse devis pondérée et vigilance financière. Cas signature : ETI industrielle, +4 % d'économies = 1,2 M€.",
    pub: "ETI agroalimentaires Bretagne · Sous-traitants automobile La Janais · Fournisseurs IFS/BRC · Industries bretonnes",
    reverse: false,
  },
  {
    n: '04', href: '/agent-ia/finance/', label: 'Finance et comptabilité (cabinets pro Rennes)', tag: 'Agent IA Finance →',
    desc: "Les cabinets d'expertise comptable rennais (forte densité centre-ville et Beauregard) et les directions financières d'ETI bretonnes absorbent 60 à 80 % de saisie répétitive (factures fournisseurs, rapprochement bancaire, écritures). Souveraineté Mistral France particulièrement critique pour les données financières de l'agroalimentaire et de la sous-traitance industrielle. Cas signature : cabinet, ×2 capacité en 4 mois.",
    pub: "Cabinets comptables Rennes centre et Beauregard · DAF ETI agroalimentaires · Finance scale-up FrenchTech · Directions financières Bretagne",
    reverse: true,
  },
];

function MetiersRennes() {
  const [ref, visible] = useInView(0.04);
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        <div style={{ marginBottom: 56 }}>
          <H2 style={{ marginBottom: 12 }}>L'IA transforme chaque métier rennais</H2>
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 640, lineHeight: 1.7 }}>
            Quatre métiers où nos agents IA ont déjà transformé le quotidien de PME et ETI bretonnes, des scale-up FrenchTech d'Atalante aux ETI agroalimentaires régionales. Pour la liste complète, voir notre <a href="/agent-ia/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>hub agents IA par fonction</a>.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>
          {metiers.map((m, i) => (
            <div key={i} className={`ren-metier-row${m.reverse ? ' ren-metier-rev' : ''}`}
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: `all .6s ${i * .12}s ease` }}>
              <div style={{ order: m.reverse ? 2 : 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                  <span style={{ fontSize: 12, fontWeight: 900, color: AC, letterSpacing: '.12em' }}>{m.n}</span>
                  <div style={{ height: 1, width: 24, background: `${AC}40` }} />
                </div>
                <h3 style={{ fontSize: 'clamp(20px,2.4vw,28px)', fontWeight: 800, color: '#09090b', marginBottom: 14, letterSpacing: '-.03em', lineHeight: 1.2 }}>{m.label}</h3>
                <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.8, marginBottom: 16 }}>{m.desc}</p>
                <div style={{ padding: '10px 16px', borderRadius: 10, background: '#f0f7ff', border: `1px solid ${AC}15`, marginBottom: 20 }}>
                  <div style={{ fontSize: 10, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 4 }}>Public type Rennes / Bretagne</div>
                  <div style={{ fontSize: 13, color: '#8a8a95', fontWeight: 600, lineHeight: 1.65 }}>{m.pub}</div>
                </div>
                <a href={m.href} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '10px 20px', borderRadius: 9999, background: AC, color: '#fff', textDecoration: 'none', fontSize: 14, fontWeight: 700, transition: 'all .15s' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.03)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)'; }}>
                  {m.tag}
                </a>
              </div>
              <div className="ren-mockup-col" style={{ order: m.reverse ? 1 : 2 }}>
                <MetierMockup index={i} />
              </div>
            </div>
          ))}
        </div>

        {/* Marquee agents */}
        <div style={{ marginTop: 64, overflow: 'hidden', borderTop: '1px solid #e4e4e7', paddingTop: 32 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.12em', textAlign: 'center', marginBottom: 20 }}>Tous nos agents IA disponibles</div>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 60, background: 'linear-gradient(to right,#fafafa,transparent)', zIndex: 2 }} aria-hidden="true" />
            <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 60, background: 'linear-gradient(to left,#fafafa,transparent)', zIndex: 2 }} aria-hidden="true" />
            <div style={{ display: 'flex', gap: 10, animation: 'ren-ticker 60s linear infinite', width: 'max-content' }}>
              {[...agentTags, ...agentTags].map((t, i) => (
                <a key={i} href={t.href} style={{ padding: '6px 14px', borderRadius: 9999, border: '1px solid #e4e4e7', fontSize: 13, fontWeight: 700, color: '#52525b', textDecoration: 'none', background: '#fff', whiteSpace: 'nowrap', transition: 'all .15s', flexShrink: 0 }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = `${AC}55`; (e.currentTarget as HTMLAnchorElement).style.color = AC; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#e4e4e7'; (e.currentTarget as HTMLAnchorElement).style.color = '#52525b'; }}>
                  {t.name}
                </a>
              ))}
            </div>
          </div>
          <p style={{ fontSize: 14, color: '#52525b', textAlign: 'center', marginTop: 20 }}>
            Au total, nous couvrons 8 métiers cœur et la modalité transverse téléphonique. <a href="/agent-ia/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>Explorer notre hub agents IA →</a>
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Cas client rennais ────────────────────────────────────────
function CasClientLocal() {
  const [ref, visible] = useInView(0.08);
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all .6s ease' }}>
        <div style={{ fontSize: 11, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.14em', marginBottom: 24 }}>Cas client Bretagne · Anonymisé</div>
        <H2 style={{ marginBottom: 20 }}>Scale-up FrenchTech Atalante : content marketing multiplié par 4</H2>

        <div style={{ display: 'inline-flex', flexWrap: 'wrap', gap: 6, marginBottom: 40, padding: '6px 14px', borderRadius: 9999, background: '#f4f4f5' }}>
          {['Scale-up FrenchTech B2B', '80 collaborateurs', 'Atalante Champeaux Rennes', '2025-2026', 'cas anonymisé'].map((t) => (
            <span key={t} style={{ fontSize: 13, fontWeight: 700, color: '#52525b' }}>{t}</span>
          )).reduce((acc, el, i) => i === 0 ? [el] : [...acc, <span key={`sep-${i}`} style={{ color: '#d4d4d8' }}>·</span>, el], [] as React.ReactNode[])}
        </div>

        <div className="ren-cas-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: 48, alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { v: '×4', l: 'articles SEO produits sans embauche', hero: true },
              { v: '+140 %', l: 'trafic organique en 6 mois', hero: false },
              { v: '60 k€', l: 'budget content manager annulé / an', hero: false },
              { v: '3 sem.', l: 'déploiement agent IA marketing', hero: false },
            ].map((kpi, i) => (
              <div key={i} style={{ padding: '16px 20px', borderRadius: 14, background: kpi.hero ? '#09090b' : '#f4f4f5', border: kpi.hero ? `1px solid ${AC}30` : '1px solid #e4e4e7' }}>
                <div style={{ fontSize: kpi.hero ? 32 : 24, fontWeight: 900, color: kpi.hero ? AC : '#09090b', lineHeight: 1, marginBottom: 4 }}>{kpi.v}</div>
                <div style={{ fontSize: 13, color: kpi.hero ? '#8a8a95' : '#8a8a95', fontWeight: 600, lineHeight: 1.4 }}>{kpi.l}</div>
              </div>
            ))}
          </div>

          <div>
            <h3 style={{ fontSize: 18, fontWeight: 800, color: '#09090b', marginBottom: 16, lineHeight: 1.3 }}>Une équipe marketing 3 personnes avec une ambition content 4× supérieure à sa capacité.</h3>
            <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.85, marginBottom: 20 }}>
              La scale-up FrenchTech rennaise (SaaS B2B pour le retail) avait une ambition content 4× supérieure à la capacité de son équipe marketing 3 personnes. Un recrutement de content manager senior avait été évalué à 60 k€ chargés. La direction demandait une solution sans augmenter la masse salariale.
            </p>
            <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.85, marginBottom: 28 }}>
              Agent IA marketing Althoce déployé en 3 semaines avec cadrage strict du ton de marque (cadrage présentiel à Atalante Champeaux, build distanciel). Aujourd'hui, la responsable marketing consacre 30 à 50 % de son temps à la stratégie de positionnement. Le trafic organique a progressé de 140 % en 6 mois sans budget SEA supplémentaire.
            </p>

            <div style={{ padding: '20px 24px', borderRadius: 14, background: '#f0f7ff', border: `1px solid ${AC}20`, marginBottom: 24 }}>
              <p style={{ fontSize: 15, color: '#1e3a5f', lineHeight: 1.75, margin: 0, fontStyle: 'italic' }}>
                "On produit 4× plus de contenus qu'avant sans recruter. Mon équipe se concentre enfin sur la stratégie plutôt que sur l'exécution."
              </p>
              <div style={{ marginTop: 10, fontSize: 13, fontWeight: 700, color: '#52525b' }}>Responsable marketing · Scale-up FrenchTech Atalante Rennes</div>
            </div>

            <a href="/cas-clients/saas-b2b-agent-ia-marketing/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 15, fontWeight: 700, color: AC, textDecoration: 'none', padding: '10px 20px', border: `1px solid ${AC}30`, borderRadius: 9999, transition: 'all .15s' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = `${AC}08`; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; }}>
              Lire le cas signature marketing →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── StepVisual ────────────────────────────────────────────────
function StepVisual({ stepIndex, active }: { stepIndex: number; active: boolean }) {
  if (stepIndex === 0) {
    return (
      <div style={{ background: '#fff', borderRadius: 12, padding: 16, boxShadow: '0 4px 24px rgba(0,0,0,.08)', border: '1px solid #e4e4e7', animation: active ? 'floatCard 4s ease-in-out infinite' : 'none' }}>
        <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 12 }}>Rapport d'audit</div>
        {['Saisie manuelle CRM', 'Traitement emails entrants', 'Génération reporting', 'Onboarding candidats'].map((t, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0', borderBottom: '1px solid #f4f4f5', animation: active ? `slideIn .4s ${i * .15}s ease both` : 'none' }}>
            <div style={{ width: 16, height: 16, borderRadius: '50%', background: i < 3 ? '#22c55e22' : '#f4f4f5', border: i < 3 ? '1.5px solid #22c55e' : '1.5px solid #d4d4d8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 9, color: '#22c55e', fontWeight: 900 }}>
              {i < 3 && '✓'}
            </div>
            <span style={{ fontSize: 13, color: i < 3 ? '#52525b' : '#a1a1aa', fontWeight: i < 3 ? 600 : 400 }}>{t}</span>
            {i < 3 && <span style={{ marginLeft: 'auto', fontSize: 10, fontWeight: 800, color: '#22c55e' }}>−{[4, 6, 3, 2][i]}h/sem</span>}
          </div>
        ))}
      </div>
    );
  }
  if (stepIndex === 1) {
    return (
      <div style={{ background: '#fff', borderRadius: 12, padding: 16, boxShadow: '0 4px 24px rgba(0,0,0,.08)', border: '1px solid #e4e4e7', animation: active ? 'floatCard 4s 1s ease-in-out infinite' : 'none' }}>
        <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 12 }}>Roadmap IA</div>
        {[{ l: 'Agent email', w: 90 }, { l: 'Agent CRM', w: 70 }, { l: 'Agent reporting', w: 55 }, { l: 'Agent onboarding', w: 40 }].map((r, i) => (
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
  }
  if (stepIndex === 2) {
    return (
      <div style={{ background: '#fff', borderRadius: 12, padding: 16, boxShadow: '0 4px 24px rgba(0,0,0,.08)', border: '1px solid #e4e4e7', animation: active ? 'floatCard 4s 2s ease-in-out infinite' : 'none' }}>
        <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 14 }}>Intégrations actives</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {[{ n: 'Gmail', c: '#ea4335' }, { n: 'HubSpot', c: '#ff7a59' }, { n: 'Slack', c: '#4a154b' }, { n: 'Notion', c: '#000' }, { n: 'Salesforce', c: '#00a1e0' }, { n: 'Drive', c: '#0f9d58' }].map((t, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '7px 10px', borderRadius: 8, border: '1px solid #f0f0f0', background: '#fafafa', animation: active ? `slideIn .4s ${i * .1}s ease both` : 'none' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: t.c }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: '#52525b' }}>{t.n}</span>
              <span style={{ marginLeft: 'auto', fontSize: 9, color: '#22c55e', fontWeight: 800 }}>●</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div style={{ background: '#fff', borderRadius: 12, padding: 16, boxShadow: '0 4px 24px rgba(0,0,0,.08)', border: '1px solid #e4e4e7', animation: active ? 'floatCard 4s 1.5s ease-in-out infinite' : 'none' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <span style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em' }}>Votre agent IA</span>
        <span style={{ padding: '2px 8px', borderRadius: 9999, background: '#22c55e15', border: '1px solid #22c55e30', fontSize: 10, fontWeight: 800, color: '#22c55e' }}>Actif 24/7</span>
      </div>
      {["Emails traités aujourd'hui", 'Leads qualifiés', 'Tickets résolus', 'Heures économisées'].map((l, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7px 0', borderBottom: '1px solid #f4f4f5', animation: active ? `countUp .5s ${i * .12}s ease both` : 'none' }}>
          <span style={{ fontSize: 13, color: '#52525b' }}>{l}</span>
          <span style={{ fontSize: 14, fontWeight: 800, color: ['#22c55e', AC, '#f59e0b', '#8b5cf6'][i] }}>{['142', '38', '94', '11.4h'][i]}</span>
        </div>
      ))}
    </div>
  );
}

// ── Methodology ───────────────────────────────────────────────
function Methodology() {
  const [ref, visible] = useInView();
  return (
    <section id="method" ref={ref} style={{ padding: '96px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <H2 style={{ marginBottom: 12 }}>Comment se passe une mission avec Althoce ?</H2>
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 500, margin: '0 auto' }}>Quatre étapes courtes. Vos équipes voient leur premier agent IA en production en moins de 4 semaines.</p>
        </div>
        <div className="v2-grid4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
          {steps.map((s, i) => (
            <div key={i} style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: `all .6s ${i * .12}s ease` }}>
              <div style={{ marginBottom: 24, minHeight: 180 }}>
                <StepVisual stepIndex={i} active={visible} />
              </div>
              <div style={{ fontSize: 13, fontWeight: 800, color: AC, textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 6 }}>STEP {i + 1}</div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '2px 10px', borderRadius: 9999, background: '#f0f7ff', border: `1px solid ${AC}20`, fontSize: 12, fontWeight: 700, color: AC, marginBottom: 10 }}>{s.time}</div>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: '#09090b', marginBottom: 8, letterSpacing: '-.02em' }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: '#8a8a95', lineHeight: 1.65 }}>{s.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <a href="/cas-clients/" style={{ fontSize: 15, fontWeight: 700, color: AC, textDecoration: 'none' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.textDecoration = 'underline'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.textDecoration = 'none'; }}>
            Voir nos cas clients →
          </a>
        </div>
      </div>
    </section>
  );
}

// ── FAQ ───────────────────────────────────────────────────────
const faqRennes = [
  {
    q: "Présentiel à Rennes ou distanciel : quelle différence ?",
    a: "Aucune différence qualité ni délais. Présentiel pertinent à Rennes (Atalante Champeaux, La Courrouze, Beauregard, centre-ville), Cesson-Sévigné, Saint-Malo pour le cadrage et les ateliers. Build en distanciel structuré avec points hebdomadaires de 30 minutes.",
  },
  {
    q: "Avez-vous un bureau permanent à Rennes ?",
    a: "Pas de bureau permanent. Espaces partenaires à Atalante Champeaux pour les RDV présentiels. Déplacements réguliers dans Rennes Métropole et en Bretagne (Cesson-Sévigné, Saint-Malo, Lorient sur demande).",
  },
  {
    q: "Proposez-vous des formations IA pour mes équipes bretonnes ?",
    a: "Oui. Ateliers de formation IA en présentiel à Rennes ou en distanciel synchrone. Formats 4h à 21h, adaptés par métier. Particulièrement utiles pour les scale-up FrenchTech (adoption IA dans les équipes produit et marketing), l'agroalimentaire (conformité IFS/BRC, traçabilité) et la sous-traitance automobile (IATF).",
  },
  {
    q: "Avez-vous une expertise sur l'agroalimentaire breton (Lactalis, Bridor, IFS/BRC) ?",
    a: "Oui. Sous-traitance agroalimentaire bretonne, conformité IFS/BRC, traçabilité documentaire fournisseurs. Cas types : agents IA gestion documentaire conformité, vigilance fournisseurs critiques, automatisation ADV grands donneurs d'ordre. Données hébergées Mistral France (OVH), aucun transfert hors territoire.",
  },
  {
    q: "Mes données restent-elles en France ?",
    a: "Oui par défaut. Mistral hébergé France (OVH, Scaleway). Particulièrement strict pour l'agroalimentaire premium (secret recettes, conformité IFS/BRC), la sous-traitance automobile (compliance constructeurs PSA/Stellantis) et la recherche numérique IRT b-com.",
  },
  {
    q: "Avez-vous des clients en Bretagne ?",
    a: "Oui. Scale-up FrenchTech Atalante, agroalimentaire régional, cabinets d'expertise comptable rennais. Notre cas signature marketing (content ×4, trafic +140 %, 60 k€/an économisés) est directement transposable au tissu FrenchTech breton.",
  },
];

function FAQRennes() {
  return (
    <section id="faq" style={{ padding: '96px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <H2 style={{ marginBottom: 12 }}>Questions fréquentes : Althoce à Rennes et en Bretagne</H2>
          <p style={{ fontSize: 16, color: '#52525b' }}>Réponses directes aux questions que posent nos prospects rennais avant la prise de contact.</p>
        </div>
        <FAQAccordion items={faqRennes} />
      </div>
    </section>
  );
}

// ── Souveraineté ──────────────────────────────────────────────
function Souverainete() {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#09090b', borderTop: '1px solid #1a1a1a' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div className="ren-split-rev" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 64, alignItems: 'center' }}>
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all .6s ease' }}>
            <H2 style={{ color: '#fff', marginBottom: 20 }}>
              Vos données restent vos données.<br /><span style={{ color: AC }}>En France, sous votre contrôle.</span>
            </H2>
            <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.75, marginBottom: 32 }}>
              La plupart des outils IA envoient vos données chez des prestataires américains. Chez Althoce, on fait l'inverse : hébergement France (OVH, Scaleway), instance dédiée, chiffrement de bout en bout, et un humain toujours dans la boucle.
            </p>
            <a href="/conseil/" style={{ fontSize: 15, fontWeight: 700, color: AC, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, padding: '11px 22px', border: `1px solid ${AC}40`, borderRadius: 9999, transition: 'all .15s' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = AC; (e.currentTarget as HTMLAnchorElement).style.color = '#fff'; (e.currentTarget as HTMLAnchorElement).style.borderColor = AC; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = AC; (e.currentTarget as HTMLAnchorElement).style.borderColor = `${AC}40`; }}>
              Notre approche conseil →
            </a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all .6s .15s ease' }}>
            {securityItems.map((it, i) => (
              <div key={i} style={{ border: '1px solid #1e1e1e', borderRadius: 16, padding: '24px 20px', background: '#0f0f0f', position: 'relative', overflow: 'hidden', transition: 'border-color .2s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = `${AC}44`; (e.currentTarget as HTMLDivElement).style.background = '#111'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = '#1e1e1e'; (e.currentTarget as HTMLDivElement).style.background = '#0f0f0f'; }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(to right,transparent,${AC}40,transparent)` }} aria-hidden="true" />
                <div style={{ width: 36, height: 36, marginBottom: 10, borderRadius: 9999, background: `${AC}12`, border: `1px solid ${AC}25`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: AC, opacity: 0.8 }} />
                </div>
                <h3 style={{ fontSize: 14, fontWeight: 800, color: '#d4d4d8', marginBottom: 6, lineHeight: 1.3 }}>{it.title}</h3>
                <p style={{ fontSize: 13, color: '#52525b', lineHeight: 1.65 }}>{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── CTA Final ─────────────────────────────────────────────────
function CTAFinal() {
  const [ref, visible] = useInView(0.1);
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all .7s ease' }}>
        <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.14em', marginBottom: 20 }}>30 minutes offertes avec un expert</div>
        <H2 style={{ marginBottom: 20 }}>
          Prêt à déployer votre premier agent IA<br /><span style={{ color: AC }}>à Rennes ou en Bretagne ?</span>
        </H2>
        <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 40, maxWidth: 520, margin: '0 auto 40px' }}>
          Un échange de 30 minutes suffit à identifier le cas d'usage le plus impactant. Repartez avec une feuille de route et un devis ferme sous 5 jours. Présentiel à Rennes ou en Bretagne, ou distanciel, que l'on travaille ensemble ou non.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/contact" style={{ padding: '16px 32px', borderRadius: 9999, background: '#09090b', color: '#fff', textDecoration: 'none', fontSize: 16, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'transform .15s,box-shadow .15s', boxShadow: '0 4px 16px rgba(0,0,0,.12)' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.03)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 28px rgba(0,0,0,.22)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 16px rgba(0,0,0,.12)'; }}>
            Prendre rendez-vous →
          </a>
          <a href="/cas-clients/" style={{ padding: '16px 32px', borderRadius: 9999, border: `1.5px solid ${AC}40`, color: AC, textDecoration: 'none', fontSize: 16, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 8, background: `${AC}08`, transition: 'all .15s' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = `${AC}14`; (e.currentTarget as HTMLAnchorElement).style.borderColor = `${AC}70`; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = `${AC}08`; (e.currentTarget as HTMLAnchorElement).style.borderColor = `${AC}40`; }}>
            Voir nos cas clients
          </a>
        </div>
      </div>
    </section>
  );
}

// ── CSS ───────────────────────────────────────────────────────
const globalStyles = `
  @keyframes ren-drift { 0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(3%,4%) scale(1.06)} }
  @keyframes ren-ticker { from{transform:translateX(0)}to{transform:translateX(-50%)} }

  @media (max-width:860px) {
    .ren-hero-grid { grid-template-columns:1fr !important; }
    .ren-map-col { display:none !important; }
    .ren-split-rev { grid-template-columns:1fr !important; }
    .ren-cas-grid { grid-template-columns:1fr !important; }
    .ren-metier-row { grid-template-columns:1fr !important; }
    .ren-metier-rev > div { order:unset !important; }
    .ren-mockup-col { display:none !important; }
    .ren-grid4 { grid-template-columns:repeat(2,1fr) !important; }
  }
  @media (max-width:560px) {
    .ren-grid4 { grid-template-columns:1fr !important; }
  }
`;

export default function AgenceIARennesPageClient() {
  return (
    <main>
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      <Hero />
      <PourquoiAlthoce />
      <MetiersRennes />
      <CasClientLocal />
      <Methodology />
      <FAQRennes />
      <Souverainete />
      <CTAFinal />
    </main>
  );
}
