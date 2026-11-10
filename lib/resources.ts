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
 {q:'Faut-il changer nos outils de reporting ?',a:'Nous partons de votre environnement actuel. Les accès, connexions et exports disponibles déterminent comment réunir les données utiles.'},
 {q:'Comment vérifier les analyses préparées ?',a:'Les chiffres restent reliés à leurs sources, périodes et définitions. L’équipe contrôle les calculs et confirme les explications avant de les présenter ou de décider.'},
 {q:'Peut-on commencer par une formation ?',a:'Oui. Une formation sur vos analyses et documents peut précéder la création d’un agent. Elle permet aussi d’identifier les tâches qui gagneraient à être automatisées.'},
 {q:'Qui faut-il associer au projet ?',a:'Le responsable du reporting et les personnes qui préparent les données. L’informatique est associée lorsque les connexions ou les droits d’accès le nécessitent.'},
];

export const financeGuideSlugs=['12-cas-usage-experts-comptables','guide-claude-pennylane','12-agents-ia-direction-financiere','12-skills-claude-finance','7-chantiers-ia-cabinet'];
export const metierGuideSlugs:Record<string,string[]>={finance:['12-agents-ia-direction-financiere','12-skills-claude-finance'],juridique:['claude-droit-10-cas-usage'],marketing:['guide-claude-meta-ads'],operations:['copilot-8-cas-usage']};
