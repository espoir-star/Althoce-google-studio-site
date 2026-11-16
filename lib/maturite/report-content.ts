/**
 * Test de maturité IA — textes du rapport.
 * Rédaction : constats généraux, sans statistique ni promesse de conformité. Voir docs/positionnement-2026-10.md.
 */
import type { DimensionId, SizeId } from './questions';
import type { ActionId, Band, OfferId, SignalId, Stage, StrengthId } from './model';

export const STAGE_TEXTS: Record<Stage, { diagnostic: string; next: string; priority: string }> = {
  0: {
    diagnostic: 'L’IA n’a pas encore trouvé sa place dans le travail quotidien. Quelques essais existent peut-être, sans outil choisi ni règle commune.',
    next: 'Sans décision, les premiers usages arrivent par des comptes personnels, hors de tout cadre.',
    priority: 'Choisir un premier usage utile et poser trois règles simples sur les données.',
  },
  1: {
    diagnostic: 'L’IA est utilisée régulièrement, mais avec des méthodes et souvent des outils personnels. Les bénéfices restent individuels : rien n’est formalisé ni encadré.',
    next: 'Les habitudes se figent. Ce qui n’est pas cadré maintenant sera plus difficile à corriger ensuite.',
    priority: 'Poser un cadre et se former sur des cas du métier, pour passer de l’essai à la méthode.',
  },
  2: {
    diagnostic: 'Les usages sont reconnus, des règles existent et la formation a commencé. L’IA sert à des tâches du métier, mais elle reste souvent à côté de vos logiciels et ses effets sont peu mesurés.',
    next: 'Le gain plafonne tant que l’IA travaille par copier-coller et que rien ne mesure ce qu’elle apporte.',
    priority: 'Relier l’IA à vos outils sur une ou deux tâches à fort volume, et suivre le résultat.',
  },
  3: {
    diagnostic: 'L’IA a un cap, un cadre, des compétences et des outils reliés. Elle intervient dans des processus identifiés, avec des contrôles définis.',
    next: 'Les outils, les contrats et les modèles évoluent : ce qui est fiable aujourd’hui demande un suivi.',
    priority: 'Entretenir l’existant : revoir les règles, suivre les automatisations et étendre à de nouveaux processus avec la même exigence.',
  },
};

export const DIMENSION_TEXTS: Record<DimensionId, Record<Band, { reading: string; step: string }>> = {
  cap: {
    low: { reading: 'Le sujet n’a ni temps réservé ni priorités. Les essais dépendent des occasions et peuvent s’arrêter du jour au lendemain.', step: 'Réserver du temps, désigner un responsable s’il y a une équipe, et retenir une à trois tâches à étudier en premier.' },
    mid: { reading: 'Le sujet est porté, mais les priorités reposent encore sur l’intuition et les effets ne sont pas suivis.', step: 'Classer les tâches candidates selon le temps passé, le risque et la faisabilité, puis choisir deux repères à suivre.' },
    high: { reading: 'L’IA a un responsable, des priorités et des repères de suivi. Les décisions s’appuient sur des faits.', step: 'Partager ces repères avec les équipes et les revoir à échéance fixe.' },
  },
  usages: {
    low: { reading: 'L’IA est peu ou pas utilisée. Les quelques essais restent généraux, sans lien avec le cœur du métier.', step: 'Partir d’une tâche répétitive et peu risquée, et la tester sur des documents fictifs ou anonymisés.' },
    mid: { reading: 'Des usages existent et commencent à toucher le métier, mais ils restent ponctuels et peu partagés.', step: 'Décrire les deux ou trois usages qui fonctionnent, pour les réutiliser et les transmettre.' },
    high: { reading: 'L’IA sert à des tâches du métier identifiées, avec des méthodes communes. Les usages qui fonctionnent se diffusent.', step: 'Passer ces usages en revue une fois par an : ceux à étendre, ceux à relier aux outils, ceux à arrêter.' },
  },
  cadre: {
    low: { reading: 'Les usages ne sont pas encadrés. Personne ne sait précisément quelles données passent par quels outils.', step: 'Écrire trois règles : les données exclues, les outils autorisés, la relecture attendue.' },
    mid: { reading: 'Des règles existent, mais leur application n’est pas vérifiée.', step: 'Préciser la consigne pour les documents confidentiels et définir qui valide quoi.' },
    high: { reading: 'Les règles sont écrites, connues et suivies. Les documents confidentiels ont une consigne claire et la validation est attribuée.', step: 'Revoir le cadre quand un outil, un contrat ou une obligation change.' },
  },
  competences: {
    low: { reading: 'L’apprentissage se fait seul, au fil des essais. Le niveau dépend de la curiosité de chacun, sans appui identifié.', step: 'Former sur des cas du métier, avec une méthode pour vérifier les réponses.' },
    mid: { reading: 'Des repères existent, mais l’apprentissage reste général et l’entraide informelle.', step: 'Passer de la sensibilisation à la pratique sur vos propres cas, et identifier un référent.' },
    high: { reading: 'La formation a porté sur des cas réels, les réponses sont contrôlées et des référents sont identifiés.', step: 'Prévoir l’accueil des nouveaux arrivants et un temps régulier de partage des pratiques.' },
  },
  integration: {
    low: { reading: 'L’IA s’utilise à côté de vos outils, souvent sur des comptes personnels. Le temps gagné se perd en copier-coller.', step: 'Fournir un outil professionnel dont les conditions ont été vérifiées, avant toute connexion.' },
    mid: { reading: 'Des outils sont en place, mais l’IA reste peu reliée à vos logiciels et à vos documents.', step: 'Identifier une tâche à fort volume et vérifier les connexions possibles avec vos logiciels.' },
    high: { reading: 'L’IA accède à vos documents ou à vos logiciels, et des automatisations sont en service avec un suivi.', step: 'Documenter chaque automatisation et désigner qui en assure le suivi dans la durée.' },
  },
};

