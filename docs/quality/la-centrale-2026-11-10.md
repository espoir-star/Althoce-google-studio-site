# La Centrale by Althoce — 10 novembre 2026

## Périmètre

Nouvelle page `/ia-souveraine/`, réalisée sur `codex/la-centrale-ia-souveraine`, depuis `origin/main` (`7c8b6ca`). Les modifications locales du calculateur ROI, des secteurs et des documents éditoriaux de l’espace principal sont exclues de cette branche.

La page présente une installation et un accompagnement sur mesure. Son objectif est la prise de rendez-vous. Aucun parcours d’achat, inscription, abonnement, tarif ou fournisseur tiers n’est ajouté.

## Intégration

- Entrée directe « La Centrale » dans la navigation ordinateur et mobile. Les quatre services du menu restent inchangés.
- Lien dans la colonne Accompagnement du footer.
- Inclusion par le scan automatique du sitemap, avec la priorité des pages services.
- Même destination de contact que les pages services : `/contact/`. Le calendrier existant étant dédié aux connecteurs, il n’est pas réutilisé pour cette offre.
- Réutilisation du fil d’Ariane, de la FAQ, de la section méthode, des boutons, des styles de marque et du CTA commun. Deux propriétés facultatives permettent de personnaliser le libellé et la note du CTA sans changer ses valeurs par défaut ailleurs.
- Deux photographies de bureau déjà présentes sur le site, en WebP, avec `next/image`, tailles responsive et chargement différé. Elles ne sont pas présentées comme des photos de clients de La Centrale.
- Schéma HTML/CSS explicitement nommé « Schéma de principe » : sources, données autorisées, agents sur mesure, propositions, validation humaine et hébergement. Il ne prétend pas montrer une interface existante.
- Comparaison des usages dispersés et de La Centrale en listes courtes. Deux cartes alternatives pour l’hébergement, puis un bandeau commun pour les modèles open source. Trois schémas illustrent le démarrage, l’extension et les ajustements avec Althoce.
- Page rendue côté serveur. Un composant interactif isolé permet d’explorer quatre usages avec des onglets accessibles au clavier. Les quatre panneaux restent présents dans le HTML initial. Aucune nouvelle dépendance.
- Les exemples montrent les données utiles, le travail préparé et la validation humaine, avec la mention explicite qu’ils sont à adapter aux besoins. Les encadrés sont des illustrations de missions, pas des captures du produit.
- Analyse d’AgentFlow comme référence de présentation uniquement : usages tangibles et FAQ avant rendez-vous. Aucun visuel, texte, nom d’outil, chiffre, durée ni promesse technique repris de ce site.

## Référencement

Titre absolu conforme au brief, description, canonical avec slash final, Open Graph et Twitter. Une image de partage dédiée est générée en 1200 × 630. Un seul H1 et un H2 par section. Données structurées Service, BreadcrumbList et FAQPage ; aucun prix, avis, résultat chiffré ou certification ajouté.

## Texte proposé pour validation

Les faits suivants sont repris du brief : solution installée et accompagnée par Althoce, sur mesure, raccordement aux outils, évolution selon les besoins, hébergement France ou chez le client, modèles open source par défaut, validation humaine, accès outil par outil et technologie déjà en service dans des cabinets comptables. Ils n’ont pas fait l’objet d’un audit de la plateforme dans cette intervention.

Les exemples suivants sont des formulations éditoriales proposées, pas des fonctions testées. Toutes les légendes des missions sont recensées ici pour validation du périmètre réel.

### Collecte de pièces

- Accroche : « Un dossier rassemblé. Les pièces manquantes identifiées. »
- Description : « L’agent rapproche les pièces disponibles dans vos outils et prépare les demandes de complément. Votre équipe vérifie le dossier avant de relancer. »
- Données envisagées : « Documents du dossier et échanges autorisés. »
- Mission illustrée : « Compléter un dossier client »
- Préparations illustrées : « Les pièces déjà disponibles » ; « Les éléments encore à demander » ; « Une demande de complément à relire ».
- Validation : « Votre équipe vérifie et valide la demande. »

### Prospection

- Accroche : « Une prise de contact préparée avec le bon contexte. »
- Description : « L’agent s’appuie sur les informations de vos outils pour préparer une approche. Vous choisissez le destinataire et ajustez le message avant tout envoi. »
- Données envisagées : « Informations commerciales auxquelles vous donnez accès. »
- Mission illustrée : « Préparer une approche commerciale »
- Préparations illustrées : « Les informations utiles sur le prospect » ; « Un angle de prise de contact » ; « Un message à personnaliser et valider ».
- Validation : « Vous décidez à qui écrire et quoi envoyer. »

