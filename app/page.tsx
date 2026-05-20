import type { Metadata } from 'next';
import HomePageClient from '@/components/HomePageClient';
import Footer from '@/components/Footer';
import { faqsV2, servicesV2 } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Althoce | Agence IA & Automatisation — Agents 100% Autonomes pour PME',
  description: 'Althoce déploie des agents IA 100% autonomes pour PME et ETI françaises. +150 PME accompagnées, 9M€ économisés, -95% de saisie manuelle. Bordeaux.',
  openGraph: {
    title: 'Althoce | Agence IA & Automatisation — Agents 100% Autonomes',
    description: 'Des agents IA qui travaillent à votre place, 24h/24, sans supervision. +150 PME accompagnées, 9M€ économisés.',
    url: 'https://althoce.com',
  },
  twitter: {
    title: 'Althoce | Agence IA & Automatisation pour PME',
    description: 'Des agents IA 100% autonomes pour PME françaises. +150 clients, 9M€ économisés.',
  },
  alternates: {
    canonical: 'https://althoce.com',
  },
};

// Schémas JSON-LD pour la page d'accueil
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://althoce.com/#website",
  "name": "Althoce",
  "url": "https://althoce.com",
  "description": "Agents IA & Automatisation pour PME françaises",
  "publisher": { "@id": "https://althoce.com/#organization" },
  "inLanguage": "fr-FR",
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://althoce.com/#service",
  "name": "Althoce",
  "url": "https://althoce.com",
  "description": "Conception d'agents IA et d'automatisations sur-mesure qui génèrent du ROI pour les PME françaises.",
  "image": "https://althoce.com/og-image.png",
  "telephone": "",
  "email": "contact@althoce.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "5 RUE FENELON",
    "addressLocality": "Bordeaux",
    "postalCode": "33000",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 44.8378,
    "longitude": -0.5792
  },
  "areaServed": {
    "@type": "Country",
    "name": "France"
  },
  "priceRange": "€€",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services IA & Automatisation",
    "itemListElement": servicesV2.map((s, i) => ({
      "@type": "Offer",
      "position": i + 1,
      "name": s.title,
      "description": s.desc,
      "seller": { "@id": "https://althoce.com/#organization" },
    })),
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "50",
    "bestRating": "5",
    "worstRating": "1"
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqsV2.map(faq => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomePageClient />
      <Footer showCta={true} />
    </>
  );
}
