import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import CgvConnecteurs from '@/components/connectors/CgvConnecteurs';

export const metadata: Metadata = {
  title: 'CGV du connecteur Pennylane',
  description: 'Conditions générales de vente de l’abonnement au connecteur Pennylane d’Althoce Conseil : service, essai gratuit, prix, résiliation, données.',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://althoce.com/connecteurs/cgv/' },
};

export default function Page() {
  return <><CgvConnecteurs /><Footer showCta={false} /></>;
}
