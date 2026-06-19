const MOCKUP_CROQUETTES = "/assets/mockup-croquettes.jpg";

export type Category = "croquettes" | "patees" | "friandises" | "autres";
export type Subcategory = "hygiene" | "soins" | "jouets";

export interface Product {
  id: string;
  name: string;
  variant: string;
  price: number;
  priceHT?: number;
  pricePerKg?: number;
  priceFrom?: boolean;
  rating: number;
  popularity: number;
  createdAt: string;
  category: Category;
  subcategory?: Subcategory;
  for: Array<"chat" | "chien">;
  accent: "blue" | "green" | "orange" | "pink";
  image?: string;
  badge?: string;
  outOfStock?: boolean;
}

const variants = (forArr: Array<"chat" | "chien">) =>
  forArr.includes("chien") ? "Chien adulte" : "Chat adulte";

function make(
  category: Category,
  names: string[],
  accent: Product["accent"],
  basePrice: number,
  forArr: Array<"chat" | "chien">,
  sub?: Subcategory,
): Product[] {
  return names.map((name, i) => ({
    id: `${category}-${sub ?? "all"}-${i}-${forArr.join("")}`,
    name,
    variant: sub ? sub : variants(forArr),
    price: +(basePrice + i * 0.5 + (forArr[0] === "chat" ? -0.5 : 0)).toFixed(2),
    rating: 4 + Math.round((i * 37) % 10) / 10,
    popularity: 100 - i * 7,
    createdAt: new Date(2025, 11 - (i % 12), 1 + (i % 27)).toISOString(),
    category,
    subcategory: sub,
    for: forArr,
    accent,
  }));
}

// Nouvelle gamme croquettes chien — image mockup partagée
type DogKibble = {
  name: string;
  variant: string;
  price: number;
  priceHT?: number;
  pricePerKg: number;
  priceFrom?: boolean;
  badge?: string;
  outOfStock?: boolean;
};

const dogKibbles: DogKibble[] = [
  { name: "UNIQ Dog – Croquettes sans céréales adulte grande race", variant: "Dinde, patate douce, canneberge", price: 90.0, priceHT: 75.0, pricePerKg: 7.5 },
  { name: "UNIQ Dog – Croquettes sans céréales chiot", variant: "Saumon, aiglefin, merlan bleu, patate douce & asperge", price: 61.5, pricePerKg: 8.42, priceFrom: true },
  { name: "UNIQ Dog – Croquettes sans céréales chien adulte", variant: "Canard", price: 57.5, pricePerKg: 7.92, priceFrom: true },
  { name: "UNIQ Dog – Croquettes sans céréales chien adulte", variant: "Saumon & truite", price: 55.0, pricePerKg: 7.54, priceFrom: true },
  { name: "UNIQ Dog – Croquettes sans céréales chien adulte", variant: "Bœuf Angus", price: 56.5, pricePerKg: 7.83, priceFrom: true },
  { name: "UNIQ Dog – Croquettes sans céréales chien adulte", variant: "Poulet", price: 52.0, pricePerKg: 7.38, priceFrom: true },
  { name: "Weego – Croquettes pour chiot au poulet avec grenade", variant: "Chiot", price: 26.5, pricePerKg: 5.08, priceFrom: true, badge: "Allégées en céréales" },
  { name: "UNIQ Dog – Croquettes sans céréales chien adulte petite taille", variant: "Poulet", price: 25.0, pricePerKg: 12.5, priceFrom: true },
  { name: "UNIQ Dog – Croquettes sans céréales chiot", variant: "Poulet, dinde & saumon", price: 59.5, pricePerKg: 8.08, priceFrom: true },
  { name: "Weego – Croquettes sans céréales pour chien adulte à l'agneau", variant: "Chien adulte", price: 71.0, priceHT: 59.17, pricePerKg: 7.1 },
  { name: "Weego – Croquettes sans céréales pour chien adulte au saumon", variant: "Chien adulte", price: 74.0, priceHT: 61.67, pricePerKg: 7.4, outOfStock: true },
  { name: "Weego – Croquettes sans céréales pour chien sénior à la dinde", variant: "Chien sénior", price: 71.0, priceHT: 59.17, pricePerKg: 7.1 },
  { name: "Weego – Croquettes sans céréales pour chien adulte au poulet", variant: "Chien adulte", price: 71.0, priceHT: 59.17, pricePerKg: 7.1 },
  { name: "Weego – Croquettes pour chien adulte à l'agneau avec baies de goji", variant: "Chien adulte", price: 26.5, pricePerKg: 5.08, priceFrom: true, badge: "Allégées en céréales" },
  { name: "Weego – Croquettes pour chien sénior à la dinde avec myrtille", variant: "Chien sénior", price: 26.5, pricePerKg: 5.0, priceFrom: true, badge: "Allégées en céréales" },
  { name: "Weego – Croquettes pour chien adulte au poulet avec carotte", variant: "Chien adulte", price: 26.5, pricePerKg: 5.0, priceFrom: true, badge: "Allégées en céréales" },
  { name: "UNIQ Dog – Croquettes sans céréales chien sénior", variant: "Dinde", price: 57.5, pricePerKg: 7.96, priceFrom: true },
  { name: "UNIQ Dog – Croquettes sans céréales chien adulte", variant: "Agneau", price: 56.5, pricePerKg: 8.0, priceFrom: true },
];

