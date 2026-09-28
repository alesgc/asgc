import { siteConfig } from "@/app/config/site";

export function HeroSection() {
  return (
    <section id="sobre" className="py-12 space-y-4">
      <div className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-accent/10 text-accent border border-accent/20">
        Objetivo Profissional
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
        Transformando dados e lógica em soluções eficientes para o negócio
      </h1>
      <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-3xl">
        {siteConfig.objective}
      </p>
    </section>
  );
}