'use client';

import React, { useState, useEffect, useRef } from 'react';
import { steps, securityItems } from '@/lib/data';
import { FAQAccordion } from '@/components/ui/data-display/FAQAccordion';

const AC   = '#2563eb';
const WINE = '#9f1239';
const GOLD = '#b45309';
const RED  = '#ef4444';
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
      <div aria-hidden="true" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 320, height: 220, background: `radial-gradient(ellipse,${WINE}14 0%,transparent 65%)`, filter: 'blur(40px)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', zIndex: 1, opacity: count ? 1 : 0, transform: count ? 'none' : 'translateY(16px)', transition: 'all .6s ease' }}>
        <div style={{ fontSize: 'clamp(72px,10vw,120px)', fontWeight: 900, color: WINE, letterSpacing: '-.06em', lineHeight: 0.9, marginBottom: 16 }}>+200 %</div>
        <div style={{ fontSize: 16, fontWeight: 700, color: '#a1a1aa', lineHeight: 1.65, maxWidth: 240 }}>RDV qualifiés en 4 mois sans embaucher</div>
        <div style={{ marginTop: 12, fontSize: 14, color: '#3f3f46', fontWeight: 500 }}>sur 4 marchés export simultanément</div>
      </div>
      <div style={{ position: 'absolute', bottom: 16, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 20, zIndex: 1 }}>
        {[
          { v: '×5', l: 'prospects / semaine' },
          { v: '4 min', l: 'time-to-first-touch' },
          { v: '4', l: 'langues couvertes' },
        ].map((s, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 15, fontWeight: 900, color: WINE }}>{s.v}</div>
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
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: 500, height: 500, borderRadius: '50%', background: `radial-gradient(circle,${WINE}0a 0%,transparent 65%)`, filter: 'blur(80px)', animation: 'gradDrift1 14s ease-in-out infinite' }} />
      </div>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.025) 1px,transparent 1px)', backgroundSize: '48px 48px', maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%,black,transparent)', zIndex: 0 }} aria-hidden="true" />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1160, margin: '0 auto' }}>
        <div className="cc2-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: '#a1a1aa', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', fontWeight: 500 }}>
              <a href="/" style={{ color: '#8a8a95', textDecoration: 'none' }}>Accueil</a><span>›</span>
              <a href="/cas-clients/" style={{ color: '#8a8a95', textDecoration: 'none' }}>Cas clients</a><span>›</span>
              <span style={{ color: '#09090b' }}>Négoce de vins bordelais</span>
            </nav>

            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 20 }}>
              {['Commercial', 'Négoce de vins', 'PME · 28 collab.', 'Bordeaux · 2025-2026', 'Export 65 %'].map((t) => (
                <span key={t} style={{ padding: '3px 10px', borderRadius: 9999, background: '#f4f4f5', fontSize: 11, fontWeight: 700, color: '#8a8a95' }}>{t}</span>
              ))}
            </div>

            <h1 style={{ fontSize: 'clamp(26px,3.8vw,48px)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-.03em', color: '#09090b', marginBottom: 20 }}>
              +200 % de RDV qualifiés en 4 mois pour un négoce de vins bordelais grâce à un agent IA SDR multilingue.
            </h1>

            <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 28, maxWidth: 520 }}>
              28 collaborateurs, 65 % d'export sur 4 marchés clés, un directeur commercial trilingue seul à prospecter. Un agent IA SDR déployé en 6 semaines sur 4 langues. Voici comment le négoce a sorti son directeur de la prospection opérationnelle.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="/contact"
                style={{ padding: '14px 28px', borderRadius: 9999, background: '#09090b', color: '#fff', textDecoration: 'none', fontSize: 15, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'transform .15s,box-shadow .15s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.03)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 6px 24px rgba(0,0,0,.25)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'; }}>
                Discuter de votre projet →
              </a>
              <a href="#resultats"
                style={{ padding: '14px 28px', borderRadius: 9999, border: '1.5px solid #e4e4e7', color: '#09090b', textDecoration: 'none', fontSize: 15, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, background: '#fff', transition: 'border-color .15s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = WINE; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#e4e4e7'; }}>
                Voir les résultats ↓
              </a>
            </div>
          </div>

          <div className="cc2-stat-col">
            <HeroStat />
          </div>
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
        <H2 style={{ marginBottom: 28 }}>Le négoce : 28 personnes, export 65 %, prospection plafonnée</H2>
        <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.8, marginBottom: 24 }}>
          Le négoce de vins bordelais (nom anonymisé) est une maison historique implantée à Bordeaux depuis trois générations. <strong style={{ color: '#09090b' }}>28 collaborateurs</strong> répartis entre commercial export (4), achats et sourcing châteaux (5), logistique (8), back-office (4), marketing et événementiel (3), direction (2 associés), assistance (2). Spécialité : la sélection de petits propriétaires bordelais (Médoc, Saint-Émilion, Pomerol) destinée aux importateurs et cavistes haut de gamme à l'international. <strong style={{ color: '#09090b' }}>Export : 65 % du chiffre d'affaires</strong>, réparti entre Europe (UK, Belgique, Allemagne, Suisse), États-Unis, Chine et Japon.
        </p>
        <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.8, marginBottom: 32 }}>
          La prospection commerciale export reposait à 100 % sur le <strong style={{ color: '#09090b' }}>directeur commercial trilingue</strong> (français, anglais, mandarin). Ses 4 commerciaux géraient le portefeuille existant et le closing des prospects qualifiés. Mais le directeur passait 60 % de son temps en prospection opérationnelle, là où le management et la stratégie nécessitaient plus. La direction avait identifié 2 marchés porteurs (Japon et États-Unis) qu'elle ne pouvait pas adresser faute de bande passante linguistique.
        </p>

        <div style={{ padding: '28px 32px', borderRadius: 20, background: '#fafafa', border: '1px solid #e4e4e7', borderLeft: `4px solid ${RED}` }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: RED, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 14 }}>Le plafond de 2024</div>
          <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 16 }}>
            En 2024, la direction tente de recruter un commercial export japonophone à Bordeaux : <strong style={{ color: '#09090b' }}>12 mois de recherche infructueuse</strong>. Le marché du profil n'existe pas localement. Pendant ce temps, des concurrents adressent déjà le marché japonais. Le négoce identifie un manque à gagner estimé à <strong style={{ color: '#09090b' }}>800 k€ à 1,2 M€ de CA export annuel</strong>. C'est dans ce contexte que la direction nous contacte via recommandation d'un confrère.
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
        <H2 style={{ marginBottom: 40 }}>La situation avant : prospection bouchon sur le directeur commercial</H2>

        <div className="cc2-avant-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 36 }}>
          {/* Côté équipe */}
          <div style={{ borderRadius: 18, background: '#fff', border: `1px solid ${RED}22`, overflow: 'hidden', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(-16px)', transition: 'all .6s ease' }}>
            <div style={{ padding: '16px 22px', background: `${RED}08`, borderBottom: `1px solid ${RED}15`, display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: RED }} />
              <span style={{ fontSize: 13, fontWeight: 800, color: RED, textTransform: 'uppercase', letterSpacing: '.08em' }}>Côté équipe commerciale</span>
            </div>
            <div style={{ padding: '8px 0' }}>
              {[
                'Directeur commercial : 60 % du temps en prospection multilingue',
                '4 commerciaux export cantonnés au portefeuille existant + closing',
                'Volume prospection : 80 prospects touchés / semaine maximum',
                'Time-to-first-touch leads inbound : 18h à 5 jours',
                'RDV qualifiés générés : 12 par mois',
                'Marchés Japon et USA : quasi non adressés',
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

          {/* Côté stratégique */}
          <div style={{ borderRadius: 18, background: '#fff', border: `1px solid ${GOLD}22`, overflow: 'hidden', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(16px)', transition: 'all .6s .1s ease' }}>
            <div style={{ padding: '16px 22px', background: `${GOLD}08`, borderBottom: `1px solid ${GOLD}15`, display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: GOLD }} />
              <span style={{ fontSize: 13, fontWeight: 800, color: GOLD, textTransform: 'uppercase', letterSpacing: '.08em' }}>Côté commercial / stratégique</span>
            </div>
            <div style={{ padding: '8px 0' }}>
              {[
                'Marchés Japon et USA : peu adressés faute de compétences linguistiques',
                'Coût d\'acquisition par RDV qualifié : 480 € (charges directeur + outils)',
                'Recrutement commercial multilingue : 12 mois sans résultat',
                'Opportunités perdues sur salons internationaux (Vinexpo, Pro Wein)',
                'Manque à gagner estimé : 800 k€ à 1,2 M€ de CA export / an',
              ].map((item, i, arr) => (
                <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 22px', borderBottom: i < arr.length - 1 ? '1px solid #f4f4f5' : 'none' }}>
                  <div style={{ flexShrink: 0, width: 18, height: 18, borderRadius: '50%', background: `${GOLD}12`, border: `1.5px solid ${GOLD}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1 }}>
                    <span style={{ fontSize: 9, fontWeight: 900, color: GOLD }}>✕</span>
                  </div>
                  <p style={{ fontSize: 14, color: '#52525b', lineHeight: 1.65, margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Callout multilingue */}
        <div style={{ borderRadius: 20, background: '#09090b', border: '1px solid #1e1e1e', overflow: 'hidden' }}>
          <div style={{ padding: '14px 24px', borderBottom: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', gap: 8 }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><circle cx="7" cy="7" r="6" stroke={WINE} strokeWidth="1.2"/><path d="M3 7c0-2.2 1.8-4 4-4M11 7c0 2.2-1.8 4-4 4M7 3v8M3 7h8" stroke={WINE} strokeWidth="1.1" strokeLinecap="round"/></svg>
            <p style={{ fontSize: 12, fontWeight: 800, color: '#8a8a95', textTransform: 'uppercase', letterSpacing: '.12em', margin: 0 }}>Le verrou linguistique</p>
          </div>
          <div style={{ padding: '24px 28px' }}>
            <p style={{ fontSize: 16, color: '#a1a1aa', lineHeight: 1.75, margin: 0 }}>
              La contrainte centrale n'était pas un manque de demande export : c'était un <strong style={{ color: '#e4e4e7' }}>verrou humain linguistique</strong>. Un seul humain maîtrisait les 3 langues nécessaires, et son temps était saturé. Pas de solution RH possible en 18 mois. La réponse Althoce : <strong style={{ color: WINE }}>un agent IA SDR capable de prospecter en français, anglais, mandarin et japonais</strong>, disponible 24h/24, sur les 4 marchés simultanément.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Solution déployée ─────────────────────────────────────────
const timeline = [
  {
    week: 'Sem. 0',
    title: 'Cadrage initial',
    color: AC,
    items: ['Qualification du besoin commercial multilingue', 'Cartographie ICP par marché (UK, USA, Chine, Japon)', 'Devis ferme livré sous 5 jours', 'Validation des 2 associés'],
  },
  {
    week: 'Sem. 1-2',
    title: 'Cadrage culturel par marché',
    color: AC,
    items: ['Ateliers directeur commercial + 1 sénior par marché', 'Définition du ton par culture (anglo-saxon direct, asiatique formel)', 'Cartographie données : LinkedIn SN, Apollo, annuaires sectoriels', 'Validation conformité RGPD prospection email B2B', 'Intégration prévue : HubSpot + Outlook + Calendly'],
  },
  {
    week: 'Sem. 3-4',
    title: 'Build agent multilingue',
    color: WINE,
    items: ['Config Mistral (fr/en/mandarin) + Claude Enterprise (japonais)', 'Templates messages par marché et persona (grand compte / boutique)', 'Intégration LinkedIn Sales Navigator + HubSpot', 'Tests sur 50 prospects historiques connus du directeur'],
  },
  {
    week: 'Sem. 5',
    title: 'POC accompagné',
    color: WINE,
    items: ['Prospection 4 marchés en parallèle du directeur', 'Revue manuelle des 200 premiers messages par marché', 'Calibrage règles d\'escalade (conditions exceptionnelles, profils sensibles)'],
  },
  {
    week: 'Sem. 6',
    title: 'Mise en production complète',
    color: GREEN,
    items: ['Bascule sur autonomie complète avec validation périodique', 'Formation des 4 commerciaux export au pilotage de l\'agent', 'Reporting hebdo automatique au directeur commercial', 'Monitoring sentiment des conversations'],
  },
];

function ArchitectureSVG() {
  return (
    <div style={{ borderRadius: 16, background: '#09090b', border: '1px solid #1a1a1a', padding: '24px 20px', overflow: 'hidden' }}>
      <div style={{ fontSize: 12, fontWeight: 800, color: '#3f3f46', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 20 }}>Architecture déployée · Agent SDR multilingue</div>

      {/* Flux principal */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: '#8a8a95', marginBottom: 10 }}>Flux prospection · SDR automatisé 24/7</div>
        {/* Desktop: horizontal flow */}
        <div className="cc2-arch-flow-desktop" style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
          {[
            { label: 'Sources ICP (LinkedIn SN, Apollo, annuaires)', color: '#3f3f46' },
            { label: 'Agent IA SDR (Mistral FR)', color: WINE },
            { label: 'Messages 4 langues', color: WINE },
            { label: 'Suivi + relances', color: GOLD },
            { label: 'Qualification', color: GOLD },
            { label: 'Calendly RDV', color: GREEN },
            { label: 'HubSpot CRM', color: AC },
          ].map((node, i, arr) => (
            <React.Fragment key={i}>
              <div style={{ padding: '6px 12px', borderRadius: 8, background: '#111', border: `1px solid ${node.color}30`, fontSize: 10, fontWeight: 700, color: node.color, whiteSpace: 'nowrap' }}>{node.label}</div>
              {i < arr.length - 1 && <span style={{ color: '#2a2a2a', fontSize: 15, fontWeight: 900 }}>→</span>}
            </React.Fragment>
          ))}
        </div>
        {/* Mobile: vertical list */}
        <div className="cc2-arch-flow-mobile">
          {[
            { label: 'Sources ICP (LinkedIn SN, Apollo, annuaires)', color: '#3f3f46' },
            { label: 'Agent IA SDR (Mistral FR)', color: WINE },
            { label: 'Messages 4 langues', color: WINE },
            { label: 'Suivi + relances', color: GOLD },
            { label: 'Qualification', color: GOLD },
            { label: 'Calendly RDV', color: GREEN },
            { label: 'HubSpot CRM', color: AC },
          ].map((node, i, arr) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ padding: '7px 14px', borderRadius: 8, background: '#111', border: `1px solid ${node.color}30`, fontSize: 13, fontWeight: 700, color: node.color }}>{node.label}</div>
              {i < arr.length - 1 && <div style={{ width: 2, height: 10, background: '#2a2a2a', marginLeft: 20 }} />}
            </div>
          ))}
        </div>
      </div>

      {/* Couverture langues */}
      <div>
        <div style={{ fontSize: 10, fontWeight: 700, color: '#52525b', marginBottom: 10 }}>Couverture linguistique par marché</div>
        <div className="cc2-lang-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8 }}>
          {[
            { lang: 'Français / Anglais', market: 'Europe · UK · Belgique · Suisse', color: AC },
            { lang: 'Anglais', market: 'États-Unis · New York · SF', color: GREEN },
            { lang: 'Mandarin', market: 'Chine · Shanghai · HK', color: WINE },
            { lang: 'Japonais', market: 'Japon · Tokyo · Osaka', color: GOLD },
          ].map((m, i) => (
            <div key={i} style={{ padding: '10px 12px', borderRadius: 8, background: '#111', border: `1px solid ${m.color}25` }}>
              <div style={{ fontSize: 10, fontWeight: 800, color: m.color, marginBottom: 4 }}>{m.lang}</div>
              <div style={{ fontSize: 10, color: '#3f3f46', fontWeight: 500, lineHeight: 1.4 }}>{m.market}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 16, padding: '10px 14px', borderRadius: 8, background: '#0a0a0a', border: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: WINE, flexShrink: 0 }} />
        <span style={{ fontSize: 12, color: '#3f3f46', fontWeight: 600 }}>Mistral hébergé France (fr/en/zh) · Claude Enterprise en backup pour le japonais · RGPD multi-pays intégré</span>
      </div>
    </div>
  );
}

function LaSolution() {
  const [ref, visible] = useInView(0.05);
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        <H2 style={{ marginBottom: 12 }}>Agent IA SDR multilingue déployé en 6 semaines sur 4 langues</H2>
        <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 48, maxWidth: 700 }}>
          Le négoce avait besoin d'une couverture <strong style={{ color: '#09090b' }}>multilingue 24/7</strong> sur ses 4 marchés export. Nous avons conçu un agent IA SDR capable de prospecter en français, anglais, mandarin et japonais, avec un ton culturellement adapté par marché, le point critique spécifié pendant 3 jours avec le directeur avant tout build.
        </p>

        {/* Timeline verticale */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginBottom: 48 }}>
          {timeline.map((step, i) => (
            <div key={i} className="cc2-tl-row" style={{ display: 'flex', gap: 0, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(-10px)', transition: `all .5s ${i * .08}s ease` }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: 100 }}>
                <div style={{ padding: '6px 10px', borderRadius: 9999, background: `${step.color}10`, border: `2px solid ${step.color}40`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, whiteSpace: 'nowrap' }}>
                  <span style={{ fontSize: 10, fontWeight: 900, color: step.color, letterSpacing: '-.01em' }}>{step.week}</span>
                </div>
                {i < timeline.length - 1 && (
                  <div style={{ width: 2, flex: 1, minHeight: 24, background: `linear-gradient(to bottom, ${step.color}30, #e4e4e7)` }} />
                )}
              </div>

              <div style={{ flex: 1, marginBottom: i < timeline.length - 1 ? 16 : 0, paddingBottom: i < timeline.length - 1 ? 8 : 0 }}>
                <div style={{ borderRadius: 14, background: '#fafafa', border: '1px solid #e4e4e7', borderLeft: `3px solid ${step.color}`, padding: '18px 22px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                    <span style={{ fontSize: 16, fontWeight: 800, color: '#09090b', letterSpacing: '-.01em' }}>{step.title}</span>
                    <span className="cc2-tl-week-inline" style={{ flexShrink: 0, padding: '2px 8px', borderRadius: 9999, background: `${step.color}10`, border: `1px solid ${step.color}25`, fontSize: 10, fontWeight: 800, color: step.color }}>{step.week}</span>
                  </div>
                  <div className="cc2-tl-items">
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
  { delta: '×3', label: 'RDV qualifiés / mois', avant: '12 RDV', apres: '36 RDV', color: AC, size: 'hero' },
  { delta: '×5', label: 'prospects touchés / semaine', avant: '80 / sem.', apres: '400 / sem.', color: AC, size: 'normal' },
  { delta: '4 min', label: 'time-to-first-touch lead inbound', avant: '18 heures', apres: '4 minutes', color: AC, size: 'normal' },
  { delta: '−80 %', label: "coût d'acquisition par RDV", avant: '480 €', apres: '95 €', color: AC, size: 'normal' },
  { delta: '4', label: 'langues couvertes 24/7', avant: '3 langues (1 humain)', apres: '4 langues en continu', color: AC, size: 'small' },
  { delta: '+2', label: 'grands comptes Japon (6 mois)', avant: '0 en 18 mois', apres: '2 nouveaux comptes', color: AC, size: 'small' },
];

function KPICard({ k, i, visible }: { k: typeof kpiCards[0]; i: number; visible: boolean }) {
  const isHero = k.size === 'hero';
  const isSmall = k.size === 'small';
  return (
    <div
      className={isHero ? 'cc2-kpi-card cc2-kpi-hero' : isSmall ? 'cc2-kpi-card cc2-kpi-small' : 'cc2-kpi-card'}
      style={{
        borderRadius: 18,
        background: isHero ? 'linear-gradient(135deg, #080c18 0%, #0d1220 100%)' : '#111',
        border: `1px solid ${k.color}${isHero ? '40' : '20'}`,
        padding: isHero ? '32px 28px' : '22px 20px',
        display: 'flex', flexDirection: 'column', gap: isHero ? 14 : 10,
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(20px)',
        transition: `all .55s ${i * .08}s ease`,
        position: 'relative', overflow: 'hidden',
      }}
    >
      {isHero && (
        <div aria-hidden="true" style={{ position: 'absolute', top: '-20%', right: '-10%', width: 180, height: 180, borderRadius: '50%', background: `radial-gradient(circle,${AC}18 0%,transparent 65%)`, filter: 'blur(30px)', pointerEvents: 'none' }} />
      )}
      <div style={{ fontSize: isHero ? 'clamp(48px,6vw,72px)' : isSmall ? 28 : 38, fontWeight: 900, color: k.color, letterSpacing: '-.04em', lineHeight: 0.95, position: 'relative' }}>
        {k.delta}
      </div>
      <div style={{ fontSize: isHero ? 14 : 12, fontWeight: 700, color: '#52525b', lineHeight: 1.4, textTransform: isHero ? 'none' : 'uppercase', letterSpacing: isHero ? 'normal' : '.06em' }}>
        {k.label}
      </div>
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
      <div aria-hidden="true" style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 2, background: `linear-gradient(to right,transparent,${WINE},transparent)` }} />
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: '#3f3f46', textTransform: 'uppercase', letterSpacing: '.14em', marginBottom: 14 }}>Mesure 4 mois après mise en production</div>
          <H2 style={{ color: '#fff' }}>Ce qui a changé concrètement</H2>
        </div>

        <div className="cc2-kpi-bento">
          {kpiCards.map((k, i) => (
            <KPICard key={i} k={k} i={i} visible={visible} />
          ))}
        </div>

        <div style={{ marginTop: 32, padding: '24px 28px', borderRadius: 18, background: `${AC}0c`, border: `1px solid ${AC}22` }}>
          <p style={{ fontSize: 16, color: '#a1a1aa', lineHeight: 1.75, margin: 0 }}>
            Le négoce a multiplié par 3 son volume de RDV qualifiés en 4 mois sans embauche. Le directeur commercial est sorti de la prospection opérationnelle pour se concentrer sur le management et la stratégie multi-marchés. Les 4 commerciaux reçoivent chaque matin une short list de <strong style={{ color: '#f0f0f0' }}>8 à 12 RDV qualifiés à closer dans la journée</strong>. Le négoce a ouvert <strong style={{ color: AC }}>2 nouveaux comptes grands clients sur le marché japonais</strong> en 6 mois, contre zéro en 18 mois auparavant.
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
        <div style={{ fontSize: 13, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.14em', marginBottom: 32, textAlign: 'center' }}>Le mot du directeur commercial</div>

        <div style={{ position: 'relative', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(28px)', transition: 'all .7s ease' }}>
          <div aria-hidden="true" style={{ fontSize: 120, lineHeight: 0.6, color: WINE, fontFamily: 'Georgia, serif', fontWeight: 900, opacity: 0.1, marginBottom: 24, display: 'block', textAlign: 'center' }}>"</div>

          <blockquote style={{ fontSize: 'clamp(18px,2.4vw,26px)', fontWeight: 700, color: '#09090b', lineHeight: 1.65, margin: '0 0 40px', fontStyle: 'normal', textAlign: 'center' }}>
            On a déployé l'agent IA SDR multilingue en 6 semaines. Avant, j'étais le seul à pouvoir prospecter en mandarin et japonais. Maintenant, il prospecte 24/7 sur 4 langues. Mon équipe se concentre sur le <span style={{ color: WINE }}>closing et la fidélisation</span>. On a fait +200 % de RDV qualifiés en 4 mois, sans embauche supplémentaire. Et on a enfin ouvert le marché japonais, qu'on cherchait à adresser depuis 3 ans.
          </blockquote>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: `${WINE}15`, border: `1.5px solid ${WINE}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="9" r="4.5" stroke={WINE} strokeWidth="1.5"/>
                <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" stroke={WINE} strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 15, fontWeight: 800, color: '#09090b', letterSpacing: '-.01em' }}>Directeur commercial du négoce</div>
              <div style={{ fontSize: 13, color: '#8a8a95', marginTop: 2 }}>28 collaborateurs · Bordeaux · 4 mois après mise en production</div>
            </div>
            <div style={{ padding: '6px 16px', borderRadius: 9999, background: `${WINE}10`, border: `1px solid ${WINE}30`, fontSize: 13, fontWeight: 800, color: WINE }}>+200 % RDV</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Apprentissages ────────────────────────────────────────────
function IconCheck() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="9" stroke={GREEN} strokeWidth="1.5"/>
      <path d="M6 10l3 3 5-5" stroke={GREEN} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IconWrench() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="9" stroke={GOLD} strokeWidth="1.5"/>
      <path d="M13 7a3 3 0 01-4 4L6 14" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round"/>
      <circle cx="6.5" cy="13.5" r="1" fill={GOLD}/>
    </svg>
  );
}
function IconWarning() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 3L18 16H2L10 3z" stroke={RED} strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M10 9v3" stroke={RED} strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="10" cy="14" r="0.8" fill={RED}/>
    </svg>
  );
}

const lessons = [
  {
    num: '01', Icon: IconCheck, tag: 'Facteurs de succès', title: 'Ce qui a très bien marché', color: GREEN,
    items: [
      { bold: 'Le cadrage culturel par marché avant le build.', text: ' Le ton commercial mandarin n\'est pas une traduction du ton anglais : il demande plus de formalisme, de patience, de respect des hiérarchies. Sans cette spécification, l\'agent aurait sonné "occidental". Le directeur a passé 3 jours sur ce travail : c\'est ce qui a fait la différence.' },
      { bold: 'La revue manuelle des 200 premiers messages', text: ' par le directeur avant envoi. Lourd au démarrage, mais a permis de calibrer l\'agent parfaitement avant l\'autonomie complète. Investissement temps de 3 jours, amorti en quelques semaines.' },
    ],
  },
  {
    num: '02', Icon: IconWrench, tag: 'Ajustements', title: "Ce qu'on ajusterait", color: GOLD,
    items: [
      { bold: 'Le suivi post-RDV est resté manuel', text: ' chez les 4 commerciaux export. Sur les prochains déploiements similaires, nous recommandons d\'ajouter un ', link: { text: 'agent IA relance pipeline', href: '/agent-ia/commercial/' }, textAfter: ' pour automatiser la couche post-premier RDV.' },
      { bold: 'La formation des commerciaux au pilotage de l\'agent', text: ' a été trop rapide (1 demi-journée). Sur les prochains, 2 demi-journées + 1 séance de mise en pratique 1 mois après.' },
    ],
  },
  {
    num: '03', Icon: IconWarning, tag: 'Piège fréquent', title: 'Le piège à éviter', color: RED,
    items: [
      { bold: 'Ne pas négliger la légalité de la prospection email B2B par pays.', text: ' RGPD Europe strict (intérêt légitime documenté), CAN-SPAM US, Telecommunications Act UK, règles propres aux marchés asiatiques. Avant tout build, l\'agent doit intégrer ces contraintes pays par pays. Nous maintenons une checklist RGPD multi-pays pour ce type de déploiement.' },
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

        <div className="cc2-lessons-grid">
          {lessons.map((lesson, i) => (
            <div key={i} style={{ borderRadius: 20, background: '#111', border: `1px solid ${lesson.color}20`, overflow: 'hidden', display: 'flex', flexDirection: 'column', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: `all .55s ${i * .12}s ease`, position: 'relative' }}>
              <div style={{ height: 3, background: `linear-gradient(to right, ${lesson.color}, ${lesson.color}44)` }} />
              <div aria-hidden="true" style={{ position: 'absolute', top: 12, right: 16, fontSize: 72, fontWeight: 900, color: `${lesson.color}08`, letterSpacing: '-.06em', lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>{lesson.num}</div>
              <div style={{ padding: '24px 24px 16px', display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <div style={{ flexShrink: 0, width: 36, height: 36, borderRadius: 10, background: `${lesson.color}12`, border: `1px solid ${lesson.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <lesson.Icon />
                </div>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 800, color: lesson.color, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 4 }}>{lesson.tag}</div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: '#f0f0f0', lineHeight: 1.3, letterSpacing: '-.01em' }}>{lesson.title}</div>
                </div>
              </div>
              <div style={{ height: 1, background: '#1a1a1a', margin: '0 24px' }} />
              <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 16, flex: 1 }}>
                {lesson.items.map((item, j) => (
                  <div key={j} style={{ display: 'flex', gap: 10 }}>
                    <div style={{ flexShrink: 0, width: 5, height: 5, borderRadius: '50%', background: lesson.color, marginTop: 8, opacity: 0.7 }} />
                    <p style={{ fontSize: 14, color: '#52525b', lineHeight: 1.75, margin: 0 }}>
                      <strong style={{ color: '#d4d4d8' }}>{item.bold}</strong>
                      {item.text}
                      {'link' in item && item.link && (
                        <a href={item.link.href} style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>{item.link.text}</a>
                      )}
                      {'textAfter' in item && (item as { textAfter?: string }).textAfter}
                      {'.'}
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
      <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 12 }}>Audit commercial</div>
      {['ICP par marché cartographié', 'Langues & cultures identifiées', 'Outils existants mappés', 'Devis ferme 5 jours'].map((t, i) => (
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
      <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 12 }}>Roadmap SDR</div>
      {[{ l: 'Agent SDR multilingue', w: 90 }, { l: 'Intégrations HubSpot + Calendly', w: 70 }, { l: 'Formation équipe commerciale', w: 55 }, { l: 'Monitoring & reporting', w: 38 }].map((r, i) => (
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
        {[{ n: 'HubSpot CRM', c: '#ff7a59' }, { n: 'LinkedIn SN', c: '#0077b5' }, { n: 'Mistral OVH FR', c: '#6366f1' }, { n: 'Calendly', c: '#006bff' }, { n: 'Outlook', c: '#0078d4' }, { n: 'Apollo.io', c: '#c00' }].map((t, i) => (
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
        <span style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em' }}>Résultats 4 mois</span>
        <span style={{ padding: '2px 8px', borderRadius: 9999, background: '#22c55e15', border: '1px solid #22c55e30', fontSize: 10, fontWeight: 800, color: '#22c55e' }}>Actif</span>
      </div>
      {[{ t: 'RDV qualifiés / mois', v: '36' }, { t: 'Prospects / semaine', v: '400' }, { t: 'Time-to-first-touch', v: '4 min' }, { t: 'Coût acq. RDV', v: '95 €' }].map((r, i) => (
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
        <H2 style={{ marginBottom: 12 }}>Vous avez une équipe commerciale export ou multi-marchés saturée ?</H2>
        <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 36 }}>
          Trois questions pour évaluer si ce cas est transposable au vôtre.
        </p>

        <div style={{ borderRadius: 20, background: '#09090b', border: '1px solid #1e1e1e', overflow: 'hidden', marginBottom: 28 }}>
          <div style={{ padding: '14px 24px', borderBottom: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: WINE }} />
            <p style={{ fontSize: 12, fontWeight: 800, color: '#8a8a95', textTransform: 'uppercase', letterSpacing: '.12em', margin: 0 }}>3 critères de transposabilité</p>
          </div>
          {[
            { n: '01', text: 'Vous avez au moins 2 marchés export où la couverture linguistique est limitée par les compétences de votre équipe.' },
            { n: '02', text: 'Votre directeur commercial ou dirigeant passe plus de 40 % de son temps en prospection opérationnelle.' },
            { n: '03', text: 'Vous avez identifié des marchés porteurs non adressés faute de bande passante, pas un manque de demande.' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 16, padding: '18px 24px', borderBottom: i < 2 ? '1px solid #1a1a1a' : 'none' }}>
              <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: 8, background: `${WINE}18`, border: `1px solid ${WINE}35`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 10, fontWeight: 900, color: WINE }}>{item.n}</span>
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
          <a href="/agent-ia/commercial/"
            style={{ padding: '14px 28px', borderRadius: 9999, background: '#09090b', color: '#fff', textDecoration: 'none', fontSize: 15, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'transform .15s' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.03)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)'; }}>
            Découvrir Agent IA pour le commercial →
          </a>
          <a href="/contact"
            style={{ padding: '14px 28px', borderRadius: 9999, border: `1.5px solid ${WINE}40`, color: WINE, textDecoration: 'none', fontSize: 15, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, background: `${WINE}08`, transition: 'border-color .15s,background .15s' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = `${WINE}80`; (e.currentTarget as HTMLAnchorElement).style.background = `${WINE}14`; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = `${WINE}40`; (e.currentTarget as HTMLAnchorElement).style.background = `${WINE}08`; }}>
            Discuter de votre projet (30 min offertes) →
          </a>
        </div>

        <div style={{ marginTop: 40, paddingTop: 32, borderTop: '1px solid #e4e4e7' }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 16 }}>Voir d'autres cas clients</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a href="/cas-clients/"
              style={{ padding: '9px 18px', borderRadius: 9999, border: '1px solid #e4e4e7', fontSize: 14, fontWeight: 700, color: '#8a8a95', textDecoration: 'none', background: '#fff', display: 'inline-flex', alignItems: 'center', gap: 7, transition: 'border-color .15s,color .15s' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = '#09090b'; el.style.color = '#09090b'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = '#e4e4e7'; el.style.color = '#8a8a95'; }}>
              <span style={{ fontSize: 12 }}>←</span> Tous les cas clients
            </a>
            {[
              { href: '/cas-clients/cabinet-comptable-lyon/', label: 'Cabinet comptable Lyon', sub: '' },
              { href: '/cas-clients/saas-b2b-agent-ia-service-client/', label: 'SaaS B2B', sub: 'Service client' },
            ].map((c) => (
              <a key={c.href} href={c.href}
                style={{ padding: '9px 18px', borderRadius: 9999, border: '1px solid #e4e4e7', fontSize: 14, fontWeight: 700, color: '#8a8a95', textDecoration: 'none', background: '#fff', display: 'inline-flex', alignItems: 'center', gap: 7, transition: 'border-color .15s,color .15s' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = '#09090b'; el.style.color = '#09090b'; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = '#e4e4e7'; el.style.color = '#8a8a95'; }}>
                {c.label}{c.sub ? <><span style={{ color: '#a1a1aa', fontWeight: 500 }}> · </span>{c.sub}</> : null} <span style={{ fontSize: 12 }}>→</span>
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

  /* KPI Bento Grid */
  .cc2-kpi-bento {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto auto;
    gap: 14px;
  }
  .cc2-kpi-hero { grid-column: 1 / 2; grid-row: 1 / 3; }

  /* Timeline */
  .cc2-tl-items { display: grid; grid-template-columns: repeat(2,1fr); gap: 6px 20px; }
  .cc2-tl-week-inline { display: inline-flex; }

  /* Lessons */
  .cc2-lessons-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; align-items: start; }

  .cc2-arch-flow-mobile { display: none; }
  @media (max-width: 860px) {
    .cc2-hero-grid { grid-template-columns: 1fr !important; }
    .cc2-stat-col { display: none !important; }
    .cc2-avant-grid { grid-template-columns: 1fr !important; }
    .cc2-kpi-bento { grid-template-columns: 1fr 1fr !important; grid-template-rows: auto !important; }
    .cc2-kpi-hero { grid-column: 1 / -1 !important; grid-row: auto !important; }
    .cc2-lessons-grid { grid-template-columns: 1fr !important; }
    .v2-grid4 { grid-template-columns: repeat(2,1fr) !important; }
    .cc2-arch-flow-desktop { display: none !important; }
    .cc2-arch-flow-mobile { display: flex; flex-direction: column; gap: 0; }
    .cc2-lang-grid { grid-template-columns: repeat(2,1fr) !important; }
  }
  @media (max-width: 680px) {
    .cc2-tl-items { grid-template-columns: 1fr !important; }
    .cc2-tl-row > div:first-child { width: 52px !important; }
    .cc2-tl-week-inline { display: none !important; }
  }
  @media (max-width: 500px) {
    .cc2-kpi-bento { grid-template-columns: 1fr !important; }
    .cc2-kpi-hero { grid-column: 1 / -1 !important; }
    .v2-grid4 { grid-template-columns: 1fr !important; }
  }
`;

export default function CasClientNegoceVinsBordelaisPageClient() {
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
