"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useRef } from "react";
import { Layout } from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import { useAnimal } from "@/lib/animal-context";
import { getProducts } from "@/lib/products";
import { ChevronLeft, ChevronRight, Leaf, ShieldCheck, Heart, Sparkles, Truck, Eye, Star } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function HomePage() {
  const { animal } = useAnimal();
  const featured = useMemo(
    () => getProducts({ category: "croquettes", animal: animal ?? "chien" }).slice(0, 6),
    [animal],
  );
  const scroller = useRef<HTMLDivElement>(null);

  return (
    <Layout>
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-4 pt-10 md:px-6 md:pt-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-5xl leading-[0.95] md:text-7xl">
              Leur bien-être<br />commence dans<br />leur gamelle.
            </h1>
            <p className="mt-6 max-w-md text-base text-muted-foreground">
              Des recettes sans céréales, des ingrédients soigneusement sélectionnés et un engagement sincère pour le bien-être animal. Découvrez une alimentation qui allie qualité, plaisir et confiance.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/croquettes" className="rounded-full bg-[var(--brand-blue)] px-6 py-3 text-sm font-bold text-[var(--brand-navy)] hover:opacity-90">
                Nos produits
              </Link>
              <Link href="/notre-histoire" className="rounded-full border-2 border-[var(--brand-navy)] px-6 py-3 text-sm font-bold text-[var(--brand-navy)] hover:bg-[var(--brand-navy)] hover:text-white">
                Notre histoire
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-[2.5rem] ring-1 ring-border">
              <Image
                src="/assets/hero.jpeg"
                alt="Chien et chat heureux — UNIQ & CO"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-card px-4 py-3 shadow-lg ring-1 ring-border">
              <div className="text-xs font-bold uppercase text-muted-foreground">Sans céréales</div>
              <div className="text-sm font-bold">100% naturel 🌿</div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUITS PHARES */}
      <section className="mx-auto max-w-7xl px-4 pt-24 md:px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-3xl md:text-5xl">Nos produits phares</h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroller.current?.scrollBy({ left: -320, behavior: "smooth" })}
              className="grid h-11 w-11 place-items-center rounded-full"
              style={{ backgroundColor: "var(--brand-blue)", color: "var(--brand-navy)" }}
              aria-label="Précédent"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroller.current?.scrollBy({ left: 320, behavior: "smooth" })}
              className="grid h-11 w-11 place-items-center rounded-full"
              style={{ backgroundColor: "var(--brand-blue)", color: "var(--brand-navy)" }}
              aria-label="Suivant"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        <div ref={scroller} className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {featured.map((p) => (
            <div key={p.id} className="w-[280px] shrink-0 snap-start md:w-[320px]">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </section>

      {/* BENTO AVANTAGES */}
      <section className="mx-auto max-w-7xl px-4 pt-24 md:px-6">
        <h2 className="mb-10 text-center text-3xl md:text-5xl">Pourquoi UNIQ &amp; CO ?</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          <Bento className="md:col-span-2 md:row-span-2" bg="var(--brand-navy)" fg="#fff" icon={<Leaf size={28} />} title="Sans céréales" text="Des recettes formulées pour respecter la digestion naturelle de votre animal." big />
          <Bento bg="var(--brand-blue)" fg="var(--brand-navy)" icon={<ShieldCheck size={24} />} title="Ingrédients sélectionnés" text="Viandes nobles et matières premières françaises." />
          <Bento bg="var(--brand-sky)" fg="var(--brand-navy)" icon={<Heart size={24} />} title="Bien-être animal" text="Une éthique au cœur de chaque recette." />
          <Bento bg="var(--brand-sky)" fg="var(--brand-navy)" icon={<Sparkles size={24} />} title="Qualité premium" text="Fabriqué avec exigence, sans compromis." />
          <Bento bg="var(--brand-blue)" fg="var(--brand-navy)" icon={<Eye size={24} />} title="Transparence totale" text="Origines, listes d'ingrédients : tout est limpide." />
          <Bento className="md:col-span-2" bg="var(--brand-navy)" fg="#fff" icon={<Truck size={24} />} title="Livraison rapide" text="Expédiée en 24h depuis la France." />
        </div>
      </section>

      {/* RECOMMANDÉ PAR DES PROS */}
      <section className="mt-24" style={{ backgroundColor: "var(--brand-sky)" }}>
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <h2 className="mb-12 text-center text-3xl md:text-5xl">Recommandé par des pros</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {pros.map((p) => (
              <article key={p.name} className="rounded-3xl bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full font-display text-xl" style={{ backgroundColor: "var(--brand-blue)", color: "var(--brand-navy)" }}>
                    {p.name[0]}
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-sm font-bold">{p.name}</div>
                    <div className="text-xs text-muted-foreground">{p.role}</div>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-0.5 text-[var(--pate)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-3 text-sm text-foreground/80">&laquo;&nbsp;{p.quote}&nbsp;&raquo;</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 pt-24 md:px-6">
        <h2 className="mb-10 text-center text-3xl md:text-5xl">FAQ</h2>
        <Accordion multiple={false} className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`f-${i}`} className="overflow-hidden rounded-2xl border border-border bg-card px-4">
              <AccordionTrigger className="text-left text-base font-bold">{f.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </Layout>
  );
}

function Bento({
  children,
  bg,
  fg,
  icon,
  title,
  text,
  big,
  className = "",
}: {
  children?: React.ReactNode;
  bg: string;
  fg: string;
  icon: React.ReactNode;
  title: string;
  text: string;
  big?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex flex-col justify-between gap-6 rounded-3xl p-6 md:p-7 ${className}`} style={{ backgroundColor: bg, color: fg }}>
      <div className="grid h-10 w-10 place-items-center rounded-xl" style={{ backgroundColor: "rgba(255,255,255,0.15)" }}>
        {icon}
      </div>
      <div>
        <h3 className={`font-display ${big ? "text-3xl md:text-4xl" : "text-xl"}`}>{title}</h3>
        <p className="mt-2 text-sm opacity-85">{text}</p>
      </div>
      {children}
    </div>
  );
}

const pros = [
  { name: "Laurence", role: "Partenaire UNIQ & CO", quote: "Mes clients reviennent pour la qualité des recettes. Un vrai partenaire de confiance." },
  { name: "Lauriane", role: "Partenaire UNIQ & CO", quote: "Une marque sincère, des produits irréprochables. Mes animaux pensionnaires en raffolent." },
  { name: "Christelle", role: "Éducatrice canine", quote: "Je recommande systématiquement UNIQ & CO à mes familles d'éleveurs." },
];

const faqs = [
  { q: "Vos croquettes sont-elles sans céréales ?", a: "Oui, l'ensemble de notre gamme premium est formulée sans céréales pour respecter la digestion naturelle de votre animal." },
  { q: "Comment choisir les croquettes adaptées à mon animal ?", a: "Nous proposons des recettes par âge, poids et sensibilité. Notre équipe est disponible pour vous conseiller." },
  { q: "Quels sont les délais de livraison ?", a: "Vos commandes sont expédiées sous 24h depuis la France. Vous les recevez en 2 à 4 jours ouvrés." },
  { q: "Puis-je retourner un produit ?", a: "Oui, vous disposez de 14 jours pour retourner un produit non ouvert. Contactez-nous pour la procédure." },
  { q: "Vos produits sont-ils adaptés aux animaux sensibles ?", a: "Plusieurs recettes hypoallergéniques sont spécialement formulées pour les estomacs et peaux sensibles." },
];
