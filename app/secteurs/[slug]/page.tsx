import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Footer from '@/components/Footer';
import SectorPage from '@/components/sectors/SectorPage';
import { sectorStories, sectorFaq } from '@/lib/sectors-content';
export const dynamicParams = false;
export function generateStaticParams() {
  return sectorStories.filter(d => d.slug !== 'finance').map((d) => ({ slug: d.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const d = sectorStories.find((x) => x.slug === slug);
  if (!d) return {};
  const title = d.title;
  return {
    title,
    description: d.description,
    alternates: { canonical: `https://althoce.com/secteurs/${slug}/` },
    openGraph: {
      title,
      description: d.description,
      url: `https://althoce.com/secteurs/${slug}/`,
      images: [{ url: d.image }],
    },
    twitter: { card: 'summary_large_image', title, description: d.description, images: [d.image] },
  };
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = sectorStories.find((x) => x.slug === slug);
  if (!d) notFound();
  const url = `https://althoce.com/secteurs/${slug}/`;
  const graph = [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        ['Accueil', 'https://althoce.com/'],
        d.category === 'metier' ? ['Métiers', 'https://althoce.com/agent-ia/'] : ['Secteurs', 'https://althoce.com/secteurs/'],
        [d.name, url],
      ].map(([name, item], i) => ({ '@type': 'ListItem', position: i + 1, name, item })),
    },
    {
      '@type': 'FAQPage',
      mainEntity: sectorFaq(d).map((x) => ({
        '@type': 'Question',
        name: x.q,
        acceptedAnswer: { '@type': 'Answer', text: x.a },
      })),
    },
  ];
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(
            /</g,
            '\\u003c',
          ),
        }}
      />
      <SectorPage story={d} />
      <Footer showCta={false} />
    </>
  );
}
