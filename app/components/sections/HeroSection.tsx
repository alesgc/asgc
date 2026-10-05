import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/app/config/site";

export function HeroSection() {
  return (
    <section id="sobre" className="py-12 flex flex-col md:flex-row items-center gap-8">
      {/* Bloco da Foto de Perfil */}
      <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-accent/30 shadow-lg shrink-0">
        <Image
          src="/img/1758304366945.jpg"
          alt={siteConfig.author.name}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Bloco dos Textos (Objetivo Profissional) */}
      <div className="space-y-5 text-center md:text-left flex-1">
        <div className="space-y-2">
          <div className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-accent/10 text-accent border border-accent/20">
            {siteConfig.author.name}
          </div>
          <div className="inline-block px-3 py-1 text-[11px] font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 ml-0 md:ml-2">
            Analista de Dados · Engenheiro de Dados
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Transformando dados em decisão: pipelines ETL, modelagem PostgreSQL e dashboards de negócio
        </h1>

        <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-3xl">
          {siteConfig.objective}
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <Link
            href="#projetos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm"
          >
            Ver Projetos de Dados
            <span aria-hidden="true">&rarr;</span>
          </Link>

          <a
            href={siteConfig.links.cv}
            download="Alexandre_S_G_Camargo_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-background border border-border text-foreground hover:border-accent/50 hover:text-accent text-sm font-medium transition-colors"
          >
            Baixar Currículo (PDF)
            <span aria-hidden="true">&darr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}