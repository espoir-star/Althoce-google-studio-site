# Sections partagées — inventaire et mode d’emploi

Audit du 13 septembre 2026, avant extension aux autres lots. Résultats détaillés : `sections-recurrentes.json`. Les nombres ci-dessous désignent des fonctions locales portant le même rôle, pas la preuve que leurs textes sont identiques.

| Bloc repéré | Présences dans les composants de page | Décision |
| --- | ---: | --- |
| Hero | 50 | `PhotoHero` pour les pages avec photo, variations de titre, texte et image |
| Titre H2 local | 49 | Typographie commune dans `Brand.module.css`, vrais titres sans surtitre décoratif |
| Méthode | 48 | `MethodSection` et données explicites ; méthode commune Althoce, exemples propres au service |
| StepVisual | 42 | Remplacer les illustrations techniques génériques par photos/scènes pertinentes ou schémas seulement utiles |
| FAQ | 22 | `FaqItem` / `FaqSection`, réponses rendues côté serveur et mêmes données pour le JSON-LD |
| CTA final | 21 | `PreAuditCTA` réutilisé par le footer et la home ; désactiver les doublons locaux au fil des migrations |
| Sécurité | 20 | Mutualiser la présentation, mais adapter les engagements réels au contexte sans promesse d’hébergement universelle |
| Blocs locaux (Pourquoi Althoce, Cas client local, Souveraineté, MetierMockup) | 19 chacun | Futur gabarit ville, avec faits et photo emblématique vérifiés par ville |
| Avant/après, liste agents, cas client | 10 chacun | Gabarits à factoriser dans les jours 4–5, avec contenu métier propre |

## Bibliothèque utilisable dès le jour 1

`components/brand/Sections.tsx` :
- `PhotoHero` : titre React, description, image statique, alt, fil d’Ariane et CTA en children. Ne pas déclarer les photos de ville comme des bureaux du cabinet.
- `Breadcrumb` : navigation visible ; le schéma BreadcrumbList reste dans la page avec ses URL stables.
- `TextLink` : lien éditorial avec cible tactile et flèche.
- `MethodSection` : identifiant, titre, description, étapes et photo. La home et À propos partagent déjà ce composant.
- `FaqItem` : question/réponse, identifiant unique et groupe natif. Home, À propos et Contact utilisent la même base.
- `FaqSection` : composition éditoriale complète de la FAQ pour les nouveaux gabarits.
- `PreAuditCTA` : CTA de 30 minutes offert, sans confusion avec le diagnostic complet. Utilisé dans la home et dans le footer partagé.

`components/brand/Brand.module.css` : structure, typographie, bleu, fonds discrets, liens, espacements, focus et responsive. Utiliser la classe `page` pour les nouvelles pages. `CabinetPages.module.css` ne contient que les particularités À propos / Contact.

`lib/cabinet-content.ts` : FAQ institutionnelles, consommées à la fois par la page et son JSON-LD. `lib/home-content.ts` : méthode commune et offres ; ne pas dupliquer ces tableaux sur chaque page.

`Navbar` reste unique dans `app/layout.tsx`. Ne pas le réimporter dans les pages. `Footer` garde son API `showCta` : mettre false lorsqu’un CTA est déjà intégré ou sur Contact. Le texte du cabinet et la formation y sont maintenant cohérents sur tout le site.

`ContactForm` conserve les sept clés du payload existant, `/api/contact`, les événements Meta Contact/Lead et les états de succès/erreur. La présentation autour du formulaire reste rendue côté serveur. Aucun envoi réel pendant les essais.

## Garde-fous pour les prochaines journées

Réutiliser un composant ne signifie pas réutiliser le même discours. Préserver l’intention SEO, les liens utiles et les spécificités du public. Extraire un nouveau bloc uniquement quand un second usage réel le justifie. Ne pas rendre toutes les pages identiques et ne pas créer de grande abstraction à dizaines d’options.

## État SEO initial

`seo-avant-jour-1.json` contient les titres, descriptions, canoniques, nombre de H1 et liens de 62 documents HTML générés (dont pages techniques). Ce relevé local n’est pas une mesure des positions Google. Les variantes de routes, redirections et sitemap seront comparées à chaque étape.

## Visuel Contact

