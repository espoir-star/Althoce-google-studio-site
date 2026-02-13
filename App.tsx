import React, { useState, useEffect, useRef } from 'react';
import './index.css'; 
import { 
  Zap, 
  BarChart3, 
  Users, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  ArrowRight, 
  ArrowLeft, 
  Menu, 
  X,
  CheckCircle2,
  ChevronDown,
  BrainCircuit,
  Database,
  Lock,
  Workflow,
  Briefcase,
  MessageSquare,
  Settings2,
  UserCheck,
  ScanLine,
  Blocks,
  Quote,
  Mail,
  Calendar,
  Fingerprint,
  Server,
  FileText,
  Scale,
  Linkedin,
  Twitter
} from 'lucide-react';
import { 
  motion, 
  AnimatePresence, 
  useScroll, 
  useTransform, 
  useInView, 
  animate, 
  Variants,
  useReducedMotion 
} from 'framer-motion';
import { 
  ServiceItem, 
  TestimonialItem, 
  FAQItem, 
  StatItem,
  UseCaseItem 
} from './types';

// --- DATA DEFINITIONS ---

// Helper for optimized images
const getOptimizedImage = (url: string, width = 600) => {
  if (url.includes('images.unsplash.com')) {
    // Force lower quality and specific width for performance
    return `${url}&w=${width}&q=60&auto=format`; 
  }
  return url;
};

const stats: StatItem[] = [
  { value: "-70%", label: "Temps de Saisie", description: "Administratif réduit." },
  { value: "+758", label: "Flows Créés", description: "Actifs 24h/24." },
  { value: "+5M€", label: "Économisés", description: "Pour nos clients." }
];

const methodologySteps = [
  { 
    id: "01", 
    title: "L'Audit", 
    desc: "On ne devine pas, on mesure. Cartographie précise des tâches chronophages.",
    icon:  BarChart3
  },
  { 
    id: "02", 
    title: "Le Plan", 
    desc: "Roadmap claire : quels outils, pour quels résultats, en combien de temps.",
    icon: Layers
  },
  { 
    id: "03", 
    title: "La Création", 
    desc: "Développement des agents et connexion à vos logiciels (Slack, CRM, Mails).",
    icon: Cpu
  },
  { 
    id: "04", 
    title: "L'Autonomie", 
    desc: "Formation des équipes. Vous repartez avec les clés d'un système autonome.",
    icon: CheckCircle2
  }
];

const useCases: UseCaseItem[] = [
  {
    title: "Vente & Growth",
    quote: "\"Fini le copier-coller dans le CRM.\"",
    description: "Automatisez la prospection ultra-personnalisée et le scoring de leads. Vos commerciaux ne parlent qu'à des gens qualifiés."
  },
  {
    title: "Relation Client",
    quote: "\"Répondez à 3h du matin.\"",
    description: "Des agents IA qui résolvent les tickets complexes avec votre ton de voix et une disponibilité totale."
  },
  {
    title: "Opérations & Admin",
    quote: "\"Zéro saisie manuelle.\"",
    description: "Facturation automatique, tri de documents intelligents. L'erreur humaine disparaît de l'équation."
  },
  {
    title: "Ressources Humaines",
    quote: "\"Recrutez sur les compétences.\"",
    description: "Analyse prédictive des CV et automatisation de l'onboarding pour une expérience candidat impeccable."
  }
];

const services: ServiceItem[] = [
  {
    title: "Audit & Roadmap IA",
    description: "Diagnostic 48h. Arrêtez de tester, commencez à implémenter.",
    icon: ScanLine
  },
  {
    title: "Agents IA Autonomes",
    description: "Entités capables de réfléchir, prioriser et exécuter des tâches complexes.",
    icon: Cpu
  },
  {
    title: "Apps Métiers sur-mesure",
    description: "Outils internes boostés à l'IA pour centraliser votre puissance.",
    icon: Blocks
  },
  {
    title: "Formation & Workshops",
    description: "On lève les peurs et on installe une culture de l'efficacité.",
    icon: Zap
  }
];

const testimonials: TestimonialItem[] = [
  {
    quote: "Althoce ne se contente pas d'automatiser : ils repensent vos process pour supprimer l'inutile. Une vision claire, une exécution rapide et un vrai accompagnement stratégique.",
    author: "Marc A.",
    role: "Head of Performance",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3"
  },
  {
    quote: "On a divisé par deux notre temps administratif. L'expérience client est plus fluide et j'ai pu me concentrer sur la vente : nos résultats ont doublé en quelques mois.",
    author: "Sarah L.",
    role: "Responsable Développement Commercial",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3"
  },
  {
    quote: "Althoce n'a pas installé un logiciel, ils ont installé une nouvelle ère. On fait enfin notre vrai métier : le conseil.",
    author: "Sophie M.",
    role: "Fondatrice",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3"
  },
  {
    quote: "On passait 15h/semaine sur les leads. C'est tombé à 10 min. On a doublé nos RDV en deux mois.",
    author: "Thomas L.",
    role: "Directeur des Opérations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3"
  },
  {
    quote: "Grâce à Althoce, l'IA est devenue un collègue sur qui on peut compter. On a retrouvé du temps pour nos clients.",
    author: "Lise K.",
    role: "Agence Marketing",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3"
  }
];

