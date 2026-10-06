# Especificação Formal — Atualização Completa de Documentos ASGC Devolp v1.0.0 → v1.1.0

- **Versão desta especificação:** 1.0.0
- **Data de criação:** 2026-10-05
- **Responsável pela especificação:** Alexandre S. G. Camargo (ASGC Devolp)
- **Natureza:** Entrega documental pós implementação funcional da página/seção `/contato` validada com navegador integrado.
- **Repositório:** https://github.com/alesgc/asgc
- **Produção Vercel:** https://asgc.vercel.app/

---

## 1. Problema

Após a entrega funcional do plano `/plan Reúna-se com o especialista em UI/UX...` (5 verificações navegador integrado PASSARAM, push origin main 2 commits + dev 4 commits REALIZADOS em 2026-10-05), **todos os artefatos documentais do repositório ASGC permanecem desatualizados em relação ao estado real do código (branch main commit 4a3fedec / dev 73fe4bdc)**.

Isso acarreta 4 riscos concretos:
1. **Risco de auditoria (LGPD):** Não há registro em documentação formal da adição do checkbox `consent` obrigatório no formulário, nem do campo `subject` para classificação de emails de RH.
2. **Risco de onboarding técnico:** Documentos de arquitetura descrevem versões antigas do site (1.0.0) sem página `/contato`, Resend HTML aprimorado, `lib/validations/contact.ts` Zod v2.
3. **Risco de consistência semântica:** README.md em estado genérico boilerplate `create-next-app` — não descreve o portfólio Alexandre (Analista/Engenheiro de Dados), estrutura de diretórios real, nem pilha tecnológica atual.
4. **Risco de rastreabilidade:** Nenhum documento contém um registro padronizado de versão (data + responsável + descrição) associado ao número de versão global SemVer. Mudanças de código já enviadas para produção não têm artefato documental homologado.

---

## 2. Usuários da Documentação

| Persona | Objetivo ao ler os docs | Artefato prioritário |
| :-- | :-- | :-- |
| 👩‍💼 **Recrutador / Headhunter** | Validar conformidade, posicionamento, SLA resposta, método contato. | `README.md`, `docs/features/portfolio-recruiter-audit.md` |
| 🧑‍💻 **Desenvolvedor técnico futuro** | Rodar o projeto localmente, entender arquitetura, configurar env, entender estratégia branches. | `README.md`, `docs/architecture/01-overview.md`, `.env.example`, `AGENTS.md`, `CLAUDE.md` |
| 🎨 **Especialista UI/UX ou RH alinhamento** | Consultar requisitos da página de contato, fluxos usuário aprovados, critérios KPI sucesso, validação navegador integrado executada. | `.trae/documents/contact_rh_ux_alinhamento_plan.md`, `docs/features/checklist_pre_api.md` |
| 👨‍💼 **Stakeholder/manager** | Entregar roadmap, cronograma realizado, mudanças de escopo homologadas. | `README.md`, este `spec.md`, `digital-card-roadmap.md`, `github-api-integration.md` |
| 🧑‍⚖️ **Auditor de conformidade (LGPD/ANPD)** | Validar se há registro documental de consentimento de dados coletados via formulário, propósito do tratamento. | `docs/architecture/01-overview.md`, `.trae/documents/contact_rh_ux_alinhamento_plan.md` |

---

## 3. Objetivos (Goals)

### G1: Mapeamento exaustivo e completo
Identificar **TODOS** os artefatos documentais `.md` (exceto skill de terceiros em `.trae/skills/`), `LICENSE`, `AGENTS.md`, `.env.example`, `package.json`, `CLAUDE.md`, planos `.trae/documents/*.md` e especificações `docs/features/*.md` + `docs/architecture/*.md`, para **não omitir nenhum arquivo de relevância**.

### G2: Atualização estratégica + operacional em cada documento
Em cada artefato acrescentar **explicitamente**:
- Evolução do propósito do projeto (passou de boilerplate Next.js → **Portfólio Analista/Engenheiro de Dados Alexandre S. G. Camargo, 2 projetos, 10 seções**).
- Mudanças de escopo (INCLUSÕES: página `/contato`, Zod v2, checkbox LGPD, subject 5 categorias, WhatsApp `?text=` pré, mailto pré, nome CV consistente, sitemap `/contact`, CTA extra 15min WhatsApp).
- Exclusões de escopo homologadas: PERA fora do escopo ASGC (documentado separadamente), CV ATS-friendly preservado para o futuro.
- Decisões técnicas homologadas: cherry-pick individual entre branches main/dev **nunca merge wholesale**, AGENTS.md regras, regra de persistência `.trae/` untracked.
- Referências cruzadas clicáveis `file:///absoluto#L1-L2` entre docs relacionados.

