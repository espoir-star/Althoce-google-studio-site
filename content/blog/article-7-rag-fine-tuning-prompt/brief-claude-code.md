# Brief Claude Code — Publication Article #7

**Article** : RAG, fine-tuning, prompt engineering : 3 concepts IA expliqués simplement pour décideurs PME
**Slug** : `rag-fine-tuning-prompt-engineering-explique-decideurs`
**Catégorie** : Guide
**Date de publication (frontmatter)** : jeudi 27 août 2026, 9h00 (`2026-08-27T09:00:00+02:00`)

## Étapes

1. Vérifier que les articles #1 à #6 répondent en production (HTTP 200 sur leurs URL canoniques)
2. Copier `content/blog/article-7-rag-fine-tuning-prompt/article.md` vers l'emplacement conventionnel du blog (`content/blog/rag-fine-tuning-prompt-engineering-explique-decideurs.md`)
3. Vérifier que `public/blog/covers/rag-fine-tuning-prompt-cover.png` est présent (1200x630) et committé
4. Tests locaux (`npm run dev`) :
   - rendu de l'article et cover en hero
   - les 6 liens internes répondent, tous avec trailing slash : `/services/formation-ia/`, `/services/developpement-ia/`, `/services/agents-ia/`, `/services/chatbot-ia/`, `/services/audit-ia/`, `/contact/`
   - TOC sidebar : l'article compte 8 H2 et 10 H3, vérifier que la hiérarchie H2/H3 est correctement restituée (c'est l'article avec le plus de H3 du blog, bon test de la profondeur du sommaire)
   - **Point d'attention** : cet article contient un tableau Markdown (règle de décision). Même vérification responsive que pour l'article #6. Si le fix `overflow-x-auto` a été fait sur l'article #6, rien à refaire.
5. `npx tsc --noEmit` puis `npm run build`
6. **Slug long** (52 caractères) : vérifier qu'il ne casse pas l'affichage des cartes du hub blog ni le fil d'Ariane. Contrôler aussi la longueur de l'URL canonique dans les balises `og:url` et `link rel=canonical`.
7. Vérifier le sitemap : l'article n'apparaît que si `publishedAt <= now`
8. Commit :
```
feat(blog): publication article #7 - RAG, fine-tuning et prompt engineering pour décideurs

Slug: rag-fine-tuning-prompt-engineering-explique-decideurs
Catégorie: Guide
Cible SEO: requêtes "rag fine-tuning prompt engineering", "rag entreprise expliqué", "choisir rag ou fine-tuning"
Objectif: pédagogie top funnel, contenu durable, faible concurrence éditoriale en français
```
9. Push sur `main` + validation du déploiement Vercel (HTTP 200 sur l'URL canonique)

## Spécificités de cet article

- **Article pilier pédagogique** : c'est le contenu top funnel le plus durable du calendrier. Candidat naturel à devenir une page de référence linkée depuis d'autres articles. À maillage entrant prioritaire dans les prochains articles.
- **Maillage retour recommandé** : ajouter un lien vers cet article depuis les pages `/services/chatbot-ia/` et `/services/developpement-ia/` (section explicative, si elle existe). À faire dans un commit séparé pour isoler la modification des pages services.
- **Deuxième article de catégorie `Guide`** : après l'article #6. Vérifier que le filtre du hub blog affiche bien les deux et que la pagination de la catégorie fonctionne.
- **Vérification factuelle** : l'article évoque l'évolution du prompt engineering vers l'ingénierie de contexte et le débat sur les grandes fenêtres de contexte. Ces éléments sont formulés sans chiffre ni nom de fournisseur, ils ne nécessitent pas de mise à jour à court terme. Revue annuelle suffisante.

## Actions manuelles post-publication (user)

1. Search Console → URL Inspection → demander l'indexation
2. LinkedIn : publier le post (`linkedin-post.md`) à 9h05 le jour de la publication, lien en 1er commentaire, mot-clé DM « RAG-IA »
3. GBP : créer un post Actualité avec la cover et un résumé court pointant vers l'article
4. Mettre à jour `graphify` si des fichiers de code ont été modifiés (`graphify update .`)

## Fin de calendrier

Il ne reste que l'article #8 (IA Act, catégorie Juridique) dans le plan éditorial du mois. **Point d'attention date** : l'article #8 était calibré pour une publication avant l'échéance du 2 août 2026, qui est désormais passée. Il faut donc rebasculer l'angle sur un registre « ce qui s'applique depuis le 2 août » plutôt que « ce qui arrive ». À signaler à l'utilisateur avant rédaction, avec la proposition d'un calendrier M+1 fondé sur les données Search Console.
