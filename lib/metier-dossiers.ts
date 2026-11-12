import type { WorkflowExample, ExpertiseFaq } from "./expertise";
export type MetierDossier = {
  label: string;
  focus: string;
  headline: string;
  description: string;
  intro: string;
  setup: string;
  guard: string;
  cta: string;
  scenarios: WorkflowExample[];
  training: string;
  sectors: string[];
  faq: ExpertiseFaq[];
};
export const metierDossiers: Record<string, MetierDossier> = {
  commercial: {
    label: "Commercial & prospection",
    focus: "Préparation des comptes · Rendez-vous · Suivi des opportunités",
    headline: "Plus de temps pour vendre. Un suivi mieux préparé.",
    description:
      "Agents IA commerciaux sur mesure : préparation des comptes, comptes rendus CRM, relances et réponses aux consultations, sous le contrôle de vos commerciaux.",
    training:
      "Vos commerciaux apprennent à corriger une fiche, personnaliser une relance et exploiter les informations préparées avant un rendez-vous.",
    sectors: ["commerce-distribution", "industrie", "immobilier"],
    scenarios: [
      {
        title: "Préparer la prospection",
        output:
          "L’agent rassemble les informations utiles sur chaque compte et prépare une fiche avec les interlocuteurs, les faits sourcés et un angle de contact.",
        review: "Le commercial confirme le ciblage et les règles de contact.",
      },
      {
        title: "Mettre le CRM à jour après un rendez-vous",
        output:
          "À partir de vos notes, l’agent prépare le compte rendu, les champs à compléter et le prochain message de suivi.",
        review:
          "Le commercial corrige et valide les informations avant mise à jour ou envoi.",
      },
      {
        title: "Préparer les réponses aux consultations",
        output:
          "L’agent rapproche les exigences du client de vos offres et références, puis prépare une réponse en signalant les justificatifs manquants.",
        review:
          "L’équipe valide le prix, les capacités annoncées et le dépôt de l’offre.",
      },
    ],
    faq: [
      {
        q: "Peut-il fonctionner avec notre CRM actuel ?",
        a: "Nous vérifions les possibilités de connexion à votre configuration. Le projet peut commencer par la préparation de comptes rendus avant d’ajouter l’écriture dans le CRM.",
      },
      {
        q: "Comment éviter les relances génériques ?",
        a: "L’agent utilise l’historique et les questions restées ouvertes. Le commercial relit le message, choisit le moment et tient compte des règles de contact et des oppositions.",
      },
      {
        q: "Peut-on commencer uniquement par les comptes rendus ?",
        a: "Oui. Un premier usage ciblé permet de vérifier la qualité des fiches et le temps de correction avec vos commerciaux.",
      },
    ],
    intro:
      "Votre agent IA commercial prépare les comptes à contacter, les comptes rendus et les relances. Althoce le construit autour de votre CRM, de vos critères de ciblage et de votre façon de vendre.",
    setup:
      "Nous relions le CRM, les notes de rendez-vous et la messagerie pour retrouver le bon contexte sans ressaisie inutile.",
    guard:
      "Vous choisissez les contacts, validez les messages et gardez la décision sur les engagements commerciaux.",
    cta: "Quelle étape du suivi commercial vous ralentit ?",
  },
  finance: {
    label: "Finance & comptabilité interne",
    focus: "Factures · Écarts · Relances · Préparation du reporting",
    headline:
      "Des factures prêtes à contrôler. Des écarts plus faciles à comprendre.",
    description:
      "Agent IA finance sur mesure : extraction des pièces, rapprochements documentaires et préparation des relances. Votre équipe contrôle les écritures et décisions.",
    training:
      "Votre équipe apprend à vérifier les montants extraits, comprendre un écart et reprendre les dossiers incomplets.",
    sectors: ["finance", "industrie", "associations"],
    scenarios: [
      {
        title: "Préparer la saisie des factures",
        output:
          "L’agent extrait dates, montants et références des factures et signale les champs illisibles ou incohérents.",
        review:
          "Le comptable vérifie les pièces et les informations avant intégration.",
      },
      {
        title: "Rapprocher facture, commande et réception",
        output:
          "L’agent compare les documents pour faire ressortir les écarts de quantité, de prix ou de référence et les pièces absentes.",
        review:
          "La personne habilitée confirme les correspondances et traite les anomalies.",
      },
      {
        title: "Préparer les relances clients",
        output:
          "L’agent rassemble échéances, règlements et échanges récents pour préparer une liste de relances avec les litiges signalés.",
        review:
          "L’équipe confirme le solde et la situation du client avant l’envoi.",
      },
    ],
    faq: [
      {
        q: "L’agent peut-il déclencher un paiement ?",
        a: "Les usages présentés préparent les données et les contrôles. Ils ne déclenchent pas de paiement ni d’écriture définitive sans la validation des personnes habilitées.",
      },
      {
        q: "Que se passe-t-il si une pièce manque ?",
        a: "Le dossier est signalé comme incomplet, avec la pièce attendue. L’agent ne complète pas une information comptable par supposition.",
      },
      {
        q: "Les factures sont-elles accessibles à toute l’entreprise ?",
        a: "Non. Les sources et droits sont définis selon les personnes qui utilisent l’agent. Les restrictions sont testées avec votre équipe avant le déploiement.",
      },
    ],
    intro:
      "Votre agent IA finance rassemble les pièces, compare les factures aux commandes et prépare le suivi des échéances. Althoce l’adapte aux contrôles de votre comptabilité interne.",
    setup:
      "Nous partons de votre logiciel comptable, des commandes et des justificatifs pour relier les informations utiles au contrôle.",
    guard:
      "Les paiements, corrections et écritures définitives restent soumis à votre circuit de validation.",
    cta: "Quel contrôle vous oblige encore à tout rechercher ?",
  },
  operations: {
    label: "Opérations & administration des ventes",
    focus: "Demandes entrantes · Commandes · Pièces · Passages de relais",
    headline: "Des commandes mieux préparées. Moins de dossiers bloqués.",
    description:
      "Agent IA opérations et ADV : préparer les commandes, repérer les pièces manquantes et transmettre les exceptions, avec vos outils et vos règles de validation.",
    training:
      "L’équipe ADV apprend à vérifier une commande préparée, reprendre une anomalie et faire évoluer les consignes avec les retours du terrain.",
    sectors: ["commerce-distribution", "industrie", "associations"],
    scenarios: [
      {
        title: "Préparer une commande reçue par mail",
        output:
          "L’agent extrait les références, quantités et coordonnées, puis prépare les champs attendus par votre outil de gestion.",
        review:
          "L’ADV confirme les références et conditions avant saisie ou confirmation.",
      },
      {
        title: "Réunir les pièces manquantes",
        output:
          "L’agent compare les documents reçus à la liste attendue et prépare une demande ciblée, sans réclamer à nouveau les pièces déjà présentes.",
        review:
          "Le gestionnaire vérifie le document attendu et son destinataire.",
      },
      {
        title: "Transmettre les anomalies",
        output:
          "L’agent réunit le contexte, les pièces et la question à résoudre dans une fiche destinée au responsable concerné.",
        review:
          "Le responsable décide de la correction et du traitement du dossier.",
      },
    ],
    faq: [
      {
        q: "L’agent modifie-t-il directement les commandes ?",
        a: "Nous définissons avec vous ce qui peut être préparé, enregistré ou doit attendre une validation. Les changements de prix, coordonnées ou conditions sont traités selon vos règles.",
      },
      {
        q: "Peut-on garder notre ERP et nos fichiers ?",
        a: "Oui, si leurs possibilités d’accès le permettent. Un premier essai peut s’appuyer sur des exports et des documents sélectionnés.",
      },
      {
        q: "Que se passe-t-il si une connexion ne fonctionne plus ?",
        a: "Le traitement doit être signalé comme interrompu et pouvoir être repris. Les contrôles de doublons et le suivi des incidents sont prévus dans le projet.",
      },
    ],
    intro:
      "Votre agent IA opérations transforme les demandes reçues en dossiers prêts à traiter. Il prépare les commandes, retrouve les pièces et transmet les exceptions aux bonnes personnes.",
    setup:
      "Nous relions la messagerie, les références clients et les documents utiles à votre ERP ou à votre outil de suivi, selon leurs possibilités de connexion.",
    guard:
      "Vos équipes confirment les commandes, les conditions et les changements qui engagent l’entreprise.",
    cta: "Quel dossier reste trop souvent en attente ?",
  },
  juridique: {
    label: "Juridique & contrats",
    focus: "Revue contractuelle · Versions · Clauses · Échéances",
    headline: "Des contrats plus rapides à préparer pour votre revue.",
    description:
      "Agent IA juridique pour les équipes d’entreprise : comparaison contractuelle, clauses et suivi des engagements, avec sources vérifiables et revue du juriste.",
    training:
      "Vos juristes s’exercent à vérifier les passages signalés et leurs sources. Les opérationnels apprennent à préparer des demandes de revue complètes.",
    sectors: ["droit", "industrie", "commerce-distribution"],
    scenarios: [
      {
        title: "Comparer un contrat à votre modèle",
        output:
          "L’agent relève les modifications, suppressions et ajouts en renvoyant aux passages des deux versions.",
        review:
          "Le juriste apprécie la portée des écarts dans le contexte du contrat.",
      },
      {
        title: "Préparer les arbitrages internes",
        output:
          "L’agent regroupe les clauses et questions à faire examiner par les responsables juridiques, financiers ou opérationnels.",
        review:
          "Les personnes habilitées confirment les décisions et les conditions à accepter.",
      },
      {
        title: "Suivre les échéances contractuelles",
        output:
          "L’agent extrait les dates de renouvellement et de préavis avec les clauses correspondantes, en signalant les contradictions entre pièces.",
        review:
          "Le juriste vérifie les dates et valide toute notification ou résiliation.",
      },
    ],
    faq: [
      {
        q: "L’agent garantit-il la validité d’un contrat ?",
        a: "Non. Il prépare la lecture et montre les passages utilisés. La validité et les conséquences du contrat nécessitent l’analyse d’un professionnel.",
      },
      {
        q: "Comment gérer les contrats confidentiels ?",
        a: "Les accès sont limités aux sources et dossiers autorisés pour l’utilisateur. Les restrictions et la séparation des documents sensibles sont testées avant utilisation.",
      },
      {
        q: "Peut-on utiliser notre propre grille de revue ?",
        a: "Oui. Les clauses, points d’attention et circuits de validation sont définis à partir de vos modèles et pratiques internes.",
      },
    ],
    intro:
      "Votre agent IA juridique compare les versions, repère les clauses à examiner et prépare le suivi des échéances. Il s’appuie sur vos contrats et modèles pour aider vos juristes à concentrer leur analyse.",
    setup:
      "Nous organisons l’accès aux contrats signés, aux avenants et à vos modèles de référence, selon les droits de chaque utilisateur.",
    guard:
      "L’analyse juridique, la position de négociation et les décisions contractuelles restent humaines.",
    cta: "Quelle étape de la revue contractuelle pourrait être allégée ?",
  },
  marketing: {
    label: "Marketing & communication",
    focus: "Contenus · SEO · Campagnes · Analyse",
    headline: "Du brief aux contenus, une préparation qui suit votre marque.",
    description:
      "Agent IA marketing sur mesure : briefs, déclinaisons éditoriales, analyse des campagnes et veille SEO, avec vos sources et votre circuit de validation.",
    training:
      "L’équipe apprend à donner un brief précis, relire les propositions et vérifier les faits comme les chiffres.",
    sectors: [
      "marketing-communication",
      "commerce-distribution",
      "associations",
    ],
    scenarios: [
      {
        title: "Préparer les déclinaisons de contenu",
        output:
          "L’agent transforme un brief approuvé en plans d’articles, newsletters ou publications, avec les sources à vérifier.",
        review:
          "L’équipe choisit l’angle, retravaille le texte et valide la publication.",
      },
      {
        title: "Préparer l’analyse des campagnes",
        output:
          "L’agent rassemble les résultats par période et les compare aux objectifs pour faire ressortir les variations à examiner.",
        review:
          "Le responsable vérifie les calculs et décide des recommandations.",
      },
      {
        title: "Prioriser le travail SEO",
        output:
          "L’agent rapproche les pages existantes et les données de recherche pour proposer les contenus à améliorer, regrouper ou compléter.",
        review:
          "Le responsable valide les priorités et les modifications du site.",
      },
    ],
    faq: [
      {
        q: "Comment conserver notre ton de marque ?",
        a: "Nous utilisons vos exemples validés, messages et formulations à éviter. L’équipe teste les propositions et les corrige pour affiner les consignes.",
      },
      {
        q: "Les contenus sont-ils publiés automatiquement ?",
        a: "Le premier usage peut se limiter aux brouillons. La publication suit ensuite le circuit que vous avez défini et validé.",
      },
      {
        q: "Peut-on utiliser les données de nos campagnes ?",
        a: "Oui, selon les accès ou exports disponibles. Les périodes et définitions des indicateurs sont fixées pour éviter de comparer des résultats incompatibles.",
      },
    ],
    intro:
      "Votre agent IA marketing prépare les contenus, les analyses de campagne et les priorités SEO. Althoce le construit à partir de vos messages, de vos sources et de vos critères éditoriaux.",
    setup:
      "Nous réunissons les briefs, les exemples de marque et les données de campagne utiles. Les connexions à vos outils sont choisies selon le premier usage retenu.",
    guard:
      "Vous gardez les choix créatifs, les budgets et la validation des publications.",
    cta: "Quelle préparation prend le pas sur votre travail créatif ?",
  },
  "service-client": {
    label: "Service client & support",
    focus: "Tickets · Base de connaissances · Réponses · Escalades",
    headline: "La bonne information pour répondre à chaque client.",
    description:
      "Agent IA service client : qualification des tickets, recherche dans les procédures et réponses préparées avec leurs sources, selon vos règles de traitement.",
    training:
      "Les conseillers apprennent à vérifier la réponse, reprendre un cas sensible et signaler une procédure manquante ou dépassée.",
    sectors: ["commerce-distribution", "immobilier", "assurance-patrimoine"],
    scenarios: [
      {
        title: "Orienter les demandes entrantes",
        output:
          "L’agent identifie le sujet du ticket, rassemble les informations utiles et propose le service qui doit le traiter.",
        review: "Un conseiller reprend les demandes ambiguës ou sensibles.",
      },
      {
        title: "Préparer une réponse sourcée",
        output:
          "L’agent cherche dans les procédures et l’historique, puis prépare une réponse avec les références utilisées.",
        review:
          "Le conseiller confirme que la réponse convient au dossier avant l’envoi.",
      },
      {
        title: "Transmettre un dossier complet",
        output:
          "L’agent résume les échanges, les démarches déjà réalisées et les points non résolus pour le prochain interlocuteur.",
        review:
          "Le conseiller confirme le destinataire et les informations à partager.",
      },
    ],
    faq: [
      {
        q: "Faut-il installer un chatbot visible par les clients ?",
        a: "Non. L’agent peut rester réservé aux conseillers pour préparer leurs recherches et leurs réponses. Votre équipe conserve alors tout le contact client.",
      },
      {
        q: "Que fait l’agent s’il ne trouve pas la réponse ?",
        a: "Il signale les informations manquantes et transmet le cas à un conseiller. Cette situation fait partie des essais avant utilisation.",
      },
      {
        q: "Comment maintenir les réponses à jour ?",
        a: "Un responsable est identifié pour les procédures de référence. Les retours des conseillers servent à corriger les documents et les consignes de l’agent.",
      },
    ],
    intro:
      "Votre agent IA de service client retrouve l’historique, consulte vos procédures et prépare les réponses. Vos conseillers passent moins de temps à rechercher et plus de temps à résoudre les demandes.",
    setup:
      "Nous relions les tickets, l’historique autorisé et les procédures à jour pour que chaque réponse s’appuie sur le bon dossier.",
    guard:
      "Les remboursements, gestes commerciaux et engagements suivent vos règles d’autorisation.",
    cta: "Quelles demandes font perdre du temps à vos conseillers ?",
  },
  telephonique: {
    label: "Accueil téléphonique",
    focus: "Accueil · Motif d’appel · Agenda · Transfert",
    headline: "Chaque appel trouve une suite, même quand l’équipe est occupée.",
    description:
      "Agent IA téléphonique sur mesure : accueil, recueil du motif, rendez-vous et transmission, avec scénario de reprise humaine et règles adaptées à votre activité.",
    training:
      "L’équipe teste les formulations, les noms mal compris et les demandes inhabituelles pour savoir reprendre la conversation au bon moment.",
    sectors: ["droit", "medical", "immobilier"],
    scenarios: [
      {
        title: "Préparer un rappel utile",
        output:
          "L’agent recueille le motif, confirme les coordonnées et prépare un message pour la personne chargée de rappeler.",
        review:
          "L’équipe prend en charge le rappel et les demandes hors scénario.",
      },
      {
        title: "Organiser un rendez-vous",
        output:
          "L’agent propose un créneau à partir des disponibilités et règles de votre agenda, puis recueille les informations nécessaires.",
        review: "Les exceptions ou conflits sont repris par l’équipe.",
      },
      {
        title: "Orienter vers le bon interlocuteur",
        output:
          "L’agent identifie le motif déclaré et prépare le transfert ou la demande de rappel selon votre annuaire et vos consignes.",
        review: "Une solution de rappel est prévue si le transfert échoue.",
      },
    ],
    faq: [
      {
        q: "L’appelant sait-il qu’il parle à une IA ?",
        a: "Oui. Le scénario annonce clairement l’assistance automatisée et prévoit une possibilité de reprise humaine.",
      },
      {
        q: "Faut-il enregistrer les appels ?",
        a: "Pas nécessairement. Si un enregistrement est envisagé, sa finalité, l’information des appelants, les accès et la conservation sont définis avant le déploiement.",
      },
      {
        q: "Peut-on l’utiliser dans un cabinet médical ?",
        a: "Un usage administratif doit être étudié avec la structure, notamment sur les données et l’hébergement. L’agent ne réalise ni triage clinique, ni diagnostic, ni gestion autonome des urgences.",
      },
    ],
    intro:
      "Votre agent IA téléphonique accueille les appelants, recueille leur demande et prépare la transmission ou le rendez-vous. Althoce adapte le scénario à votre organisation et à vos horaires.",
    setup:
      "Nous vérifions les possibilités de votre téléphonie et de votre agenda, puis testons les transferts, disponibilités et solutions de rappel.",
    guard:
      "L’appelant est informé de l’assistance automatisée et peut être orienté vers une personne.",
    cta: "Que deviennent les appels que votre équipe ne peut pas prendre ?",
  },
  rh: {
    label: "Ressources humaines",
    focus: "Questions internes · Arrivées · Documentation · Coordination",
    headline: "Moins de demandes répétitives. Plus de temps pour vos équipes.",
    description:
      "Agent IA RH sur mesure : procédures internes, préparation des arrivées et organisation documentaire, avec accès par rôle et décisions humaines.",
    training:
      "Les RH et managers apprennent à vérifier les sources, reprendre une situation personnelle et mettre à jour les réponses de procédure.",
    sectors: ["industrie", "associations", "marketing-communication"],
    scenarios: [
      {
        title: "Répondre aux questions internes",
        output:
          "L’agent retrouve la procédure applicable dans les documents approuvés et prépare une réponse avec sa source.",
        review:
          "Les RH reprennent les situations individuelles ou les cas non prévus.",
      },
      {
        title: "Préparer l’arrivée d’un collaborateur",
        output:
          "À partir de votre liste d’accueil, l’agent prépare les actions et informations manquantes pour les RH, le manager et l’informatique.",
        review:
          "Chaque responsable confirme ses actions et autorise les accès nécessaires.",
      },
      {
        title: "Organiser les dossiers avant entretien",
        output:
          "L’agent réunit les pièces et échanges disponibles et signale les documents manquants pour préparer le rendez-vous.",
        review:
          "Le recruteur conserve l’évaluation et la décision sur les candidats.",
      },
    ],
    faq: [
      {
        q: "L’agent peut-il classer les candidats ?",
        a: "Les usages présentés concernent l’organisation et la préparation documentaire. Ils ne proposent pas de sélection, de notation ou de décision autonome sur les candidats.",
      },
      {
        q: "Un salarié peut-il voir les données de ses collègues ?",
        a: "Les réponses générales s’appuient sur des procédures, pas sur les dossiers individuels. Les droits sont définis selon les rôles et testés avant utilisation.",
      },
      {
        q: "Qui met les réponses à jour ?",
        a: "Un responsable RH maintient les documents de référence. Lorsqu’une procédure change, sa version est actualisée pour que l’agent utilise la bonne information.",
      },
    ],
    intro:
      "Votre agent IA RH répond aux questions de procédure, prépare les arrivées et organise les documents de recrutement. Althoce l’adapte à vos règles internes et aux droits de chaque collaborateur.",
    setup:
      "Nous sélectionnons les procédures à jour et séparons les informations générales des dossiers individuels auxquels seules certaines personnes ont accès.",
    guard:
      "Les décisions de recrutement et d’évaluation restent prises par vos équipes ; aucun classement autonome des personnes.",
    cta: "Quelles demandes reviennent chaque semaine aux RH ?",
  },
  achats: {
    label: "Achats & fournisseurs",
    focus: "Consultations · Devis · Comparaisons · Échéances",
    headline: "Des devis comparables avant de négocier.",
    description:
      "Agent IA achats sur mesure : normalisation des devis, comparaison des conditions et préparation des dossiers fournisseurs, sans déléguer la décision d’achat.",
    training:
      "Les acheteurs apprennent à vérifier les unités, repérer les exclusions et distinguer une différence réelle d’une information manquante.",
    sectors: ["industrie", "commerce-distribution", "medical"],
    scenarios: [
      {
        title: "Préparer une consultation",
        output:
          "L’agent transforme le besoin et les exigences validées en grille de réponse commune, avec les questions à préciser aux fournisseurs.",
        review:
          "L’acheteur valide les critères et les conditions de la consultation.",
      },
      {
        title: "Comparer les devis",
        output:
          "L’agent sépare prix de base, options, transport, exclusions et délais dans un tableau qui renvoie à chaque offre.",
        review:
          "L’acheteur vérifie les calculs et confirme les points non comparables.",
      },
      {
        title: "Préparer une revue fournisseur",
        output:
          "L’agent rassemble les contrats, échéances et pièces à actualiser pour préparer les questions et documents du rendez-vous.",
        review:
          "Les responsables apprécient les risques et décident de la suite de la relation.",
      },
    ],
    faq: [
      {
        q: "L’agent choisit-il le fournisseur ?",
        a: "Non. Il présente les différences, exclusions et informations manquantes. La décision tient compte de vos critères, de la qualité et de votre connaissance du fournisseur.",
      },
      {
        q: "Comment traiter un devis incomplet ?",
        a: "Les champs absents restent signalés et l’agent prépare les questions à poser. Il ne remplace pas un prix ou un délai manquant par une estimation non demandée.",
      },
      {
        q: "Peut-on utiliser nos propres critères de comparaison ?",
        a: "Oui. Les unités, critères, tolérances et conditions sont définis avec les acheteurs pour chaque type d’achat.",
      },
    ],
    intro:
      "Votre agent IA achats rassemble les offres, compare les conditions et prépare les revues fournisseurs. Vos acheteurs disposent plus vite des écarts et des questions à traiter.",
    setup:
      "Nous partons de vos devis, cahiers des charges et dossiers fournisseurs pour construire les grilles utiles à vos décisions.",
    guard:
      "Le choix du fournisseur, la négociation et les engagements d’achat restent entre vos mains.",
    cta: "Combien de temps passez-vous à rendre les devis comparables ?",
  },
};
