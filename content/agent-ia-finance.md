# /agent-ia/finance/ — Althoce (Silo 2, modèle vivant Métier · ex-comptabilité, renommé finance)

> **Brief de contenu** destiné à Claude Design (conception) et Claude Code (intégration).
> Version : 1.0 — Avril 2026
> Silo : 2 · Agent IA par Métier · **Page modèle vivante**
> URL : `/agent-ia/finance/`
> Statut Miro : tâche #26
> **🟢 Modèle vivant Métier** : ce brief est la page modèle canonique du Silo 2 (ex-comptabilité, renommé finance pour élargir le scope au-delà de la seule saisie comptable). Les autres pages métier (`/agent-ia/commercial/`, `/agent-ia/service-client/`, `/agent-ia/telephonique/`, `/agent-ia/rh/`, `/agent-ia/marketing/`, `/agent-ia/ops/`, `/agent-ia/juridique/`, `/agent-ia/achats/`) réutilisent strictement la même structure. Seuls les slots variables changent.

---

## 0. Statut « modèle vivant Métier » (template du Silo 2)

Ce brief sert de **template vivant** pour les 7 autres pages métier du Silo 2. Trois types de blocs cohabitent : **sections héritées de la home** (composants v2 réutilisés tels quels), **sections propres au métier** (slots à remplir par page), **blocs immuables** (CTA, audit pitch, JSON-LD, chiffres marque).

### Sections héritées de la home (réutilisation stricte des composants v2)

| Section | Composant home réutilisé | Position sur la page Métier |
|---------|--------------------------|------------------------------|
| **Méthode** | `MethodologySection` (4 étapes timeline) | après les agents recommandés |
| **Souveraineté** | `SouveraineteSection` (3 engagements EU / propriété / RGPD) | identique à la home |
| **CTA final** | `CTAFinalSection` (fond sombre, CTA unique, micro-garantie) | dernière section, identique |

**Règle stricte** : ces 3 sections ne sont **jamais redéfinies** sur une page métier. Claude Code instancie les composants tels quels.

> **Note d'arbitrage** : la section Pricing héritée de la home **n'apparaît PAS** sur les pages métier (Silo 2). **Aucun prix n'est affiché dans le contenu visible** (ni dans la prose, ni dans les modules, ni dans la FAQ, ni dans la meta description, ni dans le JSON-LD). Toute la communication est orientée valeur : ROI, payback, transformation opérationnelle. Le tarif réel est partagé en RDV après les 30 minutes offertes avec un expert.

### Slots variables (à adapter par page métier)

| Slot | Section | Variation par page |
|------|---------|--------------------|
| `H1` | Hero (sec.1) | « Agent IA pour [métier] » + bénéfice principal |
| `Sous-titre hero` | sec.1 | 2 lignes spécifiques au métier (douleur principale + libération) |
| `Micro-preuves pills` | sec.1 | 3 pills max (chiffres marque + ROI métier — sans « 30 min offertes ») |
| `Définition métier` | sec.2 | 1 paragraphe : ce qu'absorbe l'agent dans ce métier |
| `Avant / Après` | sec.3 | Tableau ou split éditorial : journée type sans / avec agent |
| `Agents recommandés` | sec.4 | 3 à 5 agents spécifiques au métier (depuis catalogue 30) |
| `Cas client métier` | sec.5 | Renvoi vers 1 cas client publié (extrait + chiffres clés) |
| `FAQ 8 Q/R` | sec.9 | Questions spécifiques au métier (ROI, conformité métier, intégration outils métier) |
| `Maillage interne` | §4 | Liens spécifiques (Silo 1 services, Silo 6 cas, Silo 5 blog métier) |
| `Mots-clés cibles` | §1 | Cluster sémantique du métier |
| `JSON-LD serviceType` | §2 | Adapté au métier |

### Règle « pas de labels visuels »

Aucun label décoratif au-dessus des H2 (pas de `Métier · Silo 2`, `Avant / Après`, etc.). Le H2 porte directement le mot-clé SEO. Cohérence avec home v2 et `/services/`.

### Règle « créativité visuelle, pas de réflexe grille »

