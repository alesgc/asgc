import { GitHubRepository, FormattedProject } from "@/types/github";

/**
 * Formata e filtra os repositórios do GitHub para exibição no portfólio.
 * 
 * @param repos Lista de repositórios brutos vindos da API do GitHub.
 * @param featuredOnly Se true, filtra apenas repositórios com tópicos específicos ou não-forks.
 */
export function formatGitHubProjects(
  repos: GitHubRepository[],
  featuredOnly: boolean = false
): FormattedProject[] {
  if (!Array.isArray(repos)) return [];

  return repos
    .filter((repo) => {
      // Ignora forks, repositórios arquivados ou desativados
      if (repo.fork || repo.archived || repo.disabled) return false;

      // Opcional: Se featuredOnly for true, filtra repositórios com a tag 'featured' ou 'portfolio'
      if (featuredOnly) {
        return repo.topics?.includes("featured") || repo.topics?.includes("portfolio");
      }

      return true;
    })
    .map((repo) => ({
      id: repo.id,
      title: repo.name,
      description: repo.description || "Projeto desenvolvido em TypeScript/Python.",
      repoUrl: repo.html_url,
      liveUrl: repo.homepage && repo.homepage.startsWith("http") ? repo.homepage : undefined,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      language: repo.language || "TypeScript",
      topics: repo.topics || [],
      updatedAt: new Date(repo.pushed_at).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    }))
    .sort((a, b) => b.stars - a.stars); // Ordena por estrelas de forma decrescente
}