# Secteurs et métiers : refonte du 10 novembre 2026

## Périmètre et intention

Prévisualisation sur la branche `codex/secteurs-metiers-20261110`, créée depuis la production `89444a1`. Le dossier principal, qui contient d’autres travaux non publiés, reste intact. Aucune mise en production n’est autorisée pour ce nouveau lot.

Le secteur décrit une organisation, ses interlocuteurs, ses documents et ses exigences. Le métier décrit un processus transversal : entrées, résultat préparé, contrôle et exception. Les services expliquent le cadre de la mission. Les liens entre ces familles sont sélectionnés selon le contexte.

## Nomenclature

| Entrée | Destination | Rôle |
| --- | --- | --- |
| Expertise comptable | `/secteurs/comptabilite/` | Nouvelle page : production et dossiers multi-clients |
| Droit & professions juridiques | `/secteurs/droit/` | Cabinets d’avocats et études notariales |
| Santé & médical | `/secteurs/medical/` | Nouvelle page, parcours cabinets/centres et établissements |
| Assurance, courtage & patrimoine | `/secteurs/assurance-patrimoine/` | Nouvelle proposition, usages administratifs uniquement |
| Immobilier | `/secteurs/immobilier/` | Transaction, gestion locative, syndic |
| Commerce | `/secteurs/commerce-distribution/` | URL conservée, vente B2B, négoce et consultations |
| Industrie | `/secteurs/industrie/` | Achats, qualité documentaire et fonctions support |
| Agences marketing & communication | `/secteurs/marketing-communication/` | Organisation multi-clients et production |
| Associations & fédérations | `/secteurs/associations/` | Adhésions, financement, transmission |
| Direction financière | `/secteurs/finance/` | URL historique conservée, accompagnement DAF et reporting |
| Usages IA par métier | `/agent-ia/` | Hub des neuf processus existants, sans nouvelle famille parallèle |

Les neuf URL métier sont conservées. Leurs intitulés deviennent : Commercial & prospection, Marketing & communication, Finance & comptabilité interne, Opérations & administration des ventes, Juridique & contrats, Achats & fournisseurs, Ressources humaines, Service client & support, Accueil téléphonique.

## Changements

- Neuf pages secteurs individualisées : trois nouvelles et six réécrites. Finance devient une page de direction financière distincte des tâches opérationnelles et de l’expertise comptable.
- Neuf pages métiers avec un dossier illustratif, trois scénarios détaillés, des FAQ et une formation contextualisée.
- Les anciens blocs génériques `TailoredAgents` et listes répétées de services sont retirés de ces parcours.
- Deux points d’entrée dans le menu « Votre activité ». Les quatre services principaux restent inchangés.
- Hub secteurs en deux ensembles ; liens réciproques secteurs/métiers, footer actualisé.
- Bibliothèque de guides : comptabilité et direction financière séparées. Aucun nouveau guide inventé. Destinations de capture inchangées, nouvel onglet conservé.
- Modèles communs pour les scénarios accessibles et les liens, contenu propre à chaque page.
- Métadonnées, visuels sociaux, canonical et FAQ structurées alignés sur les nouvelles pages. Les nouvelles routes sont découvertes par le sitemap existant.
- Photo Santé générée avec imagegen, scène de coordination administrative fictive ; WebP 1400 × 933, 109 340 octets. Les autres photos existantes sont réutilisées selon leur contexte, sans être présentées comme des clients réels.

## Arbitrages et textes à valider avant production

