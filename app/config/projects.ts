export type ProjectCategory = "Todos" | "SQL" | "Python" | "Web" | "DataScience";

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  category: Exclude<ProjectCategory, "Todos">;
  tags: string[];
  githubUrl?: string;
  deployUrl?: string;
  highlight?: boolean;
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
    id: "exemplo-sql",
    title: "Modelagem de Banco de Dados Relacional",
    description:
      "Estruturação de esquemas de banco de dados SQL, otimização de consultas (queries), views e rotinas de análise de dados.",
    category: "SQL",
    tags: ["SQL", "PostgreSQL", "MySQL", "Modelagem"],
    githubUrl: "https://github.com/alesgc",
  },
  {
    id: "exemplo-python",
    title: "Automação e Scripts em Python",
    description:
      "Scripts para automação de processos, tratamento de arquivos de dados e organização de fluxos operacionais.",
    category: "Python",
    tags: ["Python", "Pandas", "Automação"],
    githubUrl: "https://github.com/alesgc",
  },
  {
    id: "exemplo-web",
    title: "Portfólio & Hub ASGC Devolp",
    description:
      "Plataforma Web desenvolvida em Next.js e Tailwind CSS para apresentação de projetos, competências e hub de estudos.",
    category: "Web",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    githubUrl: "https://github.com/alesgc/asgc",
    deployUrl: "https://alesgc.github.io/asgc/",
    highlight: true,
  },
  {
    id: "exemplo-datascience",
    title: "Análise Exploratória de Dados (EDA)",
    description:
      "Análise de dados operacionais e financeiros com geração de indicadores, gráficos e levantamento de hipóteses de negócio.",
    category: "DataScience",
    tags: ["Data Science", "Python", "Excel", "Power BI"],
    githubUrl: "https://github.com/alesgc",
  },
];