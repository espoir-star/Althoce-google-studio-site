# Plan d'exécution — Correction audit SEO Ahrefs

**Destinataire** : Claude Code
**Date de l'audit source** : 24 juin 2026
**Score Ahrefs avant fix** : 72/100
**Score Ahrefs cible après fix** : 92-95/100
**Mode d'exécution** : phase par phase avec validation entre chaque étape, ne JAMAIS sauter une validation.

---

## 0. RÈGLES GÉNÉRALES D'EXÉCUTION

### Avant de commencer

1. Créer une branche dédiée :
   ```bash
   git checkout -b fix/seo-audit-ahrefs-juin-2026
   ```

2. Vérifier que le build initial passe :
   ```bash
   npm run build
   ```
   Si erreur, **stopper** et reporter avant tout changement.

3. Travailler **phase par phase**. À la fin de chaque phase :
   - Commiter avec un message clair
   - Tester le build
   - Lancer les commandes de validation listées en fin de phase
   - Si tout est vert, passer à la phase suivante

### Décisions structurantes prises par le client

- **`/conseil/` n'est PAS recréée**. Tous les liens vers `/conseil/` doivent être remplacés par `/services/audit-ia/`.
- **Le lien Cal.com (`cal.com/althoce/30min`) est SUPPRIMÉ**. Le seul point de prise de contact est `/contact/`.
- **Aucune nouvelle page** ne doit être créée dans cette opération. On se concentre sur les fix techniques.

### Convention de commit

```
feat(seo): phase N — description courte
```

Exemples :
- `feat(seo): phase 1 — fix 404 internes et Cal.com`
- `feat(seo): phase 2 — Open Graph globale`
- `feat(seo): phase 3 — trailing slash links internes`

---

## PHASE 1 — Réparer les 404 internes et le lien Cal.com (P0)

**Objectif** : éliminer 7 URLs 404 internes + 1 lien externe cassé.

### 1.1 Ajouter des redirections dans `next.config.ts`

C'est la stratégie de sécurité : même si on rate un lien interne, la redirection 308 envoie l'utilisateur (et le bot) sur la bonne page. À ajouter dans le bloc `redirects()` existant :

```ts
// ─────────────────────────────────────────────────────────────
// Redirections 404 → cibles canoniques (audit Ahrefs juin 2026)
// ─────────────────────────────────────────────────────────────

// /conseil/ et toutes ses sous-pages → /services/audit-ia/
{
  source: '/conseil',
  destination: '/services/audit-ia/',
  permanent: true,
},
{
  source: '/conseil/:path*',
  destination: '/services/audit-ia/',
  permanent: true,
},

// /automatisation/ → /services/automatisation-ia/
{
  source: '/automatisation',
  destination: '/services/automatisation-ia/',
  permanent: true,
},
{
  source: '/automatisation/:path*',
  destination: '/services/automatisation-ia/',
  permanent: true,
},

// /agent-ia/comptabilite/ → /agent-ia/finance/ (renommage métier)
{
  source: '/agent-ia/comptabilite',
  destination: '/agent-ia/finance/',
  permanent: true,
},
{
  source: '/agent-ia/comptabilite/:path*',
  destination: '/agent-ia/finance/',
  permanent: true,
},

// /agence-ia-brest/ → /agences/ (pas de page Brest pour le moment)
{
  source: '/agence-ia-brest',
  destination: '/agences/',
  permanent: true,
},

// /solutions/pme/ et /solutions/eti/ → home (concept retiré)
{
  source: '/solutions/pme',
  destination: '/',
  permanent: true,
},
{
  source: '/solutions/eti',
  destination: '/',
  permanent: true,
},
{
  source: '/solutions/:path*',
  destination: '/',
  permanent: true,
},

// /cas-clients/negoce-vins-bordelais/ → slug actuel avec suffixe agent-ia-sdr
{
  source: '/cas-clients/negoce-vins-bordelais',
  destination: '/cas-clients/negoce-vins-bordelais-agent-ia-sdr/',
  permanent: true,
},
```

### 1.2 Mettre à jour les liens sources dans les composants

Les redirections sont une sécurité mais ne corrigent pas les liens internes. Il faut grep le code et remplacer les `href` directement.

```bash
# Identifier toutes les occurrences
grep -rn 'href="/conseil' app/ components/ lib/ 2>/dev/null
grep -rn 'href="/automatisation' app/ components/ lib/ 2>/dev/null
grep -rn 'href="/agent-ia/comptabilite' app/ components/ lib/ 2>/dev/null
grep -rn 'href="/agence-ia-brest' app/ components/ lib/ 2>/dev/null
grep -rn 'href="/solutions/' app/ components/ lib/ 2>/dev/null
grep -rn 'href="/cas-clients/negoce-vins-bordelais"' app/ components/ lib/ 2>/dev/null
```

