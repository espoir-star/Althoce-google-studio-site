# Brief Claude Code — Publication différée + Articles S1

**Destinataire** : Claude Code
**Effort estimé total** : 1h10
**Priorité** : haute — à exécuter avant lundi 29 juin 2026 pour permettre publications automatiques mardi 30 juin et jeudi 2 juillet
**Mode d'exécution** : phase par phase, validation entre chaque étape

---

## 0. RÈGLES GÉNÉRALES

### Pré-requis
- Le repo doit être à jour (`git pull origin main`)
- Le build initial doit passer (`npm run build`)
- Aucune branche en cours non mergée

### Procédure de travail
1. Créer une branche par phase
2. Tester à la fin de chaque phase (commandes données)
3. Si une phase casse quelque chose, ne pas continuer — reporter
4. Une fois les 3 phases validées en local, merger sur `main` et pousser

---

## PHASE 1 — Fix titres dupliqués (P0)

**Source** : suivre intégralement le plan dans `SEO-FIX-TITRES-DUPLIQUES.md` à la racine du projet.

**Branche** : `fix/seo-titres-dupliques`

**Effort** : 20 minutes

**Critère d'acceptation** : aucune page (sauf home) ne contient plus de 1 occurrence de « Althoce » dans son `<title>`. Tests curl fournis dans le brief source.

**Commit** :
```bash
git add app/
git commit -m "fix(seo): élimine la duplication 'Althoce | Althoce' dans les titres SERP"
git checkout main
git merge fix/seo-titres-dupliques --no-ff
```

**Ne pas push tout de suite** — on continue avec la Phase 2.

---

## PHASE 2 — Système de publication différée

**Branche** : `feat/scheduled-publication`

**Effort** : 30 minutes

**Objectif** : permettre de pousser des articles avec une date future dans leur frontmatter `publishedAt`. Le blog system doit les rendre invisibles jusqu'à la date prévue, puis automatiquement visibles.

### 2.1 Vérification du système actuel

```bash
# Inspecter le système blog existant
ls lib/blog.ts 2>/dev/null && echo "Existe" || echo "À créer"
ls content/blog/ 2>/dev/null
cat app/blog/[slug]/page.tsx 2>/dev/null | head -50
```

Si `lib/blog.ts` n'existe pas ou ne contient pas `getAllPosts()` et `getPostBySlug()`, l'adapter selon la structure réelle du projet.

### 2.2 Modifier `lib/blog.ts`

Ajouter le filtrage par date dans la fonction `getAllPosts()` :

```ts
export function getAllPosts(): Post[] {
  const now = new Date();
  return allPostsRaw
    .filter(post => {
      if (!post.publishedAt) return true; // Article sans date = toujours publié (rétrocompatibilité)
      return new Date(post.publishedAt) <= now;
    })
    .sort((a, b) => {
      const dateA = new Date(a.publishedAt ?? a.date ?? 0).getTime();
      const dateB = new Date(b.publishedAt ?? b.date ?? 0).getTime();
      return dateB - dateA; // Plus récent en premier
    });
}
```

Modifier également `getPostBySlug()` pour respecter la date :

```ts
export function getPostBySlug(slug: string): Post | null {
  const post = allPostsRaw.find(p => p.slug === slug);
  if (!post) return null;

  // Article avec date future = inaccessible
  if (post.publishedAt && new Date(post.publishedAt) > new Date()) {
    return null;
  }

  return post;
}
```

**Note** : adapter les noms d'interfaces (`Post`, `allPostsRaw`) à la convention réelle du projet. Conserver toute la logique de chargement existante (frontmatter parsing, MDX, etc.).

### 2.3 Modifier `app/blog/[slug]/page.tsx`

Ajouter l'ISR et le 404 explicite :

```ts
import { notFound } from 'next/navigation';

export const revalidate = 3600; // Revalide toutes les heures

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // ... rendu existant
}

// Pour generateMetadata, même check
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return { title: 'Article non trouvé' };
  }
  // ... metadata existante
}

// Pour generateStaticParams, ne pas pré-générer les articles futurs
export async function generateStaticParams() {
  const posts = getAllPosts(); // getAllPosts filtre déjà les futurs
  return posts.map(post => ({ slug: post.slug }));
}
```

### 2.4 Modifier `app/sitemap.ts`

Ajouter la même logique de filtrage pour les routes blog :

```ts
// Dans la section qui ajoute les blog routes
const blogRoutes = getAllPosts().map(post => ({
  url: `${BASE_URL}/blog/${post.slug}/`,
  lastModified: post.updatedAt ? new Date(post.updatedAt).toISOString() : (post.publishedAt ? new Date(post.publishedAt).toISOString() : now),
  changeFrequency: 'monthly' as const,
  priority: 0.7,
}));
```

