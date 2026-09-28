"use client";

import { useState } from "react";
import { siteConfig } from "@/app/config/site";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/app/components/ui/Card";
import { FormField } from "@/app/components/ui/FormField";
import { Input } from "@/app/components/ui/Input";
import { TextArea } from "@/app/components/ui/TextArea";
import { Button } from "@/app/components/ui/Button";
import { Icon } from "@/app/components/ui/Icon";

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
    <section id="contato" className="space-y-8">
      {/* Cabeçalho da Seção */}
      <div className="space-y-1">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">Contato</h2>
        <p className="text-sm text-text-secondary">
          Vamos construir algo incrível juntos? Envie uma mensagem ou conecte-se através dos canais oficiais.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Coluna Esquerda: Canais de Contato Direto */}
        <div className="lg:col-span-5 flex flex-col">
          <Card className="flex-1 flex flex-col justify-between border-border/60 bg-surface/40">
            <CardHeader>
              <CardTitle className="text-lg">Canais Diretos</CardTitle>
              <CardDescription>
                Disponível para oportunidades profissionais e parcerias.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                {/* E-mail */}
                <a
                  href={`mailto:${siteConfig.author.email}`}
                  className="flex items-center gap-3 p-3 rounded-lg bg-background hover:bg-surface-hover border border-border/60 transition-all group"
                >
                  <div className="p-2 rounded-md bg-surface text-accent border border-border">
                    <Icon name="mail" size={18} />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs text-text-secondary font-medium">E-mail</p>
                    <p className="text-foreground text-xs sm:text-sm font-medium truncate group-hover:text-accent transition-colors">
                      {siteConfig.author.email}
                    </p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={siteConfig.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-background hover:bg-surface-hover border border-border/60 transition-all group"
                >
                  <div className="p-2 rounded-md bg-surface text-accent border border-border">
                    <Icon name="whatsapp" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary font-medium">WhatsApp / Telefone</p>
                    <p className="text-foreground text-xs sm:text-sm font-medium group-hover:text-accent transition-colors">
                      {siteConfig.author.phone}
                    </p>
                  </div>
                </a>
              </div>

              {/* Redes Sociais */}
              <div className="pt-4 border-t border-border/50">
                <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-3">Redes Profissionais</p>
                <div className="grid grid-cols-2 gap-2">
                  {siteConfig.socials.map((link) => (
                    <a
                      key={link.id}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-background hover:bg-surface-hover border border-border/60 text-xs font-medium text-foreground hover:text-accent transition-all"
                    >
                      <Icon name={link.iconName} size={16} />
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Coluna Direita: Formulário */}
        <div className="lg:col-span-7 flex flex-col">
          <Card className="border-border/60 bg-surface/40">
            <CardHeader>
              <CardTitle className="text-lg">Envie uma mensagem</CardTitle>
              <CardDescription>
                Preencha os campos abaixo e responderei o mais brevemente possível.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField label="Nome" htmlFor="contact-name" required>
                    <Input id="contact-name" placeholder="Seu nome" required />
                  </FormField>

                  <FormField label="Telefone" htmlFor="contact-phone">
                    <Input id="contact-phone" type="tel" placeholder="(11) 99999-9999" />
                  </FormField>
                </div>

                <FormField label="E-mail" htmlFor="contact-email" required>
                    <Input id="contact-email" type="email" placeholder="seu.email@exemplo.com" required />
                </FormField>

                <FormField label="Mensagem" htmlFor="contact-message" required>
                  <TextArea id="contact-message" rows={4} placeholder="Escreva sua mensagem..." required />
                </FormField>

                {success && (
                  <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                    <p className="text-xs text-accent font-medium text-center">
                      ✓ Mensagem enviada com sucesso! Em breve entrarei em contato.
                    </p>
                  </div>
                )}

                <Button type="submit" variant="primary" className="w-full" isLoading={loading}>
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}