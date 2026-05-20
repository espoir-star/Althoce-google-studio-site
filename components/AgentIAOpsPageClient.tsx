'use client';

import React, { useState, useEffect, useRef } from 'react';
import { steps, securityItems, agentTags } from '@/lib/data';
import { FAQAccordion } from '@/components/ui/data-display/FAQAccordion';
import type { FAQv2Item } from '@/lib/data';

const AC = '#2563eb';
const GREEN = '#16a34a';
const RED = '#ef4444';

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

// ── Ops Mailbox Mockup ────────────────────────────────────────
function OpsMailboxMockup() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 400);
    return () => clearTimeout(t);
  }, []);

  const mails = [
    { icon: '📋', label: 'ADV', action: 'Commande créée', from: 'client@acme.fr', subject: 'Commande réf. 2840', color: AC },
    { icon: '📦', label: 'Fournisseur', action: 'Avis livraison enregistré', from: 'livraison@logipro.fr', subject: 'Avis d\'expédition #4412', color: '#7c3aed' },
    { icon: '✅', label: 'Info client', action: 'Répondu automatiquement', from: 'sarah.m@dupont.com', subject: 'Délai de livraison ?', color: GREEN },
    { icon: '📊', label: 'Reporting', action: 'Traité + archivé', from: 'direction@althoce.com', subject: 'Chiffres semaine 20', color: '#d97706' },
    { icon: '❓', label: 'Escalade', action: 'Transmis à Julie (RH)', from: 'new@client.fr', subject: 'Litige facture #8821', color: RED },
    { icon: '📁', label: 'Document', action: 'Classé SharePoint', from: 'compta@fournisseur.fr', subject: 'Facture avril 2026', color: '#0891b2' },
  ];

  return (
    <div style={{ width: '100%', maxWidth: 420, margin: '0 auto' }}>
      <div style={{ padding: '12px 16px', borderRadius: '14px 14px 0 0', background: '#09090b', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {['#ef4444', '#f59e0b', '#22c55e'].map((c) => <div key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />)}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          <div style={{ width: 7, height: 7, borderRadius: '50%', background: GREEN, boxShadow: `0 0 6px ${GREEN}` }} />
          <span style={{ fontSize: 11, fontWeight: 700, color: '#52525b' }}>Boîte ops · tri en cours</span>
        </div>
        <div style={{ fontSize: 12, color: '#3f3f46' }}>OPS IA</div>
      </div>

      <div style={{ background: '#111' }}>
        {mails.map((m, i) => (
          <div key={i} style={{ padding: '10px 14px', borderBottom: i < mails.length - 1 ? '1px solid #1a1a1a' : 'none', opacity: loaded ? 1 : 0, transform: loaded ? 'none' : 'translateX(-8px)', transition: `all .4s ${i * .09 + .2}s ease` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 4 }}>
              <span style={{ fontSize: 13 }}>{m.icon}</span>
              <span style={{ fontSize: 9, fontWeight: 800, color: m.color, textTransform: 'uppercase', letterSpacing: '.07em', padding: '2px 6px', borderRadius: 4, background: `${m.color}18`, border: `1px solid ${m.color}30` }}>{m.label}</span>
              <span style={{ marginLeft: 'auto', fontSize: 9, fontWeight: 700, color: '#3f3f46' }}>{m.action}</span>
            </div>
            <div style={{ fontSize: 12, color: '#a1a1aa', paddingLeft: 19 }}>{m.from}</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#d4d4d8', paddingLeft: 19 }}>{m.subject}</div>
          </div>
        ))}
      </div>

      <div style={{ padding: '10px 14px', background: '#0a0a0a', borderRadius: '0 0 14px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #1a1a1a', flexWrap: 'wrap', gap: 6 }}>
        {[{ icon: '⚡', label: '47 mails traités', color: GREEN }, { icon: '↗', label: '4 escalades humaines', color: '#d97706' }, { icon: '✓', label: 'Zéro backlog', color: AC }].map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <span style={{ fontSize: 9, fontWeight: 900, color: item.color }}>{item.icon}</span>
            <span style={{ fontSize: 9, color: '#52525b', fontWeight: 600 }}>{item.label}</span>
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
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: 600, height: 600, borderRadius: '50%', background: `radial-gradient(circle,${AC}10 0%,transparent 65%)`, filter: 'blur(80px)', animation: 'gradDrift1 14s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', top: '30%', right: '-8%', width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle,#7c3aed0d 0%,transparent 65%)', filter: 'blur(100px)', animation: 'gradDrift2 18s ease-in-out infinite' }} />
      </div>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.025) 1px,transparent 1px)', backgroundSize: '48px 48px', maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%,black,transparent)', zIndex: 0 }} aria-hidden="true" />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1160, margin: '0 auto' }}>
        <div className="ops-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div style={{ minWidth: 0 }}>
            <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: '#a1a1aa', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 6, fontWeight: 500, flexWrap: 'wrap' }}>
              <a href="/" style={{ color: '#8a8a95', textDecoration: 'none' }}>Accueil</a>
              <span>›</span>
              <a href="/services/automatisation-ia/" style={{ color: '#8a8a95', textDecoration: 'none' }}>Automatisation</a>
              <span>›</span>
              <span style={{ color: '#09090b' }}>Agent IA ops</span>
            </nav>

            <h1 style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-.03em', color: '#09090b', marginBottom: 20 }}>
              Agent IA pour les opérations et le back-office : mails, documents, ADV{' '}
              <span style={{ color: AC }}>en pilote automatique.</span>
            </h1>

            <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 28, maxWidth: 520 }}>
              Mails ingérables, ADV en retard, documents à classer, fournisseurs à relancer : le poste ops cumule tout sans jamais de visibilité sur ce qui avance. Un agent IA Althoce absorbe la couche répétitive. Votre équipe sort du burn-out cyclique.
            </p>

            <div style={{ marginBottom: 32, overflow: 'hidden' }}>
              <div className="ops-pills" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {['+758 agents en production', '70 % mails N1 absorbés', 'ADV traitée en temps réel', '+758 agents en production', '70 % mails N1 absorbés', 'ADV traitée en temps réel'].map((t, i) => (
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
              <a href="#agents"
                style={{ padding: '14px 28px', borderRadius: 9999, border: '1.5px solid #e4e4e7', color: '#09090b', textDecoration: 'none', fontSize: 15, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, background: '#fff', transition: 'border-color .15s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = AC; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#e4e4e7'; }}>
                Voir les 4 agents ops ↓
              </a>
            </div>
          </div>

          <div className="ops-mockup-col">
            <OpsMailboxMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── KPI Strip ─────────────────────────────────────────────────
const kpiStrip = [
  { value: '70 %', label: 'Mails N1 absorbés', sub: 'sans intervention humaine' },
  { value: '3-5 h', label: 'Libérées / jour', sub: 'pour l\'équipe ops en poste' },
  { value: '< 0,3 %', label: 'Taux d\'erreur', sub: 'sur commandes automatisées' },
  { value: '< 6 mois', label: 'ROI typique', sub: 'sur équipes ops saturées' },
];

function KPIStrip() {
  const [ref, visible] = useInView(0.1);
  return (
    <section ref={ref} style={{ borderTop: '1px solid #e4e4e7', borderBottom: '1px solid #e4e4e7', background: '#fafafa' }}>
      <div className="ops-kpi-strip" style={{ maxWidth: 1160, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
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
        <H2 style={{ marginBottom: 16 }}>Ce qu'un agent IA absorbe vraiment dans les opérations et le back-office</H2>
        <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 24, maxWidth: 800 }}>
          Le métier ops PME est composé à <strong style={{ color: '#09090b' }}>80 % de tâches répétitives à faible valeur ajoutée cognitive</strong> : trier les 60 mails entrants quotidiens, créer les commandes dans l'ERP à partir des mails clients, rapprocher les bons de livraison, mettre à jour les bases fournisseurs, suivre les relances paiement, préparer les rapports hebdomadaires, gérer les notes de frais. Un agent IA Althoce absorbe ces tâches en autonomie. Vos humains gardent ce qui demande vraiment leur expertise : <strong style={{ color: '#09090b' }}>arbitrage client mécontent, négociation fournisseur exceptionnelle, gestion d'urgence opérationnelle, accompagnement nouveaux managers.</strong>
        </p>
        <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.8, marginBottom: 40 }}>
          Concrètement, derrière un agent IA ops Althoce : une cartographie de vos processus transversaux (typiquement 5 à 12 processus identifiés au cadrage), une intégration profonde à votre{' '}
          <a href="/services/integration-ia/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>ERP / CRM / outils métier</a>,
          et une logique d'escalade claire (l'agent fait, l'humain valide les cas sensibles ou nouveaux). Pour un poste entier d'assistant administratif ou de chargé ADV automatisé de bout en bout, voir{' '}
          <a href="/services/employe-ia/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>Employé IA</a>.
        </p>

        <div style={{ borderRadius: 20, background: '#09090b', border: '1px solid #1e1e1e', overflow: 'hidden' }}>
          <div style={{ padding: '14px 24px', borderBottom: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: AC }} />
            <p style={{ fontSize: 12, fontWeight: 800, color: '#8a8a95', textTransform: 'uppercase', letterSpacing: '.12em', margin: 0 }}>Trois questions pour qualifier votre besoin ops</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              { n: '01', q: "Votre poste d'assistant ops ou d'assistant administratif est-il en burn-out cyclique (turnover régulier, difficulté à recruter, plaintes récurrentes de la personne en poste) ?" },
              { n: '02', q: "Vos mails entrants opérationnels prennent-ils plus de 24 heures pour être traités, alors que la majorité ont des réponses standards ?" },
              { n: '03', q: "Votre ADV ou suivi fournisseurs prend-il du retard chaque mois, faute de bande passante équipe ?" },
            ].map((row, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '18px 24px', borderBottom: i < 2 ? '1px solid #1a1a1a' : 'none' }}>
                <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: 8, background: `${AC}18`, border: `1px solid ${AC}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1 }}>
                  <span style={{ fontSize: 10, fontWeight: 900, color: AC }}>{row.n}</span>
                </div>
                <p style={{ fontSize: 15, color: '#a1a1aa', lineHeight: 1.65, margin: 0 }}>{row.q}</p>
              </div>
            ))}
          </div>
          <div style={{ padding: '16px 24px', borderTop: '1px solid #1a1a1a', background: '#0a0a0a' }}>
            <p style={{ fontSize: 14, color: '#52525b', lineHeight: 1.65, margin: 0 }}>
              Si oui à 1 question sur 3, un agent IA ops transforme votre productivité. Si oui aux 3, votre back-office est en train de devenir un goulet d'étranglement pour le reste de l'entreprise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Before / After ────────────────────────────────────────────
const avantItems = [
  { time: '8h30', label: "60 messages reçus pendant la nuit. Tri manuel à venir. Mélange de demandes clients, avis fournisseurs, urgences, factures, notes internes." },
  { time: '9h-11h30', label: "Tri mails, création commandes ERP à partir de mails (15 min par commande pour ressaisir coordonnées et produits), réponse à 8 questions basiques. Documents reçus non classés." },
  { time: '11h30', label: "Un fournisseur appelle pour une commande en retard. 30 minutes pour comprendre où c'est bloqué." },
  { time: '14h-17h', label: "Suite des mails du matin pas finis, 4 nouveaux problèmes urgents, préparation du reporting hebdo : 3h pour consolider les chiffres. Documents s'accumulent." },
  { time: '17h30', label: "La direction demande un état des relances paiement client. Pas de réponse précise disponible, à recompiler." },
  { time: 'Bilan', label: "80 mails traités sur 90. 20 documents non classés. Reporting pas fini. Demain rebelote." },
];

const apresItems = [
  { time: '8h30', label: "Dashboard : 47 mails traités par l'agent (étiquetage, réponses standard, 12 commandes ERP créées). 13 mails escalés avec contexte enrichi pour l'humain." },
  { time: '9h-11h', label: "Traitement concentré des 13 escalades — chaque cas reçoit l'attention qu'il mérite. L'agent suggère une réponse type pour chaque cas, l'humain ajuste et valide." },
  { time: '11h', label: "Appel fournisseur commande en retard. L'agent a déjà identifié le problème (rupture stock déclarée hier soir) et pré-préparé la solution. 10 min au lieu de 30." },
  { time: '14h', label: "Reporting hebdo automatique reçu ce matin (généré pendant la nuit). 20 minutes de relecture stratégique avant envoi direction." },
  { time: '15h', label: "2h pour avancer le projet de refonte du processus ADV — reporté depuis 6 mois faute de temps." },
  { time: '17h', label: "La direction demande un état des relances paiement client. L'agent tient le tableau à jour. Réponse en 30 secondes." },
  { time: 'Bilan', label: "Tous les mails traités. Documents classés en continu. Reporting envoyé. Le projet ADV a avancé. On rentre à 17h45." },
];

function BeforeAfter() {
  const [ref, visible] = useInView(0.06);
  const [tab, setTab] = useState<'avant' | 'apres'>('avant');

  const tabs = [
    { key: 'avant' as const, label: 'Avant', color: RED, items: avantItems },
    { key: 'apres' as const, label: 'Après', color: GREEN, items: apresItems },
  ];
  const active = tabs.find((t) => t.key === tab)!;

  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <H2 style={{ marginBottom: 12 }}>Avant Althoce vs Après Althoce. La journée type d'un assistant ops PME.</H2>
          <p style={{ fontSize: 16, color: '#52525b' }}>Journée type observée chez nos clients ETI industrielles, distributeurs et e-commerces après déploiement.</p>
        </div>

        {/* Desktop split */}
        <div className="ops-ba-desktop" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid #e4e4e7', background: '#fff' }}>
            <div style={{ padding: '16px 24px', borderBottom: '1px solid #f4f4f5', display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: RED }} />
              <span style={{ fontSize: 13, fontWeight: 800, color: '#09090b', textTransform: 'uppercase', letterSpacing: '.08em' }}>Avant Althoce</span>
            </div>
            {avantItems.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, padding: '16px 24px', borderBottom: i < avantItems.length - 1 ? '1px solid #f4f4f5' : 'none', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(-8px)', transition: `all .5s ${i * .08}s ease` }}>
                <div style={{ flexShrink: 0, paddingTop: 2 }}>
                  <span style={{ fontSize: 12, fontWeight: 800, color: item.time === 'Bilan' ? RED : '#a1a1aa', letterSpacing: '.02em', whiteSpace: 'nowrap' }}>{item.time}</span>
                </div>
                <p style={{ fontSize: 14, color: '#52525b', lineHeight: 1.65, margin: 0 }}>{item.label}</p>
              </div>
            ))}
          </div>
          <div style={{ borderRadius: 20, overflow: 'hidden', border: `1px solid ${AC}25`, background: '#fff' }}>
            <div style={{ padding: '16px 24px', borderBottom: `1px solid ${AC}15`, display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: GREEN }} />
              <span style={{ fontSize: 13, fontWeight: 800, color: '#09090b', textTransform: 'uppercase', letterSpacing: '.08em' }}>Après Althoce</span>
            </div>
            {apresItems.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, padding: '16px 24px', borderBottom: i < apresItems.length - 1 ? `1px solid ${AC}10` : 'none', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(8px)', transition: `all .5s ${i * .08}s ease` }}>
                <div style={{ flexShrink: 0, paddingTop: 2 }}>
                  <span style={{ fontSize: 12, fontWeight: 800, color: item.time === 'Bilan' ? GREEN : AC, letterSpacing: '.02em', whiteSpace: 'nowrap' }}>{item.time}</span>
                </div>
                <p style={{ fontSize: 14, color: '#52525b', lineHeight: 1.65, margin: 0 }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile tabs */}
        <div className="ops-ba-mobile" style={{ display: 'none', flexDirection: 'column', gap: 0 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, padding: 4, background: '#f0f0f0', borderRadius: 14, marginBottom: 16 }}>
            {tabs.map((t) => (
              <button key={t.key} onClick={() => setTab(t.key)}
                style={{ padding: '11px 8px', borderRadius: 10, border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 14, fontWeight: 800, background: tab === t.key ? '#fff' : 'transparent', color: tab === t.key ? t.color : '#52525b', boxShadow: tab === t.key ? '0 1px 8px rgba(0,0,0,.10)' : 'none', transition: 'all .2s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7 }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: tab === t.key ? t.color : '#d4d4d8', flexShrink: 0, display: 'inline-block' }} />
                {t.label} Althoce
              </button>
            ))}
          </div>
          <div style={{ borderRadius: 18, overflow: 'hidden', border: `1.5px solid ${active.color}28`, background: '#fff', boxShadow: '0 2px 16px rgba(0,0,0,.05)' }}>
            {active.items.map((item, i) => (
              <div key={`${tab}-${i}`} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '14px 16px', borderBottom: i < active.items.length - 1 ? '1px solid #f4f4f5' : 'none', background: item.time === 'Bilan' ? (active.color === RED ? '#fff5f5' : '#f0fdf4') : (i % 2 === 0 ? '#fff' : '#fafafa') }}>
                <span style={{ flexShrink: 0, fontSize: 10, fontWeight: 900, whiteSpace: 'nowrap', padding: '4px 8px', borderRadius: 7, background: item.time === 'Bilan' ? active.color : '#ebebeb', color: item.time === 'Bilan' ? '#fff' : '#8a8a95', marginTop: 2 }}>{item.time}</span>
                <p style={{ fontSize: 14, lineHeight: 1.65, margin: 0, color: item.time === 'Bilan' ? '#09090b' : '#8a8a95', fontWeight: item.time === 'Bilan' ? 700 : 400 }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 40, padding: '20px 28px', borderRadius: 16, background: `${AC}08`, border: `1px solid ${AC}20` }}>
          <p style={{ fontSize: 15, color: '#52525b', lineHeight: 1.7, margin: 0, textAlign: 'center' }}>
            Ce gain ne se mesure pas seulement en mails traités ou en commandes créées. Il se mesure aussi en <strong>fin du burn-out cyclique</strong> sur le poste ops. Statistique observée : aucun de nos clients ayant déployé un agent IA ops n'a vu son assistant administratif partir après déploiement (vs un turnover annuel typique de 25 à 40 % sur ce poste dans les PME).
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Agents Listing ────────────────────────────────────────────
const agents = [
  {
    num: '01',
    name: 'Agent IA traitement mails entrants',
    color: AC,
    badge: 'Mails',
    who: 'Assistant ops, office manager, responsable back-office, chargé ADV',
    desc: "Reçoit les mails sur une boîte dédiée (commandes@, contact@, ops@), les classifie automatiquement (demande client, avis fournisseur, urgence, document administratif, bruit), répond aux demandes standard, crée les tickets ou les commandes dans les outils métier, escalade les cas complexes avec contexte enrichi à l'humain.",
    tools: ['Outlook', 'Gmail', 'SAP', 'Sage', 'Cegid', 'HubSpot', 'Salesforce', 'Zendesk', 'Freshdesk'],
    impact: '60 à 80 % des mails N1 absorbés en autonomie. Libération de 3 à 5 heures par jour. Fin du backlog mails.',
    delai: '2 à 4 semaines',
  },
  {
    num: '02',
    name: 'Agent IA ADV (Administration des Ventes)',
    color: GREEN,
    badge: 'ADV',
    who: 'Chargé ADV, assistant commercial, responsable opérations, DAF PME',
    desc: "Crée les commandes dans l'ERP à partir des bons de commande reçus par mail ou portail, suit l'avancement (préparation, expédition, livraison), envoie les avis d'expédition au client, déclenche la facturation au bon moment, gère les relances de paiement amiables.",
    tools: ['SAP', 'Sage', 'Cegid', 'Microsoft Dynamics', 'Colissimo', 'UPS', 'DPD', 'Chronopost', 'FedEx'],
    impact: '50 à 200 commandes / mois automatisées. ADV en temps réel. Time-to-cash réduit de plusieurs jours.',
    delai: '3 à 5 semaines (intégration ERP profonde)',
  },
  {
    num: '03',
    name: 'Agent IA gestion documentaire',
    color: '#d97706',
    badge: 'Documents',
    who: 'Assistant ops, office manager, responsable comptable, assistante de direction',
    desc: "Reçoit les documents entrants (factures, bons de livraison, contrats, attestations, certificats), les classifie automatiquement, les renomme selon votre convention, les range dans la bonne arborescence (SharePoint, Google Drive, Dropbox, GED interne), met à jour les bases associées, alerte sur les documents manquants ou expirés.",
    tools: ['SharePoint', 'Google Drive', 'Dropbox', 'GED interne', 'Mindee', 'AWS Textract'],
    impact: '100 à 500 documents / mois classés avec rigueur. Fin des documents en attente. Recherche instantanée.',
    delai: '2 à 3 semaines',
  },
  {
    num: '04',
    name: 'Agent IA suivi fournisseurs et reporting opérationnel',
    color: '#7c3aed',
    badge: 'Fournisseurs',
    who: 'Responsable achats, responsable ops, DAF, direction générale',
    desc: "Maintient la base fournisseurs à jour (coordonnées, conditions commerciales, certifications, vigilance financière), suit les contrats et alerte sur les renouvellements ou expirations, génère le reporting opérationnel hebdomadaire ou mensuel automatisé pour la direction.",
    tools: ['ERP', 'Pappers', 'Societe.com', 'Infogreffe', 'Power BI', 'Looker', 'Metabase'],
    impact: 'Surveillance de 100 à 500 fournisseurs. Zéro contrat échu sans alerte. Reporting fiable et ponctuel.',
    delai: '3 à 4 semaines',
  },
];

function AgentCard({ agent, index, visible }: { agent: typeof agents[0]; index: number; visible: boolean }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div style={{ borderRadius: 20, background: '#fff', border: '1px solid #e4e4e7', overflow: 'hidden', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: `all .5s ${index * .1}s ease` }}>
      <button onClick={() => setExpanded(!expanded)}
        style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '22px 24px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit' }}>
        <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: 12, background: `${agent.color}12`, border: `1px solid ${agent.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: 13, fontWeight: 900, color: agent.color }}>{agent.num}</span>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 16, fontWeight: 800, color: '#09090b', letterSpacing: '-.01em' }}>{agent.name}</div>
          <div className="ops-agent-badge" style={{ marginTop: 4 }}>
            <span style={{ padding: '3px 10px', borderRadius: 9999, background: `${agent.color}12`, border: `1px solid ${agent.color}30`, fontSize: 11, fontWeight: 800, color: agent.color }}>{agent.badge}</span>
          </div>
        </div>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform .25s', color: '#a1a1aa' }}>
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {expanded && (
        <div className="ops-agent-expanded" style={{ padding: '0 24px 24px', paddingLeft: 80 }}>
          <p style={{ fontSize: 14, color: '#a1a1aa', marginBottom: 12, fontStyle: 'italic' }}>{agent.who}</p>
          <p style={{ fontSize: 15, color: '#52525b', lineHeight: 1.7, marginBottom: 16 }}>{agent.desc}</p>
          <div className="ops-agents-detail" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div>
              <p style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 8 }}>Outils intégrés</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {agent.tools.map((t) => (
                  <span key={t} style={{ padding: '3px 10px', borderRadius: 6, background: '#f4f4f5', fontSize: 12, fontWeight: 600, color: '#52525b' }}>{t}</span>
                ))}
              </div>
            </div>
            <div>
              <p style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 8 }}>Impact typique</p>
              <p style={{ fontSize: 14, color: '#09090b', fontWeight: 700, lineHeight: 1.65, margin: 0 }}>{agent.impact}</p>
              <p style={{ fontSize: 13, color: '#8a8a95', marginTop: 6, margin: 0 }}>Délai : {agent.delai}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function AgentsListing() {
  const [ref, visible] = useInView(0.06);
  return (
    <section id="agents" ref={ref} style={{ padding: '96px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        <div style={{ marginBottom: 48, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all .6s ease' }}>
          <H2 style={{ marginBottom: 12 }}>4 agents IA Althoce déployés en standard dans les opérations</H2>
          <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.65 }}>Quatre agents complémentaires que vous pouvez déployer indépendamment ou combiner.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {agents.map((agent, i) => (
            <AgentCard key={agent.num} agent={agent} index={i} visible={visible} />
          ))}
        </div>
        <div style={{ marginTop: 32, padding: '20px 24px', borderRadius: 16, background: '#fff', border: '1px solid #e4e4e7' }}>
          <p style={{ fontSize: 15, color: '#52525b', lineHeight: 1.7, margin: 0 }}>
            Pour un poste entier d'assistant administratif, de chargé ADV ou de responsable ops automatisé de bout en bout, voir{' '}
            <a href="/services/employe-ia/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>Employé IA</a>.{' '}
            Les <strong>30 minutes offertes avec un expert</strong> servent à qualifier la combinaison d'agents la plus pertinente pour votre contexte.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Cas Client ────────────────────────────────────────────────
