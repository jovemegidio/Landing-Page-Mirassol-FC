import { MapPin, Users, Ticket } from "lucide-react";

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
    title: "Jogos em Casa",
    description: "Experiência única para a torcida",
  },
];

export function Stadium() {
  return (
    <section id="estadio" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image placeholder */}
          <div className="order-2 lg:order-1">
            <div className="aspect-video bg-muted border border-border relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-[family-name:var(--font-oswald)] text-4xl md:text-5xl font-bold text-foreground uppercase">
                    Estádio
                  </p>
                  <p className="font-[family-name:var(--font-oswald)] text-2xl md:text-3xl font-bold text-primary uppercase">
                    Maião
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
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
