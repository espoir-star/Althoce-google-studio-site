# `/agent-ia/marketing/` — Métier Silo 2 (modèle vivant Métier · adaptation #6)

> **🟢 Sections propres à cette page · 🏠 Sections héritées de la home v2**

---

## 0. Préambule

### Sections héritées

| # | Section | Source | Composant |
|---|---------|--------|-----------|
| 7 | Méthode (4 étapes) | `home-v2.md` | `<MethodologySection />` |
| 8 | Souveraineté | `home-v2.md` | `<SouveraineteSection />` |
| 10 | CTA final | `home-v2.md` | `<CTAFinalSection />` |

> **Note d'arbitrage** : la section Pricing héritée de la home n'apparaît PAS sur les pages métier (Silo 2). **Aucun prix n'est affiché dans le contenu visible**. Toute la communication est orientée valeur. Tarification partagée en RDV.

### Slots variables propres à cette page

| Slot | Section | Variation |
|------|---------|-----------|
| `H1` | Hero (sec.1) | « Agent IA pour le marketing : contenu, SEO, social, email en pilote automatique » |
| `Sous-titre hero` | sec.1 | 2 lignes : douleur CMO PME (équipe sous-dimensionnée vs ambition, content factory inexistante) + libération |
| `Pills hero` | sec.1 | 3 pills chiffres marque + ROI métier |
| `Définition métier` | sec.2 | Ce qu'absorbe l'agent dans le métier marketing |
| `Avant / Après` | sec.3 | Split éditorial : semaine type d'un responsable marketing avant / avec agent IA |
| `Agents recommandés` | sec.4 | 4 agents Althoce marketing (génération contenu multi-canal, SEO sémantique, email séquences, veille concurrentielle) |
| `Cas client marketing` | sec.5 | Citation + KPI bands |
| `Métiers ciblés` | sec.6 | Marquee home |
| `FAQ marketing` | sec.9 | 8 Q/R adaptées marketing |

### Blocs immuables

- **Breadcrumb pattern** : `Accueil › Automatisation › Agent IA marketing`
- **CTA primaire hero** : « Discuter de votre projet → »
- **CTA secondaire hero** : ancre vers section « Agents recommandés »
- **Pricing** : aucun prix dans le contenu visible. Page orientée valeur. Tarification partagée en RDV.
- **Découverte offerte** : « 30 minutes offertes avec un expert » (jamais dans les pills hero)
- **JSON-LD obligatoires** : `Service` + `FAQPage` + `BreadcrumbList`
- **Chiffres marque** : `+758 agents en production · +150 PME équipées · −70 % temps de saisie · +5 M€ économisés`

### Règle créativité visuelle

Pas de grille de cartes 3×3. Patterns par section : split éditorial, tableau dense, liste verticale, Marquee, accordéon FAQ.

---

## 1. Méta-info SEO / éditoriale

