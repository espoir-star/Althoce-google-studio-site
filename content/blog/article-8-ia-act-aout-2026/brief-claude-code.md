# Brief Claude Code — Publication Article #8

**Article** : IA Act : ce qui s'applique vraiment depuis le 2 août 2026 pour les PME françaises
**Slug** : `ia-act-aout-2026-pme-francaises-actions`
**Catégorie** : Juridique
**Date de publication (frontmatter)** : mardi 1er septembre 2026, 9h00 (`2026-09-01T09:00:00+02:00`)

## Étapes

1. Vérifier que les articles #1 à #7 répondent en production (HTTP 200 sur leurs URL canoniques)
2. Copier `content/blog/article-8-ia-act-aout-2026/article.md` vers l'emplacement conventionnel du blog (`content/blog/ia-act-aout-2026-pme-francaises-actions.md`)
3. Vérifier que `public/blog/covers/ia-act-aout-2026-cover.png` est présent (1200x630) et committé
4. Tests locaux (`npm run dev`) :
   - rendu de l'article et cover en hero
   - les 6 liens internes répondent, tous avec trailing slash : `/services/formation-ia/`, `/services/audit-ia/`, `/services/agents-ia/`, `/agent-ia/juridique/`, `/cas-clients/eti-agroalimentaire-agent-ia-juridique/`, `/contact/`
   - TOC sidebar : 8 H2 et 3 H3, hiérarchie correctement restituée
   - **Point d'attention** : l'article contient un tableau Markdown (calendrier des échéances reportées). Même vérification responsive que pour les articles #6 et #7. Si le fix `overflow-x-auto` a déjà été fait, rien à refaire.
   - Vérifier le rendu de la note de bas d'article en italique (disclaimer juridique), elle doit rester lisible et visuellement distincte du corps
5. `npx tsc --noEmit` puis `npm run build`
6. Vérifier le sitemap : l'article n'apparaît que si `publishedAt <= now`
7. Commit :
```
feat(blog): publication article #8 - IA Act, ce qui s'applique depuis le 2 aout 2026

Slug: ia-act-aout-2026-pme-francaises-actions
Categorie: Juridique
Cible SEO: requetes "ia act pme 2026", "ai act obligations entreprises", "litteratie ia article 4"
Objectif: actualite reglementaire, potentiel de backlinks cabinets juridiques et DPO
Dernier article du plan editorial du mois
```
8. Push sur `main` + validation du déploiement Vercel (HTTP 200 sur l'URL canonique)

## Spécificités de cet article

- **Angle rebasculé.** Le plan éditorial calibrait cet article pour une publication avant l'échéance du 2 août 2026. Cette date étant passée, l'article a été réécrit sur un registre rétrospectif : « ce qui s'applique depuis » plutôt que « ce qui arrive ». Le slug d'origine a été conservé car il reste pertinent en SEO.
- **Contenu périssable, à surveiller.** C'est le seul article du calendrier dont les faits peuvent bouger à court terme. Deux points à revoir :
  - la désignation des autorités compétentes françaises au titre de l'article 70, non finalisée à date de rédaction
  - l'échéance de décembre 2026 sur les nouvelles pratiques interdites
  Prévoir une revue en novembre 2026 et mettre à jour `updatedAt` le cas échéant.
- **Deuxième article de catégorie `Juridique`** (après l'article #4 cabinets d'avocats). Vérifier que le filtre du hub blog affiche bien les deux.
- **Maillage entrant recommandé** : lier cet article depuis `/agent-ia/juridique/` et depuis l'article #3 (guide RGPD ChatGPT/Claude/Mistral), qui traite un sujet de conformité adjacent. À faire dans un commit séparé.
- **Disclaimer juridique** : la note de bas d'article précise que le contenu ne constitue pas un conseil juridique. Ne pas la supprimer lors de l'intégration.

## Actions manuelles post-publication (user)

1. Search Console → URL Inspection → demander l'indexation
2. LinkedIn : publier le post (`linkedin-post.md`) à 9h05 le jour de la publication, lien en 1er commentaire, mot-clé DM « IA-ACT »
3. GBP : créer un post Actualité avec la cover et un résumé court pointant vers l'article
4. Mettre à jour `graphify` si des fichiers de code ont été modifiés (`graphify update .`)

## Fin du plan éditorial du mois

Cet article clôt les 8 articles du plan `PLAN-EDITORIAL-1-MOIS.md`. Une proposition de calendrier M+1 fondée sur les données Search Console a été livrée dans `PLAN-EDITORIAL-M2-PROPOSITION.md`. **Aucun article M+1 ne doit être rédigé avant validation explicite de Vincent.**
