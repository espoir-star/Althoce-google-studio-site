# `/service-client/` — Service client Althoce (support pour clients sous contrat)

> **Cette page est destinée aux clients qui ont déjà signé une mission Althoce. Elle décrit les modalités de support, les canaux de contact, les niveaux de service (SLA) selon le contrat souscrit, les procédures d'escalade, et le contact urgence. Ne pas confondre avec `/agent-ia/service-client/` qui présente nos prestations d'agents IA dédiés au service client de nos clients (autre périmètre, autre intent).**

---

## 0. Préambule

### Distinction critique avec `/agent-ia/service-client/`

| URL | Cible | Intent |
|---|---|---|
| **`/service-client/`** (cette page) | **Clients Althoce déjà sous contrat** | Support pour vous, qui avez signé une mission Althoce |
| `/agent-ia/service-client/` | Prospects | Présentation des agents IA Althoce dédiés au service client des entreprises clientes |

Cette page n'a **pas vocation à convertir des prospects**. Elle sert exclusivement les clients existants qui cherchent comment obtenir du support sur leur déploiement, qui veulent comprendre leur niveau de SLA, ou qui ont une urgence opérationnelle.

### Sections héritées

> **Aucune** section héritée. Page utilitaire qui n'a pas besoin du framework marketing standard (Méthode, Souveraineté, CTAFinalSection). Le CTA de cette page est « Ouvrir un ticket » ou « Contacter mon référent », pas « Discuter de votre projet ».

### Positionnement éditorial

Page utilitaire factuelle. Clarté avant tout. Le client sous contrat doit trouver en moins de 5 secondes : (a) son canal de support, (b) son délai de réponse contractuel, (c) le contact urgence si besoin.

### Slots variables

| Slot | Section | Variation |
|---|---|---|
| `H1` | Hero | « Service client Althoce. On répond. On corrige. On accompagne. » |
| `Canaux de support` | sec.2 | 4 canaux : email, ticket, urgence, référent dédié |
| `SLA par niveau` | sec.3 | 3 niveaux : Essentiel / Standard / Privilège (à valider terminologie) |
| `Procédure escalade` | sec.4 | 3 niveaux escalade |
| `Contact urgence` | sec.5 | Hotline urgence si applicable |
| `FAQ support` | sec.6 | 5 Q/R support |

### Blocs immuables

- **Breadcrumb** : `Accueil › Service client`
- **CTA primaire** : « Ouvrir un ticket de support » (ou contact email direct si pas de système ticket)
- **Pricing** : pas de section pricing.
- **JSON-LD** : `WebPage` + `BreadcrumbList` + `FAQPage`
- **Robots** : `noindex, follow` (page utilitaire pour clients, pas de trafic SEO recherché)

### Règle créativité visuelle

Page sobre, dense, structurée. Pas de hero illustré marketing. Pas de pills d'argumentaire commercial. Le client sous contrat veut **trouver son info rapidement**. Tableaux denses, sections courtes, lien direct vers les canaux opérationnels.

---

## 1. Méta-info SEO / éditoriale

### Silo
Page institutionnelle (support client).

### Rôle dans l'architecture

Page support officielle. Référencée dans les contrats clients, dans le pied de page, dans les emails post-déploiement, dans la documentation de mise en production fournie aux clients.

### Objectif trafic

Aucun (page non indexée). Trafic exclusivement entrant depuis :
- Footer
- Email d'onboarding client
- Documentation de prise en main fournie post-déploiement
- Pages signature de mission

---

## 2. Title / Meta description

```html
<title>Service client Althoce | Support pour clients sous contrat</title>

<meta name="description" content="Service client Althoce. Modalités de support, canaux, SLA contractuels, escalade, contact urgence. Page réservée aux clients Althoce sous contrat.">

<meta name="robots" content="noindex, follow">

<link rel="canonical" href="https://althoce.com/service-client/">
```

---

## 3. Plan de page

| # | Section | Type | Pattern visuel |
|---|---|---|---|
| 1 | 🟢 Hero court factuel | Propre | Hero centré sobre : H1 + intro + 3 pills factuels |
| 2 | 🟢 Vos canaux de support | Propre | 4 cards canaux avec usage recommandé pour chacun |
| 3 | 🟢 Niveaux de service (SLA) | Propre | Tableau comparatif 3 niveaux |
| 4 | 🟢 Procédure d'escalade | Propre | 3 étapes numérotées verticales |
| 5 | 🟢 Contact urgence opérationnelle | Propre | Bloc rouge / accent fort + numéro / email urgence |
| 6 | 🟢 FAQ support | Propre | Accordéon `<FAQItem />` |
| 7 | 🟢 Lien vers documentation client | Propre | Bloc lien sortant vers espace client / documentation |

