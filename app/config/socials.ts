import { IconName } from "@/app/components/ui/Icon";

export interface SocialItem {
  id: string;
  label: string;
  href: string;
  iconName: IconName;
}

export const socials: SocialItem[] = [
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
];