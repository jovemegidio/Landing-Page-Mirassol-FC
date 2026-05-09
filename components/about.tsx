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
  return (
    <section id="sobre" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] relative overflow-hidden">
              <Image
                src="https://s2-ge.glbimg.com/5uFQHgY_D1KpMJTQaZS3eNQbhVE=/0x0:1280x854/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2025/q/g/6TnlpzSXuAARB7aBlVxQ/whatsapp-image-2025-03-18-at-19.27.29.jpeg"
                alt="Time do Mirassol FC"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary p-6">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Mirassol_Futebol_Clube_logo.svg/800px-Mirassol_Futebol_Clube_logo.svg.png"
                alt="Escudo Mirassol"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Nossa História
            </p>
            <h2 className="font-[family-name:var(--font-oswald)] text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6 text-foreground">
              100 Anos de Tradição
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                O Mirassol Futebol Clube foi fundado em 5 de março de 1925, na
                cidade de Mirassol, interior de São Paulo. Conhecido
                carinhosamente como o Leão da Alta Araraquarense, o clube
                completa 100 anos de história em 2025.
              </p>
              <p>
                Em 2024, o Mirassol fez história ao conquistar o acesso inédito
                à Série A do Campeonato Brasileiro, coroando anos de trabalho
                sério e profissionalismo. Sob o comando técnico de Rafael
                Guanaes, o time disputa sua primeira temporada na elite do
                futebol nacional.
              </p>
              <p>
                Com suas cores amarelo e verde, o Mirassol representa não apenas
                uma equipe de futebol, mas um símbolo de orgulho para toda a
                região, provando que dedicação e trabalho duro levam ao sucesso.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-muted p-4 border border-border hover:border-primary/50 transition-colors group"
                >
                  <stat.icon
                    className="text-primary mb-2 group-hover:scale-110 transition-transform"
                    size={24}
                  />
                  <p className="font-[family-name:var(--font-oswald)] text-2xl md:text-3xl font-bold text-foreground mb-1">
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
