# Brief Claude Code — Publication Article #5

**Article** : Automatiser la fonction achats avec l'IA : 6 cas d'usage pour PME et ETI en 2026
**Slug** : `automatiser-fonction-achats-ia-2026`
**Catégorie** : Opérations
**Date de publication (frontmatter)** : jeudi 20 août 2026, 9h00 (`2026-08-20T09:00:00+02:00`)

## ⚠️ Note sur la date

Cet article contient une échéance réglementaire au **1er septembre 2026** (obligation de réception des factures électroniques). Il perd une partie de sa force d'accroche après cette date.

- **Si l'intégration a lieu avant le 1er septembre** : publier tel quel, c'est le créneau optimal
- **Si l'intégration a lieu après le 1er septembre** : basculer les formulations « à compter du 1er septembre » vers « depuis le 1er septembre » (2 occurrences dans la section « Le déclencheur de 2026 »), puis ajuster `publishedAt` au prochain créneau du calendrier

Demander à l'utilisateur avant l'intégration.

## Étapes

1. Vérifier que les articles #1 à #4 répondent en production (HTTP 200)
2. Copier `content/blog/article-5-achats/article.md` vers l'emplacement conventionnel du blog (`content/blog/automatiser-fonction-achats-ia-2026.md`)
3. Vérifier que `public/blog/covers/automatiser-achats-ia-cover.png` est présent (1200x630) et committé
4. Tests locaux (`npm run dev`) :
   - rendu de l'article et cover en hero
   - les 5 liens internes répondent : `/agent-ia/achats/`, `/services/agents-ia/`, `/cas-clients/eti-industrielle-agent-ia-achats/`, `/services/audit-ia/`, `/contact/` (tous avec trailing slash)
   - TOC sidebar : l'article compte 11 H2, le sommaire doit tous les lister
5. `npx tsc --noEmit` puis `npm run build`
6. Vérifier le sitemap : l'article n'apparaît que si `publishedAt <= now`
7. Commit :
```
feat(blog): publication article #5 - Automatiser les achats avec l'IA 2026

Slug: automatiser-fonction-achats-ia-2026
Catégorie: Opérations
Cible SEO: requêtes "automatiser achats ia", "ia fonction achats", "sourcing fournisseurs ia"
Boost: /agent-ia/achats/ (52 impressions, position 44)
```
8. Push sur `main` + validation du déploiement Vercel (HTTP 200 sur l'URL canonique)

## Spécificités de cet article

- **Catégorie `Opérations`** : vérifier qu'elle est reconnue par le filtre de catégories du hub blog (attention à l'accent dans le slug de catégorie, prévoir `operations` côté URL si le hub génère des routes par catégorie).
- **Article d'actualité réglementaire** : à re-vérifier au 1er septembre 2026 et à mettre à jour si le calendrier officiel de la facturation électronique bouge. Ajouter `updatedAt` à cette occasion.
- **Maillage à compléter plus tard** : quand l'article #6 (temps de déploiement d'un agent IA) sera publié, ajouter un lien depuis la section « Par où commencer selon votre situation ».

## Actions manuelles post-publication (user)

1. Search Console → URL Inspection → demander l'indexation
2. LinkedIn : publier le post (`linkedin-post.md`) à 9h05 le jour de la publication, lien en 1er commentaire, mot-clé DM « ACHATS-IA »
3. GBP : créer un post Actualité avec la cover et un résumé court pointant vers l'article
4. Mettre à jour `graphify` si des fichiers de code ont été modifiés (`graphify update .`)
