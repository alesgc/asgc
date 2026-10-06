---
version: "1.1.0"
status: "🟡 Roadmap Futuro Tier 3 — Não implantado na versão v1.1.0"
date_last_updated: 2026-10-05
responsible: Alexandre S. G. Camargo (ASGC)
tags: [digital-card, roadmap, flippable-card, qrcode, vcard, wallet, mobile]
related:
  - docs/architecture/01-overview.md
  - .trae/documents/contact_rh_ux_alinhamento_plan.md
  - .trae/specs/atualizacao-documentos-v1.1.0/spec.md
---

# 📄 Roadmap & Documentação Técnica: Cartão de Visitas Digital (Flippable Card)

> **Status de Implementação v1.1.0:** 🟡 **Roadmap Futuro Tier 3 — Não implantado**
>
> A especificação abaixo foi 100% planejada, mas nenhum componente de interface ou rota de API foi implementado na versão 1.1.0. O Cartão Digital é um diferencial futuro de UX mobile e brand pessoal.
>
> **Pré-requisitos para implantar em release futura (provavelmente v1.2.0+):**
> 1. Fechar roadmap de 3 novos projetos de dados + CV ATS-friendly (prioridade maior);
> 2. Validar demanda por QR Code em eventos / encontros presenciais de networking.

## 1. Visão Geral
Este documento detalha a arquitetura, estratégia e planejamento para a implementação futura do **Cartão de Visitas Digital Interativo (Flippable Card)** no ecossistema **ASGC Devolp**.

O objetivo é disponibilizar uma apresentação de alto impacto em dispositivos móveis, permitindo a rotação 3D (*Frente e Verso*), exportação direta de contatos e integração com carteiras virtuais (*Apple Wallet* e *Google Wallet*).

---

## 2. Arquitetura de Interface & Estratégia SVG vs HTML

### 2.1 Decisão Tecnológica: Abordagem Híbrida (HTML + CSS 3D + SVG)
Para garantir máxima acessibilidade, responsividade e SEO, a interface do cartão utilizará **HTML5 semântico e Tailwind CSS para a estrutura e animação 3D**, reservando o **SVG exclusivamente para ícones, logos, ilustrações e marcas d'água de fundo**.

### 2.2 Análise de SEO: Uso de SVG
| Aspecto | SVG Puro (`<svg>`) | Abordagem Híbrida (HTML + SVG) |
| :--- | :--- | :--- |
| **Indexação por Motores de Busca** | O Google indexa textos em `<text>`, mas pode ignorar estruturas dinâmicas ou agrupadas sem hierarquia H1/H2 clara. | **Excelente:** O HTML semântico (`<h2>`, `<p>`, `<a>`) garante indexação direta pelos crawlers do Google. |
| **Acessibilidade (a11y)** | Exige atributos ARIA rígidos (`role`, `aria-label`, `<title>`, `<desc>`) para funcionar com leitores de tela mobile. | **Nativa:** Leitores de tela (TalkBack / VoiceOver) reconhecem elementos nativamente sem configuração extra. |
| **Interatividade Mobile** | Links dentro de SVGs integrados via `<img>` não funcionam. Exige SVG inline. | **Nativa:** Eventos de toque, seleção de texto para cópia e links de ação funcionam perfeitamente. |

> **Diretriz de SEO para SVG:** O uso de SVG puro para o cartão inteiro **não traz ganhos de SEO** em relação ao HTML5. O SVG deve ser usado para garantir que o logotipo e grafismos não percam definição em telas de alta densidade (Retina/AMOLED), enquanto os dados textuais permanecem em HTML indexável.

---

## 3. Funcionalidades Complementares (Roadmap de Implementação)

### 3.1 Botão "Adicionar aos Contatos" (`.vcf` / vCard)
Permite que o usuário salve os dados de contato diretamente na agenda nativa do smartphone com um único toque.

- **Fluxo:** O front-end gera ou serve um arquivo `alexandre-camargo.vcf` codificado em UTF-8.
- **Campos inclusos:** Nome Completo, Cargo, Empresa, Telefone (WhatsApp), E-mail e URL do Portfólio.
- **Comportamento Mobile:** Dispara o manipulador de arquivos de contato nativo do iOS/Android.

### 3.2 QR Code Dinâmico
Exibido no verso do cartão ou em um modal dedicado para facilitar o compartilhamento presencial.

- **Tecnologia recomendada:** Biblioteca `qrcode.react` ou geração via Serverless Function.
- **Payload:** URL direta para a página do cartão digital (`https://asgc.vercel.app/#card`) ou dados estruturados vCard.

### 3.3 Integração com Carteiras Virtuais (*Wallets*)

#### A. Apple Wallet (`.pkpass`)
- **Funcionamento:** O servidor gera um arquivo comprimido assinado `.pkpass` contendo um manifesto JSON (`pass.json`), imagens de cabeçalho e chave de autenticação Apple Developer.
- **Exibição:** O cartão fica salvo nativamente no aplicativo *Carteira (Wallet)* do iPhone/Apple Watch, podendo utilizar geofencing (exibir o cartão automaticamente na tela de bloqueio quando próximo de determinado evento/local).

#### B. Google Wallet (Google Pay API for Passes)
- **Funcionamento:** Criação de um *Generic Pass* via Google Wallet API REST.
- **Fluxo:** O usuário clica no botão "Adicionar ao Google Carteira", sendo redirecionado para salvar o passe vinculado à sua conta Google.
- **Recursos:** Suporte a QR Code integrado no passe, atualização dinâmica de dados via Webhook e notificações push.

---

## 4. Estrutura de Arquivos Futura

```text
asgc/
├── app/
│   ├── components/
│   │   └── ui/
│   │       ├── DigitalCard.tsx       # Componente da interface com Flip 3D
│   │       └── QRCodeModal.tsx       # Modal de exibição do QR Code
│   └── api/
│       ├── vcard/route.ts            # Route Handler para download do .vcf
│       └── wallet/route.ts           # Route Handler para geração de passes (Apple/Google)
└── docs/
    └── features/
        └── digital-card-roadmap.md   # Este documento de especificações
```

---

## 5. Histórico de Versões

| Data       | Versão | Responsável                     | Alterações |
|------------|--------|---------------------------------|---|
| 2026-10-05 | v1.1.0 | Alexandre S. G. Camargo (ASGC)  | Adiciona frontmatter oficial; bloco **Status de Implementação v1.1.0** (Roadmap Futuro Tier 3, não implantado); pré-requisitos para implantar em release futura; links docs complementares. |
| 2026-10-05 | v1.0.0 | Alexandre S. G. Camargo (ASGC)  | Baseline do roadmap: seções Visão Geral, Arquitetura Híbrida HTML+SVG, Funcionalidades Complementares (VCF, QR, Wallets), Estrutura de Arquivos Futura. |