import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "Mirassol FC - O Leão da Alta Araraquarense | Série A 2025",
  description:
    "Site oficial do Mirassol Futebol Clube. 100 anos de história. Primeira temporada na Série A do Brasileirão 2025. Confira notícias, jogos e elenco do Leão.",
  keywords: [
    "Mirassol FC",
    "Futebol",
    "Campeonato Brasileiro",
    "Série A",
    "Leão da Alta Araraquarense",
    "Brasileirão 2025",
  ],
};

export const viewport: Viewport = {
  themeColor: "#F7B000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${oswald.variable} bg-background`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
