'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Scale } from 'lucide-react';

export default function LegalPageClient() {
  return (
    <div className="pt-24 pb-12 md:pt-32 md:pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold font-display tracking-widest uppercase text-slate-900 shadow-sm mb-6">
            <Scale className="w-3 h-3 text-electric" />
            Informations Légales
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Mentions Légales</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 space-y-10"
        >
          <section>
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">1. Éditeur du site</h2>
            <p className="text-slate-600 leading-relaxed">
              Le site Althoce est édité par la société <strong>ALTHOCE CONSEIL</strong>.<br />
              <strong>Forme juridique :</strong> SAS (Société par Actions Simplifiée)<br />
              <strong>Siège social :</strong> 5 RUE FENELON, 33000 BORDEAUX<br />
              <strong>SIREN :</strong> 999 696 404<br />
              <strong>Email de contact :</strong> contact@althoce.com
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">2. Hébergement</h2>
            <p className="text-slate-600 leading-relaxed">
              Ce site est hébergé par Vercel Inc.<br />
              Adresse : 440 N Barranca Ave #4133 Covina, CA 91723<br />
              Site web : https://vercel.com
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">3. Propriété intellectuelle</h2>
            <p className="text-slate-600 leading-relaxed">
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">4. Responsabilité</h2>
            <p className="text-slate-600 leading-relaxed">
              ALTHOCE CONSEIL s'efforce d'assurer au mieux de ses possibilités, l'exactitude et la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de corriger, à tout moment et sans préavis, le contenu.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
