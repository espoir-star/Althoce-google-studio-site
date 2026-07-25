'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FAQAccordion } from '@/components/ui/data-display/FAQAccordion';
import FormationCard from '@/components/formation/FormationCard';
import type { FAQv2Item } from '@/lib/data';

const AC = '#2563eb';
const PURPLE = '#7c3aed';

// ── Shared hook ──────────────────────────────────────────────
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  // SEO : visible par defaut — le HTML servi au crawler contient tout le contenu (opacity 1).
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    setVisible(false);
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    const failsafe = setTimeout(() => { setVisible(true); obs.disconnect(); }, 3000);
    return () => { clearTimeout(failsafe); obs.disconnect(); };
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

// ── Hero ─────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{ padding: '120px 24px 72px', position: 'relative', overflow: 'hidden', borderBottom: '1px solid #e4e4e7' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: 600, height: 600, borderRadius: '50%', background: `radial-gradient(circle,${AC}10 0%,transparent 65%)`, filter: 'blur(80px)', animation: 'gradDrift1 14s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', top: '20%', right: '-8%', width: 460, height: 460, borderRadius: '50%', background: `radial-gradient(circle,${PURPLE}0d 0%,transparent 65%)`, filter: 'blur(100px)', animation: 'gradDrift2 18s ease-in-out infinite' }} />
      </div>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.025) 1px,transparent 1px)', backgroundSize: '48px 48px', maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%,black,transparent)', zIndex: 0 }} aria-hidden="true" />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
        <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: '#a1a1aa', marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, fontWeight: 500 }}>
          <a href="/" style={{ color: '#8a8a95', textDecoration: 'none' }}>Accueil</a>
          <span>›</span>
          <a href="/services/" style={{ color: '#8a8a95', textDecoration: 'none' }}>Services</a>
          <span>›</span>
          <span style={{ color: '#09090b' }}>Formation IA</span>
        </nav>

        <h1 style={{ fontSize: 'clamp(30px,4.5vw,54px)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-.04em', color: '#09090b', marginBottom: 22 }}>
          Formation IA pour entreprise
        </h1>

        <p style={{ fontSize: 17, color: '#52525b', lineHeight: 1.75, marginBottom: 34, maxWidth: 620, margin: '0 auto 34px' }}>
          Deux formations indépendantes d&apos;une journée, conçues pour les PME et ETI françaises. Vos équipes travaillent sur vos vrais dossiers, avec vos outils, et repartent avec des cas d&apos;usage prêts à déployer.
        </p>

        <a href="/contact/"
          style={{ padding: '14px 28px', borderRadius: 9999, background: '#09090b', color: '#fff', textDecoration: 'none', fontSize: 15, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'transform .15s,box-shadow .15s' }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,.25)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}>
          Discuter de votre projet →
        </a>
      </div>
    </section>
  );
}