Pour chaque occurrence trouvée, remplacer par la cible canonique :

| Ancien href | Nouveau href |
|-------------|--------------|
| `/conseil` ou `/conseil/` | `/services/audit-ia/` |
| `/automatisation` ou `/automatisation/` | `/services/automatisation-ia/` |
| `/agent-ia/comptabilite` ou `/agent-ia/comptabilite/` | `/agent-ia/finance/` |
| `/agence-ia-brest` ou `/agence-ia-brest/` | `/agences/` |
| `/solutions/pme` ou `/solutions/eti` | `/` |
| `/cas-clients/negoce-vins-bordelais` (sans suffixe) | `/cas-clients/negoce-vins-bordelais-agent-ia-sdr/` |

### 1.3 Supprimer le lien Cal.com

```bash
# Identifier toutes les références à cal.com
grep -rn 'cal\.com/althoce' app/ components/ lib/ content/ 2>/dev/null
grep -rn 'cal\.com/althoce/30min' . 2>/dev/null
```

Pour chaque occurrence, remplacer par un lien interne vers `/contact/`.

Si le bouton dit « Réserver mes 30 minutes offertes » ou similaire, garder le wording mais changer le `href` :

```tsx
// AVANT
<Link href="https://cal.com/althoce/30min" target="_blank" rel="noopener noreferrer">
  Réserver mes 30 minutes offertes
</Link>

// APRÈS
<Link href="/contact/">
  Réserver mes 30 minutes offertes
</Link>
```

Si la page contient un composant `<CalEmbed />` ou similaire, le remplacer par un `<Link>` vers `/contact/`.

### 1.4 Validation phase 1

```bash
# 1. TypeScript check
npx tsc --noEmit

# 2. Build complet
npm run build

# 3. Lancer le dev server
npm run dev &
sleep 5

# 4. Tester chaque URL 404 → doit renvoyer un 308 vers la bonne cible
curl -sI "http://localhost:3000/conseil/" -o /dev/null -w "  /conseil/ : HTTP %{http_code} → %{redirect_url}\n"
curl -sI "http://localhost:3000/automatisation/" -o /dev/null -w "  /automatisation/ : HTTP %{http_code} → %{redirect_url}\n"
curl -sI "http://localhost:3000/agent-ia/comptabilite/" -o /dev/null -w "  /agent-ia/comptabilite/ : HTTP %{http_code} → %{redirect_url}\n"
curl -sI "http://localhost:3000/agence-ia-brest/" -o /dev/null -w "  /agence-ia-brest/ : HTTP %{http_code} → %{redirect_url}\n"
curl -sI "http://localhost:3000/solutions/pme/" -o /dev/null -w "  /solutions/pme/ : HTTP %{http_code} → %{redirect_url}\n"
curl -sI "http://localhost:3000/cas-clients/negoce-vins-bordelais/" -o /dev/null -w "  /cas-clients/negoce-vins-bordelais/ : HTTP %{http_code} → %{redirect_url}\n"

# 5. Vérifier qu'il n'y a plus AUCUNE référence à cal.com dans le code source
grep -rn 'cal\.com' app/ components/ lib/ content/ 2>/dev/null
# Le résultat doit être vide.

# 6. Commit
git add .
git commit -m "feat(seo): phase 1 — fix 404 internes (/conseil, /automatisation, etc.) et suppression lien Cal.com"
```

Critère d'acceptation : tous les `curl` renvoient `HTTP 308` avec une `redirect_url` valide, et `grep cal.com` ne retourne rien.

---

## PHASE 2 — Open Graph globale (P1)

**Objectif** : éliminer les 480 pages avec Open Graph incomplet en configurant la balise globalement + override par page.

### 2.1 Créer / vérifier l'image OG par défaut

L'image doit exister dans `public/og-default.png`. Si elle n'existe pas, en créer une avec ces specs :
- Format : 1200×630 px (ratio 1.91:1)
- Format fichier : PNG ou JPG (PNG recommandé pour le logo)
- Contenu : logo Althoce + signature « Agents IA & automatisation pour PME et ETI françaises »
- Fond : noir ou couleur principale du brand

Si l'image n'est pas disponible immédiatement, **utiliser un placeholder** :
```bash
# Vérifier si elle existe
ls public/og-default.png 2>/dev/null || echo "À CRÉER : public/og-default.png (1200×630)"
```

Et noter dans le commit message que l'image définitive est à fournir.

