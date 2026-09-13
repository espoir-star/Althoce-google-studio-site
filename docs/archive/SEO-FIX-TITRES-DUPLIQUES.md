# Fix titres dupliqués « Althoce | Althoce »

**Destinataire** : Claude Code
**Priorité** : P0 — bug CTR critique
**Effort estimé** : 20 minutes
**Impact attendu** : +30 à 50 % de CTR organique sur les pages concernées

---

## 1. DIAGNOSTIC

### Le bug observé

Dans Google Search Console, plusieurs pages apparaissent avec un titre qui contient **deux fois « Althoce »** :

- `/a-propos` → « L'histoire et la culture d'Althoce **| Althoce | Althoce** »
- `/agences/` → « Une IA souveraine, responsable, accessible à toutes les PME françaises **| Althoce | Althoce** »

### La cause racine

Dans `app/layout.tsx`, le root layout déclare un template de titre :

```ts
export const metadata: Metadata = {
  title: {
    default: 'Althoce | Agents IA & Automatisation pour PME françaises',
    template: '%s | Althoce',  // ← Ce template ajoute automatiquement " | Althoce" à chaque page
  },
  // ...
};
```

Le template `'%s | Althoce'` ajoute systématiquement ` | Althoce` à la fin de chaque `metadata.title` de page enfant qui utilise la syntaxe `string`.

Mais **beaucoup de pages contiennent déjà `| Althoce` (ou `— Althoce`) dans leur `title`**, ce qui crée la duplication :

```
Page : title: 'Foo | Althoce'
Template : '%s | Althoce' ajoute ' | Althoce'
Résultat dans la SERP : 'Foo | Althoce | Althoce'   ← BUG
```

### Le scope du bug

**Important** : la duplication ne concerne **que le `metadata.title` au niveau racine** (qui utilise le template). Les `openGraph.title` et `twitter.title` ne passent pas par le template — ils sortent tels quels. Donc on ne touche **que le `title` racine**, pas les OG/Twitter.

---

## 2. RÈGLE À APPLIQUER

**Dans chaque fichier `app/**/page.tsx`** :

1. Identifier le **`metadata.title`** racine (la propriété directement sous `export const metadata`, pas celle sous `openGraph` ni `twitter`).
2. Si sa valeur (string) se termine par l'un des patterns suivants, supprimer ce suffixe :
   - ` | Althoce`
   - ` — Althoce`
   - ` - Althoce`
3. Conserver les `openGraph.title` et `twitter.title` **tels quels** — ne PAS les modifier.
4. Pour le fichier `app/page.tsx` (la home), le titre commence par « Althoce » au début et ne se termine PAS par `| Althoce` → vérifier qu'il ne soit pas touché par erreur, mais lui ne souffre pas du bug.

### Cas spéciaux à NE PAS toucher

- **`app/layout.tsx`** : c'est lui qui définit le template, il reste intact.
- **`app/page.tsx` (home)** : son titre est « Althoce | Agence IA & Automatisation — Agents 100% Autonomes pour PME », sans ` | Althoce` à la fin → ne pas modifier.
- **`app/blog/[slug]/page.tsx`** : son titre est `${post.title} | Blog Althoce` (template dynamique pour articles) → ne pas modifier, le suffixe « Blog Althoce » est différencié et utile.
- **`app/calculateur-roi/page.tsx`** : titre « Calculateur ROI Agents IA | Althoce ». Mais cette page n'utilise pas le template du root layout (à vérifier rapidement dans le code) → si elle hérite du template, retirer ` | Althoce`. Si elle a sa propre metadata indépendante, laisser.
- **`app/blog/page.tsx`** : titre « Blog | Althoce — IA & Automatisation pour PME ». Retirer ` | Althoce — IA & Automatisation pour PME` et laisser juste « Blog » ? À discuter — le plus simple est de laisser ce fichier intact et de revenir dessus plus tard si la SERP est sale.

---

## 3. LISTE EXHAUSTIVE DES FICHIERS À MODIFIER

Voici les 36 fichiers identifiés par `grep`. Pour chacun, modifier **uniquement le `metadata.title` racine** (pas OG, pas Twitter).

### Pages institutionnelles

| Fichier | `title` actuel | Nouveau `title` |
|---------|----------------|------------------|
| `app/a-propos/page.tsx` | `"L'histoire et la culture d'Althoce \| Althoce"` | `"L'histoire et la culture d'Althoce"` |
| `app/contact/page.tsx` | `'Discutons de votre projet — 30 minutes offertes \| Althoce'` | `'Discutons de votre projet — 30 minutes offertes'` |
| `app/confidentialite/page.tsx` | `'Politique de confidentialité \| Althoce'` | `'Politique de confidentialité'` |

