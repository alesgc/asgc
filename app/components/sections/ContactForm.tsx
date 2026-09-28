"use client";

import { useState, FormEvent } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/app/components/ui/Card";
import { FormField } from "@/app/components/ui/FormField";
import { Input } from "@/app/components/ui/Input";
import { TextArea } from "@/app/components/ui/TextArea";
import { Button } from "@/app/components/ui/Button";

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    // Simulação de envio da mensagem
    setTimeout(() => {
      setIsLoading(false);
      setIsSent(true);
    }, 1200);
  }

  return (
    <Card className="max-w-xl mx-auto">
      <CardHeader>
        <CardTitle>Me envie uma mensagem</CardTitle>
      </CardHeader>

      <CardContent>
        {isSent ? (
          <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg text-center space-y-2">
            <p className="text-foreground font-medium">Mensagem enviada com sucesso!</p>
            <p className="text-sm text-text-secondary">Em breve entrarei em contato.</p>
            <Button
              variant="outline"
              className="mt-2"
              onClick={() => setIsSent(false)}
            >
              Enviar outra mensagem
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <FormField label="Nome" htmlFor="name" required>
              <Input id="name" name="name" placeholder="Seu nome completo" required />
            </FormField>

            <FormField label="E-mail" htmlFor="email" required>
              <Input id="email" name="email" type="email" placeholder="seu@email.com" required />
            </FormField>

            <FormField label="Telefone" htmlFor="phone">
              <Input id="phone" name="phone" placeholder="(11) 99999-9999" />
            </FormField>

            <FormField label="Mensagem" htmlFor="message" required>
              <TextArea
                id="message"
                name="message"
                placeholder="Escreva sua mensagem aqui..."
                rows={4}
                required
              />
            </FormField>

            <Button type="submit" variant="primary" isLoading={isLoading} className="w-full">
              Enviar Mensagem
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}