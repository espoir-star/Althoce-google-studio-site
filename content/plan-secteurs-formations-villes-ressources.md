# Plan — secteurs, formations locales et ressources Althoce

Date : 15 septembre 2026. Statut : lots réalisés et vérifiés en local. Sept secteurs, dix-neuf formations locales et bibliothèque de neuf guides. Aucun déploiement.

## Objectif et ligne éditoriale

Développer les entrées par secteur et par ville en conservant le positionnement cabinet IA pour PME : diagnostic, formations, agents et automatisations sur mesure, suivi. Les agents présentés restent des exemples d'usages. Garder les pages métiers actuelles et leurs URL : une fonction (finance, commercial…) traverse plusieurs secteurs (cabinet comptable, négoce…).

Inspiration consultée : https://www.mister-ia.com/expertises/ia-finance et https://www.mister-ia.com/formations-particuliers/bordeaux . Retenir l'articulation publics → usages → ressources → accompagnement, avec une sélection plus courte adaptée à Althoce. Ne reprendre ni textes, ni visuels, ni preuves commerciales du concurrent.

## 1. Périmètre proposé et ordre de réalisation

| Lot | Livrables | Critère de passage |
| --- | --- | --- |
| 1 — Fondations | Inventaire des 9 ressources, confirmation du domaine de capture, catalogue partagé des guides et correspondances secteurs/métiers | Liens publics vérifiés, aucun formulaire soumis pendant les contrôles |
| 2 — Pilote secteur | Hub /secteurs/ et /secteurs/finance/, deux photos distinctes et couvertures des guides présentés | Relecture narrative et contrôle visuel mobile/ordinateur |
| 3 — Premiers secteurs | /secteurs/droit/ et /secteurs/marketing-communication/ ; insertion contextuelle des guides dans les pages métiers finance, juridique, marketing | Contenu par public ; ressources regroupées par métier, sélection initiale courte et accès aux autres guides pertinents |
| 4 — Pilote local formation | /formation-ia-bordeaux/, /formation-ia-paris/, /formation-ia-lyon/ | Différenciation réelle avec les pages agence et formation nationales |
| 5 — Extension locale | Les 16 autres villes déjà couvertes par le site, par groupes de 4 | Chaque page dispose d'exemples, modalités et visuels pertinents ; pas de simple remplacement du nom de ville |
| 6 — Extension secteurs | Associations & fédérations, immobilier, commerce & distribution, industrie ; autres secteurs selon les priorités commerciales | Matière suffisante et cas pertinent ; section ressource absente si aucun guide adapté |
| 7 — Vérification | Maillage, sitemap, métadonnées, accessibilité, responsive, performances, liens de capture | Build et contrôles ciblés validés avant livraison |

Ces lots sont un ordre de travail, pas une nouvelle automatisation ni une promesse de durée. Les secteurs sont proposés à partir des ressources disponibles et des dossiers clients existants ; les priorités restent ajustables.

### Regroupement des secteurs — ajustement demandé par le propriétaire

Construire de grandes familles compréhensibles, avec plusieurs métiers présentés dans chaque page. Ne pas créer une page secteur distincte par profession au lancement. Ces familles sont des entrées éditoriales ; certaines accueillent aussi les fonctions internes correspondantes.

| Famille et URL proposée | Publics regroupés | Angle |
| --- | --- | --- |
| Finance — /secteurs/finance/ | Experts-comptables, directions financières, contrôle de gestion, gestion de patrimoine et investissement | Préparer les dossiers, analyser et piloter ; usages et contraintes propres à chaque public |
| Droit — /secteurs/droit/ | Cabinets d'avocats, études notariales, directions juridiques | Recherche, préparation documentaire et revue de contrats avec validation humaine |
| Marketing & communication — /secteurs/marketing-communication/ | Agences marketing, communication, équipes marketing internes | Campagnes, contenus, analyse et coordination |
| Immobilier — /secteurs/immobilier/ | Agences, administrateurs de biens, syndics, promoteurs | Relation client, dossiers et gestion documentaire |
| Commerce & distribution — /secteurs/commerce-distribution/ | Négoce, commerce de gros, e-commerce, réseaux de distribution | Demandes clients, vente, suivi et flux administratifs |
| Industrie — /secteurs/industrie/ | PME industrielles, agroalimentaire, équipes production, qualité et achats | Documentation, transmission et coordination opérationnelle |
| Associations & fédérations — /secteurs/associations/ | Associations, fédérations, réseaux associatifs et fondations | Adhérents, bénévoles, recherche de financements, communication et gestion quotidienne |

