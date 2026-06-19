import type { Metadata } from "next";
import { CategoryPage } from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Nos croquettes — UNIQ & CO",
  description: "Croquettes premium sans céréales pour chien et chat.",
};

export default function Croquettes() {
  return (
    <CategoryPage
      category="croquettes"
      title="Nos croquettes"
      subtitle="Des recettes premium, sans céréales, pour chaque âge et chaque besoin."
    />
  );
}