const faqs: FAQItem[] = [
  {
    question: "Comment gérez-vous la maintenance du système ?",
    answer: "Nous ne nous contentons pas de \"livrer et partir\". Le monde de l'API et des LLM évolue vite : nous assurons une veille constante pour mettre à jour vos connecteurs, optimiser vos modèles d'IA et corriger le moindre bug. En bref : on garde le cap sous le capot pour que votre moteur ne s'arrête jamais."
  },
  {
    question: "À qui appartient le système si notre collaboration s'arrête ?",
    answer: "À vous, à 100 %. Nous développons exclusivement sur votre propre instance n8n. Contrairement à d'autres agences, nous ne pratiquons pas la \"rétention technique\" : si vous décidez de voler de vos propres ailes, vous gardez les clés, les accès et l'intégralité du code instantanément."
  },
  {
    question: "Combien de temps faut-il pour voir mes premières automatisations en production ?",
    answer: "L'agilité est notre priorité. Selon la complexité de vos processus, comptez entre 2 et 7 semaines pour passer du concept à une automatisation fonctionnelle et testée. Nous privilégions des cycles courts pour que vous puissiez mesurer le ROI le plus vite possible."
  },
  {
    question: "Peut-on héberger les workflows sur nos propres serveurs ?",
    answer: "Absolument. Nous prônons la souveraineté numérique. Si vous avez les ressources en interne, nous installons le système sur votre infrastructure. Il faudra simplement nous assurer ensemble que votre configuration (VPS/Serveur) est assez robuste pour encaisser la puissance de nos automatisations."
  },
  {
    question: "Comment garantissez-vous la protection de nos données ?",
    answer: "La data est votre actif le plus précieux. Nous utilisons des serveurs (VPS) exclusivement situés en Union Européenne et sélectionnons des outils 100% conformes au RGPD. Aucun compromis n'est fait sur la confidentialité : vos données restent sous votre contrôle, dans un environnement sécurisé et cloisonné."
  },
  {
    question: "L’IA va-t-elle remplacer mes employés ?",
    answer: "Non, elle va remplacer leur ennui. Notre mission est d'automatiser les 80 % de tâches répétitives et sans valeur ajoutée qui saturent vos journées. L'objectif ? Libérer vos talents pour qu'ils se concentrent sur les 20 % de missions stratégiques là où l'humain est irremplaçable (et là où se crée la vraie croissance)."
  }
];

const PartnerLogos = [
  { name: "Partner 1", src: "https://i.ibb.co/8DgmnnLp/1.png" },
  { name: "Partner 2", src: "https://i.ibb.co/LdGWJpBw/2.png" },
  { name: "Partner 3", src: "https://i.ibb.co/4w5VnnNG/3.png" },
  { name: "Partner 4", src: "https://i.ibb.co/bgYwxFTs/4.png" },
  { name: "Partner 5", src: "https://i.ibb.co/HfxvFHYm/5.png" }
];

const HeroLogos = [
  "https://i.ibb.co/QvCn9FsK/1-1.png",
  "https://i.ibb.co/9khZ8TVL/2-1.png",
  "https://i.ibb.co/ns9DWTLB/3-1.png",
  "https://i.ibb.co/Ps230D63/4-1.png",
  "https://i.ibb.co/4wcnk99K/5-1.png",
  "https://i.ibb.co/6R20gLT2/6.png",
  "https://i.ibb.co/zh3cCrgm/7.png",
  "https://i.ibb.co/Rkxh2p7z/8.png"
];

// --- ANIMATION VARIANTS ---

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// --- COMPONENTS ---

