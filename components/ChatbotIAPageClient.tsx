'use client';

import React, { useState, useEffect, useRef } from 'react';
import { agentTags, steps, securityItems } from '@/lib/data';
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

const faqChatbotIA: FAQv2Item[] = [
  { q: "Quelle est la différence entre un chatbot et un agent IA chez Althoce ?", a: "Un chatbot répond aux questions à partir d'une base de connaissances. Un agent IA répond ET prend des actions (créer un ticket, envoyer un email, prendre un RDV, mettre à jour une base). Un chatbot RAG est une porte d'entrée typique vers un agent IA, qui peut lui-même évoluer vers un employé IA." },
  { q: "Comment évite-t-on les hallucinations (réponses inventées) ?", a: "Trois garde-fous : (1) la réponse doit s'appuyer sur les passages remontés depuis votre base, (2) si aucun passage pertinent n'est trouvé, le chatbot escalade au lieu d'inventer, (3) un filtre vérifie que la réponse ne mentionne pas d'éléments absents des sources." },
  { q: "Combien coûte un chatbot IA chez Althoce ?", a: "Un chatbot RAG simple sur une base de connaissances unique (FAQ + docs ou intranet) est facturé 1 400 € HT (tarif fixe, 1 semaine de delivery). Pour un chatbot multi-bases, multilingue, ou avec actions complexes, c'est un système sur devis. Tout démarre par 30 minutes offertes avec un expert." },
  { q: "En combien de temps un chatbot RAG est-il opérationnel ?", a: "1 semaine pour un chatbot simple sur 1 base de connaissances. 2 à 4 semaines pour un chatbot multi-bases ou multilingue. La vitesse dépend principalement de la qualité de votre base de connaissances." },
  { q: "Le chatbot peut-il s'intégrer à notre site ou intranet existant ?", a: "Oui. Intégration en 2 lignes de code (script embed) ou via API si vous voulez un design custom complet. Compatibles : Next.js, WordPress, Shopify, Webflow, intranets propriétaires, Sharepoint, Notion. Pour les intégrations plus complexes au SI, voir notre service Intégration IA." },
  { q: "Est-ce que le chatbot apprend dans le temps ?", a: "Oui, mais via mise à jour de la base de connaissances, pas par réécriture d'arbres de décision. Nous monitorons les conversations (anonymisées, RGPD) pour identifier les questions fréquentes mal couvertes et alimenter la base automatiquement." },
];

