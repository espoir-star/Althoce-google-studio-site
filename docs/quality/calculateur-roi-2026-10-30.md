# Calculateur ROI IA — 30 octobre 2026

## Périmètre

Refonte locale de `/calculateur-roi/`, sans publication. Les modifications préexistantes des pages secteurs sont conservées et ne font pas partie de cette intervention.

Le parcours passe de quatre étapes à trois : usages, temps consacré, estimation. Le résultat est accessible sans formulaire. La demande de contact reste facultative et utilise la route serveur existante, son consentement explicite et ses protections anti-spam.

## Modèle de calcul

- Entrée : heures hebdomadaires de toute l’équipe par tâche, sans multiplication par l’effectif.
- Temps libérable = heures × réduction nette × adoption.
- Valeur annuelle = temps libérable × semaines travaillées × coût horaire chargé.
- Coût de la première année = investissement initial + 12 × frais mensuels, uniquement si les deux montants sont renseignés.
- ROI = (valeur annuelle − coût annuel) / coût annuel. Aucun ratio avec un coût nul.
- Équilibre = investissement initial / (valeur annuelle / 12 − frais mensuels), uniquement si le dénominateur est positif.

Les hypothèses initiales (30 % de réduction, 70 % d’adoption, 35 €/h, 46 semaines) sont présentées comme des valeurs de simulation modifiables, pas comme des statistiques observées. Aucun prix Althoce ni nombre d’agents n’est prérempli. La valeur du temps est distinguée d’une économie de trésorerie ; la projection suppose un usage constant hors montée en charge. Les résultats négatifs restent affichés.

## Présentation et accessibilité

Identité bleue, typographie du site, photo de bureau existante et synthèse latérale. Les graphiques sont réalisés en CSS. Résultats détaillés par tâche, hypothèses consultables, impression et formulaire de contact dans un dialogue avec confinement du focus et retour au bouton d’origine.

La simulation est conservée dans l’onglet pendant 30 minutes avec validation du format. Aucune coordonnée du formulaire n’est stockée dans le navigateur. Les anciennes clés de coordonnées du calculateur sont supprimées lors du montage.

## Vérifications

- `npm run test:roi` : calculs, absence de multiplicateur d’effectif, budgets facultatifs, scénarios négatifs et nuls, données invalides, restauration de session, compatibilité du formulaire et erreurs réseau. Aucun appel extérieur.
- `npm run test:security` : suite existante réussie.
- `npm run typecheck` et compilation de production : réussis.
- HTML serveur : un H1, canonical conservée, six questions/réponses identiques entre FAQ visible et JSON-LD, WebApplication et fil d’Ariane conservés.
- Navigateur : parcours complet, champs obligatoires, usage personnalisé, retour aux étapes, restauration après actualisation, résultats positifs/négatifs/nuls et formulaire facultatif.
- Dialogue : Tab et Maj+Tab restent dans le formulaire ; Échap le ferme et restaure le focus.
- Affichage contrôlé à 320, 390, 768, 1024 et 1440 px, sans débordement horizontal. Vérification visuelle mobile et ordinateur.
- Taille JavaScript de la route : 32,6 kB avant, 13,5 kB après ; premier chargement annoncé par Next.js : 148 kB avant, 130 kB après. Ce sont les tailles de compilation, pas une mesure terrain des Core Web Vitals.
- Graphe mis à jour avec `graphify update .`.

## Limites de la validation

Aucune demande réelle envoyée au CRM. Le contrat et les réponses du formulaire sont testés avec des appels simulés, pas par une livraison externe. Les styles d’impression sont intégrés ; aucun PDF exporté n’a fait l’objet d’une validation visuelle. La version reste locale et n’a pas été déployée.

## Reprise du 13 novembre 2026

La refonte, restée locale depuis le 30 octobre, est reportée sur `main` à jour (`60feeed`, après les PR #12 et #13) dans la branche `feat/calculateur-roi-refonte`. Les pages secteurs ne sont pas touchées : la version publiée par la PR #13 est conservée.

- Menu « Votre activité » aligné sur les 13 secteurs publiés, mêmes intitulés et même ordre que `/secteurs/`, plus « Autre activité ». `npm run test:roi` compare désormais ce menu aux noms déclarés dans `lib/sectors-content.ts` et `lib/sector-additions.ts`, et vérifie qu’une simulation enregistrée avec un ancien intitulé est écartée.
- Revérifié sur cette base : `npm run test:roi`, `npm run test:security`, `npm run typecheck`, `npm run build` (116 pages), `git diff --check`.
- Navigateur : parcours complet, validation des champs obligatoires, résultats (16 h saisies : 3,4 h par semaine, 154,6 h et 5 410 € par an), budget facultatif avec ROI négatif (−53 %, équilibre au-delà de 36 mois), dialogue de contact ouvert puis fermé avec Échap et retour du focus, restauration après actualisation, aucune erreur dans la console. Sans débordement horizontal à 320, 390, 768 et 1440 px.
- HTML serveur : un H1, URL canonique inchangée, JSON-LD WebApplication, BreadcrumbList et FAQPage (6 questions).

Limites inchangées : aucune demande réelle envoyée au CRM, aucun PDF imprimé contrôlé visuellement.
