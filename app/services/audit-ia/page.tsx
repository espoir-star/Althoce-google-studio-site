import type { Metadata } from 'next';
import AuditIAPageClient from '@/components/AuditIAPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Audit IA pour PME et ETI : cartographie chiffrée des opportunités IA | Althoce',
  description: "Audit IA Althoce : cartographie de vos opportunités, calcul de ROI projet par projet, feuille de route chiffrée, gouvernance, conformité. Pas un PowerPoint de cabinet de conseil. Sur devis. 30 min offertes avec un expert.",
  keywords: ['audit IA', 'audit IA entreprise', 'cartographie IA', 'stratégie IA PME', 'feuille de route IA', 'diagnostic IA', 'maturité IA', 'roadmap IA'],
  openGraph: {
    title: 'Audit IA pour PME et ETI : cartographie chiffrée des opportunités | Althoce',
    description: "Pas un PowerPoint de cabinet de conseil. 6 livrables concrets, ROI par projet, gouvernance, conformité, formation associée.",
    type: 'article',
    locale: 'fr_FR',
    url: 'https://althoce.com/services/audit-ia/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Audit IA stratégique — Althoce',
    description: "Cartographie chiffrée des opportunités IA. 6 livrables actionnables. Sur devis, 30 min offertes.",
  },
  alternates: {
    canonical: 'https://althoce.com/services/audit-ia/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://althoce.com/services/audit-ia/#service",
      "name": "Audit IA pour PME et ETI",
      "serviceType": "AI strategic audit",
      "provider": { "@type": "Organization", "@id": "https://althoce.com/#organization", "name": "Althoce", "url": "https://althoce.com/" },
      "areaServed": { "@type": "Country", "name": "France" },
      "description": "Audit IA stratégique : cartographie des opportunités, diagnostic maturité, ROI projet par projet, feuille de route chiffrée, plan de gouvernance, plan de formation. 4 formats : Express (2 sem.), Standard (4 sem.), Approfondi sectoriel (6 sem.), Post-incident (3 sem.).",
      "offers": {
        "@type": "Offer",
        "url": "https://althoce.com/services/audit-ia/",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "EUR",
          "description": "Sur devis selon format et scope. 30 minutes offertes avec un expert pour cadrer le format adapté."
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://althoce.com/services/" },
        { "@type": "ListItem", "position": 3, "name": "Audit IA", "item": "https://althoce.com/services/audit-ia/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Quelle est la différence entre les 30 minutes offertes et l'audit IA Althoce ?", "acceptedAnswer": { "@type": "Answer", "text": "Les 30 minutes sont gratuites et servent à qualifier un cas borné. L'audit IA payant cartographie l'ensemble des opportunités IA avec 6 livrables actionnables." } },
        { "@type": "Question", "name": "Combien coûte un audit IA chez Althoce ?", "acceptedAnswer": { "@type": "Answer", "text": "Sur devis selon format et scope. Significativement moins cher qu'un audit cabinet de conseil. Cadrage après 30 minutes offertes avec un expert." } },
        { "@type": "Question", "name": "Combien de temps prend un audit IA ?", "acceptedAnswer": { "@type": "Answer", "text": "Entre 2 et 6 semaines selon le format choisi. Express : 2 semaines. Standard : 4 semaines. Approfondi sectoriel : 6 semaines. Post-incident : 3 semaines." } },
        { "@type": "Question", "name": "Est-on lié à Althoce pour les projets identifiés après l'audit ?", "acceptedAnswer": { "@type": "Answer", "text": "Non. Aucune clause d'exclusivité. Les 6 livrables restent actionnables avec n'importe quel prestataire." } },
        { "@type": "Question", "name": "Comment garantissez-vous la qualité des chiffrages ROI ?", "acceptedAnswer": { "@type": "Answer", "text": "Méthodologie transparente avec hypothèses explicites. Tableur livré — vous pouvez challenger chaque hypothèse et recalculer vous-même." } },
        { "@type": "Question", "name": "Pouvez-vous auditer une solution IA déployée par un autre prestataire ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui. Format Audit Post-incident : on audite l'existant, identifie les causes des dérives, propose un plan de remédiation." } }
      ]
    }
  ]
};

export default function AuditIAPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AuditIAPageClient />
      <Footer showCta={true} />
    </>
  );
}
