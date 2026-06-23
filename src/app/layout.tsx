import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

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
  weight: ["500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Chaure Estilistes | Peluquería en Les Corts, Barcelona",
  description:
    "Peluquería en Les Corts con 9 años de experiencia y los mejores peluqueros profesionales certificados. Corte, color, mechas, tratamientos y estética en Barcelona.",
  keywords: [
    "peluquería Les Corts",
    "peluquería Barcelona",
    "Chaure Estilistes",
    "corte de pelo Barcelona",
    "mechas Balayage Les Corts",
    "tintes Barcelona",
    "tratamiento keratina Barcelona",
  ],
  authors: [{ name: "Chaure Estilistes" }],
  icons: {
    icon: "/images/logo.png",
  },
  openGraph: {
    title: "Chaure Estilistes | Peluquería en Les Corts, Barcelona",
    description:
      "Peluquería en Les Corts con 9 años de experiencia. Cortes, tintes, mechas, tratamientos y estética con peluqueros profesionales certificados.",
    url: "https://chaurestilistes.com",
    siteName: "Chaure Estilistes",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chaure Estilistes | Peluquería en Les Corts",
    description: "Peluquería profesional en Les Corts, Barcelona.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
