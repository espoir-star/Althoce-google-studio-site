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

// ── Content Calendar Mockup ───────────────────────────────────
function ContentCalendarMockup() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 400);
    return () => clearTimeout(t);
  }, []);

  const contents = [
    { canal: 'LinkedIn', icon: '🔗', title: '5 erreurs SEO fatales en 2026', date: 'Lun 12 mai · 09h00', color: '#0a66c2' },
    { canal: 'Blog SEO', icon: '✍️', title: 'Guide complet : automatiser son content marketing', date: 'Mar 13 mai · 10h00', color: GREEN },
    { canal: 'Newsletter', icon: '📧', title: 'Les 3 tendances IA marketing du mois', date: 'Mer 14 mai · 08h30', color: '#d97706' },
    { canal: 'Email séquence', icon: '⚡', title: 'Onboarding persona CMO — Email 3/8', date: 'Jeu 15 mai · 14h00', color: '#7c3aed' },
  ];

  return (
    <div style={{ width: '100%', maxWidth: 420, margin: '0 auto' }}>
      <div style={{ padding: '12px 16px', borderRadius: '14px 14px 0 0', background: '#09090b', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {['#ef4444', '#f59e0b', '#22c55e'].map((c) => <div key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />)}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          <div style={{ width: 7, height: 7, borderRadius: '50%', background: GREEN, boxShadow: `0 0 6px ${GREEN}` }} />
          <span style={{ fontSize: 11, fontWeight: 700, color: '#52525b' }}>Calendrier éditorial · Semaine 20</span>
        </div>
        <div style={{ fontSize: 12, color: '#3f3f46' }}>MKT IA</div>
      </div>

      <div style={{ background: '#111', borderBottom: '1px solid #1a1a1a' }}>
        {contents.map((c, i) => (
          <div key={i} style={{ padding: '12px 14px', borderBottom: i < contents.length - 1 ? '1px solid #1a1a1a' : 'none', opacity: loaded ? 1 : 0, transform: loaded ? 'none' : 'translateX(-8px)', transition: `all .4s ${i * .1 + .2}s ease` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 5 }}>
              <span style={{ fontSize: 14 }}>{c.icon}</span>
              <span style={{ fontSize: 10, fontWeight: 800, color: c.color, textTransform: 'uppercase', letterSpacing: '.07em' }}>{c.canal}</span>
              <span style={{ marginLeft: 'auto', fontSize: 9, fontWeight: 700, color: GREEN, padding: '2px 7px', borderRadius: 5, background: '#16a34a15', border: '1px solid #16a34a30' }}>✓ Rédigé · à valider</span>
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#d4d4d8', marginBottom: 3, paddingLeft: 21 }}>{c.title}</div>
            <div style={{ fontSize: 10, color: '#3f3f46', paddingLeft: 21 }}>{c.date}</div>
          </div>
        ))}
      </div>

      <div style={{ padding: '10px 14px', background: '#0a0a0a', borderRadius: '0 0 14px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #1a1a1a', flexWrap: 'wrap', gap: 6 }}>
        {[{ icon: '✓', label: 'Ton de marque respecté', color: GREEN }, { icon: '⚡', label: '4 contenus cette semaine', color: AC }, { icon: '★', label: 'SEO optimisé', color: '#d97706' }].map((item, i) => (
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
        <div style={{ position: 'absolute', top: '30%', right: '-8%', width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle,#d97706 0d 0%,transparent 65%)', filter: 'blur(100px)', animation: 'gradDrift2 18s ease-in-out infinite' }} />
      </div>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.025) 1px,transparent 1px)', backgroundSize: '48px 48px', maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%,black,transparent)', zIndex: 0 }} aria-hidden="true" />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1160, margin: '0 auto' }}>
        <div className="mkt-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div style={{ minWidth: 0 }}>
            <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: '#a1a1aa', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 6, fontWeight: 500, flexWrap: 'wrap' }}>
              <a href="/" style={{ color: '#8a8a95', textDecoration: 'none' }}>Accueil</a>
              <span>›</span>
              <a href="/services/automatisation-ia/" style={{ color: '#8a8a95', textDecoration: 'none' }}>Automatisation</a>
              <span>›</span>
              <span style={{ color: '#09090b' }}>Agent IA marketing</span>
            </nav>

            <h1 style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-.03em', color: '#09090b', marginBottom: 20 }}>
              Agent IA pour le marketing : contenu, SEO, social, email{' '}
              <span style={{ color: AC }}>en pilote automatique.</span>
            </h1>

            <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 28, maxWidth: 520 }}>
              Votre équipe marketing est sous-dimensionnée par rapport à votre ambition : tout le monde sait qu'il faut produire du contenu régulier, vous y arrivez rarement. Un agent IA Althoce produit votre contenu multi-canal à votre ton de marque, fait votre veille, prépare vos campagnes. Votre équipe se recentre sur la stratégie et l'analyse de performance.
            </p>

            <div style={{ marginBottom: 32, overflow: 'hidden' }}>
              <div className="mkt-pills" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {['+758 agents en production', 'Cohérence ton de marque garantie', 'Production multi-canal', '+758 agents en production', 'Cohérence ton de marque garantie', 'Production multi-canal'].map((t, i) => (
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
                Voir les 4 agents marketing ↓
              </a>
            </div>
          </div>

          <div className="mkt-mockup-col">
            <ContentCalendarMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── KPI Strip ─────────────────────────────────────────────────
const kpiStrip = [
  { value: '×4', label: 'Volume contenu produit', sub: 'sans embauche supplémentaire' },
  { value: '3 sem.', label: 'Déploiement agent', sub: 'brief de marque + intégrations' },
  { value: '−70 %', label: 'Temps de production', sub: 'libéré pour la stratégie' },
  { value: '+140 %', label: 'Trafic organique 6 mois', sub: 'observé chez nos clients' },
];

function KPIStrip() {
  const [ref, visible] = useInView(0.1);
  return (
    <section ref={ref} style={{ borderTop: '1px solid #e4e4e7', borderBottom: '1px solid #e4e4e7', background: '#fafafa' }}>
      <div className="mkt-kpi-strip" style={{ maxWidth: 1160, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
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
        <H2 style={{ marginBottom: 16 }}>Ce qu'un agent IA absorbe vraiment dans le marketing</H2>
        <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 24, maxWidth: 800 }}>
          Dans une équipe marketing PME, <strong style={{ color: '#09090b' }}>70 à 80 % du temps est absorbé par la production de contenu et la coordination opérationnelle</strong> : rédiger des posts LinkedIn pour 3 dirigeants, écrire 4 articles SEO par mois, préparer 2 newsletters, produire 8 emails dans une séquence de nurture, faire la veille concurrentielle, briefer une agence externe. Les 20 % restants vont à la stratégie réelle (positionnement, choix de cibles, analyse de performance, arbitrage budget). Un agent IA Althoce <strong style={{ color: '#09090b' }}>inverse le ratio</strong> : il absorbe la production, votre équipe se recentre sur la stratégie, les arbitrages, et les sujets à forte valeur ajoutée.
        </p>
        <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.8, marginBottom: 40 }}>
          Concrètement, derrière un agent IA marketing Althoce : un <strong>brief de marque</strong> détaillé établi au cadrage (ton, vocabulaire interdit, positionnement, ICP cibles, exemples de contenus modèles), une <strong>bibliothèque vivante</strong> de votre contenu passé qui sert de référence pour la cohérence, et une{' '}
          <a href="/services/integration-ia/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>intégration aux outils marketing</a>{' '}
          (HubSpot, Brevo, ActiveCampaign, WordPress, Shopify, Buffer, Hootsuite, etc.). Tout contenu produit est <strong>proposé</strong> au responsable marketing pour validation avant publication. Pour un poste entier de content manager ou de growth marketer automatisé, voir{' '}
          <a href="/services/employe-ia/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>Employé IA</a>.
        </p>

        <div style={{ borderRadius: 20, background: '#09090b', border: '1px solid #1e1e1e', overflow: 'hidden' }}>
          <div style={{ padding: '14px 24px', borderBottom: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: AC }} />
            <p style={{ fontSize: 12, fontWeight: 800, color: '#8a8a95', textTransform: 'uppercase', letterSpacing: '.12em', margin: 0 }}>Trois questions pour qualifier votre besoin marketing</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              { n: '01', q: "Avez-vous un calendrier éditorial qui prend du retard chaque mois faute de temps pour produire ?" },
              { n: '02', q: "Vos campagnes email ou nurture sont-elles incomplètes ou non personnalisées par segment client ?" },
              { n: '03', q: "Votre veille concurrentielle est-elle faite sérieusement ou bricolée mois après mois ?" },
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
              Si oui à 1 question sur 3, un agent IA marketing transforme votre productivité. Si oui aux 3, votre équipe marketing passe son temps sur la production et néglige la stratégie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Before / After ────────────────────────────────────────────
const avantItems = [
  { time: 'Lun 10h', label: "Rédaction de 2 articles SEO. Recherche mot-clé, plan, rédaction, relecture, intégration WordPress. 8h cumulées. À peine fini." },
  { time: 'Mardi', label: "Préparation newsletter mensuelle : 4h. Briefing du designer pour visuels : 1h. Veille concurrentielle bâclée en 30 min." },
  { time: 'Mercredi', label: "3 posts LinkedIn pour le CEO (il voulait poster cette semaine) : 2h. Brief agence externe sur prochaine campagne : 2h. 5 mails de coordination." },
  { time: 'Jeudi', label: "Séquence nurture pour les leads commerciaux : 6h. Pas le temps de personnaliser par segment — séquence générique envoyée." },
  { time: 'Vendredi', label: "Reporting hebdo demandé par la direction : 3h. Pas de temps pour l'analyse stratégique, juste les chiffres." },
  { time: 'Bilan semaine', label: "2 articles, 1 newsletter, 3 posts CEO, 1 séquence email. Stratégie n'a pas avancé. Épuisée." },
];

const apresItems = [
  { time: 'Lun 9h', label: "L'agent IA a rédigé 2 articles SEO pendant le week-end (sujets choisis au comité éditorial). Statut « À relire ». Temps réel : 1h de relecture." },
  { time: 'Lun après-midi', label: "Entretien avec un client référent pour cas d'usage (reporté depuis 2 mois). 2h. Plan d'article rédigé par l'agent à partir des notes." },
  { time: 'Mardi', label: "Newsletter mensuelle rédigée par l'agent — à valider. Visuels candidats générés sur Canva. Veille concurrentielle hebdo reçue par mail : 15 min de lecture stratégique." },
  { time: 'Mercredi', label: "3 posts LinkedIn pour le CEO rédigés dans son ton, à valider et publier : 30 min. Brief agence externe envoyé par l'agent à partir d'un brief oral court." },
  { time: 'Jeudi', label: "32 emails segmentés (8 emails × 4 personas) rédigés par l'agent. Validation : 2h. Mise en route HubSpot : automatique." },
  { time: 'Vendredi', label: "Reporting hebdo automatique reçu ce matin avec analyse pré-rédigée. 1h pour ajouter la lecture stratégique. 4h libres pour reprendre la roadmap positionnement." },
  { time: 'Bilan semaine', label: "2 articles, 1 newsletter, 3 posts CEO, 32 emails personnalisés, 1 cas client interviewé, 4h de stratégie positionnement. Énergique pour le week-end." },
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
          <H2 style={{ marginBottom: 12 }}>Avant Althoce vs Après Althoce. La semaine type d'un responsable marketing PME.</H2>
          <p style={{ fontSize: 16, color: '#52525b' }}>Semaine type observée chez nos clients responsables marketing PME (50 à 250 collaborateurs) après déploiement.</p>
        </div>

        {/* Desktop split */}
        <div className="mkt-ba-desktop" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid #e4e4e7', background: '#fff' }}>
            <div style={{ padding: '16px 24px', borderBottom: '1px solid #f4f4f5', display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: RED }} />
              <span style={{ fontSize: 13, fontWeight: 800, color: '#09090b', textTransform: 'uppercase', letterSpacing: '.08em' }}>Avant Althoce</span>
            </div>
            {avantItems.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, padding: '16px 24px', borderBottom: i < avantItems.length - 1 ? '1px solid #f4f4f5' : 'none', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(-8px)', transition: `all .5s ${i * .08}s ease` }}>
                <div style={{ flexShrink: 0, paddingTop: 2 }}>
                  <span style={{ fontSize: 12, fontWeight: 800, color: item.time === 'Bilan semaine' ? RED : '#a1a1aa', letterSpacing: '.02em', whiteSpace: 'nowrap' }}>{item.time}</span>
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
                  <span style={{ fontSize: 12, fontWeight: 800, color: item.time === 'Bilan semaine' ? GREEN : AC, letterSpacing: '.02em', whiteSpace: 'nowrap' }}>{item.time}</span>
                </div>
                <p style={{ fontSize: 14, color: '#52525b', lineHeight: 1.65, margin: 0 }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile tabs */}
        <div className="mkt-ba-mobile" style={{ display: 'none', flexDirection: 'column', gap: 0 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, padding: 4, background: '#f0f0f0', borderRadius: 14, marginBottom: 16 }}>
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                style={{ padding: '11px 8px', borderRadius: 10, border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 14, fontWeight: 800, background: tab === t.key ? '#fff' : 'transparent', color: tab === t.key ? t.color : '#52525b', boxShadow: tab === t.key ? '0 1px 8px rgba(0,0,0,.10)' : 'none', transition: 'all .2s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7 }}
              >
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: tab === t.key ? t.color : '#d4d4d8', flexShrink: 0, display: 'inline-block' }} />
                {t.label} Althoce
              </button>
            ))}
          </div>
          <div style={{ borderRadius: 18, overflow: 'hidden', border: `1.5px solid ${active.color}28`, background: '#fff', boxShadow: '0 2px 16px rgba(0,0,0,.05)' }}>
            {active.items.map((item, i) => (
              <div key={`${tab}-${i}`} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '14px 16px', borderBottom: i < active.items.length - 1 ? '1px solid #f4f4f5' : 'none', background: item.time === 'Bilan semaine' ? (active.color === RED ? '#fff5f5' : '#f0fdf4') : (i % 2 === 0 ? '#fff' : '#fafafa') }}>
                <span style={{ flexShrink: 0, fontSize: 10, fontWeight: 900, whiteSpace: 'nowrap', padding: '4px 8px', borderRadius: 7, background: item.time === 'Bilan semaine' ? active.color : '#ebebeb', color: item.time === 'Bilan semaine' ? '#fff' : '#8a8a95', marginTop: 2 }}>
                  {item.time}
                </span>
                <p style={{ fontSize: 14, lineHeight: 1.65, margin: 0, color: item.time === 'Bilan semaine' ? '#09090b' : '#8a8a95', fontWeight: item.time === 'Bilan semaine' ? 700 : 400 }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 40, padding: '20px 28px', borderRadius: 16, background: `${AC}08`, border: `1px solid ${AC}20` }}>
          <p style={{ fontSize: 15, color: '#52525b', lineHeight: 1.7, margin: 0, textAlign: 'center' }}>
            Ce gain se mesure aussi en <strong>qualité de marque</strong> : la production multipliée ne dilue pas la cohérence — l'agent respecte strictement le ton de marque cadré. Le temps libéré permet enfin de faire l'analyse stratégique qui distingue un service marketing exécutant d'un service marketing pilote.
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
    name: 'Agent IA génération contenu multi-canal',
    color: AC,
    badge: 'Contenu',
    who: 'Responsable marketing, CMO PME, content manager, community manager',
    desc: "Reçoit un brief court (sujet, angle, format cible) et produit le contenu sur le canal demandé : article SEO (1500 à 3000 mots avec balisage), post LinkedIn (court ou long format), newsletter, page d'atterrissage, email transactionnel, légende social. Respecte strictement votre ton de marque cadré au démarrage. Propose toujours au responsable marketing pour validation avant publication.",
    tools: ['WordPress', 'Webflow', 'Shopify', 'HubSpot', 'LinkedIn', 'Buffer', 'Hootsuite', 'Brevo', 'Mailjet'],
    impact: '8 à 20 contenus par semaine en cohérence parfaite avec votre marque. Volume ×3 à ×5 sans embauche.',
    delai: '2 à 3 semaines',
  },
  {
    num: '02',
    name: 'Agent IA SEO sémantique',
    color: '#0891b2',
    badge: 'SEO',
    who: 'Responsable marketing, CMO, responsable acquisition, agence SEO interne',
    desc: "Reçoit votre liste de mots-clés cibles ou la définit après audit, propose un calendrier d'articles SEO, rédige des articles optimisés (longueur, intent match, structure H2/H3, maillage interne, balisage Schema.org). Suit le ranking après publication et propose des optimisations sur les articles existants qui plafonnent.",
    tools: ['Ahrefs', 'SEMrush', 'Search Console', 'WordPress', 'Webflow'],
    impact: '4 à 12 articles SEO par mois vs 1 à 4 produits manuellement. Trafic organique +140 % à 6 mois.',
    delai: '3 à 4 semaines (audit SEO inclus)',
  },
  {
    num: '03',
    name: 'Agent IA email marketing et séquences',
    color: '#d97706',
    badge: 'Email',
    who: 'Responsable marketing, growth marketer, responsable CRM, CMO',
    desc: "Conçoit et rédige des séquences email personnalisées par segment client (onboarding, nurture, win-back, upsell, événementiel). Chaque email est rédigé pour le segment cible, avec call-to-action contextuel. L'agent peut aussi générer des emails A/B test pour optimiser progressivement.",
    tools: ['HubSpot', 'Brevo', 'ActiveCampaign', 'Mailjet', 'Mailchimp'],
    impact: '30 à 100 emails par mois personnalisés par segment. Taux d\'ouverture +30 à +50 % vs séquence générique.',
    delai: '2 à 3 semaines',
  },
  {
    num: '04',
    name: 'Agent IA veille concurrentielle et social listening',
    color: '#7c3aed',
    badge: 'Veille',
    who: 'Responsable marketing, CMO, direction générale, responsable stratégie',
    desc: "Surveille en continu les actions marketing de votre concurrence (posts LinkedIn, articles blog, newsletters, lancements, communiqués de presse) et le bruit social autour de vos sujets clés. Produit un rapport hebdomadaire structuré avec ce qui se passe, les opportunités à saisir, les menaces à anticiper.",
    tools: ['LinkedIn', 'Twitter / X', 'RSS', 'Google Alerts', 'Brandwatch'],
    impact: 'Surveillance de 10 à 30 concurrents. Rapport hebdo automatique. Opportunités content identifiées 3× plus vite.',
    delai: '2 semaines',
  },
];

