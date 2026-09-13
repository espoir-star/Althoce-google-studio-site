# Brief Claude Code — Améliorations Blog (TOC + Filtres + Covers)

**Destinataire** : Claude Code
**Effort estimé total** : 1h15
**Priorité** : haute — à exécuter avant publication article #1 (mardi 30 juin 9h)
**Mode d'exécution** : phase par phase, validation entre chaque étape

---

## 0. RÈGLES GÉNÉRALES

### Pré-requis
- Le repo doit être à jour (`git pull origin main`)
- Le système de publication différée doit être déjà en place (Phase 2 du brief précédent)
- Les articles #1 et #2 doivent être committés (mais invisibles car publishedAt futur)

### Procédure de travail
1. Créer une branche par phase
2. Tester à la fin de chaque phase
3. Une fois les 3 phases validées en local, merger sur `main` et pousser

---

## PHASE 1 — Sommaire vertical cliquable (TOC) dans les pages d'article

**Objectif** : afficher un sommaire à gauche de l'article avec H2/H3 cliquables qui amènent à la bonne section. Sticky pendant le scroll, avec highlight de la section active.

**Branche** : `feat/blog-toc-sidebar`

**Effort** : 35 minutes

### 1.1 Vérifier les plugins MDX/Markdown en place

```bash
grep -E "(rehype-slug|rehype-autolink|remark-toc)" package.json
```

**Si absent**, installer les dépendances nécessaires pour générer les IDs sur les H2/H3 :

```bash
npm install rehype-slug rehype-autolink-headings
```

### 1.2 Configurer les plugins dans le rendu MDX

Dans le fichier de configuration MDX (probablement `next.config.ts` ou un wrapper MDX dans `lib/blog.ts`), ajouter :

```ts
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// Dans la config MDX ou le serializer
const mdxOptions = {
  rehypePlugins: [
    rehypeSlug, // Ajoute id="" aux H2/H3 automatiquement
    [rehypeAutolinkHeadings, { behavior: 'wrap' }], // Optionnel : rend les titres cliquables
  ],
  // ... autres options existantes
};
```

### 1.3 Extraire la TOC depuis le contenu MDX

Créer un utilitaire `lib/extract-toc.ts` :

```ts
export interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

/**
 * Extrait les H2 et H3 d'un contenu markdown pour générer le sommaire.
 * Utilise la même logique de slugification que rehype-slug pour garantir
 * la cohérence des ancres.
 */
export function extractToc(markdownContent: string): TocItem[] {
  const lines = markdownContent.split('\n');
  const toc: TocItem[] = [];

  for (const line of lines) {
    const h2Match = line.match(/^##\s+(.+)$/);
    const h3Match = line.match(/^###\s+(.+)$/);

    if (h2Match) {
      toc.push({
        id: slugify(h2Match[1]),
        text: h2Match[1].trim(),
        level: 2,
      });
    } else if (h3Match) {
      toc.push({
        id: slugify(h3Match[1]),
        text: h3Match[1].trim(),
        level: 3,
      });
    }
  }

  return toc;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // Retire les accents
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}
```

**Important** : la fonction `slugify()` doit produire les MÊMES IDs que `rehype-slug` côté rendu. `rehype-slug` utilise github-slugger sous le capot. Si possible, importer github-slugger pour garantir l'alignement :

```ts
import GithubSlugger from 'github-slugger';

const slugger = new GithubSlugger();

export function extractToc(markdownContent: string): TocItem[] {
  slugger.reset(); // Important : reset entre chaque article
  // ... utiliser slugger.slug(text) au lieu de slugify
}
```

### 1.4 Créer le composant `<TableOfContents />`

Créer `components/blog/TableOfContents.tsx` :

