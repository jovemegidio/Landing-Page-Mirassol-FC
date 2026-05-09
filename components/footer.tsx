import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
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
  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Mirassol_Futebol_Clube_logo.svg/800px-Mirassol_Futebol_Clube_logo.svg.png"
                alt="Escudo Mirassol FC"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-foreground font-bold text-lg tracking-tight font-[family-name:var(--font-oswald)] uppercase">
                Mirassol FC
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              O Leão da Alta Araraquarense. Fundado em 1925.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-accent flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-[family-name:var(--font-oswald)] text-foreground font-semibold uppercase tracking-wider mb-4">
                {group.title}
              </h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
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
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
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