`getAllPosts()` retournant déjà filtré, le sitemap n'inclura jamais d'article non publié. Google ne les découvrira que le jour J.

### 2.5 Vérifier `app/blog/page.tsx` (hub blog)

S'assurer qu'il utilise bien `getAllPosts()` et pas une autre fonction qui ne filtrerait pas. Le hub doit lister uniquement les articles publiés.

### 2.6 Tests Phase 2

```bash
# TypeScript
npx tsc --noEmit

# Build
npm run build

# Test local (avant articles)
npm run dev &
sleep 5

# Le hub /blog/ doit fonctionner et lister les articles existants
curl -sI http://localhost:3000/blog/ -w "HTTP %{http_code}\n"
```

**Commit Phase 2** :

```bash
git add lib/blog.ts app/blog/ app/sitemap.ts
git commit -m "feat(blog): support publication différée via frontmatter publishedAt

- getAllPosts() filtre les articles avec publishedAt > now
- getPostBySlug() retourne null si publishedAt > now (404)
- generateStaticParams() exclut les articles futurs
- ISR activée toutes les heures (revalidate = 3600)
- sitemap.ts exclut les articles non publiés"
git checkout main
git merge feat/scheduled-publication --no-ff
```

---

## PHASE 3 — Intégration articles #1 et #2

**Branche** : `feat/blog-articles-s1`

**Effort** : 20 minutes

### 3.1 Article #1 — Cabinets comptables

**Source** : `content/blog/article-1-cabinets-comptables/`

**Action** : suivre le brief `content/blog/article-1-cabinets-comptables/brief-claude-code.md`. En résumé :

1. Copier `article.md` vers l'emplacement attendu par le système (selon la convention identifiée en Phase 2). Probablement :
   ```
   content/blog/ia-cabinets-comptables-petits-cas-usage-2026.md
   ```
   ou
   ```
   content/blog/ia-cabinets-comptables-petits-cas-usage-2026/index.md
   ```

