# Refonte éditoriale des pages secteurs — proposition du 10 novembre 2026

> État actuel : construction réalisée en aperçu, puis seconde passe de simplification à la demande du propriétaire. Voir [le bilan de clarté](quality/clarte-secteurs-metiers-2026-11.md) pour la structure finale, les choix de liens et les contrôles. Ce document conserve le cadrage initial ; la production n’a pas été modifiée.

## Demande et décisions

Construire chaque page comme une page de vente spécialisée, dans l’architecture et la direction artistique actuelles. Montrer la compréhension des métiers, les situations de travail concrètes et la contribution réelle d’Althoce. Éviter les textes interchangeables, les catalogues d’agents standard et les promesses non démontrées.

Le propriétaire demande de recentrer Commerce & distribution sur le commerce, le développement commercial et la prospection, avec un cas d’usage consacré aux appels d’offres publics et privés. Il souhaite aussi des pages Comptabilité et Médical. Pour Médical, il a choisi deux parcours distincts : cabinets/maisons/centres de santé et cliniques/établissements de santé.

Cette proposition n’est pas une autorisation de publier de nouveaux contenus. Aucune page du site n’est modifiée à cette étape.

## Diagnostic de l’existant publié

- Sept pages secteurs : Finance et six pages issues d’une trame commune.
- Le bloc sur les agents sur mesure est identique. Les titres, la formation et le suivi sont souvent interchangeables.
- Chaque page générique montre surtout trois à quatre publics et un seul parcours très court. Les documents utilisés, exceptions, livrables et étapes concrètes sont insuffisamment expliqués.
- Finance mélange cabinets comptables, directions financières, contrôle de gestion et patrimoine. Leur préparation documentaire ne suffit pas à constituer une proposition commerciale commune.
- Les cas clients et guides existants offrent une matière plus précise, encore peu exploitée dans les pages.

Sources internes consultées : code publié dans la PR 12, catalogue et positionnement consignés dans `docs/positionnement-2026-10.md`, pages services, bibliothèque des neuf guides et cas clients existants. Les brouillons locaux de secteurs ne sont pas assimilés à la version publiée.

## Architecture proposée : neuf pages secteurs et les pages métiers existantes

Organisation retenue pour préparer le chantier : deux ensembles dans le hub Secteurs, « Cabinets, professions et santé » et « Entreprises et organisations ». Les neuf pages cibles sont Expertise comptable, Droit, Santé & médical, Assurance/courtage/patrimoine (à qualifier), Immobilier, Industrie, Commerce & négoce, Agences marketing & communication, Associations & fédérations. Finance / directions financières reste accessible par l’entrée métier, avec son URL historique conservée à ce stade.

| Page | Cible et proposition éditoriale | Situations à documenter |
| --- | --- | --- |
| Commerce | Entreprises B2B, négoce et équipes commerciales ; structurer le cycle de vente | Comptes cibles, préparation des rendez-vous, suites d’échange, complétude du CRM, devis sans réponse, relances, réactivation et préparation des réponses aux appels d’offres |
| Expertise comptable | Associés, responsables de mission et collaborateurs | Collecte des pièces, relances client, dossier incomplet, rapprochement documentaire, préparation de la revue, questions client et restitution |
| Assurance, courtage & patrimoine | Famille cible à qualifier avant publication ; ne pas présenter une expertise non documentée | Parcours et usages à documenter à partir des offres, compétences et références réelles |
| Médical | Deux parcours : cabinets et centres ; cliniques et établissements | Cabinets : demandes administratives, pièces avant rendez-vous, consignes pratiques validées, procédures du secrétariat. Établissements : documentation qualité, préparation des audits, coordination administrative, achats et formation des services |
| Droit | Avocats, notaires et directions juridiques, avec des exemples distincts | Chronologie et bordereau de pièces, comparaison de versions contractuelles, pièces manquantes, préparation de notes reliées aux sources |
| Immobilier | Transaction, gestion locative et syndic | Préparation d’un dossier de vente, suivi des demandes de visite, pièces manquantes, demandes de locataires, dossiers d’intervention et préparation des assemblées |
| Industrie | PME industrielles ; achats, qualité et fonctions support | Offres fournisseurs comparées à critères constants, références documentaires et versions, préparation des dossiers de non-conformité, transmission des actions |
| Associations | Associations, fédérations et fondations | Renouvellement des adhésions, pièces des demandes de subvention, bilans financeurs, consolidation des remontées et transmission entre bénévoles |
| Agences marketing & communication | Dirigeants d’agences et équipes de production ; les directions marketing internes relèvent de la page métier Marketing | Brief client incomplet, préparation des bilans multi-sources, déclinaisons sur messages validés, circuits de validation, comptes rendus et tâches projet |

