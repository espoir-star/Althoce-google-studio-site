# Corrections complémentaires — 16 septembre 2026

## Changements
- Images Open Graph et Twitter ajoutées aux hubs Guides et Secteurs.
- Vercel BotID Basic : vérification serveur des deux routes de leads, client initialisé avant les interactions, chemins avec/sans slash. Seuls les POST de leads sont protégés. Les échecs de vérification empêchent l’envoi aux webhooks. Aucun abonnement Deep Analysis activé.
- Limitation locale des requêtes conservée en complément ; elle ne devient pas une limite distribuée. La vérification BotID est effectuée par la plateforme.
- Tests : bots rejetés, vérification indisponible, humain accepté, absence d’envoi après rejet, validation des champs et erreurs de webhook.
- Police Plus Jakarta Sans variable WOFF2 servie localement, préchargement latin, licence OFL incluse. Suppression de la feuille Google Fonts bloquante.
- Logos clients et French Tech servis par Next Image, dimensions explicites et tailles adaptées.
- Contrastes renforcés : notes sectorielles, textes secondaires, vert de statut et erreurs du calculateur.

## Mesures avant
PageSpeed mobile, accueil : 83 performance, 100 accessibilité, 100 bonnes pratiques, 100 SEO. FCP 2,6 s, LCP 3,8 s, TBT 10 ms, CLS 0. Mesure de laboratoire en 4G lente ; absence de données terrain CrUX.
Rapport : https://pagespeed.web.dev/analysis/https-althoce-com/vvh9munazk?form_factor=mobile

## Vérification locale
Build 98 routes réussi ; tests sécurité réussis ; 28 nouvelles pages et sitemap de 89 URL vérifiés.
Contraste calculé sur les textes visibles à fond uni de 13 modèles : accueil, finance, droit, guides, formation Paris, hub formation, IA avancée, contact, ROI, cabinet, commercial, blog, cas clients. Après correction : aucune valeur inférieure aux seuils applicables détectée. Les fonds photographiques, dégradés, états interactifs et lecteurs d’écran nécessitent des contrôles complémentaires ; ceci n’est pas une certification WCAG intégrale.
Les huit logos sont chargés par le moteur d’optimisation. Police inchangée visuellement, sans requête Google Fonts.

Documentation BotID : https://vercel.com/docs/botid/get-started

## Mesures après publication
PageSpeed mobile, accueil : **96 performance**, **100 accessibilité**, **100 bonnes pratiques**, **100 SEO**. FCP **1,2 s**, LCP **2,1 s**, TBT **10 ms**, CLS **0**. Les scores sont ceux de cette exécution en laboratoire et peuvent varier.
Rapport : https://pagespeed.web.dev/analysis/https-althoce-com/s1nuhlksep?form_factor=mobile
Images Open Graph/Twitter confirmées sur Guides et Secteurs en production. Les deux POST de leads rejettent une requête automatisée vide par HTTP 403 ; aucun contact transmis aux webhooks. Contrastes corrigés revérifiés en ligne sur Finance et le calculateur.
La politique de confidentialité décrit désormais BotID et l’usage effectif du pixel publicitaire sous consentement. Le formulaire affiche la cause de rejet renvoyée par le serveur pour faciliter la correction des champs et les éventuels problèmes anti-bot.
