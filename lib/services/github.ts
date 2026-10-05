import { FormattedProject, GitHubRepository } from "@/types/github";
import { projects as fallbackProjects, ProjectItem } from "@/app/config/projects";

const GITHUB_USERNAME = "alesgc";

type GitHubSearchItem = Pick<
  GitHubRepository,
  | "name"
  | "description"
  | "html_url"
  | "homepage"
  | "stargazers_count"
  | "forks_count"
  | "language"
  | "topics"
  | "pushed_at"
>;

/**
 * Extrai seções marcadas com tags HTML <!-- PORTFOLIO:SECAO_START --> ... <!-- PORTFOLIO:SECAO_END --> no README
 */
function extractReadmeSection(readme: string, startTag: string, endTag: string): string {
  if (!readme) return "";
  const regex = new RegExp(`${startTag}\\s*([\\s\\S]*?)\\s*${endTag}`);
  const match = readme.match(regex);
  return match ? match[1].trim() : "";
}

/**
 * Converte um ProjectItem local (de config/projects.ts) para o tipo FormattedProject consumido na UI
 */
function mapProjectToFormatted(project: ProjectItem): FormattedProject {
  return {
    id: project.id,
    title: project.title,
    description: project.description,
    repoUrl: project.githubUrl || `https://github.com/alesgc/${project.id}`,
    liveUrl: project.deployUrl,
    stars: 0,
    forks: 0,
    language: project.category === "SQL" ? "SQL" : project.category === "Python" ? "Python" : "TypeScript",
    topics: project.tags,
    updatedAt: "Atualizado recentemente",
  };
}

/**
 * Busca repositórios com o topic 'portfolio' e sincroniza descrições do README.md
 */
export async function getGitHubProjects(): Promise<FormattedProject[]> {
  const token = process.env.GITHUB_TOKEN;
  const searchUrl = `https://api.github.com/search/repositories?q=user:${GITHUB_USERNAME}+topic:portfolio`;

  try {
    const response = await fetch(searchUrl, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      console.warn(`[GitHub API] Falha na busca (${response.status}). Utilizando fallback estático.`);
      return fallbackProjects.map(mapProjectToFormatted);
    }

    const data = await response.json();
    const items = data.items || [];

    if (items.length === 0) {
      return fallbackProjects.map(mapProjectToFormatted);
    }

    // Processa os repositórios retornados e busca o README.md para extrair o resumo customizado
    const formattedProjects: FormattedProject[] = await Promise.all(
      items.map(async (repo: GitHubSearchItem) => {
        let customSummary = "";

        try {
          const readmeRes = await fetch(
            `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repo.name}/main/README.md`,
            { next: { revalidate: 3600 } }
          );

          if (readmeRes.ok) {
            const readmeText = await readmeRes.text();
            customSummary = extractReadmeSection(
              readmeText,
              "<!-- PORTFOLIO:SUMMARY_START -->",
              "<!-- PORTFOLIO:SUMMARY_END -->"
            );
          }
        } catch {
          // Utiliza fallback silencioso do README em caso de erro
        }

        const topics: string[] = repo.topics || [];

        return {
          id: repo.name,
          title: repo.name === "asgc" ? "Portfólio & Hub ASGC Devolp" : repo.name === "pera" ? "Ecossistema Financeiro Pera" : repo.name.replace(/-/g, " ").toUpperCase(),
          description: customSummary || repo.description || "Projeto desenvolvido em engenharia de software e análise de dados.",
          repoUrl: repo.html_url,
          liveUrl: repo.homepage || undefined,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          language: repo.language || "TypeScript",
          topics: topics.filter((t) => !["portfolio", "highlight"].includes(t)),
          updatedAt: new Date(repo.pushed_at).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          }),
        };
      })
    );

    return formattedProjects;
  } catch (error) {
    console.error("[GitHub API] Erro ao buscar repositórios com a tag portfolio:", error);
    return fallbackProjects.map(mapProjectToFormatted);
  }
}