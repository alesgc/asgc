**`docs/features/github-api-integration.md`**

---

```markdown
# 📄 Arquitetura & Especificação: Integração com API do GitHub e Sync de Documentação

## 1. Visão Geral
Este documento define a estratégia de arquitetura para dinamizar a seção de projetos utilizando a **API REST do GitHub**, estabelecendo um fluxo de trabalho em que **o README.md de cada repositório serve como fonte da verdade para a documentação técnica exibida no portfólio**.

---

## 2. Estrutura de Metadados e Sincronização (Site ↔ Repositório)

Para que um repositório no GitHub seja consumido e exibido corretamente pelo portfólio **ASGC Devolp**, ele deve seguir o padrão de metadados e tags (*topics*).

### 2.1 Mapeamento via Topics no GitHub
No painel do GitHub, o repositório deve conter a tag obrigatória `portfolio` para ser listado, além das tags de categorias e destaques:

| Tag/Topic no GitHub | Mapeamento no Site (`ProjectCategory`) | Efeito no Portfólio |
| :--- | :--- | :--- |
| `portfolio` | **Obrigatório** | Filtra e autoriza a exibição no site. |
| `highlight` | `highlight: true` | Adiciona a badge de **Destaque**. |
| `sql` | `category: "SQL"` | Associa à aba e filtro de SQL. |
| `python` | `category: "Python"` | Associa à aba e filtro de Python. |
| `web` | `category: "Web"` | Associa à aba e filtro de Web. |
| `datascience` | `category: "DataScience"` | Associa à aba e filtro de Ciência de Dados. |

---

## 3. Padrão Estruturado do `README.md` no Repositório

Para manter o repositório limpo e ao mesmo tempo permitir que a API do site leia a documentação detalhada, o `README.md` do repositório deve adotar o seguinte modelo padronizado:

```markdown
# 🚀 [Nome do Projeto]

<!-- PORTFOLIO:SUMMARY_START -->
Descrição concisa e objetiva do projeto focada no valor de negócio ou resolução técnica (usada no card da listagem).
<!-- PORTFOLIO:SUMMARY_END -->

---

## 01. Motivação & Contexto
<!-- PORTFOLIO:MOTIVATION_START -->
Descreva o problema real, necessidade de negócio ou desafio técnico que motivou o desenvolvimento.
<!-- PORTFOLIO:MOTIVATION_END -->

## 02. Solução Técnica & Implementação
<!-- PORTFOLIO:SOLUTION_START -->
Explicação das escolhas de arquitetura, padrões utilizados e decisões de implementação.
<!-- PORTFOLIO:SOLUTION_END -->

## 03. Impacto & Resultados
<!-- PORTFOLIO:IMPACT_START -->
Métricas obtidas, ganho de performance, horas economizadas ou resultados operacionais.
<!-- PORTFOLIO:IMPACT_END -->

```

> **Nota de Processamento:** O site usará expressões regulares (Regex) baseadas nas tags HTML estáticas (`<!-- PORTFOLIO:... -->`) para extrair exatamente os blocos necessários, ignorando badges de CI/CD ou links internos do GitHub.

---

## 4. Arquitetura da Solução no Next.js (App Router)

### 4.1 Camada de Fetching & Cache (Serverless API Route)

Criaremos uma rota interna (`/api/projects/route.ts`) que consome a API do GitHub com estratégias de cache para evitar atingir o limite de requisições (*Rate Limit*).

```typescript
// app/api/projects/route.ts
import { NextResponse } from "next/server";

const GITHUB_USERNAME = "alesgc";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN; // Opcional, aumenta o rate limit para 5000 req/h

export async function GET() {
  try {
    // 1. Busca repositórios com a tag "portfolio"
    const response = await fetch(
      `[https://api.github.com/search/repositories?q=user:$](https://api.github.com/search/repositories?q=user:$){GITHUB_USERNAME}+topic:portfolio`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          ...(GITHUB_TOKEN && { Authorization: `Bearer ${GITHUB_TOKEN}` }),
        },
        // Cache ISR (Incremental Static Regeneration) de 1 hora
        next: { revalidate: 3600 },
      }
    );

    const data = await response.json();

    // 2. Transforma a resposta no formato ProjectItem do site
    const projects = await Promise.all(
      data.items.map(async (repo: any) => {
        // Busca o README.md bruto (raw) do repositório
        const readmeRes = await fetch(
          `[https://raw.githubusercontent.com/$](https://raw.githubusercontent.com/$){GITHUB_USERNAME}/${repo.name}/main/README.md`
        );
        const readmeContent = readmeRes.ok ? await readmeRes.text() : "";

        return parseGitHubRepoToProject(repo, readmeContent);
      })
    );

    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json(
      { error: "Falha ao buscar projetos do GitHub" },
      { status: 500 }
    );
  }
}

```

---

## 5. Algoritmo de Parser (`parseGitHubRepoToProject`)

O parser traduz os dados brutos da API do GitHub para o tipo `ProjectItem` utilizado pelo front-end:

```typescript
import { ProjectItem, ProjectCategory } from "@/app/config/projects";

export function parseGitHubRepoToProject(repo: any, readme: string): ProjectItem {
  // Extrai trechos marcados pelas tags no README ou usa fallbacks
  const extractSection = (startTag: string, endTag: string): string => {
    const regex = new RegExp(`${startTag}\\s*([\\s\\S]*?)\\s*${endTag}`);
    const match = readme.match(regex);
    return match ? match[1].trim() : "";
  };

  // Mapeamento de Categoria via Topics do GitHub
  const topics: string[] = repo.topics || [];
  let category: Exclude<ProjectCategory, "Todos"> = "Web"; // Categoria default

  if (topics.includes("sql")) category = "SQL";
  else if (topics.includes("python")) category = "Python";
  else if (topics.includes("datascience")) category = "DataScience";

  return {
    id: repo.name,
    title: repo.description ? repo.name.replace(/-/g, " ").toUpperCase() : repo.name,
    description: extractSection("<!-- PORTFOLIO:SUMMARY_START -->", "<!-- PORTFOLIO:SUMMARY_END -->") || repo.description || "",
    category,
    tags: topics.filter((t) => !["portfolio", "highlight", "sql", "python", "web", "datascience"].includes(t)),
    githubUrl: repo.html_url,
    deployUrl: repo.homepage || undefined,
    highlight: topics.includes("highlight"),
    details: {
      motivation: extractSection("<!-- PORTFOLIO:MOTIVATION_START -->", "<!-- PORTFOLIO:MOTIVATION_END -->"),
      solution: extractSection("<!-- PORTFOLIO:SOLUTION_START -->", "<!-- PORTFOLIO:SOLUTION_END -->"),
      techStack: repo.language ? [repo.language, ...topics] : topics,
      impact: extractSection("<!-- PORTFOLIO:IMPACT_START -->", "<!-- PORTFOLIO:IMPACT_END -->"),
    },
  };
}

```

---

## 6. Próximos Passos & Cronograma de Implementação

1. **Fase 1 (Mão na Massa):** Configurar a chave `GITHUB_TOKEN` no `.env.local` e Vercel.
2. **Fase 2 (Repositórios):** Atualizar o `README.md` dos repositórios que serão exibidos, adicionando a tag `portfolio` e as anotações `<!-- PORTFOLIO:... -->`.
3. **Fase 3 (Front-end Integration):** Atualizar o arquivo `app/config/projects.ts` para servir como *fallback* offline caso a API do GitHub falhe ou atinja limite de taxa.

```

---

### Mensagem de Commit Recomendada

```bash
git commit -m "docs(features): create specification for GitHub API integration and README sync system"

```