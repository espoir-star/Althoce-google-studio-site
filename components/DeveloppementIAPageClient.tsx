'use client';

import React, { useState, useEffect, useRef } from 'react';
import { agentTags, steps, pricingPlans, securityItems, heroLogos } from '@/lib/data';
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

const faqDev: FAQv2Item[] = [
  { q: "En quoi vous différenciez-vous d'une agence no-code (Make, Zapier, n8n hosted) ?", a: "Le no-code est rapide à démarrer mais plafonne vite. Dès que vous avez besoin de logique métier complexe, de tests automatisés, de monitoring, ou de tenir 3 ans en production, il faut du code. Chez Althoce, vous obtenez les deux : du n8n quand c'est pertinent pour les équipes métier, du code Python ou TypeScript quand c'est nécessaire." },
  { q: "Le code livré nous appartient-il ?", a: "Oui. À la fin du projet, vous recevez le code source complet (repo Git), la documentation technique, et les credentials d'infrastructure. Vous pouvez reprendre la maintenance en interne, changer de prestataire, ou continuer avec nous. Pas de lock-in propriétaire." },
  { q: "Quelle est votre stack technique principale ?", a: "Python pour les services IA (FastAPI, LangGraph), TypeScript pour les couches front et certains backends. n8n auto-hébergé pour l'orchestration visuelle. Mistral / OpenAI / Anthropic pour les modèles LLM selon souveraineté. pgvector ou Qdrant pour la mémoire vectorielle. Docker + GitHub Actions pour CI/CD." },
  { q: "Combien coûte un développement IA chez Althoce ?", a: "Un agent IA simple est facturé 1 400 € HT (tarif fixe, 1 semaine de delivery). Un système multi-agents, un employé IA, une intégration produit ou une refonte de process : sur devis, chiffré au cadrage. Tout démarre par 30 minutes offertes avec un expert." },
  { q: "Travaillez-vous avec les DSI ou directement avec les directions métier ?", a: "Les deux. Sur les projets où la direction métier porte le besoin, nous incluons systématiquement la DSI dans la phase cadrage (revue d'architecture, validation des choix techniques, sécurité). Sur les projets DSI-driven, nous travaillons avec votre équipe technique au quotidien. Notre objectif : votre DSI peut maintenir en interne ce que nous livrons." },
  { q: "Comment monitorez-vous la qualité et le coût des modèles LLM en production ?", a: "Langfuse en standard : tracing de chaque appel LLM avec latence, coût en tokens, qualité de la réponse. Alertes Slack ou email en cas de dérive. Reporting hebdomadaire automatique au manager humain de la solution." },
];

// ── Code Snippet Visual ───────────────────────────────────────
function CodeSnippet() {
  const lines = [
    { tokens: [{ t: 'from ', c: '#94a3b8' }, { t: 'althoce.agents', c: '#7dd3fc' }, { t: ' import ', c: '#94a3b8' }, { t: 'Agent', c: '#f472b6' }] },
    { tokens: [{ t: 'from ', c: '#94a3b8' }, { t: 'althoce.memory', c: '#7dd3fc' }, { t: ' import ', c: '#94a3b8' }, { t: 'VectorStore', c: '#f472b6' }] },
    { tokens: [] },
    { tokens: [{ t: '@', c: '#fb923c' }, { t: 'Agent.task', c: '#7dd3fc' }, { t: '(model=', c: '#94a3b8' }, { t: '"mistral-large"', c: '#86efac' }, { t: ')', c: '#94a3b8' }] },
    { tokens: [{ t: 'async ', c: '#c084fc' }, { t: 'def ', c: '#60a5fa' }, { t: 'process_email', c: '#fde68a' }, { t: '(email: ', c: '#94a3b8' }, { t: 'Email', c: '#f472b6' }, { t: ') -> ', c: '#94a3b8' }, { t: 'Action', c: '#f472b6' }, { t: ':', c: '#94a3b8' }] },
    { tokens: [{ t: '  """Classify and route incoming email."""', c: '#6b7280' }] },
    { tokens: [{ t: '  category ', c: '#e2e8f0' }, { t: '= ', c: '#94a3b8' }, { t: 'await ', c: '#c084fc' }, { t: 'llm.classify(email.body)', c: '#7dd3fc' }] },
    { tokens: [] },
    { tokens: [{ t: '  if ', c: '#60a5fa' }, { t: 'category ', c: '#e2e8f0' }, { t: '== ', c: '#94a3b8' }, { t: '"urgent"', c: '#86efac' }, { t: ':', c: '#94a3b8' }] },
    { tokens: [{ t: '    return ', c: '#c084fc' }, { t: 'Action.escalate(priority=', c: '#7dd3fc' }, { t: '"high"', c: '#86efac' }, { t: ')', c: '#94a3b8' }] },
    { tokens: [] },
    { tokens: [{ t: '  context ', c: '#e2e8f0' }, { t: '= ', c: '#94a3b8' }, { t: 'await ', c: '#c084fc' }, { t: 'VectorStore.search(email.body)', c: '#7dd3fc' }] },
    { tokens: [{ t: '  return ', c: '#c084fc' }, { t: 'Action.reply(context=context)', c: '#7dd3fc' }] },
  ];

  return (
    <div style={{ background: '#0d1117', borderRadius: 16, border: '1px solid #1e2d3d', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,.35)', maxWidth: 480, width: '100%' }}>
      {/* Window bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '12px 16px', borderBottom: '1px solid #1e2d3d', background: '#161b22' }}>
        {['#ff5f57','#ffbd2e','#28c841'].map((c, i) => (
          <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
        ))}
        <span style={{ marginLeft: 8, fontSize: 12, color: '#4d5566', fontFamily: 'monospace' }}>agent.py</span>
      </div>
      {/* Code */}
      <div style={{ padding: '20px 20px 24px', fontFamily: '"JetBrains Mono", "Fira Code", monospace', fontSize: 13, lineHeight: 1.7, overflowX: 'auto' }}>
        {lines.map((line, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'baseline' }}>
            <span style={{ color: '#2d3748', fontSize: 10, width: 24, flexShrink: 0, textAlign: 'right', marginRight: 16, userSelect: 'none' }}>{i + 1}</span>
            <span>
              {line.tokens.length === 0 ? ' ' : line.tokens.map((tok, j) => (
                <span key={j} style={{ color: tok.c }}>{tok.t}</span>
              ))}
            </span>
          </div>
        ))}
      </div>
      {/* Footer tag */}
      <div style={{ padding: '8px 16px', borderTop: '1px solid #1e2d3d', background: '#161b22', display: 'flex', alignItems: 'center', gap: 6 }}>
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e' }} />
        <span style={{ fontSize: 10, color: '#4d5566', fontFamily: 'monospace' }}>Python · LangGraph · Mistral</span>
      </div>
    </div>
  );
}

