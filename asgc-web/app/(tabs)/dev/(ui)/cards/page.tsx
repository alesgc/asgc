"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { Badge } from "@/app/components/ui/Badge";

export default function CardsDevPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Galeria de Cards</h2>
        <p className="text-sm text-text-secondary">
          Containers modulares utilizados para agrupar conteúdos, seções e exibições estruturadas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card Simples */}
        <Card>
          <CardHeader>
            <CardTitle>Card Básico</CardTitle>
            <CardDescription>Estrutura básica de um container isolado.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-text-secondary">
              Este é o corpo principal do card. Ele aceita qualquer elemento React como conteúdo filho.
            </p>
          </CardContent>
        </Card>

        {/* Card com Ações no Rodapé */}
        <Card>
          <CardHeader>
            <CardTitle>Card com Ações</CardTitle>
            <CardDescription>Exemplo com cabeçalho, conteúdo e botões no rodapé.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-text-secondary">
              Você pode usar o <code className="text-accent">&lt;CardFooter&gt;</code> para alinhar ações e botões principais.
            </p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="ghost" size="sm">Cancelar</Button>
            <Button variant="primary" size="sm">Confirmar</Button>
          </CardFooter>
        </Card>

        {/* Card de Projeto (Simulação) */}
        <Card className="md:col-span-2 hover:border-accent transition-colors">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>Sistema de Otimização SQL</CardTitle>
                <CardDescription>Projeto de backend e banco de dados relacional.</CardDescription>
              </div>
              <div className="flex gap-2">
                <Badge variant="accent">SQL</Badge>
                <Badge variant="outline">PostgreSQL</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-foreground">
              Ajuste fino de consultas, indexação e criação de procedures para relatórios em alto volume de dados.
            </p>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button variant="outline" size="sm">Ver Detalhes</Button>
            <Button variant="secondary" size="sm">Repositório GitHub</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}