'use client';

import React from 'react';
import Navbar from '@/components/Navbar';

const AC = '#2563eb';

const sections = [
  {
    id: 'editeur',
    title: 'Éditeur',
    content: (
      <>
        <p>Le Site est édité par <strong>ALTHOCE CONSEIL</strong>, société par actions simplifiée (SAS), dont le siège social est situé au 5 rue Fénelon, 33000 Bordeaux, France.</p>
        <table>
          <tbody>
            <tr><td>Forme juridique</td><td>Société par Actions Simplifiée (SAS)</td></tr>
            <tr><td>SIREN</td><td>999 696 404</td></tr>
            <tr><td>RCS</td><td>Bordeaux</td></tr>
<tr><td>Adresse postale</td><td>5 rue Fénelon, 33000 Bordeaux, France</td></tr>
            <tr><td>Email</td><td><a href="mailto:espoir@contact.althoce.com">espoir@contact.althoce.com</a></td></tr>
          </tbody>
        </table>
      </>
    ),
  },
  {
    id: 'direction',
    title: 'Direction de la publication',
    content: (
      <>
        <p>Le directeur de la publication du Site est <strong>Mwami Espoir</strong>, en sa qualité de président d'ALTHOCE CONSEIL.</p>
        <p>Pour toute demande relative au contenu éditorial du Site, vous pouvez nous contacter à l'adresse suivante&nbsp;: <a href="mailto:espoir@contact.althoce.com">espoir@contact.althoce.com</a>.</p>
      </>
    ),
  },
  {
    id: 'hebergeur',
    title: 'Hébergeur',
    content: (
      <>
        <p>Le Site est hébergé par <strong>Vercel Inc.</strong>, société de droit américain.</p>
        <table>
          <tbody>
            <tr><td>Adresse</td><td>440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</td></tr>
            <tr><td>Site web</td><td><a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a></td></tr>
          </tbody>
        </table>
        <p>Conformément à l'article 6-III-1 de la LCEN, l'utilisateur est informé que les données techniques nécessaires au fonctionnement du Site sont hébergées par un prestataire situé hors Union européenne. Les modalités de protection de ces données sont détaillées dans notre <a href="/confidentialite/">Politique de confidentialité</a>.</p>
      </>
    ),
  },
  {
    id: 'propriete',
    title: 'Propriété intellectuelle',
    content: (
      <>
        <p>L'ensemble du Site, incluant sans limitation la structure générale, les textes, les images, les graphismes, les logos, les sons, les vidéos, les icônes, les bases de données, les schémas et le code source, relève de la législation française et internationale sur le droit d'auteur, le droit des marques et la propriété intellectuelle. Tous les droits de reproduction sont réservés à ALTHOCE CONSEIL.</p>
        <p>Toute reproduction, représentation, modification, publication, adaptation, totale ou partielle, de tout ou partie des éléments du Site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable d'ALTHOCE CONSEIL, à l'exception des usages strictement réservés à la copie privée et aux courtes citations dans un cadre autorisé par la loi.</p>
        <p>Toute exploitation non autorisée du Site ou de l'un quelconque des éléments qu'il contient est susceptible de constituer une contrefaçon au sens des articles L.335-2 et suivants du Code de la propriété intellectuelle et d'engager la responsabilité civile et pénale de son auteur.</p>
        <p>La marque <strong>Althoce</strong> est une marque déposée ou en cours de dépôt. Toute reproduction, imitation ou usage non autorisé est interdit.</p>
      </>
    ),
  },
  {
    id: 'responsabilite',
    title: 'Responsabilité',
    content: (
      <>
        <p>ALTHOCE CONSEIL s'efforce d'assurer, au mieux de ses possibilités, l'exactitude et la mise à jour des informations diffusées sur le Site, dont elle se réserve le droit de corriger, à tout moment et sans préavis, le contenu.</p>
        <p>Toutefois, ALTHOCE CONSEIL ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à la disposition de l'utilisateur sur le Site. En conséquence, ALTHOCE CONSEIL décline toute responsabilité&nbsp;:</p>
        <ul>
          <li>pour toute interruption, indisponibilité ou défaillance du Site,</li>
          <li>pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le Site,</li>
          <li>pour tous dommages résultant d'une intrusion frauduleuse d'un tiers ayant entraîné une modification des informations mises à la disposition sur le Site,</li>
          <li>pour tout dommage direct ou indirect, quelles qu'en soient les causes, origines, natures ou conséquences, provoqué à raison de l'accès de quiconque au Site ou de l'impossibilité d'y accéder.</li>
        </ul>
        <p>Les chiffres, statistiques, cas clients et résultats publiés sur le Site sont indicatifs, fondés sur l'expérience d'ALTHOCE CONSEIL avec ses clients à la date de publication, et ne constituent pas une garantie de résultats équivalents pour de nouveaux projets.</p>
      </>
    ),
  },
  {
    id: 'liens',
    title: 'Liens hypertextes',
    content: (
      <p>Le Site peut contenir des liens hypertextes vers des sites tiers. ALTHOCE CONSEIL n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu, leurs pratiques de protection des données personnelles ou leurs conditions d'utilisation. La création d'un lien vers le Site est libre, à condition que ce lien ne soit pas contraire aux intérêts d'ALTHOCE CONSEIL et n'induise pas en erreur sur la source ou la nature du contenu lié. ALTHOCE CONSEIL se réserve le droit de demander la suppression de tout lien jugé contraire à ses intérêts.</p>
    ),
  },
  {
    id: 'donnees',
    title: 'Données personnelles et cookies',
    content: (
      <>
        <p>Le traitement des données personnelles des utilisateurs du Site, ainsi que l'utilisation des cookies et traceurs, sont décrits en détail dans notre <a href="/confidentialite/">Politique de confidentialité</a>, conformément au Règlement Général sur la Protection des Données (RGPD) UE 2016/679 et à la loi française Informatique et Libertés du 6 janvier 1978 modifiée.</p>
        <p>Conformément à ces textes, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, de portabilité et d'opposition concernant vos données personnelles. Pour exercer ces droits, contactez-nous à&nbsp;: <a href="mailto:espoir@contact.althoce.com">espoir@contact.althoce.com</a>.</p>
      </>
    ),
  },
  {
    id: 'droit',
    title: 'Droit applicable et juridiction compétente',
    content: (
      <p>Les présentes mentions légales sont soumises au droit français. En cas de litige relatif à leur interprétation ou à leur exécution, et à défaut de résolution amiable, le tribunal compétent sera le <strong>Tribunal judiciaire de Bordeaux</strong>, sauf disposition d'ordre public contraire.</p>
    ),
  },
  {
    id: 'credits',
    title: 'Crédits',
    content: (
      <>
        <p>Conception, rédaction et développement du Site&nbsp;: équipe ALTHOCE CONSEIL.<br />
        Hébergement&nbsp;: Vercel Inc.<br />
        Modèles d'intelligence artificielle&nbsp;: Mistral AI (hébergé en France via OVH et Scaleway).</p>
        <p>Pour toute question relative au Site, contactez-nous à&nbsp;: <a href="mailto:espoir@contact.althoce.com">espoir@contact.althoce.com</a>.</p>
      </>
    ),
  },
];