### Silo
**Silo 2 — Métiers** (adaptation #6)

### Rôle dans l'architecture

Page métier qui cible les **CMO PME**, les **responsables marketing**, et les **agences marketing** dont l'équipe est sous-dimensionnée par rapport à l'ambition de la stratégie (présence multi-canal, content marketing régulier, SEO, social, email). Le marketing PME 2026 est paradoxal : tout le monde sait qu'il faut produire du contenu, peu en produisent régulièrement par manque de temps. Un agent IA marketing résout ce paradoxe.

### Objectif trafic

1. Capter les requêtes métier : « agent IA marketing », « IA pour marketing », « IA création contenu », « agent IA SEO », « agent IA email marketing », « automatisation marketing IA », « IA pour CMO », « génération contenu IA entreprise ».
2. Convertir sur RDV découverte spécifique marketing (30 minutes offertes avec un expert).
3. Distribuer vers les pages services pertinentes ([Agents IA](/services/agents-ia/), [Employé IA](/services/employe-ia/), [Chatbot IA](/services/chatbot-ia/) pour les use cases visiteurs site).

### Mots-clés cibles principaux

agent IA marketing · IA pour marketing · IA création contenu · agent IA SEO · agent IA email marketing · automatisation marketing IA · IA pour CMO · génération contenu IA entreprise · agent IA LinkedIn · IA copywriting B2B

### Mots-clés longue traîne

« automatiser la création de contenu LinkedIn pour PME », « agent IA pour rédiger des articles SEO », « IA séquences email B2B », « différence ChatGPT et agent IA marketing »

---

## 2. Title / Meta description / Open Graph

```html
<title>Agent IA pour le marketing : contenu, SEO, social, email en pilote automatique | Althoce</title>

<meta name="description" content="Un agent IA Althoce produit votre contenu multi-canal (articles SEO, posts LinkedIn, newsletters, séquences email) à votre ton de marque, fait votre veille concurrentielle, et libère votre équipe marketing pour la stratégie. Cohérence marque garantie. Tarification sur devis, 30 min offertes avec un expert.">

<meta name="keywords" content="agent IA marketing, IA pour marketing, IA création contenu, agent IA SEO, agent IA email marketing, automatisation marketing IA, IA pour CMO, génération contenu IA entreprise">

<link rel="canonical" href="https://althoce.com/agent-ia/marketing/">

<meta property="og:title" content="Agent IA pour le marketing : contenu, SEO, social, email en pilote automatique | Althoce">
<meta property="og:description" content="Équipe marketing sous-dimensionnée vs ambition ? Un agent IA produit votre contenu multi-canal à votre ton de marque. Cohérence garantie. L'équipe se concentre sur la stratégie.">
<meta property="og:type" content="article">
<meta property="og:locale" content="fr_FR">
<meta property="og:url" content="https://althoce.com/agent-ia/marketing/">
```

---

## 3. Plan de page

| # | Section | Type | Pattern visuel |
|---|---------|------|----------------|
| 1 | 🟢 Hero | Propre | Split éditorial : à gauche H1+CTA, à droite mockup calendrier éditorial avec 4 contenus en attente de publication multi-canal |
| 2 | 🟢 Définition métier | Propre | Prose + callout `<DarkBlock />` |
| 3 | 🟢 Avant / Après agent IA | Propre | Split éditorial vertical zig-zag (semaine type CMO) |
| 4 | 🟢 4 agents Althoce marketing | Propre | Liste verticale numérotée 01→04 |
| 5 | 🟢 Cas client marketing | Propre | Citation pleine page + KPI bands |
| 6 | 🟢 Métiers ciblés | Marquee home | `<Marquee />` |
| 7 | 🏠 Méthode | Hérité | `<MethodologySection />` |
| 8 | 🏠 Souveraineté | Hérité | `<SouveraineteSection />` |
| 9 | 🟢 FAQ marketing | Propre | Accordéon `<FAQItem />` |
| 10 | 🏠 CTA final | Hérité | `<CTAFinalSection />` |

---

## 4. Section 1 — Hero

### Layout

Split éditorial. À gauche : H1, sous-titre, pills, deux CTA. À droite : mockup d'un calendrier éditorial stylisé. 4 cartes contenu empilées verticalement avec icône canal (LinkedIn, blog, newsletter, email séquence), titre du contenu, date de publication programmée, statut "✓ Rédigé · à valider". Indicateur "Ton de marque : Althoce · vérifié" en bas. Pas une copie d'écran d'outil marketing réelle.

### H1

> **Agent IA pour le marketing : contenu, SEO, social, email en pilote automatique.**

### Sous-titre (2 lignes max)

> Votre équipe marketing est sous-dimensionnée par rapport à votre ambition : tout le monde sait qu'il faut produire du contenu régulier, vous y arrivez rarement. Un agent IA Althoce produit votre contenu multi-canal à votre ton de marque, fait votre veille, prépare vos campagnes. Votre équipe se recentre sur la stratégie et l'analyse de performance.

### Pills (3 max)

> +758 agents en production · Cohérence ton de marque garantie · Production multi-canal

### CTA principal

> Discuter de votre projet →

### CTA secondaire

> Voir les 4 agents marketing ↓ *(ancre `#agents`)*

### Note Claude Design

Le mockup calendrier éditorial est un composant `<ContentCalendarMockup />` à concevoir. 4 cartes contenu empilées avec icône canal, titre, date programmée, statut. Indicateur footer "Ton de marque : [marque] · vérifié". Pas une image, un rendu HTML/CSS.

---

## 5. Section 2 — Définition métier

### H2

> **Ce qu'un agent IA absorbe vraiment dans le marketing**

### Paragraphe principal

> Dans une équipe marketing PME, **70 à 80 % du temps est absorbé par la production de contenu et la coordination opérationnelle** : rédiger des posts LinkedIn pour 3 dirigeants, écrire 4 articles SEO par mois, préparer 2 newsletters, produire 8 emails dans une séquence de nurture, faire la veille concurrentielle, briefer une agence externe, préparer les visuels avec le designer. Les 20 % restants vont à la stratégie réelle (positionnement, choix de cibles, analyse de performance, arbitrage budget). Un agent IA Althoce **inverse le ratio** : il absorbe la production, votre équipe se recentre sur la stratégie, les arbitrages, et les sujets à forte valeur ajoutée (interview client, relation influenceurs, partenariats).

### Sous-paragraphe

> Concrètement, derrière un agent IA marketing Althoce, on trouve un **brief de marque** détaillé établi au cadrage (ton, vocabulaire interdit, positionnement, ICP cibles, exemples de contenus modèles), une **bibliothèque vivante** de votre contenu passé (articles, posts, newsletters, séquences) qui sert de référence pour la cohérence, et une **intégration aux outils marketing** ([HubSpot](/services/integration-ia/), Brevo, ActiveCampaign, Mailjet, Buffer, Hootsuite, WordPress, Shopify, etc.). Tout contenu produit est **proposé** au responsable marketing pour validation avant publication. Pour un poste entier de content manager ou de growth marketer automatisé, voir [Employé IA](/services/employe-ia/).

### Callout `<DarkBlock />`

> **Trois questions pour qualifier votre besoin marketing**
>
> 1. Avez-vous un calendrier éditorial qui prend du retard chaque mois faute de temps pour produire ?
> 2. Vos campagnes email ou nurture sont-elles incomplètes ou non personnalisées par segment client ?
> 3. Votre veille concurrentielle est-elle faite sérieusement ou bricolée mois après mois ?
>
> Si oui à 1 question sur 3, un agent IA marketing transforme votre productivité. Si oui aux 3, votre équipe marketing passe son temps sur la production et néglige la stratégie.

---

## 6. Section 3 — Avant / Après agent IA dans une équipe marketing

### H2

> **Avant Althoce vs Après Althoce. La semaine type d'un responsable marketing PME.**

### Sous-titre

> Semaine type observée chez nos clients responsables marketing PME (50 à 250 collaborateurs) après déploiement.

### Split éditorial vertical zig-zag (`<BeforeAfterSplit />`)

**Avant Althoce — Semaine type d'un responsable marketing**

> **Lundi 9h** : check des KPI marketing du week-end. 20 minutes.
>
> **Lundi 10h à 18h** : rédaction de 2 articles SEO. Recherche mot-clé, plan, rédaction, relecture, intégration WordPress. 8h cumulées. À peine fini.
>
> **Mardi** : préparation newsletter mensuelle. 4h. Briefing du designer pour visuels, 1h. Veille concurrentielle bâclée en 30 minutes.
>
> **Mercredi** : 3 posts LinkedIn pour le CEO (qui voulait poster cette semaine), 2h. Brief agence externe sur prochaine campagne, 2h. 5 mails de coordination.
>
> **Jeudi** : préparation séquence nurture pour les leads commerciaux. 6h. Pas le temps de personnaliser par segment, donc séquence générique.
>
> **Vendredi** : reporting hebdo demandé par la direction. 3h. Pas de temps pour l'analyse stratégique, juste les chiffres.
>
> **Bilan semaine** : 2 articles, 1 newsletter, 3 posts CEO, 1 séquence email. La stratégie n'a pas avancé. Le contenu produit n'a pas eu de relecture stratégique sérieuse. Épuisée.

**Après Althoce — Semaine type d'un responsable marketing**

> **Lundi 9h** : check des KPI marketing du week-end (mêmes 20 minutes). L'agent IA a déjà rédigé 2 articles SEO pendant le week-end (sujets choisis au comité éditorial du mois précédent), avec balisage SEO complet. Statut "À relire et valider". Temps réel de relecture : 1h.
>
> **Lundi après-midi** : entretien avec un client référent pour cas d'usage (matériel pour le content marketing du trimestre, c'était reporté depuis 2 mois). 2h. Plus 1h de prise de note transformée en plan d'article par l'agent IA.
>
> **Mardi** : newsletter mensuelle rédigée par l'agent IA, à relire et valider. Brief designer suivi par l'agent (qui a généré les visuels candidats sur Canva). Veille concurrentielle hebdo automatique de l'agent (déjà reçue par mail ce matin), 15 minutes de lecture stratégique.
>
> **Mercredi** : 3 posts LinkedIn pour le CEO rédigés par l'agent IA dans son ton, à valider et publier. 30 minutes. Brief agence externe envoyé par l'agent à partir d'un brief court oral.
>
> **Jeudi** : séquence nurture par segment (8 emails × 4 segments = 32 emails personnalisés) rédigée par l'agent IA. Validation : 2h. Mise en route HubSpot par l'agent : automatique.
>
> **Vendredi** : reporting hebdo automatique de l'agent IA reçu ce matin avec analyse pré-rédigée. 1h pour ajouter la lecture stratégique. **4h libres pour reprendre la roadmap de positionnement** (reportée depuis 6 mois).
>
> **Bilan semaine** : 2 articles publiés, 1 newsletter, 3 posts CEO, 32 emails personnalisés par segment, 1 cas client interviewé, 4h de stratégie positionnement. Énergique pour le week-end.

