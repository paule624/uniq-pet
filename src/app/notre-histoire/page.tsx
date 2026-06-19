import type { Metadata } from "next";
import { Heart, Sparkles, Scale, Users, Eye } from "lucide-react";
import { Layout } from "@/components/Layout";

export const metadata: Metadata = {
  title: "Notre histoire — UNIQ & CO",
  description: "L'histoire d'UNIQ & CO, marque française premium d'alimentation pour chiens et chats.",
};

const valeurs = [
  { icon: <Heart size={22} />, title: "Bien-être animal" },
  { icon: <Sparkles size={22} />, title: "Produits sains" },
  { icon: <Scale size={22} />, title: "Éthique" },
  { icon: <Users size={22} />, title: "Proximité" },
  { icon: <Eye size={22} />, title: "Transparence" },
];

export default function HistoirePage() {
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <h1 className="text-4xl md:text-6xl">Notre histoire</h1>
        <div className="mt-10 grid gap-12 md:grid-cols-2">
          <div className="space-y-5 text-base text-foreground/85">
            <p>
              <strong>UNIQ &amp; CO</strong> est une marque française de croquettes premium pour chiens et chats, proposant une gamme adaptée à différents budgets (recettes avec ou sans céréales). La marque s&apos;appuie sur une boutique en ligne et un réseau de partenaires et de vendeurs indépendants.
            </p>
            <p>
              À l&apos;origine, UNIQ &amp; CO appartenait à <strong>Verlina</strong>, société spécialisée dans les produits naturels et écologiques pour le soin et le bien-être des animaux.
            </p>
            <p>
              En septembre 2024, la marque est rachetée par <strong>ANI-FEED</strong>. Ce rachat marque le lancement d&apos;un nouveau développement commercial et digital, nécessitant une refonte stratégique et graphique de l&apos;identité de marque.
            </p>
          </div>
          <div className="space-y-4">
            <div className="aspect-[4/5] rounded-3xl" style={{ background: "linear-gradient(135deg, var(--brand-blue), var(--brand-sky))" }} />
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-2xl" style={{ backgroundColor: "var(--brand-navy)" }} />
              <div className="aspect-square rounded-2xl" style={{ backgroundColor: "var(--brand-blue)" }} />
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-center text-3xl md:text-5xl">Nos valeurs</h2>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-5">
            {valeurs.map((v) => (
              <div key={v.title} className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center">
                <div className="grid h-12 w-12 place-items-center rounded-xl" style={{ backgroundColor: "var(--brand-sky)", color: "var(--brand-navy)" }}>
                  {v.icon}
                </div>
                <div className="font-display text-lg">{v.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
