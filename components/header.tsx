"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#elenco", label: "Elenco" },
  { href: "#estadio", label: "Estádio" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg md:text-xl font-[family-name:var(--font-oswald)]">
                M
              </span>
            </div>
            <span className="text-foreground font-bold text-lg md:text-xl tracking-tight font-[family-name:var(--font-oswald)] uppercase">
              Mirassol FC
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#socio"
              className="bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold uppercase tracking-wider hover:bg-primary/90 transition-colors"
            >
              Seja Sócio
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#socio"
              onClick={() => setIsOpen(false)}
              className="bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold uppercase tracking-wider hover:bg-primary/90 transition-colors text-center mt-2"
            >
              Seja Sócio
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
