# `/cas-clients/` — Hub Silo 6 · Tous les cas clients Althoce

> **Hub Silo 6 qui aggrège les cas clients par métier, secteur ou impact. Distinct des pages métier (`/agent-ia/[métier]/`) qui ne montrent qu'un cas par métier. Ici on liste tout, on filtre, on compare.**

---

## 0. Préambule

### Sections héritées

| # | Section | Source | Composant |
|---|---------|--------|-----------|
| 6 | Méthode | `home-v2.md` | `<MethodologySection />` |
| 7 | Souveraineté | `home-v2.md` | `<SouveraineteSection />` |
| 9 | CTA final | `home-v2.md` | `<CTAFinalSection />` |

> **Note d'arbitrage** : pas de section Pricing héritée sur le hub Cas clients. La page sert la preuve sociale et la crédibilité, pas la conversion tarifaire. Toute incitation pousse vers les 30 minutes offertes avec un expert pour un cas adapté.

### Slots variables propres à cette page

| Slot | Section | Variation |
|------|---------|-----------|
| `H1` | Hero | « Cas clients : ce que nos agents IA ont changé concrètement chez des PME et ETI françaises » |
| `Sous-titre` | Hero | 1 ligne qui pose la promesse de preuves chiffrées |
| `Stat hero` | sec.1 | Chiffre marque géant en display serif |
| `Filtres` | sec.3 | Filtres par métier / par secteur / par taille d'entreprise |
| `Liste des 9 cas` | sec.3 | Grille mixte (alternance bloc large + bloc compact) ou liste verticale étoffée |
| `FAQ cas clients` | sec.8 | 5 Q/R sur la lecture des cas (anonymisation, méthodologie, comparabilité) |

### Blocs immuables

- **Breadcrumb pattern** : `Accueil › Cas clients`
- **CTA primaire hero** : « Discuter de votre projet → »
- **CTA secondaire hero** : ancre vers la liste des cas
- **Pricing** : aucun prix dans le contenu visible. Page orientée preuve sociale et valeur.
- **Découverte offerte** : « 30 minutes offertes avec un expert »
- **JSON-LD obligatoires** : `CollectionPage` + `BreadcrumbList` + `ItemList` (les 9 cas)
- **Chiffres marque** : `+758 agents en production · +150 PME équipées · −70 % temps de saisie · +5 M€ économisés`

### Règle créativité visuelle

Pas de grille de cartes 3×3 par défaut. Patterns : split éditorial, filtres horizontaux, liste éditoriale étoffée alternance, KPI bands pleine largeur, accordéon FAQ.

---

## 1. Méta-info SEO / éditoriale

### Silo
**Silo 6 — Hub cas clients**

### Rôle dans l'architecture

Le hub `/cas-clients/` est la page **preuve sociale** centrale du site. Trois publics distincts :

1. Le **dirigeant en cycle d'achat** qui veut voir des cas similaires au sien avant d'engager.
2. Le **DSI / CTO** qui veut comprendre l'ampleur des déploiements réels (technologie, intégration, volumétrie).
3. L'**acheteur en référencement** (cabinet conseil, intégrateur partenaire) qui audite la crédibilité d'Althoce avant collaboration.

Le hub doit permettre de **filtrer rapidement** par métier, secteur et taille d'entreprise pour que chaque visiteur trouve un cas comparable au sien en moins de 30 secondes.

### Objectif trafic

1. Capter les requêtes preuve sociale : « cas clients Althoce », « retour expérience agent IA PME », « ROI agent IA PME exemple », « cas client automatisation IA ».
2. Distribuer vers les 9 cas clients détaillés.
3. Servir de point d'entrée pour les visiteurs en fin de cycle d'achat (avant le RDV de 30 min).

### Mots-clés cibles principaux

cas clients Althoce · cas client agent IA · retour expérience agent IA · ROI agent IA exemple · cas concret automatisation IA PME · témoignage agent IA · preuve sociale IA entreprise

### Mots-clés longue traîne

