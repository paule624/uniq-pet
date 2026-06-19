import Link from "next/link";
import Image from "next/image";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="mt-24" style={{ backgroundColor: "var(--brand-navy)", color: "#fff" }}>
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Image
              src="/assets/logo.png"
              alt="UNIQ & CO"
              width={575}
              height={530}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="mt-3 max-w-xs text-sm text-white/70">
              Alimentation premium française pour chiens et chats. Le bien-être commence dans la gamelle.
            </p>
          </div>
          <div>
            <div className="text-sm font-bold uppercase tracking-wide text-white/60">Boutique</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/croquettes" className="hover:text-[var(--brand-blue)]">Nos croquettes</Link></li>
              <li><Link href="/patees" className="hover:text-[var(--brand-blue)]">Nos pâtées</Link></li>
              <li><Link href="/friandises" className="hover:text-[var(--brand-blue)]">Nos friandises</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--brand-blue)]">Contact</Link></li>
              <li><Link href="/notre-histoire" className="hover:text-[var(--brand-blue)]">À propos</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-bold uppercase tracking-wide text-white/60">Suivez-nous</div>
            <div className="mt-3 flex gap-3">
              <a href="#" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-white/20">
                <InstagramIcon size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-white/20">
                <FacebookIcon size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/50">
          © 2024 UNIQ &amp; CO — ANI-FEED. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
