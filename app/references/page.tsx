import Link from "next/link";
import { references } from "@/app/config/references";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/app/components/ui/Card";
import { UnderConstruction } from "@/app/components/ui/UnderConstruction";

export const metadata = {
  title: "Formação & Referências | ASGC Devolp",
  description: "Minha trajetória completa: graduação, cursos profissionalizantes e os canais/plataformas que acompanho para evoluir em dados e tecnologia.",
};

export default function AllReferencesPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 space-y-8">
      <div className="space-y-4 border-b border-border pb-6">
        <Link href="/" className="text-xs text-text-secondary hover:text-accent transition-colors">
          &larr; Voltar para a Página Inicial
        </Link>
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Formação & Referências</h1>
          <p className="text-sm text-text-secondary">
            Da graduação aos canais do YouTube que me acompanham desde o começo. Aqui está tudo o que fundamenta minha formação em dados e engenharia de software.
          </p>
        </div>
      </div>

      {references.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {references.map((ref) => (
            <Card key={ref.id} className="h-full flex flex-col justify-between border-border hover:border-accent/40 transition-colors">
              <CardHeader className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-accent/10 text-accent border border-accent/20">
                    {ref.category}
                  </span>
                </div>
                
                <Link href={`/references/${ref.id}`} className="block group">
                  <CardTitle className="text-base group-hover:text-accent transition-colors">
                    {ref.title} &rarr;
                  </CardTitle>
                </Link>

                <CardDescription className="text-xs text-text-secondary leading-relaxed">
                  {ref.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-2">
                <div className="flex items-center justify-between text-xs font-medium pt-3 border-t border-border/40">
                  <Link href={`/references/${ref.id}`} className="text-accent hover:underline">
                    Ver Detalhes
                  </Link>
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-accent transition-colors"
                  >
                    Visitar ↗
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <UnderConstruction
          title="Nenhuma Referência Cadastrada"
          description="A listagem está temporariamente indisponível."
          backHref="/"
        />
      )}
    </main>
  );
}