Les publics proposés ne constituent pas des références clients ni une affirmation d'expertise déjà démontrée. Les exemples spécialisés seront documentés avant publication. Pour chaque famille, retenir 3 à 5 publics et des usages précis plutôt qu'une liste exhaustive.

La page Finance présente l'accompagnement global de ces publics : conseil, formation, conception sur mesure et suivi. /agent-ia/finance/ conserve son angle opérationnel sur les exemples d'agents pour la fonction finance. Relier ces pages sans dupliquer leurs textes. Appliquer cette distinction aux autres familles et pages métiers.

Dans Finance, organiser les guides en deux ensembles : « Cabinets comptables » et « Directions financières ». Permettre de découvrir les ressources utiles à chacun avec une sélection compacte ; la limite de deux guides sur toute une grande page secteur est levée. Sur une page métier, garder une sélection de un ou deux guides. Aucun guide générique ajouté pour remplir un public encore non couvert.

## 2. Inventaire des ressources et destinations

Source locale : /Users/espoirmwami/Documents/CAPTURE LEADS/althoce-ressources/lib/ressources.ts . Neuf ressources configurées ; existence des contenus déclarée dans cette configuration, contenu intégral des guides non audité à ce stade. Avant rédaction des résumés et couvertures, lire chaque guide utilisé et vérifier les affirmations qui seront reprises.

Domaine de capture confirmé par le propriétaire : https://guide-gratuit-pi.vercel.app . Les chemins ci-dessous utilisent ce domaine. Vérifier individuellement les neuf destinations avant leur intégration.

| Guide | Chemin de capture | Placement proposé |
| --- | --- | --- |
| Claude × Pennylane | https://guide-gratuit-pi.vercel.app/r/guide-claude-pennylane | Finance → cabinets comptables, complément |
| 12 cas d'usage experts-comptables | https://guide-gratuit-pi.vercel.app/r/12-cas-usage-experts-comptables | Finance → cabinets comptables, principal |
| Claude × Meta Ads | https://guide-gratuit-pi.vercel.app/r/guide-claude-meta-ads | Marketing & communication → agences et équipes marketing ; métier marketing |
| Copilot : 8 cas d'usage | https://guide-gratuit-pi.vercel.app/r/copilot-8-cas-usage | Métier opérations, seulement si les usages décrits correspondent ; éventuel renvoi depuis les formations |
| Claude en droit : 10 cas d'usage | https://guide-gratuit-pi.vercel.app/r/claude-droit-10-cas-usage | Droit → avocats et juristes ; métier juridique |
| 12 skills Claude pour la finance | https://guide-gratuit-pi.vercel.app/r/12-skills-claude-finance | Finance → directions financières ; métier finance, complément |
| Claude × data.gouv : 20 prompts | https://guide-gratuit-pi.vercel.app/r/claude-data-gouv-20-prompts | Immobilier ou analyse commerciale, uniquement après lecture du guide et validation de la correspondance |
| 12 agents IA pour la direction financière | https://guide-gratuit-pi.vercel.app/r/12-agents-ia-direction-financiere | Finance → directions financières ; métier finance, principal ; préciser que les exemples ne sont pas un catalogue d'agents vendus |
| Intégrer l'IA dans un cabinet : 7 chantiers | https://guide-gratuit-pi.vercel.app/r/7-chantiers-ia-cabinet | Cabinets, alternative organisationnelle après lecture pour vérifier le public précis |

Toutes les cartes ouvrent la page de capture dans un nouvel onglet : target="_blank", rel="noopener noreferrer", indication accessible « nouvel onglet ». Ne pas remplacer les liens de capture par les liens Notion des guides ni copier les formulaires/Brevo dans le site principal. Paramètres UTM cohérents avec le suivi déjà accepté, sans installer de nouveau pixel.

Pas de section vide, de faux téléchargement ni de « guide bientôt disponible ». Sur les pages sans guide approprié, garder les usages, la formation et le pré-audit.

## 3. Narration des pages secteur