« cas client agent IA cabinet comptable », « retour ROI agent IA marketing PME », « exemple déploiement agent IA service client »

---

## 2. Title / Meta description / Open Graph

```html
<title>Cas clients : ce que nos agents IA ont changé concrètement chez des PME et ETI françaises | Althoce</title>

<meta name="description" content="9 cas clients chiffrés Althoce : cabinet comptable Lyon (×2 capacité), négoce vins Bordeaux (+200 % RDV), SaaS B2B (70 % N1 absorbé), cabinet recrutement Paris (×3,5 CV triés), ETI industrielle (4 % économies achats = 1,2 M€). Lisez les transformations réelles, contactez un expert.">

<meta name="keywords" content="cas clients Althoce, cas client agent IA, retour expérience agent IA, ROI agent IA exemple, cas concret automatisation IA PME, témoignage agent IA, preuve sociale IA entreprise">

<link rel="canonical" href="https://althoce.com/cas-clients/">

<meta property="og:title" content="Cas clients Althoce : 9 transformations chiffrées chez des PME et ETI françaises">
<meta property="og:description" content="Cabinets, ETI, distributeurs, SaaS : 9 cas concrets de déploiement d'agents IA Althoce. Chiffres réels, ROI mesurable, témoignages directs.">
<meta property="og:type" content="website">
<meta property="og:locale" content="fr_FR">
<meta property="og:url" content="https://althoce.com/cas-clients/">
```

---

## 3. Plan de page

| # | Section | Type | Pattern visuel |
|---|---------|------|----------------|
| 1 | 🟢 Hero | Propre | Split éditorial : à gauche H1+CTA, à droite stat hero géante en display serif (« +150 PME équipées ») |
| 2 | 🟢 Promesse + méthodologie | Propre | Prose + callout `<DarkBlock />` (anonymisation, vérifiabilité, méthodologie chiffrage) |
| 3 | 🟢 Filtres + liste 9 cas clients | Propre | Filtres horizontaux + liste éditoriale étoffée alternance |
| 4 | 🟢 KPI globaux Althoce | Propre | KPI bands pleine largeur (chiffres marque + agrégation des 9 cas) |
| 5 | 🟢 Sectoriels couverts | Propre | Liste verticale numérotée des secteurs présents dans le portefeuille |
| 6 | 🏠 Méthode | Hérité home | `<MethodologySection />` |
| 7 | 🏠 Souveraineté | Hérité home | `<SouveraineteSection />` |
| 8 | 🟢 FAQ cas clients | Propre | Accordéon `<FAQItem />` |
| 9 | 🏠 CTA final | Hérité home | `<CTAFinalSection />` |

---

## 4. Section 1 — Hero

### Layout

Split éditorial. À gauche : H1, sous-titre, pills, deux CTA. À droite : **stat hero géante** en display serif XL. Trois chiffres successifs en grand format ("+150 PME équipées · +758 agents en production · +5 M€ économisés"), chacun mis en avant l'un après l'autre avec une animation discrète de défilement (toutes les 4 secondes). Sous chaque chiffre, une ligne courte de contextualisation ("au total, dans les portefeuilles clients Althoce").

### H1

> **Cas clients : ce que nos agents IA ont changé concrètement chez des PME et ETI françaises.**

### Sous-titre (1 à 2 lignes)

> 9 cas concrets, chiffrés, vérifiables. Cabinets d'expertise comptable, négoces, SaaS B2B, cabinets de recrutement, ETI industrielles : voici comment Althoce a transformé leur quotidien opérationnel, sans remplacer une seule personne.

### Pills (3 max)

> +150 PME équipées · +758 agents en production · +5 M€ économisés

### CTA principal

> Discuter de votre projet →

### CTA secondaire

> Parcourir les 9 cas ↓ *(ancre `#cas`)*

### Note Claude Design

Le stat hero géant à droite est un composant `<HeroStatHuge />` à concevoir (déjà existant dans la palette via le template cas client individuel). 3 chiffres en rotation lente, display serif XL, fond noir, accent azure sur les chiffres.