- La page Assurance, courtage & patrimoine était une cible proposée à qualifier. Elle est construite en aperçu pour rendre la proposition concrète. Althoce doit confirmer ce segment et le périmètre avant publication. Aucun projet, expertise attestée, résultat, certification ou conseil réglementé n’y est revendiqué.
- Tous les scénarios sont des exemples à cadrer, pas des fonctionnalités déjà livrées. Les entrées, livrables et contrôles proposés sont des choix éditoriaux à valider par Althoce.
- Santé : organisation administrative et documentaire uniquement. Aucune offre de diagnostic, triage, traitement ou gestion autonome d’urgence. L’applicabilité du cadre HDS est à étudier, aucun statut de conformité n’est promis.
- Commerce et Industrie : préparation des consultations publiques et privées, sans garantie d’éligibilité, d’attribution ou de dépôt automatique.
- RH : préparation administrative, pas de classement autonome ou de profilage des candidats.
- La page Finance conserve son URL sectorielle historique. Aucune redirection, suppression ou fusion automatique n’est introduite.
- Aucun chiffre de résultat, prix, délai de mission ou nouveau témoignage ajouté.

## Fond documentaire

Catalogue interne : `docs/positionnement-2026-10.md`. Guides et cas existants du dépôt. Repères professionnels consultés le 10 novembre 2026, pour cadrer les exemples, pas pour revendiquer une capacité d’Althoce :

- [CNB, déontologie et IA](https://cnb.avocat.fr/actualite/le-cnb-adopte-un-guide-sur-la-deontologie-et-l-intelligence-artificielle) : secret professionnel et vérification.
- [CNIL, guide du recrutement](https://www.cnil.fr/fr/le-guide-du-recrutement) : finalité, minimisation, habilitations et précautions sur les personnes.
- [ANS, hébergement des données de santé](https://esante.gouv.fr/labels-certifications/hebergement-des-donnees-de-sante) : champ du cadre HDS ; résultat de recherche consulté, accès direct HTTP refusé. Le texte public ne revendique aucune certification ni conformité.
- [Service Public, préparation du dossier offre](https://entreprendre.service-public.gouv.fr/vosdroits/F32154) : exigences, offre technique, pièces et capacités réelles.
- [Associations.gouv, compte rendu financier](https://associations.gouv.fr/saisir-les-comptes-rendus-financiers) : préparation des pièces et bilans.
- [Ordre des experts-comptables, Data et IA](https://www.experts-comptables.fr/travaux-data-et-ia) : ressources professionnelles repérées pendant le cadrage.
- [CNIL, prospection](https://www.cnil.fr/fr/la-prospection-commerciale-par-courrier-electronique-sms-mms-et-automate-dappel) : règles à examiner selon le canal et le public.

## Vérifications

Les vérifications locales sont détaillées ci-dessous. Elles préservent les fondations SEO techniques ; elles ne garantissent pas un maintien de position après une réécriture éditoriale.

### Résultats locaux

- `npm run build` : réussi (Next.js 15.5.25).
- `npm run typecheck` : réussi.
- `python3 scripts/check-expertise.py` : 27 pages, 2 678 liens internes et 120 réponses FAQ vérifiés. Inclut l’accueil et quatre pages de formation locale comme contrôles des changements partagés. Les réponses sont comparées au contenu HTML hors scripts, pas au JSON-LD lui-même.
- `npm run test:security` : réussi, sans appels externes.
- Parcours navigateur : menu mobile « Votre activité », passage vers le hub métiers, ouverture des scénarios au clavier, deux parcours Santé et FAQ, filtres des guides (3 comptabilité / 2 finance).
- Géométrie : modèles secteurs et métiers contrôlés à 320, 768, 1 051 et 1 440 px ; finance, comptabilité et bibliothèques à 375 et 1 024 px ; autres pages détaillées à 375 px. Aucun débordement de page ou de texte détecté sur ces vues.
- Le bandeau des usages conserve son défilement et sa pause ; ses intitulés décrivent maintenant des tâches, avec des destinations métiers réelles. Les anciennes entrées trompeuses (tri de CV, conformité automatique, architecture système, BTP vers achats) sont retirées de ce bandeau.
- Les exercices de formation locale liés aux fonctions support ou au marketing renvoient au métier approprié, au lieu d’un secteur devenu trop spécialisé.
- Une photo distincte est utilisée pour chaque page métier, à partir des visuels existants du site.
- `graphify update .` : effectué après les modifications ; sortie locale ignorée par Git comme prévu dans le dépôt.
