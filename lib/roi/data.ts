export interface Pole {
  id: string;
  label: string;
  icon: string;
  repartition: number;
}

export interface Agent {
  id: string;
  pole: string;
  nom: string;
  tagline: string;
  description: string;
  triggersIrritants: string[];
  heuresEcoMois: number;
  heuresEcoTotales: number;
  tauxAdoption: number;
  volumeDependanceCa: string;
  coutSetup: number;
  coutMensuel: number;
  delaiJours: number;
  complexite: string;
  benefices: string[];
  prerequis: string;
}

export interface Irritant {
  id: string;
  pole: string;
  texte: string;
  severite: string;
  agentsLies: string[];
}

export interface SecteurReinv {
  accroche: string;
  leviers: string[];
  icone: string;
}

export interface Profile {
  nomEntreprise: string;
  secteur: string;
  secteurPersonnalise: string;
  effectifTotal: number;
  ca: number;
  polesActifs: string[];
  effectifs: Record<string, number>;
  effectifsManuels: Record<string, boolean>;
  irritants: Record<string, string[]>;
  salaire: number;
  agentsDeselectionnes: string[];
  agentsMarques: string[];
}

export interface ROITotal {
  gainMensuel: number;
  gainAnnuel: number;
  heuresSemaine: number;
  heuresGaspillees: number;
  coutSetup: number;
  coutMensuel: number;
  coutAn1: number;
  roiNetAn1: number;
  amortiMois: number;
  paybackMois: number;
  nbAgents: number;
  multiplicateur3ans: number;
}

export const SECTEURS: string[] = [
  "Conseil & Services B2B", "Commerce & Distribution", "Industrie & Fabrication",
  "BTP & Construction", "Hôtellerie & Restauration", "Santé & Bien-être",
  "Immobilier", "Tech & SaaS", "Finance & Assurance",
  "Éducation & Formation", "Artisanat", "Autre / Non listé",
];

export const SECTEUR_REINVESTISSEMENT: Record<string, SecteurReinv> = {
  "Conseil & Services B2B": {
    accroche: "Vendre plus de missions à plus forte valeur",
    leviers: [
      "Doubler le pipeline commercial sans embaucher",
      "Délivrer 30% de missions de plus à effectif constant",
      "Réinvestir dans des contenus de référence sur votre marché",
    ],
    icone: "📈",
  },
  "Commerce & Distribution": {
    accroche: "Convertir + vite, fidéliser + finement",
    leviers: [
      "Ouvrir un nouveau canal de vente sans coût additionnel",
      "Lancer 2× plus de campagnes personnalisées",
      "Améliorer l'expérience client en magasin et en ligne",
    ],
    icone: "🛒",
  },
  "Industrie & Fabrication": {
    accroche: "Sécuriser la production et augmenter la marge",
    leviers: [
      "Réduire les ruptures et les arrêts non-planifiés",
      "Industrialiser un nouveau produit plus vite",
      "Renforcer la qualité fournisseurs et la conformité",
    ],
    icone: "🏭",
  },
  "BTP & Construction": {
    accroche: "Plus de chantiers livrés à temps",
    leviers: [
      "Lancer 1 à 2 chantiers supplémentaires par an",
      "Préparer les devis 3× plus vite, signer plus tôt",
      "Réduire les dérives planning et les pénalités",
    ],
    icone: "🏗️",
  },
  "Hôtellerie & Restauration": {
    accroche: "Augmenter le taux de remplissage et le panier moyen",
    leviers: [
      "Mieux gérer la pression des réservations en pic",
      "Activer une stratégie de fidélisation continue",
      "Recentrer les équipes sur l'expérience client",
    ],
    icone: "🍽️",
  },
  "Santé & Bien-être": {
    accroche: "Plus de temps pour vos patients, moins d'admin",
    leviers: [
      "Décharger les équipes de la prise de RDV et des relances",
      "Améliorer l'observance et le suivi entre deux consultations",
      "Standardiser le parcours patient sans perdre en humain",
    ],
    icone: "🩺",
  },
  "Immobilier": {
    accroche: "Plus de mandats, des transactions plus fluides",
    leviers: [
      "Qualifier 100% des leads en moins de 5 minutes",
      "Suivre activement chaque vendeur jusqu'à la signature",
      "Rééquilibrer le temps entre prospection et closing",
    ],
    icone: "🏠",
  },
  "Tech & SaaS": {
    accroche: "Accélérer le go-to-market et la rétention",
    leviers: [
      "Réduire le temps support pour libérer le produit",
      "Déployer un onboarding self-service à grande échelle",
      "Rouvrir le pipeline outbound sans recruter de SDR",
    ],
    icone: "💻",
  },
  "Finance & Assurance": {
    accroche: "Sécuriser, accélérer, faire mieux dormir vos équipes",
    leviers: [
      "Industrialiser la conformité et les contrôles",
      "Raccourcir les délais de souscription / instruction",
      "Recentrer vos experts sur l'analyse à valeur ajoutée",
    ],
    icone: "🏦",
  },
  "Éducation & Formation": {
    accroche: "Plus d'apprenants accompagnés, mieux suivis",
    leviers: [
      "Personnaliser les parcours sans démultiplier les profs",
      "Automatiser l'admin pour libérer du temps pédagogique",
      "Améliorer le taux de complétion et de satisfaction",
    ],
    icone: "🎓",
  },
  "Artisanat": {
    accroche: "Plus de chantiers, moins de devis perdus",
    leviers: [
      "Répondre à 100% des demandes entrantes en moins d'1h",
      "Préparer vos devis pendant que vous êtes sur le terrain",
      "Suivre vos clients sans y passer vos soirées",
    ],
    icone: "🔨",
  },
  "Autre / Non listé": {
    accroche: "Réinvestir vos heures dans ce qui crée de la valeur",
    leviers: [
      "Recentrer vos équipes sur leurs missions à fort impact",
      "Ouvrir de nouveaux marchés ou de nouveaux services",
      "Améliorer la qualité de service sans recruter",
    ],
    icone: "✨",
  },
};