### 2.2 Configurer Open Graph globalement dans `app/layout.tsx`

Mettre à jour la `metadata` du root layout pour inclure les balises OG par défaut. Voici le bloc complet à utiliser ou adapter :

```ts
export const metadata: Metadata = {
  metadataBase: new URL('https://althoce.com'),
  title: {
    default: 'Althoce | Agents IA & Automatisation pour PME françaises',
    template: '%s | Althoce',
  },
  description: 'Althoce conçoit des agents IA sur mesure pour les PME et ETI françaises. Hébergement souverain en France, premier agent opérationnel en une semaine.',
  verification: {
    google: 'owLvah_UoMEisk_eKugO4bY_aFaklREE1wmT9jPImPo',
  },
  icons: {
    icon: [
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: { url: '/favicons/apple-touch-icon.png', sizes: '180x180' },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://althoce.com/',
    siteName: 'Althoce',
    title: 'Althoce | Agents IA & Automatisation pour PME françaises',
    description: 'Althoce conçoit des agents IA sur mesure pour les PME et ETI françaises. Hébergement souverain en France, premier agent opérationnel en une semaine.',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Althoce — Agents IA & Automatisation pour PME et ETI françaises',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@althoce',
    title: 'Althoce | Agents IA & Automatisation pour PME françaises',
    description: 'Althoce conçoit des agents IA sur mesure pour les PME et ETI françaises. Hébergement souverain en France.',
    images: ['/og-default.png'],
  },
};
```

### 2.3 Vérifier que les pages avec OG spécifique surchargent bien le default

Les pages avec un `openGraph` custom (comme `app/services/chatbot-ia/page.tsx`) doivent inclure au minimum :

```ts
openGraph: {
  title: 'Titre spécifique',
  description: 'Description spécifique',
  url: 'https://althoce.com/services/chatbot-ia/',
  type: 'article', // pour les pages article/contenu
  locale: 'fr_FR',
  images: [
    {
      url: '/og-default.png', // ou une image spécifique si elle existe
      width: 1200,
      height: 630,
      alt: 'Texte alt descriptif',
    },
  ],
},
```

Lister toutes les pages avec un `openGraph` partiel et compléter :

```bash
# Identifier les pages avec openGraph qui n'ont PAS d'images
grep -rn "openGraph:" app/ -A 10 | grep -v "images:" | head -50
```

Pour chaque page identifiée, ajouter le bloc `images` au bloc `openGraph`. Si la page n'a pas d'image spécifique, utiliser `/og-default.png`.

### 2.4 Validation phase 2

```bash
# 1. Build
npm run build

# 2. Vérifier qu'une page renvoie bien les balises OG
npm run dev &
sleep 5
curl -s "http://localhost:3000/" | grep -E '(og:|twitter:)' | head -20
curl -s "http://localhost:3000/services/chatbot-ia/" | grep -E '(og:|twitter:)' | head -20
curl -s "http://localhost:3000/cas-clients/cabinet-comptable-lyon/" | grep -E '(og:|twitter:)' | head -20

# Doit afficher au minimum : og:title, og:description, og:url, og:image, og:type, og:locale

# 3. Commit
git add .
git commit -m "feat(seo): phase 2 — Open Graph globale + override par page (élimine 480 erreurs Ahrefs)"
```

Critère d'acceptation : les 3 `curl` renvoient au minimum `og:title`, `og:description`, `og:url`, `og:image`, `og:type`.

---

## PHASE 3 — Mettre à jour les liens internes pour utiliser le trailing slash (P1)

**Objectif** : éliminer les 136 pages avec liens internes vers redirections 3xx en ajoutant le `/` final à tous les `href` internes.

### 3.1 Identifier les liens sans trailing slash

```bash
# Identifier tous les hrefs internes sans / final dans les composants
grep -rEn 'href="/[a-z][^"]*[^/]"' app/ components/ lib/ 2>/dev/null | grep -v '\.png\|\.jpg\|\.svg\|\.ico\|#\|mailto:\|tel:' | head -100
```

### 3.2 Liste des URLs à corriger (par pattern)

Ces patterns DOIVENT toujours se terminer par `/` (alignement avec `trailingSlash: true` de next.config.ts) :

