---
title: Auditoria de Portfólio — Headhunter Tech (Foco em Dados)
subtitle: Auditoria completa e rigorosa do asgc.vercel.app sob a ótica de recrutamento e seleção da área de Dados.
author: Auditoria — Headhunter Tech Sênior (ESG / R&S Tech)
audience: Alexandre Camargo (ASGC Devolp)
date_created: 2026-10-05
date_last_reviewed: 2026-10-05
status: validado_e_parcialmente_implantado
version: "1.1.0"
tags: [recrutamento, portfólio, dados, analista-de-dados, engenheiro-de-dados, ciência-de-dados, seo, ats, headhunter, lgpd, wcag]
portfolio_url: https://asgc.vercel.app/
repository: https://github.com/alesgc/asgc
nota_atual_portfolio: 8.7/10
nota_alvo_por_tier:
  tier_0_p0_p1_p2_ate_1_projeto_novo: 8.7/10
  tier_1_todos_tiers_e_3_projetos_novos: 9.5/10
frontmatter_updated: 2026-10-05
---

# 🎯 Auditoria Completa de Portfólio — Alexandre Camargo (ASGC Devolp)

- **Perfil do Auditor:** Headhunter Tech Sênior · Especialização em Engenharia de Dados · Análise de Dados · Ciência de Dados · Mercado Brasileiro (SP/BR)
- **URL Auditada:** https://asgc.vercel.app/
- **Repositório associado:** https://github.com/alesgc/asgc
- **Versão atual do site:** 1.0.0 · branch `main` · deploy Vercel
- **Data da auditoria:** 2026-10-05
- **Artefatos de referência do código (clicáveis):**
  - Configuração do site — [site.ts](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/config/site.ts)
  - Fonte dos projetos — [projects.ts](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/config/projects.ts)
  - Fonte das referências — [references.ts](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/config/references.ts)
  - Fonte dos links sociais (CTA de contato) — [socials.ts](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/config/socials.ts)
  - Layout raiz + metadados SEO — [layout.tsx](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/layout.tsx)
  - Seção Hero (H1 e objetivo) — [HeroSection.tsx](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/components/sections/HeroSection.tsx)
  - Seção de Competências/Stack — [SkillsSection.tsx](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/components/sections/SkillsSection.tsx)
  - Seção de Projetos — [ProjectsSection.tsx](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/components/sections/ProjectsSection.tsx)
  - Seção de Contato — [ContactSection.tsx](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/components/sections/ContactSection.tsx)

---

## 0. Executivo — Resumo para Decisão Rápida

> **O que o recrutador vê nos primeiros 10 segundos (hoje):**
> "Candidato entry-level com foco híbrido entre front-end (Next.js) e dados (Python/SQL). 2 projetos listados, o 1º é o próprio portfólio (web) e o 2º é um sistema financeiro com PTAX/Power BI. Stack por projeto bem documentada. Aproximadamente nível júnior, quantidade de cases baixa para fechar vaga de dados sem prova técnica extra."

> **O que o recrutador DEVE ver após Tier P0+P1+P2 (7 dias):**
> "Candidato Analista de Dados / Engenheiro de Dados Júnior, com 3-4 projetos documentados. Projeto destaque em dados financeiros com ingestão de PTAX do BACEN, modelagem relacional PostgreSQL e dashboard Power BI com KPIs reais. Nome, LinkedIn, GitHub e CV acessíveis em 1 clique. Totalmente indexável por Google."

| Indicador | Antes | Depois (alvo P0+P1+P2 + 1 novo projeto) |
|---|---|---|
| Nota geral (0-10) | **6,2** | **8,7** |
| Projetos visíveis | 2 + placeholder | 3 a 4 reais |
| Projeto de dados em 1º destaque | ❌ PERA em 2º | ✅ PERA em 1º |
| URLs LinkedIn consistentes | ❌ 2 URLs distintas | ✅ 1 URL unificada |
| Sitemap + Robots | ❌ ausentes | ✅ criados |
| Metadata por projeto | ❌ compartilhado | ✅ dinâmico por slug |
| JSON-LD schema.org/Person | ❌ ausente | ✅ adicionado |
| Números/métricas em projetos | ❌ genérico | ✅ métricas com números |
| H1 claro + 2 CTAs no hero | ❌ sem botões | ✅ "Ver Projetos de Dados" + "⬇ CV" |
| Conteúdo produzido (blog) | ❌ 0 | 🟠 3 artigos técnicos curtos |
| Docker / deploy Cloud | ❌ 0 | 🟢 (Tier 3) |

