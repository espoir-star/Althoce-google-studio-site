# `/agent-ia/achats/` — Métier Silo 2 (modèle vivant Métier · adaptation #9)

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
| `H1` | Hero (sec.1) | « Agent IA pour les achats : sourcing fournisseurs, analyse devis, suivi contrats en pilote automatique » |
| `Sous-titre hero` | sec.1 | 2 lignes : douleur achats (sourcing manuel chronophage, devis difficiles à comparer, vigilance fournisseurs oubliée) + libération |
| `Pills hero` | sec.1 | 3 pills chiffres marque + ROI métier |
| `Définition métier` | sec.2 | Ce qu'absorbe l'agent dans le métier achats |
| `Avant / Après` | sec.3 | Split éditorial : journée type d'un responsable achats avant / avec agent IA |
| `Agents recommandés` | sec.4 | 4 agents Althoce achats (sourcing, analyse devis comparatif, suivi contrats, vigilance fournisseurs) |
| `Cas client achats` | sec.5 | Citation + KPI bands (ETI industrielle ou retail) |
| `Métiers ciblés` | sec.6 | Marquee home |
| `FAQ achats` | sec.9 | 8 Q/R adaptées achats |

### Blocs immuables

- **Breadcrumb pattern** : `Accueil › Automatisation › Agent IA achats`
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
**Silo 2 — Métiers** (adaptation #9, dernière du lot initial)

### Rôle dans l'architecture

Page métier qui cible les **directions achats** d'ETI industrielles et retail, les **responsables achats** PME, et plus largement les **dirigeants** qui constatent que leur fonction achats est sous-équipée alors qu'elle représente souvent 40 à 60 % du chiffre d'affaires en charges. Le métier achats est paradoxal : énorme levier financier potentiel, mais sous-équipé en outillage moderne dans la majorité des PME / ETI.

### Objectif trafic

1. Capter les requêtes métier : « agent IA achats », « IA sourcing fournisseurs », « analyse devis IA », « agent IA suivi contrats fournisseurs », « IA pour direction achats », « vigilance fournisseurs IA », « automatisation achats PME ».
2. Convertir sur RDV découverte spécifique achats (30 minutes offertes avec un expert).
3. Distribuer vers les pages services pertinentes ([Agents IA](/services/agents-ia/), [Employé IA](/services/employe-ia/), [Intégration IA](/services/integration-ia/)) et vers les cas clients achats.

### Mots-clés cibles principaux

agent IA achats · IA sourcing fournisseurs · analyse devis IA · agent IA suivi contrats fournisseurs · IA pour direction achats · vigilance fournisseurs IA · automatisation achats PME · agent IA appels d'offres · IA négociation achats

### Mots-clés longue traîne

« comment automatiser le sourcing fournisseurs avec l'IA », « agent IA pour comparer plusieurs devis », « IA vigilance financière fournisseurs PME », « agent IA pour appels d'offres B2B »

---

## 2. Title / Meta description / Open Graph

```html
<title>Agent IA pour les achats : sourcing fournisseurs, analyse devis, suivi contrats | Althoce</title>

<meta name="description" content="Un agent IA Althoce sourcing les fournisseurs candidats, compare les devis selon vos critères pondérés, suit les contrats et alerte sur les renouvellements, surveille la vigilance financière de votre panel. Vos acheteurs se concentrent sur la négociation et la relation stratégique. Tarification sur devis, 30 min offertes avec un expert.">

<meta name="keywords" content="agent IA achats, IA sourcing fournisseurs, analyse devis IA, agent IA suivi contrats fournisseurs, IA pour direction achats, vigilance fournisseurs IA, automatisation achats PME">

<link rel="canonical" href="https://althoce.com/agent-ia/achats/">

<meta property="og:title" content="Agent IA pour les achats : sourcing, devis, contrats en pilote automatique | Althoce">
<meta property="og:description" content="Fonction achats sous-équipée alors qu'elle représente 40 à 60 % de vos charges ? Un agent IA absorbe le sourcing, l'analyse de devis et le suivi contrats. Vos acheteurs négocient.">
<meta property="og:type" content="article">
<meta property="og:locale" content="fr_FR">
<meta property="og:url" content="https://althoce.com/agent-ia/achats/">
```

---

## 3. Plan de page

| # | Section | Type | Pattern visuel |
|---|---------|------|----------------|
| 1 | 🟢 Hero | Propre | Split éditorial : à gauche H1+CTA, à droite mockup tableau comparatif de 3 devis avec scoring pondéré |
| 2 | 🟢 Définition métier | Propre | Prose + callout `<DarkBlock />` |
| 3 | 🟢 Avant / Après agent IA | Propre | Split éditorial vertical zig-zag |
| 4 | 🟢 4 agents Althoce achats | Propre | Liste verticale numérotée 01→04 |
| 5 | 🟢 Cas client achats | Propre | Citation pleine page + KPI bands |
| 6 | 🟢 Métiers ciblés | Marquee home | `<Marquee />` |
| 7 | 🏠 Méthode | Hérité | `<MethodologySection />` |
| 8 | 🏠 Souveraineté | Hérité | `<SouveraineteSection />` |
| 9 | 🟢 FAQ achats | Propre | Accordéon `<FAQItem />` |
| 10 | 🏠 CTA final | Hérité | `<CTAFinalSection />` |

---

## 4. Section 1 — Hero

### Layout

Split éditorial. À gauche : H1, sous-titre, pills, deux CTA. À droite : mockup d'un tableau comparatif de 3 devis fournisseurs sur un même appel d'offres. Colonnes : Fournisseur, Prix HT, Délai, Conditions paiement, Score adéquation pondéré, Vigilance financière. Scoring pondéré final qui ressort un fournisseur recommandé. Annotation "Recommandation pour validation acheteur · scoring transparent". Pas une copie d'écran d'outil achats réel.

### H1

> **Agent IA pour les achats : sourcing fournisseurs, analyse devis, suivi contrats en pilote automatique.**

### Sous-titre (2 lignes max)

> Les achats représentent 40 à 60 % de vos charges, et pourtant la fonction est souvent sous-équipée en PME : sourcing manuel chronophage, devis difficiles à comparer rigoureusement, contrats fournisseurs mal suivis, vigilance financière oubliée. Un agent IA Althoce absorbe ces tâches systématiques. Vos acheteurs se concentrent sur la négociation et la relation stratégique fournisseur.

### Pills (3 max)

> +758 agents en production · Scoring devis transparent pondéré · Vigilance fournisseurs 24/7

### CTA principal

> Discuter de votre projet →

### CTA secondaire

> Voir les 4 agents achats ↓ *(ancre `#agents`)*

### Note Claude Design

Le mockup tableau comparatif est un composant `<QuoteComparisonMockup />` à concevoir. 3 lignes fournisseurs avec colonnes prix, délai, conditions, scoring pondéré, vigilance financière. Recommandation finale ressortie visuellement. Disclaimer "Pour validation acheteur · scoring transparent". Pas une image d'outil achats réel.

---

## 5. Section 2 — Définition métier

### H2

> **Ce qu'un agent IA absorbe vraiment dans les achats**

### Paragraphe principal

> Dans une fonction achats PME ou ETI, **60 à 70 % du temps des acheteurs est absorbé par des tâches systématiques et chronophages** : sourcer des fournisseurs candidats pour un nouveau besoin (typiquement 2 à 4 jours par besoin), recevoir et formaliser les devis dans un tableau comparatif (1 à 2 jours), suivre les contrats fournisseurs en cours pour ne pas rater les échéances de renouvellement ou les options de sortie, maintenir la vigilance financière sur le panel fournisseurs (rares sont les PME qui le font sérieusement, faute de temps). Un agent IA Althoce absorbe ces tâches systématiques. Vos acheteurs humains se concentrent sur ce qui demande vraiment leur expertise : **la négociation**, **la relation stratégique fournisseur**, **les choix de make-or-buy**, **les optimisations structurelles** (consolidation panels, renégociation cadres, sourcing innovation).

### Sous-paragraphe

> Concrètement, derrière un agent IA achats Althoce, on trouve une intégration à votre [ERP / outils achats](/services/integration-ia/) (SAP Ariba, Coupa, Determine, Ivalua si applicable, ERP standard sinon), un accès aux **sources de vigilance financière** (Pappers, Societe.com, Infogreffe, Altares, Creditsafe), et une logique de **recommandation pondérée transparente** (scoring multi-critères paramétré au cadrage selon votre politique achats : prix, délai, qualité, RSE, vigilance financière, certification). Pour un poste entier d'acheteur ou d'approvisionneur automatisé, voir [Employé IA](/services/employe-ia/).

### Callout `<DarkBlock />`

> **Trois questions pour qualifier votre besoin achats**
>
> 1. Votre dernier sourcing fournisseur a-t-il pris plus de 3 jours, alors qu'il s'agissait d'un besoin standard ?
> 2. Avez-vous déjà raté une échéance de renouvellement contrat fournisseur ou une option de sortie qui aurait coûté plusieurs milliers d'euros ?
> 3. Surveillez-vous systématiquement la vigilance financière de vos 50 principaux fournisseurs ?
>
> Si oui à 1 question sur 3, un agent IA achats transforme votre productivité. Si oui aux 3, votre fonction achats laisse plusieurs dizaines de milliers d'euros sur la table chaque année.

---

## 6. Section 3 — Avant / Après agent IA dans une direction achats

### H2

> **Avant Althoce vs Après Althoce. La semaine type d'un responsable achats PME.**

### Sous-titre

> Semaine type observée chez nos clients ETI industrielles et retail après déploiement.

### Split éditorial vertical zig-zag (`<BeforeAfterSplit />`)

**Avant Althoce — Semaine type d'un responsable achats PME**

> **Lundi** : 3 nouveaux besoins exprimés par les ops cette semaine (matières premières, prestataire IT, transporteur). Sourcing manuel à lancer.
>
> **Mardi à mercredi** : sourcing du transporteur. Recherche LinkedIn / Google / annuaires professionnels, 6 fournisseurs candidats identifiés, demande de devis envoyée. Toute la matinée pour chaque besoin.
>
> **Jeudi** : réception des premiers devis fournisseurs (3 sur 6 pour le transporteur). Saisie manuelle dans un tableur Excel pour comparer. 2h par appel d'offres. Cas litigieux (prix bas mais conditions floues) : 1h de back-and-forth.
>
> **Vendredi** : sourcing du prestataire IT et des matières premières repoussé à la semaine prochaine. Mail du DAF : "Le contrat avec [fournisseur clé] est arrivé à échéance le 15, on a perdu l'option de sortie". Conséquence : 18 mois supplémentaires de contrat à un tarif moins favorable.
>
> **Bilan** : 1 sourcing sur 3 démarré. Aucun nouveau contrat signé. 1 perte d'option de sortie majeure. Vigilance financière fournisseurs : pas faite cette semaine, ni le mois dernier.

**Après Althoce — Semaine type d'un responsable achats PME**

> **Lundi** : les 3 nouveaux besoins exprimés vendredi ont été pris en main par l'agent IA sourcing pendant le week-end. Pour chaque besoin, une short list de 5 à 8 fournisseurs candidats pertinents pré-qualifiés (vigilance financière vérifiée), avec recommandation de 3 à demander en priorité. Validation acheteur : 30 minutes par besoin.
>
> **Mardi** : RDV stratégique avec un fournisseur clé pour négocier la prochaine année (3h, c'est ce qui crée de la valeur). L'agent IA a préparé un dossier complet (historique, KPI fournisseur, comparables marché, leviers de négociation).
>
> **Mercredi** : les premiers devis sont arrivés en réponse aux RFP du week-end. L'agent IA analyse devis a déjà formalisé un tableau comparatif pondéré (prix, délai, conditions, scoring qualité, vigilance financière), avec recommandation pré-rédigée. 45 minutes par RFP pour valider.
>
> **Jeudi** : 3 contrats fournisseurs en cours alertés par l'agent IA suivi contrats : échéances à 60 jours, options de sortie disponibles, recommandation de renégocier 2 sur 3. Préparation des renégociations.
>
> **Vendredi** : reporting hebdo achats automatique reçu ce matin (volume traité, économies réalisées, alertes vigilance fournisseurs en cours). 30 minutes pour validation. **Après-midi : 3h pour avancer le projet de consolidation panel fournisseurs IT (reporté depuis 8 mois faute de temps).**
>
> **Bilan** : 3 sourcings démarrés et qualifiés. 1 négociation stratégique de fond. 2 renégociations en préparation. Vigilance financière à jour. Projet structurel avancé.

### Callout sous le split

> Ce gain se mesure aussi en **valeur captée**. Statistique observée chez nos clients : entre 3 et 7 % d'économies achats supplémentaires identifiées la première année, simplement parce que les acheteurs ont le temps de négocier vraiment, de comparer rigoureusement, et de ne plus rater d'options de sortie ou de renouvellement.

---

## 7. Section 4 — 4 agents Althoce achats *(ancre `#agents`)*

### H2

> **4 agents IA Althoce déployés en standard dans les achats**

### Sous-titre

> Quatre agents complémentaires que vous pouvez déployer indépendamment ou combiner.

### Liste verticale numérotée 01→04 (`<NumberedListVertical />`)

**01. Agent IA sourcing fournisseurs**

> Reçoit l'expression de besoin (cahier des charges, RFP, demande informelle), recherche les fournisseurs candidats pertinents sur les sources spécialisées (annuaires métier, plateformes B2B, LinkedIn, presse spécialisée, votre historique fournisseurs), pré-qualifie chaque candidat (taille, ancienneté, vigilance financière, certifications, proximité géographique), recommande une short list de 3 à 8 candidats à contacter en priorité.
>
> **Outils intégrés** : Pappers, Societe.com, Infogreffe, Altares, Creditsafe, LinkedIn Sales Navigator, annuaires sectoriels, votre historique fournisseurs dans l'ERP.
>
> **Volume typique** : sourcing complet en quelques heures vs plusieurs jours en manuel.
>
> **Délai de mise en service** : 3 à 4 semaines.
>
> **Impact** : sourcing 5 à 10 fois plus rapide, taux de découverte de fournisseurs pertinents accru.

**02. Agent IA analyse devis comparatif**

> Reçoit les devis fournisseurs (PDF, mail, formulaire), extrait automatiquement les données structurées (prix HT, conditions de paiement, délai, garanties, exclusions), construit un tableau comparatif pondéré selon votre politique achats (critères et poids paramétrés au cadrage), produit une recommandation transparente avec justification du scoring.
>
> **Outils intégrés** : OCR (Mindee, AWS Textract), ERP, outils achats (SAP Ariba, Coupa, Determine, Ivalua si déployés).
>
> **Volume typique** : analyse complète d'un appel d'offres 3 à 5 fournisseurs en 30 minutes vs une demi-journée en manuel.
>
> **Délai** : 2 à 4 semaines (cadrage du référentiel pondéré inclus).
>
> **Impact** : analyse rigoureuse systématique, plus jamais de devis "survolé" faute de temps.

**03. Agent IA suivi contrats fournisseurs**

> Maintient une base à jour de tous vos contrats fournisseurs actifs (échéance, montant, options de sortie, conditions de renouvellement, performance). Alerte 90, 60, 30 jours avant chaque échéance critique. Recommande les actions à prendre (renouveler tel quel, renégocier, sortir, lancer un nouvel appel d'offres). Suit la performance fournisseur (qualité, délais, conformité) sur la durée pour étayer les renégociations.
>
> **Outils intégrés** : ERP, outils contractuels (signature électronique pour références), votre référentiel contractuel.
>
> **Volume typique** : surveillance de 50 à 500 contrats actifs, alertes systématiques.
>
> **Délai** : 3 à 4 semaines.
>
> **Impact** : zéro contrat échu sans alerte, zéro option de sortie ratée, économies récurrentes documentées.

**04. Agent IA vigilance fournisseurs**

> Surveille en continu la santé financière, juridique et opérationnelle de votre panel fournisseurs critiques (typiquement top 50 ou top 100 selon votre exposition). Détecte les signaux faibles (procédures collectives, changements de capital, plaintes clients, presse négative), alerte immédiatement en cas de risque significatif (défaillance imminente d'un fournisseur stratégique, perte de certification critique, sanction publique).
>
> **Outils intégrés** : Pappers, Societe.com, Infogreffe, Altares, Creditsafe, Google Alerts (presse), Boamp pour les marchés publics si applicable.
>
> **Volume typique** : surveillance hebdo de 50 à 500 fournisseurs, alertes ciblées.
>
> **Délai** : 2 à 3 semaines.
>
> **Impact** : passage d'une vigilance bricolée à une vigilance systématique, anticipation des défaillances fournisseurs.

### Note sous la liste

> Pour un poste entier d'acheteur ou d'approvisionneur automatisé de bout en bout, voir [Employé IA](/services/employe-ia/). Les **30 minutes offertes avec un expert** servent à qualifier la combinaison d'agents la plus pertinente.

---

## 8. Section 5 — Cas client achats

### H2

> **Cas client : ETI industrielle 350 personnes, direction achats 3 personnes, 4 % d'économies achats identifiées la première année**

### Sous-titre

> Comment une ETI a libéré ses acheteurs pour la négociation stratégique et capté 4 % d'économies supplémentaires.

### Bloc citation pleine page (typographie display serif XL)

> « On était 3 acheteurs pour gérer 200 fournisseurs et 30 M€ d'achats annuels. On passait nos journées dans le sourcing, l'analyse de devis et le suivi de contrats. Pour la négociation stratégique, on n'avait jamais le temps. On a déployé l'agent IA achats en 6 semaines. Aujourd'hui, le sourcing prend quelques heures au lieu de quelques jours, les devis sont analysés rigoureusement en routine, les contrats sont suivis sans rater une option. On a capté 4 % d'économies supplémentaires la première année (1,2 M€ sur nos 30 M€ d'achats). C'est l'investissement IT le plus rentable qu'on ait fait. »
>
> *— Directeur des achats, ETI industrielle (350 collaborateurs, 30 M€ achats annuels)*

### KPI bands pleine largeur (`<KPIBand />`)

| KPI | Avant | Après |
|-----|-------|-------|
| **Durée sourcing fournisseur** | 3 jours | 4 heures |
| **Devis analysés rigoureusement** | 60 % | 100 % |
| **Options de sortie ratées / an** | 4 | 0 |
| **Économies achats annuelles** | Base | +4 % (1,2 M€) |

### Récit court (2 paragraphes)

> Avant la mission Althoce, la direction achats 3 personnes de l'ETI industrielle gérait 200 fournisseurs actifs et 30 M€ d'achats annuels. Les acheteurs étaient absorbés à 70 % par le sourcing, l'analyse de devis et le suivi documentaire des contrats. Le temps réellement passé à négocier (là où la valeur est captée) ne dépassait pas 30 % du quotidien. Plusieurs options de sortie de contrats avaient été ratées les années précédentes, faute de suivi systématique.
>
> En 6 semaines, 3 agents IA achats ont été déployés (sourcing, analyse devis, suivi contrats), avec intégration profonde à l'ERP existant et au SI fournisseurs (Pappers, Altares). Aujourd'hui, le sourcing prend 4 heures au lieu de 3 jours, les devis sont analysés rigoureusement et systématiquement, et plus aucune option de sortie n'a été ratée en 12 mois. Les acheteurs consacrent désormais 60 % de leur temps à la négociation stratégique et à la relation fournisseur. Résultat : 4 % d'économies achats supplémentaires la première année, soit 1,2 M€ sur le P&L.

### Lien vers le cas complet

> [Voir le cas client complet de l'ETI industrielle →](/cas-clients/eti-industrielle-agent-ia-achats/)

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

## 12. Section 9 — FAQ Achats (8 Q/R)

### H2

> **Questions fréquentes sur les agents IA achats**

### Liste accordéon `<FAQItem />`

**Q1. L'agent IA prend-il des décisions d'achat à la place de mes acheteurs ?**

Non, jamais. L'agent **recommande** systématiquement avec scoring transparent et justification, mais la décision finale (choix du fournisseur, signature contrat, montant engagé) reste sous responsabilité humaine. Cette discipline est inscrite techniquement dans le déploiement (l'agent n'a aucun pouvoir de signature ou d'engagement contractuel) et opérationnellement (validation acheteur obligatoire dans le workflow).

**Q2. Le scoring de l'agent est-il transparent ou une boîte noire ?**

Totalement transparent. Au cadrage, nous définissons avec vous les **critères pondérés** de votre politique achats : prix (poids X %), délai (poids Y %), qualité (poids Z %), RSE (poids W %), vigilance financière (poids V %), certifications (poids U %). L'agent applique strictement cette grille. Chaque recommandation s'accompagne d'un détail du scoring par critère, vous pouvez challenger ou ajuster, et vous pouvez modifier la grille à tout moment selon vos arbitrages stratégiques.

**Q3. Quel investissement pour un agent IA achats et quel ROI attendre ?**

Tarification entièrement **sur devis** selon votre contexte : volume d'achats annuels, taille du panel fournisseurs, nombre de catégories d'achats, intégration ERP / outil achats, profondeur de vigilance financière souhaitée. Le ROI typique se mesure en 3 à 6 mois et se matérialise par **3 à 7 % d'économies achats supplémentaires** identifiées la première année (les acheteurs ont enfin le temps de négocier, comparer rigoureusement, et de ne plus rater d'opportunités de sortie ou renouvellement). Tout démarre par **30 minutes offertes avec un expert**.

**Q4. L'agent peut-il s'intégrer à mon outil achats existant (SAP Ariba, Coupa, etc.) ?**

Oui. SAP Ariba, Coupa, Determine, Ivalua, Jaggaer en standard côté outils achats. SAP, Sage, Cegid, Microsoft Dynamics côté ERP. Pappers, Societe.com, Infogreffe, Altares, Creditsafe côté vigilance financière. Pour les outils achats internes propriétaires, voir [Intégration IA](/services/integration-ia/).

**Q5. La vigilance financière de l'agent va-t-elle remplacer mon abonnement Pappers / Altares / Creditsafe ?**

Non, elle s'appuie dessus. Vous gardez votre abonnement (qui reste la source de vérité officielle), l'agent IA interroge ces sources et **synthétise les signaux faibles** pour votre attention. L'agent ne remplace pas la source, il en démultiplie l'usage : surveiller systématiquement 200 fournisseurs au lieu de checker manuellement les 20 plus exposés.

**Q6. Que se passe-t-il si l'agent recommande un fournisseur qui s'avère défaillant ?**

Même chaîne de responsabilité qu'avec un acheteur humain qui aurait fait la même recommandation. La **transparence du scoring** (vous voyez exactement ce que l'agent a évalué et pourquoi) vous permet d'identifier en pré-décision les zones de risque que vous voulez creuser personnellement. La **vigilance financière** intégrée alerte sur les signaux faibles avant qu'ils ne deviennent défaillance. Aucun client n'a connu de défaillance fournisseur surprise après déploiement de l'agent vigilance.

**Q7. Mes données achats (fournisseurs, prix, conditions négociées) restent-elles confidentielles ?**

Oui. Anonymisation possible des PII fournisseurs (raisons sociales, contacts) avant tout envoi LLM. Pour la souveraineté maximale (secteurs sensibles : défense, agroalimentaire stratégique, secteurs régulés), Mistral hébergé en France et auto-hébergement infra possible. Les **conditions négociées** (prix, remises, marges fournisseurs) ne sortent jamais de votre infra. Voir [home / Souveraineté](/#souverainete).

**Q8. L'agent IA va-t-il remplacer mes acheteurs ?**

Non. L'agent absorbe les **tâches systématiques** (sourcing, analyse devis, suivi contrats, vigilance) et **libère vos acheteurs** pour les tâches à forte valeur ajoutée (négociation stratégique, relation fournisseur clé, make-or-buy, sourcing innovation, optimisation structurelle du panel). Statistique observée : aucun de nos clients achats n'a réduit son effectif, plusieurs ont capté 3 à 7 % d'économies supplémentaires en libérant les acheteurs sur la négociation.

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
      "@id": "https://althoce.com/agent-ia/achats/#service",
      "name": "Agent IA pour les achats",
      "serviceType": "AI agent for procurement and supplier management",
      "provider": { "@type": "Organization", "@id": "https://althoce.com/#organization", "name": "Althoce", "url": "https://althoce.com/" },
      "areaServed": { "@type": "Country", "name": "France" },
      "description": "Agents IA Althoce pour les achats : sourcing fournisseurs accéléré, analyse devis comparatif pondéré, suivi contrats avec alertes, vigilance financière fournisseurs continue. Intégration SAP Ariba, Coupa, Determine, Ivalua, ERP standards.",
      "offers": {
        "@type": "Offer",
        "url": "https://althoce.com/agent-ia/achats/",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "EUR",
          "description": "Tarification sur devis selon volume achats, panel fournisseurs, intégration. ROI typique 3 à 7 % d'économies achats supplémentaires la première année."
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Automatisation", "item": "https://althoce.com/services/automatisation-ia/" },
        { "@type": "ListItem", "position": 3, "name": "Agent IA achats", "item": "https://althoce.com/agent-ia/achats/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "L'agent prend-il des décisions d'achat ?", "acceptedAnswer": { "@type": "Answer", "text": "Non. Recommande avec scoring transparent. Décision finale humaine. Aucun pouvoir de signature ou d'engagement contractuel." } },
        { "@type": "Question", "name": "Le scoring est-il transparent ou boîte noire ?", "acceptedAnswer": { "@type": "Answer", "text": "Totalement transparent. Critères pondérés définis au cadrage. Détail du scoring par critère sur chaque recommandation." } },
        { "@type": "Question", "name": "Quel investissement et quel ROI ?", "acceptedAnswer": { "@type": "Answer", "text": "Sur devis. ROI typique 3 à 7 % d'économies achats supplémentaires la première année. Acheteurs libérés sur la négociation." } },
        { "@type": "Question", "name": "Intégration outils achats existants ?", "acceptedAnswer": { "@type": "Answer", "text": "SAP Ariba, Coupa, Determine, Ivalua, Jaggaer. ERP : SAP, Sage, Cegid, Dynamics. Vigilance : Pappers, Altares, Creditsafe." } },
        { "@type": "Question", "name": "Remplace mon abonnement Pappers ou Altares ?", "acceptedAnswer": { "@type": "Answer", "text": "Non. S'appuie dessus. Vous gardez l'abonnement officiel, l'agent surveille systématiquement 200 fournisseurs au lieu des 20 manuels." } },
        { "@type": "Question", "name": "Si l'agent recommande un fournisseur défaillant ?", "acceptedAnswer": { "@type": "Answer", "text": "Même responsabilité qu'un acheteur humain. Scoring transparent permet d'identifier les zones de risque. Vigilance financière alerte sur signaux faibles." } },
        { "@type": "Question", "name": "Confidentialité conditions négociées ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui. Anonymisation possible des PII fournisseurs. Mistral + auto-hébergement pour souveraineté max. Conditions négociées jamais sorties de votre infra." } },
        { "@type": "Question", "name": "Va-t-il remplacer mes acheteurs ?", "acceptedAnswer": { "@type": "Answer", "text": "Non. Libération sur la négociation stratégique. Aucun effectif réduit. 3-7 % d'économies achats captées en plus." } }
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
- Sec.5 (cas client) : lien vers `/cas-clients/eti-industrielle-agent-ia-achats/` (à créer)
- Sec.9 Q4 : lien vers `/services/integration-ia/`
- Sec.9 Q7 : lien vers `/#souverainete`

### Liens entrants attendus (≥ 5)

- Home (mention "agent IA achats" dans la grille des cas d'usage)
- `/services/agents-ia/` (paragraphe sur les archétypes achats)
- `/services/employe-ia/` (mention "employé IA acheteur / approvisionneur")
- `/services/automatisation-ia/` (12 cas concrets, achats y figure)
- `/agent-ia/ops/` (cross-link, l'ADV touche les fournisseurs)
- `/agent-ia/finance/` (cross-link, achats représentent 40-60 % des charges)
- `/cas-clients/` (cas achats pointent vers cette page)

---

## 16. Notes Claude Design

### Composants HOME à réutiliser strictement

`<MethodologySection />`, `<SouveraineteSection />`, `<CTAFinalSection />`, `<Marquee />`. Pas de section Pricing héritée.

### Composants existants à réutiliser

`<DarkBlock />`, `<FAQItem />`, `<NumberedListVertical />`, `<BeforeAfterSplit />`, `<KPIBand />`.

### Nouveaux composants à concevoir

- `<QuoteComparisonMockup />` : mockup tableau comparatif devis hero (sec.1). 3 lignes fournisseurs avec colonnes prix, délai, conditions, scoring pondéré, vigilance. Recommandation finale ressortie. Disclaimer "Pour validation acheteur · scoring transparent".

### Règle d'intégration des liens internes (CRITIQUE)

Tous les liens listés en sec.15 doivent être **câblés à l'endroit exact où ils apparaissent dans la prose**.

### Règle d'intégration au site (CRITIQUE)

1. **Menu principal** sous-menu "Métiers".
2. **Breadcrumb** : `Accueil → Automatisation → Agent IA achats`.
3. **Footer** colonne "Métiers".
4. **Sitemap.xml** avec `<priority>0.8</priority>` et `<changefreq>monthly</changefreq>`.
5. **Indexation** autorisée.
6. **Pages cousines** : ajouter le lien sortant depuis `/services/agents-ia/`, `/services/automatisation-ia/`, `/services/employe-ia/`, `/agent-ia/ops/` (cross-link ADV), `/agent-ia/finance/` (cross-link charges).
7. **Reading time** estimé visible : 6 min de lecture.

### Règle créativité visuelle

Patterns identiques au template métier vivant. Aucune grille de cartes 3×3.

### Tons / langage visuel

Bg `#000000`, accent azure `#38BDF8`. Inter / Satoshi.

---

## 17. Informations à valider avant publication

1. ✅ **Règle pricing métier (mai 2026)** : aucun prix affiché dans le contenu visible.
2. **Cas client ETI industrielle achats** : confirmer l'accord ou anonymiser.
3. **Chiffres KPI sec.5** (3 jours → 4h sourcing, 60 → 100 % devis analysés, 4 → 0 options ratées, +4 % économies = 1,2 M€) : croiser avec données réelles client.
4. **Mention "3 à 7 % d'économies achats supplémentaires la première année"** Q3 et Q8 : valider la statistique sur le portefeuille client réel avant publication.
5. **Outils tech cités** (SAP Ariba, Coupa, Determine, Ivalua, Jaggaer, Pappers, Societe.com, Infogreffe, Altares, Creditsafe, LinkedIn Sales Navigator, Boamp, OCR Mindee, AWS Textract) : usage en mention technique non-commerciale OK.

---

*Document de référence rédigé le 2026-05-08. Adaptation #9 du template Métier vivant (dernière du lot initial). Aligné avec home-v2.md v3 et règle "focus valeur, pas de prix dans le contenu".*
