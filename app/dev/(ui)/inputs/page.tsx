"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/app/components/ui/Card";
import { FormField } from "@/app/components/ui/FormField";
import { Input } from "@/app/components/ui/Input";
import { TextArea } from "@/app/components/ui/TextArea";

export default function InputsDevPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Galeria de Inputs & Formulários</h2>
        <p className="text-sm text-text-secondary">
          Componentes de entrada de dados, campos de texto e invólucros de validação.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Campos de Texto Simples */}
        <Card>
          <CardHeader>
            <CardTitle>Input Simples</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField label="Nome Completo" htmlFor="input-name">
              <Input id="input-name" placeholder="Digite seu nome..." />
            </FormField>

            <FormField label="E-mail" htmlFor="input-email">
              <Input id="input-email" type="email" placeholder="seuemail@exemplo.com" />
            </FormField>

            <FormField label="Campo Desabilitado" htmlFor="input-disabled">
              <Input id="input-disabled" disabled value="Conteúdo apenas para leitura" />
            </FormField>
          </CardContent>
        </Card>

        {/* Estados de Validação e Erro */}
        <Card>
          <CardHeader>
            <CardTitle>Estados de Validação</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              label="Campo Obrigatório com Erro"
              htmlFor="input-error"
              required
              error="Por favor, insira um e-mail válido."
            >
              <Input
                id="input-error"
                type="email"
                defaultValue="email-invalido"
                error="Erro de validação"
              />
            </FormField>

            <FormField
              label="Senha"
              htmlFor="input-password"
              required
            >
              <Input id="input-password" type="password" placeholder="••••••••" />
            </FormField>
          </CardContent>
        </Card>

        {/* Área de Texto (TextArea) */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Área de Texto (TextArea)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              label="Mensagem ou Descrição"
              htmlFor="input-textarea"
              required
            >
              <TextArea
                id="input-textarea"
                rows={4}
                placeholder="Escreva sua mensagem detalhada aqui..."
              />
            </FormField>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}