### G3: Controle de versões padronizado + SemVer
- **Versionamento Semântico global:** `package.json` passa de `1.0.0` → `1.1.0` (MINOR: nova funcionalidade `/contato` adicionada, 100% backward-compatible).
- **Registro padrão em CADA documento atualizado:** Tabela (ou bloco frontmatter para arquivos que já tem) `Histórico de Versões` com:
  - `Data (AAAA-MM-DD)`
  - `Versão` (1.1.0)
  - `Responsável` (Alexandre S. G. Camargo / ASGC Devolp)
  - `Alterações` (resumo 1 linha preciso).
- Preservar 100% do histórico de versões anterior já existente (nunca apagar linhas do changelog antigo, só acrescentar no topo).

### G4: Branch isolada + commits atomizados conventional commits
- Branch nova: `feature/atualizacao-documentos-v1.1.0`.
- Commits por grupo lógico de docs, prefixos `docs:` ou `docs(scope):`. Exemplos:
  - `docs(readme): reescreve README com propósito portfólio Alexandre + setup + estrutura dirs v1.1.0`
  - `docs(architecture): atualiza 01-overview com pilha Next16 + /contact + Zod v2 + Resend + LGPD v1.1.0`
  - `docs(features): atualiza auditoria headhunter marcando Tier P0+P1+P2 contato como IMPLANTADOS v1.1.0`

### G5: Validação pré-entrega 4 itens de conformidade
Antes de PR, executar validação manual em 4 eixos:
1. Alinhamento 100% com planejamento atual (cronograma, marcos, requisitos do plano contato + sync branches).
2. Linguagem profissional pt-BR formal uniforme: sem ambiguidades, sem erros gramaticais, terminologia consistente ("Analista/Engenheiro de Dados" nunca "dev front-end"; "consentimento LGPD" nunca "checkbox dado").
3. Nenhuma informação acordada omitida ou modificada indevidamente: NOME VERDADEIRO LinkedIn `techbouros`, telefone (11) 9 6902-7521, email asgc.devolp@gmail.com, UNIVESP "Trancada", etc. — todos os 8 fatos confirmados do summary.
4. Links cruzados, referências, anexos funcionais: `grep` por todos padrões `file:///` e links `https://` confirmando existência.

### G6: Entrega final PR aberto + sumário executivo
- Todas alterações commitadas em `feature/atualizacao-documentos-v1.1.0`.
- `git diff origin/main...HEAD` limpo, só altera documentos + `package.json` (versão) + `.env.example` (comentários explicativos de uso).
- Sumário executivo estruturado no corpo final desta entrega (organizado por categoria documento + justificativa cada alteração).
- Pull Request formalmente aberto de `feature/atualizacao-documentos-v1.1.0` para `main` solicitando revisão equipe.

---

## 4. Não Objetivos (Non-Goals)

**NÃO REALIZAR NESTA ENTREGA, JAMAIS:**
- ❌ Alterar código fonte em `app/`, `lib/services`, `lib/github`, `types/`, `public/` (exceto `package.json.version` e `.env.example` que são artefatos de configuração documental).
- ❌ Apagar ou sobrescrever histórico versões antigo já existente em qualquer doc (ex.: changelog auditoria §7).
- ❌ Modificar `LICENSE` (texto jurídico padrão, não pertence a atualizações de escopo/documentação técnica).
- ❌ Alterar `AGENTS.md` (exceto acrescentar **bloco de registro de versão no topo ou final sem tocar no conteúdo de regras**). Regras do workspace são imutáveis a menos que aprovação explícita separada.
- ❌ Alterar `.trae/skills/humanizer/SKILL.md` (skill instalada, não é documento do projeto ASGC).
- ❌ Implementar funcionalidade nova (projetos SQL, blog, CV ATS-friendly 2026) — tudo isso está preservado para o futuro conforme plano.
- ❌ Merge na main sem PR formal de revisão.

---

## 5. Requisitos Funcionais (RF)

