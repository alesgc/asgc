import { siteConfig } from "@/app/config/site";
import { Icon } from "@/app/components/ui/Icon";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-surface py-8 mt-16 text-text-secondary">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <nav aria-label="Links Sociais" className="flex items-center gap-6 text-sm font-medium">
          {siteConfig.socials.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground hover:text-accent transition-colors"
            >
              <Icon name={link.iconName} size={16} />
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        <div className="text-xs text-text-secondary">
          © {new Date().getFullYear()} {siteConfig.author.name}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}