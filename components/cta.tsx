"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, Gift, Star, Check } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Descontos Exclusivos",
    description: "Preços especiais em ingressos e produtos oficiais",
  },
  {
    icon: Gift,
    title: "Benefícios VIP",
    description: "Acesso a eventos exclusivos e área VIP no estádio",
  },
  {
    icon: Star,
    title: "Prioridade",
    description: "Compra antecipada de ingressos para grandes jogos",
  },
];

const features = [
  "Ingresso garantido em todos os jogos",
  "Desconto na loja oficial",
  "Acesso exclusivo a treinos",
  "Sorteios e promoções especiais",
];

export function CTA() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
      id="socio"
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://s2-ge.glbimg.com/5g1l8Ym6zWPZqQKjdLMY4pXiLhE=/0x0:1280x854/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/U/Z/8GKSNTTqqAAAJZ0q2QlQ/mirassol-torcida.jpg"
          alt="Torcida do Mirassol"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
        <div className="absolute inset-0 pattern-stripes opacity-20" />
      </div>

      {/* Top gradient bar */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-primary" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <p className="text-secondary uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Faça Parte da Família
            </p>
            <h2 className="font-[family-name:var(--font-oswald)] text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-foreground mb-6 text-balance">
              Seja <span className="text-primary">Sócio</span> do Leão
            </h2>
            <p className="text-muted-foreground text-lg mb-8 text-pretty">
              Junte-se à família Mirassol e viva a emoção de apoiar o Leão na
              Série A. Tenha acesso a benefícios exclusivos e faça parte desta
              história centenária.
            </p>

            {/* Feature list */}
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li
                  key={feature}
                  className={`flex items-center gap-3 transition-all duration-500 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="w-5 h-5 bg-secondary/20 flex items-center justify-center">
                    <Check className="text-secondary" size={14} />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contato"
                className="btn-glow inline-flex items-center justify-center bg-primary text-primary-foreground px-10 py-5 text-lg font-semibold uppercase tracking-wider hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
              >
                Quero ser Sócio
              </Link>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-3xl font-[family-name:var(--font-oswald)] font-bold text-primary">
                  R$ 29,90
                </span>
                <span className="text-sm">/mês</span>
              </div>
            </div>
          </div>

          {/* Benefits Cards */}
          <div
            className={`space-y-4 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={`bg-background/80 backdrop-blur-sm border border-border p-6 hover:border-primary/50 transition-all duration-500 group cursor-pointer hover:bg-background ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${400 + index * 150}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shrink-0 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                    <benefit.icon
                      className="text-primary group-hover:scale-110 transition-transform"
                      size={28}
                    />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-oswald)] text-xl font-semibold text-foreground uppercase mb-2 group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Badge */}
            <div className="bg-secondary/10 border border-secondary/30 p-4 text-center">
              <p className="text-secondary font-medium">
                Mais de <span className="font-bold">5.000 sócios</span> já fazem
                parte da família Leão
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
