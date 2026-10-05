import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/app/config/projects";
import { UnderConstruction } from "@/app/components/ui/UnderConstruction";
import { Icon } from "@/app/components/ui/Icon";

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolved = await params;
  const project = projects.find((p) => p.id === resolved.slug);
  if (!project) {
    return {
      title: "Projeto não encontrado",
      description: "O projeto solicitado não está disponível.",
      robots: { index: false, follow: false },
    };
  }

  const baseTitle = `${project.title} — ${project.category}`;
  const baseDescription =
    project.details.impact && project.description.length < 160
      ? `${project.description} ${project.details.impact}`
      : project.description;
  const tags = project.tags.join(", ");

  return {
    title: baseTitle,
    description: baseDescription,
    keywords: [project.category, ...project.tags, project.title, "Projeto de Dados", "ASGC Devolp"],
    alternates: {
      canonical: `/projects/${project.id}`,
    },
    openGraph: {
      type: "article",
      title: baseTitle,
      description: baseDescription,
      url: `/projects/${project.id}`,
      tags,
    },
    twitter: {
      card: "summary_large_image",
      title: baseTitle,
      description: baseDescription,
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const resolvedParams = await params;
  
  // Busca o projeto pelo ID na base real
  const project = projects.find((p) => p.id === resolvedParams.slug);

  if (!project) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-16">
        <UnderConstruction
          title="Projeto não encontrado"
          description="O projeto que você está tentando acessar não existe ou foi movido."
          backHref="/projects"
        />
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-10">
      {/* Voltar */}
      <div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-accent transition-colors"
        >
          &larr; Voltar para Todos os Projetos
        </Link>
      </div>

      {/* Cabeçalho */}
      <div className="space-y-4 border-b border-border/60 pb-6">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-accent/10 text-accent border border-accent/20">
            {project.category}
          </span>
          {project.highlight && (
            <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded">
              Destaque Real
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          {project.title}
        </h1>

        <p className="text-base text-text-secondary leading-relaxed">
          {project.description}
        </p>

        {/* Links de Ação Directa */}
        <div className="flex flex-wrap gap-3 pt-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-background hover:bg-surface-hover border border-border text-foreground hover:text-accent text-sm font-medium transition-all"
            >
              <Icon name="github" size={16} />
              <span>Ver Repositório ↗</span>
            </a>
          )}
          {project.deployUrl && (
            <a
              href={project.deployUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <span>Acessar Aplicação Rodando ↗</span>
            </a>
          )}
        </div>
      </div>

      {/* Métricas e Indicadores de Impacto (Se disponível) */}
      {project.details.impact && (
        <div className="p-4 rounded-xl bg-accent/5 border border-accent/20 space-y-1">
          <p className="text-xs font-bold uppercase tracking-wider text-accent">Impacto & Resultados Operacionais</p>
          <p className="text-sm font-medium text-foreground">{project.details.impact}</p>
        </div>
      )}

      {/* Seção Estruturada de Arquitetura & Engenharia */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold tracking-tight text-foreground">
          Documentação Técnica & Decisões de Arquitetura
        </h2>

        <div className="grid grid-cols-1 gap-6">
          {/* Motivação de Negócio */}
          <div className="p-5 rounded-lg border border-border/60 bg-surface/40 space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-accent">
              01. Motivação & Contexto
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              {project.details.motivation}
            </p>
          </div>

          {/* Solução Aplicada */}
          <div className="p-5 rounded-lg border border-border/60 bg-surface/40 space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-accent">
              02. Solução Técnica & Implementação
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              {project.details.solution}
            </p>
          </div>

          {/* Stack Tecnológica Detalhada */}
          <div className="p-5 rounded-lg border border-border/60 bg-surface/40 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-accent">
              03. Arquitetura & Ecossistema de Ferramentas
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-text-secondary">
              {project.details.techStack.map((tech) => (
                <li key={tech} className="flex items-center gap-2 p-2 rounded bg-background border border-border/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="font-medium text-foreground">{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Tag Cloud */}
      <div className="pt-4 border-t border-border/60 space-y-3">
        <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
          Tags e Tecnologias
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-md bg-surface border border-border/60 text-foreground font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}