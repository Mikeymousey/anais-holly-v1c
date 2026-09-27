import type { Metadata, Viewport } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  variable: "--font-fraunces",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
  variable: "--font-outfit",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#f3eee6",
};

export const metadata: Metadata = {
  title: "Anaïs Holly — Ostéopathe à Montréal",
  description:
    "Ostéopathe à Montréal. Nourrissons, sportifs, adultes et aînés. Première visite : bilan, soin et plan clair. 135 $ · 60 minutes · reçu d’assurance.",
  applicationName: "Anaïs Holly",
  authors: [{ name: "Anaïs Holly" }],
  openGraph: {
    title: "Anaïs Holly — Ostéopathe à Montréal",
    description:
      "Une pratique attentive pour le quotidien. Bilan, soin et plan clair. Prendre rendez-vous.",
    locale: "fr_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${outfit.variable}`}>
      <body className="antialiased"><>{children}</></body>
    </html>
  );
}
