# Althoce — direction éditoriale et design

Retours utilisateur du 13 septembre 2026. À relire avant de retravailler une autre page. Ces préférences sont durables ; leur application aux autres pages se fera au fil des demandes, pas automatiquement.

## Identité

- Conserver le branding approuvé : bleu, blanc, encre sombre, typographie actuelle. Rendu professionnel, personnel, épuré et humain.
- La home présente Althoce comme un **cabinet IA**. Les pages agence gardent leur propre positionnement SEO.
- Cible prioritaire : dirigeants de PME. Parler de leur quotidien, de leurs équipes, du temps retrouvé et des bénéfices concrets.
- Mettre le bénéfice dans le titre principal ; expliquer dans le paragraphe qu’Althoce accompagne les entreprises, conçoit des agents IA, automatise et forme.
- Éviter le jargon, les promesses abstraites et les catalogues techniques. Garder les expressions et le vocabulaire SEO utiles sans rallonger le discours.

## Narration et hiérarchie

Un parcours de lecture : bénéfice → conviction → accompagnements → méthode → résultats → cabinet → réponses aux objections → rendez-vous.

- Une idée forte et peu de texte par section. Les détails doivent aller sur la page dédiée ou dans un accordéon accessible.
- Retirer les petits surtitres précédés d’un tiret. Conserver des vrais titres H2/H3 utiles et lisibles.
- Limiter les appels à l’action concurrents. CTA principal : **Réserver mon pré-audit offert** (premier appel de 30 minutes, sans engagement).
- Le premier appel offert n’est pas le diagnostic complet : ne pas promettre gratuitement la feuille de route, le chiffrage ou les livrables de ce dernier.
- Montrer le cabinet et l’implication humaine avant de demander un rendez-vous : prise en charge de A à Z, travail avec les équipes, suivi après la mise en place.

## Visuels

- Scènes de bureau réalistes, direction photographique cinématographique, grain fin, lumière naturelle, textures et expressions crédibles, teintes sobres.
- Pas de robots, hologrammes, codes futuristes ou photos commerciales trop lisses.
- Aucune mention visible « Visuel d’illustration IA » ni variante sous les images. Alt descriptifs, sans bourrage de mots-clés.
- Intégrer les photos à la composition : images de travail pour la méthode et les cas, scène d’équipe pour le cabinet avec lien vers À propos.
- Pour représenter le fondateur, utiliser une référence réelle. Celle disponible est `public/logos/Espoir mwami.png`. La scène d’équipe générée n’est pas une photographie documentaire de l’équipe réelle ; les autres personnes sont synthétiques.

## Application à la home

- Accroche : « Faites de l’IA un atout pour toute votre équipe. »
- Conviction condensée en un bandeau éditorial, sans classification technique.
- Quatre accompagnements affichés : Diagnostic IA, Déploiement & agents IA, Pilotage & maintenance, Formation IA. Équipement & conformité retiré du catalogue de la home ; l’étape Équiper reste dans la méthode réelle.
- Méthode Comprendre / Équiper / Automatiser / Faire durer conservée, photo conservée, explications raccourcies, détail diagnostic dépliable.
- Section taille d’entreprise retirée. Métiers en bas, discrets.
- Photo humaine ajoutée au cas principal. Chiffres existants rassemblés avec les cas.
- Ancien devis détaillé remplacé par un CTA de pré-audit offert. Ancien bloc d’engagements remplacé par une présentation du cabinet.
- FAQ : six questions mises en avant, autres questions accessibles via un accordéon. Les douze questions restent dans le HTML et les données structurées.
- CTA supplémentaire du footer désactivé uniquement sur la home pour éviter le doublon.

## Préservation technique

Ne pas modifier les routes ni les URL canoniques pendant une refonte visuelle. Synchroniser les données structurées avec les offres et FAQ affichées. Garder le rendu serveur, les images optimisées, les liens métiers et le clavier. Vérifier ordinateur, tablette et mobile, y compris 320 px.

## Images du 13 septembre — outil intégré image_gen

Fichiers intégrés :
- `public/images/home/equipe-cabinet.webp` — 1536 × 1024, 121 256 octets.
- `public/images/home/cas-client-bureau.webp` — 1536 × 1024, 104 276 octets.