export const POLES: Pole[] = [
  { id: "Commercial",   label: "Commercial",              icon: "🎯", repartition: 0.15 },
  { id: "Marketing",    label: "Marketing",               icon: "📣", repartition: 0.05 },
  { id: "SAV",          label: "SAV / Support",           icon: "💬", repartition: 0.10 },
  { id: "Telephonique", label: "Téléphonique / Vocal",    icon: "☎️", repartition: 0.05 },
  { id: "RH",           label: "Ressources Humaines",     icon: "👥", repartition: 0.03 },
  { id: "Finance",      label: "Finance & Admin",         icon: "💰", repartition: 0.05 },
  { id: "Ops",          label: "Opérations / Productivité", icon: "⚙️", repartition: 0.55 },
  { id: "Direction",    label: "Direction",               icon: "🏛️", repartition: 0.02 },
];

export const AGENTS: Agent[] = [
  // 🎯 COMMERCIAL
  { id: "AG-101", pole: "Commercial", nom: "Agent Prospection Sortante",
    tagline: "Trouve, qualifie et contacte des leads B2B en autonomie",
    description: "Identifie des prospects ciblés, enrichit les données, lance des séquences multicanal et qualifie les réponses.",
    triggersIrritants: ["IRR-CO-02"], heuresEcoMois: 22, heuresEcoTotales: 90, tauxAdoption: 0.80,
    volumeDependanceCa: "medium", coutSetup: 6500, coutMensuel: 890, delaiJours: 21, complexite: "Modérée",
    benefices: ["Pipeline plus régulier", "Moins de pression équipe"], prerequis: "CRM" },
  { id: "AG-102", pole: "Commercial", nom: "Agent SDR / Qualification",
    tagline: "Qualifie les leads entrants et prend les RDV",
    description: "Réponse instantanée aux leads entrants, qualification BANT, prise de RDV au calendrier des commerciaux.",
    triggersIrritants: ["IRR-CO-02"], heuresEcoMois: 18, heuresEcoTotales: 70, tauxAdoption: 0.85,
    volumeDependanceCa: "medium", coutSetup: 5500, coutMensuel: 750, delaiJours: 18, complexite: "Modérée",
    benefices: ["Réactivité 24/7", "Taux de transformation"], prerequis: "CRM" },
  { id: "AG-103", pole: "Commercial", nom: "Agent Closing Assistant",
    tagline: "Prépare les RDV, rédige propositions et fait les relances",
    description: "Brief avant RDV, génération de proposition commerciale, séquences de relance personnalisées.",
    triggersIrritants: ["IRR-CO-01", "IRR-CO-04"], heuresEcoMois: 14, heuresEcoTotales: 60, tauxAdoption: 0.80,
    volumeDependanceCa: "low", coutSetup: 4500, coutMensuel: 590, delaiJours: 14, complexite: "Modérée",
    benefices: ["Cycle de vente raccourci"], prerequis: "CRM" },
  { id: "AG-104", pole: "Commercial", nom: "Agent Reporting Commercial",
    tagline: "Synthétise pipeline, prévisions, compte-rendu hebdo CODIR",
    description: "Consolide pipeline et activité, génère prévisions et briefings hebdo automatiques.",
    triggersIrritants: ["IRR-CO-01", "IRR-CO-05"], heuresEcoMois: 8, heuresEcoTotales: 40, tauxAdoption: 0.90,
    volumeDependanceCa: "low", coutSetup: 3500, coutMensuel: 450, delaiJours: 10, complexite: "Simple",
    benefices: ["Pilotage fiable"], prerequis: "CRM" },
  { id: "AG-105", pole: "Commercial", nom: "Agent Enrichissement Leads",
    tagline: "Enrichit, score et nettoie en continu votre CRM",
    description: "Enrichit les fiches contacts, dédoublonne, score les leads et alerte sur les opportunités chaudes.",
    triggersIrritants: ["IRR-CO-03"], heuresEcoMois: 10, heuresEcoTotales: 50, tauxAdoption: 0.85,
    volumeDependanceCa: "medium", coutSetup: 3800, coutMensuel: 490, delaiJours: 12, complexite: "Simple",
    benefices: ["Qualité de données"], prerequis: "CRM" },

  // 📣 MARKETING
  { id: "AG-201", pole: "Marketing", nom: "Agent Contenu Multicanal",
    tagline: "Produit posts, articles, newsletters depuis votre stratégie",
    description: "Décline votre ligne éditoriale en posts LinkedIn, articles, newsletters et visuels associés.",
    triggersIrritants: ["IRR-MK-01"], heuresEcoMois: 16, heuresEcoTotales: 60, tauxAdoption: 0.80,
    volumeDependanceCa: "low", coutSetup: 4200, coutMensuel: 590, delaiJours: 14, complexite: "Modérée",
    benefices: ["Régularité éditoriale"], prerequis: "—" },
  { id: "AG-202", pole: "Marketing", nom: "Agent Veille Concurrentielle",
    tagline: "Surveille marché, concurrents, et alerte le marketing",
    description: "Veille continue sur vos concurrents et le marché, alertes ciblées et synthèses hebdo.",
    triggersIrritants: ["IRR-MK-02"], heuresEcoMois: 8, heuresEcoTotales: 35, tauxAdoption: 0.90,
    volumeDependanceCa: "none", coutSetup: 2800, coutMensuel: 390, delaiJours: 8, complexite: "Simple",
    benefices: ["Réactivité marché"], prerequis: "—" },
  { id: "AG-203", pole: "Marketing", nom: "Agent SEO & Articles",
    tagline: "Recherche mots-clés + production d'articles optimisés",
    description: "Recherche sémantique, briefs SEO, rédaction d'articles longue traîne et suivi de positions.",
    triggersIrritants: ["IRR-MK-01", "IRR-MK-04"], heuresEcoMois: 14, heuresEcoTotales: 55, tauxAdoption: 0.80,
    volumeDependanceCa: "low", coutSetup: 3800, coutMensuel: 490, delaiJours: 14, complexite: "Modérée",
    benefices: ["Trafic organique"], prerequis: "Site web" },
  { id: "AG-204", pole: "Marketing", nom: "Agent Newsletters Personnalisées",
    tagline: "Segmentation + rédaction d'emails par segment",
    description: "Segmentation comportementale et rédaction personnalisée par audience.",
    triggersIrritants: ["IRR-MK-03", "IRR-MK-05"], heuresEcoMois: 10, heuresEcoTotales: 45, tauxAdoption: 0.80,
    volumeDependanceCa: "low", coutSetup: 3200, coutMensuel: 420, delaiJours: 12, complexite: "Modérée",
    benefices: ["Engagement email"], prerequis: "Outil d'emailing" },

  // 💬 SAV
  { id: "AG-301", pole: "SAV", nom: "Agent Support Niveau 1",
    tagline: "Répond 24/7 aux demandes simples (FAQ, statuts, etc.)",
    description: "Traite en autonomie 60-80% des demandes répétitives, escalade les cas complexes au bon humain.",
    triggersIrritants: ["IRR-SV-01", "IRR-SV-02"], heuresEcoMois: 28, heuresEcoTotales: 120, tauxAdoption: 0.85,
    volumeDependanceCa: "high", coutSetup: 7500, coutMensuel: 990, delaiJours: 21, complexite: "Modérée",
    benefices: ["Délai de réponse", "Satisfaction client"], prerequis: "Helpdesk" },
  { id: "AG-302", pole: "SAV", nom: "Agent Tri & Routage Tickets",
    tagline: "Classifie, priorise et route vers le bon humain",
    description: "Détecte intention, urgence, sujet, et route au bon agent ou équipe.",
    triggersIrritants: ["IRR-SV-04"], heuresEcoMois: 12, heuresEcoTotales: 60, tauxAdoption: 0.90,
    volumeDependanceCa: "high", coutSetup: 3500, coutMensuel: 450, delaiJours: 10, complexite: "Simple",
    benefices: ["Priorisation"], prerequis: "Helpdesk" },
  { id: "AG-303", pole: "SAV", nom: "Agent Anti-Churn",
    tagline: "Détecte les signaux faibles de churn et alerte",
    description: "Analyse comportement, tickets, NPS, alerte et propose des actions de rétention.",
    triggersIrritants: ["IRR-SV-03"], heuresEcoMois: 6, heuresEcoTotales: 35, tauxAdoption: 0.80,
    volumeDependanceCa: "medium", coutSetup: 4200, coutMensuel: 590, delaiJours: 18, complexite: "Avancée",
    benefices: ["Rétention"], prerequis: "CRM + Helpdesk" },
  { id: "AG-304", pole: "SAV", nom: "Agent Avis & Réputation",
    tagline: "Analyse + réponse aux avis Google, Trustpilot, etc.",
    description: "Surveille les avis, propose ou publie une réponse personnalisée et alerte sur les baisses.",
    triggersIrritants: ["IRR-SV-05"], heuresEcoMois: 8, heuresEcoTotales: 40, tauxAdoption: 0.85,
    volumeDependanceCa: "medium", coutSetup: 2800, coutMensuel: 390, delaiJours: 10, complexite: "Simple",
    benefices: ["E-réputation"], prerequis: "—" },
  { id: "AG-305", pole: "SAV", nom: "Agent Base de Connaissance",
    tagline: "Auto-génère et maintient la KB depuis les tickets",
    description: "Détecte les sujets récurrents et génère/met à jour automatiquement les articles d'aide.",
    triggersIrritants: ["IRR-SV-01"], heuresEcoMois: 10, heuresEcoTotales: 50, tauxAdoption: 0.80,
    volumeDependanceCa: "medium", coutSetup: 3500, coutMensuel: 450, delaiJours: 14, complexite: "Modérée",
    benefices: ["Self-service"], prerequis: "Helpdesk" },

  // ☎️ TÉLÉPHONIQUE
  { id: "AG-401", pole: "Telephonique", nom: "Agent Standard Téléphonique",
    tagline: "Accueil 24/7 multilingue, qualification et transfert",
    description: "Répond aux appels entrants, qualifie le besoin, transfère au bon interlocuteur ou prend message.",
    triggersIrritants: ["IRR-TL-01", "IRR-TL-02"], heuresEcoMois: 25, heuresEcoTotales: 120, tauxAdoption: 0.85,
    volumeDependanceCa: "high", coutSetup: 8500, coutMensuel: 1190, delaiJours: 28, complexite: "Avancée",
    benefices: ["0 appel raté", "Image pro"], prerequis: "Téléphonie" },
  { id: "AG-402", pole: "Telephonique", nom: "Agent Prise de RDV Vocale",
    tagline: "Appelle prospects/clients et prend RDV au calendrier",
    description: "Lance des appels sortants pour qualifier et prendre des rendez-vous, avec confirmation.",
    triggersIrritants: ["IRR-TL-04"], heuresEcoMois: 16, heuresEcoTotales: 70, tauxAdoption: 0.80,
    volumeDependanceCa: "medium", coutSetup: 6500, coutMensuel: 890, delaiJours: 21, complexite: "Avancée",
    benefices: ["Volume RDV"], prerequis: "Téléphonie + agenda" },
  { id: "AG-403", pole: "Telephonique", nom: "Agent Relance Vocale",
    tagline: "Appels de relance impayés, négociation d'échéanciers",
    description: "Appels de relance maîtrisés, négociation simple d'échéanciers, escalade humain si besoin.",
    triggersIrritants: ["IRR-TL-03"], heuresEcoMois: 14, heuresEcoTotales: 55, tauxAdoption: 0.80,
    volumeDependanceCa: "high", coutSetup: 6800, coutMensuel: 890, delaiJours: 21, complexite: "Avancée",
    benefices: ["DSO réduit"], prerequis: "Téléphonie + ERP" },
  { id: "AG-404", pole: "Telephonique", nom: "Agent Enquête Satisfaction Vocale",
    tagline: "Appelle après prestation, score NPS, alerte si insatisfait",
    description: "Recueille le ressenti à chaud, calcule un NPS, alerte en cas d'insatisfaction.",
    triggersIrritants: [], heuresEcoMois: 10, heuresEcoTotales: 40, tauxAdoption: 0.85,
    volumeDependanceCa: "medium", coutSetup: 4200, coutMensuel: 590, delaiJours: 14, complexite: "Modérée",
    benefices: ["Voix du client"], prerequis: "Téléphonie" },
  { id: "AG-405", pole: "Telephonique", nom: "Agent Confirmation RDV",
    tagline: "Rappelle pour confirmer/reprogrammer les RDV (anti no-show)",
    description: "Appels de confirmation à J-1, gestion des reports, mise à jour de l'agenda.",
    triggersIrritants: ["IRR-TL-05"], heuresEcoMois: 8, heuresEcoTotales: 35, tauxAdoption: 0.90,
    volumeDependanceCa: "medium", coutSetup: 3500, coutMensuel: 450, delaiJours: 12, complexite: "Modérée",
    benefices: ["Anti no-show"], prerequis: "Téléphonie + agenda" },

  // 👥 RH
  { id: "AG-501", pole: "RH", nom: "Agent Recrutement",
    tagline: "Trie CV, match profils, pré-qualification téléphonique",
    description: "Score les candidatures sur la fiche de poste, lance des entretiens de pré-qualification.",
    triggersIrritants: ["IRR-RH-01", "IRR-RH-05"], heuresEcoMois: 22, heuresEcoTotales: 80, tauxAdoption: 0.80,
    volumeDependanceCa: "low", coutSetup: 5500, coutMensuel: 750, delaiJours: 18, complexite: "Modérée",
    benefices: ["Temps de recrutement"], prerequis: "ATS" },
  { id: "AG-502", pole: "RH", nom: "Agent Onboarding",
    tagline: "Accompagne les nouveaux arrivants (FAQ, formations, suivi 90j)",
    description: "Plan d'intégration personnalisé, FAQ, suivi des étapes clés à 30/60/90 jours.",
    triggersIrritants: ["IRR-RH-02", "IRR-RH-05"], heuresEcoMois: 12, heuresEcoTotales: 50, tauxAdoption: 0.85,
    volumeDependanceCa: "none", coutSetup: 3500, coutMensuel: 450, delaiJours: 14, complexite: "Simple",
    benefices: ["Engagement nouveaux"], prerequis: "—" },
  { id: "AG-503", pole: "RH", nom: "Agent FAQ RH Interne",
    tagline: "Répond aux salariés (congés, paie, mutuelle, etc.)",
    description: "Assistant interne 24/7 sur tous les sujets RH récurrents.",
    triggersIrritants: ["IRR-RH-03"], heuresEcoMois: 14, heuresEcoTotales: 55, tauxAdoption: 0.85,
    volumeDependanceCa: "low", coutSetup: 3200, coutMensuel: 420, delaiJours: 12, complexite: "Simple",
    benefices: ["Charge RH"], prerequis: "Base documentaire" },
  { id: "AG-504", pole: "RH", nom: "Agent Formation Continue",
    tagline: "Recommande formations selon profil et évolutions de carrière",
    description: "Recommande des parcours de formation et suit la progression individuelle.",
    triggersIrritants: ["IRR-RH-04"], heuresEcoMois: 6, heuresEcoTotales: 30, tauxAdoption: 0.75,
    volumeDependanceCa: "none", coutSetup: 3800, coutMensuel: 490, delaiJours: 18, complexite: "Modérée",
    benefices: ["Montée en compétences"], prerequis: "LMS" },

  // 💰 FINANCE
  { id: "AG-601", pole: "Finance", nom: "Agent Comptabilité OCR",
    tagline: "Saisie automatique factures fournisseurs, rapprochements",
    description: "OCR, catégorisation, rapprochement bancaire et validation à la main si seuil dépassé.",
    triggersIrritants: ["IRR-FI-01", "IRR-FI-05"], heuresEcoMois: 24, heuresEcoTotales: 90, tauxAdoption: 0.90,
    volumeDependanceCa: "high", coutSetup: 6500, coutMensuel: 890, delaiJours: 21, complexite: "Modérée",
    benefices: ["Fin de mois", "Conformité"], prerequis: "Logiciel compta" },
  { id: "AG-602", pole: "Finance", nom: "Agent Recouvrement",
    tagline: "Relance impayés, négocie échéanciers, escalade si besoin",
    description: "Séquences de relance multicanal, négociation d'échéanciers, escalade comptable.",
    triggersIrritants: ["IRR-FI-02"], heuresEcoMois: 12, heuresEcoTotales: 55, tauxAdoption: 0.85,
    volumeDependanceCa: "high", coutSetup: 4500, coutMensuel: 590, delaiJours: 18, complexite: "Modérée",
    benefices: ["DSO", "Trésorerie"], prerequis: "ERP" },
  { id: "AG-603", pole: "Finance", nom: "Agent Notes de Frais",
    tagline: "Capture, catégorisation, validation et remboursement",
    description: "Capture photo, catégorisation, contrôle de la politique, validation et export paie.",
    triggersIrritants: ["IRR-FI-03"], heuresEcoMois: 8, heuresEcoTotales: 40, tauxAdoption: 0.90,
    volumeDependanceCa: "medium", coutSetup: 2800, coutMensuel: 390, delaiJours: 10, complexite: "Simple",
    benefices: ["Délai remboursement"], prerequis: "Outil NDF" },
  { id: "AG-604", pole: "Finance", nom: "Agent Devis & Factures",
    tagline: "Génération automatique selon templates et règles métiers",
    description: "Génère devis et factures depuis CRM/ERP, applique les règles métier et envoie au client.",
    triggersIrritants: ["IRR-FI-04"], heuresEcoMois: 14, heuresEcoTotales: 60, tauxAdoption: 0.85,
    volumeDependanceCa: "high", coutSetup: 4200, coutMensuel: 550, delaiJours: 14, complexite: "Modérée",
    benefices: ["Vitesse facturation"], prerequis: "ERP/CRM" },

  // ⚙️ OPS
  { id: "AG-701", pole: "Ops", nom: "Agent Réunions",
    tagline: "Prend les notes, fait CR, extrait actions, suit l'exécution",
    description: "Compte-rendu auto, extraction des actions, relance des owners.",
    triggersIrritants: ["IRR-OP-01", "IRR-OP-05"], heuresEcoMois: 20, heuresEcoTotales: 65, tauxAdoption: 0.85,
    volumeDependanceCa: "none", coutSetup: 3500, coutMensuel: 450, delaiJours: 10, complexite: "Simple",
    benefices: ["Suivi décisions"], prerequis: "Visio" },
  { id: "AG-702", pole: "Ops", nom: "Agent Documents",
    tagline: "Synthèse, extraction, recherche dans tout le knowledge interne",
    description: "Recherche sémantique sur l'ensemble des documents, synthèses à la demande.",
    triggersIrritants: ["IRR-OP-03"], heuresEcoMois: 12, heuresEcoTotales: 45, tauxAdoption: 0.80,
    volumeDependanceCa: "none", coutSetup: 3800, coutMensuel: 490, delaiJours: 14, complexite: "Modérée",
    benefices: ["Capitalisation"], prerequis: "Drive/SharePoint" },
  { id: "AG-703", pole: "Ops", nom: "Agent Email Triage",
    tagline: "Classification, priorisation, réponses suggérées",
    description: "Trie les emails, propose des réponses, classe et archive automatiquement.",
    triggersIrritants: ["IRR-OP-02"], heuresEcoMois: 18, heuresEcoTotales: 55, tauxAdoption: 0.80,
    volumeDependanceCa: "medium", coutSetup: 3200, coutMensuel: 420, delaiJours: 10, complexite: "Simple",
    benefices: ["Inbox zero"], prerequis: "Email pro" },
  { id: "AG-704", pole: "Ops", nom: "Agent Planning Intelligent",
    tagline: "Gestion agenda, RDV, conflits, optimisation des créneaux",
    description: "Optimise l'agenda, propose des créneaux, gère les conflits.",
    triggersIrritants: ["IRR-OP-04"], heuresEcoMois: 8, heuresEcoTotales: 30, tauxAdoption: 0.85,
    volumeDependanceCa: "none", coutSetup: 2500, coutMensuel: 320, delaiJours: 8, complexite: "Simple",
    benefices: ["Densité d'agenda"], prerequis: "Calendrier" },
  { id: "AG-705", pole: "Ops", nom: "Agent Tâches & Suivi",
    tagline: "Capture les tâches dans toutes les conversations et les suit",
    description: "Détecte les tâches dans emails/réunions/chat, les pousse au bon outil et relance.",
    triggersIrritants: ["IRR-OP-05"], heuresEcoMois: 10, heuresEcoTotales: 40, tauxAdoption: 0.80,
    volumeDependanceCa: "low", coutSetup: 2800, coutMensuel: 390, delaiJours: 10, complexite: "Simple",
    benefices: ["Exécution"], prerequis: "Outil de tâches" },

  // 🏛️ DIRECTION
  { id: "AG-801", pole: "Direction", nom: "Agent Veille Stratégique",
    tagline: "Synthèse hebdo marché, concurrence, opportunités",
    description: "Veille structurée et synthèse hebdomadaire pour le COMEX.",
    triggersIrritants: ["IRR-DI-03"], heuresEcoMois: 8, heuresEcoTotales: 35, tauxAdoption: 0.85,
    volumeDependanceCa: "low", coutSetup: 3200, coutMensuel: 420, delaiJours: 12, complexite: "Simple",
    benefices: ["Décisions éclairées"], prerequis: "—" },
  { id: "AG-802", pole: "Direction", nom: "Agent KPI & Reporting",
    tagline: "Dashboards live, alertes sur seuils, briefings auto",
    description: "Consolide les KPI, alerte sur seuils, prépare les briefings CODIR.",
    triggersIrritants: ["IRR-DI-02", "IRR-DI-04"], heuresEcoMois: 10, heuresEcoTotales: 45, tauxAdoption: 0.90,
    volumeDependanceCa: "low", coutSetup: 4500, coutMensuel: 590, delaiJours: 18, complexite: "Modérée",
    benefices: ["Pilotage temps réel"], prerequis: "BI/Sources de données" },
  { id: "AG-803", pole: "Direction", nom: "Agent Décision Support",
    tagline: "Analyse de décisions complexes, scénarios chiffrés",
    description: "Aide à la décision sur dossiers complexes, scénarios chiffrés et recommandations.",
    triggersIrritants: ["IRR-DI-01", "IRR-DI-05"], heuresEcoMois: 6, heuresEcoTotales: 30, tauxAdoption: 0.75,
    volumeDependanceCa: "low", coutSetup: 4800, coutMensuel: 690, delaiJours: 21, complexite: "Avancée",
    benefices: ["Qualité des décisions"], prerequis: "—" },
];

