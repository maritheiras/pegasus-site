# PEGASUS - Design System do Site

Versao: 1.0  
Produto: aplicativo premium de agendamento, gestao financeira e controle operacional para saloes de beleza, barbearias, clinicas esteticas e negocios de autocuidado.

## 1. Essencia da Marca

PEGASUS deve parecer menos como uma ferramenta comum de agenda e mais como uma infraestrutura silenciosa para negocios que querem operar com clareza.

Personalidade:

- Sofisticada, minimalista e precisa.
- Direta, mas nunca fria.
- Premium, mas sem ostentacao.
- Confiante, sem exagero comercial.
- Organizada, calma e funcional.

Frase norteadora:

> O seu negocio, finalmente no lugar certo.

Promessa principal:

> Agenda, financas e operacao em um unico sistema. Para quem leva o proprio negocio a serio.

Principio visual:

> O silencio e parte do design. Uma secao deve defender uma unica ideia.

## 2. Direcao Visual

O site deve combinar tres camadas:

1. Autoridade editorial: titulos grandes, serifados, espacamento generoso e copy precisa.
2. Produto real: telas, dashboards, agendamentos, indicadores e fluxos visiveis.
3. Atmosfera premium: imagens quentes, silenciosas e cinematograficas, inspiradas em montanhas, litoral, ceu e luz dourada.

Referencias de sensacao:

- Apple: clareza, respiro, foco em um beneficio por vez.
- Linear: interfaces densas, limpas e tecnicas sem parecer frias.
- Stripe: produto com movimento, mockups e narrativa de capacidade.
- Notion: organizacao e simplicidade operacional.

Evitar:

- Layouts promocionais demais.
- Cards decorativos em excesso.
- Gradientes chamativos.
- Paleta bege dominante.
- Imagens genericas de banco de imagem.
- Copy com promessas infladas como "revolucionario", "incrivel" ou "o melhor do mercado".

## 3. Cores

### Paleta Base

| Token | Hex | Nome | Uso principal |
| --- | --- | --- | --- |
| `--color-black` | `#0D0D0D` | Carbon Black | fundo premium, texto principal em temas claros, CTA principal |
| `--color-ink` | `#1A1A1A` | Ink | superfices escuras, cards escuros, headings secundarios |
| `--color-charcoal` | `#2F2F2F` | Charcoal | bordas escuras, hover escuro, texto auxiliar em tema escuro |
| `--color-gray-600` | `#6A6A6A` | Medium Gray | corpo de texto, metadados, descricao |
| `--color-gray-300` | `#BDBDBD` | Soft Gray | bordas claras, divisores, texto apagado |
| `--color-offwhite` | `#F2F2F2` | Off White | fundos claros premium, faixas de conteudo |
| `--color-white` | `#FFFFFF` | White | fundo limpo, texto em tema escuro |
| `--color-sand` | `#C8B6A6` | Warm Sand | acento champagne, labels, detalhes, linhas finas |

### Regras de Uso

- Preto e branco devem conduzir a estrutura.
- Warm Sand deve aparecer como acento, nao como fundo dominante.
- Cinzas sustentam hierarquia e reduzem ruido.
- Em secoes premium, usar fundo `#0D0D0D` com texto `#FFFFFF` e acento `#C8B6A6`.
- Em secoes de produto, usar `#FFFFFF` ou `#F2F2F2` com texto `#0D0D0D`.

### Cores Semanticas Para Interface

Usar apenas em mockups do produto, badges e estados de sistema. Devem ser discretas.

| Token | Hex | Uso |
| --- | --- | --- |
| `--color-success` | `#7C8F76` | confirmado, concluido, automacao ativa |
| `--color-warning` | `#B08A5A` | aguardando, pendente, atencao |
| `--color-danger` | `#A96F68` | cancelado, erro, acao destrutiva |
| `--color-info` | `#71818C` | informacao, reagendado, status neutro |

### CSS Tokens

