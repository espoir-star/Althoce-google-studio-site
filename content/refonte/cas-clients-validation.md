# Cas clients — validation éditoriale à compléter

Statut au 13 septembre 2026 : l’utilisateur a confirmé explicitement « Oui, les chiffres sont validés » pour les neuf études. Les indicateurs sélectionnés sont désormais affichés dans les cartes et la section résultats de chaque étude. Cette confirmation remplace le statut de réserve précédent pour les chiffres ; elle ne valide pas les citations ni les affirmations techniques générales.

Sources : les neuf fichiers `content/cas-clients-*.md`. Leurs notes demandent encore de confirmer chiffres, citations et outils. Les descriptions de contexte sont reprises de ces dossiers anonymisés ; elles ne constituent pas une vérification indépendante.

Les gabarits affichent les KPI validés via `caseDetails` dans `lib/cases-content.ts`, source commune des cartes et résultats. Les témoignages restent non rendus. Les anciens champs `metric` et `metricLabel` ne sont pas utilisés par le gabarit. Les descriptions SEO et JSON-LD ont également été reformulées. Les anciennes pages Client, inutilisées, contiennent encore les anciennes affirmations : ne pas les réimporter.

| Dossier | Indicateurs des briefs, chiffres confirmés par l’utilisateur |
|---|---|
| Cabinet comptable Lyon | Capacité ×2 en quatre mois, effectifs, nombre de clients, données de départ, périmètre Sage et banques |
| Négoce de vins | +200 % de RDV qualifiés, période, définition de la qualification, périmètre langues et outils |
| SaaS support | 70 % de tickets N1, méthode de mesure, satisfaction, économies et périmètre d’autonomie |
| Cabinet d’avocats | 12 h par semaine, appels et rendez-vous, transferts, confidentialité et outils utilisés |
| Recrutement | Volume ×3,5, critères, biais, décisions humaines et revue du traitement des candidatures |
| Marketing SaaS | Production ×4, qualité, trafic et attribution, volumes et validation avant diffusion |
| Distributeur B2B | Volume ×3, période, erreurs, effectifs et outils ADV |
| ETI agroalimentaire | Quatre jours par mois, temps de revue, exactitude et contrôle du juriste |
| ETI industrielle | 1,2 M€ annuels, base de comparaison, attribution aux achats/outil/marché |

Pour tous : confirmer la réalité du projet et du périmètre décrit, les effectifs, les périodes, les références des mesures et toute citation avant de la réutiliser. Conserver l’anonymisation sauf décision contraire du client concerné.

Les scènes de bureau sont générées et ne sont pas des portraits des clients cités. Aucun témoignage n’est attribué aux personnes représentées. Pas de publication effectuée pendant ce lot.

## Sélection et présentation
Deux indicateurs par carte. Trois comparaisons avant/après dans chaque fiche, avec la période issue du tableau de résultats du brief spécifique (pas du template générique). Pas d’agrégation artificielle. Pour le cabinet comptable, ×2 désigne le volume documentaire et non un effectif inchangé : le brief mentionne un recrutement junior. Les économies achats sont rapportées à une base de 30 M€ et au travail des acheteurs. Aucun témoignage réintroduit.
