import type { Metadata } from "next";
import { Bebas_Neue, Barlow_Condensed, Barlow } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const barlow = Barlow({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  title: "David Silva | Personal Trainer HYROX & Entrenamiento Híbrido",
  description:
    "Entrenamiento personalizado en fuerza, hipertrofia, running y HYROX. Planes individuales con progresión inteligente y acompañamiento real.",
  keywords: [
    "HYROX",
    "entrenamiento híbrido",
    "personal trainer",
    "fuerza",
    "running",
    "hipertrofia",
    "David Silva",
  ],
  openGraph: {
    title: "David Silva | Personal Trainer HYROX",
    description:
      "Entrenamiento personalizado en fuerza, hipertrofia, running y HYROX.",
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
      lang="es"
      className={`${bebasNeue.variable} ${barlowCondensed.variable} ${barlow.variable}`}
    >
      <body className="bg-base text-white font-body antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
