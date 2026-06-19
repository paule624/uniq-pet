# Contenu source — preview--uniq-pet-palace.lovable.app (scrapé le 2026-06-19)

Référence brute extraite du preview Lovable, pour reconstruction fidèle en Next.js.

## Design system (depuis styles.css)

- **Polices** : `Londrina Solid` (titres / `--font-display`), `Nunito` (corps / défaut)
- **Couleurs de marque**
  - navy `#1e2633` → `--primary`, `--foreground`
  - bleu `#87c8e6` → `--accent`, `--ring`
  - ciel `#d7f3ff` → `--secondary`
  - crème `#f7fbfc` → `--background`
  - palette pâtée : dark `#632409`, base `#f78e11`, light `#ffcdc0`
  - muted `#eef5f8`, muted-foreground `#5a6573`, border `#e1ebef`
- Convention 100% compatible shadcn/ui (`--primary`, `--secondary`, `--accent`, `--muted`, `--border`, `--ring`…).

## Navigation

Logo **UNIQ & CO** · Toggle **Chat / Chien** · **Nos croquettes** · **Nos pâtées** · **Nos friandises** · **Autres** (Hygiène / Soins / Jouets) · **À propos** (Notre histoire / Nos partenaires / Nos avis) · **Contact** · Panier.

## Routes

`/home` `/croquettes` `/patees` `/friandises` `/autres?sub=hygiene|soins|jouets` `/notre-histoire` `/nos-partenaires` `/nos-avis` `/contact` `/panier` `/produit/[slug]`

## Home

- Hero : « Leur bien-être commence dans leur gamelle. » + sous-titre sur les recettes sans céréales / ingrédients sélectionnés. CTA : *Nos produits*, *Notre histoire*. Badges : *Sans céréales*, *100% naturel*. Image hero `hero-bag.png`.
- Section **Nos produits phares** : 6 croquettes mises en avant (voir catalogue).
- Section **Pourquoi UNIQ & CO ?** : Sans céréales · Ingrédients sélectionnés · Bien-être animal · Qualité premium · Transparence totale · Livraison rapide (24h, France).
- Section **Recommandé par des pros** : Laurence (partenaire), Lauriane (partenaire), Christelle (éducatrice canine).
- Section **FAQ** : sans céréales ? / choisir les croquettes ? / délais livraison ? / retour produit ? / animaux sensibles ?

## Catalogue — Croquettes (18 produits)

Champs : nom · sous-titre/recette · note · prix (TTC fixe ou « À partir de ») · €/kg · badge éventuel (Allégées en céréales / En rupture).

1. UNIQ Dog – sans céréales adulte grande race — Dinde, patate douce, canneberge — 4.5 — TTC 90,00 € (75,00 € HT) — 7,50 €/kg
2. UNIQ Dog – sans céréales chiot — Saumon, aiglefin, merlan bleu, patate douce & asperge — 4.8 — dès 61,50 € — 8,42 €/kg
3. UNIQ Dog – sans céréales chien adulte Canard — 4.6 — dès 57,50 € — 7,92 €/kg
4. UNIQ Dog – sans céréales chien adulte Saumon & truite — 4.9 — dès 55,00 € — 7,54 €/kg
5. UNIQ Dog – sans céréales chien adulte Bœuf Angus — 4.7 — dès 56,50 € — 7,83 €/kg
6. UNIQ Dog – sans céréales chien adulte Poulet — 4.5 — dès 52,00 € — 7,38 €/kg
7. Weego – chiot au poulet avec grenade [Allégées en céréales] — Chiot — 4.8 — dès 26,50 € — 5,08 €/kg
8. UNIQ Dog – sans céréales chien adulte petite taille Poulet — 4.6 — dès 25,00 € — 12,50 €/kg
9. UNIQ Dog – sans céréales chiot — Poulet, dinde & saumon — 4.9 — dès 59,50 € — 8,08 €/kg
10. Weego – sans céréales chien adulte à l'agneau — Chien adulte — 4.7 — TTC 71,00 € (59,17 € HT) — 7,10 €/kg
11. Weego – sans céréales chien adulte au saumon [En rupture] — Chien adulte — 4.5 — TTC 74,00 € (61,67 € HT) — 7,40 €/kg
12. Weego – sans céréales chien sénior à la dinde — Chien sénior — 4.8 — TTC 71,00 € (59,17 € HT) — 7,10 €/kg
13. Weego – sans céréales chien adulte au poulet — Chien adulte — 4.6 — TTC 71,00 € (59,17 € HT) — 7,10 €/kg
14. Weego – chien adulte à l'agneau avec baies de goji [Allégées] — 4.9 — dès 26,50 € — 5,08 €/kg
15. Weego – chien sénior à la dinde avec myrtille [Allégées] — 4.7 — dès 26,50 € — 5,00 €/kg
16. Weego – chien adulte au poulet avec carotte [Allégées] — 4.5 — dès 26,50 € — 5,00 €/kg
17. UNIQ Dog – sans céréales chien sénior Dinde — 4.8 — dès 57,50 € — 7,96 €/kg
18. UNIQ Dog – sans céréales chien adulte Agneau — 4.6 — dès 56,50 € — 8,00 €/kg