---

## 5. Section 2 — Notre promesse sur ces cas clients

### H2

> **Comment lire ces cas clients chez Althoce**

### Paragraphe principal

> Tous les cas présentés sur cette page sont **réels** ou **composites anonymisés à partir de plusieurs clients similaires**. Les chiffres sont **vérifiables** : nous les croisons systématiquement avec les données client (production, support, RH, commercial selon le cas) avant publication. Les **noms et secteurs** sont précisés quand le client a donné son accord nominatif. Sinon, nous précisons explicitement « cas composite » et anonymisons en gardant la rigueur sectorielle. Aucun cas n'est inventé pour les besoins du marketing.

### Sous-paragraphe

> La méthodologie de chiffrage est transparente. Pour chaque cas, nous documentons : le **point de départ** (volume traité, temps consacré, ETP affectés, KPI initiaux), la **transformation déployée** (agents IA, intégration, calendrier), et le **point d'arrivée mesurable** (mêmes KPI après stabilisation 3 à 6 mois post-déploiement). Vous trouverez les détails dans chaque fiche cas et nous répondons à vos questions méthodologiques pendant les 30 minutes offertes avec un expert. Pour cadrer un cas similaire au vôtre, voir [Audit IA](/services/audit-ia/).

### Callout `<DarkBlock />`

> **Trois engagements de transparence**
>
> 1. Pas de chiffre inventé. Tous les KPI sont issus de mesures avant / après réelles, croisées avec les données client.
> 2. Anonymisation explicite quand le client n'autorise pas la mention nominative (nous l'indiquons clairement, jamais de tromperie par omission).
> 3. Méthodologie documentée. Si vous voulez challenger un chiffre ou comprendre la mesure, nous fournissons le détail au RDV.

---

## 6. Section 3 — Les 9 cas clients *(ancre `#cas`)*

### H2

> **9 transformations réelles chez nos clients**

### Filtres horizontaux (`<CaseStudiesFilters />`)

Composant horizontal qui permet de filtrer la liste ci-dessous par :

- **Métier** : Finance · Commercial · Service client · Téléphonique · RH · Marketing · Ops · Juridique · Achats
- **Secteur** : Expertise comptable · Négoce · SaaS · Distribution · Cabinet d'avocats · Cabinet recrutement · Industrie · Agroalimentaire
- **Taille** : TPE (< 20) · PME (20-250) · ETI (250-5000)

Les filtres sont multi-sélections et le résultat se met à jour en direct.

### Liste éditoriale étoffée alternance (`<CaseStudyEditorial />`)

Pour chaque cas, présentation éditoriale large (pas une carte) avec : photo/icône secteur (anonymisée si applicable), titre nominatif ou descriptif, 1 phrase de pitch, 4 KPI bands compacts, citation courte client, CTA "Lire le cas complet →". Alternance gauche/droite des blocs sur grand écran.

**01. Cabinet d'expertise comptable Lyon — 12 collaborateurs, 320 clients TPE/PME**

> **Pitch** : ×2 capacité à effectif constant grâce aux agents IA factures et rapprochement bancaire.
>
> **KPI** : 80 % saisie absorbée · −60 % temps production · 0 départ équipe · 80 nouveaux clients en 4 mois
>
> *« On a doublé l'activité sans personne démissionner. C'est le projet IT le plus impactant en 5 ans. »*
>
> [Lire le cas complet →](/cas-clients/cabinet-comptable-lyon/)

**02. Négoce de vins bordelais — 28 collaborateurs, export 65 %**

> **Pitch** : Agent SDR multilingue (français, anglais, mandarin, japonais) qui prospecte 24/7.
>
> **KPI** : +200 % RDV qualifiés en 4 mois · Time-to-first-touch 18h → 4 min · Coût acquisition / RDV qualifié −80 % · 0 embauche supplémentaire
>
> *« L'agent prospecte 24/7 en 4 langues. Mon équipe se concentre sur le closing et la fidélisation. »*
>
> [Lire le cas complet →](/cas-clients/negoce-vins-bordelais-agent-ia-sdr/)

