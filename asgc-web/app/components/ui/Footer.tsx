import { SOCIAL_LINKS, SITE_CONFIG } from "@/app/constants/socials";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-surface py-8 mt-16 text-text-secondary">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Links de Redes e Contatos */}
        <nav aria-label="Links Sociais" className="flex items-center gap-6 text-sm font-medium">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground hover:text-accent transition-colors"
            >
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Copyright Global */}
        <div className="text-xs text-text-secondary">
          © {new Date().getFullYear()} {SITE_CONFIG.author}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}