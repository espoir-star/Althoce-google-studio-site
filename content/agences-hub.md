# `/agences/` — Hub Silo 3 · Page de marque mission

> **Cette page est plus qu'un répertoire de villes. C'est la page de marque mission du Silo 3 SEO local : positionne Althoce comme partenaire de confiance des PME et ETI françaises, avec une mission claire — démocratiser l'usage de l'IA en entreprise de manière responsable. Le listing des 20 villes intervient en sous-section, pas en angle principal.**

---

## 0. Préambule

### Sections héritées

| # | Section | Source | Composant |
|---|---------|--------|-----------|
| 5 | Méthode | `home-v2.md` | `<MethodologySection />` |
| 6 | Souveraineté | `home-v2.md` | `<SouveraineteSection />` |
| 9 | CTA final | `home-v2.md` | `<CTAFinalSection />` |

> Pas de section Pricing. Aucun prix dans le contenu visible.

### Positionnement éditorial

Le hub `/agences/` répond à une question stratégique : **qui est Althoce et pourquoi nous faire confiance ?** Il sert trois publics distincts :

1. Le **dirigeant** qui hésite entre Althoce et un cabinet de conseil ou une agence concurrente. Il cherche des signaux de confiance et d'éthique.
2. Le **DSI / CTO** qui veut comprendre notre posture sur la responsabilité IA (souveraineté, biais, gouvernance, transparence).
3. Le **visiteur en exploration géographique** qui cherche la page locale de sa ville. Il trouve le listing en sous-section vers la fin.

La page n'est pas un annuaire : c'est un **manifeste**.

### Slots variables propres à cette page

| Slot | Section | Variation |
|------|---------|-----------|
| `H1` | Hero | « Une IA souveraine, responsable, accessible à toutes les PME françaises » |
| `Sous-titre hero` | sec.1 | 2 lignes sur la mission Althoce |
| `Notre mission` | sec.2 | Manifeste mission en 3 paragraphes éditoriaux |
| `Pourquoi nous faire confiance` | sec.3 | 5 engagements concrets (responsabilité, souveraineté, transparence, partenariat, humain au centre) |
| `Notre approche IA responsable` | sec.4 | 4 piliers responsabilité (anti-biais, souveraineté, transparence, humain au centre) |
| `Notre présence partout en France` | sec.7 | Liste des 20 villes couvertes (subtile, en sous-section) |
| `FAQ marque` | sec.8 | 5 Q/R orientées mission et confiance |

### Blocs immuables

- **Breadcrumb pattern** : `Accueil › Agences`
- **CTA primaire** : « Discuter de votre projet → »
- **Pricing** : pas de section pricing.
- **Découverte offerte** : « 30 minutes offertes avec un expert »
- **JSON-LD obligatoires** : `Organization` + `BreadcrumbList` + `ItemList` (les 20 villes en sous-jacent) + `FAQPage`
- **Chiffres marque** : `+758 agents en production · +150 PME équipées · −70 % temps de saisie · +5 M€ économisés`

### Règle créativité visuelle

Pas de grille de cartes 3×3. Patterns : split éditorial mission, manifeste prose pleine largeur, blocs valeurs verticaux numérotés, schéma SVG France discret (présence territoriale), accordéon FAQ.

---

## 1. Méta-info SEO / éditoriale

### Silo
**Silo 3 — Hub agences (page de marque mission)**

### Rôle dans l'architecture

Page de marque centrale du Silo 3. Trois objectifs combinés : (1) **convertir** sur la mission et la posture Althoce, (2) **renforcer la confiance** des dirigeants en exploration, (3) **distribuer** vers les pages SEO local des 20 villes.

### Objectif trafic

1. Capter « agence IA France », « partenaire IA entreprise », « agence IA responsable », « démocratiser IA entreprise », « agence IA souveraine ».
2. Convertir sur la mission (partenaire de confiance) avant la conversion sur le projet.
3. Distribuer vers les 20 pages SEO local (Bordeaux, Paris, Lyon, Marseille, Toulouse, Lille, Nantes, Nice, Strasbourg, Montpellier, Rennes, Reims, Le Havre, Saint-Étienne, Toulon, Grenoble, Dijon, Angers, Nîmes, Brest).

### Mots-clés cibles principaux

agence IA France · partenaire IA PME · démocratiser IA entreprise · agence IA responsable · IA éthique entreprise · agence IA souveraine France · partenaire de confiance IA · IA PME ETI françaises

### Mots-clés longue traîne

