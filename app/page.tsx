import { brand } from '@/lib/brand-content';
import type { Metadata } from 'next';
import HomePageClient from '@/components/HomePageClient';
import Footer from '@/components/Footer';
import { homeFaqs, homeOffers } from '@/lib/home-content';

export const metadata: Metadata = {
  title: 'Conseil & intégration IA pour professions réglementées | Althoce',
  description: brand.shortDescription,
  openGraph: {
    title: 'Conseil & intégration IA pour professions réglementées | Althoce',
    description: brand.shortDescription,
    url: 'https://althoce.com/',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Althoce, cabinet de conseil et intégration IA',
      },
    ],
},
  twitter: {
    title: 'Conseil & intégration IA pour professions réglementées | Althoce',
    description: brand.shortDescription,
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
  "description": brand.shortDescription,
  "publisher": { "@id": "https://althoce.com/#organization" },
  "inLanguage": "fr-FR",
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://althoce.com/#service",
  "name": "Althoce",
  "url": "https://althoce.com/",
  "description": brand.shortDescription,
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
