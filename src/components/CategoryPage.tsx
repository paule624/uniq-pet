"use client";

import { Layout } from "@/components/Layout";
import { ProductGrid } from "@/components/ProductGrid";
import { useAnimal } from "@/lib/animal-context";
import { getProducts, type Category } from "@/lib/products";

export function CategoryPage({
  category,
  title,
  subtitle,
}: {
  category: Extract<Category, "croquettes" | "patees" | "friandises">;
  title: string;
  subtitle: string;
}) {
  const { animal } = useAnimal();
  const products = getProducts({ category, animal: animal ?? "chien" });
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-4 pt-12 md:px-6 md:pt-16">
        <h1 className="text-4xl md:text-6xl">{title}</h1>
        <p className="mt-3 max-w-xl text-muted-foreground">{subtitle}</p>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <ProductGrid products={products} />
      </section>
    </Layout>
  );
}
