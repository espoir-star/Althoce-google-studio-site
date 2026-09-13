import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { extractToc } from '@/lib/extract-toc';
import TableOfContents from '@/components/blog/TableOfContents';
import Footer from '@/components/Footer';
import { ArrowUpRight } from 'lucide-react';
import { PreAuditCTA } from '@/components/brand/Sections';
import b from '@/components/brand/Brand.module.css';
import styles from '@/components/blog/Blog.module.css';

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

  const toc = extractToc(post.content);

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
      "@id": "https://althoce.com/blog#blog",
    },
    "articleSection": post.category,
    "keywords": post.category,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://althoce.com/blog/${post.slug}/`,
    },
  };

  const related = getAllPosts().filter(item=>item.slug!==post.slug).slice(0,2);
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}/>
    <main className={b.page}>
      <article className={styles.article}><div className={b.container}>
        <nav className={b.breadcrumb} aria-label="Fil d’Ariane"><Link href="/">Accueil</Link><span>/</span><Link href="/blog/">Blog</Link><span>/</span><span aria-current="page">{post.category}</span></nav>
        <header className={styles.articleHead}>
          <div className={styles.meta}><span>{post.category}</span><span>{post.readingTime} de lecture</span><time dateTime={post.publishedAt ?? post.date}>{new Date(post.publishedAt ?? post.date).toLocaleDateString('fr-FR',{day:'numeric',month:'long',year:'numeric',timeZone:'Europe/Paris'})}</time></div>
          <h1>{post.title}</h1><p>{post.excerpt}</p>
        </header>
        {post.image&&<div className={styles.articleImage}><Image src={post.image} alt={post.imageAlt ?? post.title} width={1200} height={630} priority sizes="(max-width:900px) 90vw, 920px"/></div>}
        <div className={styles.reading}>
          <aside className={styles.sidebar}><TableOfContents items={toc}/></aside>
          <div className={styles.body}>
            {toc.length>0&&<details className={styles.mobileToc}><summary>Dans cet article</summary><TableOfContents items={toc}/></details>}
            <div className="blog-prose" dangerouslySetInnerHTML={{__html:post.content}}/>
            {related.length>0&&<section className={styles.related}><h2>Pour poursuivre la réflexion.</h2>{related.map(item=><Link key={item.slug} href={`/blog/${item.slug}/`}>{item.title}<ArrowUpRight size={20} aria-hidden="true"/></Link>)}</section>}
          </div>
        </div>
      </div></article>
      <PreAuditCTA/>
    </main>
    <Footer showCta={false}/>
  </>;
}
