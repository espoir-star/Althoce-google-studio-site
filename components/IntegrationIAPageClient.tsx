'use client';

import React, { useState, useEffect, useRef } from 'react';
import { steps, pricingPlans, securityItems, heroLogos, agentMetiers } from '@/lib/data';
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

const faqIntegration: FAQv2Item[] = [
  { q: "Comment l'agent IA s'authentifie auprès de notre CRM ou ERP ?", a: "Par OAuth dédié (compte de service ou app marketplace native quand disponible) ou via une clé d'API stockée dans un coffre-fort (HashiCorp Vault, AWS Secrets Manager). Jamais de credentials utilisateur réutilisés. Les permissions du compte de service sont restreintes au strict minimum nécessaire au cas d'usage. Détails arbitrés au cadrage." },
  { q: "Mes données vont-elles transiter par OpenAI ou Anthropic ?", a: "Cela dépend de votre choix au cadrage. Pour la souveraineté maximale, nous utilisons Mistral hébergé en France, et toutes les données restent sur l'infra que vous contrôlez. Si vous acceptez les modèles propriétaires (OpenAI, Anthropic), nous activons l'anonymisation des données entrantes (PII strippées automatiquement) et utilisons les contrats Enterprise sans réutilisation pour entraînement." },
  { q: "Comment gérer les permissions différenciées (un commercial vs un comptable) ?", a: "Via RBAC granulaire intégré au cadrage. Les rôles sont mappés sur votre annuaire SI quand possible (Active Directory, Entra ID, Workday). Sinon, table de permissions Postgres maintenue par votre admin. Un agent IA n'accède qu'aux données autorisées par le rôle de l'utilisateur qui le sollicite. Toutes les actions sont tracées dans l'audit log." },
  { q: "Combien coûte une intégration IA chez Althoce ?", a: "Le projet d'intégration est facturé selon le scope. Un agent simple intégré à un seul outil (CRM ou ERP) reste à 1 400 € HT (tarif fixe). Une intégration complexe (multi-outils, RBAC custom, journal d'audit dédié, MFA renforcé) est sur devis. Tout démarre par 30 minutes offertes avec un expert." },
  { q: "Quelle gouvernance avez-vous mise en place pour la conformité RGPD ?", a: "Six points : (1) anonymisation des données personnelles avant envoi LLM, (2) registre de traitements documenté livré au DPO client, (3) droit à l'oubli implémenté (purge sur demande), (4) durée de conservation paramétrable des audit logs, (5) hébergement France par défaut, (6) DPA disponibles avec sous-traitants éventuels. L'audit IA inclut un volet conformité complet." },
  { q: "Que se passe-t-il si on veut tout couper en urgence ?", a: "Kill switch disponible 24/7 dans l'interface admin de chaque agent. Désactivation en moins de 30 secondes par votre DSI. Procédure documentée et testée à chaque mise en production (un test mensuel automatique vérifie que le kill switch fonctionne). En cas de panne du kill switch, accès au compte de service et révocation manuelle des credentials." },
];

