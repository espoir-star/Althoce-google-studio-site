'use client';

import React, { useState, useEffect, useRef } from 'react';
import { steps, pricingPlans, securityItems, heroLogos } from '@/lib/data';
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

const faqAuto: FAQv2Item[] = [
  { q: "Quelle est la différence entre automatisation classique et automatisation IA ?", a: "L'automatisation classique (RPA, Zapier, Make) exécute des règles fixes écrites à l'avance. Elle est rapide et fiable tant qu'aucune exception n'arrive. L'automatisation IA utilise un modèle de langage pour comprendre le contexte et adapter son comportement. Résultat : elle gère les cas imprévus, lit des documents non-structurés (PDF, mails), et prend des décisions. Concrètement, on combine souvent les deux : plomberie classique pour la stabilité, briques IA pour l'intelligence." },
  { q: "Quels processus sont les plus rentables à automatiser en premier ?", a: "Les processus qui cochent les 4 cases : récurrents (au moins 10 occurrences par semaine), chronophages (15 min ou plus par occurrence), à faible valeur ajoutée cognitive, et déclenchés par un événement numérique. Les meilleurs candidats chez nos clients : tri de mails entrants, extraction de factures, qualification de leads, génération de rapports, réponses aux questions internes RH. ROI typique : 3 à 10× la première année." },
  { q: "Combien coûte une automatisation IA en 2026 ?", a: "1 400 € HT (tarif fixe) pour un cas simple, 1 semaine de dev. Pour les systèmes multi-agents, employés IA et refontes complètes de process : sur devis, chiffré au cadrage selon la complexité, le nombre d'outils branchés, le volume traité, les exigences de souveraineté et le support souhaité. Tout démarre par 30 minutes offertes avec un expert : vous repartez avec un chiffrage ferme avant tout engagement." },
  { q: "Combien de temps faut-il pour mettre une automatisation en production ?", a: "Une automatisation simple est en production sous 7 jours après validation du cadrage. Un système d'automatisation (3 à 6 processus orchestrés) : 2 à 6 semaines. Une refonte complète de département : 6 à 12 semaines. Les délais sont tenus parce qu'on ne démarre jamais sans cadrage ferme et chiffré." },
  { q: "Peut-on automatiser avec l'IA sans compétences techniques en interne ?", a: "Oui pour l'usage quotidien : une fois livrée, l'automatisation tourne seule. Votre équipe a juste à la superviser via un dashboard. Si vous voulez pouvoir la modifier vous-même, nous formons 1 à 2 personnes chez vous (1 journée de formation incluse dans les systèmes à 8 000 € HT et plus). Alternative : vous restez en support chez nous, sans toucher au code." },
  { q: "Mes données vont-elles transiter par OpenAI ou Anthropic ?", a: "Uniquement si vous l'acceptez, et jamais sans filtre d'anonymisation préalable sur les données sensibles. Pour les clients qui exigent la souveraineté totale, nous utilisons Mistral (hébergé en France) ou des modèles open-source (Llama, Mixtral) auto-hébergés sur votre propre infrastructure. Aucune donnée ne sort du périmètre sans votre validation explicite." },
  { q: "Les automatisations IA sont-elles conformes RGPD et AI Act ?", a: "Oui. Nos déploiements intègrent par défaut : registre des traitements mis à jour, analyses d'impact (PIA) si nécessaire, clauses contractuelles types si des sous-traitants tiers sont impliqués, documentation de conformité AI Act (niveau de risque, transparence, supervision humaine). Un document unique de conformité vous est livré à chaque mise en production." },
  { q: "Une automatisation IA peut-elle remplacer un employé ?", a: "Elle peut absorber 80 % des tâches répétitives d'un poste, rarement un poste entier. Chez nos clients, l'effet observé est systématiquement le même : les équipes gagnent du temps qu'elles réinvestissent sur les tâches à forte valeur (relation client, stratégie, créativité). Aucun de nos clients n'a supprimé de poste suite à une mission Althoce. Plusieurs ont réaffecté ou recruté différemment." },
  { q: "Que se passe-t-il si l'automatisation commet une erreur ?", a: "Trois couches de sécurité la rendent très peu probable, et récupérable si elle arrive : validation humaine obligatoire sur les actions sensibles, filtres de contenu et de coût, journalisation exhaustive (on sait exactement ce que l'agent a fait, quand, pourquoi). Taux d'erreur observé chez nos clients : inférieur à 1 % sur les tâches automatisées, largement en-dessous du taux d'erreur humain sur les mêmes tâches." },
  { q: "À qui appartient l'automatisation à la fin du projet ?", a: "À vous, à 100 %. Code, workflows, prompts, accès LLM, bases de données : tout vous est transféré. Nous n'imposons aucun abonnement récurrent au-delà du support que vous choisissez explicitement. Vous pouvez reprendre la main en interne, changer de prestataire, ou continuer avec nous : c'est votre choix." },
];

