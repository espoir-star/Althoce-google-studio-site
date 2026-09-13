# Brief Claude Code — Publication Article #3

**Article** : ChatGPT, Claude, Mistral : le guide RGPD 2026 pour utiliser l'IA en entreprise
**Slug** : `chatgpt-claude-mistral-rgpd-guide-2026`
**Date de publication (frontmatter)** : mardi 7 juillet 2026, 9h00 — **à ajuster** si la publication réelle est décalée (voir note ci-dessous)

## ⚠️ Note importante sur la date

Le frontmatter contient `publishedAt: "2026-07-07T09:00:00+02:00"`. Si l'intégration a lieu APRÈS le 7 juillet, deux options :
- **Option 1 (recommandée)** : mettre à jour `publishedAt` à la prochaine date de publication du calendrier (mardi ou jeudi 9h à venir) pour respecter la cadence éditoriale
- **Option 2** : laisser la date passée → l'article sera immédiatement visible au déploiement

Demander à l'utilisateur quelle date retenir avant l'intégration.

## Étapes

Suivre la même procédure que les articles #1 et #2 :

1. Vérifier que les articles #1 et #2 fonctionnent en production (HTTP 200)
2. Copier `content/blog/article-3-ia-rgpd-guide/article.md` vers l'emplacement convention du blog (même pattern que les 2 premiers articles intégrés)
3. Vérifier que `public/blog/covers/ia-rgpd-guide-cover.png` est présent et committé
4. Tests locaux : rendu de l'article, cover en hero, 3 liens internes (`/services/audit-ia/`, `/services/agents-ia/`, `/contact/`), TOC sidebar fonctionnelle (l'article a 9 H2 — le sommaire doit tous les lister)
5. `npx tsc --noEmit` + `npm run build`
6. Vérifier sitemap : l'article n'apparaît que si `publishedAt <= now`
7. Commit :
```
feat(blog): publication article #3 - Guide RGPD ChatGPT/Claude/Mistral 2026

Slug: chatgpt-claude-mistral-rgpd-guide-2026
Catégorie: Souveraineté
Cible SEO: requêtes "chatgpt rgpd entreprise", "claude rgpd", "ia conforme rgpd"
Boost: /agences/ (position 8.9 sur "agence ia souveraine france")
```
8. Push + validation production

## Spécificités de cet article

- **Tableau markdown** dans la section « Le tableau de synthèse » : vérifier que le rendu HTML du tableau est propre (responsive, scroll horizontal sur mobile si besoin)
- **11 min de lecture** : c'est le plus long article publié à ce jour — vérifier que la TOC gère bien la longueur (sticky + scroll)
- Catégorie `Souveraineté` : vérifier qu'elle est bien reconnue par le filtre du hub blog (ajouté lors des améliorations blog)

## Actions manuelles post-publication (user)

1. Search Console → URL Inspection → demander l'indexation
2. LinkedIn : publier le post (`linkedin-post.md`) à 9h05 le jour de la publication, lien en 1er commentaire, mot-clé DM « IA-RGPD »
3. GBP : créer un post Actualité avec la cover et un résumé court pointant vers l'article
