import { IconName } from "@/app/components/ui/Icon";

export interface SocialItem {
  id: string;
  label: string;
  href: string;
  iconName: IconName;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ReferenceItem {
  id: string;
  title: string;
  description: string;
  href: string;
  category: "Canal" | "Plataforma" | "Comunidade";
}

export const siteConfig = {
  name: "ASGC Devolp",
  description:
    "Desenvolvimento de Sistemas, Análise de Dados e Otimização de Processos do Negócio.",
  version: "0.3.6",
  environment: process.env.NEXT_PUBLIC_APP_ENV || "development",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  author: {
    name: "Alex Silva",
    email: "asgc.devolp@gmail.com",
    phone: "(11) 969027531",
  },
  objective:
    "Profissional em consolidação de carreira na área de Tecnologia e Dados, focado em oportunidades entry-level para Desenvolvimento de Sistemas e Análise de Dados. Combino base técnica sólida em SQL, Python, lógica de programação e bancos de dados à formação complementar em Ciência de Dados e à vivência prática em TI e atendimento ao cliente — estruturando indicadores e organizando informações do negócio para otimizar processos e a tomada de decisão.",
  navItems: [
    { label: "Sobre", href: "/#sobre" },
    { label: "Projetos", href: "/#projetos" },
    { label: "Referências", href: "/#referencias" },
    { label: "Contato", href: "/contact" },
  ] as NavItem[],
  links: {
    github: "https://github.com/alesgc",
    linkedin: "https://www.linkedin.com/in/alex-silva-gc/",
    whatsapp: "https://wa.me/5511969027531",
    cv: "/cv.pdf",
  },
  socials: [
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/alex-silva-gc/",
      iconName: "linkedin",
    },
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com/alesgc",
      iconName: "github",
    },
    {
      id: "cv",
      label: "Currículo",
      href: "/cv.pdf",
      iconName: "file-text",
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      href: "https://wa.me/5511969027531",
      iconName: "whatsapp",
    },
  ] as SocialItem[],
  references: [
    {
      id: "guanabara",
      title: "Gustavo Guanabara (Curso em Vídeo)",
      description: "Base essencial em lógica de programação, Python, MySQL e fundamentos Web.",
      href: "https://www.youtube.com/c/CursoemV%C3%ADdeo",
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
      href: "https://www.devmedia.com.br/",
      category: "Plataforma",
    },
    {
      id: "dsa",
      title: "Data Science Academy",
      description: "Treinamentos focados em Ciência de Dados, Engenharia de Dados e SQL.",
      href: "https://www.datascienceacademy.com.br/",
      category: "Plataforma",
    },
    {
      id: "rocketseat",
      title: "Rocketseat",
      description: "Ecossistema de desenvolvimento Web e especialização em tecnologias modernas.",
      href: "https://www.rocketseat.com.br/",
      category: "Plataforma",
    },
    {
      id: "alura",
      title: "Alura",
      description: "Cursos e formações em Programação, Dados e Front-End/Back-End.",
      href: "https://www.alura.com.br/",
      category: "Plataforma",
    },
    {
      id: "xp-educacao",
      title: "XP Educação",
      description: "Bootcamps e especializações com foco em dados e tecnologia aplicada.",
      href: "https://xpeducacao.com.br/",
      category: "Plataforma",
    },
  ] as ReferenceItem[],
};

export type SiteConfig = typeof siteConfig;