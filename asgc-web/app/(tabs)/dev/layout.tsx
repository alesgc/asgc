import Link from "next/link";
import { ReactNode } from "react";

export default function DevLayout({ children }: { children: ReactNode }) {
  const navItems = [
    { label: "Botões & Badges", href: "/dev/buttons" },
    { label: "Inputs", href: "/dev/inputs" },
    { label: "Cards", href: "/dev/cards" },
    { label: "Tabelas", href: "/dev/tables" },
    { label: "Organismos", href: "/dev/organisms" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground p-6 max-w-7xl mx-auto space-y-6">
      <header className="border-b border-border pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Ambiente DEV</h1>
          <p className="text-sm text-text-secondary">
            Playground e documentação interna de componentes.
          </p>
        </div>

        <nav className="flex flex-wrap gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-1.5 rounded-lg border border-border bg-surface hover:bg-surface-hover text-foreground transition-colors text-xs font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <main>{children}</main>
    </div>
  );
}