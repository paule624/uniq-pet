"use client";

import { useAnimal } from "@/lib/animal-context";

export function AnimalSwitch() {
  const { animal, setAnimal } = useAnimal();
  const current = animal ?? "chien";
  return (
    <div className="relative inline-flex items-center rounded-full border-2 border-foreground/10 bg-card p-1 shadow-sm">
      <button
        onClick={() => setAnimal("chat")}
        className={`relative z-10 rounded-full px-4 py-1.5 text-sm font-bold transition-colors ${
          current === "chat" ? "text-foreground" : "text-foreground/60 hover:text-foreground"
        }`}
        style={current === "chat" ? { backgroundColor: "var(--brand-blue)" } : undefined}
      >
        Chat
      </button>
      <button
        onClick={() => setAnimal("chien")}
        className={`relative z-10 rounded-full px-4 py-1.5 text-sm font-bold transition-colors ${
          current === "chien" ? "text-foreground" : "text-foreground/60 hover:text-foreground"
        }`}
        style={current === "chien" ? { backgroundColor: "var(--brand-blue)" } : undefined}
      >
        Chien
      </button>
    </div>
  );
}
