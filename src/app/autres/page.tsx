import type { Metadata } from "next";
import { Suspense } from "react";
import { AutresClient } from "@/components/AutresClient";

export const metadata: Metadata = {
  title: "Hygiène, soins & jouets — UNIQ & CO",
  description: "Tout le nécessaire pour le bien-être quotidien de votre animal.",
};

export default function Autres() {
  return (
    <Suspense>
      <AutresClient />
    </Suspense>
  );
}
