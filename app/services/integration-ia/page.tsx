import type { Metadata } from 'next';
import IntegrationIAPageClient from '@/components/IntegrationIAPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Intégration IA dans votre SI : sécurisée, monitorée, gouvernée | Althoce',
  description: "Vos agents IA méritent mieux qu'un POC oublié. SSO, RBAC, audit log, monitoring, fallback humain, kill switch. Intégration au CRM, ERP, intranet en mode production. 30 min offertes avec un expert.",
  keywords: ['intégration IA', 'intégration LLM', 'connecteur IA CRM', 'IA Salesforce', 'IA HubSpot', 'IA Sage', 'gouvernance IA', 'IA RGPD'],
  openGraph: {
    title: 'Intégration IA dans votre SI : sécurisée, monitorée, gouvernée | Althoce',
    description: "Pas un POC dans un coin. Une vraie intégration au SI avec SSO, RBAC, audit log, monitoring, fallback humain. Pour DSI qui veulent dormir tranquilles.",
    type: 'article',
    locale: 'fr_FR',
    url: 'https://althoce.com/services/integration-ia/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Intégration IA dans votre SI — Althoce',
    description: "SSO, RBAC, audit log, monitoring, fallback humain, kill switch. Intégration IA sérieuse pour DSI.",
  },
  alternates: {
    canonical: 'https://althoce.com/services/integration-ia/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://althoce.com/services/integration-ia/#service",
      "name": "Intégration IA dans le SI",
      "serviceType": "AI integration and governance",
      "provider": { "@type": "Organization", "@id": "https://althoce.com/#organization", "name": "Althoce", "url": "https://althoce.com/" },
      "areaServed": { "@type": "Country", "name": "France" },
      "description": "Intégration des agents et employés IA au système d'information : SSO, RBAC, audit log, monitoring, fallback humain, kill switch. Conformité RGPD native.",
      "offers": {
        "@type": "Offer",
        "url": "https://althoce.com/services/integration-ia/",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "EUR",
          "description": "À partir de 1 400 € HT pour un agent simple intégré à un outil. Sur devis pour les intégrations multi-outils ou avec gouvernance custom."
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://althoce.com/services/" },
        { "@type": "ListItem", "position": 3, "name": "Intégration IA", "item": "https://althoce.com/services/integration-ia/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Comment l'agent IA s'authentifie auprès de notre CRM ou ERP ?", "acceptedAnswer": { "@type": "Answer", "text": "Par OAuth dédié (compte de service ou app marketplace native) ou via une clé d'API stockée dans un coffre-fort (HashiCorp Vault, AWS Secrets Manager). Jamais de credentials utilisateur réutilisés." } },
        { "@type": "Question", "name": "Mes données vont-elles transiter par OpenAI ou Anthropic ?", "acceptedAnswer": { "@type": "Answer", "text": "Selon votre choix. Mistral hébergé en France pour souveraineté maximale. Si vous acceptez les modèles propriétaires, anonymisation des données entrantes activée automatiquement." } },
        { "@type": "Question", "name": "Comment gérer les permissions différenciées ?", "acceptedAnswer": { "@type": "Answer", "text": "RBAC granulaire mappé sur votre annuaire SI (Active Directory, Entra ID, Workday). Un agent IA n'accède qu'aux données autorisées par le rôle de l'utilisateur qui le sollicite. Tracé dans l'audit log." } },
        { "@type": "Question", "name": "Combien coûte une intégration IA chez Althoce ?", "acceptedAnswer": { "@type": "Answer", "text": "1 400 € HT (tarif fixe) pour un agent simple intégré à un seul outil. Sur devis pour les intégrations multi-outils ou avec RBAC custom. Tout démarre par 30 minutes offertes avec un expert." } },
        { "@type": "Question", "name": "Quelle gouvernance avez-vous mise en place pour la conformité RGPD ?", "acceptedAnswer": { "@type": "Answer", "text": "Anonymisation des données personnelles avant envoi LLM, registre de traitements documenté, droit à l'oubli implémenté, durée de conservation paramétrable, hébergement France par défaut, DPA disponibles." } },
        { "@type": "Question", "name": "Que se passe-t-il si on veut tout couper en urgence ?", "acceptedAnswer": { "@type": "Answer", "text": "Kill switch disponible 24/7 dans l'interface admin. Désactivation en moins de 30 secondes par votre DSI. Procédure documentée et testée à chaque mise en production." } }
      ]
    }
  ]
};

export default function IntegrationIAPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <IntegrationIAPageClient />
      <Footer showCta={true} />
    </>
  );
}