Les situations de ce tableau sont des pistes à qualifier. Elles ne constituent pas une liste de fonctions déjà livrées ni une promesse de compatibilité avec des logiciels.

### Commerce et page métier Commercial

Le libellé de secteur devient « Commerce ». Son angle commercial est explicité dès l’introduction, pour ne pas laisser penser à une page principalement retail/logistique. Le développement commercial étant transversal, `/agent-ia/commercial/` reste une page d’exemples pour la fonction commerciale ; la page secteur présente un accompagnement complet d’entreprises de commerce et de négoce. Les deux pages se complètent sans recopier leurs textes.

Conserver d’abord `/secteurs/commerce-distribution/` évite une migration inutile. Si une URL `/secteurs/commerce/` est retenue, prévoir une redirection permanente, tous les liens internes, le canonical et le sitemap dans le même lot. Contrôler les requêtes et liens entrants disponibles avant cette décision.

### Comptabilité et Finance

Créer `/secteurs/comptabilite/` pour les cabinets. Conserver `/secteurs/finance/` et la recentrer sur les directions financières. La page Finance garde un renvoi explicite vers la nouvelle page comptable. Affecter à chaque page ses intentions de recherche, titres, FAQ et guides. Ne pas retirer aveuglément un contenu comptable apportant déjà des visites à Finance : utiliser les données Search Console accessibles pour organiser le transfert.

Présenter la page Finance dans le parcours par métier. Son rôle est l’accompagnement global d’une direction financière ; `/agent-ia/finance/` approfondit les scénarios d’agents. Examiner leur différenciation pendant le chantier : si deux propositions distinctes ne sont pas justifiables, proposer une consolidation avec redirection après analyse SEO, sans changer les URL automatiquement.

Réaffectation proposée des ressources : trois guides cabinet sur Comptabilité (cas d’usage, Pennylane, sept chantiers), deux guides DAF sur Finance (agents et skills). Les liens de capture restent identiques et ouvrent un nouvel onglet. Les filtres de Nos guides et les associations aux pages métiers sont actualisés en même temps.

### Médical : deux parcours validés par le propriétaire

Créer `/secteurs/medical/`, avec deux cartes d’entrée et des ancres vers des contenus distincts, présents dans le HTML et accessibles sur mobile. Pas de duplication de l’intégralité des sections ni de deux nouvelles pages automatiquement.

Le premier parcours s’adresse aux professionnels libéraux, responsables de cabinets et secrétariats ; le second aux directions, responsables qualité, fonctions support et DSI d’établissements. Les exemples administratifs sont séparés des usages cliniques. Toute proposition utilisant des dossiers patients nécessite de qualifier les données, droits, hébergement, finalités et responsabilités avec les interlocuteurs compétents. Un hébergement en France ne justifie pas à lui seul une promesse de conformité santé. Ne pas publier de promesse de diagnostic, de tri d’urgence, de traitement ou de certification non démontrée.

## Méthode de préparation de chaque page

1. **Fiche métier.** Décideur, collaborateurs concernés, cycle de travail, documents, outils, interlocuteurs, pics d’activité, irritants et exceptions. Croiser les ressources Althoce, les guides réellement lus, les cas clients et les sources professionnelles.
2. **Qualification des usages.** Retenir trois à quatre usages différenciants. Pour chacun : déclencheur, données autorisées, préparation réalisée par la solution, validation humaine, exceptions, livrable et indicateur à suivre. Préciser ce qui relève d’une formation, d’une automatisation classique ou d’un agent IA.
3. **Qualification des preuves.** Identifier ce qui est déjà livré et documenté, ce qui est proposable sous réserve de faisabilité et ce qui reste exploratoire. Seuls les faits validés deviennent des affirmations de la page ; un scénario non déployé est nommé « exemple ».
4. **Argumentaire.** Une promesse centrale et un premier besoin concret. Montrer ce qu’Althoce prend en charge : cadrage, connexions possibles, construction sur mesure, essais, formation, documentation et suivi convenu. Formation et intégration restent des prestations distinctes ; aucun audit préalable obligatoire à une formation.
5. **Maquette éditoriale puis visuelle.** Réutiliser les composants du site, varier les scènes de bureau et les représentations du travail. Relire le texte avant de produire les images.
6. **Contrôle puis aperçu.** Cohérence métier et commerciale, véracité des preuves, liens, SEO, accessibilité, responsive et fonctionnalités. Validation de la proposition avant publication.

