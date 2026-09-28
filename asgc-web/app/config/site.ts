import { IconName } from "@/app/components/ui/Icon";

export interface SocialItem {
  id: string;
  label: string;
  href: string;
  iconName: IconName;
}

export const siteConfig = {
  name: "ASGC Devolp",
  description: "Portfólio e Hub de Desenvolvimento Sistemas ASGC",
  version: "0.2.0",
  environment: process.env.NEXT_PUBLIC_APP_ENV || "development",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  author: {
    name: "Alexandre Camargo",
    email: "asgc.devolp@gmail.com",
    phone: "(11) 969027531",
  },
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