"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const positions = [
  "Todos",
  "Goleiros",
  "Defensores",
  "Volantes",
  "Meias",
  "Atacantes",
];

// Elenco oficial 2025 - Série A
const players = [
  // Goleiros
  { name: "Alex Muralha", number: "1", position: "Goleiros" },
  { name: "Walter", number: "12", position: "Goleiros" },
  { name: "Thomazella", number: "22", position: "Goleiros" },
  { name: "Gustavo Lacerda", number: "32", position: "Goleiros" },
  // Defensores (Zagueiros e Laterais)
  { name: "Alan Empereur", number: "3", position: "Defensores" },
  { name: "David Braz", number: "4", position: "Defensores" },
  { name: "Jemmes", number: "14", position: "Defensores" },
  { name: "João Victor", number: "44", position: "Defensores" },
  { name: "Luiz Otávio", number: "13", position: "Defensores" },
  { name: "Daniel Borges", number: "2", position: "Defensores" },
  { name: "Lucas Ramon", number: "36", position: "Defensores" },
  { name: "Reinaldo", number: "6", position: "Defensores" },
  { name: "PH", number: "16", position: "Defensores" },
  { name: "Wesley Santos", number: "26", position: "Defensores" },
  // Volantes
  { name: "Matheus Sales", number: "5", position: "Volantes" },
  { name: "Neto Moura", number: "28", position: "Volantes" },
  { name: "Roni", number: "8", position: "Volantes" },
  { name: "Zé Vitor", number: "18", position: "Volantes" },
  // Meias
  { name: "Danielzinho", number: "10", position: "Meias" },
  { name: "Gabriel", number: "7", position: "Meias" },
  { name: "Chico Kim", number: "20", position: "Meias" },
  { name: "José Aldo", number: "23", position: "Meias" },
  // Atacantes
  { name: "Clayson", number: "11", position: "Atacantes" },
  { name: "Negueba", number: "21", position: "Atacantes" },
  { name: "Fabrício Daniel", number: "9", position: "Atacantes" },
  { name: "Iury Castilho", number: "19", position: "Atacantes" },
  { name: "Léo Gamalho", number: "99", position: "Atacantes" },
  { name: "Luiz Filipe", number: "17", position: "Atacantes" },
  { name: "Maceió", number: "27", position: "Atacantes" },
  { name: "Matheus Davó", number: "29", position: "Atacantes" },
  { name: "Rafa Silva", number: "37", position: "Atacantes" },
];

const getPositionColor = (position: string) => {
  switch (position) {
    case "Goleiros":
      return "from-orange-500/20 to-orange-600/20 border-orange-500/30";
    case "Defensores":
      return "from-blue-500/20 to-blue-600/20 border-blue-500/30";
    case "Volantes":
      return "from-purple-500/20 to-purple-600/20 border-purple-500/30";
    case "Meias":
      return "from-secondary/20 to-secondary/30 border-secondary/30";
    case "Atacantes":
      return "from-primary/20 to-primary/30 border-primary/30";
    default:
      return "from-muted to-muted border-border";
  }
};

export function Players() {
  const [activePosition, setActivePosition] = useState("Todos");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredPlayers =
    activePosition === "Todos"
      ? players
      : players.filter((p) => p.position === activePosition);

  return (
    <section
      ref={sectionRef}
      id="elenco"
      className="py-24 md:py-32 bg-muted relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-stripes opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Elenco 2025
          </p>
          <h2 className="font-[family-name:var(--font-oswald)] text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
            Nossos <span className="text-primary">Guerreiros</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            31 atletas prontos para fazer história na primeira temporada do
            Mirassol na Série A
          </p>
        </div>

        {/* Position Filter */}
        <div
          className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {positions.map((position) => (
            <button
              key={position}
              onClick={() => setActivePosition(position)}
              className={cn(
                "px-5 py-2.5 text-sm uppercase tracking-wider font-medium transition-all duration-300 border",
                activePosition === position
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25 scale-105"
                  : "bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
              )}
            >
              {position}
              {position !== "Todos" && (
                <span className="ml-2 text-xs opacity-60">
                  ({players.filter((p) => p.position === position).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Players Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredPlayers.map((player, index) => (
            <div
              key={player.name}
              className={cn(
                "bg-background border p-4 transition-all duration-500 group cursor-pointer hover:scale-105 hover:shadow-xl",
                getPositionColor(player.position),
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${300 + index * 30}ms` }}
            >
              <div
                className={cn(
                  "aspect-square mb-3 flex items-center justify-center relative overflow-hidden bg-gradient-to-br",
                  getPositionColor(player.position)
                )}
              >
                <span className="font-[family-name:var(--font-oswald)] text-5xl md:text-6xl font-bold text-primary/30 group-hover:text-primary/60 group-hover:scale-110 transition-all duration-300">
                  {player.number}
                </span>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <p className="text-primary text-xs uppercase tracking-wider mb-1 font-medium">
                {player.position}
              </p>
              <p className="font-[family-name:var(--font-oswald)] text-base md:text-lg font-semibold text-foreground uppercase leading-tight group-hover:text-primary transition-colors">
                {player.name}
              </p>
              <p className="text-muted-foreground text-sm">#{player.number}</p>
            </div>
          ))}
        </div>

        {/* Stats summary */}
        <div
          className={`flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-border transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center">
            <p className="font-[family-name:var(--font-oswald)] text-2xl font-bold text-primary">
              4
            </p>
            <p className="text-muted-foreground text-xs uppercase">Goleiros</p>
          </div>
          <div className="text-center">
            <p className="font-[family-name:var(--font-oswald)] text-2xl font-bold text-blue-400">
              10
            </p>
            <p className="text-muted-foreground text-xs uppercase">
              Defensores
            </p>
          </div>
          <div className="text-center">
            <p className="font-[family-name:var(--font-oswald)] text-2xl font-bold text-purple-400">
              4
            </p>
            <p className="text-muted-foreground text-xs uppercase">Volantes</p>
          </div>
          <div className="text-center">
            <p className="font-[family-name:var(--font-oswald)] text-2xl font-bold text-secondary">
              4
            </p>
            <p className="text-muted-foreground text-xs uppercase">Meias</p>
          </div>
          <div className="text-center">
            <p className="font-[family-name:var(--font-oswald)] text-2xl font-bold text-primary">
              9
            </p>
            <p className="text-muted-foreground text-xs uppercase">Atacantes</p>
          </div>
        </div>
      </div>
    </section>
  );
}
