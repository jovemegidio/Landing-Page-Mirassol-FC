"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MapPin, Users, Ticket, Trophy } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Capacidade",
    description: "15.000 lugares para a torcida",
  },
  {
    icon: MapPin,
    title: "Localização",
    description: "Av. Antônio José de Oliveira, Mirassol - SP",
  },
  {
    icon: Ticket,
    title: "Média de Público",
    description: "6.294 torcedores por jogo em 2025",
  },
  {
    icon: Trophy,
    title: "Desde 1961",
    description: "Palco de grandes vitórias do Leão",
  },
];

export function Stadium() {
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
      id="estadio"
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/10 via-transparent to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Stadium Image */}
          <div
            className={`order-2 lg:order-1 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="aspect-video relative overflow-hidden group">
              <Image
                src="https://s2-ge.glbimg.com/rC5k4oH-NkW63WcQeP0HqQMJYhY=/0x0:1280x720/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/p/f/2M5fOaSOaAp41H3P2aZA/maiao-estadio-mirassol.jpg"
                alt="Estádio José Maria de Campos Maia - Maião"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              {/* Overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-[family-name:var(--font-oswald)] text-3xl font-bold text-foreground uppercase">
                  Estádio <span className="text-primary">Maião</span>
                </p>
                <p className="text-muted-foreground text-sm">
                  Casa do Leão desde 1961
                </p>
              </div>
              {/* Capacity badge */}
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2">
                <span className="font-[family-name:var(--font-oswald)] text-xl font-bold">
                  15K
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`order-1 lg:order-2 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <p className="text-secondary uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Nossa Casa
            </p>
            <h2 className="font-[family-name:var(--font-oswald)] text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6 text-foreground">
              Estádio José Maria de{" "}
              <span className="text-primary">Campos Maia</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Carinhosamente conhecido como{" "}
              <span className="text-primary font-medium">Maião</span>, nosso
              estádio é a casa do Leão desde 1961. Com capacidade para{" "}
              <span className="text-foreground font-medium">
                15 mil torcedores
              </span>
              , o Maião é palco de grandes emoções e vitórias memoráveis. É onde
              a torcida se une para apoiar o Mirassol em cada partida.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`flex items-start gap-4 p-4 bg-muted border border-border hover:border-primary/50 hover:bg-muted/80 transition-all duration-500 group cursor-pointer ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-8"
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <feature.icon
                      className="text-primary group-hover:scale-110 transition-transform"
                      size={20}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {feature.title}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
