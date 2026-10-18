import type { Metadata } from 'next';
import FormationDetailClient from '@/components/formation/FormationDetailClient';
import Footer from '@/components/Footer';
import { buildFormationJsonLd } from '@/lib/formations';
import { coachingSolo } from '@/lib/coaching-solo';

const url = 'https://althoce.com/services/formation-ia/coaching-independant/';
export const metadata: Metadata = {
  title: coachingSolo.metaTitle,
  description: coachingSolo.metaDescription,
  alternates: { canonical: url },
  openGraph: { title: `${coachingSolo.metaTitle} | Althoce`, description: coachingSolo.metaDescription, url, type: 'website', locale: 'fr_FR', images: [{ url: '/images/services/coaching-dirigeant.webp', alt: 'Accompagnement individuel autour des outils IA' }] },
  twitter: { card: 'summary_large_image', title: coachingSolo.metaTitle, description: coachingSolo.metaDescription, images: ['/images/services/coaching-dirigeant.webp'] },
};

export default function CoachingIndependantPage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFormationJsonLd(coachingSolo)).replace(/</g, '\\u003c') }} />
    <FormationDetailClient formation={coachingSolo} />
    <Footer showCta={false} />
  </>;
}