// ── Monitoring Dashboard mockup ───────────────────────────────
function MonitoringDashboard() {
  const [logIdx, setLogIdx] = useState(0);
  const logs = [
    '12:34:01 · agent-sdr · qualification lead · ✓ succès',
    '12:34:18 · agent-support · ticket #4821 · ✓ résolu',
    '12:34:47 · agent-sdr · escalade → humain · hors périmètre',
    '12:35:02 · agent-finance · extraction facture · ✓ OK',
    '12:35:19 · agent-rh · question congés · ✓ répondu',
    '12:35:33 · agent-sdr · lead → HubSpot · ✓ mis à jour',
  ];
  useEffect(() => {
    const id = setInterval(() => setLogIdx((i) => (i + 1) % logs.length), 2200);
    return () => clearInterval(id);
  }, []);

  const kpis = [
    { label: 'Latence p95', value: '420ms', sub: '↓ 12% vs hier', color: '#16a34a' },
    { label: 'Coût LLM / jour', value: '€0.84', sub: 'Budget : 2,00 €', color: AC },
    { label: 'Taux escalade', value: '4.2%', sub: '↓ 0.8pts', color: '#ea580c' },
  ];

  return (
    <div style={{ background: '#09090b', borderRadius: 20, border: '1px solid #1e1e1e', padding: 20, width: '100%', maxWidth: 400, boxShadow: '0 24px 64px rgba(0,0,0,.4)' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <span style={{ fontSize: 12, fontWeight: 800, color: '#8a8a95', textTransform: 'uppercase', letterSpacing: '.12em' }}>Monitoring Agent IA</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '3px 10px', borderRadius: 9999, background: '#dcfce720', border: '1px solid #86efac30' }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#16a34a', animation: 'int-pulse 2s ease infinite' }} />
          <span style={{ fontSize: 9, fontWeight: 800, color: '#16a34a' }}>Live</span>
        </div>
      </div>

      {/* KPI cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8, marginBottom: 16 }}>
        {kpis.map((k) => (
          <div key={k.label} style={{ background: '#0f0f0f', borderRadius: 12, padding: '12px 10px', border: '1px solid #1e1e1e' }}>
            <div style={{ fontSize: 8, fontWeight: 700, color: '#8a8a95', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 6 }}>{k.label}</div>
            <div style={{ fontSize: 18, fontWeight: 800, color: k.color, letterSpacing: '-.03em', lineHeight: 1, marginBottom: 4 }}>{k.value}</div>
            <div style={{ fontSize: 9, color: '#8a8a95' }}>{k.sub}</div>
          </div>
        ))}
      </div>

      {/* Audit log */}
      <div style={{ background: '#050505', borderRadius: 10, border: '1px solid #1a1a1a', padding: '10px 12px' }}>
        <div style={{ fontSize: 8, fontWeight: 800, color: '#3f3f46', textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 8 }}>Audit log</div>
        <div style={{ height: 80, overflow: 'hidden', position: 'relative' }}>
          {logs.map((log, i) => (
            <div
              key={i}
              style={{
                fontSize: 9.5,
                fontFamily: 'JetBrains Mono, Fira Code, monospace',
                color: i === logIdx ? '#a5f3fc' : '#3f3f46',
                padding: '3px 0',
                transition: 'color .4s ease',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {log}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── SECTION 1 — Hero ─────────────────────────────────────────
function Hero() {
  return (
    <section className="int-hero-section" style={{ padding: '120px 24px 80px', background: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.025) 1px,transparent 1px)', backgroundSize: '48px 48px', maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%,black,transparent)', zIndex: 0 }} aria-hidden="true" />
      <div style={{ position: 'absolute', top: '35%', left: '50%', transform: 'translate(-50%,-50%)', width: 700, height: 350, background: `radial-gradient(ellipse,${AC}10 0%,transparent 70%)`, pointerEvents: 'none', zIndex: 0 }} aria-hidden="true" />

      <div style={{ maxWidth: 1160, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <nav aria-label="Fil d'Ariane" style={{ marginBottom: 40, fontSize: 13, color: '#a1a1aa' }}>
          <a href="/" style={{ color: '#a1a1aa', textDecoration: 'none' }}>Accueil</a>
          <span style={{ margin: '0 8px' }}>›</span>
          <a href="/services/" style={{ color: '#a1a1aa', textDecoration: 'none' }}>Services</a>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: '#09090b', fontWeight: 600 }}>Intégration IA</span>
        </nav>

        <div className="int-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: 'clamp(26px,3.8vw,48px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-.04em', color: '#09090b', marginBottom: 20 }}>
              Intégration IA dans votre SI : sécurisée, monitorée, gouvernée.{' '}
              <span style={{ color: AC }}>Pas un POC oublié dans un coin.</span>
            </h1>

            <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 28, maxWidth: 520 }}>
              Vos agents IA doivent passer un audit ISO 27001, un comité sécurité DSI, une revue RGPD. Chez Althoce, l'intégration au SI inclut par défaut SSO, RBAC, journal d'audit complet, monitoring continu, fallback humain et kill switch. Vous gardez le contrôle. Votre DSI valide.
            </p>

            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
              {['+150 PME équipées', 'SSO + RBAC + audit log natifs', '100 % conforme RGPD'].map((t) => (
                <span key={t} style={{ display: 'inline-flex', alignItems: 'center', padding: '5px 13px', borderRadius: 9999, background: '#f4f4f5', fontSize: 13, fontWeight: 700, color: '#52525b' }}>{t}</span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="/contact" style={{ padding: '13px 26px', borderRadius: 9999, background: '#09090b', color: '#fff', fontSize: 15, fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'transform .15s,box-shadow .15s' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,.25)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}>
                Discuter de votre projet →
              </a>
              <a href="#securite" style={{ padding: '13px 4px', fontSize: 15, fontWeight: 700, color: '#8a8a95', textDecoration: 'none', transition: 'color .15s' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#09090b'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#8a8a95'; }}>
                Voir l'architecture sécurité ↓
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <MonitoringDashboard />
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

// ── SECTION 2 — Définition ───────────────────────────────────
function Definition() {
  return (
    <section style={{ padding: '80px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <H2 style={{ marginBottom: 28 }}>Intégrer une IA dans votre SI : ce que ça implique vraiment</H2>

        <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.8, marginBottom: 20 }}>
          Beaucoup de projets IA partent en POC sur la machine d'un développeur. Le POC fonctionne, l'enthousiasme monte, on déploie en production. Six mois plus tard, le service tombe en panne un dimanche soir, personne ne sait quoi faire, le DSI découvre qu'il n'y a pas de log d'audit, pas de fallback, pas de procédure d'escalade. Pour éviter ce scénario, une vraie intégration IA inclut six couches : authentification (SSO), autorisations (RBAC), journal d'audit, monitoring continu, fallback humain, et kill switch d'urgence. C'est ce qu'on déploie par défaut dans tous nos projets — du simple <a href="/services/agents-ia/" style={{ color: AC, textDecoration: 'none', fontWeight: 700 }}>agent IA</a> jusqu'au <a href="/services/automatisation-ia/" style={{ color: AC, textDecoration: 'none', fontWeight: 700 }}>système multi-agents</a> ou à l'<a href="/services/employe-ia/" style={{ color: AC, textDecoration: 'none', fontWeight: 700 }}>employé IA</a>.
        </p>

        <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.8, marginBottom: 36 }}>
          En pratique : vos utilisateurs se connectent via votre SSO d'entreprise (Microsoft Entra, Okta, Google Workspace), les agents respectent les permissions de chaque rôle, toutes les actions sont tracées dans un journal interrogeable, la qualité est mesurée en continu, un humain peut prendre la main à tout moment, et un bouton "stop" permet de désactiver instantanément un agent qui dérive. Détails dans la <a href="#securite" style={{ color: AC, textDecoration: 'none', fontWeight: 700 }}>section Architecture sécurité</a>.
        </p>

        <div className="int-darkblock" style={{ background: '#09090b', borderRadius: 20, padding: '32px 36px', borderLeft: `4px solid ${AC}` }}>
          <p style={{ fontSize: 14, fontWeight: 800, color: '#fff', marginBottom: 16 }}>Les 3 questions qui qualifient une intégration IA sérieuse</p>
          <ol style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              'Si demain votre DSI demande qui a fait quelle action sur l\'agent et quand, êtes-vous capable de répondre avec un journal d\'audit horodaté ?',
              'Si un agent commence à donner des réponses incorrectes, est-ce que votre équipe le détecte avant qu\'un client ne se plaigne ?',
              'Si vous devez tout couper en urgence (alerte sécurité, dérive, faux positif massif), combien de minutes prend la bascule ?',
            ].map((q, i) => (
              <li key={i} style={{ fontSize: 15, color: '#a1a1aa', lineHeight: 1.7 }}>{q}</li>
            ))}
          </ol>
          <p style={{ fontSize: 14, color: '#52525b', marginTop: 16, marginBottom: 0, fontStyle: 'italic' }}>
            Si la réponse à une de ces questions est floue, votre intégration IA n'est pas prête pour la production.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── SECTION 3 — Tableau comparatif ───────────────────────────
const compRows = [
  { critere: 'Authentification', poc: 'API key partagée ou en clair', althoce: 'SSO entreprise (Entra, Okta, Google Workspace)' },
  { critere: 'Journal d\'audit', poc: 'Logs partiels, non interrogeables', althoce: 'Audit log complet, horodaté, requêtable' },
  { critere: 'Kill switch', poc: 'Non disponible', althoce: 'Bouton "stop" disponible 24/7 par votre DSI' },
  { critere: 'Conformité RGPD', poc: 'À documenter au cas par cas', althoce: 'Native (anonymisation, droit à l\'oubli, registre)' },
];

function ComparisonTable() {
  return (
    <section style={{ padding: '80px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <H2 style={{ marginBottom: 12 }}>POC qui dérive en production vs Intégration Althoce. Ce qui change.</H2>
        <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.7, marginBottom: 40, maxWidth: 680 }}>
          Le piège classique : un POC convaincant déployé tel quel en prod. Voici les 8 différences entre les deux approches, vues par votre DSI.
        </p>

        <div className="int-table-header" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', borderRadius: '12px 12px 0 0', overflow: 'hidden', border: '1px solid #e4e4e7', borderBottom: 'none' }}>
          <div style={{ padding: '12px 20px', background: '#f4f4f5', fontSize: 12, fontWeight: 800, color: '#52525b', textTransform: 'uppercase', letterSpacing: '.1em' }}>Critère</div>
          <div style={{ padding: '12px 20px', background: '#fef2f2', fontSize: 12, fontWeight: 800, color: '#dc2626', textTransform: 'uppercase', letterSpacing: '.1em', borderLeft: '1px solid #e4e4e7' }}>POC déployé tel quel</div>
          <div style={{ padding: '12px 20px', background: `${AC}08`, fontSize: 12, fontWeight: 800, color: AC, textTransform: 'uppercase', letterSpacing: '.1em', borderLeft: `2px solid ${AC}30` }}>Intégration Althoce</div>
        </div>

        {compRows.map((row, i) => (
          <div key={i} className="int-table-row" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', border: '1px solid #e4e4e7', borderTop: 'none', background: i % 2 === 0 ? '#fff' : '#fafafa' }}>
            <div className="int-table-cell" style={{ padding: '13px 20px', fontSize: 14, fontWeight: 700, color: '#09090b' }}>{row.critere}</div>
            <div className="int-col-poc int-table-cell" style={{ padding: '13px 20px', fontSize: 14, color: '#8a8a95', borderLeft: '1px solid #e4e4e7' }}>{row.poc}</div>
            <div className="int-col-althoce int-table-cell" style={{ padding: '13px 20px', fontSize: 14, color: '#09090b', fontWeight: 600, borderLeft: `2px solid ${AC}20`, background: `${AC}04` }}>{row.althoce}</div>
          </div>
        ))}

        <div style={{ border: '1px solid #e4e4e7', borderTop: 'none', borderRadius: '0 0 12px 12px', padding: '16px 20px', background: '#fff' }}>
          <p style={{ fontSize: 14, color: '#8a8a95', lineHeight: 1.7, margin: 0 }}>
            Cette grille est issue des 150+ revues d'intégration menées en cadrage. La majorité des POCs présentés ne passe pas la moitié de ces critères. Pour évaluer votre situation, voir notre service <a href="/services/audit-ia/" style={{ color: AC, textDecoration: 'none', fontWeight: 700 }}>Audit IA</a> qui inclut une revue d'intégration complète.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── SECTION 4 — Architecture sécurité (SVG orbital) ──────────
const guardrails = [
  {
    id: 'sso', label: 'SSO', angle: 270, color: '#2563eb',
    title: 'SSO entreprise',
    desc: 'Authentification via Microsoft Entra ID, Okta, Google Workspace, OneLogin. Désactivation d\'un compte SSO = désactivation immédiate de l\'accès à tous les agents IA.',
  },
  {
    id: 'rbac', label: 'RBAC', angle: 330, color: '#7c3aed',
    title: 'RBAC granulaire',
    desc: 'Permissions par rôle, par équipe, par périmètre. Un commercial ne lit pas les données comptables. Les permissions héritent de votre annuaire SI (Active Directory, Workday).',
  },
  {
    id: 'audit', label: 'Audit log', angle: 30, color: '#ea580c',
    title: 'Audit log complet',
    desc: 'Chaque action de l\'agent est tracée : qui, quand, sur quoi, avec quelle réponse. Logs requêtables (Postgres ou Elasticsearch), conservés selon votre politique RGPD.',
  },
  {
    id: 'monitoring', label: 'Monitoring', angle: 90, color: '#16a34a',
    title: 'Monitoring continu',
    desc: 'Langfuse pour le tracing LLM (latence p95, coût, qualité). OpenTelemetry pour l\'infra. Alertes Slack automatiques sur dérive. Reporting hebdomadaire.',
  },
  {
    id: 'fallback', label: 'Fallback humain', angle: 150, color: '#0891b2',
    title: 'Fallback humain',
    desc: 'Quand l\'agent ne sait pas répondre ou détecte un cas sensible, il escalade à un humain (Slack, Teams, Zendesk) avec contexte enrichi. Délai d\'escalade configuré au cadrage.',
  },
  {
    id: 'kill', label: 'Kill switch', angle: 210, color: '#dc2626',
    title: 'Kill switch',
    desc: 'Bouton "stop" dans l\'interface admin : désactivation instantanée en moins de 30 secondes. Procédure documentée et testée à chaque mise en production.',
  },
];

function SecurityDiagram() {
  const [active, setActive] = useState<string | null>(null);
  const CX = 240, CY = 200, R = 130, NR = 36;

  const toXY = (angleDeg: number) => {
    const rad = (angleDeg - 90) * Math.PI / 180;
    return { x: CX + R * Math.cos(rad), y: CY + R * Math.sin(rad) };
  };

  const activeGuard = guardrails.find(g => g.id === active);

  return (
    <div id="securite" style={{ padding: '80px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 12 }}>
          <H2>Six garde-fous standards dans toute intégration Althoce</H2>
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 580, margin: '16px auto 0', lineHeight: 1.7 }}>
            Six couches déployées par défaut, sans surcoût. C'est ce qui distingue un agent IA prêt pour la production d'un POC qu'on n'aurait pas dû mettre en prod.
          </p>
        </div>

        <div className="int-security-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', marginTop: 48 }}>
          {/* SVG diagram */}
          <div>
            <svg viewBox="0 0 480 400" fill="none" style={{ width: '100%', height: 'auto' }}>
              <defs>
                <radialGradient id="intCenterGrad" cx="38%" cy="32%" r="68%">
                  <stop offset="0%" stopColor="#1d4ed8" />
                  <stop offset="100%" stopColor="#09090b" />
                </radialGradient>
              </defs>

              {/* Background orbit rings */}
              <circle cx={CX} cy={CY} r={R + 20} stroke={`${AC}08`} strokeWidth="1" />
              <circle cx={CX} cy={CY} r={R - 20} stroke={`${AC}05`} strokeWidth="1" strokeDasharray="4 6" />

              {/* Connection lines */}
              {guardrails.map((g) => {
                const { x, y } = toXY(g.angle);
                return (
                  <line key={g.id} x1={CX} y1={CY} x2={x} y2={y}
                    stroke={active === g.id ? g.color : '#e4e4e7'}
                    strokeWidth={active === g.id ? 2 : 1}
                    strokeDasharray={active === g.id ? 'none' : '4 4'}
                    style={{ transition: 'all .2s' }}
                  />
                );
              })}

              {/* Center node */}
              <circle cx={CX} cy={CY} r={44} fill="url(#intCenterGrad)" />
              <circle cx={CX} cy={CY} r={44} stroke={AC} strokeWidth="1.5" opacity="0.6" />
              <circle cx={CX - 10} cy={CY - 7} r="4.5" fill="white" opacity="0.85" />
              <circle cx={CX + 10} cy={CY - 7} r="4.5" fill="white" opacity="0.85" />
              <circle cx={CX} cy={CY + 9} r="4.5" fill="white" opacity="0.85" />
              <line x1={CX - 5} y1={CY - 7} x2={CX + 5} y2={CY - 7} stroke="white" strokeWidth="1.5" opacity="0.4" />
              <line x1={CX - 8} y1={CY - 2} x2={CX - 2} y2={CY + 5} stroke="white" strokeWidth="1.5" opacity="0.4" />
              <line x1={CX + 8} y1={CY - 2} x2={CX + 2} y2={CY + 5} stroke="white" strokeWidth="1.5" opacity="0.4" />
              <text x={CX} y={CY + 26} textAnchor="middle" fontSize="9" fontWeight="800" fill="white" fontFamily="Plus Jakarta Sans, sans-serif" opacity="0.9">Agent IA</text>

              {/* Guardrail nodes */}
              {guardrails.map((g) => {
                const { x, y } = toXY(g.angle);
                const isActive = active === g.id;
                return (
                  <g key={g.id}
                    style={{ cursor: 'pointer' }}
                    onMouseEnter={() => setActive(g.id)}
                    onMouseLeave={() => setActive(null)}
                    onClick={() => setActive(active === g.id ? null : g.id)}
                  >
                    <circle cx={x} cy={y} r={NR} fill={isActive ? g.color : '#fff'} stroke={isActive ? g.color : '#e4e4e7'} strokeWidth={isActive ? 2 : 1}
                      style={{ transition: 'all .2s', filter: isActive ? `drop-shadow(0 4px 12px ${g.color}40)` : 'none' }}
                    />
                    <text x={x} y={y + 4} textAnchor="middle" fontSize="9.5" fontWeight="800"
                      fill={isActive ? '#fff' : '#374151'} fontFamily="Plus Jakarta Sans, sans-serif"
                      style={{ transition: 'fill .2s', pointerEvents: 'none' }}
                    >{g.label}</text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Description panel */}
          <div style={{ minHeight: 220 }}>
            {activeGuard ? (
              <div style={{ animation: 'int-fadeIn .25s ease' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `${activeGuard.color}15`, border: `1px solid ${activeGuard.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <div style={{ width: 16, height: 16, borderRadius: '50%', background: activeGuard.color }} />
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: '#09090b', letterSpacing: '-.03em', marginBottom: 12 }}>{activeGuard.title}</h3>
                <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75 }}>{activeGuard.desc}</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {guardrails.map((g) => (
                  <div key={g.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', borderRadius: 12, border: '1px solid #f4f4f5', cursor: 'pointer', transition: 'all .15s' }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = '#fafafa'; setActive(g.id); }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; setActive(null); }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: g.color, flexShrink: 0 }} />
                    <span style={{ fontSize: 14, fontWeight: 700, color: '#374151' }}>{g.title}</span>
                    <span style={{ fontSize: 13, color: '#a1a1aa', marginLeft: 'auto' }}>→</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div style={{ marginTop: 40, padding: '18px 24px', borderRadius: 14, background: `${AC}08`, border: `1px solid ${AC}20` }}>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.7, margin: 0 }}>
            Ces 6 garde-fous sont <strong>inclus par défaut</strong> dans tous nos projets, sans surcoût. C'est pour cette raison que le délai de mise en production est plus long qu'un simple POC : on ne livre pas tant que ces 6 couches ne sont pas en place et testées.
          </p>
        </div>
      </div>
    </div>
  );
}

// ── SECTION 5 — 5 intégrations typiques ─────────────────────
const integrations = [
  {
    num: '01',
    title: 'CRM (HubSpot, Salesforce, Pipedrive, Zoho)',
    desc: 'Lecture / écriture des contacts, deals, activités, notes. Création automatique de tickets, mise à jour de stages, ajout d\'activités. Permissions héritées du CRM.',
    link: { label: 'Voir les agents IA SDR', href: '/services/agents-ia/' },
    color: '#FF7A59',
  },
  {
    num: '02',
    title: 'ERP comptable (Sage, Cegid, Pennylane, QuickBooks, EBP)',
    desc: 'Lecture / écriture des écritures, factures fournisseurs, rapprochements, exports. Validation humaine systématique sur les écritures sensibles (montants > seuil, nouveaux fournisseurs).',
    link: { label: 'Voir l\'agent comptabilité', href: '/agent-ia/comptabilite/' },
    color: '#16a34a',
  },
  {
    num: '03',
    title: 'Outils support (Zendesk, Intercom, Freshdesk, Gorgias)',
    desc: 'Lecture / écriture des tickets, statuts, conversations, base de connaissances. Création de tickets escaladés avec contexte enrichi. Mise à jour automatique des statuts.',
    link: { label: 'Voir le chatbot IA', href: '/services/chatbot-ia/' },
    color: '#7c3aed',
  },
  {
    num: '04',
    title: 'Messagerie et agenda (Outlook, Gmail, Google Calendar, MS Calendar)',
    desc: 'Lecture / écriture des emails, prises de RDV automatiques, gestion d\'agenda. OAuth strict, permissions par utilisateur. Pas d\'accès aux mails des autres collaborateurs.',
    link: null,
    color: '#EA4335',
  },
  {
    num: '05',
    title: 'Outils internes propriétaires',
    desc: 'Vos outils métier sur-mesure (ERP industriel custom, base CRM interne, outils de gestion sectoriels). Connecteurs développés au cadrage, chiffrés dans le devis.',
    link: { label: 'Voir le service développement IA', href: '/services/developpement-ia/' },
    color: '#0891b2',
  },
];

function IntegrationsList() {
  return (
    <section style={{ padding: '80px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <H2 style={{ marginBottom: 12 }}>5 systèmes que nous intégrons en standard</H2>
        <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.7, marginBottom: 52, maxWidth: 580 }}>
          Cinq familles d'outils que nos clients PME et ETI nous demandent de connecter à leurs agents IA. Connecteurs développés et maintenus en interne.
        </p>

        {integrations.map((item, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: 28, paddingBottom: 36, marginBottom: 36, borderBottom: i < integrations.length - 1 ? '1px solid #f4f4f5' : 'none', alignItems: 'start' }}>
            <div style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, color: item.color, lineHeight: 1, letterSpacing: '-.04em', opacity: 0.8 }}>{item.num}</div>
            <div>
              <h3 style={{ fontSize: 17, fontWeight: 800, color: '#09090b', marginBottom: 8, letterSpacing: '-.02em' }}>{item.title}</h3>
              <p style={{ fontSize: 15, color: '#8a8a95', lineHeight: 1.7, marginBottom: item.link ? 12 : 0 }}>{item.desc}</p>
              {item.link && (
                <a href={item.link.href} style={{ fontSize: 14, fontWeight: 700, color: item.color, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4 }}
                  onMouseEnter={(e) => { e.currentTarget.style.textDecoration = 'underline'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.textDecoration = 'none'; }}>
                  {item.link.label} →
                </a>
              )}
            </div>
          </div>
        ))}

        <div style={{ padding: '18px 24px', borderRadius: 14, background: '#fafafa', border: '1px solid #e4e4e7' }}>
          <p style={{ fontSize: 15, color: '#52525b', lineHeight: 1.7, margin: 0 }}>
            Votre outil n'est pas listé ? Nous développons les connecteurs custom au cadrage. Les <strong>30 minutes offertes avec un expert</strong> servent à valider la faisabilité technique de votre intégration cible.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── SECTION 6 — Métiers marquee ──────────────────────────────
function MetiersMarquee() {
  return (
    <section style={{ padding: '64px 0', background: '#fafafa', borderTop: '1px solid #e4e4e7', overflow: 'hidden' }}>
      <div style={{ textAlign: 'center', marginBottom: 32, padding: '0 24px' }}>
        <p style={{ fontSize: 11, fontWeight: 700, color: '#a1a1aa', letterSpacing: '.12em', textTransform: 'uppercase' }}>Intégré dans tous les métiers</p>
      </div>
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to right,#fafafa,transparent)', zIndex: 2 }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to left,#fafafa,transparent)', zIndex: 2 }} />
        <div style={{ display: 'flex', gap: 12, animation: 'tickerScroll 28s linear infinite', width: 'max-content' }}>
          {[...agentMetiers, ...agentMetiers].map((m, i) => (
            <a key={i} href={m.href} style={{ flexShrink: 0, padding: '10px 20px', borderRadius: 9999, background: '#fff', border: '1px solid #e4e4e7', fontSize: 14, fontWeight: 700, color: '#52525b', textDecoration: 'none', whiteSpace: 'nowrap', transition: 'all .15s' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = AC; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = AC; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#52525b'; e.currentTarget.style.borderColor = '#e4e4e7'; }}>
              {m.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Methodology (héritée) ─────────────────────────────────────
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
            {item.done && <svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 5L4 7L8 3" stroke="#16a34a" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>}
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
            <div style={{ height: '100%', width: b.w, background: `linear-gradient(90deg,${AC},#60a5fa)`, borderRadius: 9999 }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function StepCard3() {
  const tools = [
    { name: 'SSO / Okta', color: '#09090b' }, { name: 'RBAC AD', color: AC },
    { name: 'Langfuse', color: '#7c3aed' }, { name: 'Vault', color: '#ea580c' },
    { name: 'Postgres', color: '#336791' }, { name: 'OTel', color: '#f59e0b' },
  ];
  return (
    <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e4e4e7', padding: '18px 20px', boxShadow: '0 2px 12px rgba(0,0,0,.06)' }}>
      <div style={{ fontSize: 9, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 14 }}>Stack sécurité active</div>
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
    { label: 'Uptime agent', value: '99.97%', color: '#16a34a', isString: true },
    { label: 'Latence p95', value: '420ms', color: AC, isString: true },
    { label: 'Escalades / jour', value: 3 + (tick % 2), color: '#ea580c' },
    { label: 'Audit logs / jour', value: 847 + (tick % 5), color: '#7c3aed' },
  ];
  return (
    <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e4e4e7', padding: '18px 20px', boxShadow: '0 2px 12px rgba(0,0,0,.06)', position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
        <div style={{ fontSize: 9, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.12em' }}>Dashboard live</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '3px 8px', borderRadius: 9999, background: '#dcfce7', border: '1px solid #86efac' }}>
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#16a34a', animation: 'int-pulse 2s ease infinite' }} />
          <span style={{ fontSize: 9, fontWeight: 800, color: '#15803d' }}>Actif 24/7</span>
        </div>
      </div>
      {stats.map((s) => (
        <div key={s.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7px 0', borderBottom: '1px solid #f1f5f9' }}>
          <span style={{ fontSize: 12, color: '#64748b' }}>{s.label}</span>
          <span style={{ fontSize: 15, fontWeight: 800, color: s.color, fontVariantNumeric: 'tabular-nums' }}>
            {s.isString ? s.value : (s.value as number).toLocaleString('fr-FR')}
          </span>
        </div>
      ))}
    </div>
  );
}

function Methodology() {
  const [ref, visible] = useInView();
  const stepCards = [<StepCard1 key={0} />, <StepCard2 key={1} />, <StepCard3 key={2} />, <StepCard4 key={3} visible={visible} />];
  return (
    <section ref={ref} style={{ padding: '80px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <H2 style={{ marginBottom: 10 }}>Comment se passe une mission avec Althoce ?</H2>
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 500, margin: '0 auto', lineHeight: 1.65 }}>
            Quatre étapes courtes. De l'<a href="/services/audit-ia/" style={{ color: AC, textDecoration: 'none', fontWeight: 700 }}>audit</a> à la mise en production en moins de 12 semaines.
          </p>
        </div>
        <div className="v2-grid4 int-step-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
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
      </div>
    </section>
  );
}

function Pricing() {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} style={{ padding: '72px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <H2 style={{ marginBottom: 12 }}>Combien ça coûte, en combien de temps ?</H2>
          <p style={{ fontSize: 16, color: '#8a8a95', maxWidth: 500, margin: '0 auto' }}>Nous sommes une des rares agences IA à afficher nos prix. La transparence, c'est le début de la confiance.</p>
        </div>
        <div className="v2-grid2 int-pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 24, maxWidth: 900, margin: '0 auto 36px' }}>
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
              <a href="/contact" style={{ display: 'block', width: '100%', padding: '15px', borderRadius: 9999, background: p.dark ? AC : '#09090b', color: '#fff', fontSize: 16, fontWeight: 700, fontFamily: 'inherit', marginBottom: 32, textDecoration: 'none', textAlign: 'center', transition: 'all .2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}>
                {p.cta}
              </a>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {p.features.map((f, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: p.dark ? '#a1a1aa' : '#52525b', lineHeight: 1.65 }}>
                    <svg width="18" height="18" viewBox="0 0 18 18" style={{ flexShrink: 0, marginTop: 2 }}><circle cx="9" cy="9" r="8" fill={p.dark ? `${AC}15` : '#f0f7ff'} stroke={AC} strokeWidth="1.5" /><path d="M6 9L8 11L12 7" stroke={AC} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <span style={{ fontWeight: 600 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', padding: '20px 28px', borderRadius: 16, background: 'linear-gradient(135deg,#f0f7ff 0%,#f0f9ff 100%)', border: `1px solid ${AC}20`, maxWidth: 720, margin: '0 auto' }}>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.7, fontWeight: 500 }}>
            <strong style={{ color: AC }}>30 minutes offertes</strong> : discutez avec un expert, repartez avec une feuille de route claire, que l'on travaille ensemble ou non.
          </p>
        </div>
      </div>
    </section>
  );
}

function Security() {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} style={{ padding: '72px 24px', background: '#09090b', borderTop: '1px solid #1a1a1a' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div className="int-sov-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 64, alignItems: 'center' }}>
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all .6s ease' }}>
            <H2 white style={{ marginBottom: 20 }}>
              Vos données restent vos données.<br /><span style={{ color: AC }}>En Europe, sous votre contrôle.</span>
            </H2>
            <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.75, marginBottom: 32 }}>
              Stack auto-hébergeable, hébergement en Union Européenne, instance dédiée, chiffrement de bout en bout. L'humain reste le pilote : aucune action critique sans validation.
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
                  <svg width="18" height="18" viewBox="0 0 18 18"><circle cx="9" cy="9" r="7" fill="none" stroke={AC} strokeWidth="1.5" /><path d="M6 9L8 11L12 7" stroke={AC} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
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

function FAQ() {
  return (
    <section style={{ padding: '72px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <H2 style={{ marginBottom: 12 }}>Questions fréquentes sur <span style={{ color: AC }}>l'intégration IA</span></H2>
          <p style={{ fontSize: 16, color: '#52525b' }}>Six questions que les DSI et CTO posent avant chaque déploiement.</p>
        </div>
        <FAQAccordion items={faqIntegration} />
      </div>
    </section>
  );
}

// ── Page root ─────────────────────────────────────────────────
export default function IntegrationIAPageClient() {
  return (
    <main>
      <style>{`
        @keyframes int-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: .6; transform: scale(1.3); }
        }
        @keyframes int-fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: none; }
        }
        @keyframes tickerScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (max-width: 900px) {
          .int-hero-grid      { grid-template-columns: 1fr !important; }
          .int-security-layout { grid-template-columns: 1fr !important; gap: 32px !important; }
          .int-sov-grid       { grid-template-columns: 1fr !important; gap: 32px !important; }
          .int-pricing-grid   { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .int-table-header   { display: none !important; }
          .int-table-row      { grid-template-columns: 1fr !important; border-radius: 12px; border: 1px solid #e4e4e7 !important; margin-bottom: 10px; overflow: hidden; }
          .int-col-poc::before    { display: block !important; }
          .int-col-althoce::before { display: block !important; }
        }
        @media (max-width: 600px) {
          .int-hero-section   { padding: 88px 16px 48px !important; }
          .int-darkblock      { padding: 24px 20px !important; }
          .int-step-grid      { grid-template-columns: 1fr !important; }
        }
        .int-col-poc::before     { content: 'POC déployé tel quel'; display: none; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: .08em; color: #dc2626; margin-bottom: 4px; }
        .int-col-althoce::before { content: 'Intégration Althoce'; display: none; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: .08em; color: #2563eb; margin-bottom: 4px; }
      `}</style>
      <Hero />
      <TrustLogos />
      <Definition />
      <ComparisonTable />
      <SecurityDiagram />
      <IntegrationsList />
      <MetiersMarquee />
      <Methodology />
      <Pricing />
      <Security />
      <FAQ />
    </main>
  );
}