export const SIGNAL_TEXTS: Record<SignalId, { title: string; finding: string; effect: string; step: string }> = {
  donnees_exposees: { title: 'Des documents confidentiels sans consigne', finding: 'L’IA est utilisée, et rien ne dit ce qu’il est permis d’y déposer.', effect: 'Un dossier client ou une pièce couverte par le secret peut partir dans un outil dont personne n’a lu les conditions.', step: 'Fixer dès maintenant la liste des données exclues, puis choisir un outil adapté.' },
  comptes_personnels: { title: 'L’IA passe par des comptes personnels', finding: 'Des usages réguliers reposent sur des comptes gratuits ou personnels.', effect: 'Leurs conditions d’utilisation des données ne sont pas celles d’un outil professionnel, et rien n’est maîtrisé dans la durée.', step: 'Fournir un outil professionnel après examen de son contrat et de son hébergement.' },
  interdit_sans_alternative: { title: 'Un interdit sans solution', finding: 'L’usage de l’IA avec des documents confidentiels est interdit ou déconseillé, sans autre possibilité offerte.', effect: 'Un interdit seul ne fait pas disparaître le besoin : il rend les usages invisibles.', step: 'Proposer une voie autorisée : anonymisation, ou outil dont les conditions ont été vérifiées.' },
  automatisation_sans_validation: { title: 'Des automatisations sans validation définie', finding: 'Des assistants ou des automatisations sont en service, alors que la relecture reste laissée à chacun.', effect: 'Une erreur répétée automatiquement se diffuse plus vite qu’une erreur isolée.', step: 'Définir, pour chaque automatisation, les points contrôlés et la personne qui valide.' },
  usages_sans_cadre: { title: 'Des usages en avance sur le cadre', finding: 'L’IA s’est installée dans le travail plus vite que les règles ne se sont écrites.', effect: 'Plus les habitudes s’installent, plus il devient délicat de les corriger.', step: 'Écrire les règles avec ceux qui utilisent déjà l’IA : elles seront réalistes et appliquées.' },
  relecture_implicite: { title: 'Une relecture laissée à chacun', finding: 'L’IA sert à des tâches du métier, sans règle sur ce qui doit être vérifié.', effect: 'La qualité du travail rendu dépend de la vigilance du moment, alors que votre responsabilité reste entière.', step: 'Définir les points de contrôle par type de travail.' },
  outils_sans_formation: { title: 'Des outils fournis, peu de formation', finding: 'Des abonnements professionnels sont en place, mais leur prise en main s’est faite seul, ou pas du tout.', effect: 'Un outil que l’on ne sait pas appliquer à son métier reste sous-employé, quel que soit son prix.', step: 'Former sur des cas du métier, avec l’outil réellement fourni.' },
  equipes_sans_cap: { title: 'Des usages en avance sur le cap', finding: 'Les usages se développent sans priorité ni temps réservé.', effect: 'Les efforts se dispersent et rien n’arbitre entre les outils, les risques et les gains.', step: 'Fixer un cap : un responsable, des priorités, des usages à soutenir.' },
  direction_sans_relais: { title: 'Un cap sans pratique', finding: 'Les priorités sont posées, mais l’IA reste peu utilisée au quotidien.', effect: 'Le projet avance dans les intentions, pas dans les dossiers.', step: 'Commencer par un usage concret, puis former sur des cas réels pour diffuser.' },
  savoir_concentre: { title: 'Un savoir-faire qui repose sur quelques personnes', finding: 'Les bons usages restent chez ceux qui les ont trouvés, et l’aide dépend du collègue le plus à l’aise.', effect: 'Une absence ou un départ suffit à faire perdre ce qui a été appris.', step: 'Décrire les usages qui fonctionnent et reconnaître le rôle de référent.' },
  usage_generaliste: { title: 'Une IA cantonnée aux tâches générales', finding: 'L’IA est utilisée régulièrement, surtout pour reformuler, résumer ou chercher des idées.', effect: 'L’essentiel du temps se trouve dans les tâches du métier, auxquelles elle ne touche pas encore.', step: 'Choisir deux tâches du métier et construire une méthode commune pour chacune.' },
  sans_mesure: { title: 'Des usages sans repère', finding: 'L’IA est utilisée régulièrement, sans élément précis sur ce qu’elle apporte.', effect: 'Sans repère, il est difficile d’arbitrer un abonnement, une formation ou un projet d’intégration.', step: 'Estimer le temps consacré à deux tâches, avant et après.' },
};

