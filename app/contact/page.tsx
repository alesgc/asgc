import type { Metadata } from "next";
import { siteConfig } from "@/app/config/site";
import { ContactSection } from "@/app/components/sections/ContactSection";

export function generateMetadata(): Metadata {
  const baseTitle = "Contato · Alexandre S. G. Camargo · Analista de Dados";
  const baseDescription =
    "Fale com Alexandre sobre vagas, parcerias ou projetos em dados. WhatsApp, LinkedIn, Email ou formulário de contato. Resposta em até 24h úteis.";

  return {
    title: baseTitle,
    description: baseDescription,
    keywords: [
      ...siteConfig.keywords,
      "contato",
      "vagas analista de dados",
      "oportunidades engenheiro de dados",
      "Alexandre Camargo contato",
      "ASGC Devolp contato",
    ],
    alternates: {
      canonical: `${siteConfig.url.replace(/\/$/, "")}/contact`,
    },
    openGraph: {
      title: baseTitle,
      description: baseDescription,
      url: `${siteConfig.url.replace(/\/$/, "")}/contact`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: baseTitle,
      description: baseDescription,
    },
  };
}

export default function ContactPage() {
  return (
    <main className="pt-8 pb-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <header className="space-y-3 pt-2">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Contato
        </h1>
        <p className="text-base text-text-secondary max-w-2xl leading-relaxed">
          Vagas, parcerias ou troca de ideia sobre dados? Fale comigo por WhatsApp, LinkedIn ou use o formulário abaixo.
          Respondo rapidamente — geralmente em até 24h úteis.
        </p>
      </header>

      <ContactSection />

      <div className="rounded-2xl border border-accent/20 bg-accent/4 p-6 space-y-4">
        <div className="flex items-start gap-4">
          <div className="p-2.5 rounded-xl bg-accent/10 text-accent shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M8 2v4" />
              <path d="M16 2v4" />
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M3 10h18" />
            </svg>
          </div>
          <div className="space-y-1.5">
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Prefere agendar uma conversa rápida?
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              Se quer um bate-papo de 15 minutos para alinhar detalhes de uma vaga, projeto ou mentoria em dados,
              chame direto no WhatsApp com a mensagem pré-pronta — economiza tempo dos dois lados.
            </p>
          </div>
        </div>

        <a
          href={`${siteConfig.links.whatsapp}?text=${encodeURIComponent(
            "Olá Alexandre, quero agendar um bate-papo rápido (15 min) sobre vaga, parceria ou mentoria em dados. Pode marcar?"
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Agendar conversa rápida por WhatsApp com Alexandre S. G. Camargo"
          className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-white text-sm font-semibold hover:bg-accent/95 transition-all shadow-sm shadow-accent/20 hover:translate-y-0.5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Agendar conversa rápida no WhatsApp
          <span aria-hidden="true" className="translate-x-0 transition-transform group-hover:translate-x-0.5">
            &rarr;
          </span>
        </a>
      </div>
    </main>
  );
}
