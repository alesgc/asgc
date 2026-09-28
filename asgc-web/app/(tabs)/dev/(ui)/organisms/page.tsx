"use client";

import { ContactForm } from "@/app/components/sections/ContactForm";
import { ProjectsGrid } from "@/app/components/sections/ProjectsGrid";

const mockProjects = [
  {
    id: "1",
    title: "Sistemas SQL & Otimização",
    description: "Consultas avançadas, indexação e modelagem de banco de dados relacional PostgreSQL.",
    tags: ["SQL", "PostgreSQL", "Backend"],
    githubUrl: "https://github.com/alesgc/asgc",
  },
  {
    id: "2",
    title: "Automação com Python",
    description: "Scripts automatizados para parsing de dados e rotinas internas de sincronização.",
    tags: ["Python", "Automation", "Data"],
    githubUrl: "https://github.com/alesgc/asgc",
  },
  {
    id: "3",
    title: "Portfolio ASGC Web",
    description: "Aplicação moderna em Next.js com Tailwind CSS e Design System em camadas.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/alesgc/asgc",
  },
];

export default function OrganismsDevPage() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-xl font-semibold">Galeria de Organismos (Seções)</h2>
        <p className="text-sm text-text-secondary">
          Componentes complexos da Camada 3 que combinam múltiplos átomos e moléculas em seções completas.
        </p>
      </div>

      {/* Seção de Projetos */}
      <section className="space-y-4 border-t border-border pt-6">
        <h3 className="text-lg font-medium text-foreground">1. Seção: Grid de Projetos (`ProjectsGrid`)</h3>
        <ProjectsGrid projects={mockProjects} />
      </section>

      {/* Seção de Contato */}
      <section className="space-y-4 border-t border-border pt-6">
        <h3 className="text-lg font-medium text-foreground">2. Seção: Formulário de Contato (`ContactForm`)</h3>
        <div className="max-w-2xl">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}