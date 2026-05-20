'use client';

import React, { useState, useEffect, useRef } from 'react';
import { agentTags, steps, pricingPlans, securityItems } from '@/lib/data';
import { FAQAccordion } from '@/components/ui/data-display/FAQAccordion';
import type { FAQv2Item } from '@/lib/data';

const AC = '#2563eb';

// ── Hook ─────────────────────────────────────────────────────
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

// ── Shared UI ─────────────────────────────────────────────────
function H2({ children, white = false, style: sx = {} }: { children: React.ReactNode; white?: boolean; style?: React.CSSProperties }) {
  return (
    <h2 style={{ fontSize: 'clamp(26px,3.5vw,44px)', fontWeight: 800, letterSpacing: '-.03em', color: white ? '#fff' : '#09090b', lineHeight: 1.15, ...sx }}>
      {children}
    </h2>
  );
}

// ── FAQ data ─────────────────────────────────────────────────
const faqEmployeIA: FAQv2Item[] = [
  { q: "Quelle est la différence entre un agent IA et un employé IA ?", a: "Un agent IA exécute 1 cas d'usage borné (ex : qualifier un lead, traiter une facture). Un employé IA couvre un poste entier (ex : SDR de bout en bout, comptable de bout en bout). Techniquement, un employé IA est composé de plusieurs agents orchestrés ensemble + une mémoire long-terme + des outils branchés + une identité de marque cohérente. Conséquence : un agent simple coûte 1 400 € HT, un employé IA est sur devis (chiffré au cadrage)." },
  { q: "Un employé IA va-t-il remplacer mes salariés ?", a: "Non. Les clients qui réussissent l'intégration d'un employé IA ne licencient pas : ils redéploient. Vos humains montent sur des sujets à forte valeur ajoutée cognitive (conseil, arbitrage, relation client complexe). L'employé IA absorbe les tâches répétitives à faible valeur cognitive. Statistique observée chez nos clients PME : 0 départ d'équipe imputable au déploiement IA sur les 4 derniers trimestres." },
  { q: "Combien coûte un employé IA chez Althoce ?", a: "Un employé IA est sur devis, chiffré au cadrage en fonction du périmètre du rôle, du nombre d'outils branchés, du volume traité, des exigences de souveraineté et du support souhaité. Tout démarre par 30 minutes offertes avec un expert : vous repartez avec une cartographie du rôle cible et un devis ferme avant tout engagement." },
  { q: "En combien de temps un employé IA est-il opérationnel ?", a: "Compter 6 à 12 semaines entre la signature du cadrage et la mise en production complète. Décomposé : 1–2 semaines de cadrage et conception, 3–6 semaines de build (selon nombre d'agents et d'outils), 1–2 semaines de POC en parallèle de l'humain, 1 semaine de bascule complète." },
  { q: "Mes données restent-elles en France ?", a: "Oui, par défaut. Pour les clients qui exigent une souveraineté maximale, nous utilisons Mistral (modèle français hébergé en France) et hébergeons l'infra sur OVH ou Scaleway. Pour les clients qui acceptent les modèles propriétaires, l'anonymisation est appliquée par défaut sur les données entrantes." },
  { q: "Peut-on intégrer un employé IA à nos outils existants (CRM, ERP, etc.) ?", a: "Oui. C'est même la condition de réussite. Un employé IA déconnecté du SI ne sert à rien. Nous intégrons en standard : HubSpot, Salesforce, Pipedrive, Sage, Cegid, Pennylane, QuickBooks, Outlook, Google Workspace, Slack, Teams, Zendesk, Intercom, Freshdesk, et la plupart des bases SQL/PostgreSQL." },
  { q: "Que se passe-t-il quand l'employé IA rencontre un cas qu'il ne sait pas traiter ?", a: "Il escalade à un humain de l'équipe avec contexte enrichi : ce qu'il a compris, ce qu'il a déjà fait, pourquoi il bloque, ce qu'il propose comme suite. L'employé IA n'invente pas de réponse quand il n'est pas sûr, il transmet. Cette discipline est ce qui distingue un employé IA fiable d'un chatbot qui hallucine." },
  { q: "Comment l'employé IA est-il intégré à la culture de l'équipe ?", a: "Trois rituels obligatoires : 1) Reporting hebdo automatique envoyé chaque vendredi à son manager humain (KPI, cas escaladés, propositions d'amélioration). 2) Présence aux stand-ups : un récapitulatif court de son activité de la veille apparaît dans le canal Slack ou Teams comme tout autre collaborateur. 3) Revue mensuelle entre l'employé IA et le reste de l'équipe pour ajuster les règles métier." },
];

