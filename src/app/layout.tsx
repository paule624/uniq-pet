import type { Metadata } from "next";
import { Londrina_Solid, Nunito } from "next/font/google";
import "./globals.css";
import { AnimalProvider } from "@/lib/animal-context";
import { CartProvider } from "@/lib/cart-context";

const londrina = Londrina_Solid({
  variable: "--font-londrina",
  subsets: ["latin"],
  weight: ["400", "900"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://uniqco.fr"),
  title: "UNIQ & CO — Leur bien-être commence dans leur gamelle",
  description:
    "Croquettes, pâtées et friandises premium sans céréales pour chiens et chats.",
  openGraph: {
    title: "UNIQ & CO",
    description: "Alimentation premium française pour chiens et chats.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${londrina.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <AnimalProvider>
          <CartProvider>{children}</CartProvider>
        </AnimalProvider>
      </body>
    </html>
  );
}
