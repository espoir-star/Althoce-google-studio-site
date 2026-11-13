# Accueil : cas clients illustrés et défilants

## Évolution demandée

La section « Ce que l’IA change, sur le terrain. » présente les quatre projets déjà présents sur l’accueil dans un carrousel. Les photos de bureau sont remplacées, dans cette section uniquement, par quatre illustrations éditoriales inspirées des couvertures actuelles du blog : blanc légèrement bleu ciel, bleus, grain léger et objets métier.

- Comptabilité : factures et lignes rapprochées.
- Prospection : messages, globe et négoce de vins.
- Service client : demandes orientées vers le support.
- Accueil téléphonique : téléphone, agenda et dossier.

Les illustrations sont générées pour cette présentation. Elles ne représentent pas les locaux ni les personnes des clients. Fichiers WebP de 1 200 × 751 pixels, entre 25 et 39 ko, environ 134 ko au total avant optimisation par Next Image. Chargement à la demande, dimensions réservées et textes alternatifs.

## Lecture et interactions

- Une carte principale et l’amorce de la suivante ; illustration au-dessus du texte sur mobile.
- Défilement automatique toutes les 5,5 secondes, seulement lorsque la section est suffisamment visible et l’onglet actif.
- Flèches, sélection directe par projet, compteur et bouton Pause/Reprendre. Barre de progression synchronisée avec le délai de 5,5 secondes.
- Entrée légère du texte à chaque changement ; zoom discret du visuel pendant la lecture automatique. Les cartes hors sélection sont légèrement atténuées. Tous ces effets respectent la réduction des mouvements.
- Arrêt au survol ; pause durable à l’interaction tactile, au défilement manuel ou au focus clavier. Reprise explicite par le bouton.
- Navigation clavier avec les flèches, Début et Fin ; le focus suit le lien du projet sélectionné.
- Défilement tactile natif avec alignement des cartes ; les liens restent disponibles dans le HTML initial.
- Aucune lecture automatique ni transition lorsque la préférence système demande de réduire les mouvements. Comportement prévu par le code et les styles ; la préférence système n’a pas été modifiée pendant les contrôles navigateur.

## Contenu et SEO

Les titres de section, les quatre destinations et le lien vers l’ensemble des cas sont conservés. Chaque carte présente un résultat déjà documenté dans le catalogue, validé antérieurement par le client, accompagné de « Résultat observé dans ce projet. ». Aucun nouveau résultat n’est inventé. Les textes et cartes restent rendus côté serveur ; seule la navigation du carrousel est un composant client. Pas de dépendance ajoutée.

Les cartes services de la livraison précédente sont conservées. Les métadonnées, URL, canonical, données structurées et sitemap ne changent pas.

## Validation

- TypeScript et construction de production réussis (112 routes générées).
- Contrôles de mise en page à 320, 375, 600, 768, 1 024 et 1 440 pixels : quatre cartes présentes, aucun débordement de page ou de texte détecté.
- Navigation précédente/suivante et sélection directe contrôlées, dont le passage de la première à la dernière carte.
- Touches Début et Fin : sélection et focus sur le bon projet.
- Reprise du défilement observée de Comptabilité à Prospection ; pause contrôlée séparément.
- Défilement horizontal mobile contrôlé de Prospection à Service client, sans déplacement horizontal de la page.
- Images chargées, résultats et liens conservés dans le HTML rendu.
- Audit HTML : 27 pages, 2 238 liens internes et 117 réponses FAQ, PASS. Les cinq liens de la section et les quatre illustrations avec texte alternatif sont présents dans le HTML initial.
- Aucun avertissement ni erreur console observé dans le parcours local contrôlé.
- Graphe du code actualisé : 495 nœuds et 380 relations.

Livraison sur la branche d’aperçu de la PR 13 uniquement. Pas de fusion ni de mise en production.


## Ajustement de palette et de rythme

À la demande du client, suppression de la dominante crème dans les quatre illustrations (fonds et surfaces de papier). Le fond de l’image utilise désormais un blanc bleu ciel voisin de `#eff7ff`, repris dans le conteneur. La section utilise un dégradé très léger de `#f5faff` à `#edf5ff`. Les objets bleu marine et cobalt, le grain et les tons naturels des mains sont conservés.

Les quatre fichiers sont remplacés aux mêmes emplacements, dans la branche d’aperçu :

- `/tmp/althoce-secteurs-metiers-20261110/public/images/cases/comptabilite-editorial.webp`
- `/tmp/althoce-secteurs-metiers-20261110/public/images/cases/prospection-editorial.webp`
- `/tmp/althoce-secteurs-metiers-20261110/public/images/cases/service-client-editorial.webp`
- `/tmp/althoce-secteurs-metiers-20261110/public/images/cases/accueil-telephonique-editorial.webp`

Édition avec l’outil de génération d’images intégré, une demande par visuel, puis compression WebP sans autre retouche. Poids cumulé : 133 586 octets. Consigne commune utilisée :

> Edit the supplied image, preserving its exact composition, all objects, the hand anatomy and natural skin tone, the dark navy and cobalt objects, and the subtle paper grain. This is a precise background and white-balance correction only. Replace the warm beige/cream paper background with a very light cool sky-blue white, approximately #EFF7FF. Make all cream-colored white papers and label surfaces clean cool white with a very subtle pale blue tint; all shadows should be cool blue-grey rather than yellow-grey. Bright, airy, professional blue-and-white editorial illustration that blends into a modern French consultancy website. Keep the same layout, framing, aspect ratio, object positions, number of objects, hand, and business illustration concept. Do not redesign or add anything. No text, no new logos. Avoid ALL beige, ivory, yellow, peach or warm cast in the background or paper surfaces; keep the hand's original natural skin color. Output the complete single edited image.