export const STRENGTH_TEXTS: Record<StrengthId, { title: string; text: string }> = {
  cadre_pose: { title: 'Un cadre posé', text: 'Les règles, les documents confidentiels et la validation sont définis.' },
  sujet_porte: { title: 'Un sujet porté', text: 'L’IA a un responsable, du temps et un suivi.' },
  equipe_formee: { title: 'Une formation sur des cas réels', text: 'L’apprentissage s’est fait sur les situations du métier.' },
  methodes_partagees: { title: 'Des méthodes réutilisées', text: 'Les usages qui fonctionnent sont décrits et repris.' },
  outils_verifies: { title: 'Des outils vérifiés', text: 'Le contrat, l’hébergement et l’usage des données ont été examinés.' },
  ia_reliee: { title: 'Une IA reliée à vos outils', text: 'Les logiciels métier sont connectés, avec des accès définis.' },
  effets_suivis: { title: 'Des effets suivis', text: 'Des repères montrent ce que l’IA apporte réellement.' },
  priorites_classees: { title: 'Des priorités classées', text: 'Les usages sont choisis selon le temps, le risque et la faisabilité.' },
};

export type ActionLink = { label: string; href: string };
export const ACTION_TEXTS: Record<ActionId, { title: string; text: string; link: ActionLink; soloLink?: ActionLink; sensitiveLink?: ActionLink }> = {
  premier_usage: { title: 'Tester un premier usage utile', text: 'Partir d’une tâche répétitive et peu risquée, sur des documents fictifs ou anonymisés, et noter le temps passé avant et après.', link: { label: 'Parcourir nos guides pratiques', href: '/guides/' } },
  regles_donnees: { title: 'Poser le cadre d’usage', text: 'Trois règles suffisent pour commencer : les données exclues, les outils autorisés, la relecture attendue.', link: { label: 'Lire notre guide RGPD des outils d’IA', href: '/blog/chatgpt-claude-mistral-rgpd-guide-2026/' } },
  outil_pro: { title: 'Choisir un outil professionnel adapté', text: 'Comparer les offres selon le contrat, l’hébergement et l’utilisation des données, puis en faire l’outil de référence.', link: { label: 'Lire notre guide RGPD des outils d’IA', href: '/blog/chatgpt-claude-mistral-rgpd-guide-2026/' }, sensitiveLink: { label: 'Choisir le niveau de protection de vos données', href: '/blog/ia-souveraine-donnees-sensibles-hds-secret-professionnel/' } },
  validation: { title: 'Définir qui valide quoi', text: 'Pour chaque type de travail préparé avec l’IA, préciser les points à contrôler et la personne qui valide.', link: { label: 'Cadrer vos usages avec un diagnostic', href: '/services/audit-ia/' } },
  formation_metier: { title: 'Former sur vos propres cas', text: 'Une journée de pratique sur des situations du métier, avec une méthode pour vérifier les réponses et protéger les données.', link: { label: 'Voir la Formation IA métier', href: '/services/formation-ia/ia-fondamentaux/' }, soloLink: { label: 'Voir le Coaching IA Solo', href: '/services/formation-ia/coaching-independant/' } },
  priorites: { title: 'Choisir vos priorités', text: 'Lister les tâches candidates, estimer le temps passé et le risque, puis retenir trois usages à étudier.', link: { label: 'Voir le diagnostic IA', href: '/services/audit-ia/' } },
  methodes: { title: 'Transformer les bons usages en méthodes', text: 'Décrire deux usages qui fonctionnent, les éprouver sur plusieurs dossiers et les ranger là où ils se retrouvent.', link: { label: 'Parcourir nos guides pratiques', href: '/guides/' } },
  cas_metier: { title: 'Appliquer l’IA aux tâches du métier', text: 'Choisir deux tâches qui prennent du temps et construire, pour chacune, une façon de faire commune et vérifiable.', link: { label: 'Voir la Formation IA métier personnalisée', href: '/services/formation-ia/ia-avancee/' }, soloLink: { label: 'Voir le Coaching IA Solo', href: '/services/formation-ia/coaching-independant/' } },
  mesure: { title: 'Mesurer ce que l’IA apporte', text: 'Estimer le temps consacré à deux tâches aujourd’hui, puis après quelques semaines d’usage.', link: { label: 'Estimer le temps à libérer', href: '/calculateur-roi/' } },
  integration: { title: 'Relier l’IA à vos outils', text: 'Choisir une tâche à fort volume, vérifier les connexions disponibles et tester sur un périmètre réduit.', link: { label: 'Voir le déploiement d’agents IA', href: '/services/automatisation-ia/' } },
  suivi: { title: 'Organiser le suivi dans la durée', text: 'Documenter chaque automatisation, désigner un responsable et prévoir une revue régulière.', link: { label: 'Voir le pilotage et la maintenance', href: '/services/pilotage-ia/' } },
};
export function actionLink(action: ActionId, size: SizeId | '', sensitive: boolean): ActionLink {
  const item = ACTION_TEXTS[action];
  return (size === 'solo' && item.soloLink) || (sensitive && item.sensitiveLink) || item.link;
}