// ── Les deux programmes ──────────────────────────────────────
function Programmes() {
  const [ref, visible] = useInView(0.08);
  return (
    <section ref={ref} id="programmes" style={{ padding: '96px 24px', background: '#fff' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: 'all .6s ease' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <H2 style={{ marginBottom: 14 }}>Nos deux programmes</H2>
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 640, margin: '0 auto', lineHeight: 1.7 }}>
            Chaque formation se suit indépendamment, selon le niveau de vos équipes. La première pose les bases et sécurise les usages. La seconde transforme vos utilisateurs en power-users capables d&apos;automatiser leur métier.
          </p>
        </div>

        <div className="frm-cards-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <FormationCard
            level="Niveau 1"
            title="IA Fondamentaux"
            tagline="Maîtriser l'IA générative au quotidien professionnel"
            description="Passer de « j'ai testé ChatGPT » à une utilisation quotidienne, efficace et sécurisée de l'IA dans son travail."
            meta="1 journée · Aucun prérequis · Jusqu'à 10 participants"
            keyPoints={[
              'Comprendre les LLM et choisir le bon modèle',
              'Rédiger des prompts qui donnent des résultats exploitables',
              "Utiliser l'IA en conformité RGPD et IA Act",
            ]}
            href="/services/formation-ia/ia-fondamentaux/"
            accent={AC}
          />
          <FormationCard
            level="Niveau 2"
            title="IA Avancée"
            tagline="Expertise métier et automatisation"
            description="Passer d'utilisateur à power-user : assistants IA sur mesure, connexion aux outils et premier agent d'automatisation."
            meta="1 journée · Pratique IA requise · Jusqu'à 10 participants"
            keyPoints={[
              'Créer son assistant IA métier',
              "Connecter l'IA à ses outils via API et MCP",
              "Construire un agent d'automatisation fonctionnel",
            ]}
            href="/services/formation-ia/ia-avancee/"
            accent={PURPLE}
          />
        </div>

        <p style={{ fontSize: 14.5, color: '#8a8a95', textAlign: 'center', marginTop: 28, lineHeight: 1.7, maxWidth: 620, marginLeft: 'auto', marginRight: 'auto' }}>
          Un questionnaire de positionnement est envoyé en amont pour orienter chaque participant vers le niveau qui lui correspond.
        </p>
      </div>
    </section>
  );
}

// ── Notre approche ───────────────────────────────────────────
const approcheSteps = [
  {
    num: '01',
    title: 'Cadrage en amont',
    desc: "Nous récupérons vos cas d'usage réels et adaptons les exemples et le vocabulaire à votre secteur. La formation se déroule sur l'outil que vos équipes utilisent déjà, ChatGPT ou Claude.",
  },
  {
    num: '02',
    title: 'Pratique sur vos vrais dossiers',
    desc: "Chaque participant apporte deux tâches chronophages de son poste. Ce sont elles qui servent de support aux ateliers. À la fin de la journée, elles sont traitées.",
  },
  {
    num: '03',
    title: 'Suivi à 30 jours',
    desc: "Une visio d'une heure un mois après pour débloquer les difficultés et ajuster les cas d'usage. C'est ce qui fait la différence entre une formation oubliée et des pratiques ancrées.",
  },
];

