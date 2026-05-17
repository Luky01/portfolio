# Portfólio — Lucas Braga Zamproni Lima

Portfólio profissional bilíngue (Português/Inglês) desenvolvido com **Next.js**, **TypeScript** e **Tailwind CSS**, com foco em apresentação forte, boa responsividade e publicação simples na Vercel.

## Tecnologias

- Next.js
- TypeScript
- Tailwind CSS
- lucide-react

## Como rodar localmente

```bash
npm install
npm run dev
```

Depois, acesse:

```bash
http://localhost:3000
```

## Build de produção

```bash
npm run build
```

## Verificação de lint

```bash
npm run lint
```

## Onde editar informações pessoais

Os links editáveis de contato ficam em:

```bash
lib/site-config.ts
```

Atualize especialmente:

- `linkedinUrl`
- `linkedinLabel`
- `whatsappUrl`
- `whatsappLabel`

## Onde editar textos do site

Todo o conteúdo em Português e Inglês está centralizado em:

```bash
lib/content.ts
```

Isso permite ajustar textos, projetos, diferenciais e seções sem precisar mexer na estrutura visual.

## Publicação na Vercel

1. Envie o projeto para um repositório Git.
2. Importe o repositório na Vercel.
3. A Vercel detectará automaticamente o projeto Next.js.
4. Faça o deploy.

## Estrutura principal

```bash
app/
components/
lib/
```

- `app/`: layout global, estilos e página principal
- `components/`: componentes reutilizáveis do portfólio
- `lib/`: conteúdo bilíngue e configurações editáveis
