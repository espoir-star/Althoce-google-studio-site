# `/agence-ia-marseille/` — Silo 3 SEO local (adaptation #3, version mai 2026 v2)

> **🟢 Sections propres à cette page · 🏠 Sections héritées de la home v2**
>
> **Note v2 (mai 2026)** : refonte structurelle. Focus Althoce comme partenaire idéal. Présentiel + distanciel équilibré. Formation IA. SEO local distillé dans la prose (Euroméditerranée, Joliette, Aix-en-Provence, Vitrolles, Fos-sur-Mer, GPMM, PACA).

---

## 0. Préambule

### Sections héritées

| # | Section | Source | Composant |
|---|---------|--------|-----------|
| 5 | Méthode | `home-v2.md` | `<MethodologySection />` |
| 7 | Souveraineté | `home-v2.md` | `<SouveraineteSection />` |
| 8 | CTA final | `home-v2.md` | `<CTAFinalSection />` |

> Pas de section Pricing. Aucun prix dans le contenu visible.

### Slots variables propres à cette page

| Slot | Section | Variation |
|------|---------|-----------|
| `H1` | Hero | « Agence IA à Marseille : agents IA, automatisation et formation pour PME et ETI provençales » |
| `Sous-titre hero` | sec.1 | 2 lignes ancrées Marseille + Aix + PACA, présentiel ET distanciel |
| `Pourquoi Althoce` | sec.2 | 5 raisons + signaux locaux PACA (logistique portuaire GPMM, agroalimentaire méditerranéen, tourisme Côte d'Azur, énergie Fos-sur-Mer) |
| `4 métiers ciblés Marseille` | sec.3 | Achats (sous-traitance GPMM), Ops (logistique portuaire), Service client (tourisme/e-commerce), Téléphonique (cabinets Aix, hôtellerie Côte d'Azur) + Marquee |
| `Cas client local` | sec.4 | Cas générique adapté Marseille (distributeur agroalimentaire méditerranéen) |
| `FAQ locale` | sec.6 | 6 Q/R adaptées Marseille |

### Blocs immuables

- **Breadcrumb pattern** : `Accueil › Agences › Marseille`
- **CTA primaire** : « Discuter de votre projet → »
- **Pricing** : pas de section pricing.
- **Découverte offerte** : « 30 minutes offertes avec un expert »
- **JSON-LD** : `LocalBusiness` + `FAQPage` + `BreadcrumbList`
- **Chiffres marque** : `+758 agents en production · +150 PME équipées · −70 % temps de saisie · +5 M€ économisés`

---

## 1. Méta-info SEO / éditoriale

### Silo
**Silo 3 — SEO local** (adaptation #3, Marseille)

### Rôle dans l'architecture

Page SEO local prioritaire numéro 3. Couvre la métropole Aix-Marseille-Provence + arc méditerranéen. **Focus Althoce comme partenaire idéal**, signaux SEO local distillés dans la prose (GPMM, Euroméditerranée, Aix-en-Provence, Fos-sur-Mer, agroalimentaire méditerranéen, tourisme PACA).

### Mots-clés cibles principaux

agence IA Marseille · agence IA Provence · consultant IA Marseille · automatisation Marseille · IA PME Marseille · agent IA Aix-en-Provence · formation IA Marseille · IA logistique portuaire · IA agroalimentaire Provence

### Mots-clés longue traîne

« agence IA Marseille Euroméditerranée », « consultant IA souverain Provence », « IA logistique portuaire France », « agence IA Aix-en-Provence », « formation IA Marseille PACA »

---

## 2. Title / Meta description / Open Graph

```html
<title>Agence IA à Marseille : agents IA, automatisation et formation pour PME et ETI provençales | Althoce</title>

<meta name="description" content="Althoce, agence IA française qui accompagne les PME et ETI de la métropole Aix-Marseille-Provence et de la région PACA. Expertise logistique portuaire, agroalimentaire méditerranéen, tourisme Côte d'Azur. Présentiel à Marseille, distanciel sans contrainte, formation IA, souveraineté France. 30 min offertes avec un expert.">

<meta name="keywords" content="agence IA Marseille, agence IA Provence, consultant IA Marseille, automatisation Marseille, IA PME Marseille, agent IA Aix-en-Provence, formation IA Marseille">

<link rel="canonical" href="https://althoce.com/agence-ia-marseille/">

<meta property="og:title" content="Agence IA à Marseille : agents IA, automatisation et formation pour PME provençales | Althoce">
<meta property="og:description" content="L'agence IA française qui accompagne les PME provençales. Expertise logistique portuaire, agro méditerranéen, tourisme PACA. Présentiel + distanciel + formation, souveraineté France.">
<meta property="og:type" content="article">
<meta property="og:locale" content="fr_FR">
<meta property="og:url" content="https://althoce.com/agence-ia-marseille/">
```

---

## 3. Plan de page

| # | Section | Type | Pattern visuel |
|---|---------|------|----------------|
| 1 | 🟢 Hero | Propre | Split éditorial : à gauche H1+CTA, à droite carte SVG France avec Marseille mis en avant + pictogrammes présentiel/distanciel |
| 2 | 🟢 Pourquoi Althoce | Propre | Liste verticale numérotée 5 raisons + callout `<DarkBlock />` présentiel + distanciel |
| 3 | 🟢 L'IA transforme chaque métier provençal | Propre | 4 blocs métier alternance + Marquee agents |
| 4 | 🟢 Cas client provençal | Propre | Bloc éditorial distributeur agroalimentaire méditerranéen |
| 5 | 🏠 Méthode | Hérité | `<MethodologySection />` |
| 6 | 🟢 FAQ locale Marseille | Propre | Accordéon `<FAQItem />` |
| 7 | 🏠 Souveraineté | Hérité | `<SouveraineteSection />` |
| 8 | 🏠 CTA final | Hérité | `<CTAFinalSection />` |

---

## 4. Section 1 — Hero

### H1

> **Agence IA à Marseille : agents IA, automatisation et formation pour PME et ETI provençales.**

### Sous-titre (2 lignes)

> Vous dirigez une PME ou une ETI à Marseille, Aix-en-Provence ou dans la région Provence-Alpes-Côte d'Azur. Althoce vous accompagne avec une expertise sur les secteurs forts régionaux (logistique portuaire, agroalimentaire méditerranéen, tourisme haut de gamme), une présence régionale pour les RDV stratégiques, et un distanciel structuré pour la phase de build.

### Pills (3 max)

> +150 PME équipées en France · Expertise secteurs PACA · Présentiel + distanciel

### CTA principal

> Discuter de votre projet →

### CTA secondaire

> Pourquoi nous choisir ↓ *(ancre `#pourquoi`)*

---

## 5. Section 2 — Pourquoi Althoce *(ancre `#pourquoi`)*

### H2

> **Pourquoi travailler avec Althoce pour votre projet IA à Marseille**

### Sous-titre

> Vous avez le choix entre plusieurs prestataires IA en Provence-Alpes-Côte d'Azur. Voici cinq raisons concrètes qui nous distinguent et qui expliquent pourquoi +150 PME françaises, dont plusieurs provençales, nous ont déjà fait confiance.

### Liste verticale numérotée 01→05 (`<NumberedListVertical />`)

**01. Expertise opérationnelle sur les 8 métiers cœur de l'entreprise**

> Nous ne sommes pas généralistes. Nous avons déployé des agents IA dans tous les métiers : [finance](/agent-ia/finance/), [commercial](/agent-ia/commercial/), [service client](/agent-ia/service-client/), [marketing](/agent-ia/marketing/), [RH](/agent-ia/rh/), [ops](/agent-ia/ops/), [juridique](/agent-ia/juridique/), [achats](/agent-ia/achats/). Cette profondeur multi-métiers nous permet de **comprendre votre quotidien rapidement** sans courbe d'apprentissage facturée à votre charge.

**02. Présentiel à Marseille ET distanciel structuré : vous choisissez le mode**

> Pour les phases stratégiques, nous nous déplaçons régulièrement à Marseille (Euroméditerranée, Joliette, Vieux-Port, Marseille 6ᵉ et 8ᵉ), à Aix-en-Provence (centre-ville, technopôle), à Vitrolles et Plan de Campagne pour le tissu industriel, et sur l'ensemble de la métropole Aix-Marseille-Provence et de la région PACA (Toulon, Avignon, Arles). Pour la phase de build (60 à 70 % du projet), **distanciel structuré** avec points hebdomadaires de 30 minutes. Vous choisissez la modalité.

**03. Formation IA pour vos équipes pour autonomiser le pilotage**

> Au-delà du déploiement technique, nous proposons des [ateliers de formation IA](/services/formation-ia/) pour vos équipes provençales : utiliser Claude et ChatGPT au quotidien, bonnes pratiques sécurité, comprendre les agents IA. Ateliers dispensés en présentiel dans vos locaux (Marseille métropole, Aix, PACA) ou en distanciel synchrone selon votre préférence. Format sur-mesure, 4h à 21h.

**04. Souveraineté France par défaut**

> Notre stack standard est française : Mistral hébergé en France (OVH, Scaleway), infrastructure auto-hébergeable, aucune donnée nominative envoyée à OpenAI ou Anthropic sans accord client explicite. Particulièrement pertinent pour les ETI provençales soumises à des contraintes secteur sensible : **logistique portuaire et douanière GPMM** (sécurité portuaire, conformité douanière), **agroalimentaire premium** (normes sanitaires européennes), **énergie Fos-sur-Mer** (transition énergétique, raffineries), **tourisme haut de gamme** (données clients VIP). Voir [Souveraineté](/#souverainete).

**05. Premier agent en 1 semaine, ROI mesurable en moins de 6 mois**

> Pas de PowerPoint à 100 000 € en 6 mois. **Un agent IA simple est en production sous une semaine** après cadrage signé. ROI typique en moins de 6 mois sur les cas concrets : un distributeur agroalimentaire méditerranéen a libéré 50 % du temps de son acheteur unique en 6 semaines. +758 agents déjà en production, +5 M€ d'économies cumulées. Voir [Cas clients](/cas-clients/).

### Callout `<DarkBlock />`

> **Présentiel OU distanciel : c'est vous qui décidez selon le projet**
>
> **Nos délais et notre qualité sont identiques quelle que soit la modalité.** Présentiel pour le cadrage et les ateliers stratégiques (Marseille, Aix-en-Provence, métropole), distanciel pour le build (60 à 70 % du projet) gagne du temps à tout le monde. Aucune pénalité distanciel, aucune surcharge présentiel.

---

## 6. Section 3 — L'IA transforme chaque métier provençal

### H2

> **L'IA transforme chaque métier provençal**

### Sous-titre

> Quatre métiers où nos agents IA ont déjà transformé le quotidien de PME et ETI provençales, du quartier Euroméditerranée aux flux logistiques du GPMM, des cabinets professionnels d'Aix-en-Provence à l'hôtellerie haut de gamme de la Côte d'Azur. Pour la liste complète des 8 métiers couverts, voir notre [hub agents IA par fonction](/agent-ia/).

### 4 blocs métier richement présentés

**01. Achats et sourcing fournisseurs** *(image / mockup à droite)*

[Agent IA pour les achats →](/agent-ia/achats/)

> Les directions achats des distributeurs agroalimentaires méditerranéens (huiles, vins, conserves, négoces de produits frais méditerranéens), des ETI industrielles autour de Fos-sur-Mer et de la Vallée de la chimie, et des sous-traitants GPMM gèrent des panels fournisseurs étendus avec exigences fortes (vigilance financière, traçabilité sanitaire pour l'agro, certifications ISO industrie). Notre agent IA combine sourcing accéléré, analyse devis pondéré et vigilance financière continue. **Public type PACA** : distributeurs agroalimentaires méditerranéens, négoces vin et huile, ETI industrielles Fos / Vitrolles, sous-traitance GPMM.

**02. Opérations et back-office (logistique portuaire incluse)** *(image / mockup à gauche)*

[Agent IA pour les opérations →](/agent-ia/ops/)

> Les distributeurs B2B de la métropole marseillaise, les sous-traitants du GPMM (Grand Port Maritime de Marseille) et les ETI logistiques régionales subissent une pression opérationnelle forte sur les flux entrants (mails clients, bons de livraison fournisseurs, suivi douanier, gestion documentaire). Notre agent IA absorbe la couche répétitive et libère vos humains pour la relation client et les arbitrages opérationnels. **Cas type Marseille** : distributeur B2B industriel, mails ×3 absorbés, ADV automatisée, fin du turnover assistant ops.

**03. Service client (tourisme, e-commerce, distribution)** *(image / mockup à droite)*

[Agent IA pour le service client →](/agent-ia/service-client/)

> Les hôteliers haut de gamme de la Côte d'Azur (Cannes, Nice, Saint-Tropez), les offices de tourisme provençaux, les e-commerces régionaux et les SaaS B2B à Euroméditerranée croulent sous les demandes clients multilingues (français, anglais, italien, allemand, mandarin pour la clientèle VIP asiatique). Notre [chatbot IA RAG multilingue](/services/chatbot-ia/) et notre agent service client absorbent le N1 en 9 langues. **Cas type PACA** : hôtellerie 4-5 étoiles Côte d'Azur, SaaS B2B Euroméditerranée, distributeur e-commerce provençal.

**04. Téléphonique (cabinets pro, hôtellerie, services)** *(image / mockup à gauche)*

[Agent IA téléphonique →](/agent-ia/telephonique/)

> Les cabinets d'avocats, d'expertise comptable et de conseil d'Aix-en-Provence et de Marseille (forte densité dans le centre-ville aixois et à Euroméditerranée), les hôteliers Côte d'Azur et les agences immobilières provençales ont des standards téléphoniques saturés. Notre [agent IA téléphonique](/agent-ia/telephonique/) en voix naturelle française (et 4 langues optionnelles) prend les appels 24/7, qualifie, prend les RDV, transfère les cas complexes avec contexte vocal pré-passé. **Cas type région** : cabinet d'avocats lyonnais, 0 appel raté, +130 % RDV qualifiés (méthode transposable à Aix-Marseille).

### Marquee d'agents en dessous

> **🏠 Section semi-héritée.**

### Note sous le Marquee

> Au total, nous couvrons 8 métiers cœur et la modalité transverse téléphonique. Pour explorer l'ensemble, voir notre [hub agents IA par fonction](/agent-ia/).

---

## 7. Section 4 — Cas client provençal

### H2

> **Cas client : distributeur agroalimentaire méditerranéen, sourcing fournisseurs ×4 plus rapide**

### Bandeau d'identité

> *Distributeur agroalimentaire méditerranéen · 60 collaborateurs · 80 fournisseurs (Italie, Espagne, Grèce, France méditerranéenne) · Marseille · 2025-2026 · cas anonymisé*

### Résultat principal

> **3 jours → 4h sourcing fournisseur**
>
> Vigilance financière continue sur 80 fournisseurs · ADV automatisée · 0 rupture surprise sur 12 mois

### Récit court

> Le distributeur agroalimentaire (huiles d'olive, vins méditerranéens, conserves, produits frais pour restauration et retail régional) gérait 80 fournisseurs méditerranéens avec un acheteur unique saturé. Le sourcing prenait 3 jours, l'analyse devis était bâclée, la vigilance financière manquait. 2 agents IA Althoce déployés en 6 semaines (sourcing + suivi fournisseurs avec vigilance financière). Aujourd'hui, l'acheteur a libéré 50 % de son temps pour la négociation stratégique (producteurs italiens et grecs, principaux volumes). 0 rupture surprise sur 12 mois grâce à la vigilance continue.

### Lien vers le cas signature achats

> [Voir notre cas signature achats (transposable) →](/cas-clients/eti-industrielle-agent-ia-achats/) *(secteur industriel, même typologie d'agents IA)*

---

## 8. Section 5 — Méthode (HÉRITÉE DE LA HOME)

> **🏠 Section héritée.**

---

## 9. Section 6 — FAQ locale Marseille (6 Q/R)

### H2

> **Questions fréquentes : Althoce à Marseille et en Provence-Alpes-Côte d'Azur**

### Liste accordéon `<FAQItem />`

**Q1. Présentiel à Marseille ou distanciel : qu'est-ce qui change ?**

Rien sur la qualité ni les délais. Présentiel pertinent en phase de cadrage à Marseille (Euroméditerranée, Vieux-Port, Marseille 8ᵉ), à Aix-en-Provence ou dans la métropole. Build en distanciel structuré avec points hebdomadaires. **Vous choisissez la modalité** en fonction de votre préférence.

**Q2. Avez-vous un bureau permanent à Marseille ?**

Pas de bureau permanent à Marseille, mais des déplacements réguliers et des espaces partenaires à Euroméditerranée pour les RDV présentiels. Pour le suivi long terme, le distanciel structuré est notre standard.

**Q3. Proposez-vous des formations IA pour mes équipes provençales ?**

Oui. Nos [ateliers de formation IA](/services/formation-ia/) sont dispensés en présentiel dans vos locaux (Marseille, Aix-en-Provence, métropole, PACA) ou en distanciel synchrone. Formats 4h à 21h selon objectifs. Programme adapté par métier (commercial export méditerranéen, achats agroalimentaire, service client tourisme, etc.).

**Q4. Avez-vous une expertise spécifique sur la logistique portuaire GPMM ?**

Oui. Sous-traitance GPMM (Grand Port Maritime de Marseille) et flux logistiques méditerranéens. Cas types : automatisation suivi BL fournisseurs, gestion documentaire douanière, vigilance sous-traitants industriels. Pour les contraintes sécurité portuaire, la souveraineté Mistral France est notre standard.

**Q5. Pour le secteur tourisme et hôtellerie haut de gamme Côte d'Azur, que proposez-vous ?**

Trois agents particulièrement pertinents pour le tourisme PACA : [chatbot IA RAG multilingue](/services/chatbot-ia/) (9 langues standard dont mandarin et japonais pour la clientèle VIP asiatique), [agent IA téléphonique](/agent-ia/telephonique/) en voix naturelle française et anglaise, agent service client intégré aux PMS hôteliers (Mews, Cloudbeds, Oracle Opera). Pour les hôteliers Cannes, Nice, Saint-Tropez, déploiement adapté aux pics saisonniers.

**Q6. Mes données restent-elles en France si je travaille avec une agence régionale ?**

Oui, par défaut. Mistral hébergé France (OVH, Scaleway), infrastructure auto-hébergeable. Particulièrement strict pour secteurs sensibles : logistique portuaire et douanière (GPMM), énergie (Fos-sur-Mer, raffineries), agroalimentaire premium (normes sanitaires européennes), tourisme haut de gamme (données clients VIP).

---

## 10. Section 7 — Souveraineté (HÉRITÉE DE LA HOME)

> **🏠 Section héritée.**

---

## 11. Section 8 — CTA final (HÉRITÉ DE LA HOME)

> **🏠 Section héritée.**

---

## 12. JSON-LD complet

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://althoce.com/agence-ia-marseille/#localbusiness",
      "name": "Althoce — Agence IA à Marseille",
      "description": "Agence IA française qui accompagne les PME et ETI provençales. Expertise logistique portuaire GPMM, agroalimentaire méditerranéen, tourisme Côte d'Azur. Présentiel à Marseille, distanciel, formation IA, souveraineté France.",
      "url": "https://althoce.com/agence-ia-marseille/",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Marseille",
        "addressRegion": "Provence-Alpes-Côte d'Azur",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "43.2965",
        "longitude": "5.3698"
      },
      "areaServed": [
        { "@type": "City", "name": "Marseille" },
        { "@type": "City", "name": "Aix-en-Provence" },
        { "@type": "AdministrativeArea", "name": "Métropole Aix-Marseille-Provence" },
        { "@type": "AdministrativeArea", "name": "Provence-Alpes-Côte d'Azur" },
        { "@type": "Country", "name": "France" }
      ],
      "serviceType": "AI agency, AI agents, automation and training for PMEs and ETIs"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Agences", "item": "https://althoce.com/agences/" },
        { "@type": "ListItem", "position": 3, "name": "Marseille", "item": "https://althoce.com/agence-ia-marseille/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Présentiel ou distanciel à Marseille ?", "acceptedAnswer": { "@type": "Answer", "text": "Aucune différence qualité/délais. Présentiel à Euroméditerranée, Aix, métropole. Build distanciel structuré." } },
        { "@type": "Question", "name": "Bureau permanent à Marseille ?", "acceptedAnswer": { "@type": "Answer", "text": "Pas de bureau permanent. Espaces partenaires Euroméditerranée pour RDV." } },
        { "@type": "Question", "name": "Formations IA équipes provençales ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui. Ateliers 4h à 21h, présentiel Marseille/Aix/PACA ou distanciel, par métier." } },
        { "@type": "Question", "name": "Expertise logistique portuaire GPMM ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui. Sous-traitance GPMM. Automatisation BL, gestion documentaire douanière, vigilance sous-traitants. Souveraineté France standard." } },
        { "@type": "Question", "name": "Tourisme Côte d'Azur haut de gamme ?", "acceptedAnswer": { "@type": "Answer", "text": "Chatbot 9 langues, agent téléphonique voix naturelle, intégration PMS hôteliers (Mews, Cloudbeds, Opera). Adapté pics saisonniers." } },
        { "@type": "Question", "name": "Données en France ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui par défaut. Mistral France. Strict pour secteurs sensibles : portuaire, énergie Fos, agro premium, tourisme VIP." } }
      ]
    }
  ]
}
```

---

## 13. Maillage interne (récap éditorial)

Liens **placés directement dans la prose** :

- Sec.2 raison 01 : 8 liens vers les pages métier
- Sec.2 raison 03 : lien vers `/services/formation-ia/`
- Sec.2 raison 04 : lien vers `/#souverainete`
- Sec.2 raison 05 : lien vers `/cas-clients/`
- Sec.3 4 blocs métier : 4 liens vers les pages métier correspondantes
- Sec.3 bloc service client : lien vers `/services/chatbot-ia/`
- Sec.3 bloc téléphonique : lien vers `/agent-ia/telephonique/`
- Sec.3 note sous Marquee : lien vers `/agent-ia/`
- Sec.4 cas client : lien vers `/cas-clients/eti-industrielle-agent-ia-achats/`
- Sec.9 Q3 : lien vers `/services/formation-ia/`
- Sec.9 Q5 : liens vers `/services/chatbot-ia/` et `/agent-ia/telephonique/`