### Hubs et services

| Fichier | `title` actuel | Nouveau `title` |
|---------|----------------|------------------|
| `app/agent-ia/page.tsx` | `'Agents IA sur-mesure par métier — Commercial, Finance, RH, Juridique, Achats \| Althoce'` | `'Agents IA sur-mesure par métier — Commercial, Finance, RH, Juridique, Achats'` |
| `app/agences/page.tsx` | `'Une IA souveraine, responsable, accessible à toutes les PME françaises \| Althoce'` | `'Une IA souveraine, responsable, accessible à toutes les PME françaises'` |
| `app/services/page.tsx` | `'Tous nos services IA pour PME et ETI : agents, automatisation, employé IA, audit \| Althoce'` | `'Tous nos services IA pour PME et ETI : agents, automatisation, employé IA, audit'` |
| `app/cas-clients/page.tsx` | `'Cas clients : ce que nos agents IA ont changé concrètement chez des PME et ETI françaises \| Althoce'` | `'Cas clients : ce que nos agents IA ont changé concrètement chez des PME et ETI françaises'` |

### Services individuels (services/[xxx]/page.tsx)

| Fichier | `title` actuel | Nouveau `title` |
|---------|----------------|------------------|
| `app/services/agents-ia/page.tsx` | `'Agents IA sur-mesure pour PME et ETI — Althoce'` | `'Agents IA sur-mesure pour PME et ETI'` |
| `app/services/automatisation-ia/page.tsx` | `'Automatisation IA sur-mesure pour PME & ETI — Althoce'` | `'Automatisation IA sur-mesure pour PME & ETI'` |
| `app/services/employe-ia/page.tsx` | `'Employé IA Althoce — Un poste à temps plein automatisé'` | **Cas particulier** : Althoce est au milieu du titre. Le template ajoutera ` | Althoce` → résultat `'Employé IA Althoce — Un poste à temps plein automatisé \| Althoce'`. **Action** : retirer Althoce du milieu → `'Employé IA — Un poste à temps plein automatisé'` |
| `app/services/chatbot-ia/page.tsx` | `'Chatbot IA RAG sur-mesure : ancré sur votre base de connaissances \| Althoce'` | `'Chatbot IA RAG sur-mesure : ancré sur votre base de connaissances'` |
| `app/services/developpement-ia/page.tsx` | `'Développement IA sur-mesure : code de production, MLOps, monitoring \| Althoce'` | `'Développement IA sur-mesure : code de production, MLOps, monitoring'` |
| `app/services/integration-ia/page.tsx` | `'Intégration IA dans votre SI : sécurisée, monitorée, gouvernée \| Althoce'` | `'Intégration IA dans votre SI : sécurisée, monitorée, gouvernée'` |
| `app/services/formation-ia/page.tsx` | `'Formation IA en entreprise — Ateliers, conseil, accompagnement \| Althoce'` | `'Formation IA en entreprise — Ateliers, conseil, accompagnement'` |
| `app/services/audit-ia/page.tsx` | `'Audit IA pour PME et ETI : cartographie chiffrée des opportunités \| Althoce'` | `'Audit IA pour PME et ETI : cartographie chiffrée des opportunités'` |

### Agents IA par métier (agent-ia/[xxx]/page.tsx)

| Fichier | `title` actuel | Nouveau `title` |
|---------|----------------|------------------|
| `app/agent-ia/commercial/page.tsx` | `'Agent IA pour le commercial : prospection et qualification en pilote automatique \| Althoce'` | `'Agent IA pour le commercial : prospection et qualification en pilote automatique'` |
| `app/agent-ia/marketing/page.tsx` | `'Agent IA pour le marketing : contenu, SEO, social, email en pilote automatique \| Althoce'` | `'Agent IA pour le marketing : contenu, SEO, social, email en pilote automatique'` |
| `app/agent-ia/service-client/page.tsx` | `'Agent IA pour le support client : N1 absorbé en 24/7 \| Althoce'` | `'Agent IA pour le support client : N1 absorbé en 24/7'` |
| `app/agent-ia/finance/page.tsx` | `'Agent IA pour la finance et la comptabilité — Althoce'` | `'Agent IA pour la finance et la comptabilité'` |
| `app/agent-ia/operations/page.tsx` | `'Agent IA pour les ops : mails, documents, ADV en pilote automatique \| Althoce'` | `'Agent IA pour les ops : mails, documents, ADV en pilote automatique'` |
| `app/agent-ia/juridique/page.tsx` | `'Agent IA pour le juridique : analyse contrats, veille, rédaction courante \| Althoce'` | `'Agent IA pour le juridique : analyse contrats, veille, rédaction courante'` |
| `app/agent-ia/achats/page.tsx` | `'Agent IA pour les achats : sourcing, devis, contrats en pilote automatique \| Althoce'` | `'Agent IA pour les achats : sourcing, devis, contrats en pilote automatique'` |
| `app/agent-ia/telephonique/page.tsx` | `"Agent IA téléphonique : réception d'appels \| Althoce"` | `"Agent IA téléphonique : réception d'appels"` |

