"use client";

import { useState } from "react";
import Link from "next/link";
import { references, referenceCategories, ReferenceCategory } from "@/app/config/references";
import { UnderConstruction } from "@/app/components/ui/UnderConstruction";

export function ReferencesSection() {
  const [selectedCategory, setSelectedCategory] = useState<ReferenceCategory>("Todos");

  const filteredReferences =
    selectedCategory === "Todos"
      ? references
      : references.filter((item) => item.category === selectedCategory);

  // Limita a exibição na home entre 0 e 9 itens (Preview)
  const previewReferences = filteredReferences.slice(0, 9);

  return (
    <section id="referencias" className="py-12 space-y-6">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Formação & Referências
        </h2>
        <p className="text-sm text-text-secondary">
          Minha trajetória acadêmica, cursos e os canais e plataformas que acompanho para ficar atualizado em dados e tecnologia.
        </p>
      </div>

      {/* Filtros por Categoria (Abas) */}
      <div className="flex flex-wrap gap-2 pb-2" role="tablist" aria-label="Filtrar formação e referências por categoria">
        {referenceCategories.map((category) => {
          const categoryCount =
            category === "Todos"
              ? references.length
              : references.filter((item) => item.category === category).length;

          return (
            <button
              key={category}
              role="tab"
              aria-selected={selectedCategory === category}
              aria-controls={`referencias-lista-${category.toLowerCase()}`}
              onClick={() => setSelectedCategory(category)}
              className={`group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedCategory === category
                  ? "bg-accent text-white shadow-sm shadow-accent/20"
                  : "bg-surface/50 border border-border text-text-secondary hover:text-foreground hover:border-accent/40 hover:bg-accent/3"
              }`}
            >
              <span>{category}</span>
              <span
                aria-hidden="true"
                className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full transition-colors ${
                  selectedCategory === category
                    ? "bg-white/15 text-white"
                    : "bg-foreground/5 text-text-secondary group-hover:bg-accent/10 group-hover:text-accent"
                }`}
              >
                {categoryCount}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid de Cards Minimalistas e Compactos */}
      {previewReferences.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {previewReferences.map((item, index) => (
            <div
              key={item.id}
              className={`p-4 rounded-lg bg-surface/40 border border-border hover:border-accent/40 transition-all flex flex-col justify-between gap-3 animate-fade-in delay-${(index % 4) + 1}`}
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-accent/10 text-accent border border-accent/20">
                    {item.category}
                  </span>
                </div>

                <Link href={`/references/${item.id}`} className="block group">
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors leading-tight">
                    {item.title} &rarr;
                  </h3>
                </Link>

                <p className="text-xs text-text-secondary line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Ações compactas no rodapé do card */}
              <div className="flex items-center justify-between text-[11px] font-medium pt-2 border-t border-border/40">
                <Link
                  href={`/references/${item.id}`}
                  className="text-accent hover:underline"
                >
                  Detalhes
                </Link>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-foreground transition-colors flex items-center gap-0.5"
                >
                  Visitar ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <UnderConstruction
          title="Em Manutenção"
          description="Nenhuma referência encontrada nesta categoria no momento."
          backHref="/"
        />
      )}

      {/* Rodapé Indicativo para a listagem completa */}
      <div className="flex justify-center pt-6 border-t border-border/40">
        <Link
          href="/references"
          className="px-6 py-2.5 rounded-lg bg-surface border border-border text-foreground hover:border-accent/50 text-sm font-semibold transition-all shadow-sm flex items-center gap-2 group"
        >
          Conhecer lista completa de referências 
          <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
        </Link>
      </div>
    </section>
  );
}