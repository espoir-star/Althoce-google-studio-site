import type { WorkflowExample, ExpertiseFaq } from './expertise';
export type MetierDossier = {
  label: string;
  focus: string;
  headline: string;
  description: string;
  brief: string;
  deliverable: string;
  checks: string[];
  scenarios: WorkflowExample[];
  training: string;
  sectors: string[];
  faq: ExpertiseFaq[];
};
export const metierDossiers: Record<string, MetierDossier> = {
  commercial: {
    label: 'Commercial & prospection',
    focus: 'Préparation des comptes · Rendez-vous · Suivi des opportunités',
    headline: 'Une prochaine action claire pour chaque opportunité.',
    description:
      'Agents IA commerciaux sur mesure : préparation des comptes, comptes rendus CRM, relances et réponses aux consultations, sous le contrôle de vos commerciaux.',
    brief:
      'Un rendez-vous vient de se terminer. Le besoin a changé, un décideur doit être associé et le devis précédent n’est plus tout à fait adapté.',
    deliverable: 'Une fiche d’opportunité prête à relire',
    checks: [
      'Besoin exprimé, sans le confondre avec une hypothèse',
      'Interlocuteurs et informations à confirmer',
      'Engagements pris et prochaine action proposée',
    ],
    training:
      'Vos commerciaux apprennent à fournir un contexte exploitable, vérifier une synthèse et personnaliser un suivi. Les exercices partent de rendez-vous et d’opportunités représentatifs de votre cycle de vente.',
    sectors: ['commerce-distribution', 'industrie', 'immobilier'],
    scenarios: [
      {
        title: 'Préparer le compte avant le contact',
        situation: 'Une liste de prospects ne dit pas encore pourquoi les contacter.',
        input: 'Critères de ciblage, informations CRM et sources professionnelles autorisées.',
        output: 'Une fiche avec faits sourcés, questions à poser et angle de contact proposé.',
        review:
          'Le commercial confirme la pertinence, vérifie les sources et les règles de prospection. Pas de message envoyé par défaut.',
      },
      {
        title: 'Transformer le rendez-vous en suivi',
        situation: 'Les notes existent mais le CRM ne reflète pas la conversation.',
        input: 'Notes du commercial, opportunité existante et champs attendus.',
        output:
          'Une mise à jour proposée, les informations incertaines et un brouillon de message de suivi.',
        review:
          'Le commercial corrige et valide avant toute écriture ou communication. Un engagement absent n’est pas reconstitué.',
      },
      {
        title: 'Préparer la réponse à une consultation',
        situation: 'L’équipe doit vérifier qu’elle couvre chaque exigence et dispose des preuves.',
        input: 'Dossier de consultation, capacités documentées et contenus approuvés.',
        output:
          'Une matrice des exigences, réponses et justificatifs, plus les éléments manquants à affecter.',
        review:
          'Les responsables valident la décision de répondre, les engagements, le chiffrage et le dépôt. L’agent ne garantit pas la recevabilité ni l’attribution.',
      },
    ],
    faq: [
      {
        q: 'L’agent peut-il mettre à jour notre CRM ?',
        a: 'Une proposition de mise à jour peut être préparée à partir de notes validées. L’écriture dans le CRM dépend des accès disponibles et du circuit de contrôle retenu. Les champs incertains doivent rester à confirmer.',
      },
      {
        q: 'Comment éviter les relances génériques ou déplacées ?',
        a: 'Le scénario utilise l’historique, le stade de l’opportunité et les engagements vérifiés. Les oppositions et règles de contact sont prises en compte. Le commercial valide la pertinence et le ton avant l’envoi.',
      },
      {
        q: 'Peut-on commencer seulement par les comptes rendus ?',
        a: 'Oui. Un seul processus permet de mesurer la qualité des fiches et l’effort de correction avant d’ajouter la prospection ou les consultations.',
      },
    ],
  },
  finance: {
    label: 'Finance & comptabilité interne',
    focus: 'Factures · Écarts · Relances · Préparation du reporting',
    headline: 'Moins de recherches avant chaque contrôle.',
    description:
      'Agent IA finance sur mesure : extraction des pièces, rapprochements documentaires et préparation des relances. Votre équipe contrôle les écritures et décisions.',
    brief:
      'Une facture arrive, mais la référence de commande manque. Le montant diffère du devis et la réception n’est pas confirmée.',
    deliverable: 'Une exception documentée, prête pour le contrôle',
    checks: [
      'Pièces utilisées et références rapprochées',
      'Écarts de montant, de période ou de périmètre',
      'Informations manquantes et personne à solliciter',
    ],
    training:
      'Les équipes financières s’exercent à vérifier une extraction, rapprocher un commentaire de sa source et repérer un calcul erroné. Les droits sur les pièces et la validation des opérations font partie des exercices.',
    sectors: ['comptabilite', 'industrie', 'associations'],
    scenarios: [
      {
        title: 'Extraire sans masquer les incertitudes',
        situation: 'Les factures arrivent dans des formats variables et nécessitent une ressaisie.',
        input: 'Factures autorisées et liste des champs attendus.',
        output: 'Une fiche avec montants, dates, références et champs illisibles ou incohérents.',
        review:
          'Le comptable vérifie les champs et les pièces. Aucune donnée absente n’est devinée pour compléter la saisie.',
      },
      {
        title: 'Préparer le rapprochement facture, commande, réception',
        situation: 'Les écarts ne deviennent visibles qu’après plusieurs recherches.',
        input: 'Documents accessibles, références et tolérances définies par votre équipe.',
        output:
          'Une comparaison sourcée distinguant correspondance, différence et document absent.',
        review:
          'La personne habilitée confirme les rapprochements. Paiement et écriture définitive restent soumis au circuit de validation.',
      },
      {
        title: 'Préparer une relance d’échéance',
        situation: 'La balance ne reflète pas toujours une contestation ou un échange récent.',
        input: 'Échéances contrôlées, statut de règlement et échanges autorisés.',
        output: 'Une liste à revoir et des brouillons de relance avec les litiges signalés.',
        review:
          'L’équipe confirme la situation avant l’envoi. Un montant ou une date contestés déclenchent une reprise humaine.',
      },
    ],
    faq: [
      {
        q: 'L’agent passe-t-il des écritures ou déclenche-t-il des paiements ?',
        a: 'Les scénarios décrits préparent les données et les contrôles. Ils ne déclenchent pas de paiement ni d’écriture définitive sans le circuit de validation prévu avec les personnes habilitées.',
      },
      {
        q: 'Que se passe-t-il lorsqu’une pièce manque ?',
        a: 'Le résultat doit afficher le manque et la source attendue. Le système ne doit pas transformer une absence en donnée certaine. Les cas incomplets sont regroupés pour reprise.',
      },
      {
        q: 'Quelle différence avec l’accompagnement d’une direction financière ?',
        a: 'Cette page décrit des tâches opérationnelles. L’accompagnement de la direction financière porte sur les priorités, le reporting, l’organisation des sources et la montée en compétence de l’équipe.',
      },
    ],
  },
  operations: {
    label: 'Opérations & administration des ventes',
    focus: 'Demandes entrantes · Commandes · Pièces · Passages de relais',
    headline: 'Un dossier qui avance, même entre deux équipes.',
    description:
      'Agent IA opérations et ADV : préparer les commandes, repérer les pièces manquantes et transmettre les exceptions, avec vos outils et vos règles de validation.',
    brief:
      'Une commande reçue par mail mentionne une ancienne référence. L’adresse de livraison change et le commercial détient la dernière condition négociée.',
    deliverable: 'Un dossier de traitement complet et attribué',
    checks: [
      'Demande rapprochée du bon client et de la bonne référence',
      'Champs à confirmer avant saisie',
      'Responsable de l’exception et prochaine étape',
    ],
    training:
      'Les équipes ADV et support pratiquent la vérification d’un dossier préparé, le traitement d’une exception et la correction des consignes. L’objectif est un processus que plusieurs personnes savent reprendre.',
    sectors: ['commerce-distribution', 'industrie', 'associations'],
    scenarios: [
      {
        title: 'Préparer une commande reçue par mail',
        situation: 'Le mail contient les informations utiles, mais pas dans les champs de l’ERP.',
        input: 'Commande, référentiel autorisé et règles de saisie.',
        output: 'Une proposition structurée avec quantités, références et points incertains.',
        review:
          'L’ADV confirme les références, conditions et coordonnées avant saisie ou confirmation. Les modifications sensibles sont vérifiées séparément.',
      },
      {
        title: 'Réunir les pièces d’un dossier',
        situation: 'Un traitement reste bloqué sans que l’on sache quelle pièce réclamer.',
        input: 'Checklist du processus, pièces reçues et historique des demandes.',
        output: 'Un état de complétude avec liens vers les documents et demande ciblée à préparer.',
        review:
          'Le gestionnaire confirme la pièce attendue et son destinataire. Les doublons et versions contradictoires sont signalés.',
      },
      {
        title: 'Transmettre les exceptions',
        situation: 'Une anomalie circule entre services sans responsable identifié.',
        input: 'Dossier, règles d’orientation et faits déjà vérifiés.',
        output:
          'Une fiche d’exception : contexte, documents, question à résoudre et destinataire proposé.',
        review:
          'Le responsable valide l’affectation et la décision. L’agent ne modifie pas une commande pour faire disparaître un écart.',
      },
    ],
    faq: [
      {
        q: 'Comment éviter qu’une erreur se propage dans plusieurs outils ?',
        a: 'Nous définissons les champs à contrôler, les validations avant écriture et la procédure de reprise. Le premier test peut fonctionner uniquement en préparation, sans modifier les données sources.',
      },
      {
        q: 'Que se passe-t-il si une connexion est indisponible ?',
        a: 'Le scénario doit signaler l’échec et conserver les éléments nécessaires à une reprise. Les règles de nouvelle tentative et la prévention des doublons se définissent selon les outils.',
      },
      {
        q: 'Est-ce applicable à l’administration d’un établissement de santé ?',
        a: 'Certaines tâches documentaires se ressemblent, mais le cadre ne se transpose pas automatiquement. La page Santé distingue les parcours et le travail préalable sur les données, les responsabilités et l’hébergement.',
      },
    ],
  },
  juridique: {
    label: 'Juridique & contrats',
    focus: 'Revue contractuelle · Versions · Clauses · Échéances',
    headline: 'Lire les écarts avec leurs sources, avant de se prononcer.',
    description:
      'Agent IA juridique pour les équipes d’entreprise : comparaison contractuelle, clauses et suivi des engagements, avec sources vérifiables et revue du juriste.',
    brief:
      'Le fournisseur renvoie un contrat modifié. Le commercial veut avancer, mais certaines clauses sortent de votre modèle et doivent être arbitrées.',
    deliverable: 'Une fiche de revue contractuelle sourcée',
    checks: [
      'Passages modifiés avec renvois aux deux versions',
      'Écarts par rapport à votre grille de lecture',
      'Questions à arbitrer par le juriste et les responsables métier',
    ],
    training:
      'Les juristes apprennent à cadrer une comparaison, demander les renvois aux clauses et contrôler une référence. Les équipes opérationnelles apprennent à préparer une demande de revue complète, sans se substituer au conseil juridique.',
    sectors: ['droit', 'industrie', 'commerce-distribution'],
    scenarios: [
      {
        title: 'Comparer le contrat au modèle validé',
        situation: 'Une modification discrète change une obligation ou un délai.',
        input: 'Versions datées, modèle approuvé et grille de revue juridique.',
        output: 'Un relevé des différences, exclusions et passages à examiner.',
        review:
          'Le juriste apprécie la portée dans le contexte. L’agent ne délivre pas de certificat de conformité.',
      },
      {
        title: 'Préparer un circuit d’approbation',
        situation:
          'La revue ralentit parce que les questions financières ou opérationnelles ne sont pas adressées.',
        input: 'Relevé de revue et règles internes d’approbation.',
        output:
          'Une liste d’arbitrages avec le responsable pressenti et les éléments justificatifs.',
        review:
          'Les personnes habilitées confirment les responsabilités et leurs décisions. Le circuit ne vaut pas délégation de signature.',
      },
      {
        title: 'Repérer les échéances à vérifier',
        situation: 'Les renouvellements sont suivis dans des fichiers indépendants des contrats.',
        input: 'Contrats signés, avenants et référentiel des dossiers.',
        output:
          'Une liste de dates et clauses associées, avec contradictions ou pièces manquantes.',
        review:
          'Le juriste contrôle le calcul et les conditions. Une notification ou résiliation reste décidée et validée par l’équipe.',
      },
    ],
    faq: [
      {
        q: 'L’agent peut-il garantir la validité d’un contrat ?',
        a: 'Non. Il prépare une lecture selon vos critères et montre ses sources. La validité et les conséquences d’un contrat dépendent d’une analyse professionnelle du contexte.',
      },
      {
        q: 'Peut-il chercher dans tous nos dossiers ?',
        a: 'Les accès sont limités aux droits de l’utilisateur et aux sources autorisées. Les dossiers confidentiels ou sensibles doivent être séparés et les restrictions testées.',
      },
      {
        q: 'Cette page remplace-t-elle la page secteur Droit ?',
        a: 'Non. Cette page porte sur le processus contractuel d’une fonction juridique. La page Droit présente l’organisation d’un cabinet d’avocats ou d’une étude notariale et les situations propres à leurs dossiers clients.',
      },
    ],
  },
  marketing: {
    label: 'Marketing & communication',
    focus: 'Contenus · SEO · Campagnes · Analyse',
    headline: 'Des contenus mieux préparés. Des choix mieux documentés.',
    description:
      'Agent IA marketing sur mesure : briefs, déclinaisons éditoriales, analyse des campagnes et veille SEO, avec vos sources et votre circuit de validation.',
    brief:
      'Le même message doit devenir un article, une newsletter et plusieurs publications, sans perdre sa précision ni le ton de votre marque.',
    deliverable: 'Un dossier éditorial prêt pour la revue',
    checks: [
      'Objectif, public et message principal',
      'Sources et affirmations à vérifier',
      'Variantes par canal, encore à choisir et retravailler',
    ],
    training:
      'Les équipes s’exercent à donner un brief précis, vérifier les faits et repérer une interprétation abusive des chiffres. Les critères de qualité servent autant à guider l’agent qu’à relire sa production.',
    sectors: ['marketing-communication', 'commerce-distribution', 'associations'],
    scenarios: [
      {
        title: 'Transformer un brief en propositions éditoriales',
        situation:
          'La production commence alors que les sources et les messages ne sont pas encore stabilisés.',
        input: 'Brief, charte, références autorisées et objectif de chaque format.',
        output: 'Un plan et des variantes avec les affirmations qui demandent une source.',
        review:
          'L’équipe choisit l’angle, vérifie les droits et les faits, puis retravaille avant publication.',
      },
      {
        title: 'Préparer une analyse de campagne',
        situation: 'Les résultats doivent être rapprochés des objectifs et des bonnes périodes.',
        input: 'Exports contrôlés, définition des indicateurs et historique des actions.',
        output: 'Une synthèse des écarts et des questions à examiner, reliée aux chiffres.',
        review:
          'Le responsable vérifie calculs, attribution et limites. L’agent ne modifie ni ciblage ni budget par défaut.',
      },
      {
        title: 'Organiser une revue SEO',
        situation:
          'Les contenus existants se recoupent et les sujets prioritaires sont difficiles à trier.',
        input: 'Inventaire des pages, données de recherche autorisées et objectifs éditoriaux.',
        output: 'Des regroupements par intention, pages à revoir et pistes de maillage à examiner.',
        review:
          'Le responsable valide les intentions et les modifications. Aucun classement dans les moteurs n’est garanti.',
      },
    ],
    faq: [
      {
        q: 'Comment conserver notre ton de marque ?',
        a: 'Nous utilisons vos exemples validés, vos formulations et vos contre-exemples. L’équipe teste et corrige les propositions. La cohérence se travaille ; elle ne supprime pas la relecture.',
      },
      {
        q: 'L’agent publie-t-il les contenus ?',
        a: 'Le périmètre proposé prépare les brouillons. La publication et les engagements de marque restent soumis à votre circuit de validation. Les droits d’utilisation des sources sont vérifiés.',
      },
      {
        q: 'Nous sommes une agence : quel parcours consulter ?',
        a: 'La page Agences marketing & communication traite la production multi-clients, les passations et les retours. Cette page détaille les tâches éditoriales et d’analyse, quel que soit le type d’organisation.',
      },
    ],
  },
  'service-client': {
    label: 'Service client & support',
    focus: 'Tickets · Base de connaissances · Réponses · Escalades',
    headline: 'Le conseiller retrouve le contexte, sans refaire l’enquête.',
    description:
      'Agent IA service client : qualification des tickets, recherche dans les procédures et réponses préparées avec leurs sources, selon vos règles de traitement.',
    brief:
      'Un client revient pour la troisième fois. Sa demande actuelle ne suffit pas à comprendre le problème ni la promesse faite au premier échange.',
    deliverable: 'Une fiche de réponse avec l’historique utile',
    checks: [
      'Demande actuelle et étapes déjà réalisées',
      'Procédure applicable et source de référence',
      'Réponse proposée ou motif d’escalade',
    ],
    training:
      'Les conseillers apprennent à contrôler la source, repérer un engagement non justifié et faire remonter les réponses insuffisantes. Les retours servent à améliorer la base de connaissances et les consignes.',
    sectors: ['commerce-distribution', 'immobilier', 'assurance-patrimoine'],
    scenarios: [
      {
        title: 'Qualifier une demande entrante',
        situation: 'Le ticket est envoyé au mauvais service faute de contexte.',
        input: 'Message, catégorie de dossier et règles d’orientation.',
        output: 'Un motif proposé, les informations manquantes et la bonne équipe pressentie.',
        review:
          'Les demandes ambiguës ou sensibles sont orientées vers un conseiller. L’urgence n’est pas déduite sans règles adaptées.',
      },
      {
        title: 'Préparer une réponse avec ses sources',
        situation: 'La réponse existe mais le conseiller doit parcourir plusieurs procédures.',
        input: 'Ticket, historique autorisé et base documentaire approuvée.',
        output:
          'Un brouillon avec les références utilisées, ou une indication que la source est insuffisante.',
        review:
          'Le conseiller vérifie l’applicabilité et les engagements. Remboursements et gestes commerciaux suivent vos autorisations.',
      },
      {
        title: 'Transmettre un cas sans perdre son histoire',
        situation: 'Le client doit répéter sa demande lors de chaque changement d’interlocuteur.',
        input: 'Échanges pertinents, actions effectuées et points non résolus.',
        output:
          'Une synthèse d’escalade qui distingue faits, demandes et prochaines vérifications.',
        review:
          'Le conseiller confirme le destinataire et les données partagées. L’accès reste limité au besoin du traitement.',
      },
    ],
    faq: [
      {
        q: 'Que fait l’agent quand la documentation ne contient pas la réponse ?',
        a: 'Il doit signaler le manque et préparer une transmission plutôt que produire une réponse plausible. Ces situations sont incluses dans les essais avec votre équipe.',
      },
      {
        q: 'Peut-il prendre des engagements envers le client ?',
        a: 'Les engagements sont limités par les règles que vous validez. Les cas sensibles, remboursements et exceptions passent par les personnes habilitées.',
      },
      {
        q: 'Peut-on le réserver aux conseillers, sans chatbot public ?',
        a: 'Oui. Un assistant interne qui prépare la recherche et les réponses est un périmètre possible. Le contact client reste alors assuré par votre équipe.',
      },
    ],
  },
  telephonique: {
    label: 'Accueil téléphonique',
    focus: 'Accueil · Motif d’appel · Agenda · Transfert',
    headline: 'Un appel compris, une suite bien préparée.',
    description:
      'Agent IA téléphonique sur mesure : accueil, recueil du motif, rendez-vous et transmission, avec scénario de reprise humaine et règles adaptées à votre activité.',
    brief:
      'L’équipe est déjà en rendez-vous. L’appelant doit pouvoir expliquer sa demande et savoir comment une personne pourra lui répondre.',
    deliverable: 'Un message de rappel exploitable',
    checks: [
      'Motif administratif reformulé et confirmé',
      'Coordonnées strictement utiles à vérifier',
      'Destinataire, transfert ou rappel selon le scénario',
    ],
    training:
      'L’équipe prépare les formulations d’accueil, teste des appels difficiles et apprend à reprendre un échange. Les essais incluent les interruptions, les noms mal compris et les demandes hors périmètre.',
    sectors: ['droit', 'medical', 'immobilier'],
    scenarios: [
      {
        title: 'Recueillir une demande de rappel',
        situation: 'Un message vocal laisse un numéro incomplet et peu de contexte.',
        input: 'Échange avec l’appelant et scénario d’accueil approuvé.',
        output: 'Un motif reformulé, les coordonnées confirmées et une synthèse à transmettre.',
        review:
          'L’équipe prend en charge le rappel. L’appelant dispose d’une solution de sortie si l’assistance ne comprend pas.',
      },
      {
        title: 'Proposer un rendez-vous administratif',
        situation: 'Un appel simple nécessite plusieurs échanges pour trouver un créneau.',
        input: 'Agenda autorisé, types de rendez-vous et règles de disponibilité.',
        output: 'Un créneau proposé et les informations nécessaires à sa confirmation.',
        review:
          'Les conflits, exceptions et situations non prévues sont repris par l’équipe. Aucun besoin clinique n’est évalué.',
      },
      {
        title: 'Orienter vers le bon interlocuteur',
        situation: 'L’appel arrive au standard mais relève d’un responsable précis.',
        input: 'Motif déclaré, annuaire autorisé et règles de transfert.',
        output: 'Une orientation et une courte synthèse pour l’interlocuteur.',
        review:
          'Le transfert doit être techniquement possible et testé. En cas d’échec, un rappel est proposé selon le scénario validé.',
      },
    ],
    faq: [
      {
        q: 'L’appelant sait-il qu’il échange avec une assistance automatisée ?',
        a: 'Le scénario prévoit une information claire dès l’accueil et une possibilité de reprise humaine. Les règles de collecte et de conservation sont définies avant le déploiement.',
      },
      {
        q: 'Les appels sont-ils enregistrés ?',
        a: 'L’enregistrement n’est pas présumé nécessaire. Sa finalité, l’information des personnes, les accès et la conservation doivent être examinés si cette fonction est envisagée.',
      },
      {
        q: 'Peut-on utiliser un agent vocal dans un cabinet médical ?',
        a: 'Un éventuel usage doit rester cadré avec la structure, notamment sur les données et l’hébergement. Les scénarios de cette page ne réalisent ni triage clinique, ni diagnostic, ni gestion autonome des urgences.',
      },
    ],
  },
  rh: {
    label: 'Ressources humaines',
    focus: 'Questions internes · Arrivées · Documentation · Coordination',
    headline: 'Des réponses accessibles, des situations personnelles protégées.',
    description:
      'Agent IA RH sur mesure : procédures internes, préparation des arrivées et organisation documentaire, avec accès par rôle et décisions humaines.',
    brief:
      'Un collaborateur cherche une procédure. La réponse dépend de la version en vigueur, mais son dossier individuel ne doit pas devenir accessible aux autres salariés.',
    deliverable: 'Une réponse de procédure, ou le bon contact RH',
    checks: [
      'Source approuvée et date de mise à jour',
      'Périmètre d’accès du collaborateur',
      'Orientation humaine pour la situation individuelle',
    ],
    training:
      'Les RH et managers apprennent à distinguer une question de procédure d’une situation individuelle sensible. Les exercices portent aussi sur la préparation documentaire, la vérification et la limitation des données partagées.',
    sectors: ['industrie', 'associations', 'marketing-communication'],
    scenarios: [
      {
        title: 'Retrouver une procédure interne',
        situation: 'Les mêmes questions arrivent alors que les documents existent déjà.',
        input: 'Procédures approuvées et droits du collaborateur.',
        output: 'Une réponse liée au texte en vigueur ou une orientation vers l’équipe RH.',
        review:
          'Les situations individuelles, litiges ou interprétations non prévues sont repris par une personne habilitée.',
      },
      {
        title: 'Préparer l’arrivée d’un collaborateur',
        situation: 'RH, manager et informatique se relancent sur les mêmes étapes.',
        input: 'Checklist d’arrivée validée, date confirmée et responsables concernés.',
        output: 'Un plan de préparation et les éléments manquants, répartis par interlocuteur.',
        review:
          'Chaque responsable confirme ses actions. L’agent ne crée pas d’accès ni de droit sans autorisation.',
      },
      {
        title: 'Organiser les dossiers de recrutement',
        situation: 'L’équipe cherche les pièces et les échanges avant un entretien.',
        input: 'Documents autorisés et étapes administratives du recrutement.',
        output: 'Un dossier organisé, les pièces absentes et une trame de préparation à relire.',
        review:
          'Pas de classement autonome, de score de personnalité ou de décision sur les candidats. Le recruteur conserve l’évaluation.',
      },
    ],
    faq: [
      {
        q: 'Proposez-vous un classement automatique des candidats ?',
        a: 'Les scénarios présentés privilégient l’organisation et la préparation documentaire. Ils ne reposent pas sur une sélection, une notation ou une décision autonome sur les personnes.',
      },
      {
        q: 'Un salarié peut-il accéder à des informations sur ses collègues ?',
        a: 'Le dispositif doit limiter les sources aux droits de l’utilisateur. Les dossiers individuels sensibles ne font pas partie d’une base de réponses générales. Ces restrictions sont testées avant utilisation.',
      },
      {
        q: 'Qui met à jour les réponses RH ?',
        a: 'Un responsable de la source doit être identifié. Lorsqu’une procédure change, le document de référence et sa version doivent être actualisés. Une réponse sans source applicable est transmise à l’équipe RH.',
      },
    ],
  },
  achats: {
    label: 'Achats & fournisseurs',
    focus: 'Consultations · Devis · Comparaisons · Échéances',
    headline: 'Comparer ce qui est comparable, avant de négocier.',
    description:
      'Agent IA achats sur mesure : normalisation des devis, comparaison des conditions et préparation des dossiers fournisseurs, sans déléguer la décision d’achat.',
    brief:
      'Les devis semblent proches. Mais un fournisseur exclut le transport, un autre chiffre une option et les délais ne partent pas de la même date.',
    deliverable: 'Une comparaison à périmètre explicite',
    checks: [
      'Unités, quantités, options et exclusions',
      'Conditions de délai et de règlement',
      'Points non comparables à faire préciser',
    ],
    training:
      'Les acheteurs s’exercent à définir une grille, contrôler les extractions et repérer une fausse équivalence. L’agent prépare une comparaison ; la connaissance du fournisseur et la négociation restent décisives.',
    sectors: ['industrie', 'commerce-distribution', 'medical'],
    scenarios: [
      {
        title: 'Préparer la grille d’une consultation',
        situation: 'Les réponses reçues ne couvrent pas les mêmes critères.',
        input: 'Besoin validé, exigences et critères établis par les acheteurs.',
        output: 'Une grille commune et les questions à clarifier avant de comparer.',
        review:
          'L’acheteur valide les critères, leur portée et leur éventuelle pondération. L’agent n’invente pas une exigence.',
      },
      {
        title: 'Normaliser et comparer les devis',
        situation: 'Les prix ne peuvent pas être comparés sans reprendre les conditions.',
        input: 'Devis, annexes et règles de comparaison.',
        output: 'Un tableau sourcé séparant base, options, exclusions, frais et délais.',
        review:
          'L’équipe vérifie calculs et conversions. Une information absente est affichée comme inconnue, pas comme nulle.',
      },
      {
        title: 'Préparer une revue fournisseur',
        situation: 'Les échéances et documents à actualiser sont répartis dans plusieurs outils.',
        input: 'Contrats autorisés, historique vérifié et liste des pièces attendues.',
        output: 'Un dossier de revue avec échéances, éléments manquants et questions ouvertes.',
        review:
          'L’acheteur et les responsables compétents apprécient les risques et les engagements. Aucun jugement de solvabilité n’est produit sans analyse adaptée.',
      },
    ],
    faq: [
      {
        q: 'L’agent choisit-il le fournisseur le moins cher ?',
        a: 'Non. Il aide à rendre les offres comparables, en montrant les exclusions et les inconnues. La décision intègre les critères, la connaissance du fournisseur et les validations de votre organisation.',
      },
      {
        q: 'Comment traiter une offre incomplète ?',
        a: 'Les éléments absents sont signalés et des questions peuvent être préparées. Le système ne complète pas les prix, délais ou certifications par supposition.',
      },
      {
        q: 'Les critères sont-ils les mêmes en industrie et en santé ?',
        a: 'Non. Les exigences dépendent du contexte et du dossier. Cette page décrit un processus de préparation ; les pages secteurs précisent les interlocuteurs et les limites à examiner.',
      },
    ],
  },
};
