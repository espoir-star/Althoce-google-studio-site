export type Guide = { slug: string; title: string; description: string; audience: string; theme: 'blue' | 'ink' | 'sage' | 'sand'; mark: string; solutions?: ('claude' | 'pennylane' | 'meta' | 'copilot')[] };
const captureBase = 'https://guide-gratuit-pi.vercel.app';
export function guideUrl(slug: string) { return `${captureBase}/r/${slug}`; }
export const guides: Guide[] = [
 {slug:'12-cas-usage-experts-comptables',title:'12 cas d’usage de Claude pour les experts-comptables',description:'Des pistes concrètes pour la production, la relation client et l’organisation du cabinet.',audience:'Cabinets comptables',theme:'blue',mark:'12',solutions:['claude']},
 {slug:'guide-claude-pennylane',title:'Claude × Pennylane',description:'Un guide de connexion, des cas d’usage et des prompts pour travailler sur vos dossiers comptables.',audience:'Cabinets comptables',theme:'sand',mark:'×',solutions:['claude','pennylane']},
 {slug:'12-agents-ia-direction-financiere',title:'12 agents IA pour votre direction financière',description:'Des exemples d’agents, leurs fichiers et leur paramétrage pour explorer vos propres usages.',audience:'Directions financières',theme:'ink',mark:'12',solutions:['claude']},
 {slug:'12-skills-claude-finance',title:'12 skills Claude pour la finance',description:'Les fichiers, l’installation et la méthode pour réutiliser vos procédures avec Claude.',audience:'Directions financières',theme:'sage',mark:'12',solutions:['claude']},
 {slug:'7-chantiers-ia-cabinet',title:'Intégrer l’IA dans un cabinet : les 7 chantiers',description:'Les priorités d’organisation pour passer des usages individuels à une démarche partagée dans le cabinet.',audience:'Transformation du cabinet',theme:'sand',mark:'7'},
 {slug:'guide-claude-meta-ads',title:'Piloter vos Meta Ads avec Claude',description:'Une méthode d’analyse et des prompts pour préparer l’optimisation de vos campagnes.',audience:'Marketing & communication',theme:'blue',mark:'×',solutions:['claude','meta']},
 {slug:'claude-droit-10-cas-usage',title:'10 cas d’usage de Claude en droit',description:'Des prompts, le paramétrage du compte et les précautions à prendre avant de travailler sur un dossier.',audience:'Avocats & juristes',theme:'ink',mark:'10',solutions:['claude']},
 {slug:'copilot-8-cas-usage',title:'Copilot : 8 cas d’usage pour vos équipes',description:'Des exemples pratiques, un premier agent et une checklist pour cadrer les usages.',audience:'Équipes & organisation',theme:'sage',mark:'8',solutions:['copilot']},
 {slug:'claude-data-gouv-20-prompts',title:'Claude × data.gouv : 20 prompts',description:'Des pistes pour explorer les données publiques : entreprises, informations financières et valeurs foncières.',audience:'Analyse & données publiques',theme:'sand',mark:'20',solutions:['claude']},
];
export const financeFaq = [
 {q:'À qui s’adresse ce parcours IA Finance ?',a:'Aux DAF, responsables financiers et équipes de contrôle de gestion qui souhaitent structurer les usages de leur entreprise. Les cabinets d’expertise comptable disposent d’une page dédiée à leur production multi-clients.'},
 {q:'Faut-il commencer par une formation ou un diagnostic ?',a:'Une formation permet de travailler un usage individuel ou collectif. Si le projet touche plusieurs sources, contrôles et services, un diagnostic aide à choisir le périmètre. Le point de départ dépend du besoin, pas d’un parcours imposé.'},
 {q:'Comment vérifier les analyses proposées par l’IA ?',a:'Les indicateurs, périmètres et périodes sont définis avant les essais. Les résultats doivent conserver leurs sources et distinguer chiffres constatés, hypothèses et informations manquantes. Les décisions financières restent prises par les personnes habilitées.'},
 {q:'Nos outils actuels peuvent-ils être conservés ?',a:'Nous étudions les possibilités d’accès, de connexion ou d’export de votre environnement. Un essai peut fonctionner sur des fichiers contrôlés. Une intégration continue nécessite ensuite un cadrage des droits, des mises à jour et des reprises.'},
];

export const financeGuideSlugs=['12-cas-usage-experts-comptables','guide-claude-pennylane','12-agents-ia-direction-financiere','12-skills-claude-finance','7-chantiers-ia-cabinet'];
export const metierGuideSlugs:Record<string,string[]>={finance:['12-agents-ia-direction-financiere','12-skills-claude-finance'],juridique:['claude-droit-10-cas-usage'],marketing:['guide-claude-meta-ads'],operations:['copilot-8-cas-usage']};
