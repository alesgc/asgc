"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/app/components/ui/Card";
import { FormField } from "@/app/components/ui/FormField";
import { Input } from "@/app/components/ui/Input";
import { TextArea } from "@/app/components/ui/TextArea";
import { Button } from "@/app/components/ui/Button";

export default function FormsDevPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    // Simulação de envio do formulário
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Galeria de Formulários</h2>
        <p className="text-sm text-text-secondary">
          Demonstração de composição de formulários completos e tratamento de submissão.
        </p>
      </div>

      <Card className="max-w-xl">
        <CardHeader>
          <CardTitle>Formulário Exemplo</CardTitle>
          <CardDescription>Preencha os dados abaixo para testar o comportamento de envio.</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <FormField label="Nome" htmlFor="form-name" required>
              <Input id="form-name" placeholder="Seu nome" required />
            </FormField>

            <FormField label="E-mail" htmlFor="form-email" required>
              <Input id="form-email" type="email" placeholder="seu.email@exemplo.com" required />
            </FormField>

            <FormField label="Mensagem" htmlFor="form-message" required>
              <TextArea id="form-message" rows={4} placeholder="Digite sua mensagem aqui..." required />
            </FormField>

            {success && (
              <p className="text-xs text-accent font-medium">
                ✓ Formulário enviado com sucesso!
              </p>
            )}
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button type="button" variant="ghost" onClick={() => setSuccess(false)}>
              Limpar
            </Button>
            <Button type="submit" variant="primary" isLoading={loading}>
              Enviar Mensagem
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}