# `/services/formation-ia/` — Service satellite Silo 1 (modèle vivant Service · adaptation #6)

> **🟢 Sections propres à cette page · 🏠 Sections héritées de la home v2**

---

## 0. Préambule

### Sections héritées (sans rédaction propre)

| # | Section | Source | Composant |
|---|---------|--------|-----------|
| 7 | Méthode (4 étapes) | `home-v2.md` | `<MethodologySection />` |
| 8 | Souveraineté | `home-v2.md` | `<SouveraineteSection />` |
| 10 | CTA final | `home-v2.md` | `<CTAFinalSection />` |

> **Note d'arbitrage** : la section Pricing héritée de la home n'apparaît PAS sur la page Formation IA. L'offre est entièrement sur devis avec 4 lignes de produit (atelier, onboarding, conseil, accompagnement). Toute incitation tarifaire pousse vers les 30 minutes offertes avec un expert pour construire un devis personnalisé.

### Slots variables propres à cette page

| Slot | Section | Variation |
|------|---------|-----------|
| `H1` | Hero (sec.1) | « Formation IA en entreprise : ateliers, conseil et accompagnement sur-mesure » |
| `Sous-titre hero` | sec.1 | 2 lignes positionnant les 4 lignes de produit (atelier, onboarding, conseil, accompagnement) |
| `Pills hero` | sec.1 | 3 pills : Sur-mesure, Multi-outils, Pratique et contextualisé |
| `Définition pédagogique` | sec.2 | 4 façons de monter en compétences IA dans votre entreprise |
| `Tableau comparatif` | sec.3 | 2 colonnes : Formation en ligne mass-market / Accompagnement Althoce |
| `4 lignes de produit Phase 1` | sec.4 | Liste verticale numérotée 01→04 (atelier IA, onboarding outils IA, missions conseil, accompagnement entreprise) |
| `3 profils ciblés` | sec.5 | Schéma SVG pyramide 3 étages (Utilisateur, Pilote, Architecte) |
| `Métiers ciblés` | sec.6 | Marquee home |
| `FAQ` | sec.9 | 5 Q/R adaptées à l'offre actuelle |

### Blocs immuables

- **Breadcrumb pattern** : `Accueil › Services › Formation IA`
- **CTA primaire hero** : « Discuter de votre projet → »
- **CTA secondaire hero** : ancre vers section « 4 lignes de produit »
- **Pricing** : pas de section pricing sur cette page. Toutes les lignes de produit sont sur devis. La page incite à réserver les 30 minutes offertes avec un expert pour un devis personnalisé.
- **Découverte offerte** : « 30 minutes offertes avec un expert »
- **JSON-LD obligatoires** : `Service` + `FAQPage` + `BreadcrumbList`
- **Chiffres marque** : `+758 agents en production · +150 PME équipées · −70 % temps de saisie · +5 M€ économisés`

### Note positionnement (Phase 1, mai 2026)

L'offre actuelle ne propose pas de formation Qualiopi ni de prise en charge OPCO. La certification est en cours d'obtention. **Aucune mention "Qualiopi", "OPCO" ou "finançable" ne doit apparaître sur la page**. L'offre vendue aujourd'hui est composée de quatre lignes de produit : **ateliers IA**, **onboarding outils IA**, **missions conseil**, **accompagnement entreprise**. Ces formats ne relèvent pas de la formation continue financée et n'exigent pas de certification Qualiopi pour être commercialisés.

### Règle créativité visuelle

Pas de grille de cartes 3×3. Patterns par section : split éditorial, schéma SVG pyramide, tableau dense, listes verticales numérotées, Marquee, accordéon FAQ. Aucun label décoratif.

---

## 1. Méta-info SEO / éditoriale

### Silo
**Silo 1, satellite Services**

### Rôle dans l'architecture

Page satellite à double usage. Premier usage : faire monter en compétences les équipes des PME et ETI sur **l'IA générative en général** (Claude, ChatGPT, Copilot, Mistral) et sur **la compréhension des agents IA**, via 4 formats commerciaux distincts. Deuxième usage : accompagner sur la durée les clients qui ont déployé des agents IA Althoce. Le premier usage représente la majorité de la demande, le deuxième est complémentaire.

### Objectif trafic

1. Capter "formation IA entreprise", "atelier IA", "conseil IA", "onboarding ChatGPT entreprise", "accompagnement IA PME", "expert IA freelance", "consultant IA entreprise".
2. Positionner Althoce comme partenaire IA opérationnel, alternative aux formations en ligne mass-market et aux cabinets de conseil généralistes.
3. Distribuer vers les services produits (`/services/agents-ia/`, `/services/employe-ia/`) une fois les équipes accompagnées prêtes à passer à l'action.

