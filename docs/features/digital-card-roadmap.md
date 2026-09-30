# 📄 Roadmap & Documentação Técnica: Cartão de Visitas Digital (Flippable Card)

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