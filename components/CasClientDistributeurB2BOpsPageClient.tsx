'use client';

import React, { useState, useEffect, useRef } from 'react';
import { steps } from '@/lib/data';

const AC      = '#2563eb';
const EMERALD = '#059669';
const RED     = '#ef4444';
const AMBER   = '#d97706';
const GREEN   = '#16a34a';

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
    <h2 style={{ fontSize: 'clamp(22px,2.8vw,36px)', fontWeight: 800, letterSpacing: '-.03em', color: '#09090b', lineHeight: 1.15, ...sx }}>
      {children}
    </h2>
  );
}

// ── Hero Stat ─────────────────────────────────────────────────
function HeroStat() {
  const [count, setCount] = useState(false);
  useEffect(() => { const t = setTimeout(() => setCount(true), 400); return () => clearTimeout(t); }, []);
  return (
    <div style={{ borderRadius: 24, background: '#09090b', border: '1px solid #1a1a1a', padding: '48px 36px', position: 'relative', overflow: 'hidden', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 260 }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.018) 1px,transparent 1px)', backgroundSize: '32px 32px' }} />
      <div aria-hidden="true" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 320, height: 220, background: `radial-gradient(ellipse,${EMERALD}18 0%,transparent 65%)`, filter: 'blur(40px)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', zIndex: 1, opacity: count ? 1 : 0, transform: count ? 'none' : 'translateY(16px)', transition: 'all .6s ease' }}>
        <div style={{ fontSize: 'clamp(72px,10vw,120px)', fontWeight: 900, color: EMERALD, letterSpacing: '-.06em', lineHeight: 0.9, marginBottom: 16 }}>0 %</div>
        <div style={{ fontSize: 16, fontWeight: 700, color: '#a1a1aa', lineHeight: 1.65, maxWidth: 260 }}>turnover assistant ops sur 14 mois</div>
        <div style={{ marginTop: 12, fontSize: 14, color: '#3f3f46', fontWeight: 500 }}>contre 80 % historique (4 démissions en 5 ans)</div>
      </div>
      <div style={{ position: 'absolute', bottom: 16, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 20, zIndex: 1 }}>
        {[{ v: '×3', l: 'volume traité' }, { v: '0', l: 'heure sup / semaine' }, { v: '40 k€', l: 'coût caché éliminé / an' }].map((s, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 15, fontWeight: 900, color: EMERALD }}>{s.v}</div>
            <div style={{ fontSize: 10, color: '#3f3f46', fontWeight: 500 }}>{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{ padding: '120px 24px 80px', position: 'relative', overflow: 'hidden', borderBottom: '1px solid #e4e4e7' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: 500, height: 500, borderRadius: '50%', background: `radial-gradient(circle,${EMERALD}0a 0%,transparent 65%)`, filter: 'blur(80px)', animation: 'gradDrift1 14s ease-in-out infinite' }} />
      </div>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.025) 1px,transparent 1px)', backgroundSize: '48px 48px', maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%,black,transparent)', zIndex: 0 }} aria-hidden="true" />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1160, margin: '0 auto' }}>
        <div className="cc7-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: '#a1a1aa', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', fontWeight: 500 }}>
              <a href="/" style={{ color: '#8a8a95', textDecoration: 'none' }}>Accueil</a><span>›</span>
              <a href="/cas-clients/" style={{ color: '#8a8a95', textDecoration: 'none' }}>Cas clients</a><span>›</span>
              <span style={{ color: '#09090b' }}>Distributeur B2B industriel</span>
            </nav>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 20 }}>
              {['3 agents IA ops', 'Distributeur B2B', '45 collab.', 'E-commerce industriel', 'cas anonymisé · 2025-2026'].map((t) => (
                <span key={t} style={{ padding: '3px 10px', borderRadius: 9999, background: '#f4f4f5', fontSize: 11, fontWeight: 700, color: '#8a8a95' }}>{t}</span>
              ))}
            </div>
            <h1 style={{ fontSize: 'clamp(26px,3.8vw,48px)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-.03em', color: '#09090b', marginBottom: 20 }}>
              Volume traité ×3 et fin du turnover assistant ops grâce aux agents IA Althoce.
            </h1>
            <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 28, maxWidth: 520 }}>
              45 collaborateurs, e-commerce industriel B2B, un assistant administratif qui démissionnait tous les 12 à 18 mois faute de soutenabilité du poste. 3 agents IA ops déployés en 6 semaines. Voici comment le distributeur a stabilisé son back-office et triplé son volume sans embauche.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="/contact" style={{ padding: '14px 28px', borderRadius: 9999, background: '#09090b', color: '#fff', textDecoration: 'none', fontSize: 15, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'transform .15s,box-shadow .15s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.03)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 6px 24px rgba(0,0,0,.25)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'; }}>
                Discuter de votre projet →
              </a>
              <a href="#resultats" style={{ padding: '14px 28px', borderRadius: 9999, border: '1.5px solid #e4e4e7', color: '#09090b', textDecoration: 'none', fontSize: 15, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, background: '#fff', transition: 'border-color .15s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = EMERALD; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#e4e4e7'; }}>
                Voir les résultats ↓
              </a>
            </div>
          </div>
          <div className="cc7-stat-col"><HeroStat /></div>
        </div>
      </div>
    </section>
  );
}

