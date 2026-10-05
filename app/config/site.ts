import { navItems } from "./navigation";
import { socials } from "./socials";
import { references } from "./references";
import { projects } from "./projects";

export const siteConfig = {
  name: "ASGC Devolp",
  description:
    "Alexandre S. G. Camargo — Analista e Engenheiro de Dados. Trabalho com Python, SQL, pipelines ETL, modelagem PostgreSQL, Power BI e automação de coletas BACEN/PTAX para transformar dados brutos em decisão.",
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
    "Sou Alexandre S. G. Camargo, Analista e Engenheiro de Dados. Estou cursando Ciência de Dados na EBAC e tenho 6 semestres de Engenharia de Computação pela UNIVESP (trancada). Hoje trabalho com Python, SQL, ETL, modelagem PostgreSQL e Power BI. Construí pipelines e dashboards que evitam trabalho manual repetitivo e deixam os indicadores do negócio claros para quem precisa decidir rápido.",
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