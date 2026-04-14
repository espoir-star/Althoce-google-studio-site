import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import BlogPostCTA from '@/components/BlogPostCTA';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';

const CATEGORY_STYLES: Record<string, string> = {
  "Cas d'usage":    "bg-electric/10 text-electric border-electric/20",
  "Guide pratique": "bg-blue-50 text-blue-600 border-blue-100",
  "Décryptage":     "bg-amber-50 text-amber-700 border-amber-100",
  "Coulisses":      "bg-emerald-50 text-emerald-700 border-emerald-100",
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

  return (
    <>
      <div className="pt-24 pb-12 md:pt-32 md:pb-20 min-h-screen bg-slate-50">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-slate-500 hover:text-electric transition-colors mb-8 text-sm font-medium w-fit"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour au blog
          </Link>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-12 mb-6">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className={`px-3 py-1 rounded-full text-xs font-bold border ${CATEGORY_STYLES[post.category] || ''}`}>
                {post.category}
              </span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-400 text-xs">{post.readingTime}</span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-400 text-xs">
                {new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed border-l-4 border-electric/30 pl-4">
              {post.excerpt}
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-12 mb-8">
            <div className="blog-prose" dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          <BlogPostCTA />
        </div>
      </div>
      <Footer showCta={false} />
    </>
  );
}