export default function LegalPageClient() {
  return (
    <>
      <style>{`
        .legal-wrap { max-width: 760px; margin: 0 auto; padding: 40px 24px 96px; }
        .legal-breadcrumb { display: flex; align-items: center; gap: 8px; font-size: 14px; color: #a1a1aa; margin-bottom: 48px; }
        .legal-breadcrumb a { color: #a1a1aa; text-decoration: none; transition: color .15s; }
        .legal-breadcrumb a:hover { color: #09090b; }
        .legal-h1 { font-size: clamp(32px, 4vw, 48px); font-weight: 800; letter-spacing: -.04em; color: #09090b; line-height: 1.1; margin-bottom: 10px; }
        .legal-date { font-size: 14px; color: #a1a1aa; margin-bottom: 52px; }
        .legal-intro { font-size: 16px; color: #8a8a95; line-height: 1.8; padding: 20px 24px; background: #fafafa; border: 1px solid #e4e4e7; border-radius: 12px; margin-bottom: 48px; }
        .legal-section { padding: 36px 0; border-top: 1px solid #e4e4e7; }
        .legal-section:last-child { border-bottom: 1px solid #e4e4e7; }
        .legal-h2 { font-size: 18px; font-weight: 800; color: #09090b; letter-spacing: -.02em; margin-bottom: 16px; display: flex; align-items: center; gap: 10px; }
        .legal-h2::before { content: ''; display: inline-block; width: 4px; height: 18px; background: ${AC}; border-radius: 2px; flex-shrink: 0; }
        .legal-body p { font-size: 16px; color: #8a8a95; line-height: 1.8; margin-bottom: 14px; }
        .legal-body p:last-child { margin-bottom: 0; }
        .legal-body ul { list-style: none; padding: 0; margin: 12px 0; }
        .legal-body ul li { font-size: 16px; color: #8a8a95; line-height: 1.75; padding: 5px 0 5px 20px; position: relative; }
        .legal-body ul li::before { content: '—'; position: absolute; left: 0; color: ${AC}; font-weight: 700; }
        .legal-body a { color: ${AC}; text-decoration: underline; text-underline-offset: 3px; transition: color .15s; }
        .legal-body a:hover { color: #1d4ed8; }
        .legal-body strong { font-weight: 700; color: #09090b; }
        .legal-body em { font-style: normal; color: #a1a1aa; }
        .legal-body table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 15px; }
        .legal-body table td { padding: 10px 14px; border-bottom: 1px solid #f0f0f0; color: #8a8a95; vertical-align: top; }
        .legal-body table td:first-child { font-weight: 700; color: #09090b; white-space: nowrap; width: 220px; }
        .legal-body table tr:last-child td { border-bottom: none; }
        .legal-footer-note { margin-top: 52px; padding: 20px 24px; background: #09090b; border-radius: 12px; font-size: 14px; color: #8a8a95; line-height: 1.7; }
        .legal-footer-note a { color: ${AC}; text-decoration: underline; }
        @media (max-width: 600px) {
          .legal-wrap { padding: 24px 16px 72px; }
          .legal-table td:first-child { width: auto; white-space: normal; }
          .legal-table { display: block; overflow-x: auto; }
        }
      `}</style>

      <Navbar />

      <main style={{ background: '#fff', paddingTop: 80 }}>
        <div className="legal-wrap">

          {/* Breadcrumb */}
          <nav className="legal-breadcrumb" aria-label="Fil d'Ariane">
            <a href="/">Accueil</a>
            <span>›</span>
            <span style={{ color: '#09090b', fontWeight: 600 }}>Mentions légales</span>
          </nav>

          {/* Header */}
          <h1 className="legal-h1">Mentions légales</h1>
          <p className="legal-date">Dernière mise à jour&nbsp;: 16 mai 2026</p>

          {/* Intro */}
          <div className="legal-intro">
            Les présentes mentions légales définissent les conditions d'utilisation du site internet accessible à l'adresse{' '}
            <a href="https://althoce.com" style={{ color: AC }}>https://althoce.com</a>{' '}
            (le «&nbsp;Site&nbsp;»). En consultant le Site, l'utilisateur reconnaît avoir pris connaissance des présentes mentions légales et s'engage à les respecter, conformément à l'article 6 de la loi n°&nbsp;2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN).
          </div>

          {/* Sections */}
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} className="legal-section">
              <h2 className="legal-h2">
                <span style={{ fontSize: 12, fontWeight: 800, color: AC, textTransform: 'uppercase', letterSpacing: '.1em', marginRight: 2 }}>{String(i + 1).padStart(2, '0')}</span>
                {s.title}
              </h2>
              <div className="legal-body">{s.content}</div>
            </section>
          ))}

          {/* Footer note */}
          <div className="legal-footer-note">
            <span style={{ color: '#52525b' }}>Vous pouvez également consulter notre{' '}</span>
            <a href="/confidentialite/">Politique de confidentialité</a>
            <span style={{ color: '#52525b' }}>{' '}ou nous contacter directement via la page{' '}</span>
            <a href="/contact/">Contact</a>
            <span style={{ color: '#52525b' }}>.</span>
          </div>

        </div>
      </main>
    </>
  );
}
