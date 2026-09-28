import type { Metadata } from "next";
import { Gothic_A1, Inter } from "next/font/google";
import { siteConfig } from "@/app/config/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const gothic = Gothic_A1({
  weight: ["200", "400", "800"],
  subsets: ["latin"],
  variable: "--font-gothic",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${gothic.variable} dark`}>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-accent selection:text-white">
        {children}
      </body>
    </html>
  );
}