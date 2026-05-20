'use client';

import React, { useState, useEffect, useRef } from 'react';
import { steps } from '@/lib/data';

const AC    = '#2563eb';
const AZURE = '#0369a1';
const RED   = '#ef4444';
const AMBER = '#d97706';
const GREEN = '#16a34a';

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
      <div aria-hidden="true" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 320, height: 220, background: `radial-gradient(ellipse,${AZURE}18 0%,transparent 65%)`, filter: 'blur(40px)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', zIndex: 1, opacity: count ? 1 : 0, transform: count ? 'none' : 'translateY(16px)', transition: 'all .6s ease' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 16 }}>
          <div style={{ fontSize: 'clamp(44px,7vw,84px)', fontWeight: 900, color: '#3f3f46', letterSpacing: '-.06em', lineHeight: 0.9, textDecoration: 'line-through', textDecorationColor: `${RED}80` }}>3h</div>
          <div style={{ fontSize: 'clamp(28px,4vw,48px)', color: '#3f3f46', fontWeight: 900 }}>→</div>
          <div style={{ fontSize: 'clamp(44px,7vw,84px)', fontWeight: 900, color: AZURE, letterSpacing: '-.06em', lineHeight: 0.9 }}>30 min</div>
        </div>
        <div style={{ fontSize: 16, fontWeight: 700, color: '#a1a1aa', lineHeight: 1.65, maxWidth: 260 }}>par contrat de pré-analyse</div>
        <div style={{ marginTop: 12, fontSize: 14, color: '#3f3f46', fontWeight: 500 }}>validation humaine obligatoire conservée</div>
      </div>
      <div style={{ position: 'absolute', bottom: 16, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 20, zIndex: 1 }}>
        {[{ v: '4 j', l: 'libérés / mois stratégie' }, { v: '100 %', l: 'contrats couverts' }, { v: '97,3 %', l: 'concordance POC' }].map((s, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 15, fontWeight: 900, color: AZURE }}>{s.v}</div>
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
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: 500, height: 500, borderRadius: '50%', background: `radial-gradient(circle,${AZURE}0a 0%,transparent 65%)`, filter: 'blur(80px)', animation: 'gradDrift1 14s ease-in-out infinite' }} />
      </div>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.025) 1px,transparent 1px)', backgroundSize: '48px 48px', maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%,black,transparent)', zIndex: 0 }} aria-hidden="true" />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1160, margin: '0 auto' }}>
        <div className="cc8-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: '#a1a1aa', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', fontWeight: 500 }}>
              <a href="/" style={{ color: '#8a8a95', textDecoration: 'none' }}>Accueil</a><span>›</span>
              <a href="/cas-clients/" style={{ color: '#8a8a95', textDecoration: 'none' }}>Cas clients</a><span>›</span>
              <span style={{ color: '#09090b' }}>ETI agroalimentaire juridique</span>
            </nav>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 20 }}>
              {['Analyse contractuelle', 'ETI agroalimentaire', '280 collab.', 'Mistral France', 'cas anonymisé · 2025-2026'].map((t) => (
                <span key={t} style={{ padding: '3px 10px', borderRadius: 9999, background: '#f4f4f5', fontSize: 11, fontWeight: 700, color: '#8a8a95' }}>{t}</span>
              ))}
            </div>
            <h1 style={{ fontSize: 'clamp(26px,3.8vw,48px)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-.03em', color: '#09090b', marginBottom: 20 }}>
              600 contrats par an pré-analysés et 4 jours libérés par mois pour un juriste unique d'ETI agroalimentaire.
            </h1>
            <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 28, maxWidth: 520 }}>
              280 collaborateurs, un seul juriste interne pour gérer 600 contrats annuels. Un agent IA d'analyse contractuelle en mode pré-décision déployé en 5 semaines avec Mistral hébergé en France pour souveraineté absolue. Voici comment le juriste a retrouvé du temps pour la négociation stratégique.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="/contact" style={{ padding: '14px 28px', borderRadius: 9999, background: '#09090b', color: '#fff', textDecoration: 'none', fontSize: 15, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'transform .15s,box-shadow .15s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.03)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 6px 24px rgba(0,0,0,.25)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'; }}>
                Discuter de votre projet →
              </a>
              <a href="#resultats" style={{ padding: '14px 28px', borderRadius: 9999, border: '1.5px solid #e4e4e7', color: '#09090b', textDecoration: 'none', fontSize: 15, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, background: '#fff', transition: 'border-color .15s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = AZURE; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#e4e4e7'; }}>
                Voir les résultats ↓
              </a>
            </div>
          </div>
          <div className="cc8-stat-col"><HeroStat /></div>
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
        <H2 style={{ marginBottom: 28 }}>L'ETI : 280 personnes, 600 contrats annuels, 1 juriste interne</H2>
        <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.8, marginBottom: 24 }}>
          L'ETI agroalimentaire (nom anonymisé) opère sur le marché des produits alimentaires transformés (segment premium). <strong style={{ color: '#09090b' }}>280 collaborateurs</strong> : 180 production/qualité, 50 commercial/marketing, 25 logistique/supply chain, 15 finance/admin, 6 IT, 4 direction, plus <strong style={{ color: '#09090b' }}>1 juriste interne unique</strong>. Chiffre d'affaires : 65 M€ HT, 70 % France, 30 % export Europe. Volume contractuel annuel : ~600 contrats actifs (fournisseurs matières premières, clients GMS et grossistes, prestataires logistiques, baux commerciaux).
        </p>
        <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.8, marginBottom: 32 }}>
          Le juriste (8 ans d'expérience, double formation droit des affaires et droit alimentaire) avait pour mission de couvrir l'ensemble du périmètre juridique. Sur les 50 contrats mensuels, <strong style={{ color: '#09090b' }}>30 étaient analysés sérieusement</strong> (3h par contrat), <strong style={{ color: '#09090b' }}>20 étaient survolés</strong> faute de temps. La négociation stratégique — renégociations GMS, conseil COMEX, gestion contentieux — ne représentait que <strong style={{ color: '#09090b' }}>20 % du temps</strong> alors que c'est là que réside la vraie valeur métier.
        </p>
        <div style={{ padding: '28px 32px', borderRadius: 20, background: '#fafafa', border: '1px solid #e4e4e7', borderLeft: `4px solid ${RED}` }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: RED, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 14 }}>Le double blocage : capacité et souveraineté</div>
          <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75 }}>
            Recruter un second juriste coûtait <strong style={{ color: '#09090b' }}>70-80 k€ chargés</strong> (refusé par la direction sans business case clair). Et toute solution SaaS était soumise à une exigence non négociable : <strong style={{ color: '#09090b' }}>souveraineté absolue France</strong>. Données contractuelles clients GMS confidentielles, secret commercial sur les conditions fournisseurs, secteur régulé. Aucune donnée ne devait sortir de France, OpenAI et Anthropic écartés dès le RFP.
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
        <H2 style={{ marginBottom: 40 }}>La situation avant : juriste solo, 70 % du temps en pré-analyse</H2>
        <div className="cc8-avant-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 36 }}>
          <div style={{ borderRadius: 18, background: '#fff', border: `1px solid ${RED}22`, overflow: 'hidden', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(-16px)', transition: 'all .6s ease' }}>
            <div style={{ padding: '16px 22px', background: `${RED}08`, borderBottom: `1px solid ${RED}15`, display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: RED }} />
              <span style={{ fontSize: 13, fontWeight: 800, color: RED, textTransform: 'uppercase', letterSpacing: '.08em' }}>Côté juriste</span>
            </div>
            <div style={{ padding: '8px 0' }}>
              {[
                '50 contrats à analyser par mois en moyenne',
                '30 analysés sérieusement (3h chacun = 90h/mois)',
                '20 contrats survolés ou reportés faute de temps',
                'Négociation stratégique : 20 % du temps (idéal : 60-70 %)',
                'Conseil COMEX insuffisant, frustration croissante',
                'Sentiment de "ne pas utiliser son expertise"',
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
                'Recrutement 2ᵉ juriste = 70-80 k€ chargés, ROI difficile',
                'Souveraineté absolue exigée (secret affaires, secteur sensible)',
                'Refus catégorique OpenAI / Anthropic non anonymisé',
                'Conseil COMEX juridique insuffisamment couvert',
                'Risque contentieux non maîtrisé sur contrats survolés',
                'Audit fournisseur GMS préparé dans la tension',
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
              <path d="M7 1.5L2 4v4c0 2.8 2.2 5.2 5 5.5 2.8-.3 5-2.7 5-5.5V4L7 1.5z" stroke={AZURE} strokeWidth="1.2" strokeLinejoin="round"/>
              <path d="M4.5 7l2 2 3-3" stroke={AZURE} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p style={{ fontSize: 12, fontWeight: 800, color: '#52525b', textTransform: 'uppercase', letterSpacing: '.12em', margin: 0 }}>Exigence souveraineté absolue — critère n°1 du RFP</p>
          </div>
          <div style={{ padding: '24px 28px' }}>
            <p style={{ fontSize: 16, color: '#a1a1aa', lineHeight: 1.75, margin: '0 0 14px' }}>
              Pour cette ETI (données clients GMS confidentielles, secret commercial sur les recettes et conditions fournisseurs), aucune donnée contractuelle ne devait sortir du territoire français. La direction a explicitement écarté toute solution utilisant OpenAI ou Anthropic, même avec anonymisation. C'est devenu le critère de qualification numéro 1.
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['Mistral OVH Bordeaux', 'SharePoint Azure France', 'Mindee OCR France', 'Zéro transfert hors territoire'].map((badge) => (
                <span key={badge} style={{ padding: '4px 10px', borderRadius: 9999, background: `${AZURE}15`, border: `1px solid ${AZURE}30`, fontSize: 11, fontWeight: 700, color: AZURE }}>{badge}</span>
              ))}
            </div>
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
      'Qualification du besoin et exigence souveraineté absolue confirmée',
      'Validation stack : Mistral OVH Bordeaux + SharePoint Azure France + DocuSign',
      'Cadrage du référentiel : 12 clauses sensibles secteur agroalimentaire (responsabilité, PI, juridiction, force majeure, paiement, RGPD, conformité alimentaire)',
      'Devis ferme sous 5 jours, validation direction + juriste',
    ],
  },
  {
    week: 'Sem. 1-2', title: 'Indexation et référentiel', color: AZURE,
    items: [
      'Indexation de la bibliothèque de 1 500 contrats historiques (référence "standard maison" vs "inhabituel")',
      'Définition des 12 clauses sensibles à signaler systématiquement',
      'Mapping avec les 5 templates contractuels existants de l\'ETI',
      'Atelier 1 journée avec le juriste pour valider la grille d\'évaluation',
    ],
  },
  {
    week: 'Sem. 3-4', title: 'Build et POC', color: AZURE,
    items: [
      'Développement agent avec accès SharePoint (lecture contrats entrants + écriture synthèses)',
      'OCR et parsing structuré : Mindee hébergé France, PDF et Word',
      'Configuration Mistral OVH avec contexte de référence propre à l\'ETI',
      'POC sur 30 contrats historiques déjà analysés par le juriste',
      'Taux de concordance sur clauses sensibles : 97,3 %',
    ],
  },
  {
    week: 'Sem. 5', title: 'Mise en production', color: GREEN,
    items: [
      'Bascule : chaque contrat entrant passe par l\'agent avant remontée au juriste',
      'Juriste reçoit synthèse 1 page + contrat original + clauses sensibles surlignées',
      'Temps de validation : 30 min par contrat (vs 3h auparavant)',
      'Reporting hebdo automatique au directeur général',
      'Documentation conformité livrée au DPO pour archivage',
    ],
  },
];

