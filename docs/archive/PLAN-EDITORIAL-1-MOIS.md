# Plan éditorial Althoce — 1 mois, 8 articles

**Période** : semaine du 30 juin au 25 juillet 2026
**Cadence** : 2 articles par semaine, mardi 9h et jeudi 9h
**Total** : 8 articles publiés
**Calibré sur** : données Search Console réelles + audit Ahrefs + analyse des opportunités identifiées

---

## 1. PHILOSOPHIE DU PLAN

### Pourquoi 2 articles par semaine

C'est le **sweet spot pour un site en amorçage** comme althoce.com :

- Trop lent (1/semaine) : on perd l'inertie du fix trailing slash, le crawl budget reste limité
- Trop rapide (3+/semaine) : risque de signal de contenu dilué, Google se méfie
- 2/semaine : signal de fraîcheur récurrent, autorité topique qui se construit, et c'est aussi le rythme des posts LinkedIn associés

### Pourquoi cet ordre d'articles

Le calendrier est **inversé par rapport à la v1** parce que les données Search Console nous ont révélé où sont les vraies opportunités. On boost en priorité les pages **déjà ranking** avec des articles dédiés.

| Page existante | Métrique observée | Article qui la boost |
|----------------|-------------------|----------------------|
| `/agent-ia/finance/` | Position 16, 28 impressions, déjà #1 sur niche | Article #1 (cabinets comptables) |
| `/agence-ia-lille/` | **115 impressions !** position 27 | Article #2 (Lille) |
| `/agences/` | Position **8,9** sur « ia souveraine » | Article #3 (hébergement France) |
| `/agent-ia/juridique/` | 58 impressions, position 16 | Article #4 (cabinets avocats) |
| `/agent-ia/achats/` | 52 impressions, position 44 | Article #5 (achats) |

---

## 2. CALENDRIER DE PUBLICATION

| Sem. | Mardi 9h | Jeudi 9h | Boost ciblé |
|------|----------|----------|-------------|
| **S1 — 30 juin / 4 juillet** | **#1** Cabinets comptables | **#2** Agence IA à Lille | finance + Lille |
| **S2 — 7 / 11 juillet** | **#3** Hébergement IA France | **#4** Cabinets d'avocats | souveraineté + juridique |
| **S3 — 14 / 18 juillet** | **#5** Automatiser les achats | **#6** Combien de temps pour déployer | achats + long tail |
| **S4 — 21 / 25 juillet** | **#7** RAG, fine-tuning, prompt expliqués | **#8** IA Act août 2026 | pédagogie + actualité |

### Pourquoi mardi 9h et jeudi 9h ?

Les meilleurs créneaux B2B français pour la consommation de contenu organique + LinkedIn. C'est aussi aligné avec les règles algorithmiques de LinkedIn 2026 que nous appliquons sur les posts associés.

---

## 3. SOLUTION POUR LES IMAGES (ZÉRO EFFORT DE TON CÔTÉ)

### Le problème

