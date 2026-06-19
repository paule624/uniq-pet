import Link from "next/link";
import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/home" className={`inline-flex items-center ${className}`} aria-label="UNIQ & CO — Accueil">
      <Image
        src="/assets/logo.png"
        alt="UNIQ & CO"
        width={575}
        height={530}
        priority
        className="h-10 w-auto md:h-12"
      />
    </Link>
  );
}
