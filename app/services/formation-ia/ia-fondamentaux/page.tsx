import type { Metadata } from 'next';
import FormationDetailClient from '@/components/formation/FormationDetailClient';
import Footer from '@/components/Footer';
import { fondamentaux, buildFormationJsonLd } from '@/lib/formations';

export const metadata: Metadata = {
  title: fondamentaux.metaTitle,
  description: fondamentaux.metaDescription,
  keywords: ['formation IA fondamentaux', 'formation IA générative', 'formation ChatGPT entreprise', 'formation Claude', 'formation prompting', 'formation IA débutant', 'RGPD IA Act formation'],
  openGraph: {
    title: `${fondamentaux.metaTitle} | Althoce`,
    description: fondamentaux.metaDescription,
    type: 'website',
    locale: 'fr_FR',
    url: 'https://althoce.com/services/formation-ia/ia-fondamentaux/',
    images: [{ url: fondamentaux.ogImage, width: 1200, height: 630, alt: 'Althoce — Formation IA Fondamentaux' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${fondamentaux.metaTitle} | Althoce`,
    description: fondamentaux.metaDescription,
  },
  alternates: {
    canonical: 'https://althoce.com/services/formation-ia/ia-fondamentaux/',
  },
};

export default function IAFondamentauxPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFormationJsonLd(fondamentaux)) }}
      />
      <FormationDetailClient formation={fondamentaux} />
      <Footer showCta={false} />
    </>
  );
}
