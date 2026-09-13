# Brief Claude Code — Publication Article #2

**Article** : Agence IA à Lille : 7 critères pour choisir son partenaire en 2026
**Date de publication** : jeudi 2 juillet 2026, 9h00 (heure de Paris)
**Slug** : `agence-ia-lille-choisir-partenaire-2026`

---

## Avant tout

**Pré-requis** : la publication de l'article #1 (cabinets comptables) doit être en place et fonctionnelle. Si l'article #1 a posé des problèmes d'intégration, les résoudre avant de publier celui-ci.

---

## Étapes d'intégration

### Étape 1 — Vérification préalable

Confirmer que le système de blog dynamique est en place et que l'article #1 s'affiche correctement en production sur :
- `https://althoce.com/blog/ia-cabinets-comptables-petits-cas-usage-2026/`

Si cet article ne renvoie pas un HTTP 200 propre, ne pas publier le #2.

### Étape 2 — Création du fichier article

Copier le contenu de `content/blog/article-2-agence-ia-lille/article.md` vers l'emplacement attendu par le système, en suivant la même convention que pour l'article #1 :

```
content/blog/agence-ia-lille-choisir-partenaire-2026.md
```

ou la convention utilisée pour l'article #1 si elle diffère.

### Étape 3 — Vérifier que la cover est en place

Le fichier `public/blog/covers/agence-ia-lille-cover.png` doit déjà être committé. Vérifier :

```bash
ls -la public/blog/covers/agence-ia-lille-cover.png
```

Si absent, copier depuis le dossier de livraison.

### Étape 4 — Vérification locale

```bash
npm run dev
```

Ouvrir : `http://localhost:3000/blog/agence-ia-lille-choisir-partenaire-2026/`

Vérifier visuellement que :
- L'article s'affiche correctement
- La cover s'affiche en hero (image 1200×630 avec logo Althoce + badge LOCAL)
- Les liens internes fonctionnent (5 liens vers `/services/agents-ia/`, `/services/formation-ia/`, `/contact/`, `/agent-ia/`, `/services/`, `/agence-ia-lille/`)
- Le titre dans l'onglet ne contient PAS « Althoce | Althoce » (si fix titres dupliqués déployé)
- La meta description s'affiche correctement
- Le JSON-LD Article est généré
- L'image OG est bien la cover de l'article

### Étape 5 — Build complet

```bash
npx tsc --noEmit
npm run build
```

Les deux commandes doivent passer sans erreur. Si erreur, **stopper et signaler**.

### Étape 6 — Tests post-build

```bash
# Sitemap : l'URL de l'article doit y apparaître
curl -s http://localhost:3000/sitemap.xml | grep "agence-ia-lille-choisir-partenaire"

# Réponse HTTP de l'article
curl -sI http://localhost:3000/blog/agence-ia-lille-choisir-partenaire-2026/ | head -3

# Vérification du title
curl -s http://localhost:3000/blog/agence-ia-lille-choisir-partenaire-2026/ | grep -oE '<title>[^<]+</title>'

# Vérification de la cover dans l'OG
curl -s http://localhost:3000/blog/agence-ia-lille-choisir-partenaire-2026/ | grep 'og:image'
```

### Étape 7 — Commit et push

```bash
git add content/blog/ public/blog/covers/
git commit -m "feat(blog): publication article #2 - Agence IA Lille 7 critères 2026

Article publié dans le cadre du calendrier éditorial mensuel.
Slug: agence-ia-lille-choisir-partenaire-2026
Catégorie: Local (SEO local Hauts-de-France)
Cible SEO: /agence-ia-lille/ (115 impressions, position 27 → top 10)
Mots-clés: agence ia lille, agence intelligence artificielle lille, consultant ia lille"

git push origin main
```

### Étape 8 — Validation production

Attendre 2-3 minutes que Vercel build, puis :

```bash
curl -sI https://althoce.com/blog/agence-ia-lille-choisir-partenaire-2026/ -w "HTTP %{http_code}\n"
```

Le code doit être 200.

---

## Liens internes intégrés

L'article contient 6 liens internes stratégiques. Vérifier qu'ils sont bien rendus :

1. `/services/agents-ia/` — Page service principale
2. `/services/formation-ia/` — Service formation
3. `/contact/` — CTA 30 minutes offertes
4. `/agent-ia/` — Hub des agents par métier
5. `/services/` — Hub services
6. `/agence-ia-lille/` — Page SEO local Lille (la page boostée)

**Important** : tous les liens doivent avoir le trailing slash `/` final.

---

## Actions manuelles post-publication (non automatisables)

1. **Search Console** : inspection de l'URL pour `https://althoce.com/blog/agence-ia-lille-choisir-partenaire-2026/` → Demander une indexation

2. **LinkedIn** : publier le post LinkedIn à 9h05 (compte personnel). Mettre le lien en 1er commentaire. Préparer le DM avec « LILLE-IA » comme mot-clé.

3. **LinkedIn Post Inspector** : tester l'URL pour vérifier le preview avec la nouvelle cover.

---

## Points de vigilance

- **Ne PAS modifier** le contenu de l'article. Frontmatter et markdown prêts à publier.
- **Ne PAS modifier** la cover. Brand-aligned avec badge LOCAL.
- **Ne PAS publier en avance**. La date du frontmatter (`2026-07-02T09:00:00+02:00`) doit être respectée.
- **Si erreur de build**, stopper et reporter avant de pousser.

---

*Brief généré le 26 juin 2026 par Althoce pour publication automatisée.*
