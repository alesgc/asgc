import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";

interface UnderConstructionProps {
  title: string;
  description?: string;
  backHref?: string;
}

export function UnderConstruction({
  title,
  description = "Esta seção está em desenvolvimento e estará disponível em breve.",
  backHref = "/dev",
}: UnderConstructionProps) {
  return (
    <div className="flex items-center justify-center min-h-[50vh] p-4">
      <Card className="max-w-md text-center space-y-4">
        <CardHeader>
          <div className="text-4xl mb-2">🚧</div>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Link href={backHref}>
            <Button variant="outline" size="md">
                Voltar para {backHref === "/dev" ? "Início DEV" : "Início"}
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}