| ID | Enunciado | Evidência observável |
| :-- | :-- | :-- |
| **RF1** | Realizar **mapeamento exaustivo inicial** de todos documentos `.md`, `.env.example`, `package.json`, `LICENSE`, `AGENTS.md`, `CLAUDE.md` com lista classificada. | Arquivo especificação contém matriz mapeamento (abaixo §Matriz). |
| **RF2** | README.md reescrito completamente com: propósito do portfólio, autor, stack real, estrutura de diretórios atual, setup local passo a passo (env, build, dev server), deploy, links dos docs. | Arquivo final `README.md` não tem conteúdo boilerplate create-next-app; nenhuma menção a "learn Next.js" genérica. |
| **RF3** | CLAUDE.md atualizado com instruções complementares ao AGENTS.md para agentes LLM: estrutura de branches, regras de cherry-pick, convenção commit docs, lista de variáveis de ambiente, fatos confirmados (LinkedIn real = techbouros). | Conteúdo mínimo 4 seções em CLAUDE.md final. |
| **RF4** | `docs/architecture/01-overview.md` atualizado com: versão 1.1.0, pilha Next.js **16.3.6** (não 15), nova estrutura diretórios (`app/contact/page.tsx`, `app/dev/*` na branch dev apenas), Zod 4.6.5 validações, Resend v6 com subject formatado + corpo HTML LGPD, página /sitemap.xml com /contact, regras de branches main vs dev. | Todas seções §1 Visão Geral §2 Pilha §3 Estrutura contém dados corretos atualizados. |
| **RF5** | `docs/features/portfolio-recruiter-audit.md` atualizado com: nova versão 1.1.0 no frontmatter, nota atual portfolio **após implantação P0/P1/P2 (incluindo /contato)**, linhas novas no §7 Changelog com data 2026-10-05 marcando Tier P0 e P1 contato/SEO **=IMPLANTADO**, URL LinkedIn atualizada correta `techbouros`, observação PERA fora do escopo ASGC. | Valores do frontmatter atualizados; 3 entradas novas no §7 Changelog (Implementação P0 / P1 / P2). |
| **RF6** | `docs/features/checklist_pre_api.md` atualizado com: registros de versão, **Fase 1 (Sistema Contato) marcada 100% como CONCLUÍDA** com data 2026-10-05 e evidências (Zod v2, Resend, validação navegador integrado), Etapa 2 (Infra Vercel) marcada concluída, checklist por item preenchido ✅ ou ⬜ corretamente. | 100% itens Fase 1 marcados ✅ com evidência. |
| **RF7** | `docs/features/github-api-integration.md` + `digital-card-roadmap.md` atualizados com registro de versão e **nota de status no topo: "Roadmap / Planejado — não implantado na versão 1.1.0, backlog Tier 3/Futuro"** para evitar ambiguidade de entrega. | Bloco Status: presente no topo dos 2 documentos. |
| **RF8** | `.env.example` atualizado com: comentários explicando **uso de cada variável**, valores de exemplo corretos (`CONTACT_RECIPIENT_EMAIL` default = asgc.devolp@gmail.com documentado, `GITHUB_FG_TOKEN` nome atual real, `RESEND_API_KEY` Resend, `NEXT_PUBLIC_SITE_URL` produção e dev exemplos). | Cada variável tem bloco de comentário ≥1 linha. |
| **RF9** | Ambos planos `.trae/documents/contact_rh_ux_alinhamento_plan.md` + `.trae/documents/plan_sync_branches_main_dev.md` recebem **bloco final "Status de Execução"** com data 2026-10-05, checklist de aprovação ✅, lista de commits criados (hashs curtos), validação navegador integrado PASSOU, push origin realizado com sucesso. | Bloco Status final presente nos dois arquivos. |
| **RF10** | `package.json.version` atualizado de `1.0.0` → `1.1.0`. Comentário de changelog no cabeçalho do `README.md` com resumo 1.1.0. | grep version package.json retorna `1.1.0`. |
| **RF11** | Branch criada `feature/atualizacao-documentos-v1.1.0` a partir de `main` atualizada. Commits atomizados 4-6 commits `docs(scope)` conventional. Nenhum commit toca arquivos proibidos Non-Goals. | git log mostra 4-6 commits `docs:` prefixados. |
| **RF12** | Validação pré-entrega executada e registrada em `review.md` fase Review com: checklist 5 itens do usuário passo 5, 4 itens marcados ✅ APROVADO, nenhum item pendente. | `review.md` existe e tem data 2026-10-05 + evidências. |
| **RF13** | Pull Request criado (como descrição do repositório) de `feature/atualizacao-documentos-v1.1.0` → `main`, com título `docs(atualizacao-documentos): v1.1.0 consolida entrega contato + arquitetura + auditoria`, corpo PR contém **sumário executivo estruturado** (igual ao resumo da entrega final ao usuário) por categoria documento + justificativa cada alteração. | PR é aberto ou documento final descreve o PR formalmente caso GitHub CLI não autenticado; sumário executivo existe. |

