# Pegasus Site

Site institucional do Pegasus, aplicativo de agenda, financeiro e operação para salões, barbearias e estúdios de beleza.

## Stack

- Next.js com App Router
- React
- TypeScript
- CSS global organizado por tokens e estilos da landing
- Exportação estática para Netlify/Firebase

## Estrutura

- `src/app`: rotas, metadados, sitemap, robots e manifest.
- `src/components/landing`: seções da página inicial.
- `src/components/seo`: dados estruturados em JSON-LD.
- `src/config`: informações centrais do site, domínio, links sociais e contato.
- `src/styles`: tokens visuais e CSS da experiência.
- `public/assets`: imagens, ícones, logos e favicons servidos pelo Next.
- `public/scripts`: scripts de interação e animação usados pela landing.
- `out`: build estático gerado por `npm run build` e ignorado no Git.

## Comandos

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
```

## Deploy

O projeto está configurado para exportação estática. O comando de produção é:

```bash
npm run build
```

A pasta publicada deve ser `out`.