/** Accompagnements du catalogue. Intitulés et formats repris des pages services et formations : les modifier là-bas d’abord. */
export const OFFER_TEXTS: Record<OfferId, { title: string; text: string; format: string; href: string }> = {
  coaching_solo: { title: 'Coaching IA Solo', text: 'Deux cas de votre activité, un assistant réutilisable et un prototype simple, construits avec vous.', format: '4 h 30 en visio · Individuel · Suivi à J+15', href: '/services/formation-ia/coaching-independant/' },
  formation_dirigeant: { title: 'Formation IA Dirigeant & Associés', text: 'Créer votre assistant, prioriser trois opportunités et bâtir une feuille de route IA à 90 jours.', format: '1 journée · 7 h · 1 à 5 participants', href: '/services/formation-ia/coaching-dirigeant/' },
  atelier_priorites: { title: 'Atelier Priorités IA', text: 'Clarifier le besoin et prioriser jusqu’à trois pistes, avec une synthèse et un plan d’action.', format: 'Atelier ciblé · Sans audit technique approfondi', href: '/services/audit-ia/' },
  diagnostic_organisationnel: { title: 'Diagnostic organisationnel', text: 'Cartographier les usages et les outils, repérer les freins et définir des règles communes, avec une feuille de route.', format: 'Étude sur devis · Livrables remis même sans suite', href: '/services/audit-ia/' },
  formation_metier: { title: 'Formation IA métier', text: 'Pratiquer sur des situations de votre profession, avec méthode, confidentialité et vérification des réponses.', format: '1 journée · 7 h · 12 participants maximum', href: '/services/formation-ia/ia-fondamentaux/' },
  formation_personnalisee: { title: 'Formation IA métier personnalisée', text: 'Des exercices et des supports préparés avec vous, à partir de vos outils, de vos processus et de vos exigences.', format: '1 journée · 7 h · Entretien préalable inclus', href: '/services/formation-ia/ia-avancee/' },
  diagnostic_technique: { title: 'Diagnostic technique', text: 'Étudier les processus, les connexions, les droits et les risques pour définir la faisabilité, le périmètre et le budget.', format: 'Étude sur devis · Avant un projet d’intégration', href: '/services/audit-ia/' },
  deploiement: { title: 'Déploiement & agents IA', text: 'Des agents et des automatisations sur mesure, reliés à vos outils, testés et transmis à vos équipes.', format: 'Projet sur mesure · Bilan à J+30', href: '/services/automatisation-ia/' },
  pilotage: { title: 'Pilotage & maintenance', text: 'Suivre les usages, entretenir vos automatisations et les faire évoluer, selon un périmètre convenu.', format: 'Périmètre défini sur devis', href: '/services/pilotage-ia/' },
  centrale: { title: 'La Centrale', text: 'Vos agents IA sur une seule plateforme sur mesure, reliée à vos outils et hébergée en France ou sur vos serveurs.', format: 'Plateforme sur mesure', href: '/ia-souveraine/' },
};