### Relation client

- Accroche : « Le contexte retrouvé. Une réponse prête à relire. »
- Description : « L’agent rassemble les éléments utiles à une demande et propose un brouillon. Votre équipe le complète et valide la réponse. »
- Données envisagées : « Historique d’échanges et documents autorisés. »
- Mission illustrée : « Répondre à une demande client »
- Préparations illustrées : « Le contexte de la demande » ; « Les éléments à confirmer » ; « Un brouillon de réponse ».
- Validation : « Votre équipe relit, complète et valide l’envoi. »

### Analyse et bilan

- Accroche : « Les informations réunies pour éclairer votre décision. »
- Description : « L’agent croise les données accessibles d’un dossier et prépare une synthèse. Votre équipe apporte son analyse et valide les conclusions. »
- Données envisagées : « Pièces du dossier et données de gestion autorisées. »
- Mission illustrée : « Faire le point sur un dossier »
- Préparations illustrées : « Les éléments à examiner » ; « Une synthèse du dossier » ; « Les points à approfondir ».
- Validation : « L’analyse finale et la décision vous appartiennent. »

Les accroches sectorielles proposées sont :

- Santé : « Des informations sensibles, des accès à encadrer. »
- Juridique : « Des dossiers confidentiels, une expertise à préserver. »
- Finance : « Des analyses à relier aux données de vos outils. »
- Expertise comptable : « Des pièces et des dossiers à faire circuler. »
- Industrie : « Des savoir-faire et des processus à protéger. »
- Secteur public : « Des usages à adapter à votre cadre de travail. »

Les précisions de processus proposées pour éviter une promesse universelle sont :

- « Les connexions et les données accessibles sont définies avec vous, selon vos outils et vos règles métier. »
- La vérification des possibilités de connexion avant le cadrage du projet est une précision proposée pour éviter une promesse de compatibilité universelle.
- « Les agents préparent. Les envois restent soumis à votre validation. » Cette reformulation du brief doit correspondre au paramétrage effectivement livré.
- « Vos collaborateurs prennent en main leurs agents à partir de leurs tâches et de leurs dossiers du quotidien. »
- Le premier rendez-vous est présenté comme un échange à partir d’une tâche, des outils concernés et des contraintes. Aucun livrable, durée ou résultat garanti n’est promis.

### Réponses proposées pour la FAQ

**Comment La Centrale s’intègre-t-elle à nos logiciels actuels ?**

Nous partons des logiciels que vos équipes utilisent déjà. Althoce identifie les données utiles aux agents et vérifie les possibilités de connexion avant de définir le périmètre du projet. Les raccordements sont choisis selon vos outils, vos autorisations et vos règles métier.

**Les agents peuvent-ils envoyer une réponse sans notre validation ?**

Les agents préparent le travail. Les envois restent soumis à votre validation. Nous définissons avec vous ce que chaque agent peut consulter et les étapes où vos équipes doivent relire et donner leur accord.

**Que signifie « IA souveraine » pour La Centrale ?**

La Centrale utilise des modèles open source par défaut. Elle peut être hébergée en France ou sur vos propres serveurs. Le choix de l’environnement, les accès aux données et les validations sont définis avec vous dans le cadre du projet.

**Peut-on commencer par un seul besoin ?**

Oui. La Centrale est construite autour de vos priorités. Vous pouvez commencer par un usage, puis ajouter des agents et des outils au fil de vos besoins, avec l’accompagnement d’Althoce.

**Qui installe la plateforme et forme nos collaborateurs ?**

Althoce prend en charge le cadrage, l’installation, les connexions prévues, la formation de vos équipes et le suivi. Vos collaborateurs prennent en main les agents à partir de situations de leur quotidien. Nous ajustons ensuite les usages avec leurs retours.

**Que prépare-t-on pour le premier rendez-vous ?**

Venez avec un exemple de tâche qui prend du temps à vos équipes, les outils concernés et les contraintes à respecter. Nous regardons ensemble quel premier usage envisager et les points à vérifier pour le construire sur mesure.

Les nouvelles légendes « Uniquement les données autorisées » et « Elles relisent et valident avant envoi » reformulent le périmètre des accès et les validations demandées dans le brief. Elles ne sont pas la preuve d’un contrôle de sécurité de la plateforme.

