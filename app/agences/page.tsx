import type { Metadata } from 'next';
import AgencesHubPageClient from '@/components/AgencesHubPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Une IA souveraine, responsable, accessible à toutes les PME françaises | Althoce',
  description: "Althoce, agence IA française, accompagne les PME et ETI partout en France dans leur transformation IA. Notre mission : une IA souveraine, responsable, accessible à toutes les PME françaises. Souveraineté France, anti-biais documenté, humain au centre. +150 PME équipées. 30 min offertes avec un expert.",
  keywords: ['agence IA France', 'partenaire IA PME', 'IA souveraine PME', 'agence IA responsable', 'IA éthique entreprise', 'agence IA souveraine France', 'partenaire de confiance IA'],
  alternates: { canonical: 'https://althoce.com/agences/' },
  openGraph: {
    title: 'Une IA souveraine, responsable, accessible à toutes les PME françaises | Althoce',
    description: "Althoce, partenaire de confiance des PME et ETI françaises. Mission : une IA souveraine, responsable, accessible. Pas de boîte noire, pas de remplacement masqué, pas d'exfiltration de données.",
    type: 'website',
    locale: 'fr_FR',
    url: 'https://althoce.com/agences/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agence IA France · Souveraine, responsable, accessible aux PME | Althoce',
    description: '+150 PME équipées · Mistral hébergé France · Anti-biais documenté · Humain au centre · 30 min offertes',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://althoce.com/#organization",
      "name": "Althoce",
      "url": "https://althoce.com/",
      "description": "Agence IA française d'origine bordelaise. Mission : démocratiser l'usage de l'IA dans les entreprises françaises de manière responsable. Souveraineté France, anti-biais documenté, humain au centre, transparence technique.",
      "areaServed": { "@type": "Country", "name": "France" },
      "knowsAbout": ["Artificial Intelligence", "AI Agents", "Business Automation", "Responsible AI", "AI Sovereignty", "Anti-bias AI"]
    },
    {
      "@type": "WebPage",
      "@id": "https://althoce.com/agences/#webpage",
      "name": "Une IA souveraine, responsable, accessible à toutes les PME françaises",
      "url": "https://althoce.com/agences/",
      "mainEntity": { "@id": "https://althoce.com/#organization" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Agences", "item": "https://althoce.com/agences/" }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Présence Althoce en France",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "url": "https://althoce.com/agence-ia-paris/", "name": "Paris" },
        { "@type": "ListItem", "position": 2, "url": "https://althoce.com/agence-ia-lyon/", "name": "Lyon" },
        { "@type": "ListItem", "position": 3, "url": "https://althoce.com/agence-ia-marseille/", "name": "Marseille" },
        { "@type": "ListItem", "position": 4, "url": "https://althoce.com/agence-ia-toulouse/", "name": "Toulouse" },
        { "@type": "ListItem", "position": 5, "url": "https://althoce.com/agence-ia-lille/", "name": "Lille" },
        { "@type": "ListItem", "position": 6, "url": "https://althoce.com/agence-ia-nantes/", "name": "Nantes" },
        { "@type": "ListItem", "position": 7, "url": "https://althoce.com/agence-ia-nice/", "name": "Nice" },
        { "@type": "ListItem", "position": 8, "url": "https://althoce.com/agence-ia-strasbourg/", "name": "Strasbourg" },
        { "@type": "ListItem", "position": 9, "url": "https://althoce.com/agence-ia-montpellier/", "name": "Montpellier" },
        { "@type": "ListItem", "position": 10, "url": "https://althoce.com/agence-ia-bordeaux/", "name": "Bordeaux" },
        { "@type": "ListItem", "position": 11, "url": "https://althoce.com/agence-ia-rennes/", "name": "Rennes" },
        { "@type": "ListItem", "position": 12, "url": "https://althoce.com/agence-ia-reims/", "name": "Reims" },
        { "@type": "ListItem", "position": 13, "url": "https://althoce.com/agence-ia-le-havre/", "name": "Le Havre" },
        { "@type": "ListItem", "position": 14, "url": "https://althoce.com/agence-ia-saint-etienne/", "name": "Saint-Étienne" },
        { "@type": "ListItem", "position": 15, "url": "https://althoce.com/agence-ia-toulon/", "name": "Toulon" },
        { "@type": "ListItem", "position": 16, "url": "https://althoce.com/agence-ia-grenoble/", "name": "Grenoble" },
        { "@type": "ListItem", "position": 17, "url": "https://althoce.com/agence-ia-dijon/", "name": "Dijon" },
        { "@type": "ListItem", "position": 18, "url": "https://althoce.com/agence-ia-angers/", "name": "Angers" },
        { "@type": "ListItem", "position": 19, "url": "https://althoce.com/agence-ia-nimes/", "name": "Nîmes" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Qu'est-ce qui rend Althoce différent des autres agences IA ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Trois choses réunies nulle part ailleurs : positionnement PME-ETI (délais courts, méthodes opérationnelles, tarifs adaptés), souveraineté France par défaut (Mistral, OVH, Scaleway), exigence anti-biais et humain au centre (pas de remplacement masqué, documentation anti-biais opposable, pas de boîte noire)." }
        },
        {
          "@type": "Question",
          "name": "Mission de responsabilité : sincère ou marketing ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Cohérent avec la pratique. Vérifications possibles : documentation anti-biais sur projet RH (document juridique livré), échange avec un client sur impact effectifs (majorité a stabilisé ou augmenté), lecture du code source livré (tout est livré, sous NDA)." }
        },
        {
          "@type": "Question",
          "name": "Vous travaillez avec des secteurs sensibles (défense, santé, juridique, finance) ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui sur les quatre. Défense : configurations renforcées au cas par cas. Santé : Mistral France + anonymisation systématique. Juridique : pré-analyse à décharge, l'agent ne signe jamais. Finance : contrats Enterprise sans réutilisation pour entraînement." }
        },
        {
          "@type": "Question",
          "name": "Combien coûte un déploiement Althoce ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Sur devis, adapté à votre contexte. Tout démarre par 30 minutes offertes avec un expert : devis ferme sous 5 jours, sans engagement." }
        },
        {
          "@type": "Question",
          "name": "Comment se passe la première prise de contact ?",
          "acceptedAnswer": { "@type": "Answer", "text": "30 min offertes pour qualifier le besoin. Devis ferme sous 5 jours ouvrés. Vous décidez sans engagement. Si vous signez, le cadrage démarre dans la semaine." }
        }
      ]
    }
  ]
};

export default function AgencesHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgencesHubPageClient />
      <Footer showCta={false} />
    </>
  );
}