function ArchitectureSVG() {
  return (
    <div className="cc8-arch-card" style={{ borderRadius: 16, background: '#09090b', border: '1px solid #1a1a1a', padding: '24px 20px', overflow: 'hidden' }}>
      <div className="cc8-arch-head" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, flexWrap: 'wrap' }}>
        <div style={{ fontSize: 12, fontWeight: 800, color: '#3f3f46', textTransform: 'uppercase', letterSpacing: '.1em', flex: 1, minWidth: 0 }}>
          <span className="cc8-arch-title-full">Architecture déployée · Agent IA juridique Althoce</span>
          <span className="cc8-arch-title-short">Pipeline · Agent IA juridique</span>
        </div>
        <span style={{ flexShrink: 0, padding: '3px 10px', borderRadius: 9999, background: `${AZURE}15`, border: `1px solid ${AZURE}30`, fontSize: 10, fontWeight: 800, color: AZURE }}>100 % France</span>
      </div>
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: '#52525b', marginBottom: 10 }}>Pipeline pré-analyse souverain</div>
        <div className="cc8-arch-flow-desktop" style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
          {[
            { label: 'Contrats entrants (mail / SharePoint)', color: '#3f3f46' },
            { label: 'OCR + parsing (Mindee France)', color: AMBER },
            { label: 'Agent IA Althoce (Mistral OVH Bordeaux)', color: AZURE },
            { label: 'Synthèse 1p + clauses surlignées', color: AZURE },
            { label: 'Validation juriste 30 min', color: GREEN },
            { label: 'Signature DocuSign + archivage SharePoint Azure FR', color: GREEN },
          ].map((node, i, arr) => (
            <React.Fragment key={i}>
              <div style={{ padding: '6px 12px', borderRadius: 8, background: '#111', border: `1px solid ${node.color}30`, fontSize: 10, fontWeight: 700, color: node.color, whiteSpace: 'nowrap' }}>{node.label}</div>
              {i < arr.length - 1 && <span style={{ color: '#2a2a2a', fontSize: 15, fontWeight: 900 }}>→</span>}
            </React.Fragment>
          ))}
        </div>
        <div className="cc8-arch-flow-mobile">
          {[
            { label: 'Contrats entrants (mail / SharePoint)', color: '#3f3f46' },
            { label: 'OCR + parsing (Mindee France)', color: AMBER },
            { label: 'Agent IA Althoce (Mistral OVH Bordeaux)', color: AZURE },
            { label: 'Synthèse 1p + clauses surlignées', color: AZURE },
            { label: 'Validation juriste 30 min', color: GREEN },
            { label: 'Signature + archivage Azure France', color: GREEN },
          ].map((node, i, arr) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
              <div style={{ padding: '6px 10px', borderRadius: 8, background: '#111', border: `1px solid ${node.color}30`, fontSize: 12, fontWeight: 700, color: node.color, width: '100%', boxSizing: 'border-box' }}>{node.label}</div>
              {i < arr.length - 1 && <div style={{ width: 2, height: 8, background: '#2a2a2a', marginLeft: 14 }} />}
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: '#8a8a95', marginBottom: 10 }}>12 clauses analysées systématiquement</div>
        <div className="cc8-clauses-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 6 }}>
          {['Responsabilité', 'Propriété intellectuelle', 'Juridiction', 'Force majeure', 'Conditions de paiement', 'RGPD', 'Conformité alimentaire', 'Pénalités', 'Résiliation', 'Confidentialité', 'Exclusivité', 'Avenants'].map((c, i) => (
            <div key={i} style={{ padding: '5px 8px', borderRadius: 6, background: '#111', border: `1px solid ${AZURE}18`, fontSize: 10, fontWeight: 700, color: AZURE, lineHeight: 1.3 }}>{c}</div>
          ))}
        </div>
      </div>
      <div style={{ padding: '10px 14px', borderRadius: 8, background: '#0a0a0a', border: `1px solid ${AZURE}20`, display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: AZURE, flexShrink: 0 }} />
        <span style={{ fontSize: 12, color: '#3f3f46', fontWeight: 600 }}>Aucune donnée contractuelle ne sort de France. Mistral OVH Bordeaux · SharePoint Azure France · Mindee OCR France · Validation humaine obligatoire avant tout engagement.</span>
      </div>
    </div>
  );
}

