# Formation IA Dirigeant & Associés — 30 octobre 2026

## Source et périmètre

Mise à jour demandée par le client à partir du [programme public ALTH-FDIR-01, V1.0 du 29 octobre 2026](https://docs.google.com/document/d/1F9gn6yn-jm3HCriTzGf8ndh3i_34T57lslhSGiIx-NM/edit), de la [fiche commerciale](https://docs.google.com/document/d/1pqE3D1495dICDsi7RdCg33_Nhi_bVRGCSUDC0g3R4oo/edit) et du [cahier du participant](https://docs.google.com/document/d/1ThObIwma3wyFnumqrwiv7yJXAoFXkYBvXQzdc4b8OMM/edit).

Le nouveau parcours remplace le coaching dirigeant de quatre séances sur la même URL : `/services/formation-ia/coaching-dirigeant/`. Le Coaching IA Solo reste un parcours distinct et conserve ses modalités.

- 7 heures pédagogiques sur une journée, de 9 h à 17 h, déjeuner exclu.
- Un dirigeant seul ou accompagné de quatre associés ou décideurs, cinq participants maximum.
- Entretien préparatoire individuel de 45 minutes, hors des sept heures.
- Six modules, assistant pédagogique, matrice de trois opportunités, checklist de gouvernance et feuille de route à 90 jours.
- Suivi à J+30 ; présentiel ou visioconférence.
- Prérequis, évaluation, financement conditionnel et distinction entre prototype pédagogique et production précisés dans la FAQ.

Titres, descriptions, données sociales et schéma Course actualisés. Le catalogue partagé, le footer, les renvois des autres formations et les FAQ des pages locales et services reprennent la nouvelle offre. Les tarifs et les champs administratifs provisoires ne sont pas publiés, conformément au cadrage du site.

## Vérifications

- TypeScript : `npm run typecheck`, réussi.
- Compilation finale : `npm run build`, réussie ; journal `/tmp/althoce-dirigeant-build-2026-10-30.log`.
- Contrôle HTML généré sur 43 pages : absence de l’ancienne offre, FAQ conformes aux données structurées, liens vers la formation conservés. Six modules, douze FAQ, schéma `PT7H`, URL canonique inchangée.
- `python3 scripts/verify-sector-build.py` : 28 pages vérifiées, aucun défaut ; 19 formations locales, huit pages secteurs, neuf liens de capture et 90 URL dans le sitemap.
- Navigateur : page dirigeant, catalogue, formation Bordeaux et Coaching IA Solo contrôlés à 320, 390, 768 et 1440 px ; aucun débordement horizontal ou texte dépassant son bloc.
- Ouverture des modules 5 et 6 et d’une réponse FAQ vérifiée ; lien vers `#programme` fonctionnel. Aucun message d’erreur du navigateur observé.
- Composants rendus côté serveur, accordéons natifs, images existantes optimisées ; aucune dépendance ni état client ajouté.
- `graphify update .` : réussi, 459 nœuds et 354 liens.
- `git diff --check` : réussi.

## Livraison

Prévisualisation locale sur `http://127.0.0.1:3000/services/formation-ia/coaching-dirigeant/`.
Aucun push ni déploiement effectué dans cette intervention. Les modifications des pages secteurs et les brouillons éditoriaux déjà présents ont été préservés.

## Préparation de la publication autorisée

Le 30 octobre, la mise à jour de la formation a été intégrée à `origin/main` (`04bf921`) dans une copie de travail isolée. Les dernières modifications de design, de police et de connecteurs restent présentes. Le footer conserve les liens Connecteurs, CGV et Tous les secteurs. Les modifications locales des secteurs et les brouillons éditoriaux sont exclus de cette publication.

Nouvelle compilation complète et contrôle TypeScript réussis après intégration. Contrôle des 43 pages de formation et de ville réussi : six modules, douze FAQ, Course PT7H et canonique conservée. Affichage vérifié dans le navigateur avec la nouvelle police Geist, sans débordement. Graphe actualisé : 472 nœuds, 365 liens.
