'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppNav } from './NavigationProvider';

const Navbar = () => {
  const onChangeView = useAppNav();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: string, id?: string) => {
    onChangeView(view, id);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div
          className="text-2xl font-bold font-display tracking-tighter text-slate-900 cursor-pointer"
          onClick={() => handleNavClick('home')}
        >
          ALTHOCE<span className="text-electric">.</span>
        </div>

        <div className="hidden md:flex space-x-8 items-center text-sm font-medium text-slate-600">
          <button onClick={() => handleNavClick('home', 'methodology')} className="hover:text-electric transition-colors">Méthode</button>
          <button onClick={() => handleNavClick('home', 'services')} className="hover:text-electric transition-colors">Services</button>
          <button onClick={() => handleNavClick('home', 'testimonials')} className="hover:text-electric transition-colors">Témoignages</button>
          <button onClick={() => handleNavClick('home', 'faq')} className="hover:text-electric transition-colors">FAQ</button>
          <button onClick={() => handleNavClick('blog')} className="hover:text-electric transition-colors">Blog</button>
          <button onClick={() => handleNavClick('contact')} className="bg-slate-900 text-white px-5 py-2 rounded-full border border-slate-900 transition-all hover:bg-slate-800 hover:shadow-lg">
            Contact
          </button>
        </div>

        <button
          className="md:hidden text-slate-900 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 p-6 flex flex-col space-y-4 md:hidden overflow-hidden shadow-xl"
          >
            <button onClick={() => handleNavClick('home', 'methodology')} className="block w-full text-left text-slate-600 hover:text-electric py-2">Méthode</button>
            <button onClick={() => handleNavClick('home', 'services')} className="block w-full text-left text-slate-600 hover:text-electric py-2">Services</button>
            <button onClick={() => handleNavClick('home', 'testimonials')} className="block w-full text-left text-slate-600 hover:text-electric py-2">Témoignages</button>
            <button onClick={() => handleNavClick('home', 'faq')} className="block w-full text-left text-slate-600 hover:text-electric py-2">FAQ</button>
            <button onClick={() => handleNavClick('blog')} className="block w-full text-left text-slate-600 hover:text-electric py-2">Blog</button>
            <button onClick={() => handleNavClick('contact')} className="block w-full text-center bg-slate-900 text-white px-5 py-3 rounded-lg font-medium shadow-lg shadow-slate-900/20">
              Contact
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