« comment démocratiser l'IA dans une PME française », « agence IA responsable anti-biais », « partenaire IA souverain France PME », « accompagnement IA éthique entreprise »

---

## 2. Title / Meta description / Open Graph

```html
<title>Une IA souveraine, responsable, accessible à toutes les PME françaises | Althoce</title>

<meta name="description" content="Althoce, agence IA française, accompagne les PME et ETI partout en France dans leur transformation IA. Notre mission : une IA souveraine, responsable, accessible à toutes les PME françaises. Souveraineté France, anti-biais documenté, humain au centre. +150 PME équipées. 30 min offertes avec un expert.">

<meta name="keywords" content="agence IA France, partenaire IA PME, IA souveraine PME, agence IA responsable, IA éthique entreprise, agence IA souveraine France, partenaire de confiance IA">

<link rel="canonical" href="https://althoce.com/agences/">

<meta property="og:title" content="Une IA souveraine, responsable, accessible à toutes les PME françaises | Althoce">
<meta property="og:description" content="Althoce, partenaire de confiance des PME et ETI françaises. Mission : une IA souveraine, responsable, accessible. Pas de boîte noire, pas de remplacement masqué, pas d'exfiltration de données.">
<meta property="og:type" content="website">
<meta property="og:locale" content="fr_FR">
<meta property="og:url" content="https://althoce.com/agences/">
```

---

## 3. Plan de page

| # | Section | Type | Pattern visuel |
|---|---------|------|----------------|
| 1 | 🟢 Hero (manifeste) | Propre | Split éditorial : à gauche H1 mission + CTA, à droite citation manifeste en display serif XL |
| 2 | 🟢 Notre mission | Propre | Manifeste éditorial pleine largeur, 3 paragraphes, callout `<DarkBlock />` |
| 3 | 🟢 Pourquoi nous faire confiance | Propre | Liste verticale numérotée 5 engagements concrets |
| 4 | 🟢 Notre approche IA responsable | Propre | 4 piliers présentés en split éditorial alternance (anti-biais, souveraineté, transparence, humain au centre) |
| 5 | 🏠 Méthode | Hérité | `<MethodologySection />` |
| 6 | 🏠 Souveraineté | Hérité | `<SouveraineteSection />` |
| 7 | 🟢 Notre présence partout en France | Propre | Carte SVG France discrète + liste des 20 villes en sous-section |
| 8 | 🟢 FAQ marque / confiance | Propre | Accordéon `<FAQItem />` |
| 9 | 🏠 CTA final | Hérité | `<CTAFinalSection />` |

---

## 4. Section 1 — Hero (manifeste)

### Layout

Split éditorial. À gauche : H1 mission + sous-titre + pills + deux CTA. À droite : citation manifeste en typographie display serif XL, fond légèrement texturé azure très discret. Pas de carte de France au hero (vient en sec.7 plus tard).

### H1

> **Une IA souveraine, responsable, accessible à toutes les PME françaises.**

### Sous-titre (2 lignes)

> Althoce est l'agence IA française des PME et ETI. Notre mission : que chaque dirigeant, chaque équipe métier, chaque collaborateur puisse utiliser l'IA pour gagner du temps et de la valeur, **sans renoncer à la souveraineté de ses données, à l'humain au centre de l'organisation, ni à une approche responsable** des choix techniques.

### Pills (3 max)

> +150 PME équipées · Souveraineté France garantie · Humain au centre

### CTA principal

> Discuter de votre projet →

### CTA secondaire

> Lire notre manifeste ↓ *(ancre `#mission`)*

### Citation manifeste (à droite, display serif XL)

> « L'IA ne doit pas être réservée aux grands groupes ni aux entreprises américaines qui peuvent se permettre de payer un cabinet de conseil 200 000 € pour un audit. Notre métier, c'est de la rendre accessible et responsable pour la PME française qui a besoin d'avancer concrètement, sans renoncer à ses valeurs. »
>
> *— L'équipe Althoce*

---

## 5. Section 2 — Notre mission *(ancre `#mission`)*

### H2

> **Démocratiser l'IA dans les entreprises françaises, sans compromis sur la responsabilité**

### Paragraphe principal (manifeste éditorial)

