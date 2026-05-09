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
  title: "Mirassol FC - O Leão da Alta Araraquarense",
  description:
    "Site oficial do Mirassol Futebol Clube. Confira notícias, jogos, elenco e tudo sobre o Leão da Alta Araraquarense.",
  keywords: [
    "Mirassol FC",
    "Futebol",
    "Campeonato Paulista",
    "Série B",
    "Leão da Alta Araraquarense",
  ],
};

export const viewport: Viewport = {
  themeColor: "#facc15",
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
