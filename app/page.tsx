import type { Metadata } from 'next';
import HomePageClient from '@/components/HomePageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Althoce | Agents IA & Automatisation pour PME françaises',
  description: 'Althoce conçoit des agents IA et automatisations sur-mesure pour libérer vos équipes des tâches répétitives. +5M€ économisés, +758 flows créés, -70% de temps administratif.',
  openGraph: {
    title: 'Althoce | Agents IA & Automatisation pour PME',
    description: 'Conception des automatisations qui génèrent (vraiment) du ROI. Libérez vos talents des tâches répétitives.',
    url: 'https://althoce.com',
  },
  twitter: {
    title: 'Althoce | Agents IA & Automatisation pour PME',
    description: 'Conception des automatisations qui génèrent (vraiment) du ROI.',
  },
  alternates: {
    canonical: 'https://althoce.com',
  },
};

export default function HomePage() {
  return (
    <>
      <HomePageClient />
      <Footer showCta={true} />
    </>
  );
}
