import { Trophy, Users, Calendar, MapPin } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: "1925",
    label: "Ano de Fundação",
  },
  {
    icon: Trophy,
    value: "99",
    label: "Anos de História",
  },
  {
    icon: Users,
    value: "50K+",
    label: "Torcedores",
  },
  {
    icon: MapPin,
    value: "Mirassol",
    label: "Cidade Sede",
  },
];

export function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Nossa História
            </p>
            <h2 className="font-[family-name:var(--font-oswald)] text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6 text-foreground">
              Tradição que se renova a cada jogo
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                O Mirassol Futebol Clube foi fundado em 5 de março de 1925, na
                cidade de Mirassol, interior de São Paulo. Conhecido
                carinhosamente como o Leão da Alta Araraquarense, o clube
                carrega quase um século de história, superação e conquistas.
              </p>
              <p>
                Com suas cores amarelo e verde, o Mirassol representa não apenas
                uma equipe de futebol, mas um símbolo de orgulho para toda a
                região. O clube tem se destacado nas competições estaduais e
                nacionais, provando que dedicação e trabalho duro levam ao
                sucesso.
              </p>
              <p>
                Hoje, o Mirassol FC segue firme em sua trajetória, investindo em
                infraestrutura, categorias de base e no profissionalismo que faz
                do clube uma referência no futebol paulista.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-muted p-6 md:p-8 border border-border hover:border-primary/50 transition-colors group"
              >
                <stat.icon
                  className="text-primary mb-4 group-hover:scale-110 transition-transform"
                  size={32}
                />
                <p className="font-[family-name:var(--font-oswald)] text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