const kpis = [
  { label: 'Mails traités / jour', avant: '80', apres: '240', unit: '+200 %' },
  { label: 'Commandes ERP / jour', avant: '25', apres: '75', unit: '+200 %' },
  { label: 'Documents classés', avant: '60 %', apres: '100 %', unit: '+40 pts' },
  { label: 'Turnover ops 12 mois', avant: '80 %', apres: '0 %', unit: '−80 pts' },
];

function CasClient() {
  const [ref, visible] = useInView(0.08);
  return (
    <section ref={ref} style={{ background: '#09090b', borderTop: '1px solid #1a1a1a', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.018) 1px,transparent 1px)', backgroundSize: '52px 52px', maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%,black,transparent)', pointerEvents: 'none' }} />
      <div aria-hidden="true" style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: 800, height: 500, background: `radial-gradient(ellipse,${AC}0a 0%,transparent 60%)`, filter: 'blur(80px)', pointerEvents: 'none' }} />

      <div style={{ padding: '88px 24px 72px', maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 44, flexWrap: 'wrap', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(12px)', transition: 'all .5s ease' }}>
          {['Distributeur B2B', 'E-commerce industriel', '45 collaborateurs', 'Équipe ops 4 personnes'].map((tag, i) => (
            <span key={i} style={{ padding: '4px 12px', borderRadius: 9999, border: '1px solid #222', fontSize: 11, fontWeight: 600, color: '#8a8a95', background: '#111', letterSpacing: '.02em' }}>{tag}</span>
          ))}
          <div style={{ height: 1, flex: 1, minWidth: 40, background: 'linear-gradient(to right,#222,transparent)' }} aria-hidden="true" />
        </div>

        <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(28px)', transition: 'all .7s .12s ease' }}>
          <div aria-hidden="true" style={{ fontSize: 72, lineHeight: 0.65, color: AC, fontFamily: 'Georgia, serif', fontWeight: 900, opacity: 0.45, marginBottom: 20, display: 'block' }}>"</div>

          <blockquote style={{ fontSize: 'clamp(17px,2.2vw,24px)', fontWeight: 700, color: '#f0f0f0', lineHeight: 1.65, margin: '0 0 36px', fontStyle: 'normal', paddingLeft: 20, borderLeft: `3px solid ${AC}55` }}>
            On était dans un cycle infernal : assistant ops qui démissionnait tous les 12 à 18 mois parce que le poste est insoutenable, et 6 mois pour former le remplaçant. On avait évalué le coût caché à plus de 40 000 € par an. On a déployé l'agent IA ops en 6 semaines. L'assistant en poste a sauvé sa santé mentale, on a triplé le volume de commandes traitées, et personne n'a démissionné en 14 mois. C'est le projet IT le plus rentable qu'on ait fait.
          </blockquote>

          <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', marginBottom: 32 }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: `${AC}15`, border: `1.5px solid ${AC}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <circle cx="11" cy="9" r="4.5" stroke={AC} strokeWidth="1.5"/>
                <path d="M4 20C4 16.7 7.1 14 11 14S18 16.7 18 20" stroke={AC} strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 15, fontWeight: 800, color: '#e4e4e7', letterSpacing: '-.01em' }}>DAF</div>
              <div style={{ fontSize: 13, color: '#3f3f46', marginTop: 2 }}>Distributeur B2B · 45 collaborateurs · e-commerce industriel</div>
            </div>
            <div style={{ padding: '7px 16px', borderRadius: 9999, background: '#16a34a12', border: '1px solid #16a34a30', fontSize: 14, fontWeight: 800, color: GREEN, flexShrink: 0 }}>0 démission en 14 mois</div>
          </div>

          <p style={{ fontSize: 15, color: '#52525b', lineHeight: 1.75, marginBottom: 12 }}>
            Avant la mission Althoce, l'équipe ops 4 personnes subissait un turnover récurrent sur le poste d'assistant administratif. Le poste cumule mails entrants, ADV, gestion documentaire, suivi fournisseurs, relances. La personne en poste tenait 12 à 18 mois avant le burn-out et la démission. Le coût caché du turnover dépassait 40 000 € annuels.
          </p>
          <p style={{ fontSize: 15, color: '#52525b', lineHeight: 1.75, marginBottom: 24 }}>
            En 6 semaines, 3 agents IA ops ont été déployés (mails entrants, ADV, gestion documentaire). L'assistant en poste est passé d'exécution sous pression à validation et arbitrage. Le volume traité a triplé sans embauche. 14 mois plus tard, la personne est toujours en poste et monte en compétences sur des sujets plus stratégiques.
          </p>

          <a href="/cas-clients/distributeur-b2b-agent-ia-ops/" style={{ fontSize: 15, fontWeight: 700, color: AC, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            Voir le cas client complet →
          </a>
        </div>
      </div>

      <div style={{ borderTop: '1px solid #1a1a1a', position: 'relative', zIndex: 1 }}>
        <div className="ops-kpi-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', opacity: visible ? 1 : 0, transition: 'opacity .6s .3s ease' }}>
          {kpis.map((k, i) => (
            <div key={i} style={{ padding: '32px 24px', borderRight: i < kpis.length - 1 ? '1px solid #1a1a1a' : 'none', textAlign: 'center', position: 'relative' }}>
              <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: '20%', right: '20%', height: 2, background: `linear-gradient(to right,transparent,${AC}55,transparent)` }} />
              <div style={{ fontSize: 10, fontWeight: 700, color: '#3f3f46', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 18 }}>{k.label}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 10, marginBottom: 14, flexWrap: 'wrap' }}>
                <span style={{ fontSize: 15, fontWeight: 600, color: '#3f3f46', textDecoration: 'line-through', textDecorationColor: `${RED}90` }}>{k.avant}</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
                  <path d="M2 7H12M12 7L8.5 3.5M12 7L8.5 10.5" stroke={AC} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span style={{ fontSize: 26, fontWeight: 900, color: '#ffffff', letterSpacing: '-.03em', lineHeight: 1 }}>{k.apres}</span>
              </div>
              <span style={{ fontSize: 13, fontWeight: 800, color: GREEN, padding: '4px 14px', borderRadius: 9999, background: '#16a34a12', border: '1px solid #16a34a28' }}>{k.unit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Marquee ───────────────────────────────────────────────────
function MarqueeMetiers() {
  return (
    <section style={{ padding: '64px 0', background: '#fff', borderTop: '1px solid #e4e4e7', borderBottom: '1px solid #e4e4e7' }}>
      <p style={{ textAlign: 'center', fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.14em', marginBottom: 28 }}>Déployé dans tous les secteurs d'activité</p>
      <div style={{ overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 100, background: 'linear-gradient(to right,#fff,transparent)', zIndex: 2 }} aria-hidden="true" />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 100, background: 'linear-gradient(to left,#fff,transparent)', zIndex: 2 }} aria-hidden="true" />
        <div className="ticker-slow" role="marquee" aria-label="Secteurs couverts par les agents IA ops">
          {[...agentTags, ...agentTags].map((t, i) => (
            <div key={i} style={{ flexShrink: 0, padding: '8px 16px', borderRadius: 9999, border: '1px solid #e4e4e7', background: '#fafafa', fontSize: 13, fontWeight: 600, color: '#52525b', whiteSpace: 'nowrap', marginRight: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: AC, flexShrink: 0 }} />
              {t.name}
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
      {['Volume mails / jour', 'Processus ADV cartographiés', 'ERP / CRM à brancher', 'Documents / mois'].map((t, i) => (
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
      <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 12 }}>Roadmap ops</div>
      {[{ l: 'Agent mails entrants', w: 90 }, { l: 'Agent ADV', w: 72 }, { l: 'Agent documents', w: 55 }, { l: 'Agent fournisseurs', w: 40 }].map((r, i) => (
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
        {[{ n: 'SAP', c: '#0066b3' }, { n: 'Sage', c: '#00b050' }, { n: 'Outlook', c: '#0078d4' }, { n: 'SharePoint', c: '#038387' }, { n: 'HubSpot', c: '#ff7a59' }, { n: 'Colissimo', c: '#fecc00' }].map((t, i) => (
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
        <span style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em' }}>Agent ops actif</span>
        <span style={{ padding: '2px 8px', borderRadius: 9999, background: '#22c55e15', border: '1px solid #22c55e30', fontSize: 10, fontWeight: 800, color: '#22c55e' }}>Actif</span>
      </div>
      {[{ t: 'Mails traités aujourd\'hui', v: '47' }, { t: 'Commandes ERP créées', v: '12' }, { t: 'Documents classés', v: '38' }, { t: 'Reporting envoyé direction', v: '1' }].map((r, i) => (
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
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 500, margin: '0 auto' }}>Quatre étapes courtes. Votre premier agent ops en production en moins de 4 semaines.</p>
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
  <svg key="0" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 2L3 5v5c0 4.4 3 8.3 7 9 4-0.7 7-4.6 7-9V5l-7-3z" stroke={AC} strokeWidth="1.5" strokeLinejoin="round"/><path d="M7 10l2 2 4-4" stroke={AC} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg key="1" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="3" y="9" width="14" height="9" rx="2" stroke={AC} strokeWidth="1.5"/><path d="M7 9V6a3 3 0 016 0v3" stroke={AC} strokeWidth="1.5" strokeLinecap="round"/></svg>,
  <svg key="2" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="7" stroke={AC} strokeWidth="1.5"/><path d="M10 6v4l3 2" stroke={AC} strokeWidth="1.5" strokeLinecap="round"/></svg>,
  <svg key="3" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="7" r="3.5" stroke={AC} strokeWidth="1.5"/><path d="M4 18c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke={AC} strokeWidth="1.5" strokeLinecap="round"/></svg>,
];

function Security() {
  const [ref, visible] = useInView(0.08);
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#09090b', borderTop: '1px solid #1a1a1a' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="v2-grid-hero" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center', marginBottom: 48 }}>
          <div>
            <span style={{ fontSize: 12, fontWeight: 800, color: AC, textTransform: 'uppercase', letterSpacing: '.14em' }}>Souveraineté & confidentialité</span>
            <H2 style={{ marginTop: 12, marginBottom: 20, color: '#fff' }}>Vos données opérationnelles. Hébergées en France. Jamais exposées.</H2>
            <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.75, marginBottom: 20 }}>
              Anonymisation des PII (noms clients, IBAN, adresses) avant tout envoi LLM si vous utilisez les modèles propriétaires (OpenAI, Anthropic). Pour la souveraineté maximale (secteurs sensibles : défense, santé, finance), <strong style={{ color: '#a1a1aa' }}>Mistral hébergé en France sur OVH ou Scaleway</strong> + auto-hébergement infra possible.
            </p>
            <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.75 }}>
              Chaque action de l'agent ops est <strong style={{ color: '#a1a1aa' }}>journalisée et auditable</strong> : qui a fait quoi, quand, sur quel mail ou quelle commande. Possibilité d'annulation rapide. Votre code, vos prompts, vos workflows et vos accès LLM vous appartiennent à 100 % — sans abonnement obligatoire.
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
const faqOps: FAQv2Item[] = [
  {
    q: "Quelle est la différence entre un agent IA ops et un RPA (Robotic Process Automation) classique ?",
    a: "Un RPA suit des règles fixes (\"si tu reçois un mail avec X, alors Y\"). Il plante dès qu'un cas sort du scénario prévu. Un agent IA ops Althoce comprend le contexte d'un mail en langage naturel, s'adapte aux reformulations, gère les exceptions, escalade intelligemment. Concrètement : le RPA traite 30 % des cas, l'agent IA en traite 70 à 80 %. Si vous avez déjà un RPA (Blue Prism, UiPath, Automation Anywhere), nous pouvons intégrer l'agent IA en surcouche pour gérer les exceptions que le RPA ne sait pas traiter.",
  },
  {
    q: "L'agent peut-il vraiment comprendre des mails clients ou fournisseurs en langage naturel ?",
    a: "Oui. Modèles LLM (Mistral, Claude, GPT) qui comprennent le français professionnel, les reformulations, les fautes de frappe, les abréviations métier. Détection des intentions sous-jacentes : un client qui écrit \"il n'est pas arrivé\" déclenche un check commande, un fournisseur qui écrit \"rupture sur la référence X\" déclenche une alerte stock. Test au cadrage sur 200 mails historiques de votre boîte pour calibrer la précision.",
  },
  {
    q: "Quel investissement pour un agent IA ops et quel ROI attendre ?",
    a: "Tarification entièrement sur devis selon votre contexte : volume de mails ou commandes à traiter, nombre d'outils branchés (ERP, CRM, ticketing, transporteurs, GED), profondeur d'intégration. ROI typique 3 à 6 mois sur les équipes ops saturées. Indicateur fort observé : fin du turnover sur le poste assistant ops (coût caché souvent supérieur à 40 K€/an dans les PME). Tout démarre par 30 minutes offertes avec un expert.",
  },
  {
    q: "L'agent peut-il s'intégrer à mon ERP existant (SAP, Sage, Cegid, Dynamics) ?",
    a: "Oui. SAP, Sage (toutes versions, on-premise ou cloud), Cegid, Microsoft Dynamics, Odoo en standard. Pour les ERP propriétaires ou anciennes versions sans API, voir Intégration IA (/services/integration-ia/) qui détaille les connecteurs custom (API quand disponible, RPA en surcouche sinon).",
  },
  {
    q: "Que se passe-t-il si l'agent crée une commande erronée dans l'ERP ?",
    a: "Trois garde-fous : validation humaine systématique sur les commandes sensibles (montant > seuil défini au cadrage, nouveau client, demande exceptionnelle) ; checks de cohérence automatiques (référence produit existante, prix dans la fourchette tarif client, conditions de paiement valides) ; log auditable de chaque action avec possibilité d'annulation rapide. Taux d'erreur observé chez nos clients : inférieur à 0,3 %.",
  },
  {
    q: "L'agent va-t-il remplacer mon assistant administratif ?",
    a: "Non. L'assistant en poste est redéployé sur les sujets à valeur (validation, arbitrage, accompagnement managers, projet refonte processus). Statistique observée : aucun assistant ops n'a quitté l'entreprise suite au déploiement, et le turnover historique sur ce poste a chuté drastiquement. La transformation : passage d'exécutant sous pression à pilote orchestrateur.",
  },
  {
    q: "Mes données opérationnelles (clients, fournisseurs, commandes) restent-elles confidentielles ?",
    a: "Oui. Anonymisation des PII (noms clients, IBAN, adresses) avant tout envoi LLM si vous utilisez les modèles propriétaires. Pour la souveraineté maximale (secteurs défense, santé, finance), Mistral hébergé en France + auto-hébergement infra possible.",
  },
  {
    q: "En combien de temps voit-on les premiers résultats ?",
    a: "Pour un agent traitement mails : impact dès la première semaine après go-live, calibrage sur 2-3 semaines. Pour un agent ADV : montée en charge sur 3 à 4 semaines (l'agent apprend les patterns de votre catalogue et clients). Pour un agent gestion documentaire : impact immédiat. ROI plein typique 3 à 6 mois.",
  },
];

function FAQ() {
  return (
    <section id="faq" style={{ padding: '96px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <H2 style={{ marginBottom: 12 }}>Questions fréquentes sur les agents IA opérations</H2>
          <p style={{ fontSize: 16, color: '#52525b' }}>Huit questions qui reviennent systématiquement lors des premiers échanges.</p>
        </div>
        <FAQAccordion items={faqOps} />
      </div>
    </section>
  );
}

// ── Responsive CSS ────────────────────────────────────────────
const globalStyles = `
  .ops-ba-mobile { display: none; }
  @keyframes gradDrift1 { 0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(3%,4%) scale(1.06)} }
  @keyframes gradDrift2 { 0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(-4%,-3%) scale(1.08)} }
  @keyframes floatCard { 0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)} }
  @keyframes slideIn { from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:translateX(0)} }
  @keyframes countUp { from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)} }
  @keyframes pillsScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  .ticker-slow { display:flex;animation:tickerSlide 70s linear infinite;width:max-content; }
  @keyframes tickerSlide { from{transform:translateX(0)}to{transform:translateX(-50%)} }
  @media (max-width: 860px) {
    .ops-hero-grid { grid-template-columns: 1fr !important; }
    .ops-mockup-col { display: none !important; }
    .ops-kpi-strip { grid-template-columns: repeat(2, 1fr) !important; }
    .ops-kpi-strip > div:nth-child(odd) { border-right: 1px solid #e4e4e7 !important; }
    .ops-kpi-strip > div:nth-child(1), .ops-kpi-strip > div:nth-child(2) { border-bottom: 1px solid #e4e4e7 !important; }
    .ops-kpi-grid { grid-template-columns: repeat(2, 1fr) !important; }
    .ops-kpi-grid > div { border-right: none !important; border-bottom: 1px solid #1a1a1a; }
    .ops-kpi-grid > div:last-child, .ops-kpi-grid > div:nth-last-child(2) { border-bottom: none !important; }
    .v2-grid4 { grid-template-columns: repeat(2,1fr) !important; }
    .v2-grid-hero { grid-template-columns: 1fr !important; }
    .ops-ba-desktop { display: none !important; }
    .ops-ba-mobile { display: flex !important; }
  }
  @media (max-width: 640px) {
    .ops-kpi-grid { grid-template-columns: 1fr 1fr !important; }
    .ops-agent-badge { display: none !important; }
    .ops-agent-expanded { padding-left: 24px !important; }
    .ops-agents-detail { grid-template-columns: 1fr !important; }
    .v2-grid4 { grid-template-columns: 1fr !important; }
    .ops-pills { flex-wrap: nowrap !important; width: max-content; animation: pillsScroll 10s linear infinite; }
  }
`;

// ── Page ──────────────────────────────────────────────────────
export default function AgentIAOpsPageClient() {
  return (
    <main>
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      <Hero />
      <KPIStrip />
      <Definition />
      <BeforeAfter />
      <AgentsListing />
      <CasClient />
      <MarqueeMetiers />
      <Methodology />
      <Security />
      <FAQ />
    </main>
  );
}
