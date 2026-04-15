import type { Metadata } from 'next';
import HomePageClient from '@/components/HomePageClient';
import Footer from '@/components/Footer';
import { faqs, services } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Althoce | Agents IA & Automatisation pour PME françaises',
  description: 'Althoce conçoit des agents IA et automatisations sur-mesure pour libérer vos équipes des tâches répétitives. +5M€ économisés, +758 flows créés, -70% de temps administratif.',
  openGraph: {
    title: 'Althoce | Agents IA & Automatisation pour PME',
    description: 'Conception des automatisations qui génèrent (vraiment) du ROI. Libérez vos talents des tâches répétitives.',
    url: 'https://althoce.com',
  },
  twitter: {
    title: 'Althoce | Agents IA & Automatisation pour PME',
    description: 'Conception des automatisations qui génèrent (vraiment) du ROI.',
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
    "itemListElement": services.map((s, i) => ({
      "@type": "Offer",
      "position": i + 1,
      "name": s.title,
      "description": s.description,
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
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer,
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
