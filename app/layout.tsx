import type { Metadata } from "next";
import { Gothic_A1, Inter } from "next/font/google";
import Script from "next/script";
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

const canonicalBase = siteConfig.url.replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(canonicalBase),
  title: {
    default: `${siteConfig.author.name} — Analista de Dados & Engenheiro de Dados (${siteConfig.name})`,
    template: `%s | ${siteConfig.author.name} — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.author.name, url: siteConfig.links.linkedin }],
  creator: siteConfig.author.name,
  keywords: siteConfig.keywords,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: canonicalBase,
    languages: {
      "pt-BR": canonicalBase,
    },
  },
  icons: {
    icon: siteConfig.links.favicon,
    shortcut: siteConfig.links.favicon,
    apple: siteConfig.links.favicon,
  },
  openGraph: {
    type: "profile",
    locale: "pt_BR",
    url: canonicalBase,
    siteName: siteConfig.name,
    title: `${siteConfig.author.name} — Analista de Dados & Engenheiro de Dados`,
    description: siteConfig.description,
    firstName: siteConfig.author.name.split(" ")[0],
    lastName: siteConfig.author.name.split(" ").slice(1).join(" "),
    images: [
      {
        url: canonicalBase + "/favicon.png",
        width: 512,
        height: 512,
        alt: siteConfig.author.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.author.name} — Analista de Dados & Engenheiro de Dados`,
    description: siteConfig.description,
    creator: "@alesgc",
    images: [canonicalBase + "/favicon.png"],
  },
  category: "technology",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.author.name,
  alternateName: "Alexandre Camargo",
  url: canonicalBase,
  email: `mailto:${siteConfig.author.email}`,
  telephone: siteConfig.author.phone,
  image: canonicalBase + "/img/1758304366945.jpg",
  jobTitle: "Analista de Dados & Engenheiro de Dados",
  address: {
    "@type": "PostalAddress",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  knowsAbout: [
    "Python",
    "SQL",
    "ETL",
    "Pipelines de Dados",
    "PostgreSQL",
    "Power BI",
    "DAX",
    "Pandas",
    "NumPy",
    "Análise Exploratória de Dados (EDA)",
    "Modelagem de Dados",
    "Dashboarding",
    "Automação de Processos",
    "Git / GitHub",
    "Next.js",
    "TypeScript",
    "Ingestão de Cotações PTAX (BACEN)",
  ],
  sameAs: [
    siteConfig.links.linkedin,
    siteConfig.links.github,
    canonicalBase,
  ],
  worksFor: {
    "@type": "Organization",
    name: siteConfig.name,
    url: canonicalBase,
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
        <Script
          id="ld-json-person"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Navbar />
        <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}