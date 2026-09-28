export const siteConfig = {
  name: "ASGC Devolp",
  description: "Portfólio e Hub de Desenvolvimento Sistemas ASGC",
  version: "0.1.0",
  environment: process.env.NEXT_PUBLIC_APP_ENV || "development",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  author: {
    name: "ASGC",
    email: "asgc.devolp@gmail.com",
    phone: "(11) 969027531",
  },
  links: {
    github: "https://github.com/alesgc",
    linkedin: "https://www.linkedin.com/in/techbouros/",
    whatsapp: "https://wa.me/5511969027531",
  },
};

export type SiteConfig = typeof siteConfig;