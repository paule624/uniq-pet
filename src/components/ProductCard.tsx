"use client";

import Link from "next/link";
import Image from "next/image";
import { Star, ShoppingBag } from "lucide-react";
import type { Product } from "@/lib/products";
import { useCart } from "@/lib/cart-context";

const accentBg: Record<Product["accent"], string> = {
  blue: "var(--brand-blue)",
  green: "var(--treat)",
  orange: "var(--pate)",
  pink: "var(--other)",
};

const accentSoft: Record<Product["accent"], string> = {
  blue: "var(--brand-sky)",
  green: "var(--treat-light)",
  orange: "var(--pate-light)",
  pink: "var(--other-light)",
};

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const formatPrice = (n: number) => n.toFixed(2).replace(".", ",") + " €";

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
      <Link
        href={`/produit/${product.id}`}
        className="relative flex aspect-square items-center justify-center overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${accentSoft[product.accent]}, #fff)` }}
        aria-label={product.name}
      >
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
            className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div
            className="grid h-3/5 w-1/2 place-items-center rounded-2xl text-center font-display text-2xl shadow-md"
            style={{ backgroundColor: accentBg[product.accent], color: product.accent === "blue" ? "var(--brand-navy)" : "#fff" }}
          >
            UNIQ
          </div>
        )}
        {product.badge && (
          <span
            className="absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm"
            style={{ backgroundColor: "var(--treat-dark)" }}
          >
            {product.badge}
          </span>
        )}
        {product.outOfStock && (
          <span className="absolute right-3 top-3 rounded-full bg-[var(--brand-navy)] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm">
            En rupture
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-5" style={{ backgroundColor: accentBg[product.accent] }}>
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <Link href={`/produit/${product.id}`} className="block hover:underline">
              <h3 className="font-display text-lg leading-tight text-[var(--brand-navy)] line-clamp-2">{product.name}</h3>
            </Link>
            <p className="mt-1 text-xs font-semibold text-[var(--brand-navy)]/70">{product.variant}</p>
          </div>
          <div className="flex shrink-0 items-center gap-0.5 rounded-full bg-white/70 px-2 py-1 text-xs font-bold text-[var(--brand-navy)]">
            <Star size={12} fill="currentColor" />
            {product.rating.toFixed(1)}
          </div>
        </div>
        <div className="mt-4 flex items-end justify-between gap-2">
          <div className="min-w-0 text-[var(--brand-navy)]">
            <div className="text-[11px] font-semibold opacity-75">
              {product.priceFrom ? "À partir de" : "Prix TTC"}
            </div>
            <div className="text-lg font-extrabold leading-tight">{formatPrice(product.price)}</div>
            {product.priceHT && (
              <div className="text-[10px] font-semibold opacity-75">soit {formatPrice(product.priceHT)} HT</div>
            )}
            {product.pricePerKg && (
              <div className="text-[10px] font-semibold opacity-75">{formatPrice(product.pricePerKg)} / kg</div>
            )}
          </div>
          <button
            onClick={() => add(product.id, 1)}
            disabled={product.outOfStock}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[var(--brand-navy)] px-3 py-2 text-xs font-bold text-white hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            aria-label={`Ajouter ${product.name} au panier`}
          >
            <ShoppingBag size={14} /> {product.outOfStock ? "Indispo." : "Ajouter"}
          </button>
        </div>
      </div>
    </article>
  );
}