function Approche() {
  const [ref, visible] = useInView(0.08);
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <H2>Des formations construites avec vous</H2>
        </div>
        <div className="frm-approche-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          {approcheSteps.map((s, i) => (
            <div key={i} style={{
              padding: '32px 28px', borderRadius: 20, border: '1px solid #e4e4e7', background: '#fff',
              opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: `all .5s ${i * .12}s ease`,
            }}>
              <div style={{ fontSize: 40, fontWeight: 900, color: `${AC}22`, letterSpacing: '-.04em', lineHeight: 1, marginBottom: 16 }}>{s.num}</div>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: '#09090b', marginBottom: 10, letterSpacing: '-.02em' }}>{s.title}</h3>
              <p style={{ fontSize: 14.5, color: '#52525b', lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Financement (DarkBlock) ──────────────────────────────────
function Financement() {
  return (
    <section style={{ padding: '96px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ borderRadius: 24, background: '#09090b', border: '1px solid #1e1e1e', padding: '48px 44px', position: 'relative', overflow: 'hidden' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: -60, left: -60, width: 260, height: 260, borderRadius: '50%', background: `radial-gradient(circle,${AC}22,transparent 70%)`, pointerEvents: 'none' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '5px 14px', borderRadius: 9999, background: `${AC}18`, border: `1px solid ${AC}30`, fontSize: 12, fontWeight: 800, color: '#93c5fd', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 20 }}>
              Financement
            </div>
            <h2 style={{ fontSize: 'clamp(22px,3vw,34px)', fontWeight: 800, letterSpacing: '-.03em', color: '#fff', lineHeight: 1.2, marginBottom: 20 }}>
              Vos formations sont finançables
            </h2>
            <p style={{ fontSize: 16, color: '#a1a1aa', lineHeight: 1.75, marginBottom: 18 }}>
              Les actions de formation professionnelle peuvent être prises en charge par votre opérateur de compétences. Selon votre branche et votre budget formation disponible, le reste à charge peut être fortement réduit.
            </p>
            <p style={{ fontSize: 16, color: '#a1a1aa', lineHeight: 1.75, marginBottom: 32 }}>
              Nos équipes s&apos;occupent des démarches auprès de votre OPCO : constitution du dossier, transmission des pièces justificatives et suivi jusqu&apos;à l&apos;accord de prise en charge.
            </p>
            <a href="/contact/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 26px', borderRadius: 9999, background: '#fff', color: '#09090b', fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: 'transform .15s,box-shadow .15s' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(255,255,255,.18)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
              Évaluer votre financement →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── FAQ ──────────────────────────────────────────────────────
const faqHub: FAQv2Item[] = [
  {
    q: 'Faut-il des compétences techniques ?',
    a: 'Non pour la formation Fondamentaux, aucun prérequis. La formation Avancée demande une pratique régulière d\'un outil IA. Un questionnaire de vérification est envoyé en amont.',
  },
  {
    q: 'Sur quel outil se déroule la formation ?',
    a: 'Sur celui que vos équipes utilisent déjà, ChatGPT ou Claude. Si le choix n\'est pas encore fait, nous vous aidons à le poser pendant le cadrage.',
  },
  {
    q: 'Peut-on former plus de 10 personnes ?',
    a: 'Oui, en organisant plusieurs sessions. Nous limitons à 10 participants pour garantir un accompagnement individuel pendant les ateliers.',
  },
  {
    q: 'Quel délai faut-il prévoir ?',
    a: 'Deux à trois semaines entre le premier échange et la session : cadrage, questionnaire aux participants, adaptation des supports et montage du dossier de financement si besoin.',
  },
  {
    q: 'Les formations sont-elles accessibles aux personnes en situation de handicap ?',
    a: 'Oui. Contactez-nous en amont pour que nous préparions les aménagements nécessaires.',
  },
  {
    q: 'Que se passe-t-il après la formation ?',
    a: 'Une visio de suivi est prévue à 30 jours. Beaucoup de clients enchaînent ensuite sur un projet d\'automatisation concret, souvent identifié pendant la formation.',
  },
];

function FAQ() {
  return (
    <section id="faq" style={{ padding: '96px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <H2>Questions fréquentes</H2>
        </div>
        <FAQAccordion items={faqHub} />
      </div>
    </section>
  );
}

// ── CTA final ────────────────────────────────────────────────
function CTAFinal() {
  return (
    <section style={{ padding: '96px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
        <H2 style={{ marginBottom: 16 }}>Discutons de votre projet de formation</H2>
        <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.75, marginBottom: 32, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
          30 minutes offertes pour comprendre votre contexte, identifier le bon niveau pour vos équipes et vous dire honnêtement si nos formations correspondent à votre besoin.
        </p>
        <a href="/contact/" style={{ padding: '14px 28px', borderRadius: 9999, background: '#09090b', color: '#fff', textDecoration: 'none', fontSize: 15, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'transform .15s,box-shadow .15s' }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,.25)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}>
          Réserver 30 minutes →
        </a>
      </div>
    </section>
  );
}

// ── Responsive CSS ───────────────────────────────────────────
const globalStyles = `
  @media (max-width: 820px) {
    .frm-cards-grid { grid-template-columns: 1fr !important; }
    .frm-approche-grid { grid-template-columns: 1fr !important; }
  }
`;

// ── Page ─────────────────────────────────────────────────────
export default function FormationIAPageClient() {
  return (
    <main>
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      <Hero />
      <Programmes />
      <Approche />
      <Financement />
      <FAQ />
      <CTAFinal />
    </main>
  );
}