Prompts de direction utilisés :

### Équipe

Identity-preserve, photorealistic-natural. Use the supplied founder portrait as identity reference; preserve recognizable face, skin tone, short hair and age, remove stage microphone. Landscape 3:2 cinematic editorial office photograph. Founder seated with three young adult mixed-gender colleagues, two women and another man, around a light oak table in a modest elegant French startup office. Relaxed authentic interaction at the end of a work session; founder part of group, no dominant portrait. Smart casual navy, cream, grey; window side light, off-white walls, muted blue accents, plant, closed laptop and notebook. 35mm analogue look, fine organic film grain, realistic skin, restrained color and soft contrast. No text, logos, watermark, neon, futuristic motifs or glossy stock styling. Constructed scene, not record of a real event.

### Cas client

Photorealistic-natural. Landscape 3:2 editorial office photograph. Experienced woman accountant around 40 and male colleague around 35 reviewing a document beside a laptop in a small French accounting office. Candid attentive expressions, no camera pose. Navy and off-white smart casual clothes, oak desk, a few folders, blurred shelves, soft side daylight, muted blue-gray accents. Cinematic 35mm analogue look, organic grain, true skin texture, natural hands, restrained saturation. People in upper and central image, suitable for 16:10 crop. No legible document content, text, logo, watermark, robots, holograms or exaggerated smiles. Illustrative scene, no identified real client.

## Vérifications de cette itération

- Compilation Next.js réussie : 68 pages générées, contrôle TypeScript inclus.
- Tests responsive à 320, 375, 390, 768, 1024 et 1440 px : aucun débordement horizontal.
- Un seul H1 ; titre SEO et URL canonique conservés. Catalogue JSON-LD aligné sur les quatre offres.
- Les douze réponses de FAQ du HTML correspondent exactement au schéma FAQPage ; accordéons et accès clavier vérifiés.
- Liens internes vérifiés contre les routes et redirections existantes. La redirection historique secteurs → achats est inchangée.
- Les nouveaux visuels sont optimisés en WebP ; les portraits et scènes ont été vérifiés dans la composition.
- Aperçu local uniquement ; aucune publication.

## Ajustements suivants — 13 septembre 2026

Ces demandes remplacent les choix précédents lorsqu’ils se contredisent :

- Photo du cabinet : portrait de groupe informel d’environ dix personnes, inspiré de la référence fournie (salon de bureau, canapé, personnes debout et assises). Représenter le fondateur à partir des deux nouvelles photos fournies, plus fidèles que l’ancien portrait du site. Ne pas reproduire l’ensemble des personnes de la référence.
- Retirer le détail dépliable « Ce que comprend notre diagnostic IA » de la home.
- Conserver la première navigation compacte des métiers ; supprimer la grille descriptive répétée dans le bloc dépliable.
- Afficher les agents spécialisés (SEO, etc.) sur une seule ligne défilante, avec pause, accès clavier et alternative sans animation.
- Dire explicitement « formations IA » dans la description du hero, les accompagnements et la méthode. Faire comprendre que la formation fait partie de l’offre du cabinet.
- Ajouter ponctuellement des dégradés doux, principalement bleu, blanc et tons neutres, sans changer le branding ni diminuer le contraste.

### Nouveau visuel d’équipe

Outil : image_gen intégré. Références d’identité : IMG_0979.JPG et 30482D1D-3E7E-4D40-8BDA-BA7A2A4C36E2.PNG fournies par l’utilisateur. Référence de composition : groupe dans un salon de bureau. Les images sources personnelles restent hors du dossier public.

Prompt : portrait de groupe naturel 3:2 de dix adultes exactement, cinq femmes et cinq hommes dont le fondateur, avec ses traits fidèlement conservés depuis les deux portraits. Quatre personnes debout derrière le canapé, quatre assises dessus, deux sur le tapis. Fondateur assis légèrement à gauche du centre, surchemise grise et tee-shirt blanc, sourire naturel. Bureau français lumineux et vécu, murs blancs, parquet, canapé clair, tapis crème, plantes. Photo informelle prise par un collègue au 35 mm, grain fin, peau et vêtements naturels, lumière chaude mesurée, postures et expressions variées. Marges latérales pour montrer tout le groupe. Pas de texte, logo, retouche beauté, visages dupliqués ni rendu publicitaire lisse.

