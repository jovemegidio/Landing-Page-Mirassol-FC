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
  return (
    <section id="estadio" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Stadium Image */}
          <div className="order-2 lg:order-1">
            <div className="aspect-video relative overflow-hidden group">
              <Image
                src="https://s2-ge.glbimg.com/rC5k4oH-NkW63WcQeP0HqQMJYhY=/0x0:1280x720/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/p/f/2M5fOaSOaAp41H3P2aZA/maiao-estadio-mirassol.jpg"
                alt="Estádio José Maria de Campos Maia - Maião"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-[family-name:var(--font-oswald)] text-2xl font-bold text-foreground uppercase">
                  Estádio Maião
                </p>
                <p className="text-muted-foreground text-sm">
                  Casa do Leão desde 1961
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Nossa Casa
            </p>
            <h2 className="font-[family-name:var(--font-oswald)] text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6 text-foreground">
              Estádio José Maria de Campos Maia
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Carinhosamente conhecido como Maião, nosso estádio é a casa do
              Leão desde 1961. Com capacidade para 15 mil torcedores, o Maião é
              palco de grandes emoções e vitórias memoráveis. É onde a torcida
              se une para apoiar o Mirassol em cada partida.
            </p>

            <div className="space-y-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-4 p-4 bg-muted border border-border hover:border-primary/50 transition-colors"
                >
                  <feature.icon className="text-primary shrink-0" size={24} />
                  <div>
                    <p className="font-semibold text-foreground mb-1">
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
