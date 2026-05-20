'use client';

import React, { useState, useEffect, useRef } from 'react';
import { steps } from '@/lib/data';

const AC    = '#2563eb';
const TEAL  = '#0d9488';
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
      <div aria-hidden="true" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 320, height: 220, background: `radial-gradient(ellipse,${TEAL}18 0%,transparent 65%)`, filter: 'blur(40px)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', zIndex: 1, opacity: count ? 1 : 0, transform: count ? 'none' : 'translateY(16px)', transition: 'all .6s ease' }}>
        <div style={{ fontSize: 'clamp(52px,8vw,96px)', fontWeight: 900, color: TEAL, letterSpacing: '-.06em', lineHeight: 0.9, marginBottom: 16 }}>-18 %</div>
        <div style={{ fontSize: 16, fontWeight: 700, color: '#a1a1aa', lineHeight: 1.65, maxWidth: 260 }}>coût moyen sur catégories négociées</div>
        <div style={{ marginTop: 12, fontSize: 14, color: '#3f3f46', fontWeight: 500 }}>mesuré sur 8 mois · 22 M€ achats/an</div>
      </div>
      <div style={{ position: 'absolute', bottom: 16, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 20, zIndex: 1 }}>
        {[{ v: '×4', l: 'RFQ / acheteur / mois' }, { v: '4 h', l: 'comparatif (vs 3 j)' }, { v: '0', l: 'contrat expiré non alerté' }].map((s, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 15, fontWeight: 900, color: TEAL }}>{s.v}</div>
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
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: 500, height: 500, borderRadius: '50%', background: `radial-gradient(circle,${TEAL}0a 0%,transparent 65%)`, filter: 'blur(80px)', animation: 'gradDrift1 14s ease-in-out infinite' }} />
      </div>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.025) 1px,transparent 1px)', backgroundSize: '48px 48px', maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%,black,transparent)', zIndex: 0 }} aria-hidden="true" />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1160, margin: '0 auto' }}>
        <div className="cc9-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: '#a1a1aa', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', fontWeight: 500 }}>
              <a href="/" style={{ color: '#8a8a95', textDecoration: 'none' }}>Accueil</a><span>›</span>
              <a href="/cas-clients/" style={{ color: '#8a8a95', textDecoration: 'none' }}>Cas clients</a><span>›</span>
              <span style={{ color: '#09090b' }}>ETI industrielle achats</span>
            </nav>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 20 }}>
              {['Achats & sourcing', 'ETI industrielle', '180 collab.', 'ERP SAP', 'cas anonymisé · 2025-2026'].map((t) => (
                <span key={t} style={{ padding: '3px 10px', borderRadius: 9999, background: '#f4f4f5', fontSize: 11, fontWeight: 700, color: '#8a8a95' }}>{t}</span>
              ))}
            </div>
            <h1 style={{ fontSize: 'clamp(26px,3.8vw,48px)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-.03em', color: '#09090b', marginBottom: 20 }}>
              -18 % sur les achats négociés et 3 acheteurs qui traitent 4× plus de devis grâce à un agent IA achats.
            </h1>
            <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 28, maxWidth: 520 }}>
              180 collaborateurs, 22 M€ d'achats annuels, 350 fournisseurs actifs, 3 acheteurs saturés par les comparatifs manuels. Un agent IA achats déployé en 7 semaines. Voici comment l'équipe est passée du tableur à la fiche de négociation automatique.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="/contact" style={{ padding: '14px 28px', borderRadius: 9999, background: '#09090b', color: '#fff', textDecoration: 'none', fontSize: 15, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'transform .15s,box-shadow .15s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.03)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 6px 24px rgba(0,0,0,.25)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'; }}>
                Discuter de votre projet →
              </a>
              <a href="#resultats" style={{ padding: '14px 28px', borderRadius: 9999, border: '1.5px solid #e4e4e7', color: '#09090b', textDecoration: 'none', fontSize: 15, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, background: '#fff', transition: 'border-color .15s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = TEAL; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#e4e4e7'; }}>
                Voir les résultats ↓
              </a>
            </div>
          </div>
          <div className="cc9-stat-col"><HeroStat /></div>
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
        <H2 style={{ marginBottom: 28 }}>L'ETI : 180 personnes, 22 M€ d'achats, 350 fournisseurs, 3 acheteurs</H2>
        <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.8, marginBottom: 24 }}>
          L'ETI industrielle (nom anonymisé) fabrique des équipements de manutention et de levage pour le marché B2B (industrie lourde, logistique, BTP). <strong style={{ color: '#09090b' }}>180 collaborateurs</strong> : 90 production/atelier, 30 bureau d'études, 25 commercial, 15 logistique, 12 finance/admin, 8 IT/méthodes. Chiffre d'affaires : 48 M€ HT. Part achat externe : <strong style={{ color: '#09090b' }}>22 M€ annuels</strong> (46 % du CA), répartis sur <strong style={{ color: '#09090b' }}>350 fournisseurs actifs</strong> (matières premières, composants standards, sous-traitants spécialisés).
        </p>
        <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.8, marginBottom: 32 }}>
          L'équipe achats se compose de <strong style={{ color: '#09090b' }}>3 acheteurs opérationnels</strong> et d'un responsable achats. Volume mensuel : ~80 appels d'offres (RFQ), chacun nécessitant un comparatif multi-fournisseurs. Avant le projet, chaque comparatif prenait <strong style={{ color: '#09090b' }}>2 à 3 jours</strong> (collecte manuelle, retraitement Excel, relances fournisseurs) — soit 60 % du temps de l'équipe absorbé par de l'administratif pur.
        </p>
        <div style={{ padding: '28px 32px', borderRadius: 20, background: '#fafafa', border: '1px solid #e4e4e7', borderLeft: `4px solid ${RED}` }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: RED, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 14 }}>L'enjeu caché : 22 M€ sans benchmark systématique</div>
          <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75 }}>
            Sans outil de benchmark automatique, les négociations reposaient sur la mémoire du responsable achats senior (parti en retraite anticipée 18 mois plus tôt). Les deux acheteurs juniors recrutés depuis manquaient de contexte historique sur les prix et les conditions fournisseurs. Résultat estimé en pré-projet : <strong style={{ color: '#09090b' }}>3 à 5 % de marge laissée sur la table</strong> sur les catégories commodités (acier, visserie, composants standards).
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
        <H2 style={{ marginBottom: 40 }}>La situation avant : 60 % du temps achat en traitement administratif</H2>
        <div className="cc9-avant-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 36 }}>
          <div style={{ borderRadius: 18, background: '#fff', border: `1px solid ${RED}22`, overflow: 'hidden', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(-16px)', transition: 'all .6s ease' }}>
            <div style={{ padding: '16px 22px', background: `${RED}08`, borderBottom: `1px solid ${RED}15`, display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: RED }} />
              <span style={{ fontSize: 13, fontWeight: 800, color: RED, textTransform: 'uppercase', letterSpacing: '.08em' }}>Côté acheteurs</span>
            </div>
            <div style={{ padding: '8px 0' }}>
              {[
                '80 RFQ / mois dans 500+ formats (PDF, Excel propriétaire, mail texte)',
                'Comparatif multi-fournisseurs : 2-3 jours par dossier sous Excel',
                'Aucun benchmark prix marché au moment de la négociation',
                '12 contrats fournisseurs expirés ou renouvelés hors délai sur 12 mois',
                'Mémoire fournisseurs perdue avec le départ du responsable senior',
                '2 acheteurs juniors démissionnaires en 18 mois (poste perçu comme ingrat)',
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
                'Marge grignotée : négociations sous-préparées faute de benchmark',
                '4e acheteur évalué à 40-45 k€ chargés, ROI difficile à justifier',
                'Risque fournisseur non tracé (aucun scoring automatique)',
                'Audit fournisseurs annuel préparé manuellement en 3 semaines',
                'Direction peu informée : pas de reporting achats en temps réel',
                'Dépendance à la mémoire d\'une seule personne (vulnérabilité organisationnelle)',
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
              <path d="M7 1.5L13 4v4c0 3-2.5 5-6 5.5C1.5 13 -1 11 1 8l6-6.5z" stroke={TEAL} strokeWidth="1.2" strokeLinejoin="round" fill="none"/>
              <path d="M4 7l2 2.5 4-4" stroke={TEAL} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p style={{ fontSize: 12, fontWeight: 800, color: '#52525b', textTransform: 'uppercase', letterSpacing: '.12em', margin: 0 }}>Le déclencheur : audit achats pré-projet</p>
          </div>
          <div style={{ padding: '24px 28px' }}>
            <p style={{ fontSize: 16, color: '#a1a1aa', lineHeight: 1.75, margin: '0 0 14px' }}>
              Un cabinet de conseil mandaté pour un audit de performance achats a évalué le surcoût lié à l'absence de benchmark systématique à <strong style={{ color: '#e4e4e7' }}>3-5 % du volume d'achats négociables</strong> (soit 400 à 700 k€/an sur les catégories commodités). Ce chiffre, présenté au COMEX, a rendu le projet agent IA immédiatement prioritaire — avec un objectif de ROI positif dès le 3ᵉ mois.
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['Commodités acier + visserie', 'Composants standards', 'Prestations récurrentes', 'Sous-traitants spécialisés'].map((badge) => (
                <span key={badge} style={{ padding: '4px 10px', borderRadius: 9999, background: `${TEAL}15`, border: `1px solid ${TEAL}30`, fontSize: 11, fontWeight: 700, color: TEAL }}>{badge}</span>
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
    week: 'Sem. 0', title: 'Cadrage achats', color: AC,
    items: [
      'Audit du panel fournisseurs : 350 actifs, classification en 12 catégories achats',
      'Inventaire des formats devis : 500+ formats identifiés (PDF, Excel propriétaire, mail texte)',
      'Définition du scoring fournisseur : 5 critères pondérés avec le responsable achats',
      'Connexion ERP SAP planifiée, devis ferme sous 5 jours',
    ],
  },
  {
    week: 'Sem. 1-3', title: 'Connexions & normalisation', color: TEAL,
    items: [
      'Connexion ERP SAP : extraction historique 3 ans de commandes + conditions fournisseurs',
      'Normalisation des 500+ formats devis → structure unifiée (prix, délai, conditions, incoterms)',
      'Mapping des 12 catégories achats avec les familles de pièces ERP',
      'Bibliothèque de référence prix : benchmark marché sur 18 mois d\'historique indexé',
    ],
  },
  {
    week: 'Sem. 3-5', title: 'Build & POC', color: TEAL,
    items: [
      'Développement agent avec pipeline extraction → scoring → génération fiche négociation',
      'POC sur 30 comparatifs historiques déjà réalisés par l\'équipe achats',
      'Concordance scoring agent vs décision acheteur : 94,1 %',
      'Ajout alertes contrats (J-60 / J-30 / J-15) via connecteur SharePoint + Outlook',
    ],
  },
  {
    week: 'Sem. 6-7', title: 'Pilote puis généralisation', color: GREEN,
    items: [
      'Pilote sur 40 % du panel fournisseurs (commodités + composants standards)',
      'Formation 3 acheteurs + responsable : demi-journée, prise en main confirmée',
      'Généralisation à 100 % du panel, reporting hebdo automatique direction achats',
      'Documentation SOPs livrée, conformité SAP validée par l\'IT interne',
    ],
  },
];

function ArchitectureSVG() {
  return (
    <div className="cc9-arch-card" style={{ borderRadius: 16, background: '#09090b', border: '1px solid #1a1a1a', padding: '24px 20px', overflow: 'hidden' }}>
      <div className="cc9-arch-head" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, flexWrap: 'wrap' }}>
        <div style={{ fontSize: 12, fontWeight: 800, color: '#3f3f46', textTransform: 'uppercase', letterSpacing: '.1em', flex: 1, minWidth: 0 }}>
          <span className="cc9-arch-title-full">Architecture déployée · Agent IA achats Althoce</span>
          <span className="cc9-arch-title-short">Pipeline · Agent IA achats</span>
        </div>
        <span style={{ flexShrink: 0, padding: '3px 10px', borderRadius: 9999, background: `${TEAL}15`, border: `1px solid ${TEAL}30`, fontSize: 10, fontWeight: 800, color: TEAL }}>7 semaines</span>
      </div>

      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: '#52525b', marginBottom: 10 }}>Pipeline extraction → scoring → décision</div>
        <div className="cc9-arch-flow-desktop" style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
          {[
            { label: 'Devis entrants (email / SharePoint / EDI)', color: '#3f3f46' },
            { label: 'Extraction IA (PDF + Excel → données structurées)', color: AMBER },
            { label: 'Agent IA Althoce (normalisation + scoring)', color: TEAL },
            { label: 'Grille comparative + fiche négociation', color: TEAL },
            { label: 'Validation acheteur (20 min)', color: GREEN },
            { label: 'Enregistrement SAP + archivage auto', color: GREEN },
          ].map((node, i, arr) => (
            <React.Fragment key={i}>
              <div style={{ padding: '6px 12px', borderRadius: 8, background: '#111', border: `1px solid ${node.color}30`, fontSize: 10, fontWeight: 700, color: node.color, whiteSpace: 'nowrap' }}>{node.label}</div>
              {i < arr.length - 1 && <span style={{ color: '#2a2a2a', fontSize: 15, fontWeight: 900 }}>→</span>}
            </React.Fragment>
          ))}
        </div>
        <div className="cc9-arch-flow-mobile">
          {[
            { label: 'Devis entrants (email / SharePoint / EDI)', color: '#3f3f46' },
            { label: 'Extraction IA (PDF + Excel → structuré)', color: AMBER },
            { label: 'Agent IA Althoce (scoring 5 critères)', color: TEAL },
            { label: 'Grille + fiche négociation auto', color: TEAL },
            { label: 'Validation acheteur (20 min)', color: GREEN },
            { label: 'Enregistrement SAP + archivage', color: GREEN },
          ].map((node, i, arr) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
              <div style={{ padding: '6px 10px', borderRadius: 8, background: '#111', border: `1px solid ${node.color}30`, fontSize: 12, fontWeight: 700, color: node.color, width: '100%', boxSizing: 'border-box' }}>{node.label}</div>
              {i < arr.length - 1 && <div style={{ width: 2, height: 8, background: '#2a2a2a', marginLeft: 14 }} />}
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: '#52525b', marginBottom: 10 }}>Scoring fournisseur · 5 critères pondérés</div>
        <div className="cc9-scoring-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 6 }}>
          {[
            { label: 'Prix & conditions', pct: '35 %' },
            { label: 'Délai livraison', pct: '25 %' },
            { label: 'Fiabilité historique', pct: '20 %' },
            { label: 'Conditions paiement', pct: '12 %' },
            { label: 'Risque fournisseur', pct: '8 %' },
          ].map((c, i) => (
            <div key={i} style={{ padding: '7px 8px', borderRadius: 6, background: '#111', border: `1px solid ${TEAL}18`, textAlign: 'center' }}>
              <div style={{ fontSize: 14, fontWeight: 900, color: TEAL, marginBottom: 2 }}>{c.pct}</div>
              <div style={{ fontSize: 9, fontWeight: 700, color: '#8a8a95', lineHeight: 1.3 }}>{c.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: '10px 14px', borderRadius: 8, background: '#0a0a0a', border: `1px solid ${TEAL}20`, display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: TEAL, flexShrink: 0 }} />
        <span style={{ fontSize: 12, color: '#3f3f46', fontWeight: 600 }}>Alertes automatiques : contrats J-60 / J-30 / J-15 · Fiche négociation : prix cible + BATNA + historique fournisseur · Validation humaine obligatoire avant tout bon de commande.</span>
      </div>
    </div>
  );
}

function LaSolution() {
  const [ref, visible] = useInView(0.05);
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        <H2 style={{ marginBottom: 12 }}>Agent IA achats déployé en 7 semaines : de la RFQ à la fiche négociation automatique</H2>
        <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.75, marginBottom: 48, maxWidth: 700 }}>
          L'agent IA achats Althoce prend en charge l'intégralité du traitement amont : extraction des devis quel que soit leur format, normalisation, scoring multi-critères, génération de la fiche de négociation et alertes contrats. Les acheteurs reçoivent un dossier prêt à négocier — ils décident et signent. Le temps de traitement passe de 3 jours à 20 minutes.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginBottom: 48 }}>
          {timeline.map((step, i) => (
            <div key={i} className="cc9-tl-row" style={{ display: 'flex', gap: 0, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(-10px)', transition: `all .5s ${i * .08}s ease`, minWidth: 0, overflow: 'hidden' }}>
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
                    <span className="cc9-tl-week-inline" style={{ padding: '2px 8px', borderRadius: 9999, background: `${step.color}10`, border: `1px solid ${step.color}25`, fontSize: 10, fontWeight: 800, color: step.color, flexShrink: 0 }}>{step.week}</span>
                  </div>
                  <div className="cc9-tl-items">
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
  { delta: '-18 %', label: 'coût moyen sur catégories négociées', avant: 'Pas de benchmark systématique', apres: 'Fiche négociation + historique prix auto', color: AC, size: 'hero' },
  { delta: '×4', label: 'volume RFQ traitées par acheteur / mois', avant: '20 RFQ/mois max par acheteur', apres: '80 RFQ/mois sans embauche', color: AC, size: 'normal' },
  { delta: '4 h', label: 'pour un comparatif multi-fournisseurs', avant: '2-3 jours sous Excel manuel', apres: 'Dossier prêt à négocier en 20 min', color: AC, size: 'normal' },
  { delta: '94,1 %', label: 'concordance agent vs acheteur (POC)', avant: 'Aucune validation objective possible', apres: 'Validé sur 30 comparatifs historiques', color: AC, size: 'normal' },
  { delta: '0', label: 'contrat expiré non alerté (vs 12 l\'an passé)', avant: '12 situations critiques en 12 mois', apres: 'Alertes J-60 / J-30 / J-15 auto', color: AC, size: 'small' },
  { delta: '340 k€', label: 'd\'économies achats réalisées en 8 mois', avant: 'ROI difficile à projeter avant déploiement', apres: 'Positif dès le 3ᵉ mois · poste non regarni', color: AC, size: 'small' },
];

function KPICard({ k, i, visible }: { k: typeof kpiCards[0]; i: number; visible: boolean }) {
  const isHero = k.size === 'hero';
  const isSmall = k.size === 'small';
  return (
    <div className={isHero ? 'cc9-kpi-card cc9-kpi-hero' : 'cc9-kpi-card'}
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
      <div aria-hidden="true" style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 2, background: `linear-gradient(to right,transparent,${TEAL},transparent)` }} />
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: '#3f3f46', textTransform: 'uppercase', letterSpacing: '.14em', marginBottom: 14 }}>Mesure 8 mois après mise en production</div>
          <H2 style={{ color: '#fff' }}>Ce qui a changé concrètement</H2>
        </div>
        <div className="cc9-kpi-bento">
          {kpiCards.map((k, i) => <KPICard key={i} k={k} i={i} visible={visible} />)}
        </div>
        <div style={{ marginTop: 32, padding: '24px 28px', borderRadius: 18, background: `${AC}0c`, border: `1px solid ${AC}22` }}>
          <p style={{ fontSize: 16, color: '#a1a1aa', lineHeight: 1.75, margin: 0 }}>
            L'ETI a réalisé <strong style={{ color: '#f0f0f0' }}>340 k€ d'économies achats</strong> sur 8 mois sans recruter de 4ᵉ acheteur (38 k€ chargés économisés annuellement). Le responsable achats consacre désormais 70 % de son temps à la stratégie fournisseurs, à la renégociation des grands comptes et à la préparation des audits — contre 25 % avant le déploiement. Le reporting hebdo automatisé vers la direction a transformé la perception du service achats en levier de compétitivité plutôt qu'en centre de coûts.
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
        <div style={{ fontSize: 13, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.14em', marginBottom: 32, textAlign: 'center' }}>Le mot du responsable achats</div>
        <div style={{ position: 'relative', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(28px)', transition: 'all .7s ease' }}>
          <div aria-hidden="true" style={{ fontSize: 120, lineHeight: 0.6, color: TEAL, fontFamily: 'Georgia, serif', fontWeight: 900, opacity: 0.1, marginBottom: 24, display: 'block', textAlign: 'center' }}>"</div>
          <blockquote style={{ fontSize: 'clamp(18px,2.4vw,26px)', fontWeight: 700, color: '#09090b', lineHeight: 1.65, margin: '0 0 40px', fontStyle: 'normal', textAlign: 'center' }}>
            Avant, mes acheteurs passaient 60 % de leur temps à retraiter des Excel. Un comparatif multi-fournisseurs, c'était 3 jours de travail — et encore, sans benchmark ni fiche négociation. Aujourd'hui, l'agent leur livre un dossier complet en 20 minutes. Ils se concentrent sur la négociation, sur la relation fournisseur stratégique. Et on a fait <span style={{ color: TEAL }}>-18 % sur nos catégories commodités</span> en 8 mois. C'est le projet qui a le mieux transformé l'efficacité de mon équipe.
          </blockquote>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: `${TEAL}15`, border: `1.5px solid ${TEAL}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="9" r="4.5" stroke={TEAL} strokeWidth="1.5"/>
                <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" stroke={TEAL} strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 15, fontWeight: 800, color: '#09090b' }}>Responsable achats, ETI industrielle</div>
              <div style={{ fontSize: 13, color: '#8a8a95', marginTop: 2 }}>180 collaborateurs · 22 M€ achats · 8 mois après déploiement</div>
            </div>
            <div style={{ padding: '6px 16px', borderRadius: 9999, background: `${TEAL}10`, border: `1px solid ${TEAL}30`, fontSize: 13, fontWeight: 800, color: TEAL }}>340 k€ économisés</div>
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
      { bold: 'Commencer par les commodités à fort volume et structure de devis comparable.', text: ' Acier, visserie, composants standards : ROI visible dès le mois 2 sur ces familles. La direction a vu des résultats concrets rapidement, ce qui a sécurisé le soutien pour la généralisation aux catégories plus complexes.' },
      { bold: 'La fiche négociation automatique a immédiatement transformé la posture de l\'équipe.', text: ' Avec le prix cible, le BATNA et l\'historique fournisseur en main, les acheteurs entrent en négociation avec une position documentée. La confiance de l\'équipe dans le projet a été clé pour l\'adoption.' },
    ],
  },
  {
    num: '02', Icon: IconWrench, tag: 'Ajustements', title: "Ce qu'on ajusterait", color: AMBER,
    items: [
      { bold: 'La normalisation des 500+ formats de devis a pris 2 semaines de plus que prévu.', text: ' Quinze fournisseurs avaient des Excel 100 % propriétaires sans structure fixe. Sur les futurs déploiements achats en industrie, nous planifions désormais une "semaine formats" dédiée avec un acheteur senior en soutien permanent.' },
      { bold: 'Les sous-traitants spécialisés ont résisté à la standardisation.', text: ' Leurs devis sont narratifs (texte libre, pas de tableaux). Gérés en phase 2 avec un pipeline OCR + extraction sémantique — à anticiper dès le cadrage initial sur les ETI avec forte part de sous-traitance spécifique.' },
    ],
  },
  {
    num: '03', Icon: IconWarning, tag: 'Piège fréquent', title: 'Le piège à éviter absolument', color: RED,
    items: [
      { bold: 'Ne jamais automatiser le passage de commande, même sur les achats récurrents.', text: ' L\'agent produit la fiche de décision — l\'acheteur signe le bon de commande. Toute automatisation du déclenchement de commande crée un risque contractuel (conditions générales, engagements fermes) et détruit la confiance de l\'équipe. Nous le documentons contractuellement et techniquement (aucun accès en écriture ERP côté agent).' },
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
        <div className="cc9-lessons-grid">
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
      <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 12 }}>Audit achats</div>
      {['350 fournisseurs cartographiés', 'Panel 12 catégories défini', 'Scoring 5 critères validé', 'Devis ferme sous 5 jours'].map((t, i) => (
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
      <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 12 }}>Roadmap déploiement</div>
      {[{ l: 'Connexion ERP SAP', w: 90 }, { l: 'Normalisation 500+ formats', w: 80 }, { l: 'Build agent scoring', w: 60 }, { l: 'POC 30 comparatifs (94,1 %)', w: 40 }].map((r, i) => (
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
      <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 14 }}>Stack déployée</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        {[{ n: 'ERP SAP (lecture/écriture)', c: TEAL }, { n: 'Outlook API (devis mails)', c: '#0078d4' }, { n: 'SharePoint (archivage)', c: '#7c3aed' }, { n: 'OCR structuré PDF/Excel', c: AMBER }, { n: 'Agent IA Althoce', c: TEAL }, { n: 'Alertes J-60/30/15', c: GREEN }].map((t, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '7px 10px', borderRadius: 8, border: '1px solid #f0f0f0', background: '#fafafa', animation: active ? `slideIn .4s ${i * .1}s ease both` : 'none' }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: t.c }} />
            <span style={{ fontSize: 11, fontWeight: 700, color: '#52525b' }}>{t.n}</span>
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <div style={{ background: '#fff', borderRadius: 12, padding: 16, boxShadow: '0 4px 24px rgba(0,0,0,.08)', border: '1px solid #e4e4e7', animation: active ? 'floatCard 4s 1.5s ease-in-out infinite' : 'none' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <span style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em' }}>Résultats 8 mois</span>
        <span style={{ padding: '2px 8px', borderRadius: 9999, background: '#22c55e15', border: '1px solid #22c55e30', fontSize: 10, fontWeight: 800, color: '#22c55e' }}>Actif</span>
      </div>
      {[{ t: 'Économies achats', v: '340 k€' }, { t: 'Coût catégories négociées', v: '-18 %' }, { t: 'RFQ / acheteur / mois', v: '×4' }, { t: 'Temps comparatif', v: '4h (vs 3j)' }].map((r, i) => (
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
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 500, margin: '0 auto' }}>La même méthode appliquée ici en 7 semaines. Vérifiable sur ce cas concret.</p>
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
        <H2 style={{ marginBottom: 12 }}>Vous avez une équipe achats de 2 à 6 personnes qui passe plus de temps sur les tableaux que sur les négociations ?</H2>
        <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 36 }}>
          Trois questions pour évaluer si ce cas est transposable au vôtre.
        </p>
        <div style={{ borderRadius: 20, background: '#09090b', border: '1px solid #1e1e1e', overflow: 'hidden', marginBottom: 28 }}>
          <div style={{ padding: '14px 24px', borderBottom: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: TEAL }} />
            <p style={{ fontSize: 12, fontWeight: 800, color: '#8a8a95', textTransform: 'uppercase', letterSpacing: '.12em', margin: 0 }}>3 critères de transposabilité</p>
          </div>
          {[
            { n: '01', text: 'Vous traitez plus de 30 RFQ par mois sur des catégories comparables (commodités, composants standards, prestations récurrentes).' },
            { n: '02', text: 'Vos acheteurs passent plus de 40 % de leur temps à retraiter des devis dans des formats différents plutôt qu\'à négocier.' },
            { n: '03', text: 'Vous avez un ERP (SAP, Sage, Dynamics) avec 18-36 mois d\'historique de commandes exploitable comme référence prix.' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 16, padding: '18px 24px', borderBottom: i < 2 ? '1px solid #1a1a1a' : 'none' }}>
              <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: 8, background: `${TEAL}18`, border: `1px solid ${TEAL}35`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 10, fontWeight: 900, color: TEAL }}>{item.n}</span>
              </div>
              <p style={{ fontSize: 15, color: '#a1a1aa', lineHeight: 1.65, margin: 0 }}>{item.text}</p>
            </div>
          ))}
          <div style={{ padding: '16px 24px', borderTop: '1px solid #1a1a1a', background: '#0a0a0a' }}>
            <p style={{ fontSize: 14, color: '#52525b', lineHeight: 1.65, margin: 0 }}>
              Si vous répondez oui aux 3, la transposition est très probable. Les <strong style={{ color: '#a1a1aa' }}>30 minutes offertes avec un expert</strong> servent à valider les spécificités de votre panel fournisseurs.
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href="/agent-ia/achats/" style={{ padding: '14px 28px', borderRadius: 9999, background: '#09090b', color: '#fff', textDecoration: 'none', fontSize: 15, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'transform .15s' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.03)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)'; }}>
            Découvrir Agent IA pour les achats →
          </a>
          <a href="/contact" style={{ padding: '14px 28px', borderRadius: 9999, border: `1.5px solid ${TEAL}40`, color: TEAL, textDecoration: 'none', fontSize: 15, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, background: `${TEAL}08`, transition: 'border-color .15s,background .15s' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = `${TEAL}80`; (e.currentTarget as HTMLAnchorElement).style.background = `${TEAL}14`; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = `${TEAL}40`; (e.currentTarget as HTMLAnchorElement).style.background = `${TEAL}08`; }}>
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
              { href: '/cas-clients/distributeur-b2b-agent-ia-ops/', label: 'Distributeur B2B ops' },
              { href: '/cas-clients/eti-agroalimentaire-agent-ia-juridique/', label: 'ETI agroalimentaire juridique' },
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

  .cc9-kpi-bento { display:grid; grid-template-columns:1fr 1fr 1fr; grid-template-rows:auto auto auto; gap:14px; }
  .cc9-kpi-hero { grid-column:1/2; grid-row:1/3; }
  .cc9-tl-items { display:grid; grid-template-columns:repeat(2,1fr); gap:6px 20px; }
  .cc9-tl-week-inline { display:inline-flex; }
  .cc9-lessons-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; align-items:start; }
  .cc9-arch-flow-mobile { display:none; }
  .cc9-scoring-grid { grid-template-columns:repeat(5,1fr); }
  .cc9-arch-title-short { display:none; }
  .cc9-arch-title-full { display:inline; }

  @media (max-width:860px) {
    .cc9-hero-grid { grid-template-columns:1fr !important; }
    .cc9-stat-col { display:none !important; }
    .cc9-avant-grid { grid-template-columns:1fr !important; }
    .cc9-kpi-bento { grid-template-columns:1fr 1fr !important; grid-template-rows:auto !important; }
    .cc9-kpi-hero { grid-column:1/-1 !important; grid-row:auto !important; }
    .cc9-lessons-grid { grid-template-columns:1fr !important; }
    .v2-grid4 { grid-template-columns:repeat(2,1fr) !important; }
    .cc9-arch-flow-desktop { display:none !important; }
    .cc9-arch-flow-mobile { display:flex; flex-direction:column; gap:0; }
    .cc9-scoring-grid { grid-template-columns:repeat(3,1fr) !important; }
    .cc9-tl-items { grid-template-columns:1fr !important; }
    .cc9-tl-week-inline { display:none !important; }
    .cc9-tl-row > div:first-child { width:68px !important; }
    .cc9-arch-card { padding:16px 14px !important; }
    .cc9-arch-title-full { display:none !important; }
    .cc9-arch-title-short { display:inline !important; }
  }
  @media (max-width:680px) {
    .cc9-tl-row > div:first-child { width:52px !important; }
    .cc9-scoring-grid { grid-template-columns:repeat(2,1fr) !important; }
  }
  @media (max-width:500px) {
    .cc9-kpi-bento { grid-template-columns:1fr !important; }
    .cc9-kpi-hero { grid-column:1/-1 !important; }
    .v2-grid4 { grid-template-columns:1fr !important; }
    .cc9-scoring-grid { grid-template-columns:repeat(2,1fr) !important; }
  }
`;

export default function CasClientEtiIndustrielleAchatsPageClient() {
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
