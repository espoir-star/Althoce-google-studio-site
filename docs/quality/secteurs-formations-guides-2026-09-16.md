# Livraison locale — secteurs, formations par ville et guides

## Périmètre livré

- Sept pages secteurs : Finance, Droit, Marketing & communication, Associations & fédérations, Immobilier, Commerce & distribution, Industrie. Le hub /secteurs/ relie toutes ces pages.
- Finance : connectivité simplifiée en schéma, note de cadrage et trois bénéfices ; scénario de reporting conservé.
- Dix-neuf formations locales : Bordeaux, Paris, Lyon, Marseille, Toulouse, Nantes, Lille, Strasbourg, Nice, Rennes, Montpellier, Grenoble, Dijon, Reims, Angers, Le Havre, Saint-Étienne, Toulon et Nîmes.
- /guides/ : neuf guides regroupés par thèmes, carrousel Finance de quatre cartes sur ordinateur et fiches horizontales pour les catégories avec une seule ressource. Aucun faux guide pour les secteurs non couverts.
- Liens vers /guides/ depuis le hub, le menu Ressources et le pied de page. Ressources contextuelles sur les métiers Finance, Juridique, Marketing et Opérations.
- Liens depuis chaque page agence locale vers sa formation locale ; annuaire des formations locales sur le hub national formation. Les programmes détaillés conservent leurs URL.

## Contenus et visuels

- Réutilisation des lieux emblématiques déjà présents dans le site pour les 19 villes. Chaque formation locale dispose d'une introduction, d'un exercice et d'un livrable spécifiques, avec un cadrage sur site/à distance sans fausse implantation locale.
- Douze nouvelles photos de bureaux et d'ateliers générées pour les six secteurs ajoutés. Deux photos Finance déjà produites dans le pilote. Les 14 WebP sectoriels pèsent ensemble environ 1 399 Kio, de 79 à 119 Kio par image.
- Neuf couvertures en HTML/CSS, titres lisibles et logos/noms des solutions pertinentes. Les résumés reprennent le périmètre décrit par la configuration de l'application de capture. Aucune affirmation de certification ou de partenariat ajoutée.
- Programmes locaux : durées, groupes, suivi et financement issus des parcours existants ; financement conditionnel via l'organisme partenaire.

## Vérifications effectuées

- npm run build : compilation, types et génération statique réussis.
- python3 scripts/verify-sector-build.py : 28 pages contrôlées, aucun échec. Vérifie H1, canonical, identifiants uniques, routes liées, fichiers images, liens de capture et présence dans le sitemap.
- Sitemap généré : 89 URL, sans doublon ; les six nouveaux secteurs dynamiques sont explicitement énumérés.
- Neuf pages publiques de capture : HTTP 200 ; aucune soumission de formulaire.
- 84 contrôles de largeur : les 28 pages à 320, 768 et 1440 px, sans débordement horizontal. Sept contrôles mobiles complémentaires après finitions, incluant la bibliothèque, les formations et les métiers enrichis.
- Revue visuelle des douze images sectorielles, de la formation Bordeaux, des pages sectorielles et de la bibliothèque. Vérification du carrousel Finance : quatre visibles sur ordinateur, boutons précédent/suivant, une carte sur mobile, compteur et accès au cinquième guide.
- git diff --check réussi ; graphe du projet actualisé avec graphify update .

## Architecture et reprise

- lib/sectors-content.ts et components/sectors/SectorPage.tsx : données et modèle des six secteurs. Finance conserve sa narration spécifique.
- lib/formation-cities.ts et components/formation-cities/FormationCityPage.tsx : 19 contenus et modèle partagé ; routes statiques légères.
- lib/resources.ts : catalogue unique ; ResourceCard, ResourceSection et GuideCarousel réutilisés sur les secteurs, métiers et bibliothèque.
- Ajouter une future ressource au catalogue puis aux groupes concernés ; garder le lien vers la capture et vérifier sa disponibilité.

## Livraison

Travail disponible sur http://127.0.0.1:3000/ ; aucun push GitHub ni déploiement Vercel effectué. Le calendrier éditorial préexistant n'a pas été modifié. Les vérifications portent sur la version locale ; elles ne garantissent pas un classement SEO ou une visibilité dans les moteurs IA.
