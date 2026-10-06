# Sync Clean Branches (main ↔ dev) + Push Implementation Plan

**Data:** 2026-10-05  
**Objetivo:** Reverter a contaminação da branch `main` pelo merge indevido de `app/dev/*` (playground) + sincronizar o commit de UX novo nas duas branches + preparar push origin limpo, em conformidade com as regras do workspace em [AGENTS.md](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/AGENTS.md) e os tiers P0/P1/P2/P3 da auditoria headhunter.

---

## Repository Research (Estado atual diagnosticado)

### Estado em 2026-10-05 21:26 BRT

| Branch | HEAD local | HEAD origin | Delta | Risco |
|---|---|---|---|---|
| **`main`** | `768086d9` `feat(ux): refina CTAs hero, filtros com badge de contagem e ARIA` | `d2e78726` `fix(copy): humaniza textos da pagina com skill humanizer` | **Ahead 13 commits** | 🔴 **ALTO** — contém 11 arquivos de `app/dev/*` (playground) que **NÃO DEVEM** existir na main de produção |
| **`dev`** | `15e9521e` `feat(ux): refina CTAs hero, filtros com badge de contagem e ARIA` (cherry-pick de `768086d9`) | `45792159` `fix(copy): humaniza textos da pagina com skill humanizer` | **Ahead 1 commit** | 🟢 BAIXO — delta é APENAS o commit UX novo, playground intacto |

### Arquivos perdidos na main (foram inseridos pelo `Merge branch 'dev'` em `ba02da0a`) — **PRECISAM SER REMOVIDOS DA MAIN**:

```
app/dev/(ui)/buttons/page.tsx
app/dev/(ui)/cards/page.tsx
app/dev/(ui)/forms/page.tsx
app/dev/(ui)/inputs/page.tsx
app/dev/(ui)/organisms/page.tsx
app/dev/(ui)/tables/page.tsx
app/dev/(ui)/typography/page.tsx
app/dev/layout.tsx
app/dev/page.tsx
app/components/UserTable.tsx          (componente usado só no app/dev/tables)
.gitignore                             (linhas foram alteradas, precisa reverter para estado origin/main)
```

### Arquivos que representam o commit de UX de negócio — **PRECISAM PERMANECER**:

```
app/components/sections/HeroSection.tsx
app/components/sections/ProjectsSection.tsx
app/components/sections/ReferencesSection.tsx
app/components/sections/ContactSection.tsx
```

### Regras de hard constraint confirmadas:

1. Workspace rules [AGENTS.md](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/AGENTS.md): branch `main` = produção limpa, SEM `app/dev/`; branch `dev` = playground COM `app/dev/*`.
2. Commit semânticos; cherry-pick para propagação, **NÃO MERGE WHOLESALE de dev para main**.
3. Todas as edições de copy (Tier P3 humanização) + SEO (Tier P1) + identidade (Tier P2) foram aplicadas em origin/main em commits anteriores (`b3a3e34b`, `69931eb9`, `81aed65c`, `d2e78726`) — **não podemos perder esses 4 commits + 6 commits de Tier P0 já enviados**.

---

## Files and Modules

### Arquivos/paths a serem alterados (objetivo: LIMPAR main de dev)

| Path | Ação no plano |
|---|---|
| `app/dev/` **diretório inteiro** (todas 7 rotas + layout + page) | **Remover da main** · Deve existir apenas na `dev` |
| `app/components/UserTable.tsx` | **Remover da main** · Usado exclusivamente por `app/dev/(ui)/tables/page.tsx` |
| `.gitignore` | **Reverter** para o estado de `origin/main` (arquivo `d2e78726`) |
| `app/components/sections/HeroSection.tsx` | **Manter** na main · Conteúdo do commit `768086d9` (CTAs hero novos) |
| `app/components/sections/ProjectsSection.tsx` | **Manter** na main · Filtros com badge contagem + ARIA |
| `app/components/sections/ReferencesSection.tsx` | **Manter** na main · Filtros Formação com badge contagem |
| `app/components/sections/ContactSection.tsx` | **Manter** na main · Copy RH-friendly nova |
| Histórico de commits da `main` (reconstruído) | Reset soft/híbrido para `origin/main` + re-commit APENAS os 4 arquivos de UX |

### Branches afetadas:

