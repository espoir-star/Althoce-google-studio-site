/**
 * Identité d'Althoce : une seule définition, reprise par les données structurées (JSON-LD) de toutes les pages,
 * la page À propos, le pied de page et les mentions légales. Les informations légales viennent du registre
 * (annuaire-entreprises.data.gouv.fr, RNE) et le numéro de TVA de VIES, vérifiés le 20 novembre 2026.
 * Ne pas ajouter de profil ou de chiffre qui ne soit pas vérifiable.
 */
import { brand, contact } from './brand-content';

const SITE = 'https://althoce.com';

/** Données du registre : ALTHOCE CONSEIL, SAS immatriculée le 12 janvier 2026. */
export const legal = {
  name: 'ALTHOCE CONSEIL',
  form: 'Société par actions simplifiée (SAS)',
  siren: '999 696 404',
  siret: '999 696 404 00014',
  vat: 'FR59999696404',
  rcs: 'Bordeaux',
  registeredOn: '2026-01-12',
  registeredLabel: 'janvier 2026',
  registeredDateLabel: '12 janvier 2026',
  /** Activité exercée par le fondateur sous le statut de micro-entreprise avant la création de la SAS. */
  activitySince: '2024',
  street: contact.street,
  postalCode: '33000',
  city: 'Bordeaux',
  director: 'Espoir Mwami',
  directoryUrl: 'https://annuaire-entreprises.data.gouv.fr/entreprise/999696404',
} as const;

export const founder = {
  name: 'Espoir Mwami',
  jobTitle: 'Fondateur',
  linkedin: 'https://www.linkedin.com/in/espoir-mwami/',
  photo: '/images/espoir-mwami.jpg',
} as const;

/**
 * Profils officiels, tels que fournis par Althoce (paramètres de suivi retirés). Affichés dans le pied de page
 * et repris dans `sameAs` : le site et le JSON-LD utilisent exactement les mêmes adresses.
 */
export const socialProfiles = [
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/althoce/' },
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/althoceconseil/' },
  { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/share/14yrgLKv7rb/' },
  { id: 'tiktok', label: 'TikTok', href: 'https://www.tiktok.com/@althoce' },
  { id: 'google', label: 'Google', href: 'https://share.google/2orAPa0f74Bw5LkvP' },
] as const;
export type SocialProfileId = (typeof socialProfiles)[number]['id'];

/** Annuaires où Althoce est référencé. Repris dans `sameAs`, sans icône dans le pied de page. */
export const directoryProfiles = [
  'https://www.francenum.gouv.fr/activateurs/althoce-conseil',
  'https://www.sortlist.fr/agency/althoce',
] as const;

export const logoUrl = `${SITE}/logo.png`;

/** Nœud Organization à placer dans un `@graph`. Même `@id` partout : les moteurs fusionnent les occurrences. */
export const organizationNode = {
  '@type': 'Organization',
  '@id': `${SITE}/#organization`,
  name: 'Althoce',
  legalName: legal.name,
  url: `${SITE}/`,
  logo: { '@type': 'ImageObject', url: logoUrl, width: 512, height: 512 },
  description: brand.shortDescription,
  foundingDate: legal.registeredOn,
  identifier: [
    { '@type': 'PropertyValue', propertyID: 'SIREN', value: legal.siren.replace(/\s/g, '') },
    { '@type': 'PropertyValue', propertyID: 'SIRET', value: legal.siret.replace(/\s/g, '') },
  ],
  vatID: legal.vat,
  email: contact.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: legal.street,
    addressLocality: legal.city,
    postalCode: legal.postalCode,
    addressCountry: 'FR',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: contact.email,
    areaServed: 'FR',
    availableLanguage: 'French',
  },
  areaServed: { '@type': 'Country', name: 'France' },
  founder: {
    '@type': 'Person',
    name: founder.name,
    jobTitle: founder.jobTitle,
    image: `${SITE}${founder.photo}`,
    sameAs: [founder.linkedin],
  },
  sameAs: [...socialProfiles.map(profile => profile.href), ...directoryProfiles],
};

/** Version autonome, pour un `<script type="application/ld+json">` hors `@graph`. */
export const organizationJsonLd = { '@context': 'https://schema.org', ...organizationNode };
