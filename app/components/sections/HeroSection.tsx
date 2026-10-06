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
          Pipelines ETL, modelagem PostgreSQL e dashboards de Power BI que tiram dados da planilha e viram decisão
        </h1>

        <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-3xl">
          {siteConfig.objective}
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <Link
            href="#projetos"
            aria-label="Pular para a seção de projetos de dados"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent text-white text-sm font-semibold hover:bg-accent/95 transition-all shadow-sm shadow-accent/20 hover:translate-y-0.5"
          >
            Ver Projetos de Dados
            <span aria-hidden="true" className="translate-x-0 transition-transform group-hover:translate-x-0.5">&rarr;</span>
          </Link>

          <a
            href={siteConfig.links.cv}
            download="Alexandre_S_G_Camargo_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Baixar currículo PDF de Alexandre S. G. Camargo"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-surface border border-border text-foreground hover:border-accent/50 hover:text-accent hover:bg-accent/4 text-sm font-medium transition-all"
          >
            Baixar Currículo (PDF)
            <span aria-hidden="true" className="translate-y-0 transition-transform group-hover:-translate-y-0.5">&darr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}