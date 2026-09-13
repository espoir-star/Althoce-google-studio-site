# Brief Claude Code — Publication Article #4

**Article** : IA dans les cabinets d'avocats : 5 automatisations qui fonctionnent vraiment en 2026
**Slug** : `ia-cabinets-avocats-5-automatisations-2026`
**Catégorie** : Juridique
**Date de publication (frontmatter)** : mardi 18 août 2026, 9h00 (`2026-08-18T09:00:00+02:00`)

## ⚠️ Note sur la date

Si l'intégration a lieu après le 18 août, deux options :
- **Option 1 (recommandée)** : mettre à jour `publishedAt` au prochain créneau du calendrier (mardi ou jeudi 9h à venir) pour préserver la cadence éditoriale
- **Option 2** : laisser la date passée, l'article devient immédiatement visible au déploiement

Demander à l'utilisateur quelle option retenir avant l'intégration.

## Étapes

1. Vérifier que les articles #1, #2 et #3 répondent en production (HTTP 200)
2. Copier `content/blog/article-4-cabinets-avocats/article.md` vers l'emplacement conventionnel du blog (même pattern que les articles déjà intégrés, soit `content/blog/ia-cabinets-avocats-5-automatisations-2026.md`)
3. Vérifier que `public/blog/covers/ia-cabinets-avocats-cover.png` est présent (1200x630) et committé
4. Tests locaux (`npm run dev`) :
   - rendu de l'article et cover en hero
   - les 7 liens internes répondent : `/blog/chatgpt-claude-mistral-rgpd-guide-2026/`, `/services/agents-ia/`, `/agent-ia/telephonique/`, `/cas-clients/cabinet-avocats-agent-ia-telephonique/`, `/agent-ia/juridique/`, `/services/audit-ia/`, `/contact/` (tous avec trailing slash)
   - TOC sidebar : l'article compte 10 H2, le sommaire doit tous les lister
5. `npx tsc --noEmit` puis `npm run build`
6. Vérifier le sitemap : l'article n'apparaît que si `publishedAt <= now`
7. Commit :
```
feat(blog): publication article #4 - IA cabinets d'avocats 2026

Slug: ia-cabinets-avocats-5-automatisations-2026
Catégorie: Juridique
Cible SEO: requêtes "ia pour cabinets avocats", "automatisation cabinet avocat", "guide cnb ia avocat"
Boost: /agent-ia/juridique/ (58 impressions, position 16)
```
8. Push sur `main` + validation du déploiement Vercel (HTTP 200 sur l'URL canonique)

## Spécificités de cet article

- **Lien croisé blog → blog** vers l'article #3 (guide RGPD). Vérifier que le maillage inter-articles s'affiche correctement et que le lien n'est pas réécrit sans trailing slash.
- **Catégorie `Juridique`** : première utilisation. Vérifier qu'elle est bien reconnue par le filtre de catégories du hub blog et qu'elle apparaît dans la liste des filtres.
- Section « Ce qui arrive le 2 août 2026 » : elle annonce l'article #8 (IA Act). Une fois l'article #8 publié, revenir ajouter le lien interne vers celui-ci.

## Actions manuelles post-publication (user)

1. Search Console → URL Inspection → demander l'indexation
2. LinkedIn : publier le post (`linkedin-post.md`) à 9h05 le jour de la publication, lien en 1er commentaire, mot-clé DM « AVOCAT-IA »
3. GBP : créer un post Actualité avec la cover et un résumé court pointant vers l'article
4. Mettre à jour `graphify` si des fichiers de code ont été modifiés (`graphify update .`)
