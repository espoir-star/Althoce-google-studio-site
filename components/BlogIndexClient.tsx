'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import type { BlogPost } from '@/lib/blog';
import { PreAuditCTA } from './brand/Sections';
import b from './brand/Brand.module.css';
import s from './blog/Blog.module.css';

export default function BlogIndexClient({ posts }: { posts: BlogPost[] }) {
  const [category, setCategory] = useState('Tous');
  const categories = ['Tous', ...Array.from(new Set(posts.map(post => post.category)))];
  const filtered = category === 'Tous' ? posts : posts.filter(post => post.category === category);
  return <main className={b.page}>
    <header className={s.hero}><div className={b.container}>
      <nav className={b.breadcrumb} aria-label="Fil d’Ariane"><a href="/">Accueil</a><span>/</span><span aria-current="page">Blog</span></nav>
      <div className={s.intro}><h1>Comprendre l’IA.<br/><span>Choisir comment avancer.</span></h1><p className={b.lead}>Des cas concrets et des repères pour les dirigeants et leurs équipes. Le regard d’Althoce sur les usages, les choix et les questions qui comptent dans votre entreprise.</p></div>
    </div></header>
    <section className={s.collection} aria-label="Les articles Althoce"><div className={b.container}>
      <div className={s.filters} role="group" aria-label="Filtrer les articles par thème">{categories.map(item=><button type="button" key={item} aria-pressed={category===item} onClick={()=>setCategory(item)}>{item}</button>)}</div>
      <p className={s.count} role="status">{filtered.length} article{filtered.length>1?'s':''} à découvrir</p>
      <div className={s.grid}>{filtered.map((post,index)=><a href={`/blog/${post.slug}/`} key={post.slug} className={`${s.card} ${index===0?s.featured:''}`}>
        <div className={s.cover}><Image src={post.image || '/images/services/cas-equipe.webp'} alt={post.imageAlt || post.title} fill priority={index===0} sizes={index===0?'(max-width:900px) 90vw, 55vw':'(max-width:600px) 90vw, 45vw'}/></div>
        <div className={s.cardBody}><div className={s.meta}><span>{post.category}</span><span>{post.readingTime} de lecture</span></div><h2>{post.title}</h2><p>{post.excerpt}</p><div className={s.cardFoot}><time dateTime={post.publishedAt ?? post.date}>{new Date(post.publishedAt ?? post.date).toLocaleDateString('fr-FR',{day:'numeric',month:'long',year:'numeric',timeZone:'Europe/Paris'})}</time><span>Lire l’article <ArrowUpRight size={18} aria-hidden="true"/></span></div></div>
      </a>)}</div>
      {filtered.length===0&&<p>Aucun article disponible pour le moment.</p>}
    </div></section>
    <PreAuditCTA/>
  </main>;
}