> Quand nous avons fondé Althoce, nous avons fait un constat simple : l'IA en entreprise est en train de se construire selon un schéma qui ne nous va pas. D'un côté, **les grands groupes** mobilisent des budgets et des cabinets de conseil pour expérimenter pendant 18 mois et livrer des PowerPoints. De l'autre, **les PME et ETI françaises** — qui représentent pourtant 50 % de l'emploi privé et la grande majorité du tissu économique national — restent sur le bord du chemin, soit faute de budget soit faute d'un partenaire qui parle leur langage. Pendant ce temps, **les outils américains** dominent le marché, capturent les données européennes et imposent leurs conditions. Nous pensons qu'il y a mieux à faire.

### Sous-paragraphe — Notre mission

> Notre mission est simple : **démocratiser l'usage de l'IA dans les entreprises françaises de manière responsable**. Démocratiser, parce que la valeur de l'IA pour une PME n'est pas dans le PowerPoint stratégique mais dans l'agent IA qui absorbe la saisie comptable d'un cabinet de 12 personnes ou qui qualifie les RDV commerciaux 24/7 sur 4 marchés export. Responsable, parce que la transformation ne doit pas se faire au prix du licenciement de vos équipes, ni au prix d'envoyer toutes vos données chez OpenAI, ni au prix d'introduire des biais discriminatoires dans vos décisions RH. C'est une promesse cohérente, et c'est ce qui nous a permis d'équiper +150 PME en France en quelques années.

### Sous-paragraphe — Ce que nous croyons

> Nous croyons que **l'IA est un outil de levier humain, pas un outil de remplacement humain**. Les collaborateurs libérés de la saisie répétitive font un meilleur métier sur la valeur ajoutée. Nous croyons que **la souveraineté de vos données n'est pas une option** mais une condition de la confiance. Nous croyons que **le déploiement opérationnel vaut mieux qu'un PowerPoint stratégique** : un agent IA en production sous 1 semaine vaut mieux qu'une note de cadrage en 6 mois. Et nous croyons que **l'éthique appliquée vaut mieux que la déclaration d'intention** : nos agents tri CV ont une documentation anti-biais opposable, pas un argumentaire marketing.

### Callout `<DarkBlock />`

> **Notre engagement en une phrase**
>
> Vous équiper d'agents IA en production en quelques semaines, avec souveraineté France garantie, sans licenciement, sans biais discriminatoire, sans boîte noire technologique, sans dépendance au prestataire. C'est exigeant, c'est ce que nous faisons.

---

## 6. Section 3 — Pourquoi nous faire confiance

### H2

> **Cinq engagements concrets qui font la différence**

### Sous-titre

> Pas des slogans. Des engagements opérationnels que nous tenons sur chaque projet, vérifiables et documentés.

### Liste verticale numérotée 01→05 (`<NumberedListVertical />`)

**01. Souveraineté France par défaut**

> Notre stack standard est française : Mistral hébergé en France (OVH, Scaleway), aucune donnée nominative envoyée à OpenAI ou Anthropic sans accord client explicite. Pour les secteurs réglementés (défense, santé, juridique, finance privée), nous étudions au cas par cas des configurations renforcées en fonction des contraintes spécifiques. Aucun de nos +150 clients n'a vu ses données franchir la frontière sans son accord documenté. Voir [Souveraineté](/#souverainete).

**02. Humain au centre, jamais de remplacement masqué**

> Notre principe non négociable : **pas de remplacement masqué, pas de plan social déguisé**. Nous refusons toute mission dont l'objectif explicite est un plan de licenciement. Les humains libérés des tâches répétitives sont redéployés sur la valeur ajoutée (conseil, négociation, fidélisation, stratégie). Plusieurs de nos clients ont même **augmenté leur effectif** en absorbant la croissance que les agents IA leur permettent. L'IA est un outil de levier humain. C'est inscrit dans notre méthode, pas dans notre communication.

**03. Documentation anti-biais opposable**

> Pour les sujets sensibles (tri CV recrutement, scoring fournisseurs, qualification candidats), nous livrons une **documentation anti-biais opposable** à votre DPO et défendable en cas de contrôle CNIL ou contentieux prud'hommes. Tests statistiques systématiques sur cas synthétiques piégés, logs auditables de chaque décision, exclusion explicite des critères protégés par la loi. Pas un argumentaire marketing : un document juridique. Voir cas signature : [cabinet de recrutement parisien](/cas-clients/cabinet-recrutement-paris-agent-ia-tri-cv/) — 0 retour RGPD défavorable sur 6 mois post-déploiement.

**04. Transparence technique totale, pas de boîte noire**

