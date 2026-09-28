import { siteConfig } from "@/app/config/site";
import { Card, CardHeader, CardTitle, CardDescription } from "@/app/components/ui/Card";

export function ReferencesSection() {
  return (
    <section id="referencias" className="py-12 space-y-6">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Referências e Fontes de Aprendizado
        </h2>
        <p className="text-sm text-text-secondary">
          Canais, plataformas e criadores que fundamentam minha formação técnica e contínua evolução.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {siteConfig.references.map((item) => (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block h-full focus:outline-none"
          >
            <Card className="h-full transition-all duration-200 border-border group-hover:border-accent/40 group-hover:bg-surface/80">
              <CardHeader className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-accent/10 text-accent border border-accent/20">
                    {item.category}
                  </span>
                  <span className="text-xs text-text-secondary group-hover:text-accent transition-colors">
                    ↗
                  </span>
                </div>
                <CardTitle className="text-base group-hover:text-accent transition-colors">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-xs text-text-secondary line-clamp-3">
                  {item.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}