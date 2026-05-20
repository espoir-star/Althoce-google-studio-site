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

const faqAgents: FAQv2Item[] = [
  { q: "Quelle est la différence entre un agent IA et un chatbot ?", a: "Un chatbot répond à des questions. Un agent IA exécute des tâches de bout en bout. Un chatbot suit un script ; un agent IA suit un objectif. Un chatbot ne peut pas ouvrir votre CRM, lire un contrat PDF ou envoyer un mail en votre nom ; un agent IA le peut. Concrètement : un chatbot, c'est « FAQ en 24/7 ». Un agent IA, c'est « collaborateur virtuel »." },
  { q: "Quelle est la différence entre un agent IA et une automatisation classique (Zapier, Make, n8n) ?", a: "Une automatisation classique suit des règles fixes : « si X alors Y ». Un agent IA utilise un modèle de langage pour comprendre le contexte et choisir quoi faire. Résultat : il gère les cas imprévus, les documents non structurés, les exceptions. Techniquement, chez Althoce, nos agents utilisent n8n comme backbone mais avec des briques LLM, c'est ce qui les rend « agentiques »." },
  { q: "Combien coûte la création d'un agent IA chez Althoce ?", a: "Un agent IA simple est facturé 1 400 € HT (tarif fixe, 1 cas d'usage borné, 1 semaine de delivery). Pour les systèmes multi-agents et les employés IA complets : sur devis, chiffré au cadrage. Tout démarre par 30 minutes offertes avec un expert : on cartographie vos processus prioritaires et vous repartez avec un devis ferme, que vous décidiez de travailler avec nous ou pas." },
  { q: "En combien de temps un agent IA est-il opérationnel ?", a: "Pour un agent simple : 1 semaine après validation du cadrage. Pour un système multi-agents : 2 à 6 semaines. Pour un employé IA complet : 8 à 12 semaines. Les délais sont tenus parce qu'on ne commence pas sans cadrage chiffré et validé." },
  { q: "Un agent IA peut-il se tromper ?", a: "Oui, comme un humain. Les LLM font des erreurs (on parle d'hallucinations). Nous gérons ce risque avec trois couches : validation humaine obligatoire sur les actions sensibles, filtres de contenu, journalisation exhaustive pour traçabilité. En pratique, le taux d'erreur observé chez nos clients est inférieur à 1 % sur les tâches automatisées, largement en dessous du taux d'erreur humain sur les mêmes tâches." },
  { q: "Mes employés vont-ils être remplacés par un agent IA ?", a: "Non. Nos agents absorbent les tâches répétitives à faible valeur ajoutée (80 % d'une journée administrative). Vos équipes se recentrent sur ce qui demande de l'humain : relation client, créativité, stratégie. Aucun de nos clients n'a supprimé de poste suite à une mission Althoce. Plusieurs en ont créé." },
  { q: "Mes données vont-elles être envoyées à OpenAI ou Anthropic ?", a: "Uniquement si vous le décidez. Pour les clients qui exigent la souveraineté totale, nous utilisons des modèles hébergés en Europe (Mistral) ou auto-hébergés (Llama, Mixtral) sur votre infrastructure. Les données sensibles peuvent être filtrées/anonymisées avant tout appel LLM externe." },
  { q: "À qui appartient l'agent IA à la fin de la mission ?", a: "À vous, à 100 %. Nous développons sur votre infrastructure ou sur un environnement dédié que nous vous transférons. Code, accès, logs, workflows : tout vous revient. Pas de rétention technique, pas d'abonnement obligatoire au-delà du support que vous choisissez." },
  { q: "Faut-il avoir des compétences tech en interne pour utiliser un agent IA Althoce ?", a: "Non pour l'usage quotidien : l'agent tourne seul, votre équipe n'a rien à faire. Oui si vous voulez le faire évoluer vous-même : nous formons 1 à 2 personnes chez vous à opérer et modifier l'agent. Alternative : vous restez en support chez nous, sans toucher au code." },
  { q: "Quelle est la différence entre un agent IA et un « employé IA » ?", a: "Un agent IA exécute une tâche (ou une famille de tâches). Un employé IA est un assemblage de plusieurs agents couvrant un poste entier (ex : SDR complet = prospection + enrichissement + qualification + relance + reporting). C'est la différence entre un outil et un collaborateur. Les employés IA sont sur devis et remplacent typiquement 1 à 3 ETP." },
];