- `main` → reset para estado de produção limpo + commit novo UX cherry-picked limpo (sem `app/dev/*`)
- `dev` → **nenhuma alteração estrutural**. Apenas **confirmar** que cherry-pick de UX está lá (está, commit `15e9521e`)

---

## Implementation Steps (Ordem de dependência OBRIGATÓRIA)

### Etapa 1 — Resgate seguro do commit de UX de negócio (main)

Antes de apagar qualquer coisa na main: **garantir que temos os 4 diffs de UX salvos e aplicáveis**.

1. **Checkout para `main`** (estamos em dev atualmente, precisa mudar)
2. **Criar patch de UX atual**, relativo a `origin/main`:
   - Salvamos os 4 arquivos (`HeroSection, ProjectsSection, ReferencesSection, ContactSection`) em um patch temporário (worktree copy ou `git diff origin/main -- <4 arquivos>` > `.trae/documents/patch_ux_20261005_2126.diff`) para backup.

### Etapa 2 — Limpeza RÁPIDA e SEGURA da main (Hard Reset Híbrido)

3. **Reset `--mixed` da main** para o estado de `origin/main` (`d2e78726`). 
   - `--mixed` = apontar HEAD para origin/main, **MANTER workspace files em disco como "unstaged"**.
   - Resultado esperado: apontamento limpo; os 11 arquivos de `app/dev/*` aparecem em "Untracked/Modified" + os 4 de UX aparecem em "Modified".
4. **Descarte seletivo dos arquivos de playground** (tudo que não pertence a main):
   - `git restore --staged .` (limpa index, se houver)
   - `git checkout origin/main -- .gitignore` (reverte o .gitignore)
   - `git clean -fd -- app/dev/` (remove diretório `app/dev/*` INTEIRO da working tree da main)
   - `git restore origin/main -- app/components/UserTable.tsx` ou `git rm --cached app/components/UserTable.tsx` (remove UserTable do track)
5. **Adicionar de volta APENAS os 4 arquivos de UX** em staged
   - `git add app/components/sections/HeroSection.tsx app/components/sections/ProjectsSection.tsx app/components/sections/ReferencesSection.tsx app/components/sections/ContactSection.tsx`

### Etapa 3 — Commit limpo na main

6. **Criar o commit semântico novo (main limpa)** — mesma mensagem do original, mas com ancestry puro vindo de `origin/main` sem o merge `ba02da0a`:
   - `git commit -m "feat(ux): refina CTAs hero, filtros com badge de contagem e atributos ARIA de acessibilidade"`
   - Esperado: **HEAD da main = 1 commit de UX** ahead de `origin/main`, não mais 13.

### Etapa 4 — Validar build da main (LIMPA, SEM app/dev/)

