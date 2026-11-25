import type { Metadata } from 'next';
import ToolTrainingPage from '@/components/formation/ToolTrainingPage';
import Footer from '@/components/Footer';
import { claudeTraining as training, buildToolTrainingJsonLd } from '@/lib/formations-outils';

const url = 'https://althoce.com/services/formation-ia/claude/';

export const metadata: Metadata = {
  title: training.metaTitle,
  description: training.metaDescription,
  keywords: training.keywords,
  openGraph: {
    title: `${training.metaTitle} | Althoce`,
    description: training.metaDescription,
    type: 'website',
    locale: 'fr_FR',
    url,
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: `Althoce, ${training.title}` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${training.metaTitle} | Althoce`,
    description: training.metaDescription,
  },
  alternates: { canonical: url },
};

export default function FormationClaudePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildToolTrainingJsonLd(training)) }}
      />
      <ToolTrainingPage training={training} />
      <Footer showCta={false} />
    </>
  );
}
