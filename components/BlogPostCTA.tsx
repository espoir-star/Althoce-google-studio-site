'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useAppNav } from './NavigationProvider';

export default function BlogPostCTA() {
  const onChangeView = useAppNav();

  return (
    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden mb-8">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-electric/10 blur-[80px] rounded-full"></div>
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-purple-600/10 blur-[80px] rounded-full"></div>
      </div>
      <div className="relative z-10">
        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
          Prêt à passer à l'action ?
        </h3>
        <p className="text-slate-400 mb-6 text-lg">
          Discutons de votre premier agent IA lors d'un audit gratuit.
        </p>
        <button
          onClick={() => onChangeView('contact')}
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-100 transition-colors"
        >
          Réserver un audit gratuit
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