### Callout sous le split

> Ce gain se mesure aussi en **qualité de marque** : la production multipliée ne dilue pas la cohérence (l'agent respecte strictement le ton de marque cadré), et le temps libéré permet enfin de faire l'analyse stratégique qui distingue un service marketing exécutant d'un service marketing pilote.

---

## 7. Section 4 — 4 agents Althoce marketing *(ancre `#agents`)*

### H2

> **4 agents IA Althoce déployés en standard dans le marketing**

### Sous-titre

> Quatre agents complémentaires que vous pouvez déployer indépendamment ou combiner.

### Liste verticale numérotée 01→04 (`<NumberedListVertical />`)

**01. Agent IA génération contenu multi-canal**

> Reçoit un brief court (sujet, angle, format cible) et produit le contenu sur le canal demandé : article SEO (1500 à 3000 mots avec balisage), post LinkedIn (court ou long format), newsletter, page d'atterrissage, email transactionnel, légende social. Respecte strictement votre ton de marque cadré au démarrage. Propose toujours au responsable marketing pour validation avant publication.
>
> **Outils intégrés** : WordPress, Webflow, Shopify (blog), HubSpot, LinkedIn, Buffer, Hootsuite, Brevo, Mailjet, ActiveCampaign.
>
> **Volume typique produit** : 8 à 20 contenus par semaine en cohérence parfaite avec votre marque.
>
> **Délai de mise en service** : 2 à 3 semaines (le temps de cadrer le ton et d'indexer votre bibliothèque de contenu existant).
>
> **Impact** : volume de contenu multiplié par 3 à 5 sans embauche, qualité maintenue.

**02. Agent IA SEO sémantique**

> Reçoit votre liste de mots-clés cibles ou la définit après audit, propose un calendrier d'articles SEO, rédige des articles optimisés (longueur, intent match, structure H2/H3, maillage interne, balisage Schema.org). Suit le ranking après publication et propose des optimisations sur les articles existants qui plafonnent.
>
> **Outils intégrés** : Ahrefs, SEMrush, Search Console, CMS (WordPress, Webflow).
>
> **Volume typique** : 4 à 12 articles SEO par mois, vs 1 à 4 produits manuellement.
>
> **Délai** : 3 à 4 semaines (audit SEO initial inclus).
>
> **Impact** : croissance de trafic organique mesurable à 6 mois.

**03. Agent IA email marketing et séquences**

> Conçoit et rédige des séquences email personnalisées par segment client (onboarding, nurture, win-back, upsell, événementiel). Chaque email est rédigé pour le segment cible, avec call-to-action contextuel. L'agent peut aussi générer des emails A/B test pour optimiser progressivement.
>
> **Outils intégrés** : HubSpot, Brevo, ActiveCampaign, Mailjet, Mailchimp.
>
> **Volume typique** : 30 à 100 emails par mois personnalisés par segment, sans dégradation de qualité.
>
> **Délai** : 2 à 3 semaines.
>
> **Impact** : taux d'ouverture +30 à +50 % sur les segments personnalisés vs séquence générique.

**04. Agent IA veille concurrentielle et social listening**

> Surveille en continu les actions marketing de votre concurrence (posts LinkedIn, articles blog, newsletters, lancements, communiqués de presse) et le bruit social autour de vos sujets clés. Produit un rapport hebdomadaire structuré avec ce qui se passe, les opportunités à saisir, les menaces à anticiper.
>
> **Outils intégrés** : LinkedIn, Twitter / X, RSS, Google Alerts, Brandwatch (si déjà déployé chez vous).
>
> **Volume typique** : surveillance de 10 à 30 concurrents + 5 à 15 mots-clés social, rapport hebdo automatique.
>
> **Délai** : 2 semaines.
>
> **Impact** : passage d'une veille bricolée mensuelle à une veille systématique hebdo, identification des opportunités content trois fois plus rapide.

### Note sous la liste

> Pour un poste entier de content manager, de community manager ou de growth marketer automatisé de bout en bout, voir [Employé IA](/services/employe-ia/). Les **30 minutes offertes avec un expert** servent à qualifier la combinaison d'agents la plus pertinente.

---

## 8. Section 5 — Cas client marketing

### H2

> **Cas client : éditeur SaaS B2B, 3 personnes au marketing, content output multiplié par 4 en 6 mois**

### Sous-titre

> Comment un SaaS B2B a triplé sa production de contenu sans embaucher.

### Bloc citation pleine page (typographie display serif XL)

> « On était 3 au marketing pour un SaaS qui voulait jouer dans la cour des grands. La direction nous demandait du contenu chaque semaine, on rendait à peine 1 article et 4 posts LinkedIn par mois. On a déployé l'agent IA marketing en 3 semaines. Aujourd'hui, on publie 4 articles SEO par mois, 12 posts LinkedIn, 2 newsletters, et nos séquences nurture sont segmentées par persona. Tout dans notre ton de marque (l'agent ne se trompe jamais). Et on a enfin le temps de faire de la stratégie sérieuse. »
>
> *— Responsable marketing, éditeur SaaS B2B (90 collaborateurs, 1 500 clients)*

### KPI bands pleine largeur (`<KPIBand />`)

| KPI | Avant | Après |
|-----|-------|-------|
| **Articles SEO / mois** | 1 | 4 |
| **Posts LinkedIn / mois** | 4 | 12 |
| **Emails séquences / mois** | 8 (génériques) | 60 (segmentés) |
| **Trafic organique 6 mois** | Base 100 | Base 240 |

### Récit court (2 paragraphes)

> Avant la mission Althoce, l'équipe marketing 3 personnes du SaaS B2B était saturée par la production de contenu. La direction avait demandé une stratégie content marketing ambitieuse (4 articles SEO mensuels, présence LinkedIn forte, nurture segmentée par persona) mais le rythme tenable était d'environ 25 % de l'ambition. Recruter un content manager coûtait 55 à 65 K€ chargés, hors budget pour cette année.
>
> En 3 semaines, l'agent IA marketing a été déployé avec un cadrage strict du ton de marque, l'indexation de la bibliothèque de contenu existant (180 articles, 200 posts), et l'intégration HubSpot. Aujourd'hui, l'équipe valide les contenus produits par l'agent (1 à 2 heures par jour cumulées) au lieu de les produire. Volume de contenu multiplié par 4, trafic organique +140 % à 6 mois, équipe enfin en mesure de faire la stratégie positionnement reportée depuis 2 ans.

### Lien vers le cas complet

> [Voir le cas client complet du SaaS B2B →](/cas-clients/saas-b2b-agent-ia-marketing/)

---

## 9. Section 6 — Métiers ciblés (Marquee home)

> **🏠 Section semi-héritée.**

---

## 10. Section 7 — Méthode (HÉRITÉE DE LA HOME)

> **🏠 Section héritée.**

---

## 11. Section 8 — Souveraineté (HÉRITÉE DE LA HOME)

> **🏠 Section héritée.**

---

## 12. Section 9 — FAQ Marketing (8 Q/R)

### H2

> **Questions fréquentes sur les agents IA marketing**

### Liste accordéon `<FAQItem />`

**Q1. L'agent IA produit-il du contenu à mon ton de marque ou du contenu générique style ChatGPT ?**

À votre ton de marque, strict. Au cadrage initial, nous établissons un brief de marque détaillé (ton voulu, vocabulaire interdit, expressions caractéristiques, positionnement, ICP) et indexons votre bibliothèque de contenu existant (articles, posts, newsletters passées). L'agent IA produit en référençant cette base. Test simple : passez un contenu de l'agent à votre équipe marketing en blind test à côté d'un contenu humain. Nos clients ne distinguent pas dans 90 % des cas.

**Q2. L'agent peut-il vraiment remplacer un content manager humain ?**

Non, et ce n'est pas l'objectif. L'agent **absorbe la production** (rédaction, optimisation SEO, déclinaison multi-canal), votre content manager humain garde la **stratégie éditoriale**, la **relation interlocuteurs** (interviews clients, relations influenceurs, partenariats), et l'**arbitrage qualitatif** (validation finale, ton délicat, sujets sensibles). Si vous n'avez pas de content manager, l'agent IA vous permet de tenir un rythme content marketing sérieux sans en recruter un (la majorité de nos clients PME sont dans ce cas).

**Q3. Quel investissement pour un agent IA marketing et quel ROI attendre ?**

Tarification entièrement **sur devis** selon votre contexte : volume de contenu cible, nombre de canaux, intégration outils marketing, profondeur de la personnalisation par segment. Le ROI typique se mesure en 3 à 6 mois : volume de contenu multiplié par 3 à 5 sans embauche, croissance de trafic organique mesurable à 6 mois, équipe libérée pour la stratégie. Tout démarre par **30 minutes offertes avec un expert** pour un devis ferme.

**Q4. L'agent peut-il s'intégrer à mes outils marketing existants (HubSpot, Brevo, WordPress, etc.) ?**

Oui. HubSpot, Brevo, ActiveCampaign, Mailjet, Mailchimp côté email. WordPress, Webflow, Shopify côté CMS. LinkedIn (API + intégration via Buffer/Hootsuite), Twitter / X côté social. Pour les outils internes propriétaires, voir [Intégration IA](/services/integration-ia/).

**Q5. Comment éviter le contenu plat, sans personnalité, "généré par IA" reconnaissable ?**

Trois leviers. **Le brief de marque** initial très détaillé (pas un simple "ton professionnel mais accessible", on va au niveau du vocabulaire, des expressions, des structures de phrases caractéristiques). **L'indexation** de votre contenu existant comme référence vivante (l'agent voit ce qui fonctionne chez vous). **La validation humaine** systématique avant publication, avec retours qualitatifs qui affinent l'agent dans le temps. Résultat : nos clients passent les tests blind sans que les lecteurs détectent le contenu IA.

**Q6. L'agent peut-il faire du SEO sérieusement ou c'est du bourrage de mots-clés ?**

SEO sérieusement. L'agent travaille sur l'intent match (répondre à la vraie intention de recherche derrière le mot-clé), structure les articles selon les bonnes pratiques 2026 (H2/H3 logiques, paragraphes courts, listes structurées, FAQPage Schema.org quand pertinent), gère le maillage interne automatiquement. Pas de bourrage. Audit SEO initial inclus dans le déploiement.

**Q7. Mes données marketing (CRM, clients, listes email) restent-elles confidentielles ?**

Oui. Anonymisation des PII (noms, mails, téléphones clients) avant tout envoi LLM si vous utilisez les modèles propriétaires (OpenAI, Anthropic). Pour la souveraineté maximale, nous utilisons Mistral hébergé en France. Les listes email et données CRM ne sont jamais envoyées aux modèles, seules les analyses agrégées (taux d'ouverture, taux de clic, segments) servent à l'optimisation.

**Q8. L'agent peut-il aussi gérer la création de visuels (images, infographies, vidéos courtes) ?**

Partiellement. Pour les **visuels statiques** (illustrations d'article, miniatures sociales, infographies simples), l'agent peut générer des candidats via DALL-E, Midjourney ou Stable Diffusion intégrés. Vous validez. Pour les **vidéos**, l'agent peut générer des scripts, des prompts pour outils vidéo IA (Runway, Pika), mais la production vidéo finale reste un sujet à part. Pour les designs marketing complexes (campagnes visuelles fortes, charte graphique évoluée), nous travaillons avec votre designer humain ou votre agence existante en complément.

---

## 13. Section 10 — CTA final (HÉRITÉ DE LA HOME)

> **🏠 Section héritée.**

---

## 14. JSON-LD complet

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://althoce.com/agent-ia/marketing/#service",
      "name": "Agent IA pour le marketing",
      "serviceType": "AI agent for marketing and content production",
      "provider": { "@type": "Organization", "@id": "https://althoce.com/#organization", "name": "Althoce", "url": "https://althoce.com/" },
      "areaServed": { "@type": "Country", "name": "France" },
      "description": "Agents IA Althoce pour le marketing : génération de contenu multi-canal au ton de marque, SEO sémantique, email marketing segmenté, veille concurrentielle continue. Intégration HubSpot, Brevo, WordPress, LinkedIn, etc.",
      "offers": {
        "@type": "Offer",
        "url": "https://althoce.com/agent-ia/marketing/",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "EUR",
          "description": "Tarification sur devis selon volume cible, canaux, personnalisation segments. ROI typique 3 à 6 mois (volume contenu ×3 à ×5 sans embauche)."
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Automatisation", "item": "https://althoce.com/services/automatisation-ia/" },
        { "@type": "ListItem", "position": 3, "name": "Agent IA marketing", "item": "https://althoce.com/agent-ia/marketing/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Contenu à mon ton de marque ou générique ?", "acceptedAnswer": { "@type": "Answer", "text": "À votre ton de marque, strict. Brief de marque détaillé + indexation de votre bibliothèque existante. Tests blind : 90 % non détectés." } },
        { "@type": "Question", "name": "L'agent remplace-t-il un content manager ?", "acceptedAnswer": { "@type": "Answer", "text": "Non. Absorbe la production. Le content manager humain garde la stratégie éditoriale et les interlocuteurs." } },
        { "@type": "Question", "name": "Quel investissement et quel ROI ?", "acceptedAnswer": { "@type": "Answer", "text": "Sur devis selon scope. ROI 3 à 6 mois. Volume contenu ×3 à ×5 sans embauche." } },
        { "@type": "Question", "name": "Intégration outils marketing existants ?", "acceptedAnswer": { "@type": "Answer", "text": "HubSpot, Brevo, ActiveCampaign, Mailjet, Mailchimp, WordPress, Webflow, Shopify, LinkedIn, Buffer, Hootsuite." } },
        { "@type": "Question", "name": "Comment éviter le contenu plat IA ?", "acceptedAnswer": { "@type": "Answer", "text": "Brief de marque détaillé + indexation contenu existant + validation humaine systématique." } },
        { "@type": "Question", "name": "SEO sérieux ou bourrage de mots-clés ?", "acceptedAnswer": { "@type": "Answer", "text": "SEO sérieux : intent match, structure logique, maillage automatique, Schema.org. Audit SEO inclus." } },
        { "@type": "Question", "name": "Confidentialité données CRM et listes email ?", "acceptedAnswer": { "@type": "Answer", "text": "Anonymisation PII. Listes jamais envoyées aux modèles, seules les analyses agrégées." } },
        { "@type": "Question", "name": "Création visuels et vidéos ?", "acceptedAnswer": { "@type": "Answer", "text": "Visuels statiques : oui (DALL-E, Midjourney). Vidéos : scripts oui, production reste humaine ou outil dédié." } }
      ]
    }
  ]
}
```

---

## 15. Maillage interne (récap éditorial)

Liens **placés directement dans la prose** :

- Sec.2 sous-paragraphe : liens vers `/services/integration-ia/` et `/services/employe-ia/`
- Sec.4 note finale : lien vers `/services/employe-ia/`
- Sec.5 (cas client) : lien vers `/cas-clients/saas-b2b-agent-ia-marketing/` (à créer)
- Sec.9 Q4 : lien vers `/services/integration-ia/`

### Liens entrants attendus (≥ 5)

- Home (mention "agent IA marketing" dans la grille des cas d'usage)
- `/services/agents-ia/` (paragraphe sur les archétypes marketing)
- `/services/employe-ia/` (mention "employé IA content manager / growth marketer")
- `/services/automatisation-ia/` (12 cas concrets, marketing y figure)
- `/services/chatbot-ia/` (FAQ Q sur les chatbots site marketing)
- `/cas-clients/` (cas marketing pointent vers cette page)
- Articles blog cluster "content marketing IA", "SEO IA", "email marketing IA"

---

## 16. Notes Claude Design

### Composants HOME à réutiliser strictement

`<MethodologySection />`, `<SouveraineteSection />`, `<CTAFinalSection />`, `<Marquee />`. Pas de section Pricing héritée.

### Composants existants à réutiliser

`<DarkBlock />`, `<FAQItem />`, `<NumberedListVertical />`, `<BeforeAfterSplit />`, `<KPIBand />`.

### Nouveaux composants à concevoir

- `<ContentCalendarMockup />` : mockup calendrier éditorial hero (sec.1). 4 cartes contenu empilées verticalement avec icône canal (LinkedIn, blog, newsletter, email), titre du contenu, date programmée, statut "✓ Rédigé · à valider". Footer "Ton de marque : [marque] · vérifié". Pas une image, un rendu HTML/CSS.

### Règle d'intégration des liens internes (CRITIQUE)

Tous les liens listés en sec.15 doivent être **câblés à l'endroit exact où ils apparaissent dans la prose**.

### Règle d'intégration au site (CRITIQUE)

1. **Menu principal** sous-menu "Métiers".
2. **Breadcrumb** : `Accueil → Automatisation → Agent IA marketing`.
3. **Footer** colonne "Métiers".
4. **Sitemap.xml** avec `<priority>0.8</priority>` et `<changefreq>monthly</changefreq>`.
5. **Indexation** autorisée.
6. **Pages cousines** : ajouter le lien sortant depuis `/services/agents-ia/`, `/services/automatisation-ia/`, `/services/employe-ia/`, `/agent-ia/commercial/` (cross-link content for SDR), `/services/chatbot-ia/`.
7. **Reading time** estimé visible : 6 min de lecture.

### Règle créativité visuelle

Patterns identiques au template métier vivant. Aucune grille de cartes 3×3.

### Tons / langage visuel

Bg `#000000`, accent azure `#38BDF8`, texte primaire blanc, texte secondaire `#94A3B8`. Inter pour le corps, Satoshi pour les titres.

---

## 17. Informations à valider avant publication

1. ✅ **Règle pricing métier (mai 2026)** : aucun prix affiché dans le contenu visible. Tarification partagée en RDV.
2. **Cas client éditeur SaaS B2B marketing** : confirmer l'accord ou anonymiser.
3. **Chiffres KPI sec.5** (1 → 4 articles/mois, 4 → 12 posts/mois, trafic ×2.4 à 6 mois) : croiser avec données réelles.
4. **Outils marketing cités** (HubSpot, Brevo, ActiveCampaign, Mailjet, Mailchimp, WordPress, Webflow, Shopify, LinkedIn, Buffer, Hootsuite, Ahrefs, SEMrush, DALL-E, Midjourney, Stable Diffusion, Runway, Pika) : usage en mention technique non-commerciale OK.
5. **Mention "tests blind 90 % non détectés"** Q1 : valider la méthodologie de test ou retirer la statistique.

---

*Document de référence rédigé le 2026-05-08. Adaptation #6 du template Métier vivant (après finance, commercial, service client, téléphonique, RH). Aligné avec home-v2.md v3 et règle "focus valeur, pas de prix dans le contenu".*
