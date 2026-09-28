import { ReactNode } from "react";

export default function TabsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground p-6 max-w-7xl mx-auto">
      {/* Aqui entrará a navegação principal entre as abas do sistema (ex: Home, Dev, Portfolio) */}
      {children}
    </div>
  );
}