function AgentCard({ agent, index, visible }: { agent: typeof agents[0]; index: number; visible: boolean }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div style={{ borderRadius: 20, background: '#fff', border: '1px solid #e4e4e7', overflow: 'hidden', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: `all .5s ${index * .1}s ease` }}>
      <button
        onClick={() => setExpanded(!expanded)}
        style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '22px 24px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit' }}
      >
        <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: 12, background: `${agent.color}12`, border: `1px solid ${agent.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: 13, fontWeight: 900, color: agent.color }}>{agent.num}</span>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 16, fontWeight: 800, color: '#09090b', letterSpacing: '-.01em' }}>{agent.name}</div>
          <div className="mkt-agent-badge" style={{ marginTop: 4 }}>
            <span style={{ padding: '3px 10px', borderRadius: 9999, background: `${agent.color}12`, border: `1px solid ${agent.color}30`, fontSize: 11, fontWeight: 800, color: agent.color }}>{agent.badge}</span>
          </div>
        </div>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform .25s', color: '#a1a1aa' }}>
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {expanded && (
        <div className="mkt-agent-expanded" style={{ padding: '0 24px 24px', paddingLeft: 80 }}>
          <p style={{ fontSize: 14, color: '#a1a1aa', marginBottom: 12, fontStyle: 'italic' }}>{agent.who}</p>
          <p style={{ fontSize: 15, color: '#52525b', lineHeight: 1.7, marginBottom: 16 }}>{agent.desc}</p>
          <div className="mkt-agents-detail" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
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
          <H2 style={{ marginBottom: 12 }}>4 agents IA Althoce déployés en standard dans le marketing</H2>
          <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.65 }}>
            Quatre agents complémentaires que vous pouvez déployer indépendamment ou combiner. Tous calés sur votre ton de marque, validés par votre équipe avant publication.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {agents.map((agent, i) => (
            <AgentCard key={agent.num} agent={agent} index={i} visible={visible} />
          ))}
        </div>
        <div style={{ marginTop: 32, padding: '20px 24px', borderRadius: 16, background: '#fff', border: '1px solid #e4e4e7' }}>
          <p style={{ fontSize: 15, color: '#52525b', lineHeight: 1.7, margin: 0 }}>
            Pour un poste entier de content manager, de community manager ou de growth marketer automatisé de bout en bout, voir{' '}
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
  { label: 'Articles SEO / mois', avant: '1', apres: '4', unit: '+300 %' },
  { label: 'Posts LinkedIn / mois', avant: '4', apres: '12', unit: '+200 %' },
  { label: 'Emails séquences / mois', avant: '8 (génériques)', apres: '60 (segmentés)', unit: '×7.5' },
  { label: 'Trafic organique 6 mois', avant: 'Base 100', apres: 'Base 240', unit: '+140 %' },
];

function CasClient() {
  const [ref, visible] = useInView(0.08);
  return (
    <section ref={ref} style={{ background: '#09090b', borderTop: '1px solid #1a1a1a', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.018) 1px,transparent 1px)', backgroundSize: '52px 52px', maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%,black,transparent)', pointerEvents: 'none' }} />
      <div aria-hidden="true" style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: 800, height: 500, background: `radial-gradient(ellipse,${AC}0a 0%,transparent 60%)`, filter: 'blur(80px)', pointerEvents: 'none' }} />

      <div style={{ padding: '88px 24px 72px', maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 44, flexWrap: 'wrap', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(12px)', transition: 'all .5s ease' }}>
          {['SaaS B2B', '3 personnes au marketing', '90 collaborateurs', '1 500 clients'].map((tag, i) => (
            <span key={i} style={{ padding: '4px 12px', borderRadius: 9999, border: '1px solid #222', fontSize: 11, fontWeight: 600, color: '#8a8a95', background: '#111', letterSpacing: '.02em' }}>{tag}</span>
          ))}
          <div style={{ height: 1, flex: 1, minWidth: 40, background: 'linear-gradient(to right,#222,transparent)' }} aria-hidden="true" />
        </div>

        <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(28px)', transition: 'all .7s .12s ease' }}>
          <div aria-hidden="true" style={{ fontSize: 72, lineHeight: 0.65, color: AC, fontFamily: 'Georgia, serif', fontWeight: 900, opacity: 0.45, marginBottom: 20, display: 'block' }}>"</div>

          <blockquote style={{ fontSize: 'clamp(17px,2.2vw,24px)', fontWeight: 700, color: '#f0f0f0', lineHeight: 1.65, margin: '0 0 36px', fontStyle: 'normal', paddingLeft: 20, borderLeft: `3px solid ${AC}55` }}>
            On était 3 au marketing pour un SaaS qui voulait jouer dans la cour des grands. La direction nous demandait du contenu chaque semaine, on rendait à peine 1 article et 4 posts LinkedIn par mois. On a déployé l'agent IA marketing en 3 semaines. Aujourd'hui, on publie 4 articles SEO par mois, 12 posts LinkedIn, 2 newsletters, et nos séquences nurture sont segmentées par persona. Tout dans notre ton de marque. Et on a enfin le temps de faire de la stratégie sérieuse.
          </blockquote>

          <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', marginBottom: 32 }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: `${AC}15`, border: `1.5px solid ${AC}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <circle cx="11" cy="9" r="4.5" stroke={AC} strokeWidth="1.5"/>
                <path d="M4 20C4 16.7 7.1 14 11 14S18 16.7 18 20" stroke={AC} strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 15, fontWeight: 800, color: '#e4e4e7', letterSpacing: '-.01em' }}>Responsable marketing</div>
              <div style={{ fontSize: 13, color: '#3f3f46', marginTop: 2 }}>Éditeur SaaS B2B · 3 personnes marketing · 1 500 clients</div>
            </div>
            <div style={{ padding: '7px 16px', borderRadius: 9999, background: '#16a34a12', border: '1px solid #16a34a30', fontSize: 14, fontWeight: 800, color: GREEN, flexShrink: 0 }}>Content ×4</div>
          </div>

          <p style={{ fontSize: 15, color: '#52525b', lineHeight: 1.75, marginBottom: 12 }}>
            Avant la mission Althoce, l'équipe marketing 3 personnes du SaaS B2B était saturée par la production de contenu. La direction avait demandé une stratégie content marketing ambitieuse (4 articles SEO mensuels, présence LinkedIn forte, nurture segmentée par persona) mais le rythme tenable était d'environ 25 % de l'ambition. Recruter un content manager coûtait 55 à 65 K€ chargés, hors budget.
          </p>
          <p style={{ fontSize: 15, color: '#52525b', lineHeight: 1.75, marginBottom: 24 }}>
            En 3 semaines, l'agent IA marketing a été déployé avec un cadrage strict du ton de marque, l'indexation de la bibliothèque de contenu existant (180 articles, 200 posts), et l'intégration HubSpot. L'équipe valide les contenus produits (1 à 2 heures par jour cumulées) au lieu de les produire. Volume ×4, trafic organique +140 % à 6 mois, roadmap positionnement enfin en cours.
          </p>

          <a href="/cas-clients/saas-b2b-agent-ia-marketing/" style={{ fontSize: 15, fontWeight: 700, color: AC, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            Voir le cas client complet →
          </a>
        </div>
      </div>

      <div style={{ borderTop: '1px solid #1a1a1a', position: 'relative', zIndex: 1 }}>
        <div className="mkt-kpi-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', opacity: visible ? 1 : 0, transition: 'opacity .6s .3s ease' }}>
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
        <div className="ticker-slow" role="marquee" aria-label="Secteurs couverts par les agents IA marketing">
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
      <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 12 }}>Brief de marque</div>
      {['Ton de voix défini', 'Vocabulaire interdit', 'ICP et personas cibles', 'Exemples contenu modèles'].map((t, i) => (
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
      <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 12 }}>Roadmap contenu</div>
      {[{ l: 'Articles SEO', w: 90 }, { l: 'Posts LinkedIn', w: 75 }, { l: 'Newsletters', w: 55 }, { l: 'Email séquences', w: 40 }].map((r, i) => (
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
        {[{ n: 'HubSpot', c: '#ff7a59' }, { n: 'Brevo', c: '#0092ff' }, { n: 'WordPress', c: '#21759b' }, { n: 'LinkedIn', c: '#0a66c2' }, { n: 'Buffer', c: '#168eea' }, { n: 'SEMrush', c: '#ff642d' }].map((t, i) => (
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
        <span style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em' }}>Agent marketing actif</span>
        <span style={{ padding: '2px 8px', borderRadius: 9999, background: '#22c55e15', border: '1px solid #22c55e30', fontSize: 10, fontWeight: 800, color: '#22c55e' }}>Actif</span>
      </div>
      {[{ t: 'Articles rédigés cette semaine', v: '4' }, { t: 'Posts LinkedIn produits', v: '12' }, { t: 'Emails séquences rédigés', v: '32' }, { t: 'Rapport veille envoyé', v: '1' }].map((r, i) => (
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
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 500, margin: '0 auto' }}>Quatre étapes courtes. Votre premier agent marketing en production en moins de 4 semaines.</p>
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
            <H2 style={{ marginTop: 12, marginBottom: 20, color: '#fff' }}>Vos données marketing. Hébergées en France. Jamais utilisées pour l'entraînement.</H2>
            <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.75, marginBottom: 20 }}>
              Anonymisation des PII (noms, mails, téléphones clients) avant tout envoi LLM si vous utilisez les modèles propriétaires (OpenAI, Anthropic). Pour la souveraineté maximale, nous utilisons <strong style={{ color: '#a1a1aa' }}>Mistral hébergé en France sur OVH ou Scaleway</strong>. Les listes email et données CRM ne sont jamais envoyées aux modèles — seules les analyses agrégées servent à l'optimisation.
            </p>
            <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.75 }}>
              Les contrats Enterprise avec OpenAI / Anthropic excluent par défaut la réutilisation pour entraînement. Votre contenu de marque, vos données clients, et vos listes email restent confidentiels et sous votre contrôle. <strong style={{ color: '#a1a1aa' }}>Vous êtes propriétaire de l'agent, du code et des workflows</strong> — sans abonnement obligatoire.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {securityItems.map((item, i) => (
              <div key={i} style={{ border: '1px solid #1e1e1e', borderRadius: 16, padding: '22px 18px', background: '#0f0f0f', position: 'relative', overflow: 'hidden', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: `all .5s ${i * .1}s ease` }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = `${AC}40`; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = '#1e1e1e'; }}
              >
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
const faqMarketing: FAQv2Item[] = [
  {
    q: "L'agent IA produit-il du contenu à mon ton de marque ou du contenu générique style ChatGPT ?",
    a: "À votre ton de marque, strict. Au cadrage initial, nous établissons un brief de marque détaillé (ton voulu, vocabulaire interdit, expressions caractéristiques, positionnement, ICP) et indexons votre bibliothèque de contenu existant. L'agent IA produit en référençant cette base. Nos clients passent les tests blind sans que les lecteurs détectent le contenu IA dans 90 % des cas.",
  },
  {
    q: "L'agent peut-il vraiment remplacer un content manager humain ?",
    a: "Non, et ce n'est pas l'objectif. L'agent absorbe la production (rédaction, optimisation SEO, déclinaison multi-canal), votre content manager humain garde la stratégie éditoriale, la relation interlocuteurs (interviews clients, relations influenceurs, partenariats), et l'arbitrage qualitatif. Si vous n'avez pas de content manager, l'agent vous permet de tenir un rythme content marketing sérieux sans en recruter un.",
  },
  {
    q: "Quel investissement pour un agent IA marketing et quel ROI attendre ?",
    a: "Tarification entièrement sur devis selon votre contexte : volume de contenu cible, nombre de canaux, intégration outils marketing, profondeur de la personnalisation par segment. ROI typique 3 à 6 mois : volume de contenu ×3 à ×5 sans embauche, croissance de trafic organique mesurable à 6 mois, équipe libérée pour la stratégie. Tout démarre par 30 minutes offertes avec un expert.",
  },
  {
    q: "L'agent peut-il s'intégrer à mes outils marketing existants (HubSpot, Brevo, WordPress, etc.) ?",
    a: "Oui. HubSpot, Brevo, ActiveCampaign, Mailjet, Mailchimp côté email. WordPress, Webflow, Shopify côté CMS. LinkedIn (via Buffer/Hootsuite), Twitter / X côté social. Pour les outils internes propriétaires, voir Intégration IA (/services/integration-ia/).",
  },
  {
    q: "Comment éviter le contenu plat, sans personnalité, reconnaissable comme IA ?",
    a: "Trois leviers : le brief de marque initial très détaillé (on va au niveau du vocabulaire, des expressions, des structures de phrases caractéristiques), l'indexation de votre contenu existant comme référence vivante, et la validation humaine systématique avant publication avec retours qualitatifs qui affinent l'agent dans le temps.",
  },
  {
    q: "L'agent peut-il faire du SEO sérieusement ou c'est du bourrage de mots-clés ?",
    a: "SEO sérieusement. L'agent travaille sur l'intent match (répondre à la vraie intention de recherche), structure les articles selon les bonnes pratiques 2026 (H2/H3 logiques, paragraphes courts, listes structurées, FAQPage Schema.org quand pertinent), gère le maillage interne automatiquement. Audit SEO initial inclus dans le déploiement.",
  },
  {
    q: "Mes données marketing (CRM, clients, listes email) restent-elles confidentielles ?",
    a: "Oui. Anonymisation des PII avant tout envoi LLM. Pour la souveraineté maximale, Mistral hébergé en France. Les listes email et données CRM ne sont jamais envoyées aux modèles — seules les analyses agrégées (taux d'ouverture, taux de clic, segments) servent à l'optimisation.",
  },
  {
    q: "L'agent peut-il aussi gérer la création de visuels (images, infographies, vidéos courtes) ?",
    a: "Partiellement. Pour les visuels statiques (illustrations d'article, miniatures sociales, infographies simples), l'agent peut générer des candidats via DALL-E, Midjourney ou Stable Diffusion intégrés — vous validez. Pour les vidéos, l'agent peut générer des scripts et des prompts pour outils vidéo IA (Runway, Pika), mais la production vidéo finale reste un sujet à part.",
  },
];

function FAQ() {
  return (
    <section id="faq" style={{ padding: '96px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <H2 style={{ marginBottom: 12 }}>Questions fréquentes sur les agents IA marketing</H2>
          <p style={{ fontSize: 16, color: '#52525b' }}>Huit questions qui reviennent systématiquement lors des premiers échanges.</p>
        </div>
        <FAQAccordion items={faqMarketing} />
      </div>
    </section>
  );
}

// ── Responsive CSS ────────────────────────────────────────────
const globalStyles = `
  .mkt-ba-mobile { display: none; }
  @keyframes gradDrift1 { 0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(3%,4%) scale(1.06)} }
  @keyframes gradDrift2 { 0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(-4%,-3%) scale(1.08)} }
  @keyframes floatCard { 0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)} }
  @keyframes slideIn { from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:translateX(0)} }
  @keyframes countUp { from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)} }
  @keyframes pillsScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  .ticker-slow { display:flex;animation:tickerSlide 70s linear infinite;width:max-content; }
  @keyframes tickerSlide { from{transform:translateX(0)}to{transform:translateX(-50%)} }
  @media (max-width: 860px) {
    .mkt-hero-grid { grid-template-columns: 1fr !important; }
    .mkt-mockup-col { display: none !important; }
    .mkt-kpi-strip { grid-template-columns: repeat(2, 1fr) !important; }
    .mkt-kpi-strip > div:nth-child(odd) { border-right: 1px solid #e4e4e7 !important; }
    .mkt-kpi-strip > div:nth-child(1), .mkt-kpi-strip > div:nth-child(2) { border-bottom: 1px solid #e4e4e7 !important; }
    .mkt-kpi-grid { grid-template-columns: repeat(2, 1fr) !important; }
    .mkt-kpi-grid > div { border-right: none !important; border-bottom: 1px solid #1a1a1a; }
    .mkt-kpi-grid > div:last-child, .mkt-kpi-grid > div:nth-last-child(2) { border-bottom: none !important; }
    .v2-grid4 { grid-template-columns: repeat(2,1fr) !important; }
    .v2-grid-hero { grid-template-columns: 1fr !important; }
    .mkt-ba-desktop { display: none !important; }
    .mkt-ba-mobile { display: flex !important; }
  }
  @media (max-width: 640px) {
    .mkt-kpi-grid { grid-template-columns: 1fr 1fr !important; }
    .mkt-agent-badge { display: none !important; }
    .mkt-agent-expanded { padding-left: 24px !important; }
    .mkt-agents-detail { grid-template-columns: 1fr !important; }
    .v2-grid4 { grid-template-columns: 1fr !important; }
    .mkt-pills { flex-wrap: nowrap !important; width: max-content; animation: pillsScroll 10s linear infinite; }
  }
`;

// ── Page ──────────────────────────────────────────────────────
export default function AgentIAMarketingPageClient() {
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
