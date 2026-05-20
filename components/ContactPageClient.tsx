'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';

const AC = '#2563eb';

type FormState = 'idle' | 'loading' | 'success' | 'error';

const tailleOptions = [
  '1 à 9 personnes',
  '10 à 49 personnes',
  '50 à 199 personnes',
  '200 à 499 personnes',
  '500 à 4 999 personnes',
  '5 000 personnes et plus',
];

const budgetOptions = [
  'Moins de 5 000 € HT',
  '5 000 € à 15 000 € HT',
  '15 000 € à 50 000 € HT',
  '50 000 € à 100 000 € HT',
  'Plus de 100 000 € HT',
  'À évaluer ensemble',
];

// ── Icônes SVG premium ────────────────────────────────────────

function SvgZap() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke={AC} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 2L3 14h9" stroke={AC} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" fill={`${AC}18`} />
    </svg>
  );
}

function SvgRoute() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="6" cy="19" r="2.5" stroke={AC} strokeWidth="1.75" />
      <circle cx="18" cy="5" r="2.5" stroke={AC} strokeWidth="1.75" />
      <path d="M6 16.5C6 12 10 12 12 10s6-2 6-4.5" stroke={AC} strokeWidth="1.75" strokeLinecap="round" strokeDasharray="2 2" />
      <circle cx="6" cy="19" r="1" fill={AC} />
      <circle cx="18" cy="5" r="1" fill={AC} />
    </svg>
  );
}

function SvgShield() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2L4 6v6c0 5.25 3.5 9.74 8 11 4.5-1.26 8-5.75 8-11V6l-8-4z" stroke={AC} strokeWidth="1.75" strokeLinejoin="round" fill={`${AC}12`} />
      <path d="M9 12l2 2 4-4" stroke={AC} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SvgClock() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke={AC} strokeWidth="1.75" />
      <path d="M12 7v5l3 2" stroke={AC} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.5 5.5l.5.5M20.5 5.5l-.5.5" stroke={AC} strokeWidth="1.5" strokeLinecap="round" opacity=".4" />
    </svg>
  );
}

function SvgMail() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" stroke={AC} strokeWidth="1.75" fill={`${AC}10`} />
      <path d="M2 7l10 7 10-7" stroke={AC} strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function SvgPin() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke={AC} strokeWidth="1.75" strokeLinejoin="round" fill={`${AC}10`} />
      <circle cx="12" cy="9" r="2.5" stroke={AC} strokeWidth="1.75" />
    </svg>
  );
}

function SvgHours() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke={AC} strokeWidth="1.75" />
      <path d="M12 7v5l3 2" stroke={AC} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17.5 3.5l-1 1M6.5 3.5l1 1" stroke={AC} strokeWidth="1.5" strokeLinecap="round" opacity=".35" />
    </svg>
  );
}

// ── Données ───────────────────────────────────────────────────

const promises = [
  { Svg: SvgZap,    title: '30 minutes offertes',       desc: "Pas de démo commerciale. Un échange direct sur vos défis et vos processus." },
  { Svg: SvgRoute,  title: '3 idées concrètes garanties', desc: "Vous repartez avec au moins 3 automatisations à fort ROI identifiées pour votre cas." },
  { Svg: SvgShield, title: 'Sans engagement',            desc: "Aucune obligation de travailler ensemble. La valeur est dans l'échange lui-même." },
  { Svg: SvgClock,  title: 'Réponse sous 24 h',         desc: "On confirme le créneau rapidement. Bordeaux et toute la France, présentiel ou visio." },
];

const faqs = [
  {
    q: 'Combien de temps avant le premier RDV ?',
    a: "Nous vous proposons un créneau dans les 24 à 72 heures ouvrées qui suivent la réception de votre formulaire. Si votre demande est urgente (projet à lancer dans la semaine, contrainte de réponse à appel d'offres), précisez-le dans le champ « décrivez votre projet » et nous nous adapterons.",
  },
  {
    q: "Est-ce que c'est vraiment gratuit ? Quelle est la contrepartie ?",
    a: "Oui, c'est vraiment gratuit. La contrepartie pour nous est simple : ces 30 minutes nous permettent de qualifier le besoin et de proposer un devis pertinent plutôt qu'un devis générique. Vous n'avez aucune obligation de signer ensuite. Notre approche est de servir d'abord, vendre ensuite.",
  },
  {
    q: "Je ne suis pas sûr d'avoir un « vrai » besoin IA. Est-ce que ça vaut le coup de prendre RDV ?",
    a: "Oui. Une grande partie de nos clients arrivent avec « on aimerait comprendre par où commencer, on hésite ». Les 30 minutes servent justement à clarifier : est-ce que votre situation se prête à un agent IA, à un workflow d'automatisation classique, à une formation, ou à rien du tout pour l'instant. Notre réponse est sincère, même si elle est « pas maintenant ».",
  },
  {
    q: "Faut-il signer un NDA avant l'échange ?",
    a: "Pas obligatoire. Pendant les 30 minutes, l'échange reste à un niveau fonctionnel et organisationnel. Aucune information stratégique sensible n'est nécessaire à ce stade. Si vous préférez signer un NDA mutuel avant l'échange, dites-le dans la description et nous vous en proposerons un dans les 24 h.",
  },
];

