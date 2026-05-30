# Pegasus Site

Site institucional do Pegasus, aplicativo de agenda, financeiro e operação para salões, barbearias e estúdios de beleza.

## Stack

- Next.js com App Router
- React
- TypeScript
- CSS global organizado por tokens e estilos da landing
- `next/font` para carregar Inter e Playfair Display com otimização de fonte
- Exportação estática para Netlify/Firebase/Vercel

## Estrutura

- `src/app`: rotas, layout global, metadata, sitemap, robots e manifest.
- `src/components/ui`: componentes primitivos reutilizáveis, como `Button`, `ExternalLink`, `Container`, `Section` e `Icon`.
- `src/components/layout`: exports de Header e Footer.
- `src/components/sections`: exports das seções da página inicial.
- `src/components/landing`: implementação visual das seções da landing.
- `src/components/seo`: dados estruturados em JSON-LD.
- `src/constants`: rotas, links externos e redes sociais centralizados.
- `src/config`: informações centrais do site, domínio, app e contato.
- `src/hooks`: hooks reutilizáveis para media query, scroll e clique externo.
- `src/lib`: helpers de metadata e utilitários compartilhados.
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

A pasta publicada deve ser `out`. Em deploy estático, use também os headers de segurança em `netlify.toml`, `_headers` ou `vercel.json`, porque `headers()` do Next não é aplicado automaticamente com `output: "export"`.
