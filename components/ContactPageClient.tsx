'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { FAQ } from './HomePageClient';

export default function ContactPageClient() {
  return (
    <div className="pt-24 pb-12 md:pt-32 md:pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold font-display tracking-widest uppercase text-slate-900 shadow-sm mb-6">
            <Calendar className="w-3 h-3 text-electric" />
            Réserver un appel
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Confiez-nous votre Prochain <span className="text-electric">Projet IA</span>
          </h1>
          <p className="text-slate-600 text-lg">
            Sélectionnez un créneau ci-dessous pour une consultation gratuite de 30 minutes.
            Nous analyserons vos besoins et déterminerons si l'IA peut booster votre activité.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-200 overflow-hidden mb-24"
        >
          <div className="w-full h-[700px] md:h-[800px]">
            <iframe
              src="https://www.cal.eu/espoir-mwami-zwttsc/30min?embed=true&theme=light"
              width="100%"
              height="100%"
              className="border-0"
              title="Réserver un appel avec Althoce"
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
              loading="lazy"
              style={{ display: 'block' }}
            ></iframe>
          </div>
        </motion.div>

        <FAQ />
      </div>
    </div>
  );
}
