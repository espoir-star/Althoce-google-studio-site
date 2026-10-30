// Programme Drive ALTH-FDIR-01, V1.0 du 29 octobre 2026.
// L’URL historique est conservée ; la formation remplace les quatre séances de coaching.
export const formationDirigeant = {
  title: 'Formation IA Dirigeant & Associés',
  metaTitle: 'Formation IA pour dirigeants et associés · 7 h',
  description: 'Une journée de formation IA pour dirigeants et associés : assistant personnel, gouvernance et feuille de route à 90 jours. 1 à 5 participants, suivi à J+30.',
  slug: 'coaching-dirigeant',
  url: 'https://althoce.com/services/formation-ia/coaching-dirigeant/',
  card: {
    note: 'Seul ou avec vos associés et décideurs',
    duration: '1 journée · 7 h · 1 à 5 participants',
    text: 'Créer votre assistant, prioriser trois opportunités et bâtir une feuille de route IA à 90 jours. Entretien préparatoire et suivi à J+30 inclus.',
  },
  objectifs: [
    'Choisir un usage et un outil IA en comprenant leurs limites et leurs risques.',
    'Créer et tester un assistant pour vos tâches de direction, avec des consignes réutilisables.',
    'Classer trois opportunités selon leur impact, leur faisabilité, leurs coûts et leurs risques.',
    'Définir les règles de confidentialité, les accès et les validations humaines.',
    'Construire un plan à 90 jours avec des responsables, des jalons et des indicateurs.',
  ],
  sessions: [
    {
      time: '09 h – 10 h · 60 min',
      title: 'Comprendre l’IA et décider',
      points: [
        'Comparer ChatGPT, Claude, Gemini, Copilot et Mistral : usages, coûts, fiabilité et limites.',
        'Repérer les tâches et décisions de direction que l’IA peut aider à préparer.',
      ],
      outcome: { label: 'Votre point de départ', text: 'Un usage pertinent et les critères pour choisir votre outil.' },
    },
    {
      time: '10 h – 11 h 15 · 75 min',
      title: 'Le dirigeant augmenté',
      points: [
        'Préparer une réunion, synthétiser des informations et structurer une analyse.',
        'Travailler une situation de direction en vérifiant les sources et les hypothèses.',
      ],
      outcome: { label: 'En pratique', text: 'Une préparation de décision relue et ajustée par vos soins.' },
    },
    {
      time: '11 h 15 – 12 h 30 · 75 min',
      title: 'Confidentialité et gouvernance',
      points: [
        'Identifier les risques liés aux données clients, au secret professionnel, aux accès et aux réponses erronées.',
        'Distinguer les usages autorisés, sensibles et interdits, et prévoir les validations humaines.',
      ],
      outcome: { label: 'Votre cadre d’usage', text: 'Une première checklist de gouvernance adaptée à votre métier.' },
    },
    {
      time: '13 h 30 – 14 h 45 · 75 min',
      title: 'Prioriser les opportunités IA',
      points: [
        'Cartographier les tâches et comparer impact, faisabilité, coûts et risques.',
        'Classer trois opportunités et sélectionner un premier pilote réaliste.',
      ],
      outcome: { label: 'Vos priorités', text: 'Une matrice argumentée pour choisir où commencer.' },
    },
    {
      time: '14 h 45 – 16 h · 75 min',
      title: 'Construire votre assistant de direction',
      points: [
        'Traduire une méthode de travail en instructions, exemples et critères de résultat.',
        'Prototyper un assistant IA ou Skill et le tester sur un cas courant et une exception.',
      ],
      outcome: { label: 'Votre assistant pédagogique', text: 'Des consignes réutilisables et deux scénarios de test documentés.' },
    },
    {
      time: '16 h – 17 h · 60 min',
      title: 'Tracer votre feuille de route à 90 jours',
      points: [
        'Définir le pilote, ses responsables, les ressources, le budget indicatif et les contrôles.',
        'Choisir trois indicateurs, restituer votre plan et évaluer les acquis.',
      ],
      outcome: { label: 'Votre prochaine étape', text: 'Un plan à 90 jours et une première action à engager avant le suivi à J+30.' },
    },
  ],
  livrables: [
    { title: 'Votre assistant IA', text: 'Un prototype de direction testé sur deux scénarios d’exercice.' },
    { title: 'Vos trois opportunités', text: 'Une matrice de priorisation avec les critères de choix du premier pilote.' },
    { title: 'Votre cadre d’usage', text: 'Une checklist de confidentialité, d’accès, de traçabilité et de validation.' },
    { title: 'Votre feuille de route', text: 'Un plan à 90 jours avec des responsabilités, des jalons et des indicateurs.' },
  ],
  faq: [
    { q: 'À qui s’adresse la Formation IA Dirigeant & Associés ?', a: 'Aux dirigeants, associés, responsables de cabinet et décideurs de professions réglementées, ainsi qu’aux entreprises partageant ces exigences de confidentialité et de contrôle. Le programme est conçu d’abord pour un dirigeant seul, qui peut inviter jusqu’à quatre associés ou décideurs, soit cinq participants au maximum.' },
    { q: 'Quelle est la durée de cette formation IA pour dirigeants ?', a: 'La formation comprend 7 heures pédagogiques sur une journée, de 9 h à 17 h avec une pause déjeuner d’une heure. Un entretien individuel de 45 minutes en visioconférence est inclus en amont, en dehors des 7 heures. Un point de suivi est prévu à J+30.' },
    { q: 'Comment prépare-t-on la journée ?', a: 'Un questionnaire de besoins, un auto-positionnement et un entretien de 45 minutes permettent de préciser vos priorités, vos logiciels, les contraintes de confidentialité et deux situations pratiques. L’entretien est idéalement organisé 5 à 15 jours avant la formation. Il prépare les exercices et ne constitue pas un audit approfondi.' },
    { q: 'Avec quoi repart-on à la fin de la formation ?', a: 'Vous repartez avec un assistant IA ou Skill pédagogique testé sur deux scénarios, une matrice de trois opportunités priorisées, une checklist de gouvernance et une feuille de route à 90 jours. Les supports, les exercices et le bilan des acquis complètent ces livrables.' },
    { q: 'Faut-il déjà maîtriser l’IA ou savoir programmer ?', a: 'Aucun prérequis technique ni de programmation n’est demandé. Une maîtrise de base de l’ordinateur est nécessaire. Prévoyez un ordinateur, une connexion Internet et un accès à un outil IA autorisé. Des environnements de démonstration peuvent être utilisés si nécessaire.' },
    { q: 'La formation se déroule-t-elle en présentiel ou à distance ?', a: 'Les deux formats sont possibles : présentiel ou visioconférence. Le lieu, les dates et les modalités sont convenus avant la session. Les éventuels déplacements, frais logistiques, licences et abonnements sont précisés séparément au devis.' },
    { q: 'Comment sont traitées les données confidentielles pendant les ateliers ?', a: 'Les exercices utilisent des données fictives, anonymisées ou expressément autorisées. Les accès et les documents utilisables sont définis en amont. La journée apprend à vérifier les réponses, à identifier les informations sensibles et à prévoir des validations humaines adaptées au métier.' },
    { q: 'L’assistant construit est-il déployé dans notre entreprise ?', a: 'L’assistant est un prototype pédagogique testé pendant la formation. La connexion aux systèmes de production, le développement d’un agent complexe et son déploiement relèvent d’une mission distincte. La journée n’inclut ni audit technique complet ni conseil juridique.' },
    { q: 'Quelle différence avec les autres formations Althoce ?', a: 'La Formation IA Dirigeant & Associés porte sur les pratiques de direction, la gouvernance et les priorités de l’entreprise, en 7 heures pour 1 à 5 personnes. Les formations IA métier et métier personnalisée développent une pratique commune au sein des équipes. Le Coaching IA Solo accompagne un indépendant sur deux cas métier en 4h30, avec suivi à J+15.' },
    { q: 'Un financement OPCO peut-il être étudié ?', a: 'Une prise en charge peut être étudiée via notre organisme partenaire, selon votre situation, l’éligibilité du parcours et l’accord du financeur. Elle n’est pas automatique. Les modalités et la demande sont préparées avant la formation.' },
    { q: 'Comment les acquis et les premiers usages sont-ils suivis ?', a: 'Le positionnement initial est complété par des quiz, l’observation de l’assistant et de la matrice, puis la restitution de la feuille de route. Un point à J+30 permet de revenir sur les premiers usages et les obstacles rencontrés. Une attestation de réalisation est prévue selon les modalités de l’organisme porteur ; le parcours ne délivre pas de certification RNCP ou RS.' },
    { q: 'Comment préparer un besoin d’accessibilité ?', a: 'Signalez vos besoins en amont afin d’étudier les adaptations avec l’organisme porteur et de confirmer les modalités avant la session.' },
  ],
};
