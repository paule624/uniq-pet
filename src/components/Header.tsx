"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Menu, X, ShoppingBag } from "lucide-react";
import { Logo } from "./Logo";
import { AnimalSwitch } from "./AnimalSwitch";
import { useCart } from "@/lib/cart-context";

const navLinks = [
  { href: "/croquettes", label: "Nos croquettes" },
  { href: "/patees", label: "Nos pâtées" },
  { href: "/friandises", label: "Nos friandises" },
];

const autresLinks = [
  { href: "/autres?sub=hygiene", label: "Hygiène" },
  { href: "/autres?sub=soins", label: "Soins" },
  { href: "/autres?sub=jouets", label: "Jouets" },
];

const aproposLinks = [
  { href: "/notre-histoire", label: "Notre histoire" },
  { href: "/nos-partenaires", label: "Nos partenaires" },
  { href: "/nos-avis", label: "Nos avis" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:px-6">
        <Logo />

        <nav className="hidden items-center gap-6 lg:flex">
          <AnimalSwitch />
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={
                pathname === l.href
                  ? "text-sm font-bold text-foreground underline underline-offset-8"
                  : "text-sm font-bold text-foreground hover:text-foreground/70"
              }
            >
              {l.label}
            </Link>
          ))}
          <Dropdown label="Autres" items={autresLinks} />
          <Dropdown label="À propos" items={aproposLinks} />
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/panier"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-muted"
            aria-label="Panier"
          >
            <ShoppingBag size={18} />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-[var(--brand-navy)] px-1 text-[10px] font-bold text-white">
                {count}
              </span>
            )}
          </Link>
          <Link
            href="/contact"
            className="hidden rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground hover:opacity-90 md:inline-flex"
          >
            Contact
          </Link>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto max-w-7xl space-y-4 px-4 py-4">
            <div className="flex justify-center">
              <AnimalSwitch />
            </div>
            <div className="flex flex-col gap-3">
              {[...navLinks, ...autresLinks, ...aproposLinks].map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-bold">
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="rounded-full bg-primary px-5 py-2 text-center text-sm font-bold text-primary-foreground"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Dropdown({ label, items }: { label: string; items: Array<{ href: string; label: string }> }) {
  return (
    <div className="group relative">
      <button className="flex items-center gap-1 text-sm font-bold text-foreground hover:text-foreground/70">
        {label}
        <ChevronDown size={14} />
      </button>
      <div className="invisible absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 rounded-2xl border border-border bg-card p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
        <div className="flex w-44 flex-col">
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-foreground hover:bg-muted"
            >
              {it.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
