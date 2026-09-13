# Althoce

Site du cabinet Althoce : services IA sur mesure, formations, cas clients, implantations et articles. Application Next.js 15 (App Router), React 19, TypeScript, Tailwind et CSS Modules.

## Démarrer

Node.js 22 et npm sont nécessaires.

```sh
npm ci
cp .env.example .env.local
npm run dev
```

Ouvrir http://localhost:3000. Les pages fonctionnent sans webhook ; les formulaires renvoient une indisponibilité tant que les deux adresses HTTPS ne sont pas configurées dans `.env.local`.

## Commandes

```sh
npm run test:security # Tests des API avec webhooks simulés, aucun envoi externe
npm run typecheck    # Vérification TypeScript
npm run build        # Compilation et génération des pages
npm run start        # Serveur de production après compilation
npm audit            # Vulnérabilités connues des dépendances verrouillées
```

Le fichier `package-lock.json` doit être versionné. Une surcharge ciblée de PostCSS pour Next corrige une dépendance transitive vulnérable sans migration majeure du framework. Voir [le rapport de sécurité](docs/security/audit-2026-09-13.md).

## Organisation

| Dossier | Contenu |
| --- | --- |
| `app/` | Routes, métadonnées SEO, sitemap, API et styles globaux |
| `components/` | Composants ; sous-dossiers par famille de pages |
| `lib/` | Contenus structurés, calculateur, lecture du blog, sécurité des formulaires |
| `content/blog/` | Articles Markdown et ressources éditoriales |
| `content/refonte/` | Suivi et validations de la refonte |
| `content/` | Direction éditoriale, plans et documents de travail actifs |
| `public/` | Uniquement les fichiers destinés à être accessibles publiquement |
| `scripts/` | Vérifications reproductibles |
| `docs/` | Documentation technique et archives de briefs |
| `docs/ci/quality.yml` | Modèle des contrôles GitHub Actions, à activer ultérieurement |

Les anciennes entrées AI Studio et les briefs historiques sont conservés dans `docs/archive/`. Les répertoires locaux d’agents, secrets, dépendances et fichiers de compilation sont exclus de Git. Les chemins des contenus actifs de la refonte sont conservés pour les tâches planifiées.

## Ajouter un article

Partir de `content/blog/_template.md`. Conserver un slug unique, les métadonnées et les liens canoniques. Le rendu partagé est fourni par `app/blog/[slug]/page.tsx` et `components/blog/Blog.module.css`. Les contenus Markdown/HTML sont considérés comme du code de confiance : relire toute contribution avant fusion. Les dates futures et `published: false` empêchent l’affichage sur le site, mais **pas la lecture dans un dépôt GitHub public**.

## GitHub et hébergement

GitHub versionne le code. Les API de formulaires nécessitent un hébergeur Next.js avec runtime Node (Vercel ou serveur Node) ; GitHub Pages seul ne les exécute pas.

1. Créer de préférence un dépôt privé : les briefs, brouillons et historiques peuvent contenir des informations internes.
2. Examiner `git status` et le diff avant le premier commit. Ne jamais ajouter `.env.local` ni des URL privées de webhook dans le code.
3. Importer le dépôt chez l’hébergeur : installation `npm ci`, compilation `npm run build`, framework Next.js, Node 22.
4. Configurer `N8N_LEAD_WEBHOOK_URL` et `ROI_LEAD_WEBHOOK_URL` comme secrets serveur (jamais de préfixe `NEXT_PUBLIC_`). Pour les previews, utiliser des destinations de test séparées ou laisser les variables absentes.
5. Configurer domaine et HTTPS. Les URLs canoniques restent `https://althoce.com/`, avec slash final et redirection de `www`.
6. Activer une limite distribuée au niveau du pare-feu/proxy sur les POST `/api/contact/` et `/api/roi-lead/`. Le proxy doit écraser les en-têtes IP fournis par le client.
7. Vérifier un véritable envoi de chaque formulaire après mise en place d’un environnement de test. Le webhook ROI doit confirmer par HTTP 2xx et JSON `{"ok":true}` ; un corps vide ou une page HTML ne sont pas une confirmation.

Le pixel Meta est chargé uniquement après acceptation. Le bouton « Gérer les cookies » du footer permet de revoir le choix.

Aucun déploiement ni push n’est effectué par les scripts de ce dépôt.

## Activer les contrôles GitHub Actions

Le modèle est conservé dans `docs/ci/quality.yml`. La connexion utilisée pour le push ne dispose pas du droit `workflow` : aucun workflow automatique n’est actif à ce stade. Avec un accès approprié, placer ce fichier dans `.github/workflows/quality.yml` pour activer les tests, l’audit npm et la compilation à chaque push et pull request.