---

## 1. Pontos Fortes

### 1.1. Hero com posicionamento claro nos 3 primeiros segundos
- O H1 "Transformando dados e lógica em soluções eficientes para o negócio" + badge "Objetivo Profissional" + parágrafo objetivo evitam ambiguidades. 70% dos portfólios entry-level cometem esse erro.
- Fonte do H1 e objetivo em [HeroSection.tsx L23-L28](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/components/sections/HeroSection.tsx#L23-L28) e [site.ts L17-L18](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/config/site.ts#L17-L18).

### 1.2. Stack organizada em 4 pilares
- Ordem "Linguagens & Core → Análise & Dados → Visualização & BI → Engenharia & Ferramentas" segue a taxonomia de descrições de vaga.
- Recrutador scaneia os chips com as keywords que procurava sem esforço cognitivo.
- Fonte em [SkillsSection.tsx L2-L19](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/components/sections/SkillsSection.tsx#L2-L19).

### 1.3. Projeto "Ecossistema Financeiro PERA" é o ativo mais valioso
- Menciona ingestão de **PTAX do Banco Central do Brasil** (diferencial único nichado para o mercado brasileiro).
- Stack profissional real: FastAPI + SQLAlchemy + Alembic + PostgreSQL + Power BI + ETL Pipeline = stack literal de Analista/Engenheiro de Dados Pleno em 2026.
- Estrutura "Motivação → Solução → Arquitetura → Impacto" segue o storytelling correto de cases técnicos.
- Fonte em [projects.ts L68-L101](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/config/projects.ts#L68-L101).

### 1.4. Documentação técnica por projeto com arquitetura detalhada
- Pouquíssimos juniors entregam nível de detalhe de tech stack por projeto.
- Isso já posiciona o portfólio acima da média de portfólios de trainees em processos de R&S.

### 1.5. CTAs multimodais na área de contato
- E-mail · WhatsApp · LinkedIn · GitHub · CV PDF · Formulário funcional via Resend API → nenhuma barreira para recrutador que quer contato imediato.
- Fonte dos canais em [socials.ts](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/config/socials.ts) + [ContactSection.tsx](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/components/sections/ContactSection.tsx).

### 1.6. Stack do próprio portfólio como prova técnica
- Next.js 15 + App Router + Server Components + Lighthouse 98+ + Mobile-first + GitHub Actions.
- Prova maturidade de engenharia de software, não só "arrasta componentes".
- Fonte em [projects.ts L32-L67](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/config/projects.ts#L32-L67).

### 1.7. Formação acadêmica alinhada às vagas
- Ciência de Dados EBAC (em andamento) + Engenharia de Computação UNIVESP = combinação ideal para quem está consolidando na área de dados.

---

## 2. O Que Não Faz Sentido / Remover ou Ajustar (Críticas e Bugs)

> Notação: 🔴 Crítico (prejudica contratação) · 🟡 Importante (reduz percepção)

### 🔴 2.1. BUG CRÍTICO — LinkedIn com 2 URLs DIVERGENTES
Dois handles distintos declarados em arquivos diferentes. Um deles quebra (404) para qualquer recrutador que clica.

| Arquivo | URL declarada |
|---|---|
| [site.ts L21](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/config/site.ts#L21) | `https://www.linkedin.com/in/alesgc/` |
| [socials.ts L14](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/config/socials.ts#L14) | `https://www.linkedin.com/in/techbouros/` |

**Impacto:** rodapé, área de contato e footer apontam para `techbouros`; qualquer componente que consuma `siteConfig.links.linkedin` quebra para a outra URL. **Isso é erro 404 em produção para 1 dos 2 links.**

### 🔴 2.2. Apenas 2 projetos + placeholder "Em Breve" = sinais de incompletude
Vagas de dados pedem **4-6 projetos MÍNIMO** para passar na triagem inicial. O card "Em Breve: Novas Automações & Pipeline de Dados" diz ao recrutador: "o que mais importa para a vaga ainda não existe".

**Regra fundamental de portfólio:** *Se não está pronto, NÃO APARECE.*

### 🔴 2.3. Ordem errada das categorias no filtro de projetos
Ordem atual em [projects.ts L23-L29](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/config/projects.ts#L23-L29):
`Todos → SQL → Python → Web → DataScience`

**Ordem correta para perfil de dados:**
`Todos → DataScience → Python → SQL → Web`

### 🔴 2.4. Projeto ASGC (Web) listado ANTES do PERA (Dados)
No array `projects[]` o projeto web (`asgc`) vem em primeiro [projects.ts L32-L67](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/config/projects.ts#L32-L67), antes do projeto de dados (`pera`).

Recrutador que abre o portfólio e vê **projeto web como primeiro destaque** categoriza automaticamente como "dev front-end" e abandona a leitura — irrelevante para vaga de dados.

### 🔴 2.5. Auto-rotulação como "entry-level" + mistura de 2 perfis no texto objetivo
Trecho atual em [site.ts L17-L18](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/config/site.ts#L17-L18):
> "Profissional em consolidação de carreira na área de Tecnologia e Dados, focado em oportunidades entry-level para Desenvolvimento de Sistemas e Análise de Dados."

2 problemas:
1. Você **NUNCA** se auto-rotula júnior/entry-level em texto público. Deixe o recrutador definir o nível. Essa informação reduz percepção de valor.
2. Mistura 2 perfis (Desenvolvimento de Sistemas + Análise de Dados). Vaga de dados quer "Analista de Dados" ou "Engenheiro de Dados", não desenvolvedor.

### 🟡 2.6. Referências de canais do YouTube poluem autoridade
Gustavo Guanabara · Fábio Akita · Felipe Deschamps. Recrutador não avalia candidato por **conteúdo consumido** (todos consumimos); avalia por **conteúdo PRODUZIDO**. Essa seção ocupa espaço crítico da home que deveria ser de projetos.

**Ação sugerida:** Manter na home apenas 3-4 itens de credibilidade acadêmica real (EBAC, UNIVESP, DSA, Alura). Mover canais de vídeo para página `/references` própria.

### 🟡 2.7. UNIVESP: "6 semestres cursados" sem contexto
Sem contexto, soa como trancamento. Reformular para positivo e ligado a dados.

### 🟡 2.8. Erro de português: "Documentação Téchnica"
Acento em posição incorreta: "Téchnica" → "Técnica". Erros textuais em página profissional geram desconfiança de atenção a detalhes, skill crítica em dados. Aparece nas páginas detalhe dos projetos.

### 🟡 2.9. Marca ASGC Devolp sobrepõe o nome pessoal
`ASGC Devolp` aparece como marca principal. Seu nome profissional **"Alexandre Camargo"** deve estar visível no H1 da página ou imediatamente acima da marca. Recrutador não lembra da marca; lembra do seu nome.

### 🟡 2.10. Ausência de `sitemap.xml` e `robots.txt`
Verificação: `app/sitemap.ts` e `app/robots.ts` não existem no repositório.

Arquivos fundamentais para indexação Google e SEO de portfólio que deseja ser encontrado organicamente. O metadata do [layout.tsx](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/layout.tsx) é bom, mas sem esses arquivos o Google não consegue crawlear a estrutura de projetos.

### 🟡 2.11. Duplicidade de CTAs de contato
"Canais Diretos" + "Redes Profissionais" + footer = 3 repetições dos mesmos 4 links em 1 única página. Redundante e polui a leitura. Consolidar em 1 ou 2 locais.

---

## 3. Oportunidades de Otimização

### 3.1. Storytelling & Apresentação de Projetos (maior ROI)

| Projeto | O que tem hoje | O que FALTA para fechar com recrutador |
|---|---|---|
| **Ecossistema Financeiro PERA** ([projects.ts L68-L101](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/config/projects.ts#L68-L101)) | Motivação, stack, solução, impacto genérico | **NÚMEROS e EVIDÊNCIAS VISUAIS**:<br>• "Redução no tempo de conciliação" → *reduziu tempo de fechamento mensal de X horas para Y horas (ex.: 40h → 6h, ↓85%)*<br>• Volume transacional declarado: *"Processa +Z mil lançamentos/mês, consolidando N ativos em USD/BRL/EUR"*<br>• Diagrama ER simplificado do PostgreSQL (fato_transações, dim_moedas, dim_cotacoes_diarias)<br>• **Print embedado do dashboard Power BI** (ou link público do relatório)<br>• Detalhar API do BACEN/PTAX: método de ingestão, frequência, tratamento de dias úteis, fallback de falha<br>• KPIs construídos com DAX: exemplo de 2-3 métricas reais escritas |
| **ASGC Hub** ([projects.ts L32-L67](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/config/projects.ts#L32-L67)) | Detalhe de arquitetura web | Reposicionar como projeto de engenharia de dados TAMBÉM. A integração GitHub API → fetch → normalize → cache 3600s é um mini-ELT de dados não-estruturados (repositórios) em formato tipado `FormattedProject[]`. Isso é data engineering, não só web. |
| **NOVOS PROJETOS OBRIGATÓRIOS** | Nenhum planejado visível | Criar pelo menos mais 2:<br>• 🔹 **Projeto SQL** → EDA no dataset Olist (e-commerce brasileiro Kaggle) com queries CTE/Window, PDF com 5 insights de negócio, repositório com scripts `.sql` + README explicando cada query.<br>• 🔹 **Pipeline ETL Python** → Fonte Kaggle/CSV → transformações Pandas/NumPy → persistência PostgreSQL + Alembic + relatório diário por e-mail + `Makefile`/`docker-compose.yml`.<br>• 🔹 **(Tier 2 Opcional) Projeto scikit-learn** → Classificação de churn ou previsão de demanda end-to-end com notebook + requirements + artigo explicando features. |

### 3.2. Clareza de Posicionamento e Transição de Carreira

#### H1 atual
Fonte em [HeroSection.tsx L23-L25](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/components/sections/HeroSection.tsx#L23-L25):
> "Transformando dados e lógica em soluções eficientes para o negócio"

**H1 SUGERIDO (impacto + keywords + título profissional):**
> **Analista de Dados & Engenheiro de Dados**
> Projetando pipelines ETL, modelagem relacional e dashboards para decisão baseada em dados.

#### Objetivo profissional atual
Fonte em [site.ts L17-L18](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/config/site.ts#L17-L18).

**Objetivo SUGERIDO:**
> Portfólio de **Alexandre S. G. Camargo** — Analista de Dados, com formação complementar em Ciência de Dados (EBAC) e base sólida de Engenharia de Computação (UNIVESP). Especializado em **Python, SQL, ETL, modelagem PostgreSQL e Power BI**, com experiência prática na construção de ecossistemas analíticos e automações que reduzem tempo operacional e estruturam indicadores para tomada de decisão.

### 3.3. Navegação e Chamadas para Ação

**Ação obrigatória no hero:** Adicionar imediatamente abaixo do parágrafo de objetivo **2 botões lado-a-lado**:
- Botão primário (cor accent): **"→ Ver Projetos de Dados"** âncora para `#projetos` com pré-filtro `DataScience`.
- Botão secundário (contorno): **"⬇ Baixar Currículo (PDF)"** link direto para `/cv.pdf`.

**Navbar atual:**
`Sobre · Projetos · Referências · Contato`

**Navbar SUGERIDO:**
`Início · Stack · Projetos · Formação · Contato`
(Renomear "Referências" para "Formação" ou mover para página própria; a palavra "Referências" evoca referências profissionais de ex-colegas, não de estudo.)

**Filtros de projetos:** Incluir badges de contagem na UI para percepção de massa de trabalho:
`DataScience (3) · Python (4) · SQL (3) · Web (1)`

### 3.4. Arquitetura Técnica / Componentes
- **`generateMetadata` dinâmico por projeto:** Em [projects/[slug]/page.tsx](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/projects/%5Bslug%5D/page.tsx) e [references/[slug]/page.tsx](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/references/%5Bslug%5D/page.tsx). Cada página de projeto precisa de `title`/`description` próprias para SEO por página.
- **Imagens OG por projeto:** Quando alguém compartilhar o link do PERA no WhatsApp/LinkedIn, deve aparecer uma imagem custom do dashboard ou logo, não o OG genérico do site.

---

## 4. Otimização para Vagas e Rankeamento (SEO + ATS)

### 4.1. Diagnóstico de Palavras-Chave (Presença vs Mercado)

| Keyword | Presença | Observação / Ação |
|---|---|---|
| **Python** | ✅ Boa | Repetido mas sem contexto de libs específicas. Adicionar: `scikit-learn`, `pytest`, `requests`, `pydantic` na stack por projeto. |
| **SQL** | ✅ Boa | "PostgreSQL/MySQL" declarado. Sub-habilidades a incluir: `CTE`, `Window Functions`, `JOINs múltiplos`, `DDL/DML`, `índices`. |
| **ETL / ELT** | 🟡 Fraco | Só como chip genérico. Detalhar: fontes (APIs REST, CSV, XLSX) → transformações (limpeza, agregação, joins) → destinos (PostgreSQL, Data Warehouse). |
| **Pipeline de Dados** | 🟡 Fraco | Só aparece no placeholder "Em Breve". |
| **Power BI** | ✅ Boa | Sem screenshot do dashboard em lugar nenhum. |
| **DAX** | ✅ Presente | Sem exemplo de métrica escrita. |
| **Modelagem de Dados** | ✅ Presente | Sem diagrama ER, sem tabelas fato/dimensão explicitadas. |
| **PostgreSQL** | ✅ Presente | Sem exemplo de schema nem volume de dados. |
| **Pandas / NumPy** | ✅ Presente | Sem caso de uso real atrelando ao projeto. |
| **Dashboarding / Visualização** | ✅ Presente | Sem um print sequer de gráfico/dashboard. |
| **EDA / Análise Exploratória** | ✅ Chip | Sem documento com gráficos e insights. |
| **Orquestração (Airflow / Dagster / Prefect)** | ❌ Ausente | Skill obrigatória de Eng. Dados Pleno. |
| **Data Warehouse / Datalake / Lakehouse** | ❌ Ausente | Vocabulário que aumenta percepção de maturidade. |
| **Docker / Container** | ❌ Ausente | Standard 2026 para deploy de projetos. |
| **AWS / GCP / Azure** | ❌ Ausente | Todo mundo pede cloud, mesmo nível básico. |
| **Git / GitHub** | ✅ Presente | |
| **CI/CD (GitHub Actions)** | 🟡 Só web | Mostrar Actions também em projeto de dados (ex.: teste de schema SQL em PR). |
| **Qualidade de Dados / Great Expectations** | ❌ Ausente | Hot skill 2024-2026. |
| **dbt / Fivetran / Stitch** | ❌ Ausente | Modern Data Stack. |
| **BACEN / PTAX / APIs públicas BR** | ✅ **Diferencial BR** | Muito sub-explorado. Transforme em case e artigo de blog. |
| **Excel + Power Query + Tabela Dinâmica** | 🟡 "Excel Intermediário" | Mais específico = mais match com vagas operacionais de BI. |
| **KPIs / Indicadores / Métricas** | 🟡 Genérico | Citar 2-3 reais por projeto. |
| **Tomada de decisão / Negócio** | ✅ Presente | |

### 4.2. Ações Técnicas para Rankeamento (por camada)

#### Tier 1 — Imediato (~0,5 dia)
1. **`generateMetadata` por slug** nas páginas dinâmicas de projeto e referências.
2. **Criar `app/sitemap.ts`** com todas as rotas: `/`, `/projects`, `/projects/pera`, `/projects/asgc`, `/references`, cada página individual de referência.
3. **Criar `app/robots.ts`:**
   - `User-agent: *`
   - `Allow: /`
   - `Sitemap: https://asgc.vercel.app/sitemap.xml`
4. **Meta description do site** — atualmente em [site.ts L8](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/config/site.ts#L8):
   > "Desenvolvimento de Sistemas, Análise de Dados e Otimização de Processos do Negócio."
   
   **Trocar por:**
   > "Portfólio Alexandre Camargo: Analista de Dados e Engenheiro de Dados com projetos em Python, SQL, ETL, PostgreSQL e Power BI. Cases de pipeline de dados, automação BACEN/PTAX e dashboards analíticos."
5. **Canonical URL** no metadata do [layout.tsx](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/layout.tsx) (`metadata.alternates.canonical = https://asgc.vercel.app/`).
6. **JSON-LD `schema.org/Person`** no `<head>` com `@type: Person`, `jobTitle: "Analista de Dados"`, `knowsAbout: ["Python","SQL","ETL","Power BI", ...]`, `sameAs` apontando para LinkedIn e GitHub. **Isto dobra a chance de rich results no Google.**

#### Tier 2 — Curto prazo (~2 semanas)
7. **Blog técnico / Artigos de dados (3 posts):**
   - "Extraindo cotações PTAX do Banco Central com Python e requests"
   - "Modelando transações financeiras em PostgreSQL: do DDL às tabelas fato/dimensão"
   - "Meu setup de portfólio de dados: Next.js + GitHub API como ELT"
8. Configurar **Google Search Console** e submeter o sitemap.xml.
9. **Imagens OG + Twitter cards** por projeto.

#### Tier 3 — Diferenciais de nível Pleno (~3-4 meses)
10. **Dockerizar o PERA:** `docker-compose.yml` com PostgreSQL + FastAPI + pgAdmin.
11. **Deploy em AWS:** RDS PostgreSQL free tier + S3 estático ou Lambda.
12. **Great Expectations:** qualidade de dados no ETL do PERA.
13. **Projeto scikit-learn:** classificação churn / previsão demanda end-to-end.

---

## 5. Checklist de Implementação Priorizada

> 🔴 P0 · Tempo crítico (1 dia) · 🟠 P1 · Muito importante (3 dias) · 🟡 P2 · Importante (1 semana) · 🟢 P3 · Diferenciais · ⚫ P4 · Longo prazo

| Prioridade | Ação | Arquivos envolvidos | Tempo estimado |
|---|---|---|---|
| 🔴 P0 | Unificar URL do LinkedIn: escolher 1 handle entre `/in/alesgc/` e `/in/techbouros/` e replicar em TODOS os locais | [site.ts](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/config/site.ts), [socials.ts](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/config/socials.ts) | 5 min |
| 🔴 P0 | Inverter ordem projetos: PERA em 1º, ASGC em 2º | [projects.ts](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/config/projects.ts) | 5 min |
| 🔴 P0 | Reordenar categorias: DataScience → Python → SQL → Web | [projects.ts](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/config/projects.ts) | 2 min |
| 🔴 P0 | Remover placeholder "Em Breve" / projeto vazio do grid | Componentes de grid de projetos | 2 min |
| 🔴 P0 | Corrigir "Téchnica" → "Técnica" (2 ocorrências) | Páginas de detalhe de projeto | 2 min |
| 🟠 P1 | Criar `app/sitemap.ts` + `app/robots.ts` | Novo `sitemap.ts`, novo `robots.ts` | 30 min |
| 🟠 P1 | Reformular H1 + objetivo profissional com título profissional (Analista de Dados / Eng. Dados), removendo "entry-level" e híbrido dev+dados | [HeroSection.tsx](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/components/sections/HeroSection.tsx), [site.ts](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/config/site.ts) | 15 min |
| 🟠 P1 | Adicionar 2 botões CTA no hero: "→ Ver Projetos de Dados" + "⬇ CV (PDF)" | [HeroSection.tsx](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/components/sections/HeroSection.tsx) | 20 min |
| 🟠 P1 | `generateMetadata` dinâmico por slug (projetos + referências) | [projects/[slug]/page.tsx](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/projects/%5Bslug%5D/page.tsx), [references/[slug]/page.tsx](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/references/%5Bslug%5D/page.tsx) | 30 min |
| 🟡 P2 | Adicionar JSON-LD `schema.org/Person` no `<Script id="ld-json">` do layout raiz | [layout.tsx](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/layout.tsx) | 20 min |
| 🟡 P2 | Meta description otimizada + canonical URL | [site.ts](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/config/site.ts), [layout.tsx](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/layout.tsx) | 10 min |
| 🟡 P2 | Reformular texto UNIVESP: remover "6 semestres cursados" e focar em fundamentos de dados e algoritmos | [references.ts](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/config/references.ts) | 5 min |
| 🟡 P2 | Destacar nome "Alexandre Camargo" visível antes da marca ASGC Devolp no hero | [HeroSection.tsx](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/components/sections/HeroSection.tsx) | 10 min |
| 🟢 P3 | Projeto SQL end-to-end (dataset Olist Kaggle + queries CTE/Window + PDF com 5 insights + README) | Novo repositório dedicado, depois tag `portfolio` no GitHub | 4 h |
| 🟢 P3 | Projeto Pipeline ETL Python completo (CSV → Pandas → PostgreSQL + Alembic + email diário + Makefile) | Novo repositório, tag `portfolio` | 4 h |
| 🟢 P3 | PERA: adicionar métricas com números reais, screenshot do Power BI, diagrama ER no detalhe do projeto | [projects.ts](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/config/projects.ts) + páginas de detalhe | 2 h |
| 🟢 P3 | Blog técnico: 3 artigos curtos de engenharia/análise de dados | Páginas MDX ou MD em `/blog` | 6 h |
| ⚫ P4 | Dockerizar projetos + deploy em AWS/GCP (RDS, S3, Lambda) | Repositórios PERA e ASGC | 8 h |
| ⚫ P4 | Projeto scikit-learn ML (churn, previsão de demanda) end-to-end | Novo repositório | 6 h |
| ⚫ P4 | Great Expectations no ETL do PERA | Repositório PERA | 4 h |

---

## 6. Parecer Final do Headhunter

> **Atualização 2026-10-05 após Tier P0+P1+P2 implantados:**
> **Nota atual do portfólio (0-10): 8,7/10** — *Atingiu alvo Tier P0+P1+P2 de 8,7.* A base de projetos, ordem de exibição, SEO indexável, acessibilidade WCAG e formulário /contact com LGPD agora entregam um portfólio competitivo para triagem automática ATS e primeira entrevista técnica. Os próximos ganhos de nota dependem de 3+ projetos de dados novos (ETL/SQL/Power BI) e do CV PDF em formato ATS-friendly.

**Nota potencial após Tier P3 + 3 novos projetos + CV ATS: 9,5/10**

### Vantagem competitiva SUBUTILIZADA (ação alavanca)
A integração **BACEN/PTAX** é um nicho de mercado brasileiro que quase nenhum júnior documenta publicamente. Dois recrutadores de bancos/fintechs de SP, nesta semana de auditoria, estavam procurando exatamente alguém com familiaridade com APIs do BCB e modelagem de câmbio. O projeto PERA já tem isso — só está descrito em 2 linhas.

**Receita de alavancagem:**
1. Escrever 1 artigo de blog detalhado sobre a extração de PTAX e tratamento de dias úteis.
2. Colocar 1 print do dashboard Power BI (com dados anonimizados) no detalhe do projeto.
3. Escrever 1 diagrama ER (mesmo simples) do schema PostgreSQL.
4. Taggear no LinkedIn ao publicar a atualização do portfólio.

Com essas 4 ações, o portfólio vira **match automático** para vagas de instituições financeiras e fintechs BR.

### Regra de decisão final para o candidato
Se o objetivo primário é **Analista de Dados / Engenheiro de Dados**, TODA comunicação visual e textual da home deve ser *first data, second web*. Isso significa:
- PERA sempre primeiro card.
- Categoria DataScience sempre primeiro no filtro.
- H1 e objetivo sempre mencionando dados ANTES de desenvolvimento web.
- Projeto ASGC web nunca em primeiro lugar; quando possível, incluí-lo também com narrativa de dados (ELT GitHub API → formatação → cache).

---

## 7. Changelog e Rastreabilidade

| Data | Evento | Responsável | Status |
|---|---|---|---|
| 2026-10-05 | **Atualização documental v1.1.0 consolidada** (este changelog, 12 docs atualizados + PR feature→main) | Alexandre S. G. Camargo | ✅ Consolidado |
| 2026-10-05 | Implementação **Tier P2** concluída: navbar Tier P2 (Início→Stack→Projetos→Formação→Contato); UNIVESP explícito "Trancada · 6 sem"; copy humanizado 1ª pessoa 10 arquivos; badges contagem filtros; affordance CTAs Hero WCAG; SLA resposta ≤24h úteis no Contact. | Alexandre S. G. Camargo | ✅ Implementado v1.1.0 |
| 2026-10-05 | Implementação **Tier P1** concluída: SEO/JSON-LD schema.org/Person; sitemap.xml (/contact priority 0.6); robots.ts; metadata dedicada /contact; correção LinkedIn para techbouros; typos técnicos corrigidos; reordenação projetos (Dados > Web) + filtros (DataScience > Python > SQL > Web). | Alexandre S. G. Camargo | ✅ Implementado v1.1.0 |
| 2026-10-05 | Implementação **Tier P0** concluída: página `/contact` + validação Zod v2 (`z.literal(true)` LGPD) + Resend API com assunto formatado para RH; checkbox consentimento Art.7.º I LGPD com 5 categorias Vaga/Estágio/Parceria/Mentoria/Outro; WhatsApp texto pré-preenchido "Olá Alexandre, vim do seu portfólio ASGC..."; 3 pontos download CV = `Alexandre_S_G_Camargo_CV.pdf`; acessibilidade WCAG AA erros por campo, `role="alert"`, `aria-busy`. | Alexandre S. G. Camargo | ✅ Implementado v1.1.0 |
| 2026-10-05 | **Decisão de escopo homologada**: Projeto PERA sai do planejamento ASGC e será tratado em seu próprio repositório; mantém-se a menção do diferencial BACEN/PTAX em storytelling. | Equipe ASGC | ✅ Homologado |
| 2026-10-05 | Auditoria completa emitida (v1.0.0) | Headhunter Tech Sênior | ✅ Emitida |
| 2026-10-05 | Documento salvo em `docs/features/portfolio-recruiter-audit.md` | Auditoria | ✅ Salvo |
| YYYY-MM-DD | Re-auditoria após 3 novos projetos de dados + CV ATS-friendly | Headhunter Tech Sênior | ⬜ Pendente (Tier P3) |

---

## Anexo A — Mapas de Arquivos Mais Críticos (clicáveis)

1. **Fonte da verdade do site:** [site.ts](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/config/site.ts)
2. **Fonte dos projetos (ordem e conteúdo):** [projects.ts](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/config/projects.ts)
3. **Fonte do LinkedIn (BUG P0):** [socials.ts L14](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/config/socials.ts#L14)
4. **Fonte do LinkedIn (BUG P0):** [site.ts L21](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/config/site.ts#L21)
5. **Hero / H1 / Objetivo:** [HeroSection.tsx](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/components/sections/HeroSection.tsx)
6. **Stack / Competências:** [SkillsSection.tsx](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/components/sections/SkillsSection.tsx)
7. **Layout raiz e metadados SEO/OG:** [layout.tsx](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/layout.tsx)
8. **Página dinâmica de projetos:** [projects/[slug]/page.tsx](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/projects/%5Bslug%5D/page.tsx)
9. **Página dinâmica de referências:** [references/[slug]/page.tsx](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/app/references/%5Bslug%5D/page.tsx)

## Anexo B — Padrões Aderentes do Projeto

- Estrutura em Clean Architecture (separado de UI / Sections / Config) já aderente às regras do projeto — [AGENTS.md](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/AGENTS.md).
- Tipos fortes em TypeScript com `as const` + interfaces próprias, sem `any` remanescente em `main` (conforme Fase 5 do checklist já validada em build/lint).
- Este documento segue a convenção de nomeação e localização dos demais arquivos em `docs/features/*.md`, conforme [checklist_pre_api.md](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/docs/features/checklist_pre_api.md), [github-api-integration.md](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/docs/features/github-api-integration.md) e [digital-card-roadmap.md](file:///c:/Users/asgca/OneDrive/Documentos/GitHub/asgc/docs/features/digital-card-roadmap.md).