### Mots-clés cibles principaux

formation IA entreprise · atelier IA · conseil IA PME · accompagnement IA · onboarding ChatGPT entreprise · onboarding Claude entreprise · expert IA externe · mission conseil IA · IA pour managers · acculturation IA équipe

### Mots-clés longue traîne

« former mon équipe à utiliser Claude », « atelier ChatGPT pour PME », « consultant IA pour accompagner une PME », « comment déployer ChatGPT Enterprise dans une équipe », « mission conseil IA courte »

---

## 2. Title / Meta description / Open Graph

```html
<title>Formation IA en entreprise : ateliers, conseil et accompagnement sur-mesure | Althoce</title>

<meta name="description" content="Quatre formats pour faire monter votre équipe en compétences IA : ateliers pratiques, onboarding outils IA (Claude, ChatGPT, Copilot), missions conseil, accompagnement long. Sur-mesure, contextualisé sur votre métier, sans jargon. 30 min offertes avec un expert.">

<meta name="keywords" content="formation IA entreprise, atelier IA, conseil IA PME, accompagnement IA, onboarding ChatGPT entreprise, onboarding Claude entreprise, expert IA externe, mission conseil IA">

<link rel="canonical" href="https://althoce.com/services/formation-ia/">

<meta property="og:title" content="Formation IA en entreprise : ateliers, conseil et accompagnement sur-mesure | Althoce">
<meta property="og:description" content="Quatre façons de faire monter vos équipes en compétences IA. Ateliers pratiques sur Claude et ChatGPT, onboarding outils, conseil stratégique, accompagnement long. Sans jargon.">
<meta property="og:type" content="article">
<meta property="og:locale" content="fr_FR">
<meta property="og:url" content="https://althoce.com/services/formation-ia/">
```

---

## 3. Plan de page

| # | Section | Type | Pattern visuel |
|---|---------|------|----------------|
| 1 | 🟢 Hero | Propre | Split éditorial : à gauche H1+CTA, à droite mockup parcours d'accompagnement (3 étapes empilées) |
| 2 | 🟢 Définition pédagogique : 4 façons de monter en compétences | Propre | Prose + callout `<DarkBlock />` |
| 3 | 🟢 Tableau comparatif Formation en ligne mass-market vs Accompagnement Althoce | Propre | Tableau dense 2 colonnes × 7 lignes |
| 4 | 🟢 4 lignes de produit Phase 1 | Propre | Liste verticale numérotée 01→04 |
| 5 | 🟢 3 profils ciblés (pyramide SVG) | Propre | Schéma SVG vertical pyramide 3 étages |
| 6 | 🟢 Métiers ciblés | Marquee home | `<Marquee />` |
| 7 | 🏠 Méthode | Hérité | `<MethodologySection />` |
| 8 | 🏠 Souveraineté | Hérité | `<SouveraineteSection />` |
| 9 | 🟢 FAQ formation IA | Propre | Accordéon `<FAQItem />` |
| 10 | 🏠 CTA final | Hérité | `<CTAFinalSection />` |

---

## 4. Section 1 — Hero

### Layout

Split éditorial. À gauche : H1, sous-titre, pills, deux CTA. À droite : mockup d'un parcours d'accompagnement. Trois cartes empilées verticalement (Atelier, Onboarding, Conseil) avec icône + titre court + 1 ligne de description + indicateur d'avancement subtil. Visuel léger, pas une copie d'écran de plateforme.

### H1

> **Formation IA en entreprise : ateliers, conseil et accompagnement sur-mesure.**

### Sous-titre (2 lignes max)

> Vos collaborateurs ont entendu parler de Claude, ChatGPT et Copilot. Beaucoup les ouvrent, ne savent pas quoi en faire, et abandonnent au bout de deux jours. Notre offre couvre quatre formats commerciaux complémentaires pour rendre vos équipes vraiment efficaces avec l'IA : ateliers pratiques, onboarding outils IA, missions conseil, accompagnement long.

### Pills (3 max)

> Sur-mesure · Multi-outils (Claude, ChatGPT, Copilot, Mistral) · Pratique et contextualisé

### CTA principal

> Discuter de votre projet →

### CTA secondaire

> Voir les 4 lignes de produit ↓ *(ancre `#offre`)*

### Note Claude Design