```tsx
'use client';

import { useEffect, useState } from 'react';
import type { TocItem } from '@/lib/extract-toc';

interface Props {
  items: TocItem[];
}

export default function TableOfContents({ items }: Props) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0px -60% 0px',
        threshold: 0,
      }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav
      aria-label="Sommaire de l'article"
      className="hidden lg:block sticky top-28 max-h-[calc(100vh-7rem)] overflow-y-auto pr-4"
    >
      <h2 className="text-xs font-semibold uppercase tracking-wider text-muted mb-4">
        Sommaire
      </h2>
      <ul className="space-y-2 text-sm">
        {items.map((item) => (
          <li key={item.id} className={item.level === 3 ? 'pl-4' : ''}>
            <a
              href={`#${item.id}`}
              className={`block py-1 border-l-2 pl-3 transition-colors ${
                activeId === item.id
                  ? 'border-accent text-ink font-medium'
                  : 'border-transparent text-muted hover:text-ink hover:border-v2-border'
              }`}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(item.id);
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  window.history.pushState(null, '', `#${item.id}`);
                }
              }}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
```

### 1.5 Intégrer le composant dans le layout d'article

Modifier `app/blog/[slug]/page.tsx` pour utiliser une layout en grille avec sidebar :

```tsx
import TableOfContents from '@/components/blog/TableOfContents';
import { extractToc } from '@/lib/extract-toc';

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const toc = extractToc(post.content); // post.content = markdown brut

  return (
    <article className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12">
        {/* Sidebar TOC à gauche */}
        <aside>
          <TableOfContents items={toc} />
        </aside>

        {/* Contenu de l'article à droite */}
        <div className="prose prose-lg max-w-3xl">
          {/* ... rendu existant du contenu */}
        </div>
      </div>
    </article>
  );
}
```

### 1.6 Tests Phase 1

```bash
npx tsc --noEmit
npm run build
npm run dev &
sleep 5

# L'article #1 retourne 404 jusqu'au 30 juin, donc on teste avec une vraie page d'article
# Modifier temporairement publishedAt sur l'article #1 pour la mettre dans le passé,
# puis tester la présence de la TOC

# Test : vérifier que le HTML contient bien des H2/H3 avec des IDs générés
curl -s http://localhost:3000/blog/[slug-article-test] | grep -oE '<h[23] id="[^"]+">' | head -10

# Test : vérifier la présence de l'élément TOC
curl -s http://localhost:3000/blog/[slug-article-test] | grep -c 'aria-label="Sommaire de l'

# Restaurer la date originale après test
```

**Commit Phase 1** :

```bash
git add components/blog/ lib/extract-toc.ts app/blog/[slug]/page.tsx package.json package-lock.json
git commit -m "feat(blog): sommaire vertical cliquable dans les pages d'article

- Composant <TableOfContents /> sticky à gauche desktop
- Extraction H2/H3 depuis le markdown via lib/extract-toc.ts
- IDs auto-générés par rehype-slug (alignement github-slugger)
- Highlight section active via IntersectionObserver
- Smooth scroll au clic
- Caché sur mobile et tablette (lg: et plus)"
```

---

## PHASE 2 — Adapter les filtres du hub blog à la stratégie éditoriale

**Objectif** : remplacer les filtres actuels (Tous, Cas d'usage, Guide pratique, Décryptage, Coulisses) par les vraies catégories de notre stratégie éditoriale.

**Branche** : `feat/blog-filters-categories`

**Effort** : 20 minutes

### 2.1 Nouvelles catégories à utiliser

Aligner sur les badges utilisés dans les covers d'articles :

| Filtre | Articles concernés (calendrier édito mois 1) |
|--------|------------------------------------------------|
| **Tous** | Tout |
| **Finance** | Article #1 (Cabinets comptables) |
| **Local** | Article #2 (Lille) + futurs articles SEO local |
| **Souveraineté** | Article #3 (Hébergement IA France) |
| **Juridique** | Article #4 (Cabinets avocats) + Article #8 (IA Act) |
| **Opérations** | Article #5 (Achats) |
| **Guide pratique** | Article #6 (Timing déploiement) + Article #7 (RAG/fine-tuning) |

### 2.2 Modifier le composant filtres

Identifier le composant qui gère les filtres dans `app/blog/page.tsx` ou un composant client séparé (probablement `components/blog/BlogFilters.tsx` ou similaire).

Remplacer la liste des catégories par :

```ts
const CATEGORIES = [
  { id: 'all', label: 'Tous' },
  { id: 'finance', label: 'Finance' },
  { id: 'juridique', label: 'Juridique' },
  { id: 'souverainete', label: 'Souveraineté' },
  { id: 'local', label: 'Local' },
  { id: 'operations', label: 'Opérations' },
  { id: 'guide', label: 'Guide pratique' },
];
```

### 2.3 Adapter la logique de filtrage

Le filtre doit comparer la catégorie de l'article (`post.category`) avec le filtre actif (case-insensitive et tolérant aux accents) :

```ts
function normalizeCategory(cat: string): string {
  return cat
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');
}

