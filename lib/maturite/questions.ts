/**
 * Test de maturité IA — questions et profil.
 * Modèle Althoce : 5 dimensions, 15 questions, 4 stades. Voir docs/test-maturite-ia/conception.md.
 * Chaque question propose quatre situations, de la moins avancée (0) à la plus avancée (3).
 */
export type DimensionId = 'cap' | 'usages' | 'cadre' | 'competences' | 'integration';
export type QuestionId =
  | 'usa1' | 'usa2' | 'usa3' | 'com1' | 'com2' | 'com3' | 'int1' | 'int2' | 'int3'
  | 'cad1' | 'cad2' | 'cad3' | 'cap1' | 'cap2' | 'cap3';
/** 0 à 3 : situation choisie. -1 : « Je ne sais pas ». */
export type Answer = -1 | 0 | 1 | 2 | 3;
export type Answers = Partial<Record<QuestionId, Answer>>;
export type Options = readonly [string, string, string, string];
export type Question = { id: QuestionId; dim: DimensionId; q: string; help?: string; opts: Options; solo?: { q?: string; opts: Options } };

/** Ordre d’affichage dans le rapport. */
export const DIMENSIONS: { id: DimensionId; name: string; label: string; description: string }[] = [
  { id: 'cap', name: 'Cap', label: 'Direction et priorités', description: 'Qui porte le sujet, quelles priorités, quels repères de suivi.' },
  { id: 'usages', name: 'Usages', label: 'Pratiques réelles', description: 'Qui utilise l’IA, pour quelles tâches, avec quel partage.' },
  { id: 'cadre', name: 'Cadre', label: 'Confidentialité et contrôle', description: 'Règles d’usage, documents confidentiels, validation des réponses.' },
  { id: 'competences', name: 'Compétences', label: 'Formation et autonomie', description: 'Comment l’équipe apprend, s’entraide et vérifie.' },
  { id: 'integration', name: 'Intégration', label: 'Outils et processus', description: 'Outils fournis, lien avec vos logiciels, automatisations.' },
];

