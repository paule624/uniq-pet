import type { Metadata } from "next";
import { Star, BadgeCheck } from "lucide-react";
import { Layout } from "@/components/Layout";

export const metadata: Metadata = {
  title: "Nos avis clients — UNIQ & CO",
  description: "Découvrez les avis vérifiés de nos clients sur les produits UNIQ & CO.",
};

const reviews = [
  { name: "Camille L.", date: "12 oct. 2025", rating: 5, text: "Mes chiens adorent les croquettes au saumon ! Livraison rapide et emballage soigné." },
  { name: "Julien M.", date: "03 oct. 2025", rating: 5, text: "Très bonne qualité, le poil de mon chat est plus brillant en quelques semaines." },
  { name: "Sophie B.", date: "27 sept. 2025", rating: 4, text: "Recettes au top, mon chien à l'estomac sensible les digère parfaitement." },
  { name: "Marc D.", date: "20 sept. 2025", rating: 5, text: "Marque française de confiance, je recommande à tous les propriétaires." },
  { name: "Léa R.", date: "14 sept. 2025", rating: 5, text: "Le service client est aux petits soins. Réactivité au rendez-vous." },
  { name: "Antoine P.", date: "08 sept. 2025", rating: 4, text: "Excellent rapport qualité-prix. Les pâtées sont une grande réussite." },
  { name: "Manon V.", date: "02 sept. 2025", rating: 5, text: "Mes chats sont devenus accros aux friandises au thon, succès garanti !" },
  { name: "Hugo F.", date: "28 août 2025", rating: 5, text: "Composition irréprochable, vrai partenaire pour la santé de mon labrador." },
  { name: "Inès K.", date: "22 août 2025", rating: 4, text: "Très bonne marque, les sacs sont pratiques et refermables." },
];

export default function AvisPage() {
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <h1 className="text-4xl md:text-6xl">Nos avis</h1>
        <p className="mt-3 max-w-xl text-muted-foreground">L&apos;opinion sincère de nos clients sur les produits UNIQ &amp; CO.</p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <article key={i} className="flex flex-col gap-3 rounded-3xl border border-border bg-card p-6">
              <div className="flex items-center gap-1 text-[var(--pate)]">
                {Array.from({ length: r.rating }).map((_, k) => (
                  <Star key={k} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-sm text-foreground/85">&laquo;&nbsp;{r.text}&nbsp;&raquo;</p>
              <div className="mt-auto flex items-center justify-between border-t border-border pt-3">
                <div>
                  <div className="text-sm font-bold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.date}</div>
                </div>
                <div className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase" style={{ backgroundColor: "var(--brand-sky)", color: "var(--brand-navy)" }}>
                  <BadgeCheck size={12} /> Achat vérifié
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
