import { navItems } from "./navigation";
import { socials } from "./socials";
import { references } from "./references";
import { projects } from "./projects";

export const siteConfig = {
  name: "ASGC Devolp",
  description:
    "Portfólio Alexandre S. G. Camargo: Analista de Dados e Engenheiro de Dados com projetos em Python, SQL, ETL, PostgreSQL e Power BI. Cases de pipeline de dados, automação BACEN/PTAX e dashboards analíticos.",
  keywords: [
    "Analista de Dados",
    "Engenheiro de Dados",
    "Portfólio Dados",
    "Python",
    "SQL",
    "ETL",
    "Pipeline de Dados",
    "PostgreSQL",
    "Power BI",
    "DAX",
    "Pandas",
    "NumPy",
    "Análise Exploratória",
    "EDA",
    "Modelagem de Dados",
    "Alexandre Camargo",
    "Alexandre S. G. Camargo",
    "ASGC Devolp",
    "Automação de Processos",
    "Dashboarding",
    "Next.js",
    "PTAX",
    "BACEN",
    "Banco Central",
  ],
  version: "1.0.0",
  environment: process.env.NEXT_PUBLIC_APP_ENV || "development",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  author: {
    name: "Alexandre S. G. Camargo",
    email: "asgc.devolp@gmail.com",
    phone: "(11) 9 6902-7521",
  },
  objective:
    "Portfólio de Alexandre S. G. Camargo — Analista de Dados, com formação complementar em Ciência de Dados (EBAC) e base sólida de Engenharia de Computação (UNIVESP). Especializado em Python, SQL, ETL, modelagem PostgreSQL e Power BI, com experiência prática na construção de ecossistemas analíticos e automações que reduzem tempo operacional e estruturam indicadores para tomada de decisão.",
  links: {
    github: "https://github.com/alesgc",
    linkedin: "https://www.linkedin.com/in/techbouros/",
    whatsapp: "https://wa.me/5511969027521",
    cv: "/cv.pdf",
    favicon: "/favicon.png",
  },
  navItems,
  socials,
  references,
  projects,
};

export type SiteConfig = typeof siteConfig;