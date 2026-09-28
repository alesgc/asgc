"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/app/components/ui/Card";
import { Table } from "@/app/components/ui/Table";
import { Badge } from "@/app/components/ui/Badge";

const mockTableData = [
  { id: "1", name: "Otimização de Query SQL", type: "Database", status: "Concluído", date: "2026-03-15" },
  { id: "2", name: "Pipeline ETL Python", type: "Automation", status: "Em Progresso", date: "2026-03-20" },
  { id: "3", name: "Design System ASGC", type: "Frontend", status: "Concluído", date: "2026-03-28" },
  { id: "4", name: "Integração PostgreSQL", type: "Backend", status: "Pendente", date: "2026-04-01" },
];

export default function TablesDevPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Galeria de Tabelas</h2>
        <p className="text-sm text-text-secondary">
          Componentes de exibição de dados estruturados e relacionais.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Tabela de Projetos & Tarefas</CardTitle>
          <CardDescription>Exemplo de dados tabulares com badges de status.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.Head>Nome</Table.Head>
                <Table.Head>Categoria</Table.Head>
                <Table.Head>Status</Table.Head>
                <Table.Head className="text-right">Data</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {mockTableData.map((row) => (
                <Table.Row key={row.id}>
                  <Table.Cell className="font-medium">{row.name}</Table.Cell>
                  <Table.Cell>{row.type}</Table.Cell>
                  <Table.Cell>
                    <Badge
                      variant={
                        row.status === "Concluído"
                          ? "accent"
                          : row.status === "Em Progresso"
                          ? "default"
                          : "outline"
                      }
                    >
                      {row.status}
                    </Badge>
                  </Table.Cell>
                  <Table.Cell className="text-right text-text-secondary">{row.date}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}