| Pattern | Exemple incorrect | Exemple correct |
|---------|-------------------|-----------------|
| `/contact` | `href="/contact"` | `href="/contact/"` |
| `/a-propos` | `href="/a-propos"` | `href="/a-propos/"` |
| `/agences` | `href="/agences"` | `href="/agences/"` |
| `/agent-ia` | `href="/agent-ia"` | `href="/agent-ia/"` |
| `/agent-ia/[metier]` | `href="/agent-ia/commercial"` | `href="/agent-ia/commercial/"` |
| `/services` | `href="/services"` | `href="/services/"` |
| `/services/[service]` | `href="/services/agents-ia"` | `href="/services/agents-ia/"` |
| `/cas-clients` | `href="/cas-clients"` | `href="/cas-clients/"` |
| `/cas-clients/[slug]` | `href="/cas-clients/cabinet-comptable-lyon"` | `href="/cas-clients/cabinet-comptable-lyon/"` |
| `/agence-ia-[ville]` | `href="/agence-ia-bordeaux"` | `href="/agence-ia-bordeaux/"` |
| `/blog` | `href="/blog"` | `href="/blog/"` |
| `/blog/[slug]` | `href="/blog/article-x"` | `href="/blog/article-x/"` |
| `/mentions-legales` | `href="/mentions-legales"` | `href="/mentions-legales/"` |
| `/confidentialite` | `href="/confidentialite"` | `href="/confidentialite/"` |
| `/cgv` | `href="/cgv"` | `href="/cgv/"` |
| `/service-client-althoce` | `href="/service-client-althoce"` | `href="/service-client-althoce/"` |

### 3.3 Stratégie de remplacement

**Ne PAS utiliser un sed global aveugle** qui pourrait casser les chemins relatifs ou les regex de routing. Procéder fichier par fichier :

```bash
# Pour chaque composant identifié à l'étape 3.1, vérifier visuellement
# le contexte avant de modifier, puis remplacer chaque href manuellement
# OU utiliser une regex précise par pattern
```

### 3.4 Exceptions à NE PAS toucher

- Les URLs des `metadata.alternates.canonical` (déjà bien configurés avec `/`)
- Les URLs des JSON-LD `@id` (déjà bien configurés avec `/`)
- Les URLs dans les fichiers `.md` du dossier `content/` (ce sont des docs, pas du code livré)
- Les URLs API (`/api/...`) qui n'ont pas de trailing slash
- Les URLs avec un `#` ou un query string `?` à la fin

### 3.5 Validation phase 3

```bash
# 1. Build
npm run build

# 2. Vérifier qu'il n'y a plus de href interne sans /
grep -rEn 'href="/[a-z][^"]*[^/]"' app/ components/ lib/ 2>/dev/null | grep -v '\.png\|\.jpg\|\.svg\|\.ico\|#\|mailto:\|tel:\|api/'

# Le résultat doit être vide ou ne contenir que des cas légitimes (API, ancres, etc.)

# 3. Tester que la home a bien des liens avec / final
npm run dev &
sleep 5
curl -s "http://localhost:3000/" | grep -oE 'href="/[^"]*"' | sort -u | head -30

# 4. Commit
git add .
git commit -m "feat(seo): phase 3 — trailing slash sur tous les liens internes (élimine 136 redirections 3xx)"
```

Critère d'acceptation : aucun lien interne sans `/` final dans le code source, hormis les exceptions listées en 3.4.

---

## PHASE 4 — Raccourcir les titres trop longs (P2)

**Objectif** : ramener les 49 titres > 60 caractères à 45-58 caractères.

### 4.1 Règles de réécriture

- **Cible** : 45 à 58 caractères (inclut le suffixe « | Althoce »)
- **Toujours inclure le mot-clé principal en début**
- **Toujours inclure « | Althoce » en fin** pour la cohérence brand
- **Supprimer les chiffres détaillés** s'ils prennent trop de place — les garder dans la meta description
- **Privilégier l'impact à l'exhaustivité**

### 4.2 Liste des 49 titres à corriger

#### Cas clients (9 pages — priorité maximale, titres très longs)

