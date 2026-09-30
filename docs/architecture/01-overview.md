# 📄 Documentação de Arquitetura — ASGC Devolp

## 1. Visão Geral do Projeto
O **ASGC Devolp** é o hub digital e portfólio de engenharia de **Alexandre Camargo**. Ele foi projetado para atuar como prova técnica de competências em **Desenvolvimento de Sistemas Web** e **Análise/Engenharia de Dados**.

- **Repositório:** [github.com/alesgc/asgc](https://github.com/alesgc/asgc)
- **Produção (Vercel):** [asgc.vercel.app](https://asgc.vercel.app/)

---

## 2. Pilha Tecnológica & Dependências

| Categoria | Tecnologia | Função / Utilização |
| :--- | :--- | :--- |
| **Framework Web** | Next.js 15 | App Router, Server Components e API Route Handlers. |
| **UI Library** | React 19 | Renderização reativa de componentes de interface. |
| **Linguagem** | TypeScript | Tipagem estrita de metadados, navegação e modelos de projetos. |
| **Estilização** | Tailwind CSS | Design tokens, layouts responsivos e suporte a tema dark nativo. |
| **Mensageria / Email**| Resend API | Disparo assíncrono de e-mails via formulário de contato (`/api/contact`). |
| **Hospedagem & CI/CD**| Vercel & GitHub Actions | Deploy contínuo atrelado aos commits na branch `main`. |

---

## 3. Estrutura de Diretórios
```text
asgc/
├── app/                  # Rotas do Next.js (App Router)
│   ├── api/contact/      # Route Handler para envio de e-mail via Resend
│   ├── components/       # Componentes de UI e seções da aplicação
│   ├── config/           # Fontes da verdade (siteConfig, projects, navigation)
│   ├── layout.tsx        # Layout raiz com metadados SEO/OpenGraph e fontes
│   └── page.tsx          # Página principal da aplicação
├── docs/                 # Módulo de documentação do sistema
├── public/               # Ativos estáticos (favicon.png, cv.pdf)
└── types/                # Definições globais de tipos TypeScript