**03. Éditeur SaaS B2B — 120 collaborateurs, 8 000 clients PME**

> **Pitch** : 70 % des tickets support N1 résolus en autonomie complète par l'agent IA Zendesk.
>
> **KPI** : Time-to-first-response 18h → 4 min · 70 % N1 absorbé · CSAT 67 → 79 · 0 départ équipe support
>
> *« 70 % du N1 résolu en 4 minutes. Mes agents humains se concentrent sur les cas complexes. CSAT +12 points. »*
>
> [Lire le cas complet →](/cas-clients/saas-b2b-agent-ia-service-client/)

**04. Cabinet d'avocats lyonnais — 18 collaborateurs, droit des affaires**

> **Pitch** : Agent IA téléphonique sur le standard du cabinet, 70 % des appels résolus directement.
>
> **KPI** : Appels perdus 18 % → 0 % · 70 % appels résolus en autonomie · ×2,3 prises de RDV qualifiées · 12h libérées/semaine assistance
>
> *« Plus aucun appel perdu. Mes prises de RDV ont doublé. L'assistante de direction est enfin libérée pour ce qui demande vraiment son expertise. »*
>
> [Lire le cas complet →](/cas-clients/cabinet-avocats-agent-ia-telephonique/)

**05. Cabinet de recrutement parisien — 6 consultants, postes cadres**

> **Pitch** : Tri CV anti-biais documenté, scoring transparent, conformité RGPD opposable.
>
> **KPI** : 200 → 700 CV/sem triés sérieusement · 5-10j → 24h time-to-first-touch candidat · ×2 placements/mois · 0 retour RGPD défavorable
>
> *« On a doublé le volume placé en 4 mois sans recruter. Et zéro retour RGPD défavorable depuis 6 mois. »*
>
> [Lire le cas complet →](/cas-clients/cabinet-recrutement-paris-agent-ia-tri-cv/)

**06. Éditeur SaaS B2B — 90 collaborateurs, 1 500 clients**

> **Pitch** : Content multi-canal généré au ton de marque, équipe marketing 3 personnes libérée pour la stratégie.
>
> **KPI** : 1 → 4 articles SEO/mois · 4 → 12 posts LinkedIn/mois · 8 → 60 emails segmentés/mois · Trafic organique +140 % à 6 mois
>
> *« On publie 4 fois plus de contenu, tout dans notre ton de marque. Et on a enfin le temps de faire de la stratégie sérieuse. »*
>
> [Lire le cas complet →](/cas-clients/saas-b2b-agent-ia-marketing/)

**07. Distributeur B2B industriel — 45 collaborateurs, e-commerce industriel**

> **Pitch** : Fin du turnover sur le poste assistant ops grâce aux agents mails / ADV / documents.
>
> **KPI** : 80 → 240 mails traités/jour · 25 → 75 commandes ERP/jour · 100 % documents classés rapidement · Turnover ops 80 % → 0 %
>
> *« On a triplé le volume de commandes traitées, et personne n'a démissionné en 14 mois. Le projet IT le plus rentable. »*
>
> [Lire le cas complet →](/cas-clients/distributeur-b2b-agent-ia-ops/)

**08. ETI agroalimentaire — 280 collaborateurs, direction juridique 1 personne**

> **Pitch** : 600 contrats/an pré-analysés en mode décharge, juriste libéré pour la stratégie.
>
> **KPI** : 3h → 30 min validation contrat · 30 → 50+ contrats analysés/mois · 4 jours libérés/mois pour la stratégie · Mistral hébergé France garanti
>
> *« J'ai récupéré 4 jours par mois pour ce que mon poste devrait vraiment faire : conseil et négociation. »*
>
> [Lire le cas complet →](/cas-clients/eti-agroalimentaire-agent-ia-juridique/)

**09. ETI industrielle — 350 collaborateurs, 30 M€ achats annuels**