## Catalogue — Pâtées (10 produits, toutes « Chien adulte », Prix TTC fixe)

Mijoté de Boeuf 3,50 € (4.0) · Effiloché de Poulet 4,00 € (4.7) · Terrine de Canard 4,50 € (4.4) · Saumon vapeur 5,00 € (4.1) · Agneau confit 5,50 € (4.8) · Dinde & Légumes 6,00 € (4.5) · Sanglier mijoté 6,50 € (4.2) · Lapin & Carotte 7,00 € (4.9) · Poisson blanc 7,50 € (4.6) · Volaille premium 8,00 € (4.3). Préfixe nom : « UNIQ ».

## Catalogue — Friandises (10 produits, « Chien adulte », Prix TTC fixe)

Os à mâcher Boeuf 4,50 € (4.0) · Sticks Saumon 5,00 € (4.7) · Biscuits Pomme 5,50 € (4.4) · Bouchées Poulet 6,00 € (4.1) · Lamelles Canard 6,50 € (4.8) · Cookies Banane 7,00 € (4.5) · Friandises Dentaires 7,50 € (4.2) · Mini-bones Dinde 8,00 € (4.9) · Sticks Agneau 8,50 € (4.6) · Cubes Tripes 9,00 € (4.3). Préfixe nom : « UNIQ ».

## Catalogue — Autres / Hygiène (4 produits)

Shampoing Doux 9,00 € (4.0) · Lingettes Naturelles 9,50 € (4.7) · Brosse Démêlante 10,00 € (4.4) · Spray Nettoyant 10,50 € (4.1). Sous-gammes Soins / Jouets présentes en UI (placeholder, peu/pas de produits).

## Page produit (`/produit/[slug]`)

Fil d'ariane « Retour à la boutique {gamme} » · titre + recette · note /5 · bloc prix (TTC / HT / €/kg) · description premium type · sélecteur quantité + *Ajouter au panier* · badges *Sans céréales / Recette premium / Expédié en 24h* · section **Vous aimerez aussi** (4 produits liés).

## Notre histoire

Marque française de croquettes premium (chiens & chats), gamme multi-budget (avec/sans céréales), vente en ligne + réseau de partenaires/vendeurs indépendants. Origine : appartenait à **Verlina** (produits naturels/écolo pour animaux). **Sept. 2024** : rachat par **ANI-FEED** → refonte stratégique et graphique. Valeurs : Bien-être animal · Produits sains · Éthique · Proximité · Transparence.

## Nos partenaires (3)

- **La Tournée des Moustaches** — 44, Sautron — livraison croquettes à domicile (20 km) + petsitting — latourneedesmoustaches.fr — @la_tournee_des_moustaches — 06.01.00.12.00
- **Wolf Dog** — 62, Wingles — garde, éducation canine, taxi animalier, terrain 300 m² — contact Christelle Jonaszek — @wolfdog_wingles — 06.10.20.30.40
- **Élevage Lait'Lixir — Pomsky** — 18, Neuvy-le-Barrois — élevage familial de Pomskies — @pomsky_laitlixir

## Nos avis (clients, « Achat vérifié »)

Camille L. (12 oct. 2025), Julien M. (03 oct.), Sophie B. (27 sept.), Marc D. (20 sept.), Léa R. (14 sept.), Antoine P. (08 sept.), Manon V. (02 sept.), Hugo F. (28 août)… témoignages courts sur qualité/digestion/livraison/service client.

## Contact

Formulaire : Prénom, Nom, Email, Téléphone, Sujet (Commande / Partenariat / Question produit / Autre), Message. Coordonnées : contact@uniqco.fr · +33 1 23 45 67 89 · Siège Nantes · Service client Lun–Ven 9h–18h.

## Footer

Tagline « Alimentation premium française pour chiens et chats. Le bien-être commence dans la gamelle. » · colonnes Boutique / Contact / À propos / Suivez-nous · © 2024 UNIQ & CO — ANI-FEED.