const filtered = posts.filter(post => {
  if (activeFilter === 'all') return true;
  return normalizeCategory(post.category) === activeFilter;
});
```

### 2.4 Gérer les catégories non mappées

Si un article a une catégorie qui ne correspond à aucun filtre listé (par exemple « Coulisses » d'un ancien article), il doit toujours apparaître dans « Tous » mais ne pas être perdu. Pas besoin d'action particulière — le filter `all` retourne `true` pour tous.

### 2.5 Tests Phase 2

```bash
npm run dev &
sleep 5

# Le hub /blog/ doit afficher les nouvelles catégories
curl -s http://localhost:3000/blog/ | grep -oE "(Tous|Finance|Juridique|Souveraineté|Local|Opérations|Guide pratique)" | sort -u

# Doit lister exactement : Finance, Guide pratique, Juridique, Local, Opérations, Souveraineté, Tous
```

**Commit Phase 2** :

```bash
git add components/blog/ app/blog/page.tsx
git commit -m "feat(blog): filtres alignés sur la stratégie éditoriale

- 7 catégories : Tous, Finance, Juridique, Souveraineté, Local, Opérations, Guide pratique
- Normalisation des catégories pour matcher sans dépendance accent/casse"
```

---

## PHASE 3 — Afficher la cover de chaque article sur le hub blog

**Objectif** : afficher l'image cover (`post.image`) sur chaque card du hub `/blog/`.

**Branche** : `feat/blog-card-covers`

**Effort** : 20 minutes

### 3.1 Identifier le composant card

Probablement `components/blog/BlogCard.tsx` ou inline dans `app/blog/page.tsx`. Le composant affiche actuellement :
- Badge catégorie (haut gauche)
- Temps de lecture (haut droite)
- Titre (h2 ou h3)
- Description (p)
- Date (bas gauche)
- « Lire → » (bas droite)

### 3.2 Ajouter l'image cover

Insérer en haut du card, avant le badge catégorie. Utiliser le composant `<Image />` de Next.js pour l'optimisation :

```tsx
import Image from 'next/image';