---

## 4. Section 1 — Hero court factuel

### Layout

Hero centré, sobre. Pas de split. Pas d'illustration. Container `max-w-3xl` centré.

### H1

> **Service client Althoce. On répond. On corrige. On accompagne.**

### Intro (2 lignes)

> Vous êtes client Althoce sous contrat et vous avez besoin d'aide sur votre déploiement, une question opérationnelle, une demande d'évolution, ou un incident à signaler. Voici les canaux et délais que nous nous engageons à respecter, selon le niveau de service souscrit dans votre contrat.

### Pills factuels (3)

> Réponse standard sous 4 h ouvrées · Hotline urgence 24/7 (niveau Privilège) · Référent dédié à partir du niveau Standard

### Bloc info

> **Vous n'êtes pas client Althoce ?**
> Cette page est destinée aux clients sous contrat. Si vous souhaitez nous contacter pour un nouveau projet, rendez-vous sur la [page contact](/contact/).

---

## 5. Section 2 — Vos canaux de support

### H2

> **Comment nous contacter selon votre besoin**

### Sous-titre

> Quatre canaux, chacun adapté à un type de demande. Choisissez celui qui correspond à votre situation pour obtenir la réponse la plus rapide.

### Grille 4 cards (`<SupportChannelCard />`)

**📧 Email général support**

> **support@althoce.com** *(ou via espoir@contact.althoce.com en attendant la configuration dédiée)*
>
> **Usage** : questions opérationnelles non urgentes, demandes d'évolution, questions techniques, réclamations.
>
> **Délai de réponse** : 4 heures ouvrées (Essentiel), 2 heures ouvrées (Standard), 1 heure ouvrée (Privilège).
>
> **Horaires** : du lundi au vendredi, 9 h – 18 h heure de Paris.

**🎫 Système de ticketing (à venir)**

> **espace-client.althoce.com** *(en cours de déploiement, prévu Q3 2026)*
>
> **Usage** : suivi des incidents et des demandes, historique des tickets, statut en temps réel des agents IA en production.
>
> **Statut actuel** : en attendant l'espace client dédié, ouvrez un ticket par email à support@althoce.com avec « [Ticket] » en objet pour faciliter le suivi.

**🚨 Hotline urgence opérationnelle**

> **[À COMPLÉTER : numéro hotline urgence si applicable]**
> Email urgence : **urgence@althoce.com** *(ou espoir@contact.althoce.com en attendant)*
>
> **Usage** : agent IA en panne en production avec impact business immédiat, fuite de données suspectée, faille de sécurité, incident bloquant.
>
> **Disponibilité** : 24/7 sur niveau Privilège. Heures ouvrées sur Essentiel et Standard, retour heures ouvrées suivantes hors plage.

**👤 Votre référent dédié**

> **Disponible à partir du niveau Standard**
>
> **Usage** : sujet stratégique, évolution majeure du périmètre, point de gouvernance, retour d'expérience, demande de nouveaux agents.
>
> **Modalités** : point trimestriel programmé (Standard) ou mensuel (Privilège). Email et coordonnées directes communiquées à la signature du contrat.

---

## 6. Section 3 — Niveaux de service (SLA)

### H2

> **Niveaux de service contractuels**

### Sous-titre

> Le niveau de service auquel vous avez accès dépend de votre contrat de support, signé en complément de votre mission de cadrage ou de build initial. Trois niveaux sont disponibles, adaptés au criticité opérationnelle de vos agents IA.

### Tableau comparatif `<SLATable />`

| Caractéristique | **Essentiel** | **Standard** | **Privilège** |
|---|:---:|:---:|:---:|
| **Délai de réponse email** | 4 h ouvrées | 2 h ouvrées | 1 h ouvrée |
| **Délai de résolution incident bloquant** | Jour ouvré suivant | 8 h ouvrées | 4 h ouvrées |
| **Hotline urgence 24/7** | — | — | ✅ |
| **Référent dédié** | — | Point trimestriel | Point mensuel |
| **Monitoring proactif** | — | ✅ | ✅ |
| **Rapport mensuel d'usage** | — | ✅ | ✅ |
| **Garantie disponibilité agent** | — | 99 % | 99,5 % |
| **Évolutions mineures incluses** | — | 2 h / mois | 8 h / mois |
| **Formation équipes (rafraîchissement)** | À la demande | 1 session / an | 2 sessions / an |
| **Audit IA responsable trimestriel** | — | — | ✅ |

