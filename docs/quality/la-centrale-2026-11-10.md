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
- Schéma HTML/CSS explicitement nommé « Schéma de principe ». Il ne prétend pas montrer une interface existante.
- Page rendue côté serveur, sans nouvelle dépendance ni JavaScript interactif propre à l’offre.

## Référencement

Titre absolu conforme au brief, description, canonical avec slash final, Open Graph et Twitter. Une image de partage dédiée est générée en 1200 × 630. Un seul H1 et un H2 par section. Données structurées Service, BreadcrumbList et FAQPage ; aucun prix, avis, résultat chiffré ou certification ajouté.

## Texte proposé pour validation

Les faits suivants sont repris du brief : solution installée et accompagnée par Althoce, sur mesure, raccordement aux outils, évolution selon les besoins, hébergement France ou chez le client, modèles open source par défaut, validation humaine, accès outil par outil et technologie déjà en service dans des cabinets comptables. Ils n’ont pas fait l’objet d’un audit de la plateforme dans cette intervention.

Les exemples suivants sont des formulations éditoriales proposées, pas des fonctions testées :

- Collecte de pièces : « Rassembler les documents d’un dossier et préparer les demandes de pièces manquantes. »
- Prospection : « Préparer une prise de contact à partir des informations disponibles dans vos outils. »
- Relation client : « Retrouver le contexte d’une demande et proposer une réponse à faire valider. »
- Analyse et bilan : « Croiser les informations d’un dossier et préparer une synthèse pour votre revue. »

Les accroches sectorielles proposées sont :

- Santé : « Des informations sensibles, des accès à encadrer. »
- Juridique : « Des dossiers confidentiels, une expertise à préserver. »
- Finance : « Des analyses à relier aux données de vos outils. »
- Expertise comptable : « Des pièces et des dossiers à faire circuler. »
- Industrie : « Des savoir-faire et des processus à protéger. »
- Secteur public : « Des usages à adapter à votre cadre de travail. »

Les précisions de processus proposées pour éviter une promesse universelle sont :

- « Les connexions et les données accessibles sont définies avec vous, selon vos outils et vos règles métier. »
- FAQ : « Nous vérifions les possibilités de connexion et les autorisations nécessaires avant de définir les raccordements du projet. »
- « Les agents préparent. Les envois restent soumis à votre validation. » Cette reformulation du brief doit correspondre au paramétrage effectivement livré.
- « Vos collaborateurs prennent en main leurs agents à partir de leurs tâches et de leurs dossiers du quotidien. »
- FAQ : « Le premier rendez-vous sert à comprendre votre contexte et à définir le projet avec vous. »

Les autres titres et textes sont des reformulations du brief : usages dispersés, plateforme commune, choix d’hébergement, décision humaine, évolution et accompagnement. Ils ne rajoutent aucune garantie de conformité, certification, compatibilité avec un logiciel nommé ou apprentissage autonome.

## Vérifications réalisées

- Compilation de production et contrôle TypeScript.
- HTML serveur : H1 unique, titre exact, canonical, quatre questions et réponses concordant avec le JSON-LD, Service et fil d’Ariane.
- Sitemap généré : URL présente une seule fois et absence de doublons.
- Contenu central : pas de prix, durée chiffrée, statistique, fournisseur interdit, certification ou promesse « 100 % souverain ».
- Navigation : quatre services conservés ; lien La Centrale sur ordinateur et dans le menu mobile ; fermeture par Échap avec restitution du focus.
- FAQ native utilisable au clavier ; lien de rendez-vous vers Contact, puis retour via le menu.
- Largeurs 320, 375, 390, 768, 1024 et 1440 px : aucun débordement horizontal du document ni des éléments de la nouvelle page.
- Revue visuelle du schéma, des sections, des photographies, du menu mobile et de l’image de partage.
- Pas d’erreur JavaScript observée pendant le parcours local.
- `git diff --check` et `graphify update .`.

L’aperçu local est servi sur le port 3002. Aucun formulaire envoyé, aucune mise en production et aucune fusion de branche réalisés dans cette intervention. L’intégration effective aux outils, les droits et le traitement des données de La Centrale restent hors du périmètre de ces tests de page web.