| URL | Titre actuel (longueur) | Nouveau titre (cible) |
|-----|-------------------------|------------------------|
| `/cas-clients/eti-agroalimentaire-agent-ia-juridique/` | (157) ETI agroalimentaire : 600 contrats/an pré-analysés et 4 jours libérés/mois pour... | **ETI agroalimentaire : agent IA juridique \| Althoce** (53) |
| `/cas-clients/eti-industrielle-agent-ia-achats/` | (145) ETI industrielle : -18 % sur les achats négociés et volume de devis ×4 pour 3 ac... | **ETI industrielle : agent IA achats \| Althoce** (47) |
| `/cas-clients/saas-b2b-agent-ia-marketing/` | (137) Éditeur SaaS B2B : content marketing multiplié par 4 et trafic organique +140 % | **SaaS B2B : agent IA marketing \| Althoce** (42) |
| `/cas-clients/distributeur-b2b-agent-ia-ops/` | (130) Distributeur B2B industriel : volume traité ×3 et fin du turnover assistant ops | **Distributeur B2B : agent IA opérations \| Althoce** (50) |
| `/cas-clients/cabinet-avocats-agent-ia-telephonique/` | (126) Cabinet d'avocats lyonnais : 0 appel raté et +130 % RDV qualifiés avec un agent... | **Cabinet d'avocats : agent IA téléphonique \| Althoce** (52) |
| `/cas-clients/cabinet-recrutement-paris-agent-ia-tri-cv/` | (123) Cabinet de recrutement parisien : ×3,5 volume CV triés avec un agent IA anti-bia... | **Cabinet recrutement : tri CV par IA \| Althoce** (47) |
| `/cas-clients/saas-b2b-agent-ia-service-client/` | (122) Éditeur SaaS B2B : 70 % des tickets N1 résolus en autonomie avec un agent IA ser... | **SaaS B2B : agent IA service client \| Althoce** (47) |
| `/cas-clients/negoce-vins-bordelais-agent-ia-sdr/` | (118) Négoce de vins bordelais : +200 % RDV qualifiés en 4 mois avec un agent SDR mult... | **Négoce de vins bordelais : agent IA SDR \| Althoce** (51) |
| `/cas-clients/cabinet-comptable-lyon/` | (~110) | **Cabinet comptable Lyon : agent IA finance \| Althoce** (52) |

#### Pages SEO local (19 villes)

Pattern actuel : « Agence IA à [Ville] : agents IA, automatisation et formation pour PME et ETI [+ qualificatif local] » (95-117 chars)
Pattern cible : « Agence IA à [Ville] : automatisation PME \| Althoce » (~50 chars)

| Ville | Nouveau titre |
|-------|---------------|
| Bordeaux | **Agence IA à Bordeaux : automatisation PME \| Althoce** |
| Paris | **Agence IA à Paris : automatisation PME \| Althoce** |
| Lyon | **Agence IA à Lyon : automatisation PME \| Althoce** |
| Marseille | **Agence IA à Marseille : automatisation PME \| Althoce** |
| Toulouse | **Agence IA à Toulouse : automatisation PME \| Althoce** |
| Nantes | **Agence IA à Nantes : automatisation PME \| Althoce** |
| Strasbourg | **Agence IA à Strasbourg : automatisation PME \| Althoce** |
| Montpellier | **Agence IA à Montpellier : automatisation PME \| Althoce** |
| Lille | **Agence IA à Lille : automatisation PME \| Althoce** |
| Rennes | **Agence IA à Rennes : automatisation PME \| Althoce** |
| Reims | **Agence IA à Reims : automatisation PME \| Althoce** |
| Saint-Étienne | **Agence IA à Saint-Étienne : automatisation PME \| Althoce** |
| Le Havre | **Agence IA au Havre : automatisation PME \| Althoce** |
| Nice | **Agence IA à Nice : automatisation PME \| Althoce** |
| Toulon | **Agence IA à Toulon : automatisation PME \| Althoce** |
| Grenoble | **Agence IA à Grenoble : automatisation PME \| Althoce** |
| Dijon | **Agence IA à Dijon : automatisation PME \| Althoce** |
| Angers | **Agence IA à Angers : automatisation PME \| Althoce** |
| Nîmes | **Agence IA à Nîmes : automatisation PME \| Althoce** |

#### Pages agent-ia métiers (9 pages)

| URL | Nouveau titre |
|-----|---------------|
| `/agent-ia/commercial/` | **Agent IA commercial : prospection automatisée \| Althoce** |
| `/agent-ia/marketing/` | **Agent IA marketing : contenu et SEO en pilote \| Althoce** |
| `/agent-ia/service-client/` | **Agent IA service client : tickets N1 et N2 \| Althoce** |
| `/agent-ia/finance/` | **Agent IA finance : notes de frais et compta \| Althoce** |
| `/agent-ia/rh/` | **Agent IA RH : tri CV et onboarding \| Althoce** |
| `/agent-ia/operations/` | **Agent IA opérations : back-office et ADV \| Althoce** |
| `/agent-ia/juridique/` | **Agent IA juridique : analyse de contrats \| Althoce** |
| `/agent-ia/achats/` | **Agent IA achats : sourcing et fournisseurs \| Althoce** |
| `/agent-ia/telephonique/` | **Agent IA téléphonique : réception d'appels \| Althoce** |

#### Pages services (vérifier toutes celles > 60 chars)

