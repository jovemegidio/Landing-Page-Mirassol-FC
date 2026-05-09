"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const positions = ["Todos", "Goleiros", "Defensores", "Volantes", "Meias", "Atacantes"];

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