### Note sous le tableau

> Le niveau de service est précisé dans votre contrat. En cas de doute sur votre niveau, contactez votre référent ou écrivez à espoir@contact.althoce.com avec « Niveau de service » en objet. Le passage d'un niveau à un autre se fait par avenant simple sur demande.

---

## 7. Section 4 — Procédure d'escalade

### H2

> **Procédure d'escalade en cas de problème non résolu**

### Sous-titre

> Si une demande n'avance pas dans les délais contractuels, voici la procédure d'escalade officielle. Nous prenons cette procédure très au sérieux : c'est la garantie que vous ne restez jamais sans réponse.

### Liste numérotée 01→03 (`<EscalationSteps />`)

**01. Premier niveau — Équipe support**

> Toutes les demandes commencent par l'équipe support via email support@althoce.com ou via ticket. Notre engagement contractuel s'applique (délais SLA selon votre niveau). 95 % des demandes sont résolues à ce niveau sous SLA.

**02. Deuxième niveau — Référent dédié (Standard et Privilège)**

> Si votre demande n'avance pas sous SLA, ou si elle nécessite un arbitrage opérationnel, vous pouvez escalader directement vers votre référent dédié. Ses coordonnées vous sont communiquées à la signature du contrat. Réponse garantie sous 24 h ouvrées en cas d'escalade.

**03. Troisième niveau — Direction Althoce**

> En dernier recours, si la qualité de service ne respecte pas vos engagements contractuels, vous pouvez écrire directement à **direction@althoce.com** *(ou à espoir@contact.althoce.com en attendant la configuration dédiée)* avec « [ESCALADE DIRECTION] » en objet. Vincent [À COMPLÉTER : nom complet], fondateur d'Althoce Conseil, traite personnellement ces escalades sous 48 h ouvrées maximum. Nous prenons ces situations très au sérieux : elles sont rares mais elles permettent d'ajuster nos process.

---

## 8. Section 5 — Contact urgence opérationnelle

### Layout

Bloc distinct, fond contrasté (accent rouge ou orange sobre, pas marketing rouge alarmiste). Doit être visuellement repérable au scroll.

### H2

> **⚠️ Urgence opérationnelle ?**

### Contenu

> Un agent IA en panne en production qui bloque votre activité, une suspicion de fuite de données, une faille de sécurité ou tout incident bloquant nécessitant une intervention immédiate ?

### Bloc contact urgence

**📞 Hotline urgence** : [À COMPLÉTER : numéro hotline urgence si applicable, sinon retirer cette ligne]

**📧 Email urgence** : **urgence@althoce.com** *(ou espoir@contact.althoce.com en attendant la configuration dédiée)*

**Modalités selon votre niveau** :