| URL | Nouveau titre suggéré (à vérifier longueur actuelle) |
|-----|------------------------------------------------------|
| `/services/agents-ia/` | **Agents IA sur mesure pour PME \| Althoce** |
| `/services/automatisation-ia/` | **Automatisation IA des processus métier \| Althoce** |
| `/services/employe-ia/` | **Employé IA : collaborateur virtuel \| Althoce** |
| `/services/chatbot-ia/` | **Chatbot IA RAG sur mesure \| Althoce** |
| `/services/developpement-ia/` | **Développement IA sur mesure \| Althoce** |
| `/services/integration-ia/` | **Intégration IA dans vos outils \| Althoce** |
| `/services/formation-ia/` | **Formation IA pour vos équipes \| Althoce** |
| `/services/audit-ia/` | **Audit IA pour PME : 30 min offertes \| Althoce** |

### 4.3 Procédure d'application

Pour chaque URL listée ci-dessus :

1. Ouvrir le fichier `app/[chemin]/page.tsx`
2. Trouver le bloc `metadata.title`
3. Remplacer la valeur par le nouveau titre suggéré
4. Si le titre suggéré est trop court ou ne convient pas, raccourcir le titre actuel en gardant le mot-clé principal en début et « | Althoce » en fin, sans dépasser 58 chars

### 4.4 Validation phase 4

```bash
# 1. Build
npm run build

# 2. Vérifier que les titres sont bien < 60 chars
npm run dev &
sleep 5
for url in "/" "/services/agents-ia/" "/agent-ia/commercial/" "/agence-ia-bordeaux/" "/cas-clients/cabinet-comptable-lyon/"; do
  title=$(curl -s "http://localhost:3000$url" | grep -oE '<title>[^<]+</title>' | sed 's/<[^>]*>//g')
  echo "$url : ${#title} chars — $title"
done

# 3. Commit
git add .
git commit -m "feat(seo): phase 4 — raccourcissement des 49 titres > 60 chars (cas clients, SEO local, métiers)"
```

Critère d'acceptation : tous les titres affichés ont une longueur ≤ 60 caractères.

---

## PHASE 5 — Raccourcir les meta-descriptions trop longues (P2)

**Objectif** : ramener les 51 meta-descriptions > 160 caractères à 140-155 caractères.

### 5.1 Règles de réécriture

- **Cible** : 140 à 155 caractères
- **Toujours inclure le mot-clé principal**
- **Toujours finir par un mini-CTA** : « 30 min offertes », « Bordeaux. », « Découvrir. »
- **Supprimer les répétitions** et les détails secondaires

### 5.2 Procédure d'application

Pour chaque URL avec une meta description > 160 chars :

1. Ouvrir `app/[chemin]/page.tsx`
2. Trouver le bloc `metadata.description`
3. Réécrire en respectant les règles ci-dessus
4. Compter les caractères avant de valider

### 5.3 Exemples de descriptions raccourcies

**Cas clients (le plus long : 338 chars → 150 chars)**

| URL | Nouvelle description |
|-----|---------------------|
| `/cas-clients/eti-industrielle-agent-ia-achats/` | « ETI industrielle française : un agent IA Althoce a permis -18 % sur les achats négociés et un volume de devis ×4 en 8 mois. Cas client détaillé. » (146 chars) |
| `/cas-clients/eti-agroalimentaire-agent-ia-juridique/` | « 600 contrats fournisseurs analysés par an grâce à un agent IA juridique Althoce. ETI agroalimentaire française. Cas client détaillé. » (130 chars) |

**Hubs métiers**

| URL | Nouvelle description |
|-----|---------------------|
| `/agent-ia/achats/` | « Agent IA achats Althoce : sourcing fournisseurs automatisé, analyse comparative, alertes sur les renouvellements. Souverain, France. 30 min offertes. » (150 chars) |
| `/agent-ia/marketing/` | « Agent IA marketing Althoce : contenu multi-canal, SEO, newsletters, veille à votre ton de marque. Souverain, France. 30 min offertes. » (132 chars) |

**Pages SEO local**

| URL | Nouvelle description |
|-----|---------------------|
| `/agence-ia-bordeaux/` | « Althoce, agence IA à Bordeaux : agents IA sur mesure, automatisation et formation pour les PME et ETI. Souverain, France. 30 min offertes. » (139 chars) |
| `/agence-ia-paris/` | « Althoce, agence IA à Paris : agents IA sur mesure, automatisation et formation pour les PME et ETI. Souverain, France. 30 min offertes. » (136 chars) |

Reproduire le pattern pour les 17 autres villes en remplaçant la ville.

### 5.4 Validation phase 5