// ── Le Client ─────────────────────────────────────────────────
function LeClient() {
  const [ref, visible] = useInView(0.08);
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all .6s ease' }}>
        <H2 style={{ marginBottom: 28 }}>Le distributeur : 45 personnes, e-commerce industriel, poste ops en burn-out cyclique</H2>
        <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.8, marginBottom: 24 }}>
          Le distributeur B2B industriel (nom anonymisé) commercialise des équipements techniques (composants industriels, pièces détachées spécialisées, consommables professionnels) auprès de PME et ETI françaises. <strong style={{ color: '#09090b' }}>45 collaborateurs</strong> : 8 commerciaux internes, 6 commerciaux terrain, 4 ops/ADV, 8 logistique, 4 comptabilité, 6 IT et site e-commerce, 4 marketing, 5 direction et fonctions support. Modèle : 30 % CA e-commerce direct, 70 % comptes B2B avec contrats cadres. Croissance organique <strong style={{ color: '#09090b' }}>+25 % par an</strong> depuis 4 ans.
        </p>
        <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.8, marginBottom: 32 }}>
          Le poste d'<strong style={{ color: '#09090b' }}>assistant administratif ops</strong> était devenu structurellement insoutenable. La personne en poste cumulait : tri et réponse aux mails entrants, création des commandes ERP à partir des bons de commande clients, suivi des livraisons, gestion documentaire, suivi base fournisseurs, relances paiement. Volume cumulé = environ <strong style={{ color: '#09090b' }}>80 mails et 25 commandes par jour</strong>. Le DAF nous a contactés via une recommandation d'un autre client industriel.
        </p>
        <div style={{ padding: '28px 32px', borderRadius: 20, background: '#fafafa', border: '1px solid #e4e4e7', borderLeft: `4px solid ${RED}` }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: RED, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 14 }}>Le coût caché du turnover cyclique</div>
          <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75 }}>
            Turnover historique : <strong style={{ color: '#09090b' }}>80 % sur le poste</strong> (4 démissions en 5 ans, chaque fois après 12 à 18 mois). Coût caché estimé : <strong style={{ color: '#09090b' }}>40 k€/an</strong> entre recrutement, formation et perte de productivité pendant la transition. Difficulté croissante à recruter sur un poste peu attractif aux conditions du marché. Direction commerciale saturée par les escalades répétées quand l'assistant ops était sous pression.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Avant Althoce ─────────────────────────────────────────────
