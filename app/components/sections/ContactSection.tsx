"use client";

import { useState } from "react";
import { siteConfig } from "@/app/config/site";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/app/components/ui/Card";
import { FormField } from "@/app/components/ui/FormField";
import { Input } from "@/app/components/ui/Input";
import { TextArea } from "@/app/components/ui/TextArea";
import { Button } from "@/app/components/ui/Button";

export function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1200);
  };

  return (
    <section id="contato" className="py-12 space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-foreground">Contato</h2>
        <p className="text-sm text-text-secondary">
          Fale comigo ou envie uma mensagem diretamente pelo formulário abaixo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Dados de Contato */}
        <Card className="h-full flex flex-col justify-between">
          <CardHeader>
            <CardTitle>Dados para Contato</CardTitle>
            <CardDescription>
              Informações diretas para oportunidades, parcerias e conexões.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div>
              <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider">E-mail</p>
              <a
                href={`mailto:${siteConfig.author.email}`}
                className="text-foreground hover:text-accent font-medium transition-colors"
              >
                {siteConfig.author.email}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider">Celular / WhatsApp</p>
              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent font-medium transition-colors"
              >
                {siteConfig.author.phone}
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Formulário de Mensagem */}
        <Card>
          <CardHeader>
            <CardTitle>Me envie uma mensagem</CardTitle>
            <CardDescription>
              Preencha os campos e entrarei em contato o mais breve possível.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <FormField label="Nome" htmlFor="contact-name" required>
                <Input id="contact-name" placeholder="Seu nome" required />
              </FormField>

              <FormField label="Telefone" htmlFor="contact-phone">
                <Input id="contact-phone" type="tel" placeholder="(11) 99999-9999" />
              </FormField>

              <FormField label="E-mail" htmlFor="contact-email" required>
                <Input id="contact-email" type="email" placeholder="seu.email@exemplo.com" required />
              </FormField>

              <FormField label="Mensagem" htmlFor="contact-message" required>
                <TextArea id="contact-message" rows={4} placeholder="Digite sua mensagem..." required />
              </FormField>

              {success && (
                <p className="text-xs text-accent font-medium">
                  ✓ Mensagem enviada com sucesso!
                </p>
              )}

              <Button type="submit" variant="primary" className="w-full" isLoading={loading}>
                Enviar
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}