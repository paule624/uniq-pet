# UNIQ & CO

Site vitrine + catalogue de la marque française d'alimentation premium pour animaux **UNIQ & CO** (propriété d'ANI-FEED depuis sept. 2024). Le site présente le catalogue et permet de remplir un panier local — il n'y a ni paiement ni backend en v1.

## Language

**Produit**:
Un article vendable du catalogue : croquettes, pâtée, friandise, ou article « autres » (hygiène/soins/jouets). Possède un nom, une marque (UNIQ Dog, Weego, UNIQ), une note, un prix et une catégorie.
_Avoid_: Article, item, référence

**Gamme**:
Catégorie de premier niveau du catalogue : Croquettes, Pâtées, Friandises, Autres. Sert de structure de navigation et de routes (`/croquettes`, `/patees`, `/friandises`, `/autres`).
_Avoid_: Catégorie, collection, rayon

**Sous-gamme**:
Subdivision de la gamme « Autres » : Hygiène, Soins, Jouets. Filtrée via `?sub=`.
_Avoid_: Sous-catégorie

**Animal cible**:
L'espèce visée par le site, sélectionnable via le toggle Chat / Chien de la navigation. En l'état, le catalogue est exclusivement Chien (le mode Chat existe en UI mais sans produits).
_Avoid_: Espèce, type d'animal

**Panier**:
Liste locale (côté client, persistée en localStorage) des produits que le visiteur a ajoutés. N'aboutit à aucune commande ni paiement en v1.
_Avoid_: Cart (en code on garde `cart`), commande

**Partenaire**:
Éleveur, éducateur ou service indépendant du réseau UNIQ & CO, présenté sur `/nos-partenaires`. À distinguer de l'avis client.
_Avoid_: Revendeur, distributeur

**Avis**:
Témoignage d'un client final affiché sur `/nos-avis` (auteur, date, mention « Achat vérifié »). À distinguer du témoignage partenaire affiché sur la home.
_Avoid_: Review, témoignage (réservé aux partenaires/pros)

**Prix TTC / À partir de**:
Deux formats d'affichage du prix. « Prix TTC » = prix fixe unique (avec parfois le HT et le €/kg). « À partir de » = produit à variantes (plusieurs conditionnements), on affiche le plus bas.
_Avoid_: Tarif (réservé au libellé de tri « Tarif croissant/décroissant »)

**Disponibilité**:
État de stock d'un produit : disponible (« Ajouter ») ou en rupture (« En rupture » / bouton « Indispo. »).
_Avoid_: Stock status