---

## 6. Requisitos Não Funcionais (RNF)

| ID | Enunciado | Critério de sucesso |
| :-- | :-- | :-- |
| **RNF1** | Linguagem uniforme: **Português Brasileiro (pt-BR)** formal, profissional, 0 ambiguidades, 0 erros gramaticais. | Leitura manual + grep por "vc", "qdo", "pra" = 0 ocorrências. |
| **RNF2** | **Rastreabilidade 100%:** Todas referências a outros documentos usam links absolutos clique no formato `[display](file:///C:/absoluto/path#Lstart-Lend)` (Universal Link Format regras workspace). | Nenhum link relativo entre docs no corpo do texto. |
| **RNF3** | **Conformidade LGPD de dados no documento:** NENHUM documento pode conter valores reais de API keys (RESEND_API_KEY, GITHUB_FG_TOKEN etc.) ou dados pessoais sensíveis que não já são publicamente anunciados no site (WhatsApp, Email, LinkedIn públicos estão OK). | grep por `re_` ou `ghp_` em arquivos md = 0 ocorrências valor real (só `re_sua_chave_aqui` placeholder em .env.example). |
| **RNF4** | **Imutabilidade de históricos:** Qualquer changelog antigo existente (audit portfolio §7) recebe linhas novas NO TOPO; nunca apagar linhas antigas `YYYY-MM-DD Implementação... Pendente`. | diff mostra só adições (+) nas tabelas changelog, nenhuma deleção (-). |
| **RNF5** | **Idempotência:** Qualquer build ou lint pós atualização de documentos deve retornar 0 erros; os docs não podem quebrar código. | `npm run build` + `npm run lint` + `tsc --noEmit` = 0 pós PR. |
| **RNF6** | **Acessibilidade semântica Markdown:** Títulos `# → ######` hierárquicos, listas ordenadas numeradas, tabelas markdown corretas, negrito para ênfase, code blocks com linguagem. | Nenhuma tabela markdown quebrada visualmente em leitura no GitHub. |
| **RNF7** | **Consistência de Nomenclatura:** "Página dedicada `/contato`", "checkbox LGPD `consent`", "Zod v2 `contactSchema`", "Cherry-pick individual main↔dev (nunca merge wholesale)". 0 variações sinônimas. | Grep por "LGPD" + por "/contato" mostra termos consistentes. |

---

## 7. Restrições, Dependências, Premissas e Questões em Aberto

### 7.1 Restrições HARD (não negociáveis)
1. **NENHUM arquivo de código UI/business (`app/**/*` exceto package.json e .env.example) pode ser alterado nesta entrega.**
2. **Regra AGENTS.md §branches**: merge wholesale main↔dev PROIBIDO; commits de docs cherry-pickados para dev depois de PR aprovado na main.
3. **Fatos confirmados PRESERVADOS (não alterar):**
   - LinkedIn verdadeiro = `https://www.linkedin.com/in/techbouros/` (NÃO alesgc)
   - Telefone = (11) 9 6902-7521
   - Email = asgc.devolp@gmail.com
   - UNIVESP situacao = "Trancada · 6 semestres cursados"
   - `public/cv.pdf` PRESERVADO (não substituir ainda por ATS-friendly 2026)
   - PERA fora do escopo ASGC (repositório separado)
   - Branch main não tem `app/dev/*`; branch dev tem 8 rotas dev intactas.

### 7.2 Dependências
- **Dependência 1:** Branch main está atualizada no commit `4a3fedec` (último push de contato realizado). Status: PRONTA.
- **Dependência 2:** 5 verificações navegador integrado PASSARAM (evidência no summary do chat). Status: PRONTA.

### 7.3 Premissas
1. O usuário irá aprovar a especificação e a lista de tarefas em até 1 ciclo de NotifyUser.
2. `gh` CLI está disponível no ambiente para abrir PR formal; caso não esteja autenticado, a entrega final documenta o formato do PR (título, corpo, branch origem/destino) explicitamente em vez de chamar `gh pr create`.
3. Nenhum membro da equipe externo é obrigado a revisar nesta rodada (usuário fará merge depois); o PR é formalmente solicitado no texto final.