```css
:root {
  --color-black: #0D0D0D;
  --color-ink: #1A1A1A;
  --color-charcoal: #2F2F2F;
  --color-gray-600: #6A6A6A;
  --color-gray-300: #BDBDBD;
  --color-offwhite: #F2F2F2;
  --color-white: #FFFFFF;
  --color-sand: #C8B6A6;

  --color-success: #7C8F76;
  --color-warning: #B08A5A;
  --color-danger: #A96F68;
  --color-info: #71818C;
}
```

## 4. Tipografia

### Familias

Fonte principal para titulos:

- Playfair Display
- Uso: H1, titulos de secao, destaques editoriais, numeros grandes.
- Sensacao: elegante, sofisticada, atemporal.

Fonte secundaria:

- Inter
- Uso: corpo de texto, botoes, menus, labels, formularios, interface.
- Sensacao: moderna, limpa, altamente legivel.

### Escala Tipografica

Nao usar fonte escalando diretamente com largura de viewport. Definir tamanhos por breakpoint.

| Estilo | Desktop | Tablet | Mobile | Familia | Peso | Line-height |
| --- | ---: | ---: | ---: | --- | ---: | ---: |
| Display / Hero | 72px | 60px | 44px | Playfair Display | 400 italic | 1.05 |
| H1 alternativo | 64px | 52px | 40px | Playfair Display | 400 | 1.08 |
| H2 | 44px | 38px | 32px | Playfair Display | 400 | 1.15 |
| H3 | 30px | 28px | 24px | Playfair Display | 400 | 1.2 |
| Lead | 18px | 18px | 17px | Inter | 300 | 1.6 |
| Body | 16px | 16px | 15px | Inter | 300 | 1.75 |
| Small | 14px | 14px | 13px | Inter | 400 | 1.6 |
| Label | 11px | 11px | 10px | Inter | 600 | 1.2 |
| Button | 15px | 15px | 15px | Inter | 500 | 1.2 |

### Labels

Labels devem ser em caixa alta, com tracking controlado:

```css
.label {
  font-family: "Inter", sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-sand);
}
```

### Regras

- Usar Playfair Display para criar autoridade, nao para textos longos.
- Usar Inter para leitura, navegacao e interface.
- Titulos devem ser curtos e precisos.
- Corpo de texto nunca deve ocupar largura total. Limite ideal: 560px a 640px.
- Letter spacing negativo nao deve ser usado.

## 5. Logo

Uso preferencial:

- Logo branco sobre fundo preto.
- Wordmark com espacamento amplo.
- Simbolo do cavalo alado pode aparecer isolado em favicon, loader, app icon e pequenos selos.

Regras:

- Preservar respiro lateral ao redor do logo.
- Nao aplicar sombra colorida, gradiente ou contorno.
- Nao comprimir o wordmark.
- Em fundos claros, usar versao preta ou grafite.
- Em headers, manter o logo discreto, com altura visual entre 24px e 36px.

## 6. Layout e Grid

### Container

```css
:root {
  --container-xl: 1200px;
  --container-lg: 1080px;
  --container-md: 860px;
  --container-text: 640px;
}
```

Desktop:

- Max width: 1200px.
- Grid: 12 colunas.
- Gutter: 24px.
- Margem lateral minima: 48px.

Tablet:

- Grid: 6 colunas.
- Gutter: 20px.
- Margem lateral: 32px.

Mobile:

- Grid: 4 colunas.
- Gutter: 16px.
- Margem lateral: 20px.

### Espacamento

```css
:root {
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-30: 120px;
  --space-40: 160px;
}
```

Secoes:

- Desktop: 120px a 160px de padding vertical.
- Tablet: 96px a 120px.
- Mobile: 72px a 96px.
- Secoes densas de produto podem usar menos espaco, mas precisam manter clareza.

## 7. Superficies, Bordas e Sombra

Radius:

```css
:root {
  --radius-xs: 4px;
  --radius-sm: 6px;
  --radius-md: 8px;
}
```

Regras:

- Cards e modais: maximo 8px de border radius.
- Botoes: 6px.
- Inputs: 6px.
- Mockups de app podem usar 12px a 16px se simularem tela/dispositivo, mas nao como card decorativo comum.