export const MATURITE_FAQ = [
  { q: 'Combien de temps dure le test de maturité IA ?', a: 'Environ cinq minutes : trois informations sur votre structure, puis quinze questions à choix unique. Vous pouvez répondre « Je ne sais pas » ; ces réponses ne sont pas comptées dans le score et sont signalées dans le résultat.' },
  { q: 'Qui doit répondre ?', a: 'De préférence un dirigeant, un associé ou un responsable qui connaît les pratiques réelles de l’équipe. Pour une vision plus juste, faites passer le test à deux ou trois personnes et comparez les résultats : les écarts sont souvent instructifs.' },
  { q: 'Comment le score est-il calculé ?', a: 'Chaque question propose quatre situations, de la moins avancée à la plus avancée, notées de 0 à 3. Chaque dimension est ramenée sur 100, puis les cinq dimensions sont pondérées à parts égales. Pour les professions réglementées et le secteur public, le cadre pèse 25 % et l’intégration 15 %. Le score donne l’un des quatre stades.' },
  { q: 'Mon résultat est-il comparé à d’autres entreprises ?', a: 'Non. Nous ne publions pas de comparaison chiffrée tant que nous ne disposons pas d’un nombre suffisant de réponses réelles pour qu’elle ait un sens. Le résultat vous situe par rapport à quatre stades décrits, pas par rapport à une moyenne.' },
  { q: 'Faut-il donner son email ?', a: 'Pas pour vous situer : votre score, votre stade, la lecture de vos trois dimensions les mieux notées et le premier point relevé s’affichent sans inscription. Le reste s’ouvre avec votre prénom et votre email professionnel : vos cinq dimensions, tous les points relevés, votre plan d’action détaillé, les accompagnements adaptés et la version imprimable.' },
  { q: 'Que deviennent mes réponses ?', a: 'Tant que vous ne demandez rien, elles restent dans votre navigateur : le calcul se fait sur votre appareil et rien n’est enregistré sur nos serveurs. Si vous ouvrez votre plan d’action ou demandez un échange, vos réponses et votre résultat nous sont transmis avec vos coordonnées et votre accord, pour vous recontacter à ce sujet.' },
  { q: 'Ce test remplace-t-il un diagnostic IA ?', a: 'Non. C’est une auto-évaluation fondée sur vos déclarations, utile pour vous situer et ouvrir la discussion. Un diagnostic repose sur des entretiens, l’observation du travail réel et l’examen de vos outils et de vos données.' },
];
