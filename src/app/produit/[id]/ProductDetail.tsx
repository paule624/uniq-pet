"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, Minus, Plus, ShoppingBag, Star, Check, Truck, Leaf, ShieldCheck } from "lucide-react";
import { Layout } from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import { getProducts, type Product } from "@/lib/products";
import { useCart } from "@/lib/cart-context";

const formatPrice = (n: number) => n.toFixed(2).replace(".", ",") + " €";

const accentBgMap: Record<Product["accent"], string> = {
  blue: "var(--brand-sky)",
  green: "var(--treat-light)",
  orange: "var(--pate-light)",
  pink: "var(--other-light)",
};

export function ProductDetail({ product }: { product: Product }) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const related = getProducts({ category: product.category, animal: product.for[0] })
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const handleAdd = () => {
    add(product.id, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-4 pt-8 md:px-6">
        <Link href="/croquettes" className="inline-flex items-center gap-1 text-sm font-semibold text-muted-foreground hover:text-foreground">
          <ChevronLeft size={16} /> Retour à la boutique
        </Link>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-10 md:grid-cols-2 md:px-6 md:py-16">
        <div
          className="relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl"
          style={{ background: `linear-gradient(135deg, ${accentBgMap[product.accent]}, #fff)` }}
        >
          {product.image ? (
            <Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain p-8" />
          ) : (
            <div className="font-display text-5xl text-[var(--brand-navy)]">UNIQ &amp; CO</div>
          )}
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-[var(--brand-sky)] px-3 py-1 text-xs font-bold uppercase text-[var(--brand-navy)]">
              {product.category}
            </span>
            {product.badge && (
              <span className="rounded-full bg-[var(--treat-dark)] px-3 py-1 text-xs font-bold uppercase text-white">
                {product.badge}
              </span>
            )}
            {product.outOfStock && (
              <span className="rounded-full bg-[var(--brand-navy)] px-3 py-1 text-xs font-bold uppercase text-white">
                En rupture
              </span>
            )}
          </div>

          <h1 className="mt-4 text-3xl md:text-5xl">{product.name}</h1>
          <p className="mt-2 text-base font-semibold text-muted-foreground">{product.variant}</p>

          <div className="mt-3 flex items-center gap-2 text-[var(--pate)]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} fill={i < Math.round(product.rating) ? "currentColor" : "none"} />
            ))}
            <span className="text-sm font-bold text-foreground">{product.rating.toFixed(1)}/5</span>
          </div>

          <div className="mt-6 rounded-2xl border border-border bg-card p-5">
            <div className="text-xs font-semibold uppercase text-muted-foreground">
              {product.priceFrom ? "À partir de" : "Prix TTC"}
            </div>
            <div className="mt-1 text-4xl font-extrabold text-[var(--brand-navy)]">{formatPrice(product.price)}</div>
            <div className="mt-1 flex flex-wrap gap-x-4 text-sm font-semibold text-muted-foreground">
              {product.priceHT && <span>soit {formatPrice(product.priceHT)} HT</span>}
              {product.pricePerKg && <span>{formatPrice(product.pricePerKg)} / kg</span>}
            </div>
          </div>

          <p className="mt-6 text-sm leading-relaxed text-foreground/80">
            Recette premium UNIQ &amp; CO, formulée avec des ingrédients soigneusement sélectionnés pour offrir à votre
            compagnon une alimentation saine, gourmande et adaptée à ses besoins. Sans colorants ni arômes artificiels.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="inline-flex items-center rounded-full border border-border bg-card">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="grid h-11 w-11 place-items-center rounded-l-full hover:bg-muted" aria-label="Diminuer">
                <Minus size={16} />
              </button>
              <span className="w-10 text-center text-sm font-bold">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} className="grid h-11 w-11 place-items-center rounded-r-full hover:bg-muted" aria-label="Augmenter">
                <Plus size={16} />
              </button>
            </div>
            <button
              onClick={handleAdd}
              disabled={product.outOfStock}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[var(--brand-navy)] px-6 py-3 text-sm font-bold text-white hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {added ? (
                <>
                  <Check size={16} /> Ajouté au panier
                </>
              ) : (
                <>
                  <ShoppingBag size={16} /> Ajouter au panier
                </>
              )}
            </button>
          </div>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <Perk icon={<Leaf size={16} />} label="Sans céréales" />
            <Perk icon={<ShieldCheck size={16} />} label="Recette premium" />
            <Perk icon={<Truck size={16} />} label="Expédié en 24h" />
          </ul>
        </div>
      </section>

      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <h2 className="mb-8 text-3xl md:text-4xl">Vous aimerez aussi</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </Layout>
  );
}

function Perk({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <li className="flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-xs font-semibold">
      <span className="text-[var(--brand-blue)]">{icon}</span>
      {label}
    </li>
  );
}
