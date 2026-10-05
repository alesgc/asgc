export interface GitHubRepository {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  fork: boolean;
  archived: boolean;
  disabled: boolean;
  created_at: string;
  updated_at: string;
  pushed_at: string;
}

export interface FormattedProject {
  id: number | string;
  title: string;
  description: string;
  repoUrl: string;
  liveUrl?: string;
  stars: number;
  forks: number;
  language: string;
  topics: string[];
  updatedAt: string;
}