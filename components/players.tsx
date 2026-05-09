"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const positions = ["Todos", "Goleiros", "Defensores", "Meio-Campo", "Atacantes"];

const players = [
  { name: "Alex Muralha", number: "1", position: "Goleiros" },
  { name: "Lucão", number: "3", position: "Defensores" },
  { name: "João Victor", number: "4", position: "Defensores" },
  { name: "Luiz Otávio", number: "13", position: "Defensores" },
  { name: "Daniel Borges", number: "2", position: "Defensores" },
  { name: "Zeca", number: "6", position: "Defensores" },
  { name: "Lucas Ramon", number: "36", position: "Defensores" },
  { name: "Danielzinho", number: "5", position: "Meio-Campo" },
  { name: "Gabriel", number: "8", position: "Meio-Campo" },
  { name: "Neto Moura", number: "28", position: "Meio-Campo" },
  { name: "Chico Kim", number: "7", position: "Meio-Campo" },
  { name: "Isaque", number: "10", position: "Meio-Campo" },
  { name: "Fernandinho", number: "77", position: "Meio-Campo" },
  { name: "Yuri Lima", number: "9", position: "Atacantes" },
  { name: "Dellatorre", number: "11", position: "Atacantes" },
  { name: "Guilherme Pato", number: "17", position: "Atacantes" },
  { name: "Iury Castilho", number: "19", position: "Atacantes" },
  { name: "Negueba", number: "21", position: "Atacantes" },
];

export function Players() {
  const [activePosition, setActivePosition] = useState("Todos");

  const filteredPlayers =
    activePosition === "Todos"
      ? players
      : players.filter((p) => p.position === activePosition);

  return (
    <section id="elenco" className="py-24 md:py-32 bg-muted relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Elenco 2025
          </p>
          <h2 className="font-[family-name:var(--font-oswald)] text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
            Nossos Guerreiros
          </h2>
        </div>

        {/* Position Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {positions.map((position) => (
            <button
              key={position}
              onClick={() => setActivePosition(position)}
              className={cn(
                "px-4 py-2 text-sm uppercase tracking-wider font-medium transition-colors",
                activePosition === position
                  ? "bg-primary text-primary-foreground"
                  : "bg-accent text-accent-foreground hover:bg-accent/80"
              )}
            >
              {position}
            </button>
          ))}
        </div>

        {/* Players Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredPlayers.map((player) => (
            <div
              key={player.name}
              className="bg-background border border-border p-4 hover:border-primary/50 transition-all group cursor-pointer"
            >
              <div className="aspect-square bg-accent mb-3 flex items-center justify-center relative overflow-hidden">
                <span className="font-[family-name:var(--font-oswald)] text-6xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                  {player.number}
                </span>
              </div>
              <p className="text-primary text-xs uppercase tracking-wider mb-1">
                {player.position}
              </p>
              <p className="font-[family-name:var(--font-oswald)] text-lg font-semibold text-foreground uppercase">
                {player.name}
              </p>
              <p className="text-muted-foreground text-sm">#{player.number}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
