# 📄 Documentação de Arquitetura — ASGC Devolp

Documento oficial da arquitetura técnica do portfólio ASGC Devolp. Contém a pilha de tecnologias, estrutura de diretórios, estratégia de branches, conformidade LGPD e registro de versões.

- **Documento:** `docs/architecture/01-overview.md`
- **Versão deste documento:** v1.1.0 (consistente com versão global `package.json`)
- **Responsável técnico:** Alexandre S. G. Camargo (ASGC)
- **Última revisão:** 2026-10-05

---

## 1. Visão Geral do Projeto

O **ASGC Devolp** é o portfólio profissional e hub digital de **Alexandre S. G. Camargo**, Engenheiro de Software Sênior em transição estruturada para Engenharia, Análise e Ciência de Dados.

O produto opera com dois objetivos de negócio complementares:

1. **Demonstração técnica para recrutadores de dados:** storytelling de impacto, projetos reais de dados (ETL, BI, SQL, Python, BACEN/PTAX) e métricas concretas de economia e performance;
2. **Canal de contato profissional seguro e em conformidade:** página `/contact` valida LGPD, classifica assuntos por categoria (Vaga / Estágio / Parceria / Mentoria / Outro) e entrega via Resend ao destinatário configurado.

- **Repositório GitHub:** [github.com/alesgc/asgc](https://github.com/alesgc/asgc)
- **Produção (Vercel):** [asgc.vercel.app](https://asgc.vercel.app/)
- **Especificação Atualização Documental v1.1.0:** `.trae/specs/atualizacao-documentos-v1.1.0/spec.md`
- **Documentos complementares relacionados:** auditoria headhunter (`docs/features/portfolio-recruiter-audit.md`), plano contato (`.trae/documents/contact_rh_ux_alinhamento_plan.md`), plano sync branches (`.trae/documents/plan_sync_branches_main_dev.md`).

---

## 2. Pilha Tecnológica & Dependências (Atualizada v1.1.0)

| Categoria | Tecnologia | Versão | Função / Utilização |
| :--- | :--- | :--- | :--- |
| **Framework Web** | Next.js | 16.3.6 | App Router, Server Components, Client Components (`"use client"`), Route Handlers (API `/api/contact`) e Metadata Routes (`sitemap.ts` + `robots.ts`). |
| **UI Library** | React | 19.2.8 | Renderização reativa; formulários com `react-hook-form` 7.89. |
| **Linguagem** | TypeScript | 5.9.3 | Tipagem estrita; tipos `GitHubSearchItem` em `types/`. |
| **Estilização** | Tailwind CSS | 4.x | Design tokens, layouts responsivos, sombras, `rounded-xl` em CTAs. |
| **Validação (client + server)** | Zod | 4.6.5 | Schema compartilhado `contactSchema` em `lib/validations/contact.ts`; `z.literal(true)` p/ consentimento LGPD. |
| **Provedor de E-mail** | Resend API | 6.31.x | Rota `/api/contact`; assunto formatado `[${subject}] ${name} — Portfólio ASGC`; HTML p/ legibilidade Gmail. |
| **Integração Portfólio** | GitHub REST API | v3 | Busca repositórios filtro obrigatório tópico `portfolio`; ordenação Dados > Web. |
| **Hospedagem & CI/CD** | Vercel Platform | - | Zero-config; deploy automático branch `main`; variáveis de ambiente em Production + Preview. |
| **Lint & Qualidade** | ESLint + TSC | ESLint 9 | `npm run lint` + `next build` com checagem estrita tipagem. |

Outras bibliotecas: `@headlessui/react` (componentes acessíveis), `@heroicons/react` (ícones), `@tanstack/react-table` (tabelas), `axios` (HTTP client).

---

## 3. Estrutura de Diretórios (Atualizada v1.1.0)

```text
asgc/
├── app/                              # Next.js 16 App Router
│   ├── api/contact/route.ts          # Route Handler: Resend + escape XSS + 2 linhas HTML com LGPD
│   ├── components/
│   │   ├── sections/                 # HeroSection · StackSection · ProjectsSection ·
│   │   │                             #  ReferencesSection · ContactSection (WCAG ARIA completo)
│   │   └── ui/                       # Navbar · Footer · atômicos (Badge, Button, etc)
│   ├── config/                       # Fontes da verdade: site.ts · projects.ts · navigation.ts · socials.ts · references.ts
│   ├── contact/page.tsx              # Página dedicada /contact (metadata próprio, CTA WhatsApp 15min)
│   ├── layout.tsx                    # Root layout, JSON-LD schema.org/Person, fontes, Favicon
│   ├── page.tsx                      # Landing one-page com âncoras #sobre #competencias #projetos #referencias #contato
│   ├── robots.ts                     # Metadata Route → /robots.txt
│   └── sitemap.ts                    # Metadata Route → /sitemap.xml (/contact priority 0.6)
├── docs/
│   ├── architecture/01-overview.md   # ESTE DOCUMENTO
│   └── features/                     # Auditoria · Checklist pré-api · Roadmaps GitHub API · Cartão Digital
├── lib/
│   ├── validations/contact.ts        # Zod schema contactSchema compartilhado (client + server)
│   ├── github/                       # Módulo integração API GitHub, parser tópico portfolio
│   └── services/                     # Separação Repository / Service / Core
├── types/                            # Tipos globais: GitHubSearchItem e derivados
├── public/
│   └── Alexandre_S_G_Camargo_CV.pdf  # CV PDF, nome padronizado em Hero/Contact/Footer (3/3 = este arquivo)
├── .trae/                            # Artefatos TRAE: specs, plans, documents, skills
├── .env.example                      # Placeholders variáveis c/ comentários (NÃO contém chaves reais)
├── AGENTS.md                         # Regras workspace TRAE (corpo imutável; rodapé registra versões)
├── CLAUDE.md                         # Instruções LLM: branches, commits, fatos confirmados
├── package.json                      # Versão global SemVer v1.1.0
└── .gitignore
```

---

## 4. Conformidade LGPD & Fluxo de Contato (Nova seção v1.1.0)

A Lei Geral de Proteção de Dados (Lei 13.709/2018, Art. 7.º, I) exige consentimento explícito e documentado para tratamento de dados pessoais. O portfólio implementa o seguinte fluxo seguro:

1. **Consentimento obrigatório:** `ContactSection` exibe checkbox "Li e concordo com o tratamento dos meus dados conforme LGPD (Lei 13.709/2018)". Schema `contactSchema.consent = z.literal(true, { message })`. Tentativa de submit sem marcar bloqueia com `role="alert"` e erro individual abaixo do campo.
2. **Classificação do assunto:** select nativo 5 categorias alinhadas a RH: `Vaga · Estágio/Trainee · Parceria · Mentoria · Outro`. Assunto e-mail formatado `[${subject}] ${name} — Portfólio ASGC` para filtros Gmail de recrutador.
3. **Registro do consentimento no corpo do e-mail:** Route Handler `/api/contact` injeta duas linhas HTML ANTES do corpo da mensagem:
   - `<p><strong>Consentimento LGPD:</strong> Confirmado pelo remetente via checkbox explícito (Art. 7.º I da Lei 13.709/2018).</p>`
   - `<p><strong>Dados para contato:</strong> ${name} · ${email} · Telefone (opcional se preenchido).</p>`
4. **Proteções técnicas:** XSS escape em todas user inputs; destinatário `CONTACT_RECIPIENT_EMAIL` exclusivamente via env (nunca hardcoded); `replyTo = e-mail do remetente` para resposta direta.

Risco de auditoria ANPD mitigado: comprovante documental do consentimento chega no corpo do próprio e-mail, sem necessidade de base de dados adicional.

---

## 5. Estratégia de Branches & Disciplina de Histórico

| Branch | Propósito | Restrições |
|---|---|---|
| **`main`** | Produção limpa e pronta para deploy Vercel. | **NÃO** contém pasta `app/dev/*` (playground); só recebe código via PR revisado. |
| **`dev`** | Playground desenvolvimento exclusivo. | Contém 8 rotas `/dev/*` experimentais; **nunca** merge wholesale para `main`. |
| **`feature/*`** | Features ou atualizações documentais isoladas. | Ex.: `feature/atualizacao-documentos-v1.1.0` (esta); abertas SEMPRE a partir de `main`. |

**Regra HARD Constraint (corpo AGENTS.md):**
> Nunca execute `git merge dev → main` ou vice-versa em bloco. Sempre use `git cherry-pick <hash>` individual por commit, ou abra feature branches a partir de `main` (como esta).

Referência: plano sync branches (`.trae/documents/plan_sync_branches_main_dev.md`).

---

## 6. SEO & Metadados (Implantações P0/P1 Concluídas)

- `app/layout.tsx`: JSON-LD `schema.org/Person` completo com nome, cargo, `sameAs` (LinkedIn `https://www.linkedin.com/in/techbouros/`, GitHub, WhatsApp (11) 9 6902-7521).
- `app/sitemap.ts`: URLs `/` (priority 1.0) + `/contact` (priority 0.6).
- `app/robots.ts`: Permite indexação Vercel e crawlers.
- `app/contact/page.tsx`: gera `generateMetadata()` dedicada com título, descrição e OpenGraph.

---

## 7. Histórico de Versões (Rastreabilidade Imutável)

Tabela imutável. Nunca apague linhas existentes; sempre acrescente novas no topo.

| Data       | Versão | Responsável                    | Alterações na Arquitetura                                                                 |
|------------|--------|--------------------------------|-------------------------------------------------------------------------------------------|
| 2026-10-05 | v1.1.0 | Alexandre S. G. Camargo (ASGC) | Atualiza Next.js 15 → 16.3.6, React, Zod 4.6.5, Tailwind 4, Resend 6. Adiciona seção §4 **Conformidade LGPD & Fluxo Contato**. Estrutura dirs adiciona `app/contact/`, `app/sitemap.ts`, `app/robots.ts`, `lib/validations/contact.ts`, `docs/features/*`. Adiciona §5 Branches e §6 SEO/metadados. Ajusta nome CV PDF para `Alexandre_S_G_Camargo_CV.pdf`. |
| 2026-10-05 | v1.0.0 | Alexandre S. G. Camargo (ASGC) | Baseline inicial arquitetura: Next.js 15, App Router, sections Hero/Stack/Projects/References/Contact básico, GitHub API inicial, Footer, CV. |