Bordas:

```css
:root {
  --border-light: 1px solid rgba(13, 13, 13, 0.10);
  --border-dark: 1px solid rgba(255, 255, 255, 0.12);
  --border-sand: 1px solid rgba(200, 182, 166, 0.38);
}
```

Sombras:

- Usar sombras discretas, quase imperceptiveis.
- Preferir borda e contraste de superficie.
- Para mockups, usar uma sombra maior, suave e difusa.

```css
:root {
  --shadow-soft: 0 16px 48px rgba(13, 13, 13, 0.08);
  --shadow-product: 0 28px 90px rgba(13, 13, 13, 0.20);
}
```

## 8. Componentes

### Botoes

Primario:

- Fundo preto, texto branco.
- Usado para "Comecar gratuitamente", "Criar minha conta", "Comecar agora".
- Altura: 48px desktop, 46px mobile.
- Padding horizontal: 22px a 26px.

Secundario:

- Fundo transparente, borda cinza ou areia.
- Usado para "Ver uma demonstracao" e acoes de menor urgencia.

Ghost:

- Sem borda, texto preto ou branco conforme fundo.
- Usado em navegacao e links secundarios.

Estados:

- Hover primario: `#1A1A1A`.
- Hover secundario: leve preenchimento `rgba(13, 13, 13, 0.04)`.
- Disabled: texto `#BDBDBD`, fundo `#F2F2F2`.

### Navegacao

Desktop:

- Header horizontal, limpo, com logo a esquerda e links discretos.
- Altura entre 72px e 88px.
- CTA pequeno a direita.
- Links em Inter 14px, peso 400.

Mobile:

- Logo a esquerda.
- Botao de menu por icone.
- Menu em painel simples, sem excesso de animacao.

### Cards de Beneficio

Uso:

- Beneficios principais.
- Funcionalidades.
- Provas de autoridade.

Estrutura:

- Label opcional.
- Titulo curto.
- Texto de 2 a 4 linhas.
- Linha ou borda sutil.

Regras:

- Nao usar cards dentro de cards.
- Nao encher a pagina com cards iguais; alternar com blocos editoriais e mockups.
- Cards de funcionalidade podem ser mais densos, com informacao escaneavel.

### Mockups de Produto

Direcao:

- Devem mostrar a agenda, financas, clientes, relatorios e automacoes.
- UI clara, com superficies brancas ou off-white.
- Detalhes em preto, cinza e Warm Sand.
- Estados semanticos discretos.

Microcopy sugerida:

- "Hoje, 94% de ocupacao."
- "R$ 4.280 faturados nesta semana."
- "3 confirmacoes pendentes."
- "Sua semana comeca organizada."
- "Nenhum horario perdido hoje."
- "Tudo sob controle."

### Formularios

Campos:

- Altura: 48px.
- Radius: 6px.
- Borda: `rgba(13, 13, 13, 0.12)`.
- Label pequeno em Inter.
- Placeholder em `#6A6A6A`.

Exemplos:

- Nome do cliente.
- Valor em R$.
- Data do agendamento.
- Buscar por cliente ou servico.
- Profissional responsavel.

### Badges e Status

Usar badges pequenos e discretos:

- Confirmado.
- Aguardando confirmacao.
- Concluido.
- Cancelado.
- Em andamento.
- Reagendado.
- Bloqueado.

Estilo:

- Inter 12px.
- Radius 999px permitido apenas para badges/status, pois eles representam estados de sistema.
- Fundo semantico com opacidade baixa.
- Texto semantico escurecido.

## 9. Iconografia

Estilo:

- Linha fina.
- Geometria simples.
- Sem preenchimentos pesados.
- Preferencia por lucide icons no site.

Tamanho:

- 16px para botoes compactos.
- 18px a 20px para links e listas.
- 24px para cards de funcionalidade.

Uso:

- Agenda: Calendar.
- Financeiro: Chart / Wallet.
- Clientes: Users.
- Automacoes: Bell / Zap.
- Relatorios: BarChart.
- Seguranca: Shield.

## 10. Imagens e Arte