// ── Hero illustration SVG ────────────────────────────────────
function AgentIllustration() {
  const CX = 240, CY = 190, CR = 64, SR = 34;
  // Line endpoints
  const top  = { sx: CX,      sy: CY - CR, ex: CX,      ey: 40  + SR };
  const rgt  = { sx: CX + CR, sy: CY,      ex: 412 - SR, ey: CY };
  const bot  = { sx: CX,      sy: CY + CR, ex: CX,      ey: 348 - SR };
  const lft  = { sx: CX - CR, sy: CY,      ex: 68  + SR, ey: CY };

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 480 }}>
      <svg viewBox="0 0 480 390" fill="none" style={{ width: '100%', height: 'auto', overflow: 'visible' }}>
        <defs>
          <radialGradient id="cg3" cx="38%" cy="32%" r="68%">
            <stop offset="0%" stopColor="#1d4ed8" />
            <stop offset="100%" stopColor="#09090b" />
          </radialGradient>
          <filter id="ss3">
            <feDropShadow dx="0" dy="3" stdDeviation="7" floodColor="#00000014" />
          </filter>
        </defs>

        {/* Background rings */}
        <circle cx={CX} cy={CY} r="114" stroke={`${AC}07`} strokeWidth="1" />
        <circle cx={CX} cy={CY} r="152" stroke={`${AC}04`} strokeWidth="1" />

        {/* Connector lines — grey base */}
        {[top, rgt, bot, lft].map((l, i) => (
          <line key={i} x1={l.sx} y1={l.sy} x2={l.ex} y2={l.ey} stroke="#e4e4e7" strokeWidth="2" />
        ))}
        {/* Connector lines — colored animated dash */}
        {[
          { ...top, c: '#EA4335', d: '1.8s' },
          { ...rgt, c: '#ff7a59', d: '2.2s' },
          { ...bot, c: '#36C5F0', d: '2.6s' },
          { ...lft, c: '#336791', d: '3.0s' },
        ].map((l, i) => (
          <line key={i} x1={l.sx} y1={l.sy} x2={l.ex} y2={l.ey}
            stroke={l.c} strokeWidth="2" strokeDasharray="6 5" opacity="0.65"
            style={{ animation: `dashMove ${l.d} linear infinite` }}
          />
        ))}

        {/* Pulse halos */}
        <circle cx={CX} cy={CY} r={CR + 15} stroke={`${AC}1a`} strokeWidth="1.5" style={{ animation: 'pulseRing 2.8s ease-out infinite' }} />
        <circle cx={CX} cy={CY} r={CR + 32} stroke={`${AC}0c`} strokeWidth="1"   style={{ animation: 'pulseRing 2.8s ease-out infinite 0.9s' }} />

        {/* ── CENTER NODE ─────────────────────────────── */}
        <circle cx={CX} cy={CY} r={CR} fill="url(#cg3)" filter="url(#ss3)" />
        <circle cx={CX} cy={CY} r={CR} stroke={AC} strokeWidth="2" opacity="0.75" />
        <circle cx={CX-13} cy={CY-9} r="5.5" fill="white" opacity="0.9" />
        <circle cx={CX+13} cy={CY-9} r="5.5" fill="white" opacity="0.9" />
        <circle cx={CX}    cy={CY+11} r="5.5" fill="white" opacity="0.9" />
        <line x1={CX-7} y1={CY-9} x2={CX+7} y2={CY-9} stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.45" />
        <line x1={CX-10} y1={CY-4} x2={CX-3} y2={CY+7} stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.45" />
        <line x1={CX+10} y1={CY-4} x2={CX+3} y2={CY+7} stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.45" />
        <text x={CX} y={CY+31} textAnchor="middle" fontSize="11" fontWeight="800" fill="white" fontFamily="Plus Jakarta Sans, sans-serif">Agent IA</text>

        {/* Activity badge */}
        <rect x={255} y={158} width={54} height={18} rx="9" fill="#dcfce7" />
        <circle cx={266} cy={167} r="4" fill="#16a34a" style={{ animation: 'pulseDot 2s ease infinite' }} />
        <text x={273} y={171} fontSize="8.5" fontWeight="800" fill="#15803d" fontFamily="Plus Jakarta Sans, sans-serif">Actif 24/7</text>

        {/* ── GMAIL — top (240, 40) — Simple Icons path ── */}
        <circle cx={240} cy={40} r={SR} fill="white" filter="url(#ss3)" stroke="#e4e4e7" strokeWidth="1" />
        <g transform="translate(229.2,29.2) scale(0.9)">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" fill="#EA4335" />
        </g>
        <text x={240} y={61} textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#EA4335" fontFamily="Plus Jakarta Sans, sans-serif">Gmail</text>

        {/* ── HUBSPOT — right (412, 190) — Simple Icons path ── */}
        <circle cx={412} cy={190} r={SR} fill="white" filter="url(#ss3)" stroke="#e4e4e7" strokeWidth="1" />
        <g transform="translate(401.2,179.2) scale(0.9)">
          <path d="M18.164 7.93V5.084a2.198 2.198 0 001.267-1.978v-.067A2.2 2.2 0 0017.238.845h-.067a2.2 2.2 0 00-2.193 2.193v.067a2.196 2.196 0 001.252 1.973l.013.006v2.852a6.22 6.22 0 00-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 104.3 4.656l-.012.006 7.697 5.991a6.176 6.176 0 00-1.038 3.446c0 1.343.425 2.588 1.147 3.607l-.013-.02-2.342 2.343a1.968 1.968 0 00-.58-.095h-.002a2.033 2.033 0 102.033 2.033 1.978 1.978 0 00-.1-.595l.005.014 2.317-2.317a6.247 6.247 0 104.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 113.215-3.207v.002a3.206 3.206 0 01-3.207 3.207z" fill="#FF7A59" />
        </g>
        <text x={412} y={211} textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#FF7A59" fontFamily="Plus Jakarta Sans, sans-serif">HubSpot</text>

        {/* ── SLACK — bottom (240, 348) — Simple Icons path ── */}
        <circle cx={240} cy={348} r={SR} fill="white" filter="url(#ss3)" stroke="#e4e4e7" strokeWidth="1" />
        <g transform="translate(229.2,337.2) scale(0.9)">
          <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#4A154B" />
        </g>
        <text x={240} y={369} textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#4A154B" fontFamily="Plus Jakarta Sans, sans-serif">Slack</text>

        {/* ── POSTGRES — left (68, 190) — Simple Icons path ── */}
        <circle cx={68} cy={190} r={SR} fill="white" filter="url(#ss3)" stroke="#e4e4e7" strokeWidth="1" />
        <g transform="translate(57.2,179.2) scale(0.9)">
          <path d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698z" fill="#336791" />
        </g>
        <text x={68} y={211} textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#336791" fontFamily="Plus Jakarta Sans, sans-serif">Postgres</text>
      </svg>
    </div>
  );
}

