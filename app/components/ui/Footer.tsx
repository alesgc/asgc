import { siteConfig } from "@/app/config/site";
import { Icon, IconName } from "@/app/components/ui/Icon";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-surface mt-8 text-text-secondary">
      {/* Seção principal dos links profissionais */}
      <div className="max-w-5xl mx-auto px-4 py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <nav aria-label="Links Sociais e Profissionais" className="flex items-center justify-center gap-6 sm:gap-6 text-sm font-medium">
          {siteConfig.socials.map((link) => {
            const isCV = link.id === "cv";

            return (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                download={isCV ? "Alexandre_Camargo_CV.pdf" : undefined}
                title={link.label}
                aria-label={link.label}
                className="flex items-center gap-2 p-1.5 text-foreground hover:text-accent transition-colors duration-200 group"
              >
                {/* Ícone: maior no mobile (22px), mantendo 16px no desktop */}
                <Icon
                  name={link.iconName as IconName}
                  size={22}
                  className="sm:w-4 sm:h-4 group-hover:scale-110 transition-transform duration-200"
                />
                
                {/* Legenda: Oculta no Mobile, visível do breakpoint 'sm' (640px) em diante */}
                <span className="hidden sm:inline text-xs sm:text-sm font-medium">
                  {link.label}
                </span>
              </a>
            );
          })}
        </nav>
      </div>

      {/* Faixa inferior de copyright */}
      <div className="border-t border-border/50 py-3 text-center text-xs text-text-secondary">
        <div className="max-w-5xl mx-auto px-4">
          <span>© {new Date().getFullYear()} {siteConfig.author.name}. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
}