/** Liens éditoriaux vers la plateforme, sans modifier les quatre accompagnements. */
export const centraleLinks = {
  home: {
    title: 'Vos outils. Vos agents. Une même plateforme.',
    description: 'Avec La Centrale, Althoce réunit vos agents IA sur mesure et les relie à vos outils. Une plateforme installée en France ou sur vos serveurs, avec vos règles et la validation de vos équipes.',
  },
  services: {
    title: 'Un cadre commun pour vos agents IA.',
    description: 'Vous souhaitez réunir vos agents et vos outils dans une plateforme souveraine ? Althoce installe La Centrale sur mesure, forme vos équipes et accompagne son évolution.',
  },
  agents: {
    title: 'Vos agents, réunis dans La Centrale.',
    description: 'Lorsque plusieurs usages doivent travailler ensemble, La Centrale leur donne un cadre commun. Vos agents sont conçus sur mesure, reliés aux outils prévus et utilisés avec les validations de votre équipe.',
  },
  automatisation: {
    title: 'Relier les tâches. Garder la main.',
    description: 'Pour réunir vos agents et les outils de vos processus, Althoce peut installer La Centrale. Nous définissons avec vous les connexions, les données accessibles et les validations nécessaires.',
  },
  integration: {
    title: 'Vos outils reliés. Vos accès définis.',
    description: 'La Centrale peut réunir vos agents dans une plateforme hébergée en France ou sur vos serveurs. Les connexions se définissent selon vos outils et les autorisations de votre organisation.',
  },
  developpement: {
    title: 'Une plateforme construite pour vos usages.',
    description: 'La Centrale est une possibilité pour réunir vos agents IA sur mesure. Althoce installe la plateforme, raccorde les outils retenus et ajuste les usages avec vos équipes.',
  },
  pilotage: {
    title: 'Un même espace. Des usages qui évoluent.',
    description: 'Avec La Centrale, vous pouvez commencer par une priorité, puis ajouter des agents et des connexions. Althoce accompagne la prise en main et les ajustements au fil de vos usages.',
  },
  secteurs: {
    title: 'Vos exigences donnent le cadre.',
    description: 'Données sensibles, accès à encadrer, décisions à valider : La Centrale réunit vos agents IA dans une plateforme sur mesure, installée en France ou sur vos serveurs selon votre projet.',
  },
  finance: {
    title: 'Vos dossiers financiers, dans un cadre maîtrisé.',
    description: 'La Centrale peut réunir la préparation des pièces et des analyses avec des agents reliés aux outils retenus. Les données accessibles sont définies avec vous ; votre équipe garde la validation des conclusions.',
  },
  droit: {
    title: 'Vos dossiers juridiques, avec vos règles.',
    description: 'Pour préparer des synthèses à partir des documents autorisés, La Centrale réunit vos agents dans une plateforme sur mesure. Hébergement, accès et validations se cadrent avec votre organisation.',
  },
  industrie: {
    title: 'Vos données métier, dans votre environnement.',
    description: 'Relier la documentation et préparer des analyses : La Centrale peut accueillir vos agents sur mesure en France ou sur vos serveurs. Les outils à connecter et les données accessibles sont définis avec vos équipes.',
  },
  souverainete: {
    title: 'Passer des exigences au projet.',
    description: 'La Centrale est la plateforme d’agents IA sur mesure qu’Althoce installe et accompagne. Modèles open source par défaut, hébergement en France ou sur vos serveurs : les choix se cadrent selon vos données et vos usages.',
  },
} as const;

export type CentraleLinkContext = keyof typeof centraleLinks;

export const centraleServiceContexts: Partial<Record<string, CentraleLinkContext>> = {
  'agents-ia': 'agents',
  'automatisation-ia': 'automatisation',
  'integration-ia': 'integration',
  'developpement-ia': 'developpement',
  'pilotage-ia': 'pilotage',
};

export const centraleSectorContexts: Partial<Record<string, CentraleLinkContext>> = {
  droit: 'droit',
  industrie: 'industrie',
};

export const centraleMetierContexts: Partial<Record<string, CentraleLinkContext>> = {
  finance: 'finance',
  juridique: 'droit',
  operations: 'agents',
};
