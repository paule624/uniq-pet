"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Layout } from "@/components/Layout";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr]">
          <div>
            <h1 className="text-4xl md:text-6xl">Contactez-nous</h1>
            <p className="mt-3 max-w-md text-muted-foreground">Notre équipe vous répond sous 24h ouvrées.</p>

            {sent ? (
              <div className="mt-8 rounded-2xl border border-border bg-card p-8 text-center">
                <div className="text-2xl">Merci !</div>
                <p className="mt-2 text-muted-foreground">Votre message a bien été envoyé.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="mt-8 grid gap-4 md:grid-cols-2"
              >
                <Field label="Prénom" name="firstname" />
                <Field label="Nom" name="lastname" />
                <Field label="Email" name="email" type="email" />
                <Field label="Téléphone" name="phone" type="tel" />
                <label className="flex flex-col gap-1.5 md:col-span-2">
                  <span className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Sujet</span>
                  <select required className="rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)]">
                    <option>Commande</option>
                    <option>Partenariat</option>
                    <option>Question produit</option>
                    <option>Autre</option>
                  </select>
                </label>
                <label className="flex flex-col gap-1.5 md:col-span-2">
                  <span className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Message</span>
                  <textarea required rows={5} className="rounded-xl border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)]" />
                </label>
                <button className="rounded-full bg-[var(--brand-navy)] px-6 py-3 text-sm font-bold text-white hover:opacity-90 md:col-span-2">
                  Envoyer
                </button>
              </form>
            )}
          </div>

          <aside className="space-y-4">
            <InfoCard icon={<Mail size={18} />} title="Email" value="contact@uniqco.fr" />
            <InfoCard icon={<Phone size={18} />} title="Téléphone" value="+33 1 23 45 67 89" />
            <InfoCard icon={<MapPin size={18} />} title="Siège" value="Nantes, France" />
            <div className="rounded-3xl p-6" style={{ backgroundColor: "var(--brand-sky)" }}>
              <div className="font-display text-2xl text-[var(--brand-navy)]">Service client</div>
              <p className="mt-2 text-sm text-[var(--brand-navy)]/80">Lun – Ven, 9h – 18h</p>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-bold uppercase tracking-wide text-muted-foreground">{label}</span>
      <input required name={name} type={type} className="rounded-xl border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)]" />
    </label>
  );
}

function InfoCard({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4">
      <div className="grid h-11 w-11 place-items-center rounded-xl" style={{ backgroundColor: "var(--brand-blue)", color: "var(--brand-navy)" }}>
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-xs font-bold uppercase text-muted-foreground">{title}</div>
        <div className="truncate text-sm font-bold">{value}</div>
      </div>
    </div>
  );
}
