### Ordem Recomendada de Implementação

1. **Etapa 1: Correção e Blindagem do Sistema de Contato (Prioridade Imédiata)**
* **Por quê:** O sistema de envio de e-mails já possui estrutura inicial. É ideal validar o envio, adicionar tratamento de erros e schema de validação antes de introduzir novas rotas.


2. **Etapa 2: Definição do Ambiente de Deploy & Resolução de Serverless vs. Estático**
* **Por quê:** Como há deploys na Vercel e no GitHub Pages, é necessário garantir que as Serverless Routes (contato e API do GitHub) funcionem perfeitamente no ambiente principal (Vercel) sem quebrar rotinas estáticas.


3. **Etapa 3: Preparação da API do GitHub (Tipagem e Variáveis de Ambiente)**
* **Por quê:** Estruturar a chave de acesso (`GITHUB_TOKEN`) no `.env.example` e definir as interfaces TypeScript em `types/` criará o contrato de dados necessário antes da lógica de busca.


4. **Etapa 4: Integração da API do GitHub e Estratégia de Cache**
* **Por quê:** Criar a camada de *data fetching* em `lib/` utilizando o mecanismo de cache do Next.js (`revalidate`) para evitar o estouro do limite de requisições (*rate limit*) da API do GitHub.


5. **Etapa 5: Interface e Validação Final (Projetos & UI)**
* **Por quê:** Conectar os dados vindos da API aos componentes visuais de listagem de projetos e realizar a validação completa de build local (`npm run build`).



---

### Checklist de Acompanhamento (Copie e cole no seu arquivo de notas/issue)

```markdown
# Checklist de Implementação - Refatoração Contatos & API GitHub

## Fase 1: Ajustes no Sistema de Contato
- [ ] Implementar validação de schema (ex: Zod) nos dados recebidos na rota de API de contato.
- [ ] Adicionar tratamento de rate limiting para evitar spam na rota de e-mail.
- [ ] Configurar estados de feedback no frontend (Carregando, Sucesso, Erro).
- [ ] Validar se todas as variáveis do provedor de e-mail estão documentadas em `.env.example`.

## Fase 2: Compatibilidade de Infraestrutura & Deploy
- [ ] Confirmar se a rota de API de e-mail está funcional na Vercel.
- [ ] Revisar imports e caminhos após a promoção de diretórios para a raiz.

## Fase 3: Preparação da API do GitHub
- [ ] Adicionar `GITHUB_TOKEN` ao arquivo `.env.example`.
- [ ] Criar arquivo de tipos TypeScript `types/github.ts` para mapear repositórios e projetos.
- [ ] Criar função utilitária em `lib/github.ts` para filtragem e formatação dos dados do GitHub.

## Fase 4: Data Fetching e Cache da API do GitHub
- [ ] Implementar requisição à API do GitHub utilizando `fetch` nativo do Next.js.
- [ ] Definir estratégia de revalidação por tempo (ex: `next: { revalidate: 3600 }`).
- [ ] Implementar tratamento de erro e componente de fallback (ex: cards de 'Em Construção').

## Fase 5: Interface do Usuário e Validação
- [ ] Renderizar a lista dinâmica de repositórios/projetos nos componentes de UI.
- [ ] Executar `npm run build` e `npm run lint` localmente para garantir ausência de erros de tipagem.
- [ ] Fazer o deploy e validar o funcionamento em produção.

```