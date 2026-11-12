# Accueil : cartes services et cas clients — 12 novembre 2026

## Périmètre

Amélioration des sections « Nos services IA. Votre point de départ. » et « Ce que l’IA change, sur le terrain. », sur l’aperçu existant de la PR 13. Aucun changement de production.

- Quatre services en grille de deux colonnes, puis une colonne sur téléphone. Repère de besoin, titres plus lisibles, fonds sobres différenciés et flèche de navigation intégrée.
- Projet comptable mis en avant : photo conservée, contexte identifié sur l’image, texte blanc sur bleu et résultat existant distingué du descriptif.
- Trois projets complémentaires présentés en cartes illustrées. Images et titres repris du catalogue de cas existant, avec une présentation compacte sur mobile.
- Liens, titres des sections, quatre services, exemple principal et chiffre déjà présent conservés. Aucun nouveau résultat chiffré, aucune nouvelle image générée, aucun script client ajouté.
- Changements limités à `HomePageClient.tsx` et à sa feuille de style ; les autres pages ne changent pas.

## Contrôles

- TypeScript et construction de production réussis.
- Audit HTML existant : 27 pages, 2 238 liens internes, 117 réponses FAQ, PASS. Métadonnées, canonical et sitemap inchangés.
- Contrôle navigateur des deux sections à 320, 375, 600, 768, 1 024 et 1 440 px : pas de débordement de page ni de texte détecté.
- Relecture visuelle des services et des projets sur ordinateur et mobile ; quatre images de cas correctement chargées.
- Navigation clavier : focus visible sur les cartes (contour 3 px). Lien Formation contrôlé jusqu’à sa destination.
- Texte descriptif sur les deux fonds bleus : contraste calculé de 6,87:1 et 9,06:1. Les titres blancs et les précisions du résultat restent lisibles.
- Images complémentaires chargées à la demande avec tailles adaptées ; mise en page réservée pour éviter les déplacements au chargement.
- Aucune erreur console observée pendant le parcours contrôlé. Animations et transitions désactivées lorsque l’utilisateur demande de réduire les mouvements.
- `git diff --check` et `graphify update .` effectués.
