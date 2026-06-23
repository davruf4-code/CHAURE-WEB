import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Chaure Estilistes | Peluquería en Les Corts, Barcelona",
  description:
    "Peluquería profesional en Les Corts, Barcelona. Cortes, color, balayage, tratamientos y peinados de novia. Más de 9 años de experiencia con productos Nashi Argan.",
  keywords: [
    "peluquería Barcelona",
    "peluquería Les Corts",
    "Chaure Estilistes",
    "corte de pelo",
    "balayage",
    "mechas",
    "peinados de novia",
    "Nashi Argan",
  ],
  openGraph: {
    title: "Chaure Estilistes | Peluquería en Les Corts, Barcelona",
    description:
      "Peluquería profesional en Les Corts. Cortes, color, balayage y tratamientos con productos Nashi Argan.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
