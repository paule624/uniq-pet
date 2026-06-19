import type { Metadata } from "next";
import { CategoryPage } from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Nos pâtées — UNIQ & CO",
  description: "Pâtées gourmandes et savoureuses pour chien et chat.",
};

export default function Patees() {
  return (
    <CategoryPage
      category="patees"
      title="Nos pâtées"
      subtitle="Des textures fondantes, des recettes élaborées avec amour."
    />
  );
}
