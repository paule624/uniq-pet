"use client";

import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, ShoppingBag, Trash2, ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { useCart } from "@/lib/cart-context";

const formatPrice = (n: number) => n.toFixed(2).replace(".", ",") + " €";

export default function CartPage() {
  const { detailed, setQty, remove, total, count, clear } = useCart();

  return (
    <Layout>
      <section className="mx-auto max-w-5xl px-4 pt-12 md:px-6 md:pt-16">
        <h1 className="text-4xl md:text-6xl">Votre panier</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {count === 0 ? "Votre panier est vide." : `${count} article${count > 1 ? "s" : ""} dans votre panier`}
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10 md:px-6">
        {detailed.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-border bg-card p-12 text-center">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[var(--brand-sky)] text-[var(--brand-navy)]">
              <ShoppingBag size={28} />
            </div>
            <p className="mt-4 text-base font-semibold">Vous n&apos;avez pas encore d&apos;articles.</p>
            <Link href="/croquettes" className="mt-6 inline-flex rounded-full bg-[var(--brand-navy)] px-5 py-2.5 text-sm font-bold text-white">
              Découvrir nos produits
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-[1fr_320px]">
            <ul className="space-y-3">
              {detailed.map(({ product, qty, lineTotal }) => (
                <li key={product.id} className="flex gap-4 rounded-2xl border border-border bg-card p-4">
                  <Link href={`/produit/${product.id}`} className="relative grid h-24 w-24 shrink-0 place-items-center overflow-hidden rounded-xl bg-[var(--brand-sky)]">
                    {product.image ? (
                      <Image src={product.image} alt={product.name} fill sizes="96px" className="object-contain p-2" />
                    ) : (
                      <span className="font-display text-lg">UNIQ</span>
                    )}
                  </Link>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <Link href={`/produit/${product.id}`} className="font-display text-base leading-tight text-[var(--brand-navy)] line-clamp-2 hover:underline">
                      {product.name}
                    </Link>
                    <p className="mt-0.5 text-xs font-semibold text-muted-foreground">{product.variant}</p>
                    <div className="mt-auto flex flex-wrap items-end justify-between gap-3 pt-2">
                      <div className="inline-flex items-center rounded-full border border-border">
                        <button onClick={() => setQty(product.id, qty - 1)} className="grid h-9 w-9 place-items-center hover:bg-muted" aria-label="Diminuer">
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-sm font-bold">{qty}</span>
                        <button onClick={() => setQty(product.id, qty + 1)} className="grid h-9 w-9 place-items-center hover:bg-muted" aria-label="Augmenter">
                          <Plus size={14} />
                        </button>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-base font-extrabold text-[var(--brand-navy)]">{formatPrice(lineTotal)}</span>
                        <button onClick={() => remove(product.id)} className="grid h-9 w-9 place-items-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground" aria-label="Retirer">
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
              <button onClick={clear} className="text-xs font-semibold text-muted-foreground hover:text-foreground">
                Vider le panier
              </button>
            </ul>

            <aside className="h-fit rounded-3xl border border-border bg-card p-6">
              <h2 className="font-display text-2xl text-[var(--brand-navy)]">Récapitulatif</h2>
              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Sous-total</dt>
                  <dd className="font-bold">{formatPrice(total)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Livraison</dt>
                  <dd className="font-bold text-[var(--treat-dark)]">Offerte</dd>
                </div>
              </dl>
              <div className="mt-4 flex items-baseline justify-between border-t border-border pt-4">
                <span className="text-sm font-semibold">Total TTC</span>
                <span className="text-2xl font-extrabold text-[var(--brand-navy)]">{formatPrice(total)}</span>
              </div>
              <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--brand-navy)] px-6 py-3 text-sm font-bold text-white hover:opacity-90">
                Passer la commande <ArrowRight size={16} />
              </button>
              <Link href="/croquettes" className="mt-3 block text-center text-xs font-semibold text-muted-foreground hover:text-foreground">
                Continuer mes achats
              </Link>
            </aside>
          </div>
        )}
      </section>
    </Layout>
  );
}
