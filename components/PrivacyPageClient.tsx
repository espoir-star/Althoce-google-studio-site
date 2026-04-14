'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

export default function PrivacyPageClient() {
  return (
    <div className="pt-24 pb-12 md:pt-32 md:pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold font-display tracking-widest uppercase text-slate-900 shadow-sm mb-6">
            <FileText className="w-3 h-3 text-electric" />
            Confidentialité
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Politique de Confidentialité</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 space-y-10"
        >
          <section>
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">1. Collecte des données</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Dans le cadre de l'utilisation de notre site, nous pouvons collecter les données suivantes :
            </p>
            <ul className="list-disc list-inside text-slate-600 leading-relaxed ml-4">
              <li>Nom et Prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Informations relatives à votre entreprise</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">2. Utilisation des données</h2>
            <p className="text-slate-600 leading-relaxed">Vos données sont collectées uniquement dans le but de :</p>
            <ul className="list-disc list-inside text-slate-600 leading-relaxed ml-4 mt-2">
              <li>Répondre à vos demandes de contact.</li>
              <li>Organiser les rendez-vous de consultation.</li>
              <li>Vous envoyer des informations pertinentes sur nos services (avec votre accord).</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-4">
              Nous ne vendons, n'échangeons, ni ne transférons aucune de vos données personnelles à des tiers à des fins commerciales.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">3. Sécurité des données</h2>
            <p className="text-slate-600 leading-relaxed">
              Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Vos données sont stockées dans des environnements sécurisés conformes aux normes européennes (RGPD).
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">4. Vos droits</h2>
            <p className="text-slate-600 leading-relaxed">
              Conformément à la réglementation RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant. Pour exercer ce droit : <strong>contact@althoce.com</strong>.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