export const IRRITANTS: Irritant[] = [
  // Commercial
  { id: "IRR-CO-01", pole: "Commercial", texte: "Mes commerciaux passent + de 2h/jour sur des tâches admin (CRM, mails, reporting)", severite: "high", agentsLies: ["AG-103", "AG-104"] },
  { id: "IRR-CO-02", pole: "Commercial", texte: "Je perds des leads chauds faute de relance assez rapide", severite: "high", agentsLies: ["AG-101", "AG-102"] },
  { id: "IRR-CO-03", pole: "Commercial", texte: "Mon CRM est mal renseigné, les leads ne sont pas qualifiés", severite: "medium", agentsLies: ["AG-105"] },
  { id: "IRR-CO-04", pole: "Commercial", texte: "Mes propositions commerciales prennent + de 3h à rédiger", severite: "medium", agentsLies: ["AG-103"] },
  { id: "IRR-CO-05", pole: "Commercial", texte: "Mes prévisions de vente ne sont pas fiables, je pilote à l'aveugle", severite: "medium", agentsLies: ["AG-104"] },
  // Marketing
  { id: "IRR-MK-01", pole: "Marketing", texte: "Je manque de contenu régulier sur mes réseaux et mon blog", severite: "high", agentsLies: ["AG-201", "AG-203"] },
  { id: "IRR-MK-02", pole: "Marketing", texte: "Je n'ai pas de veille concurrentielle structurée", severite: "medium", agentsLies: ["AG-202"] },
  { id: "IRR-MK-03", pole: "Marketing", texte: "Mes campagnes ne sont pas personnalisées par segment", severite: "medium", agentsLies: ["AG-204"] },
  { id: "IRR-MK-04", pole: "Marketing", texte: "Mes positions SEO stagnent, je n'ai pas de stratégie continue", severite: "high", agentsLies: ["AG-203"] },
  { id: "IRR-MK-05", pole: "Marketing", texte: "Mes newsletters ont un taux d'ouverture faible", severite: "medium", agentsLies: ["AG-204"] },
  // SAV
  { id: "IRR-SV-01", pole: "SAV", texte: "Mon support répète + de 20× les mêmes réponses par semaine", severite: "high", agentsLies: ["AG-301", "AG-305"] },
  { id: "IRR-SV-02", pole: "SAV", texte: "Mes temps de réponse dépassent 24h, mes clients râlent", severite: "high", agentsLies: ["AG-301"] },
  { id: "IRR-SV-03", pole: "SAV", texte: "Je perds des clients sans signaux d'alarme préalables", severite: "high", agentsLies: ["AG-303"] },
  { id: "IRR-SV-04", pole: "SAV", texte: "Mes tickets sont mal classifiés et mal priorisés", severite: "medium", agentsLies: ["AG-302"] },
  { id: "IRR-SV-05", pole: "SAV", texte: "Mes avis Google ne sont pas suivis, ma e-réputation décroche", severite: "medium", agentsLies: ["AG-304"] },
  // Téléphonique
  { id: "IRR-TL-01", pole: "Telephonique", texte: "Je rate des appels en dehors des horaires d'ouverture", severite: "high", agentsLies: ["AG-401"] },
  { id: "IRR-TL-02", pole: "Telephonique", texte: "Mon standard est saturé en pic d'activité", severite: "high", agentsLies: ["AG-401"] },
  { id: "IRR-TL-03", pole: "Telephonique", texte: "Mes équipes passent du temps à relancer les impayés au téléphone", severite: "high", agentsLies: ["AG-403"] },
  { id: "IRR-TL-04", pole: "Telephonique", texte: "Je rate des opportunités faute de prise de RDV téléphonique", severite: "medium", agentsLies: ["AG-402"] },
  { id: "IRR-TL-05", pole: "Telephonique", texte: "J'ai trop de no-show / RDV non honorés", severite: "medium", agentsLies: ["AG-405"] },
  // RH
  { id: "IRR-RH-01", pole: "RH", texte: "Mes recruteurs trient + de 100 CV/mois à la main", severite: "high", agentsLies: ["AG-501"] },
  { id: "IRR-RH-02", pole: "RH", texte: "Mon onboarding n'est pas standardisé, les nouveaux galèrent", severite: "medium", agentsLies: ["AG-502"] },
  { id: "IRR-RH-03", pole: "RH", texte: "Mes RH répètent les mêmes réponses (congés, paie, mutuelle)", severite: "high", agentsLies: ["AG-503"] },
  { id: "IRR-RH-04", pole: "RH", texte: "Je n'ai pas de plan de formation personnalisé", severite: "medium", agentsLies: ["AG-504"] },
  { id: "IRR-RH-05", pole: "RH", texte: "Mes entretiens annuels prennent + d'1h à préparer par collab", severite: "medium", agentsLies: ["AG-501", "AG-502"] },
  // Finance
  { id: "IRR-FI-01", pole: "Finance", texte: "Je traite manuellement + de 50 factures fournisseurs/mois", severite: "high", agentsLies: ["AG-601"] },
  { id: "IRR-FI-02", pole: "Finance", texte: "Je relance mes impayés à la main, mes délais de paiement explosent", severite: "high", agentsLies: ["AG-602"] },
  { id: "IRR-FI-03", pole: "Finance", texte: "Mes notes de frais sont longues à valider", severite: "medium", agentsLies: ["AG-603"] },
  { id: "IRR-FI-04", pole: "Finance", texte: "Mes devis prennent + de 30 min à générer", severite: "medium", agentsLies: ["AG-604"] },
  { id: "IRR-FI-05", pole: "Finance", texte: "Mon rapprochement bancaire est 100% manuel", severite: "high", agentsLies: ["AG-601"] },
  // Ops
  { id: "IRR-OP-01", pole: "Ops", texte: "Mes managers passent + de 4h/sem à rédiger des CR de réunion", severite: "high", agentsLies: ["AG-701"] },
  { id: "IRR-OP-02", pole: "Ops", texte: "Je passe + d'1h/jour à trier mes emails", severite: "high", agentsLies: ["AG-703"] },
  { id: "IRR-OP-03", pole: "Ops", texte: "Je cherche souvent des infos perdues dans des documents éparpillés", severite: "medium", agentsLies: ["AG-702"] },
  { id: "IRR-OP-04", pole: "Ops", texte: "Mon agenda est régulièrement en conflit", severite: "medium", agentsLies: ["AG-704"] },
  { id: "IRR-OP-05", pole: "Ops", texte: "Mes tâches issues de réunions tombent souvent dans l'oubli", severite: "high", agentsLies: ["AG-705"] },
  // Direction
  { id: "IRR-DI-01", pole: "Direction", texte: "Mes décisions prennent du temps à cause de la collecte d'infos", severite: "high", agentsLies: ["AG-803"] },
  { id: "IRR-DI-02", pole: "Direction", texte: "Je manque d'alertes sur mes KPI critiques", severite: "high", agentsLies: ["AG-802"] },
  { id: "IRR-DI-03", pole: "Direction", texte: "Ma veille marché est sporadique et peu structurée", severite: "medium", agentsLies: ["AG-801"] },
  { id: "IRR-DI-04", pole: "Direction", texte: "Mes synthèses CODIR me prennent + de 4h/sem", severite: "high", agentsLies: ["AG-802"] },
  { id: "IRR-DI-05", pole: "Direction", texte: "Je ne capitalise pas sur les apprentissages des projets passés", severite: "medium", agentsLies: ["AG-803"] },
];

export function defaultProfile(): Profile {
  return {
    nomEntreprise: "",
    secteur: "Conseil & Services B2B",
    secteurPersonnalise: "",
    effectifTotal: 10,
    ca: 1_000_000,
    polesActifs: [],
    effectifs: {},
    effectifsManuels: {},
    irritants: {},
    salaire: 3500,
    agentsDeselectionnes: [],
    agentsMarques: [],
  };
}
