'use client';

import React, { useState, useEffect, useRef } from 'react';
import { steps, securityItems, agentMetiers, agentTags } from '@/lib/data';
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

// ── Agent Network Mockup ──────────────────────────────────────
function AgentNetworkMockup() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 300); return () => clearTimeout(t); }, []);

  const nodes = [
    { label: 'Commercial', color: AC, top: '8%', left: '60%' },
    { label: 'Finance', color: GREEN, top: '28%', left: '82%' },
    { label: 'Juridique', color: PURPLE, top: '58%', left: '80%' },
    { label: 'Achats', color: AMBER, top: '75%', left: '56%' },
    { label: 'RH', color: CYAN, top: '68%', left: '22%' },
    { label: 'Opérations', color: RED, top: '38%', left: '10%' },
    { label: 'Service client', color: '#10b981', top: '12%', left: '20%' },
    { label: 'Marketing', color: '#f43f5e', top: '4%', left: '42%' },
  ];

  return (
    <div style={{ width: '100%', maxWidth: 420, margin: '0 auto', position: 'relative', height: 340 }}>
      {/* Terminal header */}
      <div style={{ padding: '10px 14px', borderRadius: '14px 14px 0 0', background: '#09090b', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {['#ef4444', '#f59e0b', '#22c55e'].map((c) => <div key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />)}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 7, height: 7, borderRadius: '50%', background: AC, boxShadow: `0 0 6px ${AC}` }} />
          <span style={{ fontSize: 11, fontWeight: 700, color: '#52525b' }}>Réseau agents IA · 9 métiers</span>
        </div>
        <div style={{ fontSize: 12, color: '#3f3f46' }}>HUB</div>
      </div>

      {/* Network canvas */}
      <div style={{ background: '#0a0a0a', borderRadius: '0 0 14px 14px', position: 'relative', height: 300, overflow: 'hidden', border: '1px solid #1a1a1a', borderTop: 'none' }}>
        {/* Grid background */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)', backgroundSize: '28px 28px' }} aria-hidden="true" />

        {/* SVG lines from center to nodes */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} aria-hidden="true">
          {nodes.map((n, i) => {
            const cx = 50;
            const cy = 50;
            const nx = parseFloat(n.left);
            const ny = parseFloat(n.top);
            return (
              <line
                key={i}
                x1={`${cx}%`} y1={`${cy}%`}
                x2={`${nx}%`} y2={`${ny}%`}
                stroke={n.color}
                strokeWidth="1"
                strokeOpacity={loaded ? 0.3 : 0}
                strokeDasharray="4 4"
                style={{ transition: `stroke-opacity .8s ${i * .07}s ease` }}
              />
            );
          })}
        </svg>

        {/* Center node */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 64, height: 64, borderRadius: '50%', background: `radial-gradient(circle, ${AC}22 0%, transparent 70%)`, border: `1.5px solid ${AC}55`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 2, zIndex: 2, animation: loaded ? 'hubPulse 3s ease-in-out infinite' : 'none' }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="10" cy="10" r="7" stroke={AC} strokeWidth="1.5" />
            <path d="M10 7v3l2 2" stroke={AC} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span style={{ fontSize: 9, fontWeight: 800, color: AC, textTransform: 'uppercase', letterSpacing: '.04em' }}>Agent IA</span>
        </div>

        {/* Outer nodes */}
        {nodes.map((n, i) => (
          <div key={i} style={{ position: 'absolute', top: n.top, left: n.left, transform: 'translate(-50%,-50%)', opacity: loaded ? 1 : 0, transition: `opacity .5s ${i * .06 + .3}s ease` }}>
            <div style={{ padding: '4px 10px', borderRadius: 9999, background: '#111', border: `1px solid ${n.color}40`, display: 'flex', alignItems: 'center', gap: 5, whiteSpace: 'nowrap' }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: n.color, flexShrink: 0 }} />
              <span style={{ fontSize: 10, fontWeight: 700, color: '#a1a1aa' }}>{n.label}</span>
            </div>
          </div>
        ))}

        {/* Live stats bar */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '8px 14px', background: '#0f0f0f', borderTop: '1px solid #1a1a1a', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {[{ l: '9 métiers', c: AC }, { l: '+758 actifs', c: GREEN }, { l: 'France', c: AMBER }].map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <div style={{ width: 5, height: 5, borderRadius: '50%', background: s.c }} />
              <span style={{ fontSize: 9, fontWeight: 700, color: '#3f3f46' }}>{s.l}</span>
            </div>
          ))}
        </div>
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
        <div style={{ position: 'absolute', top: '30%', right: '-8%', width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle,#7c3aed0d 0%,transparent 65%)', filter: 'blur(100px)', animation: 'gradDrift2 18s ease-in-out infinite' }} />
      </div>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.025) 1px,transparent 1px)', backgroundSize: '48px 48px', maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%,black,transparent)', zIndex: 0 }} aria-hidden="true" />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1160, margin: '0 auto' }}>
        <div className="hub-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div style={{ minWidth: 0 }}>
            <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: '#a1a1aa', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 6, fontWeight: 500, flexWrap: 'wrap' }}>
              <a href="/" style={{ color: '#8a8a95', textDecoration: 'none' }}>Accueil</a>
              <span>›</span>
              <a href="/services/agents-ia/" style={{ color: '#8a8a95', textDecoration: 'none' }}>Agents IA</a>
              <span>›</span>
              <span style={{ color: '#09090b' }}>Par métier</span>
            </nav>

            <h1 style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-.03em', color: '#09090b', marginBottom: 20 }}>
              Agents IA sur-mesure.{' '}
              <span style={{ color: AC }}>Un collaborateur virtuel pour chaque métier.</span>
            </h1>

            <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 28, maxWidth: 520 }}>
              Un agent IA Althoce n'est pas un chatbot. C'est un collaborateur numérique autonome qui lit une situation, raisonne dessus, et exécute des tâches complexes sur vos outils. Choisissez votre métier : vos équipes retrouvent du temps pour ce qui compte vraiment.
            </p>

            <div style={{ marginBottom: 32, overflow: 'hidden' }}>
              <div className="hub-pills" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {['+758 agents en production', '+150 PME équipées', '100 % autonome', '+758 agents en production', '+150 PME équipées', '100 % autonome'].map((t, i) => (
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
              <a href="#metiers"
                style={{ padding: '14px 28px', borderRadius: 9999, border: '1.5px solid #e4e4e7', color: '#09090b', textDecoration: 'none', fontSize: 15, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, background: '#fff', transition: 'border-color .15s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = AC; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#e4e4e7'; }}>
                Voir les 9 métiers ↓
              </a>
            </div>
          </div>

          <div className="hub-mockup-col">
            <AgentNetworkMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── KPI Strip ─────────────────────────────────────────────────
const kpiStrip = [
  { value: '+758', label: 'Agents en production', sub: 'Actifs 24h/24 chez nos clients PME et ETI' },
  { value: '+150', label: 'PME accompagnées', sub: 'De 5 à 500 collaborateurs, tous secteurs' },
  { value: '9 M€', label: 'Économisés', sub: 'En temps libéré, erreurs évitées, revenus débloqués' },
  { value: '1 sem.', label: 'Délai premier agent', sub: 'Du cadrage à l\'agent en production' },
];

function KPIStrip() {
  const [ref, visible] = useInView(0.1);
  return (
    <section ref={ref} style={{ borderTop: '1px solid #e4e4e7', borderBottom: '1px solid #e4e4e7', background: '#fafafa' }}>
      <div className="hub-kpi-strip" style={{ maxWidth: 1160, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
        {kpiStrip.map((k, i) => (
          <div key={i} style={{ padding: '36px 24px', borderRight: i < 3 ? '1px solid #e4e4e7' : 'none', textAlign: 'center', position: 'relative', overflow: 'hidden', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(12px)', transition: `all .5s ${i * .1}s ease`, background: '#fff' }}>
            <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: 3, background: `linear-gradient(to right,transparent,${AC},transparent)`, borderRadius: '0 0 4px 4px' }} />
            <div style={{ fontSize: 'clamp(28px,3vw,44px)', fontWeight: 900, color: AC, letterSpacing: '-.04em', lineHeight: 1, marginBottom: 8 }}>{k.value}</div>
            <div style={{ fontSize: 14, fontWeight: 800, color: '#09090b', marginBottom: 4, letterSpacing: '-.01em' }}>{k.label}</div>
            <div style={{ fontSize: 12, color: '#a1a1aa', fontWeight: 500 }}>{k.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Definition ────────────────────────────────────────────────
function Definition() {
  const [ref, visible] = useInView(0.08);
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all .6s ease' }}>
        <H2 style={{ marginBottom: 16 }}>Un agent IA, c'est quoi exactement ?</H2>
        <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 20, maxWidth: 800 }}>
          Un agent IA est un programme qui associe deux composants : un <strong style={{ color: '#09090b' }}>modèle de langage</strong> (Claude, GPT, Mistral, Gemini) et un <strong style={{ color: '#09090b' }}>accès à vos outils professionnels</strong> (mails, CRM, ERP, bases de données, API). La combinaison des deux lui permet de <strong style={{ color: '#09090b' }}>lire</strong> une information, <strong style={{ color: '#09090b' }}>raisonner</strong> dessus, puis <strong style={{ color: '#09090b' }}>agir</strong>, exactement comme le ferait un collaborateur humain qui aurait accès aux mêmes outils.
        </p>
        <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.8, marginBottom: 40 }}>
          La différence avec un chatbot tient en trois mots : <strong style={{ color: '#09090b' }}>autonomie</strong>, <strong style={{ color: '#09090b' }}>raisonnement</strong>, <strong style={{ color: '#09090b' }}>action</strong>. Un chatbot répond à une question. Un agent IA résout un problème. Il choisit quels outils utiliser, dans quel ordre, et corrige sa trajectoire si un imprévu survient. C'est ce qu'on appelle l'<a href="/services/automatisation-ia/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>automatisation agentique</a>. Pour aller plus loin, voir{' '}
          <a href="/services/agents-ia/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>Agents IA Althoce</a>{' '}et{' '}
          <a href="/services/employe-ia/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>Employé IA</a>.
        </p>

        <div style={{ borderRadius: 20, background: '#09090b', border: '1px solid #1e1e1e', overflow: 'hidden' }}>
          <div style={{ padding: '14px 24px', borderBottom: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: AC }} />
            <p style={{ fontSize: 12, fontWeight: 800, color: '#8a8a95', textTransform: 'uppercase', letterSpacing: '.12em', margin: 0 }}>En une phrase</p>
          </div>
          <div style={{ padding: '24px 28px' }}>
            <p style={{ fontSize: 18, fontWeight: 700, color: '#f0f0f0', lineHeight: 1.65, margin: 0 }}>
              Un agent IA, c'est un <span style={{ color: AC }}>employé virtuel</span> qui pense avant d'agir, qui sait utiliser vos outils, et qui apprend de ses erreurs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Comparison Table ──────────────────────────────────────────
const compareRows = [
  { critere: 'Nature', chatbot: 'Réponses scriptées', workflow: "Chaîne « si X alors Y »", agent: 'Raisonnement autonome' },
  { critere: 'Décisions autonomes ?', chatbot: 'Non', workflow: 'Non (règles fixes)', agent: 'Oui' },
  { critere: 'Gère les imprévus ?', chatbot: 'Non', workflow: 'Non, il plante', agent: 'Oui, il s\'adapte' },
  { critere: 'Lit des documents ?', chatbot: 'Non', workflow: 'Difficilement', agent: 'Oui (PDF, mails, images)' },
  { critere: 'Apprend de ses erreurs ?', chatbot: 'Non', workflow: 'Non', agent: 'Oui' },
  { critere: 'Exemple typique', chatbot: 'FAQ en 24h/24', workflow: 'Slack quand un lead arrive', agent: 'Mail client traité de A à Z : lecture, réponse, CRM' },
  { critere: 'Coût typique', chatbot: '50 à 500 €/mois', workflow: '20 à 200 €/mois', agent: 'À partir de 1 400 € HT' },
];

const techCols = [
  { key: 'chatbot' as const, label: 'Chatbot', sub: 'classique', color: '#52525b', bg: '#fafafa', border: '#e4e4e7' },
  { key: 'workflow' as const, label: 'Workflow', sub: 'Zapier, Make', color: '#52525b', bg: '#fafafa', border: '#e4e4e7' },
  { key: 'agent' as const, label: 'Agent IA', sub: 'Althoce', color: AC, bg: `${AC}06`, border: `${AC}30`, highlight: true },
];

function ComparisonTable() {
  const [ref, visible] = useInView(0.06);
  const [activeTab, setActiveTab] = useState<'chatbot' | 'workflow' | 'agent'>('agent');

  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all .6s ease' }}>
          <H2 style={{ marginBottom: 12 }}>Chatbot, workflow, agent IA : quelle différence ?</H2>
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 560, margin: '0 auto' }}>Ces trois technologies sont souvent confondues. Elles résolvent pourtant des problèmes très différents.</p>
        </div>

        {/* ── Desktop table ── */}
        <div className="hub-compare-desktop" style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid #e4e4e7', opacity: visible ? 1 : 0, transition: 'opacity .6s .15s ease' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1.2fr', background: '#09090b' }}>
            {['Critère', 'Chatbot classique', 'Workflow (Zapier, Make)', 'Agent IA Althoce'].map((h, i) => (
              <div key={i} style={{ padding: '15px 20px', borderRight: i < 3 ? '1px solid #1a1a1a' : 'none' }}>
                <span style={{ fontSize: 12, fontWeight: 800, color: i === 3 ? AC : '#8a8a95', textTransform: 'uppercase', letterSpacing: '.08em' }}>{h}</span>
              </div>
            ))}
          </div>
          {compareRows.map((row, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1.2fr', borderBottom: i < compareRows.length - 1 ? '1px solid #f4f4f5' : 'none', background: i % 2 === 0 ? '#fff' : '#fafafa' }}>
              <div style={{ padding: '15px 20px', borderRight: '1px solid #f4f4f5' }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: '#09090b' }}>{row.critere}</span>
              </div>
              <div style={{ padding: '15px 20px', borderRight: '1px solid #f4f4f5' }}>
                <span style={{ fontSize: 14, color: '#8a8a95' }}>{row.chatbot}</span>
              </div>
              <div style={{ padding: '15px 20px', borderRight: '1px solid #f4f4f5' }}>
                <span style={{ fontSize: 14, color: '#8a8a95' }}>{row.workflow}</span>
              </div>
              <div style={{ padding: '15px 20px', background: `${AC}05` }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: '#09090b' }}>{row.agent}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Mobile tabs + card ── */}
        <div className="hub-compare-mobile" style={{ display: 'none', flexDirection: 'column', gap: 12 }}>
          {/* Tab selector */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6, padding: 5, background: '#ebebeb', borderRadius: 16 }}>
            {techCols.map((col) => (
              <button key={col.key} onClick={() => setActiveTab(col.key)}
                style={{ padding: '10px 6px', borderRadius: 11, border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 13, fontWeight: 800, textAlign: 'center', background: activeTab === col.key ? '#fff' : 'transparent', color: activeTab === col.key ? col.color : '#52525b', boxShadow: activeTab === col.key ? '0 1px 8px rgba(0,0,0,.10)' : 'none', transition: 'all .2s', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                <span style={{ display: 'block' }}>{col.label}</span>
                <span style={{ fontSize: 10, fontWeight: 500, color: activeTab === col.key ? col.color : '#a1a1aa', opacity: 0.8 }}>{col.sub}</span>
              </button>
            ))}
          </div>

          {/* Active tech card */}
          {techCols.map((col) => {
            if (col.key !== activeTab) return null;
            return (
              <div key={col.key} style={{ borderRadius: 18, overflow: 'hidden', border: `1.5px solid ${col.border}`, background: '#fff', boxShadow: col.highlight ? `0 4px 24px ${col.color}14` : '0 2px 12px rgba(0,0,0,.05)' }}>
                {/* Card header */}
                <div style={{ padding: '16px 20px', background: col.highlight ? '#09090b' : '#f4f4f5', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: col.highlight ? '#fff' : '#09090b' }}>{col.label}</div>
                    <div style={{ fontSize: 12, color: col.highlight ? col.color : '#8a8a95', fontWeight: 600 }}>{col.sub}</div>
                  </div>
                  {col.highlight && (
                    <span style={{ padding: '4px 12px', borderRadius: 9999, background: `${AC}20`, border: `1px solid ${AC}40`, fontSize: 12, fontWeight: 800, color: AC }}>Recommandé</span>
                  )}
                </div>
                {/* Criteria rows */}
                {compareRows.map((row, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 0, borderBottom: i < compareRows.length - 1 ? '1px solid #f4f4f5' : 'none', background: col.highlight && i % 2 === 0 ? `${AC}03` : '#fff' }}>
                    <div style={{ padding: '13px 16px', borderRight: '1px solid #f4f4f5' }}>
                      <span style={{ fontSize: 13, fontWeight: 700, color: '#8a8a95' }}>{row.critere}</span>
                    </div>
                    <div style={{ padding: '13px 16px' }}>
                      <span style={{ fontSize: 14, fontWeight: col.highlight ? 700 : 400, color: col.highlight ? '#09090b' : '#8a8a95', lineHeight: 1.65 }}>{row[col.key]}</span>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: 32, padding: '20px 28px', borderRadius: 16, background: `${AC}08`, border: `1px solid ${AC}20`, textAlign: 'center' }}>
          <p style={{ fontSize: 15, color: '#52525b', lineHeight: 1.7, margin: 0 }}>
            Les chatbots et les workflows ont leur utilité, mais ils s'arrêtent dès qu'un cas sort du scénario prévu. Un agent IA continue, parce qu'il ne suit pas un script : il suit un <strong>objectif</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Metier Catalog ────────────────────────────────────────────
const metierColors: Record<string, string> = {
  'Marketing': '#f43f5e',
  'Commercial': AC,
  'Service client': '#10b981',
  'Téléphonique': CYAN,
  'Ressources humaines': AMBER,
  'Finance & compta': GREEN,
  'Opérations': RED,
  'Juridique': PURPLE,
  'Achats': '#d97706',
};

function MetierCatalog() {
  const [ref, visible] = useInView(0.06);
  return (
    <section id="metiers" ref={ref} style={{ padding: '96px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all .6s ease' }}>
          <H2 style={{ marginBottom: 12 }}>Un agent IA pour chaque métier.</H2>
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 560, margin: '0 auto' }}>Neuf spécialisations métier. Choisissez la vôtre pour découvrir les agents déployables, les cas d'usage et les résultats observés chez nos clients.</p>
        </div>

        <div className="hub-metier-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
          {agentMetiers.map((metier, i) => {
            const color = metierColors[metier.title] || AC;
            return (
              <a key={i} href={metier.href}
                style={{ borderRadius: 18, padding: '24px 22px', background: '#fff', border: '1px solid #e4e4e7', textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: 12, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: `all .5s ${i * .06}s ease`, cursor: 'pointer' }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = `${color}40`; el.style.boxShadow = `0 4px 24px ${color}12`; el.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = '#e4e4e7'; el.style.boxShadow = 'none'; el.style.transform = 'none'; }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ padding: '4px 12px', borderRadius: 9999, background: `${color}10`, border: `1px solid ${color}25`, fontSize: 12, fontWeight: 800, color }}>Agent IA</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ color: '#a1a1aa' }}>
                    <path d="M2 7h10M8.5 3.5L12 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: 17, fontWeight: 800, color: '#09090b', letterSpacing: '-.02em', marginBottom: 6 }}>{metier.title}</h3>
                  <p style={{ fontSize: 14, color: '#8a8a95', lineHeight: 1.65, margin: 0 }}>{metier.desc}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 'auto' }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: color }} />
                  <span style={{ fontSize: 12, fontWeight: 700, color, letterSpacing: '.02em' }}>Voir les agents →</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── Marquee ───────────────────────────────────────────────────
function MarqueeAgents() {
  return (
    <section style={{ padding: '64px 0', background: '#fff', borderTop: '1px solid #e4e4e7', borderBottom: '1px solid #e4e4e7' }}>
      <p style={{ textAlign: 'center', fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.14em', marginBottom: 28 }}>Tous les agents disponibles dans le catalogue</p>
      <div style={{ overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 100, background: 'linear-gradient(to right,#fff,transparent)', zIndex: 2 }} aria-hidden="true" />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 100, background: 'linear-gradient(to left,#fff,transparent)', zIndex: 2 }} aria-hidden="true" />
        <div className="ticker-slow" role="marquee" aria-label="Agents IA disponibles par métier">
          {[...agentTags, ...agentTags].map((t, i) => (
            <a key={i} href={t.href} style={{ flexShrink: 0, padding: '8px 16px', borderRadius: 9999, border: '1px solid #e4e4e7', background: '#fafafa', fontSize: 13, fontWeight: 600, color: '#52525b', whiteSpace: 'nowrap', marginRight: 10, display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', cursor: 'pointer' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = AC; (e.currentTarget as HTMLAnchorElement).style.color = AC; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#e4e4e7'; (e.currentTarget as HTMLAnchorElement).style.color = '#52525b'; }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: AC, flexShrink: 0 }} />
              {t.name}
            </a>
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
      <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 12 }}>Audit processus</div>
      {['Tâches chronophages', 'Outils déjà en place', 'Données accessibles', 'ROI estimé'].map((t, i) => (
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
      <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 12 }}>Roadmap agents IA</div>
      {[{ l: 'Agent prioritaire', w: 90 }, { l: 'Agent secondaire', w: 68 }, { l: 'Intégrations', w: 50 }, { l: 'Formation', w: 35 }].map((r, i) => (
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
      <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 14 }}>Connexions actives</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        {[{ n: 'HubSpot', c: '#ff7a59' }, { n: 'Gmail', c: '#ea4335' }, { n: 'Notion', c: '#09090b' }, { n: 'Slack', c: '#4a154b' }, { n: 'n8n', c: '#e36002' }, { n: 'Mistral', c: '#6366f1' }].map((t, i) => (
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
        <span style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em' }}>Agent actif</span>
        <span style={{ padding: '2px 8px', borderRadius: 9999, background: '#22c55e15', border: '1px solid #22c55e30', fontSize: 10, fontWeight: 800, color: '#22c55e' }}>Actif</span>
      </div>
      {[{ t: 'Tâches exécutées aujourd\'hui', v: '47' }, { t: 'Temps économisé (h)', v: '6.2' }, { t: 'Erreurs évitées', v: '0' }, { t: 'Alertes envoyées', v: '3' }].map((r, i) => (
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
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 500, margin: '0 auto' }}>Quatre étapes courtes. Votre premier agent en production en moins d'une semaine pour un cas simple.</p>
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
            <span style={{ fontSize: 12, fontWeight: 800, color: AC, textTransform: 'uppercase', letterSpacing: '.14em' }}>Souveraineté & sécurité</span>
            <H2 style={{ marginTop: 12, marginBottom: 20, color: '#fff' }}>Vos données. Hébergées en France. Jamais exposées.</H2>
            <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.75, marginBottom: 20 }}>
              Pour les clients qui exigent la souveraineté totale, nous utilisons des modèles hébergés en Europe (<strong style={{ color: '#a1a1aa' }}>Mistral</strong>) ou auto-hébergés sur votre infrastructure. Les données sensibles peuvent être filtrées et anonymisées avant tout appel LLM externe.
            </p>
            <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.75 }}>
              Code source, accès, logs, workflows : <strong style={{ color: '#a1a1aa' }}>tout vous appartient à 100 %</strong> à la fin de la mission. Pas de rétention technique, pas d'abonnement obligatoire au-delà du support que vous choisissez. Voir{' '}
              <a href="/conseil/" style={{ color: AC, textDecoration: 'none' }}>Conseil IA</a>{' '}pour un accompagnement stratégique.
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
const faqHub: FAQv2Item[] = [
  {
    q: "Quelle est la différence entre un agent IA et un chatbot ?",
    a: "Un chatbot répond à des questions. Un agent IA exécute des tâches de bout en bout. Un chatbot suit un script ; un agent IA suit un objectif. Un chatbot ne peut pas ouvrir votre CRM, lire un contrat PDF ou envoyer un mail en votre nom ; un agent IA le peut. Concrètement : un chatbot, c'est une FAQ en 24h/24. Un agent IA, c'est un collaborateur virtuel.",
  },
  {
    q: "Quelle est la différence entre un agent IA et une automatisation classique (Zapier, Make) ?",
    a: "Une automatisation classique suit des règles fixes : si X alors Y. Un agent IA utilise un modèle de langage pour comprendre le contexte et choisir quoi faire. Il gère les cas imprévus, les documents non structurés, les exceptions. Techniquement, nos agents utilisent n8n comme backbone mais avec des briques LLM, c'est ce qui les rend agentiques.",
  },
  {
    q: "Combien coûte la création d'un agent IA chez Althoce ?",
    a: "Un agent IA simple est facturé 1 400 € HT, tarif fixe, 1 cas d'usage borné, 1 semaine de delivery. Pour les systèmes multi-agents et les employés IA complets remplaçant un poste à temps plein : sur devis, chiffré au cadrage. Tout démarre par 30 minutes offertes avec un expert : on cartographie vos processus prioritaires et vous repartez avec un devis ferme.",
  },
  {
    q: "En combien de temps un agent IA est-il opérationnel ?",
    a: "Pour un agent simple : 1 semaine après validation du cadrage. Pour un système multi-agents : 2 à 6 semaines. Pour un employé IA complet : 8 à 12 semaines. Les délais sont tenus parce qu'on ne commence pas sans cadrage chiffré et validé.",
  },
  {
    q: "Un agent IA peut-il se tromper ?",
    a: "Oui, comme un humain. Les LLM font des erreurs. Nous gérons ce risque avec trois couches : validation humaine obligatoire sur les actions sensibles, filtres de contenu, journalisation exhaustive pour traçabilité. En pratique, le taux d'erreur observé est inférieur à 1 % sur les tâches automatisées, largement en dessous du taux d'erreur humain sur les mêmes tâches.",
  },
  {
    q: "Mes employés vont-ils être remplacés par un agent IA ?",
    a: "Non. Nos agents absorbent les tâches répétitives à faible valeur ajoutée (80 % d'une journée administrative). Vos équipes se recentrent sur ce qui demande de l'humain : relation client, créativité, stratégie. Aucun de nos clients n'a supprimé de poste suite à une mission Althoce. Plusieurs en ont créé.",
  },
  {
    q: "Mes données vont-elles être envoyées à OpenAI ou Anthropic ?",
    a: "Uniquement si vous le décidez. Pour les clients qui exigent la souveraineté totale, nous utilisons des modèles hébergés en Europe (Mistral) ou auto-hébergés (Llama, Mixtral) sur votre infrastructure. Les données sensibles peuvent être filtrées et anonymisées avant tout appel LLM externe.",
  },
  {
    q: "À qui appartient l'agent IA à la fin de la mission ?",
    a: "À vous, à 100 %. Nous développons sur votre infrastructure ou sur un environnement dédié que nous vous transférons. Code, accès, logs, workflows : tout vous revient. Pas de rétention technique, pas d'abonnement obligatoire au-delà du support que vous choisissez.",
  },
  {
    q: "Faut-il avoir des compétences tech en interne pour utiliser un agent IA Althoce ?",
    a: "Non pour l'usage quotidien : l'agent tourne seul, votre équipe n'a rien à faire. Oui si vous voulez le faire évoluer vous-même : nous formons 1 à 2 personnes chez vous à opérer et modifier l'agent. Alternative : vous restez en support chez nous, sans toucher au code.",
  },
  {
    q: "Quelle est la différence entre un agent IA et un employé IA ?",
    a: "Un agent IA exécute une tâche (ou une famille de tâches). Un employé IA est un assemblage de plusieurs agents qui couvrent un poste entier (ex : SDR complet = prospection + enrichissement + qualification + relance + reporting). C'est la différence entre un outil et un collaborateur. Les employés IA sont sur devis et remplacent typiquement 1 à 3 ETP.",
  },
];

function FAQ() {
  return (
    <section id="faq" style={{ padding: '96px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <H2 style={{ marginBottom: 12 }}>Vos questions, nos réponses directes.</H2>
          <p style={{ fontSize: 16, color: '#52525b' }}>Dix questions qui reviennent systématiquement lors des premiers échanges.</p>
        </div>
        <FAQAccordion items={faqHub} />
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
  @keyframes hubPulse { 0%,100%{box-shadow:0 0 0 0 transparent}50%{box-shadow:0 0 0 8px rgba(37,99,235,.08)} }
  @keyframes pillsScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  .ticker-slow { display:flex;animation:tickerSlide 70s linear infinite;width:max-content; }
  @keyframes tickerSlide { from{transform:translateX(0)}to{transform:translateX(-50%)} }
  @media (max-width: 860px) {
    .hub-hero-grid { grid-template-columns: 1fr !important; }
    .hub-mockup-col { display: none !important; }
    .hub-kpi-strip { grid-template-columns: repeat(2, 1fr) !important; }
    .hub-kpi-strip > div:nth-child(odd) { border-right: 1px solid #e4e4e7 !important; }
    .hub-kpi-strip > div:nth-child(1), .hub-kpi-strip > div:nth-child(2) { border-bottom: 1px solid #e4e4e7 !important; }
    .hub-compare-desktop { display: none !important; }
    .hub-compare-mobile { display: flex !important; }
    .hub-metier-grid { grid-template-columns: repeat(2,1fr) !important; }
.v2-grid4 { grid-template-columns: repeat(2,1fr) !important; }
    .v2-grid-hero { grid-template-columns: 1fr !important; }
  }
  @media (max-width: 640px) {
    .hub-metier-grid { grid-template-columns: 1fr !important; }
    .v2-grid4 { grid-template-columns: 1fr !important; }
    .hub-pills { flex-wrap: nowrap !important; width: max-content; animation: pillsScroll 10s linear infinite; }
  }
`;

// ── Page ──────────────────────────────────────────────────────
export default function AgentIAHubPageClient() {
  return (
    <main>
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      <Hero />
      <KPIStrip />
      <Definition />
      <ComparisonTable />
      <MetierCatalog />
      <MarqueeAgents />
      <Methodology />
      <Security />
      <FAQ />
    </main>
  );
}