const infoCards = [
  {
    Svg: SvgMail,
    label: 'Email général',
    body: (
      <>
        <a href="mailto:espoir@contact.althoce.com">espoir@contact.althoce.com</a>
        <br /><br />
        Réponse sous 24 heures ouvrées. Pour les demandes RGPD et données personnelles, même adresse.
      </>
    ),
  },
  {
    Svg: SvgPin,
    label: 'Siège social',
    body: (
      <>
        <strong>ALTHOCE CONSEIL</strong><br />
        5 rue Fénelon<br />
        33000 Bordeaux, France<br /><br />
        Visite sur rendez-vous uniquement.
      </>
    ),
  },
  {
    Svg: SvgHours,
    label: 'Horaires de réponse',
    body: (
      <>
        Du lundi au vendredi,<br />
        9 h – 18 h (heure de Paris).<br /><br />
        Réponses sous 24 heures ouvrées. Hors horaires, retour le jour ouvré suivant.
      </>
    ),
  },
];

// ── Composant principal ───────────────────────────────────────

export default function ContactPageClient() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({
    nom: '', entreprise: '', email: '', telephone: '',
    taille: '', budget: '', description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setFormState(res.ok ? 'success' : 'error');
    } catch {
      setFormState('error');
    }
  };

  return (
    <>
      <style>{`
        /* ── Base — cohérent avec la home (fond blanc) ── */
        .ctc-page { background: #fff; min-height: 100vh; }

        /* ── Grille de fond (identique home) ── */
        .ctc-bg-grid {
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background-image: linear-gradient(rgba(0,0,0,.025) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,0,0,.025) 1px, transparent 1px);
          background-size: 48px 48px;
          -webkit-mask-image: radial-gradient(ellipse 90% 70% at 60% 30%, black, transparent);
          mask-image: radial-gradient(ellipse 90% 70% at 60% 30%, black, transparent);
        }

        /* ── Hero ── */
        .ctc-hero-wrap { position: relative; overflow: hidden; border-bottom: 1px solid #e4e4e7; }
        .ctc-hero { max-width: 1200px; margin: 0 auto; padding: 100px 24px 80px; display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; position: relative; z-index: 1; }

        /* Breadcrumb */
        .ctc-breadcrumb { display: flex; align-items: center; gap: 8px; font-size: 13px; color: #a1a1aa; margin-bottom: 24px; }
        .ctc-breadcrumb a { color: #a1a1aa; text-decoration: none; transition: color .15s; }
        .ctc-breadcrumb a:hover { color: #52525b; }

        /* Pill disponible */
        .ctc-pill-avail { display: inline-flex; align-items: center; gap: 7px; padding: 5px 13px 5px 10px; border-radius: 9999px; background: #f0fdf4; border: 1px solid #bbf7d0; font-size: 12px; font-weight: 700; color: #16a34a; margin-bottom: 20px; }
        .ctc-pill-dot { width: 7px; height: 7px; border-radius: 50%; background: #22c55e; box-shadow: 0 0 0 2px #dcfce7; animation: ctcPulse 2s ease-in-out infinite; }
        @keyframes ctcPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.6;transform:scale(.85)} }

        /* H1 */
        .ctc-h1 { font-size: clamp(30px, 3.8vw, 50px); font-weight: 800; letter-spacing: -.04em; color: #09090b; line-height: 1.09; margin-bottom: 14px; }
        .ctc-h1 span { color: ${AC}; }
        .ctc-subtitle { font-size: 16px; color: #52525b; line-height: 1.75; margin-bottom: 40px; max-width: 440px; }

        /* 4 promesses */
        .ctc-promises { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .ctc-promise { display: flex; flex-direction: column; gap: 10px; padding: 16px; border-radius: 12px; border: 1px solid transparent; transition: border-color .2s, background .2s; }
        .ctc-promise:hover { background: #f8faff; border-color: #dbeafe; }
        .ctc-promise-icon { width: 38px; height: 38px; border-radius: 10px; background: #eff6ff; border: 1px solid #dbeafe; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .ctc-promise-title { font-size: 14px; font-weight: 700; color: #09090b; margin-bottom: 2px; }
        .ctc-promise-desc { font-size: 14px; color: #52525b; line-height: 1.65; }

        /* ── Formulaire ── */
        .ctc-form-card { background: #fff; border: 1px solid #e4e4e7; border-radius: 20px; padding: 36px; box-shadow: 0 4px 24px rgba(0,0,0,.06); }
        .ctc-form-title { font-size: 17px; font-weight: 800; color: #09090b; letter-spacing: -.02em; margin-bottom: 3px; }
        .ctc-form-sub { font-size: 14px; color: #52525b; margin-bottom: 22px; line-height: 1.6; }

        .ctc-field { margin-bottom: 14px; }
        .ctc-label { display: block; font-size: 13px; font-weight: 600; color: #374151; margin-bottom: 5px; }
        .ctc-input, .ctc-select, .ctc-textarea {
          width: 100%; box-sizing: border-box;
          background: #fafafa; border: 1px solid #e4e4e7;
          border-radius: 8px; padding: 10px 13px;
          font-size: 14px; color: #09090b;
          outline: none; transition: border-color .15s, box-shadow .15s, background .15s;
          font-family: inherit;
        }
        .ctc-input::placeholder, .ctc-textarea::placeholder { color: #c4c4cc; }
        .ctc-select { appearance: none; cursor: pointer; padding-right: 36px; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23a1a1aa' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 12px center; background-color: #fafafa; }
        .ctc-input:focus, .ctc-select:focus, .ctc-textarea:focus { border-color: ${AC}; box-shadow: 0 0 0 3px rgba(37,99,235,.1); background: #fff; }
        .ctc-textarea { resize: vertical; min-height: 110px; line-height: 1.6; }
        .ctc-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }

        /* Bouton submit — fond noir cohérent avec CTA primaire du site */
        .ctc-submit {
          width: 100%; padding: 14px;
          border-radius: 10px; background: #09090b; color: #fff;
          font-size: 15px; font-weight: 700; border: none; cursor: pointer;
          transition: background .15s, transform .1s, box-shadow .15s;
          margin-top: 6px; font-family: inherit; letter-spacing: -.01em;
        }
        .ctc-submit:hover { background: #18181b; transform: translateY(-1px); box-shadow: 0 6px 20px rgba(0,0,0,.2); }
        .ctc-submit:disabled { opacity: .55; cursor: not-allowed; transform: none; box-shadow: none; }

        /* Footer rassurance sous le bouton */
        .ctc-form-footer { display: flex; align-items: center; justify-content: center; gap: 10px; margin-top: 14px; flex-wrap: wrap; }
        .ctc-form-footer-item { font-size: 12px; color: #71717a; font-weight: 600; }
        .ctc-form-footer-sep { color: #d4d4d8; }

        .ctc-rgpd { font-size: 12px; color: #71717a; line-height: 1.6; margin-top: 14px; text-align: center; }
        .ctc-rgpd a { color: #71717a; text-decoration: underline; }
        .ctc-error-msg { font-size: 14px; color: #dc2626; margin-top: 10px; background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 10px 14px; }

        /* État success */
        .ctc-success { text-align: center; padding: 28px 0; }
        .ctc-success-check { width: 56px; height: 56px; border-radius: 50%; background: #eff6ff; border: 2px solid #dbeafe; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 16px; }
        .ctc-success-title { font-size: 19px; font-weight: 800; color: #09090b; margin-bottom: 10px; letter-spacing: -.02em; }
        .ctc-success-desc { font-size: 14px; color: #52525b; line-height: 1.75; }
        .ctc-success-desc a { color: ${AC}; text-decoration: underline; text-underline-offset: 3px; }

        /* ── Section FAQ ── */
        .ctc-faq-section { background: #fafafa; padding: 80px 24px; border-top: 1px solid #e4e4e7; }
        .ctc-faq-inner { max-width: 760px; margin: 0 auto; }
        .ctc-sh2 { font-size: clamp(22px, 2.8vw, 32px); font-weight: 800; letter-spacing: -.03em; color: #09090b; margin-bottom: 36px; line-height: 1.2; }
        .ctc-faq-list { border-top: 1px solid #e4e4e7; }
        .ctc-faq-item { border-bottom: 1px solid #e4e4e7; }
        .ctc-faq-btn { width: 100%; text-align: left; background: none; border: none; padding: 19px 0; cursor: pointer; display: flex; justify-content: space-between; align-items: center; gap: 16px; font-family: inherit; }
        .ctc-faq-q { font-size: 16px; font-weight: 700; color: #09090b; line-height: 1.4; }
        .ctc-faq-icon { width: 20px; height: 20px; flex-shrink: 0; color: #a1a1aa; transition: transform .2s; }
        .ctc-faq-icon.open { transform: rotate(45deg); }
        .ctc-faq-answer { font-size: 15px; color: #374151; line-height: 1.8; padding-bottom: 20px; }

        /* ── Section Infos pratiques ── */
        .ctc-info-section { background: #fff; padding: 80px 24px; border-top: 1px solid #e4e4e7; }
        .ctc-info-inner { max-width: 1100px; margin: 0 auto; }
        .ctc-info-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 40px; }
        .ctc-info-card { background: #fafafa; border: 1px solid #e4e4e7; border-radius: 16px; padding: 28px; }
        .ctc-info-icon { width: 40px; height: 40px; border-radius: 10px; background: #eff6ff; border: 1px solid #dbeafe; display: flex; align-items: center; justify-content: center; margin-bottom: 14px; }
        .ctc-info-label { font-size: 12px; font-weight: 800; color: #09090b; margin-bottom: 10px; text-transform: uppercase; letter-spacing: .08em; }
        .ctc-info-body { font-size: 15px; color: #374151; line-height: 1.8; }
        .ctc-info-body a { color: ${AC}; text-decoration: underline; text-underline-offset: 3px; }
        .ctc-info-body strong { font-weight: 700; color: #09090b; }

        /* ── Mobile ── */
        @media (max-width: 900px) {
          .ctc-hero { grid-template-columns: 1fr; gap: 40px; padding: 88px 16px 56px; }
          .ctc-subtitle { max-width: 100%; }

          .ctc-info-grid { grid-template-columns: 1fr; gap: 16px; }
          .ctc-faq-section, .ctc-info-section { padding: 56px 16px; }
        }
        @media (max-width: 580px) {
          .ctc-row { grid-template-columns: 1fr; gap: 0; }
          .ctc-form-card { padding: 24px 20px; border-radius: 16px; }
          .ctc-form-footer { flex-direction: column; gap: 4px; }
          .ctc-form-footer-sep { display: none; }
          .ctc-promise { padding: 12px; gap: 8px; }
          .ctc-promise-icon { width: 32px; height: 32px; border-radius: 8px; }
          .ctc-promise-title { font-size: 13px; }
          .ctc-promise-desc { display: none; }
        }
      `}</style>

      <Navbar />

      <main className="ctc-page">

        {/* ── Section 1 : Hero + Formulaire ── */}
        <div className="ctc-hero-wrap">
          <div className="ctc-bg-grid" aria-hidden="true" />

          <div className="ctc-hero">

            {/* ── Colonne gauche ── */}
            <div>
              <nav className="ctc-breadcrumb" aria-label="Fil d'Ariane">
                <a href="/">Accueil</a>
                <span>›</span>
                <span style={{ color: '#52525b', fontWeight: 600 }}>Contact</span>
              </nav>

              <h1 className="ctc-h1">Discutons de votre projet.</h1>

              <p className="ctc-subtitle">
                30 minutes pour comprendre vos enjeux et identifier les automatisations qui vont vraiment libérer votre équipe. Aucune obligation, aucun discours commercial.
              </p>

              <div className="ctc-promises">
                {promises.map((p) => {
                  const Icon = p.Svg;
                  return (
                    <div key={p.title} className="ctc-promise">
                      <div className="ctc-promise-icon">
                        <Icon />
                      </div>
                      <div>
                        <div className="ctc-promise-title">{p.title}</div>
                        <div className="ctc-promise-desc">{p.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ── Colonne droite : formulaire ── */}
            <div className="ctc-form-card">
              {formState === 'success' ? (
                <div className="ctc-success">
                  <div className="ctc-success-check">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M20 6L9 17l-5-5" stroke={AC} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="ctc-success-title">Demande bien reçue !</div>
                  <div className="ctc-success-desc">
                    Nous vous répondons sous{' '}
                    <strong style={{ color: '#09090b' }}>24 heures ouvrées</strong>{' '}
                    pour vous proposer un créneau de 30 minutes.<br /><br />
                    En attendant, consultez nos{' '}
                    <a href="/cas-clients/">cas clients</a>{' '}
                    ou nos <a href="/services/">services</a>.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="ctc-form-title">Votre projet en quelques lignes</div>
                  <div className="ctc-form-sub">On lit chaque message attentivement avant de vous rappeler.</div>

                  <div className="ctc-row">
                    <div className="ctc-field">
                      <label className="ctc-label" htmlFor="ctc-nom">Nom & Prénom *</label>
                      <input id="ctc-nom" name="nom" type="text" required className="ctc-input" placeholder="Jean Dupont" value={form.nom} onChange={handleChange} />
                    </div>
                    <div className="ctc-field">
                      <label className="ctc-label" htmlFor="ctc-entreprise">Entreprise *</label>
                      <input id="ctc-entreprise" name="entreprise" type="text" required className="ctc-input" placeholder="Acme SAS" value={form.entreprise} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="ctc-row">
                    <div className="ctc-field">
                      <label className="ctc-label" htmlFor="ctc-email">Email professionnel *</label>
                      <input id="ctc-email" name="email" type="email" required className="ctc-input" placeholder="jean@acme.fr" value={form.email} onChange={handleChange} />
                    </div>
                    <div className="ctc-field">
                      <label className="ctc-label" htmlFor="ctc-telephone">Téléphone</label>
                      <input id="ctc-telephone" name="telephone" type="tel" className="ctc-input" placeholder="+33 6 00 00 00 00" value={form.telephone} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="ctc-row">
                    <div className="ctc-field">
                      <label className="ctc-label" htmlFor="ctc-taille">Taille de l'équipe</label>
                      <select id="ctc-taille" name="taille" className="ctc-select" value={form.taille} onChange={handleChange}>
                        <option value="">Sélectionner…</option>
                        {tailleOptions.map(o => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                    <div className="ctc-field">
                      <label className="ctc-label" htmlFor="ctc-budget">Budget envisagé</label>
                      <select id="ctc-budget" name="budget" className="ctc-select" value={form.budget} onChange={handleChange}>
                        <option value="">Sélectionner…</option>
                        {budgetOptions.map(o => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="ctc-field">
                    <label className="ctc-label" htmlFor="ctc-description">Décrivez votre projet *</label>
                    <textarea
                      id="ctc-description" name="description" required className="ctc-textarea"
                      placeholder="Quelles tâches vous font perdre le plus de temps ? Quel outil utilisez-vous ? Quel résultat attendez-vous ?"
                      rows={5} value={form.description} onChange={handleChange}
                    />
                  </div>

                  <button type="submit" className="ctc-submit" disabled={formState === 'loading'}>
                    {formState === 'loading' ? 'Envoi en cours…' : 'Envoyer ma demande →'}
                  </button>

                  {formState === 'error' && (
                    <div className="ctc-error-msg">
                      Une erreur est survenue. Réessayez ou écrivez directement à{' '}
                      <a href="mailto:espoir@contact.althoce.com" style={{ color: '#dc2626' }}>espoir@contact.althoce.com</a>.
                    </div>
                  )}

                  <div className="ctc-form-footer">
                    <span className="ctc-form-footer-item">Sans engagement</span>
                    <span className="ctc-form-footer-sep">·</span>
                    <span className="ctc-form-footer-item">Réponse sous 24 h</span>
                    <span className="ctc-form-footer-sep">·</span>
                    <span className="ctc-form-footer-item">Données hébergées en UE</span>
                  </div>

                  <p className="ctc-rgpd">
                    En soumettant ce formulaire, j'accepte que mes données soient traitées par ALTHOCE CONSEIL conformément à la{' '}
                    <a href="/confidentialite/">politique de confidentialité</a>.
                    Données jamais revendues. Droits exercables à espoir@contact.althoce.com.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* ── Section 2 : FAQ ── */}
        <section className="ctc-faq-section">
          <div className="ctc-faq-inner">
            <h2 className="ctc-sh2">Quelques questions fréquentes<br />avant la prise de contact</h2>
            <div className="ctc-faq-list">
              {faqs.map((faq, i) => (
                <div key={i} className="ctc-faq-item">
                  <button
                    className="ctc-faq-btn"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span className="ctc-faq-q">{faq.q}</span>
                    <svg
                      className={`ctc-faq-icon${openFaq === i ? ' open' : ''}`}
                      viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor"
                    >
                      <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div className="ctc-faq-answer">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 3 : Infos pratiques ── */}
        <section id="infos-pratiques" className="ctc-info-section">
          <div className="ctc-info-inner">
            <h2 className="ctc-sh2">Infos pratiques</h2>
            <div className="ctc-info-grid">
              {infoCards.map((card) => {
                const Icon = card.Svg;
                return (
                  <div key={card.label} className="ctc-info-card">
                    <div className="ctc-info-icon"><Icon /></div>
                    <div className="ctc-info-label">{card.label}</div>
                    <div className="ctc-info-body">{card.body}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
