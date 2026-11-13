# Secteur public & collectivités
13 novembre 2026. Branche `codex/secteurs-metiers-20261110`. Aperçu uniquement.

## Livraison
- Nouvelle route `/secteurs/secteur-public/`, avec le composant partagé des pages secteurs.
- Présente la formation des agents publics et la conception d’agents IA sur mesure.
- Quatre exemples : courriers aux usagers, complétude avant instruction, notes de réunion et recherche dans les procédures internes.
- Six FAQ : petites collectivités, formation, outils existants, données, décisions et hébergement.
- Ajout au menu Solutions, au répertoire des secteurs et au footer via les données partagées. Sitemap et métadonnées générés par les routes existantes.
- Pas de guide fictif, de résultat chiffré ni de référence client inventée. Aucun renvoi vers une fonction commerciale non pertinente.
- Formation illustrée par un visuel existant, inspecté puis réutilisé.

## Contenu à valider
Les scénarios sont des propositions à adapter lors du cadrage, pas des déploiements attestés. Les personnes habilitées restent responsables de l’instruction et des décisions ; la préparation de pièces ne vaut pas autorisation. Les outils, accès, données et hébergement sont à cadrer avec les responsables métiers, la DSI et le DPO. Aucun label, financement ou certification n’est revendiqué.
Le titre et les exemples reprennent le positionnement autorisé d’Althoce et des situations de travail, sans affirmer d’équivalence avec les solutions publiques existantes.

## Sources de contexte
- DINUM, L’Assistant : https://ia.numerique.gouv.fr/cas-dusage-de-lia-dans-letat/lassistant/
- DINUM, Guide d’usage de l’IA pour les agents publics de l’État : https://ia.numerique.gouv.fr/ressources/guide-dusage-de-lia/
Consultées le 13 novembre 2026. Ces références éclairent les usages documentaires, la formation et la validation des productions. Elles ne démontrent aucun résultat d’Althoce ni une conformité du service.

## Visuel créé
Mode : outil intégré de génération d’images ChatGPT. Une génération originale, sans image de référence, inspectée puis convertie en WebP.
Fichier final : `public/images/sectors/secteur-public-equipe.webp`.
Dimensions : 1 400 × 933. Poids : 98 638 octets. Scène éditoriale fictive ; aucun client identifiable.
Source conservée : `/Users/espoirmwami/.codex/generated_images/01a091fa-0c84-7b62-b053-9d649a642659/exec-8e66193e-0357-4973-86bc-e55f7c66fbe5.png`.

### Prompt final
Use case: photorealistic-natural. Asset: editorial hero photograph for the Public Sector & Local Authorities page of Althoce, a French AI consultancy. Create a landscape 3:2 candid scene in the practical back office of a French town hall: three adult public-service colleagues of varied ages, a woman service manager in her late 40s, a male administrative officer in his 30s and a female reception colleague in her 50s, preparing a response to a citizen request together. Seated and standing naturally around a modest tidy desk, one person consulting a laptop angled away, another pointing to a paper dossier, a few envelopes and simple document trays. Through an interior glass partition we glimpse an unoccupied reception counter and waiting chairs, establishing the public service setting without a grand ceremonial council room. Authentic everyday workplace, thoughtful expressions, professional but relaxed clothes in navy and muted blue. Cool clear daylight, pale sky-blue whites, natural wood, subtle cinematic 35mm film grain, natural skin texture, believable hands, editorial documentary realism. Medium wide shot, people in the central crop so mobile cropping works. No readable names, no personal data, no logos, no official seal, no flag, no government insignia, no text overlay, no robots, no holograms, no glowing UI, no stock-photo posing or direct smile at camera, no watermark. This is an illustrative fictional work scene, not a portrait of an identifiable client.

## Vérification
- TypeScript et build final : PASS. 115 entrées générées.
- Audit du HTML final :
```json
{
  "pages": 30,
  "internal_links": 2639,
  "faq_answers": 134,
  "status": "PASS"
}
```
- Canonical, H1 unique, métadonnées, sitemap, textes alternatifs, liens et FAQ visible/JSON-LD contrôlés.
- Navigateur : 320, 375, 768 et 1 280 px. Aucun débordement horizontal observé. Deux images chargées.
- Menu Solutions sur ordinateur et mobile : entrée Secteur public fonctionnelle, défilement du panneau contenu dans l’écran, fermeture après navigation.
- Carte du répertoire des secteurs vérifiée. Lien d’ancre vers les quatre usages et FAQ formation au clavier contrôlés.
- Aucune erreur ni avertissement console observé.
- `graphify update .` exécuté après les dernières modifications.
- Aucune modification des API ou des formulaires. Aucune fusion en production.
