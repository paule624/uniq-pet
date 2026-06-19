import type { Metadata } from "next";
import { CategoryPage } from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Nos friandises — UNIQ & CO",
  description: "Friandises saines pour récompenser votre compagnon.",
};

export default function Friandises() {
  return (
    <CategoryPage
      category="friandises"
      title="Nos friandises"
      subtitle="Récompensez votre compagnon avec des friandises 100% naturelles."
    />
  );
}