### Agences IA villes (agence-ia-[ville]/page.tsx)

19 fichiers identiques sur le pattern `'Agence IA à [Ville] : agents IA pour PME [adj-local] | Althoce'`.

**Action systématique** : retirer ` | Althoce` de la fin de chaque `metadata.title` racine.

Liste des fichiers :
- `app/agence-ia-bordeaux/page.tsx`
- `app/agence-ia-paris/page.tsx`
- `app/agence-ia-lyon/page.tsx`
- `app/agence-ia-marseille/page.tsx`
- `app/agence-ia-toulouse/page.tsx`
- `app/agence-ia-nantes/page.tsx`
- `app/agence-ia-strasbourg/page.tsx`
- `app/agence-ia-montpellier/page.tsx`
- `app/agence-ia-lille/page.tsx`
- `app/agence-ia-rennes/page.tsx`
- `app/agence-ia-reims/page.tsx`
- `app/agence-ia-saint-etienne/page.tsx`
- `app/agence-ia-le-havre/page.tsx`
- `app/agence-ia-nice/page.tsx`
- `app/agence-ia-toulon/page.tsx`
- `app/agence-ia-grenoble/page.tsx`
- `app/agence-ia-dijon/page.tsx`
- `app/agence-ia-angers/page.tsx`
- `app/agence-ia-nimes/page.tsx`

### Cas clients individuels

| Fichier | `title` actuel | Nouveau `title` |
|---------|----------------|------------------|
| `app/cas-clients/cabinet-comptable-lyon/page.tsx` | `"Cabinet comptable Lyon : agent IA finance \| Althoce"` | `"Cabinet comptable Lyon : agent IA finance"` |
| `app/cas-clients/cabinet-avocats-agent-ia-telephonique/page.tsx` | `"Cabinet d'avocats : agent IA téléphonique \| Althoce"` | `"Cabinet d'avocats : agent IA téléphonique"` |
| `app/cas-clients/cabinet-recrutement-paris-agent-ia-tri-cv/page.tsx` | `'Cabinet recrutement : tri CV par IA \| Althoce'` | `'Cabinet recrutement : tri CV par IA'` |

Pour les 6 autres cas clients (`negoce-vins-bordelais`, `saas-b2b-marketing`, `saas-b2b-service-client`, `distributeur-b2b-ops`, `eti-agroalimentaire-juridique`, `eti-industrielle-achats`), appliquer la même règle si le pattern ` | Althoce` est présent.

---

## 4. EXÉCUTION ÉTAPE PAR ÉTAPE

### Étape 1 — Créer une branche

```bash
git checkout -b fix/seo-titres-dupliques
```

### Étape 2 — Vérifier le template du root layout

Ouvre `app/layout.tsx`. Confirme que tu trouves bien :

```ts
title: {
  default: 'Althoce | Agents IA & Automatisation pour PME françaises',
  template: '%s | Althoce',
},
```

**Ne pas modifier ce fichier.** C'est lui qui ajoute automatiquement ` | Althoce` à toutes les pages.

### Étape 3 — Appliquer le fix systématique

Pour chaque fichier listé dans la section 3 :

1. Ouvre le fichier
2. Identifie le bloc `metadata.title` au niveau racine (premier `title:` dans `export const metadata`)
3. Si la valeur string se termine par ` | Althoce`, ` — Althoce` ou ` - Althoce`, retire ce suffixe
4. Pour `services/employe-ia/page.tsx` : retire « Althoce » du milieu du titre aussi (cas particulier)
5. **Ne touche PAS** aux `openGraph.title`, `twitter.title`, `description`, `keywords`, etc.

### Étape 4 — Vérifier qu'on n'a rien cassé

```bash
# TypeScript check
npx tsc --noEmit

# Build complet
npm run build
```

Les deux commandes doivent passer sans erreur.

### Étape 5 — Vérifier le rendu en local

