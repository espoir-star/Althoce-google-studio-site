# Vérification locale du positionnement — 18 octobre 2026

## Portée

Actualisation éditoriale dans l’architecture existante, deux programmes collectifs
mis à jour, ajout du Coaching IA Solo. Revue complémentaire des 19 pages conseil
par ville, des 19 formations locales et des pages services après le retour client.
Le surtitre de l’accueil et la photo de groupe ont été retirés. La photo n’est plus
référencée dans le HTML de l’accueil ni dans celui de la page À propos.
Le programme du Coaching IA Dirigeant reste
inchangé ; ses références vers les formations collectives sont actualisées.
Aucun push ni déploiement réalisé dans cette intervention.

## Résultats

- `npm run typecheck` : réussi.
- `npm run build` : réussi, génération complète des 99 entrées Next.js.
- `git diff --check` : réussi.
- `python3 scripts/verify-sector-build.py` : réussi sur les 28 pages concernées
  par ce contrôle existant (secteurs, guides et 19 formations locales).
- Sitemap : 90 URL, dont la nouvelle page `/services/formation-ia/coaching-independant/`.
- Contrôle du HTML des 90 pages du sitemap : un H1 et une URL canonique attendue,
  titre et description présents, aucun ID dupliqué détecté.
- 7 835 occurrences de liens internes vers des routes et 1 045 occurrences
  d’images vérifiées dans ce HTML : cibles locales présentes et attributs alt présents.
- 354 objets JSON-LD analysés. Questions et réponses FAQ correspondantes présentes
  dans le HTML rendu, y compris les panneaux repliés.
- Catalogue structuré : quatre parcours. Durées CourseInstance vérifiées :
  `PT7H`, `PT7H`, `PT4H30M`, `PT6H`.
- Audit éditorial du HTML sur les 53 pages formations, services et villes : nouveau
  positionnement présent, aucune ancienne dénomination de formation affichée,
  catalogue structuré de quatre parcours sur le hub et les 19 pages locales.
- Affichage navigateur sur les 53 pages ci-dessus, l’accueil et la page À propos,
  aux largeurs 320, 768 et 1 440 px : 165 contrôles sans débordement horizontal de
  page ni de bloc de texte (titres, paragraphes et résumés d’accordéon).
- Inspection visuelle de l’accueil, de la section cabinet sans photo et d’une
  formation locale avec un nom de ville long sur petit mobile.
- Ouverture d’un module Solo et de la FAQ de comparaison des coachings : fonctionnelle.
- Les quatre cartes du hub sont alignées et leur texte ne déborde pas. La grille
  des pages locales a été adaptée à quatre parcours en deux colonnes sur ordinateur.
- Aucune erreur console remontée par le navigateur pendant ces contrôles.
- `graphify update .` : réussi après les modifications de code.

## Limites

Ces contrôles portent sur le build et l’aperçu local. Ils ne valident pas un
déploiement Vercel, une indexation Google, un financement ou la validation
administrative des programmes par un organisme partenaire. Les liens externes
et les soumissions de formulaires n’ont pas été retestés : leurs mécanismes ne
sont pas modifiés par cette mise à jour éditoriale.
