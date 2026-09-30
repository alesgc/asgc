"use client";

import { useState } from "react";
import Link from "next/link";
import { projects, projectCategories, ProjectCategory } from "@/app/config/projects";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/app/components/ui/Card";
import { UnderConstruction } from "@/app/components/ui/UnderConstruction";

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("Todos");

  const filteredProjects =
    selectedCategory === "Todos"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  // Limita a exibição na home em até 4 projetos
  const previewProjects = filteredProjects.slice(0, 4);

  return (
    <section id="projetos" className="py-12 space-y-6">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">Projetos</h2>
        <p className="text-sm text-text-secondary">
          Aplicações, scripts de automação, consultas SQL e análises de dados desenvolvidas.
        </p>
      </div>

      {/* Filtros por Categoria (Abas) */}
      <div className="flex flex-wrap gap-2 pb-2">
        {projectCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
              selectedCategory === category
                ? "bg-accent text-white shadow-sm"
                : "bg-surface border border-border text-text-secondary hover:text-foreground hover:border-accent/40"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Renderização Condicional baseada na regra de quantidade */}
      {previewProjects.length === 0 ? (
        <UnderConstruction title="Nenhum projeto encontrado nesta categoria no momento. Estamos atualizando o portfólio!" />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Mapeamento dos Projetos Reais */}
          {previewProjects.map((project) => (
            <Card key={project.id} className="h-full flex flex-col justify-between border-border/60 hover:border-accent/40 transition-colors bg-surface/40">
              <div>
                <CardHeader className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-accent/10 text-accent border border-accent/20">
                      {project.category}
                    </span>
                    {project.highlight && (
                      <span className="text-[10px] font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                        Destaque
                      </span>
                    )}
                  </div>
                  
                  <Link href={`/projects/${project.id}`} className="block group">
                    <CardTitle className="text-lg group-hover:text-accent transition-colors">
                      {project.title} &rarr;
                    </CardTitle>
                  </Link>

                  <CardDescription className="text-xs text-text-secondary leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
              </div>

              <CardContent className="space-y-4 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2 py-0.5 rounded bg-background border border-border/60 text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-medium pt-2 border-t border-border/40">
                  <Link
                    href={`/projects/${project.id}`}
                    className="text-accent hover:underline font-semibold"
                  >
                    Ver Documentação
                  </Link>

                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary hover:text-accent transition-colors"
                      >
                        GitHub ↗
                      </a>
                    )}
                    {project.deployUrl && (
                      <a
                        href={project.deployUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary hover:text-accent transition-colors"
                      >
                        Deploy ↗
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Card Exclusivo de "Em Construção" quando houver exatamente 1 projeto filtrado */}
          {previewProjects.length === 1 && (
            <Card className="h-full flex flex-col justify-between border-dashed border-border/60 bg-surface/20 opacity-85 hover:opacity-100 transition-opacity">
              <CardHeader className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-surface border border-border text-text-secondary">
                    Em Breve
                  </span>
                </div>
                <CardTitle className="text-lg text-text-secondary">
                  Novas Automações & Cases
                </CardTitle>
                <CardDescription className="text-xs text-text-secondary leading-relaxed">
                  Trabalhos adicionais em engenharia de dados, consultas SQL e automações com Python estão sendo documentados para disponibilização.
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-2">
                <div className="p-3 rounded-lg bg-background/50 border border-border/40 text-center">
                  <p className="text-xs text-text-secondary font-medium">
                    ⚡ Próximo projeto em fase de estruturação
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {/* Footer Indicativo para a listagem completa */}
      <div className="flex justify-center pt-6 border-t border-border/40">
        <Link
          href="/projects"
          className="px-6 py-2.5 rounded-lg bg-surface border border-border text-foreground hover:border-accent/50 text-sm font-semibold transition-all shadow-sm flex items-center gap-2 group"
        >
          Conhecer lista completa de projetos 
          <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
        </Link>
      </div>
    </section>
  );
}