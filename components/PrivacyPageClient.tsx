'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';

const AC = '#2563eb';

const toc = [
  { id: 'responsable', label: 'Responsable de traitement' },
  { id: 'donnees', label: 'Données collectées et finalités' },
  { id: 'bases', label: 'Bases légales' },
  { id: 'durees', label: 'Durées de conservation' },
  { id: 'destinataires', label: 'Destinataires et sous-traitants' },
  { id: 'transferts', label: 'Transferts hors UE' },
  { id: 'cookies', label: 'Cookies et traceurs' },
  { id: 'droits', label: 'Vos droits' },
  { id: 'securite', label: 'Sécurité des données' },
  { id: 'mineurs', label: 'Mineurs' },
  { id: 'mises-a-jour', label: 'Mises à jour' },
  { id: 'contact', label: 'Contact et CNIL' },
];

export default function PrivacyPageClient() {
  const [tocOpen, setTocOpen] = useState(false);

  return (
    <>
      <style>{`
        .priv-layout { display: grid; grid-template-columns: 1fr 220px; gap: 48px; max-width: 1060px; margin: 0 auto; padding: 40px 24px 96px; align-items: start; }
        .priv-main { min-width: 0; }
        .priv-sidebar { position: sticky; top: 96px; }
        .priv-toc-desktop { background: #fafafa; border: 1px solid #e4e4e7; border-radius: 14px; padding: 20px; }
        .priv-toc-title { font-size: 11px; font-weight: 800; color: #a1a1aa; text-transform: uppercase; letter-spacing: .12em; margin-bottom: 14px; }
        .priv-toc-link { display: block; font-size: 13px; font-weight: 600; color: #8a8a95; text-decoration: none; padding: 5px 0; border-left: 2px solid #e4e4e7; padding-left: 10px; transition: color .15s, border-color .15s; line-height: 1.4; }
        .priv-toc-link:hover { color: ${AC}; border-left-color: ${AC}; }
        .priv-toc-mobile { border: 1px solid #e4e4e7; border-radius: 12px; overflow: hidden; margin-bottom: 40px; }
        .priv-toc-mobile-btn { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 14px 18px; background: #fafafa; border: none; cursor: pointer; font-size: 14px; font-weight: 700; color: #09090b; font-family: inherit; }
        .priv-toc-mobile-list { padding: 12px 18px 16px; display: flex; flex-direction: column; gap: 6px; }
        .priv-toc-mobile-link { font-size: 14px; color: ${AC}; text-decoration: none; font-weight: 600; }
        .priv-breadcrumb { display: flex; align-items: center; gap: 8px; font-size: 14px; color: #a1a1aa; margin-bottom: 40px; }
        .priv-breadcrumb a { color: #a1a1aa; text-decoration: none; transition: color .15s; }
        .priv-breadcrumb a:hover { color: #09090b; }
        .priv-h1 { font-size: clamp(30px, 4vw, 46px); font-weight: 800; letter-spacing: -.04em; color: #09090b; line-height: 1.1; margin-bottom: 10px; }
        .priv-date { font-size: 14px; color: #a1a1aa; margin-bottom: 40px; }
        .priv-intro { font-size: 16px; color: #8a8a95; line-height: 1.8; padding: 20px 24px; background: #fafafa; border: 1px solid #e4e4e7; border-radius: 12px; margin-bottom: 48px; }
        .priv-section { padding: 36px 0; border-top: 1px solid #e4e4e7; }
        .priv-section:last-child { border-bottom: 1px solid #e4e4e7; }
        .priv-h2 { font-size: 18px; font-weight: 800; color: #09090b; letter-spacing: -.02em; margin-bottom: 16px; display: flex; align-items: center; gap: 10px; }
        .priv-h2::before { content: ''; display: inline-block; width: 4px; height: 18px; background: ${AC}; border-radius: 2px; flex-shrink: 0; }
        .priv-h3 { font-size: 15px; font-weight: 800; color: #09090b; letter-spacing: -.01em; margin: 20px 0 10px; text-transform: uppercase; letter-spacing: .08em; }
        .priv-body p { font-size: 16px; color: #8a8a95; line-height: 1.8; margin-bottom: 14px; }
        .priv-body p:last-child { margin-bottom: 0; }
        .priv-body ul { list-style: none; padding: 0; margin: 8px 0 14px; }
        .priv-body ul li { font-size: 16px; color: #8a8a95; line-height: 1.75; padding: 4px 0 4px 20px; position: relative; }
        .priv-body ul li::before { content: '—'; position: absolute; left: 0; color: ${AC}; font-weight: 700; }
        .priv-body a { color: ${AC}; text-decoration: underline; text-underline-offset: 3px; transition: color .15s; }
        .priv-body a:hover { color: #1d4ed8; }
        .priv-body strong { font-weight: 700; color: #09090b; }
        .priv-body em { font-style: normal; color: #a1a1aa; }
        .priv-body table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 13.5px; }
        .priv-body table th { text-align: left; font-size: 11px; font-weight: 800; color: #a1a1aa; text-transform: uppercase; letter-spacing: .1em; padding: 8px 12px; background: #fafafa; border-bottom: 2px solid #e4e4e7; }
        .priv-body table td { padding: 10px 12px; border-bottom: 1px solid #f0f0f0; color: #8a8a95; vertical-align: top; line-height: 1.6; }
        .priv-body table td:first-child { font-weight: 700; color: #09090b; }
        .priv-body table tr:last-child td { border-bottom: none; }
        .priv-callout { background: #09090b; border-radius: 12px; padding: 20px 24px; margin: 20px 0; font-size: 15px; color: #d4d4d8; line-height: 1.75; }
        .priv-callout a { color: ${AC}; }
        .priv-footer-note { margin-top: 52px; padding: 20px 24px; background: #fafafa; border: 1px solid #e4e4e7; border-radius: 12px; font-size: 14px; color: #8a8a95; line-height: 1.7; }
        .priv-footer-note a { color: ${AC}; text-decoration: underline; }
        @media (max-width: 820px) {
          .priv-layout { grid-template-columns: 1fr; gap: 0; }
          .priv-sidebar { display: none; }
        }
        @media (max-width: 600px) {
          .priv-layout { padding: 20px 16px 72px; }
          .priv-body table { display: block; overflow-x: auto; }
        }
      `}</style>

      <Navbar />

      <main style={{ background: '#fff', paddingTop: 80 }}>
        <div className="priv-layout">

          {/* ── Contenu principal ── */}
          <div className="priv-main">

            {/* Breadcrumb */}
            <nav className="priv-breadcrumb" aria-label="Fil d'Ariane">
              <a href="/">Accueil</a>
              <span>›</span>
              <span style={{ color: '#09090b', fontWeight: 600 }}>Politique de confidentialité</span>
            </nav>

            {/* Header */}
            <h1 className="priv-h1">Politique de confidentialité</h1>
            <p className="priv-date">Dernière mise à jour&nbsp;: 16 mai 2026</p>

            {/* Sommaire mobile */}
            <div className="priv-toc-mobile" style={{ display: 'none' }} id="priv-toc-mobile-wrap">
              <button className="priv-toc-mobile-btn" onClick={() => setTocOpen(!tocOpen)} aria-expanded={tocOpen}>
                <span>Sommaire</span>
                <span style={{ transform: tocOpen ? 'rotate(180deg)' : 'none', transition: 'transform .2s', display: 'inline-block' }}>▾</span>
              </button>
              {tocOpen && (
                <div className="priv-toc-mobile-list">
                  {toc.map((t, i) => (
                    <a key={t.id} href={`#${t.id}`} className="priv-toc-mobile-link">{i + 1}. {t.label}</a>
                  ))}
                </div>
              )}
            </div>

            {/* Intro */}
            <div className="priv-intro">
              ALTHOCE CONSEIL accorde une importance particulière à la protection de vos données personnelles. La présente politique de confidentialité a pour objet de vous informer, en toute transparence, sur les traitements de données à caractère personnel que nous opérons via le site{' '}
              <a href="https://althoce.com" style={{ color: AC }}>https://althoce.com</a>{' '}
              (le «&nbsp;Site&nbsp;»), conformément au Règlement Général sur la Protection des Données (RGPD) UE 2016/679 et à la loi Informatique et Libertés du 6 janvier 1978 modifiée.
              <br /><br />
              Cette politique s'applique à toute personne consultant le Site, remplissant un formulaire, sollicitant un échange ou souscrivant à nos prestations. Pour toute question&nbsp;:{' '}
              <a href="mailto:espoir@contact.althoce.com" style={{ color: AC }}>espoir@contact.althoce.com</a>.
            </div>

            {/* Section 1 — Responsable */}
            <section id="responsable" className="priv-section">
              <h2 className="priv-h2"><span style={{ fontSize: 12, fontWeight: 800, color: AC, textTransform: 'uppercase', letterSpacing: '.1em', marginRight: 2 }}>01</span>Responsable de traitement</h2>
              <div className="priv-body">
                <p>Le responsable de traitement de vos données personnelles est&nbsp;:</p>
                <p><strong>ALTHOCE CONSEIL</strong>, société par actions simplifiée (SAS)<br />
                Siège social&nbsp;: 5 rue Fénelon, 33000 Bordeaux, France<br />
                SIREN&nbsp;: 999 696 404<br />
                Email&nbsp;: <a href="mailto:espoir@contact.althoce.com">espoir@contact.althoce.com</a></p>
                <p>ALTHOCE CONSEIL n'a pas désigné de Délégué à la Protection des Données (DPO) obligatoire, compte tenu de son effectif et de l'absence de traitement à grande échelle de données sensibles. Les demandes RGPD sont traitées à l'adresse&nbsp;: <a href="mailto:espoir@contact.althoce.com">espoir@contact.althoce.com</a>.</p>
              </div>
            </section>

            {/* Section 2 — Données collectées */}
            <section id="donnees" className="priv-section">
              <h2 className="priv-h2"><span style={{ fontSize: 12, fontWeight: 800, color: AC, textTransform: 'uppercase', letterSpacing: '.1em', marginRight: 2 }}>02</span>Données collectées et finalités</h2>
              <div className="priv-body">
                <p>Nous collectons uniquement les données strictement nécessaires aux finalités décrites ci-dessous. Aucune donnée n'est collectée à votre insu (principe de minimisation).</p>
                <table>
                  <thead>
                    <tr><th>Traitement</th><th>Données collectées</th><th>Finalité</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Formulaire de contact</td><td>Nom, prénom, email pro, téléphone (optionnel), société, sujet</td><td>Répondre à votre demande, qualifier votre besoin, organiser les 30 min offertes.</td></tr>
                    <tr><td>Prise de rendez-vous</td><td>Nom, prénom, email, créneau, sujet</td><td>Programmer le rendez-vous, envoyer la confirmation et le lien visio.</td></tr>
                    <tr><td>Newsletter (si applicable)</td><td>Email</td><td>Publications éditoriales. Désabonnement à chaque envoi.</td></tr>
                    <tr><td>Cookies analytiques</td><td>IP anonymisée, navigateur, pages, durée</td><td>Mesurer l'audience, améliorer l'expérience. Soumis à consentement.</td></tr>
                    <tr><td>Cookies fonctionnels</td><td>Préférences, état de session</td><td>Faire fonctionner le Site. Pas de consentement requis.</td></tr>
                    <tr><td>Logs serveur</td><td>IP, horodatage, requête HTTP, user-agent</td><td>Sécurité du Site, détection d'intrusion, maintenance technique.</td></tr>
                  </tbody>
                </table>
                <p>Nous <strong>ne collectons jamais</strong> de données sensibles au sens de l'article 9 du RGPD (origine ethnique, opinions politiques, convictions religieuses, données de santé, etc.), sauf accord explicite dans le cadre d'un contrat de prestation signé.</p>
              </div>
            </section>

            {/* Section 3 — Bases légales */}
            <section id="bases" className="priv-section">
              <h2 className="priv-h2"><span style={{ fontSize: 12, fontWeight: 800, color: AC, textTransform: 'uppercase', letterSpacing: '.1em', marginRight: 2 }}>03</span>Bases légales des traitements</h2>
              <div className="priv-body">
                <p>Conformément à l'article 6 du RGPD, chaque traitement repose sur une base légale spécifique&nbsp;:</p>
                <ul>
                  <li><strong>Consentement (art. 6.1.a)</strong>&nbsp;: newsletter, cookies analytiques et publicitaires, tout traitement optionnel. Retrait du consentement possible à tout moment.</li>
                  <li><strong>Exécution d'un contrat (art. 6.1.b)</strong>&nbsp;: gestion des devis, prise de rendez-vous, exécution des prestations, facturation, support.</li>
                  <li><strong>Obligation légale (art. 6.1.c)</strong>&nbsp;: conservation des factures (10 ans), comptabilité, obligations fiscales, logs de connexion (12 mois max).</li>
                  <li><strong>Intérêt légitime (art. 6.1.f)</strong>&nbsp;: sécurité du Site, prévention des fraudes, prospection commerciale B2B encadrée (coordonnées professionnelles, droit d'opposition à chaque envoi), amélioration de nos services.</li>
                </ul>
              </div>
            </section>

            {/* Section 4 — Durées */}
            <section id="durees" className="priv-section">
              <h2 className="priv-h2"><span style={{ fontSize: 12, fontWeight: 800, color: AC, textTransform: 'uppercase', letterSpacing: '.1em', marginRight: 2 }}>04</span>Durées de conservation</h2>
              <div className="priv-body">
                <table>
                  <thead>
                    <tr><th>Type de données</th><th>Durée</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Formulaire de contact (prospect non converti)</td><td>3 ans à compter du dernier contact</td></tr>
                    <tr><td>Formulaire de contact (client)</td><td>Durée du contrat + 5 ans, puis archivage légal</td></tr>
                    <tr><td>Facturation et comptabilité</td><td>10 ans (obligation légale, art. L.123-22 C.com.)</td></tr>
                    <tr><td>Newsletter</td><td>Jusqu'au désabonnement, puis suppression sous 30 jours</td></tr>
                    <tr><td>Logs de connexion serveur</td><td>12 mois maximum (recommandation CNIL)</td></tr>
                    <tr><td>Cookies analytiques</td><td>13 mois maximum (recommandation CNIL)</td></tr>
                    <tr><td>Cookies fonctionnels (session)</td><td>Durée de la session ou 6 mois maximum</td></tr>
                    <tr><td>Candidatures spontanées</td><td>2 ans à compter du dernier échange</td></tr>
                  </tbody>
                </table>
                <p>Au terme de la durée de conservation, vos données sont <strong>supprimées</strong> ou <strong>anonymisées de manière irréversible</strong>.</p>
              </div>
            </section>

            {/* Section 5 — Destinataires */}
            <section id="destinataires" className="priv-section">
              <h2 className="priv-h2"><span style={{ fontSize: 12, fontWeight: 800, color: AC, textTransform: 'uppercase', letterSpacing: '.1em', marginRight: 2 }}>05</span>Destinataires et sous-traitants</h2>
              <div className="priv-body">
                <p>Vos données sont <strong>strictement confidentielles</strong>. Elles ne sont jamais vendues, ni partagées avec des tiers à des fins commerciales. Elles sont accessibles uniquement à&nbsp;:</p>
                <ul>
                  <li><strong>Le personnel autorisé d'ALTHOCE CONSEIL</strong>, dans la stricte limite de leurs fonctions.</li>
                  <li><strong>Vercel Inc.</strong> — hébergement du Site (États-Unis, voir sec. 06 ci-dessous).</li>
                  <li><strong>Cal.com</strong> — outil de prise de rendez-vous. DPA disponible sur demande.</li>
                  <li><strong>Les autorités administratives ou judiciaires</strong> sur réquisition légale.</li>
                </ul>
                <p>Chaque sous-traitant est sélectionné sur des critères de conformité RGPD (DPA signé, garanties techniques appropriées).</p>
              </div>
            </section>

            {/* Section 6 — Transferts hors UE */}
            <section id="transferts" className="priv-section">
              <h2 className="priv-h2"><span style={{ fontSize: 12, fontWeight: 800, color: AC, textTransform: 'uppercase', letterSpacing: '.1em', marginRight: 2 }}>06</span>Transferts hors Union européenne</h2>
              <div className="priv-body">
                <h3 className="priv-h3">6.1 — Le site althoce.com (périmètre Vercel)</h3>
                <p>Le Site est hébergé par <strong>Vercel Inc.</strong> (États-Unis). Certaines données techniques (logs, données de session, formulaires de contact) peuvent être traitées sur des serveurs situés hors Union européenne.</p>
                <p>Encadrement juridique de ces transferts&nbsp;:</p>
                <ul>
                  <li>Vercel Inc. est certifié au titre du <strong>Data Privacy Framework UE-États-Unis (DPF)</strong>, cadre adopté par décision d'adéquation de la Commission européenne du 10 juillet 2023 (décision (UE) 2023/1795).</li>
                  <li>Les <strong>clauses contractuelles types (CCT)</strong> de la Commission européenne sont incluses dans notre accord avec Vercel.</li>
                  <li>Vercel met en œuvre des mesures de sécurité complémentaires (chiffrement en transit et au repos, contrôle d'accès, journalisation).</li>
                </ul>
                <h3 className="priv-h3">6.2 — Déploiements IA pour nos clients sous contrat (périmètre UE)</h3>
                <p>Les systèmes IA et agents que nous déployons pour le compte de nos clients sont hébergés <strong>en Union européenne par défaut</strong>&nbsp;:</p>
                <ul>
                  <li><strong>Modèles IA</strong>&nbsp;: Mistral hébergé en France via OVH (Roubaix, Strasbourg, Gravelines) et Scaleway (Paris, Amsterdam).</li>
                  <li><strong>Infrastructure applicative</strong>&nbsp;: OVHcloud, Scaleway ou hébergeur UE équivalent.</li>
                  <li><strong>Bases de données</strong>&nbsp;: hébergement UE exclusif, sauf accord client documenté.</li>
                </ul>
                <div className="priv-callout">
                  Aucune donnée métier de nos clients (emails, contrats, factures, CV, transcriptions) ne transite par Vercel ni n'est stockée sur des infrastructures américaines sans accord contractuel explicite et anonymisation préalable. C'est notre <a href="/#souverainete">engagement souveraineté</a>, opérationnel et vérifiable.
                </div>
              </div>
            </section>

            {/* Section 7 — Cookies */}
            <section id="cookies" className="priv-section">
              <h2 className="priv-h2"><span style={{ fontSize: 12, fontWeight: 800, color: AC, textTransform: 'uppercase', letterSpacing: '.1em', marginRight: 2 }}>07</span>Cookies et traceurs</h2>
              <div className="priv-body">
                <p>Lors de votre navigation sur le Site, nous utilisons différents types de cookies, soumis à des règles distinctes selon leur finalité.</p>
                <h3 className="priv-h3">7.1 — Cookies strictement nécessaires (pas de consentement requis)</h3>
                <p>Indispensables au fonctionnement du Site. Ne stockent aucune information personnelle à des fins de tracking. Exemples&nbsp;: maintien de session, fonctionnement des formulaires, sécurité anti-CSRF. <strong>Durée</strong>&nbsp;: durée de session ou 6 mois maximum.</p>
                <h3 className="priv-h3">7.2 — Cookies analytiques (consentement requis)</h3>
                <p>Mesurent l'audience et les parcours utilisateurs. Ne sont déposés qu'après votre consentement explicite via la bannière cookies. <strong>Durée</strong>&nbsp;: 13 mois maximum (recommandation CNIL). Données traitées&nbsp;: IP anonymisée, pages consultées, durée de visite, type de navigateur.</p>
                <h3 className="priv-h3">7.3 — Cookies de publicité ciblée (consentement requis)</h3>
                <p>ALTHOCE CONSEIL <strong>n'utilise pas</strong> de cookies publicitaires tiers (Google Ads, Meta Pixel, LinkedIn Insight Tag, etc.) sur le Site, sauf indication contraire de la bannière cookies à laquelle vous donnez votre consentement explicite.</p>
                <h3 className="priv-h3">7.4 — Gestion de votre consentement</h3>
                <p>Vous pouvez à tout moment modifier vos préférences cookies via la bannière cookies (accessible en bas de chaque page) ou via les paramètres de votre navigateur. Refuser les cookies analytiques n'altère pas le fonctionnement du Site.</p>
              </div>
            </section>

            {/* Section 8 — Vos droits */}
            <section id="droits" className="priv-section">
              <h2 className="priv-h2"><span style={{ fontSize: 12, fontWeight: 800, color: AC, textTransform: 'uppercase', letterSpacing: '.1em', marginRight: 2 }}>08</span>Vos droits sur vos données personnelles</h2>
              <div className="priv-body">
                <p>Conformément au RGPD, vous disposez des droits suivants&nbsp;:</p>
                <ul>
                  <li><strong>Droit d'accès (art. 15)</strong>&nbsp;: obtenir la confirmation que vos données sont traitées et en recevoir une copie.</li>
                  <li><strong>Droit de rectification (art. 16)</strong>&nbsp;: faire corriger des données inexactes ou incomplètes.</li>
                  <li><strong>Droit à l'effacement (art. 17)</strong>&nbsp;: demander la suppression de vos données dans les cas prévus par le RGPD.</li>
                  <li><strong>Droit à la limitation (art. 18)</strong>&nbsp;: demander le gel temporaire du traitement.</li>
                  <li><strong>Droit à la portabilité (art. 20)</strong>&nbsp;: recevoir vos données dans un format structuré et lisible par machine.</li>
                  <li><strong>Droit d'opposition (art. 21)</strong>&nbsp;: vous opposer au traitement, notamment pour la prospection commerciale.</li>
                  <li><strong>Retrait du consentement</strong>&nbsp;: à tout moment, sans affecter la licéité du traitement antérieur.</li>
                  <li><strong>Directives post-mortem</strong>&nbsp;: transmettre vos directives concernant le sort de vos données après votre décès (art. 85 loi IL).</li>
                </ul>
                <h3 className="priv-h3">Comment exercer vos droits ?</h3>
                <p>Adressez votre demande par email à <a href="mailto:espoir@contact.althoce.com">espoir@contact.althoce.com</a>, en précisant l'objet de votre demande. Un justificatif d'identité peut être demandé en cas de doute légitime (art. 12 RGPD). Nous nous engageons à vous répondre dans un délai d'<strong>un mois</strong> (prolongé de deux mois en cas de demande complexe). L'exercice de ces droits est <strong>gratuit</strong>, sauf demande manifestement infondée ou excessive.</p>
              </div>
            </section>

            {/* Section 9 — Sécurité */}
            <section id="securite" className="priv-section">
              <h2 className="priv-h2"><span style={{ fontSize: 12, fontWeight: 800, color: AC, textTransform: 'uppercase', letterSpacing: '.1em', marginRight: 2 }}>09</span>Sécurité des données</h2>
              <div className="priv-body">
                <p>ALTHOCE CONSEIL met en œuvre des mesures techniques et organisationnelles appropriées&nbsp;:</p>
                <ul>
                  <li>Chiffrement en transit (HTTPS / TLS 1.3 sur l'ensemble du Site).</li>
                  <li>Chiffrement au repos sur les bases de données et sauvegardes.</li>
                  <li>Contrôle d'accès strict (principe du moindre privilège, authentification à deux facteurs).</li>
                  <li>Journalisation des accès aux données sensibles.</li>
                  <li>Sauvegardes régulières et plan de continuité documenté.</li>
                  <li>Mises à jour de sécurité régulières sur l'ensemble des outils.</li>
                  <li>Formation continue de l'équipe à la cybersécurité et à la conformité RGPD.</li>
                </ul>
                <p>En cas de violation de données susceptible d'engendrer un risque pour vos droits et libertés, nous notifierons la CNIL dans les <strong>72 heures</strong> (art. 33 RGPD). Si la violation présente un risque élevé, vous en serez informé individuellement dans les meilleurs délais.</p>
              </div>
            </section>

            {/* Section 10 — Mineurs */}
            <section id="mineurs" className="priv-section">
              <h2 className="priv-h2"><span style={{ fontSize: 12, fontWeight: 800, color: AC, textTransform: 'uppercase', letterSpacing: '.1em', marginRight: 2 }}>10</span>Données concernant les mineurs</h2>
              <div className="priv-body">
                <p>Le Site et nos services s'adressent exclusivement à un public professionnel adulte (B2B). Nous ne collectons pas sciemment de données personnelles concernant des mineurs de moins de 15 ans (seuil de consentement numérique en France, art. 7-1 loi Informatique et Libertés). Si nous apprenons qu'un mineur de moins de 15 ans a fourni des données personnelles sans le consentement parental requis, nous supprimerons ces données dans les meilleurs délais.</p>
              </div>
            </section>

            {/* Section 11 — Mises à jour */}
            <section id="mises-a-jour" className="priv-section">
              <h2 className="priv-h2"><span style={{ fontSize: 12, fontWeight: 800, color: AC, textTransform: 'uppercase', letterSpacing: '.1em', marginRight: 2 }}>11</span>Mises à jour de la présente politique</h2>
              <div className="priv-body">
                <p>La présente politique peut être mise à jour à tout moment pour refléter des évolutions législatives, réglementaires, technologiques ou organisationnelles. La date de dernière mise à jour est indiquée en tête de cette page.</p>
                <p>En cas de modification substantielle (nouvelle finalité, nouveau sous-traitant impliquant un transfert hors UE, modification des durées de conservation), nous vous en informerons par une notification claire et préalable. Pour les modifications mineures, la simple mise à jour de la date vaut information.</p>
              </div>
            </section>

            {/* Section 12 — Contact et CNIL */}
            <section id="contact" className="priv-section">
              <h2 className="priv-h2"><span style={{ fontSize: 12, fontWeight: 800, color: AC, textTransform: 'uppercase', letterSpacing: '.1em', marginRight: 2 }}>12</span>Contact et droit de réclamation auprès de la CNIL</h2>
              <div className="priv-body">
                <p>Pour toute question relative à la présente politique ou à un traitement spécifique de vos données personnelles&nbsp;:</p>
                <p><strong>Email</strong>&nbsp;: <a href="mailto:espoir@contact.althoce.com">espoir@contact.althoce.com</a><br />
                <strong>Adresse</strong>&nbsp;: ALTHOCE CONSEIL — Service Données personnelles, 5 rue Fénelon, 33000 Bordeaux, France</p>
                <h3 className="priv-h3">Droit de réclamation</h3>
                <p>Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la <strong>Commission Nationale de l'Informatique et des Libertés (CNIL)</strong>&nbsp;:</p>
                <p>3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07<br />
                Téléphone&nbsp;: 01 53 73 22 22<br />
                Site web&nbsp;: <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a></p>
              </div>
            </section>

            {/* Footer note */}
            <div className="priv-footer-note">
              Voir également nos <a href="/mentions-legales/">Mentions légales</a> ou nous contacter via la page <a href="/contact/">Contact</a>.
            </div>

          </div>

          {/* ── Sidebar TOC (desktop) ── */}
          <aside className="priv-sidebar" aria-label="Sommaire">
            <div className="priv-toc-desktop">
              <div className="priv-toc-title">Sommaire</div>
              {toc.map((t, i) => (
                <a key={t.id} href={`#${t.id}`} className="priv-toc-link">
                  {String(i + 1).padStart(2, '0')} {t.label}
                </a>
              ))}
            </div>
          </aside>

        </div>
      </main>
    </>
  );
}
