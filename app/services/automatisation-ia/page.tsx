import type { Metadata } from 'next';
import AutomatisationIAPageClient from '@/components/AutomatisationIAPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Automatisation IA pour PME & ETI — Cadrage, chiffrage, mise en production | Althoce',
  description: "Agence d'automatisation IA française. On identifie, chiffre et déploie les automatisations qui libèrent vos équipes : mails, documents, CRM, reporting. 30 min offertes avec un expert. Premier livrable sous 7 jours.",
  keywords: ['automatisation IA', 'automatisation intelligente', 'agence automatisation IA', 'automatisation entreprise', 'automatiser avec l\'IA', 'automatisation processus', 'automatisation agentique', 'automatisation PME'],
  openGraph: {
    title: 'Automatisation IA sur-mesure pour PME & ETI — Althoce',
    description: "On automatise les 20 % de tâches qui vous coûtent 80 % de votre temps. 30 min offertes avec un expert, premier livrable en 7 jours.",
    type: 'article',
    locale: 'fr_FR',
    url: 'https://althoce.com/services/automatisation-ia/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automatisation IA sur-mesure — Althoce',
    description: "Automatisez ce qui doit l'être, gardez l'humain là où il compte.",
  },
  alternates: {
    canonical: 'https://althoce.com/services/automatisation-ia/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://althoce.com/services/automatisation-ia/#service",
      "name": "Automatisation IA sur-mesure",
      "serviceType": "Automatisation IA sur-mesure",
      "provider": { "@type": "Organization", "@id": "https://althoce.com/#organization", "name": "Althoce", "url": "https://althoce.com/" },
      "areaServed": { "@type": "Country", "name": "France" },
      "description": "Identification, chiffrage et déploiement d'automatisations IA pour PME et ETI. Mails, documents, CRM, reporting, saisie, rapprochements. Premier livrable en 7 jours, à partir de 1 400 € HT.",
      "offers": {
        "@type": "Offer",
        "url": "https://althoce.com/services/automatisation-ia/",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "EUR",
          "description": "À partir de 1 400 € HT pour une automatisation simple. Sur devis pour les systèmes d'automatisation et les refontes complètes de process."
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://althoce.com/services/" },
        { "@type": "ListItem", "position": 3, "name": "Automatisation IA", "item": "https://althoce.com/services/automatisation-ia/" }
      ]
    },
    {
      "@type": "HowTo",
      "name": "Comment déployer une automatisation IA avec Althoce",
      "step": [
        { "@type": "HowToStep", "position": 1, "name": "L'audit", "text": "Cartographie des tâches chronophages en 48h. Rapport des 3 à 5 automatisations prioritaires." },
        { "@type": "HowToStep", "position": 2, "name": "Le plan", "text": "Roadmap chiffrée : quelles automatisations, dans quel ordre, combien de temps, quel ROI." },
        { "@type": "HowToStep", "position": 3, "name": "La construction", "text": "Développement des automatisations et branchage aux outils existants (Gmail, Slack, HubSpot, CRM)." },
        { "@type": "HowToStep", "position": 4, "name": "L'autonomie", "text": "Formation des équipes. Code, accès et environnement transférés au client." }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Quelle est la différence entre automatisation classique et automatisation IA ?", "acceptedAnswer": { "@type": "Answer", "text": "L'automatisation classique (RPA, Zapier, Make) exécute des règles fixes écrites à l'avance. L'automatisation IA utilise un modèle de langage pour comprendre le contexte et adapter son comportement. Elle gère les cas imprévus, lit des documents non-structurés et prend des décisions." } },
        { "@type": "Question", "name": "Quels processus sont les plus rentables à automatiser en premier ?", "acceptedAnswer": { "@type": "Answer", "text": "Les processus récurrents (au moins 10 occurrences par semaine), chronophages (15 min ou plus par occurrence), à faible valeur ajoutée cognitive, et déclenchés par un événement numérique. ROI typique : 3 à 10× la première année." } },
        { "@type": "Question", "name": "Combien coûte une automatisation IA en 2026 ?", "acceptedAnswer": { "@type": "Answer", "text": "1 400 € HT (tarif fixe) pour un cas simple, 1 semaine de dev. Pour les systèmes multi-agents et refontes de process : sur devis, chiffré au cadrage. Tout démarre par 30 minutes offertes avec un expert." } },
        { "@type": "Question", "name": "Combien de temps faut-il pour mettre une automatisation en production ?", "acceptedAnswer": { "@type": "Answer", "text": "Une automatisation simple est en production sous 7 jours après validation du cadrage. Un système d'automatisation (3 à 6 processus orchestrés) : 2 à 6 semaines. Une refonte complète de département : 6 à 12 semaines." } },
        { "@type": "Question", "name": "Peut-on automatiser avec l'IA sans compétences techniques en interne ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui pour l'usage quotidien : une fois livrée, l'automatisation tourne seule. Si vous voulez pouvoir la modifier vous-même, nous formons 1 à 2 personnes chez vous (1 journée incluse dans les systèmes à 8 000 € HT et plus)." } },
        { "@type": "Question", "name": "Mes données vont-elles transiter par OpenAI ou Anthropic ?", "acceptedAnswer": { "@type": "Answer", "text": "Uniquement si vous l'acceptez. Pour les clients qui exigent la souveraineté totale, nous utilisons Mistral (hébergé en France) ou des modèles open-source auto-hébergés sur votre propre infrastructure." } },
        { "@type": "Question", "name": "Les automatisations IA sont-elles conformes RGPD et AI Act ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui. Nos déploiements intègrent par défaut : registre des traitements, analyses d'impact (PIA), clauses contractuelles types, documentation de conformité AI Act. Un document de conformité est livré à chaque mise en production." } },
        { "@type": "Question", "name": "Une automatisation IA peut-elle remplacer un employé ?", "acceptedAnswer": { "@type": "Answer", "text": "Elle peut absorber 80 % des tâches répétitives d'un poste, rarement un poste entier. Aucun de nos clients n'a supprimé de poste suite à une mission Althoce. Plusieurs ont réaffecté ou recruté différemment." } },
        { "@type": "Question", "name": "Que se passe-t-il si l'automatisation commet une erreur ?", "acceptedAnswer": { "@type": "Answer", "text": "Trois couches de sécurité : validation humaine obligatoire sur les actions sensibles, filtres de contenu et de coût, journalisation exhaustive. Taux d'erreur observé : inférieur à 1 % sur les tâches automatisées." } },
        { "@type": "Question", "name": "À qui appartient l'automatisation à la fin du projet ?", "acceptedAnswer": { "@type": "Answer", "text": "À vous, à 100 %. Code, workflows, prompts, accès LLM, bases de données : tout vous est transféré. Aucun abonnement récurrent obligatoire." } }
      ]
    }
  ]
};

export default function AutomatisationIAPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AutomatisationIAPageClient />
      <Footer showCta={true} />
    </>
  );
}