> **Pitch** : 4 % d'économies achats supplémentaires la première année grâce à 3 agents IA combinés.
>
> **KPI** : 3 jours → 4h sourcing · 60 % → 100 % devis analysés rigoureusement · 4 → 0 options sortie ratées · +4 % économies = 1,2 M€/an
>
> *« On a capté 4 % d'économies en plus la première année. Soit 1,2 M€ sur nos 30 M€ d'achats. Le ROI le plus rentable. »*
>
> [Lire le cas complet →](/cas-clients/eti-industrielle-agent-ia-achats/)

---

## 7. Section 4 — KPI globaux Althoce

### H2

> **Au total, ce que les agents IA Althoce ont changé pour nos +150 PME équipées**

### KPI bands pleine largeur (`<KPIBand />` agrégés)

| Indicateur agrégé | Valeur |
|-------------------|--------|
| **Agents IA en production** | +758 |
| **PME et ETI équipées** | +150 |
| **Temps de saisie économisé** | −70 % en moyenne |
| **Économies / revenus générés cumulés** | +5 M€ |
| **Taux de réussite déploiement** | 96 % (les 4 % d'échecs sont arrêtés au cadrage avant build) |
| **Délai moyen mise en production** | 4 semaines pour un agent simple |

### Callout sous le tableau

> Ces chiffres globaux sont la **somme des transformations** des 150 PME et ETI accompagnées sur les 24 derniers mois. Ils ne sont pas extrapolés : chaque agent compte un, chaque économie est mesurée chez un client identifié, chaque déploiement est documenté en interne. Nous pouvons fournir le détail méthodologique sur demande pendant les 30 minutes offertes avec un expert.

---

## 8. Section 5 — Secteurs couverts

### H2

> **Les secteurs où Althoce a déjà déployé**

### Sous-titre

> Notre portefeuille couvre les secteurs PME et ETI typiques de l'économie française. Si votre secteur n'apparaît pas, il y a de fortes chances qu'un cas similaire existe quand même : la majorité des problématiques (saisie, support, RH, marketing) sont transversales.

### Liste verticale numérotée 01→08 (`<NumberedListVertical />`)

**01. Expertise comptable et finance** : cabinets d'expertise comptable, directions financières d'ETI, services compta PME. *Cas types : ×2 capacité, automatisation factures fournisseurs, reporting financier auto.*

**02. SaaS B2B et tech** : éditeurs logiciels, plateformes B2B, agences digitales. *Cas types : support N1 absorbé, content marketing, qualification leads inbound.*

**03. Distribution et négoce** : distributeurs B2B, négoces spécialisés (vins, matières premières, équipements industriels). *Cas types : prospection multilingue, ADV automatisée, vigilance fournisseurs.*

**04. Industrie et manufacturing** : PME industrielles, ETI sous-traitantes, équipementiers. *Cas types : achats optimisés, ops back-office, gestion documentaire.*

**05. Services professionnels** : cabinets d'avocats, cabinets conseil, expertises spécialisées. *Cas types : standard téléphonique, analyse contractuelle, veille réglementaire.*

**06. Recrutement et RH** : cabinets de recrutement, ESN avec besoins de sourcing massif, DRH PME. *Cas types : tri CV anti-biais, qualification candidats, onboarding new hire.*

**07. E-commerce et retail** : marchands e-commerce, retailers omnicanaux. *Cas types : support client multilingue, statut commande, qualification SAV.*

**08. Agroalimentaire et secteurs régulés** : ETI agroalimentaires, santé, finance régulée. *Cas types : juridique souverain France, conformité documentée, vigilance fournisseurs.*

### Note sous la liste

> Votre secteur n'est pas listé ? La majorité des problématiques sont transversales (les agents IA service client d'un SaaS sont très similaires à ceux d'un cabinet d'avocats, simplement avec des bases de connaissances différentes). Les **30 minutes offertes avec un expert** servent à valider la transposabilité d'un cas existant à votre contexte.

---

