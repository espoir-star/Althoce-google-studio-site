'use client';

import React, { useState, useEffect, useRef } from 'react';
import { steps, securityItems, agentTags } from '@/lib/data';
import { FAQAccordion } from '@/components/ui/data-display/FAQAccordion';
import type { FAQv2Item } from '@/lib/data';

const AC = '#2563eb';
const GREEN = '#16a34a';
const RED = '#ef4444';
const AMBER = '#d97706';

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

// ── Contract Analysis Mockup ──────────────────────────────────
function ContractAnalysisMockup() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 400);
    return () => clearTimeout(t);
  }, []);

  const clauses = [
    { risk: 'standard', label: 'Standard', color: GREEN, text: 'Art. 3 · Objet du contrat : fourniture de services de conseil en informatique pour une durée de 24 mois renouvelable.' },
    { risk: 'verifier', label: 'À vérifier', color: AMBER, text: 'Art. 7 · Responsabilité : le prestataire exclut toute responsabilité indirecte ou consécutive, limitée au montant des honoraires perçus.' },
    { risk: 'sensible', label: 'Clause sensible', color: RED, text: 'Art. 12 · Propriété intellectuelle : tous les livrables réalisés dans le cadre du contrat sont la propriété exclusive du prestataire.' },
    { risk: 'verifier', label: 'À vérifier', color: AMBER, text: 'Art. 15 · Résiliation : résiliation par l\'une ou l\'autre des parties sous 90 jours. Pénalité de 20 % du CA restant.' },
    { risk: 'standard', label: 'Standard', color: GREEN, text: 'Art. 18 · Confidentialité : obligations de confidentialité réciproques pour une durée de 5 ans après expiration.' },
  ];

  return (
    <div style={{ width: '100%', maxWidth: 440, margin: '0 auto' }}>
      <div style={{ padding: '12px 16px', borderRadius: '14px 14px 0 0', background: '#09090b', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {['#ef4444', '#f59e0b', '#22c55e'].map((c) => <div key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />)}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          <div style={{ width: 7, height: 7, borderRadius: '50%', background: AC, boxShadow: `0 0 6px ${AC}` }} />
          <span style={{ fontSize: 11, fontWeight: 700, color: '#52525b' }}>Analyse contrat · en cours</span>
        </div>
        <div style={{ fontSize: 12, color: '#3f3f46' }}>JUR IA</div>
      </div>

      <div style={{ background: '#111' }}>
        <div style={{ padding: '10px 14px', borderBottom: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ fontSize: 10, fontWeight: 600, color: '#3f3f46' }}>Contrat_prestataire_tech_v2.pdf</span>
          <span style={{ marginLeft: 'auto', fontSize: 9, color: '#3f3f46' }}>42 pages</span>
        </div>
        {clauses.map((c, i) => (
          <div key={i} style={{ padding: '10px 14px', borderBottom: i < clauses.length - 1 ? '1px solid #1a1a1a' : 'none', opacity: loaded ? 1 : 0, transform: loaded ? 'none' : 'translateX(-8px)', transition: `all .4s ${i * .1 + .2}s ease` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 5 }}>
              <span style={{ fontSize: 9, fontWeight: 800, color: c.color, textTransform: 'uppercase', letterSpacing: '.07em', padding: '2px 6px', borderRadius: 4, background: `${c.color}18`, border: `1px solid ${c.color}30`, flexShrink: 0 }}>{c.label}</span>
            </div>
            <p style={{ fontSize: 10, color: '#52525b', lineHeight: 1.65, margin: 0, padding: `3px 8px`, borderLeft: `2px solid ${c.color}50`, borderRadius: '0 4px 4px 0', background: `${c.color}08` }}>{c.text}</p>
          </div>
        ))}
      </div>

      <div style={{ padding: '10px 14px', background: '#0a0a0a', borderRadius: '0 0 14px 14px', borderTop: '1px solid #1a1a1a' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 7, flexWrap: 'wrap', gap: 4 }}>
          {[{ icon: '📋', label: '12 clauses analysées', color: AC }, { icon: '⚠️', label: '2 points sensibles', color: AMBER }, { icon: '⛔', label: '1 clause manquante', color: RED }].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{ fontSize: 8 }}>{item.icon}</span>
              <span style={{ fontSize: 8, color: item.color, fontWeight: 700 }}>{item.label}</span>
            </div>
          ))}
        </div>
        <div style={{ padding: '7px 10px', borderRadius: 8, background: '#141414', border: '1px solid #222' }}>
          <p style={{ fontSize: 9, color: '#3f3f46', margin: 0, lineHeight: 1.65, textAlign: 'center' }}>Analyse pour préparation. Validation juriste obligatoire avant signature.</p>
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
        <div className="jur-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div style={{ minWidth: 0 }}>
            <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: '#a1a1aa', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 6, fontWeight: 500, flexWrap: 'wrap' }}>
              <a href="/" style={{ color: '#8a8a95', textDecoration: 'none' }}>Accueil</a>
              <span>›</span>
              <a href="/services/automatisation-ia/" style={{ color: '#8a8a95', textDecoration: 'none' }}>Automatisation</a>
              <span>›</span>
              <span style={{ color: '#09090b' }}>Agent IA juridique</span>
            </nav>

            <h1 style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-.03em', color: '#09090b', marginBottom: 20 }}>
              Agent IA pour le juridique : analyse de contrats, veille réglementaire,{' '}
              <span style={{ color: AC }}>rédaction de documents courants.</span>
            </h1>

            <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 28, maxWidth: 520 }}>
              Votre juriste passe 70 % de son temps sur de la pré-analyse contractuelle, de la veille et des NDA standards. Un agent IA Althoce absorbe cette couche répétitive sous strict contrôle humain, dans le respect du secret professionnel. Votre juriste retrouve du temps pour les sujets stratégiques.
            </p>

            <div style={{ marginBottom: 32, overflow: 'hidden' }}>
              <div className="jur-pills" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {['+758 agents en production', 'Secret professionnel respecté', 'Souveraineté France garantie', '+758 agents en production', 'Secret professionnel respecté', 'Souveraineté France garantie'].map((t, i) => (
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
                Voir les 4 agents juridiques ↓
              </a>
            </div>
          </div>

          <div className="jur-mockup-col">
            <ContractAnalysisMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── KPI Strip ─────────────────────────────────────────────────
const kpiStrip = [
  { value: '3h→30min', label: 'Pré-analyse contrat', sub: 'de 3h à 30 min de validation' },
  { value: '50+', label: 'Contrats / mois', sub: 'analysés sérieusement vs 30 avant' },
  { value: '65 %', label: 'Temps libéré', sub: 'pour le travail stratégique réel' },
  { value: 'France', label: 'Souveraineté garantie', sub: 'Mistral hébergé France par défaut' },
];

function KPIStrip() {
  const [ref, visible] = useInView(0.1);
  return (
    <section ref={ref} style={{ borderTop: '1px solid #e4e4e7', borderBottom: '1px solid #e4e4e7', background: '#fafafa' }}>
      <div className="jur-kpi-strip" style={{ maxWidth: 1160, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
        {kpiStrip.map((k, i) => (
          <div key={i} style={{ padding: '36px 24px', borderRight: i < 3 ? '1px solid #e4e4e7' : 'none', textAlign: 'center', position: 'relative', overflow: 'hidden', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(12px)', transition: `all .5s ${i * .1}s ease`, background: '#fff' }}>
            <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: 3, background: `linear-gradient(to right,transparent,${AC},transparent)`, borderRadius: '0 0 4px 4px' }} />
            <div style={{ fontSize: 'clamp(22px,2.5vw,38px)', fontWeight: 900, color: AC, letterSpacing: '-.04em', lineHeight: 1, marginBottom: 8 }}>{k.value}</div>
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
        <H2 style={{ marginBottom: 16 }}>Ce qu'un agent IA absorbe vraiment dans le juridique (et ce qu'il ne fait JAMAIS)</H2>
        <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 20, maxWidth: 800 }}>
          Le métier juridique comporte deux types de travail très différents. <strong style={{ color: '#09090b' }}>Le travail stratégique</strong> (négociation contractuelle complexe, contentieux, conseil au CODIR, due diligence) qui demande l'expertise du juriste humain et reste sous sa responsabilité totale. <strong style={{ color: '#09090b' }}>Le travail répétitif</strong> (lecture exhaustive de contrats entrants pour identifier les clauses sensibles, veille réglementaire continue, rédaction de NDA et accords de confidentialité standards) qui occupe 60 à 70 % du temps d'un juriste interne mais n'utilise pas son expertise réelle. Un agent IA Althoce absorbe <strong style={{ color: '#09090b' }}>uniquement la couche répétitive</strong>, et <strong style={{ color: '#09090b' }}>toujours en mode pré-analyse pour décision humaine</strong>. L'agent prépare, le juriste arbitre, signe, engage sa responsabilité.
        </p>
        <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.8, marginBottom: 40 }}>
          Concrètement, derrière un agent IA juridique Althoce : une <strong style={{ color: '#09090b' }}>souveraineté maximale par défaut</strong> (Mistral hébergé France ou modèles open-source auto-hébergés sur votre infra, jamais OpenAI / Anthropic sans accord explicite client), une{' '}
          <strong style={{ color: '#09090b' }}>intégration sécurisée à votre GED juridique</strong>{' '}
          (<a href="/services/integration-ia/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>SharePoint, Notion, NetDocuments, iManage</a>), et une <strong style={{ color: '#09090b' }}>logique systématique de pré-analyse</strong> : l'agent identifie, propose, suggère, mais l'humain décide et signe. Pour des cas plus larges combinant contrat et suivi, voir{' '}
          <a href="/services/employe-ia/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>Employé IA</a>.
        </p>

        <div style={{ borderRadius: 20, background: '#09090b', border: '1px solid #1e1e1e', overflow: 'hidden' }}>
          <div style={{ padding: '14px 24px', borderBottom: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: RED }} />
            <p style={{ fontSize: 12, fontWeight: 800, color: '#8a8a95', textTransform: 'uppercase', letterSpacing: '.12em', margin: 0 }}>Ce que l'agent IA juridique NE FAIT JAMAIS chez Althoce</p>
          </div>
          <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              'Il ne signe aucun document.',
              'Il ne valide aucune négociation contractuelle.',
              'Il ne donne aucun conseil juridique opposable.',
              "Il n'engage aucun avis sur une procédure contentieuse.",
              'Il ne se substitue jamais à votre juriste ou à votre avocat.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <div style={{ flexShrink: 0, width: 16, height: 16, borderRadius: '50%', background: `${RED}18`, border: `1px solid ${RED}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2 }}>
                  <span style={{ fontSize: 8, fontWeight: 900, color: RED }}>✕</span>
                </div>
                <p style={{ fontSize: 15, color: '#a1a1aa', lineHeight: 1.65, margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
          <div style={{ padding: '16px 24px', borderTop: '1px solid #1a1a1a', background: '#0a0a0a' }}>
            <p style={{ fontSize: 14, color: '#52525b', lineHeight: 1.65, margin: 0, fontWeight: 600 }}>
              Tout output de l'agent est une pré-analyse à décharge, jamais un livrable juridique final. Cette discipline est non négociable chez Althoce.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Before / After ────────────────────────────────────────────
const avantItems = [
  { time: 'Lundi', label: '8 contrats fournisseurs entrants à analyser (50 à 80 pages chacun). 3 analysés sérieusement, 5 reportés.' },
  { time: 'Mardi', label: 'Veille réglementaire sur 12 thèmes (RGPD, droit social, droit fiscal, IA Act, CSRD…). 30 minutes survol matinal, le reste reporté.' },
  { time: 'Mercredi', label: '4 NDA standards demandés par les commerciaux. Chacun prend 1h30 à rédiger (template + adaptation). 6 heures de la journée.' },
  { time: 'Jeudi', label: 'Rendez-vous direction sur une négociation contractuelle stratégique (3h). Retour aux 5 contrats reportés depuis lundi.' },
  { time: 'Vendredi', label: '2 lettres de mise en demeure à rédiger. 1 question RH urgente sur droit social. La veille pas faite cette semaine.' },
  { time: 'Bilan', label: '3 contrats analysés sérieusement, 5 superficiellement. Veille bâclée. 4 NDA tenus. Une seule négociation stratégique. Frustration.' },
];

const apresItems = [
  { time: 'Lundi', label: 'Les 8 contrats reçus en fin de semaine dernière ont été pré-analysés par l\'agent : synthèse 1 page, 2 à 5 clauses sensibles, comparaison template, points manquants. 30 min par contrat suffisent pour valider, soit 4h pour les 8.' },
  { time: 'Mardi matin', label: 'La veille réglementaire automatique est arrivée à 7h sur les 12 thèmes. Synthèse structurée des évolutions de la semaine avec liens sources. 45 min de lecture stratégique.' },
  { time: 'Mardi a-m', label: 'Préparation de la négociation contractuelle du jeudi (3h de qualité, sans interruption).' },
  { time: 'Mercredi', label: '4 NDA pré-rédigés par l\'agent selon votre template, adaptés à chaque prospect. Validation et signature : 30 minutes au total. Reste de la journée : refonte CGV (reportée depuis 8 mois).' },
  { time: 'Jeudi', label: 'Rendez-vous direction sur la négociation contractuelle (4h cette fois, parce qu\'on a le temps).' },
  { time: 'Vendredi', label: '2 lettres mise en demeure pré-rédigées par l\'agent. Validation 20 min. Veille à jour. Réponse question RH avec jurisprudence pré-faite.' },
  { time: 'Bilan', label: '8 contrats analysés sérieusement, veille à jour, 4 NDA tenus, 2 lettres rédigées, refonte CGV avancée, négociation stratégique traitée avec qualité. Énergique pour le week-end.' },
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
          <H2 style={{ marginBottom: 12 }}>Avant Althoce vs Après Althoce. La semaine type d'un juriste interne PME.</H2>
          <p style={{ fontSize: 16, color: '#52525b' }}>Semaine type observée chez nos clients juristes internes PME et directions juridiques ETI après déploiement.</p>
        </div>

        {/* Desktop split */}
        <div className="jur-ba-desktop" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
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
        <div className="jur-ba-mobile" style={{ display: 'none', flexDirection: 'column', gap: 0 }}>
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
            Ce gain ne se mesure pas seulement en contrats traités ou en NDA rédigés. Il se mesure en <strong>temps libéré pour le travail stratégique réel</strong> : négociation, conseil au CODIR, refonte de standards juridiques. Selon nos clients juristes internes, c'est le projet IT qui a le plus restauré le sens de leur métier en 5 ans.
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
    name: 'Agent IA analyse de contrats entrants',
    color: AC,
    badge: 'Analyse contrats',
    who: 'Juriste interne PME, directeur juridique ETI, associé cabinet d\'avocats, responsable achats',
    desc: "Reçoit les contrats (PDF, Word) par mail ou GED, produit une synthèse en 1 page (parties prenantes, objet, durée, conditions financières, clauses clés), identifie les clauses sensibles selon votre référentiel d'évaluation (responsabilité, propriété intellectuelle, RGPD, juridiction, force majeure), compare au template standard, alerte sur les clauses manquantes ou inhabituelles. Output : note d'analyse de pré-décision pour le juriste.",
    tools: ['SharePoint', 'Notion', 'NetDocuments', 'iManage', 'DocuSign', 'Yousign'],
    impact: '30 à 100 contrats pré-analysés / mois en autonomie. Libération de 60 à 70 % du temps de pré-analyse.',
    delai: '4 à 6 semaines',
  },
  {
    num: '02',
    name: 'Agent IA veille réglementaire',
    color: '#0891b2',
    badge: 'Veille',
    who: 'Juriste interne, compliance officer, directeur juridique, DPO',
    desc: "Surveille en continu les sources officielles (Légifrance, JORF, Bofip, ANSM, AMF, CNIL…) sur vos thématiques (typiquement 10 à 50 thèmes). Produit une synthèse hebdomadaire structurée des évolutions réglementaires avec impact estimé pour votre entreprise. Alerte immédiate sur les sujets critiques (nouvelle réglementation imminente, jurisprudence majeure).",
    tools: ['Légifrance', 'JORF', 'Bofip', 'CNIL', 'AMF', 'ANSM', 'Sources sectorielles'],
    impact: 'Monitoring de 10 à 50 thèmes. Synthèse hebdomadaire automatique. Plus aucune surprise réglementaire.',
    delai: '2 à 3 semaines',
  },
  {
    num: '03',
    name: 'Agent IA rédaction documents juridiques standards',
    color: AMBER,
    badge: 'Rédaction',
    who: 'Juriste interne, assistante juridique, office manager, secrétaire général',
    desc: "Pré-rédige les documents juridiques courants à partir de vos templates : NDA, accords de confidentialité, lettres de mise en demeure amiables, courriers fournisseurs standardisés, attestations juridiques courantes. Adapte au contexte (parties, montants, dates, juridiction) en suivant les variations de votre charte. Output : projet à valider par le juriste, jamais finalisé sans humain.",
    tools: ['GED', 'DocuSign', 'Yousign', 'Adobe Sign', 'Office 365', 'Google Workspace'],
    impact: '20 à 100 documents standards rédigés / mois. Réactivité accrue pour les opérationnels.',
    delai: '2 à 4 semaines',
  },
  {
    num: '04',
    name: 'Agent IA recherche jurisprudence et doctrine',
    color: '#7c3aed',
    badge: 'Jurisprudence',
    who: 'Avocat, juriste interne, directeur juridique, paralégal',
    desc: "Sur une question juridique posée, identifie la jurisprudence pertinente et la doctrine récente, produit une synthèse argumentée avec sources, suggère les pistes d'argumentation. Output : note de recherche pour préparation de dossier ou de mémoire, jamais conseil opposable.",
    tools: ['Légifrance', 'Doctrine', 'Dalloz', 'LexisNexis', 'Lamyline'],
    impact: '10 à 50 recherches / mois. Gain de 2 à 4 heures par recherche vs travail manuel.',
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
          <div className="jur-agent-badge" style={{ marginTop: 4 }}>
            <span style={{ padding: '3px 10px', borderRadius: 9999, background: `${agent.color}12`, border: `1px solid ${agent.color}30`, fontSize: 11, fontWeight: 800, color: agent.color }}>{agent.badge}</span>
          </div>
        </div>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform .25s', color: '#a1a1aa' }}>
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {expanded && (
        <div className="jur-agent-expanded" style={{ padding: '0 24px 24px', paddingLeft: 80 }}>
          <p style={{ fontSize: 14, color: '#a1a1aa', marginBottom: 12, fontStyle: 'italic' }}>{agent.who}</p>
          <p style={{ fontSize: 15, color: '#52525b', lineHeight: 1.7, marginBottom: 16 }}>{agent.desc}</p>
          <div className="jur-agents-detail" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
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
          <H2 style={{ marginBottom: 12 }}>4 agents IA Althoce déployés en standard dans le juridique</H2>
          <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.65 }}>Quatre agents complémentaires, tous en mode <strong>pré-analyse à décharge</strong> pour décision humaine. Aucun ne signe, aucun ne se substitue au juriste.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {agents.map((agent, i) => (
            <AgentCard key={agent.num} agent={agent} index={i} visible={visible} />
          ))}
        </div>
        <div style={{ marginTop: 32, padding: '20px 24px', borderRadius: 16, background: '#fff', border: '1px solid #e4e4e7' }}>
          <p style={{ fontSize: 15, color: '#52525b', lineHeight: 1.7, margin: 0 }}>
            Pour un poste entier de juriste support ou de paralégal automatisé de bout en bout, voir{' '}
            <a href="/services/employe-ia/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>Employé IA</a>.{' '}
            <strong>Aucun de nos agents IA juridiques ne se substitue à un juriste ou un avocat humain</strong> pour la décision finale, la signature, le conseil opposable, ou la défense en contentieux. Les <strong>30 minutes offertes avec un expert</strong> servent à qualifier votre besoin et à valider la conformité avec votre cadre déontologique.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Cas Client ────────────────────────────────────────────────
const kpis = [
  { label: 'Temps moyen pré-analyse contrat', avant: '3h', apres: '30 min', unit: '−83 %' },
  { label: 'Contrats analysés sérieusement / mois', avant: '30', apres: '50+', unit: '+67 %' },
  { label: 'Temps libéré pour stratégie / mois', avant: '0 jour', apres: '4 jours', unit: '+4j' },
  { label: 'Souveraineté données', avant: 'Variable', apres: 'Mistral France', unit: '100 %' },
];

function CasClient() {
  const [ref, visible] = useInView(0.08);
  return (
    <section ref={ref} style={{ background: '#09090b', borderTop: '1px solid #1a1a1a', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.018) 1px,transparent 1px)', backgroundSize: '52px 52px', maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%,black,transparent)', pointerEvents: 'none' }} />
      <div aria-hidden="true" style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: 800, height: 500, background: `radial-gradient(ellipse,${AC}0a 0%,transparent 60%)`, filter: 'blur(80px)', pointerEvents: 'none' }} />

      <div style={{ padding: '88px 24px 72px', maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 44, flexWrap: 'wrap', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(12px)', transition: 'all .5s ease' }}>
          {['Direction juridique ETI', 'Agroalimentaire', '280 collaborateurs', '600 contrats / an', '1 juriste interne'].map((tag, i) => (
            <span key={i} style={{ padding: '4px 12px', borderRadius: 9999, border: '1px solid #222', fontSize: 11, fontWeight: 600, color: '#8a8a95', background: '#111', letterSpacing: '.02em' }}>{tag}</span>
          ))}
          <div style={{ height: 1, flex: 1, minWidth: 40, background: 'linear-gradient(to right,#222,transparent)' }} aria-hidden="true" />
        </div>

        <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(28px)', transition: 'all .7s .12s ease' }}>
          <div aria-hidden="true" style={{ fontSize: 72, lineHeight: 0.65, color: AC, fontFamily: 'Georgia, serif', fontWeight: 900, opacity: 0.45, marginBottom: 20, display: 'block' }}>"</div>

          <blockquote style={{ fontSize: 'clamp(17px,2.2vw,24px)', fontWeight: 700, color: '#f0f0f0', lineHeight: 1.65, margin: '0 0 36px', fontStyle: 'normal', paddingLeft: 20, borderLeft: `3px solid ${AC}55` }}>
            Je suis seul juriste pour une ETI de 280 personnes. 600 contrats fournisseurs et clients par an à analyser. Mes journées étaient absorbées par la pré-analyse. Pour les vrais sujets stratégiques (négociation, contentieux, conseil COMEX), je manquais de temps. On a déployé l'agent IA analyse contrats en 5 semaines. Aujourd'hui, je reçois une synthèse pré-analysée pour chaque contrat. Je valide en 30 minutes ce qui me prenait 3h avant. J'ai récupéré 4 jours par mois pour ce que mon poste devrait vraiment faire. Et la confidentialité est totale, on utilise Mistral hébergé en France.
          </blockquote>

          <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', marginBottom: 32 }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: `${AC}15`, border: `1.5px solid ${AC}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <circle cx="11" cy="9" r="4.5" stroke={AC} strokeWidth="1.5"/>
                <path d="M4 20C4 16.7 7.1 14 11 14S18 16.7 18 20" stroke={AC} strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 15, fontWeight: 800, color: '#e4e4e7', letterSpacing: '-.01em' }}>Directeur juridique</div>
              <div style={{ fontSize: 13, color: '#3f3f46', marginTop: 2 }}>ETI agroalimentaire · 280 collaborateurs · 600 contrats / an</div>
            </div>
            <div style={{ padding: '7px 16px', borderRadius: 9999, background: '#16a34a12', border: '1px solid #16a34a30', fontSize: 14, fontWeight: 800, color: GREEN, flexShrink: 0 }}>4 jours / mois libérés</div>
          </div>

          <p style={{ fontSize: 15, color: '#52525b', lineHeight: 1.75, marginBottom: 12 }}>
            Avant la mission Althoce, le juriste unique de l'ETI agroalimentaire était saturé par 600 contrats annuels à analyser. Sur les 50 contrats reçus par mois, 30 étaient analysés sérieusement, 20 superficiellement. Recruter un deuxième juriste coûtait 60 K€ chargés, refusé par la direction.
          </p>
          <p style={{ fontSize: 15, color: '#52525b', lineHeight: 1.75, marginBottom: 24 }}>
            En 5 semaines, l'agent IA analyse contrats a été déployé avec Mistral hébergé en France (exigence souveraineté absolue), indexation de 1 500 contrats historiques, cadrage du référentiel d'évaluation propre. Aujourd'hui, chaque contrat entrant est pré-analysé en 15 minutes par l'agent. Le juriste valide en 30 minutes au lieu de 3h. Il a récupéré 4 jours par mois pour la stratégie. Aucune fuite de données : tout reste sur l'infra OVH du client.
          </p>

          <a href="/cas-clients/eti-agroalimentaire-agent-ia-juridique/" style={{ fontSize: 15, fontWeight: 700, color: AC, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            Voir le cas client complet →
          </a>
        </div>
      </div>

      <div style={{ borderTop: '1px solid #1a1a1a', position: 'relative', zIndex: 1 }}>
        <div className="jur-kpi-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', opacity: visible ? 1 : 0, transition: 'opacity .6s .3s ease' }}>
          {kpis.map((k, i) => (
            <div key={i} style={{ padding: '32px 24px', borderRight: i < kpis.length - 1 ? '1px solid #1a1a1a' : 'none', textAlign: 'center', position: 'relative' }}>
              <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: '20%', right: '20%', height: 2, background: `linear-gradient(to right,transparent,${AC}55,transparent)` }} />
              <div style={{ fontSize: 10, fontWeight: 700, color: '#3f3f46', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 18 }}>{k.label}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 10, marginBottom: 14, flexWrap: 'wrap' }}>
                <span style={{ fontSize: 15, fontWeight: 600, color: '#3f3f46', textDecoration: 'line-through', textDecorationColor: `${RED}90` }}>{k.avant}</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
                  <path d="M2 7H12M12 7L8.5 3.5M12 7L8.5 10.5" stroke={AC} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span style={{ fontSize: 22, fontWeight: 900, color: '#ffffff', letterSpacing: '-.03em', lineHeight: 1 }}>{k.apres}</span>
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
        <div className="ticker-slow" role="marquee" aria-label="Secteurs couverts par les agents IA juridiques">
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
      <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 12 }}>Brief de marque juridique</div>
      {['Volume de contrats / mois', 'Thèmes de veille réglementaire', 'GED juridique à brancher', 'Référentiel d\'évaluation'].map((t, i) => (
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
      <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 12 }}>Roadmap juridique</div>
      {[{ l: 'Agent analyse contrats', w: 90 }, { l: 'Agent veille réglementaire', w: 72 }, { l: 'Agent rédaction NDA', w: 55 }, { l: 'Agent jurisprudence', w: 40 }].map((r, i) => (
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
        {[{ n: 'SharePoint', c: '#038387' }, { n: 'NetDocuments', c: '#1a73e8' }, { n: 'Légifrance', c: '#003189' }, { n: 'iManage', c: '#6b21a8' }, { n: 'DocuSign', c: '#ffcc00' }, { n: 'Yousign', c: '#6366f1' }].map((t, i) => (
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
        <span style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em' }}>Agent juridique actif</span>
        <span style={{ padding: '2px 8px', borderRadius: 9999, background: '#22c55e15', border: '1px solid #22c55e30', fontSize: 10, fontWeight: 800, color: '#22c55e' }}>Actif</span>
      </div>
      {[{ t: 'Contrats pré-analysés aujourd\'hui', v: '4' }, { t: 'Alertes veille réglementaire', v: '2' }, { t: 'NDA pré-rédigés', v: '3' }, { t: 'Recherches jurisprudence', v: '1' }].map((r, i) => (
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
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 500, margin: '0 auto' }}>Quatre étapes courtes. Votre premier agent juridique en production en moins de 6 semaines.</p>
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
            <span style={{ fontSize: 12, fontWeight: 800, color: AC, textTransform: 'uppercase', letterSpacing: '.14em' }}>Secret professionnel & souveraineté</span>
            <H2 style={{ marginTop: 12, marginBottom: 20, color: '#fff' }}>Vos données contractuelles. Hébergées en France. Jamais exposées.</H2>
            <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.75, marginBottom: 20 }}>
              Pour le métier juridique, nos déploiements utilisent par défaut <strong style={{ color: '#a1a1aa' }}>Mistral hébergé en France</strong> ou un modèle open-source auto-hébergé sur votre infra. Les données contractuelles sensibles, jurisprudences confidentielles et notes juridiques internes <strong style={{ color: '#a1a1aa' }}>ne quittent jamais le territoire français</strong>. Aucun fournisseur tiers (OpenAI, Anthropic) n'a accès à vos données sans accord explicite client documenté.
            </p>
            <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.75 }}>
              Conformité totale au secret professionnel et aux règles déontologiques applicables (CCBE pour les avocats, déontologie juriste interne). Chaque action de l'agent est <strong style={{ color: '#a1a1aa' }}>journalisée et auditable</strong>. Votre code, vos prompts, vos workflows vous appartiennent à 100 %.
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
const faqJur: FAQv2Item[] = [
  {
    q: "L'agent IA peut-il signer un contrat ou prendre une décision juridique opposable ?",
    a: "Non, absolument jamais. Tous nos agents IA juridiques fonctionnent en mode pré-analyse à décharge pour décision humaine. L'agent prépare, le juriste ou l'avocat décide, signe, engage sa responsabilité professionnelle. Cette règle est inscrite techniquement dans le déploiement : l'agent n'a aucun accès en écriture aux outils de signature, aucun pouvoir de validation finale dans le workflow. C'est ce qui permet de respecter le secret professionnel, la déontologie et le RGPD article 22.",
  },
  {
    q: "Mes contrats et données juridiques sensibles vont-ils chez OpenAI ou Anthropic ?",
    a: "Non, par défaut. Pour le métier juridique, nous utilisons par défaut Mistral hébergé en France ou un modèle open-source auto-hébergé sur votre infra (OVH, Scaleway, on-premise). Les données contractuelles, jurisprudences confidentielles, notes juridiques ne quittent jamais le territoire français. Si vous acceptez explicitement les modèles propriétaires (cas rare pour le juridique), anonymisation préalable des parties prenantes obligatoire et contrats Enterprise sans réutilisation pour entraînement.",
  },
  {
    q: "Quel investissement pour un agent IA juridique et quel ROI attendre ?",
    a: "Tarification entièrement sur devis selon votre contexte : volume de contrats ou recherches à traiter, nombre de thèmes de veille, intégration GED, exigences de souveraineté. Le ROI typique se mesure en 3 à 6 mois sur les directions juridiques saturées : doublement de la capacité d'analyse contractuelle, libération de 4 à 8 jours par mois pour la stratégie, plus aucune surprise réglementaire. Tout démarre par 30 minutes offertes avec un expert pour un devis ferme.",
  },
  {
    q: "L'agent peut-il s'intégrer à mes outils existants (GED, signature électronique) ?",
    a: "Oui. SharePoint, Notion, NetDocuments, iManage côté GED. DocuSign, Yousign, Adobe Sign côté signature électronique (mais en lecture seule pour l'agent, signature toujours humaine). Légifrance, Bofip, sources sectorielles pour la veille. Pour les outils internes propriétaires, voir Intégration IA (/services/integration-ia/).",
  },
  {
    q: "Si l'agent IA commet une erreur d'analyse contractuelle, qui est responsable ?",
    a: "Vous, ou votre juriste / avocat qui a validé. Cette responsabilité est identique à celle qu'aurait un paralégal ou un assistant juridique humain qui aurait fait une pré-analyse mal calibrée. C'est pour cette raison que l'agent fonctionne en mode pré-analyse à décharge et que chaque output est validé par un humain compétent avant tout engagement. Nous documentons cette discipline contractuellement dans nos engagements de service.",
  },
  {
    q: "L'agent peut-il préparer une procédure contentieuse, un mémoire, des conclusions ?",
    a: "Pré-rédiger une note de recherche jurisprudence et doctrine pour préparation du juriste / avocat : oui. Rédiger des conclusions ou un mémoire de manière finalisée : non. La rédaction d'actes de procédure nécessite l'expertise et la signature de l'avocat. L'agent gagne du temps sur la phase de recherche préparatoire (souvent 60 à 70 % du temps d'un dossier), pas sur la rédaction d'actes.",
  },
  {
    q: "L'agent IA va-t-il remplacer mon juriste interne ou mon avocat ?",
    a: "Non. L'agent absorbe le travail répétitif à faible valeur cognitive (pré-analyse, veille, rédaction standards) et libère votre juriste pour le travail à forte valeur (négociation, conseil stratégique, contentieux, refonte de standards). Aucun de nos clients juridiques n'a réduit son effectif juridique, plusieurs ont doublé leur capacité sans recruter, et les juristes témoignent d'un fort regain de sens dans leur métier.",
  },
  {
    q: "L'agent est-il compatible avec la déontologie avocat (CCBE, RIN) ?",
    a: "Pour les cabinets d'avocats : oui, sous conditions. Le secret professionnel est préservé par les choix techniques par défaut (souveraineté France, pas de tiers). L'indépendance de l'avocat est préservée par le mode pré-analyse (l'agent ne se substitue jamais à la décision avocat). La diligence et la compétence restent celles de l'avocat qui valide. Nous travaillons en amont avec votre Bâtonnier ou votre Conseil de l'Ordre si nécessaire pour valider la conformité. Plusieurs cabinets clients nous ont validé cette conformité après revue ordinale.",
  },
];

function FAQ() {
  return (
    <section id="faq" style={{ padding: '96px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <H2 style={{ marginBottom: 12 }}>Questions fréquentes sur les agents IA juridiques</H2>
          <p style={{ fontSize: 16, color: '#52525b' }}>Huit questions qui reviennent systématiquement lors des premiers échanges.</p>
        </div>
        <FAQAccordion items={faqJur} />
      </div>
    </section>
  );
}

// ── Responsive CSS ────────────────────────────────────────────
const globalStyles = `
  .jur-ba-mobile { display: none; }
  @keyframes gradDrift1 { 0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(3%,4%) scale(1.06)} }
  @keyframes gradDrift2 { 0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(-4%,-3%) scale(1.08)} }
  @keyframes floatCard { 0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)} }
  @keyframes slideIn { from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:translateX(0)} }
  @keyframes countUp { from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)} }
  @keyframes pillsScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  .ticker-slow { display:flex;animation:tickerSlide 70s linear infinite;width:max-content; }
  @keyframes tickerSlide { from{transform:translateX(0)}to{transform:translateX(-50%)} }
  @media (max-width: 860px) {
    .jur-hero-grid { grid-template-columns: 1fr !important; }
    .jur-mockup-col { display: none !important; }
    .jur-kpi-strip { grid-template-columns: repeat(2, 1fr) !important; }
    .jur-kpi-strip > div:nth-child(odd) { border-right: 1px solid #e4e4e7 !important; }
    .jur-kpi-strip > div:nth-child(1), .jur-kpi-strip > div:nth-child(2) { border-bottom: 1px solid #e4e4e7 !important; }
    .jur-kpi-grid { grid-template-columns: repeat(2, 1fr) !important; }
    .jur-kpi-grid > div { border-right: none !important; border-bottom: 1px solid #1a1a1a; }
    .jur-kpi-grid > div:last-child, .jur-kpi-grid > div:nth-last-child(2) { border-bottom: none !important; }
    .v2-grid4 { grid-template-columns: repeat(2,1fr) !important; }
    .v2-grid-hero { grid-template-columns: 1fr !important; }
    .jur-ba-desktop { display: none !important; }
    .jur-ba-mobile { display: flex !important; }
  }
  @media (max-width: 640px) {
    .jur-kpi-grid { grid-template-columns: 1fr 1fr !important; }
    .jur-agent-badge { display: none !important; }
    .jur-agent-expanded { padding-left: 24px !important; }
    .jur-agents-detail { grid-template-columns: 1fr !important; }
    .v2-grid4 { grid-template-columns: 1fr !important; }
    .jur-pills { flex-wrap: nowrap !important; width: max-content; animation: pillsScroll 10s linear infinite; }
  }
`;

// ── Page ──────────────────────────────────────────────────────
export default function AgentIAJuridiquePageClient() {
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
