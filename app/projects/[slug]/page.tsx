import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/app/config/projects";
import { UnderConstruction } from "@/app/components/ui/UnderConstruction";

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  // Aguarda a resolução dos parâmetros dinâmicos (padrão Next.js recente)
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.slug);

  // Se o projeto não existir, exibe a tela de manutenção/aviso estilizada
  if (!project) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-16">
        <UnderConstruction
          title="Projeto não encontrado"
          description="O projeto que você está tentando acessar não existe ou foi removido temporariamente."
          backHref="/projects"
        />
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <div>
        <Link href="/projects" className="text-xs text-text-secondary hover:text-accent transition-colors">
          &larr; Voltar para Todos os Projetos
        </Link>
      </div>

      <div className="space-y-3 border-b border-border pb-6">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-accent/10 text-accent border border-accent/20">
            {project.category}
          </span>
          {project.highlight && (
            <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded">
              Destaque
            </span>
          )}
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">{project.title}</h1>
        <p className="text-base text-text-secondary leading-relaxed">{project.description}</p>
      </div>

      <div className="flex flex-wrap gap-4 pt-2">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md bg-surface border border-border text-foreground hover:border-accent/40 text-sm font-medium transition-colors"
          >
            Ver Repositório no GitHub ↗
          </a>
        )}
        {project.deployUrl && (
          <a
            href={project.deployUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md bg-accent text-white text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Acessar Aplicação Rodando ↗
          </a>
        )}
      </div>

      <section className="space-y-4 pt-4 border-t border-border">
        <h2 className="text-xl font-semibold text-foreground">Documentação & Arquitetura</h2>
        <div className="bg-surface/50 border border-border p-6 rounded-lg text-sm text-text-secondary space-y-4 leading-relaxed">
          <p>
            Esta página apresenta os detalhes técnicos estruturados para o projeto <strong>{project.title}</strong>.
          </p>

          <div className="space-y-2 pt-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">Tecnologias Envolvidas:</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs px-2.5 py-1 rounded bg-surface border border-border text-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}