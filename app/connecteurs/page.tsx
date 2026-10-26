import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import ConnectorsHub from '@/components/connectors/ConnectorsHub';
import ConnectorSchema from '@/components/connectors/ConnectorSchema';

const title = 'Connecteurs MCP pour vos logiciels comptables';
const description = 'Branchez Claude, ChatGPT ou une autre IA compatible MCP sur vos logiciels comptables. Connecteur Pennylane en lecture et en écriture, autres logiciels sur rendez-vous.';
const url = 'https://althoce.com/connecteurs/';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title: `${title} | Althoce`, description, type: 'website', locale: 'fr_FR', url, images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'Althoce, cabinet de conseil et intégration IA' }] },
  twitter: { card: 'summary_large_image', title: `${title} | Althoce`, description, images: ['/og-default.png'] },
};

export default function Page() {
  return <><ConnectorSchema page="hub" /><ConnectorsHub /><Footer /></>;
}
