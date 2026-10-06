# 🤖 Instruções para LLM (CLAUDE.md) — Projeto ASGC Devolp v1.1.0

> **Responsável:** Alexandre S. G. Camargo (Arved Core AI)**
> **Versão:** 1.1.0 (atualização documental 2026-10-05)
> **Contexto:** Este arquivo guia agentes LLM (Claude, TRAE) em interagindo com o repositório ASGC. Regras gerais do workspace ficam em AGENTS.md; este arquivo estende com fatos confirmados e fluxos do ASGC.

---

## 1. Estratégia de Branches (REGRA HARD NÃO QUEBRAR)

| Branch | Propósito | Fluxo de alterações permitido |
|---|---|---|
| **`main`** | Produção limpa. **NÃO CONTÉM** pasta `app/dev/*` (playground). | SÓ recebe código via **Pull Request** de branches `feature/*`. NÃO recebe merge de `dev` de jeito nenhum. |
| **`dev`** | Playground. Contém 8 rotas experimentais `/dev/* exclusivas. | Recebe commits direto; NUNCA faça **MERGE WHOLESALE dev → main. Use **cherry-pick individual por commit hash**. |
| **`feature/*`** | Features e refactors. | Sempre **abra a PARTIR de `main` (nunca de `dev`). Ex.: `feature/atualizacao-documentos-v1.1.0`. |

### Por quê?
A branch `main` precisa permanecer **limpa e pronta para deploy Vercel; o diretório `app/dev/*` (playground) é exclusivo da `dev`, conforme regra hard constraint no `project_memory.md` e `AGENTS.md`. Contaminação main←dev gera PR rejeitado.

---

## 2. Convenção de Commits (Conventional Commits)

**Prefixos obrigatórios:**
- `feat(scope): descrição` — nova funcionalidade (ex.: `feat(contact): adiciona rota /contact dedicada`)
- `fix(scope): descrição` — correção de bug
- `docs(scope): descrição` — **qualquer alteração em documentação** (README, docs/*, .trae/documents, .env.example, CLAUDE.md, AGENTS.md rodapé)
- `chore(scope): descrição` — alterações build / tools / versionamento / sem alteração de código ou docs.
- `refactor(scope): descrição` — refatoração sem mudar comportamento
- `perf(scope): descrição` — otimização performance
- `style(scope): descrição` — formatação, Lint sem mudança comportamento
- `test(scope): descrição` — adiciona ou corrige testes
- `ci(scope): descrição` — CI/CD

Commits devem ser **atômicos por grupo lógico.

---

## 3. Fatos Confirmados (NUNCA ALTERAR sem aprovação EXPLÍCITA do usuário)

Estes valores são DECISÕES do usuário homologadas. Se encontrar valor diferente em algum arquivo, **CORRIJA para o valor abaixo, silenciosamente.**

| Categoria | Valor VERDADEIRO | Onde é usado | Evitar estes valores ERRADOS |
|---|---|---|---|
| Nome profissional completo | **Alexandre S. G. Camargo** | Hero, Footer, /contact, PDF | Alexandre Camargo, Alexandre S. G. C. |
| E-mail profissional | **asgc.devolp@gmail.com** | Resend destinatário, mailto, LinkedIn | Qualquer outro email |
| WhatsApp profissional | **(11) 9 6902-7521** · URL: `https://wa.me/5511969027521` | Hero, Contact, Footer, /contact | Qualquer outro telefone ou DDD diferente 11 |
| LinkedIn handle | **techbouros** · URL: `https://www.linkedin.com/in/techbouros/` | Hero, Footer, JSON-LD schema.org/Person | alesgc (linkedin.com/in/alesgc — URL falsa 404 |
| GitHub username | alesgc · URL: `https://github.com/alesgc/` | Fonte projetos, about |  |
| Graduação UNIVESP | **Engenharia da Computação — Trancada · 6 semestres cursados** | References / Formação | Qualquer status que omita a palavra EXPLÍCITA "Trancada" ou esconda os 6 semestres |
| Nome arquivo CV (download) | **Alexandre_S_G_Camargo_CV.pdf** | Hero, /contact, Footer (3 locais) — SEMPRE este nome | `Alexandre_Camargo_CV.pdf` (sem `_S_G_`), `cv.pdf`, `Alexandre_S_G_Camargo.pdf` |
| CV ATS-friendly | **Postergado para etapa futura. NÃO MODIFICAR `public/cv.pdf` hoje.** | Regra rígida | Qualquer tentativa de reescrever o PDF nesta rodada |
| Projeto PERA | **Fora do escopo ASGC — tratar em seu próprio repositório alesgc/pera** | Planejamento portfólio | Incluir PERA como se fosse entregue nesta rodada de atualização documental |

---

## 4. Variáveis de Ambiente

Local: `.env.local` (NÃO commitado). Produção/Preview: Painel Vercel → Project Settings → Environment Variables.

**Todas documentadas em `.env.example` (ver §1.1.0 com comentários linha-a-linha). Obrigatórias para rodar: `RESEND_API_KEY`, `CONTACT_RECIPIENT_EMAIL`, `GITHUB_TOKEN`, `NEXT_PUBLIC_SITE_URL`.

**Regra extra de segurança: NUNCA em nenhum markdown coloque valor real `re_`, `ghp_` ou `github_pat_` em texto — SOMENTE placeholder `re_sua_chave_aqui`.

---

## 5. Links para Documentação Complementar (Clique via `file:///`)

Quando precisar abrir ou mencionar arquivos em respostas para o usuário, use a sintaxe `[display](file:///C:/absoluto/path#Lstart-Lend)` conforme regras TRAE workspace:

1. Visão Geral + Arquitetura (LGPD, Branches) → [01-overview.md](file:///C:/Users/asgca/OneDrive/Documentos/GitHub/asgc/docs/architecture/01-overview.md)
2. Auditoria Headhunter (8.7/10 · Changelog Tiers) → [portfolio-recruiter-audit.md](file:///C:/Users/asgca/OneDrive/Documentos/GitHub/asgc/docs/features/portfolio-recruiter-audit.md)
3. Checklist Pré-API (Fase1-2 100% OK) → [checklist_pre_api.md](file:///C:/Users/asgca/OneDrive/Documentos/GitHub/asgc/docs/features/checklist_pre_api.md)
4. Plano Contato UI/UX RH (Status Execução 5/5 PASSOU) → [contact_rh_ux_alinhamento_plan.md](file:///C:/Users/asgca/OneDrive/Documentos/GitHub/asgc/.trae/documents/contact_rh_ux_alinhamento_plan.md)
5. Plano Sync Branches main/dev (Status Concluído Baseline antes contato) → [plan_sync_branches_main_dev.md](file:///C:/Users/asgca/OneDrive/Documentos/GitHub/asgc/.trae/documents/plan_sync_branches_main_dev.md)
6. Especificação + Tasks desta Atualização Documental v1.1.0 → [spec.md](file:///C:/Users/asgca/OneDrive/Documentos/GitHub/asgc/.trae/specs/atualizacao-documentos-v1.1.0/spec.md) + [tasks.md](file:///C:/Users/asgca/OneDrive/Documentos/GitHub/asgc/.trae/specs/atualizacao-documentos-v1.1.0/tasks.md)
7. Regras Workspace (corpo NÃO pode ser alterado; só rodapé com registro versão) → [AGENTS.md](file:///C:/Users/asgca/OneDrive/Documentos/GitHub/asgc/AGENTS.md)
8. Fonte da Verdade Projetos (fallback sincronizar com README tags PORTFOLIO) → [projects.ts](file:///C:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/config/projects.ts)
9. Validação Contato Zod v2 (lgpd literal true) → [lib/validations/contact.ts](file:///C:/Users/asgca/OneDrive/Documentos/GitHub/asgc/lib/validations/contact.ts)