Outil intégré image_gen. Fichier : `public/images/home/premier-echange-bureau.webp` (1536 × 1024, 108 570 octets).
Prompt : photographie éditoriale 3:2 d’un premier échange entre deux collègues adultes, femme et homme, dans un bureau français calme et lumineux. L’un écoute, l’autre explique avec un carnet ; regard entre eux, sourire mesuré. Bureau en chêne clair, murs blanc cassé, vêtements bleu marine/gris, plante et ordinateur fermé. Lumière latérale naturelle, grain organique fin, photo documentaire 35 mm, peau naturelle et couleurs sobres. Visages entièrement visibles, cadrage compatible 2:1. Aucun texte lisible, logo, filigrane, néon ou rendu publicitaire lisse. Scène illustrative sans client identifié.

### Bandeau de confiance
`components/brand/TrustStrip.tsx` et son module CSS : utilisé par la home et À propos. Source unique `heroLogos`, option `inset` pour l'espacement dans le hero, `className` pour le conteneur. Même disposition responsive et mêmes références sur les deux pages.

## Extension Services — jour 2
`components/services/ServicePage.tsx` : page spécialisée commune, avec texte et scène adaptés via `lib/services-content.ts`. MissionPath réutilisé sur le hub et les sept offres. ServiceLinks/MetierLinks utilisent des détails natifs pour un maillage discret. `ServiceSchema.tsx` puise dans les mêmes tableaux que la FAQ et la méthode visibles ; aucune seconde copie des réponses.
Les anciennes entrées `*IAPageClient.tsx` des sept services délèguent au gabarit commun ; les routes importent directement la nouvelle page serveur. À propos utilise désormais sa composition spécifique `AboutStory.module.css` (sa méthode compacte remplace MethodSection sur cette page). Contact conserve `CabinetPages.module.css`.

## Lot formations
`components/formation/Formation.module.css` mutualise les compositions photo/texte, choix de parcours, faits pratiques, programme en accordéons natifs et listes de livrables. `FormationDetailClient` partage le rendu des deux parcours à partir de `lib/formations.ts`. FAQ centralisée dans `formationFaq` pour synchroniser contenu et JSON-LD. TrustStrip et PreAuditCTA réutilisés.

`components/formation/Program.tsx` mutualise la présentation visuelle des séances/modules via ProgramStep (horaire, titre, contenu, livrable). `Funding.tsx` mutualise le bloc OPCO conditionnel. Réutiliser ces composants pour les prochains parcours et conserver leur accessibilité native.

## Pages métiers
`components/metiers/MetierPage.tsx` rend les neuf métiers depuis `lib/metiers-content.ts`. Le hub réemploie MetierDirectory. MetierSchema synchronise les FAQ et remplace l’ancien catalogue OfferCatalog par un ItemList d’exemples. Le gabarit partage MissionPath, TrustStrip, ServiceLinks, FaqSection et PreAuditCTA. Les anciens clients spécifiques ne sont plus utilisés par les routes ; ils ne sont pas la source du contenu actuel.

## Cas clients — jour 5
`components/cases/CasePage.tsx` : CasePage pour les neuf dossiers, CasesHub pour l’index, CaseCards pour la galerie et les lectures associées, CaseSchema pour Article/CollectionPage et fil d’Ariane. `Cases.module.css` mutualise compositions photo, trois étapes et cartes. Contenus dans `lib/cases-content.ts`. CTA partagé PreAuditCTA. Anciens clients spécifiques non utilisés ; validation factuelle suivie dans `cas-clients-validation.md`.
`CaseCards` dispose désormais d’une variante `featured` pour la galerie principale. `CaseResults` réutilise `caseDetails` : deux indicateurs par carte, trois comparaisons avant/après et une période par fiche. Chiffres confirmés par l’utilisateur le 13 septembre 2026. Neuf visuels de couverture distincts, dont sept nouveaux.