## 9. Section 6 — Méthode (HÉRITÉE DE LA HOME)

> **🏠 Section héritée.**

---

## 10. Section 7 — Souveraineté (HÉRITÉE DE LA HOME)

> **🏠 Section héritée.**

---

## 11. Section 8 — FAQ Cas clients (5 Q/R)

### H2

> **Questions fréquentes sur ces cas clients**

### Liste accordéon `<FAQItem />`

**Q1. Les chiffres présentés sont-ils réels ou marketing ?**

Réels et vérifiables. Pour chaque cas, nous croisons les chiffres avec les données client (production, support, RH, commercial selon le métier concerné) avant publication. Le détail méthodologique est disponible sur demande pendant les 30 minutes offertes avec un expert. Aucun chiffre n'est inventé pour les besoins du marketing.

**Q2. Pourquoi certains clients sont-ils nommés et d'autres anonymisés ?**

Nominatif uniquement avec accord écrit du client. La majorité de nos clients PME préfèrent l'anonymisation (ils ne veulent pas signaler à leurs concurrents qu'ils ont automatisé telle ou telle fonction). Quand nous anonymisons, nous gardons une **rigueur sectorielle** (cabinet comptable lyonnais, négoce bordelais, etc.) pour que la transposition à votre contexte reste fidèle.

**Q3. Y a-t-il des cas d'échec dans votre portefeuille ?**

Oui. Notre **taux de réussite déploiement est de 96 %**, ce qui signifie que 4 % des projets sont arrêtés. Ces arrêts se font **systématiquement au cadrage**, avant le build, pour deux raisons : soit le cas d'usage cible n'est pas mûr pour l'IA (volume insuffisant, processus pas assez répétitif, données pas exploitables), soit la maturité IT du client ne permet pas un déploiement propre. Dans ces cas, nous orientons vers une [formation IA](/services/formation-ia/) ou un [audit IA](/services/audit-ia/) préalables. Nous ne facturons jamais un build qui n'a pas de chance raisonnable de réussir.

**Q4. Comment savoir si mon cas est transposable à un de ces 9 cas clients ?**

Trois indicateurs simples. **Taille d'entreprise comparable** (TPE / PME / ETI). **Métier comparable** (votre fonction se rattache à une des 9 fonctions cœur traitées). **Volume comparable** (vous traitez un volume mensuel proche de celui du cas en question). Si les 3 sont vrais, la transposition est très probable. Si 2 sur 3, c'est encore probable mais avec adaptation. Si 1 sur 3, voir l'[audit IA](/services/audit-ia/) qui cadrera un déploiement adapté à votre contexte.

**Q5. Combien coûte un déploiement comparable à ces cas ?**

