# Responsividade — Linkfotos AI

Este documento descreve as alterações feitas para que a aplicação funcione bem em **celulares, tablets e desktops**, usando breakpoints do Tailwind CSS.

## Breakpoints utilizados

| Prefixo | Largura mínima | Uso principal |
|---------|----------------|---------------|
| (padrão) | &lt; 640px | Mobile |
| `sm:` | 640px | Mobile grande / phablet |
| `md:` | 768px | Tablet — menu desktop no header |
| `lg:` | 1024px | Desktop — layout em duas colunas |

## Arquivos alterados

### `src/app/layout.tsx`

- **`viewport`**: export configurado para `device-width` e `initialScale: 1`, evitando que o navegador mobile renderize a página “miniaturizada”.
- **`lang="pt-BR"`**: idioma correto para leitores de tela e SEO.
- **`overflow-x-hidden`** no `body`: impede barra de rolagem horizontal quando elementos (ex.: fotos rotacionadas) ultrapassam a largura da tela.
- **Metadados** atualizados com título e descrição do produto.

### `src/app/globals.css`

- **`safe-area-inset`**: padding lateral no `body` para respeitar entalhes de tela em iPhones e dispositivos com bordas arredondadas.

### `src/app/_components/header.tsx`

- Removido estado e handlers não utilizados (`selectedPhoto`, `generatedPhoto`, etc.).
- Adicionado **`"use client"`** para o menu mobile com `useState`.
- **Menu hambúrguer** (`Menu` / `X`) visível apenas abaixo de `md`; links em painel expansível.
- Navegação **desktop** com `hidden md:flex`.
- Header **sticky** com fundo semitransparente e `backdrop-blur`.
- Altura reduzida no mobile (`h-14`) e padrão em telas maiores (`sm:h-16`).
- Logo com `truncate` para não quebrar o layout em telas muito estreitas.

### `src/app/_components/hero.tsx`

- Texto **centralizado no mobile** (`text-center`, `items-center`) e alinhado à esquerda a partir de `sm`.
- Título com escala **`text-3xl` → `sm:text-4xl` → `lg:text-5xl`**.
- Galeria de fotos com tamanhos progressivos (`size-24` … `lg:size-64`) e `gap` menor no mobile.
- Atributo **`sizes`** no `Image` do Next.js para otimizar carregamento por viewport.
- Âncora **`id="exemplos"`** para os links do header (`#exemplos`).

### `src/app/_components/content.tsx`

- Grid em **coluna única** no mobile; **duas colunas** apenas em `lg`.
- Padding e gaps responsivos (`py-6 sm:py-8`, `gap-8 sm:gap-10`).
- `min-h` da área principal aplicado só em `lg`, evitando espaço vazio excessivo no celular.
- Âncora **`id="como-funciona"`** para navegação interna.

### `src/app/_components/cta.tsx`

- Título e espaçamentos adaptados (`text-lg sm:text-xl`).
- Botão principal com **`min-h-[44px]`** e `touch-manipulation` (área de toque confortável).

### `src/app/_components/upload-photo.tsx`

- Área de drop com **`min-h-[180px]`** no mobile e **`sm:min-h-[220px]`** em telas maiores.
- Botão de remover foto com **`size-10`** no mobile (44px de área útil) e `size-8` em `sm+`.
- Padding interno reduzido no mobile (`px-4 py-6`).

## Como testar

1. Inicie o projeto: `npm run dev`
2. Abra `http://localhost:3000`
3. No DevTools do navegador (Chrome/Edge/Firefox):
   - Ative o modo dispositivo (Ctrl+Shift+M / Cmd+Shift+M)
   - Teste larguras: **375px** (iPhone), **390px**, **768px** (tablet), **1024px+** (desktop)
4. Verifique:
   - Menu hambúrguer abre e fecha; links fecham o menu ao clicar
   - Sem rolagem horizontal
   - Upload e botão “Gerar foto profissional” são fáceis de tocar
   - Texto e imagens legíveis sem zoom manual

## Próximos passos (opcional)

- Fechar o menu mobile ao redimensionar a janela para desktop
- Adicionar `prefers-reduced-motion` para animações
- Testar em dispositivos físicos (iOS Safari, Chrome Android)
