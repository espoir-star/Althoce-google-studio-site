# Vérification après modifications — 14 septembre 2026

- Site public : les 63 pages de l’ancien sitemap répondent en HTTP 200 sur leurs URLs canoniques. Titres, descriptions et H1 présents ; un H1 par page.
- 45 pages avec FAQ : questions et réponses concordantes entre le HTML visible et le JSON-LD.
- Liens internes des pages compilées : aucune destination inconnue ; ancres entre les pages du sitemap contrôlées.
- Tests API avec webhooks simulés et contrôle TypeScript réussis. Audit npm : zéro vulnérabilité signalée. Compilation de production réussie après correction.
- En-têtes de sécurité constatés en production : CSP de base, nosniff, anti-framing, politique de référent, permissions et HSTS.
- Vérification responsive en production : accueil, Services, À propos, Commercial, Fondamentaux, Avancée, Coaching et Calculateur à 320/768/1440 px. Pas de débordement persistant ; une mesure transitoire du calculateur pendant le chargement était positive, son rendu stabilisé à 320 px a été recontrôlé sans débordement.
- Menu mobile : ouverture et fermeture Échap vérifiées. FAQ de formation ouverte au clavier. Blanc des trois paragraphes du scénario Commercial confirmé par style calculé, et couleurs des cartes Services contrôlées.

## Correction apportée

Les pages Mentions légales et Confidentialité étaient déjà volontairement en noindex mais figuraient dans le sitemap. Elles en sont exclues ; le sitemap contient désormais 61 URLs indexables. Elles restent accessibles aux visiteurs et depuis le footer. Les dates lastModified artificiellement renouvelées à chaque génération pour les pages statiques sont également supprimées ; les dates de publication des articles sont conservées.

## Limites

Aucune soumission réelle de formulaire ni prise de rendez-vous. Le traitement n8n/Apps Script en aval, les données Search Console et les indicateurs de performance terrain ne sont pas validés par ces contrôles. Les tests responsive portent sur huit pages représentatives, pas sur chaque interaction de chaque page.
