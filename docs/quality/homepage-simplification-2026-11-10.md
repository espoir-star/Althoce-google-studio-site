# Accueil simplifié — 10 novembre 2026

## Périmètre

Alléger l’accueil sans changer le positionnement, l’identité visuelle ou l’architecture du site. Travail sur la branche de La Centrale, pour la PR 12 et son aperçu Vercel uniquement. Aucune fusion ni publication en production.

## Parcours final

1. Positionnement, rendez-vous, photo de bureau et logos existants.
2. Quatre services avec une phrase par accompagnement. Formation mise en deuxième position. La Centrale devient un encart court ; les neuf métiers sont accessibles dans un volet dépliable.
3. Un cas client principal avec une seule mesure contextualisée. Trois liens sobres conservent l’accès aux autres cas.
4. Méthode et présentation du cabinet réunies : photo existante, quatre étapes courtes et lien À propos.
5. Quatre questions immédiatement proposées ; huit autres accessibles à la demande. Toutes les réponses sont conservées.
6. Appel final au pré-audit. Le catalogue défilant qui suivait cet appel est retiré de l’accueil.

Les composants communs, catalogues des services, pages détaillées et défilements utilisés sur les autres pages ne changent pas. Les styles du défilement commun sont conservés à l’identique. Aucun nouveau script interactif, dépendance ou visuel à télécharger.

## Formulations éditoriales proposées

Ces textes synthétisent les contenus existants ; ils ne créent pas de nouvelle offre, garantie ou mesure de résultat.

- « Nos services IA. Votre point de départ. »
- « Former, cadrer, intégrer : nous choisissons avec vous ce qui aide votre équipe, selon vos outils et vos responsabilités. »
- Diagnostic : « Identifier les usages utiles, les données sensibles et les priorités de votre projet. »
- Formation : « Pratiquer sur vos situations métier, apprendre à vérifier les réponses et protéger les données. »
- Déploiement : « Créer des agents IA et des automatisations sur mesure, reliés à vos outils et validés avec vous. »
- Pilotage : « Entretenir vos solutions et ajuster les usages avec vos équipes, selon le suivi convenu. »
- La Centrale : « La Centrale : vos agents IA, chez vous. » ; « Une plateforme sur mesure, reliée à vos outils et hébergée en France ou sur vos serveurs. Althoce l’installe et accompagne vos équipes. »
- Cas client : « Ce que l’IA change, sur le terrain. » ; « Un exemple concret, à l’échelle d’une équipe. » ; « Plus de dossiers. La même attention aux clients. » ; « La préparation des factures et des rapprochements laisse davantage de place à la vérification et au conseil. »
- La capacité « ×2, à effectif constant » était déjà publiée et validée par l’utilisateur. La précision « Résultat observé dans ce cabinet » la contextualise ; ce n’est pas une promesse générale.
- Méthode : « Vos dossiers sont sensibles. Vos décisions engagent votre responsabilité. Nous construisons avec vous, puis transmettons les bons réflexes à votre équipe. »
- Étapes : « Écouter vos équipes, vos priorités et vos exigences. » ; « Choisir les outils, les accès et les données autorisées. » ; « Tester sur vos cas et former les personnes qui les utilisent. » ; « Faire le bilan et définir ensemble les évolutions utiles. »
- FAQ : « Avant de faire le premier pas. » ; « L’accompagnement, les données et le budget : quelques réponses pour vous situer. »

Le H1, les textes de positionnement, les titres des quatre services, les titres des étapes, les questions/réponses et l’appel final proviennent des contenus existants. Les libellés des liens décrivent leurs destinations.

## Référencement conservé et corrections

- Titre SEO, description, ensemble des balises meta, canonical et H1 inchangés, vérifiés par comparaison du HTML compilé avant/après.
- Les 81 destinations internes uniques présentes dans l’accueil complet avant changement sont conservées. Les 81 pages cibles sont générées dans le build.
- Les 12 questions/réponses restent dans le HTML initial et concordent avec le JSON-LD FAQPage inchangé, même lorsqu’elles sont repliées.
- Un seul H1 ; cinq H2 au lieu de neuf. Les ancres services, approche, decouvrir-la-centrale, agents, cases, method, cabinet, faq et pricing restent valides. Identifiants uniques.
- Schémas Organization et WebSite inchangés. ProfessionalService : correction de l’image absente `/og-image.png` vers l’image existante `/og-default.png` ; retrait de la note 5/5 et des 50 avis sans preuve présentée sur la page. Le reste du schéma est inchangé.
- Aucun changement d’URL, de sitemap, de robots ou de règle d’indexation. Ces contrôles préservent les fondations techniques ; ils ne garantissent pas les positions dans les moteurs.

## Vérifications

- Compilation de production et TypeScript réussis.
- Six largeurs de navigateur : 320, 375, 390, 768, 1024 et 1440 px. Aucun débordement horizontal du document ni des titres, textes, liens et images de l’accueil.
- Cartes des services en une colonne sur téléphone ; quatre sur grand écran. Revue visuelle du hero, des services, du cas client, de la méthode et de la FAQ.
- Ouverture des métiers et des FAQ au clavier, accès aux réponses supplémentaires, focus visible et absence de débordement une fois les volets ouverts.
- Lien La Centrale vérifié depuis l’encart ; destinations des autres liens conservées. Aucun formulaire envoyé.
- Sur les mesures locales avant/après, hors footer et volets fermés : environ 6 049 → 3 869 px de hauteur sur grand écran ; 9 443 → 5 924 px sur téléphone. Environ 36 à 37 % de défilement en moins. Les valeurs dépendent des polices et de la fenêtre ; ce ne sont pas des mesures de performance terrain.
- `git diff --check` et `graphify update .` exécutés.