1. Promesse concrète liée au secteur, description courte et première photo en situation. Un CTA de pré-audit.
2. Présentation compacte des métiers regroupés, chacun associé à une situation de terrain reconnaissable ; 3 à 5 entrées visuelles, sans créer autant de nouvelles pages.
3. Un exemple de parcours : entrée/document → préparation par l'IA → contrôle humain. Les contraintes propres au secteur sont intégrées ici.
4. Formation et accompagnement : comment les équipes prennent la main ; deuxième photo, angle et ambiance différents.
5. Ressources regroupées selon les publics couverts : couvertures lisibles, deux lignes de bénéfice et « Recevoir le guide ». Sélection initiale courte, accès aux autres ressources pertinentes sans long catalogue ; masquer les groupes sans guide.
6. Cas client pertinent si existant, avec chiffre déjà validé ; sinon omettre le bloc sans inventer de preuve sectorielle.
7. FAQ propre au secteur puis CTA pré-audit offert, 30 minutes.

Réutiliser les composants existants de FAQ, CTA, photos et liens ; créer un modèle SectorPage piloté par des données. Conserver assez de variantes de disposition pour éviter des pages visuellement identiques. Pas de répétition de longs catalogues services/métiers ni de labels décoratifs en tête de chaque section.

## 4. Formation IA par ville

URL proposée : /formation-ia-{ville}/. Conserver les URL existantes /agence-ia-{ville}/ et /services/formation-ia/ ainsi que les programmes détaillés.

Chaque page répond à « former mes équipes dans cette ville » : public visé, exercices concrets, modalités sur site ou à distance à convenir, choix du parcours et liens vers les programmes. Résumés courts des trois parcours existants, sans dupliquer les programmes complets. FAQ utile sur organisation, prérequis et accompagnement. Reprendre uniquement les conditions de financement réellement documentées, sans garantie de prise en charge ni nouvelle certification.

Villes : Bordeaux, Paris, Lyon, Marseille, Toulouse, Nantes, Lille, Strasbourg, Nice, Rennes, Montpellier, Grenoble, Dijon, Reims, Angers, Le Havre, Saint-Étienne, Toulon et Nîmes.

Photo d'un lieu emblématique exact, avec cadrage distinct des pages agence lorsque nécessaire ; seconde photo d'un atelier en bureau. Décrire la zone d'intervention, sans prétendre à un bureau local ou à des sessions datées non confirmées. Vérifier les références locales avant rédaction.

Maillage : depuis la page agence locale vers la formation locale ; de la formation locale vers les programmes nationaux ; accès compact aux villes depuis le hub formation. Ne pas ajouter 19 entrées à la navigation principale. Le hub secteurs reçoit une entrée simple à intégrer dans la navigation existante sans surcharger les 4 services.

## 5. Direction artistique et composants partagés

- Deux photos humaines par nouvelle page secteur ; scènes réalistes en bureau, cadrages et lumières variés, grain cinématographique discret. Comptabilité : revue à deux autour d'un dossier ; droit : préparation dans un bureau chaleureux ; marketing : atelier créatif lumineux. Pas de fausses identités de clients.
- Couvertures : collection Althoce cohérente (bleu, blanc cassé, encre) avec composition et motif distincts par guide. Grand titre lisible, sujet et marque ; pas de nombre de pages inventé ni logo tiers généré approximativement.
- Générer les scènes/illustrations avec l'outil image ; poser les titres des couvertures avec une typographie déterministe pour garantir leur exactitude. Prévoir 9 couvertures au total, produites dans l'ordre des ressources intégrées.
- Composants prévus : ResourceCard, ResourceSection, SectorPage, FormationCityPage. Données sectorielles/locales et catalogue ressources séparés du rendu, avec clés de correspondance plutôt que duplication.
- Photos exportées en WebP, tailles responsives et chargement différé hors premier écran ; contrôler leur poids et leur lisibilité réelle sur mobile.

## 6. SEO, lisibilité et validation

Conserver les pages existantes et leurs URL. Chaque nouvelle page possède une intention claire, title/description/H1 propres, canonical vers elle-même et fil d'Ariane. Éviter la multiplication secteur × métier × ville. Ne publier une page locale que si elle apporte un contenu utile distinct.

