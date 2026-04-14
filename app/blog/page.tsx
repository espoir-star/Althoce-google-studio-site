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
  return (
    <>
      <BlogIndexClient posts={posts} />
      <Footer showCta={false} />
    </>
  );
}