```bash
npm run dev &
sleep 5

# Vérifier que les titres sont propres (un seul "Althoce")
for url in "/" "/a-propos/" "/agences/" "/agent-ia/" "/services/" "/cas-clients/" "/agence-ia-lille/" "/agence-ia-bordeaux/" "/agent-ia/finance/" "/agent-ia/juridique/" "/services/audit-ia/"; do
  title=$(curl -s "http://localhost:3000${url}" | grep -oE '<title>[^<]+</title>' | sed 's/<[^>]*>//g')
  count=$(echo "$title" | grep -oE 'Althoce' | wc -l)
  if [ $count -le 1 ]; then status="✓ OK ($count Althoce)"; else status="⚠️ DOUBLON ($count Althoce)"; fi
  echo "  $url : $status"
  echo "      → $title"
done
```

**Critère d'acceptation** : tous les titres affichent « Althoce » **au maximum 1 seule fois** (1 fois si le template a ajouté le suffixe, 0 fois pour la home qui a son propre titre indépendant).

### Étape 6 — Commit et push

```bash
git add app/
git commit -m "fix(seo): élimine la duplication 'Althoce | Althoce' dans les titres SERP"
git push origin fix/seo-titres-dupliques

# Si tout est OK, merger sur main
git checkout main
git merge fix/seo-titres-dupliques --no-ff
git push origin main
```

### Étape 7 — Vérifier en production

Attendre 2 minutes que Vercel build, puis :

```bash
for url in "/" "/a-propos/" "/agences/" "/agent-ia/" "/services/" "/cas-clients/" "/agence-ia-lille/" "/agence-ia-bordeaux/" "/agent-ia/finance/" "/agent-ia/juridique/"; do
  title=$(curl -s "https://althoce.com${url}" | grep -oE '<title>[^<]+</title>' | sed 's/<[^>]*>//g')
  count=$(echo "$title" | grep -oE 'Althoce' | wc -l)
  if [ $count -le 1 ]; then status="✓ OK"; else status="⚠️ DOUBLON"; fi
  echo "  $url : $status → $title"
done
```

Tous les titres doivent avoir exactement 1 occurrence de « Althoce » (ou 0 pour la home).

---

## 5. EFFET ATTENDU

Avant le fix, dans Google SERP :
```
L'histoire et la culture d'Althoce | Althoce | Althoce
althoce.com › a-propos
```

Après le fix, dans Google SERP :
```
L'histoire et la culture d'Althoce | Althoce
althoce.com › a-propos
```

CTR attendu en hausse de **+30 à +50 %** sur les pages concernées sous 2-4 semaines (le temps que Google recrawle et mette à jour le snippet affiché).

---

## 6. POINTS DE VIGILANCE

1. **Ne pas modifier `app/layout.tsx`** — c'est le template racine, il est correct.
2. **Ne pas modifier `app/page.tsx` (home)** — son titre ne se termine pas par ` | Althoce`, il est correct.
3. **Ne pas modifier les `openGraph.title` ou `twitter.title`** — ils ne passent pas par le template, ils sortent tels quels et sont OK avec « Althoce » dedans pour le partage social.
4. **Ne pas toucher au contenu des H1, H2, descriptions ou autres metadata** — uniquement le `title` au niveau racine.
5. **`app/blog/[slug]/page.tsx`** : son titre est dynamique (`${post.title} | Blog Althoce`) → ne pas modifier, le template ajoutera ` | Althoce` pour donner par exemple « Mon article | Blog Althoce | Althoce ». **Si ce double Althoce est confirmé en SERP plus tard**, on traitera dans un commit séparé en passant à `title: { absolute: '...' }`.
6. **`app/blog/page.tsx`** : titre actuel « Blog | Althoce — IA & Automatisation pour PME ». Le template ajoutera ` | Althoce`. **Action** : retirer ` | Althoce — IA & Automatisation pour PME` et laisser juste `'Blog'`.

---

## 7. CHECKLIST DE COMMIT

Avant de pousser, vérifier :

- [ ] `npx tsc --noEmit` passe
- [ ] `npm run build` passe
- [ ] Tests curl locaux : 0 doublon Althoce sur les 10 URLs testées
- [ ] `app/layout.tsx` n'a PAS été modifié
- [ ] `app/page.tsx` n'a PAS été modifié
- [ ] Les `openGraph.title` n'ont PAS été modifiés (vérifier sur 3-4 fichiers échantillons)
- [ ] Les `twitter.title` n'ont PAS été modifiés (idem)
- [ ] Le diff git ne touche QUE les `metadata.title` racine

---

*Brief rédigé le 26 juin 2026 à partir de l'analyse des données Search Console.*
*Source des données : capture Search Console + grep complet du code source.*
