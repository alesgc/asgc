import Link from "next/link";
import { projects as realProjects, ProjectItem } from "@/app/config/projects";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/app/components/ui/Card";
import { UnderConstruction } from "@/app/components/ui/UnderConstruction";

export const metadata = {
  title: "Projetos | ASGC Devolp",
  description: "Lista completa de aplicações, scripts e análises de dados desenvolvidas.",
};

interface AllProjectsPageProps {
  projects?: ProjectItem[];
}

export default function AllProjectsPage({ projects = realProjects }: AllProjectsPageProps) {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 space-y-8">
      {/* Cabeçalho */}
      <div className="space-y-4 border-b border-border/60 pb-6">
        <Link href="/" className="text-xs text-text-secondary hover:text-accent transition-colors">
          &larr; Voltar para a Página Inicial
        </Link>
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Todos os Projetos</h1>
          <p className="text-sm text-text-secondary">
            Repositório completo de automações, códigos, bancos de dados estruturados e aplicações web.
          </p>
        </div>
      </div>

      {/* Renderização Condicional: Estado Com Projetos Reais vs Estado Zerado */}
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
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

                <div className="flex items-center justify-between text-xs font-medium pt-3 border-t border-border/40">
                  <Link
                    href={`/projects/${project.id}`}
                    className="text-accent hover:underline font-semibold"
                  >
                    Ver Documentação Completa
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
        </div>
      ) : (
        <UnderConstruction
          title="Nenhum Projeto Cadastrado"
          description="A listagem de projetos está sendo atualizada com novas automações e casos reais. Retorne em breve!"
          backHref="/"
        />
      )}
    </main>
  );
}