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
  details: ArchitectureDetails;
}

export const projectCategories: ProjectCategory[] = [
  "Todos",
  "DataScience",
  "Python",
  "SQL",
  "Web",
];

export const projects: ProjectItem[] = [
  {
    id: "pera",
    title: "Ecossistema Financeiro Pera",
    description:
      "Plataforma analítica e gerenciador financeiro voltado para consolidação de indicadores, conversão de moedas (USD PTAX) e análise de transações financeiras corporativas e pessoais.",
    category: "DataScience",
    tags: [
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Next.js",
      "Power BI",
      "Alembic",
    ],
    githubUrl: "https://github.com/alesgc/pera",
    highlight: true,
    details: {
      motivation:
        "Oferecer uma solução integrada para tratamento de dados financeiros complexos, automatizando a coleta de cotações PTAX do Banco Central e estruturando esquemas relacionais para suporte à decisão.",
      solution:
        "Arquitetura backend em Python com FastAPI e ORM SQLAlchemy, migrações versionadas com Alembic, banco relacional PostgreSQL e dashboards analíticos alimentados por pipelines de dados ETL.",
      techStack: [
        "Python 3.12",
        "FastAPI",
        "PostgreSQL",
        "SQLAlchemy / Alembic",
        "Next.js / React",
        "Power BI",
      ],
      impact:
        "Redução no tempo de conciliação financeira em múltiplos ativos, modelagem DDL otimizada e automação da ingestão de taxas de câmbio.",
    },
  },
  {
    id: "asgc",
    title: "Portfólio & Hub ASGC Devolp",
    description:
      "Plataforma web de alta performance desenvolvida com Next.js 15, React 19, TypeScript e Tailwind CSS, projetada para centralizar a trajetória profissional, projetos de engenharia de software e artigos de arquitetura de dados.",
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
    deployUrl: "https://asgc.vercel.app/",
    highlight: true,
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