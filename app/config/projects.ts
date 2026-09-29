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
    id: "modelagem-banco-dados",
    title: "Modelagem de Banco de Dados Relacional",
    description: "Estruturação de esquemas de banco de dados SQL, otimização de consultas (queries), views e rotinas de análise de dados.",
    category: "SQL",
    tags: ["SQL", "PostgreSQL", "MySQL", "Modelagem"],
    githubUrl: "https://github.com/alesgc",
    highlight: true,
  },
  {
    id: "automacao-scripts-python",
    title: "Automação e Scripts em Python",
    description: "Scripts para automação de processos, tratamento de arquivos de dados e organização de fluxos operacionais.",
    category: "Python",
    tags: ["Python", "Pandas", "Automação"],
    githubUrl: "https://github.com/alesgc",
  },
  {
    id: "portfolio-hub-asgc",
    title: "Portfólio & Hub ASGC Devolp",
    description: "Plataforma Web desenvolvida em Next.js e Tailwind CSS para apresentação de projetos, competências e hub de estudos.",
    category: "Web",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    githubUrl: "https://github.com/alesgc/asgc",
    deployUrl: "https://alesgc.github.io/asgc/",
    highlight: true,
  },
  {
    id: "analise-exploratoria-eda",
    title: "Análise Exploratória de Dados (EDA)",
    description: "Análise de dados operacionais e financeiros com geração de indicadores, gráficos e levantamento de hipóteses de negócio.",
    category: "DataScience",
    tags: ["Data Science", "Python", "Excel", "Power BI"],
    githubUrl: "https://github.com/alesgc",
  },
  {
    id: "etl-pipeline-dados",
    title: "Pipeline de ETL com Python e SQL",
    description: "Desenvolvimento de rotinas para extração, transformação e carga de dados brutos para relatórios analíticos limpos.",
    category: "Python",
    tags: ["Python", "SQL", "ETL", "Pandas"],
    githubUrl: "https://github.com/alesgc",
  },
  {
    id: "dashboard-indicadores-bi",
    title: "Dashboard de Indicadores Operacionais",
    description: "Construção de painéis interativos em Power BI integrados a bases relacionais para acompanhamento de KPIs de negócio.",
    category: "DataScience",
    tags: ["Power BI", "SQL", "DAX", "Business Intelligence"],
    githubUrl: "https://github.com/alesgc",
    highlight: true,
  },
  {
    id: "sistema-gestao-tarefas",
    title: "Aplicação Web de Gestão de Tarefas",
    description: "Gerenciador de tarefas full-stack voltado para organização de rotinas de desenvolvimento e controle de entregas.",
    category: "Web",
    tags: ["React", "Node.js", "Tailwind CSS", "JavaScript"],
    githubUrl: "https://github.com/alesgc",
  },
  {
    id: "otimizacao-queries-complexas",
    title: "Otimização de Queries e Store Procedures",
    description: "Análise de plano de execução de consultas pesadas em bancos relacionais, aplicando índices e melhorias de performance.",
    category: "SQL",
    tags: ["SQL", "Performance", "PostgreSQL", "Database"],
    githubUrl: "https://github.com/alesgc",
  },
  {
    id: "extrator-dados-web-scraping",
    title: "Extrator de Dados via Web Scraping",
    description: "Robô desenvolvido em Python para varredura automatizada de páginas web, estruturação e exportação em formato tabular.",
    category: "Python",
    tags: ["Python", "BeautifulSoup", "Selenium", "Automação"],
    githubUrl: "https://github.com/alesgc",
  },
  {
    id: "landing-page-corporativa",
    title: "Landing Page Corporativa Responsiva",
    description: "Desenvolvimento de página web de alta conversão, totalmente otimizada para dispositivos móveis e performance de carregamento.",
    category: "Web",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    githubUrl: "https://github.com/alesgc",
    deployUrl: "https://github.com/alesgc",
  },
];