## Pages villes — jour 6
`components/cities/CityPage.tsx` mutualise CityPage, NationalPage, CityLinks et CitySchema. `lib/cities-content.ts` centralise les dix-neuf introductions, exemples d’usages, territoires proches et FAQ. `Cities.module.css` porte les héros de ville, images de bureau, offres et navigation territoriale. Réemploi TrustStrip, FaqSection, PreAuditCTA et TextLink. Les anciennes pages clientes locales ne sont plus importées par les routes.
Les pages locales décrivent une zone d’accompagnement : schéma Service avec areaServed, sans adresse ni LocalBusiness fictif. `/agences/` reste une page de mission nationale avec un accès discret aux villes, plutôt qu’un simple annuaire touristique.

### Ajustement du 13 septembre — formations sur les pages villes

Section dédiée aux formations IA intégrée au modèle partagé des 19 villes : titre localisé, photo d’atelier, trois cartes (Fondamentaux 7 h, Avancée 7 h, Coaching Dirigeant 4 × 1 h 30), bénéfices et liens directs vers les programmes. Aucun changement d’URL ou de métadonnées. Build validé (70 pages), présence des trois programmes vérifiée sur 19 pages et absence de débordement contrôlée à 320, 390, 768, 1024 et 1440 px sur Bordeaux.

### Ajustement demandé — formation concise et navigation France

La section formation des 19 villes se limite désormais à une photo, un court texte et un lien vers le hub formation ; les trois cartes de programmes sont retirées. Sur /agences/, le tiroir est remplacé par CityMarquee après le pré-audit et avant le footer : 19 liens, pause/reprise, adaptation au mouvement réduit et navigation clavier via les styles partagés de la home. Finitions des usages, étapes et blocs de proximité dans le modèle commun. Build 70 pages validé ; contrôles de structure sur les 19 villes et vérifications responsive Bordeaux/France à 320, 390, 768, 1024 et 1440 px sans débordement ; pause/reprise vérifiée.

### Blog et utilitaires
Blog.module.css : cartes éditoriales, article principal, lecture, sommaire mobile, liens associés. TableOfContents conserve les ancres natives. PreAuditCTA réutilisé dans index/articles. Utility.module.css pour la page 404. Filtres dynamiques pour éviter les catégories vides et divergences de libellés.

### Articles — lecture épurée, gabarit durable
Colonne de lecture limitée à 680 px, texte 16 px, rythme des H2/H3, interlignes et marges harmonisés. Les paragraphes commençant par du gras reçoivent automatiquement la classe article-point au rendu Markdown : intitulé détaché et repère discret. Listes espacées, citations et tableaux retravaillés (défilement horizontal sur petit écran). Sommaire latéral allégé.
Les paragraphes longs des trois articles publiés sont scindés aux frontières de phrases ; contenu comparé avant/après à espaces normalisés, sans changement de mots. Titres SEO, canoniques, H1 et ancres de sommaire vérifiés. Build réussi et trois articles × cinq largeurs sans débordement. Ces styles sont communs à tous les futurs articles ; consignes de rédaction ajoutées à content/blog/_template.md. Pas de publication ni revue juridique du contenu.

### Navigation et footer — identité bleu nuit
Navigation flottante bleu nuit, monogramme avec nom Althoce et CTA bleu clair. Suppression du menu Agents IA. Services limités aux quatre offres de la home : Diagnostic, Déploiement & agents IA, Pilotage & maintenance, Formation. Menu À propos : Le cabinet et Contact. Ressources conservées. Même structure sur mobile, sous-menus au clic, fermeture Échap avec retour de focus, fermeture au clic extérieur, verrouillage du défilement arrière sur mobile.
Footer assorti en dégradé bleu ardoise/nuit, liens plus contrastés, marque explicite et focus clavier visible. Liens du footer conservés. Build réussi ; contrôles menus sur 320/390/768/901/1024/1440, quatre liens de service et deux liens À propos vérifiés, aucun débordement ; contrôle des 64 HTML et liens internes valide. Pas de publication.

### Menu compact et transparence
Bleu nuit conservé avec opacité 80–86 %, flou 22 px et bord translucide ; repli opaque si préférence de transparence réduite. Menu mobile à hauteur de contenu (environ 250 px fermé, 462 px services ouverts), plafond adapté au viewport, liens courts sans descriptions, pictogrammes réduits et CTA compact. Fond du panneau opaque pour éviter la superposition des textes. Build validé ; contrôles à 320×568, 390×844 et 768×650 sans débordement, Échap et fermeture au bouton vérifiés.
