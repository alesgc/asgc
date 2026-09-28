"use client";

import { useState } from "react";
import { projects, projectCategories, ProjectCategory } from "@/app/config/projects";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/app/components/ui/Card";

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("Todos");

  const filteredProjects =
    selectedCategory === "Todos"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

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

      {/* Grid de Cards de Projetos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="h-full flex flex-col justify-between border-border hover:border-accent/40 transition-colors">
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
              <CardTitle className="text-lg">{project.title}</CardTitle>
              <CardDescription className="text-xs text-text-secondary leading-relaxed">
                {project.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4 pt-2">
              {/* Tags do projeto */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2 py-0.5 rounded bg-surface border border-border/60 text-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links do projeto */}
              <div className="flex items-center gap-4 text-xs font-medium pt-2 border-t border-border/40">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-accent transition-colors flex items-center gap-1"
                  >
                    GitHub ↗
                  </a>
                )}
                {project.deployUrl && (
                  <a
                    href={project.deployUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-accent transition-colors flex items-center gap-1"
                  >
                    Visualizar ↗
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}