export default function BlogCard({ post }) {
  return (
    <article className="group flex flex-col bg-white border border-v2-border rounded-2xl overflow-hidden hover:border-ink transition-colors">
      {/* Image cover */}
      {post.image && (
        <div className="relative aspect-[1200/630] w-full bg-ink">
          <Image
            src={post.image}
            alt={post.imageAlt || post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}

      {/* Contenu existant (badge, titre, description, footer) */}
      <div className="flex flex-col p-6 gap-4">
        {/* ... contenu existant ... */}
      </div>
    </article>
  );
}
```

### 3.3 Vérifier les dimensions et le ratio

Les covers générées font 1200×630 (ratio 1.91:1). Le `aspect-[1200/630]` Tailwind respecte ce ratio. Vérifier visuellement que les images ne sont pas déformées.

Si certaines cards n'ont pas d'image, le `&&` conditionnel les exclut proprement — la card s'affiche sans hero.

### 3.4 Optimisation côté Next.js

Si le `next.config.ts` a une whitelist d'images externes, vérifier que `/blog/covers/` est bien servi en interne (pas besoin de whitelist).

### 3.5 Tests Phase 3

```bash
npm run dev &
sleep 5

# Vérifier la présence des balises image sur le hub
curl -s http://localhost:3000/blog/ | grep -c '/blog/covers/'

# Vérifier que les anciens articles (sans cover) ne cassent pas
# Si certains articles existants n'ont pas de `image` dans leur frontmatter,
# ils doivent quand même s'afficher (card sans hero)
```

**Commit Phase 3** :

```bash
git add components/blog/ app/blog/page.tsx
git commit -m "feat(blog): cover image affichée sur les cards du hub

- <Image /> Next.js avec ratio 1.91:1 aligné sur les covers OG
- Affichage conditionnel : pas de hero si post.image absent
- Optimisation responsive via sizes attribute"
```

---

## PHASE 4 — Merge et déploiement

### 4.1 Merge des branches sur main

```bash
git checkout main
git merge feat/blog-toc-sidebar --no-ff
git merge feat/blog-filters-categories --no-ff
git merge feat/blog-card-covers --no-ff
git push origin main
```

### 4.2 Attendre Vercel (2-3 min)

### 4.3 Validation production

```bash
# Le hub blog charge correctement
curl -sI https://althoce.com/blog/ -w "HTTP %{http_code}\n"

# Les filtres sont à jour
curl -s https://althoce.com/blog/ | grep -oE "(Finance|Juridique|Souveraineté|Local|Opérations|Guide pratique)" | sort -u

# Les covers sont visibles
curl -s https://althoce.com/blog/ | grep -c '/blog/covers/'

# Les articles existants fonctionnent toujours
curl -sI https://althoce.com/ -w "HTTP %{http_code}\n"
curl -sI https://althoce.com/services/agents-ia/ -w "HTTP %{http_code}\n"
```

---

## VALIDATION ATTENDUE FINALE

À l'issue tu dois confirmer :

- [x] Phase 1 — TOC visible sur les pages d'articles desktop (lg+), sticky à gauche, IDs alignés sur H2/H3
- [x] Phase 2 — Hub /blog/ affiche les 7 nouvelles catégories (Tous, Finance, Juridique, Souveraineté, Local, Opérations, Guide pratique)
- [x] Phase 3 — Chaque card du hub affiche la cover de l'article quand `post.image` existe
- [x] Phase 4 — Production valide : pages principales OK, hub blog correct
- [x] Articles S1 toujours en 404 jusqu'à leur date de publication (mécanisme publication différée préservé)

---

## POINTS DE VIGILANCE

1. **Ne PAS modifier** la mécanique de publication différée (Phase 2 du brief précédent doit rester intacte)
2. **Ne PAS supprimer** d'anciens articles ou pages
3. **Tester la rétrocompatibilité** : les anciens articles sans `image` dans leur frontmatter doivent toujours s'afficher (sur le hub : sans hero ; sur leur page : sans cover)
4. **Vérifier que la TOC ne casse pas sur mobile** (caché par `hidden lg:block`)
5. **Si extract-toc.ts produit des IDs différents de rehype-slug**, les ancres ne fonctionneront pas. Utiliser github-slugger pour garantir l'alignement.

---

## EN CAS DE PROBLÈME

### Si la TOC affiche les bons titres mais les ancres ne fonctionnent pas
→ Mismatch entre la slugification de `extract-toc.ts` et `rehype-slug`. Utiliser `GithubSlugger` côté extraction.

### Si les filtres ne filtrent rien
→ Vérifier que `post.category` est bien lu depuis le frontmatter. Console.log pour debug.

### Si les covers s'affichent déformées
→ Vérifier que les images font bien 1200×630 et que le `aspect-ratio` Tailwind est appliqué.

### Si le build casse sur les images
→ Vérifier que `next.config.ts` n'a pas de restriction sur les chemins `/blog/covers/`.

---

*Brief généré le 27 juin 2026 pour améliorer l'UX du blog avant publication article #1 (mardi 30 juin).*