const croquettesChien: Product[] = dogKibbles.map((k, i) => ({
  id: `croquettes-chien-${i}`,
  name: k.name,
  variant: k.variant,
  price: k.price,
  priceHT: k.priceHT,
  pricePerKg: k.pricePerKg,
  priceFrom: k.priceFrom,
  rating: 4.5 + ((i * 3) % 5) / 10,
  popularity: 100 - i * 3,
  createdAt: new Date(2025, 11 - (i % 12), 1 + (i % 27)).toISOString(),
  category: "croquettes",
  for: ["chien"],
  accent: "blue",
  image: MOCKUP_CROQUETTES,
  badge: k.badge,
  outOfStock: k.outOfStock,
}));

type CatKibble = {
  name: string;
  variant: string;
  price: number;
  priceHT?: number;
  pricePerKg?: number;
  priceFrom?: boolean;
  badge?: string;
};

const catKibbles: CatKibble[] = [
  { name: "UNIQ Cat – Croquettes hypoallergéniques chat stérilisé", variant: "Poisson blanc & caviar de hareng", price: 20.5, priceHT: 17.08 },
  { name: "UNIQ Cat – Croquettes hypoallergéniques chat actif", variant: "Dinde & poulet", price: 20.5, pricePerKg: 10.4, priceFrom: true },
  { name: "UNIQ Cat – Croquettes hypoallergéniques chat stérilisé", variant: "Saumon & poisson blanc", price: 20.5, pricePerKg: 11.4, priceFrom: true },
  { name: "UNIQ Cat – Croquettes hypoallergéniques chat stérilisé", variant: "Canard & sardines", price: 20.5, pricePerKg: 11.4, priceFrom: true },
  { name: "UNIQ Cat – Croquettes hypoallergéniques chat stérilisé", variant: "Poulet, thon & saumon", price: 20.5, pricePerKg: 11.4, priceFrom: true },
  { name: "Croquettes sans céréales pour chat stérilisé", variant: "Dinde & menthe", price: 25.0, pricePerKg: 7.57, priceFrom: true },
  { name: "Weego – Croquettes sans céréales pour chat stérilisé", variant: "Saumon & thé vert", price: 25.0, pricePerKg: 7.57, priceFrom: true },
  { name: "Weego – Croquettes sans céréales pour chat", variant: "Poulet frais & thon", price: 25.0, pricePerKg: 7.57, priceFrom: true },
  { name: "Weego – Croquettes sans céréales pour chaton", variant: "Poulet frais & œufs", price: 12.0, pricePerKg: 4.29, priceFrom: true, badge: "-43%" },
];

