"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Animal = "chat" | "chien";

interface AnimalContextValue {
  animal: Animal | null;
  setAnimal: (a: Animal) => void;
  ready: boolean;
}

const AnimalContext = createContext<AnimalContextValue | undefined>(undefined);

const STORAGE_KEY = "uniqco_animal";

export function AnimalProvider({ children }: { children: ReactNode }) {
  const [animal, setAnimalState] = useState<Animal | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Animal | null;
      if (stored === "chat" || stored === "chien") setAnimalState(stored);
    } catch {}
    setReady(true);
  }, []);

  const setAnimal = (a: Animal) => {
    setAnimalState(a);
    try {
      localStorage.setItem(STORAGE_KEY, a);
    } catch {}
  };

  return (
    <AnimalContext.Provider value={{ animal, setAnimal, ready }}>
      {children}
    </AnimalContext.Provider>
  );
}

export function useAnimal() {
  const ctx = useContext(AnimalContext);
  if (!ctx) throw new Error("useAnimal must be used within AnimalProvider");
  return ctx;
}
