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
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: 600, height: 600, borderRadius: '50%', background: `radial-gradient(circle,${AC}0a 0%,transparent 65%)`, filter: 'blur(80px)', animation: 'mar-drift 14s ease-in-out infinite' }} />
      </div>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.025) 1px,transparent 1px)', backgroundSize: '48px 48px', maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%,black,transparent)', zIndex: 0 }} aria-hidden="true" />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1160, margin: '0 auto' }}>
        <div className="mar-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: '#a1a1aa', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', fontWeight: 500 }}>
              <a href="/" style={{ color: '#8a8a95', textDecoration: 'none' }}>Accueil</a><span>›</span>
              <a href="/agences/" style={{ color: '#8a8a95', textDecoration: 'none' }}>Agences</a><span>›</span>
              <span style={{ color: '#09090b' }}>Marseille</span>
            </nav>

            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
              {['+150 PME équipées en France', 'Expertise secteurs PACA', 'Présentiel + distanciel'].map((t) => (
                <span key={t} style={{ padding: '4px 12px', borderRadius: 9999, background: '#f0f7ff', border: `1px solid ${AC}25`, fontSize: 12, fontWeight: 700, color: AC }}>{t}</span>
              ))}
            </div>

            <h1 style={{ fontSize: 'clamp(26px,3.8vw,50px)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-.04em', color: '#09090b', marginBottom: 20 }}>
              Agence IA à Marseille : agents IA, automatisation et formation pour PME et ETI provençales.
            </h1>

            <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 32, maxWidth: 520 }}>
              Vous dirigez une PME ou une ETI à Marseille, Aix-en-Provence ou dans la région Provence-Alpes-Côte d'Azur. Althoce vous accompagne avec une expertise sur les secteurs forts régionaux (logistique portuaire, agroalimentaire méditerranéen, tourisme haut de gamme), une présence régionale pour les RDV stratégiques, et un distanciel structuré pour la phase de build.
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

          <div className="mar-map-col" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <FranceMapSVG mainCity="Marseille" presentielLabel="Présentiel Marseille" />
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
        Nous ne sommes pas généralistes. Nous avons déployé des agents IA dans tous les métiers : <a href="/agent-ia/finance/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>finance</a>, <a href="/agent-ia/commercial/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>commercial</a>, <a href="/agent-ia/service-client/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>service client</a>, <a href="/agent-ia/marketing/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>marketing</a>, <a href="/agent-ia/rh/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>RH</a>, <a href="/agent-ia/ops/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>ops</a>, <a href="/agent-ia/juridique/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>juridique</a>, <a href="/agent-ia/achats/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>achats</a>. Cette profondeur multi-métiers nous permet de <strong style={{ color: '#09090b' }}>comprendre votre quotidien rapidement</strong> sans courbe d'apprentissage facturée à votre charge.
      </p>
    ),
  },
  {
    n: '02',
    title: 'Présentiel à Marseille ET distanciel structuré : vous choisissez le mode',
    body: (
      <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.8, margin: 0 }}>
        Pour les phases stratégiques, nous nous déplaçons régulièrement à Marseille (Euroméditerranée, Joliette, Vieux-Port, Marseille 6ᵉ et 8ᵉ), à Aix-en-Provence (centre-ville, technopôle), à Vitrolles et Plan de Campagne pour le tissu industriel, et sur l'ensemble de la métropole Aix-Marseille-Provence et de la région PACA (Toulon, Avignon, Arles). Pour la phase de build (60 à 70 % du projet), notre <strong style={{ color: '#09090b' }}>distanciel structuré</strong> avec points hebdomadaires de 30 minutes. Vous choisissez la modalité.
      </p>
    ),
  },
  {
    n: '03',
    title: 'Formation IA pour vos équipes pour autonomiser le pilotage',
    body: (
      <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.8, margin: 0 }}>
        Au-delà du déploiement technique, nous proposons des <a href="/services/formation-ia/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>ateliers de formation IA</a> pour vos équipes provençales : utiliser Claude et ChatGPT au quotidien, bonnes pratiques sécurité, comprendre les agents IA. Ateliers dispensés en présentiel dans vos locaux (Marseille métropole, Aix, PACA) ou en distanciel synchrone selon votre préférence. Format sur-mesure, <strong style={{ color: '#09090b' }}>4h à 21h</strong>.
      </p>
    ),
  },
  {
    n: '04',
    title: 'Souveraineté France par défaut',
    body: (
      <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.8, margin: 0 }}>
        Notre stack standard est française : Mistral hébergé en France (OVH, Scaleway), infrastructure auto-hébergeable, aucune donnée nominative envoyée sans accord client explicite. Particulièrement pertinent pour les ETI provençales soumises à des contraintes secteur sensible : <strong style={{ color: '#09090b' }}>logistique portuaire et douanière GPMM</strong>, agroalimentaire premium (normes sanitaires européennes), énergie Fos-sur-Mer, tourisme haut de gamme (données clients VIP). Voir <a href="/#souverainete" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>Souveraineté</a>.
      </p>
    ),
  },
  {
    n: '05',
    title: 'Premier agent en 1 semaine, ROI mesurable en moins de 6 mois',
    body: (
      <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.8, margin: 0 }}>
        Pas de PowerPoint à 100 000 € en 6 mois. <strong style={{ color: '#09090b' }}>Un agent IA simple est en production sous une semaine</strong> après cadrage signé. ROI typique en moins de 6 mois : un distributeur agroalimentaire méditerranéen a libéré 50 % du temps de son acheteur unique en 6 semaines. +758 agents déjà en production, +5 M€ d'économies cumulées. Voir <a href="/cas-clients/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>nos cas clients</a>.
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
          <H2 style={{ marginBottom: 16 }}>Pourquoi travailler avec Althoce pour votre projet IA à Marseille</H2>
          <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.7, maxWidth: 640 }}>
            Vous avez le choix entre plusieurs prestataires IA en Provence-Alpes-Côte d'Azur. Voici cinq raisons concrètes qui nous distinguent et qui expliquent pourquoi +150 PME françaises, dont plusieurs provençales, nous ont déjà fait confiance.
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

        {/* DarkBlock callout */}
        <div style={{ marginTop: 48, borderRadius: 20, background: '#09090b', border: '1px solid #1e1e1e', overflow: 'hidden', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(16px)', transition: 'all .5s .5s ease' }}>
          <div style={{ padding: '14px 28px', borderBottom: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: AC }} />
            <p style={{ fontSize: 12, fontWeight: 800, color: '#8a8a95', textTransform: 'uppercase', letterSpacing: '.12em', margin: 0 }}>Présentiel ou distanciel : c'est vous qui décidez selon le projet</p>
          </div>
          <div style={{ padding: '24px 28px' }}>
            <p style={{ fontSize: 16, color: '#a1a1aa', lineHeight: 1.8, margin: '0 0 16px' }}>
              <strong style={{ color: '#e4e4e7' }}>Nos délais et notre qualité sont identiques quelle que soit la modalité.</strong> Présentiel pour le cadrage et les ateliers stratégiques (Marseille, Aix-en-Provence, métropole), distanciel pour le build (60 à 70 % du projet) gagne du temps à tout le monde.
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

// ── Métiers (4 blocs zig-zag) ─────────────────────────────────
function MetierMockup({ index }: { index: number }) {
  const mockups = [
    // Achats
    <div style={{ background: '#fff', borderRadius: 14, padding: 20, boxShadow: '0 4px 28px rgba(0,0,0,.09)', border: '1px solid #e4e4e7' }}>
      <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 14 }}>Distributeur agroalimentaire · Marseille</div>
      {[{ l: 'Sourcing fournisseur', v: '3 j → 4 h' }, { l: 'Temps acheteur libéré', v: '50 %' }, { l: 'Ruptures surprises / 12 mois', v: '0' }, { l: 'Fournisseurs surveillés', v: '80' }].map((r, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 0', borderBottom: i < 3 ? '1px solid #f4f4f5' : 'none' }}>
          <span style={{ fontSize: 13, color: '#52525b', fontWeight: 500 }}>{r.l}</span>
          <span style={{ fontSize: 14, fontWeight: 800, color: AC }}>{r.v}</span>
        </div>
      ))}
    </div>,
    // Ops / logistique
    <div style={{ background: '#fff', borderRadius: 14, padding: 20, boxShadow: '0 4px 28px rgba(0,0,0,.09)', border: '1px solid #e4e4e7' }}>
      <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 14 }}>Distributeur B2B · Marseille GPMM</div>
      {[{ l: 'Volume mails traités', v: '×3' }, { l: 'ADV automatisée', v: '80 %' }, { l: 'Turnover assistant ops', v: '0' }, { l: 'Temps de traitement BL', v: '−65 %' }].map((r, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 0', borderBottom: i < 3 ? '1px solid #f4f4f5' : 'none' }}>
          <span style={{ fontSize: 13, color: '#52525b', fontWeight: 500 }}>{r.l}</span>
          <span style={{ fontSize: 14, fontWeight: 800, color: AC }}>{r.v}</span>
        </div>
      ))}
    </div>,
    // Service client tourisme
    <div style={{ background: '#09090b', borderRadius: 14, padding: 20, boxShadow: '0 4px 28px rgba(0,0,0,.18)', border: `1px solid ${AC}30` }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
        <span style={{ fontSize: 12, fontWeight: 800, color: '#3f3f46', textTransform: 'uppercase', letterSpacing: '.1em' }}>Hôtellerie 4★ · Côte d'Azur</span>
        <span style={{ padding: '2px 8px', borderRadius: 9999, background: '#22c55e15', border: '1px solid #22c55e30', fontSize: 10, fontWeight: 800, color: '#22c55e' }}>Live</span>
      </div>
      {[{ l: 'Langues couvertes', v: '9' }, { l: 'Demandes N1 absorbées', v: '72 %' }, { l: 'Time-to-response', v: '3 min' }, { l: 'CSAT saison haute', v: '+9 pts' }].map((r, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: i < 3 ? '1px solid #1a1a1a' : 'none' }}>
          <span style={{ fontSize: 13, color: '#52525b', fontWeight: 500 }}>{r.l}</span>
          <span style={{ fontSize: 14, fontWeight: 800, color: AC }}>{r.v}</span>
        </div>
      ))}
    </div>,
    // Téléphonique
    <div style={{ background: '#fff', borderRadius: 14, padding: 20, boxShadow: '0 4px 28px rgba(0,0,0,.09)', border: '1px solid #e4e4e7' }}>
      <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 10 }}>Cabinet pro · Aix-en-Provence</div>
      {[{ l: 'Appels pris 24/7', v: '100 %' }, { l: 'Appels perdus', v: '18 % → 0 %' }, { l: 'RDV qualifiés / mois', v: '+130 %' }, { l: 'Débordement humain', v: '< 20 %' }].map((r, i) => (
        <div key={i} style={{ marginBottom: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#52525b' }}>{r.l}</span>
            <span style={{ fontSize: 12, fontWeight: 800, color: AC }}>{r.v}</span>
          </div>
          <div style={{ height: 4, background: '#f4f4f5', borderRadius: 9999, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${[100, 90, 85, 80][i]}%`, background: `linear-gradient(to right,${AC},${AC}88)`, borderRadius: 9999 }} />
          </div>
        </div>
      ))}
    </div>,
  ];
  return mockups[index] || null;
}

const metiers = [
  {
    n: '01', href: '/agent-ia/achats/', label: 'Achats et sourcing fournisseurs', tag: 'Agent IA Achats →',
    desc: "Les directions achats des distributeurs agroalimentaires méditerranéens (huiles, vins, conserves, négoces de produits frais), des ETI industrielles autour de Fos-sur-Mer et des sous-traitants GPMM gèrent des panels fournisseurs étendus avec des exigences fortes (vigilance financière, traçabilité sanitaire, certifications ISO). Notre agent IA combine sourcing accéléré, analyse devis pondéré et vigilance financière continue.",
    pub: 'Distributeurs agroalimentaires méditerranéens · Négoces vin et huile · ETI Fos / Vitrolles · Sous-traitance GPMM',
    reverse: false,
  },
  {
    n: '02', href: '/agent-ia/ops/', label: 'Opérations et back-office', tag: 'Agent IA Ops →',
    desc: "Les distributeurs B2B de la métropole marseillaise, les sous-traitants du GPMM (Grand Port Maritime de Marseille) et les ETI logistiques régionales subissent une pression opérationnelle forte sur les flux entrants (mails clients, bons de livraison fournisseurs, suivi douanier, gestion documentaire). Notre agent IA absorbe la couche répétitive et libère vos humains pour la relation client et les arbitrages opérationnels.",
    pub: 'Distributeurs B2B industriels · Sous-traitants GPMM · Logistique portuaire méditerranéenne · ADV Marseille',
    reverse: true,
  },
  {
    n: '03', href: '/agent-ia/service-client/', label: 'Service client', tag: 'Agent IA Service client →',
    desc: "Les hôteliers haut de gamme de la Côte d'Azur (Cannes, Nice, Saint-Tropez), les offices de tourisme provençaux, les e-commerces régionaux et les SaaS B2B à Euroméditerranée reçoivent des demandes clients multilingues (français, anglais, italien, allemand, mandarin pour la clientèle VIP asiatique). Notre chatbot IA RAG multilingue et notre agent service client absorbent le N1 en 9 langues.",
    pub: "Hôtellerie 4-5 étoiles Côte d'Azur · SaaS B2B Euroméditerranée · E-commerce provençal · Tourisme PACA",
    reverse: false,
  },
  {
    n: '04', href: '/agent-ia/telephonique/', label: 'Téléphonique', tag: 'Agent IA Téléphonique →',
    desc: "Les cabinets d'avocats, d'expertise comptable et de conseil d'Aix-en-Provence et de Marseille (forte densité centre-ville aixois et Euroméditerranée), les hôteliers Côte d'Azur et les agences immobilières provençales ont des standards téléphoniques saturés. Notre agent IA téléphonique en voix naturelle française (et 4 langues optionnelles) prend les appels 24/7, qualifie, prend les RDV et transfère les cas complexes avec contexte vocal pré-passé.",
    pub: "Cabinets pro Aix / Marseille · Hôtellerie Côte d'Azur · Agences immobilières PACA · Services aux entreprises",
    reverse: true,
  },
];

function MetiersMarseille() {
  const [ref, visible] = useInView(0.04);
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        <div style={{ marginBottom: 56 }}>
          <H2 style={{ marginBottom: 12 }}>L'IA transforme chaque métier provençal</H2>
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 640, lineHeight: 1.7 }}>
            Quatre métiers où nos agents IA ont déjà transformé le quotidien de PME et ETI provençales, du quartier Euroméditerranée aux flux logistiques du GPMM, des cabinets professionnels d'Aix-en-Provence à l'hôtellerie haut de gamme de la Côte d'Azur. Pour la liste complète des 8 métiers couverts, voir notre <a href="/agent-ia/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>hub agents IA par fonction</a>.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>
          {metiers.map((m, i) => (
            <div key={i} className={`mar-metier-row${m.reverse ? ' mar-metier-rev' : ''}`}
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: `all .6s ${i * .12}s ease` }}>
              <div style={{ order: m.reverse ? 2 : 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                  <span style={{ fontSize: 12, fontWeight: 900, color: AC, letterSpacing: '.12em' }}>{m.n}</span>
                  <div style={{ height: 1, width: 24, background: `${AC}40` }} />
                </div>
                <h3 style={{ fontSize: 'clamp(20px,2.4vw,28px)', fontWeight: 800, color: '#09090b', marginBottom: 14, letterSpacing: '-.03em', lineHeight: 1.2 }}>{m.label}</h3>
                <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.8, marginBottom: 16 }}>{m.desc}</p>
                <div style={{ padding: '10px 16px', borderRadius: 10, background: '#f0f7ff', border: `1px solid ${AC}15`, marginBottom: 20 }}>
                  <div style={{ fontSize: 10, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 4 }}>Public type PACA</div>
                  <div style={{ fontSize: 13, color: '#8a8a95', fontWeight: 600, lineHeight: 1.65 }}>{m.pub}</div>
                </div>
                <a href={m.href} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '10px 20px', borderRadius: 9999, background: AC, color: '#fff', textDecoration: 'none', fontSize: 14, fontWeight: 700, transition: 'all .15s' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.03)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)'; }}>
                  {m.tag}
                </a>
              </div>
              <div className="mar-mockup-col" style={{ order: m.reverse ? 1 : 2 }}>
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
            <div style={{ display: 'flex', gap: 10, animation: 'mar-ticker 60s linear infinite', width: 'max-content' }}>
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

// ── Cas client provençal ──────────────────────────────────────
function CasClientLocal() {
  const [ref, visible] = useInView(0.08);
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all .6s ease' }}>
        <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.14em', marginBottom: 24 }}>Cas client provençal · Anonymisé</div>
        <H2 style={{ marginBottom: 20 }}>Distributeur agroalimentaire méditerranéen : sourcing fournisseurs 3 jours en 4 heures</H2>

        <div style={{ display: 'inline-flex', flexWrap: 'wrap', gap: 6, marginBottom: 40, padding: '6px 14px', borderRadius: 9999, background: '#f4f4f5' }}>
          {['Distributeur agroalimentaire', '60 collaborateurs', '80 fournisseurs méditerranéens', 'Marseille', '2025-2026', 'cas anonymisé'].map((t) => (
            <span key={t} style={{ fontSize: 13, fontWeight: 700, color: '#52525b' }}>{t}</span>
          )).reduce((acc, el, i) => i === 0 ? [el] : [...acc, <span key={`sep-${i}`} style={{ color: '#d4d4d8' }}>·</span>, el], [] as React.ReactNode[])}
        </div>

        <div className="mar-cas-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: 48, alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { v: '3j → 4h', l: 'sourcing fournisseur', hero: true },
              { v: '50 %', l: 'du temps acheteur libéré', hero: false },
              { v: '80', l: 'fournisseurs en vigilance continue', hero: false },
              { v: '0', l: 'rupture surprise sur 12 mois', hero: false },
            ].map((k, i) => (
              <div key={i} style={{ borderRadius: 14, background: k.hero ? '#09090b' : '#f8faff', border: k.hero ? `1px solid ${AC}40` : `1px solid ${AC}15`, padding: '18px 22px', display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ fontSize: k.hero ? 28 : 26, fontWeight: 900, color: AC, letterSpacing: '-.04em', lineHeight: 1, flexShrink: 0 }}>{k.v}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: k.hero ? '#a1a1aa' : '#8a8a95', lineHeight: 1.4 }}>{k.l}</div>
              </div>
            ))}
          </div>

          <div>
            <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.8, marginBottom: 20 }}>
              Le distributeur agroalimentaire (huiles d'olive, vins méditerranéens, conserves, produits frais pour restauration et retail régional) gérait <strong style={{ color: '#09090b' }}>80 fournisseurs méditerranéens avec un acheteur unique saturé</strong>. Le sourcing prenait 3 jours, l'analyse devis était bâclée, la vigilance financière manquait.
            </p>
            <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.8, marginBottom: 28 }}>
              2 agents IA Althoce déployés en 6 semaines (sourcing + suivi fournisseurs avec vigilance financière). Aujourd'hui, l'acheteur a libéré <strong style={{ color: '#09090b' }}>50 % de son temps</strong> pour la négociation stratégique avec les producteurs italiens et grecs. 0 rupture surprise sur 12 mois grâce à la vigilance continue.
            </p>
            <div style={{ padding: '20px 24px', borderRadius: 16, background: '#fafafa', border: '1px solid #e4e4e7', borderLeft: `4px solid ${AC}`, marginBottom: 28 }}>
              <div aria-hidden="true" style={{ fontSize: 32, lineHeight: 0.6, color: AC, fontFamily: 'Georgia, serif', fontWeight: 900, opacity: 0.15, marginBottom: 10 }}>"</div>
              <blockquote style={{ fontSize: 16, fontWeight: 700, color: '#09090b', lineHeight: 1.65, margin: '0 0 10px', fontStyle: 'normal' }}>
                Mon acheteur passe maintenant son temps à négocier avec nos producteurs italiens. L'agent gère la surveillance de nos 80 fournisseurs en continu. 0 rupture en un an, c'est une première.
              </blockquote>
              <div style={{ fontSize: 13, color: '#8a8a95', fontWeight: 600 }}>Directeur général · Distributeur agroalimentaire méditerranéen · Marseille · 2026</div>
            </div>
            <a href="/cas-clients/eti-industrielle-agent-ia-achats/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 15, fontWeight: 700, color: AC, textDecoration: 'none', transition: 'gap .15s' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.gap = '10px'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.gap = '6px'; }}>
              Voir notre cas signature achats (transposable) →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Méthode (héritée) ─────────────────────────────────────────
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

function Methodology() {
  const [ref, visible] = useInView();
  return (
    <section id="method" ref={ref} style={{ padding: '96px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <H2 style={{ marginBottom: 12 }}>Comment se passe une mission avec Althoce ?</H2>
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 500, margin: '0 auto' }}>Quatre étapes courtes. Vos équipes voient leur premier agent IA en production en moins de 4 semaines.</p>
        </div>
        <div className="mar-grid4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
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


// ── FAQ locale Marseille ──────────────────────────────────────
const faqMarseille = [
  { q: "Présentiel à Marseille ou distanciel : qu'est-ce qui change ?", a: "Rien sur la qualité ni les délais. Présentiel pertinent en phase de cadrage à Marseille (Euroméditerranée, Vieux-Port, Marseille 8ᵉ), à Aix-en-Provence ou dans la métropole. Build en distanciel structuré avec points hebdomadaires de 30 minutes. Vous choisissez la modalité en fonction de votre préférence." },
  { q: "Avez-vous un bureau permanent à Marseille ?", a: "Pas de bureau permanent à Marseille, mais des déplacements réguliers et des espaces partenaires à Euroméditerranée pour les RDV présentiels. Pour le suivi long terme, le distanciel structuré est notre standard et nos clients provençaux en sont satisfaits." },
  { q: "Proposez-vous des formations IA pour mes équipes provençales ?", a: "Oui. Nos ateliers de formation IA sont dispensés en présentiel dans vos locaux (Marseille, Aix-en-Provence, métropole, PACA) ou en distanciel synchrone selon votre préférence. Formats 4h à 21h selon objectifs. Programme adapté par métier (commercial export méditerranéen, achats agroalimentaire, service client tourisme, etc.)." },
  { q: "Avez-vous une expertise spécifique sur la logistique portuaire GPMM ?", a: "Oui. Sous-traitance GPMM (Grand Port Maritime de Marseille) et flux logistiques méditerranéens. Cas types : automatisation suivi BL fournisseurs, gestion documentaire douanière, vigilance sous-traitants industriels. Pour les contraintes sécurité portuaire, la souveraineté Mistral France est notre standard." },
  { q: "Pour le secteur tourisme et hôtellerie haut de gamme Côte d'Azur, que proposez-vous ?", a: "Trois agents particulièrement pertinents pour le tourisme PACA : chatbot IA RAG multilingue (9 langues standard dont mandarin et japonais pour la clientèle VIP asiatique), agent IA téléphonique en voix naturelle française et anglaise, agent service client intégré aux PMS hôteliers (Mews, Cloudbeds, Oracle Opera). Déploiement adapté aux pics saisonniers." },
  { q: "Mes données restent-elles en France si je travaille avec une agence régionale ?", a: "Oui, par défaut. Mistral hébergé France (OVH, Scaleway), infrastructure auto-hébergeable. Particulièrement strict pour les secteurs sensibles : logistique portuaire et douanière (GPMM), énergie (Fos-sur-Mer, raffineries), agroalimentaire premium (normes sanitaires européennes), tourisme haut de gamme (données clients VIP)." },
];

function FAQMarseille() {
  return (
    <section id="faq" style={{ padding: '96px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <H2 style={{ marginBottom: 12 }}>Questions fréquentes : Althoce à Marseille et en Provence-Alpes-Côte d'Azur</H2>
          <p style={{ fontSize: 16, color: '#52525b' }}>Réponses directes aux questions que posent nos prospects provençaux avant la prise de contact.</p>
        </div>
        <FAQAccordion items={faqMarseille} />
      </div>
    </section>
  );
}

// ── Souveraineté (héritée) ────────────────────────────────────
function Souverainete() {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#09090b', borderTop: '1px solid #1a1a1a' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div className="mar-split-rev" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 64, alignItems: 'center' }}>
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
          Prêt à déployer votre premier agent IA<br /><span style={{ color: AC }}>à Marseille ou en Provence-Alpes-Côte d'Azur ?</span>
        </H2>
        <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 40, maxWidth: 520, margin: '0 auto 40px' }}>
          Un échange de 30 minutes suffit à identifier le cas d'usage le plus impactant. Repartez avec une feuille de route et un devis ferme sous 5 jours. Présentiel à Marseille ou distanciel, que l'on travaille ensemble ou non.
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
  @keyframes mar-drift { 0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(3%,4%) scale(1.06)} }
  @keyframes floatCard { 0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)} }
  @keyframes mar-ticker { from{transform:translateX(0)}to{transform:translateX(-50%)} }

  @media (max-width:860px) {
    .mar-hero-grid { grid-template-columns:1fr !important; }
    .mar-map-col { display:none !important; }
    .mar-split-rev { grid-template-columns:1fr !important; }
    .mar-cas-grid { grid-template-columns:1fr !important; }
    .mar-metier-row { grid-template-columns:1fr !important; }
    .mar-metier-rev > div { order:unset !important; }
    .mar-mockup-col { display:none !important; }
    .mar-grid4 { grid-template-columns:repeat(2,1fr) !important; }
  }
  @media (max-width:560px) {
    .mar-grid4 { grid-template-columns:1fr !important; }
  }
`;

export default function AgenceIAMarseillePageClient() {
  return (
    <main>
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      <Hero />
      <PourquoiAlthoce />
      <MetiersMarseille />
      <CasClientLocal />
      <Methodology />
      <FAQMarseille />
      <Souverainete />
      <CTAFinal />
    </main>
  );
}