> - **Niveau Privilège** : prise en charge 24/7, réponse sous 1 heure (hors heures ouvrées : réponse sous 4 heures, équipe d'astreinte).
> - **Niveau Standard** : prise en charge en heures ouvrées, réponse sous 2 heures.
> - **Niveau Essentiel** : prise en charge en heures ouvrées, réponse sous 4 heures.

### Note de gravité

> **Précisez « URGENCE » en objet** et **décrivez l'impact business** (combien de personnes bloquées, depuis quand, quel est le risque). Cela nous permet de prioriser correctement et d'engager les bonnes ressources immédiatement.

---

## 9. Section 6 — FAQ support

### H2

> **Questions fréquentes sur le support Althoce**

### Liste accordéon `<FAQItem />`

**Q1. Mon agent IA a un comportement inattendu. Que faire avant de contacter le support ?**

Trois vérifications rapides avant d'écrire au support, qui résolvent 60 % des cas. **Vérification 1** : vérifiez que les outils intégrés à l'agent (votre boîte mail, votre CRM, votre comptabilité, etc.) fonctionnent normalement de leur côté. Un incident chez un de vos outils peut faire dérailler l'agent. **Vérification 2** : consultez le dashboard de monitoring de l'agent (si vous y avez accès en niveau Standard ou Privilège) pour voir s'il y a une alerte ou un log d'erreur. **Vérification 3** : si l'agent a été modifié récemment (nouveau prompt, nouveau workflow, nouvelle intégration), revenez à la version précédente pour tester. Si ces 3 vérifications n'aboutissent pas, ouvrez un ticket avec les détails (date / heure du problème, message d'erreur si visible, captures d'écran si possible).

**Q2. Combien coûte le contrat de support ?**

Le contrat de support est tarifé en fonction du niveau souscrit (Essentiel / Standard / Privilège) et du périmètre couvert (nombre d'agents et complexité). Le tarif est précisé dans votre contrat signé. Pour les évolutions de niveau, demandez un avenant à votre référent ou écrivez à espoir@contact.althoce.com. Le passage entre niveaux est simple et sans rupture de service.

**Q3. Le support inclut-il les évolutions et nouveaux développements ?**

Le niveau **Essentiel** ne couvre que les incidents et questions opérationnelles. Le niveau **Standard** inclut 2 heures de petites évolutions par mois (ajustement de prompt, ajout de critère mineur, modification de seuil). Le niveau **Privilège** inclut 8 heures de petites évolutions par mois. Pour les **évolutions majeures** (nouveau workflow, nouvelle intégration, refonte d'agent, nouveau cas d'usage), il s'agit d'un nouveau projet qui fait l'objet d'un devis spécifique. Demandez à votre référent ou écrivez à espoir@contact.althoce.com.

**Q4. Comment se passe la résolution d'un incident bloquant ?**

Étape 1 : vous nous signalez l'incident via le canal approprié (urgence@althoce.com pour bloquant, support@althoce.com sinon). Étape 2 : nous accusons réception sous le délai contractuel et nous engageons un diagnostic immédiat. Étape 3 : nous vous tenons informé du statut au moins toutes les 2 heures pendant l'incident bloquant. Étape 4 : une fois le service rétabli, vous recevez un rapport d'incident sous 5 jours ouvrés qui détaille la cause racine, l'action corrective, et les mesures de prévention pour éviter la récurrence. Pour les niveaux Standard et Privilège, ce rapport d'incident est systématique. Pour Essentiel, il est fourni sur demande.

**Q5. Comment résilier ou modifier mon contrat de support ?**

Le contrat de support est annuel par défaut, avec tacite reconduction. Pour le résilier, écrivez à espoir@contact.althoce.com avec « Résiliation contrat support » en objet, au moins 60 jours avant la date d'échéance annuelle. Pour modifier le niveau (passer de Standard à Privilège ou inversement), un simple avenant est signé, applicable au mois suivant. La modification du périmètre couvert (ajout d'un agent récent) se fait également par avenant simple.

---

## 10. Section 7 — Documentation client

### Layout

Bloc final discret avec lien sortant vers l'espace client.

### H2

> **Documentation et ressources client**

### Contenu

> Vous trouverez la documentation complète de vos agents IA en production, vos rapports mensuels d'usage, vos logs d'activité et votre historique de tickets dans votre **espace client dédié** (à venir Q3 2026).
>
> **En attendant l'espace client**, la documentation complète de chaque mission est livrée au format PDF et / ou Notion à la mise en production initiale (cadrage, architecture, prompts, workflows, accès, monitoring). Pour récupérer une copie ou une mise à jour, écrivez à espoir@contact.althoce.com.

### Bloc CTA

> **Besoin d'aide immédiate ?** [Ouvrir un ticket de support →](mailto:support@althoce.com)

---

## 11. JSON-LD complet

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://althoce.com/service-client/#webpage",
      "name": "Service client Althoce — Support pour clients sous contrat",
      "url": "https://althoce.com/service-client/",
      "mainEntity": { "@id": "https://althoce.com/#organization" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Service client", "item": "https://althoce.com/service-client/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Mon agent IA a un comportement inattendu, que faire ?", "acceptedAnswer": { "@type": "Answer", "text": "Trois vérifications : outils intégrés, dashboard de monitoring, retour à version précédente. Sinon ouvrir un ticket." } },
        { "@type": "Question", "name": "Le support inclut-il les évolutions ?", "acceptedAnswer": { "@type": "Answer", "text": "Standard : 2 h/mois petites évolutions. Privilège : 8 h/mois. Évolutions majeures sur devis spécifique." } },
        { "@type": "Question", "name": "Comment résilier le contrat de support ?", "acceptedAnswer": { "@type": "Answer", "text": "Email à espoir@contact.althoce.com avec « Résiliation contrat support » au moins 60 jours avant l'échéance annuelle." } }
      ]
    }
  ]
}
```

---

## 12. Maillage interne (récap éditorial)

Liens **placés directement dans la prose** :

- Hero bloc info : lien vers `/contact/` (pour les prospects qui arrivent par erreur)
- Sec.10 documentation : lien sortant vers espace client (à venir)

### Liens entrants attendus

- Footer (lien permanent vers `/service-client/`)
- Emails d'onboarding client (lien systématique)
- Documentation de prise en main remise post-déploiement
- Pages signature de mission / convention de support
- CGV (renvoi pour modalités de support)

---

## 13. Notes Claude Design

### Composants existants à réutiliser

`<FAQItem />` (sec.6).

### Nouveaux composants à concevoir

- `<SupportChannelCard />` : 4 cards canaux de support (sec.2). Pattern dense : icône emoji, nom du canal, usage recommandé, délai, horaires. Couleur de bordure distinctive selon urgence (gris pour email, bleu pour ticket, orange pour urgence, violet pour référent).
- `<SLATable />` : tableau comparatif 3 niveaux SLA (sec.3). Header 3 colonnes (Essentiel / Standard / Privilège), 10 lignes de caractéristiques. Mobile : transformation en cards verticales empilées.
- `<EscalationSteps />` : liste numérotée 01→03 procédure escalade (sec.4). Pattern visuel proche de `<NumberedListVertical />` existant.
- `<EmergencyContactBlock />` : bloc contact urgence (sec.5). Fond contrasté (accent orange ou rouge sobre), pictogramme alerte, coordonnées en avant.

### Règle d'intégration des liens internes (CRITIQUE)

Tous les liens listés en sec.12 doivent être **câblés à l'endroit exact où ils apparaissent dans la prose**. Sec.10 (documentation client) doit pointer vers l'espace client une fois déployé.

### Règle d'intégration au site (CRITIQUE)

1. **Menu principal** : pas d'entrée principale (page utilitaire pour clients). Lien depuis le footer suffisant.
2. **Breadcrumb** : `Accueil → Service client`.
3. **Footer** : entrée « Service client » dans la colonne « Support ».
4. **Sitemap.xml** : `<priority>0.4</priority>` (page utilitaire, pas SEO). Inclusion `<changefreq>monthly</changefreq>`.
5. **Indexation** : `noindex, follow` (page non destinée au trafic SEO public).
6. **Email d'onboarding client** post-signature : doit inclure systématiquement le lien vers `/service-client/` avec récap du niveau SLA souscrit.

### Règle créativité visuelle

Patterns par section :
- Hero : sobre, centré, factuel, pas d'illustration
- Sec.2 : 4 cards canaux
- Sec.3 : tableau comparatif SLA
- Sec.4 : 3 étapes numérotées verticales
- Sec.5 : bloc urgence contrasté
- Sec.6 : accordéon FAQ
- Sec.7 : bloc lien documentation

Page **dense, utilitaire, claire**. Aucun argument commercial. Aucun chiffre marketing canonique. C'est une page de service, pas une page de vente.

### Tons / langage visuel

Cohérent avec le reste du site mais **plus sobre** : palette identique mais moins d'accent azure spectaculaire, plus de neutres. Le bloc urgence (sec.5) utilise un accent orange ou rouge sobre — la seule entorse au pattern azure standard du site.

---

## 14. Informations à valider avant publication

1. ✅ **Distinction `/service-client/` vs `/agent-ia/service-client/`** : claire — validé.
2. ✅ **Robots noindex** : validé.
3. **Email support dédié** : configurer `support@althoce.com` ? En attendant, utiliser `espoir@contact.althoce.com` avec sujet « [Support] ».
4. **Email urgence dédié** : configurer `urgence@althoce.com` ? En attendant, `espoir@contact.althoce.com` avec sujet « [URGENCE] ».
5. **Email direction escalade** : configurer `direction@althoce.com` ? En attendant, `espoir@contact.althoce.com` avec sujet « [ESCALADE DIRECTION] ».
6. **Hotline téléphonique urgence** : confirmer existence et numéro pour Privilège 24/7. Si non disponible, retirer mention téléphonique.
7. **Espace client** : confirmer roadmap Q3 2026 ou différer la mention.
8. **Niveaux SLA proposés** : confirmer la terminologie (Essentiel / Standard / Privilège) ou ajuster (ex. Basic / Pro / Enterprise).
9. **Détails du tableau SLA** : valider chaque ligne (délais, garantie disponibilité, évolutions incluses, formation).
10. **Modalité de résiliation** : confirmer 60 jours préavis avant échéance annuelle.
11. **Rapport d'incident sous 5 jours** : confirmer disponibilité opérationnelle.
12. **Tacite reconduction** : confirmer le principe et la durée annuelle.

---

*Document de référence rédigé le 2026-05-16. Page de support officielle pour clients Althoce sous contrat. Robots noindex. Distincte de la page produit `/agent-ia/service-client/`.*
