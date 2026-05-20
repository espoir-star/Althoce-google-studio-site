'use client';

import React, { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import { FranceMapSVG } from '@/components/FranceMapSVG';
import { FAQAccordion } from '@/components/ui/data-display/FAQAccordion';
import { steps, agentTags, securityItems } from '@/lib/data';

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const ACCENT = '#2563eb';

const sectors = [
  {
    icon: '⚓',
    title: 'Défense maritime Naval Group',
    desc: 'Sous-traitants et équipementiers navals. Sourcing fournisseurs conformité défense, gestion documentaire secret, suivi contrats Naval Group. Souveraineté absolue : auto-hébergement Mistral on-premise possible.',
  },
  {
    icon: '🌊',
    title: 'Recherche océanographique et maritime',
    desc: 'IFREMER, IUEM, startups deeptech maritime. Gestion documentaire scientifique, veille publications, automatisation rapports de mission. Données sensibles hébergées en France obligatoire.',
  },
  {
    icon: '🥐',
    title: 'Agroalimentaire breton',
    desc: 'Industries agroalimentaires bretonnes (porc, volaille, produits de la mer, conserveries). Automatisation ADV grands donneurs d\'ordre, gestion fournisseurs, conformité sanitaire européenne.',
  },
  {
    icon: '🚢',
    title: 'Services portuaires et logistique navale',
    desc: 'Port de commerce de Brest, logistique portuaire, transit maritime. Automatisation documentation douanière, suivi escales, coordination prestataires portuaires.',
  },
];

const metiers = [
  {
    tag: 'Achats',
    title: 'Agent IA Achats défense et naval',
    desc: 'Sourcing sous-traitants qualification défense, analyse devis techniques navals, surveillance fournisseurs stratégiques Naval Group. Conformité export ITAR/EAR vérifiée automatiquement. Sourcing multiplié par 6 en semaine 1.',
    kpi: '×6 sourcing',
    kpiLabel: 'semaine 1',
  },
  {
    tag: 'Opérations',
    title: 'Agent IA Ops logistique navale',
    desc: 'Coordination escales et livraisons portuaires, gestion documentaire chantier naval, suivi avancement contrats Naval Group. Alertes proactives retards critiques. Back-office libéré pour les arbitrages à valeur.',
    kpi: '−60 %',
    kpiLabel: 'charge admin ops',
  },
  {
    tag: 'Juridique',
    title: 'Agent IA Juridique droit maritime et défense',
    desc: 'Pré-analyse contrats de sous-traitance navale, droit maritime international, clauses secret défense. Auto-hébergement on-premise pour clients secret défense niveau maximum. Le juriste décide et signe. L\'IA ne publie rien.',
    kpi: '−70 %',
    kpiLabel: 'temps relecture contrats',
  },
  {
    tag: 'Service client',
    title: 'Agent IA Service client multilingue',
    desc: 'Support multilingue 9 langues pour agroalimentaire breton export, e-commerce régional, recherche internationale (EN/DE/ES/ZH/JA). Chatbot RAG sur documentation produit. CSAT en hausse dès semaine 2.',
    kpi: '+18 pts',
    kpiLabel: 'CSAT satisfaction',
  },
];

const faqs = [
  {
    q: 'Présentiel à Brest ou distanciel : quelle différence ?',
    a: 'Aucune différence qualité ni délais. Présentiel à Brest (centre-ville, Technopôle Brest-Iroise, Naval Group) ou Plougastel-Daoulas pour le cadrage et les ateliers. Build en distanciel structuré avec points hebdomadaires de 30 minutes.',
  },
  {
    q: 'Avez-vous un bureau permanent à Brest ?',
    a: 'Pas de bureau permanent. Déplacements réguliers et espaces partenaires Technopôle Brest-Iroise pour les RDV présentiels. Déplacements réguliers dans le Finistère et le Pays de Brest.',
  },
  {
    q: 'Proposez-vous des formations IA pour mes équipes brestoises ?',
    a: 'Oui. Ateliers de formation IA en présentiel à Brest ou en distanciel synchrone. Formats 4h à 21h, adaptés aux équipes défense (conformité secret), recherche maritime (IFREMER, IUEM) et agroalimentaire breton.',
  },
  {
    q: 'Quelle est votre approche pour les clients avec secret défense ?',
    a: 'Auto-hébergement Mistral on-premise dans votre infrastructure, zéro donnée qui sort de votre SI. Pour les niveaux Diffusion Restreinte à Secret, nous déployons le modèle chez vous. Aucun appel API externe. Conformité secret défense garantie.',
  },
  {
    q: 'Mes données restent-elles en France ?',
    a: 'Oui, souveraineté absolue. Mistral hébergé France (OVH, Scaleway) par défaut. Auto-hébergement on-premise pour les clients Naval Group et secret défense. Critique pour le secret industriel naval, la propriété intellectuelle recherche maritime et les données utilisateurs export.',
  },
  {
    q: 'Avez-vous des clients dans le Finistère et le Pays de Brest ?',
    a: 'Oui. Sous-traitants Naval Group, acteurs agroalimentaires bretons, cabinets pro brestois. Notre cas signature achats défense (sourcing ×6, 50 % temps libéré, auto-hébergement on-premise, 8 semaines) est directement transposable au tissu industriel naval breton.',
  },
];

const slugify = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ /g, '-').toLowerCase();

