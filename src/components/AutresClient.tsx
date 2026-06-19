"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Layout } from "@/components/Layout";
import { ProductGrid } from "@/components/ProductGrid";
import { useAnimal } from "@/lib/animal-context";
import { getProducts, type Subcategory } from "@/lib/products";

const tabs: { key: Subcategory; label: string }[] = [
  { key: "hygiene", label: "Hygiène" },
  { key: "soins", label: "Soins" },
  { key: "jouets", label: "Jouets" },
];

export function AutresClient() {
  const { animal } = useAnimal();
  const router = useRouter();
  const searchParams = useSearchParams();
  const sub = searchParams.get("sub") as Subcategory | null;
  const active: Subcategory = sub === "soins" || sub === "jouets" ? sub : "hygiene";
  const products = getProducts({ category: "autres", subcategory: active, animal: animal ?? "chien" });

  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-4 pt-12 md:px-6 md:pt-16">
        <h1 className="text-4xl md:text-6xl">Hygiène, soins &amp; jouets</h1>
        <p className="mt-3 max-w-xl text-muted-foreground">Pour prendre soin de votre animal au quotidien.</p>

        <div className="mt-8 inline-flex rounded-full border border-border bg-card p-1">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => router.push(`/autres?sub=${t.key}`)}
              className="rounded-full px-5 py-2 text-sm font-bold transition-colors"
              style={active === t.key ? { backgroundColor: "var(--other)", color: "#fff" } : { color: "var(--brand-navy)" }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <ProductGrid products={products} />
      </section>
    </Layout>
  );
}
