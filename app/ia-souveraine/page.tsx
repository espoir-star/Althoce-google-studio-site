import type { Metadata } from 'next';
import CentralePage from '@/components/centrale/CentralePage';
import Footer from '@/components/Footer';
import { centrale, centraleFaqs } from '@/lib/centrale-content';

export const metadata: Metadata = {
  title: { absolute: centrale.title },
  description: centrale.description,
  alternates: { canonical: centrale.url },
  openGraph: { title: centrale.title, description: centrale.description, url: centrale.url, type: 'website', locale: 'fr_FR', siteName: 'Althoce', images: [{ url: '/ia-souveraine/opengraph-image', width: 1200, height: 630, alt: 'La Centrale by Althoce. Vos agents IA, chez vous, sur une seule plateforme.' }] },
  twitter: { card: 'summary_large_image', title: centrale.title, description: centrale.description, images: ['/ia-souveraine/opengraph-image'] },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Service', '@id': `${centrale.url}#service`, name: centrale.name, url: centrale.url, description: centrale.description, serviceType: 'Installation et accompagnement d’une plateforme d’agents IA sur mesure', provider: { '@id': 'https://althoce.com/#organization' }, areaServed: { '@type': 'Country', name: 'France' } },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://althoce.com/' }, { '@type': 'ListItem', position: 2, name: 'La Centrale', item: centrale.url }] },
    { '@type': 'FAQPage', mainEntity: centraleFaqs.map(item => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ],
};

export default function Page() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} /><CentralePage /><Footer showCta={false} /></>;
}
