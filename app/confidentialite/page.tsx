import type { Metadata } from 'next';
import PrivacyPageClient from '@/components/PrivacyPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | Althoce',
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <>
      <PrivacyPageClient />
      <Footer showCta={false} />
    </>
  );
}
