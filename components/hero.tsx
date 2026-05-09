import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export function Hero() {
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
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <p className="text-primary uppercase tracking-[0.3em] text-sm md:text-base font-medium mb-6">
          Fundado em 1925
        </p>

        <h1 className="font-[family-name:var(--font-oswald)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight mb-6 text-balance">
          <span className="text-foreground">O Leão da</span>
          <br />
          <span className="text-primary">Alta Araraquarense</span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          Tradição, garra e paixão. Quase um século de história fazendo o
          coração de milhares de torcedores bater mais forte.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#sobre"
            className="bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-primary/90 transition-colors w-full sm:w-auto"
          >
            Conheça o Clube
          </Link>
          <Link
            href="#elenco"
            className="border border-foreground/20 text-foreground px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-foreground/5 transition-colors w-full sm:w-auto"
          >
            Nosso Elenco
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Link href="#sobre" aria-label="Rolar para baixo">
            <ChevronDown className="text-muted-foreground" size={32} />
          </Link>
        </div>
      </div>
    </section>
  );
}