> Le code que nous développons vous est **livré à 100 %** à la fin de la mission. Code source, prompts, workflows, accès aux modèles LLM, documentation technique : tout vous est transféré. Vous pouvez à tout moment reprendre la main en interne, changer de prestataire, ou continuer avec nous en support. Pas de lock-in propriétaire, pas de dépendance opaque, pas de "magie noire". Détails dans [Développement IA](/services/developpement-ia/).

**05. Premier agent en production en 1 semaine, ROI mesurable en moins de 6 mois**

> Pas de PowerPoint à 100 000 € en 6 mois. Pas de POC qui dort dans un coin. **Un agent IA simple est en production sous une semaine** après cadrage signé. Le ROI typique se mesure en moins de 6 mois : nos cas clients documentent +200 % de RDV qualifiés, ×2 capacité gérée à effectif constant, +12 points de CSAT, 4 % d'économies achats supplémentaires soit 1,2 M€/an. Voir [Cas clients](/cas-clients/).

---

## 7. Section 4 — Notre approche IA responsable

### H2

> **Quatre piliers de l'IA responsable, opérationnels chez nos +150 clients**

### Sous-titre

> Nous ne livrons pas une IA neutre, nous livrons une IA cadrée. Voici les quatre piliers qui structurent chaque déploiement Althoce, depuis le cadrage jusqu'au monitoring post-mise en production.

### 4 piliers en split éditorial alternance (`<PilierBlockSplit />`)

**01. Anti-biais documenté et opposable** *(image / mockup à droite)*

> Sur tout sujet susceptible d'introduire un biais discriminatoire (recrutement, scoring fournisseur, sélection prospect, qualification candidat), nous documentons explicitement les critères inclus et exclus du scoring. Nous testons statistiquement sur cas synthétiques piégés (mêmes compétences, critères différenciants protégés). Nous conservons des logs auditables de chaque décision. Nous livrons une documentation opposable à votre DPO et défendable en cas de contrôle CNIL. **Ce n'est pas un argumentaire marketing : c'est un document juridique livré à chaque projet RH ou scoring.**

**02. Souveraineté des données et infrastructure** *(image / mockup à gauche)*

> Hébergement France par défaut (OVH, Scaleway). Modèle Mistral français pour la grande majorité des cas d'usage. Anonymisation systématique des PII avant tout envoi LLM si l'usage des modèles propriétaires (OpenAI, Anthropic) est validé par le client. Pour les secteurs réglementés (défense, santé, juridique, finance privée), nous étudions au cas par cas des configurations renforcées en fonction de vos contraintes spécifiques (souveraineté étendue, anonymisation systématique, validation humaine obligatoire). Documentation conformité fournisseur livrée pour vos donneurs d'ordre.

**03. Transparence technique totale** *(image / mockup à droite)*

> Le code que nous développons vous est livré à 100 % à la fin de la mission (repo Git complet, documentation technique, credentials infrastructure). Vous pouvez reprendre la main, changer de prestataire, ou continuer avec nous en support. Aucun lock-in propriétaire. Le scoring de nos agents (recrutement, achats) est **transparent et expliqué pour chaque décision** : vous pouvez challenger, ajuster, modifier. Pas de boîte noire technologique.

**04. Humain au centre, augmentation jamais remplacement** *(image / mockup à gauche)*

> Notre principe non négociable : **chaque agent IA libère des humains pour les redéployer sur la valeur ajoutée, jamais pour les remplacer**. Pas de remplacement masqué, pas de plan social déguisé. Nous refusons toute mission dont l'objectif explicite est un plan de licenciement. Plusieurs de nos clients ont au contraire augmenté leur effectif en absorbant la croissance permise par l'IA. Sur les sujets sensibles (juridique, médical, RH), l'agent fonctionne en **mode pré-analyse à décharge** : il prépare, l'humain décide et signe. Cette discipline est inscrite techniquement et organisationnellement dans chaque déploiement.

---

## 8. Section 5 — Méthode (HÉRITÉE DE LA HOME)

> **🏠 Section héritée. Réutilisation stricte du composant `<MethodologySection />` de la home v2.**

---

## 9. Section 6 — Souveraineté (HÉRITÉE DE LA HOME)

> **🏠 Section héritée. Réutilisation stricte du composant `<SouveraineteSection />` de la home v2.**

---

## 10. Section 7 — Notre présence partout en France

### H2

> **Une présence locale dans 20 villes, un accompagnement partout en France**

### Sous-titre

> Nous sommes une agence IA française d'**origine bordelaise** qui intervient sur tout le territoire métropolitain. Présentiel régulier dans 20 villes, distanciel structuré sans contrainte géographique. Que vous soyez à Paris, Lyon, Marseille ou dans une ville plus modeste, vous bénéficiez de la même qualité, des mêmes délais et de la même méthode.

