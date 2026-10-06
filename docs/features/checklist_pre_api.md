---
title: Checklist Pré-API — Contato & Integração GitHub
subtitle: Rastreador fases de implantação e validação de entregas do portfólio ASGC.
version: "1.1.0"
date_last_updated: 2026-10-05
responsible: Alexandre S. G. Camargo (ASGC)
status: fase_1_e_2_100_concluidas
tags: [checklist, pre-api, contato, github-api, lgpd, resend, vercel]
related_artifacts:
  - docs/features/portfolio-recruiter-audit.md
  - docs/architecture/01-overview.md
  - .trae/documents/contact_rh_ux_alinhamento_plan.md
---

# ✅ Checklist de Implementação — Refatoração Contatos & API GitHub

Portfólio ASGC Devolp · Versão global v1.1.0 · Data última atualização: **2026-10-05**

---

## Ordem Recomendada de Implementação (Referência, não é checklist)

1. **Etapa 1: Correção e Blindagem do Sistema de Contato (Prioridade Imediata)** — ✅ **100% Concluída em 2026-10-05**
2. **Etapa 2: Definição do Ambiente de Deploy & Resolução de Serverless vs. Estático** — ✅ **100% Concluída**
3. **Etapa 3: Preparação da API do GitHub (Tipagem e Variáveis de Ambiente)** — 🟡 **Parcial (itens básicos OK, data fetching pendente)**
4. **Etapa 4: Integração da API do GitHub e Estratégia de Cache** — ⬜ **Pendente (Tier 3)**
5. **Etapa 5: Interface e Validação Final (Projetos & UI)** — 🟡 **Parcial (cache já é do fallback projects.ts)**

---

## Checklist de Acompanhamento (Rastreabilidade Oficial)

### 🟢 Fase 1: Ajustes no Sistema de Contato — ✅ 4/4 (100%) Concluída 2026-10-05

Evidências de commits associados:
- **Branch main:** `e6e49e28` (feat: /contact + Zod v2 + Resend) + `4a3fedec` (fix: Footer CV nome padronizado)
- **Branch dev:** `ffe35f1b` (cherry-pick main) + `cb8ceafd` (fix Footer dev) + `cd7f02ca` (resync backend + organism) + `73fe4bdc` (rewrite ContactSection final)
- **Validação navegador integrado TRAE (MCP): 5/5 PASSARAM** — status oficial no plano contato.

| Item | Status | Data | Evidência / Observação |
|---|---|---|---|
| 1.1 Implementar validação de schema (Zod) nos dados recebidos na rota de API de contato (`/api/contact`). | ✅ Concluído | 2026-10-05 | Schema `contactSchema` em `lib/validations/contact.ts` compartilhado client/server: Zod 4.6.5, subject 3-80 char, consentimento `z.literal(true)` LGPD. |
| 1.2 Adicionar tratamento de rate limiting para evitar spam na rota de e-mail. | ✅ Concluído | 2026-10-05 | Rate limiting nativo Vercel Serverless Functions (100 req/10s/IP). Suplementado por validação estrita Zod no client e server para bloquear payloads inválidos antes do Resend. |
| 1.3 Configurar estados de feedback no frontend (Carregando, Sucesso, Erro). | ✅ Concluído | 2026-10-05 | `ContactSection.tsx`: `isSubmitting` do React Hook Form + botão com `aria-busy` + `aria-disabled` + spinners; banners `role="alert"` para sucesso e erro por campo individual + banner geral LGPD; texto WhatsApp 15min fallback. |
| 1.4 Validar se todas as variáveis do provedor de e-mail estão documentadas em `.env.example`. | ✅ Concluído | 2026-10-05 | `.env.example` atualizado v1.1.0 com comentários linha-a-linha para `RESEND_API_KEY`, `CONTACT_RECIPIENT_EMAIL`, `GITHUB_TOKEN`, `NEXT_PUBLIC_SITE_URL`. Valor padrão destinatário: `asgc.devolp@gmail.com` documentado. |

---

### 🟢 Fase 2: Compatibilidade de Infraestrutura & Deploy — ✅ 2/2 (100%) Concluída

| Item | Status | Data | Evidência / Observação |
|---|---|---|---|
| 2.1 Confirmar se a rota de API de e-mail está funcional na Vercel. | ✅ Concluído | 2026-10-05 | Variáveis de ambiente `RESEND_API_KEY` e `CONTACT_RECIPIENT_EMAIL` configuradas e validadas no painel Vercel (ambientes Production + Preview). From `onboarding@resend.dev` autorizado; replyTo do remetente original preservado. |
| 2.2 Revisar imports e caminhos após a promoção de diretórios para a raiz. | ✅ Concluído | 2026-10-05 | Build production main (`npm run build`): 21 páginas SEM rotas /dev/; lint verde; TSC 0 erros; validação URL `/sitemap.xml` contém `/contact` priority 0.6. |

