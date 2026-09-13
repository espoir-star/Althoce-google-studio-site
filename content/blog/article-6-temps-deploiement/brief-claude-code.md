# Brief Claude Code — Publication Article #6

**Article** : Combien de temps pour déployer un agent IA dans une PME ? Le vrai timing en 2026
**Slug** : `temps-deployer-agent-ia-pme-2026`
**Catégorie** : Guide
**Date de publication (frontmatter)** : mardi 25 août 2026, 9h00 (`2026-08-25T09:00:00+02:00`)

## Étapes

1. Vérifier que les articles #1 à #5 répondent en production (HTTP 200 sur leurs URL canoniques)
2. Copier `content/blog/article-6-temps-deploiement/article.md` vers l'emplacement conventionnel du blog (`content/blog/temps-deployer-agent-ia-pme-2026.md`)
3. Vérifier que `public/blog/covers/temps-deploiement-agent-ia-cover.png` est présent (1200x630) et committé
4. Tests locaux (`npm run dev`) :
   - rendu de l'article et cover en hero
   - les 6 liens internes répondent, tous avec trailing slash : `/services/audit-ia/`, `/services/integration-ia/`, `/services/agents-ia/`, `/agent-ia/`, `/cas-clients/distributeur-b2b-agent-ia-ops/`, `/contact/`
   - TOC sidebar : l'article compte 8 H2 et 4 H3, vérifier que le sommaire les liste dans le bon ordre
   - **Point d'attention spécifique** : cet article contient un tableau Markdown (calendrier récapitulatif). Vérifier son rendu responsive sur mobile, c'est le premier article du blog qui en contient un. Si le composant Markdown ne stylise pas les tables, ajouter une règle `prose` ou un wrapper `overflow-x-auto`.
5. `npx tsc --noEmit` puis `npm run build`
6. Vérifier le sitemap : l'article n'apparaît que si `publishedAt <= now`
7. Commit :
```
feat(blog): publication article #6 - Temps de déploiement d'un agent IA en PME

Slug: temps-deployer-agent-ia-pme-2026
Catégorie: Guide
Cible SEO: requêtes "combien temps deployer agent ia pme", "délai déploiement agent ia", "projet ia pme durée"
Objectif: long tail faible concurrence + réponse à objection commerciale classique
```
8. Push sur `main` + validation du déploiement Vercel (HTTP 200 sur l'URL canonique)

## Spécificités de cet article

- **Catégorie `Guide`** : première utilisation de cette catégorie sur le blog. Vérifier qu'elle est bien reconnue par le filtre de catégories du hub blog et que le badge s'affiche correctement (cover : badge `GUIDE`).
- **Maillage retour à ajouter** : l'article #5 (`automatiser-fonction-achats-ia-2026`) mentionne dans son brief qu'un lien vers cet article doit être ajouté depuis sa section « Par où commencer selon votre situation ». Le faire dans le même commit ou dans un commit de suivi.
- **Article durable** : pas d'échéance réglementaire, contenu valable plusieurs années. Les seuls éléments à rafraîchir un jour sont les chiffres d'adoption (Bpifrance Le Lab janvier 2026, baromètre France Num 2025). Prévoir une revue annuelle et mettre à jour `updatedAt` à cette occasion.
- **Vérification factuelle** : trois affirmations chiffrées sont sourcées dans le corps du texte (Bpifrance Le Lab, France Num, étude MIT 2025). Ne pas les modifier sans revérifier la source.

## Actions manuelles post-publication (user)

1. Search Console → URL Inspection → demander l'indexation
2. LinkedIn : publier le post (`linkedin-post.md`) à 9h05 le jour de la publication, lien en 1er commentaire, mot-clé DM « DELAI-IA »
3. GBP : créer un post Actualité avec la cover et un résumé court pointant vers l'article
4. Mettre à jour `graphify` si des fichiers de code ont été modifiés (`graphify update .`)