### Liste des 20 villes couvertes (`<CitiesListGrouped />`)

**Île-de-France**
- [Paris](/agence-ia-paris/)

**Auvergne-Rhône-Alpes**
- [Lyon](/agence-ia-lyon/) · [Grenoble](/agence-ia-grenoble/) · [Saint-Étienne](/agence-ia-saint-etienne/)

**Provence-Alpes-Côte d'Azur**
- [Marseille](/agence-ia-marseille/) · [Nice](/agence-ia-nice/) · [Toulon](/agence-ia-toulon/)

**Occitanie**
- [Toulouse](/agence-ia-toulouse/) · [Montpellier](/agence-ia-montpellier/) · [Nîmes](/agence-ia-nimes/)

**Nouvelle-Aquitaine**
- [Bordeaux](/agence-ia-bordeaux/) *(ville d'origine)*

**Hauts-de-France**
- [Lille](/agence-ia-lille/)

**Pays de la Loire**
- [Nantes](/agence-ia-nantes/) · [Angers](/agence-ia-angers/)

**Bretagne**
- [Rennes](/agence-ia-rennes/) · [Brest](/agence-ia-brest/)

**Grand Est**
- [Strasbourg](/agence-ia-strasbourg/) · [Reims](/agence-ia-reims/)

**Normandie**
- [Le Havre](/agence-ia-le-havre/)

**Bourgogne-Franche-Comté**
- [Dijon](/agence-ia-dijon/)

### Note sous la liste

> Votre ville n'apparaît pas ? Nous intervenons sur l'ensemble du territoire métropolitain en distanciel structuré (60 à 70 % de nos projets fonctionnent en distanciel sans dégradation de qualité ni de délais). Les **30 minutes offertes avec un expert** servent à valider l'organisation projet en fonction de votre localisation.

---

## 11. Section 8 — FAQ marque et confiance

### H2

> **Questions fréquentes sur Althoce et notre mission**

### Liste accordéon `<FAQItem />`

**Q1. Qu'est-ce qui rend Althoce différent des autres agences IA ?**

Trois choses qui ne se trouvent pas réunies ailleurs sur le marché français. **Premièrement, notre positionnement PME-ETI** : nous ne vendons pas la même prestation aux grands groupes qu'aux PME. Nos délais (1 semaine pour un agent simple), nos méthodes (opérationnelles, pas stratégiques) et nos tarifs sont adaptés à votre échelle. **Deuxièmement, notre engagement souveraineté France** : Mistral hébergé France par défaut, infrastructure OVH et Scaleway. **Troisièmement, notre exigence anti-biais et humain au centre** : pas de remplacement masqué, documentation anti-biais opposable, pas de boîte noire.

**Q2. Vous parlez de mission, de responsabilité. C'est sincère ou c'est du marketing ?**

C'est cohérent avec notre pratique opérationnelle. Trois vérifications concrètes que vous pouvez faire. **Vérification 1 :** demandez à voir notre documentation anti-biais sur un projet RH. C'est un document juridique livré à chaque déploiement, pas un argumentaire. **Vérification 2 :** demandez à parler à un de nos clients sur l'impact effectif sur ses effectifs. La majorité a stabilisé ou augmenté l'effectif. **Vérification 3 :** demandez à voir le code source d'un projet livré (sous NDA). Tout est livré, rien n'est propriétaire. Ces vérifications sont des **engagements opposables**, pas des arguments commerciaux.

**Q3. Vous travaillez avec des secteurs sensibles (défense, santé, juridique, finance) ? Comment vous gérez la souveraineté ?**

Oui, sur les quatre. Pour chaque secteur, une posture spécifique documentée. **Défense** : configurations renforcées étudiées au cas par cas en fonction des contraintes des donneurs d'ordre (Naval Group, Airbus, Safran). **Santé / biotech** : Mistral hébergé France (OVH, Scaleway), anonymisation systématique des données patient, conformité HAS / ANSM / EMA. **Juridique** : mode pré-analyse à décharge (l'agent ne signe jamais), Mistral hébergé France par défaut. **Finance privée** : anonymisation PII, contrats Enterprise sans réutilisation pour entraînement. Les détails techniques précis pour votre secteur sont discutés pendant les 30 minutes offertes avec un expert.

**Q4. Combien coûte un déploiement Althoce ?**