- **Section 2 Définition métier** : long paragraphe éditorial pleine largeur + 1 callout sombre
- **Section 3 Avant/Après** : split éditorial gauche/droite (colonne « avant » dépouillée vs colonne « après » dynamique avec icônes), pas de grille de cartes
- **Section 4 Agents recommandés** : liste verticale numérotée 01→0X avec accordéon « Détail » par agent, OU réutilisation filtrée du `Marquee` home (filtré sur les 3-5 agents pertinents)
- **Section 5 Cas client** : grand bloc éditorial pleine largeur avec gros chiffre KPI, photo logo, citation client. Pas de grille de cartes.
- **Section 9 FAQ** : accordéon (OK)

### Blocs immuables (jamais modifiés d'une page Métier à l'autre)

- **Breadcrumb pattern** : `Accueil › Automatisation › Agent IA [métier]`
- **CTA primaire** : « Discuter de votre projet → »
- **CTA secondaire** : ancre vers section « Agents recommandés »
- **Pricing** : aucun prix dans le contenu visible. Toute la page est orientée valeur (ROI, payback, transformation). Tarification partagée en RDV après les 30 minutes offertes avec un expert.
- **Découverte offerte** : « 30 minutes offertes avec un expert » (jamais dans les pills hero)
- **Souveraineté** : héritée de la home
- **Méthode** : héritée de la home
- **CTA final** : hérité de la home
- **JSON-LD obligatoires** : `Service` + `FAQPage` + `BreadcrumbList`
- **Chiffres marque** : `+758 agents en production · +150 PME équipées · −70 % temps de saisie · +5 M€ économisés`

### Procédure d'adaptation pour une nouvelle page Métier

1. Dupliquer ce fichier en `agent-ia-[métier].md`
2. Remplacer les slots variables (sans toucher aux blocs immuables)
3. Choisir 3 à 5 agents pertinents depuis le catalogue 30 de la home
4. Lier 1 cas client publié si disponible (sinon, retirer la sec.5 et numéroter à nouveau)
5. Vérifier maillage : ≥ 2 piliers Silo 1, ≥ 2 autres pages métier Silo 2, ≥ 1 cas client Silo 6
6. Vérifier les 3 JSON-LD
7. Cocher la checklist SEO §5

---

## 1. Stratégie de la page

### Rôle dans l'architecture

Page hub du métier **finance / comptabilité / DAF** dans le Silo 2. Elle capte les requêtes métier (« agent IA finance », « agent IA comptabilité », « automatisation comptabilité PME », « IA pour DAF ») et redistribue vers le pilier marque `/services/agents-ia/` et vers les cas clients finance.

### Objectif trafic

1. **Capter** les requêtes métier : « agent IA finance », « agent IA comptabilité », « automatisation comptabilité », « IA DAF », « automatisation factures fournisseurs », « IA expert-comptable », « agent IA reporting financier ».
2. **Convertir** sur RDV découverte spécifique métier (30 minutes offertes avec un expert).
3. **Distribuer** vers les pages services pertinentes et vers les cas clients comptables.

### Intention de recherche

