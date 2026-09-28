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

export const siteConfig = {
  name: "ASGC Devolp",
  description:
    "Desenvolvimento de Sistemas, Análise de Dados e Otimização de Processos do Negócio.",
  version: "0.3.5",
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
};

export type SiteConfig = typeof siteConfig;