/** Ordre du questionnaire : du plus concret (les usages) au plus stratégique (le cap). */
export const QUESTIONS: Question[] = [
  { id: 'usa1', dim: 'usages', q: 'Quelle part de vos collaborateurs utilise l’IA au moins une fois par semaine dans son travail ?',
    opts: ['Aucun, ou presque.', 'Quelques personnes.', 'Environ la moitié.', 'La plupart.'],
    solo: { q: 'À quelle fréquence utilisez-vous l’IA dans votre travail ?', opts: ['Jamais, ou presque.', 'De temps en temps.', 'Chaque semaine.', 'Presque chaque jour, pour des tâches précises.'] } },
  { id: 'usa2', dim: 'usages', q: 'À quoi sert l’IA aujourd’hui dans votre activité ?',
    opts: ['À rien de régulier.', 'À des tâches générales : reformuler un texte, résumer, chercher une idée.', 'À quelques tâches du métier, de façon ponctuelle : analyser un document, préparer une note.', 'À des tâches du métier identifiées, réalisées selon une méthode commune.'],
    solo: { opts: ['À rien de régulier.', 'À des tâches générales : reformuler un texte, résumer, chercher une idée.', 'À quelques tâches du métier, de façon ponctuelle : analyser un document, préparer une note.', 'À des tâches du métier identifiées, que je réalise toujours de la même façon.'] } },
  { id: 'usa3', dim: 'usages', q: 'Que devient un usage de l’IA qui fonctionne bien ?',
    opts: ['Nous n’en avons pas encore.', 'Il reste chez la personne qui l’a trouvé.', 'Il se transmet de façon informelle, entre collègues.', 'Il est décrit, partagé et repris par l’équipe.'],
    solo: { q: 'Que devient une façon de travailler avec l’IA qui fonctionne bien ?', opts: ['Je n’en ai pas encore.', 'Je la refais de mémoire à chaque fois.', 'Je conserve quelques demandes types.', 'Je l’ai formalisée : modèle, assistant ou procédure que je réutilise.'] } },

  { id: 'com1', dim: 'competences', q: 'Comment vos collaborateurs ont-ils appris à utiliser l’IA ?',
    opts: ['Ils n’ont pas encore eu l’occasion d’apprendre.', 'Seuls, par essais et tutoriels.', 'Lors d’une présentation ou d’une sensibilisation générale.', 'Par une formation pratique, sur des cas de leur métier.'],
    solo: { q: 'Comment avez-vous appris à utiliser l’IA ?', opts: ['Je n’ai pas encore eu l’occasion d’apprendre.', 'Seul, par essais et tutoriels.', 'Lors d’une présentation ou d’une sensibilisation générale.', 'Par une formation pratique, sur mes propres cas.'] } },
  { id: 'com2', dim: 'competences', q: 'Vers qui se tourne un collaborateur qui bloque sur un usage de l’IA ?',
    opts: ['Vers personne : il se débrouille ou abandonne.', 'Vers le collègue le plus à l’aise, quand il est disponible.', 'Vers une personne identifiée comme référente, sans temps prévu pour cela.', 'Vers des référents reconnus, qui ont du temps pour accompagner.'],
    solo: { q: 'Que faites-vous quand vous bloquez sur un usage de l’IA ?', opts: ['J’abandonne ou je contourne.', 'Je cherche seul, en ligne.', 'Je demande à un confrère ou à un contact.', 'Je m’appuie sur un accompagnement ou un réseau identifié.'] } },
  { id: 'com3', dim: 'competences', q: 'Vos collaborateurs savent-ils repérer une réponse fausse ou incomplète de l’IA ?',
    opts: ['Nous n’en avons jamais parlé.', 'Ils savent que l’IA peut se tromper, sans méthode pour le vérifier.', 'Les plus expérimentés ont leurs réflexes de vérification.', 'Chacun a appris à contrôler une réponse : sources, calculs, cohérence avec le dossier.'],
    solo: { q: 'Savez-vous repérer une réponse fausse ou incomplète de l’IA ?', opts: ['Je ne me suis pas posé la question.', 'Je sais qu’elle peut se tromper, sans méthode pour le vérifier.', 'J’ai quelques réflexes de vérification.', 'Je contrôle chaque réponse : sources, calculs, cohérence avec le dossier.'] } },

  { id: 'int1', dim: 'integration', q: 'Avec quels outils d’IA travaille-t-on chez vous ?',
    opts: ['Aucun outil n’est fourni. S’il y a des usages, ils passent par des comptes personnels.', 'Un outil est recommandé, mais chacun utilise son propre compte.', 'Des abonnements professionnels sont fournis par la structure.', 'Des outils professionnels dont le contrat, l’hébergement et l’usage des données ont été vérifiés.'],
    solo: { q: 'Avec quels outils d’IA travaillez-vous ?', opts: ['Aucun, ou un compte gratuit de temps en temps.', 'Un compte gratuit ou personnel, régulièrement.', 'Un abonnement professionnel.', 'Un outil professionnel dont j’ai vérifié le contrat, l’hébergement et l’usage des données.'] } },
  { id: 'int2', dim: 'integration', q: 'L’IA est-elle reliée à vos logiciels et à vos documents de travail ?',
    opts: ['Non, elle s’utilise à part.', 'Par copier-coller entre l’IA et nos outils.', 'Elle accède à certains documents : espace partagé, base documentaire.', 'Elle est connectée à nos logiciels métier, avec des accès définis par rôle.'],
    solo: { opts: ['Non, elle s’utilise à part.', 'Par copier-coller entre l’IA et mes outils.', 'Elle accède à certains documents : espace partagé, base documentaire.', 'Elle est connectée à mes logiciels métier, avec des accès que j’ai définis.'] } },
  { id: 'int3', dim: 'integration', q: 'Des tâches sont-elles confiées à des assistants ou à des automatisations ?',
    opts: ['Non.', 'Quelques essais individuels, sans suite.', 'Un ou deux assistants ou automatisations servent à l’équipe, sans suivi organisé.', 'Des automatisations en service, testées, documentées et suivies par un responsable.'],
    solo: { opts: ['Non.', 'Quelques essais, sans suite.', 'Un ou deux assistants ou automatisations que j’utilise, sans suivi particulier.', 'Des automatisations en service, testées, documentées et que je contrôle régulièrement.'] } },

  { id: 'cad1', dim: 'cadre', q: 'Quelles règles encadrent l’usage de l’IA chez vous ?',
    opts: ['Aucune règle n’a été formulée.', 'Des consignes orales, rappelées de temps en temps.', 'Des règles écrites, sans vérification de leur application.', 'Des règles écrites, expliquées à chacun et revues régulièrement.'],
    solo: { q: 'Quelles règles vous êtes-vous fixées pour utiliser l’IA ?', opts: ['Aucune pour l’instant.', 'Quelques principes, que j’applique selon les cas.', 'Des règles claires, que je n’ai pas écrites.', 'Des règles écrites, que je revois quand mes outils ou mes obligations changent.'] } },
  { id: 'cad2', dim: 'cadre', q: 'Que se passe-t-il quand un document confidentiel pourrait être utilisé avec l’IA ?', help: 'Dossier client, pièce couverte par le secret professionnel, donnée personnelle.',
    opts: ['Chacun décide seul, sans consigne.', 'C’est interdit ou déconseillé, sans solution proposée à la place.', 'Les données sont retirées ou anonymisées avant usage, selon une consigne connue.', 'Un outil est autorisé pour ces documents après vérification de ses conditions, et la consigne précise ce qui reste exclu.'],
    solo: { opts: ['Je décide au cas par cas, sans règle.', 'Je m’interdis de le faire, sans avoir de solution adaptée.', 'Je retire ou j’anonymise les données avant usage.', 'J’utilise un outil dont j’ai vérifié les conditions, et je sais ce que j’en exclus.'] } },
  { id: 'cad3', dim: 'cadre', q: 'Comment les réponses de l’IA sont-elles validées avant d’être utilisées ?',
    opts: ['Ce n’est pas un sujet abordé.', 'Chacun relit comme il le juge utile.', 'La relecture est attendue, sans méthode précise.', 'Les points à vérifier sont définis selon le type de travail, et la validation revient à une personne identifiée.'],
    solo: { opts: ['Je ne me suis pas posé la question.', 'Je relis quand j’ai un doute.', 'Je relis systématiquement, sans méthode précise.', 'J’ai défini les points à vérifier selon le type de travail, avant tout envoi.'] } },

  { id: 'cap1', dim: 'cap', q: 'Qui porte le sujet de l’IA dans votre structure ?',
    opts: ['Personne en particulier.', 'Un ou deux collaborateurs curieux, de leur propre initiative.', 'Un associé ou un responsable, en plus de ses autres missions.', 'Un responsable désigné, avec du temps prévu et des points réguliers en direction.'],
    solo: { q: 'Quelle place l’IA occupe-t-elle dans vos priorités ?', opts: ['Aucune pour l’instant.', 'J’y pense, sans y consacrer de temps.', 'J’y consacre du temps quand l’activité le permet.', 'J’y réserve du temps et je me suis fixé des objectifs.'] } },
  { id: 'cap2', dim: 'cap', q: 'Comment choisissez-vous les usages de l’IA à développer ?',
    opts: ['Nous n’avons pas encore identifié d’usage.', 'Au fil des idées et des outils que chacun découvre.', 'Quelques tâches prioritaires sont repérées, sans estimation du temps ou du risque.', 'À partir d’une liste de tâches classées selon le temps passé, le risque et la faisabilité.'],
    solo: { opts: ['Je n’ai pas encore identifié d’usage.', 'Au fil des idées et des outils que je découvre.', 'J’ai repéré quelques tâches prioritaires, sans estimer le temps ou le risque.', 'À partir d’une liste de tâches classées selon le temps passé, le risque et la faisabilité.'] } },
  { id: 'cap3', dim: 'cap', q: 'Savez-vous ce que l’IA apporte concrètement à votre activité ?',
    opts: ['Non, rien n’est encore en place.', 'Nous en avons une impression, sans élément précis.', 'Nous avons des exemples concrets, sans suivi régulier.', 'Nous suivons quelques repères : temps gagné, qualité, usages réels.'],
    solo: { opts: ['Non, rien n’est encore en place.', 'J’en ai une impression, sans élément précis.', 'J’ai des exemples concrets, sans suivi régulier.', 'Je suis quelques repères : temps gagné, qualité, usages réels.'] } },
];
export const QUESTION_IDS = QUESTIONS.map(question => question.id);
export const UNKNOWN_LABEL = 'Je ne sais pas';

