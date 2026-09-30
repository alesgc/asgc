export type ProjectCategory = "Todos" | "SQL" | "Python" | "Web" | "DataScience";

export interface ArchitectureDetails {
  motivation: string;
  solution: string;
  techStack: string[];
  impact: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  category: Exclude<ProjectCategory, "Todos">;
  tags: string[];
  githubUrl?: string;
  deployUrl?: string;
  highlight?: boolean;
  docsSlug?: string;
  details: ArchitectureDetails;
}

export const projectCategories: ProjectCategory[] = [
  "Todos",
  "SQL",
  "Python",
  "Web",
  "DataScience",
];

export const projects: ProjectItem[] = [
  {
    id: "portfolio-hub-asgc",
    title: "Portfólio & Hub ASGC Devolp",
    description:
      "Plataforma web de alta performance desenvolvida com Next.js 15, React 19, TypeScript e Tailwind CSS, projetada para centralizar a trajetória profissional, projetos de engenharia e artigos de arquitetura de dados.",
    category: "Web",
    tags: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Resend API",
      "App Router",
    ],
    githubUrl: "https://github.com/alesgc/asgc",
    // deployUrl: "https://asgc.vercel.app/",
    highlight: true,
    docsSlug: "asgc-devolp-overview",
    details: {
      motivation:
        "Construir um ecossistema digital próprio e centralizado que substitua currículos estáticos em PDF por uma plataforma interativa, demonstrando capacidade prática em engenharia de software moderna, tipagem estrita e integração de serviços serverless.",
      solution:
        "Desenvolvimento utilizando a arquitetura Next.js (App Router) com Server Components para máxima otimização, estilização padronizada com Tailwind CSS focada na abordagem Mobile-First, e integração do formulário de contato via API Route Handler consumindo o serviço Resend.",
      techStack: [
        "Next.js 15 (App Router)",
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "Resend API (Route Handlers)",
        "Vercel (Deploy / Serverless Functions)",
        "GitHub Actions (CI/CD Pipeline)",
      ],
      impact:
        "Pontuação de 98+ no Google Lighthouse, tempo de carregamento inferior a 1.2s, conformidade com práticas de SEO/OpenGraph e navegação otimizada com 100% de acessibilidade mobile.",
    },
  },
];