// ── Pipeline hero illustration ───────────────────────────────
function PipelineIllustration() {
  const tasks = [
    { label: 'Mail client', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', color: '#EA4335' },
    { label: 'Facture PDF', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', color: '#FF7A59' },
    { label: 'Ticket support', icon: 'M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z', color: '#7c3aed' },
    { label: 'Données CRM', icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4', color: '#2563eb' },
    { label: 'Rapport Excel', icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', color: '#16a34a' },
  ];

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 480, userSelect: 'none' }}>
      <svg viewBox="0 0 480 340" fill="none" style={{ width: '100%', height: 'auto', overflow: 'visible' }}>
        <defs>
          <linearGradient id="pipeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1d4ed8" />
            <stop offset="100%" stopColor="#09090b" />
          </linearGradient>
          <filter id="pShadow">
            <feDropShadow dx="0" dy="2" stdDeviation="6" floodColor="#00000012" />
          </filter>
        </defs>

        {/* ── INPUT TASKS — left column ── */}
        {tasks.map((t, i) => {
          const y = 30 + i * 58;
          return (
            <g key={i} style={{ animation: `aui-fadeIn .5s ${i * .1}s both` }}>
              <rect x={0} y={y} width={120} height={42} rx="10" fill="#fff" filter="url(#pShadow)" stroke="#e4e4e7" strokeWidth="1" />
              <rect x={0} y={y} width={4} height={42} rx="2" fill={t.color} />
              <svg x={10} y={y + 11} width={20} height={20} viewBox="0 0 24 24" fill="none">
                <path d={t.icon} stroke={t.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <text x={36} y={y + 23} fontSize="9.5" fontWeight="700" fill="#374151" fontFamily="Plus Jakarta Sans, sans-serif">{t.label}</text>
            </g>
          );
        })}

        {/* ── CONNECTOR LINES left → pipeline ── */}
        {tasks.map((t, i) => {
          const y = 30 + i * 58 + 21;
          return (
            <line key={i} x1={120} y1={y} x2={175} y2={170}
              stroke={t.color} strokeWidth="1.5" opacity="0.35" strokeDasharray="4 3"
              style={{ animation: `aui-dash 2s ${i * .2}s linear infinite` }}
            />
          );
        })}

        {/* ── PIPELINE CENTER ── */}
        <rect x={175} y={138} width={130} height={82} rx="16" fill="url(#pipeGrad)" filter="url(#pShadow)" />
        <rect x={175} y={138} width={130} height={82} rx="16" stroke={AC} strokeWidth="1.5" opacity="0.5" />
        {/* Neural net icon inside */}
        <circle cx={216} cy={166} r="4" fill="white" opacity="0.85" />
        <circle cx={240} cy={178} r="4" fill="white" opacity="0.85" />
        <circle cx={264} cy={166} r="4" fill="white" opacity="0.85" />
        <line x1={216} y1={166} x2={240} y2={178} stroke="white" strokeWidth="1.5" opacity="0.4" />
        <line x1={264} y1={166} x2={240} y2={178} stroke="white" strokeWidth="1.5" opacity="0.4" />
        <line x1={216} y1={166} x2={264} y2={166} stroke="white" strokeWidth="1.5" opacity="0.4" />
        <text x={240} y={202} textAnchor="middle" fontSize="10" fontWeight="800" fill="white" fontFamily="Plus Jakarta Sans, sans-serif" opacity="0.9">Agent IA</text>
        {/* Active badge — floating above the rect */}
        <rect x={204} y={120} width={72} height={22} rx="11" fill="#dcfce7" stroke="#86efac" strokeWidth="1" />
        <circle cx={218} cy={131} r="4.5" fill="#16a34a" style={{ animation: 'pulseDot 2s ease infinite' }} />
        <text x={226} y={136} fontSize="9" fontWeight="800" fill="#15803d" fontFamily="Plus Jakarta Sans, sans-serif">Actif 24/7</text>

        {/* ── CONNECTOR LINES pipeline → output ── */}
        {tasks.map((t, i) => {
          const y = 30 + i * 58 + 21;
          return (
            <line key={i} x1={305} y1={170} x2={360} y2={y}
              stroke={t.color} strokeWidth="1.5" opacity="0.35" strokeDasharray="4 3"
              style={{ animation: `aui-dash 2s ${i * .2 + .4}s linear infinite` }}
            />
          );
        })}

        {/* ── OUTPUT TASKS — right column (processed) ── */}
        {tasks.map((t, i) => {
          const y = 30 + i * 58;
          return (
            <g key={i} style={{ animation: `aui-fadeIn .5s ${i * .1 + .3}s both` }}>
              <rect x={360} y={y} width={120} height={42} rx="10" fill="#f0fdf4" filter="url(#pShadow)" stroke="#86efac" strokeWidth="1" />
              <svg x={370} y={y + 11} width={20} height={20} viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
                <path d="M8 12L11 15L16 9" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <text x={396} y={y + 23} fontSize="9.5" fontWeight="700" fill="#15803d" fontFamily="Plus Jakarta Sans, sans-serif">Traité</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

// ── SECTION 1 — Hero ─────────────────────────────────────────
function Hero() {
  return (
    <section className="aui-hero-section" style={{ padding: '120px 24px 80px', background: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.025) 1px,transparent 1px)', backgroundSize: '48px 48px', maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%,black,transparent)', zIndex: 0 }} aria-hidden="true" />
      <div style={{ position: 'absolute', top: '35%', left: '50%', transform: 'translate(-50%,-50%)', width: 700, height: 350, background: `radial-gradient(ellipse,${AC}10 0%,transparent 70%)`, pointerEvents: 'none', zIndex: 0 }} aria-hidden="true" />

      <div style={{ maxWidth: 1160, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <nav aria-label="Fil d'Ariane" style={{ marginBottom: 40, fontSize: 13, color: '#a1a1aa' }}>
          <a href="/" style={{ color: '#a1a1aa', textDecoration: 'none' }}>Accueil</a>
          <span style={{ margin: '0 8px' }}>›</span>
          <a href="/services/" style={{ color: '#a1a1aa', textDecoration: 'none' }}>Services</a>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: '#09090b', fontWeight: 600 }}>Automatisation IA</span>
        </nav>

        <div className="aui-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-.04em', color: '#09090b', marginBottom: 20 }}>
              Automatisation IA sur-mesure.<br />
              <span style={{ color: AC }}>On libère vos équipes des tâches sans valeur.</span>
            </h1>

            <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.7, marginBottom: 28, maxWidth: 520 }}>
              Mails, documents, CRM, reporting, saisie, rapprochements : ce que votre équipe fait chaque jour en mode pilote automatique, on le confie à un agent IA. Pas de script rigide, pas de projet-usine : un audit en 48h, un premier livrable en 7 jours.
            </p>

            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
              {['+150 PME équipées', 'Premier agent en 1 semaine', 'ROI validé en 90 jours'].map((t) => (
                <span key={t} style={{ display: 'inline-flex', alignItems: 'center', padding: '5px 13px', borderRadius: 9999, background: '#f4f4f5', fontSize: 13, fontWeight: 700, color: '#52525b' }}>{t}</span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="/contact" style={{ padding: '13px 26px', borderRadius: 9999, background: '#09090b', color: '#fff', fontSize: 15, fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'transform .15s,box-shadow .15s' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,.25)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}>
                Discuter de votre projet →
              </a>
              <a href="#cas-concrets" style={{ padding: '13px 4px', fontSize: 15, fontWeight: 700, color: '#8a8a95', textDecoration: 'none', transition: 'color .15s' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#09090b'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#8a8a95'; }}>
                Voir ce qu'on automatise ↓
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <PipelineIllustration />
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
        <H2 style={{ marginBottom: 28 }}>L'automatisation IA, c'est quoi exactement ?</H2>

        <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.8, marginBottom: 20 }}>
          L'<strong>automatisation IA</strong> désigne l'utilisation de modèles d'intelligence artificielle pour <strong>exécuter à votre place des tâches professionnelles</strong>. Pas seulement répondre à des questions : comprendre un contexte, lire des documents, interagir avec vos outils (mail, CRM, ERP), prendre des décisions, et agir.
        </p>

        <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.8, marginBottom: 36 }}>
          La différence avec l'<strong>automatisation classique</strong> (Zapier, Make, RPA) tient en un mot : la <strong>compréhension</strong>. Les automatisations traditionnelles suivent des règles figées. Elles plantent dès qu'une exception arrive. Une automatisation IA s'adapte : elle lit un mail client en langage naturel, comprend qu'il s'agit d'une réclamation complexe, décide d'escalader au bon interlocuteur et rédige un accusé de réception personnalisé.
        </p>

        <div className="aui-darkblock" style={{ background: '#09090b', borderRadius: 20, padding: '32px 36px', borderLeft: `4px solid ${AC}` }}>
          <p style={{ fontSize: 16, color: '#e4e4e7', lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: '#fff' }}>En une phrase :</strong> automatiser avec l'IA, c'est déléguer à une machine tout ce qui est répétitif <strong style={{ color: AC }}>et</strong> demande un peu de jugement. Pas seulement ce qui est répétitif et déterministe.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── SECTION 3 — Tableau comparatif ───────────────────────────
const compRows = [
  { critere: 'Logique', classique: '« Si X alors Y » (règles fixes)', althoce: '« Quel est le but ? » (raisonnement)' },
  { critere: 'Données non structurées', classique: 'Plantent sur PDF, mails libres, images', althoce: 'Lues et comprises nativement' },
  { critere: 'Gestion des exceptions', classique: 'Escalade humaine systématique', althoce: 'Traitement autonome de la majorité' },
];

function ComparisonTable() {
  return (
    <section style={{ padding: '80px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1040, margin: '0 auto' }}>
        <H2 style={{ marginBottom: 16 }}>Ce qui a changé en 2025 : l'automatisation est devenue agentique.</H2>
        <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.7, marginBottom: 40, maxWidth: 680 }}>
          Jusqu'en 2022, automatiser en entreprise voulait dire RPA ou iPaaS. Depuis l'arrivée des modèles de langage avancés, une nouvelle génération est apparue : l'<strong>automatisation agentique</strong>. Voici ce qui change concrètement.
        </p>

        {/* Header */}
        <div className="aui-table-header" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', gap: 0, marginBottom: 0, borderRadius: '12px 12px 0 0', overflow: 'hidden', border: '1px solid #e4e4e7', borderBottom: 'none' }}>
          <div style={{ padding: '12px 20px', background: '#f4f4f5', fontSize: 12, fontWeight: 800, color: '#52525b', textTransform: 'uppercase', letterSpacing: '.1em' }}>Critère</div>
          <div style={{ padding: '12px 20px', background: '#fef2f2', fontSize: 12, fontWeight: 800, color: '#dc2626', textTransform: 'uppercase', letterSpacing: '.1em', borderLeft: '1px solid #e4e4e7' }}>Automatisation classique</div>
          <div style={{ padding: '12px 20px', background: `${AC}08`, fontSize: 12, fontWeight: 800, color: AC, textTransform: 'uppercase', letterSpacing: '.1em', borderLeft: `2px solid ${AC}30` }}>Automatisation IA (Althoce)</div>
        </div>
        {compRows.map((row, i) => (
          <div key={i} className="aui-table-row" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', border: '1px solid #e4e4e7', borderTop: 'none', background: i % 2 === 0 ? '#fff' : '#fafafa' }}>
            <div className="aui-table-cell" style={{ padding: '14px 20px', fontSize: 14, fontWeight: 700, color: '#09090b' }}>{row.critere}</div>
            <div className="aui-col-classique aui-table-cell" style={{ padding: '14px 20px', fontSize: 14, color: '#8a8a95', borderLeft: '1px solid #e4e4e7' }}>{row.classique}</div>
            <div className="aui-col-agent aui-table-cell" style={{ padding: '14px 20px', fontSize: 14, color: '#09090b', fontWeight: 600, borderLeft: `2px solid ${AC}20`, background: `${AC}04` }}>{row.althoce}</div>
          </div>
        ))}
        <div style={{ border: '1px solid #e4e4e7', borderTop: 'none', borderRadius: '0 0 12px 12px', padding: '16px 20px', background: '#fff' }}>
          <p style={{ fontSize: 14, color: '#8a8a95', lineHeight: 1.7, margin: 0 }}>
            Les deux coexistent. Nous combinons les deux en production : la plomberie reste du n8n classique, l'intelligence vient de briques LLM. C'est cette architecture hybride qu'on appelle <strong>automatisation agentique</strong>. <a href="/services/agents-ia/" style={{ color: AC, textDecoration: 'none', fontWeight: 700 }}>Voir notre service agents IA →</a>
          </p>
        </div>
      </div>
    </section>
  );
}

// ── SECTION 4 — 6 familles de processus ─────────────────────
const familles = [
  {
    num: '01',
    title: 'Traitement de flux entrants',
    desc: 'Mails, tickets, formulaires, appels téléphoniques (transcrits). L\'agent lit, classe, priorise, répond ou route.',
    example: 'Un cabinet de recrutement traite 500 CV/semaine de façon automatisée.',
    href: '/agent-ia/service-client/',
    color: '#EA4335',
  },
  {
    num: '02',
    title: 'Extraction & structuration de documents',
    desc: 'Factures, bons de commande, contrats, rapports, PV. L\'agent extrait les données, structure, rapproche, archive.',
    example: 'Un DAF qui économise 3 ETP sur la comptabilité fournisseurs.',
    href: '/agent-ia/finance/',
    color: '#FF7A59',
  },
  {
    num: '03',
    title: 'Automatisation commerciale & marketing',
    desc: 'Qualification leads, enrichissement CRM, rédaction d\'e-mails, relance, reporting de pipe.',
    example: 'Une équipe sales qui double son volume de RDV sans recruter.',
    href: '/agent-ia/commercial/',
    color: AC,
  },
  {
    num: '04',
    title: 'Opérations internes & reporting',
    desc: 'Rapports hebdo, consolidation multi-outils, alertes sur KPI, synthèse de données.',
    example: 'Un COO qui reçoit chaque lundi à 7h un brief complet généré automatiquement.',
    href: '/agent-ia/operations/',
    color: '#7c3aed',
  },
  {
    num: '05',
    title: 'Processus RH',
    desc: 'Pré-qualification candidats, onboarding, réponses internes (congés, paie, règlement), gestion de la paperasse.',
    example: 'Un SIRH augmenté qui traite 80 % des questions RH en autonomie.',
    href: '/agent-ia/rh/',
    color: '#16a34a',
  },
  {
    num: '06',
    title: 'Conformité, juridique, souveraineté',
    desc: 'Analyse de contrats, veille réglementaire, revue de clauses, génération de documents types.',
    example: 'Un juriste qui passe de 4h à 20 min sur la revue d\'un contrat standard.',
    href: '/agent-ia/juridique/',
    color: '#0f172a',
  },
];

function ProcessFamilies() {
  return (
    <section style={{ padding: '80px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <H2 style={{ marginBottom: 16 }}>Quels processus en entreprise se prêtent à l'automatisation IA ?</H2>
        <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.7, marginBottom: 52, maxWidth: 620 }}>
          Toutes les tâches ne sont pas bonnes à automatiser. On cible les tâches récurrentes, consommatrices de temps, à faible valeur ajoutée cognitive, idéalement déclenchées par un événement numérique. Six grandes familles ressortent chez nos clients.
        </p>

        <div>
          {familles.map((f, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: 28, paddingBottom: 36, marginBottom: 36, borderBottom: i < familles.length - 1 ? '1px solid #f4f4f5' : 'none', alignItems: 'start' }}>
              <div style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, color: f.color, lineHeight: 1, letterSpacing: '-.04em', opacity: 0.8 }}>{f.num}</div>
              <div>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: '#09090b', marginBottom: 8, letterSpacing: '-.02em' }}>{f.title}</h3>
                <p style={{ fontSize: 15, color: '#8a8a95', lineHeight: 1.7, marginBottom: 10 }}>{f.desc}</p>
                <p style={{ fontSize: 14, color: '#8a8a95', lineHeight: 1.65, marginBottom: 12, fontStyle: 'italic' }}>Exemple : {f.example}</p>
                <a href={f.href} style={{ fontSize: 14, fontWeight: 700, color: f.color, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4 }}
                  onMouseEnter={(e) => { e.currentTarget.style.textDecoration = 'underline'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.textDecoration = 'none'; }}>
                  Voir l'agent {f.title.split(' ')[0].toLowerCase()} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── SECTION 5 — 12 cas concrets (marquee) ───────────────────
const cas12 = [
  { title: 'Tri et réponse mails support niveau 1', delai: '1-2 sem', prix: '1 400 €' },
  { title: 'Qualification & enrichissement leads', delai: '1 sem', prix: '1 400 €' },
  { title: 'Extraction factures → logiciel comptable', delai: '2-3 sem', prix: '4 000 €' },
  { title: 'Comptes-rendus de réunion automatiques', delai: '1 sem', prix: '1 400 €' },
  { title: 'Analyse contrats + alerte clauses à risque', delai: '3-4 sem', prix: '6 000 €' },
  { title: 'Agent relance clients (mail + voicebot)', delai: '3 sem', prix: '5 000 €' },
  { title: 'Reporting hebdo multi-sources (Stripe, HubSpot, GSC)', delai: '1-2 sem', prix: '3 000 €' },
  { title: 'Pré-qualification CV + scoring + brief recruteur', delai: '2 sem', prix: '4 500 €' },
  { title: 'Demandes internes RH (FAQ + formulaires)', delai: '2 sem', prix: '4 000 €' },
  { title: 'Veille concurrentielle automatisée + digest hebdo', delai: '1-2 sem', prix: '3 500 €' },
  { title: 'Fiches produit / descriptions depuis une base', delai: '1-2 sem', prix: '1 400 €' },
  { title: 'Agent SDR complet : ciblage, message, relance, RDV', delai: '6-8 sem', prix: '12 000 €' },
];

function CasConcrets() {
  return (
    <section id="cas-concrets" style={{ padding: '80px 0', background: '#fafafa', borderTop: '1px solid #e4e4e7', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>
        <H2 style={{ marginBottom: 12 }}>Concrètement, qu'est-ce qu'Althoce automatise ?</H2>
        <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.7, marginBottom: 40, maxWidth: 620 }}>
          12 automatisations réellement livrées en 2025, chacune opérationnelle en moins de 4 semaines.
        </p>
      </div>

      {/* Marquee */}
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to right,#fafafa,transparent)', zIndex: 2 }} aria-hidden="true" />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to left,#fafafa,transparent)', zIndex: 2 }} aria-hidden="true" />
        <div style={{ display: 'flex', gap: 16, animation: 'tickerScroll 40s linear infinite', width: 'max-content', paddingBottom: 4 }}>
          {[...cas12, ...cas12].map((c, i) => (
            <div key={i} style={{ flexShrink: 0, width: 260, padding: '20px 22px', borderRadius: 16, background: '#fff', border: '1px solid #e4e4e7', boxShadow: '0 2px 8px rgba(0,0,0,.04)' }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#09090b', lineHeight: 1.45, marginBottom: 12 }}>{c.title}</div>
              <div style={{ display: 'flex', gap: 8 }}>
                <span style={{ padding: '3px 9px', borderRadius: 9999, background: '#f0f7ff', fontSize: 10, fontWeight: 700, color: AC }}>{c.delai}</span>
                <span style={{ padding: '3px 9px', borderRadius: 9999, background: '#f4f4f5', fontSize: 10, fontWeight: 700, color: '#8a8a95' }}>à partir de {c.prix}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '32px 24px 0' }}>
        <div style={{ background: `${AC}08`, border: `1px solid ${AC}20`, borderRadius: 14, padding: '18px 24px' }}>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.7, margin: 0 }}>
            Votre cas n'est pas dans la liste ? 9 fois sur 10, on peut le traiter avec une variation d'un cas existant. Les 30 min offertes avec un expert servent précisément à cartographier ça.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── SECTION 6 — Méthode (héritée) ────────────────────────────
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
    { name: 'Gmail', color: '#ea4335' }, { name: 'HubSpot', color: '#ff7a59' },
    { name: 'Slack', color: '#4a154b' }, { name: 'Notion', color: '#000' },
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
        <div style={{ fontSize: 9, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.12em' }}>Votre automatisation</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '3px 8px', borderRadius: 9999, background: '#dcfce7', border: '1px solid #86efac' }}>
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#16a34a', animation: 'pulseDot 2s ease infinite' }} />
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
            Quatre étapes courtes. De l'<a href="/services/audit-ia/" style={{ color: AC, textDecoration: 'none', fontWeight: 700 }}>audit</a> à la mise en production en 7 jours à 12 semaines.
          </p>
        </div>
        <div className="v2-grid4 aui-step-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
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

// ── SECTION 7 — Pricing (héritée) ────────────────────────────
function Pricing() {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} style={{ padding: '72px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <H2 style={{ marginBottom: 12 }}>Combien ça coûte, en combien de temps ?</H2>
          <p style={{ fontSize: 16, color: '#8a8a95', maxWidth: 500, margin: '0 auto' }}>Nous sommes une des rares agences IA à afficher nos prix. La transparence, c'est le début de la confiance.</p>
        </div>
        <div className="v2-grid2 aui-pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 24, marginBottom: 36, maxWidth: 900, margin: '0 auto 36px' }}>
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
            <strong style={{ color: AC }}>30 minutes offertes</strong> : discutez avec un expert, repartez avec une feuille de route claire et concrète, que l'on travaille ensemble ou non.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── SECTION 8 — Souveraineté (héritée) ───────────────────────
function Security() {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} style={{ padding: '72px 24px', background: '#09090b', borderTop: '1px solid #1a1a1a' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div className="aui-security-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 64, alignItems: 'center' }}>
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

// ── SECTION 9 — FAQ ───────────────────────────────────────────
function FAQ() {
  return (
    <section style={{ padding: '72px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <H2 style={{ marginBottom: 12 }}>Vos questions, <span style={{ color: AC }}>nos réponses directes.</span></H2>
          <p style={{ fontSize: 16, color: '#52525b' }}>Dix questions que tout dirigeant pose avant de lancer sa première automatisation IA.</p>
        </div>
        <FAQAccordion items={faqAuto} />
      </div>
    </section>
  );
}

// ── Page root ─────────────────────────────────────────────────
export default function AutomatisationIAPageClient() {
  return (
    <main>
      <style>{`
        @keyframes aui-fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: none; }
        }
        @keyframes aui-dash {
          from { stroke-dashoffset: 0; }
          to   { stroke-dashoffset: -14; }
        }
        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: .6; transform: scale(1.3); }
        }
        @keyframes tickerScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (max-width: 900px) {
          .aui-hero-grid     { grid-template-columns: 1fr !important; }
          .aui-security-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .aui-pricing-grid  { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .aui-table-header  { display: none !important; }
          .aui-table-row     { grid-template-columns: 1fr !important; border-radius: 12px; border: 1px solid #e4e4e7 !important; margin-bottom: 10px; overflow: hidden; }
          .aui-col-classique, .aui-col-agent { border-left: none !important; }
          .aui-col-agent     { border-top: 2px solid #2563eb22 !important; background: #2563eb04 !important; }
          .aui-table-cell::before { display: block !important; }
        }
        @media (max-width: 600px) {
          .aui-hero-section  { padding: 88px 16px 48px !important; }
          .aui-darkblock     { padding: 24px 20px !important; }
          .aui-step-grid     { grid-template-columns: 1fr !important; }
        }
        .aui-col-classique::before { content: 'Automatisation classique'; display: none; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: .08em; color: #dc2626; margin-bottom: 4px; }
        .aui-col-agent::before     { content: 'Automatisation IA (Althoce)'; display: none; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: .08em; color: #2563eb; margin-bottom: 4px; }
      `}</style>
      <Hero />
      <TrustLogos />
      <Definition />
      <ComparisonTable />
      <ProcessFamilies />
      <CasConcrets />
      <Methodology />
      <Pricing />
      <Security />
      <FAQ />
    </main>
  );
}
