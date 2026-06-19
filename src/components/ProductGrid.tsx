"use client";

import { useMemo, useState } from "react";
import { sortProducts, type Product, type SortKey } from "@/lib/products";
import { ProductCard } from "./ProductCard";

const sortOptions: { key: SortKey; label: string }[] = [
  { key: "popularity", label: "Popularité" },
  { key: "rating", label: "Notes moyennes" },
  { key: "recent", label: "Plus récent" },
  { key: "price-asc", label: "Tarif croissant" },
  { key: "price-desc", label: "Tarif décroissant" },
];

export function ProductGrid({ products }: { products: Product[] }) {
  const [sort, setSort] = useState<SortKey>("popularity");
  const sorted = useMemo(() => sortProducts(products, sort), [products, sort]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm font-semibold text-muted-foreground">{products.length} produits</p>
        <label className="flex items-center gap-2 text-sm font-semibold">
          <span className="text-muted-foreground">Trier par</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="rounded-full border border-border bg-card px-4 py-2 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)]"
          >
            {sortOptions.map((o) => (
              <option key={o.key} value={o.key}>
                {o.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sorted.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
