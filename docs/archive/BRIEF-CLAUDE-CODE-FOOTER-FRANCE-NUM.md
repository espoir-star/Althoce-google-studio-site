# Brief Claude Code — Intégration badge Activateur France Num au footer

**Destinataire** : Claude Code
**Effort estimé** : 15 minutes
**Priorité** : haute — à exécuter avant publication du post LinkedIn d'annonce

---

## 0. CONTEXTE

Althoce a été officiellement référencée comme « Activateur France Num » sur le portail gouvernemental francenum.gouv.fr. C'est un signal d'autorité B2B fort qu'on veut afficher sur le site.

## 1. ASSETS DÉJÀ EN PLACE

Le **logo officiel France Num** est disponible dans plusieurs formats optimisés :

- `public/logos/Althoce-Activateur-francenum.png` — **480×437px, 7,7 ko, recommandé pour footer et page À propos** (PNG optimisé, palette 16 couleurs)
- `public/logos/Althoce-Activateur-francenum.webp` — 600×545px, 12 ko (WebP haute qualité, alternative moderne)
- `public/logos/Althoce-Activateur-francenum.jpg` — 907×826px, 2,8 Mo (source officielle CMYK, NE PAS servir au navigateur)
- `public/blog/covers/announcement-france-num.png` — Visuel d'annonce LinkedIn 1200×1200 avec logo officiel intégré

**Important** : utiliser exclusivement le PNG (`Althoce-Activateur-francenum.png`) pour le rendu web. Le JPG source ne doit jamais être servi (trop lourd, mode CMYK incompatible navigateur).

## 2. ACTION À RÉALISER

Ajouter un badge cliquable « Activateur France Num » dans le composant Footer du site.

### 2.1 Identifier le composant Footer

```bash
ls components/Footer.tsx 2>/dev/null || find components/ -iname "footer*" -type f
```

### 2.2 Intégration recommandée du badge

Placer le badge dans une zone visible mais non intrusive du footer (section « partenaires » / « certifications » / juste au-dessus du copyright). Code suggéré :

```tsx
import Image from 'next/image';
import Link from 'next/link';

// Dans le rendu du Footer, ajouter cette section avant la section copyright :

<div className="border-t border-v2-border mt-12 pt-8 pb-4">
  <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
    <div className="text-xs uppercase tracking-wider text-muted">
      Certifications & Partenariats
    </div>

    <Link
      href="https://www.francenum.gouv.fr/activateurs/althoce"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Althoce, Activateur France Num — programme officiel du gouvernement français pour la transformation numérique des PME"
      className="block hover:opacity-80 transition-opacity"
    >
      <Image
        src="/logos/Althoce-Activateur-francenum.png"
        alt="Activateur France Num"
        width={120}
        height={111}
        className="h-20 w-auto"
      />
    </Link>
  </div>
</div>
```

**Important** :
- L'URL exacte de la fiche France Num est à confirmer (peut différer du slug `althoce`). Demander à l'utilisateur si nécessaire.
- Le badge doit ouvrir dans un nouvel onglet (`target="_blank"`) avec `rel="noopener noreferrer"` pour la sécurité et le SEO.
- L'attribut `aria-label` détaillé soigne l'accessibilité et apporte un signal sémantique fort à Google.
- La hauteur `h-20` (80px) est un bon équilibre — visible sans dominer le footer.

### 2.3 Ajouter une mention dans la page À propos

Dans `app/a-propos/page.tsx`, ajouter une mention de l'agrément France Num dans la section dédiée aux engagements / partenariats. Si une telle section n'existe pas, l'ajouter juste avant la conclusion :

```tsx
<section className="my-12">
  <h2 className="text-2xl font-bold mb-4">Nos engagements institutionnels</h2>
  <p className="text-muted mb-6">
    Althoce est officiellement référencée comme{' '}
    <Link
      href="https://www.francenum.gouv.fr/activateurs/althoce"
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent hover:underline"
    >
      Activateur France Num
    </Link>
    , le programme officiel du gouvernement français qui recense les experts engagés dans la transformation numérique des PME et ETI. À ce titre, nous accompagnons nos clients dans l'activation des dispositifs publics de soutien à la transformation numérique.
  </p>
  <Link
    href="https://www.francenum.gouv.fr/activateurs/althoce"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      src="/logos/Althoce-Activateur-francenum.png"
      alt="Althoce, Activateur France Num"
      width={150}
      height={139}
      className="h-32 w-auto"
    />
  </Link>
</section>
```

## 3. TESTS

```bash
npx tsc --noEmit
npm run build
npm run dev &
sleep 5

# Vérifier que le badge apparaît dans le HTML rendu
curl -s http://localhost:3000/ | grep -c "activateur-france-num"
# Attendu : >= 1 (le footer est sur toutes les pages)

curl -s http://localhost:3000/a-propos/ | grep -c "activateur-france-num"
# Attendu : >= 2 (footer + section À propos)

# Vérifier que le lien externe est bien configuré
curl -s http://localhost:3000/ | grep -oE 'href="https://www.francenum.gouv.fr[^"]+"' | head -1
```

## 4. COMMIT

```bash
git add components/ app/a-propos/ public/logos/
git commit -m "feat: badge Activateur France Num au footer + mention dans À propos

- Logo SVG public/logos/Althoce-Activateur-francenum.png
- Badge cliquable dans le footer (toutes pages)
- Section dédiée 'Engagements institutionnels' dans /a-propos/
- Liens externes target=_blank avec rel=noopener noreferrer
- aria-label détaillé pour accessibilité et signal sémantique"
git push origin main
```

## 5. VALIDATION PRODUCTION

```bash
# Attendre 2-3 min que Vercel build, puis :
curl -s https://althoce.com/ | grep -c "activateur-france-num"
curl -s https://althoce.com/a-propos/ | grep -c "activateur-france-num"
```

## 6. POINTS DE VIGILANCE

1. **URL exacte de la fiche France Num** : si différente de `/activateurs/althoce`, mettre à jour partout (footer + a-propos)
2. **Ne pas modifier** la version SVG du logo (reproduction fidèle de l'officiel)
3. **Vérifier le contraste** : le badge a un fond blanc, donc visible sur fond clair. Si le footer du site est dark (typique chez Althoce avec `surface-dark`), envelopper le logo dans un `<div className="bg-white p-3 rounded-lg">` pour préserver la lisibilité.

---

*Brief généré le 28 juin 2026.*
