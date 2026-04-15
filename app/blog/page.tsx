import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/blog';
import BlogIndexClient from '@/components/BlogIndexClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Blog | Althoce — IA & Automatisation pour PME',
  description: "Cas d'usage concrets, guides pratiques et décryptages sur l'IA et l'automatisation pour les PME et agences françaises.",
  openGraph: {
    title: 'Blog Althoce — Insights IA & Automatisation',
    url: 'https://althoce.com/blog',
  },
  alternates: {
    canonical: 'https://althoce.com/blog',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://althoce.com/blog#blog",
    "name": "Blog Althoce — IA & Automatisation",
    "description": "Cas d'usage concrets, guides pratiques et décryptages sur l'IA pour les PME françaises.",
    "url": "https://althoce.com/blog",
    "publisher": { "@id": "https://althoce.com/#organization" },
    "inLanguage": "fr-FR",
    "blogPost": posts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "url": `https://althoce.com/blog/${post.slug}`,
      "author": { "@id": "https://althoce.com/#organization" },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <BlogIndexClient posts={posts} />
      <Footer showCta={false} />
    </>
  );
}
