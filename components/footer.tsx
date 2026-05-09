"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/mirassolfc", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/mirassolfc", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com/mirassolfc", label: "Twitter" },
  { icon: Youtube, href: "https://youtube.com/mirassolfc", label: "YouTube" },
];

const footerLinks = [
  {
    title: "Clube",
    links: [
      { label: "Sobre", href: "#sobre" },
      { label: "História", href: "#" },
      { label: "Títulos", href: "#" },
      { label: "Estatuto", href: "#" },
    ],
  },
  {
    title: "Futebol",
    links: [
      { label: "Elenco", href: "#elenco" },
      { label: "Comissão Técnica", href: "#" },
      { label: "Categorias de Base", href: "#" },
      { label: "Calendário", href: "#" },
    ],
  },
  {
    title: "Torcedor",
    links: [
      { label: "Seja Sócio", href: "#socio" },
      { label: "Ingressos", href: "#" },
      { label: "Loja Oficial", href: "#" },
      { label: "Contato", href: "#contato" },
    ],
  },
];

export function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="bg-muted border-t border-border relative overflow-hidden">
      {/* Top gradient bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-stripes opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div
            className={`col-span-2 md:col-span-1 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Mirassol_Futebol_Clube_logo.svg/800px-Mirassol_Futebol_Clube_logo.svg.png"
                alt="Escudo Mirassol FC"
                width={48}
                height={48}
                className="object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-foreground font-bold text-lg tracking-tight font-[family-name:var(--font-oswald)] uppercase group-hover:text-primary transition-colors">
                Mirassol FC
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              O Leão da Alta Araraquarense.
              <br />
              <span className="text-primary font-medium">100 anos</span> de história.
              <br />
              Série A do Brasileirão 2025.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-10 h-10 bg-accent flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/25 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${200 + index * 50}ms` }}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group, groupIndex) => (
            <div
              key={group.title}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + groupIndex * 100}ms` }}
            >
              <h4 className="font-[family-name:var(--font-oswald)] text-foreground font-semibold uppercase tracking-wider mb-4 text-primary">
                {group.title}
              </h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-all duration-300 text-sm inline-block hover:translate-x-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div
          className={`pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-muted-foreground text-sm text-center md:text-left">
            {new Date().getFullYear()} Mirassol Futebol Clube. Todos os
            direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Política de Privacidade
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
