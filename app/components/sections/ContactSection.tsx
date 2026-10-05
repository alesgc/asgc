"use client";

import { useState } from "react";
import { siteConfig } from "@/app/config/site";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/app/components/ui/Card";
import { FormField } from "@/app/components/ui/FormField";
import { Input } from "@/app/components/ui/Input";
import { TextArea } from "@/app/components/ui/TextArea";
import { Button } from "@/app/components/ui/Button";
import { Icon, IconName } from "@/app/components/ui/Icon";
import { contactSchema } from "@/lib/validations/contact";

export function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Tipagem explícita das redes profissionais para o TypeScript aceitar IconName
  const networkLinks: Array<{
    id: string;
    label: string;
    href: string;
    iconName: IconName;
  }> = [
    ...siteConfig.socials
      .filter((item) => item.id !== "cv")
      .map((item) => ({ ...item, iconName: item.iconName as IconName })),
    {
      id: "email",
      label: "E-mail",
      href: `mailto:${siteConfig.author.email}`,
      iconName: "mail",
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const rawData = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    // Validação Lado do Cliente via Zod
    const validation = contactSchema.safeParse(rawData);
    if (!validation.success) {
      const fieldErrors = validation.error.flatten().fieldErrors;
      const firstError = Object.values(fieldErrors)[0]?.[0];
      setErrorMessage(firstError || "Preencha os campos corretamente.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validation.data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Ocorreu um erro ao enviar a mensagem.");
      }

      setSuccess(true);
      form.reset(); // Limpa os campos do formulário após o envio bem-sucedido
    } catch (err: any) {
      setErrorMessage(err.message || "Erro de conexão. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="pt-12 sm:pt-16 border-t border-border/60 space-y-8">
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
          <Card className="h-full flex flex-col justify-between border-border/60 bg-surface/40">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">Canais Diretos</CardTitle>
              <CardDescription>
                Disponível para oportunidades profissionais e parcerias.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between space-y-6 text-sm">
              <div className="space-y-3">
                {/* E-mail com protocolo mailto: nativo */}
                <a
                  href={`mailto:${siteConfig.author.email}`}
                  className="flex items-center gap-3 p-3.5 rounded-lg bg-background hover:bg-surface-hover border border-border/60 transition-all group"
                >
                  <div className="p-2 rounded-md bg-surface text-accent border border-border group-hover:scale-105 transition-transform">
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
                  className="flex items-center gap-3 p-3.5 rounded-lg bg-background hover:bg-surface-hover border border-border/60 transition-all group"
                >
                  <div className="p-2 rounded-md bg-surface text-accent border border-border group-hover:scale-105 transition-transform">
                    <Icon name="whatsapp" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary font-medium">WhatsApp / Telefone</p>
                    <p className="text-foreground text-xs sm:text-sm font-medium group-hover:text-accent transition-colors">
                      {siteConfig.author.phone}
                    </p>
                  </div>
                </a>

                {/* Currículo em PDF */}
                <a
                  href={siteConfig.links.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Alexandre_Camargo_CV.pdf"
                  className="flex items-center gap-3 p-3.5 rounded-lg bg-accent/5 hover:bg-accent/10 border border-accent/20 transition-all group"
                >
                  <div className="p-2 rounded-md bg-accent/10 text-accent border border-accent/20 group-hover:scale-105 transition-transform">
                    <Icon name="file-text" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary font-medium">Documento Profissional</p>
                    <p className="text-accent text-xs sm:text-sm font-semibold group-hover:underline transition-all">
                      Download Currículo (PDF) ↗
                    </p>
                  </div>
                </a>
              </div>

              {/* Grade de Redes Profissionais */}
              <div className="pt-4 border-t border-border/50">
                <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-3">Redes Profissionais</p>
                <div className="grid grid-cols-2 gap-2">
                  {networkLinks.map((link) => (
                    <a
                      key={link.id}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-background hover:bg-surface-hover border border-border/60 text-xs font-medium text-foreground hover:text-accent transition-all group"
                    >
                      <Icon name={link.iconName} size={16} className="group-hover:scale-110 transition-transform duration-200" />
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
          <Card className="h-full flex flex-col justify-between border-border/60 bg-surface/40">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">Envie uma mensagem</CardTitle>
              <CardDescription>
                Preencha os campos abaixo e responderei o mais brevemente possível.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
              <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField label="Nome" htmlFor="contact-name" required>
                      <Input id="contact-name" name="name" placeholder="Seu nome" required />
                    </FormField>

                    <FormField label="Telefone" htmlFor="contact-phone">
                      <Input id="contact-phone" name="phone" type="tel" placeholder="(11) 99999-9999" />
                    </FormField>
                  </div>

                  <FormField label="E-mail" htmlFor="contact-email" required>
                    <Input id="contact-email" name="email" type="email" placeholder="seu.email@exemplo.com" required />
                  </FormField>

                  <FormField label="Mensagem" htmlFor="contact-message" required>
                    <TextArea id="contact-message" name="message" rows={4} placeholder="Escreva sua mensagem..." required className="resize-none" />
                  </FormField>
                </div>

                <div className="pt-2">
                  {success && (
                    <div className="p-3 mb-3 rounded-lg bg-accent/10 border border-accent/20">
                      <p className="text-xs text-accent font-medium text-center">
                        ✓ Mensagem enviada com sucesso! Em breve entrarei em contato.
                      </p>
                    </div>
                  )}

                  {errorMessage && (
                    <div className="p-3 mb-3 rounded-lg bg-red-500/10 border border-red-500/20">
                      <p className="text-xs text-red-400 font-medium text-center">
                        ✕ {errorMessage}
                      </p>
                    </div>
                  )}

                  <Button type="submit" variant="primary" className="w-full" isLoading={loading}>
                    Enviar Mensagem
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
} 