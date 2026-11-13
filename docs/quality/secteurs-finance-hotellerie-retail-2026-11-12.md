# Secteurs Finance, Hôtellerie et Retail & luxe
Date : 12 novembre 2026. Branche : `codex/secteurs-metiers-20261110`. Aperçu uniquement.

## Organisation
- Finance figure dans Secteurs. Sa page distingue dossiers financiers, reporting et trésorerie du travail des cabinets comptables.
- Expert-comptable figure dans Métiers (menu, répertoire, footer, fil d’Ariane et données structurées). Son URL historique `/secteurs/comptabilite/` est conservée. Les cinq usages, dont rapprochement bancaire et lettrage, sont conservés.
- Hôtellerie et Retail & luxe sont deux pages distinctes : leurs équipes, outils, situations et critères de validation diffèrent.
- La navigation et le footer partagent les mêmes données : onze secteurs et dix métiers. Les deux nouvelles routes sont incluses une seule fois dans le sitemap.

## Textes et arbitrages
Les scénarios sont des exemples à adapter lors du cadrage, pas des références clients ni des intégrations déjà réalisées. Aucune statistique, durée, certification ou compatibilité avec un logiciel nommé n’est ajoutée.
- Finance : préparation d’entrée en relation, note pour un comité, reporting, revue de trésorerie. Les professionnels conservent les décisions de crédit, d’investissement et de paiement.
- Hôtellerie : demandes de séjour, arrivées et transmissions, groupes/séminaires, avis et demandes après séjour. Tarifs, disponibilité et engagements sont vérifiés.
- Retail & luxe : fiches de collection, rendez-vous en boutique, retours/réparations, remontées du réseau. Les attributs produit, stocks et délais doivent provenir d’informations vérifiables.
- Chaque page présente les agents sur mesure, la formation contextualisée, quatre exemples détaillés, cinq questions fréquentes et le rendez-vous existant.
- Aucune ressource fictive : les nouveaux secteurs n’affichent pas de section guides en l’absence de guide dédié.
- Proposition non implémentée : **Secteur public & collectivités**, pour la préparation des courriers, les synthèses de dossiers et la recherche dans les procédures, avec formation et accès maîtrisés.

## Sources de contexte métier
Ces sources ont servi à identifier des situations de travail ; elles ne prouvent aucun résultat d’Althoce.
- France Num, IA et expérience client dans l’hôtellerie : https://www.francenum.gouv.fr/guides-et-conseils/intelligence-artificielle/generation-de-contenus-texte-image-son-video/comment-6
- France Num, IA générative pour hôtels/cafés/restaurants : https://www.francenum.gouv.fr/guides-et-conseils/intelligence-artificielle/comprendre-et-adopter-lia/lia-generative-pour
- France Num, usages des contenus produit : https://www.francenum.gouv.fr/guides-et-conseils/intelligence-artificielle/generation-de-contenus-texte-image-son-video/comment-1
- France Num, retours d’expérience commerce : https://www.francenum.gouv.fr/guides-et-conseils/intelligence-artificielle/comprendre-et-adopter-lia/integrer-lia-retours
- DINUM, assistant IA dans l’État : https://ia.numerique.gouv.fr/cas-dusage-de-lia-dans-letat/lassistant/

## Visuels
Outil : génération d’images ChatGPT intégrée. Deux générations originales (aucune image de référence), une version retenue par page. Images éditoriales de situations de travail, pas des photos de clients. Après inspection, conversion en WebP à 1 400 × 933, sans autre retouche.
- `public/images/sectors/hotellerie-equipe.webp` : 127 280 octets.
- `public/images/sectors/retail-luxe-equipe.webp` : 113 116 octets.
- Total : 240 396 octets. Images de formation existantes réutilisées après inspection ; textes alternatifs adaptés.

### Prompt Hôtellerie
Use case: photorealistic-natural. Create an editorial photograph for Althoce, a French AI consultancy, for its hotel industry web page. Landscape 3:2. Candid scene in a stylish independent French hotel back office beside reception, three adult colleagues (a female hotel operations manager in her 40s, a male reception lead in his 30s, a female guest relations colleague in her 30s) preparing arrivals together. One open laptop angled away so no screen content is readable, paper arrival list seen at an angle without readable names, folded hotel floor plan, small key-card holders. A doorway glimpse of a refined quiet lobby establishes the hotel setting, but the main scene is their real working desk, not a hotel advertisement. One person points at a paper, two look with natural focused expressions. Natural window daylight, believable blue-grey shadows, light sky-blue whites, muted navy and oak details, subtle cinematic 35mm film grain, documentary realism, imperfect natural faces and hands. Slightly off-center medium-wide composition, all three people remain in central crop for website mobile use. No glossy stock-photo poses, no futuristic interfaces, no robots, no glowing lines, no floating icons, no text overlays, no logos, no watermark. Quiet premium professional atmosphere, realistic depth of field, not heavily orange or beige.

### Prompt Retail & luxe
Use case: photorealistic-natural. Create an editorial photograph for Althoce, a French AI consultancy, for its retail and luxury brands web page. Landscape 3:2. An authentic discreet studio/back office of a French premium retail brand: two adult professionals, a woman merchandising manager in her 40s and a male client-advisor team lead in his 30s, working at a pale wooden desk with a closed unbranded leather accessory sample, small muted fabric swatches, a product catalogue without readable text, and one laptop viewed obliquely. They compare a product detail with an order note before a client appointment. Neat shelving with a few neutral sample boxes in background, subtle boutique display glimpsed through interior glass. Hands natural, focused candid eye contact toward the product, no posing to camera. Cool clear daylight, pale blue-white walls, navy clothing accents, refined calm composition, cinematic documentary 35mm film grain, natural skin texture and believable imperfections. No visible brand logos, no product prices, no readable personal data, no text overlays, no AI holograms or glowing objects, no exaggerated luxury symbols. Different room, composition and people from a hotel office. Keep subjects centrally framed for responsive cropping. High quality editorial realism, not illustration.

## Vérification
- `npm run build` : PASS, 114 entrées générées.
- `npm run typecheck` : PASS.
- `python3 scripts/check-expertise.py` : PASS, 29 pages, 2 524 liens internes et 128 réponses FAQ.
- Métadonnées uniques, un H1, canonical, ancres, images et concordance FAQ visible/JSON-LD contrôlés.
- Navigateur : affichage et parcours à 320, 375, 768, 1 051 et 1 440 px, sans débordement horizontal observé. Menu mobile repliable et défilement interne conservés. Images des deux nouvelles pages chargées ; répertoires et fil d’Ariane Expert-comptable vérifiés. FAQ Retail testée au clavier.
- Aucun avertissement ni erreur dans la console sur les pages inspectées.
- `graphify update .` : effectué (501 nœuds, 384 liens, 165 communautés).
- Build et contrôles locaux effectués sans modifier les API ou les formulaires. Aucun déploiement de production.