const croquettesChat: Product[] = catKibbles.map((k, i) => ({
  id: `croquettes-chat-${i}`,
  name: k.name,
  variant: k.variant,
  price: k.price,
  priceHT: k.priceHT,
  pricePerKg: k.pricePerKg,
  priceFrom: k.priceFrom,
  rating: 4.4 + ((i * 3) % 5) / 10,
  popularity: 100 - i * 4,
  createdAt: new Date(2025, 11 - (i % 12), 1 + (i % 27)).toISOString(),
  category: "croquettes",
  for: ["chat"],
  accent: "blue",
  image: MOCKUP_CROQUETTES,
  badge: k.badge,
}));

const pateesChien = [
  "Mijoté de Boeuf", "Effiloché de Poulet", "Terrine de Canard", "Saumon vapeur", "Agneau confit",
  "Dinde & Légumes", "Sanglier mijoté", "Lapin & Carotte", "Poisson blanc", "Volaille premium",
];
const pateesChat = [
  "Mousse de Saumon", "Émincé de Thon", "Terrine de Poulet", "Mijoté de Dinde", "Canard fondant",
  "Lapin tendre", "Sardine vapeur", "Truite & Crevette", "Boeuf doux", "Maquereau gourmet",
];

const friandisesChien = [
  "Os à mâcher Boeuf", "Sticks Saumon", "Biscuits Pomme", "Bouchées Poulet", "Lamelles Canard",
  "Cookies Banane", "Friandises Dentaires", "Mini-bones Dinde", "Sticks Agneau", "Cubes Tripes",
];
const friandisesChat = [
  "Bâtonnets Thon", "Crunchies Saumon", "Mini-bites Poulet", "Croquantes Canard", "Snacks Dinde",
  "Pralines Foie", "Bouchées Cabillaud", "Anti-boules Malt", "Sticks Lapin", "Crunchies Volaille",
];

const hygiene = ["Shampoing Doux", "Lingettes Naturelles", "Brosse Démêlante", "Spray Nettoyant"];
const soins = ["Crème Coussinets", "Vermifuge Naturel", "Anti-tiques Bio", "Complément Articulations"];
const jouets = ["Balle Rebondissante", "Corde à tirer", "Souris Catnip", "Plumeau Interactif"];

export const products: Product[] = [
  ...croquettesChien,
  ...croquettesChat,
  ...make("patees", pateesChien, "orange", 3.5, ["chien"]),
  ...make("patees", pateesChat, "orange", 3.0, ["chat"]),
  ...make("friandises", friandisesChien, "green", 4.5, ["chien"]),
  ...make("friandises", friandisesChat, "green", 4.0, ["chat"]),
  ...make("autres", hygiene, "pink", 9.0, ["chien", "chat"], "hygiene"),
  ...make("autres", soins, "pink", 12.0, ["chien", "chat"], "soins"),
  ...make("autres", jouets, "pink", 7.5, ["chien", "chat"], "jouets"),
];

export function getProducts(opts: { category?: Category; subcategory?: Subcategory; animal?: "chat" | "chien" | null }) {
  return products.filter((p) => {
    if (opts.category && p.category !== opts.category) return false;
    if (opts.subcategory && p.subcategory !== opts.subcategory) return false;
    if (opts.animal && !p.for.includes(opts.animal)) return false;
    return true;
  });
}

export type SortKey = "popularity" | "rating" | "recent" | "price-asc" | "price-desc";

export function sortProducts(list: Product[], key: SortKey): Product[] {
  const copy = [...list];
  switch (key) {
    case "rating": return copy.sort((a, b) => b.rating - a.rating);
    case "recent": return copy.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    case "price-asc": return copy.sort((a, b) => a.price - b.price);
    case "price-desc": return copy.sort((a, b) => b.price - a.price);
    default: return copy.sort((a, b) => b.popularity - a.popularity);
  }
}
