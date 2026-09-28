import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/app/components/ui/Card";

export default function DevPage() {
  const modules = [
    { name: "Botões & Badges", href: "/dev/buttons", description: "Variantes de botões e tags de tecnologia." },
    { name: "Inputs & Formulários", href: "/dev/inputs", description: "Campos de texto, textarea e wrappers de validação." },
    { name: "Cards", href: "/dev/cards", description: "Containers modulares para seções e itens." },
    { name: "Tabelas", href: "/dev/tables", description: "Exibição de dados tabulares e estruturados." },
    { name: "Organismos", href: "/dev/organisms", description: "Formulário de contato e grid de projetos montados." },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Galeria de Componentes</h2>
        <p className="text-sm text-text-secondary">Escolha um módulo abaixo para visualizar e testar os componentes isoladamente.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {modules.map((mod) => (
          <Link key={mod.href} href={mod.href}>
            <Card className="h-full hover:border-accent transition-colors cursor-pointer">
              <CardHeader>
                <CardTitle>{mod.name}</CardTitle>
                <CardDescription>{mod.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}