Données structurées cohérentes avec le contenu visible ; FAQ issue de la même source que le texte affiché. Aucune promesse de classement Google ou de citation par les moteurs IA. Réponses courtes, explicites et contextualisées ; preuves existantes seulement.

Le sitemap actuel parcourt les routes statiques : si les nouvelles familles utilisent des segments dynamiques, ajouter explicitement leurs URL indexables au générateur. Contrôler les doublons, pages absentes et lastModified réels.

Validation : build, liens internes et liens externes de capture, H1/canonical/robots, données structurées, affichage 320/390/768/1440 px, navigation clavier, contraste et absence de débordement. Vérifier qu'aucune ressource ne révèle directement son contenu à la place de la capture. Aucun envoi de faux contact durant les tests.

## Informations attendues

- Domaine de capture confirmé : https://guide-gratuit-pi.vercel.app .
- Priorité sectorielle ajustable ; démarrer par Finance, puis Droit et Marketing & communication, conformément au regroupement demandé.

Première réalisation recommandée après accord sur le plan : page Finance avec ses publics et ses ressources comptabilité/direction financière, puis pilote formation Bordeaux. Ces deux pilotes fixent la qualité avant extension.

## Associations & fédérations — précisions éditoriales

Famille ajoutée à la demande du propriétaire. Prévoir une page /secteurs/associations/ dans le hub secteurs, avec la même qualité visuelle et les mêmes composants que les autres familles.

- Publics : responsables associatifs, équipes salariées, bénévoles et fédérations ; adapter le discours à la mission de la structure et aux moyens disponibles.
- Situations : préparer les réponses aux adhérents ; faciliter l'accueil des bénévoles ; structurer les dossiers de subvention et les bilans d'activité ; préparer la communication et les comptes rendus. L'équipe valide les contenus et les dossiers avant envoi.
- Formation : ateliers pratiques adaptés aux salariés et bénévoles, à leur niveau et aux outils réellement utilisés.
- Visuels : réunion de coordination dans un bureau associatif chaleureux et atelier de travail collectif ; scènes distinctes, cohérentes avec la direction artistique du site.
- Ressources : aucun guide spécifiquement associatif identifié dans l'inventaire actuel. Ne pas afficher de faux guide ni forcer une ressource finance ou marketing ; un guide transversal ne sera proposé qu'après lecture et vérification de son intérêt pour ce public.
- Conversion : pré-audit offert pour identifier une première priorité utile à la structure ; pas de promesse de financement obtenu, de référence associative inventée ou de gain chiffré non documenté.

## Avancement — premier lot construit le 15 septembre 2026

- Hub /secteurs/ : sept familles présentées, dont Associations & fédérations. Seule Finance possède pour l’instant une page détaillée ; les autres présentations n’affichent pas de lien vers une page inexistante.
- /secteurs/finance/ : quatre publics, démarche en trois étapes, formation, quatre guides, cas client existant, FAQ et pré-audit.
- Deux scènes générées puis compressées en WebP (environ 91 et 96 Kio). Quatre couvertures éditoriales en HTML/CSS : titres déterministes, aucun poids d’image supplémentaire.
- ResourceCard et ResourceSection partagés ; deux guides ajoutés à /agent-ia/finance/. Le catalogue actuel couvre les quatre guides Finance ; les cinq autres seront intégrés avec leurs secteurs.
- Navigation À propos et pied de page : accès au hub secteurs. Les quatre services du menu restent inchangés.
- Build validé ; nouvelles URL présentes dans le sitemap généré ; quatre pages de capture HTTP 200, sans soumission de formulaire. Contrôle mobile : passage à une colonne sous 380 px pour garder les couvertures lisibles.
- Restent à construire : pages détaillées des autres secteurs, catalogue complet et formations locales, selon les lots ci-dessus. Aucune publication GitHub/Vercel durant ce lot.

## Clôture du plan — lot complet

Les lots 1 à 7 sont réalisés en local. La demande complémentaire de bibliothèque /guides/ est incluse. Les points « restent à construire » ci-dessus décrivent l’état du premier pilote, désormais dépassé.

Bilan, arbitrages et vérifications : docs/quality/secteurs-formations-guides-2026-09-16.md.

Les 19 visuels de villes existants sont réutilisés ; douze nouvelles photos accompagnent les six secteurs ajoutés. Le domaine des captures reste https://guide-gratuit-pi.vercel.app .
