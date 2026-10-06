"use client";

import { useState } from "react";
import { siteConfig } from "@/app/config/site";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/app/components/ui/Card";
import { FormField } from "@/app/components/ui/FormField";
import { Input } from "@/app/components/ui/Input";
import { TextArea } from "@/app/components/ui/TextArea";
import { Button } from "@/app/components/ui/Button";
import { Icon, IconName } from "@/app/components/ui/Icon";
import { contactSchema, type ContactFormData } from "@/lib/validations/contact";

type FieldErrors = Partial<Record<keyof ContactFormData, string>>;

const PREDEFINED_SUBJECTS = [
  "Vaga de emprego",
  "Estágio / Trainee",
  "Parceria / Projeto",
  "Mentoria / Dúvida técnica",
  "Outro",
] as const;

export function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [predefinedSubject, setPredefinedSubject] = useState<(typeof PREDEFINED_SUBJECTS)[number]>("Vaga de emprego");
  const [customSubject, setCustomSubject] = useState("");

  const currentSubject = predefinedSubject === "Outro" ? customSubject : predefinedSubject;

  const whatsappText = encodeURIComponent(
    "Olá Alexandre, vim do seu portfólio ASGC. Quero falar sobre oportunidades, parcerias ou dúvidas técnicas na área de dados."
  );
  const whatsappHref = `${siteConfig.links.whatsapp}?text=${whatsappText}`;

  const mailtoSubject = encodeURIComponent("Contato via portfólio ASGC — Vaga / Parceria / Dúvida");
  const mailtoBody = encodeURIComponent(
    "Olá Alexandre,\n\nEntrei em contato através do seu portfólio ASGC.\n\nNome: \nTelefone: \nFinalidade (vaga, parceria, mentoria etc.): \n\nDescrição:\n\n"
  );
  const mailtoHref = `mailto:${siteConfig.author.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

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
      href: mailtoHref,
      iconName: "mail",
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setErrorMessage("");
    setFieldErrors({});

    const form = e.currentTarget;
    const formData = new FormData(form);

    const rawConsent = formData.get("consent");
    const rawData: Record<string, unknown> = {
      name: formData.get("name") as string,
      phone: (formData.get("phone") as string) || undefined,
      email: formData.get("email") as string,
      subject: (formData.get("subject") as string) || "",
      message: formData.get("message") as string,
      consent: rawConsent === "on" || rawConsent === "true",
    };

    const validation = contactSchema.safeParse(rawData);
    if (!validation.success) {
      const errors = validation.error.flatten().fieldErrors as FieldErrors;
      setFieldErrors(errors);
      const firstError =
        Object.values(errors).find((msg) => typeof msg === "string" && msg.length > 0) ||
        "Preencha os campos corretamente.";
      setErrorMessage(firstError);
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

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result?.error || "Ocorreu um erro ao enviar a mensagem.");
      }

      setSuccess(true);
      setFieldErrors({});
      form.reset();
      setPredefinedSubject("Vaga de emprego");
      setCustomSubject("");
    } catch (err: unknown) {
      setErrorMessage(err instanceof Error ? err.message : "Erro de conexão. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="pt-12 sm:pt-16 border-t border-border/60 space-y-8">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">Contato</h2>
        <p className="text-sm text-text-secondary">
          Vagas, parcerias ou troca de ideia sobre dados? Fale comigo por WhatsApp, LinkedIn ou use o formulário abaixo.
          Respondo rapidamente — geralmente em até 24h úteis.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
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
                <a
                  href={mailtoHref}
                  className="flex items-center gap-3 p-3.5 rounded-lg bg-background hover:bg-surface-hover border border-border/60 transition-all group hover:translate-y-0.5"
                  aria-label={`Enviar e-mail para ${siteConfig.author.email}`}
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

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-lg bg-background hover:bg-surface-hover border border-border/60 transition-all group hover:translate-y-0.5"
                  aria-label="Abrir conversa no WhatsApp com mensagem pré-preenchida"
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

                <a
                  href={siteConfig.links.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Alexandre_S_G_Camargo_CV.pdf"
                  className="flex items-center gap-3 p-3.5 rounded-lg bg-accent/5 hover:bg-accent/10 border border-accent/20 transition-all group hover:translate-y-0.5"
                  aria-label="Baixar currículo PDF de Alexandre S. G. Camargo"
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

        <div className="lg:col-span-7 flex flex-col">
          <Card className="h-full flex flex-col justify-between border-border/60 bg-surface/40">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">Envie uma mensagem</CardTitle>
              <CardDescription>
                Preencha os campos abaixo. Responderei em até 24h úteis após o envio.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
              <form onSubmit={handleSubmit} noValidate className="flex-1 flex flex-col justify-between space-y-4">
                <input type="hidden" name="subject" value={currentSubject} />

                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField label="Nome" htmlFor="contact-name" required error={fieldErrors.name}>
                      <Input
                        id="contact-name"
                        name="name"
                        placeholder="Seu nome completo"
                        required
                        error={fieldErrors.name}
                        autoComplete="name"
                      />
                    </FormField>

                    <FormField label="Telefone (opcional)" htmlFor="contact-phone" error={fieldErrors.phone}>
                      <Input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        placeholder="(11) 99999-9999"
                        error={fieldErrors.phone}
                        autoComplete="tel"
                      />
                    </FormField>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField label="E-mail" htmlFor="contact-email" required error={fieldErrors.email}>
                      <Input
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder="seu.email@exemplo.com"
                        required
                        error={fieldErrors.email}
                        autoComplete="email"
                      />
                    </FormField>

                    <FormField label="Assunto / Finalidade" htmlFor="contact-subject-select" required error={fieldErrors.subject}>
                      <div className="space-y-2">
                        <select
                          id="contact-subject-select"
                          value={predefinedSubject}
                          onChange={(e) => setPredefinedSubject(e.target.value as (typeof PREDEFINED_SUBJECTS)[number])}
                          className="w-full px-3.5 py-2 bg-surface border border-border rounded-lg text-foreground text-sm placeholder-text-secondary focus:outline-none focus:border-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          aria-describedby={fieldErrors.subject ? "contact-subject-error" : undefined}
                        >
                          {PREDEFINED_SUBJECTS.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        {predefinedSubject === "Outro" && (
                          <Input
                            id="contact-subject-custom"
                            name="subject-custom-input"
                            placeholder="Descreva o assunto em poucas palavras..."
                            value={customSubject}
                            onChange={(e) => setCustomSubject(e.target.value)}
                            error={fieldErrors.subject}
                            required
                          />
                        )}
                      </div>
                    </FormField>
                  </div>

                  <FormField label="Mensagem" htmlFor="contact-message" required error={fieldErrors.message}>
                    <TextArea
                      id="contact-message"
                      name="message"
                      rows={4}
                      placeholder="Descreva brevemente a vaga, proposta ou dúvida... (até 2000 caracteres)"
                      required
                      className="resize-none"
                      error={fieldErrors.message}
                      maxLength={2000}
                    />
                  </FormField>

                  <FormField error={fieldErrors.consent} required>
                    <label htmlFor="contact-consent" className="flex items-start gap-2 cursor-pointer select-none">
                      <input
                        id="contact-consent"
                        name="consent"
                        type="checkbox"
                        required
                        className="mt-0.5 h-4 w-4 rounded border-border text-accent accent-accent focus:ring-accent/40 bg-surface"
                        aria-describedby={fieldErrors.consent ? "contact-consent-error" : undefined}
                      />
                      <span className="text-xs text-text-secondary leading-relaxed">
                        Concordo com o tratamento dos meus dados pessoais para fins de contato profissional, em conformidade com a Lei Geral de Proteção de Dados (LGPD 13.709/2018).
                      </span>
                    </label>
                  </FormField>
                </div>

                <div className="pt-2 space-y-3">
                  {success && (
                    <div role="alert" aria-live="polite" className="p-3 rounded-lg bg-accent/10 border border-accent/20 transition-all">
                      <p className="text-xs text-accent font-medium text-center">
                        ✓ Mensagem enviada com sucesso! Em até 24h úteis entrarei em contato.
                      </p>
                    </div>
                  )}

                  {errorMessage && (
                    <div role="alert" aria-live="assertive" className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 transition-all">
                      <p className="text-xs text-red-400 font-medium text-center">
                        ✕ {errorMessage}
                      </p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full"
                    isLoading={loading}
                    aria-disabled={loading || undefined}
                    aria-busy={loading || undefined}
                  >
                    {loading ? "Enviando..." : "Enviar Mensagem"}
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