// ── SECTION 1 — Hero ─────────────────────────────────────────
function Hero() {
  return (
    <section className="dia-hero-section" style={{ padding: '120px 24px 80px', background: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.025) 1px,transparent 1px)', backgroundSize: '48px 48px', maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%,black,transparent)', zIndex: 0 }} aria-hidden="true" />
      <div style={{ position: 'absolute', top: '35%', left: '50%', transform: 'translate(-50%,-50%)', width: 700, height: 350, background: `radial-gradient(ellipse,${AC}12 0%,transparent 70%)`, pointerEvents: 'none', zIndex: 0 }} aria-hidden="true" />

      <div style={{ maxWidth: 1160, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <nav aria-label="Fil d'Ariane" style={{ marginBottom: 40, fontSize: 13, color: '#a1a1aa' }}>
          <a href="/" style={{ color: '#a1a1aa', textDecoration: 'none' }}>Accueil</a>
          <span style={{ margin: '0 8px' }}>›</span>
          <a href="/services/" style={{ color: '#a1a1aa', textDecoration: 'none' }}>Services</a>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: '#09090b', fontWeight: 600 }}>Développement IA</span>
        </nav>

        <div className="dia-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: 'clamp(28px,4vw,50px)', fontWeight: 800, lineHeight: 1.09, letterSpacing: '-.04em', color: '#09090b', marginBottom: 20 }}>
              Développement IA sur-mesure.<br />
              <span style={{ color: AC }}>On code vraiment. Pas du no-code orchestré.</span>
            </h1>

            <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.7, marginBottom: 28 }}>
              Vos solutions IA méritent du code de production : tests, monitoring, MLOps, gouvernance. Notre équipe développe vos agents et employés IA en Python et TypeScript, sur une stack maîtrisée, avec une dette technique mesurée et documentée.
            </p>

            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
              {['+758 agents en production', 'Stack maîtrisée Python + TypeScript', '100 % code livré au client'].map((t) => (
                <span key={t} style={{ display: 'inline-flex', alignItems: 'center', padding: '5px 13px', borderRadius: 9999, background: '#f4f4f5', fontSize: 13, fontWeight: 700, color: '#52525b' }}>{t}</span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="/contact" style={{ padding: '13px 26px', borderRadius: 9999, background: '#09090b', color: '#fff', fontSize: 15, fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'transform .15s,box-shadow .15s' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,.25)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}>
                Discuter de votre projet →
              </a>
              <a href="#stack" style={{ padding: '13px 4px', fontSize: 15, fontWeight: 700, color: '#8a8a95', textDecoration: 'none', transition: 'color .15s' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#09090b'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#8a8a95'; }}>
                Voir notre stack technique ↓
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <CodeSnippet />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Trust logos ───────────────────────────────────────────────
function TrustLogos() {
  return (
    <div style={{ background: '#fff', borderTop: '1px solid #f4f4f5', padding: '32px 0', overflow: 'hidden', position: 'relative' }}>
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to right,#fff,transparent)', zIndex: 2 }} aria-hidden="true" />
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to left,#fff,transparent)', zIndex: 2 }} aria-hidden="true" />
      <p style={{ textAlign: 'center', fontSize: 11, fontWeight: 700, color: '#a1a1aa', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: 16 }}>Ils nous font confiance</p>
      <div className="ticker" role="marquee" aria-label="Logos clients">
        {[...heroLogos, ...heroLogos].map((src, i) => (
          <div key={i} style={{ padding: '0 32px', flexShrink: 0 }}>
            <img src={src} alt="client Althoce agence IA" style={{ height: 32, width: 'auto', objectFit: 'contain', opacity: .45, filter: 'grayscale(1)' }} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── SECTION 2 — Définition ────────────────────────────────────
function Definition() {
  return (
    <section className="dia-section-pad" style={{ padding: '80px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <H2 style={{ marginBottom: 20 }}>
          Développement IA chez Althoce : <span style={{ color: AC }}>ce que ça veut dire concrètement</span>
        </H2>

        <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.75, marginBottom: 16 }}>
          La promesse "IA sur-mesure" est galvaudée. La plupart des agences appellent "développement IA" un assemblage de briques no-code (Make, Zapier, n8n hosted) avec quelques appels API à OpenAI au milieu. Ça fonctionne pour des prototypes. Ça craque dès qu'on monte en volume, en criticité ou en intégration au système d'information. Chez Althoce, développer une solution IA signifie écrire du <strong>code de production en Python ou TypeScript</strong>, versionné dans Git, testé, monitoré, déployé via une CI/CD propre. Vous repartez avec le code source, la documentation, et la liberté de prendre votre indépendance à tout moment.
        </p>

        <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 36 }}>
          Notre stack par défaut combine n8n auto-hébergé pour la couche orchestration visuelle (utile pour vos équipes métier), LangGraph pour les flows agentiques complexes, FastAPI pour les APIs internes, et pgvector ou Qdrant pour la mémoire long-terme. Cette stack est ouverte, documentée, et n'enferme jamais le client dans une dépendance propriétaire Althoce.
        </p>

        <div className="dia-darkblock" style={{ background: '#09090b', borderRadius: 20, padding: '32px 36px', border: '1px solid #1e1e1e' }}>
          <div style={{ fontSize: 14, fontWeight: 800, color: AC, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 20 }}>
            Différence rapide entre les 3 approches
          </div>
          {[
            { n: '1.', label: 'No-code (Make, Zapier, n8n hosted)', desc: 'Montage rapide, plafond bas. OK pour POC, casse au-delà dès que la logique métier se complexifie.', color: '#ef4444' },
            { n: '2.', label: 'SSII classique (CGI, Capgemini, Sopra)', desc: 'Code de production mais cycles longs, dette technique forte sur les sujets IA récents (LLM, agents, RAG).', color: '#f59e0b' },
            { n: '3.', label: 'Althoce', desc: 'Code de production sur stack IA moderne, cycles courts (cadrage à mise en production en 6 à 12 semaines), code livré client.', color: '#22c55e' },
          ].map((row, i) => (
            <div key={i} className="dia-darkblock-row" style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: i < 2 ? 16 : 0, paddingBottom: i < 2 ? 16 : 0, borderBottom: i < 2 ? '1px solid #1e1e1e' : 'none' }}>
              <span style={{ color: row.color, fontWeight: 800, fontSize: 14, flexShrink: 0, minWidth: 110 }}>{row.n} {row.label}</span>
              <span style={{ fontSize: 14, color: '#52525b', lineHeight: 1.65 }}>{row.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── SECTION 3 — Tableau comparatif ───────────────────────────
const compareRows = [
  { criterion: 'Code de production', nocode: 'Non (assemblage)', ssii: 'Oui', althoce: 'Oui (Python, TypeScript)' },
  { criterion: 'Délai cadrage › MEP', nocode: '1 à 4 semaines', ssii: '6 à 18 mois', althoce: '6 à 12 semaines' },
  { criterion: 'Monitoring & MLOps', nocode: 'Inexistant', ssii: 'À ajouter', althoce: 'Inclus par défaut' },
  { criterion: 'Code livré au client', nocode: 'N/A', ssii: 'Propriétaire', althoce: 'Ouvert, documenté' },
];

function ComparisonTable() {
  return (
    <section className="dia-section-pad" style={{ padding: '80px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <H2 style={{ marginBottom: 12 }}>No-code, SSII classique, ou Althoce.<br /><span style={{ color: AC }}>Comment se positionner.</span></H2>
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 580, margin: '0 auto', lineHeight: 1.65 }}>
            Trois approches pour développer une solution IA en 2026. Chacune a ses cas d'usage légitimes.
          </p>
        </div>

        <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid #e4e4e7', marginBottom: 24 }}>
          <div className="dia-table-header" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', background: '#09090b' }}>
            <div style={{ padding: '14px 18px', fontSize: 12, fontWeight: 800, color: '#8a8a95', textTransform: 'uppercase', letterSpacing: '.1em' }}>Critère</div>
            <div style={{ padding: '14px 18px', fontSize: 12, fontWeight: 800, color: '#8a8a95', textTransform: 'uppercase', letterSpacing: '.1em', borderLeft: '1px solid #1e1e1e' }}>No-code</div>
            <div style={{ padding: '14px 18px', fontSize: 12, fontWeight: 800, color: '#8a8a95', textTransform: 'uppercase', letterSpacing: '.1em', borderLeft: '1px solid #1e1e1e' }}>SSII classique</div>
            <div style={{ padding: '14px 18px', fontSize: 12, fontWeight: 800, color: AC, textTransform: 'uppercase', letterSpacing: '.1em', borderLeft: '1px solid #1e1e1e' }}>Althoce</div>
          </div>
          {compareRows.map((row, i) => (
            <div key={i} className="dia-table-row" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', borderTop: '1px solid #e4e4e7', background: i % 2 === 0 ? '#fff' : '#fafafa' }}>
              <div style={{ padding: '13px 18px', fontSize: 14, fontWeight: 700, color: '#09090b' }}>{row.criterion}</div>
              <div className="dia-table-cell dia-col-nocode" style={{ padding: '13px 18px', fontSize: 14, color: '#8a8a95', borderLeft: '1px solid #e4e4e7' }}>{row.nocode}</div>
              <div className="dia-table-cell dia-col-ssii" style={{ padding: '13px 18px', fontSize: 14, color: '#8a8a95', borderLeft: '1px solid #e4e4e7' }}>{row.ssii}</div>
              <div className="dia-table-cell dia-col-althoce" style={{ padding: '13px 18px', fontSize: 14, color: '#09090b', fontWeight: 600, borderLeft: `2px solid ${AC}22`, background: i % 2 === 0 ? '#f0f7ff' : '#e8f0fe' }}>{row.althoce}</div>
            </div>
          ))}
        </div>

        <p style={{ fontSize: 14, color: '#a1a1aa', lineHeight: 1.65, textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
          Le no-code reste pertinent pour des automatisations simples et peu critiques. Si votre besoin IA touche un processus critique ou doit tenir 3 ans en production, choisissez du code.
        </p>
      </div>
    </section>
  );
}

// ── SECTION 4 — Stack technique ───────────────────────────────
const stackBriques = [
  {
    label: 'Orchestration',
    tag: 'Flows & agents',
    tools: ['n8n', 'LangGraph'],
    color: '#2563eb',
    desc: 'n8n pour les flows visuels métier. LangGraph pour les agents complexes avec boucles et mémoire d\'état.',
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="5" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.8"/><circle cx="17" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.8"/><circle cx="17" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.8"/><path d="M7.5 11h7M14.5 7.5l-1.5 2.5M14.5 14.5l-1.5-2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  },
  {
    label: 'Modèles LLM',
    tag: 'Souveraineté choisie',
    tools: ['Mistral', 'OpenAI', 'Anthropic'],
    color: '#7c3aed',
    desc: 'Mistral pour la souveraineté française par défaut. Choix au cadrage selon exigence souveraineté et criticité métier.',
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="3" y="3" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.8"/><path d="M7 11h8M11 7v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  },
  {
    label: 'Mémoire long-terme',
    tag: 'Vector store + SQL',
    tools: ['pgvector', 'Qdrant', 'Postgres'],
    color: '#16a34a',
    desc: 'Vector store selon volumétrie. Couplé à Postgres pour les références structurées. Indispensable pour les employés IA.',
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><ellipse cx="11" cy="7" rx="7" ry="3" stroke="currentColor" strokeWidth="1.8"/><path d="M4 7v8c0 1.66 3.13 3 7 3s7-1.34 7-3V7" stroke="currentColor" strokeWidth="1.8"/><path d="M4 11c0 1.66 3.13 3 7 3s7-1.34 7-3" stroke="currentColor" strokeWidth="1.5"/></svg>,
  },
  {
    label: 'Intégrations',
    tag: 'Connecteurs natifs & custom',
    tools: ['HubSpot', 'Slack', 'Salesforce', '+30'],
    color: '#ea580c',
    desc: 'Connecteurs natifs vers les outils du marché. Connecteurs custom développés au cadrage pour vos outils internes.',
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 11h14M14 7l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    label: 'Monitoring & MLOps',
    tag: 'Tracing LLM temps réel',
    tools: ['Langfuse', 'OpenTelemetry'],
    color: '#dc2626',
    desc: 'Tracing de chaque appel LLM (latence, coût, qualité), alerting sur dérive, reporting hebdo automatique.',
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 16L8 10l4 4 4-6 2 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    label: 'CI/CD & déploiement',
    tag: 'Infrastructure livrée',
    tools: ['Docker', 'GitHub Actions', 'OVH'],
    color: '#0f172a',
    desc: 'Tests automatisés sur chaque commit, déploiement Docker, infrastructure auto-hébergeable. Documentation livrée avec le code.',
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="3" y="5" width="16" height="12" rx="3" stroke="currentColor" strokeWidth="1.8"/><path d="M7 9l2.5 2.5L7 14M12 14h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
];

function Stack() {
  const [ref, visible] = useInView(0.08);
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <section id="stack" ref={ref} className="dia-section-pad" style={{ padding: '80px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <H2 style={{ marginBottom: 12 }}>Notre <span style={{ color: AC }}>stack par défaut</span></H2>
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 540, margin: '0 auto', lineHeight: 1.65 }}>
            Six briques techniques ouvertes, documentées, auto-hébergeables. Vous pouvez reprendre la main sur l'ensemble à tout moment.
          </p>
        </div>

        <div className="dia-stack-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
          {stackBriques.map((b, i) => {
            const isHov = hovered === i;
            return (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  padding: '28px 24px', borderRadius: 20, cursor: 'default', transition: 'all .25s',
                  border: isHov ? `1.5px solid ${b.color}50` : '1.5px solid #e4e4e7',
                  background: isHov ? `${b.color}06` : '#fff',
                  boxShadow: isHov ? `0 8px 32px ${b.color}14` : '0 2px 8px rgba(0,0,0,.04)',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'none' : 'translateY(20px)',
                  display: 'flex', flexDirection: 'column', gap: 0,
                }}
              >
                {/* Icon */}
                <div style={{ width: 52, height: 52, borderRadius: 14, background: `${b.color}12`, border: `1.5px solid ${b.color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18, color: b.color, transition: 'all .25s', flexShrink: 0 }}>
                  {b.icon}
                </div>

                {/* Label + tag */}
                <div style={{ fontSize: 16, fontWeight: 800, color: '#09090b', letterSpacing: '-.02em', marginBottom: 6 }}>{b.label}</div>
                <div style={{ display: 'inline-flex', alignItems: 'center', padding: '2px 9px', borderRadius: 9999, background: `${b.color}10`, border: `1px solid ${b.color}20`, fontSize: 10, fontWeight: 700, color: b.color, textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 14, alignSelf: 'flex-start' }}>
                  {b.tag}
                </div>

                {/* Description */}
                <p style={{ fontSize: 14, color: '#52525b', lineHeight: 1.65, marginBottom: 16, flex: 1 }}>{b.desc}</p>

                {/* Tools chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, borderTop: '1px solid #f1f5f9', paddingTop: 14 }}>
                  {b.tools.map((t) => (
                    <span key={t} style={{ padding: '4px 11px', borderRadius: 9999, background: isHov ? `${b.color}10` : '#f4f4f5', border: `1px solid ${isHov ? b.color + '25' : '#e4e4e7'}`, fontSize: 12, fontWeight: 700, color: isHov ? b.color : '#52525b', transition: 'all .25s' }}>{t}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div style={{ marginTop: 28, textAlign: 'center' }}>
          <p style={{ fontSize: 14, color: '#a1a1aa', lineHeight: 1.65 }}>
            Stack entièrement auto-hébergeable · Pas de lock-in propriétaire · Code source livré au client
          </p>
        </div>
      </div>
    </section>
  );
}

// ── SECTION 5 — Livrables ─────────────────────────────────────
const livrables = [
  { n: '01', title: 'Agent IA unitaire', desc: 'Un cas d\'usage borné, code de production, déployé en 1 semaine après cadrage. Voir', link: { text: 'Agents IA', href: '/services/agents-ia/' }, after: ' pour la palette complète et les archétypes.' },
  { n: '02', title: 'Système d\'automatisation multi-agents', desc: 'Plusieurs agents orchestrés sur un processus métier (ADV, support, comptabilité, RH). 4 à 8 semaines de delivery selon périmètre. Voir', link: { text: 'Automatisation IA', href: '/services/automatisation-ia/' }, after: '.' },
  { n: '03', title: 'Employé IA dédié à un poste', desc: 'Le livrable maximal : un membre d\'équipe IA couvrant un rôle entier, avec mémoire, identité, rituels d\'équipe. 6 à 12 semaines de delivery. Voir', link: { text: 'Employé IA', href: '/services/employe-ia/' }, after: ' pour le détail.' },
  { n: '04', title: 'Intégration IA dans un produit existant', desc: 'Vous avez un SaaS ou un produit interne et voulez y embarquer un assistant, une recherche RAG, ou des flows agentiques. Nous développons les API et composants backend. 4 à 10 semaines selon scope.', link: null, after: '' },
  { n: '05', title: 'Refonte d\'un processus avec l\'IA', desc: 'Vous avez un processus métier mature mais coûteux (saisie, validation, qualification, reporting) et voulez le repenser de zéro. Cadrage approfondi, suivi du build. Voir aussi', link: { text: 'Audit IA', href: '/services/audit-ia/' }, after: ' qui peut précéder la refonte.' },
];

function Livrables() {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} className="dia-section-pad" style={{ padding: '80px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <H2 style={{ marginBottom: 12 }}>5 types de projets <span style={{ color: AC }}>que nous livrons</span></H2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {livrables.map((l, i) => (
            <div key={i} style={{ display: 'flex', gap: 24, padding: '28px 0', borderBottom: i < livrables.length - 1 ? '1px solid #f4f4f5' : 'none', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(16px)', transition: `all .5s ${i * .08}s ease` }}>
              <div style={{ fontSize: 32, fontWeight: 900, color: `${AC}30`, letterSpacing: '-.04em', lineHeight: 1, flexShrink: 0, width: 52 }}>{l.n}</div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: '#09090b', letterSpacing: '-.02em', marginBottom: 8 }}>{l.title}</h3>
                <p style={{ fontSize: 15, color: '#8a8a95', lineHeight: 1.65 }}>
                  {l.desc}
                  {l.link && <>{' '}<a href={l.link.href} style={{ color: AC, fontWeight: 600, textDecoration: 'none' }}>{l.link.text}</a>{l.after}</>}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 36, padding: '20px 24px', borderRadius: 14, background: '#f8fafc', border: '1px solid #e4e4e7', textAlign: 'center' }}>
          <p style={{ fontSize: 15, color: '#52525b', lineHeight: 1.65 }}>
            Votre projet n'entre pas dans une de ces 5 catégories ? Les <strong>30 minutes offertes avec un expert</strong> servent à cadrer votre cas particulier et à identifier le bon livrable.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── SECTION 6 — Marquee ───────────────────────────────────────
function MetiersMarquee() {
  return (
    <section style={{ padding: '48px 0', background: '#fafafa', borderTop: '1px solid #e4e4e7', overflow: 'hidden' }}>
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to right,#fafafa,transparent)', zIndex: 2 }} aria-hidden="true" />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to left,#fafafa,transparent)', zIndex: 2 }} aria-hidden="true" />
        <div className="ticker-slow" role="marquee" style={{ display: 'flex', gap: 10 }}>
          {[...agentTags, ...agentTags].map((tag, i) => (
            <span key={i} style={{ flexShrink: 0, padding: '7px 16px', borderRadius: 9999, background: '#fff', border: '1px solid #e4e4e7', fontSize: 14, fontWeight: 600, color: '#52525b', whiteSpace: 'nowrap' }}>
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Step visual cards ─────────────────────────────────────────
function StepCard1() {
  return (
    <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e4e4e7', padding: '18px 20px', boxShadow: '0 2px 12px rgba(0,0,0,.06)' }}>
      <div style={{ fontSize: 9, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 14 }}>Rapport d'audit</div>
      {[
        { label: 'Saisie manuelle CRM', gain: '-4h/sem', done: true },
        { label: 'Traitement emails entrants', gain: '-6h/sem', done: true },
        { label: 'Génération reporting', gain: '-3h/sem', done: true },
        { label: 'Onboarding candidats', gain: null, done: false },
      ].map((item, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <div style={{ width: 18, height: 18, borderRadius: '50%', background: item.done ? '#dcfce7' : '#f4f4f5', border: `1.5px solid ${item.done ? '#16a34a' : '#d4d4d8'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            {item.done && <svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 5L4 7L8 3" stroke="#16a34a" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>}
          </div>
          <span style={{ fontSize: 12, color: item.done ? '#09090b' : '#a1a1aa', flex: 1 }}>{item.label}</span>
          {item.gain && <span style={{ fontSize: 10, fontWeight: 800, color: '#dc2626' }}>{item.gain}</span>}
        </div>
      ))}
    </div>
  );
}

function StepCard2() {
  const bars = [
    { label: 'Agent email', sprint: 'S1', w: '100%' },
    { label: 'Agent CRM', sprint: 'S2', w: '75%' },
    { label: 'Agent reporting', sprint: 'S3', w: '50%' },
    { label: 'Agent onboarding', sprint: 'S4', w: '25%' },
  ];
  return (
    <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e4e4e7', padding: '18px 20px', boxShadow: '0 2px 12px rgba(0,0,0,.06)' }}>
      <div style={{ fontSize: 9, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 14 }}>Roadmap IA</div>
      {bars.map((b) => (
        <div key={b.sprint} style={{ marginBottom: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}>
            <span style={{ fontSize: 12, color: '#374151', fontWeight: 500 }}>{b.label}</span>
            <span style={{ fontSize: 10, fontWeight: 800, color: AC }}>{b.sprint}</span>
          </div>
          <div style={{ height: 5, borderRadius: 9999, background: '#f1f5f9', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: b.w, background: `linear-gradient(90deg,${AC},#60a5fa)`, borderRadius: 9999, transition: 'width 1s ease' }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function StepCard3() {
  const tools = [
    { name: 'Gmail', color: '#ea4335' }, { name: 'HubSpot', color: '#ff7a59' },
    { name: 'Slack', color: '#4a154b' },  { name: 'Notion', color: '#000' },
    { name: 'Salesforce', color: '#00a1e0' }, { name: 'Drive', color: '#34a853' },
  ];
  return (
    <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e4e4e7', padding: '18px 20px', boxShadow: '0 2px 12px rgba(0,0,0,.06)' }}>
      <div style={{ fontSize: 9, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 14 }}>Intégrations actives</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        {tools.map((t) => (
          <div key={t.name} style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '7px 10px', borderRadius: 8, background: '#fafafa', border: '1px solid #f1f5f9' }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: t.color, flexShrink: 0 }} />
            <span style={{ fontSize: 12, fontWeight: 600, color: '#374151' }}>{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function StepCard4({ visible }: { visible: boolean }) {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    if (!visible) return;
    const id = setInterval(() => setTick((t) => t + 1), 2400);
    return () => clearInterval(id);
  }, [visible]);
  const stats = [
    { label: 'Emails traités aujourd\'hui', value: 142 + (tick % 3), color: '#16a34a' },
    { label: 'Leads qualifiés', value: 38 + (tick % 2), color: AC },
    { label: 'Tickets résolus', value: 94 + (tick % 4), color: '#ea580c' },
    { label: 'Heures économisées', value: '11.4h', color: '#7c3aed', isString: true },
  ];
  return (
    <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e4e4e7', padding: '18px 20px', boxShadow: '0 2px 12px rgba(0,0,0,.06)', position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
        <div style={{ fontSize: 9, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.12em' }}>Votre agent IA</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '3px 8px', borderRadius: 9999, background: '#dcfce7', border: '1px solid #86efac' }}>
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#16a34a', animation: 'pulseDot 2s ease infinite' }} />
          <span style={{ fontSize: 9, fontWeight: 800, color: '#15803d' }}>Actif 24/7</span>
        </div>
      </div>
      {stats.map((s) => (
        <div key={s.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7px 0', borderBottom: '1px solid #f1f5f9' }}>
          <span style={{ fontSize: 12, color: '#64748b' }}>{s.label}</span>
          <span style={{ fontSize: 15, fontWeight: 800, color: s.color, fontVariantNumeric: 'tabular-nums' }}>
            {s.isString ? s.value : s.value.toLocaleString('fr-FR')}
          </span>
        </div>
      ))}
    </div>
  );
}

// ── SECTION 7 — Méthode ───────────────────────────────────────
function Methodology() {
  const [ref, visible] = useInView();
  const stepCards = [<StepCard1 key={0} />, <StepCard2 key={1} />, <StepCard3 key={2} />, <StepCard4 key={3} visible={visible} />];
  return (
    <section ref={ref} style={{ padding: '80px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <H2 style={{ marginBottom: 10 }}>Comment se passe une mission avec Althoce ?</H2>
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 500, margin: '0 auto', lineHeight: 1.65 }}>Quatre étapes courtes. De l'audit à la mise en production en 6 à 12 semaines.</p>
        </div>
        <div className="v2-grid4 dia-step-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
          {steps.map((s, i) => (
            <div key={i} style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: `all .6s ${i * .12}s ease` }}>
              <div style={{ marginBottom: 20 }}>{stepCards[i]}</div>
              <div style={{ fontSize: 11, fontWeight: 800, color: AC, textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 6 }}>STEP {i + 1}</div>
              <div style={{ display: 'inline-flex', alignItems: 'center', padding: '3px 10px', borderRadius: 9999, background: '#f0f7ff', border: `1px solid ${AC}20`, fontSize: 12, fontWeight: 700, color: AC, marginBottom: 10 }}>{s.time}</div>
              <h3 style={{ fontSize: 16, fontWeight: 800, color: '#09090b', marginBottom: 6, letterSpacing: '-.02em' }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: '#8a8a95', lineHeight: 1.65 }}>{s.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <a href="/cas-clients/" style={{ fontSize: 15, fontWeight: 700, color: AC, textDecoration: 'none' }}
            onMouseEnter={(e) => { e.currentTarget.style.textDecoration = 'underline'; }}
            onMouseLeave={(e) => { e.currentTarget.style.textDecoration = 'none'; }}>
            Voir nos cas clients →
          </a>
        </div>
      </div>
    </section>
  );
}

// ── SECTION 8 — Pricing ───────────────────────────────────────
function Pricing() {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} style={{ padding: '72px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <H2 style={{ marginBottom: 12 }}>Combien ça coûte, en combien de temps ?</H2>
          <p style={{ fontSize: 16, color: '#8a8a95', maxWidth: 500, margin: '0 auto' }}>Nous sommes une des rares agences IA à afficher nos prix. La transparence, c'est le début de la confiance.</p>
        </div>
        <div className="v2-grid2 dia-pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 24, marginBottom: 36, maxWidth: 900, margin: '0 auto 36px' }}>
          {pricingPlans.map((p, i) => (
            <div key={i} style={{ border: p.dark ? `2px solid ${AC}` : '2px solid #e4e4e7', borderRadius: 28, padding: '40px 36px', background: p.dark ? 'linear-gradient(135deg,#09090b 0%,#0d1117 100%)' : '#fff', position: 'relative', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: `all .6s ${i * .15}s ease`, boxShadow: p.dark ? `0 20px 60px ${AC}20` : '0 4px 20px rgba(0,0,0,.04)' }}>
              {p.dark && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,transparent,${AC},transparent)`, borderRadius: '28px 28px 0 0' }} />}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
                <span style={{ fontSize: 15, fontWeight: 800, color: p.dark ? '#d4d4d8' : '#09090b' }}>{p.name}</span>
                <span style={{ padding: '4px 12px', borderRadius: 9999, background: p.dark ? `${AC}20` : '#f4f4f5', fontSize: 11, fontWeight: 800, color: p.dark ? AC : '#8a8a95', border: p.dark ? `1px solid ${AC}40` : 'none' }}>{p.badge}</span>
              </div>
              <div style={{ fontSize: 'clamp(17px,1.9vw,21px)', fontWeight: 700, lineHeight: 1.35, color: p.dark ? '#e4e4e7' : '#09090b', marginBottom: 32, letterSpacing: '-.02em', minHeight: 90 }}>
                {p.titleText}<span style={{ color: p.dark ? '#93c5fd' : AC }}>{p.titleAccent}</span>
                {!p.dark && <>, pour un cas d'usage ciblé et ROI immédiat</>}
                {p.dark && <> qui automatisent votre back-office de bout en bout</>}
              </div>
              <div style={{ marginBottom: 32 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: p.dark ? '#8a8a95' : '#a1a1aa', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '.08em' }}>À partir de</div>
                <div style={{ fontSize: 44, fontWeight: 800, color: p.dark ? '#fff' : '#09090b', letterSpacing: '-.05em', lineHeight: 1, display: 'flex', alignItems: 'baseline', gap: 8 }}>
                  {p.price}{p.price !== 'Sur devis' && <span style={{ fontSize: 16, fontWeight: 600, color: p.dark ? '#8a8a95' : '#a1a1aa' }}>HT</span>}
                </div>
              </div>
              <a href="/contact" style={{ display: 'block', width: '100%', padding: '15px', borderRadius: 9999, background: p.dark ? AC : '#09090b', color: '#fff', fontSize: 16, fontWeight: 700, fontFamily: 'inherit', marginBottom: 32, textDecoration: 'none', textAlign: 'center', transition: 'all .2s', boxShadow: p.dark ? `0 4px 16px ${AC}40` : '0 4px 16px rgba(0,0,0,.1)' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}>
                {p.cta}
              </a>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {p.features.map((f, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: p.dark ? '#a1a1aa' : '#52525b', lineHeight: 1.65 }}>
                    <svg width="18" height="18" viewBox="0 0 18 18" style={{ flexShrink: 0, marginTop: 2 }}><circle cx="9" cy="9" r="8" fill={p.dark ? `${AC}15` : '#f0f7ff'} stroke={AC} strokeWidth="1.5"/><path d="M6 9L8 11L12 7" stroke={AC} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span style={{ fontWeight: 600 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', padding: '20px 28px', borderRadius: 16, background: 'linear-gradient(135deg,#f0f7ff 0%,#f0f9ff 100%)', border: `1px solid ${AC}20`, maxWidth: 720, margin: '0 auto' }}>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.7, fontWeight: 500 }}>
            <strong style={{ color: AC }}>30 minutes offertes</strong> : discutez avec un expert, repartez avec une feuille de route claire et concrète, que l'on travaille ensemble ou non.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── SECTION 9 — Souveraineté ──────────────────────────────────
function Security() {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} style={{ padding: '72px 24px', background: '#09090b', borderTop: '1px solid #1a1a1a' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div className="dia-security-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 64, alignItems: 'center' }}>
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all .6s ease' }}>
            <H2 white style={{ marginBottom: 20 }}>
              Vos données restent vos données.<br /><span style={{ color: AC }}>En Europe, sous votre contrôle.</span>
            </H2>
            <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.75, marginBottom: 32 }}>
              Stack auto-hébergeable, hébergement en Union Européenne, instance dédiée, chiffrement de bout en bout. Pas de boîte noire, pas de lock-in propriétaire Althoce.
            </p>
            <a href="/conseil/" style={{ fontSize: 15, fontWeight: 700, color: AC, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, padding: '11px 22px', border: `1px solid ${AC}40`, borderRadius: 9999, transition: 'all .15s' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = AC; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = AC; }}>
              Notre approche conseil →
            </a>
          </div>
          <div className="v2-grid2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all .6s .15s ease' }}>
            {securityItems.map((it, i) => (
              <div key={i} style={{ border: '1px solid #1e1e1e', borderRadius: 16, padding: '24px 20px', background: '#0f0f0f', transition: 'border-color .2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${AC}44`; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#1e1e1e'; }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: `${AC}15`, border: `1px solid ${AC}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                  <svg width="18" height="18" viewBox="0 0 18 18"><circle cx="9" cy="9" r="7" fill="none" stroke={AC} strokeWidth="1.5"/><path d="M6 9L8 11L12 7" stroke={AC} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 style={{ fontSize: 14, fontWeight: 800, color: '#d4d4d8', marginBottom: 6 }}>{it.title}</h3>
                <p style={{ fontSize: 13, color: '#52525b', lineHeight: 1.65 }}>{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── SECTION 10 — FAQ ─────────────────────────────────────────
function FAQ() {
  return (
    <section style={{ padding: '72px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <H2 style={{ marginBottom: 12 }}>Questions fréquentes sur le développement IA</H2>
          <p style={{ fontSize: 16, color: '#52525b' }}>Six questions que tout DSI ou CTO pose avant de lancer un projet IA.</p>
        </div>
        <FAQAccordion items={faqDev} />
      </div>
    </section>
  );
}

// ── Page root ─────────────────────────────────────────────────
export default function DeveloppementIAPageClient() {
  return (
    <main>
      <style>{`
        @media (max-width: 860px) {
          .dia-hero-grid     { grid-template-columns: 1fr !important; }
          .dia-security-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .dia-darkblock-row { flex-wrap: wrap !important; }
          .dia-stack-grid    { grid-template-columns: 1fr 1fr !important; }
          .dia-pricing-grid  { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .dia-table-header  { display: none !important; }
          .dia-table-row     { grid-template-columns: 1fr !important; border-radius: 12px; border: 1px solid #e4e4e7 !important; margin-bottom: 10px; overflow: hidden; }
          .dia-col-nocode, .dia-col-ssii { border-left: none !important; background: #fafafa !important; }
          .dia-col-althoce   { border-left: none !important; border-top: 2px solid #2563eb22 !important; }
          .dia-table-cell::before { display: block !important; }
          .dia-stack-grid    { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .dia-hero-section  { padding: 88px 16px 48px !important; }
          .dia-section-pad   { padding: 56px 16px !important; }
          .dia-step-grid     { grid-template-columns: 1fr !important; }
          .dia-darkblock     { padding: 24px 20px !important; }
        }
        .dia-col-nocode::before  { content: 'No-code'; display: none; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: .08em; color: #52525b; margin-bottom: 4px; }
        .dia-col-ssii::before    { content: 'SSII classique'; display: none; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: .08em; color: #52525b; margin-bottom: 4px; }
        .dia-col-althoce::before { content: 'Althoce'; display: none; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: .08em; color: #2563eb; margin-bottom: 4px; }
      `}</style>
      <Hero />
      <TrustLogos />
      <Definition />
      <ComparisonTable />
      <Stack />
      <Livrables />
      <MetiersMarquee />
      <Methodology />
      <Pricing />
      <Security />
      <FAQ />
    </main>
  );
}
