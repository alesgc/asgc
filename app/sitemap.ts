import type { MetadataRoute } from "next";
import { siteConfig } from "@/app/config/site";
import { projects } from "@/app/config/projects";
import { references } from "@/app/config/references";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/references`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const projectRoutes = projects.map((p) => ({
    url: `${baseUrl}/projects/${p.id}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: p.highlight ? 0.9 : 0.75,
  }));

  const referenceRoutes = references.map((r) => ({
    url: `${baseUrl}/references/${r.id}`,
    lastModified,
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...projectRoutes, ...referenceRoutes];
}
