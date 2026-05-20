import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import BlogPostCTA from '@/components/BlogPostCTA';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';

const CATEGORY_STYLES: Record<string, { bg: string; color: string; border: string }> = {
  "Cas d'usage":    { bg: '#eff6ff', color: '#2563eb', border: '#bfdbfe' },
  "Guide pratique": { bg: '#eff6ff', color: '#2563eb', border: '#bfdbfe' },
  "Décryptage":     { bg: '#fefce8', color: '#a16207', border: '#fef08a' },
  "Coulisses":      { bg: '#f0fdf4', color: '#15803d', border: '#bbf7d0' },
};

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
      url: `https://althoce.com/blog/${post.slug}`,
      publishedTime: post.date,
    },
    twitter: {
      title: post.title,
      description: post.excerpt,
    },
    alternates: {
      canonical: `https://althoce.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `https://althoce.com/blog/${post.slug}#article`,
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.date,
    "dateModified": post.date,
    "url": `https://althoce.com/blog/${post.slug}`,
    "inLanguage": "fr-FR",
    "author": {
      "@id": "https://althoce.com/#organization",
    },
    "publisher": {
      "@id": "https://althoce.com/#organization",
    },
    "isPartOf": {
      "@id": "https://althoce.com/blog#blog",
    },
    "articleSection": post.category,
    "keywords": post.category,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://althoce.com/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div style={{ paddingTop: 96, paddingBottom: 80, minHeight: '100vh', background: '#fafafa' }}>
        <div style={{ maxWidth: 768, margin: '0 auto', padding: '0 24px' }}>
          <Link
            href="/blog"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#52525b', fontSize: 14, fontWeight: 600, textDecoration: 'none', marginBottom: 32 }}
          >
            <ArrowLeft style={{ width: 16, height: 16 }} />
            Retour au blog
          </Link>

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
                    {new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
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

          <div style={{ background: '#fff', borderRadius: 20, border: '1px solid #e4e4e7', padding: '40px 48px', marginBottom: 32 }}>
            <div className="blog-prose" dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          <BlogPostCTA />
        </div>
      </div>
      <Footer showCta={false} />
    </>
  );
}
