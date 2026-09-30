import type { Metadata } from "next";
import { Gothic_A1, Inter } from "next/font/google";
import { siteConfig } from "@/app/config/site";
import { Navbar } from "@/app/components/ui/Navbar";
import { Footer } from "@/app/components/ui/Footer";
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
  icons: {
    icon: siteConfig.links.favicon,
    shortcut: siteConfig.links.favicon,
    apple: siteConfig.links.favicon,
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${gothic.variable} dark`}>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col">
        <Navbar />
        <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}