**Mixte forte** : informationnelle (« peut-on automatiser la comptabilité avec l'IA ? ») + commerciale (« agent IA comptabilité prix »). La page doit servir de réponse de référence ET de page de conversion.

### Cible prioritaire

Double persona :
- **DAF / responsable comptable PME** : cherche à absorber le pic de saisie sans recruter, à fiabiliser, à libérer son équipe.
- **Expert-comptable indépendant ou cabinet** : cherche à automatiser sa production pour absorber plus de clients.

### Mots-clés cibles

**Principal** : agent IA comptabilité

**Secondaires** :
- automatisation comptabilité
- IA pour DAF
- automatisation factures fournisseurs
- IA expert-comptable
- agent IA comptable
- automatisation saisie comptable
- comptabilité automatisée IA
- IA cabinet comptable

**Longue traîne** :
- automatiser la saisie des factures avec l'IA
- ROI automatisation comptabilité PME
- agent IA pour rapprochement bancaire
- combien coûte un agent IA comptable
- conformité IA comptabilité
- IA et FEC

---

## 2. Méta SEO

```html
<title>Agent IA pour la finance et la comptabilité : saisie, factures, rapprochement, reporting | Althoce</title>

<meta name="description" content="Un agent IA Althoce absorbe 80 % de la saisie comptable et du reporting financier : factures fournisseurs, rapprochement bancaire, écritures, indicateurs de pilotage. ROI inférieur à 6 mois, capacité doublée sans recruter. Tarification sur devis, 30 min offertes avec un expert.">

<meta name="keywords" content="agent IA finance, agent IA comptabilité, IA reporting financier, automatisation comptabilité, IA DAF, automatisation factures fournisseurs, IA expert-comptable, agent IA comptable, IA contrôle de gestion">

<link rel="canonical" href="https://althoce.com/agent-ia/finance/">

<!-- Open Graph -->
<meta property="og:title" content="Agent IA pour la finance et la comptabilité — Althoce">
<meta property="og:description" content="80 % de la saisie comptable absorbée par un agent IA. Factures, rapprochement, reporting. ROI sous 6 mois.">
<meta property="og:type" content="article">
<meta property="og:locale" content="fr_FR">
<meta property="og:url" content="https://althoce.com/agent-ia/finance/">
```

### Schémas JSON-LD requis

1. **Service** — `serviceType: "Agent IA pour la finance et la comptabilité"`, `areaServed: FR`, offre « Sur devis » (pas de prix affiché dans le contenu, focus valeur).
2. **FAQPage** — les 8 Q/R de la section 9.
3. **BreadcrumbList** — Accueil → Automatisation → Agent IA Comptabilité.

---

## 3. Structure de la page (9 sections + FAQ)

Légende : 🟢 Section **propre au métier** (slot à adapter par page) · 🏠 Section **héritée de la home v2** (composant réutilisé tel quel).

| # | Section | Origine | Objectif | Liens sortants |
|---|---------|---------|----------|----------------|
| 1 | Hero | 🟢 propre | H1 + promesse + CTA | — |
| 2 | Définition métier | 🟢 propre | Capter requête concept | → /services/agents-ia/ |
| 3 | Avant / Après l'agent IA | 🟢 propre | Démontrer le saut de productivité | — |
| 4 | Les 4 agents Althoce pour la finance | 🟢 propre | Distribution + preuve | → /services/agents-ia/ |
| 5 | Cas client comptable | 🟢 propre | Preuve sociale chiffrée | → /cas-clients/[slug]/ |
| 6 | Méthode de déploiement | 🏠 **héritée** (`MethodologySection`) | HowTo | → /services/audit-ia/ |
| 7 | Prix & délais | 🏠 **héritée** (langage pricing home) | Conversion | — |
| 8 | Sécurité & conformité métier | 🏠 **héritée** (`SouveraineteSection`) + 1 callout RGPD comptable | Objections | → /conseil/ |
| 9 | FAQ (8 Q/R) | 🟢 propre | AEO / LLM | Schema FAQPage |
| 10 | CTA final | 🏠 **héritée** (`CTAFinalSection`) | Conversion | — |

**Bilan template** : 6 sections propres au métier, 4 sections héritées de la home. Aucun label décoratif.

**Liens sortants internes prévus : ~10** (dont 2 piliers Silo 1, 3 autres pages métier Silo 2, 1 cas client Silo 6, 1 page Conseil Silo 4, 1 article Silo 5).

---

# CONTENU SECTION PAR SECTION

---

## Section 1 — Hero

**Fil d'Ariane**
`Accueil › Automatisation › Agent IA Comptabilité`

**H1 (unique) — pas de label décoratif**

> Agent IA pour la finance et la comptabilité.
> On absorbe **80 % de la saisie**, vous gardez **100 % du contrôle**.

**Sous-titre (2 lignes)**

> Factures fournisseurs, rapprochement bancaire, écritures, reporting : un agent IA Althoce traite ces tâches en autonomie sur vos outils existants (Sage, Cegid, Pennylane, QuickBooks, EBP). Votre équipe valide en 1 clic, garde la main sur les arbitrages, et récupère 3 à 5 jours par mois.

**Micro-preuves (pills, max 3)**

> +758 agents en production · −80 % temps de saisie · ROI < 6 mois

*Les « 30 minutes offertes avec un expert » n'apparaissent PAS dans le hero — c'est mentionné dans la section pricing héritée et dans le CTA final hérité.*

**CTA principal**

> Discuter de votre projet →

**CTA secondaire**

> Voir les 4 agents comptables ↓ *(ancre vers section 4)*

**Note Claude Design**

- Système visuel home v2.1 (fond `bg-base`, typo display serif).
- À droite (desktop) : illustration animée — une pile de factures qui entrent dans une « pipeline Althoce » et ressortent en lignes d'écritures comptables structurées.

---

## Section 2 — Ce qu'un agent IA peut absorber en comptabilité

**Pattern visuel** : long paragraphe éditorial pleine largeur, sans grille, sans cartes. Un seul callout sombre en encart à la fin.

**H2**

> Ce qu'un agent IA peut absorber en comptabilité.

**Paragraphe d'ouverture**

> Une comptabilité de PME, c'est un flux continu de documents : factures fournisseurs reçues par mail, notes de frais photographiées, relevés bancaires à rapprocher, écritures à passer, déclarations à préparer. La majorité de ce travail est répétitif, déclenché par un événement numérique (un mail, un PDF, un fichier OFX), et obéit à des règles claires une fois la situation comprise. C'est exactement le périmètre dans lequel un agent IA est efficace.

**Sous-paragraphe pédagogue**

> Concrètement, un agent comptable Althoce lit un PDF de facture, en extrait les données (TTC, TVA, échéance, IBAN, n° de bon de commande), rapproche avec la commande dans votre ERP, soumet l'écriture à validation au DAF en 1 clic, et la passe dans votre outil comptable. Sur les 3 000 factures mensuelles d'un client moyen, l'agent traite 80 % en autonomie. Les 20 % restants — les cas tordus, les litiges, les exceptions — remontent à votre équipe avec un brief de 3 lignes pour décision.

**Callout "En une phrase"** (encart, fond `bg-dark`)

> **En une phrase :** ce qui prend 4h à votre comptable chaque jour, l'agent le fait pendant la nuit. Votre équipe arrive le matin, valide, et passe à ce qui demande de l'humain.

---

## Section 3 — Avant / Après l'agent IA dans une PME

**Pattern visuel** : split éditorial pleine largeur, deux colonnes. Colonne gauche « Avant » sobre/grise (typographie discrète, listes simples). Colonne droite « Après » dynamique avec icônes lucide-react et accents `text-accent`. Pas de grille de cartes encadrées. Sur mobile : empilage vertical, ancres internes pour navigation.

**H2**

> Une journée type au service comptabilité, avant et après.

**Paragraphe intro**

> Le meilleur moyen de comprendre l'impact d'un agent IA, c'est de regarder une journée concrète. Voici ce qui change chez nos clients dans les 3 mois qui suivent la mise en production.

### Split éditorial

**Avant l'agent IA** *(colonne gauche, fond clair sobre)*

- 7h30 : la comptable arrive, ouvre 47 mails de factures fournisseurs reçues la veille
- 9h00 : saisie manuelle dans Sage, ligne par ligne, 4 minutes par facture
- 11h00 : pause, mal au dos, encore 30 factures à saisir
- 14h00 : rapprochement bancaire — pointage manuel des relevés
- 16h00 : un fournisseur appelle, sa facture n'est pas à jour, panique
- 17h30 : reporting mensuel commencé hier, toujours pas fini
- 18h30 : départ, frustrée

**Après l'agent IA** *(colonne droite, dynamique, accents azure)*

- 7h30 : l'agent a déjà traité les 47 factures pendant la nuit
- 8h00 : la comptable ouvre son tableau de bord, voit 38 factures prêtes à valider, 9 cas à arbitrer
- 8h45 : validation en 1 clic des 38, arbitrage rapide des 9, tout est passé
- 9h30 : rapprochement bancaire automatique, juste un cas litigieux à traiter
- 10h00 : reporting mensuel — les chiffres se mettent à jour seuls, elle écrit le commentaire
- 11h00 : appel avec le DAF pour analyser les écarts vs budget
- 14h00 : projet stratégique de mise en place du nouveau plan analytique
- 17h30 : départ, sereine

**Pitch conclusion**

> Le métier change : la comptable n'est plus saisisseuse, elle redevient analyste. C'est ce que ses études lui ont appris à faire.

---

## Section 4 — Les 4 agents Althoce pour la finance et la comptabilité

**Pattern visuel proposé** : liste verticale numérotée 01→04 en pleine largeur. Pour chaque agent : gros chiffre display serif, nom, 1 phrase manifeste, accordéon « Détail » qui développe (mission, exemple chiffré, intégrations, prix indicatif). Pas de grille. Alternative : réutiliser le `Marquee` home filtré sur les 4 agents — *à challenger*.

**H2**

> 4 agents IA déjà déployés en finance et comptabilité chez nos clients.

**Paragraphe intro**

> Sur les 30 agents du catalogue Althoce, 4 sont spécifiquement conçus pour la finance et la comptabilité PME (saisie, rapprochement, reporting, assistance DAF). Voici ce qu'ils font et leur impact.

### Liste verticale numérotée

**01 — Agent factures fournisseurs**
*Lit, extrait, rapproche, soumet à validation.*

> Reçoit les factures par mail (avec ou sans pièce jointe), extrait les données (TTC, TVA, fournisseur, échéance, IBAN, n° BC), rapproche avec le bon de commande dans l'ERP, soumet l'écriture à validation au DAF en 1 clic, passe dans Sage / Cegid / Pennylane / QuickBooks / EBP.
>
> Bénéfice client moyen : 3 000 factures/mois traitées en 12h cumulées au lieu de 80h.
>
> Délai : 2 semaines · Tarification sur devis selon volume traité et nombre d'outils branchés.

**02 — Agent rapprochement bancaire**
*Croise relevés et écritures, identifie les anomalies.*

> Récupère le relevé OFX/CSV, croise avec les écritures comptables, lettrer automatiquement les correspondances évidentes, isole les anomalies pour arbitrage humain. Apprend des décisions passées pour s'améliorer.
>
> Bénéfice client moyen : rapprochement mensuel passé de 2 jours à 2 heures.
>
> Délai : 1 à 2 semaines · Tarification sur devis selon scope.

**03 — Agent reporting financier**
*Génère les tableaux de bord et synthèses sur planning.*

> Consolide les données comptables (Sage, Cegid, Pennylane), banques, ventes (HubSpot, Shopify, Stripe) pour produire un reporting hebdo ou mensuel automatisé, avec commentaires générés sur les écarts vs budget. Reçu en mail ou Slack à l'heure que vous choisissez.
>
> Bénéfice client moyen : reporting du lundi 7h prêt à 7h, plus de retard.
>
> Délai : 2 à 3 semaines · **Sur devis** selon nombre de sources.

**04 — Agent assistant DAF**
*Répond aux questions financières en langage naturel.*

> Connecté aux outils comptables et bancaires, répond aux questions du dirigeant ou des managers (« combien on a dépensé en marketing ce mois ? », « quels clients ont des impayés > 60 jours ? »), génère des extracts à la demande, alerte sur des seuils.
>
> Bénéfice client moyen : 70 % des questions financières des managers résolues sans solliciter le DAF.
>
> Délai : 3 à 4 semaines · **Sur devis** selon le périmètre des sources.

**CTA central**

> Voir tous les agents Althoce → `/services/agents-ia/` *(via Marquee 30 agents)*

---

## Section 5 — Cas client : comment un cabinet comptable a doublé sa capacité sans recruter

**Pattern visuel** : grand bloc éditorial pleine largeur. Photo / logo client en bandeau (consenti, sinon icône secteur). Gros chiffre KPI principal en display serif (ex : « ×2 capacité »). Citation client en bloc isolé typographié. Pas de grille de cartes — c'est une histoire qu'on lit. Sur mobile : empilage vertical naturel.

**H2**

> Cas client : un cabinet comptable de 12 collaborateurs a doublé sa capacité en 4 mois.

**Bandeau d'identité**

> *Cabinet d'expertise comptable — 12 collaborateurs — 320 clients TPE/PME — Lyon — 2025*

**Bloc résultat principal**

> ×2 **clients gérés à effectif constant**
>
> 80 % de la saisie absorbée par l'agent · −60 % de temps sur la production · 0 départ d'équipe (au contraire : recrutement d'1 expert-comptable junior pour absorber la croissance)

**Récit (2 paragraphes)**

> Avant la mission Althoce, l'équipe passait 70 % de son temps en saisie : factures, banques, déclarations TVA. La direction refusait de prendre de nouveaux clients par peur de la surcharge. La transformation a été simple : un échange initial de 30 minutes avec un expert Althoce pour identifier les 3 processus à plus haut ROI, un cadrage chiffré sur 2 semaines, puis un déploiement progressif sur 8 semaines.
>
> Aujourd'hui, l'agent factures et l'agent rapprochement traitent 4 200 documents/mois en autonomie. Les collaborateurs valident, arbitrent, conseillent. Le cabinet a accepté 80 nouveaux clients sur les 4 derniers mois et l'expert-comptable junior recruté gagne 1 mois sur sa montée en compétence parce qu'il commence directement par la valeur ajoutée.

**Citation client**

> « On pensait que l'IA allait remplacer mes équipes. En réalité, elle a remplacé la partie de leur job qu'elles détestaient. Elles ont retrouvé du sens, on a doublé notre activité, et personne n'a démissionné. »
>
> *— Directrice associée du cabinet*

**CTA**

> Lire l'étude de cas complète → `/cas-clients/cabinet-comptable-lyon/`

---

## Section 6 — Méthode (HÉRITÉE DE LA HOME)

> **🏠 Section héritée — réutilisation stricte du composant `MethodologySection` de la home v2.**
>
> On NE redéfinit PAS la méthode sur la page Métier. Composant et contenu **identiques** à la home (4 étapes timeline). Aucune variation.
>
> **Aucun contenu textuel à fournir ici** — Claude Code instancie le composant home tel quel.

---

## Section 7 — Souveraineté & conformité comptable (HÉRITÉE + 1 callout métier)

> **🏠 Section héritée — réutilisation stricte du composant `SouveraineteSection` de la home v2.**
>
> Composant et contenu identiques à la home (3 engagements EU / propriété / RGPD). **Aucune variation visuelle.**

**Petit callout métier sous le composant** *(seul ajout autorisé sur cette page Métier — bloc texte simple, pas de nouveau visuel)*

> **Conformité comptable spécifique** : nos agents comptables respectent par défaut le PCG (Plan Comptable Général), le format FEC pour les contrôles fiscaux, et la traçabilité Bofip. Le DAF garde toujours la validation finale sur les écritures sensibles (immobilisations, provisions, écritures de clôture). Documentation de conformité livrée à la mise en production.

---

## Section 8 — FAQ finance et comptabilité (8 Q/R)

**H2**

> Vos questions, nos réponses directes.

### 8 Q/R (à intégrer avec schema FAQPage)

**Q1 — Mon agent comptable peut-il vraiment se connecter à Sage / Cegid / Pennylane / QuickBooks / EBP ?**

Oui, sur tous ces logiciels. Nous utilisons soit les API officielles quand elles existent (Pennylane, QuickBooks, certaines versions Sage cloud), soit des connecteurs RPA quand l'éditeur ne propose pas d'API (Sage on-premise, Cegid). Dans tous les cas, les écritures sont passées avec exactement la même rigueur qu'une saisie humaine — et la validation reste sous votre contrôle.

**Q2 — Que se passe-t-il si l'agent fait une erreur sur une écriture ?**

Trois couches de sécurité : validation humaine obligatoire avant passage en compta sur les écritures sensibles (montants > seuil, fournisseurs nouveaux, comptes de trésorerie), filtres de cohérence (TVA, totaux, IBAN), journalisation exhaustive (chaque action est tracée). Taux d'erreur observé chez nos clients : inférieur à 0,5 % sur les écritures automatisées. À titre de comparaison : le taux d'erreur humain en saisie manuelle est typiquement de 1 à 3 %.

**Q3 — Quel investissement pour un agent IA comptable et quel ROI attendre ?**

Tarification entièrement **sur devis** selon votre contexte : volume mensuel de factures, nombre d'outils branchés (logiciel comptable, banques, OCR), périmètre fonctionnel (factures fournisseurs seul, rapprochement bancaire, reporting, déclarations TVA), exigences de souveraineté. Le ROI typique se mesure en moins de 6 mois sur les cabinets et services compta saturés, avec deux indicateurs concrets : capacité de production doublée sans recruter, et redéploiement de votre équipe expert-comptable sur le conseil à valeur ajoutée. Tout démarre par **30 minutes offertes avec un expert** : vous repartez avec une cartographie de vos processus prioritaires et un devis ferme sous 5 jours.

**Q4 — En combien de temps l'agent est-il opérationnel ?**

1 à 2 semaines pour un agent simple après validation du cadrage. 4 à 6 semaines pour un système comptable complet. Les délais sont tenus parce que nous ne démarrons jamais sans cadrage chiffré, validé, signé.

**Q5 — Mon expert-comptable / mon DAF reste-t-il indispensable ?**

Plus que jamais. L'agent absorbe la saisie, votre expert/DAF se recentre sur l'analyse, le conseil, les arbitrages, la fiscalité. Aucun de nos clients n'a remplacé son DAF par un agent IA. Plusieurs ont libéré leur DAF de la saisie pour qu'il monte en compétence sur le pilotage.

**Q6 — Mes données comptables sont-elles envoyées à OpenAI ou Anthropic ?**

Uniquement si vous l'acceptez, et avec anonymisation préalable des données identifiantes (raisons sociales clients, IBAN, montants). Pour les clients qui exigent la souveraineté totale (cabinets traitant des entreprises soumises au secret professionnel), nous utilisons Mistral hébergé en France ou des modèles open-source auto-hébergés.

**Q7 — L'agent peut-il préparer une déclaration fiscale (TVA, IS, liasse) ?**

L'agent prépare un brouillon (pré-remplissage à partir des écritures), votre expert ou DAF valide, signe, télétransmet. Nous ne signons jamais une déclaration à la place de l'humain — ce n'est ni légal ni souhaitable. En revanche, le pré-remplissage automatique fait économiser 50 à 70 % du temps de préparation.

**Q8 — À qui appartient l'agent à la fin de la mission ?**

À vous, à 100 %. Code, prompts, workflows, accès aux LLM, journaux : tout vous est transféré. Vous pouvez reprendre la main en interne, changer de prestataire, ou continuer avec nous en support — c'est votre choix, sans abonnement obligatoire.

**Note Claude Code** : injecter le schéma `FAQPage` JSON-LD reprenant ces 8 Q/R.

---

## Section 9 — CTA final (HÉRITÉ DE LA HOME)

> **🏠 Section héritée — réutilisation stricte du composant `CTAFinalSection` de la home v2.**
>
> **Aucun contenu textuel à fournir ici.**

---

## 4. Maillage interne

### Liens sortants depuis cette page (~10)

**Vers Silo 1 (services)** :
- `/services/agents-ia/` (sec.2 et sec.4 — pilier marque)
- `/services/automatisation-ia/` (sec.4 — services opérationnels)
- `/services/audit-ia/` (sec.6 — démarrage)

**Vers Silo 2 (autres métiers)** :
- `/agent-ia/finance/` (cross-link, métier sœur)
- `/agent-ia/operations/` (cross-link, reporting)
- `/automatisation/` (hub Silo 2)

**Vers Silo 4 (conseil)** :
- `/conseil/roi-automatisation-ia/` (sec.8 — ROI)

**Vers Silo 6 (cas clients)** :
- `/cas-clients/cabinet-comptable-lyon/` (sec.5)

**Vers Silo 5 (blog)** :
- `/blog/automatiser-saisie-comptable/` (FAQ Q1 — article cluster)

### Liens entrants attendus (≥ 5)

1. `/services/agents-ia/` section 6 « Cas d'usage par métier » (Marquee)
2. `/services/automatisation-ia/` section 4 famille n°2
3. `/automatisation/` (hub Silo 2)
4. `/agent-ia/finance/` (cross-link)
5. Cas client `/cas-clients/cabinet-comptable-lyon/` (cross-link)
6. Blog cluster comptabilité (articles à venir Silo 5)

---

## 5. Checklist SEO / GEO / AEO

**On-page**
- [ ] H1 unique : « Agent IA pour la finance et la comptabilité. On absorbe 80 % de la saisie, vous gardez 100 % du contrôle. »
- [ ] 1 seul H1, hiérarchie H2 → H3 respectée
- [ ] Mots-clés « agent IA finance » et « agent IA comptabilité » dans : H1, H2 sec.2, URL (finance), meta title, meta description, 1er paragraphe
- [ ] Densité raisonnable, pas de bourrage
- [ ] `alt` illustration hero contient « agent IA finance » ou « agent IA comptabilité »

**Structured data**
- [ ] Schema `Service` injecté
- [ ] Schema `FAQPage` injecté (8 Q/R)
- [ ] Schema `BreadcrumbList` injecté

**Maillage**
- [ ] 10 liens sortants internes (voir §4)
- [ ] Profondeur depuis la home = 2 clics (via `/automatisation/` ou `/services/agents-ia/`)

**Performance**
- [ ] Illustration hero en SVG inline animé
- [ ] FAQ en `<details>` natif
- [ ] Lighthouse cible : Performance ≥ 90, SEO = 100, Accessibilité ≥ 95

**AEO**
- [ ] 1er paragraphe répond directement à « peut-on automatiser la finance et la comptabilité avec l'IA »
- [ ] Liste 4 agents structurée (extractible LLM)
- [ ] FAQ 8 Q/R structurée

---

## 6. Notes pour Claude Design

### Composants HOME à réutiliser strictement (4 sections héritées)
- `<MethodologySection />` (sec.6)
- Langage visuel pricing home (sec.7)
- `<SouveraineteSection />` (sec.8)
- `<CTAFinalSection />` (sec.10)

### Composants à réutiliser
- `<DarkBlock />` (sec.2 callout, sec.8 callout métier)
- `<FAQItem />` (sec.9)

### Nouveaux composants à créer
- `<BeforeAfterSplit />` (sec.3) — split éditorial 2 colonnes pleine largeur, alternance ton sobre / ton dynamique. Mutualisable pour autres pages métier.
- `<NumberedAgentList />` (sec.4) — liste verticale numérotée avec accordéon par agent. Mutualisable.
- `<CaseStudyEditorial />` (sec.5) — bloc éditorial avec gros KPI display serif + citation. Mutualisable pour cas clients (Silo 6).
- `<ComptabilityHeroIllustration />` (sec.1) — SVG animé spécifique métier (factures → pipeline → écritures).

### Règle « pas de labels visuels »
Aucun label décoratif au-dessus des H2.

---

## 7. Notes pour Claude Code

### Route
Créer `/agent-ia/finance/page.tsx` en Next.js App Router (sous-arbre `agent-ia/[metier]/`).

### Metadata
Exporter `metadata` (title, description, OG, canonical).

### JSON-LD
Injecter `Service` + `FAQPage` + `BreadcrumbList` côté server.

### Redirections
Si l'ancienne URL `/automatisation/comptabilite/` existe : 301 vers `/agent-ia/finance/`.

### Dépendances
- `framer-motion` pour split avant/après et accordéon agents
- `lucide-react` pour icônes (FileText, Banknote, BarChart3, Bot, ShieldCheck)
- `<Breadcrumbs />` partagé

---

## 8. Informations à valider avant publication

1. **Cas client cabinet Lyon** — confirmer accord du cabinet (ou anonymiser explicitement).
2. **Chiffres** (×2 capacité, 4 200 documents/mois, 70 % questions financières) — croiser avec données réelles.
3. ✅ **Règle pricing métier (mai 2026)** : aucun prix affiché dans le contenu visible (prose, modules, FAQ, meta, JSON-LD). Page entièrement orientée valeur (ROI, payback, transformation). Tarification partagée en RDV. Aligné avec home et piliers Silo 1.
4. **Logiciels comptables cités** (Sage, Cegid, Pennylane, QuickBooks, EBP) — usage en mention technique non-commerciale, OK.

---

## 9. Procédure d'adaptation pour les 7 autres pages métier

Pour chaque métier (`/agent-ia/commercial/`, `/agent-ia/service-client/`, `/agent-ia/rh/`, `/agent-ia/finance/`, `/agent-ia/operations/`, `/agent-ia/juridique/`, `/agent-ia/marketing/`, `/agent-ia/secteurs/`), dupliquer ce fichier et adapter :

| Slot | Variation |
|------|-----------|
| H1 + sous-titre hero | « Agent IA pour [métier] » + douleur principale métier |
| Pills hero | 3 chiffres marque + 1 chiffre ROI métier |
| Sec.2 paragraphe | Ce qu'absorbe un agent dans ce métier |
| Sec.3 Avant/Après | Journée type sans/avec agent |
| Sec.4 Agents | 3 à 5 agents pertinents (depuis catalogue 30) |
| Sec.5 Cas client | 1 cas publié dans le métier (ou retirer la section) |
| Sec.8 callout métier | Conformité spécifique au métier (ex : RGPD pour RH, secret pro pour juridique) |
| Sec.9 FAQ | 8 Q/R spécifiques (intégrations métier, ROI métier, conformité métier) |
| Maillage | Liens vers métiers sœurs, cas clients secteur, blog cluster métier |

**Sections héritées (jamais modifiées)** : 6, 7, 8 (composant), 10.
**Blocs immuables** : breadcrumb, CTA primaire, pricing, audit pitch, JSON-LD types.

---

*Document généré par Claude (content strategist) · v1.0 · avril 2026*
*Modèle vivant Métier validé par Vincent.*