function AvantAlthoce() {
  const [ref, visible] = useInView(0.06);
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        <H2 style={{ marginBottom: 40 }}>La situation avant : poste assistant ops insoutenable structurellement</H2>
        <div className="cc7-avant-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 36 }}>
          <div style={{ borderRadius: 18, background: '#fff', border: `1px solid ${RED}22`, overflow: 'hidden', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(-16px)', transition: 'all .6s ease' }}>
            <div style={{ padding: '16px 22px', background: `${RED}08`, borderBottom: `1px solid ${RED}15`, display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: RED }} />
              <span style={{ fontSize: 13, fontWeight: 800, color: RED, textTransform: 'uppercase', letterSpacing: '.08em' }}>Côté assistant ops (la personne)</span>
            </div>
            <div style={{ padding: '8px 0' }}>
              {[
                '80 mails traités par jour (60 à 110 selon les semaines)',
                '25 commandes ERP créées par jour manuellement',
                '15 minutes par commande pour ressaisir dans Sage',
                'Documents reçus non classés s\'accumulant chaque semaine',
                'Heures sup régulières : 5 à 10 par semaine',
                'Stress permanent, plaintes informelles à la direction',
              ].map((item, i, arr) => (
                <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 22px', borderBottom: i < arr.length - 1 ? '1px solid #f4f4f5' : 'none' }}>
                  <div style={{ flexShrink: 0, width: 18, height: 18, borderRadius: '50%', background: `${RED}12`, border: `1.5px solid ${RED}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1 }}>
                    <span style={{ fontSize: 9, fontWeight: 900, color: RED }}>✕</span>
                  </div>
                  <p style={{ fontSize: 14, color: '#52525b', lineHeight: 1.65, margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ borderRadius: 18, background: '#fff', border: `1px solid ${AMBER}22`, overflow: 'hidden', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(16px)', transition: 'all .6s .1s ease' }}>
            <div style={{ padding: '16px 22px', background: `${AMBER}08`, borderBottom: `1px solid ${AMBER}15`, display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: AMBER }} />
              <span style={{ fontSize: 13, fontWeight: 800, color: AMBER, textTransform: 'uppercase', letterSpacing: '.08em' }}>Côté direction</span>
            </div>
            <div style={{ padding: '8px 0' }}>
              {[
                'Turnover 80 % sur le poste (4 démissions en 5 ans)',
                'Coût caché estimé : 40 k€/an (recrutement + formation + transition)',
                'Difficulté à recruter : poste peu attractif aux conditions du marché',
                'Escalades répétées de la direction commerciale sur les retards',
                'Acceptation tacite : "c\'est le poste qui veut ça, on n\'y peut rien"',
                '0 % de backlog résorbé : le volume augmentait avec la croissance',
              ].map((item, i, arr) => (
                <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 22px', borderBottom: i < arr.length - 1 ? '1px solid #f4f4f5' : 'none' }}>
                  <div style={{ flexShrink: 0, width: 18, height: 18, borderRadius: '50%', background: `${AMBER}12`, border: `1.5px solid ${AMBER}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1 }}>
                    <span style={{ fontSize: 9, fontWeight: 900, color: AMBER }}>✕</span>
                  </div>
                  <p style={{ fontSize: 14, color: '#52525b', lineHeight: 1.65, margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ borderRadius: 20, background: '#09090b', border: '1px solid #1e1e1e', overflow: 'hidden' }}>
          <div style={{ padding: '14px 24px', borderBottom: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', gap: 8 }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <circle cx="7" cy="7" r="5.5" stroke={EMERALD} strokeWidth="1.2"/>
              <path d="M4.5 7l2 2 3-3" stroke={EMERALD} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p style={{ fontSize: 12, fontWeight: 800, color: '#52525b', textTransform: 'uppercase', letterSpacing: '.12em', margin: 0 }}>La décision stratégique du DAF avant le déploiement</p>
          </div>
          <div style={{ padding: '24px 28px' }}>
            <p style={{ fontSize: 16, color: '#a1a1aa', lineHeight: 1.75, margin: 0 }}>
              Dès la semaine 0, le DAF a présenté le projet en interne non pas comme "une automatisation pour réduire les coûts" mais comme un <strong style={{ color: '#e4e4e7' }}>projet d'augmentation du poste</strong>, avec promesse écrite de redéploiement sur des sujets à valeur. Cette décision a évité la démission anticipée de l'assistant en poste (signaux de burn-out détectés en semaine 2 du projet). C'est ce qu'on recommande systématiquement depuis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Solution ──────────────────────────────────────────────────
const timeline = [
  {
    week: 'Sem. 0', title: 'Cadrage initial', color: AC,
    items: [
      'Cartographie des 5 catégories de mails entrants : commandes clients, avis fournisseurs, demandes commerciales, urgences, divers',
      'Cartographie ADV : 12 types de commandes récurrentes vs commandes complexes',
      'Cartographie GED : 8 types de documents reçus (BL, factures, certificats, contrats, attestations)',
      'Devis ferme sous 5 jours',
    ],
  },
  {
    week: 'Sem. 1-2', title: 'Agent mails entrants', color: EMERALD,
    items: [
      'Développement avec accès Outlook (Graph API Microsoft)',
      'Classification automatique en 5 catégories',
      'Templates de réponses pour les 10 demandes les plus fréquentes',
      'Règles d\'escalade vers l\'assistant humain (cas complexes, mécontentements)',
      'POC sur 200 mails historiques avant mise en production',
    ],
  },
  {
    week: 'Sem. 2-4', title: 'Agent ADV (Sage 100c)', color: EMERALD,
    items: [
      'Intégration Sage 100c (connecteur API + RPA en surcouche pour version on-premise)',
      'Pipeline OCR + parsing structuré des bons de commande clients',
      'Création automatique des commandes ERP sur les 12 types récurrents',
      'Validation humaine sur les commandes sensibles (montant > seuil, nouveau client, conditions atypiques)',
      'POC parallèle 1 semaine avant bascule',
    ],
  },
  {
    week: 'Sem. 4-5', title: 'Agent gestion documentaire', color: EMERALD,
    items: [
      'Intégration SharePoint pour le rangement automatique',
      'Classification automatique en 8 catégories de documents',
      'Renommage selon convention interne (AAAAMMJJ_TypeDoc_Fournisseur_NumRef.pdf)',
      'Mise à jour automatique des bases de suivi (fournisseurs, contrats, certifications)',
    ],
  },
  {
    week: 'Sem. 6', title: 'Mise en production complète', color: GREEN,
    items: [
      'Bascule des 3 agents en production simultanée',
      'Formation de l\'assistant ops au pilotage (revue quotidienne 15 min)',
      'Reporting hebdo automatique au DAF',
      'Redéfinition du rôle "augmenté" : validation des escalades, arbitrage, pilotage de la refonte ADV (reportée depuis 2 ans)',
    ],
  },
];

function ArchitectureSVG() {
  const agents = [
    {
      label: 'Agent mails entrants',
      color: EMERALD,
      inputs: ['Mails Outlook entrants (80/j)'],
      outputs: ['Classification 5 catégories', 'Réponse standard automatique', 'Escalade humaine si complexe'],
    },
    {
      label: 'Agent ADV',
      color: AC,
      inputs: ['Bons de commande clients PDF'],
      outputs: ['OCR + parsing structuré', 'Création commandes Sage 100c', 'Validation humaine sur sensibles'],
    },
    {
      label: 'Agent GED',
      color: AMBER,
      inputs: ['Documents reçus (mail, scan)'],
      outputs: ['Classification 8 types', 'Renommage convention interne', 'Rangement SharePoint auto'],
    },
  ];
  return (
    <div style={{ borderRadius: 16, background: '#09090b', border: '1px solid #1a1a1a', padding: '24px 20px', overflow: 'hidden' }}>
      <div style={{ fontSize: 12, fontWeight: 800, color: '#3f3f46', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 20 }}>Architecture déployée · 3 agents IA ops en parallèle</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 16 }}>
        {agents.map((agent, i) => (
          <div key={i} style={{ borderRadius: 10, background: '#111', border: `1px solid ${agent.color}20`, overflow: 'hidden' }}>
            <div style={{ padding: '10px 14px', borderBottom: `1px solid ${agent.color}15`, display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: agent.color, flexShrink: 0 }} />
              <span style={{ fontSize: 12, fontWeight: 800, color: agent.color }}>{agent.label}</span>
            </div>
            <div className="cc7-agent-row" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px' }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 9, fontWeight: 700, color: '#3f3f46', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 6 }}>Entrée</div>
                {agent.inputs.map((inp, j) => (
                  <div key={j} style={{ fontSize: 12, fontWeight: 600, color: '#52525b', padding: '3px 8px', borderRadius: 6, background: '#1a1a1a', display: 'inline-block' }}>{inp}</div>
                ))}
              </div>
              <span style={{ color: agent.color, fontSize: 16, fontWeight: 900, flexShrink: 0 }}>→</span>
              <div style={{ flex: 2 }}>
                <div style={{ fontSize: 9, fontWeight: 700, color: '#3f3f46', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 6 }}>Sorties automatisées</div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {agent.outputs.map((out, j) => (
                    <span key={j} style={{ fontSize: 10, fontWeight: 700, color: agent.color, padding: '3px 8px', borderRadius: 6, background: `${agent.color}10`, border: `1px solid ${agent.color}20` }}>{out}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ padding: '10px 14px', borderRadius: 8, background: '#0a0a0a', border: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: EMERALD, flexShrink: 0 }} />
        <span style={{ fontSize: 12, color: '#3f3f46', fontWeight: 600 }}>Sage 100c (on-premise + RPA connecteur) · Outlook Graph API · SharePoint · Validation humaine sur les cas sensibles</span>
      </div>
    </div>
  );
}

function LaSolution() {
  const [ref, visible] = useInView(0.05);
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        <H2 style={{ marginBottom: 12 }}>3 agents IA ops déployés en 6 semaines sur l'ERP, la GED et la messagerie</H2>
        <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.75, marginBottom: 48, maxWidth: 700 }}>
          Le distributeur utilisait Sage 100c comme ERP, Outlook pour la messagerie ops, et SharePoint pour la GED. Nous avons déployé 3 agents IA Althoce en parallèle avec intégration profonde aux 3 outils. L'assistant en poste a été redéployé sur la validation, l'arbitrage et l'accompagnement managers.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginBottom: 48 }}>
          {timeline.map((step, i) => (
            <div key={i} className="cc7-tl-row" style={{ display: 'flex', gap: 0, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(-10px)', transition: `all .5s ${i * .08}s ease` }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: 100 }}>
                <div style={{ padding: '6px 10px', borderRadius: 9999, background: `${step.color}10`, border: `2px solid ${step.color}40`, display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                  <span style={{ fontSize: 10, fontWeight: 900, color: step.color }}>{step.week}</span>
                </div>
                {i < timeline.length - 1 && <div style={{ width: 2, flex: 1, minHeight: 24, background: `linear-gradient(to bottom,${step.color}30,#e4e4e7)` }} />}
              </div>
              <div style={{ flex: 1, marginBottom: i < timeline.length - 1 ? 16 : 0, paddingBottom: i < timeline.length - 1 ? 8 : 0 }}>
                <div style={{ borderRadius: 14, background: '#fafafa', border: '1px solid #e4e4e7', borderLeft: `3px solid ${step.color}`, padding: '18px 22px', minWidth: 0, overflow: 'hidden' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                    <span style={{ fontSize: 16, fontWeight: 800, color: '#09090b' }}>{step.title}</span>
                    <span className="cc7-tl-week-inline" style={{ padding: '2px 8px', borderRadius: 9999, background: `${step.color}10`, border: `1px solid ${step.color}25`, fontSize: 10, fontWeight: 800, color: step.color, flexShrink: 0 }}>{step.week}</span>
                  </div>
                  <div className="cc7-tl-items">
                    {step.items.map((item, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                        <div style={{ flexShrink: 0, width: 5, height: 5, borderRadius: '50%', background: step.color, marginTop: 7, opacity: 0.6 }} />
                        <span style={{ fontSize: 14, color: '#52525b', lineHeight: 1.65 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ArchitectureSVG />
      </div>
    </section>
  );
}

// ── Résultats ─────────────────────────────────────────────────
const kpiCards = [
  { delta: '0 %', label: 'turnover assistant ops sur 14 mois', avant: '80 % historique (4 démissions/5 ans)', apres: 'Même personne en poste · monte en compétences', color: AC, size: 'hero' },
  { delta: '×3', label: 'volume de mails traités par jour', avant: '80 mails / jour', apres: '240 mails / jour', color: AC, size: 'normal' },
  { delta: '×3', label: 'commandes ERP créées par jour', avant: '25 commandes / jour', apres: '75 commandes / jour', color: AC, size: 'normal' },
  { delta: '100 %', label: 'documents classés sans délai', avant: '~60 % classés (40 % en backlog)', apres: 'Classement immédiat 100 % des docs', color: AC, size: 'normal' },
  { delta: '0', label: 'heure supplémentaire / semaine', avant: '5 à 10 h sup / semaine', apres: 'Poste à périmètre choisi, pas contraint', color: AC, size: 'small' },
  { delta: '40 k€', label: 'coût caché turnover éliminé / an', avant: 'Recrutement + formation + transition', apres: 'Projet "l\'IT le plus rentable depuis 5 ans"', color: AC, size: 'small' },
];

function KPICard({ k, i, visible }: { k: typeof kpiCards[0]; i: number; visible: boolean }) {
  const isHero = k.size === 'hero';
  const isSmall = k.size === 'small';
  return (
    <div className={isHero ? 'cc7-kpi-card cc7-kpi-hero' : 'cc7-kpi-card'}
      style={{ borderRadius: 18, background: isHero ? 'linear-gradient(135deg,#080c18 0%,#0d1220 100%)' : '#111', border: `1px solid ${k.color}${isHero ? '40' : '20'}`, padding: isHero ? '32px 28px' : '22px 20px', display: 'flex', flexDirection: 'column', gap: isHero ? 14 : 10, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: `all .55s ${i * .08}s ease`, position: 'relative', overflow: 'hidden' }}>
      {isHero && <div aria-hidden="true" style={{ position: 'absolute', top: '-20%', right: '-10%', width: 180, height: 180, borderRadius: '50%', background: `radial-gradient(circle,${AC}18 0%,transparent 65%)`, filter: 'blur(30px)', pointerEvents: 'none' }} />}
      <div style={{ fontSize: isHero ? 'clamp(48px,6vw,72px)' : isSmall ? 28 : 38, fontWeight: 900, color: k.color, letterSpacing: '-.04em', lineHeight: 0.95, position: 'relative' }}>{k.delta}</div>
      <div style={{ fontSize: isHero ? 14 : 12, fontWeight: 700, color: '#8a8a95', lineHeight: 1.4, textTransform: isHero ? 'none' : 'uppercase', letterSpacing: isHero ? 'normal' : '.06em' }}>{k.label}</div>
      <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: '#3f3f46', textDecoration: 'line-through', textDecorationColor: `${RED}60` }}>{k.avant}</span>
        <span style={{ fontSize: 10, color: '#2a2a2a', fontWeight: 900 }}>→</span>
        <span style={{ fontSize: 13, fontWeight: 800, color: '#d4d4d8' }}>{k.apres}</span>
      </div>
    </div>
  );
}

function Resultats() {
  const [ref, visible] = useInView(0.06);
  return (
    <section id="resultats" ref={ref} style={{ padding: '96px 24px', background: '#09090b', borderTop: '1px solid #1a1a1a', position: 'relative' }}>
      <div aria-hidden="true" style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 2, background: `linear-gradient(to right,transparent,${EMERALD},transparent)` }} />
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: '#3f3f46', textTransform: 'uppercase', letterSpacing: '.14em', marginBottom: 14 }}>Mesure 14 mois après mise en production</div>
          <H2 style={{ color: '#fff' }}>Ce qui a changé concrètement</H2>
        </div>
        <div className="cc7-kpi-bento">
          {kpiCards.map((k, i) => <KPICard key={i} k={k} i={i} visible={visible} />)}
        </div>
        <div style={{ marginTop: 32, padding: '24px 28px', borderRadius: 18, background: `${AC}0c`, border: `1px solid ${AC}22` }}>
          <p style={{ fontSize: 16, color: '#a1a1aa', lineHeight: 1.75, margin: 0 }}>
            Le distributeur a triplé son volume traité sans embauche. L'assistant en poste est passé d'exécution sous pression à validation et arbitrage. 14 mois plus tard, la même personne est toujours en poste, monte en compétences sur la refonte des processus (projet qu'elle pilote désormais), et le coût caché du turnover (40 k€/an) a été éliminé. Le DAF a qualifié le projet de <strong style={{ color: '#f0f0f0' }}>"l'investissement IT le plus rentable du distributeur depuis 5 ans"</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Témoignage ────────────────────────────────────────────────
function Temoignage() {
  const [ref, visible] = useInView(0.08);
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        <div style={{ fontSize: 13, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.14em', marginBottom: 32, textAlign: 'center' }}>Le mot du DAF</div>
        <div style={{ position: 'relative', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(28px)', transition: 'all .7s ease' }}>
          <div aria-hidden="true" style={{ fontSize: 120, lineHeight: 0.6, color: EMERALD, fontFamily: 'Georgia, serif', fontWeight: 900, opacity: 0.1, marginBottom: 24, display: 'block', textAlign: 'center' }}>"</div>
          <blockquote style={{ fontSize: 'clamp(18px,2.4vw,26px)', fontWeight: 700, color: '#09090b', lineHeight: 1.65, margin: '0 0 40px', fontStyle: 'normal', textAlign: 'center' }}>
            On était dans un cycle infernal : assistant ops qui démissionnait tous les 12 à 18 mois, parce que le poste est insoutenable, et 6 mois pour former le remplaçant. On avait évalué le coût caché à plus de 40 000 € par an de turnover. On a déployé l'agent IA ops en 6 semaines. L'assistant en poste a sauvé sa santé mentale, on a triplé le volume de commandes traitées, et personne n'a démissionné en <span style={{ color: EMERALD }}>14 mois</span>. C'est le projet IT le plus rentable qu'on ait fait.
          </blockquote>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: `${EMERALD}15`, border: `1.5px solid ${EMERALD}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="9" r="4.5" stroke={EMERALD} strokeWidth="1.5"/>
                <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" stroke={EMERALD} strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 15, fontWeight: 800, color: '#09090b' }}>DAF, distributeur B2B industriel</div>
              <div style={{ fontSize: 13, color: '#8a8a95', marginTop: 2 }}>45 collaborateurs · E-commerce industriel · 14 mois après mise en production</div>
            </div>
            <div style={{ padding: '6px 16px', borderRadius: 9999, background: `${EMERALD}10`, border: `1px solid ${EMERALD}30`, fontSize: 13, fontWeight: 800, color: EMERALD }}>0 % turnover</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Apprentissages ────────────────────────────────────────────
function IconCheck() {
  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="9" stroke={GREEN} strokeWidth="1.5"/><path d="M6 10l3 3 5-5" stroke={GREEN} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
function IconWrench() {
  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="9" stroke={AMBER} strokeWidth="1.5"/><path d="M13 7a3 3 0 01-4 4L6 14" stroke={AMBER} strokeWidth="1.6" strokeLinecap="round"/><circle cx="6.5" cy="13.5" r="1" fill={AMBER}/></svg>;
}
function IconWarning() {
  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 3L18 16H2L10 3z" stroke={RED} strokeWidth="1.5" strokeLinejoin="round"/><path d="M10 9v3" stroke={RED} strokeWidth="1.8" strokeLinecap="round"/><circle cx="10" cy="14" r="0.8" fill={RED}/></svg>;
}

const lessons = [
  {
    num: '01', Icon: IconCheck, tag: 'Facteurs de succès', title: 'Ce qui a très bien marché', color: GREEN,
    items: [
      { bold: 'Le déploiement parallèle des 3 agents sur 6 semaines plutôt qu\'un seul à la fois sur 6 mois.', text: ' Effet "transformation visible immédiate" qui a remobilisé l\'assistant en poste avant qu\'il ne démissionne (signaux de burn-out détectés en semaine 2 du projet).' },
      { bold: 'La clarté sur le rôle augmenté de l\'assistant après déploiement.', text: ' Plutôt qu\'un poste menacé, un poste qui monte en valeur. Le projet de refonte ADV (reporté depuis 2 ans) lui a été confié, ce qui a relancé son intérêt pour son métier.' },
    ],
  },
  {
    num: '02', Icon: IconWrench, tag: 'Ajustements', title: "Ce qu'on ajusterait", color: AMBER,
    items: [
      { bold: 'L\'intégration Sage 100c a été plus complexe que prévu.', text: ' Version on-premise sans API officielle, recours à un connecteur RPA en surcouche. Sur les futurs déploiements clients Sage on-premise, nous prévoyons d\'emblée 1 à 2 semaines supplémentaires de build pour le connecteur. À qualifier dès le cadrage.' },
    ],
  },
  {
    num: '03', Icon: IconWarning, tag: 'Piège fréquent', title: 'Le piège à éviter', color: RED,
    items: [
      { bold: 'Ne pas annoncer l\'arrivée des agents IA comme un projet d\'automatisation pour réduire les coûts.', text: ' L\'assistant en poste va le percevoir comme une menace existentielle et démissionner avant la fin du déploiement. Notre recommandation : présenter le projet en interne comme un projet d\'augmentation du poste, avec promesse écrite de redéploiement sur des sujets à valeur. C\'est ce que le DAF a fait dès la semaine 0.' },
    ],
  },
];

function Apprentissages() {
  const [ref, visible] = useInView(0.06);
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#09090b', borderTop: '1px solid #1a1a1a' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        <div style={{ marginBottom: 52 }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: '#3f3f46', textTransform: 'uppercase', letterSpacing: '.14em', marginBottom: 12 }}>Retour d'expérience</div>
          <H2 style={{ color: '#fff' }}>Trois choses qui ont fait la réussite de ce déploiement</H2>
        </div>
        <div className="cc7-lessons-grid">
          {lessons.map((lesson, i) => (
            <div key={i} style={{ borderRadius: 20, background: '#111', border: `1px solid ${lesson.color}20`, overflow: 'hidden', display: 'flex', flexDirection: 'column', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: `all .55s ${i * .12}s ease`, position: 'relative' }}>
              <div style={{ height: 3, background: `linear-gradient(to right,${lesson.color},${lesson.color}44)` }} />
              <div aria-hidden="true" style={{ position: 'absolute', top: 12, right: 16, fontSize: 72, fontWeight: 900, color: `${lesson.color}08`, letterSpacing: '-.06em', lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>{lesson.num}</div>
              <div style={{ padding: '24px 24px 16px', display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <div style={{ flexShrink: 0, width: 36, height: 36, borderRadius: 10, background: `${lesson.color}12`, border: `1px solid ${lesson.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <lesson.Icon />
                </div>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 800, color: lesson.color, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 4 }}>{lesson.tag}</div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: '#f0f0f0', lineHeight: 1.3 }}>{lesson.title}</div>
                </div>
              </div>
              <div style={{ height: 1, background: '#1a1a1a', margin: '0 24px' }} />
              <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 16, flex: 1 }}>
                {lesson.items.map((item, j) => (
                  <div key={j} style={{ display: 'flex', gap: 10 }}>
                    <div style={{ flexShrink: 0, width: 5, height: 5, borderRadius: '50%', background: lesson.color, marginTop: 8, opacity: 0.7 }} />
                    <p style={{ fontSize: 14, color: '#52525b', lineHeight: 1.75, margin: 0 }}>
                      <strong style={{ color: '#d4d4d8' }}>{item.bold}</strong>{item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
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
      <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 12 }}>Audit ops</div>
      {['80 mails/j · 25 commandes/j cartographiés', 'Sage 100c + Outlook + SharePoint', '3 agents ops identifiés', 'Devis ferme 5 jours'].map((t, i) => (
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
      <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 12 }}>Roadmap 3 agents</div>
      {[{ l: 'Agent mails entrants (Outlook)', w: 90 }, { l: 'Agent ADV Sage 100c (RPA)', w: 70 }, { l: 'Agent GED SharePoint', w: 55 }, { l: 'Formation + rôle augmenté', w: 40 }].map((r, i) => (
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
      <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 14 }}>Intégrations actives</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        {[{ n: 'Sage 100c (RPA)', c: '#2563eb' }, { n: 'Outlook Graph API', c: '#0078d4' }, { n: 'SharePoint', c: '#0078d4' }, { n: 'OCR Engine', c: '#059669' }, { n: 'Classification ML', c: '#7c3aed' }, { n: 'Slack (alertes)', c: '#4a154b' }].map((t, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '7px 10px', borderRadius: 8, border: '1px solid #f0f0f0', background: '#fafafa', animation: active ? `slideIn .4s ${i * .1}s ease both` : 'none' }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: t.c }} />
            <span style={{ fontSize: 11, fontWeight: 700, color: '#52525b' }}>{t.n}</span>
            <span style={{ marginLeft: 'auto', fontSize: 9, color: '#22c55e', fontWeight: 800 }}>●</span>
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <div style={{ background: '#fff', borderRadius: 12, padding: 16, boxShadow: '0 4px 24px rgba(0,0,0,.08)', border: '1px solid #e4e4e7', animation: active ? 'floatCard 4s 1.5s ease-in-out infinite' : 'none' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <span style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em' }}>Résultats 14 mois</span>
        <span style={{ padding: '2px 8px', borderRadius: 9999, background: '#22c55e15', border: '1px solid #22c55e30', fontSize: 10, fontWeight: 800, color: '#22c55e' }}>Actif</span>
      </div>
      {[{ t: 'Mails traités / jour', v: '240 (×3)' }, { t: 'Commandes ERP / jour', v: '75 (×3)' }, { t: 'Turnover assistant', v: '0 %' }, { t: 'Heures sup', v: '0' }].map((r, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7px 0', borderBottom: '1px solid #f4f4f5', animation: active ? `countUp .5s ${i * .12}s ease both` : 'none' }}>
          <span style={{ fontSize: 12, color: '#52525b', fontWeight: 500 }}>{r.t}</span>
          <span style={{ fontSize: 14, fontWeight: 800, color: GREEN }}>{r.v}</span>
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
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 500, margin: '0 auto' }}>La même méthode appliquée ici en 6 semaines. Vérifiable sur ce cas concret.</p>
        </div>
        <div className="v2-grid4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
          {steps.map((s, i) => (
            <div key={i}>
              <div style={{ marginBottom: 24, minHeight: 180, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(16px)', transition: `all .6s ${i * .12}s ease` }}>
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

// ── Votre cas similaire ───────────────────────────────────────
function VotreCas() {
  const [ref, visible] = useInView(0.08);
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 860, margin: '0 auto', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all .6s ease' }}>
        <H2 style={{ marginBottom: 12 }}>Vous avez un poste assistant ops ou ADV en burn-out cyclique ?</H2>
        <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 36 }}>
          Trois questions pour évaluer si ce cas est transposable au vôtre.
        </p>
        <div style={{ borderRadius: 20, background: '#09090b', border: '1px solid #1e1e1e', overflow: 'hidden', marginBottom: 28 }}>
          <div style={{ padding: '14px 24px', borderBottom: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: EMERALD }} />
            <p style={{ fontSize: 12, fontWeight: 800, color: '#8a8a95', textTransform: 'uppercase', letterSpacing: '.12em', margin: 0 }}>3 critères de transposabilité</p>
          </div>
          {[
            { n: '01', text: 'Vous avez un turnover récurrent sur un poste back-office (assistant ops, assistant administratif, chargé ADV).' },
            { n: '02', text: 'Le poste cumule plusieurs missions répétitives : mails, ERP, documents, suivi fournisseurs.' },
            { n: '03', text: 'Vous traitez plus de 40 mails par jour et 15 commandes par jour sur le poste concerné.' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 16, padding: '18px 24px', borderBottom: i < 2 ? '1px solid #1a1a1a' : 'none' }}>
              <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: 8, background: `${EMERALD}18`, border: `1px solid ${EMERALD}35`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 10, fontWeight: 900, color: EMERALD }}>{item.n}</span>
              </div>
              <p style={{ fontSize: 15, color: '#a1a1aa', lineHeight: 1.65, margin: 0 }}>{item.text}</p>
            </div>
          ))}
          <div style={{ padding: '16px 24px', borderTop: '1px solid #1a1a1a', background: '#0a0a0a' }}>
            <p style={{ fontSize: 14, color: '#52525b', lineHeight: 1.65, margin: 0 }}>
              Si vous répondez oui aux 3, la transposition est très probable. Les <strong style={{ color: '#a1a1aa' }}>30 minutes offertes avec un expert</strong> servent à valider en détail.
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href="/agent-ia/ops/" style={{ padding: '14px 28px', borderRadius: 9999, background: '#09090b', color: '#fff', textDecoration: 'none', fontSize: 15, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'transform .15s' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.03)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)'; }}>
            Découvrir Agent IA pour les ops →
          </a>
          <a href="/contact" style={{ padding: '14px 28px', borderRadius: 9999, border: `1.5px solid ${EMERALD}40`, color: EMERALD, textDecoration: 'none', fontSize: 15, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, background: `${EMERALD}08`, transition: 'border-color .15s,background .15s' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = `${EMERALD}80`; (e.currentTarget as HTMLAnchorElement).style.background = `${EMERALD}14`; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = `${EMERALD}40`; (e.currentTarget as HTMLAnchorElement).style.background = `${EMERALD}08`; }}>
            Discuter de votre projet (30 min offertes) →
          </a>
        </div>
        <div style={{ marginTop: 40, paddingTop: 32, borderTop: '1px solid #e4e4e7' }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 16 }}>Voir d'autres cas clients</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a href="/cas-clients/" style={{ padding: '9px 18px', borderRadius: 9999, border: '1px solid #e4e4e7', fontSize: 14, fontWeight: 700, color: '#8a8a95', textDecoration: 'none', background: '#fff', display: 'inline-flex', alignItems: 'center', gap: 7, transition: 'border-color .15s,color .15s' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = '#09090b'; el.style.color = '#09090b'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = '#e4e4e7'; el.style.color = '#8a8a95'; }}>
              <span style={{ fontSize: 12 }}>←</span> Tous les cas clients
            </a>
            {[
              { href: '/cas-clients/cabinet-comptable-lyon/', label: 'Cabinet comptable Lyon' },
              { href: '/cas-clients/saas-b2b-agent-ia-service-client/', label: 'SaaS B2B · Service client' },
            ].map((c) => (
              <a key={c.href} href={c.href} style={{ padding: '9px 18px', borderRadius: 9999, border: '1px solid #e4e4e7', fontSize: 14, fontWeight: 700, color: '#8a8a95', textDecoration: 'none', background: '#fff', display: 'inline-flex', alignItems: 'center', gap: 7, transition: 'border-color .15s,color .15s' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = '#09090b'; el.style.color = '#09090b'; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = '#e4e4e7'; el.style.color = '#8a8a95'; }}>
                {c.label} <span style={{ fontSize: 12 }}>→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── CSS ───────────────────────────────────────────────────────
const globalStyles = `
  @keyframes gradDrift1 { 0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(3%,4%) scale(1.06)} }
  @keyframes floatCard { 0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)} }
  @keyframes slideIn { from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:translateX(0)} }
  @keyframes countUp { from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)} }

  .cc7-kpi-bento { display:grid; grid-template-columns:1fr 1fr 1fr; grid-template-rows:auto auto auto; gap:14px; }
  .cc7-kpi-hero { grid-column:1/2; grid-row:1/3; }
  .cc7-tl-items { display:grid; grid-template-columns:repeat(2,1fr); gap:6px 20px; }
  .cc7-tl-week-inline { display:inline-flex; }
  .cc7-lessons-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; align-items:start; }
  .cc7-agent-row { flex-direction:row; }
  .cc7-tl-row { min-width:0; overflow:hidden; }
  .cc7-tl-row > div:last-child { min-width:0; overflow:hidden; }
  .cc7-tl-items span { word-break:break-word; overflow-wrap:break-word; }

  @media (max-width:860px) {
    .cc7-hero-grid { grid-template-columns:1fr !important; }
    .cc7-stat-col { display:none !important; }
    .cc7-avant-grid { grid-template-columns:1fr !important; }
    .cc7-kpi-bento { grid-template-columns:1fr 1fr !important; grid-template-rows:auto !important; }
    .cc7-kpi-hero { grid-column:1/-1 !important; grid-row:auto !important; }
    .cc7-lessons-grid { grid-template-columns:1fr !important; }
    .v2-grid4 { grid-template-columns:repeat(2,1fr) !important; }
    .cc7-agent-row { flex-direction:column !important; gap:10px !important; }
    .cc7-tl-items { grid-template-columns:1fr !important; }
    .cc7-tl-week-inline { display:none !important; }
    .cc7-tl-row > div:first-child { width:68px !important; }
  }
  @media (max-width:680px) {
    .cc7-tl-row > div:first-child { width:52px !important; }
  }
  @media (max-width:500px) {
    .cc7-kpi-bento { grid-template-columns:1fr !important; }
    .cc7-kpi-hero { grid-column:1/-1 !important; }
    .v2-grid4 { grid-template-columns:1fr !important; }
  }
`;

export default function CasClientDistributeurB2BOpsPageClient() {
  return (
    <main>
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      <Hero />
      <LeClient />
      <AvantAlthoce />
      <LaSolution />
      <Resultats />
      <Temoignage />
      <Apprentissages />
      <Methodology />
      <VotreCas />
    </main>
  );
}