---

## 14. Notes Claude Design

### Composants HOME

`<MethodologySection />`, `<SouveraineteSection />`, `<CTAFinalSection />`, `<Marquee />`.

### Composants existants à réutiliser

`<DarkBlock />`, `<FAQItem />`, `<NumberedListVertical />`, `<MetierBlockSplit />`, `<HeroCityMapMockup />`.

### Règle d'intégration au site

1. **Menu principal** : sous-menu "Agences", Marseille en 3ᵉ position.
2. **Breadcrumb** : `Accueil → Agences → Marseille`.
3. **Sitemap** : `priority 0.7`, `changefreq monthly`.
4. **Reading time** : 5 min.

---

## 15. Informations à valider avant publication

1. ✅ **Pricing** : pas de prix.
2. **Cas client distributeur agroalimentaire méditerranéen** : générique, à remplacer par un vrai cas client local si disponible (ou à formaliser en cas client #10 du Silo 6 si récurrent en région).
3. **Mention "expertise sous-traitance GPMM"** : confirmer la capacité opérationnelle réelle.
4. **Intégrations PMS hôteliers** (Mews, Cloudbeds, Oracle Opera) Q5 : confirmer le périmètre opérationnel.
5. **4 métiers présentés sec.3** : achats, ops, service client, téléphonique. Valider que c'est bien les 4 plus pertinents pour le tissu PME-ETI provençal (alternative possible : remplacer téléphonique par finance si plus pertinent commercialement).
6. **Mention "agent IA téléphonique en 4 langues optionnelles"** : confirmer le périmètre langues opérationnel pour le tourisme.

---

*Document de référence rédigé le 2026-05-08, refondu v2. Adaptation #3 du template SEO local (Marseille). Focus Althoce comme partenaire idéal. Signaux SEO local distillés dans la prose (Euroméditerranée, Joliette, Aix-en-Provence, Vitrolles, Fos-sur-Mer, GPMM, PACA). Spécialisations sectorielles régionales mises en avant.*
