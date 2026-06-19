"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAnimal, type Animal } from "@/lib/animal-context";

export default function SplashPage() {
  const { setAnimal } = useAnimal();
  const router = useRouter();

  const choose = (a: Animal) => {
    setAnimal(a);
    router.push("/home");
  };

  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      <SplashHalf bg="var(--brand-navy)" text="#fff" label="Chat" img="/assets/splash-cat.jpg" onClick={() => choose("chat")} />
      <SplashHalf bg="var(--brand-blue)" text="#fff" label="Chien" img="/assets/splash-dog.jpg" onClick={() => choose("chien")} />
    </div>
  );
}

function SplashHalf({
  bg,
  text,
  label,
  img,
  onClick,
}: {
  bg: string;
  text: string;
  label: string;
  img: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group relative flex min-h-[50vh] cursor-pointer items-center justify-center overflow-hidden transition-all md:min-h-screen"
      style={{ backgroundColor: bg }}
    >
      <Image
        src={img}
        alt={label}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover opacity-70 transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, transparent 30%, ${bg} 100%)` }} />
      <div className="relative z-10 text-center">
        <div className="font-display text-6xl md:text-8xl" style={{ color: text }}>
          {label}
        </div>
        <div className="mt-3 text-sm font-bold uppercase tracking-widest opacity-80" style={{ color: text }}>
          Entrer dans la boutique →
        </div>
      </div>
    </button>
  );
}
