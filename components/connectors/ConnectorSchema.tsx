import { connectorsHubFaq, pennylane } from '@/lib/connectors-content';

const HUB_URL = 'https://althoce.com/connecteurs/';
const org = { '@type': 'Organization', '@id': 'https://althoce.com/#organization', name: 'Althoce', url: 'https://althoce.com/' };
const faqPage = (items: { q: string; a: string }[]) => ({ '@type': 'FAQPage', mainEntity: items.map(item => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) });
const crumbs = (extra?: { name: string; item: string }) => ({ '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://althoce.com/' },
  { '@type': 'ListItem', position: 2, name: 'Connecteurs', item: HUB_URL },
  ...(extra ? [{ '@type': 'ListItem', position: 3, ...extra }] : []),
] });

/** Données structurées : hub (CollectionPage) ou connecteur Pennylane (Service + Offer HT mensuelle). */
export default function ConnectorSchema({ page }: { page: 'hub' | 'pennylane' }) {
  const graph = page === 'hub'
    ? [
        { '@type': 'CollectionPage', '@id': `${HUB_URL}#collection`, name: 'Connecteurs Althoce pour Claude', url: HUB_URL },
        { '@type': 'ItemList', name: 'Connecteurs Althoce', itemListElement: [{ '@type': 'ListItem', position: 1, name: pennylane.name, url: pennylane.url }] },
        crumbs(),
        faqPage(connectorsHubFaq),
      ]
    : [
        {
          '@type': 'Service', '@id': `${pennylane.url}#service`, name: pennylane.name, serviceType: 'Connecteur Pennylane pour Claude',
          description: 'Connecteur Pennylane pour Claude, en lecture et en écriture. Claude propose, le cabinet valide.',
          provider: org, areaServed: { '@type': 'Country', name: 'France' },
          offers: {
            '@type': 'Offer', url: pennylane.url, priceCurrency: 'EUR', price: String(pennylane.priceHt),
            priceSpecification: { '@type': 'UnitPriceSpecification', price: pennylane.priceHt, priceCurrency: 'EUR', valueAddedTaxIncluded: false, billingDuration: 'P1M', unitText: 'cabinet par mois' },
            eligibleCustomerType: 'https://schema.org/Business',
          },
        },
        crumbs({ name: 'Pennylane', item: pennylane.url }),
        faqPage(pennylane.faq),
      ];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c') }} />;
}