/** Tranches alignées sur celles du formulaire de contact, pour un suivi commercial homogène. */
export type SizeId = 'solo' | '2-9' | '10-49' | '50-199' | '200+';
export const SIZES: { id: SizeId; label: string; contactLabel: string }[] = [
  { id: 'solo', label: 'Vous exercez seul', contactLabel: '1 à 9 personnes' },
  { id: '2-9', label: '2 à 9 personnes', contactLabel: '1 à 9 personnes' },
  { id: '10-49', label: '10 à 49 personnes', contactLabel: '10 à 49 personnes' },
  { id: '50-199', label: '50 à 199 personnes', contactLabel: '50 à 199 personnes' },
  { id: '200+', label: '200 personnes et plus', contactLabel: '200 personnes et plus' },
];
export type RoleId = 'dirigeant' | 'direction' | 'manager' | 'collaborateur';
export const ROLES: { id: RoleId; label: string }[] = [
  { id: 'dirigeant', label: 'Dirigeant ou associé' },
  { id: 'direction', label: 'Membre de la direction' },
  { id: 'manager', label: 'Responsable d’équipe' },
  { id: 'collaborateur', label: 'Collaborateur' },
];

/** Mêmes intitulés et même ordre que le calculateur ROI et les pages /secteurs/. */
export const SECTOR_OPTIONS: { slug: string; name: string }[] = [
  { slug: 'finance', name: 'Finance' },
  { slug: 'comptabilite', name: 'Expertise comptable' },
  { slug: 'droit', name: 'Droit & professions juridiques' },
  { slug: 'medical', name: 'Santé & médical' },
  { slug: 'assurance-patrimoine', name: 'Assurance, courtage & patrimoine' },
  { slug: 'immobilier', name: 'Immobilier' },
  { slug: 'commerce-distribution', name: 'Commerce' },
  { slug: 'hotellerie', name: 'Hôtellerie' },
  { slug: 'retail-luxe', name: 'Retail & luxe' },
  { slug: 'industrie', name: 'Industrie' },
  { slug: 'marketing-communication', name: 'Agences marketing & communication' },
  { slug: 'associations', name: 'Associations & fédérations' },
  { slug: 'secteur-public', name: 'Secteur public & collectivités' },
  { slug: 'autre', name: 'Autre activité' },
];
/**
 * Secteurs où un écart sur le cadre pèse davantage : professions réglementées
 * (groupe « professions » des pages secteurs) et secteur public.
 */
export const SENSITIVE_SECTORS: readonly string[] = ['finance', 'comptabilite', 'droit', 'medical', 'assurance-patrimoine', 'immobilier', 'secteur-public'];

/** `sectorDetail` : précision libre quand le secteur est « Autre activité ». Jamais placée dans le lien de partage. */
export type Profile = { sector: string; size: SizeId | ''; role: RoleId | ''; sectorDetail?: string };
export const SECTOR_DETAIL_MAX = 80;
/** Intitulé du secteur à afficher : la précision saisie si elle existe, sinon le nom du secteur. */
export function sectorLabel(profile: Profile): string {
  const detail = profile.sector === 'autre' ? profile.sectorDetail?.trim() : '';
  return detail || SECTOR_OPTIONS.find(option => option.slug === profile.sector)?.name || '';
}
export function emptyProfile(): Profile { return { sector: '', size: '', role: '' }; }
/** Texte et options à afficher selon le profil (variante pour les indépendants). */
export function questionText(question: Question, size: Profile['size']): { q: string; opts: Options; help?: string } {
  const solo = size === 'solo' ? question.solo : undefined;
  return { q: solo?.q ?? question.q, opts: solo?.opts ?? question.opts, help: question.help };
}