Sur devis. Notre tarification est entièrement adaptée à votre contexte : volume traité, nombre d'outils branchés, périmètre fonctionnel, exigences de souveraineté. **Un agent IA simple démarre à un tarif accessible** aux PME. Les systèmes multi-agents et les employés IA dédiés à un poste sont sur devis. Tout démarre par les **30 minutes offertes avec un expert** : on qualifie votre besoin, vous repartez avec un devis ferme sous 5 jours, sans engagement. Aucun prix public affiché sur le site (par cohérence avec notre approche valeur, pas prix).

**Q5. Comment se passe la première prise de contact ?**

Trois étapes simples. **Étape 1** : vous prenez les 30 minutes offertes avec un expert via le bouton "Discuter de votre projet". On qualifie votre besoin métier (cas, périmètre, urgence, contraintes souveraineté). **Étape 2** : on vous envoie un **devis ferme sous 5 jours ouvrés**, avec décomposition du cadrage, du build et du support. **Étape 3** : vous décidez de signer ou pas, **sans engagement**. Si vous signez, le cadrage démarre dans la semaine. Si vous ne signez pas, vous repartez avec une cartographie de votre opportunité IA — c'est votre.

---

## 12. Section 9 — CTA final (HÉRITÉ DE LA HOME)

> **🏠 Section héritée.**

---

## 13. JSON-LD complet

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://althoce.com/#organization",
      "name": "Althoce",
      "url": "https://althoce.com/",
      "description": "Agence IA française d'origine bordelaise. Mission : démocratiser l'usage de l'IA dans les entreprises françaises de manière responsable. Souveraineté France, anti-biais documenté, humain au centre, transparence technique.",
      "areaServed": { "@type": "Country", "name": "France" },
      "knowsAbout": [
        "Artificial Intelligence",
        "AI Agents",
        "Business Automation",
        "Responsible AI",
        "AI Sovereignty",
        "Anti-bias AI"
      ],
      "memberOf": {
        "@type": "Organization",
        "name": "Mistral AI Partner Network"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://althoce.com/agences/#webpage",
      "name": "Une IA souveraine, responsable, accessible à toutes les PME françaises",
      "url": "https://althoce.com/agences/",
      "mainEntity": { "@id": "https://althoce.com/#organization" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Agences", "item": "https://althoce.com/agences/" }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Présence Althoce en France",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "url": "https://althoce.com/agence-ia-paris/", "name": "Paris" },
        { "@type": "ListItem", "position": 2, "url": "https://althoce.com/agence-ia-lyon/", "name": "Lyon" },
        { "@type": "ListItem", "position": 3, "url": "https://althoce.com/agence-ia-marseille/", "name": "Marseille" },
        { "@type": "ListItem", "position": 4, "url": "https://althoce.com/agence-ia-toulouse/", "name": "Toulouse" },
        { "@type": "ListItem", "position": 5, "url": "https://althoce.com/agence-ia-lille/", "name": "Lille" },
        { "@type": "ListItem", "position": 6, "url": "https://althoce.com/agence-ia-nantes/", "name": "Nantes" },
        { "@type": "ListItem", "position": 7, "url": "https://althoce.com/agence-ia-nice/", "name": "Nice" },
        { "@type": "ListItem", "position": 8, "url": "https://althoce.com/agence-ia-strasbourg/", "name": "Strasbourg" },
        { "@type": "ListItem", "position": 9, "url": "https://althoce.com/agence-ia-montpellier/", "name": "Montpellier" },
        { "@type": "ListItem", "position": 10, "url": "https://althoce.com/agence-ia-bordeaux/", "name": "Bordeaux" },
        { "@type": "ListItem", "position": 11, "url": "https://althoce.com/agence-ia-rennes/", "name": "Rennes" },
        { "@type": "ListItem", "position": 12, "url": "https://althoce.com/agence-ia-reims/", "name": "Reims" },
        { "@type": "ListItem", "position": 13, "url": "https://althoce.com/agence-ia-le-havre/", "name": "Le Havre" },
        { "@type": "ListItem", "position": 14, "url": "https://althoce.com/agence-ia-saint-etienne/", "name": "Saint-Étienne" },
        { "@type": "ListItem", "position": 15, "url": "https://althoce.com/agence-ia-toulon/", "name": "Toulon" },
        { "@type": "ListItem", "position": 16, "url": "https://althoce.com/agence-ia-grenoble/", "name": "Grenoble" },
        { "@type": "ListItem", "position": 17, "url": "https://althoce.com/agence-ia-dijon/", "name": "Dijon" },
        { "@type": "ListItem", "position": 18, "url": "https://althoce.com/agence-ia-angers/", "name": "Angers" },
        { "@type": "ListItem", "position": 19, "url": "https://althoce.com/agence-ia-nimes/", "name": "Nîmes" },
        { "@type": "ListItem", "position": 20, "url": "https://althoce.com/agence-ia-brest/", "name": "Brest" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Qu'est-ce qui rend Althoce différent ?", "acceptedAnswer": { "@type": "Answer", "text": "Trois choses : positionnement PME-ETI (délais et méthodes adaptés), souveraineté France par défaut (Mistral, OVH, Scaleway), exigence anti-biais et humain au centre (pas de remplacement masqué, documentation anti-biais opposable, pas de boîte noire)." } },
        { "@type": "Question", "name": "Mission de responsabilité : sincère ou marketing ?", "acceptedAnswer": { "@type": "Answer", "text": "Cohérent avec la pratique. Vérifications possibles : documentation anti-biais sur projet RH, échange avec un client sur impact effectifs, lecture du code source livré (sous NDA)." } },
        { "@type": "Question", "name": "Secteurs sensibles (défense, santé, juridique) ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui. Configurations renforcées étudiées au cas par cas. Santé : Mistral France + anonymisation. Juridique : pré-analyse à décharge. Finance : contrats Enterprise sans réutilisation. Détails techniques pendant les 30 min offertes." } },
        { "@type": "Question", "name": "Combien coûte un déploiement ?", "acceptedAnswer": { "@type": "Answer", "text": "Sur devis. Tarification adaptée à votre contexte. Agent simple accessible aux PME. 30 min offertes avec un expert pour devis ferme sous 5 jours." } },
        { "@type": "Question", "name": "Première prise de contact ?", "acceptedAnswer": { "@type": "Answer", "text": "30 min offertes pour qualifier le besoin. Devis ferme sous 5 jours ouvrés. Vous décidez sans engagement." } }
      ]
    }
  ]
}
```

---

## 14. Maillage interne (récap éditorial)

Liens **placés directement dans la prose** :

- Sec.3 engagement 01 : lien vers `/#souverainete`
- Sec.3 engagement 03 : lien vers `/cas-clients/cabinet-recrutement-paris-agent-ia-tri-cv/`
- Sec.3 engagement 04 : lien vers `/services/developpement-ia/`
- Sec.3 engagement 05 : lien vers `/cas-clients/`
- Sec.7 (liste 20 villes) : 20 liens vers les pages SEO local
- Sec.11 Q5 (mention "cartographie de votre opportunité IA") : lien implicite vers `/services/audit-ia/`

