import { notFound } from "next/navigation";
import Link from "next/link";
import { references } from "@/app/config/references";
import { UnderConstruction } from "@/app/components/ui/UnderConstruction";

interface ReferenceDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return references.map((ref) => ({
    slug: ref.id,
  }));
}

export default async function ReferenceDetailPage({ params }: ReferenceDetailPageProps) {
  const resolvedParams = await params;
  const reference = references.find((r) => r.id === resolvedParams.slug);

  if (!reference) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-16">
        <UnderConstruction
          title="Referência não encontrada"
          description="A fonte de aprendizado que você está tentando acessar não está disponível."
          backHref="/references"
        />
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <div>
        <Link href="/references" className="text-xs text-text-secondary hover:text-accent transition-colors">
          &larr; Voltar para Todas as Referências
        </Link>
      </div>

      <div className="space-y-3 border-b border-border pb-6">
        <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-accent/10 text-accent border border-accent/20">
          {reference.category}
        </span>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">{reference.title}</h1>
        <p className="text-base text-text-secondary leading-relaxed">{reference.description}</p>
      </div>

      <div className="flex gap-4 pt-2">
        <a
          href={reference.url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-md bg-accent text-white text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Acessar Canal / Plataforma Oficial ↗
        </a>
      </div>

      <section className="space-y-4 pt-4 border-t border-border">
        <h2 className="text-xl font-semibold text-foreground">Sobre a Base de Conhecimento</h2>
        <div className="bg-surface/50 border border-border p-6 rounded-lg text-sm text-text-secondary space-y-4 leading-relaxed">
          <p>{reference.detailedContent || "Conteúdo formativo essencial que fundamenta a evolução técnica e metodológica aplicada aos projetos."}</p>
        </div>
      </section>
    </main>
  );
}