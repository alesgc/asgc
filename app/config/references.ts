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
    description: "Formação em Ciência de Dados (em andamento) — Onde estou construindo meus primeiros projetos de EDA, modelagem preditiva e análises com Python e SQL.",
    url: "https://ebaconline.com.br/",
    category: "Acadêmico",
    badgeText: "Acadêmico",
    detailedContent: "Curso focado no que realmente importa no dia a dia: limpar e tratar dados, fazer análise exploratória (EDA) com Pandas/NumPy, escrever SQL performático, automatizar processos com Python e aplicar os primeiros modelos preditivos em casos reais.",
  },
  {
    id: "univesp",
    title: "UNIVESP - Universidade Virtual do Estado de SP",
    description:
      "Engenharia de Computação — Trancada · 6 semestres cursados. Peguei forte em estrutura de dados, algoritmos, matemática aplicada e arquitetura de sistemas — fundamentos que ainda uso hoje em engenharia e análise de dados.",
    url: "https://univesp.br/",
    category: "Acadêmico",
    badgeText: "Trancada · 6 semestres",
    detailedContent:
      "Passei 6 semestres em Engenharia de Computação antes de trancar a matrícula. Durante esse período, estudei cálculo, estruturas de dados, algoritmos, redes e arquitetura de computadores. Essa base matemática e lógica é o que hoje me permite modelar bancos de dados e entender o funcionamento real dos pipelines de dados.",
  },
  {
    id: "dsa",
    title: "Data Science Academy",
    description: "Cursos práticos de Análise de Dados, SQL e Ciência de Dados para reforçar conceitos do dia a dia.",
    url: "https://www.datascienceacademy.com.br",
    category: "Plataforma",
    badgeText: "Plataforma",
    detailedContent: "Treinamentos com casos de negócio reais em análise de dados, manipulação de bancos relacionais e estatística aplicada. Uso principalmente para validar hipóteses e fixar técnicas que depois aplico em projetos pessoais.",
  },
  
  // 2. Fundamentos Lógicos e Arquitetura de Sistemas
  {
    id: "guanabara",
    title: "Gustavo Guanabara (Curso em Vídeo)",
    description: "Foi onde comecei de verdade na programação. Guanabara explicou algoritmos, Python e MySQL de um jeito simples que fez tudo fazer sentido no começo.",
    url: "https://www.youtube.com/c/CursoemVideo",
    category: "Canal",
    badgeText: "Canal",
    detailedContent: "Primeiro contato com lógica de programação, algoritmos, modelagem de banco MySQL e os fundamentos da orientação a objetos. Material didático, sem enrolação — essencial para quem está começando sem gastar nada.",
  },
  {
    id: "akita",
    title: "Fábio Akita (AkitaONRails)",
    description: "Akita é quem me mostrou que computação vai muito além de escrever código. Vídeos densos sobre história da TI, sistemas operacionais e arquitetura de alto nível.",
    url: "https://www.youtube.com/c/Akitando",
    category: "Canal",
    badgeText: "Canal",
    detailedContent: "Conteúdo que não ensina frameworks do mês, mas sim faz você pensar sobre o que realmente acontece por baixo dos panos. Desde como um processador executa instruções até por que certas arquiteturas de software sobrevivem décadas — e outras morrem em 2 anos.",
  },
  
  // 3. Ecossistemas de Desenvolvimento, Web e Plataformas Complementares
  {
    id: "alura",
    title: "Alura",
    description: "Bootcamps e imersões práticas em Programação, Dados e Web. Participei de várias imersões para acelerar o aprendizado com desafios de código.",
    url: "https://www.alura.com.br",
    category: "Plataforma",
    badgeText: "Plataforma",
    detailedContent: "Trilhas estruturadas com projetos reais e desafios semanais. Uso principalmente para cobrir tecnologias específicas com aulas diretas ao ponto, sem enrolação, e para validar conceitos de dados e desenvolvimento web.",
  },
  {
    id: "rocketseat",
    title: "Rocketseat",
    description: "Imersões práticas em desenvolvimento Web com React, Node e tecnologias modernas do mercado brasileiro.",
    url: "https://www.rocketseat.com.br",
    category: "Plataforma",
    badgeText: "Plataforma",
    detailedContent: "Conteúdo focado em stack moderna (React, Next.js, Node.js, TypeScript) com padrões de componentização reais. Ótimo para aprender o que as startups de tecnologia do Brasil realmente usam no dia a dia.",
  },
  {
    id: "devmedia",
    title: "DevMídia",
    description: "Artigos práticos, guias de referência rápida e dicas de carreira em programação.",
    url: "https://www.devmedia.com.br",
    category: "Plataforma",
    badgeText: "Plataforma",
    detailedContent: "Costumo usar como referência rápida para sintaxe de linguagens, padrões comuns de projeto e guias de carreira. Também tem artigos bons sobre preparação para entrevistas técnicas.",
  },
  {
    id: "deschamps",
    title: "Felipe Deschamps",
    description: "Conteúdo sobre cultura dev, carreira e o que realmente importa no dia a dia de um programador.",
    url: "https://www.youtube.com/c/FelipeDeschamps",
    category: "Canal",
    badgeText: "Canal",
    detailedContent: "Menos foco em tutorial de framework e mais em mentalidade: como trabalhar em time, como escrever código que os outros conseguem manter, o que esperar de uma entrevista e quais tendências do mercado realmente valem a pena seguir.",
  },
  {
    id: "codigo-fonte",
    title: "Código Fonte TV",
    description: "Notícias do mercado tech, dicionário do programador e atualizações rápidas sobre linguagens e ferramentas.",
    url: "https://www.youtube.com/c/codigofontetv",
    category: "Canal",
    badgeText: "Canal",
    detailedContent: "Acompanho para ficar por dentro do que acontece no ecossistema tech sem precisar ler 10 blogs por dia. As séries de dicionário explicam termos jargões de programação do zero — ótimo para relembrar conceitos básicos com clareza.",
  },
];