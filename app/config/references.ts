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
  {
    id: "ebac",
    title: "EBAC - Escola Britânica de Artes e Tecnologia",
    description: "Formação em Ciência de Dados, cobrindo Python, análise exploratória, SQL e Machine Learning.",
    url: "https://ebaconline.com.br/",
    category: "Acadêmico",
    badgeText: "Acadêmico",
    detailedContent: "Formação aprofundada em Ciência de Dados com ênfase prática em tratamento de dados, modelagem estatística, automação com Python e consultas relacionais.",
  },
  {
    id: "univesp",
    title: "UNIVESP - Universidade Virtual do Estado de SP",
    description: "Graduação em Engenharia de Computação, com foco em fundamentos da computação, matemática e arquitetura de software.",
    url: "https://univesp.br/",
    category: "Acadêmico",
    badgeText: "Acadêmico",
    detailedContent: "Base acadêmica sólida em engenharia de sistemas, estruturas de dados, algoritmos, redes de computadores e arquitetura de computadores.",
  },
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
    id: "deschamps",
    title: "Felipe Deschamps",
    description: "Conteúdos sobre desenvolvimento, cultura dev e arquitetura de código.",
    url: "https://www.youtube.com/c/FelipeDeschamps",
    category: "Canal",
    badgeText: "Canal",
    detailedContent: "Acompanhamento de tendências do mercado de tecnologia, boas práticas de código limpo, arquitetura de software e mentalidade profissional.",
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
  {
    id: "codigo-fonte",
    title: "Código Fonte TV",
    description: "Notícias, dicionários do programador e panoramas de linguagens de programação.",
    url: "https://www.youtube.com/c/codigofontetv",
    category: "Canal",
    badgeText: "Canal",
    detailedContent: "Panorama constante sobre ecossistemas de desenvolvimento, ferramentas modernas e atualizações do mercado tech.",
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
    id: "dsa",
    title: "Data Science Academy",
    description: "Treinamentos focados em Ciência de Dados, Engenharia de Dados e SQL.",
    url: "https://www.datascienceacademy.com.br",
    category: "Plataforma",
    badgeText: "Plataforma",
    detailedContent: "Cursos especializados em Big Data, manipulação avançada de dados corporativos e inteligência analítica.",
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
    id: "alura",
    title: "Alura",
    description: "Cursos e formações em Programação, Dados e Front-End/Back-End.",
    url: "https://www.alura.com.br",
    category: "Plataforma",
    badgeText: "Plataforma",
    detailedContent: "Trilhas de conhecimento contínuo cobrindo desde fundamentos lógicos até arquiteturas avançadas de dados e web.",
  },
  {
    id: "xp-educacao",
    title: "XP Educação",
    description: "Bootcamps e especializações com foco em dados e tecnologia aplicada.",
    url: "https://www.xpeducacao.com.br",
    category: "Plataforma",
    badgeText: "Plataforma",
    detailedContent: "Bootcamps imersivos voltados a capacitação executiva e técnica em engenharia de dados, finanças e tecnologia aplicada.",
  },
];