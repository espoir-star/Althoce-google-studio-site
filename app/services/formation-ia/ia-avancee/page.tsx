import type { Metadata } from 'next';
import FormationDetailClient from '@/components/formation/FormationDetailClient';
import Footer from '@/components/Footer';
import { avancee, buildFormationJsonLd } from '@/lib/formations';

export const metadata: Metadata = {
  title: avancee.metaTitle,
  description: avancee.metaDescription,
  keywords: ['formation IA personnalisée', 'formation IA sur mesure', 'formation IA métier', 'formation agent IA', 'formation automatisation IA', 'formation MCP', 'formation IA professions réglementées'],
  openGraph: {
    title: `${avancee.metaTitle} | Althoce`,
    description: avancee.metaDescription,
    type: 'website',
    locale: 'fr_FR',
    url: 'https://althoce.com/services/formation-ia/ia-avancee/',
    images: [{ url: avancee.ogImage, width: 1200, height: 630, alt: 'Althoce, Formation IA métier personnalisée' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${avancee.metaTitle} | Althoce`,
    description: avancee.metaDescription,
  },
  alternates: {
    canonical: 'https://althoce.com/services/formation-ia/ia-avancee/',
  },
};

export default function IAAvanceePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFormationJsonLd(avancee)) }}
      />
      <FormationDetailClient formation={avancee} />
      <Footer showCta={false} />
    </>
  );
}
