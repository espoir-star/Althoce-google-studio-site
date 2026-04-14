'use client';

import React, { useState, useEffect } from 'react';
import { motion, type Variants, useReducedMotion } from 'framer-motion';
import { Zap, Lock, Mail, BrainCircuit, Database, ArrowRight, Linkedin, Twitter } from 'lucide-react';
import { useAppNav } from './NavigationProvider';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

const Footer = ({ showCta = true }: { showCta?: boolean }) => {
  const onChangeView = useAppNav();
  const shouldReduceMotion = useReducedMotion();
  const [isMobileFooter, setIsMobileFooter] = useState(true);

  useEffect(() => {
    const check = () => setIsMobileFooter(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, []);

  const floatingIcons = [
    { icon: Zap, color: "text-amber-300", pos: "top-[10%] left-[5%] md:left-[10%]" },
    { icon: Lock, color: "text-rose-400", pos: "top-[5%] left-1/2 -translate-x-1/2" },
    { icon: Mail, color: "text-blue-400", pos: "top-[30%] right-[5%] md:right-[10%]" },
    { icon: BrainCircuit, color: "text-purple-400", pos: "bottom-[10%] left-[5%] md:left-[15%]" },
    { icon: Database, color: "text-emerald-400", pos: "bottom-[15%] right-[5%] md:right-[20%]" },
  ];

  const navLinks = [
    { name: 'Accueil', action: () => onChangeView('home') },
    { name: 'Notre Méthode', action: () => onChangeView('home', 'methodology') },
    { name: 'Services', action: () => onChangeView('home', 'services') },
    { name: 'Témoignages', action: () => onChangeView('home', 'testimonials') },
    { name: 'FAQ', action: () => onChangeView('home', 'faq') },
    { name: 'Blog', action: () => onChangeView('blog') },
  ];

  const legalLinks = [
    { name: 'Mentions Légales', action: () => onChangeView('legal') },
    { name: 'Confidentialité', action: () => onChangeView('privacy') },
  ];

  return (
    <footer id="contact" className="pt-0">
      {showCta && (
        <div className="bg-white pt-16 md:pt-32 pb-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-50"></div>
          <div className="hidden md:block absolute bottom-0 right-0 w-[500px] h-[500px] bg-electric/5 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="hidden md:block absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100/20 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative rounded-[3rem] bg-[#0A0A1B] border border-white/5 overflow-hidden px-6 py-16 md:py-24 text-center max-w-6xl mx-auto shadow-2xl shadow-indigo-900/10 group"
            >
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-600/10 blur-[100px] rounded-full mix-blend-screen"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-600/10 blur-[100px] rounded-full mix-blend-screen"></div>
              </div>

              <div className="relative z-20 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight text-white leading-tight">
                  Prêt à libérer votre <br /> potentiel ?
                </h2>
                <p className="text-slate-400 mb-10 text-lg md:text-xl leading-relaxed font-light max-w-2xl mx-auto">
                  Ne laissez pas la complexité vous ralentir. Discutons de votre premier agent IA dès aujourd'hui.
                </p>
                <motion.button
                  onClick={() => onChangeView('contact')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg transition-all hover:bg-slate-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                >
                  <span className="relative z-10">Prendre un appel</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>

              <div className="absolute inset-0 pointer-events-none">
                {floatingIcons.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, amount: 0.1 }}
                    animate={(shouldReduceMotion || isMobileFooter) ? {} : { y: [0, -10, 0] }}
                    transition={{ duration: 3 + idx, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
                    className={`absolute p-4 rounded-2xl border border-white/10 bg-white/10 ${item.pos}`}
                  >
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      )}

      <div className="bg-[#050511] text-slate-400 pt-16 pb-12 border-t border-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent opacity-50"></div>
        <div className="hidden md:block absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-900/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="hidden md:block absolute top-0 left-0 w-[500px] h-[500px] bg-blue-900/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5 flex flex-col items-start gap-6">
              <div className="text-3xl font-bold font-display tracking-tighter text-white">
                ALTHOCE<span className="text-electric">.</span>
              </div>
              <p className="text-slate-400 text-base leading-relaxed max-w-sm">
                L'automatisation n'est plus facultative, elle est essentielle.
              </p>
              <div className="flex gap-4 mt-2">
                <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-electric/50 hover:text-electric transition-all text-slate-400">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-electric/50 hover:text-electric transition-all text-slate-400">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="mailto:contact@althoce.com" className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-electric/50 hover:text-electric transition-all text-slate-400">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="md:col-span-3 md:col-start-7">
              <h4 className="text-white font-bold mb-6 font-display text-lg">Entreprise</h4>
              <ul className="space-y-4">
                {navLinks.map((link, idx) => (
                  <li key={idx}>
                    <button
                      onClick={link.action}
                      className="text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-electric transition-all"></span>
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-white font-bold mb-6 font-display text-lg">Politiques</h4>
              <ul className="space-y-4">
                {legalLinks.map((link, idx) => (
                  <li key={idx}>
                    <button
                      onClick={link.action}
                      className="text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-electric transition-all"></span>
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800/50 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <div>© 2024 Althoce. Tous droits réservés.</div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5">
              <span>Made with <span className="text-red-500 animate-pulse">❤️</span> in Bordeaux</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