### Liens entrants attendus (≥ 10)

- Home (header / footer / section "À propos d'Althoce")
- Menu principal navigation (entrée "Agences")
- Footer (lien permanent)
- Les 20 pages SEO local (breadcrumb retour + cross-links)
- Hub `/services/` (cross-link "qui sommes-nous")
- Hub `/agent-ia/` (cross-link "qui sommes-nous")
- Hub `/cas-clients/` (cross-link "qui sommes-nous")
- Tous les briefs Services et Métier (cross-link via le footer ou la section présentation)
- Articles blog (cluster "à propos Althoce", "IA responsable", "souveraineté France")
- Page institutionnelle `/a-propos/` quand créée (lien fort réciproque)

---

## 15. Notes Claude Design

### Composants HOME à réutiliser strictement

`<MethodologySection />` (sec.5), `<SouveraineteSection />` (sec.6), `<CTAFinalSection />` (sec.9).

### Composants existants à réutiliser

`<DarkBlock />` (sec.2 callout manifeste), `<FAQItem />` (sec.8), `<NumberedListVertical />` (sec.3 cinq engagements), `<HeroCityMapMockup />` adapté pour sec.7 (carte France discrète plutôt que ville mise en avant).

### Nouveaux composants à concevoir

- `<HeroManifestoQuote />` : citation manifeste display serif XL dans le hero (sec.1). Fond légèrement texturé azure très discret, guillemets typographiques larges.
- `<PilierBlockSplit />` : 4 piliers en split éditorial alternance gauche/droite (sec.4). Pour chaque pilier : titre, paragraphe, mockup ou icône représentative. Composant réutilisable.
- `<CitiesListGrouped />` : liste des 20 villes groupées par région française avec liens internes (sec.7). Discret visuellement (pas la star de la page).

