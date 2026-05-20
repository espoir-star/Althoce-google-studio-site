import type { Metadata } from 'next';
import PrivacyPageClient from '@/components/PrivacyPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Politique de confidentialité | Althoce',
  description: 'Politique de confidentialité Althoce conforme RGPD. Données collectées, finalités, durées de conservation, droits utilisateurs, cookies, hébergement Vercel et transferts hors UE.',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://althoce.com/confidentialite/' },
};

export default function PrivacyPage() {
  return (
    <>
      <PrivacyPageClient />
      <Footer showCta={false} />
    </>
  );
}