Sur devis selon votre contexte. Tarification entièrement adaptée à votre volume, votre périmètre, vos outils existants, vos exigences de souveraineté. Tout démarre par les **30 minutes offertes avec un expert** : on identifie le cas comparable au vôtre, on partage les ordres de grandeur d'investissement et de ROI, vous repartez avec un devis ferme sous 5 jours sans engagement.

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
      "@type": "CollectionPage",
      "@id": "https://althoce.com/cas-clients/#collection",
      "name": "Cas clients Althoce",
      "description": "9 cas clients chiffrés Althoce : cabinets d'expertise comptable, négoces, SaaS B2B, cabinets d'avocats et de recrutement, ETI industrielles. Transformations réelles, ROI mesurable, témoignages directs.",
      "url": "https://althoce.com/cas-clients/"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Cas clients", "item": "https://althoce.com/cas-clients/" }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Cas clients Althoce",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "url": "https://althoce.com/cas-clients/cabinet-comptable-lyon/", "name": "Cabinet d'expertise comptable Lyon" },
        { "@type": "ListItem", "position": 2, "url": "https://althoce.com/cas-clients/negoce-vins-bordelais-agent-ia-sdr/", "name": "Négoce de vins bordelais" },
        { "@type": "ListItem", "position": 3, "url": "https://althoce.com/cas-clients/saas-b2b-agent-ia-service-client/", "name": "Éditeur SaaS B2B service client" },
        { "@type": "ListItem", "position": 4, "url": "https://althoce.com/cas-clients/cabinet-avocats-agent-ia-telephonique/", "name": "Cabinet d'avocats lyonnais" },
        { "@type": "ListItem", "position": 5, "url": "https://althoce.com/cas-clients/cabinet-recrutement-paris-agent-ia-tri-cv/", "name": "Cabinet de recrutement parisien" },
        { "@type": "ListItem", "position": 6, "url": "https://althoce.com/cas-clients/saas-b2b-agent-ia-marketing/", "name": "Éditeur SaaS B2B marketing" },
        { "@type": "ListItem", "position": 7, "url": "https://althoce.com/cas-clients/distributeur-b2b-agent-ia-ops/", "name": "Distributeur B2B industriel" },
        { "@type": "ListItem", "position": 8, "url": "https://althoce.com/cas-clients/eti-agroalimentaire-agent-ia-juridique/", "name": "ETI agroalimentaire juridique" },
        { "@type": "ListItem", "position": 9, "url": "https://althoce.com/cas-clients/eti-industrielle-agent-ia-achats/", "name": "ETI industrielle achats" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Chiffres réels ou marketing ?", "acceptedAnswer": { "@type": "Answer", "text": "Réels et vérifiables. Croisement avec données client systématique. Méthodologie disponible sur demande." } },
        { "@type": "Question", "name": "Pourquoi certains anonymes ?", "acceptedAnswer": { "@type": "Answer", "text": "Nominatif uniquement avec accord écrit. La majorité préfère l'anonymisation. Rigueur sectorielle préservée." } },
        { "@type": "Question", "name": "Cas d'échec ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui. 96 % de réussite déploiement. Les 4 % d'échecs sont arrêtés au cadrage avant build, jamais facturés." } },
        { "@type": "Question", "name": "Mon cas est-il transposable ?", "acceptedAnswer": { "@type": "Answer", "text": "Indicateurs : taille comparable, métier comparable, volume comparable. Si 3 sur 3, transposition très probable." } },
        { "@type": "Question", "name": "Combien coûte un déploiement ?", "acceptedAnswer": { "@type": "Answer", "text": "Sur devis. Adapté à votre volume, périmètre, outils, souveraineté. 30 min offertes avec un expert pour cadrer." } }
      ]
    }
  ]
}
```

---

## 14. Maillage interne (récap éditorial)

Liens **placés directement dans la prose** :

- Sec.3 (liste 9 cas) : 9 liens vers les cas clients individuels
- Sec.5 note finale : lien vers `/services/audit-ia/`
- Sec.11 Q3 : liens vers `/services/formation-ia/` et `/services/audit-ia/`
- Sec.11 Q4 : lien vers `/services/audit-ia/`

### Liens entrants attendus (≥ 8)

- Home (mention "cas clients" dans section preuve sociale)
- Header navigation
- Footer
- Toutes les pages métier `/agent-ia/[métier]/` (vers le cas client correspondant + lien retour vers le hub)
- Toutes les pages services Silo 1 (section "exemples de réalisations")
- Hub `/agent-ia/` (mention "voir les cas clients par métier")
- Hub `/services/` (idem)
- Articles blog (référence aux cas clients en preuve sociale)

---

## 15. Notes Claude Design

### Composants HOME à réutiliser strictement

`<MethodologySection />` (sec.6), `<SouveraineteSection />` (sec.7), `<CTAFinalSection />` (sec.9). Pas de section Pricing héritée. Pas de Marquee ici.

### Composants existants à réutiliser

`<DarkBlock />` (sec.2 et sec.4), `<FAQItem />` (sec.8), `<NumberedListVertical />` (sec.5), `<HeroStatHuge />` (sec.1 hero), `<KPIBand />` (sec.4).

### Nouveaux composants à concevoir

- `<CaseStudiesFilters />` : filtres horizontaux sec.3. Multi-sélection par métier / secteur / taille d'entreprise. Mise à jour en direct de la liste affichée. État conservé en URL (deep linking possible).
- `<CaseStudyEditorial />` : bloc présentation cas client large alternance gauche/droite (sec.3). Pour chaque cas : photo/icône, titre, pitch, 4 KPI compacts, citation, CTA. Composant réutilisable pour le hub ET pour les liens "Lire le cas complet" sur les pages métier.

### Règle d'intégration des liens internes (CRITIQUE)

Tous les liens listés en sec.14 doivent être **câblés à l'endroit exact où ils apparaissent dans la prose**.

### Règle d'intégration au site (CRITIQUE)

1. **Menu principal** : entrée "Cas clients" qui pointe vers cette page.
2. **Breadcrumb** : `Accueil → Cas clients`.
3. **Footer** : colonne "Découvrir" listant "Cas clients" en bonne position.
4. **Sitemap.xml** avec `<priority>0.9</priority>` (priorité maximale, page de conversion) et `<changefreq>monthly</changefreq>`.
5. **Indexation** autorisée. JSON-LD `CollectionPage` + `ItemList` (9 cas) + `FAQPage` validés.
6. **Pages enfants** : toutes les pages `/cas-clients/[slug]/` ont un breadcrumb et un lien retour vers ce hub.
7. **Lien depuis home v2** : la section "preuve sociale" de la home doit avoir un lien fort vers ce hub.
8. **Reading time** estimé visible : 5 min de lecture.

### Règle créativité visuelle

Patterns par section :
- Hero : split éditorial avec stat hero géante en rotation
- Sec.2 : prose + DarkBlock callout
- Sec.3 : filtres horizontaux + liste éditoriale étoffée alternance
- Sec.4 : KPI bands pleine largeur
- Sec.5 : liste verticale numérotée 01→08
- Sec.8 : accordéon vertical FAQ

Aucune grille de cartes 3×3.

### Tons / langage visuel

Bg `#000000`, accent azure `#38BDF8`, texte primaire blanc, texte secondaire `#94A3B8`. Inter pour le corps, Satoshi pour les titres. Les KPI dans la liste sec.3 utilisent un composant compact réutilisé du template cas client individuel.

