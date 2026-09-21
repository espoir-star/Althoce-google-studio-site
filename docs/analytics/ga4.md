# Mesure GA4 — Althoce

Configuration du 21 septembre 2026 : compte **Althoce** (408925332), propriété **Althoce — Site et ressources** (555251705), flux Web **Althoce — Site et guides** (15818713199). ID public : **G-W5TVSFJ2YX**. Fuseau horaire France, devise EUR.

## Installation

Le site et le dépôt `capture-leads` utilisent directement gtag.js. L'ancien conteneur GTM-NZHSZCF7 a été retiré de l'ajout local non publié du dépôt de capture. Aucun chargement de ce conteneur n'a été trouvé dans le code du site principal.

Le code de suivi est dans `lib/analytics.ts`. La variable publique `NEXT_PUBLIC_GA_MEASUREMENT_ID` peut remplacer l'ID par défaut ; une chaîne vide désactive GA4. Ce n'est pas un secret et aucune clé privée Google n'est nécessaire.

Google Analytics se charge après acceptation de la bannière. Le retrait du consentement désactive le suivi, efface les cookies `_ga*` accessibles au site et recharge la page. Les deux domaines conservent leur choix de consentement séparément. Sur les captures, la nouvelle bannière concerne GA4 ; elle ne change pas l'installation Meta préexistante.

## Événements

- `page_view` : première page acceptée puis chaque changement de chemin, sans doublon de montage React.
- `generate_lead` : uniquement après réponse positive de l'API, avec `lead_type` = `contact`, `roi` ou `guide`.
- `resource_slug` : identifiant public du guide, uniquement pour les demandes de guides.

Aucun nom, email, téléphone, entreprise, budget ou message du formulaire n'est envoyé par ce code à GA4. Les paramètres et fragments des URL de page et du référent sont retirés. Cela exclut aussi les paramètres UTM des URL transmises. Aucune valeur financière n'est inventée.

## Configuration Analytics

Les mesures améliorées sont désactivées afin de laisser le code gérer les pages vues et les soumissions réussies. Ne pas réactiver la détection automatique de formulaires ou d'historique sans revoir la déduplication.

Mesure multidomaine : correspondance exacte de `althoce.com` et `guide-gratuit-pi.vercel.app`. Les visiteurs doivent accepter le suivi sur chaque site ; cette configuration ne transfère pas le consentement.

`generate_lead` est à utiliser comme événement clé, une fois par événement, sans valeur monétaire par défaut. Les paramètres `lead_type` et `resource_slug` peuvent être enregistrés comme dimensions personnalisées pour segmenter les rapports.

## Vérification

`node scripts/test-analytics.mjs` : tests sans réseau du consentement, de la déduplication, des conversions, du nettoyage des URL et du retrait.

`npm run test:security` et `npm run build` pour le site. `npx tsc --noEmit` et `npm run build` pour les captures. Vérifier en navigateur l'absence de script Google avant consentement, son ajout unique après acceptation et sa disparition après retrait.

Ne pas envoyer de faux formulaires en production pour tester : ils alimentent les outils commerciaux. La réception réelle de `generate_lead` sera à vérifier lors de la prochaine demande légitime consentie.