const secondaryCities = ['Nantes', 'Lille', 'Strasbourg', 'Nice', 'Rennes', 'Montpellier', 'Grenoble', 'Dijon', 'Reims', 'Angers', 'Le Havre', 'Saint-Étienne', 'Toulon', 'Nîmes'];

export default function AgenceIABrestPageClient() {
  const hero = useInView(0.1);
  const secRef = useInView(0.1);
  const metRef = useInView(0.1);
  const casRef = useInView(0.1);
  const stepRef = useInView(0.1);
  const faqRef = useInView(0.1);
  const ctaRef = useInView(0.1);

  return (
    <>
      <style>{`
        .bre-fade { opacity: 0; transform: translateY(28px); transition: opacity .55s ease, transform .55s ease; }
        .bre-fade.bre-visible { opacity: 1; transform: none; }
        .bre-fade-d1 { transition-delay: .08s; }
        .bre-fade-d2 { transition-delay: .18s; }
        .bre-fade-d3 { transition-delay: .28s; }
        .bre-fade-d4 { transition-delay: .38s; }

        .bre-hero { background: linear-gradient(135deg, #eff6ff 0%, #fff 60%); padding: 80px 0 60px; }
        .bre-hero-inner { max-width: 1100px; margin: 0 auto; padding: 0 24px; display: flex; gap: 56px; align-items: center; flex-wrap: wrap; }
        .bre-hero-text { flex: 1 1 340px; }
        .bre-eyebrow { display: inline-flex; align-items: center; gap: 8px; background: #eff6ff; border: 1.5px solid #bfdbfe; border-radius: 9999px; padding: 5px 14px; font-size: 13px; font-weight: 700; color: ${ACCENT}; letter-spacing: .06em; text-transform: uppercase; margin-bottom: 20px; }
        .bre-h1 { font-size: clamp(28px, 4vw, 44px); font-weight: 900; line-height: 1.1; color: #0f172a; margin-bottom: 18px; }
        .bre-h1 span { color: ${ACCENT}; }
        .bre-lead { font-size: 17px; color: #475569; line-height: 1.65; margin-bottom: 28px; max-width: 520px; }
        .bre-pills { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 32px; }
        .bre-pill { padding: 6px 14px; border-radius: 9999px; font-size: 13px; font-weight: 700; }
        .bre-pill-blue { background: #eff6ff; color: ${ACCENT}; border: 1.5px solid #bfdbfe; }
        .bre-pill-gray { background: #f8fafc; color: #475569; border: 1.5px solid #e2e8f0; }
        .bre-pill-red { background: #fef2f2; color: #dc2626; border: 1.5px solid #fecaca; }
        .bre-cta-group { display: flex; gap: 12px; flex-wrap: wrap; }
        .bre-btn-primary { padding: 14px 28px; border-radius: 10px; background: ${ACCENT}; color: #fff; font-size: 16px; font-weight: 700; border: none; cursor: pointer; text-decoration: none; display: inline-block; transition: background .2s; }
        .bre-btn-primary:hover { background: #1d4ed8; }
        .bre-btn-secondary { padding: 14px 28px; border-radius: 10px; background: #fff; color: ${ACCENT}; font-size: 16px; font-weight: 700; border: 2px solid ${ACCENT}; cursor: pointer; text-decoration: none; display: inline-block; transition: background .2s; }
        .bre-btn-secondary:hover { background: #eff6ff; }
        .bre-map-wrap { flex: 0 0 320px; display: flex; justify-content: center; }

        .bre-section { max-width: 1100px; margin: 0 auto; padding: 72px 24px; }
        .bre-section-title { font-size: clamp(22px, 3vw, 32px); font-weight: 800; color: #0f172a; margin-bottom: 12px; }
        .bre-section-sub { font-size: 16px; color: #64748b; margin-bottom: 40px; max-width: 560px; }

        .bre-sectors { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 20px; }
        .bre-sector-card { background: #fff; border: 1.5px solid #e2e8f0; border-radius: 14px; padding: 24px; transition: box-shadow .2s, border-color .2s; }
        .bre-sector-card:hover { box-shadow: 0 8px 32px rgba(37,99,235,.10); border-color: #bfdbfe; }
        .bre-sector-icon { font-size: 28px; margin-bottom: 12px; }
        .bre-sector-title { font-size: 16px; font-weight: 700; color: #0f172a; margin-bottom: 8px; }
        .bre-sector-desc { font-size: 14px; color: #64748b; line-height: 1.55; }

        .bre-metiers { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px; }
        .bre-metier-card { background: #fff; border: 1.5px solid #e2e8f0; border-radius: 16px; padding: 28px 24px; display: flex; flex-direction: column; gap: 12px; transition: box-shadow .2s, border-color .2s; }
        .bre-metier-card:hover { box-shadow: 0 8px 32px rgba(37,99,235,.10); border-color: #bfdbfe; }
        .bre-metier-tag { display: inline-block; background: #eff6ff; color: ${ACCENT}; border-radius: 9999px; padding: 3px 12px; font-size: 12px; font-weight: 700; letter-spacing: .05em; text-transform: uppercase; align-self: flex-start; }
        .bre-metier-title { font-size: 16px; font-weight: 800; color: #0f172a; line-height: 1.3; }
        .bre-metier-desc { font-size: 14px; color: #64748b; line-height: 1.6; flex: 1; }
        .bre-metier-kpi { display: flex; align-items: baseline; gap: 6px; border-top: 1px solid #f1f5f9; padding-top: 12px; margin-top: auto; }
        .bre-metier-kpi-val { font-size: 22px; font-weight: 900; color: ${ACCENT}; }
        .bre-metier-kpi-lbl { font-size: 12px; color: #94a3b8; font-weight: 600; }

        .bre-cas { background: linear-gradient(135deg, #eff6ff 0%, #f0fdf4 100%); border-radius: 20px; padding: 40px 36px; display: flex; gap: 40px; flex-wrap: wrap; align-items: flex-start; }
        .bre-cas-left { flex: 1 1 300px; }
        .bre-cas-badge { display: inline-block; background: #eff6ff; color: ${ACCENT}; border-radius: 9999px; padding: 4px 14px; font-size: 12px; font-weight: 800; letter-spacing: .06em; text-transform: uppercase; margin-bottom: 16px; }
        .bre-cas-title { font-size: 20px; font-weight: 800; color: #0f172a; margin-bottom: 10px; }
        .bre-cas-context { font-size: 14px; color: #64748b; margin-bottom: 16px; }
        .bre-cas-tags { display: flex; flex-wrap: wrap; gap: 6px; }
        .bre-cas-tag { background: #fff; border: 1px solid #e2e8f0; border-radius: 9999px; padding: 3px 10px; font-size: 12px; color: #475569; font-weight: 600; }
        .bre-cas-right { flex: 0 0 auto; display: flex; flex-direction: column; gap: 12px; min-width: 180px; }
        .bre-cas-kpi { background: #fff; border-radius: 14px; padding: 18px 22px; box-shadow: 0 2px 12px rgba(37,99,235,.08); text-align: center; }
        .bre-cas-kpi-val { font-size: 28px; font-weight: 900; color: ${ACCENT}; }
        .bre-cas-kpi-lbl { font-size: 12px; color: #94a3b8; font-weight: 600; margin-top: 2px; }
        .bre-cas-link { display: inline-flex; align-items: center; gap: 6px; font-size: 14px; font-weight: 700; color: ${ACCENT}; text-decoration: none; margin-top: 16px; }
        .bre-cas-link:hover { text-decoration: underline; }

        .bre-steps { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; }
        .bre-step { background: #fff; border: 1.5px solid #e2e8f0; border-radius: 14px; padding: 22px 20px; display: flex; flex-direction: column; gap: 10px; }
        .bre-step-num { width: 32px; height: 32px; border-radius: 50%; background: ${ACCENT}; color: #fff; font-size: 15px; font-weight: 800; display: flex; align-items: center; justify-content: center; }
        .bre-step-title { font-size: 15px; font-weight: 700; color: #0f172a; }
        .bre-step-desc { font-size: 13px; color: #64748b; line-height: 1.5; }

        .bre-agents { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 32px; }
        .bre-agent-tag { padding: 7px 16px; border-radius: 9999px; background: #f8fafc; border: 1.5px solid #e2e8f0; font-size: 13px; font-weight: 700; color: #475569; }

        .bre-security { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 14px; }
        .bre-sec-item { display: flex; align-items: flex-start; gap: 10px; background: #f8fafc; border-radius: 10px; padding: 14px 16px; }
        .bre-sec-icon { font-size: 18px; flex-shrink: 0; }
        .bre-sec-text { font-size: 13px; color: #475569; font-weight: 600; line-height: 1.4; }

        .bre-divider { border: none; border-top: 1px solid #f1f5f9; margin: 0; }

        .bre-faq-section { max-width: 760px; margin: 0 auto; padding: 72px 24px; }

        .bre-cities { display: flex; flex-wrap: wrap; gap: 8px; }
        .bre-city-link { padding: 5px 14px; border-radius: 9999px; background: #f8fafc; border: 1px solid #e2e8f0; font-size: 13px; color: #475569; font-weight: 600; text-decoration: none; transition: border-color .2s, color .2s; }
        .bre-city-link:hover { border-color: ${ACCENT}; color: ${ACCENT}; }

        .bre-cta-section { background: linear-gradient(135deg, #1e40af 0%, #2563eb 100%); padding: 72px 24px; text-align: center; }
        .bre-cta-inner { max-width: 600px; margin: 0 auto; }
        .bre-cta-title { font-size: clamp(24px, 3.5vw, 36px); font-weight: 900; color: #fff; margin-bottom: 14px; }
        .bre-cta-sub { font-size: 16px; color: #bfdbfe; margin-bottom: 32px; }
        .bre-cta-btn { padding: 16px 36px; border-radius: 12px; background: #fff; color: ${ACCENT}; font-size: 16px; font-weight: 800; border: none; cursor: pointer; text-decoration: none; display: inline-block; transition: background .2s; }
        .bre-cta-btn:hover { background: #f0f9ff; }
        .bre-cta-note { font-size: 13px; color: #93c5fd; margin-top: 14px; }

        .bre-footer-cities { background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 40px 24px; }
        .bre-footer-cities-inner { max-width: 1100px; margin: 0 auto; }
        .bre-footer-cities-title { font-size: 14px; font-weight: 700; color: #94a3b8; letter-spacing: .08em; text-transform: uppercase; margin-bottom: 16px; }
      `}</style>

      <Navbar />

      {/* HERO */}
      <section className="bre-hero">
        <div className="bre-hero-inner">
          <div
            className={`bre-hero-text bre-fade${hero.visible ? ' bre-visible' : ''}`}
            ref={hero.ref}
          >
            <div className="bre-eyebrow">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <circle cx="7" cy="5" r="2.8" stroke={ACCENT} strokeWidth="1.5" />
                <path d="M1.5 13c0-3 2.5-5 5.5-5s5.5 2 5.5 5" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              Agence IA à Brest
            </div>
            <h1 className="bre-h1">
              L&apos;IA qui comprend<br />
              <span>la défense navale,</span><br />
              la recherche maritime<br />
              et l&apos;agroalimentaire breton
            </h1>
            <p className="bre-lead">
              Althoce accompagne les PME et ETI brestoises : sous-traitants Naval Group, acteurs IFREMER, industries agroalimentaires bretonnes. Souveraineté France absolue. Auto-hébergement on-premise pour les clients secret défense.
            </p>
            <div className="bre-pills">
              <span className="bre-pill bre-pill-blue">+150 PME équipées en France</span>
              <span className="bre-pill bre-pill-red">Souveraineté France absolue (défense)</span>
              <span className="bre-pill bre-pill-gray">Présentiel + distanciel</span>
            </div>
            <div className="bre-cta-group">
              <a href="https://cal.com/althoce/30min" target="_blank" rel="noopener noreferrer" className="bre-btn-primary">
                30 min offertes avec un expert
              </a>
              <a href="/contact" className="bre-btn-secondary">
                Nous contacter
              </a>
            </div>
          </div>
          <div className="bre-map-wrap">
            <FranceMapSVG mainCity="Brest" presentielLabel="Présentiel Brest & Finistère" />
          </div>
        </div>
      </section>

      <hr className="bre-divider" />

      {/* SECTEURS */}
      <section className="bre-section">
        <div
          className={`bre-fade${secRef.visible ? ' bre-visible' : ''}`}
          ref={secRef.ref}
        >
          <h2 className="bre-section-title">Secteurs clés à Brest et dans le Finistère</h2>
          <p className="bre-section-sub">Défense navale, recherche maritime, agroalimentaire breton : des secteurs avec des contraintes de souveraineté et de conformité que nous connaissons.</p>
          <div className="bre-sectors">
            {sectors.map((s, i) => (
              <div key={i} className={`bre-sector-card bre-fade bre-fade-d${Math.min(i + 1, 4)}${secRef.visible ? ' bre-visible' : ''}`}>
                <div className="bre-sector-icon">{s.icon}</div>
                <div className="bre-sector-title">{s.title}</div>
                <div className="bre-sector-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="bre-divider" />

      {/* METIERS */}
      <section className="bre-section">
        <div
          className={`bre-fade${metRef.visible ? ' bre-visible' : ''}`}
          ref={metRef.ref}
        >
          <h2 className="bre-section-title">4 agents IA pour les métiers brestois</h2>
          <p className="bre-section-sub">Des agents IA conçus pour les contraintes réelles des PME et ETI du Pays de Brest.</p>
          <div className="bre-metiers">
            {metiers.map((m, i) => (
              <div key={i} className={`bre-metier-card bre-fade bre-fade-d${Math.min(i + 1, 4)}${metRef.visible ? ' bre-visible' : ''}`}>
                <span className="bre-metier-tag">{m.tag}</span>
                <div className="bre-metier-title">{m.title}</div>
                <div className="bre-metier-desc">{m.desc}</div>
                <div className="bre-metier-kpi">
                  <span className="bre-metier-kpi-val">{m.kpi}</span>
                  <span className="bre-metier-kpi-lbl">{m.kpiLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="bre-divider" />

      {/* CAS CLIENT */}
      <section className="bre-section">
        <div
          className={`bre-fade${casRef.visible ? ' bre-visible' : ''}`}
          ref={casRef.ref}
        >
          <h2 className="bre-section-title">Cas client : sous-traitant Naval Group à Brest</h2>
          <p className="bre-section-sub">Résultat réel, entreprise anonymisée à sa demande.</p>
          <div className="bre-cas">
            <div className="bre-cas-left">
              <span className="bre-cas-badge">Achats défense navale</span>
              <div className="bre-cas-title">Sous-traitant Naval Group Brest, 50 collaborateurs</div>
              <div className="bre-cas-context">
                Équipe achats de 4 personnes. Qualification fournisseurs Naval Group : 6 semaines de vérification manuelle par dossier. Secret industriel maximal. Besoin d&apos;un sourcing massif de sous-traitants qualifiés défense. Contrainte absolue : zéro donnée hors SI interne.
              </div>
              <div className="bre-cas-tags">
                <span className="bre-cas-tag">Mistral on-premise</span>
                <span className="bre-cas-tag">Secret défense</span>
                <span className="bre-cas-tag">Sourcing fournisseurs</span>
                <span className="bre-cas-tag">FR</span>
                <span className="bre-cas-tag">8 semaines</span>
              </div>
              <a href="/cas-clients/eti-industrielle-agent-ia-achats/" className="bre-cas-link">
                Lire le cas complet
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7h8M8 4l3 3-3 3" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
            <div className="bre-cas-right">
              <div className="bre-cas-kpi">
                <div className="bre-cas-kpi-val">×6</div>
                <div className="bre-cas-kpi-lbl">sourcing fournisseurs</div>
              </div>
              <div className="bre-cas-kpi">
                <div className="bre-cas-kpi-val">−50 %</div>
                <div className="bre-cas-kpi-lbl">temps équipe achats</div>
              </div>
              <div className="bre-cas-kpi">
                <div className="bre-cas-kpi-val">0</div>
                <div className="bre-cas-kpi-lbl">donnée hors SI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="bre-divider" />

      {/* PROCESSUS */}
      <section className="bre-section">
        <div
          className={`bre-fade${stepRef.visible ? ' bre-visible' : ''}`}
          ref={stepRef.ref}
        >
          <h2 className="bre-section-title">De la démo au ROI en 6 semaines</h2>
          <p className="bre-section-sub">Notre processus d&apos;implémentation structuré, adapté aux contraintes de conformité défense et souveraineté.</p>
          <div className="bre-steps">
            {steps.map((s, i) => (
              <div key={i} className={`bre-step bre-fade bre-fade-d${Math.min(i + 1, 4)}${stepRef.visible ? ' bre-visible' : ''}`}>
                <div className="bre-step-num">{i + 1}</div>
                <div className="bre-step-title">{s.title}</div>
                <div className="bre-step-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 48 }}>
            <h3 style={{ fontSize: 18, fontWeight: 800, color: '#0f172a', marginBottom: 16 }}>Agents IA disponibles</h3>
            <div className="bre-agents">
              {agentTags.map((t, i) => (
                <a key={i} href={t.href} className="bre-agent-tag">{t.name}</a>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 40 }}>
            <h3 style={{ fontSize: 18, fontWeight: 800, color: '#0f172a', marginBottom: 16 }}>Souveraineté France absolue</h3>
            <div className="bre-security">
              {securityItems.map((item, i) => (
                <div key={i} className="bre-sec-item">
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 13, color: '#0f172a', marginBottom: 2 }}>{item.title}</div>
                    <div className="bre-sec-text">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="bre-divider" />

      {/* FAQ */}
      <div className="bre-faq-section">
        <div
          className={`bre-fade${faqRef.visible ? ' bre-visible' : ''}`}
          ref={faqRef.ref}
        >
          <h2 className="bre-section-title">Questions fréquentes — Agence IA à Brest</h2>
          <FAQAccordion items={faqs} />
        </div>
      </div>

      <hr className="bre-divider" />

      {/* PARTOUT EN FRANCE */}
      <section className="bre-section">
        <h3 style={{ fontSize: 16, fontWeight: 700, color: '#94a3b8', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 16 }}>Partout en France</h3>
        <div className="bre-cities">
          {secondaryCities.map((city) => (
            <a key={city} href={`/agence-ia-${slugify(city)}/`} className="bre-city-link">{city}</a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bre-cta-section">
        <div
          className={`bre-cta-inner bre-fade${ctaRef.visible ? ' bre-visible' : ''}`}
          ref={ctaRef.ref}
        >
          <h2 className="bre-cta-title">Prêt à équiper vos équipes brestoises en IA ?</h2>
          <p className="bre-cta-sub">30 minutes offertes avec un expert Althoce. On part de votre cas concret, pas d&apos;un deck générique.</p>
          <a href="https://cal.com/althoce/30min" target="_blank" rel="noopener noreferrer" className="bre-cta-btn">
            Réserver 30 min offertes
          </a>
          <p className="bre-cta-note">Sans engagement. Souveraineté France absolue garantie.</p>
        </div>
      </section>
    </>
  );
}
