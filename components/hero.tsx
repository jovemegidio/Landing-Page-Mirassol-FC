"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://s2-ge.glbimg.com/8uZRKrQzBJD4jCcHJh8nDWJxuYA=/0x0:1280x853/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/U/F/MASUKoRqAAAkp4W0m6rg/whatsapp-image-2024-11-18-at-22.58.44.jpeg"
          alt="Torcida do Mirassol FC"
          fill
          className="object-cover scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
      </div>

      {/* Animated stripes decoration */}
      <div className="absolute inset-0 pattern-stripes opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 px-4 py-2 mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
          <span className="text-secondary text-sm font-medium uppercase tracking-wider">
            Série A 2025 - 100 Anos de História
          </span>
        </div>

        <h1
          className={`font-[family-name:var(--font-oswald)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight mb-6 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-foreground">O Leão da</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-secondary">
            Alta Araraquarense
          </span>
        </h1>

        <p
          className={`text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed text-pretty transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Tradição, garra e paixão. Um século de história fazendo o coração de
          milhares de torcedores bater mais forte. Pela primeira vez na elite do
          futebol brasileiro.
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Link
            href="#sobre"
            className="btn-glow bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 w-full sm:w-auto"
          >
            Conheça o Clube
          </Link>
          <Link
            href="#elenco"
            className="border-2 border-secondary/50 text-foreground px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-secondary/10 hover:border-secondary transition-all duration-300 w-full sm:w-auto"
          >
            Nosso Elenco
          </Link>
        </div>

        {/* Stats bar */}
        <div
          className={`flex flex-wrap justify-center gap-8 md:gap-16 mt-16 pt-8 border-t border-border/50 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center">
            <p className="font-[family-name:var(--font-oswald)] text-3xl md:text-4xl font-bold text-primary">
              100
            </p>
            <p className="text-muted-foreground text-xs uppercase tracking-wider">
              Anos
            </p>
          </div>
          <div className="text-center">
            <p className="font-[family-name:var(--font-oswald)] text-3xl md:text-4xl font-bold text-primary">
              1ª
            </p>
            <p className="text-muted-foreground text-xs uppercase tracking-wider">
              Divisão
            </p>
          </div>
          <div className="text-center">
            <p className="font-[family-name:var(--font-oswald)] text-3xl md:text-4xl font-bold text-primary">
              31
            </p>
            <p className="text-muted-foreground text-xs uppercase tracking-wider">
              Atletas
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <Link
            href="#sobre"
            aria-label="Rolar para baixo"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs uppercase tracking-wider">Explorar</span>
            <ChevronDown className="animate-bounce" size={24} />
          </Link>
        </div>
      </div>
    </section>
  );
}