As imagens de referencia apontam para um universo visual calmo, quente e cinematografico.

Direcao:

- Luz dourada, amanhecer ou fim de tarde.
- Montanhas, litoral, ceu, agua e neblina.
- Contraste entre sombra profunda e luz quente.
- Composicoes amplas, com muito respiro.

Uso no site:

- Hero pode usar imagem atmosferica como fundo, desde que o produto apareca como protagonista por mockup ou interface sobreposta.
- Secoes intermediarias podem usar recortes grandes e silenciosos como pausa visual.
- Nao usar imagens pequenas apenas como decoracao.
- Em secoes sobre produto, priorizar screenshots/mockups do app.

Tratamento:

- Overlay preto entre 35% e 55% quando houver texto sobre imagem.
- Saturacao reduzida.
- Realces quentes puxando para Warm Sand.
- Evitar filtros pesados e blur excessivo.

## 11. Voz e Copy

Tom:

- Como um socio experiente.
- Direto, confiante e respeitoso.
- Autoridade pela precisao, nao pelo volume.

Palavras que usa:

- controle
- clareza
- precisao
- organizacao
- profissionalismo
- resultado
- estrutura
- eficiencia
- crescimento
- visao
- decisao
- fluxo

Palavras que evita:

- revolucionario
- incrivel
- sensacional
- poderoso
- super facil
- transforme tudo
- nao perca tempo
- solucao completa
- o melhor do mercado

Padrao de secao:

1. Label curto.
2. Titulo com uma ideia forte.
3. Pausa visual.
4. Body com contexto e consequencia.
5. Produto, prova ou CTA preciso.

## 12. Estrutura Recomendada do Site

Ordem inicial sugerida:

1. Hero: "O seu negocio, finalmente no lugar certo."
2. Posicionamento: "Construido para quem nao aceita mediocridade."
3. Beneficios: controle, agenda, financas, profissionalismo.
4. Organizacao: "Menos WhatsApp. Mais negocio."
5. Experiencia premium: "Um sistema a altura do seu trabalho."
6. Funcionalidades: agenda, financeiro, clientes, relatorios, automacoes, confirmacoes.
7. Mockups e dados: indicadores curtos e telas.
8. Provas: depoimentos, +2.000 profissionais, 99.9% uptime, LGPD.
9. CTA final: "Pronto para operar sem limite."

## 13. Regras de Qualidade Para o Site

- Cada secao deve ter uma funcao clara.
- Nenhum bloco deve depender de texto explicando como usar a interface.
- O primeiro viewport precisa mostrar PEGASUS, proposta de valor e CTA.
- Produto precisa aparecer cedo: mockup ou interface no hero ou imediatamente apos.
- Texto deve caber nos containers em mobile e desktop.
- Botoes devem ter estados claros.
- Componentes devem manter dimensoes estaveis.
- Layouts devem parecer caros por precisao, nao por excesso.

## 14. Base CSS Recomendada

```css
:root {
  color-scheme: light;

  --font-display: "Playfair Display", Georgia, serif;
  --font-sans: "Inter", Arial, sans-serif;

  --container-xl: 1200px;
  --container-text: 640px;

  --section-y-desktop: 140px;
  --section-y-tablet: 112px;
  --section-y-mobile: 84px;
}

body {
  margin: 0;
  font-family: var(--font-sans);
  font-weight: 300;
  line-height: 1.75;
  color: var(--color-black);
  background: var(--color-white);
}

h1,
h2,
h3 {
  margin: 0;
  font-family: var(--font-display);
  font-weight: 400;
  letter-spacing: 0;
  color: inherit;
}

p {
  margin: 0;
  max-width: var(--container-text);
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
textarea,
select {
  font: inherit;
}
```

## 15. Decisao Criativa

O site do PEGASUS deve parecer um produto premium de operacao, nao uma landing page generica para salao. A estetica pode conversar com beleza e autocuidado, mas a mensagem central e gestao: menos improviso, mais controle.

Sintese:

> Editorial no texto, tecnico no produto, cinematografico na atmosfera.