Créer une image cover pour chaque article (Canva, Figma, banque d'images) prend 30-60 min par article. Sur 8 articles, c'est 4-8 heures de ton temps. Inacceptable pour un plan industrialisable.

### La solution : génération programmatique

Je génère chaque cover **avec un script Python** que je lance pendant la rédaction. Le script utilise :

- Le logo officiel Althoce (déjà reproduit dans le script de l'OG image)
- La même palette brand (ink `#09090b`, accent bleu `#2563eb`)
- La même typographie (DejaVu Sans bold)
- Un **template unifié** avec : badge catégorie + titre + URL en bas

Chaque cover est :
- **1200×630** (parfait pour OG, Twitter Card, hero blog)
- **~3 secondes** à générer
- **Brand-aligned** automatiquement
- **Unique** par article (titre différent, catégorie différente, légère variation visuelle)

### Concrètement, voici comment ça marche

Pour chaque article, je te livre **un dossier complet** contenant :
- Le fichier `.md` ou `.mdx` de l'article
- Le fichier `cover.png` (1200×630) déjà brandé
- Le brief pour Claude Code (intégration au site)

**Effort de ton côté pour les images : zéro.** Tu reçois les covers prêtes à publier.

### Variantes par catégorie

Pour différencier visuellement les articles, j'utilise un système de badges de catégorie en haut à droite de chaque cover :

- `FINANCE` → badge bleu sur les articles comptables / finance
- `SOUVERAINETÉ` → badge bleu sur les articles RGPD / hébergement
- `JURIDIQUE` → badge bleu sur les articles cabinets avocats / IA Act
- `OPS` → badge bleu sur les articles opérationnels
- `GUIDE` → badge bleu sur les articles tutoriels
- `LOCAL` → badge bleu sur les articles SEO local

Le badge change, le reste du template reste identique. C'est ce que font les médias B2B sérieux pour leur cohérence visuelle.

---

## 4. WORKFLOW DE PUBLICATION

### Acteurs et leurs rôles

| Rôle | Quoi | Quand |
|------|------|-------|
| **Moi** (Claude in chat) | Rédige les 2 articles de la semaine + génère les 2 covers | Chaque lundi matin |
| **Toi** | Valide les 2 articles (lecture rapide + 1 mot d'approbation par article) | Chaque lundi soir, ~15 min |
| **Claude Code** | Crée les fichiers MDX, commit, push, vérifie le build | Mardi et jeudi à 9h (déclenchement par toi via 1 message) |
| **Vercel** | Déploie automatiquement après le push | Automatique, ~2 min |
| **Toi** (encore) | Publie le post LinkedIn associé | Mardi/jeudi 9h, 5 min/post |

### Workflow détaillé semaine par semaine

**Lundi 9h** : je commence la rédaction des 2 articles de la semaine.

**Lundi 18h (au plus tard)** : je te livre les 2 packages complets (.md + cover.png + brief Claude Code).

**Lundi soir** : tu lis rapidement les 2 articles (15 min/article max). Tu valides ou tu demandes des modifs.

**Mardi 8h45** : tu envoies un message court à Claude Code du type :
> « Publie l'article #N qui est dans `content/blog/cabinets-comptables-10-personnes-2026.md`, commit avec le message indiqué dans le brief, push sur main. »

**Mardi 9h** : Claude Code exécute. Vercel déploie. L'article est en ligne.

**Mardi 9h05** : tu publies ton post LinkedIn associé (je te livre le copy en même temps que l'article).

**Mercredi** : je travaille sur les articles de la semaine suivante.

**Jeudi** : même séquence que mardi pour l'article #2 de la semaine.

### Total de ton temps par semaine

- Lundi : 30 min de validation des 2 articles
- Mardi et jeudi : 5 min de trigger Claude Code + 5 min de post LinkedIn (×2 = 20 min)
- Total : **~50 min par semaine**

C'est largement gérable, et tu gardes la main sur tout ce qui est publié.

---

## 5. LE DÉTAIL DES 8 ARTICLES

### Article #1 — Cabinets comptables de moins de 10 personnes

| Champ | Valeur |
|-------|--------|
| **Date de publication** | Mardi 30 juin 2026, 9h |
| **Slug URL** | `/blog/ia-cabinets-comptables-petits-cas-usage-2026/` |
| **Titre SEO** | 5 cas d'usage IA pour les cabinets comptables de moins de 10 personnes en 2026 |
| **Mot-clé principal** | ia cabinet comptable petite structure |
| **Catégorie** | FINANCE |
| **Longueur cible** | 1 400 mots |
| **Pages internes linkées** | `/agent-ia/finance/`, `/cas-clients/cabinet-comptable-lyon/`, `/services/automatisation-ia/`, `/services/chatbot-ia/`, `/contact/` |
| **Pourquoi maintenant** | Boost `/agent-ia/finance/` (déjà #1 sur niche, 28 impressions) |

### Article #2 — Agence IA à Lille

| Champ | Valeur |
|-------|--------|
| **Date de publication** | Jeudi 2 juillet 2026, 9h |
| **Slug URL** | `/blog/agence-ia-lille-choisir-partenaire-2026/` |
| **Titre SEO** | Agence IA à Lille : 7 critères pour choisir son partenaire en 2026 |
| **Mot-clé principal** | agence ia lille |
| **Catégorie** | LOCAL |
| **Longueur cible** | 1 200 mots |
| **Pages internes linkées** | `/agence-ia-lille/`, `/agences/`, `/services/`, `/agent-ia/`, `/contact/` |
| **Pourquoi maintenant** | `/agence-ia-lille/` génère **115 impressions** et position 27. Le boost peut faire remonter à top 10. |

### Article #3 — Hébergement IA en France

| Champ | Valeur |
|-------|--------|
| **Date de publication** | Mardi 7 juillet 2026, 9h |
| **Slug URL** | `/blog/hebergement-ia-france-guide-pme-2026/` |
| **Titre SEO** | Hébergement IA en France : le guide pratique pour PME en 2026 |
| **Mot-clé principal** | hébergement ia france |
| **Catégorie** | SOUVERAINETÉ |
| **Longueur cible** | 1 800 mots |
| **Pages internes linkées** | `/agences/`, `/services/agents-ia/`, `/services/developpement-ia/`, `/confidentialite/`, `/contact/` |
| **Pourquoi maintenant** | `/agences/` est à position **8,9** sur « agence ia souveraine france ». Un article pilier peut le passer en top 5. |

### Article #4 — Cabinets d'avocats

| Champ | Valeur |
|-------|--------|
| **Date de publication** | Jeudi 10 juillet 2026, 9h |
| **Slug URL** | `/blog/ia-cabinets-avocats-5-automatisations-2026/` |
| **Titre SEO** | IA dans les cabinets d'avocats : 5 automatisations qui fonctionnent vraiment en 2026 |
| **Mot-clé principal** | ia pour cabinets avocats |
| **Catégorie** | JURIDIQUE |
| **Longueur cible** | 1 400 mots |
| **Pages internes linkées** | `/agent-ia/juridique/`, `/agent-ia/telephonique/`, `/cas-clients/cabinet-avocats-agent-ia-telephonique/`, `/services/agents-ia/`, `/contact/` |
| **Pourquoi maintenant** | `/agent-ia/juridique/` a 58 impressions, position 16. Boost vers top 10. |

### Article #5 — Automatiser les achats

| Champ | Valeur |
|-------|--------|
| **Date de publication** | Mardi 14 juillet 2026, 9h |
| **Slug URL** | `/blog/automatiser-fonction-achats-ia-2026/` |
| **Titre SEO** | Automatiser la fonction achats avec l'IA : 6 cas d'usage pour PME et ETI en 2026 |
| **Mot-clé principal** | automatiser achats ia |
| **Catégorie** | OPS |
| **Longueur cible** | 1 400 mots |
| **Pages internes linkées** | `/agent-ia/achats/`, `/cas-clients/eti-industrielle-agent-ia-achats/`, `/services/automatisation-ia/`, `/services/agents-ia/`, `/contact/` |
| **Pourquoi maintenant** | `/agent-ia/achats/` a 52 impressions et plusieurs requêtes de recherche détectées (« externalisation d'achats avec IA », « sourcing IA »). Position 44 → opportunité de remonter de 20 positions. |

### Article #6 — Combien de temps pour déployer

| Champ | Valeur |
|-------|--------|
| **Date de publication** | Jeudi 17 juillet 2026, 9h |
| **Slug URL** | `/blog/temps-deployer-agent-ia-pme-2026/` |
| **Titre SEO** | Combien de temps pour déployer un agent IA dans une PME ? Le vrai timing en 2026 |
| **Mot-clé principal** | combien temps deployer agent ia pme |
| **Catégorie** | GUIDE |
| **Longueur cible** | 1 300 mots |
| **Pages internes linkées** | `/services/agents-ia/`, `/services/audit-ia/`, `/agent-ia/`, `/contact/` |
| **Pourquoi maintenant** | Sujet long tail à faible concurrence, réponse à une objection commerciale classique. |

### Article #7 — RAG, fine-tuning, prompt engineering

| Champ | Valeur |
|-------|--------|
| **Date de publication** | Mardi 21 juillet 2026, 9h |
| **Slug URL** | `/blog/rag-fine-tuning-prompt-engineering-explique-decideurs/` |
| **Titre SEO** | RAG, fine-tuning, prompt engineering : 3 concepts IA expliqués simplement pour décideurs PME |
| **Mot-clé principal** | rag fine-tuning prompt engineering |
| **Catégorie** | GUIDE |
| **Longueur cible** | 1 200 mots |
| **Pages internes linkées** | `/services/chatbot-ia/`, `/services/developpement-ia/`, `/services/agents-ia/`, `/services/formation-ia/`, `/contact/` |
| **Pourquoi maintenant** | Article pédagogique top funnel, durable 3-5 ans, faible concurrence éditoriale en français. |

### Article #8 — IA Act août 2026

| Champ | Valeur |
|-------|--------|
| **Date de publication** | Jeudi 25 juillet 2026, 9h |
| **Slug URL** | `/blog/ia-act-aout-2026-pme-francaises-actions/` |
| **Titre SEO** | IA Act août 2026 : ce que les dirigeants de PME françaises doivent vraiment faire |
| **Mot-clé principal** | ia act pme 2026 |
| **Catégorie** | JURIDIQUE |
| **Longueur cible** | 1 800 mots |
| **Pages internes linkées** | `/agences/`, `/confidentialite/`, `/services/audit-ia/`, `/services/formation-ia/`, `/contact/` |
| **Pourquoi maintenant** | **Timing parfait** : publication juste avant la deadline du 2 août 2026. Probabilité élevée de partage LinkedIn et de backlinks naturels par les cabinets juridiques et DPO. |

---

## 6. STRUCTURE TECHNIQUE DE CHAQUE LIVRABLE

Pour chaque article, je te livre un **dossier ZIP** contenant :

```
article-N-slug/
├── article.md                    ← Le contenu de l'article avec frontmatter
├── cover.png                     ← Image cover 1200x630, brand-aligned
├── linkedin-post.md              ← Le post LinkedIn associé prêt à copier-coller
└── brief-claude-code.md          ← Instructions techniques pour Claude Code
```

### Frontmatter type du fichier `article.md`

```yaml
---
title: "5 cas d'usage IA pour les cabinets comptables de moins de 10 personnes en 2026"
description: "Vous dirigez un petit cabinet comptable et vous voulez savoir par où commencer avec l'IA ? Voici 5 cas concrets déjà déployés en France."
slug: "ia-cabinets-comptables-petits-cas-usage-2026"
category: "Finance"
author: "Althoce"
publishedAt: "2026-06-30T09:00:00+02:00"
keywords:
  - ia cabinet comptable
  - automatisation comptabilité
  - intelligence artificielle expert comptable
image: "/blog/covers/ia-cabinets-comptables-cover.png"
canonicalUrl: "https://althoce.com/blog/ia-cabinets-comptables-petits-cas-usage-2026/"
---
```

### Brief Claude Code par article

Le fichier `brief-claude-code.md` contient les instructions exactes pour Claude Code :

1. Copier `article.md` dans `content/blog/[slug].md` (ou `content/blog/[slug]/index.mdx` selon ta structure)
2. Copier `cover.png` dans `public/blog/covers/[slug]-cover.png`
3. Vérifier que la page se rend en local (`npm run dev`)
4. Lancer `npm run build` pour vérifier qu'il n'y a pas d'erreur
5. Commit avec le message exact fourni
6. Push sur `main`
7. Lire le code de réponse Vercel et confirmer que le déploiement est lancé

---

## 7. PUBLICATION SUR LES RÉSEAUX SOCIAUX

Chaque article s'accompagne d'un **post LinkedIn** prêt à publier, livré dans le dossier ZIP.

### Format des posts

- 250-300 mots
- Hook chiffre choc ou contradiction en ouverture
- 3-4 sections aérées
- CTA clair en fin
- 3 hashtags maximum
- **Lien dans le 1er commentaire** (pas dans le post — règle algo LinkedIn 2026)

### Coordination avec le calendrier

| Mardi | Jeudi |
|-------|-------|
| 9h00 : article publié | 9h00 : article publié |
| 9h05 : tu publies le post LinkedIn associé | 9h05 : tu publies le post LinkedIn associé |
| 9h15 : tu mets le lien vers l'article en 1er commentaire | 9h15 : tu mets le lien vers l'article en 1er commentaire |

Le post LinkedIn est ce qui va **amener du trafic immédiat** sur ton article et déclencher le re-crawl de Google.

---

## 8. SUIVI ET MESURE

### Métriques à suivre chaque semaine

Dans Search Console → onglet Performances → filtrer sur les 7 derniers jours :

| KPI | Cible S1 | Cible S2 | Cible S3 | Cible S4 |
|-----|----------|----------|----------|----------|
| Impressions hebdo | 500+ | 800+ | 1 200+ | 1 800+ |
| Clics hebdo | 20+ | 40+ | 70+ | 120+ |
| CTR moyen | 4 %+ | 4,5 %+ | 5 %+ | 5,5 %+ |
| Pages indexées | 25+ | 35+ | 45+ | 55+ |
| Position moyenne | < 25 | < 22 | < 20 | < 18 |

Ces cibles sont des **estimations basées sur la trajectoire actuelle** (de 0 à 445 impressions en 30 jours après le fix). Si tu atteins ces seuils, tu es sur une trajectoire saine. Si tu plafonnes, on identifiera quoi ajuster.

### Reporting mensuel

Fin juillet (vendredi 25 ou lundi 28), je te livre un **rapport de synthèse** sur :

- Évolution réelle des KPI vs cibles
- Top 10 requêtes nouvelles apparues dans Search Console
- Top 5 articles qui ont le plus performé
- Top 5 pages internes boostées par les articles
- Recommandations pour le mois suivant (continuer / pivoter / accélérer)

---

## 9. CONDITIONS DE SUCCÈS DE CE PLAN

Pour que ce plan fonctionne, **3 conditions doivent être remplies de ton côté** :

### 1. Le fix titres dupliqués doit être déployé avant le 30 juin

Sans ce fix, chaque article publié héritera du bug « Althoce | Althoce » et le CTR sera plombé. C'est la priorité #0 absolue.

### 2. Validation rapide chaque lundi soir

Si la validation traîne au-delà de mardi matin, on rate le créneau de publication mardi 9h. Le plan est calibré sur 30 min de ton temps chaque lundi, pas plus.

### 3. Activation LinkedIn synchronisée

Les posts LinkedIn que je te livre doivent vraiment être publiés mardi et jeudi à 9h. Si tu ne publies pas, le trafic immédiat manque et l'article met plus de temps à être indexé.

Si l'une de ces 3 conditions n'est pas tenue, dis-le-moi le plus tôt possible pour qu'on adapte la cadence avant que ça ne devienne un problème.

---

## 10. CE QU'IL FAUT FAIRE DANS LES 48H POUR LANCER LE PLAN

### Vendredi 27 juin

1. **Tu déploies le fix titres dupliqués** (brief Claude Code dans `SEO-FIX-TITRES-DUPLIQUES.md`)
2. **Tu vérifies les Open Graph** sur 3 URLs avec LinkedIn Post Inspector
3. **Tu valides ce plan éditorial** (oui / non / ajustements)

### Lundi 30 juin matin

1. **Je commence la rédaction** des articles #1 et #2 dès que tu me donnes le go
2. **Tu prépares Claude Code** pour qu'il soit prêt à recevoir les briefs de publication

### Lundi 30 juin soir

1. **Je te livre** les 2 packages (article #1 + article #2 + covers + posts LinkedIn)
2. **Tu valides** (15 min/article)

### Mardi 1er juillet 9h

1. **Tu déclenches Claude Code** pour publier l'article #1
2. **Tu publies le post LinkedIn**

Et c'est parti.

---

*Plan rédigé le 26 juin 2026 à partir de l'analyse Search Console + Ahrefs.*
*Validation utilisateur attendue avant le 28 juin pour lancement le 30 juin.*