### 7.4 Questões em Aberto (Open Questions)
- **OQA1:** Aplicar atualizações dos mesmos registros de versão também na **branch dev** depois do PR merge main? **Decisão provisória SIM** (cherry-pick do PR merge depois); usuário pode sobrescrever em Approve.

---

## 8. Matriz de Mapeamento de Documentos (Resposta ao RF1 Mapeamento exaustivo)

| # | Caminho absoluto documento | Categoria | Ação planejada nesta entrega | Prioridade |
| :--: | :-- | :-- | :-- | :--: |
| 1 | [README.md](file:///C:/Users/asgca/OneDrive/Documentos/GitHub/asgc/README.md) | Raiz — manual geral | REESCRITA COMPLETA | 🔴 ALTA |
| 2 | [package.json](file:///C:/Users/asgca/OneDrive/Documentos/GitHub/asgc/package.json#L1-L34) | Configuração — versão global SemVer | EDITAR somente `version` 1.0→1.1 | 🔴 ALTA |
| 3 | [CLAUDE.md](file:///C:/Users/asgca/OneDrive/Documentos/GitHub/asgc/CLAUDE.md) | Raiz — instruções agente LLM | REESCRITA COMPLETA (atualmente placeholder `@AGENTS.md`) | 🟠 MÉDIA |
| 4 | [.env.example](file:///C:/Users/asgca/OneDrive/Documentos/GitHub/asgc/.env.example) | Configuração — variáveis ambiente | EDITAR comentários explicativos cada var | 🔴 ALTA |
| 5 | [AGENTS.md](file:///C:/Users/asgca/OneDrive/Documentos/GitHub/asgc/AGENTS.md) | Regras workspace | EDITAR FINAL bloco registro versão | 🟠 MÉDIA |
| 6 | [LICENSE](file:///C:/Users/asgca/OneDrive/Documentos/GitHub/asgc/LICENSE) | Jurídico | **NÃO ALTERAR** (Non-Goal) | ⚫ — |
| 7 | [docs/architecture/01-overview.md](file:///C:/Users/asgca/OneDrive/Documentos/GitHub/asgc/docs/architecture/01-overview.md#L1-L35) | Arquitetura geral | ATUALIZAR pilha + estrutura dirs + LGPD + /contact + SemVer 1.1 | 🔴 ALTA |
| 8 | [docs/features/portfolio-recruiter-audit.md](file:///C:/Users/asgca/OneDrive/Documentos/GitHub/asgc/docs/features/portfolio-recruiter-audit.md#L1-L362) | Auditoria Headhunter | ATUALIZAR frontmatter v1.1 + §7 changelog implantados + nota atual | 🔴 ALTA |
| 9 | [docs/features/checklist_pre_api.md](file:///C:/Users/asgca/OneDrive/Documentos/GitHub/asgc/docs/features/checklist_pre_api.md#L1-L56) | Checklist RHS/Contato/GitHub | ATUALIZAR Fase 1 marcada 100% Concluída evidências + registro versão | 🔴 ALTA |
| 10 | [docs/features/github-api-integration.md](file:///C:/Users/asgca/OneDrive/Documentos/GitHub/asgc/docs/features/github-api-integration.md#L1-L181) | Especificação API GitHub | ATUALIZAR bloco status "Planejado/Tier 3 v1.1.0 não implantado" + registro versão | 🟡 BAIXA |
| 11 | [docs/features/digital-card-roadmap.md](file:///C:/Users/asgca/OneDrive/Documentos/GitHub/asgc/docs/features/digital-card-roadmap.md#L1-L68) | Roadmap Cartão Digital | ATUALIZAR bloco status "Roadmap/Tier 3 v1.1.0 não implantado" + registro versão | 🟡 BAIXA |
| 12 | [.trae/documents/contact_rh_ux_alinhamento_plan.md](file:///C:/Users/asgca/OneDrive/Documentos/GitHub/asgc/.trae/documents/contact_rh_ux_alinhamento_plan.md#L1-L228) | Plano /plan contato aprovado | ADICIONAR bloco final §9 Status Execução com hashs commits + validação navegador integrado + push OK | 🔴 ALTA |
| 13 | [.trae/documents/plan_sync_branches_main_dev.md](file:///C:/Users/asgca/OneDrive/Documentos/GitHub/asgc/.trae/documents/plan_sync_branches_main_dev.md#L1-L165) | Plano sync branches anterior | ADICIONAR bloco final §Status Execução data 2026-10-05 commits resultantes + build validado | 🟠 MÉDIA |

**Total:** 13 documentos mapeados · 12 para atualizar · 1 (LICENSE) preservado intacto.

---

## 9. Critérios de Aceitação (AC — Tipos: rule ✅ ou rubric 🎚️)

### 🔍 Regras (AC-R) — binárias, objetivas
- **AC-R1 ✅**: README.md NÃO contém a string `create-next-app` nem `Learn Next.js` (boilerplate removido, reescrito com propósito real Alexandre).
- **AC-R2 ✅**: `grep package.json version` retorna exatamente `"version": "1.1.0"`.
- **AC-R3 ✅**: Todos 12 documentos atualizados contêm um bloco ou linha de registro de versão com `2026-10-05` e `1.1.0`.
- **AC-R4 ✅**: `grep -r 'Alexandre_Camargo_CV' (sem S_G)` = 0 ocorrências em **todos os arquivos** do repositório (código e docs). (regra herdada R4 do plano contato; docs não podem mencionar o nome inconsistente.)
- **AC-R5 ✅**: Matriz de mapeamento §8 acima contém ao menos 12 documentos para atualizar e 1 item NÃO ALTERAR explícito.
- **AC-R6 ✅**: No checklist `checklist_pre_api.md` Fase 1 (Ajustes Sistema Contato) todos itens têm `✅` checked.
- **AC-R7 ✅**: `docs/features/portfolio-recruiter-audit.md` frontmatter `version: "1.1.0"` e `date_last_reviewed: 2026-10-05`.
- **AC-R8 ✅**: `.env.example` contém as variáveis `RESEND_API_KEY`, `CONTACT_RECIPIENT_EMAIL`, `GITHUB_TOKEN`, `NEXT_PUBLIC_APP_ENV`, `NEXT_PUBLIC_SITE_URL` TODAS documentadas com comentário.
- **AC-R9 ✅**: `git log --oneline origin/main..feature/atualizacao-documentos-v1.1.0` retorna N≥4 commits, todos começam com prefixo `docs(scope):` ou `docs:`.
- **AC-R10 ✅**: `diff origin/main...feature/atualizacao-documentos-v1.1.0 --name-only` NÃO lista NENHUM arquivo dentro de `app/` (exceto indiretamente referenciados nos docs, NÃO arquivos .tsx/.ts alterados).
- **AC-R11 ✅**: Documento `.trae/documents/contact_rh_ux_alinhamento_plan.md` contém a string `"validação navegador integrado PASSOU"` (ou equivalente 5/5 PASSARAM).
- **AC-R12 ✅**: Pull Request (ou documentação formal do PR) existe com título `docs(atualizacao-documentos): v1.1.0 consolida entrega contato + arquitetura + auditoria` e branch origem `feature/atualizacao-documentos-v1.1.0` → destino `main`.

### 🎚️ Rubricas (AC-U) — qualidade avaliativa, escala 0-2

- **AC-U1 🎚️ Coerência narrativa transversal (0-2):**
  - 0 = Contradições entre documentos (ex: overview diz Next15, readme diz Next16; audit nota 6.2 vs nota atualizada inconsistente).
  - 1 = Coerente, 1 pequena ambiguidade menor sem impacto (sinônimos).
  - 2 = 100% coerente, termos, versões, datas, hashs commits, fatos LinkedIn/telefone consistentes em TODOS os docs.
  - **Limiar de aprovação ≥ 2**.

- **AC-U2 🎚️ Clareza e profissionalismo linguagem (0-2):**
  - 0 = Gírias, abreviações "vc/qdo/pra", texto boilerplate, tom informal.
  - 1 = OK, 1 frase genérica não alinhada ao perfil Analista Dados.
  - 2 = Texto formal, técnico, profissional, alinhado a área de dados (keywords: ETL, PostgreSQL, Power BI, PTAX BACEN, Zod validações).
  - **Limiar ≥ 2**.

- **AC-U3 🎚️ Qualidade referências cruzadas (0-2):**
  - 0 = Links quebrados, caminhos relativos, sem navegação.
  - 1 = Links existem mas poucos, só 2-3 docs cruzam.
  - 2 = Docs bem ligados, cada documento tem referência a ≥2 outros docs relevantes via file:// links clicáveis.
  - **Limiar ≥ 2**.
