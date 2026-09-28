import { navItems } from "./navigation";
import { socials } from "./socials";
import { references } from "./references";
import { projects } from "./projects";

export const siteConfig = {
  name: "ASGC Devolp",
  description: "Desenvolvimento de Sistemas, Análise de Dados e Otimização de Processos do Negócio.",
  version: "0.5.0",
  environment: process.env.NEXT_PUBLIC_APP_ENV || "development",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  author: {
    name: "Alex Silva",
    email: "asgc.devolp@gmail.com",
    phone: "(11) 969027531",
  },
  objective:
    "Profissional em consolidação de carreira na área de Tecnologia e Dados, focado em oportunidades entry-level para Desenvolvimento de Sistemas e Análise de Dados. Combino base técnica sólida em SQL, Python, lógica de programação e bancos de dados à formação complementar em Ciência de Dados e à vivência prática em TI e atendimento ao cliente — estruturando indicadores e organizando informações do negócio para otimizar processos e a tomada de decisão.",
  links: {
    github: "https://github.com/alesgc",
    linkedin: "https://www.linkedin.com/in/alex-silva-gc/",
    whatsapp: "https://wa.me/5511969027531",
    cv: "/cv.pdf",
  },
  navItems,
  socials,
  references,
  projects,
};

export type SiteConfig = typeof siteConfig;