function LaSolution() {
  const [ref, visible] = useInView(0.05);
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        <H2 style={{ marginBottom: 12 }}>Agent IA d'analyse contractuelle déployé en 5 semaines avec Mistral hébergé OVH France</H2>
        <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.75, marginBottom: 48, maxWidth: 700 }}>
          Nous avons conçu un agent IA Althoce en mode pré-analyse à décharge : l'agent prépare, le juriste décide et signe. Stack 100 % France — Mistral hébergé sur OVH Bordeaux, GED sur SharePoint Microsoft Azure France, OCR Mindee France. L'agent reçoit les contrats entrants, produit une synthèse en 1 page, identifie les 12 clauses sensibles selon le référentiel propre à l'ETI, et alerte sur les clauses manquantes ou inhabituelles.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginBottom: 48 }}>
          {timeline.map((step, i) => (
            <div key={i} className="cc8-tl-row" style={{ display: 'flex', gap: 0, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(-10px)', transition: `all .5s ${i * .08}s ease`, minWidth: 0, overflow: 'hidden' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: 100 }}>
                <div style={{ padding: '6px 10px', borderRadius: 9999, background: `${step.color}10`, border: `2px solid ${step.color}40`, display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                  <span style={{ fontSize: 10, fontWeight: 900, color: step.color }}>{step.week}</span>
                </div>
                {i < timeline.length - 1 && <div style={{ width: 2, flex: 1, minHeight: 24, background: `linear-gradient(to bottom,${step.color}30,#e4e4e7)` }} />}
              </div>
              <div style={{ flex: 1, minWidth: 0, marginBottom: i < timeline.length - 1 ? 16 : 0, paddingBottom: i < timeline.length - 1 ? 8 : 0 }}>
                <div style={{ borderRadius: 14, background: '#fafafa', border: '1px solid #e4e4e7', borderLeft: `3px solid ${step.color}`, padding: '18px 22px', minWidth: 0, overflow: 'hidden' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                    <span style={{ fontSize: 16, fontWeight: 800, color: '#09090b' }}>{step.title}</span>
                    <span className="cc8-tl-week-inline" style={{ padding: '2px 8px', borderRadius: 9999, background: `${step.color}10`, border: `1px solid ${step.color}25`, fontSize: 10, fontWeight: 800, color: step.color, flexShrink: 0 }}>{step.week}</span>
                  </div>
                  <div className="cc8-tl-items">
                    {step.items.map((item, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                        <div style={{ flexShrink: 0, width: 5, height: 5, borderRadius: '50%', background: step.color, marginTop: 7, opacity: 0.6 }} />
                        <span style={{ fontSize: 14, color: '#52525b', lineHeight: 1.65, wordBreak: 'break-word', overflowWrap: 'break-word' }}>{item}</span>
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
  { delta: '30 min', label: 'de validation par contrat (vs 3h avant)', avant: '3h de pré-analyse par contrat', apres: 'Synthèse 1 page + clauses surlignées', color: AC, size: 'hero' },
  { delta: '100 %', label: 'des contrats analysés sérieusement', avant: '30/50 analysés (60 % survolés)', apres: '50+ contrats / mois couverts', color: AC, size: 'normal' },
  { delta: '4 j', label: 'libérés par mois pour la stratégie', avant: 'Négociation stratégique : 20 % du temps', apres: 'Conseil COMEX, renégo GMS, audits', color: AC, size: 'normal' },
  { delta: '97,3 %', label: 'concordance agent vs juriste (POC)', avant: 'Aucun POC anti-biais possible avant', apres: 'Validé sur 30 contrats historiques', color: AC, size: 'normal' },
  { delta: '0', label: 'fuite de données contractuelles', avant: 'Risque non tracé (outils variés)', apres: 'Audit conformité interne validé 6 mois', color: AC, size: 'small' },
  { delta: '75 k€', label: 'recrutement 2ᵉ juriste annulé / an', avant: '70-80 k€ chargés évalués', apres: 'ROI positif dès le 2ᵉ mois', color: AC, size: 'small' },
];

function KPICard({ k, i, visible }: { k: typeof kpiCards[0]; i: number; visible: boolean }) {
  const isHero = k.size === 'hero';
  const isSmall = k.size === 'small';
  return (
    <div className={isHero ? 'cc8-kpi-card cc8-kpi-hero' : 'cc8-kpi-card'}
      style={{ borderRadius: 18, background: isHero ? 'linear-gradient(135deg,#080c18 0%,#0d1220 100%)' : '#111', border: `1px solid ${k.color}${isHero ? '40' : '20'}`, padding: isHero ? '32px 28px' : '22px 20px', display: 'flex', flexDirection: 'column', gap: isHero ? 14 : 10, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: `all .55s ${i * .08}s ease`, position: 'relative', overflow: 'hidden' }}>
      {isHero && <div aria-hidden="true" style={{ position: 'absolute', top: '-20%', right: '-10%', width: 180, height: 180, borderRadius: '50%', background: `radial-gradient(circle,${AC}18 0%,transparent 65%)`, filter: 'blur(30px)', pointerEvents: 'none' }} />}
      <div style={{ fontSize: isHero ? 'clamp(40px,5.5vw,64px)' : isSmall ? 28 : 36, fontWeight: 900, color: k.color, letterSpacing: '-.04em', lineHeight: 0.95, position: 'relative' }}>{k.delta}</div>
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
      <div aria-hidden="true" style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 2, background: `linear-gradient(to right,transparent,${AZURE},transparent)` }} />
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: '#3f3f46', textTransform: 'uppercase', letterSpacing: '.14em', marginBottom: 14 }}>Mesure 6 mois après mise en production</div>
          <H2 style={{ color: '#fff' }}>Ce qui a changé concrètement</H2>
        </div>
        <div className="cc8-kpi-bento">
          {kpiCards.map((k, i) => <KPICard key={i} k={k} i={i} visible={visible} />)}
        </div>
        <div style={{ marginTop: 32, padding: '24px 28px', borderRadius: 18, background: `${AC}0c`, border: `1px solid ${AC}22` }}>
          <p style={{ fontSize: 16, color: '#a1a1aa', lineHeight: 1.75, margin: 0 }}>
            L'ETI a stabilisé sa couverture juridique sans recrutement. Le juriste a récupéré <strong style={{ color: '#f0f0f0' }}>4 jours par mois</strong> qu'il redéploie sur la négociation stratégique, le conseil COMEX et la refonte des templates contractuels maison. Aucune fuite de données sur 6 mois (audit conformité interne validé). Le directeur général en a fait son cas d'usage IA exemplaire qu'il cite à ses pairs dirigeants d'ETI.
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
        <div style={{ fontSize: 13, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.14em', marginBottom: 32, textAlign: 'center' }}>Le mot du directeur juridique</div>
        <div style={{ position: 'relative', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(28px)', transition: 'all .7s ease' }}>
          <div aria-hidden="true" style={{ fontSize: 120, lineHeight: 0.6, color: AZURE, fontFamily: 'Georgia, serif', fontWeight: 900, opacity: 0.1, marginBottom: 24, display: 'block', textAlign: 'center' }}>"</div>
          <blockquote style={{ fontSize: 'clamp(18px,2.4vw,26px)', fontWeight: 700, color: '#09090b', lineHeight: 1.65, margin: '0 0 40px', fontStyle: 'normal', textAlign: 'center' }}>
            Je suis seul juriste pour une ETI de 280 personnes. 600 contrats par an à analyser. Mes journées étaient absorbées par la pré-analyse. On a déployé l'agent IA en 5 semaines. Aujourd'hui, je reçois une synthèse pré-analysée pour chaque contrat. Je valide en 30 minutes ce qui me prenait 3 heures. J'ai récupéré <span style={{ color: AZURE }}>4 jours par mois</span> pour ce que mon poste devrait vraiment faire. Et la confidentialité est totale : Mistral hébergé en France.
          </blockquote>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: `${AZURE}15`, border: `1.5px solid ${AZURE}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="9" r="4.5" stroke={AZURE} strokeWidth="1.5"/>
                <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" stroke={AZURE} strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 15, fontWeight: 800, color: '#09090b' }}>Directeur juridique, ETI agroalimentaire</div>
              <div style={{ fontSize: 13, color: '#8a8a95', marginTop: 2 }}>280 collaborateurs · 600 contrats/an · 6 mois après mise en production</div>
            </div>
            <div style={{ padding: '6px 16px', borderRadius: 9999, background: `${AZURE}10`, border: `1px solid ${AZURE}30`, fontSize: 13, fontWeight: 800, color: AZURE }}>4 j libérés/mois</div>
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
      { bold: 'Le mode pré-analyse à décharge posé dès le cadrage initial.', text: ' Le juriste signe systématiquement (responsabilité humaine préservée), l\'agent prépare uniquement. Cette discipline a levé toute objection déontologique et sécurisé le déploiement face aux audits internes.' },
      { bold: 'La souveraineté absolue France (Mistral OVH + SharePoint Azure France) posée comme critère non négociable au RFP.', text: ' Plusieurs concurrents ont été éliminés à ce stade. La direction est sereine pour les 5 prochaines années d\'évolution réglementaire (IA Act, CSRD, RGPD).' },
    ],
  },
  {
    num: '02', Icon: IconWrench, tag: 'Ajustements', title: "Ce qu'on ajusterait", color: AMBER,
    items: [
      { bold: 'L\'indexation de la bibliothèque historique a pris 2 jours de plus que prévu.', text: ' Qualité variable des PDF, contrats en Word très anciens. Sur les futurs déploiements juridiques d\'ETI, nous prévoyons désormais 1 semaine entière pour cette étape.' },
      { bold: 'Le traitement des avenants n\'avait pas été cadré spécifiquement.', text: ' Ils arrivaient sans pré-analyse spécifique les 2 premiers mois. Ajusté en mois 3 avec un sous-process dédié. À anticiper systématiquement dès le cadrage initial.' },
    ],
  },
  {
    num: '03', Icon: IconWarning, tag: 'Piège fréquent', title: 'Le piège à éviter', color: RED,
    items: [
      { bold: 'Ne jamais laisser l\'agent signer ou donner un conseil juridique opposable.', text: ' L\'agent est strictement en mode pré-analyse : il prépare, le juriste décide. Cette règle est inscrite techniquement (pas d\'accès en écriture aux outils de signature) et organisationnellement (workflow de validation humaine obligatoire). Toute tentative de court-circuit expose à des contentieux déontologiques. Nous le documentons contractuellement.' },
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
        <div className="cc8-lessons-grid">
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
      <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 12 }}>Audit juridique</div>
      {['600 contrats/an cartographiés', 'Stack 100 % France validée', '12 clauses sensibles définies', 'Devis ferme 5 jours'].map((t, i) => (
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
      <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 12 }}>Roadmap analyse</div>
      {[{ l: 'Indexation 1 500 contrats historiques', w: 90 }, { l: 'Référentiel 12 clauses sensibles', w: 80 }, { l: 'OCR + Mistral OVH France', w: 60 }, { l: 'POC 30 contrats (97,3 %)', w: 40 }].map((r, i) => (
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
      <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 14 }}>Stack 100 % France</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        {[{ n: 'Mistral OVH Bordeaux', c: AZURE }, { n: 'SharePoint Azure FR', c: '#0078d4' }, { n: 'Mindee OCR France', c: '#7c3aed' }, { n: 'DocuSign (signature)', c: '#059669' }, { n: 'Base vectorielle', c: AZURE }, { n: 'DPO archivage', c: '#3f3f46' }].map((t, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '7px 10px', borderRadius: 8, border: '1px solid #f0f0f0', background: '#fafafa', animation: active ? `slideIn .4s ${i * .1}s ease both` : 'none' }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: t.c }} />
            <span style={{ fontSize: 11, fontWeight: 700, color: '#52525b' }}>{t.n}</span>
            <span style={{ marginLeft: 'auto', fontSize: 9, color: '#22c55e', fontWeight: 800 }}>🇫🇷</span>
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <div style={{ background: '#fff', borderRadius: 12, padding: 16, boxShadow: '0 4px 24px rgba(0,0,0,.08)', border: '1px solid #e4e4e7', animation: active ? 'floatCard 4s 1.5s ease-in-out infinite' : 'none' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <span style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em' }}>Résultats 6 mois</span>
        <span style={{ padding: '2px 8px', borderRadius: 9999, background: '#22c55e15', border: '1px solid #22c55e30', fontSize: 10, fontWeight: 800, color: '#22c55e' }}>Actif</span>
      </div>
      {[{ t: 'Contrats analysés / mois', v: '50+ (100 %)' }, { t: 'Temps / contrat', v: '30 min (vs 3h)' }, { t: 'Jours libérés stratégie', v: '4 j / mois' }, { t: 'Fuite données FR', v: '0' }].map((r, i) => (
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
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 500, margin: '0 auto' }}>La même méthode appliquée ici en 5 semaines. Vérifiable sur ce cas concret.</p>
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
        <H2 style={{ marginBottom: 12 }}>Vous avez une direction juridique d'ETI saturée par les contrats ou un cabinet d'avocats sur dossiers répétitifs ?</H2>
        <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 36 }}>
          Trois questions pour évaluer si ce cas est transposable au vôtre.
        </p>
        <div style={{ borderRadius: 20, background: '#09090b', border: '1px solid #1e1e1e', overflow: 'hidden', marginBottom: 28 }}>
          <div style={{ padding: '14px 24px', borderBottom: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: AZURE }} />
            <p style={{ fontSize: 12, fontWeight: 800, color: '#8a8a95', textTransform: 'uppercase', letterSpacing: '.12em', margin: 0 }}>3 critères de transposabilité</p>
          </div>
          {[
            { n: '01', text: 'Vous traitez plus de 30 contrats par mois dont la majorité ont des structures comparables (fournisseurs, clients, prestataires).' },
            { n: '02', text: 'La souveraineté France est un critère non négociable (secteur régulé, secret professionnel, données clients sensibles).' },
            { n: '03', text: 'Votre juriste passe plus de 60 % de son temps en pré-analyse au détriment du conseil stratégique.' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 16, padding: '18px 24px', borderBottom: i < 2 ? '1px solid #1a1a1a' : 'none' }}>
              <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: 8, background: `${AZURE}18`, border: `1px solid ${AZURE}35`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 10, fontWeight: 900, color: AZURE }}>{item.n}</span>
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
          <a href="/agent-ia/juridique/" style={{ padding: '14px 28px', borderRadius: 9999, background: '#09090b', color: '#fff', textDecoration: 'none', fontSize: 15, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'transform .15s' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.03)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)'; }}>
            Découvrir Agent IA pour le juridique →
          </a>
          <a href="/contact" style={{ padding: '14px 28px', borderRadius: 9999, border: `1.5px solid ${AZURE}40`, color: AZURE, textDecoration: 'none', fontSize: 15, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, background: `${AZURE}08`, transition: 'border-color .15s,background .15s' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = `${AZURE}80`; (e.currentTarget as HTMLAnchorElement).style.background = `${AZURE}14`; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = `${AZURE}40`; (e.currentTarget as HTMLAnchorElement).style.background = `${AZURE}08`; }}>
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
              { href: '/cas-clients/cabinet-avocats-agent-ia-telephonique/', label: 'Cabinet avocats Lyon' },
              { href: '/cas-clients/distributeur-b2b-agent-ia-ops/', label: 'Distributeur B2B ops' },
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

  .cc8-kpi-bento { display:grid; grid-template-columns:1fr 1fr 1fr; grid-template-rows:auto auto auto; gap:14px; }
  .cc8-kpi-hero { grid-column:1/2; grid-row:1/3; }
  .cc8-tl-items { display:grid; grid-template-columns:repeat(2,1fr); gap:6px 20px; }
  .cc8-tl-week-inline { display:inline-flex; }
  .cc8-lessons-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; align-items:start; }
  .cc8-arch-flow-mobile { display:none; }
  .cc8-clauses-grid { grid-template-columns:repeat(4,1fr); }
  .cc8-arch-title-short { display:none; }
  .cc8-arch-title-full { display:inline; }

  @media (max-width:860px) {
    .cc8-hero-grid { grid-template-columns:1fr !important; }
    .cc8-stat-col { display:none !important; }
    .cc8-avant-grid { grid-template-columns:1fr !important; }
    .cc8-kpi-bento { grid-template-columns:1fr 1fr !important; grid-template-rows:auto !important; }
    .cc8-kpi-hero { grid-column:1/-1 !important; grid-row:auto !important; }
    .cc8-lessons-grid { grid-template-columns:1fr !important; }
    .v2-grid4 { grid-template-columns:repeat(2,1fr) !important; }
    .cc8-arch-flow-desktop { display:none !important; }
    .cc8-arch-flow-mobile { display:flex; flex-direction:column; gap:0; }
    .cc8-clauses-grid { grid-template-columns:repeat(2,1fr) !important; }
    .cc8-tl-items { grid-template-columns:1fr !important; }
    .cc8-tl-week-inline { display:none !important; }
    .cc8-tl-row > div:first-child { width:68px !important; }
    .cc8-arch-card { padding:16px 14px !important; }
    .cc8-arch-title-full { display:none !important; }
    .cc8-arch-title-short { display:inline !important; }
  }
  @media (max-width:680px) {
    .cc8-tl-row > div:first-child { width:52px !important; }
    .cc8-clauses-grid { grid-template-columns:1fr 1fr !important; }
  }
  @media (max-width:500px) {
    .cc8-kpi-bento { grid-template-columns:1fr !important; }
    .cc8-kpi-hero { grid-column:1/-1 !important; }
    .v2-grid4 { grid-template-columns:1fr !important; }
    .cc8-clauses-grid { grid-template-columns:1fr 1fr !important; }
  }
`;

export default function CasClientEtiAgroalimentaireJuridiquePageClient() {
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
