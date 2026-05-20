'use client';

import React, { useState, useEffect, useRef } from 'react';
import { steps, securityItems } from '@/lib/data';
import { FAQAccordion } from '@/components/ui/data-display/FAQAccordion';
import type { FAQv2Item } from '@/lib/data';

const AC = '#2563eb';
const GREEN = '#16a34a';
const RED = '#ef4444';
const AMBER = '#d97706';
const PURPLE = '#7c3aed';
const CYAN = '#0891b2';

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
    <h2 style={{ fontSize: 'clamp(24px,3.2vw,40px)', fontWeight: 800, letterSpacing: '-.03em', color: '#09090b', lineHeight: 1.15, ...sx }}>
      {children}
    </h2>
  );
}

// ── Rotating Stat Hero ────────────────────────────────────────
const heroStats = [
  { value: '+150', label: 'PME équipées', sub: 'dans tous les secteurs de l\'économie française' },
  { value: '+758', label: 'agents en production', sub: 'actifs 24h/24 chez nos clients' },
  { value: '+5 M€', label: 'économisés', sub: 'en temps libéré, erreurs évitées, revenus générés' },
];

function RotatingStat() {
  const [idx, setIdx] = useState(0);
  const [fade, setFade] = useState(true);
  useEffect(() => {
    const t = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % heroStats.length);
        setFade(true);
      }, 300);
    }, 4000);
    return () => clearInterval(t);
  }, []);
  const s = heroStats[idx];
  return (
    <div style={{ borderRadius: 24, background: '#09090b', border: '1px solid #1a1a1a', padding: '40px 36px', position: 'relative', overflow: 'hidden', minHeight: 220, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.018) 1px,transparent 1px)', backgroundSize: '32px 32px' }} />
      <div aria-hidden="true" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 340, height: 240, background: `radial-gradient(ellipse,${AC}12 0%,transparent 65%)`, filter: 'blur(40px)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', zIndex: 1, opacity: fade ? 1 : 0, transition: 'opacity .3s ease' }}>
        <div style={{ fontSize: 'clamp(52px,8vw,88px)', fontWeight: 900, color: AC, letterSpacing: '-.05em', lineHeight: 1, marginBottom: 10 }}>{s.value}</div>
        <div style={{ fontSize: 18, fontWeight: 800, color: '#f0f0f0', letterSpacing: '-.02em', marginBottom: 8 }}>{s.label}</div>
        <div style={{ fontSize: 14, color: '#52525b', lineHeight: 1.65, maxWidth: 260 }}>{s.sub}</div>
      </div>
      {/* Dots */}
      <div style={{ position: 'absolute', bottom: 16, display: 'flex', gap: 6, zIndex: 1 }}>
        {heroStats.map((_, i) => (
          <div key={i} onClick={() => setIdx(i)} style={{ width: i === idx ? 20 : 6, height: 6, borderRadius: 9999, background: i === idx ? AC : '#2a2a2a', cursor: 'pointer', transition: 'all .3s' }} />
        ))}
      </div>
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{ padding: '120px 24px 80px', position: 'relative', overflow: 'hidden', borderBottom: '1px solid #e4e4e7' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: 600, height: 600, borderRadius: '50%', background: `radial-gradient(circle,${AC}10 0%,transparent 65%)`, filter: 'blur(80px)', animation: 'gradDrift1 14s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', top: '30%', right: '-8%', width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle,#16a34a0d 0%,transparent 65%)', filter: 'blur(100px)', animation: 'gradDrift2 18s ease-in-out infinite' }} />
      </div>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.025) 1px,transparent 1px)', backgroundSize: '48px 48px', maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%,black,transparent)', zIndex: 0 }} aria-hidden="true" />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1160, margin: '0 auto' }}>
        <div className="cc-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div style={{ minWidth: 0 }}>
            <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: '#a1a1aa', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 6, fontWeight: 500, flexWrap: 'wrap' }}>
              <a href="/" style={{ color: '#8a8a95', textDecoration: 'none' }}>Accueil</a>
              <span>›</span>
              <span style={{ color: '#09090b' }}>Cas clients</span>
            </nav>

            <h1 style={{ fontSize: 'clamp(26px,3.8vw,50px)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-.03em', color: '#09090b', marginBottom: 20 }}>
              Cas clients : ce que nos agents IA ont changé{' '}
              <span style={{ color: AC }}>concrètement chez des PME et ETI françaises.</span>
            </h1>

            <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 28, maxWidth: 520 }}>
              9 cas concrets, chiffrés, vérifiables. Cabinets d'expertise comptable, négoces, SaaS B2B, cabinets de recrutement, ETI industrielles : voici comment Althoce a transformé leur quotidien opérationnel, sans remplacer une seule personne.
            </p>

            <div style={{ marginBottom: 32, overflow: 'hidden' }}>
              <div className="cc-pills" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {['+150 PME équipées', '+758 agents en production', '+5 M€ économisés', '+150 PME équipées', '+758 agents en production', '+5 M€ économisés'].map((t, i) => (
                  <span key={i} className={i >= 3 ? 'pill-dup' : undefined} style={{ padding: '5px 13px', borderRadius: 9999, background: '#f4f4f5', fontSize: 13, fontWeight: 700, color: '#52525b', whiteSpace: 'nowrap', flexShrink: 0 }}>{t}</span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="/contact"
                style={{ padding: '14px 28px', borderRadius: 9999, background: '#09090b', color: '#fff', textDecoration: 'none', fontSize: 15, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'transform .15s,box-shadow .15s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.03)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 6px 24px rgba(0,0,0,.25)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'; }}>
                Discuter de votre projet →
              </a>
              <a href="#cas"
                style={{ padding: '14px 28px', borderRadius: 9999, border: '1.5px solid #e4e4e7', color: '#09090b', textDecoration: 'none', fontSize: 15, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, background: '#fff', transition: 'border-color .15s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = AC; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#e4e4e7'; }}>
                Parcourir les 9 cas ↓
              </a>
            </div>
          </div>

          <div className="cc-stat-col">
            <RotatingStat />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Promesse ──────────────────────────────────────────────────
function Promesse() {
  const [ref, visible] = useInView(0.08);
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all .6s ease' }}>
        <H2 style={{ marginBottom: 16 }}>Comment lire ces cas clients chez Althoce</H2>
        <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 20, maxWidth: 800 }}>
          Tous les cas présentés sont <strong style={{ color: '#09090b' }}>réels</strong> ou <strong style={{ color: '#09090b' }}>composites anonymisés à partir de plusieurs clients similaires</strong>. Les chiffres sont <strong style={{ color: '#09090b' }}>vérifiables</strong> : nous les croisons systématiquement avec les données client (production, support, RH, commercial selon le cas) avant publication. Les noms et secteurs sont précisés quand le client a donné son accord nominatif. Sinon, nous précisons explicitement « cas composite » et anonymisons en gardant la rigueur sectorielle. Aucun cas n'est inventé pour les besoins du marketing.
        </p>
        <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.8, marginBottom: 40 }}>
          La méthodologie de chiffrage est transparente. Pour chaque cas, nous documentons : le <strong style={{ color: '#09090b' }}>point de départ</strong> (volume traité, temps consacré, ETP affectés, KPI initiaux), la <strong style={{ color: '#09090b' }}>transformation déployée</strong> (agents IA, intégration, calendrier), et le <strong style={{ color: '#09090b' }}>point d'arrivée mesurable</strong> (mêmes KPI après stabilisation 3 à 6 mois post-déploiement). Vous trouverez les détails dans chaque fiche cas. Pour cadrer un cas similaire au vôtre, voir <a href="/services/audit-ia/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>Audit IA</a>.
        </p>

        <div style={{ borderRadius: 20, background: '#09090b', border: '1px solid #1e1e1e', overflow: 'hidden' }}>
          <div style={{ padding: '14px 24px', borderBottom: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: AC }} />
            <p style={{ fontSize: 12, fontWeight: 800, color: '#8a8a95', textTransform: 'uppercase', letterSpacing: '.12em', margin: 0 }}>Trois engagements de transparence</p>
          </div>
          {[
            { n: '01', text: 'Pas de chiffre inventé. Tous les KPI sont issus de mesures avant / après réelles, croisées avec les données client.' },
            { n: '02', text: 'Anonymisation explicite quand le client n\'autorise pas la mention nominative. Jamais de tromperie par omission.' },
            { n: '03', text: 'Méthodologie documentée. Si vous voulez challenger un chiffre, nous fournissons le détail au RDV des 30 minutes offertes.' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 16, padding: '20px 24px', borderBottom: i < 2 ? '1px solid #1a1a1a' : 'none' }}>
              <div style={{ flexShrink: 0, width: 30, height: 30, borderRadius: 9, background: `${AC}18`, border: `1px solid ${AC}35`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 12, fontWeight: 900, color: AC }}>{item.n}</span>
              </div>
              <p style={{ fontSize: 15, color: '#a1a1aa', lineHeight: 1.7, margin: 0 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Cases Data ────────────────────────────────────────────────
const casesData = [
  {
    num: '01',
    title: 'Cabinet d\'expertise comptable · Lyon',
    meta: ['Finance', 'Expertise comptable', 'PME'],
    color: GREEN,
    size: '12 collaborateurs · 320 clients TPE/PME',
    pitch: '×2 capacité à effectif constant grâce aux agents IA factures et rapprochement bancaire.',
    kpis: ['80 % saisie absorbée', '−60 % temps production', '0 départ équipe', '+80 clients en 4 mois'],
    quote: 'On a doublé l\'activité sans personne démissionner. C\'est le projet IT le plus impactant en 5 ans.',
    href: '/cas-clients/cabinet-comptable-lyon/',
    metier: 'Finance',
    secteur: 'Expertise comptable',
    taille: 'PME',
  },
  {
    num: '02',
    title: 'Négoce de vins bordelais',
    meta: ['Commercial', 'Négoce', 'PME'],
    color: AMBER,
    size: '28 collaborateurs · Export 65 %',
    pitch: 'Agent SDR multilingue (français, anglais, mandarin, japonais) qui prospecte 24/7.',
    kpis: ['+200 % RDV qualifiés en 4 mois', 'Time-to-touch 18h → 4 min', 'Coût RDV −80 %', '0 embauche supplémentaire'],
    quote: 'L\'agent prospecte 24/7 en 4 langues. Mon équipe se concentre sur le closing et la fidélisation.',
    href: '/cas-clients/negoce-vins-bordelais-agent-ia-sdr/',
    metier: 'Commercial',
    secteur: 'Négoce',
    taille: 'PME',
  },
  {
    num: '03',
    title: 'Éditeur SaaS B2B · Service client',
    meta: ['Service client', 'SaaS', 'ETI'],
    color: CYAN,
    size: '120 collaborateurs · 8 000 clients PME',
    pitch: '70 % des tickets support N1 résolus en autonomie complète par l\'agent IA.',
    kpis: ['Time-to-response 18h → 4 min', '70 % N1 absorbé', 'CSAT 67 → 79', '0 départ équipe support'],
    quote: '70 % du N1 résolu en 4 minutes. Mes agents humains se concentrent sur les cas complexes. CSAT +12 points.',
    href: '/cas-clients/saas-b2b-agent-ia-service-client/',
    metier: 'Service client',
    secteur: 'SaaS',
    taille: 'ETI',
  },
  {
    num: '04',
    title: 'Cabinet d\'avocats · Lyon',
    meta: ['Téléphonique', 'Services professionnels', 'TPE'],
    color: PURPLE,
    size: '18 collaborateurs · Droit des affaires',
    pitch: 'Agent IA téléphonique sur le standard du cabinet, 70 % des appels résolus directement.',
    kpis: ['Appels perdus 18 % → 0 %', '70 % appels résolus', '×2,3 prises de RDV', '12h libérées/semaine'],
    quote: 'Plus aucun appel perdu. Mes prises de RDV ont doublé. L\'assistante est libérée pour son vrai métier.',
    href: '/cas-clients/cabinet-avocats-agent-ia-telephonique/',
    metier: 'Téléphonique',
    secteur: 'Services professionnels',
    taille: 'TPE',
  },
  {
    num: '05',
    title: 'Cabinet de recrutement · Paris',
    meta: ['RH', 'Recrutement', 'TPE'],
    color: '#f43f5e',
    size: '6 consultants · Postes cadres',
    pitch: 'Tri CV anti-biais documenté, scoring transparent, conformité RGPD opposable.',
    kpis: ['200 → 700 CV/sem triés', 'Time-to-touch candidat 5j → 24h', '×2 placements/mois', '0 retour RGPD défavorable'],
    quote: 'On a doublé le volume placé en 4 mois sans recruter. Zéro retour RGPD défavorable depuis 6 mois.',
    href: '/cas-clients/cabinet-recrutement-paris-agent-ia-tri-cv/',
    metier: 'RH',
    secteur: 'Recrutement',
    taille: 'TPE',
  },
  {
    num: '06',
    title: 'Éditeur SaaS B2B · Marketing',
    meta: ['Marketing', 'SaaS', 'PME'],
    color: '#ec4899',
    size: '90 collaborateurs · 1 500 clients',
    pitch: 'Content multi-canal généré au ton de marque, équipe marketing 3 personnes libérée pour la stratégie.',
    kpis: ['1 → 4 articles SEO/mois', '4 → 12 posts LinkedIn/mois', '8 → 60 emails segmentés/mois', 'Trafic organique +140 % à 6 mois'],
    quote: 'On publie 4 fois plus de contenu, tout dans notre ton de marque. On a enfin le temps de faire de la stratégie.',
    href: '/cas-clients/saas-b2b-agent-ia-marketing/',
    metier: 'Marketing',
    secteur: 'SaaS',
    taille: 'PME',
  },
  {
    num: '07',
    title: 'Distributeur B2B industriel',
    meta: ['Opérations', 'Distribution', 'PME'],
    color: '#0891b2',
    size: '45 collaborateurs · E-commerce industriel',
    pitch: 'Fin du turnover sur le poste assistant ops grâce aux agents mails, ADV et documents.',
    kpis: ['80 → 240 mails traités/jour', '25 → 75 commandes ERP/jour', '100 % documents classés', 'Turnover ops 80 % → 0 %'],
    quote: 'On a triplé le volume de commandes traitées, et personne n\'a démissionné en 14 mois.',
    href: '/cas-clients/distributeur-b2b-agent-ia-ops/',
    metier: 'Opérations',
    secteur: 'Distribution',
    taille: 'PME',
  },
  {
    num: '08',
    title: 'ETI agroalimentaire · Juridique',
    meta: ['Juridique', 'Agroalimentaire', 'ETI'],
    color: PURPLE,
    size: '280 collaborateurs · Direction juridique 1 personne',
    pitch: '600 contrats/an pré-analysés en mode décharge, juriste libéré pour la stratégie.',
    kpis: ['3h → 30 min validation contrat', '30 → 50+ contrats/mois', '4 jours libérés/mois', 'Mistral France souverain'],
    quote: 'J\'ai récupéré 4 jours par mois pour ce que mon poste devrait vraiment faire : conseil et négociation.',
    href: '/cas-clients/eti-agroalimentaire-agent-ia-juridique/',
    metier: 'Juridique',
    secteur: 'Agroalimentaire',
    taille: 'ETI',
  },
  {
    num: '09',
    title: 'ETI industrielle · Achats',
    meta: ['Achats', 'Industrie', 'ETI'],
    color: GREEN,
    size: '350 collaborateurs · 30 M€ achats annuels',
    pitch: '4 % d\'économies achats supplémentaires la première année grâce à 3 agents IA combinés.',
    kpis: ['3 jours → 4h sourcing', '60 % → 100 % devis analysés', '4 → 0 options ratées', '+4 % économies = 1,2 M€/an'],
    quote: 'On a capté 4 % d\'économies en plus la première année. Soit 1,2 M€ sur nos 30 M€ d\'achats.',
    href: '/cas-clients/eti-industrielle-agent-ia-achats/',
    metier: 'Achats',
    secteur: 'Industrie',
    taille: 'ETI',
  },
];

const filterMetiers = ['Tout', 'Finance', 'Commercial', 'Service client', 'Téléphonique', 'RH', 'Marketing', 'Opérations', 'Juridique', 'Achats'];
const filterTailles = ['Tout', 'TPE', 'PME', 'ETI'];

// ── Case Card ─────────────────────────────────────────────────
function CaseCard({ cas, index, visible }: { cas: typeof casesData[0]; index: number; visible: boolean }) {
  const isRight = index % 2 === 1;
  return (
    <div className="cc-case-block" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'stretch', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: `all .6s ${Math.min(index, 2) * .1}s ease` }}>

      {/* Number + context panel */}
      <div style={{ order: isRight ? 2 : 1, borderRadius: 20, background: '#09090b', border: '1px solid #1a1a1a', padding: '32px 28px', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: -20, right: -20, width: 160, height: 160, background: `radial-gradient(circle,${cas.color}14,transparent)`, filter: 'blur(30px)' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
            <span style={{ fontSize: 40, fontWeight: 900, color: cas.color, letterSpacing: '-.04em', lineHeight: 1, opacity: 0.3 }}>{cas.num}</span>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              {cas.meta.map((tag) => (
                <span key={tag} style={{ padding: '3px 10px', borderRadius: 9999, background: '#111', border: '1px solid #222', fontSize: 10, fontWeight: 700, color: '#8a8a95' }}>{tag}</span>
              ))}
            </div>
          </div>
          <div style={{ fontSize: 12, color: '#3f3f46', fontWeight: 600, marginBottom: 10, letterSpacing: '.02em' }}>{cas.size}</div>
          {/* KPI chips */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
            {cas.kpis.map((kpi, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', borderRadius: 10, background: '#111', border: '1px solid #1a1a1a' }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: cas.color, flexShrink: 0 }} />
                <span style={{ fontSize: 13, fontWeight: 700, color: '#e4e4e7', lineHeight: 1.4 }}>{kpi}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Quote */}
        <div style={{ position: 'relative', zIndex: 1, paddingTop: 20, borderTop: '1px solid #1a1a1a' }}>
          <div aria-hidden="true" style={{ fontSize: 40, lineHeight: 0.6, color: cas.color, fontFamily: 'Georgia, serif', fontWeight: 900, opacity: 0.4, marginBottom: 12 }}>"</div>
          <p style={{ fontSize: 14, color: '#52525b', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>{cas.quote}</p>
        </div>
      </div>

      {/* Title + pitch + CTA */}
      <div style={{ order: isRight ? 1 : 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '8px 0' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, marginBottom: 20 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: cas.color }} />
          <span style={{ fontSize: 12, fontWeight: 800, color: cas.color, textTransform: 'uppercase', letterSpacing: '.1em' }}>Cas client {cas.num}</span>
        </div>
        <h3 style={{ fontSize: 'clamp(20px,2.5vw,28px)', fontWeight: 800, color: '#09090b', letterSpacing: '-.02em', lineHeight: 1.2, marginBottom: 16 }}>{cas.title}</h3>
        <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 28 }}>{cas.pitch}</p>
        <a href={cas.href}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '13px 24px', borderRadius: 9999, border: `1.5px solid ${cas.color}40`, color: cas.color, textDecoration: 'none', fontSize: 15, fontWeight: 700, background: `${cas.color}08`, transition: 'background .15s,border-color .15s', alignSelf: 'flex-start' }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = `${cas.color}15`; (e.currentTarget as HTMLAnchorElement).style.borderColor = `${cas.color}70`; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = `${cas.color}08`; (e.currentTarget as HTMLAnchorElement).style.borderColor = `${cas.color}40`; }}>
          Lire le cas complet →
        </a>
      </div>
    </div>
  );
}

// ── Cases Listing with Filters ────────────────────────────────
function CasesListing() {
  const [ref, visible] = useInView(0.04);
  const [metier, setMetier] = useState('Tout');
  const [taille, setTaille] = useState('Tout');

  const filtered = casesData.filter((c) => {
    if (metier !== 'Tout' && c.metier !== metier) return false;
    if (taille !== 'Tout' && c.taille !== taille) return false;
    return true;
  });

  return (
    <section id="cas" ref={ref} style={{ padding: '96px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ marginBottom: 52 }}>
          <H2 style={{ marginBottom: 12 }}>9 transformations réelles chez nos clients</H2>
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 560 }}>Filtrez par métier ou taille d'entreprise pour trouver le cas le plus proche du vôtre.</p>
        </div>

        {/* Filters */}
        <div style={{ marginBottom: 48, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginRight: 4, flexShrink: 0 }}>Métier</span>
            {filterMetiers.map((f) => (
              <button key={f} onClick={() => setMetier(f)}
                style={{ padding: '6px 14px', borderRadius: 9999, border: `1.5px solid ${metier === f ? AC : '#e4e4e7'}`, background: metier === f ? AC : '#fff', color: metier === f ? '#fff' : '#52525b', fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', transition: 'all .15s' }}>
                {f}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginRight: 4, flexShrink: 0 }}>Taille</span>
            {filterTailles.map((f) => (
              <button key={f} onClick={() => setTaille(f)}
                style={{ padding: '6px 14px', borderRadius: 9999, border: `1.5px solid ${taille === f ? AC : '#e4e4e7'}`, background: taille === f ? AC : '#fff', color: taille === f ? '#fff' : '#52525b', fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', transition: 'all .15s' }}>
                {f}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 0', color: '#a1a1aa', fontSize: 16 }}>
            Aucun cas ne correspond à ces filtres.{' '}
            <button onClick={() => { setMetier('Tout'); setTaille('Tout'); }} style={{ color: AC, fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 16 }}>
              Tout afficher
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>
            {filtered.map((cas, i) => (
              <CaseCard key={cas.num} cas={cas} index={i} visible={visible} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// ── KPI Globaux ───────────────────────────────────────────────
const kpiGlobaux = [
  { value: '+758', label: 'Agents en production', sub: 'Actifs 24h/24' },
  { value: '+150', label: 'PME et ETI équipées', sub: 'Toutes tailles' },
  { value: '−70 %', label: 'Temps de saisie', sub: 'En moyenne' },
  { value: '+5 M€', label: 'Économisés', sub: 'Cumulés 24 mois' },
  { value: '96 %', label: 'Taux de réussite', sub: '4 % arrêtés au cadrage' },
  { value: '4 sem.', label: 'Délai moyen', sub: 'Agent simple en prod' },
];

function KPIGlobaux() {
  const [ref, visible] = useInView(0.08);
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <H2 style={{ marginBottom: 12 }}>Au total, ce que les agents IA Althoce ont changé pour nos +150 PME équipées</H2>
        </div>
        <div className="cc-kpi-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2, borderRadius: 20, overflow: 'hidden', border: '1px solid #e4e4e7' }}>
          {kpiGlobaux.map((k, i) => (
            <div key={i} style={{ padding: '36px 28px', background: i % 2 === 0 ? '#fff' : '#fafafa', position: 'relative', overflow: 'hidden', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(16px)', transition: `all .5s ${i * .08}s ease`, borderBottom: i < 3 ? '1px solid #e4e4e7' : 'none', borderRight: i % 3 < 2 ? '1px solid #e4e4e7' : 'none' }}>
              <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: '20%', right: '20%', height: 3, background: `linear-gradient(to right,transparent,${AC},transparent)`, borderRadius: '0 0 4px 4px' }} />
              <div style={{ fontSize: 'clamp(28px,3vw,44px)', fontWeight: 900, color: AC, letterSpacing: '-.04em', lineHeight: 1, marginBottom: 8 }}>{k.value}</div>
              <div style={{ fontSize: 15, fontWeight: 800, color: '#09090b', marginBottom: 4 }}>{k.label}</div>
              <div style={{ fontSize: 13, color: '#a1a1aa', fontWeight: 500 }}>{k.sub}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 28, padding: '20px 28px', borderRadius: 16, background: `${AC}08`, border: `1px solid ${AC}20` }}>
          <p style={{ fontSize: 15, color: '#52525b', lineHeight: 1.7, margin: 0, textAlign: 'center' }}>
            Ces chiffres globaux sont la <strong>somme des transformations</strong> des 150 PME et ETI accompagnées sur les 24 derniers mois. Chaque agent compte un, chaque économie est mesurée chez un client identifié, chaque déploiement est documenté en interne. Méthodologie disponible sur demande pendant les <strong>30 minutes offertes avec un expert</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Secteurs couverts ─────────────────────────────────────────
const secteurs = [
  { n: '01', title: 'Expertise comptable et finance', desc: 'Cabinets d\'expertise comptable, directions financières d\'ETI, services compta PME.', cas: '×2 capacité, automatisation factures, reporting financier auto.' },
  { n: '02', title: 'SaaS B2B et tech', desc: 'Éditeurs logiciels, plateformes B2B, agences digitales.', cas: 'Support N1 absorbé, content marketing, qualification leads inbound.' },
  { n: '03', title: 'Distribution et négoce', desc: 'Distributeurs B2B, négoces spécialisés (vins, matières premières, équipements industriels).', cas: 'Prospection multilingue, ADV automatisée, vigilance fournisseurs.' },
  { n: '04', title: 'Industrie et manufacturing', desc: 'PME industrielles, ETI sous-traitantes, équipementiers.', cas: 'Achats optimisés, ops back-office, gestion documentaire.' },
  { n: '05', title: 'Services professionnels', desc: 'Cabinets d\'avocats, cabinets conseil, expertises spécialisées.', cas: 'Standard téléphonique, analyse contractuelle, veille réglementaire.' },
  { n: '06', title: 'Recrutement et RH', desc: 'Cabinets de recrutement, ESN avec besoins de sourcing massif, DRH PME.', cas: 'Tri CV anti-biais, qualification candidats, onboarding new hire.' },
  { n: '07', title: 'E-commerce et retail', desc: 'Marchands e-commerce, retailers omnicanaux.', cas: 'Support client multilingue, statut commande, qualification SAV.' },
  { n: '08', title: 'Agroalimentaire et secteurs régulés', desc: 'ETI agroalimentaires, santé, finance régulée.', cas: 'Juridique souverain France, conformité documentée, vigilance fournisseurs.' },
];

function Secteurs() {
  const [ref, visible] = useInView(0.06);
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <div style={{ marginBottom: 48 }}>
          <H2 style={{ marginBottom: 12 }}>Les secteurs où Althoce a déjà déployé</H2>
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 600 }}>Notre portefeuille couvre les secteurs PME et ETI typiques de l'économie française. La majorité des problématiques (saisie, support, RH, marketing) sont transversales.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {secteurs.map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: 24, padding: '24px 0', borderBottom: i < secteurs.length - 1 ? '1px solid #e4e4e7' : 'none', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(-16px)', transition: `all .5s ${i * .07}s ease` }}>
              <div style={{ flexShrink: 0, width: 48, height: 48, borderRadius: 14, background: `${AC}10`, border: `1px solid ${AC}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2 }}>
                <span style={{ fontSize: 14, fontWeight: 900, color: AC }}>{s.n}</span>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 16, fontWeight: 800, color: '#09090b', letterSpacing: '-.01em', marginBottom: 4 }}>{s.title}</div>
                <p style={{ fontSize: 14, color: '#8a8a95', lineHeight: 1.65, margin: '0 0 6px' }}>{s.desc}</p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ width: 4, height: 4, borderRadius: '50%', background: GREEN }} />
                  <span style={{ fontSize: 13, color: '#8a8a95', fontWeight: 600 }}>Cas types : {s.cas}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 36, padding: '20px 24px', borderRadius: 16, background: '#fff', border: '1px solid #e4e4e7' }}>
          <p style={{ fontSize: 15, color: '#52525b', lineHeight: 1.7, margin: 0 }}>
            Votre secteur n'est pas listé ? La majorité des problématiques sont transversales. Les <strong>30 minutes offertes avec un expert</strong> servent à valider la transposabilité d'un cas existant à votre contexte. Voir aussi <a href="/services/audit-ia/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>Audit IA</a>.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Methodology ───────────────────────────────────────────────
function StepVisual({ stepIndex, active }: { stepIndex: number; active: boolean }) {
  if (stepIndex === 0) return (
    <div style={{ background: '#fff', borderRadius: 12, padding: 16, boxShadow: '0 4px 24px rgba(0,0,0,.08)', border: '1px solid #e4e4e7', animation: active ? 'floatCard 4s ease-in-out infinite' : 'none' }}>
      <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 12 }}>Audit cas client</div>
      {['Processus actuel cartographié', 'KPI de départ mesurés', 'ROI estimé chiffré', 'Cas comparable identifié'].map((t, i) => (
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
      <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 12 }}>Roadmap</div>
      {[{ l: 'Agent prioritaire', w: 90 }, { l: 'Intégrations', w: 72 }, { l: 'Tests & validation', w: 55 }, { l: 'Formation équipe', w: 38 }].map((r, i) => (
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
      <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 14 }}>Construction</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        {[{ n: 'n8n', c: '#e36002' }, { n: 'Claude', c: '#6c5dd3' }, { n: 'Mistral', c: '#6366f1' }, { n: 'HubSpot', c: '#ff7a59' }, { n: 'Gmail', c: '#ea4335' }, { n: 'Notion', c: '#09090b' }].map((t, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '7px 10px', borderRadius: 8, border: '1px solid #f0f0f0', background: '#fafafa', animation: active ? `slideIn .4s ${i * .1}s ease both` : 'none' }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: t.c }} />
            <span style={{ fontSize: 11, fontWeight: 700, color: '#8a8a95' }}>{t.n}</span>
            <span style={{ marginLeft: 'auto', fontSize: 9, color: '#22c55e', fontWeight: 800 }}>●</span>
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <div style={{ background: '#fff', borderRadius: 12, padding: 16, boxShadow: '0 4px 24px rgba(0,0,0,.08)', border: '1px solid #e4e4e7', animation: active ? 'floatCard 4s 1.5s ease-in-out infinite' : 'none' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <span style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em' }}>Agent actif · Mesures</span>
        <span style={{ padding: '2px 8px', borderRadius: 9999, background: '#22c55e15', border: '1px solid #22c55e30', fontSize: 10, fontWeight: 800, color: '#22c55e' }}>Actif</span>
      </div>
      {[{ t: 'KPI avant (baseline)', v: '100 %' }, { t: 'KPI après 3 mois', v: '+68 %' }, { t: 'ROI mesuré', v: '×4,2' }, { t: 'Satisfaction équipe', v: '9,1/10' }].map((r, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7px 0', borderBottom: '1px solid #f4f4f5', animation: active ? `countUp .5s ${i * .12}s ease both` : 'none' }}>
          <span style={{ fontSize: 12, color: '#52525b', fontWeight: 500 }}>{r.t}</span>
          <span style={{ fontSize: 14, fontWeight: 800, color: AC }}>{r.v}</span>
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
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 500, margin: '0 auto' }}>Quatre étapes courtes. Du cadrage à l'agent en production, en moins de 4 semaines pour un cas simple.</p>
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
      </div>
    </section>
  );
}

// ── Security ──────────────────────────────────────────────────
const secIcons = [
  <svg key="0" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 2L3 5v5c0 4.4 3 8.3 7 9 4-0.7 7-4.6 7-9V5l-7-3z" stroke={AC} strokeWidth="1.5" strokeLinejoin="round" /><path d="M7 10l2 2 4-4" stroke={AC} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  <svg key="1" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="3" y="9" width="14" height="9" rx="2" stroke={AC} strokeWidth="1.5" /><path d="M7 9V6a3 3 0 016 0v3" stroke={AC} strokeWidth="1.5" strokeLinecap="round" /></svg>,
  <svg key="2" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="7" stroke={AC} strokeWidth="1.5" /><path d="M10 6v4l3 2" stroke={AC} strokeWidth="1.5" strokeLinecap="round" /></svg>,
  <svg key="3" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="7" r="3.5" stroke={AC} strokeWidth="1.5" /><path d="M4 18c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke={AC} strokeWidth="1.5" strokeLinecap="round" /></svg>,
];

function Security() {
  const [ref, visible] = useInView(0.08);
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#09090b', borderTop: '1px solid #1a1a1a' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="v2-grid-hero" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <span style={{ fontSize: 12, fontWeight: 800, color: AC, textTransform: 'uppercase', letterSpacing: '.14em' }}>Souveraineté & transparence</span>
            <H2 style={{ marginTop: 12, marginBottom: 20, color: '#fff' }}>Vos données. Hébergées en France. 100 % sous votre contrôle.</H2>
            <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.75, marginBottom: 20 }}>
              Tous nos déploiements sont documentés et auditables. Chaque recommandation de l'agent est journalisée, tracée, contrôlable. Pour les clients qui exigent la souveraineté totale : <strong style={{ color: '#a1a1aa' }}>Mistral hébergé en France</strong> et auto-hébergement infra possible.
            </p>
            <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.75 }}>
              Code source, accès, logs, workflows : <strong style={{ color: '#a1a1aa' }}>tout vous appartient à 100 %</strong> à la fin de la mission. Voir <a href="/conseil/" style={{ color: AC, textDecoration: 'none' }}>Conseil IA</a> pour un accompagnement stratégique ou <a href="/services/audit-ia/" style={{ color: AC, textDecoration: 'none' }}>Audit IA</a> pour démarrer.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {securityItems.map((item, i) => (
              <div key={i} style={{ border: '1px solid #1e1e1e', borderRadius: 16, padding: '22px 18px', background: '#0f0f0f', position: 'relative', overflow: 'hidden', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: `all .5s ${i * .1}s ease` }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = `${AC}40`; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = '#1e1e1e'; }}>
                <div aria-hidden="true" style={{ position: 'absolute', top: -16, right: -16, width: 60, height: 60, background: `radial-gradient(circle,${AC}08,transparent)` }} />
                <div style={{ marginBottom: 10 }}>{secIcons[i]}</div>
                <div style={{ fontSize: 14, fontWeight: 800, color: '#e4e4e7', marginBottom: 6 }}>{item.title}</div>
                <div style={{ fontSize: 13, color: '#52525b', lineHeight: 1.65 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── FAQ ───────────────────────────────────────────────────────
const faqCas: FAQv2Item[] = [
  {
    q: "Les chiffres présentés sont-ils réels ou marketing ?",
    a: "Réels et vérifiables. Pour chaque cas, nous croisons les chiffres avec les données client (production, support, RH, commercial selon le métier concerné) avant publication. Le détail méthodologique est disponible sur demande pendant les 30 minutes offertes avec un expert. Aucun chiffre n'est inventé pour les besoins du marketing.",
  },
  {
    q: "Pourquoi certains clients sont-ils nommés et d'autres anonymisés ?",
    a: "Nominatif uniquement avec accord écrit du client. La majorité de nos clients PME préfèrent l'anonymisation : ils ne veulent pas signaler à leurs concurrents qu'ils ont automatisé telle ou telle fonction. Quand nous anonymisons, nous gardons une rigueur sectorielle (cabinet comptable lyonnais, négoce bordelais, etc.) pour que la transposition à votre contexte reste fidèle.",
  },
  {
    q: "Y a-t-il des cas d'échec dans votre portefeuille ?",
    a: "Oui. Notre taux de réussite déploiement est de 96 %, ce qui signifie que 4 % des projets sont arrêtés. Ces arrêts se font systématiquement au cadrage, avant le build : soit le cas d'usage n'est pas mûr pour l'IA (volume insuffisant, processus pas assez répétitif, données pas exploitables), soit la maturité IT du client ne permet pas un déploiement propre. Dans ces cas, nous orientons vers une formation IA ou un audit IA préalables. Nous ne facturons jamais un build qui n'a pas de chance raisonnable de réussir.",
  },
  {
    q: "Comment savoir si mon cas est transposable à un de ces 9 cas clients ?",
    a: "Trois indicateurs simples : taille d'entreprise comparable (TPE / PME / ETI), métier comparable (votre fonction se rattache à une des 9 fonctions traitées), volume comparable (vous traitez un volume mensuel proche de celui du cas). Si les 3 sont vrais, la transposition est très probable. Si 2 sur 3, probable avec adaptation. Si 1 sur 3, l'audit IA cadrera un déploiement adapté à votre contexte.",
  },
  {
    q: "Combien coûte un déploiement comparable à ces cas ?",
    a: "Sur devis selon votre contexte : volume, périmètre, outils existants, exigences de souveraineté. Tout démarre par les 30 minutes offertes avec un expert : on identifie le cas comparable au vôtre, on partage les ordres de grandeur d'investissement et de ROI, vous repartez avec un devis ferme sous 5 jours sans engagement.",
  },
];

function FAQ() {
  return (
    <section id="faq" style={{ padding: '96px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <H2 style={{ marginBottom: 12 }}>Questions fréquentes sur ces cas clients</H2>
          <p style={{ fontSize: 16, color: '#52525b' }}>Cinq questions qui reviennent systématiquement à la lecture de ces cas.</p>
        </div>
        <FAQAccordion items={faqCas} />
      </div>
    </section>
  );
}

// ── Responsive CSS ────────────────────────────────────────────
const globalStyles = `
  @keyframes gradDrift1 { 0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(3%,4%) scale(1.06)} }
  @keyframes gradDrift2 { 0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(-4%,-3%) scale(1.08)} }
  @keyframes floatCard { 0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)} }
  @keyframes slideIn { from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:translateX(0)} }
  @keyframes countUp { from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)} }
  @keyframes pillsScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  @media (max-width: 860px) {
    .cc-hero-grid { grid-template-columns: 1fr !important; }
    .cc-stat-col { display: none !important; }
    .cc-kpi-grid { grid-template-columns: repeat(2,1fr) !important; }
    .cc-case-block { grid-template-columns: 1fr !important; gap: 20px !important; }
    .cc-case-block > div { order: unset !important; }
    .v2-grid4 { grid-template-columns: repeat(2,1fr) !important; }
    .v2-grid-hero { grid-template-columns: 1fr !important; }
  }
  @media (max-width: 640px) {
    .cc-kpi-grid { grid-template-columns: repeat(2,1fr) !important; }
    .v2-grid4 { grid-template-columns: 1fr !important; }
    .cc-pills { flex-wrap: nowrap !important; width: max-content; animation: pillsScroll 10s linear infinite; }
  }
`;

// ── Page ──────────────────────────────────────────────────────
export default function CasClientsHubPageClient() {
  return (
    <main>
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      <Hero />
      <Promesse />
      <CasesListing />
      <KPIGlobaux />
      <Secteurs />
      <Methodology />
      <Security />
      <FAQ />
    </main>
  );
}
