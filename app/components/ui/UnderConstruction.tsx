import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";

interface UnderConstructionProps {
  title?: string;
  description?: string;
  backHref?: string;
}

export function UnderConstruction({
  title = "Em Construção",
  description = "Esta seção está em desenvolvimento e estará disponível em breve.",
  backHref = "/",
}: UnderConstructionProps) {
  // Define o texto dinâmico do botão com base no link de retorno
  const getButtonLabel = (href: string) => {
    if (href === "/projects") return "Lista de Projetos";
    return "Página Inicial";
  };

  return (
    <div className="flex items-center justify-center min-h-[40vh] p-4 w-full">
      <Card className="max-w-md w-full text-center space-y-4 border-border/60 bg-surface/50">
        <CardHeader className="space-y-2">
          <div className="text-4xl mb-1 animate-pulse">🚧</div>
          <CardTitle className="text-xl tracking-tight text-foreground">{title}</CardTitle>
          <CardDescription className="text-xs text-text-secondary leading-relaxed">{description}</CardDescription>
        </CardHeader>
        <CardContent className="pt-2">
          <Link href={backHref} className="inline-block w-full">
            <Button variant="outline" size="md" className="w-full">
              Voltar para {getButtonLabel(backHref)}
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}