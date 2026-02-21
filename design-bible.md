# ALVA Design Bible

Este documento descreve decisões estáveis do Design System ALVA para manter consistência e permitir execução com IA (Cursor/Claude).

---

## 1) Token Architecture

### Collections
- `primitives/*` → valores base (tema-agnóstico, 1 modo: default)
- `semantic/*` → theming (2 modos: light/dark)
- `responsive/*` → breakpoints (3 modos: mobile/tablet/desktop)

### Binding hierarchy
- Componentes consomem **semantic** para cores (text/surface/border/icon).
- `responsive/*` pode referenciar `primitives/*`.
- `primitives/*` nunca muda por tema.
- Qualquer token em `_deprecated/*` **não pode** ser usado.

### Semantic categories (permitidas)
- `semantic/text/*`
- `semantic/surface/*`
- `semantic/border/*`
- `semantic/icon/*`

### States
Interativos:
- `default`, `hover`, `pressed`, `disabled`, `focus`

Feedback (somente `default`):
- `error`, `success`, `warning`, `information`

---

## 2) Component Architecture (padrões oficiais)

### 2.1 Button (padrão)
- Root: Auto-layout horizontal, default HUG
- Estrutura: `icon-left-slot (FIXED)` + `center-wrapper (FILL, grow=1)` + `icon-right-slot (FIXED)`
- Label: sempre centrado via wrapper; ícones nunca “empurram” label.

### 2.2 Field (padrão)
- Root: Auto-layout horizontal, default **FIXED** (ex.: 280px) para comportamento previsível
- Estrutura: `icon-left (FIXED)` + `text (FILL, grow=1, LEFT)` + `icon-right (FIXED)`
- Icons: swap seguro + cor segura por status (ver padrão de ícone abaixo)
- Focus: stroke no root (align OUTSIDE) usando tokens de focus (cor + width)

### 2.3 Input (padrão)
- Root: Auto-layout vertical, default FIXED (ex.: 280px)
- Composição: Label (opcional) + Field + HelperText (opcional)
- HelperText é do Input (nunca do Field), e muda de cor por status (ex.: error/success)

### 2.4 Label (padrão)
- Root: Auto-layout horizontal, HUG
- Variants: `required` × `optional`
- Optional text usa token mais “muted” que label normal.
- Requisito: hidden nodes não devem ficar com sizing inconsistente (higiene)

---

## 3) Official Icon Pattern (swap-safe + color-safe)

### Objetivo
Permitir trocar ícone (glyph) sem perder cor aplicada pelo componente pai.

### Padrão obrigatório: MASK + COLOR
- Não aplicar token diretamente no Vector do glyph.
- O glyph pode ser preto (shape base).
- A cor visível vem de um retângulo token-bound.

Estrutura:
- `icon-slot (16/20/24)` com `clipsContent=true`
  - `_mask (FRAME, isMask=true, fills=[])`
    - `glyph (INSTANCE)`  ← swap acontece aqui
  - `_color (RECTANGLE, absolute, fill = semantic/icon/<...>)`

---

## 4) Automation Safeguard (Paint binding bug)

Quando IA/automação criar fills/strokes com variável:
- Defina `paint.color` com a cor **resolvida** (não placeholder preto)
- Depois aplique `boundVariables.color`
- Garanta que existe **apenas 1 paint**
Motivo: em alguns casos o canvas renderiza o fallback de `paint.color` mesmo com binding presente.

---

## 5) Deprecation Policy
- Tudo em `_deprecated/*` é proibido em componentes.
- Coleções `zzz_*` são legado e devem permanecer zeradas / removidas quando possível.