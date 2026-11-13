# Navigation Solutions

Le menu « Votre activité » devient « Solutions » dans la navigation commune du site. Inspiration : l’accès direct aux secteurs et aux métiers du menu de https://www.mister-ia.com/, avec le style, les libellés et les destinations propres à Althoce.

- Ordinateur : deux colonnes « Secteurs » et « Métiers », neuf destinations chacune, puis un lien vers chaque page d’ensemble.
- Mobile : deux rubriques repliables ; une seule ouverte à la fois. Le menu défile dans son propre espace et le bouton de rendez-vous reste accessible.
- Le fond blanc bleu ciel et les accents bleu marine reprennent la charte actuelle. La page visitée est indiquée avec `aria-current="page"`.
- Les quatre services principaux, les URL, les contenus de page et les métadonnées sont conservés.
- Une seule liste de données est utilisée pour les deux versions du menu. Aucun paquet ajouté.

## Vérifications

- TypeScript et construction de production réussis, 112 routes générées.
- Les vingt destinations du nouveau menu correspondent à des pages générées.
- Audit existant : 27 pages, 2 238 liens internes et 117 réponses FAQ, PASS.
- Ordinateur à 1 440 px : deux colonnes, liens complets, premier lien accessible avec Tab, fermeture avec Échap et retour du focus sur Solutions.
- Navigation Services contrôlée : les quatre services sont présents.
- Mobile à 375 px : ouverture de Solutions, bascule Secteurs/Métiers, neuf liens et une vue d’ensemble par rubrique, fermeture de la rubrique précédente.
- Navigation réelle vers Commercial & prospection ; page correcte, menu fermé, défilement du document rétabli. Réouverture : page active signalée. Échap revient au bouton du menu mobile.
- 320 × 640, 768 × 900 et 1 051 × 650 : menu dans la largeur et la hauteur disponibles, aucun débordement du document ou des liens détecté.
- Aucune erreur ni alerte console observée dans le parcours contrôlé.
- Graphe actualisé avec `graphify update .` : 500 nœuds, 385 relations.

Livraison dans la PR 13 et sur son aperçu uniquement. Pas de fusion en production.
