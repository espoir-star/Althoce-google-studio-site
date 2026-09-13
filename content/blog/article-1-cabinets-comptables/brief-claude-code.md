# Brief Claude Code — Publication Article #1

**Article** : 5 cas d'usage IA pour les cabinets comptables de moins de 10 personnes en 2026
**Date de publication** : mardi 30 juin 2026, 9h00 (heure de Paris)
**Slug** : `ia-cabinets-comptables-petits-cas-usage-2026`

---

## 1. Étapes d'intégration

### Étape 1 — Vérification préalable

Confirmer que le système de blog dynamique est en place. Vérifie l'existence de :

- `app/blog/[slug]/page.tsx` (template d'article)
- `lib/blog.ts` ou équivalent (fonction `getAllPosts()` et `getPostBySlug()`)
- Le dossier de stockage des articles : `content/blog/` ou `content/posts/` selon la convention

Si la structure n'existe pas ou diffère, adapter le chemin en conséquence. Conserver le frontmatter intact.

### Étape 2 — Création du fichier article

Copier le contenu de `content/blog/article-1-cabinets-comptables/article.md` vers l'emplacement attendu par le système, par exemple :

```
content/blog/ia-cabinets-comptables-petits-cas-usage-2026.md
```

ou selon votre convention :

```
content/posts/2026-06-30-ia-cabinets-comptables-petits-cas-usage.md
```

### Étape 3 — Copier la cover

Le fichier `public/blog/covers/ia-cabinets-comptables-cover.png` doit déjà être à la bonne place dans `public/`. Vérifier qu'il est bien committé.

### Étape 4 — Vérification locale

```bash
npm run dev
```

Ouvrir dans le navigateur : `http://localhost:3000/blog/ia-cabinets-comptables-petits-cas-usage-2026/`

Vérifier visuellement que :
- L'article s'affiche correctement
- La cover s'affiche en hero
- Les liens internes fonctionnent (5 liens vers /agent-ia/finance/, /cas-clients/cabinet-comptable-lyon/, /services/chatbot-ia/, /agent-ia/, /contact/)
- Le titre dans l'onglet ne contient PAS « Althoce | Althoce » (si le fix titres dupliqués est bien déployé)
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
curl -s http://localhost:3000/sitemap.xml | grep "ia-cabinets-comptables"

# Réponse HTTP de l'article
curl -sI http://localhost:3000/blog/ia-cabinets-comptables-petits-cas-usage-2026/ | head -3

# Vérification du title
curl -s http://localhost:3000/blog/ia-cabinets-comptables-petits-cas-usage-2026/ | grep -oE '<title>[^<]+</title>'

# Vérification de la cover dans l'OG
curl -s http://localhost:3000/blog/ia-cabinets-comptables-petits-cas-usage-2026/ | grep 'og:image'
```

### Étape 7 — Commit et push

```bash
git add content/blog/ public/blog/covers/
git commit -m "feat(blog): publication article #1 - IA cabinets comptables petites structures 2026

Article publié dans le cadre du calendrier éditorial mensuel.
Slug: ia-cabinets-comptables-petits-cas-usage-2026
Catégorie: Finance
Cible SEO: /agent-ia/finance/ (déjà ranking #1 sur niche)
Mots-clés: ia cabinet comptable, automatisation cabinet comptable pme"

git push origin main
```

### Étape 8 — Validation production

Attendre 2-3 minutes que Vercel build, puis :

```bash
# Vérifier que l'article est en ligne
curl -sI https://althoce.com/blog/ia-cabinets-comptables-petits-cas-usage-2026/ -w "HTTP %{http_code}\n"

# Le code doit être 200
```

---

## 2. Liens internes intégrés dans l'article

L'article contient 5 liens internes stratégiques. Vérifier qu'ils sont bien rendus dans le HTML final :

1. `/agent-ia/finance/` — Page métier finance (la page boostée)
2. `/cas-clients/cabinet-comptable-lyon/` — Cas client référence
3. `/services/chatbot-ia/` — Service chatbot RAG
4. `/agent-ia/` — Hub des agents par métier
5. `/contact/` — CTA fin d'article

**Important** : tous les liens doivent avoir le trailing slash `/` final (alignement avec `next.config.ts → trailingSlash: true`).

---

## 3. Métadonnées attendues dans le HTML final

À l'affichage de l'article, le `<head>` doit contenir :

```html
<title>5 cas d'usage IA pour les cabinets comptables de moins de 10 personnes en 2026 | Althoce</title>
<meta name="description" content="Vous dirigez un petit cabinet comptable et l'IA vous semble réservée aux gros cabinets ? 5 cas concrets déjà déployés en France, accessibles dès 2026.">
<meta property="og:title" content="5 cas d'usage IA pour les cabinets comptables de moins de 10 personnes en 2026">
<meta property="og:description" content="..."/>
<meta property="og:image" content="https://althoce.com/blog/covers/ia-cabinets-comptables-cover.png">
<meta property="og:url" content="https://althoce.com/blog/ia-cabinets-comptables-petits-cas-usage-2026/">
<meta property="og:type" content="article">
<link rel="canonical" href="https://althoce.com/blog/ia-cabinets-comptables-petits-cas-usage-2026/">
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "5 cas d'usage IA pour les cabinets comptables de moins de 10 personnes en 2026",
    "datePublished": "2026-06-30T09:00:00+02:00",
    "author": {
      "@type": "Organization",
      "@id": "https://althoce.com/#organization",
      "name": "Althoce"
    },
    "image": "https://althoce.com/blog/covers/ia-cabinets-comptables-cover.png",
    "publisher": {
      "@type": "Organization",
      "@id": "https://althoce.com/#organization",
      "name": "Althoce"
    }
  }
</script>
```

Si une de ces métadonnées est manquante, vérifier la configuration de `app/blog/[slug]/page.tsx` et corriger.

---

## 4. Actions à faire manuellement après la publication

Ces actions ne sont **PAS** automatisables par Claude Code, à faire par le user :

1. **Search Console** : aller dans Inspection de l'URL → coller `https://althoce.com/blog/ia-cabinets-comptables-petits-cas-usage-2026/` → cliquer sur « Demander une indexation »

2. **LinkedIn** : copier le post LinkedIn depuis `linkedin-post.md` et le publier sur le profil personnel + page Althoce à 9h05. Mettre le lien dans le 1er commentaire.

3. **LinkedIn Post Inspector** : tester l'URL pour s'assurer que le preview affiche bien la cover de l'article.

---

## 5. Points de vigilance

- **Ne PAS modifier** le contenu de l'article. Le frontmatter et le markdown sont prêts à publier tels quels.
- **Ne PAS modifier** la cover. Elle est brand-aligned et calibrée.
- **Ne PAS publier en avance** ou en retard. La date du frontmatter (`2026-06-30T09:00:00+02:00`) doit être respectée pour la cohérence du calendrier éditorial.
- **Si erreur de build**, stopper l'exécution et reporter avant de pousser quoi que ce soit.

---

*Brief généré le 26 juin 2026 par Althoce pour publication automatisée.*