// ── SECTION 1 — Hero ─────────────────────────────────────────
function Hero() {
  return (
    <section className="eia-hero-section" style={{ padding: '120px 24px 80px', background: '#fff', position: 'relative', overflow: 'hidden' }}>
      {/* Grid pattern */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.025) 1px,transparent 1px)', backgroundSize: '48px 48px', maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%,black,transparent)', zIndex: 0 }} aria-hidden="true" />
      <div style={{ position: 'absolute', top: '35%', left: '50%', transform: 'translate(-50%,-50%)', width: 700, height: 350, background: `radial-gradient(ellipse,${AC}12 0%,transparent 70%)`, pointerEvents: 'none', zIndex: 0 }} aria-hidden="true" />

      <div style={{ maxWidth: 1160, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Breadcrumb */}
        <nav aria-label="Fil d'Ariane" style={{ marginBottom: 40, fontSize: 13, color: '#a1a1aa' }}>
          <a href="/" style={{ color: '#a1a1aa', textDecoration: 'none' }}>Accueil</a>
          <span style={{ margin: '0 8px' }}>›</span>
          <a href="/services/" style={{ color: '#a1a1aa', textDecoration: 'none' }}>Services</a>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: '#09090b', fontWeight: 600 }}>Employé IA</span>
        </nav>

        <div className="eia-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          {/* Left — editorial */}
          <div>
            <h1 style={{ fontSize: 'clamp(30px,4vw,52px)', fontWeight: 800, lineHeight: 1.09, letterSpacing: '-.04em', color: '#09090b', marginBottom: 20, animation: 'fadeUp .6s ease both' }}>
              Un employé IA.<br />Pas un chatbot.<br />Pas un agent.<br /><span style={{ color: AC }}>Un poste à temps plein.</span>
            </h1>

            <p style={{ fontSize: 17, color: '#8a8a95', lineHeight: 1.7, marginBottom: 28, animation: 'fadeUp .6s .1s ease both' }}>
              Un employé IA Althoce couvre un rôle entier de votre équipe : SDR, support client, comptable, ops, RH. Disponible 24/7, intégré à votre SI, à votre culture et à vos rituels. Il participe aux stand-ups, prend des décisions dans son périmètre, et fait reporter ses indicateurs comme tout autre collaborateur.
            </p>

            {/* Pills */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32, animation: 'fadeUp .6s .15s ease both' }}>
              {['+758 agents en production', '+150 PME équipées', '100 % autonome dans son périmètre'].map((t) => (
                <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '5px 13px', borderRadius: 9999, background: '#f4f4f5', fontSize: 13, fontWeight: 700, color: '#52525b' }}>{t}</span>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', animation: 'fadeUp .6s .2s ease both' }}>
              <a href="/contact" style={{ padding: '13px 26px', borderRadius: 9999, background: '#09090b', color: '#fff', fontSize: 15, fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'transform .15s,box-shadow .15s' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,.25)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}>
                Discuter de votre projet →
              </a>
              <a href="#anatomie" style={{ padding: '13px 4px', fontSize: 15, fontWeight: 700, color: '#8a8a95', textDecoration: 'none', transition: 'color .15s' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#09090b'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#8a8a95'; }}>
                Voir l'anatomie d'un employé IA ↓
              </a>
            </div>
          </div>

          {/* Right — Employee ID Card */}
          <EmployeeIDCard />
        </div>
      </div>
    </section>
  );
}

// ── Employee ID Card ─────────────────────────────────────────
function EmployeeIDCard() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 2800);
    return () => clearInterval(id);
  }, []);

  const rdv = 73 + (tick % 5);
  const emails = 1380 + tick * 8;

  return (
    <div style={{ background: '#09090b', borderRadius: 24, padding: 32, border: '1px solid #1e1e1e', boxShadow: `0 24px 64px rgba(0,0,0,.35), 0 0 0 1px ${AC}18`, position: 'relative', overflow: 'hidden', animation: 'fadeUp .6s .25s ease both' }}>
      {/* Glow top */}
      <div style={{ position: 'absolute', top: -60, right: -60, width: 200, height: 200, background: `radial-gradient(circle,${AC}20,transparent)`, pointerEvents: 'none' }} aria-hidden="true" />

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
        <div style={{ width: 52, height: 52, borderRadius: 16, background: `linear-gradient(135deg,${AC},#60a5fa)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 800, color: '#fff', flexShrink: 0 }}>
          S
        </div>
        <div>
          <div style={{ fontSize: 16, fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>Sarah</div>
          <div style={{ fontSize: 14, color: '#52525b' }}>SDR · Employé IA</div>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 6, padding: '5px 12px', borderRadius: 9999, background: '#052e16', border: '1px solid #15803d' }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', animation: 'pulseDot 2s ease infinite' }} />
          <span style={{ fontSize: 11, fontWeight: 700, color: '#22c55e' }}>en service</span>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
        {[
          { label: 'RDV générés ce mois', value: rdv, suffix: '', color: AC },
          { label: 'Emails envoyés', value: emails, suffix: '', color: '#a78bfa' },
          { label: 'Disponibilité', value: '24/7', suffix: '', color: '#22c55e', isString: true },
        ].map((stat) => (
          <div key={stat.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', borderRadius: 12, background: '#111', border: '1px solid #1e1e1e' }}>
            <span style={{ fontSize: 13, color: '#8a8a95', fontWeight: 500 }}>{stat.label}</span>
            <span style={{ fontSize: 18, fontWeight: 800, color: stat.color, fontVariantNumeric: 'tabular-nums' }}>
              {stat.isString ? stat.value : stat.value.toLocaleString('fr-FR')}
            </span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{ borderTop: '1px solid #1e1e1e', paddingTop: 16, display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#52525b' }}>
        <span>Intégré à HubSpot · Calendly · LinkedIn</span>
        <span style={{ color: AC, fontWeight: 700 }}>Althoce IA</span>
      </div>
    </div>
  );
}

// ── SECTION 2 — Définition ────────────────────────────────────
function Definition() {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} style={{ padding: '72px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all .6s ease' }}>
          <H2 style={{ marginBottom: 28 }}>Un employé IA n'est pas un outil. C'est un poste.</H2>

          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.8, marginBottom: 20 }}>
            Un agent IA exécute <strong>un cas d'usage borné</strong> : il qualifie un lead, traite une facture, répond à un type de question. Un système d'automatisation <strong>chaîne plusieurs agents</strong> sur un processus métier. Un employé IA fait quelque chose de différent : <strong>il occupe un rôle entier</strong> de votre organigramme. Il a un nom, un périmètre de responsabilités, des objectifs trimestriels, des outils dédiés, une mémoire qui s'enrichit dans le temps. Il participe aux rituels de l'équipe (stand-ups, points hebdo, revues de performance) et son manager humain le pilote comme il piloterait un junior.
          </p>

          <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.8, marginBottom: 36 }}>
            Concrètement, derrière un employé IA Althoce, on trouve <strong>plusieurs agents orchestrés</strong> (typiquement 4 à 8), une couche de mémoire long-terme (vector store + base relationnelle), des intégrations profondes au SI (CRM, ERP, outils métier), et une identité de marque cohérente (ton, prénom, signature, photo de profil). Le tout est piloté par un orchestrateur qui décide à chaque instant quel agent activer, quel outil mobiliser, et quand escalader à un humain.
          </p>

          {/* DarkBlock callout */}
          <div className="eia-darkblock" style={{ background: '#09090b', borderRadius: 20, padding: '32px 36px', border: '1px solid #1e1e1e' }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: AC, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 20 }}>Différence rapide pour un dirigeant pressé</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { label: 'Chatbot', desc: 'Il répond à des questions standard sur votre site. Pas d\'autonomie.' },
                { label: 'Agent IA', desc: 'Il exécute 1 cas d\'usage de bout en bout. Autonome sur ce périmètre.' },
                { label: "Système d'automatisation", desc: 'Plusieurs agents enchaînés sur un processus.' },
                { label: 'Employé IA Althoce', desc: 'Il couvre un poste entier. Plusieurs cas, mémoire, objectifs, rituels d\'équipe. Le seul format qui remplace réellement un ETP.', highlight: true },
              ].map((row) => (
                <div key={row.label} className="eia-darkblock-row" style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: row.highlight ? '12px 14px' : '8px 0', borderRadius: row.highlight ? 12 : 0, background: row.highlight ? `${AC}10` : 'transparent', border: row.highlight ? `1px solid ${AC}25` : 'none' }}>
                  <span className="eia-darkblock-label" style={{ color: AC, fontWeight: 800, fontSize: 14, flexShrink: 0, paddingTop: 1, minWidth: 0 }}>▸ {row.label} :</span>
                  <span style={{ fontSize: 14, color: row.highlight ? '#d4d4d8' : '#52525b', lineHeight: 1.65 }}>{row.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── SECTION 3 — Tableau comparatif ───────────────────────────
const compareRows = [
  { criterion: 'Périmètre',           agent: '1 cas d\'usage borné (qualifier un lead, traiter une facture)', employee: 'Un rôle entier (SDR, support, comptable, ops)' },
  { criterion: 'Mémoire',             agent: 'Stateless ou mémoire courte par tâche',                        employee: 'Mémoire long-terme (vector store + base relationnelle)' },
  { criterion: 'Outils branchés',     agent: '1 à 3 outils nécessaires au cas d\'usage',                     employee: 'Tout l\'écosystème du poste (CRM + ERP + messagerie + agenda + outils métier)' },
  { criterion: 'Délai de mise en service', agent: '1 semaine',                                               employee: '6 à 12 semaines' },
];

function ComparisonTable() {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} style={{ padding: '72px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: 'all .6s ease' }}>
          <H2 style={{ marginBottom: 12 }}>Agent IA · Employé IA : ce qui change quand on passe d'un cas borné à un poste entier</H2>
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 640, margin: '0 auto', lineHeight: 1.7 }}>
            Deux briques Althoce qui se ressemblent en surface mais répondent à des besoins très différents. La grille honnête pour choisir le bon format selon votre contexte.
          </p>
        </div>

        <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid #e4e4e7', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: 'all .6s .1s ease' }}>
          {/* Header — hidden on mobile via CSS */}
          <div className="eia-table-header" style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr', background: '#09090b' }}>
            <div style={{ padding: '14px 20px', fontSize: 12, fontWeight: 800, color: '#8a8a95', textTransform: 'uppercase', letterSpacing: '.1em' }}>Critère</div>
            <div style={{ padding: '14px 20px', fontSize: 12, fontWeight: 800, color: '#8a8a95', textTransform: 'uppercase', letterSpacing: '.1em', borderLeft: '1px solid #1e1e1e' }}>Agent IA</div>
            <div style={{ padding: '14px 20px', fontSize: 12, fontWeight: 800, color: AC, textTransform: 'uppercase', letterSpacing: '.1em', borderLeft: '1px solid #1e1e1e' }}>Employé IA Althoce</div>
          </div>
          {/* Rows */}
          {compareRows.map((row, i) => (
            <div key={i} className="eia-table-row" style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr', borderTop: '1px solid #e4e4e7', background: i % 2 === 0 ? '#fff' : '#fafafa' }}>
              <div style={{ padding: '14px 20px', fontSize: 14, fontWeight: 700, color: '#09090b', lineHeight: 1.4 }}>{row.criterion}</div>
              <div className="eia-table-agent eia-table-cell" style={{ padding: '14px 20px', fontSize: 14, color: '#8a8a95', lineHeight: 1.65, borderLeft: '1px solid #e4e4e7' }}>{row.agent}</div>
              <div className="eia-table-employee eia-table-cell" style={{ padding: '14px 20px', fontSize: 14, color: '#1d4ed8', fontWeight: 600, lineHeight: 1.65, borderLeft: '1px solid #e4e4e7', background: `${AC}04` }}>{row.employee}</div>
            </div>
          ))}
        </div>

        <p style={{ marginTop: 24, fontSize: 14, color: '#8a8a95', lineHeight: 1.7, textAlign: 'center', maxWidth: 680, margin: '24px auto 0' }}>
          L'employé IA n'est pas une « grosse version » de l'agent IA. <strong style={{ color: '#09090b' }}>C'est un produit différent</strong>, conçu pour couvrir un rôle complet, pas une tâche. Si votre besoin est borné, un agent IA simple à 1 400 € HT suffit. Si vous voulez remplacer un poste entier, c'est un employé IA.
        </p>
      </div>
    </section>
  );
}

// ── SECTION 4 — Anatomie SVG ─────────────────────────────────
const briques = [
  { num: '01', label: 'Cerveau LLM',        angle: -90,  desc: 'Modèle de langage (Mistral, GPT, Claude selon la souveraineté demandée) qui pilote la prise de décision. Il lit, comprend, choisit l\'action suivante, écrit.' },
  { num: '02', label: 'Mémoire long-terme', angle: -18,  desc: 'Vector store + base relationnelle. L\'employé IA se souvient des interactions passées, des préférences clients, des arbitrages déjà rendus. Sans mémoire, pas de fiabilité durable.' },
  { num: '03', label: 'Outils branchés',    angle:  54,  desc: 'Connecteurs vers votre SI : CRM (HubSpot, Salesforce), ERP (Sage, Cegid), messagerie (Outlook, Gmail), agenda, outils métier. L\'employé IA agit dans vos outils.' },
  { num: '04', label: 'Identité de marque', angle: 126,  desc: 'Prénom, photo, ton de communication, signature email. L\'employé IA n\'est pas anonyme : il a une voix cohérente avec votre marque. Sarah la SDR, Thomas le comptable.' },
  { num: '05', label: 'Rituels d\'équipe',  angle: 198,  desc: 'Reporting hebdo automatique, présence aux stand-ups, revue mensuelle avec son manager humain. C\'est la différence Althoce : un collaborateur intégré, pas une boîte noire.' },
];

function Anatomy() {
  const [ref, visible] = useInView();
  const [active, setActive] = useState<number>(3);
  const R = 155; // enlarged orbit radius

  return (
    <section id="anatomie" ref={ref} className="eia-section-pad" style={{ padding: '80px 24px', background: '#f8fafc', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: 'all .6s ease' }}>
          <H2 style={{ marginBottom: 10 }}>Ce qu'il y a vraiment derrière un employé IA Althoce</H2>
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 520, margin: '0 auto', lineHeight: 1.65 }}>
            Cinq briques techniques qui transforment des modèles de langage en collaborateur fiable, prévisible, et intégré à votre culture. Pas de boîte noire.
          </p>
        </div>

        <div className="eia-anatomy-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center', opacity: visible ? 1 : 0, transition: 'opacity .8s .2s ease' }}>

          {/* Left — SVG orbital (responsive width) */}
          <div className="eia-svg-wrap" style={{ display: 'flex', justifyContent: 'center' }}>
            <svg
              viewBox="-210 -210 420 420"
              style={{ width: '100%', maxWidth: 420, height: 'auto', overflow: 'visible' }}
              role="img"
              aria-label="Anatomie d'un employé IA : 5 briques en orbite"
            >
              {/* Outer dashed ring */}
              <circle cx="0" cy="0" r={R} fill="none" stroke="#d4d4d8" strokeWidth="1.5" strokeDasharray="6 8" />
              {/* Inner subtle ring */}
              <circle cx="0" cy="0" r="58" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3 6" />

              {/* Connection lines */}
              {briques.map((b, i) => {
                const rad = (b.angle * Math.PI) / 180;
                const x2 = Math.cos(rad) * (R - 36);
                const y2 = Math.sin(rad) * (R - 36);
                return (
                  <line key={i} x1="0" y1="0" x2={x2} y2={y2}
                    stroke={active === i ? AC : '#e2e8f0'}
                    strokeWidth={active === i ? 2.5 : 1.5}
                    style={{ transition: 'stroke .25s, stroke-width .25s' }} />
                );
              })}

              {/* Center circle */}
              <circle cx="0" cy="0" r="58" fill="#09090b" />
              <circle cx="0" cy="0" r="58" fill="none" stroke={`${AC}50`} strokeWidth="2" />
              <text x="0" y="-8" textAnchor="middle" fontSize="13" fontWeight="800" fill="#fff" letterSpacing="1.5">EMPLOYÉ</text>
              <text x="0" y="12" textAnchor="middle" fontSize="13" fontWeight="800" fill={AC} letterSpacing="1.5">IA</text>

              {/* Brique nodes */}
              {briques.map((b, i) => {
                const rad = (b.angle * Math.PI) / 180;
                const cx = Math.cos(rad) * R;
                const cy = Math.sin(rad) * R;
                const isActive = active === i;
                const labelLines = b.label.split(' ');
                return (
                  <g key={i} style={{ cursor: 'pointer' }} onClick={() => setActive(i)}>
                    <circle cx={cx} cy={cy} r="38"
                      fill="#fff"
                      stroke={isActive ? AC : '#e2e8f0'}
                      strokeWidth={isActive ? 2.5 : 1.5}
                      style={{ transition: 'all .25s', filter: isActive ? `drop-shadow(0 6px 16px ${AC}35)` : 'none' }} />
                    <text x={cx} y={cy - (labelLines.length > 1 ? 11 : 5)}
                      textAnchor="middle" fontSize="10" fontWeight="800"
                      fill={isActive ? AC : '#94a3b8'}
                      style={{ transition: 'fill .25s' }}>
                      {b.num}
                    </text>
                    {labelLines.map((word, wi) => (
                      <text key={wi} x={cx} y={cy + 4 + wi * 12}
                        textAnchor="middle" fontSize="9.5" fontWeight="600"
                        fill={isActive ? '#09090b' : '#94a3b8'}
                        style={{ transition: 'fill .25s' }}>
                        {word}
                      </text>
                    ))}
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Right — clickable list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {briques.map((b, i) => {
              const isActive = active === i;
              return (
                <div key={i}>
                  <button
                    onClick={() => setActive(i)}
                    style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', padding: '18px 0', display: 'flex', alignItems: 'center', gap: 16, borderBottom: '1px solid #e4e4e7' }}
                  >
                    <span style={{ fontSize: 13, fontWeight: 800, color: isActive ? AC : '#cbd5e1', width: 24, flexShrink: 0, transition: 'color .2s' }}>{b.num}</span>
                    <span style={{ fontSize: 16, fontWeight: 700, color: isActive ? '#09090b' : '#64748b', transition: 'color .2s', flex: 1 }}>{b.label}</span>
                    <span style={{ fontSize: 18, color: isActive ? AC : '#cbd5e1', transition: 'all .25s', transform: isActive ? 'rotate(90deg)' : 'none', display: 'inline-block' }}>›</span>
                  </button>
                  {isActive && (
                    <div style={{ padding: '14px 16px', marginBottom: 2, borderBottom: '1px solid #e4e4e7', borderLeft: `3px solid ${AC}`, animation: 'fadeUp .2s ease both' }}>
                      <p style={{ fontSize: 14, color: '#8a8a95', lineHeight: 1.7, margin: 0 }}>{b.desc}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Callout */}
        <div style={{ marginTop: 48, padding: '20px 28px', borderRadius: 16, background: '#f0f7ff', border: `1px solid ${AC}20`, maxWidth: 720, margin: '48px auto 0', textAlign: 'center' }}>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.7 }}>
            Ces 5 briques sont présentes dans tous nos employés IA. Ce qui varie : le modèle LLM (selon souveraineté), les outils branchés (selon SI), l'identité de marque (selon culture). <strong style={{ color: AC }}>Tout le reste est standardisé et éprouvé sur +150 PME</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── SECTION 5 — 5 archétypes ─────────────────────────────────
const archetypes = [
  {
    num: '01', title: 'Employé IA SDR (Sales Development Representative)',
    desc: 'Génère des leads qualifiés, envoie les premiers messages personnalisés, qualifie au téléphone, prend les RDV. S\'intègre à votre CRM (HubSpot, Salesforce).',
    cas: 'PME B2B avec 1 commercial débordé qui ne peut plus prospecter. L\'employé IA SDR génère 80–150 RDV qualifiés / mois, le commercial se concentre sur le closing.',
    tools: 'LinkedIn Sales Navigator, Apollo, HubSpot, Lemlist, Calendly.',
    delay: '6 à 8 semaines.',
    href: '/agent-ia/commercial/',
  },
  {
    num: '02', title: 'Employé IA Support Client (N1)',
    desc: 'Répond aux demandes clients standard 24/7, en plusieurs langues si besoin. Crée et résout les tickets de niveau 1. Escalade les cas complexes avec contexte enrichi.',
    cas: 'E-commerce ou SaaS avec une équipe support saturée par les questions répétitives. L\'employé IA absorbe 70–80 % des tickets.',
    tools: 'Zendesk, Intercom, Freshdesk, Gorgias, base de connaissances interne.',
    delay: '4 à 6 semaines.',
    href: '/agent-ia/service-client/',
  },
  {
    num: '03', title: 'Employé IA Comptable',
    desc: 'Absorbe la saisie de factures fournisseurs, le rapprochement bancaire, la préparation des écritures, la pré-validation des notes de frais. L\'expert-comptable valide, conseille, arbitre.',
    cas: 'Cabinet d\'expertise-comptable saturé qui refuse des clients faute de capacité. L\'employé IA double la capacité de production sans embauche.',
    tools: 'Sage, Cegid, Pennylane, QuickBooks, EBP, banques (BNP, CIC, CA, etc.).',
    delay: '6 à 10 semaines (selon nombre d\'outils branchés).',
    href: '/agent-ia/finance/',
  },
  {
    num: '04', title: 'Employé IA Ops / Back-office',
    desc: 'Couvre les tâches administratives répétitives transversales : traitement de mails entrants, mise à jour de bases de données, génération de rapports, suivi fournisseurs, gestion documentaire.',
    cas: 'ETI industrielle avec un poste d\'assistant administratif en burn-out cyclique. L\'employé IA tient le poste, l\'humain monte sur des sujets plus stratégiques.',
    tools: 'Outlook, SharePoint, Google Workspace, ERP métier, Slack.',
    delay: '8 à 12 semaines (forte variance selon périmètre).',
    href: '/agent-ia/marketing/',
  },
  {
    num: '05', title: 'Employé IA RH / Recrutement',
    desc: 'Trie les CV entrants, qualifie les candidats au téléphone, prend les RDV avec les recruteurs humains, gère le suivi candidat post-entretien (relances, retours, NPS).',
    cas: 'Cabinet de recrutement avec 500+ CV / semaine ou DRH PME qui absorbe 100 % du recrutement seul.',
    tools: 'Workday, Lever, Welcome to the Jungle, calendriers, base CV.',
    delay: '6 à 10 semaines.',
    href: '/agent-ia/rh/',
  },
];

function Archetypes() {
  const [ref, visible] = useInView();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section ref={ref} style={{ padding: '72px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: 'all .6s ease' }}>
          <H2 style={{ marginBottom: 12 }}>5 rôles que nos clients confient à un employé IA</H2>
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            Les rôles à forte récurrence, à forte charge cognitive, à faible variabilité. Les 5 employés IA les plus déployés chez nos clients PME et ETI en 2026.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {archetypes.map((a, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={i} style={{ borderTop: '1px solid #e4e4e7', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(16px)', transition: `all .5s ${i * .08}s ease` }}>
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  style={{ width: '100%', textAlign: 'left', padding: '24px 0', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: 20 }}
                >
                  <span style={{ fontSize: 32, fontWeight: 900, color: isOpen ? AC : '#e4e4e7', lineHeight: 1, flexShrink: 0, width: 40, transition: 'color .2s' }}>{a.num}</span>
                  <span style={{ fontSize: 17, fontWeight: 700, color: '#09090b', flex: 1, lineHeight: 1.35 }}>{a.title}</span>
                  <span style={{ fontSize: 18, color: isOpen ? AC : '#a1a1aa', flexShrink: 0, transition: 'all .2s', transform: isOpen ? 'rotate(45deg)' : 'none' }}>+</span>
                </button>
                <div className={`faq-body${isOpen ? ' open' : ''}`}>
                  <div className="eia-archetype-pad" style={{ paddingBottom: 28, paddingLeft: 60 }}>
                    <p style={{ fontSize: 15, color: '#8a8a95', lineHeight: 1.75, marginBottom: 16 }}>{a.desc}</p>
                    <div className="eia-archetype-info" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 20 }}>
                      {[
                        { label: 'Cas typique', val: a.cas },
                        { label: 'Outils intégrés', val: a.tools },
                        { label: 'Délai', val: a.delay },
                      ].map((info) => (
                        <div key={info.label} style={{ padding: '14px 16px', borderRadius: 12, background: '#fafafa', border: '1px solid #e4e4e7' }}>
                          <div style={{ fontSize: 12, fontWeight: 800, color: AC, textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 6 }}>{info.label}</div>
                          <div style={{ fontSize: 13, color: '#52525b', lineHeight: 1.65 }}>{info.val}</div>
                        </div>
                      ))}
                    </div>
                    <a href={a.href} style={{ fontSize: 14, fontWeight: 700, color: AC, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4 }}
                      onMouseEnter={(e) => { e.currentTarget.style.textDecoration = 'underline'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.textDecoration = 'none'; }}>
                      Voir l'agent métier →
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
          <div style={{ borderTop: '1px solid #e4e4e7' }} />
        </div>

        {/* Callout */}
        <div style={{ marginTop: 40, padding: '20px 28px', borderRadius: 16, background: '#f0f7ff', border: `1px solid ${AC}20`, textAlign: 'center' }}>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.7 }}>
            Votre rôle n'est pas dans la liste ? <strong style={{ color: AC }}>9 fois sur 10, on peut le concevoir.</strong> Les 30 minutes offertes avec un expert servent à cartographier votre poste cible et à valider la faisabilité technique avant tout engagement.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── SECTION 6 — Marquee métiers ───────────────────────────────
function MetiersMarquee() {
  return (
    <section style={{ padding: '56px 0', background: '#fafafa', borderTop: '1px solid #e4e4e7', overflow: 'hidden' }}>
      <p style={{ textAlign: 'center', fontSize: 11, fontWeight: 700, color: '#a1a1aa', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: 20 }}>Métiers couverts par nos employés IA</p>
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to right,#fafafa,transparent)', zIndex: 2 }} aria-hidden="true" />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to left,#fafafa,transparent)', zIndex: 2 }} aria-hidden="true" />
        <div className="ticker-slow" role="marquee" aria-label="Métiers couverts">
          {[...agentTags, ...agentTags].map((tag, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 18px', borderRadius: 9999, border: '1px solid #e4e4e7', background: '#fff', fontSize: 14, fontWeight: 600, color: '#52525b', margin: '0 6px', whiteSpace: 'nowrap', flexShrink: 0 }}>
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

// ── SECTION 7 — Méthode ──────────────────────────────────────
function Methodology() {
  const [ref, visible] = useInView();
  const stepCards = [<StepCard1 key={0} />, <StepCard2 key={1} />, <StepCard3 key={2} />, <StepCard4 key={3} visible={visible} />];

  return (
    <section ref={ref} style={{ padding: '80px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <H2 style={{ marginBottom: 10 }}>Comment se passe une mission avec Althoce ?</H2>
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 500, margin: '0 auto', lineHeight: 1.65 }}>Quatre étapes courtes. Vos équipes voient leur premier employé IA en production en 6 à 12 semaines.</p>
        </div>
        <div className="v2-grid4 eia-step-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
          {steps.map((s, i) => (
            <div key={i} style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: `all .6s ${i * .12}s ease` }}>
              {/* Visual card */}
              <div style={{ marginBottom: 20 }}>{stepCards[i]}</div>
              {/* Step info */}
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

// ── SECTION 8 — Pricing (héritée home) ───────────────────────
function Pricing() {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} style={{ padding: '72px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <H2 style={{ marginBottom: 12 }}>Combien ça coûte, en combien de temps ?</H2>
          <p style={{ fontSize: 16, color: '#8a8a95', maxWidth: 500, margin: '0 auto' }}>Nous sommes une des rares agences IA à afficher nos prix. Parce que la transparence, c'est le début de la confiance.</p>
        </div>
        <div className="v2-grid2 eia-pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 24, marginBottom: 36, maxWidth: 900, margin: '0 auto 36px' }}>
          {pricingPlans.map((p, i) => (
            <div key={i} style={{ border: p.dark ? `2px solid ${AC}` : '2px solid #e4e4e7', borderRadius: 28, padding: '40px 36px', background: p.dark ? 'linear-gradient(135deg,#09090b 0%,#0d1117 100%)' : '#fff', position: 'relative', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: `all .6s ${i * .15}s ease`, boxShadow: p.dark ? `0 20px 60px ${AC}20` : '0 4px 20px rgba(0,0,0,.04)' }}>
              {p.dark && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,transparent,${AC},transparent)`, borderRadius: '28px 28px 0 0' }} aria-hidden="true" />}
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
                  {p.price}
                  {p.price !== 'Sur devis' && <span style={{ fontSize: 16, fontWeight: 600, color: p.dark ? '#8a8a95' : '#a1a1aa' }}>HT</span>}
                </div>
              </div>
              <a href="/contact" style={{ display: 'block', width: '100%', padding: '15px', borderRadius: 9999, background: p.dark ? AC : '#09090b', color: '#fff', fontSize: 16, fontWeight: 700, fontFamily: 'inherit', marginBottom: 32, transition: 'all .2s', boxShadow: p.dark ? `0 4px 16px ${AC}40` : '0 4px 16px rgba(0,0,0,.1)', textDecoration: 'none', textAlign: 'center' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}>
                {p.cta}
              </a>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {p.features.map((f, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: p.dark ? '#a1a1aa' : '#52525b', lineHeight: 1.65 }}>
                    <svg width="18" height="18" viewBox="0 0 18 18" style={{ flexShrink: 0, marginTop: 2 }} aria-hidden="true">
                      <circle cx="9" cy="9" r="8" fill={p.dark ? `${AC}15` : '#f0f7ff'} stroke={AC} strokeWidth="1.5" />
                      <path d="M6 9L8 11L12 7" stroke={AC} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
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

// ── SECTION 9 — Souveraineté (héritée home) ───────────────────
function Security() {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} style={{ padding: '72px 24px', background: '#09090b', borderTop: '1px solid #1a1a1a' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div className="eia-security-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 64, alignItems: 'center' }}>
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all .6s ease' }}>
            <H2 white style={{ marginBottom: 20 }}>
              Vos données restent vos données.<br /><span style={{ color: AC }}>En Europe, sous votre contrôle.</span>
            </H2>
            <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.75, marginBottom: 32 }}>
              La plupart des outils IA envoient vos données chez des prestataires américains. Chez Althoce, on fait l'inverse : hébergement en Union Européenne, instance dédiée, chiffrement de bout en bout, et un humain toujours dans la boucle.
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
                  <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                    <circle cx="9" cy="9" r="7" fill="none" stroke={AC} strokeWidth="1.5" />
                    <path d="M6 9L8 11L12 7" stroke={AC} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
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

// ── SECTION 10 — FAQ ─────────────────────────────────────────
function FAQ() {
  return (
    <section style={{ padding: '72px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <H2 style={{ marginBottom: 12 }}>Questions fréquentes sur les employés IA Althoce</H2>
          <p style={{ fontSize: 16, color: '#52525b' }}>Huit questions que tout dirigeant pose avant de déployer un employé IA. Réponses factuelles, sans jargon.</p>
        </div>
        <FAQAccordion items={faqEmployeIA} />
      </div>
    </section>
  );
}

// ── Page root ─────────────────────────────────────────────────
export default function EmployeIAPageClient() {
  return (
    <main>
      <style>{`
        /* ── Employe-IA responsive ───────────────────────────── */
        @media (max-width: 860px) {
          .eia-hero-grid     { grid-template-columns: 1fr !important; }
          .eia-anatomy-grid  { grid-template-columns: 1fr !important; gap: 32px !important; }
          .eia-archetype-info{ grid-template-columns: 1fr 1fr !important; }
          .eia-pricing-grid  { grid-template-columns: 1fr !important; }
          .eia-security-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .eia-darkblock-row { flex-wrap: wrap !important; }
          .eia-darkblock-label { white-space: normal !important; }
        }
        @media (max-width: 640px) {
          /* Table sec.3 → cards empilées */
          .eia-table-header  { display: none !important; }
          .eia-table-row     { grid-template-columns: 1fr !important; border-radius: 12px; border: 1px solid #e4e4e7 !important; margin-bottom: 10px; overflow: hidden; }
          .eia-table-agent   { border-left: none !important; background: #fafafa !important; }
          .eia-table-employee{ border-left: none !important; border-top: 2px solid #2563eb22 !important; }
          .eia-table-cell::before { display: block !important; }
          .eia-archetype-info{ grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .eia-hero-section  { padding: 88px 16px 48px !important; }
          .eia-section-pad   { padding: 56px 16px !important; }
          .eia-step-grid     { grid-template-columns: 1fr !important; }
          .eia-archetype-pad { padding-left: 0 !important; }
          .eia-darkblock     { padding: 24px 20px !important; }
        }
        /* pseudo-label avant chaque cellule sur mobile */
        .eia-table-agent::before   { content: 'Agent IA'; display: none; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: .08em; color: #52525b; margin-bottom: 4px; }
        .eia-table-employee::before{ content: 'Employé IA'; display: none; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: .08em; color: #2563eb; margin-bottom: 4px; }
      `}</style>
      <Hero />
      <Definition />
      <ComparisonTable />
      <Anatomy />
      <Archetypes />
      <MetiersMarquee />
      <Methodology />
      <Pricing />
      <Security />
      <FAQ />
    </main>
  );
}
