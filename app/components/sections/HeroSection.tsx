import Image from "next/image";
import { siteConfig } from "@/app/config/site";

export function HeroSection() {
  return (
    <section id="sobre" className="py-12 flex flex-col md:flex-row items-center gap-8">
      {/* Bloco da Foto de Perfil */}
      <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-accent/30 shadow-lg shrink-0">
        <Image
          src="/img/1758304366945.jpg" // Caminho da imagem no seu projeto
          alt={siteConfig.author.name}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Bloco dos Textos (Objetivo Profissional) */}
      <div className="space-y-4 text-center md:text-left">
        <div className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-accent/10 text-accent border border-accent/20">
          Objetivo Profissional
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Transformando dados e lógica em soluções eficientes para o negócio
        </h1>
        <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-3xl">
          {siteConfig.objective}
        </p>
      </div>
    </section>
  );
}