### Règle d'intégration des liens internes (CRITIQUE)

Tous les liens listés en sec.14 doivent être **câblés à l'endroit exact où ils apparaissent dans la prose**. Sec.14 = récapitulatif pour validation seulement.

### Règle d'intégration au site (CRITIQUE)

1. **Menu principal** : entrée "Agences" qui pointe vers cette page (`/agences/`). Le menu déroulant peut afficher en sous-niveau les 20 villes individuelles.
2. **Breadcrumb** : `Accueil → Agences`.
3. **Footer** : section "Agences" qui liste les 20 villes + lien vers ce hub.
4. **Sitemap.xml** avec `<priority>0.9</priority>` (priorité maximale, page de marque centrale) et `<changefreq>monthly</changefreq>`.
5. **Indexation** autorisée. JSON-LD `Organization` + `WebPage` + `BreadcrumbList` + `ItemList` + `FAQPage` validés.
6. **Pages cousines** : ajouter le lien depuis la home (section "À propos d'Althoce"), depuis les hubs `/services/`, `/agent-ia/`, `/cas-clients/`, et depuis chaque page SEO local (breadcrumb retour).
7. **Lien fort depuis la page institutionnelle `/a-propos/`** (à créer plus tard) — réciprocité forte avec cette page mission.
8. **Reading time** : 6 min de lecture.

### Règle créativité visuelle

Patterns par section :
- Hero : split éditorial + citation manifeste display serif
- Sec.2 : manifeste éditorial prose pleine largeur + DarkBlock
- Sec.3 : liste verticale numérotée 01→05
- Sec.4 : 4 piliers split éditorial alternance
- Sec.7 : carte SVG France discrète + liste villes groupées par région
- Sec.8 : accordéon FAQ

Aucune grille de cartes 3×3.

### Tons / langage visuel

Bg `#000000`, accent azure `#38BDF8`, texte primaire blanc, texte secondaire `#94A3B8`. Inter pour le corps, Satoshi pour les titres. La **citation manifeste hero** est en typographie display serif XL pour signaler son statut éditorial fort (différent du reste du site). Le **manifeste sec.2** est en typographie corps standard mais avec une largeur de colonne réduite (60 % largeur écran) pour signaler la lecture ralentie.

### Hiérarchie visuelle

- **Mission et responsabilité** = sujet central de la page, mise en avant maximale (hero + sec.2 + sec.3 + sec.4)
- **Présence territoriale** = sujet secondaire, sec.7 visuellement plus discrète (liste groupée par région, pas grille des 20 villes individuellement)
- **CTA conversion** = présent mais pas envahissant (le CTA primaire est en bas du hero, le CTA final hérité conclut la page)

---

## 16. Informations à valider avant publication

1. ✅ **Pricing** : pas de prix dans le contenu visible.
2. ✅ **H1 mission** : « Une IA souveraine, responsable, accessible à toutes les PME françaises. » — validé.
3. ✅ **Citation manifeste hero** : signée « L'équipe Althoce » — validé.
4. ✅ **Engagement humain au centre** : reformulé en esprit sans chiffre — « Pas de remplacement masqué, pas de plan social déguisé. Nous refusons toute mission dont l'objectif explicite est un plan de licenciement. » — validé.
5. ✅ **Auto-hébergement Mistral on-premise** : retiré du hub. Resté mentionné uniquement sur la page Brest où c'est une spécificité opérationnelle vérifiée.
6. **Mission statement sec.2 (manifeste 3 paragraphes)** : à relire mot à mot par la direction. Le détail éditorial peut être ajusté.
7. **Stat "+150 PME équipées"** : déjà canonique, OK.
8. **Mention "Mistral AI Partner Network"** dans le JSON-LD : confirmer si Althoce est officiellement partenaire Mistral ou supprimer la mention.
9. **3 vérifications opposables** sec.11 Q2 (documentation anti-biais, échange avec un client, lecture du code source) : confirmer que ces propositions sont opérationnelles (cas client référent pour le call, NDA-ready pour code source).
10. **Mention "0 retour RGPD défavorable sur 6 mois post-déploiement"** sec.3 engagement 03 : confirmer la statistique sur le cas signature recrutement Paris.

---

*Document de référence rédigé le 2026-05-08. Hub Silo 3 positionné comme page de marque mission. Démocratiser l'IA dans les entreprises françaises de manière responsable. Mission, 5 engagements concrets, 4 piliers IA responsable, présence territoriale en sous-section. 20 pages SEO local rattachées.*
