import Link from "next/link";
import { siteConfig } from "@/app/config/site";
import { Icon, IconName } from "@/app/components/ui/Icon";

export function Navbar() {
  // Mapeamento auxiliar de ícones para cada seção de navegação
  const navIcons: Record<string, IconName> = {
    sobre: "user",
    projetos: "code",
    referencias: "book-open",
    contato: "mail",
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo / Marca */}
        <Link
          href="/"
          className="font-bold text-lg text-foreground hover:text-accent transition-colors"
        >
          {siteConfig.name}
        </Link>

        {/* Links de Navegação por Seção (Âncoras) */}
        <nav aria-label="Navegação Principal" className="flex items-center gap-4 sm:gap-6 text-sm font-medium">
          {siteConfig.navItems.map((item) => {
            const iconName = navIcons[item.id] || "code";

            return (
              <a
                key={item.id || item.label}
                href={item.href}
                title={item.label}
                aria-label={item.label}
                className="flex items-center gap-2 p-1.5 text-text-secondary hover:text-foreground transition-colors duration-200 group"
              >
                {/* Ícone: visível e destacado no mobile, oculto em telas maiores */}
                <Icon
                  name={iconName}
                  size={22}
                  className="sm:hidden text-accent group-hover:scale-110 transition-transform duration-200"
                />

                {/* Texto/Legenda: oculto no mobile, visível a partir de 'sm' (640px) */}
                <span className="hidden sm:inline">
                  {item.label}
                </span>
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}