// ── SECTION 1 — Hero ─────────────────────────────────────────
function Hero() {
  return (
    <section className="aia-hero-section" style={{ padding: '120px 24px 80px', background: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.025) 1px,transparent 1px)', backgroundSize: '48px 48px', maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%,black,transparent)', zIndex: 0 }} aria-hidden="true" />
      <div style={{ position: 'absolute', top: '35%', left: '50%', transform: 'translate(-50%,-50%)', width: 700, height: 350, background: `radial-gradient(ellipse,${AC}10 0%,transparent 70%)`, pointerEvents: 'none', zIndex: 0 }} aria-hidden="true" />

      <div style={{ maxWidth: 1160, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <nav aria-label="Fil d'Ariane" style={{ marginBottom: 40, fontSize: 13, color: '#a1a1aa' }}>
          <a href="/" style={{ color: '#a1a1aa', textDecoration: 'none' }}>Accueil</a>
          <span style={{ margin: '0 8px' }}>›</span>
          <a href="/services/" style={{ color: '#a1a1aa', textDecoration: 'none' }}>Services</a>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: '#09090b', fontWeight: 600 }}>Agents IA</span>
        </nav>

        <div className="aia-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-.04em', color: '#09090b', marginBottom: 20 }}>
              Agents IA sur-mesure.<br />
              <span style={{ color: AC }}>Vos employés virtuels qui décident et agissent.</span>
            </h1>

            <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.7, marginBottom: 28, maxWidth: 520 }}>
              Un agent IA Althoce n'est pas un chatbot ni un workflow. C'est un collaborateur numérique autonome : il lit une situation, raisonne dessus, et exécute des tâches complexes sur vos outils. 24h/24, sans supervision humaine continue.
            </p>

            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
              {['+758 agents en production', '+150 PME équipées', '100 % autonome'].map((t) => (
                <span key={t} style={{ display: 'inline-flex', alignItems: 'center', padding: '5px 13px', borderRadius: 9999, background: '#f4f4f5', fontSize: 13, fontWeight: 700, color: '#52525b' }}>{t}</span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="/contact" style={{ padding: '13px 26px', borderRadius: 9999, background: '#09090b', color: '#fff', fontSize: 15, fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'transform .15s,box-shadow .15s' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,.25)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}>
                Discuter de votre projet →
              </a>
              <a href="#anatomie" style={{ padding: '13px 4px', fontSize: 15, fontWeight: 700, color: '#8a8a95', textDecoration: 'none', transition: 'color .15s' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#09090b'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#8a8a95'; }}>
                Voir comment un agent fonctionne ↓
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <AgentIllustration />
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
    <section className="aia-section-pad" style={{ padding: '80px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <H2 style={{ marginBottom: 20 }}>
          Un agent IA, c'est quoi <span style={{ color: AC }}>exactement ?</span>
        </H2>

        <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.75, marginBottom: 20 }}>
          Un agent IA est un programme qui associe deux composants : un <strong>modèle de langage</strong> (GPT, Claude, Mistral, Gemini) et un <strong>accès à vos outils professionnels</strong> (mails, CRM, ERP, bases de données, API). La combinaison des deux lui permet de <strong>lire</strong> une information, <strong>raisonner</strong> dessus, puis <strong>agir</strong>, exactement comme le ferait un collaborateur humain qui aurait accès aux mêmes outils.
        </p>

        <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 36 }}>
          La différence avec un chatbot classique tient en trois mots : <strong>autonomie</strong>, <strong>raisonnement</strong>, <strong>action</strong>. Un chatbot répond à une question. Un agent IA résout un problème. Il choisit quels outils utiliser, dans quel ordre, et corrige sa trajectoire si un imprévu survient. C'est ce qu'on appelle l'<strong>automatisation agentique</strong>.
        </p>

        <div style={{ background: '#09090b', borderRadius: 20, padding: '32px 36px', border: '1px solid #1e1e1e' }} className="aia-darkblock">
          <div style={{ fontSize: 12, fontWeight: 800, color: AC, textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 12 }}>En une phrase</div>
          <p style={{ fontSize: 17, fontWeight: 600, color: '#e4e4e7', lineHeight: 1.65, margin: 0 }}>
            Un agent IA, c'est un employé virtuel qui <span style={{ color: AC }}>pense avant d'agir</span>, qui sait utiliser vos outils, et qui apprend de ses erreurs.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── SECTION 3 — Comparatif ────────────────────────────────────
const compareRows = [
  { criterion: 'Nature', chatbot: 'Réponses scriptées', workflow: 'Chaîne de règles si/alors', agent: 'Raisonnement autonome' },
  { criterion: 'Prend des décisions ?', chatbot: 'Non', workflow: 'Non (règles fixes)', agent: 'Oui' },
  { criterion: 'Gère les cas imprévus ?', chatbot: 'Non', workflow: 'Non (il plante)', agent: 'Oui, il s\'adapte' },
  { criterion: 'Lit des documents non structurés ?', chatbot: 'Non', workflow: 'Difficilement', agent: 'Oui (PDF, mails, images)' },
  { criterion: 'Apprend de ses erreurs ?', chatbot: 'Non', workflow: 'Non', agent: 'Oui (via logs + retraining)' },
  { criterion: 'Exemple typique', chatbot: 'FAQ sur site vitrine', workflow: 'Slack quand un lead arrive', agent: 'Traiter un mail de A à Z : lire, comprendre, répondre, mettre à jour le CRM' },
];

function ComparisonTable() {
  return (
    <section className="aia-section-pad" style={{ padding: '80px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <H2 style={{ marginBottom: 12 }}>Chatbot, workflow, agent IA :<br /><span style={{ color: AC }}>quelle différence ?</span></H2>
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 560, margin: '0 auto', lineHeight: 1.65 }}>
            Ces trois technologies résolvent des problèmes très différents. Voici le comparatif que nous donnons à tous nos clients au démarrage d'une mission.
          </p>
        </div>

        <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid #e4e4e7', marginBottom: 24 }}>
          <div className="aia-table-header" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', background: '#09090b' }}>
            <div style={{ padding: '14px 18px', fontSize: 12, fontWeight: 800, color: '#8a8a95', textTransform: 'uppercase', letterSpacing: '.1em' }}>Critère</div>
            <div style={{ padding: '14px 18px', fontSize: 12, fontWeight: 800, color: '#8a8a95', textTransform: 'uppercase', letterSpacing: '.1em', borderLeft: '1px solid #1e1e1e' }}>Chatbot classique</div>
            <div style={{ padding: '14px 18px', fontSize: 12, fontWeight: 800, color: '#8a8a95', textTransform: 'uppercase', letterSpacing: '.1em', borderLeft: '1px solid #1e1e1e' }}>Workflow (Zapier, Make)</div>
            <div style={{ padding: '14px 18px', fontSize: 12, fontWeight: 800, color: AC, textTransform: 'uppercase', letterSpacing: '.1em', borderLeft: '1px solid #1e1e1e' }}>Agent IA (Althoce)</div>
          </div>
          {compareRows.map((row, i) => (
            <div key={i} className="aia-table-row" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', borderTop: '1px solid #e4e4e7', background: i % 2 === 0 ? '#fff' : '#fafafa' }}>
              <div style={{ padding: '13px 18px', fontSize: 14, fontWeight: 700, color: '#09090b' }}>{row.criterion}</div>
              <div className="aia-table-cell aia-col-chatbot" style={{ padding: '13px 18px', fontSize: 14, color: '#8a8a95', borderLeft: '1px solid #e4e4e7' }}>{row.chatbot}</div>
              <div className="aia-table-cell aia-col-workflow" style={{ padding: '13px 18px', fontSize: 14, color: '#8a8a95', borderLeft: '1px solid #e4e4e7' }}>{row.workflow}</div>
              <div className="aia-table-cell aia-col-agent" style={{ padding: '13px 18px', fontSize: 14, color: '#09090b', fontWeight: 600, borderLeft: `2px solid ${AC}22`, background: i % 2 === 0 ? '#f0f7ff' : '#e8f0fe' }}>{row.agent}</div>
            </div>
          ))}
        </div>

        <p style={{ fontSize: 14, color: '#a1a1aa', lineHeight: 1.65, textAlign: 'center', maxWidth: 680, margin: '0 auto' }}>
          Les chatbots et les workflows ont leur utilité, mais ils s'arrêtent dès qu'un cas sort du scénario prévu. Un agent IA continue, parce qu'il ne suit pas un script, il suit un objectif.
        </p>
      </div>
    </section>
  );
}

// ── SECTION 4 — Anatomie ─────────────────────────────────────
const anatomyBriques = [
  {
    n: '01',
    label: 'Le cerveau (LLM)',
    pitch: 'Il comprend, raisonne, et décide.',
    detail: 'Un modèle de langage (Claude, GPT-4, Mistral Large, selon vos contraintes de souveraineté). C\'est lui qui comprend la situation, raisonne, et décide. Le choix du modèle dépend de la complexité des tâches et de vos exigences de confidentialité.',
    color: '#7c3aed',
  },
  {
    n: '02',
    label: 'La mémoire',
    pitch: 'Il se souvient de tout ce qui compte.',
    detail: 'Vecteurs et bases de connaissances (RAG). L\'agent se souvient des précédents dossiers, connaît vos procédures internes, accède à vos documents sans que vous ayez à les lui redonner à chaque fois.',
    color: '#16a34a',
  },
  {
    n: '03',
    label: 'Les outils (tools)',
    pitch: 'Il agit sur vos systèmes réels.',
    detail: 'Chaque agent dispose d\'un arsenal d\'outils : lire un mail, écrire dans un CRM, envoyer un Slack, lancer une requête SQL, générer un PDF. Nous développons les outils manquants sur-mesure.',
    color: '#ea580c',
  },
  {
    n: '04',
    label: "L'orchestrateur",
    pitch: 'Il choisit quoi faire à chaque étape.',
    detail: 'Une logique de prise de décision qui sélectionne, à chaque étape, quelle brique utiliser. Basée sur n8n, LangGraph ou notre framework maison selon la complexité. Chaque décision est traçable.',
    color: AC,
  },
  {
    n: '05',
    label: 'Les garde-fous',
    pitch: 'L\'humain reste le pilote.',
    detail: 'Validation humaine sur les actions sensibles, filtres de contenu, limites de coût, journalisation exhaustive. L\'agent est encadré, auditable, contrôlable à tout moment.',
    color: '#dc2626',
  },
];

function AnatomySVG() {
  return (
    <svg viewBox="0 0 300 280" fill="none" style={{ width: '100%', maxWidth: 300, height: 'auto' }}>
      {/* LLM center */}
      <circle cx="150" cy="140" r="46" fill={`${AC}12`} stroke={AC} strokeWidth="1.8" />
      <text x="150" y="136" textAnchor="middle" fontSize="10" fontWeight="800" fill={AC} fontFamily="Plus Jakarta Sans, sans-serif">LLM</text>
      <text x="150" y="150" textAnchor="middle" fontSize="8" fill={`${AC}99`} fontFamily="Plus Jakarta Sans, sans-serif">Cerveau</text>

      {/* Lines */}
      <line x1="150" y1="94" x2="150" y2="56" stroke="#e4e4e7" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="191" y1="118" x2="240" y2="90" stroke="#e4e4e7" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="191" y1="162" x2="240" y2="190" stroke="#e4e4e7" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="109" y1="162" x2="60" y2="190" stroke="#e4e4e7" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="109" y1="118" x2="60" y2="90" stroke="#e4e4e7" strokeWidth="1.5" strokeDasharray="4 3" />

      {/* Mémoire - top */}
      <circle cx="150" cy="36" r="24" fill="#16a34a0c" stroke="#16a34a" strokeWidth="1.4" />
      <text x="150" y="32" textAnchor="middle" fontSize="8" fontWeight="800" fill="#16a34a" fontFamily="Plus Jakarta Sans, sans-serif">Mémoire</text>
      <text x="150" y="44" textAnchor="middle" fontSize="7" fill="#16a34a99" fontFamily="Plus Jakarta Sans, sans-serif">RAG</text>

      {/* Outils - top-right */}
      <circle cx="258" cy="74" r="24" fill="#ea580c0c" stroke="#ea580c" strokeWidth="1.4" />
      <text x="258" y="70" textAnchor="middle" fontSize="8" fontWeight="800" fill="#ea580c" fontFamily="Plus Jakarta Sans, sans-serif">Outils</text>
      <text x="258" y="82" textAnchor="middle" fontSize="7" fill="#ea580c99" fontFamily="Plus Jakarta Sans, sans-serif">Tools</text>

      {/* Garde-fous - bottom-right */}
      <circle cx="258" cy="206" r="24" fill="#dc26260c" stroke="#dc2626" strokeWidth="1.4" />
      <text x="258" y="201" textAnchor="middle" fontSize="7.5" fontWeight="800" fill="#dc2626" fontFamily="Plus Jakarta Sans, sans-serif">Garde</text>
      <text x="258" y="213" textAnchor="middle" fontSize="7.5" fontWeight="800" fill="#dc2626" fontFamily="Plus Jakarta Sans, sans-serif">-fous</text>

      {/* Orchestrateur - bottom-left */}
      <circle cx="42" cy="206" r="24" fill={`${AC}0c`} stroke={AC} strokeWidth="1.4" />
      <text x="42" y="201" textAnchor="middle" fontSize="7.5" fontWeight="800" fill={AC} fontFamily="Plus Jakarta Sans, sans-serif">Orches</text>
      <text x="42" y="213" textAnchor="middle" fontSize="7.5" fontWeight="800" fill={AC} fontFamily="Plus Jakarta Sans, sans-serif">-trateur</text>

      {/* ... - top-left (empty slot, symmetry) */}
      <circle cx="42" cy="74" r="24" fill="#7c3aed0c" stroke="#7c3aed" strokeWidth="1.4" />
      <text x="42" y="69" textAnchor="middle" fontSize="7.5" fontWeight="800" fill="#7c3aed" fontFamily="Plus Jakarta Sans, sans-serif">Modèle</text>
      <text x="42" y="81" textAnchor="middle" fontSize="7.5" fontWeight="800" fill="#7c3aed" fontFamily="Plus Jakarta Sans, sans-serif">LLM</text>
    </svg>
  );
}

function Anatomy() {
  const [open, setOpen] = useState<number | null>(0);
  const [ref, visible] = useInView(0.08);
  return (
    <section id="anatomie" ref={ref} className="aia-section-pad" style={{ padding: '80px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <H2 style={{ marginBottom: 12 }}>Anatomie d'un agent IA : <span style={{ color: AC }}>les 5 briques techniques</span></H2>
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 520, margin: '0 auto', lineHeight: 1.65 }}>
            Un agent IA Althoce repose sur cinq briques que nous assemblons sur-mesure pour chaque mission.
          </p>
        </div>

        <div className="aia-anatomy-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'flex-start' }}>
          {/* SVG */}
          <div style={{ display: 'flex', justifyContent: 'center', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all .6s ease' }}>
            <AnatomySVG />
          </div>

          {/* Accordion */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {anatomyBriques.map((b, i) => (
              <div
                key={i}
                style={{ borderRadius: 14, border: `1.5px solid ${open === i ? b.color + '40' : '#e4e4e7'}`, background: open === i ? `${b.color}06` : '#fff', overflow: 'hidden', transition: 'all .25s', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(20px)', transitionDelay: `${i * .08}s` }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 14, padding: '16px 20px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit' }}
                >
                  <span style={{ fontSize: 12, fontWeight: 900, color: b.color, minWidth: 28, letterSpacing: '.04em' }}>{b.n}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 15, fontWeight: 800, color: '#09090b', marginBottom: 2 }}>{b.label}</div>
                    <div style={{ fontSize: 13, color: '#8a8a95' }}>{b.pitch}</div>
                  </div>
                  <span style={{ fontSize: 10, color: b.color, transform: open === i ? 'rotate(180deg)' : 'none', transition: 'transform .2s', flexShrink: 0 }}>▼</span>
                </button>
                {open === i && (
                  <div style={{ padding: '0 20px 16px 62px', fontSize: 14, color: '#52525b', lineHeight: 1.7, borderTop: `1px solid ${b.color}20` }}>
                    <p style={{ marginTop: 12 }}>{b.detail}</p>
                  </div>
                )}
              </div>
            ))}

            <div style={{ marginTop: 16, padding: '16px 20px', borderRadius: 14, background: '#09090b', border: '1px solid #1e1e1e' }}>
              <div style={{ fontSize: 10, fontWeight: 800, color: AC, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 8 }}>Pour les DSI</div>
              <p style={{ fontSize: 13, color: '#8a8a95', lineHeight: 1.65, margin: 0 }}>
                Nous utilisons n8n comme backbone d'orchestration, avec des nœuds custom en TypeScript/Python. LLM via API (OpenAI, Anthropic, Mistral) ou auto-hébergés selon vos contraintes. <strong style={{ color: '#d4d4d8' }}>Code source et documentation à 100 % au client.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Visual cards for Typologie ────────────────────────────────
function CardCommercial() {
  return (
    <div style={{ background: '#fff', borderRadius: 18, border: '1px solid #e4e4e7', padding: '20px 22px', boxShadow: '0 4px 24px rgba(0,0,0,.06)', maxWidth: 340 }}>
      <div style={{ fontSize: 9, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 14 }}>Lead entrant · traitement automatique</div>
      {[
        { step: '01', label: 'Enrichissement LinkedIn', status: 'done', val: 'Trouvé' },
        { step: '02', label: 'Score qualification', status: 'done', val: '87/100' },
        { step: '03', label: 'Brief commercial', status: 'done', val: '45 sec' },
        { step: '04', label: 'Ajout CRM + notif Slack', status: 'active', val: 'En cours' },
      ].map((row, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <div style={{ width: 20, height: 20, borderRadius: '50%', background: row.status === 'done' ? '#dcfce7' : '#f0f7ff', border: `1.5px solid ${row.status === 'done' ? '#16a34a' : AC}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            {row.status === 'done' ? (
              <svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 5L4 7L8 3" stroke="#16a34a" strokeWidth="1.8" fill="none" strokeLinecap="round" /></svg>
            ) : (
              <div style={{ width: 5, height: 5, borderRadius: '50%', background: AC, animation: 'pulseDot 2s ease infinite' }} />
            )}
          </div>
          <span style={{ fontSize: 12, color: '#374151', flex: 1 }}>{row.label}</span>
          <span style={{ fontSize: 10, fontWeight: 800, color: row.status === 'done' ? '#16a34a' : AC }}>{row.val}</span>
        </div>
      ))}
      <div style={{ marginTop: 12, padding: '8px 12px', borderRadius: 9, background: '#f0f7ff', border: `1px solid ${AC}20`, display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 12, color: '#52525b' }}>Leads qualifiés aujourd'hui</span>
        <span style={{ fontSize: 14, fontWeight: 800, color: AC }}>+38</span>
      </div>
    </div>
  );
}

function CardOperationnel() {
  return (
    <div style={{ background: '#fff', borderRadius: 18, border: '1px solid #e4e4e7', padding: '20px 22px', boxShadow: '0 4px 24px rgba(0,0,0,.06)', maxWidth: 340 }}>
      <div style={{ fontSize: 9, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 14 }}>Facture reçue · extraction automatique</div>
      <div style={{ background: '#fafafa', borderRadius: 10, padding: '12px 14px', marginBottom: 12, border: '1px solid #f1f5f9' }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: '#a1a1aa', marginBottom: 8 }}>Données extraites</div>
        {[
          { k: 'Montant TTC', v: '1 428,00 €' },
          { k: 'TVA (20%)', v: '238,00 €' },
          { k: 'Échéance', v: '30 juil. 2026' },
          { k: 'Fournisseur', v: 'Acme SAS' },
        ].map((row, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 12 }}>
            <span style={{ color: '#8a8a95' }}>{row.k}</span>
            <span style={{ color: '#09090b', fontWeight: 700 }}>{row.v}</span>
          </div>
        ))}
      </div>
      <div style={{ padding: '8px 12px', borderRadius: 9, background: '#fff7ed', border: '1px solid #fed7aa', display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#ea580c', flexShrink: 0 }} />
        <span style={{ fontSize: 12, color: '#9a3412' }}>En attente validation DAF</span>
      </div>
    </div>
  );
}

function CardSupport() {
  return (
    <div style={{ background: '#fff', borderRadius: 18, border: '1px solid #e4e4e7', padding: '20px 22px', boxShadow: '0 4px 24px rgba(0,0,0,.06)', maxWidth: 340 }}>
      <div style={{ fontSize: 9, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 14 }}>Ticket #4821 · résolution en autonomie</div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <span style={{ padding: '3px 9px', borderRadius: 9999, background: '#f0f7ff', fontSize: 10, fontWeight: 700, color: AC }}>Retour produit</span>
        <span style={{ padding: '3px 9px', borderRadius: 9999, background: '#f4f4f5', fontSize: 10, fontWeight: 700, color: '#52525b' }}>Priorité normale</span>
      </div>
      <div style={{ background: '#fafafa', borderRadius: 10, padding: '12px 14px', marginBottom: 12, border: '1px solid #f1f5f9', fontSize: 13, color: '#374151', lineHeight: 1.65 }}>
        Bonjour Mme Martin, votre demande de retour #4821 a bien été enregistrée. Votre bon de retour est disponible ci-joint. Remboursement sous 5 jours ouvrés.
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '5px 10px', borderRadius: 9999, background: '#dcfce7', border: '1px solid #86efac' }}>
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#16a34a' }} />
          <span style={{ fontSize: 10, fontWeight: 800, color: '#15803d' }}>Résolu en 1min 48s</span>
        </div>
        <span style={{ fontSize: 10, color: '#a1a1aa' }}>Aucune escalade humaine</span>
      </div>
    </div>
  );
}

// ── SECTION 5 — Trois types zig-zag ──────────────────────────
const agentTypes = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="12" fill={`${AC}15`}/><path d="M12 26V14h16v12" stroke={AC} strokeWidth="1.8" strokeLinecap="round"/><path d="M8 26h24M16 26v-5h8v5" stroke={AC} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    type: 'Agent commercial',
    mission: 'Qualifier les leads entrants, enrichir les contacts, préparer les appels, relancer les dossiers dormants, assister vos commerciaux avant, pendant et après les rendez-vous.',
    example: 'Un lead arrive par formulaire. L\'agent l\'enrichit (LinkedIn + SIRENE + signaux d\'achat), le score, rédige un brief de 3 lignes pour le commercial, puis suit la relance jusqu\'à l\'entrée en pipe CRM.',
    benefit: '+30 % de leads qualifiés · −50 % de temps de préparation d\'appel',
    href: '/agent-ia/commercial/',
    visual: <CardCommercial />,
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="12" fill="#16a34a15"/><rect x="11" y="11" width="18" height="18" rx="3" stroke="#16a34a" strokeWidth="1.8"/><path d="M15 17h10M15 21h10M15 25h6" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round"/></svg>
    ),
    type: 'Agent opérationnel',
    mission: 'Absorber les tâches administratives répétitives (lecture de documents, saisie, rapprochement, reporting) qui saturent les équipes.',
    example: 'L\'agent reçoit les factures fournisseurs par mail, extrait les données (TTC, TVA, échéance, IBAN), rapproche avec le bon de commande, soumet à validation en 1 clic au DAF, met à jour la comptabilité.',
    benefit: '−80 % de temps de saisie · 0 erreur humaine sur les tâches automatisées',
    href: '/agent-ia/operations/',
    visual: <CardOperationnel />,
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="12" fill="#7c3aed15"/><path d="M12 22c0-4.42 3.58-8 8-8s8 3.58 8 8v3H12v-3z" stroke="#7c3aed" strokeWidth="1.8"/><path d="M17 25v4M23 25v4" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round"/></svg>
    ),
    type: 'Agent support',
    mission: 'Prendre en charge les demandes client de niveau 1 et 2, escalader intelligemment les cas complexes, apprendre de chaque interaction.',
    example: 'L\'agent traite les tickets entrants, identifie l\'intention (réclamation, question technique, résiliation), consulte la base documentaire, rédige une réponse dans le ton de la marque, et ne fait remonter à l\'humain que les cas sensibles.',
    benefit: '70 % des tickets résolus en autonomie · satisfaction client +12 points',
    href: '/agent-ia/service-client/',
    visual: <CardSupport />,
  },
];

function Typologie() {
  const [ref, visible] = useInView(0.06);
  return (
    <section ref={ref} className="aia-section-pad" style={{ padding: '80px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <H2 style={{ marginBottom: 12 }}>Trois grandes familles d'agents IA, <span style={{ color: AC }}>selon la mission.</span></H2>
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 520, margin: '0 auto', lineHeight: 1.65 }}>
            Selon ce que vous voulez automatiser, l'agent prend une forme différente. Voici les trois archétypes que nous déployons chez nos clients.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 72 }}>
          {agentTypes.map((t, i) => {
            const isEven = i % 2 === 0;
            const textBlock = (
              <div style={{ flex: 1, opacity: visible ? 1 : 0, transform: visible ? 'none' : `translateX(${isEven ? -24 : 24}px)`, transition: `all .7s ${i * .15}s ease` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                  {t.icon}
                  <h3 style={{ fontSize: 'clamp(20px,2.5vw,28px)', fontWeight: 800, color: '#09090b', letterSpacing: '-.03em', margin: 0 }}>{t.type}</h3>
                </div>
                <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 16 }}>
                  <strong>Mission :</strong> {t.mission}
                </p>
                <p style={{ fontSize: 15, color: '#8a8a95', lineHeight: 1.7, marginBottom: 20 }}>
                  <strong>Exemple :</strong> {t.example}
                </p>
                <div style={{ padding: '10px 16px', borderRadius: 10, background: '#fafafa', border: '1px solid #e4e4e7', fontSize: 14, fontWeight: 700, color: '#09090b', marginBottom: 20 }}>
                  📈 {t.benefit}
                </div>
                <a href={t.href} style={{ fontSize: 15, fontWeight: 700, color: AC, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'gap .2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.gap = '10px'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.gap = '6px'; }}>
                  En savoir plus →
                </a>
              </div>
            );
            const visualBlock = (
              <div style={{ flex: 1, display: 'flex', justifyContent: 'center', opacity: visible ? 1 : 0, transform: visible ? 'none' : `translateX(${isEven ? 24 : -24}px)`, transition: `all .7s ${i * .15 + .1}s ease` }}>
                {t.visual}
              </div>
            );
            return (
              <div key={i} className="aia-zigzag-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
                {isEven ? <>{textBlock}{visualBlock}</> : <>{visualBlock}{textBlock}</>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── SECTION 6 — Marquee métiers ───────────────────────────────
function MetiersMarquee() {
  return (
    <section style={{ padding: '56px 0', background: '#fafafa', borderTop: '1px solid #e4e4e7', overflow: 'hidden' }}>
      <div style={{ textAlign: 'center', marginBottom: 24, padding: '0 24px' }}>
        <H2 style={{ marginBottom: 8 }}>Un agent IA pour <span style={{ color: AC }}>chaque métier.</span></H2>
        <p style={{ fontSize: 16, color: '#52525b', maxWidth: 480, margin: '0 auto', lineHeight: 1.65 }}>
          Au-delà des trois grandes familles, chaque métier a ses agents spécialisés.
        </p>
      </div>
      <div style={{ position: 'relative', marginTop: 32 }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to right,#fafafa,transparent)', zIndex: 2 }} aria-hidden="true" />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to left,#fafafa,transparent)', zIndex: 2 }} aria-hidden="true" />
        <div className="ticker-slow" role="marquee" aria-label="Agents IA par métier" style={{ display: 'flex', gap: 10 }}>
          {[...agentTags, ...agentTags].map((tag, i) => (
            <a key={i} href={tag.href} style={{ flexShrink: 0, padding: '8px 18px', borderRadius: 9999, background: '#fff', border: '1px solid #e4e4e7', fontSize: 14, fontWeight: 600, color: '#52525b', whiteSpace: 'nowrap', textDecoration: 'none', transition: 'all .15s' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#f0f7ff'; e.currentTarget.style.color = AC; e.currentTarget.style.borderColor = `${AC}30`; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#52525b'; e.currentTarget.style.borderColor = '#e4e4e7'; }}>
              {tag.name}
            </a>
          ))}
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: 28 }}>
        <a href="/agent-ia/" style={{ fontSize: 15, fontWeight: 700, color: AC, textDecoration: 'none', transition: 'opacity .15s' }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = '.7'; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}>
          Voir toutes nos automatisations métier →
        </a>
      </div>
    </section>
  );
}

// ── Step visual cards (same as home / EmployeIA) ──────────────
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
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 500, margin: '0 auto', lineHeight: 1.65 }}>
            Quatre étapes courtes. De l'<a href="/services/audit-ia/" style={{ color: AC, textDecoration: 'none', fontWeight: 700 }}>audit</a> à la mise en production en 6 à 12 semaines.
          </p>
        </div>
        <div className="v2-grid4 aia-step-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
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
        <div className="v2-grid2 aia-pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 24, marginBottom: 36, maxWidth: 900, margin: '0 auto 36px' }}>
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
        <div className="aia-security-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 64, alignItems: 'center' }}>
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
          <H2 style={{ marginBottom: 12 }}>Vos questions sur les agents IA, <span style={{ color: AC }}>nos réponses directes.</span></H2>
          <p style={{ fontSize: 16, color: '#52525b' }}>Dix questions que tout dirigeant pose avant de lancer un premier agent IA.</p>
        </div>
        <FAQAccordion items={faqAgents} />
      </div>
    </section>
  );
}

// ── Page root ─────────────────────────────────────────────────
export default function AgentsIAPageClient() {
  return (
    <main>
      <style>{`
        @keyframes dashMove {
          from { stroke-dashoffset: 0; }
          to   { stroke-dashoffset: -18; }
        }
        @keyframes pulseRing {
          0%   { opacity: .6; transform: scale(1); }
          100% { opacity: 0;  transform: scale(1.15); }
        }
        @media (max-width: 900px) {
          .aia-hero-grid     { grid-template-columns: 1fr !important; }
          .aia-anatomy-grid  { grid-template-columns: 1fr !important; }
          .aia-security-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .aia-zigzag-row    { grid-template-columns: 1fr !important; gap: 32px !important; }
          .aia-pricing-grid  { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .aia-table-header  { display: none !important; }
          .aia-table-row     { grid-template-columns: 1fr !important; border-radius: 12px; border: 1px solid #e4e4e7 !important; margin-bottom: 10px; overflow: hidden; }
          .aia-col-chatbot, .aia-col-workflow { border-left: none !important; background: #fafafa !important; }
          .aia-col-agent     { border-left: none !important; border-top: 2px solid #2563eb22 !important; }
          .aia-table-cell::before { display: block !important; }
        }
        @media (max-width: 600px) {
          .aia-hero-section  { padding: 88px 16px 48px !important; }
          .aia-section-pad   { padding: 56px 16px !important; }
          .aia-step-grid     { grid-template-columns: 1fr !important; }
          .aia-darkblock     { padding: 24px 20px !important; }
        }
        .aia-col-chatbot::before  { content: 'Chatbot classique'; display: none; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: .08em; color: #52525b; margin-bottom: 4px; }
        .aia-col-workflow::before { content: 'Workflow (Zapier, Make)'; display: none; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: .08em; color: #52525b; margin-bottom: 4px; }
        .aia-col-agent::before    { content: 'Agent IA (Althoce)'; display: none; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: .08em; color: #2563eb; margin-bottom: 4px; }
      `}</style>
      <Hero />
      <TrustLogos />
      <Definition />
      <ComparisonTable />
      <Anatomy />
      <Typologie />
      <MetiersMarquee />
      <Methodology />
      <Pricing />
      <Security />
      <FAQ />
    </main>
  );
}