2. Vérifier que `public/blog/covers/ia-cabinets-comptables-cover.png` est bien présent et committé (il devrait l'être déjà — sinon le copier depuis le dossier de livraison).

### 3.2 Article #2 — Agence IA à Lille

**Source** : `content/blog/article-2-agence-ia-lille/`

**Action** : suivre le brief `content/blog/article-2-agence-ia-lille/brief-claude-code.md`. Mêmes étapes que pour l'article #1, avec :
- Source `article.md` → emplacement final
- Cover `public/blog/covers/agence-ia-lille-cover.png` (déjà committée)

### 3.3 Tests Phase 3

Tests cruciaux pour valider le mécanisme de publication différée :

```bash
npm run dev &
sleep 5

echo ""
echo "=== Tests : les articles doivent être 404 car publishedAt > now ==="
curl -sI http://localhost:3000/blog/ia-cabinets-comptables-petits-cas-usage-2026/ -w "HTTP %{http_code}\n"
# Attendu : 404 (publishedAt 2026-06-30, on est encore avant)

curl -sI http://localhost:3000/blog/agence-ia-lille-choisir-partenaire-2026/ -w "HTTP %{http_code}\n"
# Attendu : 404 (publishedAt 2026-07-02)

echo ""
echo "=== Tests : le sitemap NE DOIT PAS contenir ces articles ==="
curl -s http://localhost:3000/sitemap.xml | grep -c "ia-cabinets-comptables"
# Attendu : 0

curl -s http://localhost:3000/sitemap.xml | grep -c "agence-ia-lille-choisir"
# Attendu : 0

echo ""
echo "=== Tests : le hub /blog/ NE DOIT PAS lister ces articles ==="
curl -s http://localhost:3000/blog/ | grep -c "ia-cabinets-comptables"
# Attendu : 0

curl -s http://localhost:3000/blog/ | grep -c "agence-ia-lille-choisir"
# Attendu : 0
```

Si l'un de ces tests échoue (HTTP 200 au lieu de 404, ou article apparaît dans sitemap/hub), **stopper** et vérifier la Phase 2.

### 3.4 Test de simulation publication

Pour s'assurer que les articles s'afficheront bien le jour J, on peut simuler en modifiant temporairement la date :

```bash
# Test : on simule en passant la date dans le passé
# IMPORTANT : ne pas committer cette modif, c'est juste un test
node -e "
const fs = require('fs');
const path = 'content/blog/ia-cabinets-comptables-petits-cas-usage-2026.md';
let content = fs.readFileSync(path, 'utf-8');
content = content.replace('2026-06-30T09:00:00', '2026-06-20T09:00:00');
fs.writeFileSync(path + '.test', content);
console.log('Fichier de test créé');
"

# Lancer le serveur, vérifier que l'article test est accessible
# puis supprimer le fichier de test
rm -f content/blog/ia-cabinets-comptables-petits-cas-usage-2026.md.test
```

### 3.5 Commit Phase 3

```bash
git add content/blog/ public/blog/
git commit -m "feat(blog): publication articles S1 — cabinets comptables + Lille

Articles préparés et committés avec publication différée :
- Article #1 : ia-cabinets-comptables-petits-cas-usage-2026 (publication mardi 30 juin 9h)
- Article #2 : agence-ia-lille-choisir-partenaire-2026 (publication jeudi 2 juillet 9h)

Les articles sont invisibles tant que publishedAt > now (404, exclus du sitemap et du hub).
Ils deviendront automatiquement visibles aux dates indiquées (ISR 1h)."
git checkout main
git merge feat/blog-articles-s1 --no-ff
```

---

## PHASE 4 — Push final et validation production

### 4.1 Push

```bash
git push origin main
```

### 4.2 Attendre Vercel (2-3 min)

### 4.3 Validation production

```bash
echo ""
echo "=== Articles existants doivent toujours fonctionner ==="
curl -sI https://althoce.com/ -w "HTTP %{http_code}\n"
curl -sI https://althoce.com/services/agents-ia/ -w "HTTP %{http_code}\n"

echo ""
echo "=== Articles futurs doivent être 404 jusqu'au 30 juin / 2 juillet ==="
curl -sI https://althoce.com/blog/ia-cabinets-comptables-petits-cas-usage-2026/ -w "HTTP %{http_code}\n"
curl -sI https://althoce.com/blog/agence-ia-lille-choisir-partenaire-2026/ -w "HTTP %{http_code}\n"

echo ""
echo "=== Sitemap ne contient pas les articles futurs ==="
curl -s https://althoce.com/sitemap.xml | grep -E "(ia-cabinets-comptables|agence-ia-lille-choisir)" | wc -l
# Attendu : 0

echo ""
echo "=== Titres ne contiennent plus le doublon Althoce ==="
for url in "/a-propos/" "/agences/" "/agent-ia/finance/" "/agent-ia/juridique/" "/agence-ia-lille/"; do
  title=$(curl -s "https://althoce.com${url}" | grep -oE '<title>[^<]+</title>' | sed 's/<[^>]*>//g')
  count=$(echo "$title" | grep -oE 'Althoce' | wc -l)
  echo "  $url : ${count} occurrence(s) Althoce — $title"
done
# Attendu : exactement 1 par URL (le suffixe template uniquement)
```

---

## VALIDATION ATTENDUE FINALE

Si tout passe, à l'issue de la Phase 4 tu dois confirmer dans ta réponse :

- [x] Phase 1 — Fix titres dupliqués déployé : tous les titres ont 1 seule occurrence "Althoce"
- [x] Phase 2 — Système publication différée : `lib/blog.ts`, `app/blog/[slug]/page.tsx`, `app/sitemap.ts` modifiés
- [x] Phase 3 — Articles S1 intégrés : 2 articles + 2 covers présents dans le repo
- [x] Phase 4 — Production valide : URLs articles renvoient 404, sitemap propre, titres propres
- [x] Articles deviendront automatiquement visibles :
  - `/blog/ia-cabinets-comptables-petits-cas-usage-2026/` le **mardi 30 juin 2026 à 9h00 (+1h max selon ISR)**
  - `/blog/agence-ia-lille-choisir-partenaire-2026/` le **jeudi 2 juillet 2026 à 9h00 (+1h max selon ISR)**

---

## EN CAS DE PROBLÈME

### Si Phase 2 casse le système blog existant

- Vérifier que `lib/blog.ts` était bien la source de vérité utilisée par toutes les pages blog
- Vérifier que le typage `publishedAt` est cohérent avec le frontmatter existant (peut-être qu'un champ `date` existait avant)
- Si rétrocompatibilité nécessaire, gérer les deux : `post.publishedAt ?? post.date`

### Si Phase 3 fait 200 sur des articles qui devraient être 404

- C'est que le filtre Phase 2 ne s'applique pas. Vérifier que les pages utilisent bien `getPostBySlug()` modifié et pas une autre fonction.
- Vérifier que `params.slug` est bien récupéré

### Si build casse

- Reporter immédiatement. Ne pas pousser de code cassé.

---

*Brief généré le 26 juin 2026 pour automatiser la publication du calendrier éditorial mensuel.*