---

## 16. Décisions arbitrées

1. ✅ **Pas de section Pricing héritée** : page orientée preuve sociale et non conversion tarifaire.
2. ✅ **9 cas listés en présentation éditoriale étoffée**, pas en grille de cartes. Chaque cas mérite une lecture attentive.
3. ✅ **Filtres multi-critères** par métier / secteur / taille pour faciliter la trouvabilité.
4. ✅ **KPI globaux Althoce** affichés en sec.4 (agrégation des chiffres marque canoniques + 96 % réussite déploiement + 4 semaines délai moyen).
5. ✅ **Anonymisation transparente** posée comme principe dans la sec.2 et explicitée dans la FAQ Q2.
6. ✅ **Taux d'échec 4 % assumé** dans la FAQ Q3 : geste de transparence qui renforce la crédibilité (vs concurrents qui prétendent 100 % de réussite).

---

## 17. Informations à valider avant publication

1. **Accord nominatif des 9 clients cités** : confirmer pour chaque cas si on peut nommer ou si on anonymise. À ce jour, tous sont anonymisés par défaut.
2. **Vérification croisée des KPI** : recroiser chaque chiffre avec les données client réelles avant publication.
3. **Stat "96 % de taux de réussite déploiement"** : valider l'évaluation sur le portefeuille client réel.
4. **Stat "+5 M€ économisés cumulés"** : confirmer le périmètre (économies directes + revenus générés ?) et la méthodologie.
5. **Filtres sec.3** : valider la liste des métiers / secteurs / tailles affichés (peuvent évoluer avec l'ajout de futurs cas).

---

*Document de référence rédigé le 2026-05-08. Hub Silo 6 cas clients. Aligné avec home-v2.md v3 et toutes les pages métier qui pointent vers les 9 cas individuels.*