Fichier intégré : `public/images/home/equipe-cabinet-v2.webp` (1536 × 1024, 272 556 octets), généré avec l’outil intégré image_gen. Ancienne version conservée hors affichage. Contrôles : compilation des 68 pages et TypeScript réussis, absence de débordement à 320/390/768/1440 px, pause/reprise et accès clavier de la ligne défilante vérifiés, 35 agents spécialisés conservés. Le détail diagnostic et la grille métier en doublon sont absents. Métadonnées et schémas SEO inchangés lors de cet ajustement.

## Programme global et réutilisation

La refonte est désormais autorisée sur l’ensemble du site suivant `content/plan-refonte-site-7-jours.md`. Le jour 1 commence le 13 septembre, les jours 2–7 à 7 h du 14 au 19. Les questions utiles sont préparées à 19 h la veille. Réutiliser la bibliothèque `components/brand/Sections.tsx` et consulter `content/refonte/sections-partagees.md` avant de recréer un bloc.

Exception visuelle pour les pages villes : générer un lieu emblématique de chaque ville, après vérification de références propres à cette ville. Pour les autres pages, garder les scènes de bureau dans la direction de la home. Ne pas suggérer une implantation ou un bureau physique sur la seule base d’une image locale.

### À propos — enrichissement du 13 septembre 2026
- Ajouter une section dédiée « Faire de vos équipes le moteur de la transformation » : formation accessible, pratique sur les situations réelles, autonomie après intervention.
- Présenter les engagements avec des décisions concrètes et une composition éditoriale aérée plutôt qu'une grille de cartes génériques.
- Associer l'origine bordelaise à un accompagnement sur l'ensemble du territoire français, à distance et sur place selon la mission ; ne pas suggérer des bureaux locaux non établis.
- Réutiliser le bandeau des références de la home via `components/brand/TrustStrip.tsx` et les données `heroLogos`.

### Priorité visuelle — retour du 13 septembre 2026
L'utilisateur juge les sections À propos trop écrites et trop pauvres en design. Priorité : raconter une histoire par des compositions audacieuses et pertinentes, pas par l'accumulation de paragraphes. Une idée par section, phrases courtes, photographies humaines dominantes, contrastes bleus assumés, typographie expressive et éléments graphiques qui servent le message. À propos applique désormais : écoute du quotidien → atelier et autonomie → parcours de mission → engagements synthétiques → proximité nationale. Conserver les références, les liens utiles et les fondations SEO. Cette direction remplace l'approche précédente trop éditoriale et textuelle.

### Présence nationale — ajustement validé par le retour utilisateur
La grande carte de France prend trop d'espace et manque de pertinence sur À propos. Remplacée par une composition compacte : titre à gauche, liaison typographique « Bordeaux → Partout en France » et modalités d'accompagnement à droite. Éviter les grandes illustrations géographiques décoratives sans information supplémentaire.

### Services — sur mesure et humanisation
Les agents et automatisations présentés sont des exemples d'usages, jamais un catalogue d'agents à acheter à la carte. Dire explicitement que chaque solution est conçue selon les processus, les outils, les données, les règles et le contexte de l'entreprise. À appliquer aux prochaines pages métiers également.
Au moins deux photos pertinentes sur les pages Services : scène d'ouverture et scène de travail/atelier. Audit : section « Partir du terrain pour décider où agir », écouter/observer/prioriser, livrables visuels. Navigation entre services sous forme de liens avec une courte intention, plutôt qu'une simple liste de noms.

### Formations et simulation ROI
- La formation est une compétence qui se partage : partir des outils et des situations des équipes, conserver les programmes détaillés accessibles sans surcharger la lecture.
- Financement OPCO éventuel et soumis aux conditions du financeur ; ne pas promettre une prise en charge.
- Le calculateur présente des exemples d'usages personnalisables. Ses coûts sont des hypothèses, pas une grille tarifaire Althoce ; temps valorisé et trésorerie économisée sont distincts.
