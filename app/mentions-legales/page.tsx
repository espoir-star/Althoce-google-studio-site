import type { Metadata } from 'next';
import LegalPageClient from '@/components/LegalPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Mentions Légales | Althoce',
  robots: { index: false, follow: false },
};

export default function LegalPage() {
  return (
    <>
      <LegalPageClient />
      <Footer showCta={false} />
    </>
  );
}
