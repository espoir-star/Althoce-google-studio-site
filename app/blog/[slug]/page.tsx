import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { extractToc } from '@/lib/extract-toc';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogPostCTA from '@/components/BlogPostCTA';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';

const CATEGORY_STYLES: Record<string, { bg: string; color: string; border: string }> = {
  "Cas d'usage":    { bg: '#eff6ff', color: '#2563eb', border: '#bfdbfe' },
  "Guide pratique": { bg: '#eff6ff', color: '#2563eb', border: '#bfdbfe' },
  "Décryptage":     { bg: '#fefce8', color: '#a16207', border: '#fef08a' },
  "Coulisses":      { bg: '#f0fdf4', color: '#15803d', border: '#bbf7d0' },
};

export const revalidate = 3600; // Revalide toutes les heures pour la publication différée

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Blog Althoce`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: `https://althoce.com/blog/${post.slug}/`,
      publishedTime: post.publishedAt ?? post.date,
      images: [
        {
          url: post.image ? `https://althoce.com${post.image}` : '/og-default.png',
          width: 1200,
          height: 630,
          alt: post.imageAlt ?? post.title,
        },
      ],
    },
    twitter: {
      title: post.title,
      description: post.excerpt,
      images: post.image ? [`https://althoce.com${post.image}`] : ['/og-default.png'],
    },
    alternates: {
      canonical: `https://althoce.com/blog/${post.slug}/`,
    },
  };
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const toc = extractToc(post.rawContent);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `https://althoce.com/blog/${post.slug}/#article`,
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.publishedAt ?? post.date,
    "dateModified": post.publishedAt ?? post.date,
    "url": `https://althoce.com/blog/${post.slug}/`,
    "image": post.image ? `https://althoce.com${post.image}` : "https://althoce.com/og-default.png",
    "inLanguage": "fr-FR",
    "author": {
      "@type": "Organization",
      "@id": "https://althoce.com/#organization",
      "name": "Althoce",
      "url": "https://althoce.com/",
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://althoce.com/#organization",
      "name": "Althoce",
      "url": "https://althoce.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://althoce.com/favicons/apple-touch-icon.png",
      },
    },
    "isPartOf": {
      "@id": "https://althoce.com/blog/#blog",
    },
    "articleSection": post.category,
    "keywords": post.category,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://althoce.com/blog/${post.slug}/`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div style={{ paddingTop: 96, paddingBottom: 80, minHeight: '100vh', background: '#fafafa' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

          {/* Retour au blog */}
          <Link
            href="/blog/"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#52525b', fontSize: 14, fontWeight: 600, textDecoration: 'none', marginBottom: 32 }}
          >
            <ArrowLeft style={{ width: 16, height: 16 }} />
            Retour au blog
          </Link>

          {/* Grille : TOC gauche (desktop) + contenu principal */}
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 items-stretch">

            {/* Sidebar TOC — masquée sur mobile */}
            <aside className="hidden lg:block" style={{ minWidth: 0 }}>
              <TableOfContents items={toc} />
            </aside>

            {/* Colonne principale */}
            <div style={{ minWidth: 0 }}>

              {/* Header article */}
              <div style={{ background: '#fff', borderRadius: 20, border: '1px solid #e4e4e7', padding: '40px 48px', marginBottom: 20 }}>
                {(() => {
                  const cs = CATEGORY_STYLES[post.category] ?? { bg: '#f4f4f5', color: '#52525b', border: '#e4e4e7' };
                  return (
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10, marginBottom: 24 }}>
                      <span style={{ padding: '4px 12px', borderRadius: 9999, fontSize: 12, fontWeight: 700, background: cs.bg, color: cs.color, border: `1px solid ${cs.border}` }}>
                        {post.category}
                      </span>
                      <span style={{ color: '#d4d4d8' }}>·</span>
                      <span style={{ fontSize: 13, color: '#a1a1aa' }}>{post.readingTime}</span>
                      <span style={{ color: '#d4d4d8' }}>·</span>
                      <span style={{ fontSize: 13, color: '#a1a1aa' }}>
                        {new Date(post.publishedAt ?? post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </span>
                    </div>
                  );
                })()}
                <h1 style={{ fontSize: 'clamp(24px,3vw,36px)', fontWeight: 800, letterSpacing: '-.03em', color: '#09090b', marginBottom: 16, lineHeight: 1.2 }}>
                  {post.title}
                </h1>
                <p style={{ fontSize: 17, color: '#52525b', lineHeight: 1.7, borderLeft: '3px solid #2563eb', paddingLeft: 16 }}>
                  {post.excerpt}
                </p>
              </div>

              {/* Cover image */}
              {post.image && (
                <div style={{ borderRadius: 16, overflow: 'hidden', marginBottom: 20, border: '1px solid #e4e4e7' }}>
                  <Image
                    src={post.image}
                    alt={post.imageAlt ?? post.title}
                    width={900}
                    height={473}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                    priority
                  />
                </div>
              )}

              {/* Contenu MDX/Prose */}
              <div style={{ background: '#fff', borderRadius: 20, border: '1px solid #e4e4e7', padding: '40px 48px', marginBottom: 32 }}>
                <div className="blog-prose" dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>

              <BlogPostCTA />
            </div>
          </div>
        </div>
      </div>
      <Footer showCta={false} />
    </>
  );
}
