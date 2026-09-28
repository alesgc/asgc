"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DevLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-6 space-y-6">
      {/* Cabeçalho DEV */}
      <div>
        <h1 className="text-2xl font-bold text-white">Ambiente DEV</h1>
        <p className="text-sm text-gray-400">
          Playground e documentação interna de componentes.
        </p>
      </div>

      {/* Conteúdo Dinâmico */}
      <section className="border border-gray-800 rounded-xl p-6 bg-gray-900/50">
        {children}
      </section>
    </div>
  );
}