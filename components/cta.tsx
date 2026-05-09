import Link from "next/link";
import Image from "next/image";
import { Heart, Gift, Star, Ticket } from "lucide-react";

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

export function CTA() {
  return (
    <section id="socio" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://s2-ge.glbimg.com/5g1l8Ym6zWPZqQKjdLMY4pXiLhE=/0x0:1280x854/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/U/Z/8GKSNTTqqAAAJZ0q2QlQ/mirassol-torcida.jpg"
          alt="Torcida do Mirassol"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/90" />
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-primary" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Faça Parte
          </p>
          <h2 className="font-[family-name:var(--font-oswald)] text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-foreground mb-4 text-balance">
            Seja Sócio do Leão
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Junte-se à família Mirassol e tenha acesso a benefícios exclusivos.
            Apoie o clube do seu coração em todos os momentos.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-background border border-border p-6 text-center hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-[family-name:var(--font-oswald)] text-xl font-semibold text-foreground uppercase mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="#contato"
            className="inline-block bg-primary text-primary-foreground px-10 py-5 text-lg font-semibold uppercase tracking-wider hover:bg-primary/90 transition-colors"
          >
            Quero ser Sócio
          </Link>
          <p className="text-muted-foreground text-sm mt-4">
            A partir de R$ 29,90/mês
          </p>
        </div>
      </div>
    </section>
  );
}