```bash
# 1. Build
npm run build

# 2. Vérifier que toutes les meta descriptions sont < 160 chars
npm run dev &
sleep 5
for url in "/" "/services/agents-ia/" "/agent-ia/commercial/" "/agence-ia-bordeaux/" "/cas-clients/eti-industrielle-agent-ia-achats/"; do
  desc=$(curl -s "http://localhost:3000$url" | grep -oE '<meta name="description" content="[^"]+"' | head -1 | sed 's/.*content="//' | sed 's/"$//')
  echo "$url : ${#desc} chars"
done

# 3. Commit
git add .
git commit -m "feat(seo): phase 5 — raccourcissement des 51 meta descriptions > 160 chars"
```

Critère d'acceptation : toutes les meta descriptions affichées ont une longueur ≤ 160 caractères.

---

## PHASE 6 — Corriger les 76 erreurs schema.org (P3)

**Objectif** : valider les JSON-LD existants et corriger les erreurs de structure.

### 6.1 Audit des types de schémas utilisés

```bash
# Lister tous les types de JSON-LD dans le code
grep -rEn '"@type":' app/ | grep -oE '"@type":\s*"[^"]+"' | sort -u
```

Types attendus : Organization, WebSite, ProfessionalService, Service, Article, FAQPage, BreadcrumbList, LocalBusiness, ItemList, ContactPage, Person.

### 6.2 Erreurs typiques à corriger

#### Erreur typique 1 : `Service` sans `provider` complet
```ts
// AVANT (erreur)
{
  "@type": "Service",
  "name": "...",
  "provider": "Althoce" // string, devrait être objet
}

// APRÈS
{
  "@type": "Service",
  "name": "...",
  "provider": {
    "@type": "Organization",
    "@id": "https://althoce.com/#organization",
    "name": "Althoce",
    "url": "https://althoce.com/"
  }
}
```

#### Erreur typique 2 : `BreadcrumbList` sans `position` séquentielle ou avec URL incorrectes

```ts
// Vérifier que chaque item a position 1, 2, 3, ... sans saut
// Et que les URLs ont le / final
```

#### Erreur typique 3 : `FAQPage` avec questions/réponses mal structurées

```ts
// AVANT (erreur)
{
  "@type": "FAQPage",
  "mainEntity": "Une question ?"
}

// APRÈS
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Une question ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Réponse complète."
      }
    }
  ]
}
```

#### Erreur typique 4 : `Article` sans `author`, `datePublished`, `image`

```ts
{
  "@type": "Article",
  "headline": "Titre",
  "datePublished": "2026-06-24",
  "dateModified": "2026-06-24",
  "author": {
    "@type": "Organization",
    "@id": "https://althoce.com/#organization",
    "name": "Althoce"
  },
  "image": "https://althoce.com/og-default.png",
  "publisher": {
    "@type": "Organization",
    "@id": "https://althoce.com/#organization",
    "name": "Althoce",
    "logo": {
      "@type": "ImageObject",
      "url": "https://althoce.com/favicons/apple-touch-icon.png"
    }
  }
}
```

### 6.3 Validation avec Google Rich Results Test

Après corrections, tester chaque type de page avec :

```bash
# URL : https://search.google.com/test/rich-results
# Entrer manuellement les URLs principales :
# - https://althoce.com/
# - https://althoce.com/services/agents-ia/
# - https://althoce.com/agent-ia/commercial/
# - https://althoce.com/cas-clients/cabinet-comptable-lyon/
# - https://althoce.com/agence-ia-bordeaux/
```

### 6.4 Validation phase 6

```bash
# 1. Build
npm run build

# 2. Vérifier l'absence d'erreur JSON-LD parsable
npm run dev &
sleep 5
curl -s "http://localhost:3000/" | grep -oE '<script type="application/ld\+json">[^<]+</script>' | python3 -c "
import sys, json
for line in sys.stdin:
    content = line.replace('<script type=\"application/ld+json\">', '').replace('</script>', '').strip()
    if content:
        try:
            json.loads(content)
            print('  ✓ JSON valide')
        except json.JSONDecodeError as e:
            print(f'  ✗ JSON INVALIDE : {e}')
"

# 3. Commit
git add .
git commit -m "feat(seo): phase 6 — correction des erreurs schema.org (76 erreurs Ahrefs)"
```

Critère d'acceptation : tous les JSON-LD sont valides et passent le Google Rich Results Test.

---

## PHASE 7 — Merge et déploiement

### 7.1 Vérification finale globale

