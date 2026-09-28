export interface ReferenceItem {
  id: string;
  title: string;
  description: string;
  href: string;
  category: "Canal" | "Plataforma" | "Comunidade" | "Acadêmico";
}

export const references: ReferenceItem[] = [
  {
    id: "ebac",
    title: "EBAC - Escola Britânica de Artes e Tecnologia",
    description: "Formação em Ciência de Dados, cobrindo Python, análise exploratória, SQL e Machine Learning.",
    href: "https://ebaconline.com.br/",
    category: "Acadêmico",
  },
  {
    id: "univesp",
    title: "UNIVESP - Universidade Virtual do Estado de SP",
    description: "Graduação em Engenharia de Computação, com foco em fundamentos da computação, matemática e arquitetura de software.",
    href: "https://univesp.br/",
    category: "Acadêmico",
  },
  {
    id: "guanabara",
    title: "Gustavo Guanabara (Curso em Vídeo)",
    description: "Base essencial em lógica de programação, Python, MySQL e fundamentos Web.",
    href: "https://www.youtube.com/c/CursoemVideo",
    category: "Canal",
  },
  {
    id: "deschamps",
    title: "Felipe Deschamps",
    description: "Conteúdos sobre desenvolvimento, cultura dev e arquitetura de código.",
    href: "https://www.youtube.com/c/FelipeDeschamps",
    category: "Canal",
  },
  {
    id: "akita",
    title: "Fábio Akita (AkitaONRails)",
    description: "Análises aprofundadas sobre computação, história da TI e arquitetura de sistemas.",
    href: "https://www.youtube.com/c/Akitando",
    category: "Canal",
  },
  {
    id: "codigo-fonte",
    title: "Código Fonte TV",
    description: "Notícias, dicionários do programador e panoramas de linguagens de programação.",
    href: "https://www.youtube.com/c/codigofontetv",
    category: "Canal",
  },
  {
    id: "devmedia",
    title: "DevMídia",
    description: "Plataforma de apoio para aprendizado de linguagens e guia de carreiras.",
    href: "https://www.devmedia.com.br",
    category: "Plataforma",
  },
  {
    id: "dsa",
    title: "Data Science Academy",
    description: "Treinamentos focados em Ciência de Dados, Engenharia de Dados e SQL.",
    href: "https://www.datascienceacademy.com.br",
    category: "Plataforma",
  },
  {
    id: "rocketseat",
    title: "Rocketseat",
    description: "Ecossistema de desenvolvimento Web e especialização em tecnologias modernas.",
    href: "https://www.rocketseat.com.br",
    category: "Plataforma",
  },
  {
    id: "alura",
    title: "Alura",
    description: "Cursos e formações em Programação, Dados e Front-End/Back-End.",
    href: "https://www.alura.com.br",
    category: "Plataforma",
  },
  {
    id: "xp-educacao",
    title: "XP Educação",
    description: "Bootcamps e especializações com foco em dados e tecnologia aplicada.",
    href: "https://www.xpeducacao.com.br",
    category: "Plataforma",
  },
];