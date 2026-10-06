# ASGC Devolp · Portfólio Analista e Engenheiro de Dados

Portfólio profissional pessoal de **Alexandre S. G. Camargo**, construído para apresentar minha trajetória, stack técnica e projetos de dados a recrutadores, headhunters e parceiros. O foco principal é demonstrar competência em Engenharia e Análise de Dados com storytelling de impacto, métricas concretas e conformidade com boas práticas de UI/UX, acessibilidade WCAG AA e LGPD (Lei 13.709/2018).

Deploy de produção: **[asgc.vercel.app](https://asgc.vercel.app/)**

---

## Visão Geral

Sou Engenheiro de Software Sênior em transição estruturada para Engenharia e Ciência de Dados, com formações em andamento em Ciência de Dados (EBAC) e Engenharia da Computação (UNIVESP, 6 semestres cursados, atualmente trancada). Este portfólio:

- Apresenta minha stack diária para dados e a integra com o front do site;
- Lista projetos indexados dinamicamente do GitHub através do tópico `portfolio`, priorizando projetos de dados antes de projetos web;
- Disponibiliza rota de contato `/contact` integrada com Resend, validação LGPD e categorias de assunto alinhadas a RH;
- Implementa SEO estruturado com `JSON-LD schema.org/Person`, sitemap.xml, robots.txt e metadados dedicados por página.

---

## Stack Tecnológica (v1.1.0)

| Camada | Tecnologia | Versão |
|---|---|---|
| Framework Web | Next.js App Router | 16.3.6 |
| UI & Linguagem | React + TypeScript | 19.2.8 · 5.9.3 |
| Estilo | Tailwind CSS | 4.x |
| Validação (client + server) | Zod | 4.6.5 |
| Formulários | react-hook-form + @hookform/resolvers | 7.89.x · 5.9.x |
| Provedor de E-mail | Resend API | 6.31.x |
| Deploy & Edge | Vercel (zero-config) | - |
| Lint & Tipagem | ESLint 9 + TSC estrito | - |

Outras bibliotecas em uso: `@headlessui/react`, `@heroicons/react`, `@tanstack/react-table`, `axios`.

---

## Estrutura de Diretórios

```
asgc/
├── app/                          # Next.js 16 App Router (Server/Client Components)
│   ├── api/contact/route.ts      # Route Handler: envio e-mail via Resend + registro LGPD
│   ├── components/
│   │   ├── sections/             # Hero, Stack, Projects, References, Contact
│   │   └── ui/                   # Footer, Navbar, atômicos reutilizáveis
│   ├── contact/page.tsx          # Página /contact dedicada (metadata exclusivo)
│   ├── layout.tsx                # Root layout + JSON-LD schema.org/Person
│   ├── page.tsx                  # Home (landing one-page c/ âncoras)
│   ├── robots.ts                 # Metadata route: robots.txt
│   └── sitemap.ts                # Metadata route: sitemap.xml (inclui /contact)
├── docs/                         # Documentação técnica do projeto
│   ├── architecture/01-overview.md
│   └── features/                 # Auditorias, checklists e roadmaps futuros
├── lib/
│   ├── validations/contact.ts    # Schema Zod compartilhado (client + server) c/ LGPD
│   ├── github/                   # Integração c/ API GitHub (tópico portfolio)
│   └── services/                 # Serviços de domínio (separação Repository/Service)
├── types/                        # Tipos compartilhados (GitHubSearchItem, etc.)
├── public/
│   └── Alexandre_S_G_Camargo_CV.pdf  # CV (versão ATS-friendly futura)
├── .env.example                  # Placeholders de variáveis c/ comentários
├── AGENTS.md                     # Regras workspace TRAE / nextjs-agent (imutável)
├── CLAUDE.md                     # Instruções LLM (branches, commits, fatos)
├── package.json                  # Versão global (SemVer) v1.1.0
└── .trae/                        # Planos, especificações e evidências TRAE (local)
```

---

## Configuração e Desenvolvimento Local

### Pré-requisitos
- Node.js ≥ 20 (v20 LTS recomendado)
- npm v10+
- (Opcional, para testar formulário) Chaves `RESEND_API_KEY`, `GITHUB_TOKEN` e-mail destinatário válidos.

### Passo a passo

```bash
# 1. Clone
git clone https://github.com/alesgc/asgc.git
cd asgc

# 2. Instale dependências
npm install

# 3. Configure variáveis de ambiente (consulte .env.example para detalhes)
copy .env.example .env.local
# Edite .env.local e preencha os placeholders

# 4. Servidor desenvolvimento (http://localhost:3000)
npm run dev

# 5. Build produção + lint + tipagem
npm run lint       # ESLint 9
npm run build      # Gera build otimizado Vercel
# Limpar cache Next em caso de TS2307 (contaminação entre branches):
#   Remove-Item .next -Force -Recurse
```

---

## Deploy (Vercel)

Este repositório segue deploy zero-config na Vercel. Variáveis de ambiente obrigatórias no painel Vercel (Production + Preview):

- `GITHUB_TOKEN` — Fine-grained token com escopo *public_repo* e *metadata:read*;
- `RESEND_API_KEY` — Chave Resend para envio do formulário `/contact`;
- `CONTACT_RECIPIENT_EMAIL` — Destinatário final dos e-mails de contato;
- `NEXT_PUBLIC_SITE_URL` — Produção: `https://asgc.vercel.app`; Preview/localhost: `http://localhost:3000`.

### Branches e Disciplina de Histórico

- **`main`**: produção limpa. NÃO contém a pasta `app/dev/*` (playground TRAE).
- **`dev`**: playground de desenvolvimento. Contém 8 rotas `/dev/*` experimentais.
- **Regra forte**: nunca faça merge direto `main ↔ dev`; use cherry-pick individual por commit.
- **Branch desta atualização**: `feature/atualizacao-documentos-v1.1.0`.

---

## Documentação Complementar

| Documento | Descrição | Caminho |
|---|---|---|
| Visão Arquitetural (v1.1.0) | Pilha, estrutura, conformidade LGPD, histórico versões | `docs/architecture/01-overview.md` |
| Auditoria Tech Recruiter (v1.1.0) | Pontos fortes, pontos críticos e changelog de implementação | `docs/features/portfolio-recruiter-audit.md` |
| Checklist Pré-API Contato | Rastreador fases 1 e 2 (100% Fase 1 concluída em 2026-10-05) | `docs/features/checklist_pre_api.md` |
| Roadmap Integração GitHub | Status planejado Tier 3 (não implantado) | `docs/features/github-api-integration.md` |
| Roadmap Cartão Digital | Status roadmap futuro Tier 3 (não implantado) | `docs/features/digital-card-roadmap.md` |
| Plano Contato UI/UX + RH | Especificação + Status Execução 5/5 PASSOU navegador | `.trae/documents/contact_rh_ux_alinhamento_plan.md` |
| Plano Sync Branches main/dev | Especificação + Status Execução builds + cherry-picks | `.trae/documents/plan_sync_branches_main_dev.md` |
| Especificação Atualização Documental v1.1.0 | 13 RF, 7 RNF, 12 AC, Matriz 13 docs | `.trae/specs/atualizacao-documentos-v1.1.0/spec.md` |

---

## Histórico de Versões

| Data       | Versão Global | Responsável                     | Alterações                                                                 |
|------------|---------------|---------------------------------|---------------------------------------------------------------------------|
| 2026-10-05 | **v1.1.0**    | Alexandre S. G. Camargo (ASGC)  | **MINOR SemVer.** Entrega da rota `/contact` c/ Resend + Zod v2 + LGPD; auditoria P0/P1/P2 SEO implantadas; reordenação categorias; navbar Tier P2; UNIVESP marcada "Trancada · 6 sem"; atualização documental completa 12 artefatos; acessibilidade WCAG AA nos CTAs, filtros e formulário. |
| 2026-10-05 | **v1.0.0**    | Alexandre S. G. Camargo (ASGC)  | **MAJOR SemVer (baseline).** Lançamento inicial do portfólio Next.js 16 com Hero, Stack, Projects (GitHub API), References, Footer; branches main (limpa) + dev (playground 8 rotas /dev/*); integração inicial GitHub filtro tópico `portfolio`; CV PDF; lint e build verdes. |
