import type { Metadata } from 'next';
import ContactPageClient from '@/components/ContactPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Réserver un Audit Gratuit | Althoce',
  description: 'Réservez un appel gratuit de 30 minutes avec Althoce. Nous analyserons vos besoins et déterminerons comment l\'IA peut transformer votre activité.',
  openGraph: {
    title: 'Réserver un Audit Gratuit | Althoce',
    url: 'https://althoce.com/contact',
  },
  alternates: {
    canonical: 'https://althoce.com/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactPageClient />
      <Footer showCta={false} />
    </>
  );
}
