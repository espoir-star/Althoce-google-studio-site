'use client';

import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { BookOpen, ArrowRight } from 'lucide-react';
import { useAppNav } from './NavigationProvider';
import type { BlogPost } from '../lib/blog';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const CATEGORY_STYLES: Record<string, string> = {
  "Cas d'usage":   "bg-electric/10 text-electric border-electric/20",
  "Guide pratique":"bg-blue-50 text-blue-600 border-blue-100",
  "Décryptage":    "bg-amber-50 text-amber-700 border-amber-100",
  "Coulisses":     "bg-emerald-50 text-emerald-700 border-emerald-100",
};

const ALL_CATEGORIES = ["Tous", "Cas d'usage", "Guide pratique", "Décryptage", "Coulisses"];

export default function BlogIndexClient({ posts }: { posts: BlogPost[] }) {
  const onChangeView = useAppNav();
  const [activeCategory, setActiveCategory] = useState('Tous');

  const filtered = activeCategory === 'Tous' ? posts : posts.filter(p => p.category === activeCategory);

  return (
    <div className="pt-24 pb-12 md:pt-32 md:pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold font-display tracking-widest uppercase text-slate-900 shadow-sm mb-6">
            <BookOpen className="w-3 h-3 text-electric" />
            Blog
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
            Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-purple-500">Insights</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Cas d'usage, guides pratiques et décryptages sur l'IA pour les PME françaises.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {ALL_CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">Aucun article publié pour l'instant.</p>
          </div>
        ) : (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((post) => (
              <motion.article
                key={post.slug}
                variants={fadeInUp}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-electric/30 transition-all duration-300 p-6 flex flex-col cursor-pointer group"
                onClick={() => onChangeView('blog-post', post.slug)}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${CATEGORY_STYLES[post.category]}`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-400">{post.readingTime}</span>
                </div>
                <h2 className="text-xl font-bold font-display text-slate-900 mb-3 group-hover:text-electric transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-xs text-slate-400">
                    {new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </span>
                  <span className="text-electric text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Lire <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
