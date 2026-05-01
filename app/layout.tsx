import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Italiana } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";
import Nav from "./components/Nav";

const display = Italiana({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
});

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rachel Studio Beauté — Maquillage · Coiffure · Photo · Vidéo",
  description:
    "Studio artistique à Mascouche. Maquillage, coiffure, photoshoot boudoir & corpo, cours d'auto-maquillage conscient. Une signature gothique-éditoriale par Rachel.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${display.variable} ${serif.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-noir text-ivoire grain vignette">
        <CustomCursor />
        <Nav />
        {children}
      </body>
    </html>
  );
}
