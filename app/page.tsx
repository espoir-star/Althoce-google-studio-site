import type { Metadata } from 'next';
import HomePageClient from '@/components/HomePageClient';
import Footer from '@/components/Footer';
import { homeFaqs, homeOffers } from '@/lib/home-content';

export const metadata: Metadata = {
  title: 'Althoce | Cabinet IA & Automatisation pour PME',
  description: 'Althoce, cabinet IA à Bordeaux : diagnostic, automatisation, agents IA, formation et pilotage pour les PME. Des usages cadrés, déployés et suivis dans le temps.',
  openGraph: {
    title: 'Althoce | Cabinet IA & Automatisation pour PME',
    description: 'Comprendre, équiper, automatiser et faire durer : diagnostic, agents IA, formation et suivi des usages pour les PME, cabinets et agences.',
    url: 'https://althoce.com/',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Althoce — Agents IA & Automatisation pour PME et ETI françaises',
      },
    ],
},
  twitter: {
    title: 'Althoce | Cabinet IA & Automatisation pour PME',
    description: 'Cabinet IA pour PME : diagnostic, automatisation, agents IA, formation et pilotage. Un accompagnement centré sur l’adoption.',
  },
  alternates: {
    canonical: 'https://althoce.com/',
  },
};

// Schémas JSON-LD pour la page d'accueil
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://althoce.com/#website",
  "name": "Althoce",
  "url": "https://althoce.com/",
  "description": "Cabinet IA, conseil et automatisation pour PME françaises",
  "publisher": { "@id": "https://althoce.com/#organization" },
  "inLanguage": "fr-FR",
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://althoce.com/#service",
  "name": "Althoce",
  "url": "https://althoce.com/",
  "description": "Cabinet IA : conseil, conception d'agents IA et d'automatisations sur-mesure pour les PME françaises.",
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
    "name": "Accompagnements IA & Automatisation",
    "itemListElement": homeOffers.map((s, i) => ({
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
  "mainEntity": homeFaqs.map(faq => ({
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
      <Footer showCta={false} positioning="cabinet" />
    </>
  );
}