Les autres titres et textes sont des reformulations du brief : usages dispersés, plateforme commune, choix d’hébergement, décision humaine, évolution et accompagnement. Ils ne rajoutent aucune garantie de conformité, certification, compatibilité avec un logiciel nommé ou apprentissage autonome.

## Vérifications réalisées

- Compilation de production et contrôle TypeScript.
- HTML serveur : H1 unique, titre exact, canonical, six questions et réponses concordant avec le JSON-LD, Service et fil d’Ariane.
- Sitemap généré : URL présente une seule fois et absence de doublons.
- Contenu central : pas de prix, durée chiffrée, statistique, fournisseur interdit, certification ou promesse « 100 % souverain ».
- Navigation : quatre services conservés ; lien La Centrale sur ordinateur et dans le menu mobile ; fermeture par Échap avec restitution du focus.
- FAQ native utilisable au clavier ; lien de rendez-vous vers Contact, puis retour via le menu.
- Largeurs 320, 375, 390, 768, 1024 et 1440 px : aucun débordement horizontal du document ni des éléments de la nouvelle page.
- Revue visuelle initiale des photographies, du menu et de l’image de partage. Après la passe de clarté : nouveau schéma du hero, comparaison, hébergement et évolution revus sur ordinateur ; schéma et cartes d’hébergement revus sur téléphone. Mesures de débordement renouvelées à toutes les largeurs indiquées.
- Nouvelle passe interactive : quatre onglets testés au clic, changement du panneau et sélection vérifiés ; flèche gauche avec retour au dernier onglet et touche Home avec restitution du focus. FAQ finale ouverte au clavier.
- Nouvelle mesure responsive à 320, 375, 390, 768, 1024 et 1440 px : aucun débordement du document ou des éléments de la page. Onglets d’au moins 56 px de haut. Revue visuelle du panneau complet sur ordinateur et de la sélection puis de la mission sur téléphone.
- Aucun avertissement ni erreur JavaScript observé. HTML initial vérifié pour les quatre missions, les identifiants uniques et les relations ARIA. La route ajoute environ 2,9 ko de JavaScript et affiche 119 ko de First Load JS dans le build Next.js (mesure de compilation, pas une mesure terrain).
- `git diff --check` et `graphify update .`.

L’aperçu local est servi sur le port 3002. Aucun formulaire envoyé, aucune mise en production et aucune fusion de branche réalisés dans cette intervention. L’intégration effective aux outils, les droits et le traitement des données de La Centrale restent hors du périmètre de ces tests de page web.

## Intégration dans les pages clés

La Centrale est présentée après les quatre accompagnements : un encart court sur l’accueil et une présentation avec schéma sur Services. Elle ne devient pas un cinquième service. La simplification de l’accueil est documentée dans `homepage-simplification-2026-11-10.md`.

Un composant serveur `CentraleDiscovery` propose deux formats : présentation avec schéma et encart compact. Les textes sont centralisés dans `lib/centrale-links.ts`. Un seul encart et un seul lien contextualisé sont ajoutés par page. Le menu, le footer et le sitemap assurent déjà l’accès transversal.

### Pages concernées

- `/`
- `/services/`
- `/agent-ia/`
- `/services/agents-ia/`
- `/services/automatisation-ia/`
- `/services/integration-ia/`
- `/services/developpement-ia/`
- `/services/pilotage-ia/`
- `/secteurs/`
- `/secteurs/finance/`
- `/secteurs/droit/`
- `/secteurs/industrie/`
- `/agent-ia/finance/`
- `/agent-ia/juridique/`
- `/agent-ia/operations/`
- `/blog/ia-souveraine-donnees-sensibles-hds-secret-professionnel/`

Le déploiement, l’intégration, le développement et le pilotage sont des moments où le visiteur peut envisager une plateforme commune. Finance, droit, industrie et trois pages métiers prolongent ce besoin avec leurs propres sujets. L’article sur l’IA souveraine relie la réflexion éditoriale à une offre concrète, après son contenu.

Les formations, l’audit et les autres pages conservent leur parcours actuel, sans encart supplémentaire ni suggestion que La Centrale soit incluse dans une formation. Aucune compatibilité logicielle, certification, durée ou résultat chiffré n’est ajouté.

### Textes des encarts proposés pour validation

Ces formulations adaptent les promesses du brief aux pages concernées ; elles ne constituent pas une vérification technique des fonctionnalités.

