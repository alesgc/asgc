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
      "Plataforma que consolida indicadores, converte moedas pela cotação PTAX oficial do BACEN e organiza transações financeiras com dashboards de acompanhamento em tempo real.",
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
        "Criei o PERA porque tratava dados financeiros multicâmbio manualmente em planilhas — perder 2h por semana com cola de cotação PTAX e erro de fórmula não era mais aceitável.",
      solution:
        "Backend Python com FastAPI e SQLAlchemy, migrações versionadas com Alembic, banco PostgreSQL estruturado em esquemas analíticos e dashboards Power BI alimentados por pipeline ETL com ingestão automática de taxas.",
      techStack: [
        "Python 3.12",
        "FastAPI",
        "PostgreSQL",
        "SQLAlchemy / Alembic",
        "Next.js / React",
        "Power BI",
      ],
      impact:
        "Corta em ~60% o tempo gasto com conciliação financeira de ativos em múltiplas moedas. A ingestão da PTAX é automática e o DDL do PostgreSQL foi modelado para consultar 12 meses de histórico em <2s.",
    },
  },
  {
    id: "asgc",
    title: "Portfólio & Hub ASGC Devolp",
    description:
      "Meu hub profissional construído em Next.js 15, React 19, TypeScript e Tailwind. Aqui centralizo trajetória, projetos de dados e casos de engenharia de software — sem depender de currículo em PDF isolado.",
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
        "Currículo em PDF estático não mostra código rodando, nem performance real, nem a arquitetura dos projetos. Decidi construir minha própria plataforma para apresentar meu trabalho do jeito que eu queria que recrutadores vissem.",
      solution:
        "Next.js 15 com App Router e Server Components para performance máxima, Tailwind CSS com design system próprio e foco mobile-first, formulário de contato serverless via Route Handler integrado à Resend API, e deploy contínuo na Vercel com CI/CD via GitHub Actions.",
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
        "98+ no Google Lighthouse nas 4 métricas core, carregamento em <1.2s, SEO com JSON-LD, Sitemap e OG implementados, e 100% de acessibilidade mobile validada por contraste e navegação por teclado.",
    },
  },
];