7. `git status` → confirmação: "On branch main · Your branch is ahead of 'origin/main' by 1 commit. · Working tree clean"
8. `git branch --show-current` → main
9. **Build da main**:
   - `Remove-Item -Recurse -Force .next` (limpar cache dev que pode conter rotas antigas)
   - `npm run build`
   - **Critério de sucesso**: **contagem de páginas = 20 rotas** (home + /projects + /projects/* + /references + /references/* + /api/contact + /robots.txt + /sitemap.xml). **QUALQUER ROTA /dev/ NÃO PODE APARECER**. Se aparecer `/dev/`, limpeza falhou.

### Etapa 5 — Sincronização cherry-pick para a dev (main → dev)

10. **Checkout para `dev`**
11. **Reset da dev** para descartar o cherry-pick que fizemos na rodada passada (`15e9521e` que tinha contaminação de ancestry):
    - `git reset --hard origin/dev` (retorna a HEAD para `45792159` = último commit enviado antes dessa rodada)
    - Resultado: dev volta ao estado original de Tier P3. Todos os arquivos de `app/dev/*` voltam intactos.
12. **Cherry-pick do commit LIMPO da main** (aquele criado no passo 6, SHA diferente de `768086d9`, o novo limpo):
    - `git cherry-pick <sha-novo-commit-ux-main>`
    - Esperado: 0 conflitos. Cherry-pick só toca 4 arquivos de sections; não toca `app/dev/*` ou `UserTable`.

### Etapa 6 — Build playground dev final e push (se solicitado pelo usuário)

13. **Build da dev**, limpa cache:
    - `Remove-Item -Recurse -Force .next ; npm run build`
    - **Critério de sucesso**: **28 páginas** (20 de produção + 8 rotas `/dev/*` + `/dev` layout e page). `/dev/buttons` → `/dev/typography` todas precisam existir.
14. **Push preparado** (não executar push sem autorização do usuário no passo anterior, se quiser separar os dois):
    - `git push origin main`
    - `git push origin dev`

---

## Dependencies and Considerations

1. **Arquivo `next-env.d.ts` em `.gitignore`**: No diagnóstico de status, apareceu `M next-env.d.ts` — este arquivo está em `.gitignore` (linha 32 do estado origin/main). Qualquer diff de `next-env.d.ts` no working tree é artefato de build local, **nunca commitá-lo**.
2. **Pasta `.trae/` está "untracked"**: Contém o skill humanizer e este documento de plano. Ela **deve permanecer untracked** no repositório remoto. Não adicionar em commit. Não adicionar ao `.gitignore` — já está sendo ignorada por default do TRAE workspace.
3. **Bloqueio de Sandbox TRAE para escrita em arquivos `.git/*`**: Operações de `git reset`, `git clean`, `git cherry-pick` usam `update-ref`, `packed-refs`, `index.lock` que podem ser bloqueados pelo Sandbox. **Se falhar, usuário executa os comandos Etapa 2-Etapa 5 em PowerShell externo**. Este plano prevê fallback (documento de patch `.diff` em .trae/documents/) para que ele possa ser aplicado manualmente.
4. **Não perda de Tier P0/P1/P2/P3 já enviados**: O reset em `origin/main` pega o estado `d2e78726`, que já contém todos os commits de Tier P0, P1, P2, P3 anteriores. Perda zero de código já enviado.
5. **Idempotência**: Plano pode ser repetido 2x sem efeito colateral — se já estiver limpo, o `git diff --name-only` das 4 seções confere e para na Etapa 3.

---

## Validation (Checklist pós implementação)

| Item | Valor esperado MAIN | Valor esperado DEV |
|---|---|---|
| Contagem de páginas build | **20 páginas / 0 rotas /dev/** | **28 páginas / 8 rotas /dev/** |
| Existe `app/dev/` no filesystem? | **NÃO — diretório não existe** | SIM — existe com layout + page + 7 subrotas |
| Existe `app/components/UserTable.tsx`? | NÃO | SIM |
| `git diff origin/main..HEAD --name-only` | **4 arquivos** (as 4 sections) | **4 arquivos** (as 4 sections) |
| Ahead commits vs origin | 1 commit — `feat(ux): ...` | 1 commit — cherry-pick idêntico |
| `npm run lint` (ambas) | 0 erros, 0 warnings | 0 erros, 0 warnings |
| `npx tsc --noEmit` (ambas) | 0 erros | 0 erros |
| Browser snapshot localhost: Hero CTAs | 2 botões pill, sombra, hover seta, aria-label | Mesmo comportamento |
| Browser snapshot localhost: Filtros projetos | Badge contagem (2)(1)(1)(1) e ARIA tabs | Mesmo comportamento |

---

## Risks

| Risco | Probabilidade | Impacto | Mitigação |
|---|---|---|---|
| **Git reset falha por Sandbox TRAE (EPERM write .git/)** | **Alta (60%)** — já ocorreu no repo do PERA ao tentar commit | Bloco geral de escrita. | **Mitigação**: Gerar patch `.diff` dos 4 arquivos no passo 1; se reset falhar, usuário executa em PowerShell externo (Windows Terminal): `git checkout main; git reset --mixed origin/main; git clean -fd -- app/dev/; git restore origin/main -- .gitignore app/components/UserTable.tsx; git apply .trae/documents/patch_ux.diff; git commit -m "feat(ux)..."; git checkout dev; git reset --hard origin/dev; git cherry-pick main; git push origin main dev` |
| **Conflito de cherry-pick em ContactSection (dev tem versão diferente?)** | Baixa (<5%) — Ambos branches estão com Tier P3 de copy, mesmo pai | Se aparecer conflito, resolver sempore usar a versão MAIN do arquivo (`git checkout --theirs <file>`), já que é o código limpo mais novo. |
| **Build da main volta a ter 28 páginas por cache de `.next` antigo** | Média (25%) | Mitigação implementada em Etapa 4 Passo 9: `Remove-Item -Recurse -Force .next` SEMPRE ANTES de buildar main, para garantir que o planner do Next.js não use rotas desatualizadas. |
| **Deletar por engano `UserTable` também na dev** | Média (20%) — `git clean` pode ser executado acidentalmente na dev | Mitigação: Etapa 4 (dev) **NÃO EXECUTA git clean**, apenas `git reset --hard origin/dev` + `git cherry-pick`. O UserTable é restaurado pelo hard reset da origin/dev. |
| **Commit message duplicado confunde histórico** | Baixa | Mitigação: nova mensagem mantém mesma semântica, mas o SHA é diferente por causa do pai limpo (sem merge). Não há duplicação de content no tree final do repo. |

---

## 8. Status de Execução (Homologado 2026-10-05 · v1.1.0)

> **Aprovação Usuário:** ✅ Aprovado NotifyUser plano sync branches antes do início.

### 8.1 Resultado Final pós Entrega UX + Contato (v1.1.0 — Baseline antes da atualização documental)

| Item | Valor Obtido MAIN | Valor Obtido DEV | Status |
|---|---|---|---|
| Contagem páginas build (`next build`) | **21 páginas / 0 rotas /dev/** | **29 páginas / 8 rotas /dev/ intactas** | ✅ **Atingido** (aumento 1 página em ambas por /contact, comparado ao plano baseline 20→21 e 28→29, esperado). |
| Existe pasta `app/dev/` no filesystem MAIN? | ❌ **NÃO — diretório inexistente** | ✅ SIM (8 subrotas dev: playground, UserTable, etc.) | ✅ Atingido |
| Existe `app/components/UserTable.tsx`? | ❌ NÃO (excluído limpo na main) | ✅ SIM (restaurado hard reset origin/dev) | ✅ Atingido |
| Cherry-picks UX sem conflitos | N/A | 4 arquivos sections aplicados SEM conflitos (`ContactSection`, `HeroSection`, `ProjectsSection`, `ReferencesSection`) | ✅ Atingido |
| Contaminação main←dev /dev/*? | NENHUMA. Build main 0 rotas dev. | — | ✅ Atingido |
| Ahead commits vs origin (ANTES entrega contato) | 1 commit `feat(ux): melhora CTAs, badges contagem, copy RH contato` | 1 commit cherry-pick idêntico | ✅ Atingido |
| `npm run lint` ambas branches | 0 erros, 0 warnings | 0 erros, 0 warnings | ✅ Atingido |
| `npx tsc --noEmit` ambas branches | 0 erros | 0 erros | ✅ Atingido |
| Browser snapshot Hero CTAs e filtros | 2 botões `rounded-xl` + sombra `shadow-accent/20` + micro-animação direcional; filtros `role="tablist"` + badges contagem dinâmica | Mesmo comportamento main | ✅ Atingido |
| Push origin final (baseline antes contato) | `main=74c5f18a` | `dev=d7de6e87` | ✅ **Push realizado sem conflitos** |

### 8.2 Nota sobre contaminação corrigida ANTES deste plano

Na semana da auditoria houve um **commit acidental merge wholesale dev→main que contaminou a main com 13 commits de playground e a pasta `app/dev/*`**. Este plano de sync branches **foi criado especificamente para desfazer essa contaminação e re-sincronizar as branches para baseline limpa (main 74c5f18a limpa / dev d7de6e87 com playground)**. O resultado final foi **100% sem contaminação, builds 21/29 páginas, push origin sem conflitos.**

### 8.3 Histórico de Versões (deste plano)

| Data       | Versão | Responsável                     | Alterações |
|------------|--------|---------------------------------|---|
| 2026-10-05 | v1.1.0 | Alexandre S. G. Camargo (ASGC)  | Adiciona seção §8 **Status de Execução** completo com 10 itens do checklist validados, nota sobre contaminação desfeita, baseline final branches `main=74c5f18a` / `dev=d7de6e87` antes da entrega contato. |
| 2026-10-05 | v1.0.0 | Alexandre S. G. Camargo (ASGC)  | Baseline do plano sync: 7 seções (Problema, Non-Goals, Solução, Branches, Etapas Execução 1-6, Validation Checklist, Risks). |