**home : La Centrale : vos agents IA, chez vous.**

Une plateforme sur mesure, reliée à vos outils et hébergée en France ou sur vos serveurs. Althoce l’installe et accompagne vos équipes.

**services : Un cadre commun pour vos agents IA.**

Vous souhaitez réunir vos agents et vos outils dans une plateforme souveraine ? Althoce installe La Centrale sur mesure, forme vos équipes et accompagne son évolution.

**agents : Vos agents, réunis dans La Centrale.**

Lorsque plusieurs usages doivent travailler ensemble, La Centrale leur donne un cadre commun. Vos agents sont conçus sur mesure, reliés aux outils prévus et utilisés avec les validations de votre équipe.

**automatisation : Relier les tâches. Garder la main.**

Pour réunir vos agents et les outils de vos processus, Althoce peut installer La Centrale. Nous définissons avec vous les connexions, les données accessibles et les validations nécessaires.

**integration : Vos outils reliés. Vos accès définis.**

La Centrale peut réunir vos agents dans une plateforme hébergée en France ou sur vos serveurs. Les connexions se définissent selon vos outils et les autorisations de votre organisation.

**developpement : Une plateforme construite pour vos usages.**

La Centrale est une possibilité pour réunir vos agents IA sur mesure. Althoce installe la plateforme, raccorde les outils retenus et ajuste les usages avec vos équipes.

**pilotage : Un même espace. Des usages qui évoluent.**

Avec La Centrale, vous pouvez commencer par une priorité, puis ajouter des agents et des connexions. Althoce accompagne la prise en main et les ajustements au fil de vos usages.

**secteurs : Vos exigences donnent le cadre.**

Données sensibles, accès à encadrer, décisions à valider : La Centrale réunit vos agents IA dans une plateforme sur mesure, installée en France ou sur vos serveurs selon votre projet.

**finance : Vos dossiers financiers, dans un cadre maîtrisé.**

La Centrale peut réunir la préparation des pièces et des analyses avec des agents reliés aux outils retenus. Les données accessibles sont définies avec vous ; votre équipe garde la validation des conclusions.

**droit : Vos dossiers juridiques, avec vos règles.**

Pour préparer des synthèses à partir des documents autorisés, La Centrale réunit vos agents dans une plateforme sur mesure. Hébergement, accès et validations se cadrent avec votre organisation.

**industrie : Vos données métier, dans votre environnement.**

Relier la documentation et préparer des analyses : La Centrale peut accueillir vos agents sur mesure en France ou sur vos serveurs. Les outils à connecter et les données accessibles sont définis avec vos équipes.

**souverainete : Passer des exigences au projet.**

La Centrale est la plateforme d’agents IA sur mesure qu’Althoce installe et accompagne. Modèles open source par défaut, hébergement en France ou sur vos serveurs : les choix se cadrent selon vos données et vos usages.

L’illustration de la présentation Services reprend seulement les éléments du brief : « Vos outils et données autorisés », « La Centrale », « Vos agents IA sur mesure », « Vos équipes valident », « La décision reste humaine » et « En France ou sur vos serveurs ». Le lien commun est « Découvrir La Centrale ».

### Vérification de l’intégration initiale (avant simplification de l’accueil)

- Compilation complète de production et TypeScript réussis ; `git diff --check` et `graphify update .` exécutés.
- Comparaison du HTML compilé avant et après : titres, canonicals, H1 et JSON-LD strictement identiques sur les 16 pages. Un seul nouvel encart et un seul lien vers `/ia-souveraine/` dans chacun d’eux.
- Aucun encart sur les pages Formation IA, Audit IA, Contact, Associations et Agent téléphonique contrôlées comme témoins.
- 40 contrôles de dimensions : accueil, services, agents IA, finance, droit, industrie, métier juridique et article, à 320, 390, 768, 1024 et 1440 px. Aucun débordement horizontal du document ou de l’encart ; lien d’au moins 44 px de haut.
- Revue visuelle : présentation Services sur ordinateur, accueil et finance sur mobile, encart dans la colonne de lecture de l’article sur ordinateur.
- Parcours Services → La Centrale → Contact vérifié sans envoi de formulaire. Navigation clavier et focus visible du lien vérifiés. Aucune erreur ou alerte JavaScript observée.
- Composant rendu côté serveur, sans nouvelle image à télécharger, dépendance ou JavaScript interactif supplémentaire.
