import type { Metadata } from "next";
import { AtSign, Phone, Globe, MapPin } from "lucide-react";
import { Layout } from "@/components/Layout";

export const metadata: Metadata = {
  title: "Nos partenaires — UNIQ & CO",
  description: "Les partenaires UNIQ & CO : éleveurs, éducateurs, services de livraison.",
};

const partners = [
  {
    name: "La Tournée des Moustaches",
    location: "44 – Sautron",
    color: "var(--brand-blue)",
    initial: "M",
    description: "Service de livraison de croquettes à domicile (20 km autour de Sautron) + petsitting chats et chiens.",
    web: "www.latourneedesmoustaches.fr",
    insta: "@la_tournee_des_moustaches",
    tel: "06.01.00.12.00",
  },
  {
    name: "Wolf Dog",
    location: "62 – Wingles",
    color: "var(--pate)",
    initial: "W",
    description: "Garde d'animaux, éducation canine et taxi animalier. Terrain dédié de 300m² pour l'éducation canine. Contact : Christelle Jonaszek.",
    insta: "@wolfdog_wingles",
    tel: "06.10.20.30.40",
  },
  {
    name: "Élevage Lait'Lixir — Pomsky",
    location: "18 – Neuvy-le-Barrois",
    color: "var(--other)",
    initial: "L",
    description: "Élevage familial de Pomskies (croisement Husky × Spitz nain). Valeurs : bien-être, socialisation, transparence.",
    insta: "@pomsky_laitlixir",
  },
];

export default function PartnersPage() {
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <h1 className="text-4xl md:text-6xl">Nos partenaires</h1>
        <p className="mt-3 max-w-xl text-muted-foreground">Un réseau d&apos;éleveurs, d&apos;éducateurs et de services qui partagent nos valeurs.</p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {partners.map((p) => (
            <article key={p.name} className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card">
              <div className="grid h-40 place-items-center font-display text-6xl text-white" style={{ backgroundColor: p.color }}>
                {p.initial}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-display text-2xl">{p.name}</h2>
                <div className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin size={14} /> {p.location}
                </div>
                <p className="mt-3 flex-1 text-sm text-foreground/80">{p.description}</p>
                <div className="mt-5 space-y-2 text-sm">
                  {p.web && <Row icon={<Globe size={14} />}>{p.web}</Row>}
                  {p.insta && <Row icon={<AtSign size={14} />}>{p.insta}</Row>}
                  {p.tel && <Row icon={<Phone size={14} />}>{p.tel}</Row>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}

function Row({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-foreground/80">
      <span className="text-[var(--brand-blue)]">{icon}</span>
      <span className="truncate font-semibold">{children}</span>
    </div>
  );
}
