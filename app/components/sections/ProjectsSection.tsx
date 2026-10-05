"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { projectCategories, ProjectCategory } from "@/app/config/projects";
import { getGitHubProjects } from "@/lib/services/github";
import { FormattedProject } from "@/types/github";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/app/components/ui/Card";
import { UnderConstruction } from "@/app/components/ui/UnderConstruction";

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("Todos");
  const [projectList, setProjectList] = useState<FormattedProject[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadProjects() {
      try {
        setLoading(true);
        const data = await getGitHubProjects();
        setProjectList(data);
      } catch (error) {
        console.error("Erro ao carregar projetos do GitHub:", error);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  // Filtra projetos conforme a categoria selecionada
  const filteredProjects = projectList.filter((project) => {
    if (selectedCategory === "Todos") return true;

    const lang = project.language?.toLowerCase() || "";
    const topics = project.topics.map((t) => t.toLowerCase());

    if (selectedCategory === "SQL") return lang.includes("sql") || topics.includes("sql");
    if (selectedCategory === "Python") return lang.includes("python") || topics.includes("python");
    if (selectedCategory === "Web") return lang.includes("typescript") || lang.includes("javascript") || topics.includes("web") || topics.includes("nextjs");
    if (selectedCategory === "DataScience") return topics.includes("datascience") || topics.includes("data-analysis") || lang.includes("jupyter") || project.id === "pera";

    return true;
  });

  // Limite máximo de exibição de projetos no preview
  const MAX_DISPLAY = 4;
  const previewProjects = filteredProjects.slice(0, MAX_DISPLAY);

  // Placeholder "Em Breve" desabilitado por auditoria de R&S em 2026-10-05.
  // Regra de portfólio profissional: só exibir projetos finalizados. Reativar apenas quando houver no mínimo 4 projetos reais finalizados.
  // Anterior: previewProjects.length > 0 && previewProjects.length < MAX_DISPLAY
  const showPlaceholderCard = false;

  return (
    <section id="projetos" className="py-12 space-y-6">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">Projetos & Cases</h2>
        <p className="text-sm text-text-secondary">
          Aplicações web, ecossistemas analíticos e soluções de software em destaque.
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

      {/* Carregamento / Vazio / Listagem */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2].map((i) => (
            <div key={i} className="h-52 rounded-lg bg-surface/30 animate-pulse border border-border/40" />
          ))}
        </div>
      ) : previewProjects.length === 0 ? (
        <UnderConstruction title="Nenhum projeto encontrado nesta categoria no momento. Novos repositórios estão sendo sincronizados!" />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Mapeamento dos Projetos Reais */}
          {previewProjects.map((project) => (
            <Card key={project.id} className="h-full flex flex-col justify-between border-border/60 hover:border-accent/40 transition-colors bg-surface/40">
              <div>
                <CardHeader className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-accent/10 text-accent border border-accent/20">
                      {project.language || "Projeto"}
                    </span>
                    <span className="text-[10px] font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                      Destaque
                    </span>
                  </div>
                  
                  <Link href={`/projects/${project.id}`} className="block group">
                    <CardTitle className="text-lg group-hover:text-accent transition-colors">
                      {project.title} &rarr;
                    </CardTitle>
                  </Link>

                  <CardDescription className="text-xs text-text-secondary leading-relaxed line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
              </div>

              <CardContent className="space-y-4 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {project.topics.slice(0, 5).map((tag) => (
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
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary hover:text-accent transition-colors"
                      >
                        GitHub ↗
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
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

          {/* Card Complementar "Em Construção" (aparece enquanto não houver 4 projetos no grid) */}
          {showPlaceholderCard && (
            <Card className="h-full flex flex-col justify-between border-dashed border-border/60 bg-surface/20 opacity-85 hover:opacity-100 transition-opacity">
              <CardHeader className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-surface border border-border text-text-secondary">
                    Em Breve
                  </span>
                </div>
                <CardTitle className="text-lg text-text-secondary">
                  Novas Automações & Pipeline de Dados
                </CardTitle>
                <CardDescription className="text-xs text-text-secondary leading-relaxed">
                  Trabalhos adicionais em engenharia de dados, consultas otimizadas em SQL e automações Python estão sendo documentados no GitHub com a tag portfolio.
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-2">
                <div className="p-3 rounded-lg bg-background/50 border border-border/40 text-center">
                  <p className="text-xs text-text-secondary font-medium">
                    ⚡ Próximo projeto em fase de estruturação e documentação
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