```bash
# Tous les tests passent
npm run lint
npx tsc --noEmit
npm run build

# Re-vérification des points critiques
grep -rn 'cal\.com' app/ components/ lib/ content/ 2>/dev/null
# Doit être vide.

grep -rEn 'href="/[a-z][^"]*[^/]"' app/ components/ lib/ 2>/dev/null | grep -v '\.png\|\.jpg\|\.svg\|\.ico\|#\|mailto:\|tel:\|api/'
# Doit être vide ou contenir uniquement des exceptions documentées.
```

### 7.2 Merge sur main

```bash
git checkout main
git pull
git merge fix/seo-audit-ahrefs-juin-2026 --no-ff
git push origin main
```

### 7.3 Vercel déploie automatiquement

Attendre 2-3 minutes que Vercel build. Puis tester en production :

```bash
# Vérifier les redirections en production
curl -sI "https://althoce.com/conseil/" -o /dev/null -w "  /conseil/ : HTTP %{http_code} → %{redirect_url}\n"
curl -sI "https://althoce.com/automatisation/" -o /dev/null -w "  /automatisation/ : HTTP %{http_code} → %{redirect_url}\n"

# Vérifier que les Open Graph sont en place
curl -s "https://althoce.com/services/agents-ia/" | grep -E 'og:(title|description|image)' | head -5

# Vérifier que les titres sont raccourcis
curl -s "https://althoce.com/cas-clients/eti-industrielle-agent-ia-achats/" | grep -oE '<title>[^<]+</title>'
```

### 7.4 Relancer un audit Ahrefs

Une fois le déploiement validé :
1. Aller dans Ahrefs Webmaster Tools
2. Lancer un nouvel audit de site
3. Comparer le score avec l'audit du 24 juin (72/100)
4. **Cible** : 92-95/100

---

## ANNEXE 1 — Récapitulatif des chantiers traités

| Phase | Chantier | Volume | Statut attendu après fix |
|-------|----------|--------|---------------------------|
| 1 | 404 internes (7 URLs) | 7 entrées | 0 |
| 1 | 404 externe Cal.com | 1 entrée | 0 |
| 2 | Open Graph incomplètes | 480 pages | 0 |
| 3 | Liens internes vers 3xx | 136 pages | 0-10 (résiduel acceptable) |
| 4 | Titres trop longs | 49 pages | 0 |
| 5 | Meta descriptions trop longues | 51 pages | 0 |
| 6 | Erreurs schema.org | 76 erreurs | 0-5 (mineures acceptables) |

## ANNEXE 2 — Commandes utiles pour le debug

```bash
# Vérifier le sitemap après changements
curl -s "https://althoce.com/sitemap.xml" | head -50

# Vérifier le robots.txt
curl -s "https://althoce.com/robots.txt"

# Tester le rendu d'une page spécifique
curl -s "https://althoce.com/services/agents-ia/" | head -50

# Vérifier tous les JSON-LD d'une page
curl -s "https://althoce.com/" | grep -oE '<script type="application/ld\+json">[^<]+</script>' | python3 -m json.tool
```

---

## ANNEXE 3 — Points de vigilance

1. **Pas de modification du fichier `next.config.ts` au-delà des redirections** — la config `trailingSlash: true` et les autres redirects existants doivent rester intactes.

2. **Pas de modification du contenu textuel principal** des pages — seuls les meta tags (`title`, `description`, `openGraph`) doivent être touchés. Les H1, H2, body restent identiques.

3. **Tester chaque commit individuellement** — si un build casse, revenir au commit précédent et investiguer avant de continuer.

4. **Ne pas toucher aux fichiers markdown** dans `content/` — ce sont les documents de référence, pas le code de production.

5. **Conserver l'image `og-default.png`** dans `public/` si elle existe déjà. Si elle est absente, créer un placeholder texte 1200×630 avec « Althoce — Agents IA & Automatisation » en attendant l'image définitive du designer.

6. **Ne pas créer de nouvelles pages** — toute redirection doit pointer vers une page existante ou la home.

---

## ANNEXE 4 — Notes pour le client

Une fois ce plan exécuté, plusieurs actions complémentaires sont à mener **manuellement** côté client (pas par Claude Code) :

1. **Search Console** : relancer une validation des erreurs précédemment signalées
2. **Ahrefs Webmaster Tools** : relancer un audit complet
3. **Google Rich Results Test** : valider 5-10 pages clés manuellement
4. **LinkedIn Post Inspector** : vérifier que les previews fonctionnent correctement (https://www.linkedin.com/post-inspector/)
5. **Facebook Sharing Debugger** : idem (https://developers.facebook.com/tools/debug/)

---

*Plan rédigé le 24 juin 2026 à partir de l'audit Ahrefs Webmaster Tools du même jour.*
*Score initial : 72/100. Cible : 92-95/100.*
