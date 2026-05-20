import type { Metadata } from 'next';
import LegalPageClient from '@/components/LegalPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Mentions légales | Althoce',
  description: 'Mentions légales du site Althoce, conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l\'économie numérique.',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://althoce.com/mentions-legales/' },
};

export default function LegalPage() {
  return (
    <>
      <LegalPageClient />
      <Footer showCta={false} />
    </>
  );
}
