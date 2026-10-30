# Positionnement et catalogue Althoce — octobre 2026

Référence éditoriale pour l’évolution du site, préparée le 18 octobre 2026.
Elle remplace les anciens briefs lorsqu’ils décrivent les formations collectives
IA Fondamentaux et IA Avancée ou les conditions des nouvelles offres.

## Positionnement validé

**Althoce · Cabinet de conseil & intégration IA**

**L’IA au service de votre expertise.**

Althoce accompagne les professions réglementées et les entreprises ayant des
exigences comparables de confidentialité, de sécurité et de maîtrise des usages.
Les trois axes du discours sont la formation des équipes, l’encadrement des
usages et l’automatisation des processus métier avec des solutions sur mesure.

Le positionnement s’intègre dans les pages et composants existants. L’identité
bleue et blanche, l’organisation générale des sections et les URL historiques
sont conservés. Les cas clients conservent leurs résultats propres validés.

À la demande du client, le surtitre « Althoce · Cabinet de conseil & intégration
IA » est retiré de l’accueil. La qualité de cabinet est exprimée dans le paragraphe
de présentation. La photo de groupe `equipe-cabinet-v2.webp` n’est plus utilisée :
la section cabinet de l’accueil devient un bloc éditorial en deux colonnes et la
page À propos reprend une scène de travail existante.

Ne pas transformer les exigences réglementaires en garantie générale de
conformité. Décrire concrètement le cadrage des données, des accès, des contrôles
humains et des responsabilités, selon le périmètre de la mission.

## Quatre parcours distincts

- **Formation IA métier**, `/services/formation-ia/ia-fondamentaux/` : programme
  collectif de 7 heures adapté à la profession, suivi à J+30.
- **Formation IA métier personnalisée**, `/services/formation-ia/ia-avancee/` :
  7 heures, entretien préparatoire distinct, deux à trois cas de l’organisation,
  suivi à J+30. L’URL historique ne signifie plus un prérequis de niveau avancé.
- **Formation IA Dirigeant & Associés**, `/services/formation-ia/coaching-dirigeant/` :
  programme Drive du 29 octobre 2026, intégré à la demande du client le 30 octobre.
  Il remplace les quatre séances de coaching sur la même URL : 7 heures sur une
  journée pour 1 à 5 décideurs, entretien de 45 minutes distinct des 7 heures,
  six modules, assistant pédagogique, trois opportunités priorisées, checklist de
  gouvernance, feuille de route à 90 jours et point à J+30.
- **Coaching IA Solo**, `/services/formation-ia/coaching-independant/` : nouveau
  parcours indépendant, distinct de la Formation IA Dirigeant & Associés. Une journée
  individuelle de 4h30 en visioconférence, deux cas préparés, un Skill ou assistant,
  un prototype simple testé ou simulé, un plan d’action et un suivi à J+15.

Les deux formations métier incluent 1 à 10 participants ; le maximum est 12 avec
supplément. La Formation IA Dirigeant & Associés est limitée à 5 participants. Les réalisations de formation sont pédagogiques. Une intégration en
production ou un agent complexe relève d’une mission séparée. Utiliser des données
fictives, anonymisées ou autorisées. Ne pas publier les tarifs ni l’identité de
l’organisme de portage dans les pages commerciales. Le financement est conditionnel.

## Articulation des services

- L’atelier Priorités IA identifie trois opportunités et un plan d’action ; il ne
  remplace pas un diagnostic technique complet et n’impose aucune suite.
- Le diagnostic organisationnel traite les usages, les outils, la maturité et
  la gouvernance. Sa déduction d’un projet ultérieur n’est pas automatique.
- Le diagnostic technique prépare le périmètre, les accès, les données,
  l’architecture, les prérequis et les critères de recette. Son montant HT peut
  être déduit du développement Althoce correspondant, signé dans les 90 jours,
  à périmètre comparable et selon les conditions du devis.
- L’intégration comprend cadrage, réalisation, tests, documentation et transfert.
  Les corrections initiales sur le périmètre convenu courent sur 30 jours,
  avec un point à J+30. Le pilotage et la maintenance durable sont distincts.
- Une formation peut être achetée directement sans audit préalable obligatoire.

## Sources fournies par le client

- [Catalogue et règles CRM](https://docs.google.com/document/d/15WY9KyGooa2XqSjKSFKBKEIqdTbbY5d_xMMgb6C5n6I/edit)
- [Offre formation](https://docs.google.com/document/d/1QJhxhezk0qMWHkH0lHSY-CuHBRLKQmCyj3CdTT-Qphc/edit)
- [Offre intégration](https://docs.google.com/document/d/1Kr1Pd9FK4FrhpUQkdu41Jos8Tn97q9SteqJnRA7qtT8/edit)
- [Offre diagnostic](https://docs.google.com/document/d/1cFuXG5wxKzq4GkFE2vxxTOGC0nTlw4rRI_d5zs_hc_o/edit)
- [Programme métier](https://docs.google.com/document/d/12hDgW3QNml1jnXL2m9Qb0MERk51bTKzjYTDWdGZgC8U/edit)
- [Programme personnalisé](https://docs.google.com/document/d/1DIel2Etq3hxY_PHs1tO7QDEXE1q1mBZ-lgSqN_pzC6k/edit)
- [Programme Solo](https://docs.google.com/document/d/1qdSAlzforpJH8MAHJ22vSIL4r2rPzg4Rmxtu8JZ3_Ww/edit)
- [Programme Dirigeant & Associés](https://docs.google.com/document/d/1F9gn6yn-jm3HCriTzGf8ndh3i_34T57lslhSGiIx-NM/edit)
- [Fiche commerciale Dirigeant & Associés](https://docs.google.com/document/d/1pqE3D1495dICDsi7RdCg33_Nhi_bVRGCSUDC0g3R4oo/edit)

Les documents de programme contiennent encore des champs administratifs à
compléter. Aucun champ provisoire ni statut de certification non confirmé n’est
repris sur le site. Les corrections explicites du client sur les quatre parcours
priment sur le rapprochement initial entre anciennes et nouvelles offres.

## Points d’entrée dans le code

- `lib/brand-content.ts` : identité, promesse, cible et descriptions communes.
- `lib/formation-catalogue.ts` : quatre cartes partagées entre hub et pages locales.
- `lib/formations.ts`, `lib/formation-faq.ts` : programmes collectifs et schémas.
- `lib/coaching-solo.ts` : nouveau programme individuel.
- `lib/coaching-dirigeant.ts` : nouveau programme Dirigeant & Associés ; le nom
  du fichier et l’URL historique sont conservés pour préserver les liens.
- `lib/home-content.ts`, `lib/services-content.ts` : articulation des services.
- `components/cities/CityPage.tsx` : métadonnées des 19 pages conseil locales,
  offres partagées avec l’accueil et le hub services.
- `lib/formation-cities.ts` : descriptions et FAQ des 19 formations locales.
  Leurs cartes et listes structurées utilisent le même catalogue de quatre parcours.

Cette mise à jour locale ne constitue pas un déploiement.