### Intégration avec les pages métiers et services

Le site contient déjà neuf pages métiers sous `/agent-ia/` : commercial, marketing, finance, opérations, juridique, achats, RH, service client et téléphonique. « Pages métiers » et « Agents IA par métier » désignent cette même famille ; ne pas en créer une seconde à côté.

- **Secteur :** le type d’organisation, son dirigeant, ses contraintes, ses processus et l’accompagnement global. La page doit pouvoir convertir sans imposer un détour par une page métier.
- **Métier :** la fonction et ses usages transversaux, avec des scénarios précis d’agents et d’automatisations sur mesure. Les exemples restent des pistes adaptables, pas des produits vendus à la carte.
- **Service :** le contenu de la prestation (diagnostic, formation, intégration, pilotage). La Centrale est présentée lorsqu’une plateforme commune répond au besoin.

Relations à privilégier :

| Secteur | Pages métiers pertinentes |
| --- | --- |
| Expertise comptable | Finance, opérations, service client |
| Droit | Juridique, opérations, téléphonique |
| Santé & médical | Opérations, téléphonique ; contextualiser les données et usages, sans transférer des promesses commerciales génériques au médical |
| Immobilier | Commercial, service client, opérations |
| Industrie | Achats, opérations, commercial, notamment les appels d’offres |
| Commerce & négoce | Commercial, service client, opérations |
| Agences marketing & communication | Marketing, commercial, opérations |
| Associations & fédérations | Opérations, marketing, finance |
| Assurance, courtage & patrimoine | Relations à définir avec les usages réellement qualifiés |

Afficher seulement les deux ou trois liens les plus utiles dans chaque contexte, puis ajouter des renvois sectoriels pertinents depuis les pages métiers. Réutiliser les composants visuels, mais différencier promesses, exemples, FAQ, titres et métadonnées. Droit/Juridique, Commerce/Commercial, Agences/Marketing et Finance/Agent finance font l’objet d’une revue explicite des chevauchements.

### Exemple du niveau de précision attendu pour Commerce

Situation : un rendez-vous a eu lieu, mais les notes, la proposition et la prochaine action sont réparties entre plusieurs outils.

Parcours proposé : notes autorisées et fiche du compte → compte rendu structuré, points à confirmer et prochaine action suggérée → validation du commercial → mise à jour et relance selon les règles convenues. Traiter explicitement les montants manquants, engagements non confirmés et interlocuteurs à vérifier.

Ce qu’Althoce peut cadrer : champs du CRM, règles de relance, droits, préparation des messages, essais et formation. Indicateurs possibles à mesurer avec le client : temps consacré à la ressaisie, opportunités sans prochaine action et délais de suivi. Aucun objectif chiffré inventé.

### Appels d’offres : ajout demandé pour Commerce

Le scénario couvre la préparation des réponses aux consultations publiques et privées. Pour les marchés publics, tenir compte des documents et des règles propres à la consultation ; ne pas présenter toutes les consultations comme une procédure juridique identique.

- **Repérer et qualifier** les consultations à partir de sources autorisées, selon l’activité, les capacités et les critères définis avec l’entreprise. Le responsable décide de répondre ou non.
- **Analyser les documents** : cahier des charges, règlement de consultation lorsqu’il existe, lots, échéances, critères et pondérations, pièces demandées, contraintes et questions à clarifier. Conserver les renvois aux passages sources.
- **Préparer une matrice de réponse** : exigence, réponse envisagée, preuve disponible, responsable et élément manquant.
- **Rassembler les références autorisées** : présentations, moyens réels, expériences et réponses précédentes à jour, sans inventer de capacité ou de certification.
- **Préparer une réponse adaptée** et, lorsque demandé, un mémoire technique. Signaler les incohérences, zones incomplètes et engagements à confirmer.
- **Organiser la revue** par les responsables commerciaux, techniques et financiers. Le prix, les engagements et le dépôt sont validés par les personnes habilitées.