const Navbar = ({ currentView, onChangeView }: { currentView: string, onChangeView: (view: string, id?: string) => void }) => {
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

      {/* Mobile Menu */}
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
            <button onClick={() => handleNavClick('contact')} className="block w-full text-center bg-slate-900 text-white px-5 py-3 rounded-lg font-medium shadow-lg shadow-slate-900/20">
              Contact
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Partners = () => {
  return (
    <section className="py-12 bg-white border-y border-slate-100 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Ils nous font confiance</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {PartnerLogos.map((logo, index) => (
             <div key={index} className="flex items-center justify-center p-4">
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className="h-8 md:h-10 w-auto object-contain hover:scale-110 transition-transform duration-300" 
                />
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-32 bg-slate-50 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-display font-bold mb-6 text-slate-900">
            Questions Fréquentes
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-500 text-lg">
            Tout ce que vous devez savoir avant de commencer.
          </motion.p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-bold text-slate-900 text-lg pr-8">{faq.question}</span>
                {openIndex === index ? <ChevronDown className="transform rotate-180 transition-transform text-electric shrink-0" /> : <ChevronDown className="transition-transform text-slate-400 shrink-0" />}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                      {faq.answer}
                    </div>
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

const ContactPage = () => {
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

        {/* Calendar Embed - Secured and Cleaned */}
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
        
        {/* Reusing FAQ Section */}
        <FAQ />
      </div>
    </div>
  );
};

const LegalPage = () => {
  return (
    <div className="pt-24 pb-12 md:pt-32 md:pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold font-display tracking-widest uppercase text-slate-900 shadow-sm mb-6">
            <Scale className="w-3 h-3 text-electric" />
            Informations Légales
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Mentions Légales
          </h1>
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
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
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
};

const PrivacyPage = () => {
  return (
    <div className="pt-24 pb-12 md:pt-32 md:pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold font-display tracking-widest uppercase text-slate-900 shadow-sm mb-6">
            <FileText className="w-3 h-3 text-electric" />
            Confidentialité
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Politique de Confidentialité
          </h1>
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
              Dans le cadre de l'utilisation de notre site, notamment via notre formulaire de contact ou de réservation d'appel, nous pouvons être amenés à collecter les données suivantes :
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
            <p className="text-slate-600 leading-relaxed">
              Vos données sont collectées uniquement dans le but de :
            </p>
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
              Conformément à la réglementation RGPD, vous disposez d’un droit d’accès, de rectification, de suppression et d’opposition aux données personnelles vous concernant. Pour exercer ce droit, il vous suffit de nous contacter par email à : <strong>contact@althoce.com</strong>.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

const Hero = ({ onChangeView }: { onChangeView: (view: string) => void }) => {
  const { scrollY } = useScroll();
  
  // OPTIMISATION MOBILE: Désactiver useScroll si < 768px pour éviter les recalculs coûteux
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
      
      {/* Parallax Orbs - STATIC on Mobile for Performance */}
      <motion.div 
        style={{ y: y1 }} 
        className="hidden md:block absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[100px] pointer-events-none mix-blend-multiply"
      ></motion.div>
      <motion.div 
        style={{ y: y2 }} 
        className="hidden md:block absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-100/60 rounded-full blur-[100px] pointer-events-none mix-blend-multiply"
      ></motion.div>
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/40 blur-[80px] rounded-full z-0"></div>

      {/* Orbital Lines */}
      <div className="hidden md:block absolute inset-0 pointer-events-none overflow-hidden opacity-40">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-slate-200 rounded-full animate-orbit-slow"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-slate-200 rounded-full animate-orbit-medium border-dashed"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-slate-200 rounded-full animate-orbit-slow opacity-30"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-5xl mx-auto flex flex-col items-center"
        >
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-display leading-[1.1] tracking-tight mb-6 flex flex-wrap justify-center gap-x-2 md:gap-x-4 text-slate-900">
            {titleWords.map((word, i) => (
              <motion.span 
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { duration: 0.5, ease: "easeOut" }
                  }
                }}
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

          {/* New Logo Strip - Restructured for Infinite Scroll */}
          <motion.div 
            variants={fadeInUp}
            className="mt-16 md:mt-24 w-full max-w-6xl mx-auto overflow-hidden"
          >
            <div className="relative w-full flex overflow-hidden">
               {/* Gradients for fade effect */}
               <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
               <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
               
               {/* Track 1 */}
               <div className="flex animate-scroll whitespace-nowrap items-center min-w-full shrink-0 justify-around">
                  {HeroLogos.map((src, i) => (
                    <div key={i} className="mx-8 md:mx-12 shrink-0 flex items-center justify-center">
                      <img width={150} height={64} src={src} alt="Tech Partner" loading="lazy" className="h-12 md:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
               </div>
               
               {/* Track 2 (Duplicate for Infinite Loop) */}
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

const StatCard: React.FC<{ stat: StatItem; index: number }> = ({ stat, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" }); // Adjusted margin for faster trigger
  const [displayValue, setDisplayValue] = useState(stat.value.replace(/[\d\.,]+/, "0"));

  useEffect(() => {
    if (isInView) {
      const match = stat.value.match(/([\d\.,]+)/);
      if (match