// ── Chatbot Mockup ────────────────────────────────────────────
function ChatbotMockup() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (step >= 3) return;
    const id = setTimeout(() => setStep(s => s + 1), step === 0 ? 600 : 1400);
    return () => clearTimeout(id);
  }, [step]);

  const messages = [
    { from: 'user', text: 'Quels sont vos délais de livraison ?' },
    { from: 'bot', text: "D'après notre page Conditions de livraison, les délais standard sont 48h en France métropolitaine. Source : CGV, section 4.", source: true },
    { from: 'user', text: 'Et pour la Belgique ?' },
    { from: 'bot', text: 'Pour la Belgique, comptez 3 à 5 jours ouvrés. Source : CGV internationale, section 4.2.', source: true },
  ];

  return (
    <div style={{ background: '#f8fafc', borderRadius: 20, border: '1px solid #e4e4e7', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,.08)', maxWidth: 420, width: '100%' }}>
      {/* Header */}
      <div style={{ background: '#09090b', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 32, height: 32, borderRadius: '50%', background: `linear-gradient(135deg,${AC},#60a5fa)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, fontWeight: 800, color: '#fff', flexShrink: 0 }}>A</div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>Althoce Assistant</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, color: '#8a8a95' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
            En ligne · RAG activé
          </div>
        </div>
      </div>

      {/* Messages */}
      <div style={{ padding: '20px 16px', display: 'flex', flexDirection: 'column', gap: 12, minHeight: 260 }}>
        {messages.slice(0, step + 1).map((msg, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              justifyContent: msg.from === 'user' ? 'flex-end' : 'flex-start',
              opacity: 1,
              animation: 'fadeUp .3s ease',
            }}
          >
            <div style={{
              maxWidth: '82%',
              padding: '10px 14px',
              borderRadius: msg.from === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
              background: msg.from === 'user' ? '#09090b' : '#fff',
              border: msg.from === 'bot' ? '1px solid #e4e4e7' : 'none',
              fontSize: 14,
              color: msg.from === 'user' ? '#fff' : '#374151',
              lineHeight: 1.65,
            }}>
              {msg.text}
              {msg.source && (
                <div style={{ marginTop: 6, paddingTop: 6, borderTop: `1px solid ${AC}20`, fontSize: 10, color: AC, fontWeight: 700 }}>
                  Source citée
                </div>
              )}
            </div>
          </div>
        ))}
        {step < 3 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '8px 14px' }}>
            {[0,1,2].map(i => (
              <div key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: AC, opacity: 0.5, animation: `pulseDot 1.2s ${i * .2}s ease infinite` }} />
            ))}
          </div>
        )}
      </div>

      {/* Input */}
      <div style={{ padding: '12px 16px', borderTop: '1px solid #e4e4e7', display: 'flex', gap: 8 }}>
        <div style={{ flex: 1, background: '#fff', border: '1px solid #e4e4e7', borderRadius: 9999, padding: '9px 14px', fontSize: 14, color: '#a1a1aa' }}>
          Posez votre question...
        </div>
        <div style={{ width: 36, height: 36, borderRadius: '50%', background: AC, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M13 7L1 1l3.5 6L1 13l12-6z" fill="#fff" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// ── SECTION 1 — Hero ─────────────────────────────────────────
function Hero() {
  return (
    <section className="cia-hero-section" style={{ padding: '120px 24px 80px', background: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.025) 1px,transparent 1px)', backgroundSize: '48px 48px', maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%,black,transparent)', zIndex: 0 }} aria-hidden="true" />
      <div style={{ position: 'absolute', top: '35%', left: '50%', transform: 'translate(-50%,-50%)', width: 700, height: 350, background: `radial-gradient(ellipse,${AC}12 0%,transparent 70%)`, pointerEvents: 'none', zIndex: 0 }} aria-hidden="true" />

      <div style={{ maxWidth: 1160, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <nav aria-label="Fil d'Ariane" style={{ marginBottom: 40, fontSize: 13, color: '#a1a1aa' }}>
          <a href="/" style={{ color: '#a1a1aa', textDecoration: 'none' }}>Accueil</a>
          <span style={{ margin: '0 8px' }}>›</span>
          <a href="/services/" style={{ color: '#a1a1aa', textDecoration: 'none' }}>Services</a>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: '#09090b', fontWeight: 600 }}>Chatbot IA</span>
        </nav>

        <div className="cia-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: 'clamp(28px,4vw,50px)', fontWeight: 800, lineHeight: 1.09, letterSpacing: '-.04em', color: '#09090b', marginBottom: 20 }}>
              Chatbot IA RAG : pas un chatbot scripté.<br />
              <span style={{ color: AC }}>Un assistant ancré sur votre vraie connaissance.</span>
            </h1>

            <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.7, marginBottom: 28 }}>
              Un chatbot scripté répond aux questions prévues, panique sur les autres. Un chatbot RAG ancré sur votre base de connaissances répond à toutes les questions couvertes, cite ses sources, et escalade quand il ne sait pas.
            </p>

            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
              {['+758 agents en production', 'Sources citées dans chaque réponse', '100 % auto-hébergeable'].map((t) => (
                <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '5px 13px', borderRadius: 9999, background: '#f4f4f5', fontSize: 13, fontWeight: 700, color: '#52525b' }}>{t}</span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="/contact" style={{ padding: '13px 26px', borderRadius: 9999, background: '#09090b', color: '#fff', fontSize: 15, fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'transform .15s,box-shadow .15s' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,.25)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}>
                Discuter de votre projet →
              </a>
              <a href="#architecture" style={{ padding: '13px 4px', fontSize: 15, fontWeight: 700, color: '#8a8a95', textDecoration: 'none', transition: 'color .15s' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#09090b'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#8a8a95'; }}>
                Voir l'architecture RAG ↓
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ChatbotMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── SECTION 2 — Définition ────────────────────────────────────
function Definition() {
  return (
    <section className="cia-section-pad" style={{ padding: '80px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <H2 style={{ marginBottom: 20 }}>
          Chatbot IA, assistant IA, employé IA : <span style={{ color: AC }}>trois choses différentes</span>
        </H2>

        <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.75, marginBottom: 16 }}>
          Le mot "chatbot" est utilisé pour tout et n'importe quoi en 2026. Chez Althoce, nous distinguons clairement trois formats. Un <strong>chatbot IA</strong> est un agent conversationnel ciblé sur une fonction (FAQ visiteur, qualification prospect, support N0 simple). Il ne sort pas de son périmètre. Il cite ses sources. Il escalade quand il ne sait pas. Un <strong>assistant IA</strong> est un agent plus large qui peut prendre des actions (créer un ticket, envoyer un email, prendre un RDV) en plus de répondre. Un <strong>employé IA</strong> couvre un poste entier, avec mémoire long-terme, identité, et rituels d'équipe — voir <a href="/services/employe-ia/" style={{ color: AC, fontWeight: 600, textDecoration: 'none' }}>Employé IA</a> pour la description complète.
        </p>

        <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 36 }}>
          Pour la plupart de nos clients PME en 2026, le bon point d'entrée IA est un chatbot RAG. Tarif fixe <strong style={{ color: '#09090b' }}>1 400 € HT</strong> (cas simple, 1 semaine de delivery). C'est un projet bordé, mesurable, à fort ROI immédiat. Quand le besoin grandit, le chatbot évolue vers un <a href="/services/agents-ia/" style={{ color: AC, fontWeight: 600, textDecoration: 'none' }}>agent IA</a> capable d'actions, puis vers un employé IA support.
        </p>

        {/* DarkBlock */}
        <div className="cia-darkblock" style={{ background: '#09090b', borderRadius: 20, padding: '32px 36px', border: '1px solid #1e1e1e' }}>
          <div style={{ fontSize: 14, fontWeight: 800, color: AC, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 20 }}>
            Chatbot scripté vs chatbot RAG : la différence en 30 secondes
          </div>
          {[
            { label: 'Chatbot scripté', desc: 'Un arbre de décision. Vous prévoyez les questions, vous écrivez les réponses. Résultat : votre visiteur pose une question imprévue, le chatbot répond "Je n\'ai pas compris" et le visiteur part frustré.' },
            { label: 'Chatbot RAG', desc: 'Lit votre base de connaissances en temps réel, comprend la question même reformulée, cite les sources, escalade vers un humain si la réponse n\'est pas couverte. Fini le "Je n\'ai pas compris".' },
          ].map((row, i) => (
            <div key={i} className="cia-darkblock-row" style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: i === 0 ? 16 : 0, paddingBottom: i === 0 ? 16 : 0, borderBottom: i === 0 ? '1px solid #1e1e1e' : 'none' }}>
              <span className="cia-darkblock-label" style={{ color: i === 0 ? '#ef4444' : '#22c55e', fontWeight: 800, fontSize: 14, flexShrink: 0, paddingTop: 1, minWidth: 120 }}>
                {i === 0 ? '✗' : '✓'} {row.label}
              </span>
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
  { criterion: 'Compréhension', scripte: 'Mots-clés exacts', rag: 'Reformulations, synonymes, fautes de frappe' },
  { criterion: 'Couverture des questions', scripte: 'Limitée à l\'arbre prévu', rag: 'Toute votre base de connaissances' },
  { criterion: 'Citation des sources', scripte: 'Non', rag: 'Oui (page, paragraphe, lien)' },
  { criterion: 'Maintenance', scripte: 'Mise à jour manuelle de l\'arbre', rag: 'Mise à jour auto : on update la base, le chatbot suit' },
  { criterion: 'Escalade humain', scripte: 'Oui mais brutale', rag: 'Avec contexte enrichi (question, ce compris, pourquoi bloque)' },
  { criterion: 'Personnalité de marque', scripte: 'Robotique', rag: 'Identité de marque cohérente (prénom, ton, signature)' },
  { criterion: 'Souveraineté France', scripte: 'Variable', rag: 'Native (Mistral, OVH, Scaleway)' },
  { criterion: 'Pricing entrée', scripte: 'Variable selon SaaS', rag: '1 400 € HT (cas simple, 1 semaine de delivery)' },
];

function ComparisonTable() {
  return (
    <section className="cia-section-pad" style={{ padding: '80px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <H2 style={{ marginBottom: 12 }}>
            Chatbot scripté vs Chatbot RAG Althoce.<br /><span style={{ color: AC }}>Le détail honnête.</span>
          </H2>
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 560, margin: '0 auto', lineHeight: 1.65 }}>
            Deux approches souvent confondues. Voici ce qui change vraiment dans l'expérience visiteur et la maintenance long-terme.
          </p>
        </div>

        <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid #e4e4e7', marginBottom: 24 }}>
          {/* Header */}
          <div className="cia-table-header" style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr', background: '#09090b' }}>
            <div style={{ padding: '14px 20px', fontSize: 12, fontWeight: 800, color: '#8a8a95', textTransform: 'uppercase', letterSpacing: '.1em' }}>Critère</div>
            <div style={{ padding: '14px 20px', fontSize: 12, fontWeight: 800, color: '#8a8a95', textTransform: 'uppercase', letterSpacing: '.1em', borderLeft: '1px solid #1e1e1e' }}>Chatbot scripté</div>
            <div style={{ padding: '14px 20px', fontSize: 12, fontWeight: 800, color: AC, textTransform: 'uppercase', letterSpacing: '.1em', borderLeft: '1px solid #1e1e1e' }}>Chatbot RAG Althoce</div>
          </div>

          {compareRows.map((row, i) => (
            <div key={i} className="cia-table-row" style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr', borderTop: '1px solid #e4e4e7', background: i % 2 === 0 ? '#fff' : '#fafafa' }}>
              <div style={{ padding: '14px 20px', fontSize: 14, fontWeight: 700, color: '#09090b' }}>{row.criterion}</div>
              <div className="cia-table-cell cia-table-scripte" style={{ padding: '14px 20px', fontSize: 14, color: '#8a8a95', borderLeft: '1px solid #e4e4e7' }}>{row.scripte}</div>
              <div className="cia-table-cell cia-table-rag" style={{ padding: '14px 20px', fontSize: 14, color: '#09090b', fontWeight: 600, borderLeft: `2px solid ${AC}22`, background: i % 2 === 0 ? '#f0f7ff' : '#e8f0fe' }}>
                {row.rag}
              </div>
            </div>
          ))}
        </div>

        <p style={{ fontSize: 14, color: '#a1a1aa', lineHeight: 1.65, textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
          Le chatbot scripté reste pertinent dans 1 cas : un funnel d'achat très linéaire avec 5 ou 6 étapes prévisibles. Pour tout le reste, un chatbot RAG vous donne un meilleur taux de réponse. Pour la migration depuis un chatbot scripté existant, voir notre service{' '}
          <a href="/services/integration-ia/" style={{ color: AC, fontWeight: 600, textDecoration: 'none' }}>Intégration IA</a>.
        </p>
      </div>
    </section>
  );
}

// ── SECTION 4 — Architecture RAG ─────────────────────────────
const ragSteps = [
  { n: '1', label: 'Question reçue', desc: 'Le visiteur écrit en langage naturel. Pas de bouton, pas d\'arbre.', icon: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="9" stroke={AC} strokeWidth="1.8"/>
      <path d="M8 9.5C8 8 9 7 11 7s3 1 3 2.5c0 1-0.5 1.5-1.5 2L11 13" stroke={AC} strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="11" cy="15.5" r="0.8" fill={AC}/>
    </svg>
  )},
  { n: '2', label: 'Embedding', desc: 'La question est transformée en vecteur numérique pour comprendre les synonymes et reformulations.', icon: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <rect x="3" y="7" width="4" height="8" rx="2" fill={AC} opacity=".3"/>
      <rect x="9" y="4" width="4" height="14" rx="2" fill={AC} opacity=".6"/>
      <rect x="15" y="9" width="4" height="6" rx="2" fill={AC}/>
    </svg>
  )},
  { n: '3', label: 'Recherche vectorielle', desc: 'Le système cherche dans votre base les passages les plus proches sémantiquement. Top 3 à 5 remontés.', icon: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <circle cx="9.5" cy="9.5" r="6" stroke={AC} strokeWidth="1.8"/>
      <path d="M14 14L18 18" stroke={AC} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M7.5 9.5h4M9.5 7.5v4" stroke={AC} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )},
  { n: '4', label: 'Génération de réponse', desc: 'Le LLM reçoit la question + les passages pertinents et génère une réponse en langage naturel, sources citées.', icon: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="16" height="12" rx="3" stroke={AC} strokeWidth="1.8"/>
      <path d="M7 9h8M7 12h5" stroke={AC} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )},
  { n: '5', label: 'Vérification et envoi', desc: 'Garde-fous : aucune réponse non sourcée. Si rien trouvé, escalade vers un humain avec contexte enrichi.', icon: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M11 3L4 7v5c0 4 3.5 7 7 8 3.5-1 7-4 7-8V7L11 3z" stroke={AC} strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M8 11l2 2 4-4" stroke={AC} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )},
];

function Architecture() {
  const [ref, visible] = useInView(0.1);
  return (
    <section id="architecture" className="cia-section-pad" ref={ref} style={{ padding: '80px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <H2 style={{ marginBottom: 12 }}>Comment fonctionne un chatbot RAG. <span style={{ color: AC }}>Sans jargon.</span></H2>
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 540, margin: '0 auto', lineHeight: 1.65 }}>
            Cinq étapes que le chatbot exécute en moins d'une seconde, à chaque message reçu.
          </p>
        </div>

        {/* Flow diagram */}
        <div className="cia-flow-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0, position: 'relative' }}>
          {ragSteps.map((step, i) => (
            <div
              key={i}
              style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: `all .5s ${i * .1}s ease`, position: 'relative', padding: '0 8px' }}
            >
              {/* Connector arrow */}
              {i < ragSteps.length - 1 && (
                <div style={{ position: 'absolute', top: 28, right: -8, zIndex: 2, color: `${AC}60`, fontSize: 16, fontWeight: 700 }}>›</div>
              )}

              <div style={{ background: '#fff', border: `1px solid ${AC}20`, borderRadius: 16, padding: '20px 16px', textAlign: 'center', height: '100%', boxShadow: '0 2px 12px rgba(0,0,0,.04)' }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: `${AC}10`, border: `1px solid ${AC}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                  {step.icon}
                </div>
                <div style={{ fontSize: 10, fontWeight: 800, color: AC, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 6 }}>Étape {step.n}</div>
                <div style={{ fontSize: 14, fontWeight: 800, color: '#09090b', marginBottom: 8, lineHeight: 1.3 }}>{step.label}</div>
                <p style={{ fontSize: 11, color: '#8a8a95', lineHeight: 1.65 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 32, padding: '20px 28px', borderRadius: 16, background: `${AC}08`, border: `1px solid ${AC}20`, maxWidth: 760, margin: '32px auto 0' }}>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.7, textAlign: 'center' }}>
            Cette architecture est implémentée chez tous nos clients chatbot. Ce qui change : la base de connaissances (vos FAQ, docs, intranet), le modèle LLM (selon souveraineté), l'identité de marque. Le reste est éprouvé sur <strong>+150 PME</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── SECTION 5 — Cas d'usage ───────────────────────────────────
const casUsage = [
  { n: '01', title: 'Chatbot FAQ visiteur (site public)', desc: 'Sur votre site corporate ou e-commerce. Répond aux questions visiteur (produits, livraison, conditions, contact). Source : votre site + FAQ + CGV.' },
  { n: '02', title: 'Chatbot qualification prospect (avant le commercial)', desc: 'Engage les visiteurs en haut du funnel, qualifie l\'intention (BANT léger : besoin, autorité, urgence), prend le RDV avec votre commercial via Calendly. Voir aussi Agent IA SDR pour la version employé IA.' },
  { n: '03', title: 'Chatbot support N0 (déflexion tickets)', desc: 'Sur votre interface client connectée. Répond aux questions support de niveau 0 (réinitialisation mot de passe, statut commande, info produit). Réduit la charge support de 30 à 60 %.' },
  { n: '04', title: 'Chatbot intranet (assistant interne)', desc: 'Pour vos collaborateurs internes. Répond aux questions sur les procédures RH, IT, juridique, finance. Réduit le temps perdu à chercher l\'info. Particulièrement efficace dans les ETI.' },
  { n: '05', title: 'Chatbot base produit (e-commerce ou SaaS)', desc: 'Aide à la décision d\'achat ou à l\'usage du produit. Pour un e-commerce : "quel modèle pour un usage X ?". Pour un SaaS : "comment fait-on pour Y ?". Réduit le taux d\'abandon panier ou le churn.' },
];

function CasUsage() {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} className="cia-section-pad" style={{ padding: '80px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <H2 style={{ marginBottom: 12 }}>5 cas où nos clients déploient <span style={{ color: AC }}>un chatbot RAG</span></H2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {casUsage.map((c, i) => (
            <div
              key={i}
              style={{ display: 'flex', gap: 24, padding: '28px 0', borderBottom: i < casUsage.length - 1 ? '1px solid #f4f4f5' : 'none', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(16px)', transition: `all .5s ${i * .08}s ease` }}
            >
              <div style={{ fontSize: 32, fontWeight: 900, color: `${AC}30`, letterSpacing: '-.04em', lineHeight: 1, flexShrink: 0, width: 52 }}>{c.n}</div>
              <div style={{ flex: 1 }}>
                <div style={{ marginBottom: 8 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: '#09090b', letterSpacing: '-.02em' }}>{c.title}</h3>
                </div>
                <p style={{ fontSize: 15, color: '#8a8a95', lineHeight: 1.65 }}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 36, padding: '20px 24px', borderRadius: 14, background: '#f8fafc', border: '1px solid #e4e4e7', textAlign: 'center' }}>
          <p style={{ fontSize: 15, color: '#52525b', lineHeight: 1.65 }}>
            Votre cas n'est pas listé ? Les <strong>30 minutes offertes avec un expert</strong> servent à valider la faisabilité et cadrer la base de connaissances cible. Pour des cas plus larges, voir{' '}
            <a href="/services/employe-ia/" style={{ color: AC, fontWeight: 600, textDecoration: 'none' }}>Employé IA support</a>.
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

// ── Step visual cards (reused) ────────────────────────────────
function StepCard1() {
  return (
    <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e4e4e7', padding: '18px 20px', boxShadow: '0 2px 12px rgba(0,0,0,.06)' }}>
      <div style={{ fontSize: 9, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 14 }}>Rapport d'audit</div>
      {[
        { label: 'FAQ site non couvertes', gain: '47%', done: true },
        { label: 'Tickets support N0', gain: '-40%', done: true },
        { label: 'Base intranet identifiée', gain: null, done: true },
        { label: 'Multilingue requis', gain: null, done: false },
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
  return (
    <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e4e4e7', padding: '18px 20px', boxShadow: '0 2px 12px rgba(0,0,0,.06)' }}>
      <div style={{ fontSize: 9, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 14 }}>Architecture RAG</div>
      {[
        { label: 'Base de connaissances', pct: '100%' },
        { label: 'Modèle LLM souverain', pct: '100%' },
        { label: 'Garde-fous anti-hallucination', pct: '100%' },
        { label: 'Intégration site web', pct: '80%' },
      ].map((b) => (
        <div key={b.label} style={{ marginBottom: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
            <span style={{ fontSize: 12, color: '#374151', fontWeight: 500 }}>{b.label}</span>
          </div>
          <div style={{ height: 5, borderRadius: 9999, background: '#f1f5f9', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: b.pct, background: `linear-gradient(90deg,${AC},#60a5fa)`, borderRadius: 9999 }} />
          </div>
        </div>
      ))}
    </div>
  );
}
function StepCard3() {
  const tools = [
    { name: 'WordPress', color: '#21759b' }, { name: 'Notion', color: '#000' },
    { name: 'Shopify', color: '#96bf48' }, { name: 'Sharepoint', color: '#0078d4' },
    { name: 'Zendesk', color: '#03363d' }, { name: 'Webflow', color: '#146ef5' },
  ];
  return (
    <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e4e4e7', padding: '18px 20px', boxShadow: '0 2px 12px rgba(0,0,0,.06)' }}>
      <div style={{ fontSize: 9, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 14 }}>Intégrations compatibles</div>
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
    { label: 'Questions répondues aujourd\'hui', value: 312 + (tick % 5), color: '#16a34a' },
    { label: 'Taux de résolution', value: '94%', color: AC, isString: true },
    { label: 'Escalades vers humain', value: 18 + (tick % 2), color: '#ea580c' },
    { label: 'Sources citées', value: 298 + (tick % 4), color: '#7c3aed' },
  ];
  return (
    <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e4e4e7', padding: '18px 20px', boxShadow: '0 2px 12px rgba(0,0,0,.06)', position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
        <div style={{ fontSize: 9, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.12em' }}>Chatbot RAG live</div>
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

// ── SECTION 7 — Méthode (héritée) ────────────────────────────
function Methodology() {
  const [ref, visible] = useInView();
  const stepCards = [<StepCard1 key={0} />, <StepCard2 key={1} />, <StepCard3 key={2} />, <StepCard4 key={3} visible={visible} />];
  return (
    <section ref={ref} style={{ padding: '80px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <H2 style={{ marginBottom: 10 }}>Comment se passe une mission avec Althoce ?</H2>
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 500, margin: '0 auto', lineHeight: 1.65 }}>Quatre étapes courtes. Votre chatbot RAG est en production en 1 à 4 semaines.</p>
        </div>
        <div className="v2-grid4 cia-step-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
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

// ── SECTION 8 — Souveraineté ──────────────────────────────────
function Security() {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} style={{ padding: '72px 24px', background: '#09090b', borderTop: '1px solid #1a1a1a' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div className="cia-security-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 64, alignItems: 'center' }}>
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all .6s ease' }}>
            <H2 white style={{ marginBottom: 20 }}>
              Vos données restent vos données.<br /><span style={{ color: AC }}>En Europe, sous votre contrôle.</span>
            </H2>
            <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.75, marginBottom: 32 }}>
              La plupart des chatbots SaaS envoient vos conversations chez des prestataires américains. Chez Althoce, hébergement en Union Européenne, instance dédiée, chiffrement de bout en bout.
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

// ── SECTION 9 — FAQ ───────────────────────────────────────────
function FAQ() {
  return (
    <section style={{ padding: '72px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <H2 style={{ marginBottom: 12 }}>Questions fréquentes sur les chatbots IA Althoce</H2>
          <p style={{ fontSize: 16, color: '#52525b' }}>Six questions que tout dirigeant pose avant de déployer un chatbot RAG.</p>
        </div>
        <FAQAccordion items={faqChatbotIA} />
      </div>
    </section>
  );
}

// ── Page root ─────────────────────────────────────────────────
export default function ChatbotIAPageClient() {
  return (
    <main>
      <style>{`
        @media (max-width: 860px) {
          .cia-hero-grid     { grid-template-columns: 1fr !important; }
          .cia-security-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .cia-darkblock-row { flex-wrap: wrap !important; }
          .cia-darkblock-label { white-space: normal !important; }
          .cia-flow-grid     { grid-template-columns: 1fr 1fr !important; gap: 12px !important; }
        }
        @media (max-width: 640px) {
          .cia-table-header  { display: none !important; }
          .cia-table-row     { grid-template-columns: 1fr !important; border-radius: 12px; border: 1px solid #e4e4e7 !important; margin-bottom: 10px; overflow: hidden; }
          .cia-table-scripte { border-left: none !important; background: #fafafa !important; }
          .cia-table-rag     { border-left: none !important; border-top: 2px solid #2563eb22 !important; }
          .cia-table-cell::before { display: block !important; }
          .cia-flow-grid     { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .cia-hero-section  { padding: 88px 16px 48px !important; }
          .cia-section-pad   { padding: 56px 16px !important; }
          .cia-step-grid     { grid-template-columns: 1fr !important; }
          .cia-darkblock     { padding: 24px 20px !important; }
        }
        .cia-table-scripte::before { content: 'Chatbot scripté'; display: none; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: .08em; color: #52525b; margin-bottom: 4px; }
        .cia-table-rag::before     { content: 'Chatbot RAG Althoce'; display: none; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: .08em; color: #2563eb; margin-bottom: 4px; }
      `}</style>
      <Hero />
      <Definition />
      <ComparisonTable />
      <Architecture />
      <CasUsage />
      <MetiersMarquee />
      <Methodology />
      <Security />
      <FAQ />
    </main>
  );
}
