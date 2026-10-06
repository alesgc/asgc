# Tasks — Atualização Documental ASGC Devolp v1.1.0

Artefato vinculado: [spec.md](file:///C:/Users/asgca/OneDrive/Documentos/GitHub/asgc/.trae/specs/atualizacao-documentos-v1.1.0/spec.md)
Data de criação das tarefas: 2026-10-05
Responsável pela implementação: Alexandre S. G. Camargo (ASGC Devolp)

> Mapeamento 1-para-1: **cada tarefa abaixo contém pelo menos 1 Test Requirement (TR) rule ou rubric cobrindo 1 ou mais RF + AC da especificação.**
> Status possíveis: `pending → in_progress → completed / cancelled / blocked`

---

## Task 1: Branching + atualização package.json versão global (SemVer 1.0 → 1.1)

**Descrição:** Criar branch `feature/atualizacao-documentos-v1.1.0` a partir da main atualizada (`4a3fedec`). Atualizar `package.json` versão de `1.0.0` → `1.1.0` (MINOR SemVer: nova funcionalidade backward-compatível página `/contato`). Commit inicial `chore(project): bump version 1.0.0 → 1.1.0`.

**Prioridade:** 🔴 ALTA
**Status:** pending
**Cobertura AC:** AC-R2, AC-R9
**RF mapeados:** RF10, RF11

**Implementação / Passos:**
1. `git checkout main && git status` (confirma clean working tree)
2. `git checkout -b feature/atualizacao-documentos-v1.1.0`
3. Editar package.json `"version": "1.1.0"`
4. Commit único: `git add package.json && git commit -m "chore(project): bump version 1.0.0 → 1.1.0"`
5. `git branch --show-current` confirmar branch nova.

**Test Requirements (TRs):**
- **TR-1.1 (rule ✅):** `git branch --show-current` retorna exatamente `feature/atualizacao-documentos-v1.1.0`.
- **TR-1.2 (rule ✅):** `grep version package.json` retorna `"version": "1.1.0"`.
- **TR-1.3 (rule ✅):** `git log -1 --pretty=%s` retorna a mensagem `chore(project): bump version 1.0.0 → 1.1.0` (ou equivalente convencional).

---

## Task 2: Reescrever README.md (boilerplate Next → Portfólio Alexandre)

**Descrição:** Substituir completamente o conteúdo genérico de `create-next-app` por um README profissional descrevendo o portfólio de Alexandre: propósito Analista/Engenheiro de Dados, autor, stack real (Next 16, React 19, Zod 4, Resend, Tailwind 4, Vercel), estrutura de diretórios atual 2026, setup passo a passo local (git clone, npm i, env example, npm run dev/build), deploy Vercel, links docs (architecture, auditoria, planos .trae/). Adicionar bloco `Changelog Versões` no topo `v1.1.0 2026-10-05` com resumo entrega contato.

**Prioridade:** 🔴 ALTA
**Status:** pending
**Cobertura AC:** AC-R1, AC-U1, AC-U2, AC-U3
**RF mapeados:** RF2, RF3 (parcial), RF10

**Implementação / Passos:**
1. Ler o arquivo atual de referência (atualmente boilerplate, verificado já).
2. Escrever novo README com seções: # ASGC Devolp · Portfólio Alexandre S. G. Camargo | Visão Geral | Stack Tecnológica | Estrutura de Diretórios | Configuração Local (passo a passo) | Deploy (Vercel) | Documentação Complementar (links clicáveis) | Histórico de Versões (tabela 1.1.0 nova linha + 1.0.0 baseline).
3. Adicionar links cruzados para `docs/architecture/01-overview.md`, `docs/features/portfolio-recruiter-audit.md` e `.trae/documents/contact_rh_ux_alinhamento_plan.md`.
4. Commit: `git add README.md && git commit -m "docs(readme): reescreve README com propósito portfólio Alexandre + setup + changelog v1.1.0"`

**Test Requirements (TRs):**
- **TR-2.1 (rule ✅):** `Select-String README.md -Pattern 'create-next-app|Learn Next.js' -SimpleMatch | Measure-Object | Select -Expand Count` retorna `0` (zero ocorrências boilerplate).
- **TR-2.2 (rule ✅):** README.md contém as strings exatas: `"1.1.0"`, `"2026-10-05"`, `"Analista de Dados"`, `"Engenheiro de Dados"`, `"Zod"`, `"Resend"`.
- **TR-2.3 (rubric 🎚️ Clareza links cruzados escala 0-2):** `Select-String README.md -Pattern 'file:///' | Measure-Object` ≥ 3 links cruzados. Nota: (2=OK, 1=1-2, 0=nenhum). Pass threshold ≥ 2.
- **TR-2.4 (rule ✅):** Histórico de versões contém 2 linhas: v1.1.0 + v1.0.0.

---

## Task 3: Atualizar docs/architecture/01-overview.md (pilha, dirs, /contact, LGPD, Zod, Resend)

**Descrição:** Atualizar o documento de arquitetura: (1) Substituir Next 15 → Next **16.3.6** (package.json atual real). (2) Atualizar Estrutura de Diretórios com rotas novas: `app/contact/page.tsx`, `app/api/contact/route.ts` Zod v2, `app/sitemap.ts` com rota /contact, branches main vs dev (playground tem `app/dev/*` 8 rotas). (3) Nova seção §4 "Conformidade LGPD e Fluxo Contato" explicando consentimento z.literal(true), subject, Resend HTML com registro de consentimento. (4) Bloco final Histórico Versões adicionar linha v1.1.0.

**Prioridade:** 🔴 ALTA
**Status:** pending
**Cobertura AC:** AC-R3, AC-U1, AC-R8
**RF mapeados:** RF4

**Implementação / Passos:**
1. Atualizar §2 Pilha linha "Next.js 15" para **"Next.js 16.3.6 (App Router, Server Components, Metadata Route sitemap/robots)"**; atualizar React 19, Tailwind CSS 4; Zod 4.6.5; Resend 6.x.
2. §3 Estrutura: adicionar linha `app/contact/page.tsx · Página dedicada /contato (Server Component)` e linha `lib/validations/contact.ts · Zod v2 validações client + server compartilhadas`.
3. Nova seção §4 "Conformidade LGPD §7 I (13.709/2018)" com: checkbox obrigatório, z.literal(true), registro no corpo email Resend, reply-to correto, subject `[${subject}] ${name} — Portfólio ASGC`.
4. Bloco final "Histórico de Versões" com tabela.
5. Commit: `git add docs/architecture/01-overview.md && git commit -m "docs(architecture): atualiza 01-overview para Next 16, /contact, Zod v2, LGPD Resend v1.1.0"`

**Test Requirements (TRs):**
- **TR-3.1 (rule ✅):** Arquivo contém "Next.js 16.3.6" e NÃO contém "Next.js 15" mais.
- **TR-3.2 (rule ✅):** Arquivo contém strings "LGPD", "consentimento", "z.literal(true)", "/contact", "sitemap".
- **TR-3.3 (rule ✅):** Seção Histórico Versões tem linha `1.1.0 | 2026-10-05 | Alexandre S. G. Camargo | Atualização arquitetura + página /contato + LGPD Zod v2 Resend`.

---

## Task 4: Atualizar documentos docs/features/* (auditoria, checklist, github api, roadmap card)

**Descrição:** 4 arquivos de features atualizados como grupo lógico:
- (A) `portfolio-recruiter-audit.md`: frontmatter v1.1.0, date_last_reviewed 2026-10-05, nota_atual_portfolio atualizada (após Tier P0/P1/P2 implementados), §7 Changelog adicionar 3 linhas novas "Implementação Tier P0 concluída | 2026-10-05", "Implementação Tier P1 SEO e metadados concluída | 2026-10-05", "Página dedicada /contato + LGPD + subject RH implantado | 2026-10-05". Observação PERA fora do escopo.
- (B) `checklist_pre_api.md`: Fase 1 "Correção Blindagem Sistema Contato" todos itens marcados ✅ com data 2026-10-05 + evidência hash commit contato. Fase 2 "Compatibilidade Infra Vercel" concluída ✅. Checklist copiado no topo marcado.
- (C) `github-api-integration.md`: Bloco topo "Status: 🟡 Planejado (Backlog Tier 3) — Não implantado na versão 1.1.0" + registro versão.
- (D) `digital-card-roadmap.md`: Bloco topo "Status: 🟡 Roadmap Futuro (Tier 3) — Não implantado na versão 1.1.0" + registro versão.

**Prioridade:** 🟠 MÉDIA
**Status:** pending
**Cobertura AC:** AC-R6, AC-R7, AC-U1
**RF mapeados:** RF5, RF6, RF7

**Implementação / Passos:** Commit individual ou 4 commits separados por feature (mantém atomicidade conventional commits). Sugestão:
- `docs(features/audit): atualiza frontmatter + changelog auditoria v1.1.0 marca P0/P1/P2 implantados`
- `docs(features/checklist): marca Fase 1 Contato 100% concluída + evidências v1.1.0`
- `docs(features/github-api): status bloco Planejado Tier 3 v1.1.0`
- `docs(features/digital-card): status bloco Roadmap Tier 3 v1.1.0`

**Test Requirements (TRs):**
- **TR-4.1 (rule ✅):** audit frontmatter `version: "1.1.0"` e `date_last_reviewed: "2026-10-05"`.
- **TR-4.2 (rule ✅):** `checklist_pre_api.md` todos 4 itens Fase 1 prefixados `- [x]` ou `- [✅]`.
- **TR-4.3 (rule ✅):** github-api + digital-card ambos contêm a string exata `"Status:"` + "Não implantado na versão 1.1.0".
- **TR-4.4 (rubric 🎚️ Coerência auditoria vs overview (0-2)):** Nenhum dado conflitante entre overview e auditoria (versão Next 16, LinkedIn techbouros, /contact existe). Passo 2.

---

## Task 5: Atualizar .env.example + CLAUDE.md + AGENTS.md + .trae/documents/* plans

**Descrição:** Grupo final: artefatos de config/env e planos de trabalho.
- (A) `.env.example`: Comentar cada variável com propósito. `CONTACT_RECIPIENT_EMAIL` documentar "Destinatário padrão = asgc.devolp@gmail.com quando não setado. Recebe emails Resend API /api/contact". Adicionar exemplo `NEXT_PUBLIC_SITE_URL` produção e dev.
- (B) `CLAUDE.md`: Placeholder `@AGENTS.md` → substituído por instruções LLM: Branches (cherry-pick não merge), Convenção commits, Fatoss Confirmados (LinkedIn real, WhatsApp, CV filename), Variáveis Ambiente, Links Docs.
- (C) `AGENTS.md`: **NÃO MODIFICAR O CORPO REGRAS**, apenas adicionar no FINAL (última linha) bloco `### Registro de Versão/Atualização Documental 2026-10-05 v1.1.0` com 1 linha de resumo.
- (D) `.trae/documents/contact_rh_ux_alinhamento_plan.md`: FINAL DO ARQUIVO nova seção §9: "Status de Execução (2026-10-05 v1.1.0)": Aprovação ✅ Usuário. Commits criados: main `e6e49e28`, `4a3fedec` / dev `ffe35f1b`, `cb8ceafd`, `cd7f02ca`, `73fe4bdc`. Validação navegador integrado 5/5 PASSOU. Push origin MAIN 74c5f18a→4a3fedec e DEV d7de6e87→73fe4bdc ✅.
- (E) `.trae/documents/plan_sync_branches_main_dev.md`: FINAL DO ARQUIVO nova seção "Status de Execução (2026-10-05)": Build main 21 páginas ✅, build dev 29 páginas ✅, push realizado ✅, cherry-picks sem conflitos ✅.

**Prioridade:** 🟠 MÉDIA
**Status:** pending
**Cobertura AC:** AC-R8, AC-R11, AC-R3, AC-U3
**RF mapeados:** RF3, RF8, RF9

**Implementação / Passos:** Commits por artefato:
- `docs(env): comenta cada variável .env.example com propósito e exemplos v1.1.0`
- `docs(claude): substitui placeholder por instruções LLM agentes (branches, fatos, vars, docs links) v1.1.0`
- `docs(agents): adiciona rodapé registro de versão 2026-10-05 v1.1.0 sem alterar regras`
- `docs(plans/contact): seção final status execução com hashs commits + validação navegador PASSOU + push realizado v1.1.0`
- `docs(plans/sync-branches): seção final status execução builds validados push ok v1.1.0`

**Test Requirements (TRs):**
- **TR-5.1 (rule ✅):** `.env.example` TODAS variáveis (NEXT_PUBLIC_APP_ENV, NEXT_PUBLIC_SITE_URL, RESEND_API_KEY, CONTACT_RECIPIENT_EMAIL, GITHUB_TOKEN) têm linha de comentário `#` acima.
- **TR-5.2 (rule ✅):** `CLAUDE.md` não é mais `"@AGENTS.md"` 1 linha; contém ≥4 seções (Branches, Convencional Commits, Fatos Confirmados, Variáveis Ambiente).
- **TR-5.3 (rule ✅):** `.trae/documents/contact_rh_ux_alinhamento_plan.md` contém exatamente a string `"5/5 PASSOU"` (ou equivalente 5 verificações navegador PASSARAM).
- **TR-5.4 (rule ✅):** `AGENTS.md` conteúdo original (regras nextjs-agent-rules BEGIN/END) intacto; NÃO há linha apagada dentro do bloco de regras.

---

## Task 6: Validação Pré-Entrega (4 itens passo 5 usuário) + Review.md + PR

**Descrição:** Última tarefa: Executar os 4 checks de validação passo 5 do usuário, escrever `review.md` fase Review Spec Mode com evidências, e criar PR formal ou documento descritivo do PR caso gh CLI não autenticado.
Validação 4 checks:
- (V1) Alinhamento 100% com planejamento atual (cronograma B1-B6 plano contato + sync branches).
- (V2) Linguagem pt-BR formal profissional: 0 gírias, 0 erros gramaticais.
- (V3) Nenhum fato acordado omitido (LinkedIn, telefone, email, nome CV, etc.) em nenhum doc.
- (V4) Links cruzados + referências 100% corretas (`grep file:///` caminhos existem em disco).
Depois PR `feature/atualizacao-documentos-v1.1.0` → `main` título e corpo sumário executivo.

**Prioridade:** 🔴 ALTA
**Status:** pending
**Cobertura AC:** AC-R12, TODAS regras e rubrics como final check.
**RF mapeados:** RF12, RF13

**Implementação / Passos:**
1. Executar validação V1-V4 com `grep`/`Select-String` e `Test-Path` para links file:///.
2. Criar `.trae/specs/atualizacao-documentos-v1.1.0/review.md` com resultados + evidências.
3. Criar PR GitHub: (gh CLI autenticado usa `gh pr create -B main -H feature/atualizacao-documentos-v1.1.0 -t "..." -f readme-pr-body.md`; não autenticado documenta PR em review.md final).
4. Commit final do review.md: `git add .trae/specs/.../review.md && git commit -m "docs(review): validação pré-entrega 4 checks OK + PR descritivo v1.1.0"`
5. `git push -u origin feature/atualizacao-documentos-v1.1.0`

**Test Requirements (TRs):**
- **TR-6.1 (rule ✅):** `review.md` contém 4 blocos V1 a V4; 4 blocos iniciados com `✅ APROVADO`.
- **TR-6.2 (rule ✅):** Para cada link `file:///<path>` encontrado em todos os docs `md`: `Test-Path <path>` retorna True (100% existem).
- **TR-6.3 (rule ✅):** Branch remote `origin/feature/atualizacao-documentos-v1.1.0` existe; `git log origin/main..origin/feature/atualizacao-documentos-v1.1.0 --oneline | Measure-Object | Select -Expand Count` ≥ 6 commits.
- **TR-6.4 (rubric 🎚️ Sumário executivo PR qualidade 0-2):** Corpo PR ou sumário review.md lista CADA documento atualizado com justificativa. (2=Lista e justifica todos 12; 1=Lista 8-11; 0=<7). Pass threshold 2.
- **TR-6.5 (rule ✅):** Todo o conjunto de regras AC-R1 até AC-R12 são TRUE (check final do reviewer). Todas rubrics AC-U1/U2/U3 pontuação = 2 (limiares).
