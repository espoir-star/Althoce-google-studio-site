# Visuels de l’accueil Althoce

Générés avec l’outil intégré Imagegen de ChatGPT. Scènes fictives de bureau, sans portrait du fondateur ni attribution à des clients. Conversion WebP qualité 85, dimensions 1536 × 1024. Les originaux sont conservés dans le dossier generated_images de Codex.

## Réunion de bureau — public/images/home/reunion-bureau.webp

Prompt initial :

Use case: photorealistic-natural. Create a premium cinematic editorial photograph for the homepage of Althoce, a French AI automation consultancy serving SME directors. Landscape 3:2 composition, single photograph, no panels. Scene: candid working session inside a modest elegant French SME office opening onto an industrial atelier through glass. Three fictional adults aged 35-55, a woman SME director in a navy work jacket, a male operations manager in a faded blue shirt, and a woman colleague, discussing a paper workflow and a laptop at a pale oak table. Capture a meaningful quiet moment of listening and practical collaboration, not a staged corporate smile. Medium wide shot from the side, subjects grouped in center, enough space around them for responsive 4:5 crop. Naturally imperfect faces, believable hands, paper documents without readable text, notebook, restrained everyday details. Beautiful lateral daylight from tall windows, soft contrast, realistic skin tones, cool blue accents balanced with neutral white and oak. Cinematographic 35mm film still, subtle visible fine analog grain, tactile texture, restrained halation, grounded documentary realism, lens 40mm, moderate depth of field. Visually attractive and bright, not dark or orange. No holograms, robots, glowing interfaces, futuristic motifs, plastic skin, excessive blur, luxury skyscraper office, staged handshakes, exaggerated smiles, logos, text, watermarks. Output save local image for integration into website.

Correction finale (bureau uniquement, sans texte au mur) :

Use case: photorealistic-natural. Edit this photograph for the Althoce website. Keep the three fictional people, their faces, expressions, clothes, the oak desk, laptop, framing, lighting, cinematic film grain and photo quality exactly as they are. Change only the surroundings: replace the industrial workshop visible through the glass on the right with a beautiful realistic small French company office, with understated desks, chairs, papers and soft daylight. It must be entirely an office scene, no factory, machinery, tools or atelier. Replace the black wall poster with a framed blue abstract artwork without any writing. Remove all lettering on walls. Natural photographic realism, blue-white-oak palette, fine analog grain. No other changes, no new people, no text, no logo.

## Collaboration au bureau — public/images/home/collaboration-bureau.webp

Prompt final :

Use case: photorealistic-natural. Create a single premium cinematic editorial photo for the methodology section of French AI automation SME consultancy Althoce. Landscape 3:2, medium wide candid composition with generous room around subjects. Entirely a real-looking French SME office, never workshop or factory. Two fictional colleagues, a woman project manager aged 40 in light blue cotton shirt and a male colleague aged 45 in a navy sweater, side by side at a white and oak desk in quiet concentration reviewing work on a laptop. Natural relaxed posture, camera from slight side angle, no looking at camera. Open paper notebook, a simple glass of water, a few file folders, realistic everyday office. Behind them tall windows, lightly textured white wall, bookshelf, another empty desk. No posters or writing. Beautiful lateral daylight, bright yet cinematic nuanced shadows, natural imperfect skin, anatomically credible hands. Shot on 35mm film with 50mm lens, fine clearly present analog grain, tactile texture, subtle halation, restrained cool blue-white-oak color palette, moderate depth of field. This should feel like an authentic documentary still of a thoughtful practical working session, not generic corporate stock with staged smiles. No glowing screens, holograms, robots, signs, readable text, logos, watermarks, industrial equipment or workshop. Match coherent style of a candid French office team photographed in natural window light, muted blue clothes and fine film grain.


## Validation de l’accueil — 11 septembre 2026

- Identité conservée : bleu #2563eb, blanc, typographie Plus Jakarta Sans.
- Modifications limitées à HomePageClient.tsx, son module CSS et ses nouveaux visuels. Aucun changement des routes, redirections, métadonnées, données métier ou composants partagés.
- Comparaison du HTML avant/après : H1, métadonnées (dont canonical), JSON-LD identiques ; 54 destinations de liens précédentes et 6 ancres de section conservées ; les 12 réponses de FAQ sont dans le HTML initial et correspondent au schéma FAQPage.
- Responsive : contrôles de largeur à 320, 375, 390, 600, 768, 900, 901, 1024 et 1440 px ; aucun défilement horizontal. Inspection visuelle téléphone, tablette et ordinateur.
- FAQ testée au clic et au clavier ; fermeture de la réponse précédente ; menu mobile ouvert/fermé avec restitution du défilement ; toutes les images de l’accueil chargent.
- TypeScript et compilation de production réussis, 68 pages générées.
- Graphify mis à jour par `graphify update .` (AST uniquement).
- Aperçu local uniquement ; aucune publication effectuée. Ces vérifications préservent les bases techniques SEO, sans constituer une garantie de classement.