Le mockup parcours à droite est un composant `<TrainingPathMockup />` à concevoir. Trois cartes empilées (Atelier, Onboarding, Conseil) avec icône + titre + 1 ligne de description + indicateur subtil. Pas une image PNG, un rendu HTML/CSS.

---

## 5. Section 2 — 4 façons de monter en compétences IA dans votre entreprise

### H2

> **Quatre façons complémentaires de faire monter vos équipes en compétences IA**

### Paragraphe principal

> Le marché de la "formation IA" en 2026 propose principalement deux modèles. D'un côté, des formations en ligne à 30 €, génériques, théoriques, abandonnées au bout de trois jours. De l'autre, des cabinets de conseil qui livrent un PowerPoint stratégique en six mois pour 100 000 €. Entre les deux, vos équipes restent seules face à Claude ou ChatGPT, et ne savent pas comment intégrer ces outils dans leur métier réel. Notre offre se positionne exactement dans cet espace : **quatre formats opérationnels, contextualisés, qui partent du quotidien de vos équipes** et pas d'un programme générique.

### Sous-paragraphe

> Concrètement, vous pouvez nous solliciter pour quatre choses. Un **atelier pratique** quand vos équipes ont besoin d'une session courte et appliquée pour démarrer (par exemple, une après-midi pour qu'une équipe commerciale apprenne à préparer ses RDV avec Claude). Un **onboarding outils IA** quand vous voulez déployer Claude pour Entreprises, ChatGPT Enterprise ou Copilot dans votre organisation et que vous voulez un cadre clair, des bonnes pratiques et un suivi sur les premières semaines. Une **mission conseil** quand vous avez une question stratégique précise à trancher (cartographier vos opportunités IA, choisir entre plusieurs outils, écrire votre charte d'usage, faire un plan de remédiation post-incident). Un **accompagnement entreprise** quand vous voulez un référent IA externe à temps partagé qui vous suit sur six à douze mois, mixe ateliers, conseil et onboarding, et vous évite de recruter un Chief AI Officer en interne.

### Callout `<DarkBlock />`

> **Trois questions pour choisir le bon format**
>
> 1. Vos équipes ont-elles juste besoin de **prendre en main** un ou deux outils (Claude, ChatGPT) en 4 à 7 heures ? **→ Atelier IA**.
> 2. Voulez-vous **déployer un outil IA** (Claude pour Entreprises, ChatGPT Enterprise, Copilot) dans votre organisation, avec un cadre, une charte et un suivi ? **→ Onboarding outils IA**.
> 3. Avez-vous une **question stratégique précise** à trancher (cartographier, choisir, gouverner, remédier) ? **→ Mission conseil**.
>
> Si vous cumulez plusieurs besoins ou si vous voulez une présence dans la durée, **l'accompagnement entreprise** combine tout ce qui précède sur six à douze mois.

---

## 6. Section 3 — Tableau comparatif : Formation en ligne mass-market vs Accompagnement Althoce

### H2

> **Formation en ligne mass-market vs Accompagnement Althoce. La grille honnête.**

### Sous-titre

> Deux univers très différents qui partagent malheureusement le même mot "formation IA". Voici les sept différences vues côté entreprise cliente.

### Tableau (`<ComparisonTable />`)

| Critère | Formation en ligne mass-market | **Accompagnement Althoce** |
|---------|-------------------------------|-----------------------------|
| Sujet principal | ChatGPT générique, prompting théorique | **Claude, ChatGPT, Copilot, Mistral, agents IA, intégrés dans votre métier réel** |
| Contextualisation | Faible (cas génériques) | **Forte (vos métiers, vos process, vos cas d'usage)** |
| Public cible | Tout collaborateur, indistinctement | **Utilisateurs / Pilotes / Architectes (3 profils distincts)** |
| Format | Vidéos asynchrones, peu d'interaction | **Présentiel ou distanciel synchrone, exercices sur cas réels** |
| Bonnes pratiques sécurité et confidentialité | Survolées | **Module dédié, exercices concrets sur données sensibles** |
| Suite après la session | Aucune | **Possibilité d'accompagnement long ou de mission conseil de suite** |
| Adapté à votre contexte | Non | **Oui, programme co-construit au cadrage** |

### Note sous le tableau

> Si vous voulez d'abord acculturer largement vos équipes à l'IA générative en mode découverte, une formation en ligne à bas coût (LinkedIn Learning, Coursera) reste pertinente comme premier pas. Notre offre prend le relais quand il s'agit que vos équipes **utilisent vraiment l'IA** dans leur quotidien et la maîtrisent professionnellement. Pour cadrer le besoin avant de choisir, voir [Audit IA](/services/audit-ia/) ou prenez les 30 minutes offertes avec un expert.

---

## 7. Section 4 — 4 lignes de produit *(ancre `#offre`)*

### H2

> **Quatre formats commerciaux pour quatre besoins distincts**

### Sous-titre

> Quatre lignes de produit qui peuvent se vendre indépendamment ou se combiner selon votre maturité et votre contexte. Toutes sont sur-mesure, contextualisées par métier, et animées par des consultants Althoce qui pratiquent l'IA en production tous les jours.

### Liste verticale numérotée 01→04 (`<NumberedListVertical />`)

**01. Atelier IA — le format pratique court**

> **Pour qui** : équipes métier qui veulent prendre en main rapidement Claude, ChatGPT, Copilot ou des agents IA dans leur quotidien (commerciaux, comptables, RH, ops, marketing, support, juridique).
>
> **Format** : session pratique en présentiel ou distanciel synchrone, animée par un consultant Althoce. Exercices sur les cas réels du métier des participants. Pas de slides théoriques, on travaille en direct sur Claude ou ChatGPT.
>
> **Durée indicative** : 4h à 7h selon le scope (atelier court d'introduction ou journée complète d'immersion). Possibilité de répéter sur plusieurs équipes.
>
> **Exemples concrets d'ateliers que nous avons animés** : pour une équipe commerciale, atelier "Préparer un RDV en 5 minutes avec Claude" (l'IA synthétise les actualités du compte, propose 5 questions à poser, structure le compte rendu après). Pour une équipe comptable, atelier "Faire rédiger des mails clients par l'IA" (explication TVA, relances, demande de pièces). Pour un département RH, atelier "Structurer une fiche de poste à partir de 3 lignes de besoin". Pour des managers, atelier "Synthétiser des comptes rendus de réunion en 1 paragraphe actionnable". Pour le marketing, atelier "Brainstormer 20 idées de posts LinkedIn en 2 minutes".
>
> **Tarif** : sur devis selon durée et nombre d'équipes.

**02. Onboarding outils IA — le format opérationnel**

> **Pour qui** : entreprises qui veulent déployer un outil IA (Claude pour Entreprises, ChatGPT Enterprise, Microsoft Copilot, Mistral Enterprise) dans leur organisation avec un cadre clair, sans tomber dans le déploiement sauvage qui finit en fuite de données ou en sous-utilisation.
>
> **Ce que ça inclut** : audit du besoin et choix de l'outil le plus adapté, set-up des comptes et configuration sécurité (SSO, MFA, RBAC quand disponible), rédaction de la charte d'usage interne (ce qui est encouragé, ce qui est interdit, comment gérer les données sensibles), atelier de prise en main pour les équipes utilisatrices, suivi sur les 30 à 90 premiers jours pour ajuster.
>
> **Public touché** : équipes IT et DSI pour la partie technique, équipes métier pour la prise en main.
>
> **Durée typique** : 2 à 6 semaines selon la taille de l'organisation et le nombre d'équipes à onboarder.
>
> **Exemples concrets** : déploiement de Claude pour Entreprises sur 80 collaborateurs d'un cabinet d'expertise comptable, avec charte d'usage adaptée au secret professionnel et aux données client. Déploiement de ChatGPT Enterprise sur une équipe marketing de 12 personnes avec personas et templates pré-paramétrés. Migration depuis ChatGPT perso non encadré vers une solution entreprise avec audit des usages existants.
>
> **Tarif** : sur devis selon nombre d'utilisateurs et complexité du déploiement.

**03. Mission conseil IA — le format stratégique court**

> **Pour qui** : direction, DSI, responsables métier qui ont une question stratégique précise à trancher sur le sujet IA, sans vouloir engager un cabinet de conseil sur six mois pour une slide deck à 100 000 €.
>
> **Ce que ça inclut** : diagnostic ou analyse selon la question posée, recommandations actionnables, livrable formalisé (rapport, plan d'action, charte, cartographie), restitution en atelier avec votre équipe.
>
> **Cas typiques de missions** : cartographie d'opportunités IA dans un département (commercial, comptabilité, RH, ops), choix d'outil entre Claude pour Entreprises, ChatGPT Enterprise et Copilot selon votre contexte, rédaction d'une charte IA d'entreprise, plan de gouvernance IA (qui décide, qui valide, qui audite), plan de remédiation post-incident (fuite de données, hallucination critique, dérive d'un agent), benchmark concurrentiel sur l'usage de l'IA dans votre secteur.
>
> **Durée typique** : 1 à 4 semaines selon le scope.
>
> **Tarif** : sur devis selon la profondeur de la mission. Pour une analyse plus large couvrant l'ensemble de l'entreprise, voir notre service [Audit IA](/services/audit-ia/) qui propose des formats dédiés (Express, Standard, Approfondi sectoriel, Post-incident).

**04. Accompagnement entreprise — le format long**

> **Pour qui** : direction et DSI qui veulent un référent IA externe à temps partagé, sans recruter un Chief AI Officer en interne. Idéal pour les PME et ETI qui démarrent leur transformation IA et veulent éviter les faux pas tout en montant en autonomie progressive.
>
> **Posture** : référent IA externe à temps partagé, présent 1 à 3 jours par mois en moyenne. Combine selon les phases ateliers, onboarding outils, missions conseil, et veille active sur les nouveautés du marché.
>
> **Ce que ça inclut** : revue mensuelle avec direction et DSI, animation des ateliers prioritaires identifiés, accompagnement sur les choix d'outils, suivi des déploiements en cours, formation continue des référents internes, montée en autonomie progressive de votre équipe.
>
> **Objectif** : à la fin de la mission (6 à 12 mois), votre entreprise est capable de piloter sa transformation IA de manière autonome, avec un ou deux référents internes formés et une gouvernance posée.
>
> **Tarif** : sur devis selon scope et durée. Cette ligne de produit est la plus engageante des quatre. Tout démarre par les 30 minutes offertes avec un expert pour cadrer le besoin et la posture attendue.

### Note sous la liste

> Les quatre formats peuvent se vendre indépendamment ou se combiner. Beaucoup de nos clients démarrent par un **atelier IA** ou une **mission conseil** courte, puis enchaînent sur un **onboarding outils IA** ou un **accompagnement entreprise** une fois la conviction installée.

### Bandeau CTA "Construisez votre devis personnalisé"

Bandeau pleine largeur, fond légèrement plus clair que le bg, accent azure sur le bouton. À placer juste après la note ci-dessus, avant la sec.5.

> **Construisez votre devis personnalisé en 30 minutes**
>
> Chaque entreprise a un contexte différent : taille des équipes, maturité IA actuelle, outils déjà déployés, métiers ciblés, contraintes de souveraineté. Les tarifs et les programmes sont entièrement adaptés à votre cas.
>
> **Réservez 30 minutes offertes avec un expert.** On qualifie votre besoin, on identifie la bonne combinaison de formats, et vous repartez avec un devis ferme sous 5 jours ouvrés. Sans engagement.
>
> [Réserver mon créneau →]

---

## 8. Section 5 — 3 profils ciblés *(ancre `#profils`)*

### H2

> **Trois profils, trois usages, trois entrées dans nos formats**

### Sous-titre

> Selon que vos équipes utilisent l'IA au quotidien, la pilotent dans leur équipe, ou la gouvernent à l'échelle de l'entreprise, le bon format n'est pas le même.

### Schéma SVG pyramide vertical (`<MasteryPyramid />`)

Pyramide à 3 étages, du bas vers le haut. Chaque étage est cliquable et hoverable.

**Niveau 1. Utilisateur (base de la pyramide)**

> Public : tous les collaborateurs qui veulent gagner du temps au quotidien grâce à l'IA (commerciaux, comptables, RH, ops, support, marketing, juridique).
>
> Format adapté : surtout **atelier IA** (pour la prise en main pratique) et **onboarding outils IA** (pour cadrer l'usage à l'échelle de l'équipe).
>
> Représente 70 à 80 % de votre effectif.

**Niveau 2. Pilote (étage du milieu)**

> Public : managers d'équipe métier, référents IA internes, responsables de processus, futurs ambassadeurs IA dans l'entreprise.
>
> Format adapté : **atelier IA** orienté "Manager une équipe avec l'IA", **mission conseil** sur la charte d'usage interne, et participation aux **onboarding outils IA**. Pour ceux qui ont déjà déployé des agents Althoce, atelier dédié au pilotage des agents en production.
>
> Représente 15 à 20 % de votre effectif.

**Niveau 3. Architecte (sommet de la pyramide)**

> Public : direction, DSI, CTO, responsables IA internes, futurs Chief AI Officer.
>
> Format adapté : **mission conseil** sur la stratégie et la gouvernance, **accompagnement entreprise** sur la durée. Format hybride avec lecture critique d'architecture et choix d'outils pour les contextes les plus techniques.
>
> Représente 1 à 3 personnes par entreprise selon taille.

### Callout sous la pyramide

> Les 3 profils ne sont pas séquentiels obligatoires. Un utilisateur n'a pas besoin de devenir pilote, et un architecte n'a pas besoin de passer par le niveau utilisateur. Nous vous aidons à cartographier les 3 publics dans votre entreprise lors du cadrage et à choisir le bon mix de formats pour chacun.

---

## 9. Section 6 — Métiers ciblés (Marquee home)

> **🏠 Section semi-héritée. Réutilisation stricte du composant `<Marquee />` de la home.**
> Aucun contenu textuel à fournir ici.

---

## 10. Section 7 — Méthode (HÉRITÉE DE LA HOME)

> **🏠 Section héritée. Réutilisation stricte du composant `<MethodologySection />`.**
> Aucun contenu textuel à fournir ici.

---

## 11. Section 8 — Souveraineté (HÉRITÉE DE LA HOME)

> **🏠 Section héritée. Réutilisation stricte du composant `<SouveraineteSection />`.**

---

## 12. Section 9 — FAQ Formation IA (5 Q/R)

### H2

> **Questions fréquentes sur nos ateliers, conseil et accompagnements**

### Liste accordéon `<FAQItem />`

**Q1. Quelle est la différence entre vos ateliers et une formation en ligne type "Maîtrisez ChatGPT en 1 jour" ?**

Trois choses. Premièrement, nous travaillons sur **plusieurs outils du marché** (Claude, ChatGPT, Copilot, Mistral) et pas un seul, parce qu'aucun outil ne couvre tous les cas. Deuxièmement, nous travaillons sur les **cas réels du métier** des participants (commercial, comptable, RH, etc.), pas sur des exemples génériques. Troisièmement, l'animateur est un **consultant Althoce qui pratique l'IA en production tous les jours**, pas un formateur externe ou un produit en boîte. Détails dans le [tableau comparatif](#comparatif).

**Q2. Combien coûte un atelier, un onboarding ou une mission conseil ?**

Sur devis selon scope. Un atelier court démarre à un budget accessible aux PME. Un onboarding outils IA se chiffre selon le nombre d'utilisateurs et la complexité du déploiement. Une mission conseil dépend de la profondeur d'analyse demandée. Un accompagnement long est calé sur 6 à 12 mois avec un volume mensuel défini au cadrage. Tous les chiffrages se font après les 30 minutes offertes avec un expert.

**Q3. Présentiel ou distanciel ?**

Les deux. Présentiel dans vos locaux (la plupart de nos clients le préfèrent pour les ateliers), présentiel chez nous (Bordeaux ou Paris si vous voulez sortir vos équipes du quotidien), ou distanciel synchrone (Zoom ou Teams, mêmes ateliers et exercices, simplement à distance). Pour l'accompagnement long, le format est généralement hybride avec quelques journées présentielles par trimestre et le reste en distanciel.

**Q4. Faut-il avoir déjà déployé des agents IA chez Althoce pour faire appel à vous sur ce service ?**

Non, et c'est même rarement le cas. La majorité de nos clients sur cette ligne de produit n'ont pas encore déployé d'agent IA quand ils nous contactent. Ils veulent que leurs équipes maîtrisent d'abord les outils du marché (Claude, ChatGPT, Copilot) et comprennent l'IA en général. L'**atelier IA** "Comprendre les agents IA" peut donner les bases pour décider plus tard si un agent IA Althoce est pertinent. Voir aussi [Audit IA](/services/audit-ia/) qui peut accompagner pour cadrer les opportunités.

**Q5. Qui anime les ateliers et conseils ?**

Les consultants Althoce qui pratiquent l'IA en production tous les jours. Pas de formateurs externes, pas de stagiaires. Vos équipes posent des questions à des praticiens qui répondent avec des cas réels (anonymisés). Tous nos consultants sont eux-mêmes utilisateurs intensifs de Claude, ChatGPT, Copilot et des agents IA dans leur quotidien.

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
      "@id": "https://althoce.com/services/formation-ia/#service",
      "name": "Formation IA en entreprise : ateliers, conseil, accompagnement",
      "serviceType": "AI training and consulting",
      "provider": { "@type": "Organization", "@id": "https://althoce.com/#organization", "name": "Althoce", "url": "https://althoce.com/" },
      "areaServed": { "@type": "Country", "name": "France" },
      "description": "Quatre lignes de produit pour faire monter votre équipe en compétences IA : ateliers pratiques, onboarding outils IA (Claude, ChatGPT, Copilot, Mistral), missions conseil, accompagnement long. Sur-mesure, contextualisé par métier, animé par des consultants praticiens.",
      "offers": {
        "@type": "Offer",
        "url": "https://althoce.com/services/formation-ia/",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "EUR",
          "description": "Sur devis selon format (atelier, onboarding, mission conseil, accompagnement) et scope. 30 minutes offertes avec un expert pour cadrer."
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Lignes de produit Formation IA",
        "itemListElement": [
          { "@type": "Offer", "name": "Atelier IA pratique", "description": "Session courte 4h à 7h sur l'usage pratique de Claude, ChatGPT et autres outils IA dans le métier des participants." },
          { "@type": "Offer", "name": "Onboarding outils IA", "description": "Déploiement de Claude pour Entreprises, ChatGPT Enterprise, Copilot ou Mistral dans votre organisation avec set-up, charte d'usage et suivi." },
          { "@type": "Offer", "name": "Mission conseil IA", "description": "Mission courte 1 à 4 semaines sur une question stratégique IA précise (cartographie, choix d'outil, gouvernance, remédiation)." },
          { "@type": "Offer", "name": "Accompagnement entreprise", "description": "Référent IA externe à temps partagé, 6 à 12 mois, combinant ateliers, conseil et onboarding." }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://althoce.com/services/" },
        { "@type": "ListItem", "position": 3, "name": "Formation IA", "item": "https://althoce.com/services/formation-ia/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Différence vs formation en ligne mass-market ?", "acceptedAnswer": { "@type": "Answer", "text": "Multi-outils (Claude, ChatGPT, Copilot, Mistral), cas réels par métier, animé par consultant praticien. Pas un produit en boîte." } },
        { "@type": "Question", "name": "Combien coûte un atelier ou une mission ?", "acceptedAnswer": { "@type": "Answer", "text": "Sur devis selon scope. Atelier court accessible PME. Mission conseil et accompagnement sur des budgets plus engageants. Cadrage en 30 minutes offertes avec un expert." } },
        { "@type": "Question", "name": "Présentiel ou distanciel ?", "acceptedAnswer": { "@type": "Answer", "text": "Les deux. Présentiel dans vos locaux ou chez nous (Bordeaux, Paris). Distanciel synchrone. Accompagnement long en hybride." } },
        { "@type": "Question", "name": "Faut-il avoir déjà déployé des agents IA pour faire appel à vous ?", "acceptedAnswer": { "@type": "Answer", "text": "Non. Majorité de nos clients formation n'ont pas encore déployé. Ils veulent maîtriser d'abord les outils du marché." } },
        { "@type": "Question", "name": "Qui anime ?", "acceptedAnswer": { "@type": "Answer", "text": "Consultants Althoce praticiens qui utilisent l'IA en production tous les jours. Pas de formateurs externes." } }
      ]
    }
  ]
}
```

---

## 15. Maillage interne (récap éditorial)

Liens **placés directement dans la prose** :

- Sec.3 note sous tableau : lien vers `/services/audit-ia/`
- Sec.4 ligne 03 (mission conseil) : lien vers `/services/audit-ia/`
- Sec.4 ligne 04 (accompagnement) : pas de lien sortant ici, on garde la lecture concentrée
- Sec.10 Q2 : lien vers ancre `#comparatif`
- Sec.10 Q5 : lien vers `/services/audit-ia/`

### Liens entrants attendus (≥ 5)

- Home (mention "formation, ateliers, accompagnement" dans la grille des services)
- `/services/employe-ia/` (FAQ Q sur les rituels d'équipe et la formation du manager humain)
- `/services/agents-ia/` (paragraphe sur l'accompagnement post-déploiement)
- `/services/chatbot-ia/` (FAQ Q sur le pilotage du chatbot)
- `/services/integration-ia/` (FAQ Q sur la formation DSI)
- `/services/audit-ia/` (mention "accompagnement associé disponible")
- Articles blog (cluster "ateliers IA", "onboarding ChatGPT entreprise", "consultant IA externe")

---

## 16. Notes Claude Design

### Composants HOME à réutiliser strictement

`<MethodologySection />` (sec.7), langage visuel pricing home (sec.8), `<SouveraineteSection />` (sec.9), `<CTAFinalSection />` (sec.11), `<Marquee />` (sec.6).

### Composants existants à réutiliser

`<DarkBlock />` (sec.2), `<FAQItem />` (sec.10), `<ComparisonTable />` (sec.3), `<NumberedListVertical />` (sec.4).

### Nouveaux composants à concevoir

- `<TrainingPathMockup />` : mockup parcours hero (sec.1). Trois cartes empilées (Atelier, Onboarding, Conseil) avec icône + titre + 1 ligne de description + indicateur subtil. Pas une image, un rendu HTML/CSS.
- `<MasteryPyramid />` : schéma SVG vertical pyramide 3 étages (sec.5). Hover ouvre une description courte de chaque profil. Gradient subtil bleu profond → azure du bas vers le haut.

### Règle d'intégration des liens internes (CRITIQUE)

Tous les liens listés en sec.16 doivent être **câblés à l'endroit exact où ils apparaissent dans la prose**. Pas de bottom nav "voir aussi". La sec.16 sert uniquement de récapitulatif pour validation.

### Règle d'intégration au site (CRITIQUE)

1. **Menu principal** sous "Services".
2. **Breadcrumb** : `Accueil → Services → Formation IA`.
3. **Footer** colonne "Services".
4. **Sitemap.xml** avec `<priority>0.8</priority>` et `<changefreq>monthly</changefreq>`.
5. **Indexation** autorisée. JSON-LD `Service` + `OfferCatalog` (4 offres) + `BreadcrumbList` + `FAQPage` validés.
6. **Pages cousines** : ajouter le lien sortant depuis `/services/agents-ia/`, `/services/employe-ia/`, `/services/chatbot-ia/`, `/services/integration-ia/`, `/services/audit-ia/` (mention "atelier ou accompagnement associé").
7. **Reading time** estimé visible : 6 min de lecture.
8. **Aucune mention "Qualiopi", "OPCO", "finançable"** sur la page tant que la certification n'est pas obtenue.

### Règle créativité visuelle

Patterns par section :
- Hero : split éditorial avec mockup parcours
- Sec.2 : prose + DarkBlock callout
- Sec.3 : tableau dense 2 colonnes
- Sec.4 : liste verticale numérotée 01→04 (la section centrale, le plus visible)
- Sec.5 : schéma SVG pyramide vertical 3 étages
- Sec.6 : Marquee horizontal hérité
- Sec.10 : accordéon vertical

Aucune grille de cartes 3×3.

### Tons / langage visuel

Bg `#000000`, accent azure `#38BDF8`, texte primaire blanc, texte secondaire `#94A3B8`. Inter pour le corps, Satoshi pour les titres. La pyramide sec.5 utilise un gradient subtil bleu profond → azure du bas vers le haut. Les exemples concrets sec.4 sont rendus en italique discret pour les distinguer du programme principal.

---

## 17. Informations à valider avant publication

1. ✅ **Pricing arbitré (avril 2026)** : aligné avec home (1 400 € HT cas simple / sur devis système). Toutes les lignes de produit Formation Phase 1 sont **sur devis**. Pas de tarif public affiché.
2. ✅ **Aucune mention Qualiopi ou OPCO** sur la page. La certification est en cours d'obtention. Mention prévue dans la FAQ Q1 (statut transparent et orientation vers partenaires certifiés si besoin).
3. **Mention "consultant Althoce praticien qui utilise l'IA en production tous les jours"** : confirmer que cette posture est tenue côté équipe d'animation avant publication.
4. **Cas concrets sec.4 ligne 02** (déploiement Claude pour Entreprises sur 80 collaborateurs cabinet expertise comptable, ChatGPT Enterprise sur équipe marketing 12 personnes) : confirmer qu'ils sont représentatifs ou les remplacer par des cas réels avant publication.
5. **Stat "majorité de nos clients formation n'ont pas encore déployé d'agent IA"** Q5 : croiser avec le CRM commercial avant publication.
6. **Capacité opérationnelle de delivery** : confirmer les ressources d'animation et les modalités logistiques disponibles selon les volumes attendus (animateurs, salles, plateforme distanciel).
7. **Roadmap Qualiopi** : noter la date prévisionnelle d'obtention pour pouvoir mettre à jour la page le moment venu (FAQ Q1 + ajout des modules `Course` dans le JSON-LD + retour des mentions OPCO).

---

*Document de référence rédigé le 2026-05-08. Aligné avec home-v2.md v3 et template Service canonique. Repositionné mai 2026 : offre Phase 1 (ateliers IA, onboarding outils IA, missions conseil, accompagnement entreprise). Pas de Qualiopi ni d'OPCO tant que la certification n'est pas obtenue.*
