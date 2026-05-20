'use client';

import React, { useState, useEffect, useRef } from 'react';
import { steps, securityItems, agentTags } from '@/lib/data';
import { FAQAccordion } from '@/components/ui/data-display/FAQAccordion';
import type { FAQv2Item } from '@/lib/data';

const AC = '#2563eb';
const GREEN = '#16a34a';
const RED = '#ef4444';
const AMBER = '#d97706';
const PURPLE = '#7c3aed';

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

// ── Quote Comparison Mockup ───────────────────────────────────
function QuoteComparisonMockup() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 400);
    return () => clearTimeout(t);
  }, []);

  const suppliers = [
    { name: 'TransLog Express', price: '14 200 €', delai: '48h', conditions: '30j net', score: 84, vigilance: 'AA', recommended: true },
    { name: 'MoveIt Pro', price: '12 800 €', delai: '72h', conditions: '60j net', score: 71, vigilance: 'BB', recommended: false },
    { name: 'FastCargo', price: '11 400 €', delai: '96h', conditions: '30j net', score: 58, vigilance: 'B+', recommended: false },
  ];

  return (
    <div style={{ width: '100%', maxWidth: 460, margin: '0 auto' }}>
      <div style={{ padding: '12px 16px', borderRadius: '14px 14px 0 0', background: '#09090b', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {['#ef4444', '#f59e0b', '#22c55e'].map((c) => <div key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />)}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          <div style={{ width: 7, height: 7, borderRadius: '50%', background: AC, boxShadow: `0 0 6px ${AC}` }} />
          <span style={{ fontSize: 11, fontWeight: 700, color: '#52525b' }}>Analyse devis · appel offres transporteur</span>
        </div>
        <div style={{ fontSize: 12, color: '#3f3f46' }}>ACH IA</div>
      </div>

      <div style={{ background: '#111' }}>
        <div style={{ padding: '8px 12px', borderBottom: '1px solid #1a1a1a', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr 1fr', gap: 4 }}>
          {['Fournisseur', 'Prix HT', 'Délai', 'Paiement', 'Score', 'Vigil.'].map((h, i) => (
            <span key={i} style={{ fontSize: 8, fontWeight: 800, color: '#3f3f46', textTransform: 'uppercase', letterSpacing: '.06em' }}>{h}</span>
          ))}
        </div>
        {suppliers.map((s, i) => (
          <div key={i} style={{ padding: '10px 12px', borderBottom: i < suppliers.length - 1 ? '1px solid #1a1a1a' : 'none', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr 1fr', gap: 4, alignItems: 'center', background: s.recommended ? `${AC}08` : 'transparent', opacity: loaded ? 1 : 0, transform: loaded ? 'none' : 'translateX(-8px)', transition: `all .4s ${i * .12 + .2}s ease`, position: 'relative' }}>
            {s.recommended && <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: AC, borderRadius: '0 2px 2px 0' }} />}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: s.recommended ? '#e4e4e7' : '#a1a1aa' }}>{s.name}</span>
              {s.recommended && <span style={{ fontSize: 8, fontWeight: 800, color: AC, letterSpacing: '.04em' }}>RECOMMANDÉ</span>}
            </div>
            <span style={{ fontSize: 10, fontWeight: 700, color: s.recommended ? '#e4e4e7' : '#52525b' }}>{s.price}</span>
            <span style={{ fontSize: 10, color: '#52525b' }}>{s.delai}</span>
            <span style={{ fontSize: 10, color: '#52525b' }}>{s.conditions}</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <div style={{ height: 4, width: 32, background: '#1a1a1a', borderRadius: 9999, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: loaded ? `${s.score}%` : '0%', background: s.score >= 80 ? GREEN : s.score >= 65 ? AMBER : RED, borderRadius: 9999, transition: `width .8s ${i * .12 + .5}s ease` }} />
              </div>
              <span style={{ fontSize: 9, fontWeight: 800, color: s.score >= 80 ? GREEN : s.score >= 65 ? AMBER : RED }}>{s.score}</span>
            </div>
            <span style={{ fontSize: 9, fontWeight: 800, color: s.vigilance.startsWith('A') ? GREEN : AMBER }}>{s.vigilance}</span>
          </div>
        ))}
      </div>

      <div style={{ padding: '10px 14px', background: '#0a0a0a', borderRadius: '0 0 14px 14px', borderTop: '1px solid #1a1a1a' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: AC }} />
          <span style={{ fontSize: 9, fontWeight: 800, color: AC }}>Critères pondérés :</span>
          {[{ l: 'Prix 35%', c: AC }, { l: 'Délai 25%', c: AMBER }, { l: 'Qualité 25%', c: GREEN }, { l: 'Vigil. 15%', c: PURPLE }].map((t, i) => (
            <span key={i} style={{ fontSize: 8, color: t.c, fontWeight: 700 }}>{t.l}</span>
          ))}
        </div>
        <div style={{ padding: '6px 10px', borderRadius: 8, background: '#141414', border: '1px solid #222' }}>
          <p style={{ fontSize: 9, color: '#3f3f46', margin: 0, textAlign: 'center' }}>Pour validation acheteur · scoring transparent · décision humaine</p>
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
        <div style={{ position: 'absolute', top: '30%', right: '-8%', width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle,#d977060d 0%,transparent 65%)', filter: 'blur(100px)', animation: 'gradDrift2 18s ease-in-out infinite' }} />
      </div>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.025) 1px,transparent 1px)', backgroundSize: '48px 48px', maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%,black,transparent)', zIndex: 0 }} aria-hidden="true" />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1160, margin: '0 auto' }}>
        <div className="ach-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div style={{ minWidth: 0 }}>
            <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: '#a1a1aa', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 6, fontWeight: 500, flexWrap: 'wrap' }}>
              <a href="/" style={{ color: '#8a8a95', textDecoration: 'none' }}>Accueil</a>
              <span>›</span>
              <a href="/services/automatisation-ia/" style={{ color: '#8a8a95', textDecoration: 'none' }}>Automatisation</a>
              <span>›</span>
              <span style={{ color: '#09090b' }}>Agent IA achats</span>
            </nav>

            <h1 style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-.03em', color: '#09090b', marginBottom: 20 }}>
              Agent IA pour les achats : sourcing fournisseurs, analyse devis, suivi contrats{' '}
              <span style={{ color: AC }}>en pilote automatique.</span>
            </h1>

            <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 28, maxWidth: 520 }}>
              Les achats représentent 40 à 60 % de vos charges, et la fonction est souvent sous-équipée : sourcing chronophage, devis difficiles à comparer, contrats mal suivis, vigilance fournisseurs oubliée. Un agent IA Althoce absorbe ces tâches systématiques. Vos acheteurs se concentrent sur la négociation et la relation stratégique fournisseur.
            </p>

            <div style={{ marginBottom: 32, overflow: 'hidden' }}>
              <div className="ach-pills" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {['+758 agents en production', 'Scoring devis transparent pondéré', 'Vigilance fournisseurs 24/7', '+758 agents en production', 'Scoring devis transparent pondéré', 'Vigilance fournisseurs 24/7'].map((t, i) => (
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
                Voir les 4 agents achats ↓
              </a>
            </div>
          </div>

          <div className="ach-mockup-col">
            <QuoteComparisonMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── KPI Strip ─────────────────────────────────────────────────
const kpiStrip = [
  { value: '4h', label: 'Sourcing fournisseur', sub: 'vs 2 à 3 jours en manuel' },
  { value: '100 %', label: 'Devis analysés', sub: 'rigoureusement et systématiquement' },
  { value: '3-7 %', label: 'Économies supplémentaires', sub: 'identifiées la première année' },
  { value: '0', label: 'Option de sortie ratée', sub: 'alertes systématiques 90/60/30j' },
];

function KPIStrip() {
  const [ref, visible] = useInView(0.1);
  return (
    <section ref={ref} style={{ borderTop: '1px solid #e4e4e7', borderBottom: '1px solid #e4e4e7', background: '#fafafa' }}>
      <div className="ach-kpi-strip" style={{ maxWidth: 1160, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
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
        <H2 style={{ marginBottom: 16 }}>Ce qu'un agent IA absorbe vraiment dans les achats</H2>
        <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 20, maxWidth: 800 }}>
          Dans une fonction achats PME ou ETI, <strong style={{ color: '#09090b' }}>60 à 70 % du temps des acheteurs est absorbé par des tâches systématiques</strong> : sourcer des fournisseurs candidats (2 à 4 jours par besoin), formaliser les devis en tableau comparatif, suivre les contrats pour ne pas rater les renouvellements, maintenir la vigilance financière du panel. Un agent IA Althoce absorbe ces tâches. Vos acheteurs se concentrent sur ce qui demande vraiment leur expertise : <strong style={{ color: '#09090b' }}>la négociation, la relation stratégique fournisseur, les choix de make-or-buy, les optimisations structurelles.</strong>
        </p>
        <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.8, marginBottom: 40 }}>
          Concrètement, derrière un agent IA achats Althoce : une intégration à votre{' '}
          <a href="/services/integration-ia/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>ERP et outils achats</a>{' '}
          (SAP Ariba, Coupa, Determine, Ivalua, ERP standard), un accès aux sources de <strong style={{ color: '#09090b' }}>vigilance financière</strong> (Pappers, Societe.com, Altares, Creditsafe), et une logique de <strong style={{ color: '#09090b' }}>recommandation pondérée transparente</strong> : scoring multi-critères paramétré selon votre politique achats, décision finale toujours humaine. Pour un poste entier d'acheteur ou d'approvisionneur automatisé, voir{' '}
          <a href="/services/employe-ia/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>Employé IA</a>.
        </p>

        <div style={{ borderRadius: 20, background: '#09090b', border: '1px solid #1e1e1e', overflow: 'hidden' }}>
          <div style={{ padding: '14px 24px', borderBottom: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: AC }} />
            <p style={{ fontSize: 12, fontWeight: 800, color: '#8a8a95', textTransform: 'uppercase', letterSpacing: '.12em', margin: 0 }}>Trois questions pour qualifier votre besoin achats</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              { n: '01', q: "Votre dernier sourcing fournisseur a-t-il pris plus de 3 jours, alors qu'il s'agissait d'un besoin standard ?" },
              { n: '02', q: "Avez-vous déjà raté une échéance de renouvellement contrat ou une option de sortie qui aurait coûté plusieurs milliers d'euros ?" },
              { n: '03', q: "Surveillez-vous systématiquement la vigilance financière de vos 50 principaux fournisseurs ?" },
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
              Si oui à 1 question sur 3, un agent IA achats transforme votre productivité. Si oui aux 3, votre fonction achats laisse plusieurs dizaines de milliers d'euros sur la table chaque année.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Before / After ────────────────────────────────────────────
const avantItems = [
  { time: 'Lundi', label: '3 nouveaux besoins exprimés par les ops (matières premières, prestataire IT, transporteur). Sourcing manuel à lancer.' },
  { time: 'Mar-Mer', label: 'Sourcing du transporteur : recherche LinkedIn / Google, 6 candidats identifiés, demandes de devis envoyées. Toute la matinée par besoin.' },
  { time: 'Jeudi', label: 'Réception de 3 devis sur 6. Saisie manuelle dans un tableur Excel pour comparer. 2h par appel d\'offres. Cas litigieux (prix bas, conditions floues) : 1h de va-et-vient.' },
  { time: 'Vendredi', label: 'Sourcing IT et matières premières repoussé. Mail du DAF : "Le contrat avec [fournisseur clé] a expiré le 15, on a perdu l\'option de sortie". Conséquence : 18 mois supplémentaires à tarif moins favorable.' },
  { time: 'Bilan', label: '1 sourcing sur 3 démarré. Aucun nouveau contrat. 1 perte d\'option majeure. Vigilance financière fournisseurs : pas faite cette semaine, ni le mois dernier.' },
];

const apresItems = [
  { time: 'Lundi', label: 'Les 3 besoins exprimés vendredi ont été pris en main pendant le week-end. Short list de 5 à 8 candidats pré-qualifiés (vigilance financière vérifiée) pour chaque besoin. Validation acheteur : 30 min par besoin.' },
  { time: 'Mardi', label: 'RDV stratégique avec un fournisseur clé pour négocier la prochaine année (3h, c\'est ce qui crée de la valeur). L\'agent a préparé un dossier complet (historique, KPI, comparables marché, leviers de négociation).' },
  { time: 'Mercredi', label: 'Les premiers devis sont arrivés. L\'agent analyse devis a formalisé un tableau comparatif pondéré (prix, délai, conditions, qualité, vigilance) avec recommandation. 45 min par RFP pour valider.' },
  { time: 'Jeudi', label: '3 contrats fournisseurs alertés par l\'agent suivi contrats : échéances à 60 jours, options de sortie disponibles, recommandation de renégocier 2 sur 3. Préparation des renégociations.' },
  { time: 'Vendredi', label: 'Reporting hebdo achats automatique reçu ce matin. 30 min de validation. Après-midi : 3h pour avancer le projet de consolidation panel fournisseurs IT (reporté depuis 8 mois faute de temps).' },
  { time: 'Bilan', label: '3 sourcings qualifiés. 1 négociation stratégique de fond. 2 renégociations en préparation. Vigilance financière à jour. Projet structurel avancé.' },
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
          <H2 style={{ marginBottom: 12 }}>Avant Althoce vs Après Althoce. La semaine type d'un responsable achats PME.</H2>
          <p style={{ fontSize: 16, color: '#52525b' }}>Semaine type observée chez nos clients ETI industrielles et retail après déploiement.</p>
        </div>

        {/* Desktop split */}
        <div className="ach-ba-desktop" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
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
        <div className="ach-ba-mobile" style={{ display: 'none', flexDirection: 'column', gap: 0 }}>
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
            Ce gain se mesure aussi en <strong>valeur captée</strong>. Statistique observée : entre 3 et 7 % d'économies achats supplémentaires identifiées la première année, simplement parce que les acheteurs ont le temps de négocier vraiment, de comparer rigoureusement, et de ne plus rater d'options de sortie ou de renouvellement.
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
    name: 'Agent IA sourcing fournisseurs',
    color: AC,
    badge: 'Sourcing',
    who: 'Responsable achats, directeur achats, responsable appros, DAF PME',
    desc: "Reçoit l'expression de besoin (cahier des charges, RFP, demande informelle), recherche les fournisseurs candidats sur les sources spécialisées (annuaires métier, plateformes B2B, LinkedIn, presse, historique), pré-qualifie chaque candidat (taille, ancienneté, vigilance financière, certifications, proximité), recommande une short list de 3 à 8 candidats à contacter en priorité.",
    tools: ['Pappers', 'Societe.com', 'Infogreffe', 'Altares', 'Creditsafe', 'LinkedIn Sales Navigator', 'Annuaires sectoriels', 'ERP'],
    impact: 'Sourcing complet en quelques heures vs plusieurs jours en manuel. Taux de découverte de fournisseurs pertinents accru.',
    delai: '3 à 4 semaines',
  },
  {
    num: '02',
    name: 'Agent IA analyse devis comparatif',
    color: AMBER,
    badge: 'Analyse devis',
    who: 'Acheteur, responsable achats, DAF, directeur opérations',
    desc: "Reçoit les devis fournisseurs (PDF, mail, formulaire), extrait automatiquement les données structurées (prix HT, conditions de paiement, délai, garanties, exclusions), construit un tableau comparatif pondéré selon votre politique achats, produit une recommandation transparente avec justification du scoring par critère.",
    tools: ['OCR (Mindee, AWS Textract)', 'ERP', 'SAP Ariba', 'Coupa', 'Determine', 'Ivalua'],
    impact: 'Analyse complète d\'un appel d\'offres 3 à 5 fournisseurs en 30 min vs demi-journée en manuel. Analyse rigoureuse systématique.',
    delai: '2 à 4 semaines',
  },
  {
    num: '03',
    name: 'Agent IA suivi contrats fournisseurs',
    color: GREEN,
    badge: 'Suivi contrats',
    who: 'Responsable achats, directeur achats, secrétaire général, DAF',
    desc: "Maintient une base à jour de tous vos contrats fournisseurs actifs (échéance, montant, options de sortie, conditions de renouvellement, performance). Alerte 90, 60, 30 jours avant chaque échéance critique. Recommande les actions à prendre (renouveler, renégocier, sortir, relancer un appel d'offres). Suit la performance fournisseur sur la durée.",
    tools: ['ERP', 'Outils contractuels', 'Signature électronique (référence)', 'SharePoint', 'GED interne'],
    impact: 'Surveillance de 50 à 500 contrats actifs. Zéro contrat échu sans alerte. Zéro option de sortie ratée.',
    delai: '3 à 4 semaines',
  },
  {
    num: '04',
    name: 'Agent IA vigilance fournisseurs',
    color: PURPLE,
    badge: 'Vigilance',
    who: 'Directeur achats, DAF, directeur des risques, responsable supply chain',
    desc: "Surveille en continu la santé financière, juridique et opérationnelle de votre panel fournisseurs critiques (top 50 à 500). Détecte les signaux faibles (procédures collectives, changements de capital, presse négative), alerte immédiatement sur les risques significatifs (défaillance imminente, perte de certification, sanction publique).",
    tools: ['Pappers', 'Societe.com', 'Infogreffe', 'Altares', 'Creditsafe', 'Google Alerts', 'Boamp'],
    impact: 'Surveillance hebdo de 50 à 500 fournisseurs. Alertes ciblées. Anticipation des défaillances avant qu\'elles deviennent crises.',
    delai: '2 à 3 semaines',
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
          <div className="ach-agent-badge" style={{ marginTop: 4 }}>
            <span style={{ padding: '3px 10px', borderRadius: 9999, background: `${agent.color}12`, border: `1px solid ${agent.color}30`, fontSize: 11, fontWeight: 800, color: agent.color }}>{agent.badge}</span>
          </div>
        </div>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform .25s', color: '#a1a1aa' }}>
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {expanded && (
        <div className="ach-agent-expanded" style={{ padding: '0 24px 24px', paddingLeft: 80 }}>
          <p style={{ fontSize: 14, color: '#a1a1aa', marginBottom: 12, fontStyle: 'italic' }}>{agent.who}</p>
          <p style={{ fontSize: 15, color: '#52525b', lineHeight: 1.7, marginBottom: 16 }}>{agent.desc}</p>
          <div className="ach-agents-detail" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
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
          <H2 style={{ marginBottom: 12 }}>4 agents IA Althoce déployés en standard dans les achats</H2>
          <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.65 }}>Quatre agents complémentaires que vous pouvez déployer indépendamment ou combiner.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {agents.map((agent, i) => (
            <AgentCard key={agent.num} agent={agent} index={i} visible={visible} />
          ))}
        </div>
        <div style={{ marginTop: 32, padding: '20px 24px', borderRadius: 16, background: '#fff', border: '1px solid #e4e4e7' }}>
          <p style={{ fontSize: 15, color: '#52525b', lineHeight: 1.7, margin: 0 }}>
            Pour un poste entier d'acheteur ou d'approvisionneur automatisé de bout en bout, voir{' '}
            <a href="/services/employe-ia/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>Employé IA</a>.{' '}
            Les <strong>30 minutes offertes avec un expert</strong> servent à qualifier la combinaison d'agents la plus pertinente pour votre contexte achats.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Cas Client ────────────────────────────────────────────────
const kpis = [
  { label: 'Durée sourcing fournisseur', avant: '3 jours', apres: '4 heures', unit: '−93 %' },
  { label: 'Devis analysés rigoureusement', avant: '60 %', apres: '100 %', unit: '+40 pts' },
  { label: 'Options de sortie ratées / an', avant: '4', apres: '0', unit: '−100 %' },
  { label: 'Économies achats annuelles', avant: 'Base', apres: '+4 % (+1,2 M€)', unit: 'ROI <6 mois' },
];

function CasClient() {
  const [ref, visible] = useInView(0.08);
  return (
    <section ref={ref} style={{ background: '#09090b', borderTop: '1px solid #1a1a1a', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.018) 1px,transparent 1px)', backgroundSize: '52px 52px', maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%,black,transparent)', pointerEvents: 'none' }} />
      <div aria-hidden="true" style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: 800, height: 500, background: `radial-gradient(ellipse,${AC}0a 0%,transparent 60%)`, filter: 'blur(80px)', pointerEvents: 'none' }} />

      <div style={{ padding: '88px 24px 72px', maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 44, flexWrap: 'wrap', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(12px)', transition: 'all .5s ease' }}>
          {['ETI industrielle', '350 collaborateurs', '30 M€ achats / an', 'Direction achats 3 personnes'].map((tag, i) => (
            <span key={i} style={{ padding: '4px 12px', borderRadius: 9999, border: '1px solid #222', fontSize: 11, fontWeight: 600, color: '#8a8a95', background: '#111', letterSpacing: '.02em' }}>{tag}</span>
          ))}
          <div style={{ height: 1, flex: 1, minWidth: 40, background: 'linear-gradient(to right,#222,transparent)' }} aria-hidden="true" />
        </div>

        <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(28px)', transition: 'all .7s .12s ease' }}>
          <div aria-hidden="true" style={{ fontSize: 72, lineHeight: 0.65, color: AC, fontFamily: 'Georgia, serif', fontWeight: 900, opacity: 0.45, marginBottom: 20, display: 'block' }}>"</div>

          <blockquote style={{ fontSize: 'clamp(17px,2.2vw,24px)', fontWeight: 700, color: '#f0f0f0', lineHeight: 1.65, margin: '0 0 36px', fontStyle: 'normal', paddingLeft: 20, borderLeft: `3px solid ${AC}55` }}>
            On était 3 acheteurs pour gérer 200 fournisseurs et 30 M€ d'achats annuels. On passait nos journées dans le sourcing, l'analyse de devis et le suivi de contrats. Pour la négociation stratégique, on n'avait jamais le temps. On a déployé l'agent IA achats en 6 semaines. Aujourd'hui le sourcing prend quelques heures au lieu de quelques jours, les devis sont analysés rigoureusement en routine, les contrats sont suivis sans rater une option. On a capté 4 % d'économies supplémentaires la première année. C'est l'investissement IT le plus rentable qu'on ait fait.
          </blockquote>

          <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', marginBottom: 32 }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: `${AC}15`, border: `1.5px solid ${AC}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <circle cx="11" cy="9" r="4.5" stroke={AC} strokeWidth="1.5"/>
                <path d="M4 20C4 16.7 7.1 14 11 14S18 16.7 18 20" stroke={AC} strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 15, fontWeight: 800, color: '#e4e4e7', letterSpacing: '-.01em' }}>Directeur des achats</div>
              <div style={{ fontSize: 13, color: '#3f3f46', marginTop: 2 }}>ETI industrielle · 350 collaborateurs · 30 M€ achats annuels</div>
            </div>
            <div style={{ padding: '7px 16px', borderRadius: 9999, background: '#16a34a12', border: '1px solid #16a34a30', fontSize: 14, fontWeight: 800, color: GREEN, flexShrink: 0 }}>+4 % économies achats</div>
          </div>

          <p style={{ fontSize: 15, color: '#52525b', lineHeight: 1.75, marginBottom: 12 }}>
            Avant la mission Althoce, la direction achats 3 personnes gérait 200 fournisseurs actifs et 30 M€ d'achats annuels. Les acheteurs étaient absorbés à 70 % par le sourcing, l'analyse de devis et le suivi documentaire. Le temps réellement passé à négocier ne dépassait pas 30 % du quotidien. Plusieurs options de sortie avaient été ratées les années précédentes, faute de suivi systématique.
          </p>
          <p style={{ fontSize: 15, color: '#52525b', lineHeight: 1.75, marginBottom: 24 }}>
            En 6 semaines, 3 agents IA achats ont été déployés (sourcing, analyse devis, suivi contrats) avec intégration profonde à l'ERP et aux sources de vigilance (Pappers, Altares). Aujourd'hui, le sourcing prend 4 heures au lieu de 3 jours, les devis sont analysés rigoureusement, et plus aucune option de sortie n'a été ratée en 12 mois. Les acheteurs consacrent désormais 60 % de leur temps à la négociation stratégique. Résultat : 4 % d'économies achats supplémentaires la première année, soit 1,2 M€ sur le P&L.
          </p>

          <a href="/cas-clients/eti-industrielle-agent-ia-achats/" style={{ fontSize: 15, fontWeight: 700, color: AC, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            Voir le cas client complet →
          </a>
        </div>
      </div>

      <div style={{ borderTop: '1px solid #1a1a1a', position: 'relative', zIndex: 1 }}>
        <div className="ach-kpi-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', opacity: visible ? 1 : 0, transition: 'opacity .6s .3s ease' }}>
          {kpis.map((k, i) => (
            <div key={i} style={{ padding: '32px 24px', borderRight: i < kpis.length - 1 ? '1px solid #1a1a1a' : 'none', textAlign: 'center', position: 'relative' }}>
              <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: '20%', right: '20%', height: 2, background: `linear-gradient(to right,transparent,${AC}55,transparent)` }} />
              <div style={{ fontSize: 10, fontWeight: 700, color: '#3f3f46', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 18 }}>{k.label}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 10, marginBottom: 14, flexWrap: 'wrap' }}>
                <span style={{ fontSize: 15, fontWeight: 600, color: '#3f3f46', textDecoration: 'line-through', textDecorationColor: `${RED}90` }}>{k.avant}</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
                  <path d="M2 7H12M12 7L8.5 3.5M12 7L8.5 10.5" stroke={AC} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span style={{ fontSize: 20, fontWeight: 900, color: '#ffffff', letterSpacing: '-.03em', lineHeight: 1 }}>{k.apres}</span>
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
        <div className="ticker-slow" role="marquee" aria-label="Secteurs couverts par les agents IA achats">
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
      <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 12 }}>Audit achats</div>
      {['Volume achats annuels', 'Taille panel fournisseurs', 'Outils ERP / achats', 'Catégories prioritaires'].map((t, i) => (
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
      <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 12 }}>Roadmap achats</div>
      {[{ l: 'Agent sourcing', w: 90 }, { l: 'Agent analyse devis', w: 75 }, { l: 'Agent suivi contrats', w: 58 }, { l: 'Agent vigilance', w: 42 }].map((r, i) => (
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
        {[{ n: 'SAP Ariba', c: '#0066b3' }, { n: 'Coupa', c: '#e05c14' }, { n: 'Pappers', c: '#6366f1' }, { n: 'Altares', c: '#059669' }, { n: 'Sage', c: '#00b050' }, { n: 'Dynamics', c: '#0078d4' }].map((t, i) => (
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
        <span style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em' }}>Agent achats actif</span>
        <span style={{ padding: '2px 8px', borderRadius: 9999, background: '#22c55e15', border: '1px solid #22c55e30', fontSize: 10, fontWeight: 800, color: '#22c55e' }}>Actif</span>
      </div>
      {[{ t: 'Sourcings lancés cette semaine', v: '3' }, { t: 'Devis comparés et scorés', v: '8' }, { t: 'Alertes contrats à 60 jours', v: '2' }, { t: 'Alertes vigilance fournisseurs', v: '1' }].map((r, i) => (
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
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 500, margin: '0 auto' }}>Quatre étapes courtes. Votre premier agent achats en production en moins de 4 semaines.</p>
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
            <H2 style={{ marginTop: 12, marginBottom: 20, color: '#fff' }}>Vos conditions négociées. Hébergées en France. Jamais exposées.</H2>
            <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.75, marginBottom: 20 }}>
              Les conditions négociées (prix, remises, marges fournisseurs) ne sortent jamais de votre infra. Anonymisation possible des PII fournisseurs (raisons sociales, contacts) avant tout envoi LLM. Pour la souveraineté maximale (secteurs défense, agroalimentaire stratégique, secteurs régulés) : <strong style={{ color: '#a1a1aa' }}>Mistral hébergé en France</strong> et auto-hébergement infra possible.
            </p>
            <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.75 }}>
              Chaque recommandation de l'agent achats est <strong style={{ color: '#a1a1aa' }}>journalisée et auditable</strong> : scoring détaillé par critère, traçabilité complète pour vos audits internes. Votre code, vos prompts, vos grilles de pondération vous appartiennent à 100 % — sans abonnement obligatoire.
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
const faqAchats: FAQv2Item[] = [
  {
    q: "L'agent IA prend-il des décisions d'achat à la place de mes acheteurs ?",
    a: "Non, jamais. L'agent recommande systématiquement avec scoring transparent et justification, mais la décision finale (choix du fournisseur, signature contrat, montant engagé) reste sous responsabilité humaine. Cette discipline est inscrite techniquement dans le déploiement : l'agent n'a aucun pouvoir de signature ou d'engagement contractuel. Validation acheteur obligatoire dans le workflow.",
  },
  {
    q: "Le scoring de l'agent est-il transparent ou une boîte noire ?",
    a: "Totalement transparent. Au cadrage, nous définissons avec vous les critères pondérés de votre politique achats : prix (poids X %), délai (poids Y %), qualité (poids Z %), RSE (poids W %), vigilance financière (poids V %), certifications (poids U %). L'agent applique strictement cette grille. Chaque recommandation s'accompagne d'un détail du scoring par critère. Vous pouvez challenger, ajuster, et modifier la grille à tout moment.",
  },
  {
    q: "Quel investissement pour un agent IA achats et quel ROI attendre ?",
    a: "Tarification entièrement sur devis selon votre contexte : volume d'achats annuels, taille du panel fournisseurs, nombre de catégories, intégration ERP et outil achats, profondeur de vigilance financière. Le ROI typique se mesure en 3 à 6 mois et se matérialise par 3 à 7 % d'économies achats supplémentaires identifiées la première année. Tout démarre par 30 minutes offertes avec un expert.",
  },
  {
    q: "L'agent peut-il s'intégrer à mon outil achats existant (SAP Ariba, Coupa, etc.) ?",
    a: "Oui. SAP Ariba, Coupa, Determine, Ivalua, Jaggaer en standard côté outils achats. SAP, Sage, Cegid, Microsoft Dynamics côté ERP. Pappers, Societe.com, Infogreffe, Altares, Creditsafe côté vigilance financière. Pour les outils achats internes propriétaires, voir Intégration IA (/services/integration-ia/).",
  },
  {
    q: "La vigilance financière de l'agent va-t-elle remplacer mon abonnement Pappers ou Altares ?",
    a: "Non, elle s'appuie dessus. Vous gardez votre abonnement (source de vérité officielle), l'agent interroge ces sources et synthétise les signaux faibles pour votre attention. L'agent ne remplace pas la source, il en démultiplie l'usage : surveiller systématiquement 200 fournisseurs au lieu de checker manuellement les 20 plus exposés.",
  },
  {
    q: "Que se passe-t-il si l'agent recommande un fournisseur qui s'avère défaillant ?",
    a: "Même chaîne de responsabilité qu'avec un acheteur humain qui aurait fait la même recommandation. La transparence du scoring vous permet d'identifier en pré-décision les zones de risque à creuser personnellement. La vigilance financière intégrée alerte sur les signaux faibles avant qu'ils ne deviennent défaillance. Aucun client n'a connu de défaillance fournisseur surprise après déploiement de l'agent vigilance.",
  },
  {
    q: "Mes données achats (fournisseurs, prix, conditions négociées) restent-elles confidentielles ?",
    a: "Oui. Anonymisation possible des PII fournisseurs avant tout envoi LLM. Les conditions négociées (prix, remises, marges fournisseurs) ne sortent jamais de votre infra. Pour la souveraineté maximale (défense, secteurs régulés) : Mistral hébergé en France et auto-hébergement infra possible.",
  },
  {
    q: "L'agent IA va-t-il remplacer mes acheteurs ?",
    a: "Non. L'agent absorbe les tâches systématiques (sourcing, analyse devis, suivi contrats, vigilance) et libère vos acheteurs pour les tâches à forte valeur ajoutée (négociation stratégique, relation fournisseur clé, make-or-buy, sourcing innovation, optimisation structurelle du panel). Aucun de nos clients achats n'a réduit son effectif. Plusieurs ont capté 3 à 7 % d'économies supplémentaires en libérant les acheteurs sur la négociation.",
  },
];

function FAQ() {
  return (
    <section id="faq" style={{ padding: '96px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <H2 style={{ marginBottom: 12 }}>Questions fréquentes sur les agents IA achats</H2>
          <p style={{ fontSize: 16, color: '#52525b' }}>Huit questions qui reviennent systématiquement lors des premiers échanges.</p>
        </div>
        <FAQAccordion items={faqAchats} />
      </div>
    </section>
  );
}

// ── Responsive CSS ────────────────────────────────────────────
const globalStyles = `
  .ach-ba-mobile { display: none; }
  @keyframes gradDrift1 { 0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(3%,4%) scale(1.06)} }
  @keyframes gradDrift2 { 0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(-4%,-3%) scale(1.08)} }
  @keyframes floatCard { 0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)} }
  @keyframes slideIn { from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:translateX(0)} }
  @keyframes countUp { from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)} }
  @keyframes pillsScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  .ticker-slow { display:flex;animation:tickerSlide 70s linear infinite;width:max-content; }
  @keyframes tickerSlide { from{transform:translateX(0)}to{transform:translateX(-50%)} }
  @media (max-width: 860px) {
    .ach-hero-grid { grid-template-columns: 1fr !important; }
    .ach-mockup-col { display: none !important; }
    .ach-kpi-strip { grid-template-columns: repeat(2, 1fr) !important; }
    .ach-kpi-strip > div:nth-child(odd) { border-right: 1px solid #e4e4e7 !important; }
    .ach-kpi-strip > div:nth-child(1), .ach-kpi-strip > div:nth-child(2) { border-bottom: 1px solid #e4e4e7 !important; }
    .ach-kpi-grid { grid-template-columns: repeat(2, 1fr) !important; }
    .ach-kpi-grid > div { border-right: none !important; border-bottom: 1px solid #1a1a1a; }
    .ach-kpi-grid > div:last-child, .ach-kpi-grid > div:nth-last-child(2) { border-bottom: none !important; }
    .v2-grid4 { grid-template-columns: repeat(2,1fr) !important; }
    .v2-grid-hero { grid-template-columns: 1fr !important; }
    .ach-ba-desktop { display: none !important; }
    .ach-ba-mobile { display: flex !important; }
  }
  @media (max-width: 640px) {
    .ach-kpi-grid { grid-template-columns: 1fr 1fr !important; }
    .ach-agent-badge { display: none !important; }
    .ach-agent-expanded { padding-left: 24px !important; }
    .ach-agents-detail { grid-template-columns: 1fr !important; }
    .v2-grid4 { grid-template-columns: 1fr !important; }
    .ach-pills { flex-wrap: nowrap !important; width: max-content; animation: pillsScroll 10s linear infinite; }
  }
`;

// ── Page ──────────────────────────────────────────────────────
export default function AgentIAachatsPageClient() {
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
