import Link from "next/link";

interface SocialLink {
  label: string;
  href: string;
  icon?: string;
}

const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/alesgc/", icon: "💼" },
  { label: "GitHub", href: "https://github.com/alesgc", icon: "💻" },
  { label: "Currículo", href: "/cv.pdf", icon: "📄" },
  { label: "WhatsApp", href: "https://wa.me/5511969027531", icon: "💬" },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-surface py-8 mt-16 text-text-secondary">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Redes e Contatos */}
        <div className="flex items-center gap-6 text-sm font-medium">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground hover:text-accent transition-colors"
            >
              <span>{link.icon}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>

        {/* Copyright / Assinatura */}
        <div className="text-xs text-text-secondary">
          © {new Date().getFullYear()} Alex Silva. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}