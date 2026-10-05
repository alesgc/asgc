export type ReferenceCategory = "Todos" | "Canal" | "Plataforma" | "Comunidade" | "Acadêmico";

export interface ReferenceItem {
  id: string;
  title: string;
  description: string;
  url: string;
  category: Exclude<ReferenceCategory, "Todos">;
  badgeText?: string;
  detailedContent?: string;
}

export const referenceCategories: ReferenceCategory[] = [
  "Todos",
  "Acadêmico",
  "Canal",
  "Plataforma",
  "Comunidade",
];

export const references: ReferenceItem[] = [
  // 1. Formação Acadêmica e Especialização Principal em Dados
  {
    id: "ebac",
    title: "EBAC - Escola Britânica de Artes e Tecnologia",
    description: "Formação em Ciência de Dados (em andamento) — Cobrindo Python, análise exploratória (EDA), SQL e Machine Learning.",
    url: "https://ebaconline.com.br/",
    category: "Acadêmico",
    badgeText: "Acadêmico",
    detailedContent: "Formação prática em Ciência de Dados com foco em tratamento e manipulação de dados, análise exploratória (EDA), automação com Python, SQL relacional e modelagem preditiva.",
  },
  {
    id: "univesp",
    title: "UNIVESP - Universidade Virtual do Estado de SP",
    description:
      "Formação em Engenharia de Computação com foco em estrutura de dados, algoritmos, matemática aplicada e arquitetura de sistemas, alinhados à engenharia e análise de dados.",
    url: "https://univesp.br/",
    category: "Acadêmico",
    badgeText: "Acadêmico",
    detailedContent:
      "Sólida base acadêmica em Engenharia de Computação: cálculo, estruturas de dados, algoritmos, redes e arquitetura de computadores construída ao longo de 6 semestres cursados, com ênfase em lógica, modelagem e disciplinas que fundamentais para engenharia de dados e desenvolvimento de sistemas.",
  },
  {
    id: "dsa",
    title: "Data Science Academy",
    description: "Treinamentos e cursos focados em Análise de Dados, SQL e Ciência de Dados.",
    url: "https://www.datascienceacademy.com.br",
    category: "Plataforma",
    badgeText: "Plataforma",
    detailedContent: "Cursos e treinamentos especializados com foco em Análise de Dados, manipulação de bancos de dados relacionais e preparação contínua em novos módulos práticos.",
  },
  
  // 2. Fundamentos Lógicos e Arquitetura de Sistemas
  {
    id: "guanabara",
    title: "Gustavo Guanabara (Curso em Vídeo)",
    description: "Base essencial em lógica de programação, Python, MySQL e fundamentos Web.",
    url: "https://www.youtube.com/c/CursoemVideo",
    category: "Canal",
    badgeText: "Canal",
    detailedContent: "Primeiros passos fundamentais na programação, compreendendo algoritmos, modelagem de banco de dados relacional e lógica orientada a objetos.",
  },
  {
    id: "akita",
    title: "Fábio Akita (AkitaONRails)",
    description: "Análises aprofundadas sobre computação, história da TI e arquitetura de sistemas.",
    url: "https://www.youtube.com/c/Akitando",
    category: "Canal",
    badgeText: "Canal",
    detailedContent: "Estudos de caso densos sobre a história da computação, funcionamento de sistemas operacionais, compiladores e engenharia de software de alta escala.",
  },
  
  // 3. Ecossistemas de Desenvolvimento, Web e Plataformas Complementares
  {
    id: "alura",
    title: "Alura",
    description: "Bootcamps e imersões práticas para aprimoramento contínuo em ecossistemas de Programação, Dados e Web.",
    url: "https://www.alura.com.br",
    category: "Plataforma",
    badgeText: "Plataforma",
    detailedContent: "Participação em bootcamps, desafios e imersões práticas focados no aprimoramento contínuo de habilidades em programação, análise de dados e desenvolvimento de software.",
  },
  {
    id: "rocketseat",
    title: "Rocketseat",
    description: "Ecossistema de desenvolvimento Web e especialização em tecnologias modernas.",
    url: "https://www.rocketseat.com.br",
    category: "Plataforma",
    badgeText: "Plataforma",
    detailedContent: "Imersões práticas em ecossistemas modernos de front-end e back-end, padrões de componentização e ferramentas atuais de mercado.",
  },
  {
    id: "devmedia",
    title: "DevMídia",
    description: "Plataforma de apoio para aprendizado de linguagens e guia de carreiras.",
    url: "https://www.devmedia.com.br",
    category: "Plataforma",
    badgeText: "Plataforma",
    detailedContent: "Artigos práticos, trilhas voltadas ao mercado de trabalho e guias de referência rápida para desenvolvimento web.",
  },
  {
    id: "deschamps",
    title: "Felipe Deschamps",
    description: "Conteúdos sobre desenvolvimento, cultura dev e arquitetura de código.",
    url: "https://www.youtube.com/c/FelipeDeschamps",
    category: "Canal",
    badgeText: "Canal",
    detailedContent: "Acompanhamento de tendências do mercado de tecnologia, boas práticas de código limpo, arquitetura de software e mentalidade profissional.",
  },
  {
    id: "codigo-fonte",
    title: "Código Fonte TV",
    description: "Notícias, dicionários do programador e panoramas de linguagens de programação.",
    url: "https://www.youtube.com/c/codigofontetv",
    category: "Canal",
    badgeText: "Canal",
    detailedContent: "Panorama constante sobre ecossistemas de desenvolvimento, ferramentas modernas e atualizações do mercado tech.",
  },
];