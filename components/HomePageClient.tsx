'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  motion, AnimatePresence, useScroll, useTransform,
  useInView, animate, Variants, useReducedMotion
} from 'framer-motion';
import {
  Zap, BarChart3, Users, ShieldCheck, Cpu, Layers, ArrowRight,
  ArrowLeft, CheckCircle2, ChevronDown, Database, Lock, Workflow,
  Briefcase, MessageSquare, Settings2, UserCheck, ScanLine, Blocks,
  Quote, Fingerprint, Server, Linkedin, Twitter, Mail, BrainCircuit
} from 'lucide-react';
import { useAppNav } from './NavigationProvider';
import {
  stats, methodologySteps, detailedUseCases, services, testimonials,
  faqs, PartnerLogos, HeroLogos, getOptimizedImage
} from '../lib/data';

// ── Animation Variants ───────────────────────────────────────
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

// ── Hero ─────────────────────────────────────────────────────
const Hero = () => {
  const onChangeView = useAppNav();
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const y1 = useTransform(scrollY, [0, 500], [0, isMobile ? 0 : 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, isMobile ? 0 : -150]);

  const titleWords = ["Conception", "des", "automatisations", "qui", "génèrent", "(vraiment)", "du", "ROI."];

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center pt-24 pb-12 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <motion.div style={{ y: y1 }} className="hidden md:block absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[100px] pointer-events-none mix-blend-multiply"></motion.div>
      <motion.div style={{ y: y2 }} className="hidden md:block absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-100/60 rounded-full blur-[100px] pointer-events-none mix-blend-multiply"></motion.div>
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/40 blur-[80px] rounded-full z-0"></div>

      <div className="hidden md:block absolute inset-0 pointer-events-none overflow-hidden opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-slate-200 rounded-full animate-orbit-slow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-slate-200 rounded-full animate-orbit-medium border-dashed"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-slate-200 rounded-full animate-orbit-slow opacity-30"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-5xl mx-auto flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-display leading-[1.1] tracking-tight mb-6 flex flex-wrap justify-center gap-x-2 md:gap-x-4 text-slate-900">
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }}
                className={word === "(vraiment)" ? "text-transparent bg-clip-text bg-gradient-to-r from-electric to-purple-500" : ""}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p variants={fadeInUp} className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Plus de marge. Plus de qualité. Plus de rétention.
            <br className="hidden md:block" />
            Libérez vos talents des tâches répétitives.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => onChangeView('contact')}
              className="group relative px-10 py-5 bg-slate-900 text-white font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-slate-900/30 ring-1 ring-white/10 w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 flex items-center justify-center gap-3">
                Réserver un appel
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-8 md:mt-12 flex justify-center">
            <div className="group flex items-center gap-3 md:gap-4 px-4 py-2 md:px-6 md:py-3 bg-white/80 backdrop-blur-sm rounded-full border border-dashed border-slate-300 shadow-sm hover:border-electric/40 transition-all duration-300 hover:shadow-md cursor-default">
              <div className="flex -space-x-3">
                <img width={40} height={40} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white object-cover shadow-sm" src={getOptimizedImage("https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64", 64)} alt="Client 1" />
                <img width={40} height={40} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white object-cover shadow-sm" src={getOptimizedImage("https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64", 64)} alt="Client 2" />
                <img width={40} height={40} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white object-cover shadow-sm" src={getOptimizedImage("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64", 64)} alt="Client 3" />
              </div>
              <div className="text-left">
                <p className="text-xs md:text-sm font-medium text-slate-600">
                  <span className="font-bold text-slate-900 text-sm md:text-base">+50 entreprises</span>
                  <span className="block text-[10px] md:text-xs text-slate-400 leading-tight">accompagnées par Althoce</span>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-16 md:mt-24 w-full max-w-6xl mx-auto overflow-hidden">
            <div className="relative w-full flex overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
              <div className="flex animate-scroll whitespace-nowrap items-center min-w-full shrink-0 justify-around">
                {HeroLogos.map((src, i) => (
                  <div key={i} className="mx-8 md:mx-12 shrink-0 flex items-center justify-center">
                    <img width={150} height={64} src={src} alt="Tech Partner" loading="lazy" className="h-12 md:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
              <div className="flex animate-scroll whitespace-nowrap items-center min-w-full shrink-0 justify-around">
                {HeroLogos.map((src, i) => (
                  <div key={`dup-${i}`} className="mx-8 md:mx-12 shrink-0 flex items-center justify-center">
                    <img width={150} height={64} src={src} alt="Tech Partner" loading="lazy" className="h-12 md:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// ── StatCard ─────────────────────────────────────────────────
const StatCard: React.FC<{ stat: typeof stats[0]; index: number }> = ({ stat, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(stat.value.replace(/[\d\.,]+/, "0"));

  useEffect(() => {
    if (isInView) {
      const match = stat.value.match(/([\d\.,]+)/);
      if (match) {
        const numericValue = parseFloat(match[0].replace(',', '.'));
        const controls = animate(0, numericValue, {
          duration: 1.5,
          ease: "easeOut",
          onUpdate: (latest) => {
            const formatted = Number.isInteger(numericValue)
              ? Math.round(latest).toString()
              : latest.toFixed(1).replace('.', ',');
            setDisplayValue(stat.value.replace(match[0], formatted));
          }
        });
        return () => controls.stop();
      } else {
        setDisplayValue(stat.value);
      }
    }
  }, [isInView, stat.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="relative text-center group p-2 md:p-6 rounded-3xl hover:bg-slate-50 transition-colors duration-500"
    >
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-electric/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
      <div className="relative z-10 flex flex-col justify-between h-full">
        <motion.div
          className="text-2xl sm:text-4xl md:text-7xl font-bold font-display mb-1 md:mb-2 inline-block bg-clip-text text-transparent bg-gradient-to-br from-slate-900 to-slate-600"
          initial={{ scale: 0.9 }}
          animate={isInView ? { scale: 1 } : { scale: 0.9 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {displayValue}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
        >
          <div className="text-electric font-bold mb-1 md:mb-3 uppercase tracking-widest text-[9px] md:text-xs font-display">{stat.label}</div>
          <p className="text-slate-500 text-[10px] md:text-sm max-w-[250px] mx-auto leading-tight md:leading-relaxed hidden sm:block">{stat.description}</p>
          <p className="text-slate-500 text-[9px] mx-auto leading-tight sm:hidden block line-clamp-3">{stat.description}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

// ── StatsSection ──────────────────────────────────────────────
const StatsSection = () => (
  <section className="py-12 md:py-24 bg-white relative z-10 border-y border-slate-100 overflow-hidden">
    <div className="hidden md:block absolute -left-20 top-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl mix-blend-multiply pointer-events-none"></div>
    <div className="hidden md:block absolute -right-20 bottom-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl mix-blend-multiply pointer-events-none"></div>
    <div className="container mx-auto px-2 md:px-6 relative z-10">
      <div className="grid grid-cols-3 gap-2 md:gap-12 divide-x divide-slate-100">
        {stats.map((stat, index) => <StatCard key={index} stat={stat} index={index} />)}
      </div>
    </div>
  </section>
);

// ── ProblemSolution ───────────────────────────────────────────
const ProblemSolution = () => (
  <section className="py-16 md:py-32 bg-slate-50 relative overflow-hidden">
    <div className="hidden md:block absolute right-0 top-1/2 w-[600px] h-[600px] bg-electric/5 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2 mix-blend-multiply"></div>
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-600 text-xs font-bold uppercase tracking-wider mb-6 border border-amber-100">
            <Zap className="w-3 h-3" /> Le Constat
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight text-slate-900">
            L'IA n'est pas un gadget, c'est votre <span className="text-electric">moteur de croissance</span>.
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-600 text-lg leading-relaxed mb-8">
            Aujourd'hui, beaucoup d'entreprises voient l'IA comme un labyrinthe complexe.
            Résultat ? Elles perdent des heures sur des processus manuels qui pourraient être délégués à une machine en quelques secondes.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-start gap-6 p-8 rounded-[2.5rem] bg-[#0b0f19] relative overflow-hidden group shadow-2xl shadow-slate-900/10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1e293b]/50 via-transparent to-transparent opacity-80 pointer-events-none"></div>
            <div className="relative z-10 shrink-0 w-16 h-16 rounded-2xl bg-[#1e293b] border border-white/5 flex items-center justify-center text-white shadow-inner">
              <Workflow className="w-8 h-8 opacity-90" />
            </div>
            <div className="relative z-10 pt-1">
              <h4 className="font-bold text-white text-2xl mb-3 font-display tracking-tight">La Solution Althoce</h4>
              <p className="text-base text-slate-400 leading-relaxed font-light">Nous ne remplaçons pas vos équipes, nous les équipons pour qu'elles reprennent le contrôle sur leur temps et leur créativité.</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "backOut" }}
          className="relative"
        >
          <div className="glass-card-strong p-10 rounded-3xl relative z-10 md:animate-float bg-white">
            <div className="space-y-8">
              <div className="space-y-2">
                <div className="flex items-center justify-between opacity-50">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_red]"></div>
                    <span className="text-slate-500 font-medium">Sans IA</span>
                  </div>
                  <span className="text-xs text-red-500 font-bold">-15h/semaine</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-1/3 bg-red-400"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-electric shadow-[0_0_10px_#7c3aed]"></div>
                    <span className="text-slate-900 font-bold">Avec Althoce</span>
                  </div>
                  <span className="text-xs text-electric font-bold">+40h/semaine</span>
                </div>
                <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-electric to-purple-400 absolute top-0 left-0"
                  ></motion.div>
                </div>
              </div>
            </div>
            <div className="mt-10 pt-8 border-t border-slate-100 grid grid-cols-2 gap-6">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 text-center">
                <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Marge</p>
                <p className="text-3xl font-bold text-emerald-500">+25%</p>
              </div>
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 text-center">
                <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Erreurs</p>
                <p className="text-3xl font-bold text-electric">0%</p>
              </div>
            </div>
          </div>
          <div className="absolute -inset-6 border border-slate-200/50 rounded-[40px] -z-10 animate-pulse-glow bg-white/40"></div>
        </motion.div>
      </div>
    </div>
  </section>
);

// ── Methodology ───────────────────────────────────────────────
const Methodology = () => (
  <section id="methodology" className="py-16 md:py-32 bg-white relative overflow-hidden">
    <div className="absolute inset-0 bg-noise opacity-10 mix-blend-multiply"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white opacity-80"></div>
    <div className="container mx-auto px-6 relative z-10">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-24">
        <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-6 text-slate-900 tracking-tight">Comment ça marche&nbsp;?</motion.h2>
        <motion.p variants={fadeInUp} className="text-slate-500 max-w-xl mx-auto">Une méthodologie éprouvée pour transformer votre entreprise en machine de guerre, étape par étape.</motion.p>
      </motion.div>
      <div className="relative">
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-slate-100 -translate-y-1/2 z-0">
          <motion.div initial={{ scaleX: 0, originX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 1.5, ease: "easeInOut" }} viewport={{ once: true }} className="w-full h-full bg-gradient-to-r from-transparent via-electric/30 to-transparent"></motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {methodologySteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative group ${index % 2 === 0 ? 'md:translate-y-[-20px]' : 'md:translate-y-[20px]'}`}
            >
              <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-electric rounded-full z-10 group-hover:scale-150 group-hover:bg-electric transition-all duration-300 shadow-[0_0_15px_rgba(124,58,237,0.3)]"></div>
              <div className={`glass-card p-8 rounded-3xl h-full relative z-20 hover:border-electric/40 transition-all duration-500 group-hover:-translate-y-2 bg-white ${index % 2 === 0 ? 'md:animate-float' : 'md:animate-float-delayed'}`}>
                <div className="absolute -right-2 -top-4 text-8xl font-display font-bold text-slate-100 select-none pointer-events-none group-hover:text-electric/5 transition-colors">{step.id}</div>
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 text-slate-700 group-hover:text-electric group-hover:scale-110 transition-all duration-300 shadow-sm">
                  <step.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-display text-slate-900">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ── UseCases ─────────────────────────────────────────────────
const UseCases = () => (
  <section className="py-16 md:py-32 bg-slate-50 relative overflow-hidden">
    <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-[80px] pointer-events-none mix-blend-multiply"></div>
    <div className="container mx-auto px-6 relative z-10">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-20 max-w-3xl">
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold font-display mb-6 leading-tight text-slate-900">
          Ce que nous pouvons <br /><span className="text-electric">libérer pour vous</span>.
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-slate-600 text-lg">Exemples concrets de métiers transformés par nos solutions.</motion.p>
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 gap-8">
        {detailedUseCases.map((useCase, index) => (
          <motion.div key={index} variants={fadeInUp} whileHover={{ y: -5 }} className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-electric/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10 blur-xl"></div>
            <div className="glass-card p-8 rounded-3xl h-full border border-slate-200 group-hover:border-electric/30 transition-all duration-500 bg-white/80 hover:bg-white shadow-sm hover:shadow-xl">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-700 group-hover:bg-electric group-hover:text-white group-hover:scale-110 transition-all duration-300 border border-slate-100 group-hover:border-transparent">
                  <useCase.icon className="w-6 h-6" />
                </div>
                <div className="px-3 py-1 rounded-full bg-electric/5 border border-electric/10 text-electric text-xs font-bold uppercase tracking-wider group-hover:bg-electric group-hover:text-white transition-colors duration-300">{useCase.stat}</div>
              </div>
              <h3 className="text-2xl font-bold font-display text-slate-900 mb-4 group-hover:text-electric transition-colors">{useCase.title}</h3>
              <div className="bg-slate-50 rounded-lg p-4 mb-6 border-l-2 border-electric/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-electric/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <p className="text-sm text-slate-600 italic relative z-10 font-mono">"{useCase.quote}"</p>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">{useCase.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

// ── Values ────────────────────────────────────────────────────
const Values = () => (
  <section className="py-16 md:py-24 bg-white relative overflow-hidden border-t border-slate-100">
    <div className="absolute inset-0 bg-noise opacity-20 mix-blend-multiply pointer-events-none"></div>
    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #e2e8f0 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
    <div className="container mx-auto px-6 relative z-10">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <motion.div variants={fadeInUp}>
          <motion.div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric/10 text-electric text-xs font-bold uppercase tracking-wider mb-8">
            <ShieldCheck className="w-4 h-4" /> Éthique & Sécurité
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 text-slate-900 leading-tight">
            La sécurité n'est pas une option, <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-purple-600">c'est notre fondation.</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8 border-l-4 border-electric/20 pl-6">
            Nous construisons des forteresses numériques. Vos données ne quittent jamais l'Europe, vos processus sont cloisonnés, et l'humain reste le pilote final.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0"><Fingerprint className="w-5 h-5" /></div>
              <div><h4 className="font-bold text-slate-900">100% GDPR Compliant</h4><p className="text-sm text-slate-500">Données cryptées et hébergées en UE.</p></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0"><Server className="w-5 h-5" /></div>
              <div><h4 className="font-bold text-slate-900">Instance Privée</h4><p className="text-sm text-slate-500">Pas de mutualisation. Votre propre environnement.</p></div>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6">
          <motion.div variants={fadeInUp} className="bg-slate-900 rounded-[2rem] p-8 text-white relative overflow-hidden group shadow-2xl shadow-slate-900/20">
            <motion.div animate={{ top: ['0%', '100%', '0%'] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="hidden md:block absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-50 z-10 blur-sm"></motion.div>
            <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay"></div>
            <div className="relative z-20 flex justify-between items-start mb-8">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10"><Lock className="w-6 h-6 text-emerald-400" /></div>
              <div className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono uppercase tracking-widest animate-pulse">Système Sécurisé</div>
            </div>
            <h3 className="text-2xl font-bold mb-2 font-display">Données Sanctuarisées</h3>
            <p className="text-slate-400 text-sm">Chiffrement de bout en bout. Vos secrets industriels restent secrets.</p>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-white rounded-[2rem] p-8 border border-slate-200 relative overflow-hidden group shadow-xl shadow-slate-200/50">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-100 to-pink-100 rounded-bl-[100px] -z-10 opacity-50 group-hover:scale-110 transition-transform duration-700"></div>
            <div className="relative z-20 flex justify-between items-start mb-8">
              <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center border border-purple-100"><Users className="w-6 h-6 text-purple-600" /></div>
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64",
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64"
                ].map((src, i) => (
                  <div key={i} className={`w-10 h-10 rounded-full border-2 border-white overflow-hidden z-${30 - i * 10} shadow-sm`}>
                    <img width={40} height={40} src={getOptimizedImage(src, 64)} alt="Team Member" loading="lazy" className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500 z-0">+</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2 font-display text-slate-900">L'Humain Augmenté</h3>
            <p className="text-slate-500 text-sm">L'IA gère la répétition, vos talents gèrent la stratégie. Une symbiose parfaite.</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

// ── Services ──────────────────────────────────────────────────
const Services = () => {
  const onChangeView = useAppNav();
  return (
    <section id="services" className="py-16 md:py-32 relative overflow-hidden bg-slate-50/50">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-24 max-w-3xl mx-auto">
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-display font-bold mb-6 text-slate-900">Nos Services</motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-600 text-lg">Une suite complète d'interventions pour faire passer votre entreprise à l'ère de l'intelligence artificielle.</motion.p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group relative h-full">
              <div className="absolute -inset-[1px] bg-gradient-to-r from-electric via-purple-300 to-electric rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              <div className="relative h-full bg-white border border-slate-200 rounded-3xl p-8 overflow-hidden transition-all duration-500 group-hover:shadow-2xl shadow-lg shadow-slate-200/50">
                <div className="absolute top-0 right-0 w-32 h-32 bg-electric/5 blur-[50px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-electric/10 transition-colors duration-500"></div>
                <div className="relative w-14 h-14 mb-8">
                  <div className="absolute inset-0 bg-electric/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative w-full h-full bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-slate-600 group-hover:text-electric transition-colors duration-300">
                    <service.icon className="w-7 h-7" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 font-display text-slate-900 group-hover:text-electric transition-colors duration-300">{service.title}</h3>
                <p className="text-slate-600 text-base leading-relaxed font-medium">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-16 text-center">
          <button onClick={() => onChangeView('contact')} className="px-8 py-4 bg-slate-900 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-slate-900/20 hover:scale-105 flex items-center gap-2 mx-auto border border-slate-800">
            Prendre RDV <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

// ── Testimonials ──────────────────────────────────────────────
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-16 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-16">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-display font-bold mb-4 text-slate-900">Avis Clients</motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-500 text-lg">Retours d'expérience de ceux qui ont franchi le pas.</motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative bg-white rounded-[2.5rem] p-8 md:p-16 shadow-2xl shadow-slate-200/50 border border-slate-100 min-h-[400px] flex flex-col justify-center items-center text-center overflow-hidden">
            <div className="absolute top-8 left-8 text-electric/10">
              <Quote className="w-20 h-20 md:w-32 md:h-32 transform -scale-x-100" />
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative z-10 flex flex-col items-center"
              >
                <p className="text-2xl md:text-3xl lg:text-4xl font-display font-medium text-slate-900 leading-tight mb-10 max-w-3xl">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div className="flex flex-col items-center gap-4">
                  <div className="relative">
                    {testimonials[currentIndex].image ? (
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full p-1 bg-gradient-to-br from-electric via-purple-400 to-indigo-500 shadow-xl shadow-electric/20">
                        <img width={96} height={96} src={getOptimizedImage(testimonials[currentIndex].image!, 200)} alt={testimonials[currentIndex].author} loading="lazy" className="w-full h-full rounded-full object-cover border-2 border-white" />
                      </div>
                    ) : (
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-electric to-purple-400 flex items-center justify-center text-white text-3xl font-bold shadow-xl shadow-electric/30 border-4 border-white">
                        {testimonials[currentIndex].author.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-slate-900 text-lg md:text-xl mb-1">{testimonials[currentIndex].author}</div>
                    <div className="text-electric font-bold text-xs uppercase tracking-widest bg-electric/5 px-3 py-1 rounded-full inline-block">{testimonials[currentIndex].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {testimonials.map((_, idx) => (
                <button key={idx} onClick={() => setCurrentIndex(idx)} className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-electric' : 'w-2 bg-slate-200 hover:bg-slate-300'}`} aria-label={`Aller au témoignage ${idx + 1}`} />
              ))}
            </div>
          </div>

          <div className="hidden md:flex absolute top-1/2 -left-20 -translate-y-1/2">
            <button onClick={prev} className="p-4 rounded-full bg-white border border-slate-100 shadow-lg text-slate-600 hover:text-electric hover:scale-110 transition-all duration-300 group" aria-label="Témoignage précédent">
              <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="hidden md:flex absolute top-1/2 -right-20 -translate-y-1/2">
            <button onClick={next} className="p-4 rounded-full bg-white border border-slate-100 shadow-lg text-slate-600 hover:text-electric hover:scale-110 transition-all duration-300 group" aria-label="Témoignage suivant">
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="flex md:hidden justify-center gap-6 mt-8">
            <button onClick={prev} className="p-4 rounded-full bg-white border border-slate-100 shadow-lg text-slate-600 hover:text-electric transition-colors" aria-label="Témoignage précédent"><ArrowLeft className="w-6 h-6" /></button>
            <button onClick={next} className="p-4 rounded-full bg-white border border-slate-100 shadow-lg text-slate-600 hover:text-electric transition-colors" aria-label="Témoignage suivant"><ArrowRight className="w-6 h-6" /></button>
          </div>
        </div>
      </div>
    </section>
  );
};

// ── Partners ──────────────────────────────────────────────────
const Partners = () => (
  <section className="py-16 md:py-24 border-y border-slate-100 bg-slate-50 relative overflow-hidden">
    <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
    <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
    <div className="container mx-auto px-6 mb-16 text-center relative z-10">
      <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-200 shadow-lg shadow-slate-200/40">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-slate-800 text-xs font-bold font-display tracking-widest uppercase">Notre écosystème connecté</span>
      </div>
    </div>
    <div className="flex overflow-hidden">
      <div className="flex animate-scroll whitespace-nowrap items-center min-w-full shrink-0">
        {PartnerLogos.map((partner, i) => (
          <div key={i} className="mx-8 md:mx-16 flex items-center justify-center transition-all duration-500 cursor-default hover:scale-105 opacity-90 hover:opacity-100">
            <img width={140} height={56} src={partner.src} alt={partner.name} loading="lazy" className="h-10 md:h-14 w-auto object-contain" />
          </div>
        ))}
      </div>
      <div className="flex animate-scroll whitespace-nowrap items-center min-w-full shrink-0">
        {PartnerLogos.map((partner, i) => (
          <div key={`dup-${i}`} className="mx-8 md:mx-16 flex items-center justify-center transition-all duration-500 cursor-default hover:scale-105 opacity-90 hover:opacity-100">
            <img width={140} height={56} src={partner.src} alt={partner.name} loading="lazy" className="h-10 md:h-14 w-auto object-contain" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ── FAQ ───────────────────────────────────────────────────────
export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-32 bg-slate-50 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-16">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-display font-bold mb-6 text-slate-900">Questions Fréquentes</motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-500 text-lg">Tout ce que vous devez savoir avant de commencer.</motion.p>
        </motion.div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex items-center justify-between p-6 text-left focus:outline-none">
                <span className="font-bold text-slate-900 text-lg pr-8">{faq.question}</span>
                {openIndex === index
                  ? <ChevronDown className="transform rotate-180 transition-transform text-electric shrink-0" />
                  : <ChevronDown className="transition-transform text-slate-400 shrink-0" />}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── HomePageClient ────────────────────────────────────────────
export default function HomePageClient() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ProblemSolution />
      <Methodology />
      <UseCases />
      <Values />
      <Services />
      <Testimonials />
      <Partners />
      <FAQ />
    </>
  );
}
