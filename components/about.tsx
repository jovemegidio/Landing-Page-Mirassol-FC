"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Trophy, Users, Calendar, Star } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: "1925",
    label: "Ano de Fundação",
  },
  {
    icon: Trophy,
    value: "4º",
    label: "Brasileirão 2025",
  },
  {
    icon: Users,
    value: "31",
    label: "Jogadores no Elenco",
  },
  {
    icon: Star,
    value: "1ª",
    label: "Divisão - Série A",
  },
];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="aspect-[4/3] relative overflow-hidden group">
              <Image
                src="https://s2-ge.glbimg.com/5uFQHgY_D1KpMJTQaZS3eNQbhVE=/0x0:1280x854/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2025/q/g/6TnlpzSXuAARB7aBlVxQ/whatsapp-image-2025-03-18-at-19.27.29.jpeg"
                alt="Time do Mirassol FC"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              {/* Overlay with team colors on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            {/* Badge with shield */}
            <div className="absolute -bottom-6 -right-6 bg-primary p-6 shadow-2xl shadow-primary/30 animate-pulse-glow">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Mirassol_Futebol_Clube_logo.svg/800px-Mirassol_Futebol_Clube_logo.svg.png"
                alt="Escudo Mirassol"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            {/* Year badge */}
            <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-4 py-2">
              <span className="font-[family-name:var(--font-oswald)] text-2xl font-bold">
                100
              </span>
              <span className="text-xs uppercase ml-1">Anos</span>
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Nossa História
            </p>
            <h2 className="font-[family-name:var(--font-oswald)] text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6 text-foreground">
              <span className="text-primary">100 Anos</span> de Tradição
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                O Mirassol Futebol Clube foi fundado em{" "}
                <span className="text-foreground font-medium">
                  5 de março de 1925
                </span>
                , na cidade de Mirassol, interior de São Paulo. Conhecido
                carinhosamente como o{" "}
                <span className="text-primary font-medium">
                  Leão da Alta Araraquarense
                </span>
                , o clube completa 100 anos de história em 2025.
              </p>
              <p>
                Em 2024, o Mirassol fez história ao conquistar o{" "}
                <span className="text-secondary font-medium">
                  acesso inédito à Série A
                </span>{" "}
                do Campeonato Brasileiro, coroando anos de trabalho sério e
                profissionalismo. Sob o comando técnico de{" "}
                <span className="text-foreground font-medium">
                  Rafael Guanaes
                </span>
                , o time disputa sua primeira temporada na elite do futebol
                nacional.
              </p>
              <p>
                Com suas cores{" "}
                <span className="text-primary font-medium">amarelo</span> e{" "}
                <span className="text-secondary font-medium">verde</span>, o
                Mirassol representa não apenas uma equipe de futebol, mas um
                símbolo de orgulho para toda a região.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`bg-muted p-4 border border-border hover:border-primary/50 transition-all duration-500 group cursor-pointer hover:bg-muted/80 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <stat.icon
                    className="text-primary mb-2 group-hover:scale-110 transition-transform duration-300"
                    size={24}
                  />
                  <p className="font-[family-name:var(--font-oswald)] text-2xl md:text-3xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-xs uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
