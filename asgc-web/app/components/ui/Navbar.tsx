import Link from "next/link";
import { siteConfig } from "@/app/config/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo / Marca */}
        <Link href="/" className="font-bold text-lg text-foreground hover:text-accent transition-colors">
          {siteConfig.name}
        </Link>

        {/* Links de Navegação */}
        <nav className="flex items-center gap-6 text-sm font-medium">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-text-secondary hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}