import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import { ProductDetail } from "./ProductDetail";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) return { title: "Produit introuvable — UNIQ & CO" };
  return {
    title: `${product.name} — UNIQ & CO`,
    description: `${product.name} — ${product.variant}.`,
    openGraph: {
      title: product.name,
      description: product.variant,
      ...(product.image ? { images: [product.image] } : {}),
    },
  };
}

export default async function ProduitPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) notFound();
  return <ProductDetail product={product} />;
}