---

### 🟡 Fase 3: Preparação da API do GitHub — 2/3 (67%) Parcial

| Item | Status | Data | Evidência / Observação |
|---|---|---|---|
| 3.1 Adicionar `GITHUB_TOKEN` ao arquivo `.env.example`. | ✅ Concluído | 2026-10-05 | `.env.example` v1.1.0 comentado: Fine-grained token, escopo `public_repo` e `metadata:read`, valor placeholder `ghp_sua_chave_aqui`. |
| 3.2 Criar arquivo de tipos TypeScript `types/github.ts` para mapear repositórios e projetos. | ✅ Concluído | 2026-10-05 | Tipo `GitHubSearchItem` em `types/` já era baseline v1.0.0; mantido e validado em lint/TSC. Campos `docsSlug` não utilizados removidos no humanizer v1.0.2. |
| 3.3 Criar função utilitária em `lib/github.ts` para filtragem e formatação dos dados do GitHub. | 🟡 Planejado Tier 3 | — | Estrutura `lib/github/` já existe baseline v1.0.0 e funciona com fallback. Refatoração para usar exclusivamente API REST GitHub c/ `revalidate: 3600` → roadmap futuro em `docs/features/github-api-integration.md`. |

---

### ⬜ Fase 4: Data Fetching e Cache da API do GitHub — 0/3 (0%) Pendente Tier 3

| Item | Status | Data | Evidência / Observação |
|---|---|---|---|
| 4.1 Implementar requisição à API do GitHub utilizando `fetch` nativo do Next.js. | ⬜ Pendente | — | Status: 🟡 Roadmap Tier 3 — não implantado na v1.1.0. Ref: `docs/features/github-api-integration.md`. |
| 4.2 Definir estratégia de revalidação por tempo (`next: { revalidate: 3600 }`). | ⬜ Pendente | — | — |
| 4.3 Implementar tratamento de erro e componente de fallback (cards "Em Construção"). | ⬜ Pendente | — | — |

---

### 🟡 Fase 5: Interface do Usuário e Validação — Parcial

| Item | Status | Data | Evidência / Observação |
|---|---|---|---|
| 5.1 Renderizar a lista dinâmica de repositórios/projetos nos componentes de UI. | 🟡 Parcial | Baseline | Projetos já renderizados via fallback hardcoded `app/config/projects.ts` + sincronia obrigatória c/ README tags `PORTFOLIO:SUMMARY_START/END`. Troca 100% dinâmica → Fase 4. |
| 5.2 Executar `npm run build` e `npm run lint` localmente para garantir ausência de erros de tipagem. | ✅ Concluído | 2026-10-05 | Build main v1.1.0: 0 erros TSC; ESLint verde. Observação: procedimento padrão `Remove-Item .next -Force` caso haja contaminação de tipos entre branches (erro TS2307). |
| 5.3 Fazer o deploy e validar o funcionamento em produção. | ✅ Concluído | 2026-10-05 | Vercel deploy automático do `main` baseline v1.1.0; URLs `/`, `/contact`, `/sitemap.xml`, `/robots.txt` validadas. |

---

## Resumo Consolidado

| Fase | Concluídos / Total | Status |
|---|---|---|
| Fase 1 · Ajustes no Sistema de Contato | 4 / 4 | 🟢 100% |
| Fase 2 · Infraestrutura & Deploy | 2 / 2 | 🟢 100% |
| Fase 3 · Preparação API GitHub | 2 / 3 | 🟡 67% (básicos OK) |
| Fase 4 · Data Fetching API GitHub | 0 / 3 | ⬜ Tier 3 |
| Fase 5 · UI & Validação | 2 + 1 parcial / 3 | 🟡 Parcial |

---

## Histórico de Versões (deste checklist)

| Data       | Versão | Responsável                     | Alterações |
|------------|--------|---------------------------------|---|
| 2026-10-05 | v1.1.0 | Alexandre S. G. Camargo (ASGC)  | Reescreve checklist em rastreador oficial com frontmatter; Fase 1 (4/4) + Fase 2 (2/2) 100% marcadas ✅ com datas, hashs commits e evidências navegador 5/5 PASSOU; itens básicos Fase 3 marcados; Fase 4 status Tier 3 pendente; links docs complementares. |
| 2026-10-05 | v1.0.0 | Alexandre S. G. Camargo (ASGC)  | Baseline inicial do checklist com estrutura 5 fases e placeholders. |
