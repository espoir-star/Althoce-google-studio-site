import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import PennylanePage from '@/components/connectors/PennylanePage';
import ConnectorSchema from '@/components/connectors/ConnectorSchema';
import { pennylane } from '@/lib/connectors-content';

const title = 'Connecteur Pennylane pour Claude, en lecture et en écriture';
const description = 'Branchez Claude sur vos dossiers Pennylane. Lecture et écriture, chaque écriture validée par le cabinet. 99 € HT par mois, essai gratuit de 7 jours.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: pennylane.url },
  openGraph: { title: `${title} | Althoce`, description, type: 'website', locale: 'fr_FR', url: pennylane.url, images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'Althoce, cabinet de conseil et intégration IA' }] },
  twitter: { card: 'summary_large_image', title: `${title} | Althoce`, description, images: ['/og-default.png'] },
};

export default function Page() {
  return <><ConnectorSchema page="pennylane" /><PennylanePage /><Footer showCta={false} /></>;
}
