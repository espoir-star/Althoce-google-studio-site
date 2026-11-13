# Clarté des secteurs et métiers — 10 novembre 2026

## Demande et résultat

Le propriétaire trouve les pages trop générales, trop répétitives et trop orientées vers d’autres pages. Il demande une relecture détaillée et l’ajout du rapprochement et du lettrage dans les usages de l’expertise comptable.

Cette seconde passe reprend 21 pages : neuf secteurs, Direction financière, neuf métiers et leurs deux pages d’entrée. Elle reste sur la branche d’aperçu `codex/secteurs-metiers-20261110`, PR 13. Aucun déploiement de production ni modification du dossier de travail principal.

## Principes appliqués

- Chaque introduction dit ce qu’Althoce apporte à ce lecteur, avec des tâches et documents reconnaissables.
- Les explications sur l’organisation du site, les dossiers fictifs redondants et les listes répétées de services sont retirés.
- Les exemples sont lisibles directement : un travail préparé par l’agent et une validation humaine courte. Aucun accordéon à ouvrir pour comprendre l’offre.
- Les cas présentés sont des exemples à adapter. Ils ne deviennent ni des références clients ni des fonctionnalités garanties pour tous les outils.
- Sur les secteurs, le sur mesure et la formation précèdent les cas d’usage ; les guides pertinents suivent les exemples. Pas de section vide lorsqu’aucun guide n’existe.
- Sur les métiers, les exemples sont suivis des ressources utiles, de l’intégration et de la prise en main, puis des questions de décision et du rendez-vous.
- Le parcours principal conserve le rendez-vous. Les renvois secondaires sont limités à deux liens choisis, après l’appel final. Les liens de formation et de ressources restent à leur place lorsqu’ils apportent un complément utile.
- Le bandeau de tous les usages est retiré des pages métiers. La navigation globale, le footer et les deux hubs continuent de donner accès aux autres pages.
- Deux photos existantes sont conservées sur les pages détaillées. Grilles, cartes, typographie et espacements sont partagés pour une lecture cohérente.

## Relecture page par page

| Page | Angle retenu |
| --- | --- |
| Expertise comptable | Production du cabinet : collecte, rapprochement bancaire, lettrage, révision, préparation du bilan. Compléter les fonctions du logiciel existant. |
| Droit | Pièces et chronologie, collecte notariale, comparaison des contrats, préparation des échanges. |
| Santé & médical | Deux groupes conservés : secrétariat des cabinets/centres et coordination documentaire des établissements. Usages administratifs. |
| Assurance, courtage & patrimoine | Dossier de souscription, préparation du rendez-vous et renouvellements. Segment toujours à confirmer avant production. |
| Immobilier | Transaction, gestion locative et copropriété, avec les pièces et demandes propres à chaque activité. |
| Commerce | Prospection B2B, devis, réponses aux appels d’offres et transmission des commandes. |
| Industrie | Offres fournisseurs, non-conformités, versions des procédures et réponses techniques. |
| Agences marketing & communication | Briefs, retours clients, reporting et déclinaisons éditoriales dans une organisation multi-clients. |
| Associations & fédérations | Adhésions, subventions, bilans et transmission aux bénévoles. |
| Direction financière | Préparation du reporting, écarts budgétaires et trésorerie. Aucun renvoi vers les cabinets comptables dans le corps de page. |
| Commercial & prospection | Préparer la prospection, mettre le CRM à jour, préparer une réponse à une consultation. |
| Marketing & communication | Préparer des contenus, analyser des campagnes et prioriser les améliorations SEO. |
| Finance & comptabilité interne | Préparer les factures, rapprocher commande/réception/facture, suivre les règlements. Complément ciblé vers Direction financière. |
| Opérations & administration des ventes | Transformer les demandes en dossiers exploitables, rechercher les pièces et traiter les exceptions. |
| Juridique & contrats | Comparer les versions, préparer les validations et suivre les échéances. |
| Achats & fournisseurs | Préparer une consultation, comparer les offres et constituer la revue fournisseur. |
| Ressources humaines | Questions internes, intégration et préparation des entretiens, sans classement automatique des candidats. |
| Service client & support | Orienter les demandes, préparer une réponse sourcée, transmettre un dossier complet. |
| Accueil téléphonique | Préparer un rappel, organiser un rendez-vous et orienter les demandes. |
| Secteurs | Accès direct à neuf activités, avec une courte ligne de tâches par carte. |
| Usages IA par métier | Accès direct à neuf fonctions, accompagnement succinct et FAQ utile au choix du projet. |

## Rapprochement et lettrage

Deux exemples distincts sont visibles sur la page Comptabilité :

- **Rapprochement bancaire** : comparaison du relevé bancaire et du compte de banque, correspondances proposées, opérations non pointées et écarts présentés au collaborateur.
- **Lettrage** : associations proposées entre factures, avoirs et règlements des comptes clients/fournisseurs, avec paiements partiels, groupés et cas ambigus à vérifier.

La FAQ explique l’intérêt d’un complément lorsque le logiciel fait déjà ces opérations. Elle ne promet pas de remplacer des fonctions existantes ni une connexion à un logiciel nommé.

Repères terminologiques consultés chez l’éditeur Pennylane : [Effectuer un rapprochement bancaire](https://help.pennylane.com/fr/articles/18749-effectuer-un-rapprochement-bancaire) et [Lettrer des écritures](https://help.pennylane.com/fr/articles/18751-lettrer-des-ecritures). Ces sources cadrent la rédaction ; elles ne constituent pas une preuve de réalisation par Althoce ou une promesse de compatibilité.

## Mesures et contrôles locaux

- Construction de production Next.js : réussie. Vérification TypeScript : réussie.
- Audit du HTML construit : **27 pages, 2 238 liens internes, 117 réponses FAQ, PASS**. Les pages contrôlées comprennent aussi l’accueil, les guides et quatre formations locales pour les composants partagés.
- Un H1, métadonnées distinctes, URL canonique, images sociales, présence dans le sitemap et correspondance FAQ visible/JSON-LD contrôlés. Les destinations des liens et ancres sont vérifiées.
- Les URL existantes sont conservées. Aucune suppression, redirection ou fusion supplémentaire.
- Navigateur : les 21 pages à 375 px, puis six vues représentatives à 320, 768, 1 024 et 1 440 px. Aucun débordement de page ou de bloc de texte détecté dans ces 45 contrôles.
- Relecture visuelle des cartes Comptabilité sur ordinateur et Commercial sur mobile. FAQ Comptabilité ouverte avec Entrée ; réponse visible. Aucune erreur de console observée sur cet onglet de contrôle.
- Le corps des 19 pages détaillées passe d’environ 17 500 à 9 900 mots (FAQ comprises, hors navigation globale et footer). Les 573 occurrences de liens passent à 142 ; ce comptage incluait les doublons du bandeau animé retiré, ce ne sont pas 573 destinations distinctes.
- `git diff --check` : aucun problème d’espacement.
- `graphify update .` : effectué après les changements, extraction AST seule ; graphe local actualisé (493 nœuds, 379 liens).

Ces contrôles valident le rendu et les fondations SEO techniques. Ils ne garantissent pas des positions dans les moteurs après réécriture.

## Avant production

La page Assurance, courtage & patrimoine reste une proposition à confirmer par Althoce. Les exemples de missions et de connexions restent à qualifier avec chaque client. Les limites du premier bilan restent applicables : pas de résultat chiffré inventé, de référence ajoutée ou de conformité revendiquée.

L’aperçu est à relire avant toute fusion. Cette passe n’autorise pas la production.