Livrables à envisager : synthèse de consultation sourcée, grille de réponse, liste des pièces manquantes et brouillon à relire. La faisabilité, les connexions et le niveau d’automatisation sont à cadrer. Ne promettre ni attribution du marché ni conformité automatique. Le suivi des consultations et des échéances peut faire l’objet d’un périmètre distinct.

Indicateurs de suivi possibles : temps de préparation, demandes internes de pièces, couverture des exigences et dossiers remis dans les délais. Le taux de succès dépend aussi du prix, de l’offre et de la concurrence ; ne pas attribuer une amélioration à l’IA sans mesure.

Source de cadrage : [Service Public — examiner les documents de consultation](https://entreprendre.service-public.gouv.fr/vosdroits/F32130) et [préparer le dossier offre](https://entreprendre.service-public.gouv.fr/vosdroits/F32154). Ces sources décrivent le processus métier, pas les capacités déjà livrées par Althoce.

## Pertinence des secteurs et couverture du marché — recommandation à arbitrer

La sélection est une bonne base, mais la présentation uniforme de neuf pages risquerait de diluer le positionnement. La priorité commerciale et la place dans le hub doivent refléter à la fois la cohérence avec les exigences des clients et les preuves réelles d’Althoce.

| Place recommandée | Pages | Motif |
| --- | --- | --- |
| Premier niveau du positionnement | Expertise comptable, Droit, Médical | Responsabilités professionnelles, confidentialité, dossiers et validation humaine au cœur de la proposition. Le potentiel médical ne constitue pas une référence déjà acquise. |
| Prolongements prioritaires | Finance / directions financières, Immobilier | Préparation et contrôle de dossiers, données sensibles, coordination entre outils. Distinguer les professions réglementées des fonctions exercées dans toute entreprise. |
| Couverture complémentaire | Commerce, Industrie, Associations, Marketing & communication | Conserver les pages, en choisissant des besoins précis et les preuves existantes ; ne pas les présenter comme neuf spécialisations équivalentes. |

Le terme Commerce reste celui demandé par le propriétaire. Développement commercial, prospection et appels d’offres sont cependant des fonctions transversales. Les exemples pourront être reliés aux autres secteurs, sans les recopier. Finance centrée sur les DAF est également une entrée fonctionnelle. Pour Marketing, préciser si la page vise des agences (secteur) ou une équipe interne (fonction) et utiliser les pages métiers pour le second cas.

La principale extension à étudier ensuite est **Assurance, courtage et gestion de patrimoine** : proposition cohérente avec le positionnement, à qualifier par les offres, compétences et références avant création d’une page. Les entreprises de services B2B et bureaux d’études sont une autre cible possible pour les appels d’offres ; leur intérêt ne justifie pas encore une nouvelle page dédiée. Ne pas créer ces pages sans décision complémentaire.

Les données du [Baromètre France Num 2026](https://www.francenum.gouv.fr/guides-et-conseils/strategie-numerique/comprendre-le-numerique/barometre-france-num-2026-le) indiquent une utilisation de l’IA par 60 % des TPE-PME des services spécialisés/techniques et 46 % des activités financières. Elles soutiennent l’intérêt d’examiner ces publics mais ne mesurent ni la demande pour Althoce ni les budgets disponibles pour une intégration sur mesure.

La liste couvre déjà plusieurs ensembles de besoins : dossiers et conseil, relation commerciale, opérations et documentation, coordination associative. Elle ne couvre pas tout le marché, et aucune part de marché couverte ne peut être déduite du nombre de pages. Pour prioriser l’acquisition, croiser demandes et clients réels, accès aux décideurs, répétition des problèmes, budget, facilité d’intégration et capacité de suivi.

La création des pages pilotes Commerce et Comptabilité peut rester la première étape pratique. L’ordre de construction ne signifie pas que Commerce doit devenir le premier marqueur de la spécialisation du cabinet.

## Trame de vente, volontairement compacte

1. Promesse métier, cible précise, sur mesure et rendez-vous.
2. Trois situations reconnues par le lecteur, associées à l’apport d’Althoce.
3. Un parcours de travail visuel approfondi, complété par deux ou trois usages courts.
4. Offre adaptée au secteur : former, connecter et construire, encadrer les usages, transmettre. La Centrale apparaît lorsque l’environnement et les besoins le justifient.
5. Preuve sectorielle réelle si disponible, puis ressources ciblées. En l’absence de référence, expliquer un scénario sans le faire passer pour une réalisation.
6. Objections et FAQ spécifiques, puis rendez-vous avec un libellé adapté au secteur.

Le parcours principal reste court. Les précisions techniques utiles sont accessibles à la demande. Les contraintes sont intégrées aux exemples et à la FAQ, sans répétition de grands blocs génériques sur toutes les pages. Pas de section vide pour les secteurs sans guide.

## Ordre du chantier et livrables

| Lot | Travail | Livrable / condition pour poursuivre |
| --- | --- | --- |
| 1 — Cadrage | Cartographie des neuf pages, inventaire des preuves, ressources et intentions SEO | Matrice secteur → besoin → offre → preuve ; limites des affirmations identifiées |
| 2 — Pages pilotes | Commerce puis Expertise comptable ; adaptation Finance liée à la nouvelle page | Deux pages complètes en aperçu, niveau de précision et style validés ; séparation Finance/Comptabilité cohérente |
| 3 — Professions sensibles | Droit puis Médical avec ses deux parcours | Relecture des contraintes et de la faisabilité ; contenus et FAQ spécifiques |
| 4 — Autres secteurs | Immobilier, Industrie, Associations, Marketing & communication | Chaque page suit la même exigence de profondeur, avec ses propres scènes et arguments |
| 5 — Ensemble du site | Hub Secteurs, navigation et footer, pages métiers, guides, La Centrale, sitemap et éventuelles redirections | Parcours cohérent, liens et métadonnées vérifiés, contrôle sur mobile et ordinateur |

Travail par lots sur une nouvelle branche dédiée à partir de la production actuelle. Les anciens brouillons locaux ne sont pas écrasés ou publiés automatiquement. Ces lots sont un ordre de travail, pas une nouvelle programmation automatique.

## Critères de livraison

- Un lecteur identifie son métier, une situation de travail et ce qu’Althoce prend en charge dès le haut de page.
- Chacun des trois à quatre usages repose sur une fiche qualifiée ; les exemples décrivent entrées, travail préparé, contrôle humain et exceptions.
- Aucun paragraphe central n’est transposable tel quel à tous les secteurs.
- Aucune référence client, capacité, mesure de résultat, certification ou connexion inventée.
- Une intention de recherche principale par page ; H1, métadonnées, canonical, FAQ visible et données structurées cohérents.
- Liens des ressources conservés ; FAQ accessible ; absence de débordement mobile ; illustrations optimisées.
- Les positions SEO ne sont pas garanties. Comparer après publication les données de visites, recherches et demandes de contact lorsqu’elles sont disponibles.

## Sources professionnelles déjà repérées

- Ordre des experts-comptables, [Travaux Data et IA](https://www.experts-comptables.fr/travaux-data-et-ia) : ressources métier et précautions d’usage à examiner pour la page Comptabilité.
- CNIL, [Prospection commerciale](https://www.cnil.fr/fr/la-prospection-commerciale-par-courrier-electronique-sms-mms-et-automate-dappel) : distinguer les canaux et publics lors du cadrage des scénarios commerciaux.
- CNIL, [IA et santé : développer et évaluer des systèmes](https://www.cnil.fr/fr/ia-et-sante-developper-et-evaluer-des-systemes-ia-conformes) : protection particulière des données et nécessité d’un cadrage adapté. Cette fiche ne couvre pas à elle seule toutes les obligations du déploiement.

Ces sources aident à documenter les métiers et contraintes. Elles ne prouvent pas qu’Althoce a livré les usages proposés. La recherche approfondie et la lecture des guides restent à réaliser page par page.

## Mise en œuvre élargie : secteurs ET métiers

Le propriétaire a ensuite demandé la même refonte en profondeur des neuf pages métiers, avec réorganisation de la nomenclature et réduction des répétitions. Le lot construit sur `codex/secteurs-metiers-20261110` couvre les deux familles et leur intégration. L’état livré, les arbitrages et les contrôles sont consignés dans `docs/quality/secteurs-metiers-2026-11.md`. L’autorisation de construction remplace la mention initiale « aucune page modifiée » ; la production reste en attente d’une validation de l’aperçu.
