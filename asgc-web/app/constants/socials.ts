export interface SocialItem {
  id: string;
  label: string;
  href: string;
  iconName: string;
}

export const SOCIAL_LINKS: SocialItem[] = [
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/alex-silva-gc/", iconName: "linkedin" },
  { id: "github", label: "GitHub", href: "https://github.com/alesgc", iconName: "github" },
  { id: "cv", label: "Currículo", href: "/cv.pdf", iconName: "cv" },
  { id: "whatsapp", label: "WhatsApp", href: "https://wa.me/5511969027531", iconName: "whatsapp" },
];

export const SITE_CONFIG = {
  author: "Alex Silva",
  email: "asgc.devolp@gmail.com",
  phone: "(11) 969027531",
};