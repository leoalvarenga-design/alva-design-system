# alva-ui

React + TypeScript component library for the **ALVA Design System**, driven directly by the Figma DS via MCP.

---

## Package structure

```
alva-ui/
├── src/
│   ├── tokens/
│   │   └── alva.css          ← all Figma variables as CSS custom properties
│   ├── button/
│   │   ├── Button.tsx        ← React component
│   │   ├── button.css        ← component styles (token-bound, no hardcoded colors)
│   │   └── button.types.ts   ← TypeScript types (mirrors Figma API)
│   └── index.ts              ← package entry
├── package.json
├── tsconfig.json
└── README.md
```

---

## Install

This is a local monorepo package. Add it to your app's `package.json`:

```json
"dependencies": {
  "alva-ui": "file:../alva-ui"
}
```

Then install:

```bash
npm install
```

If consuming the TypeScript source directly (e.g. Next.js), add to `next.config.ts`:

```ts
transpilePackages: ['alva-ui'],
```

---

## Include alva.css

Import both CSS files **once** at your app root — before rendering any components.

### Via JavaScript (recommended for bundlers / Next.js)

```ts
// app/layout.tsx or main entry point
import 'alva-ui/src/tokens/alva.css';
import 'alva-ui/src/button/button.css';
```

### Via CSS / PostCSS

```css
/* globals.css */
@import 'alva-ui/src/tokens/alva.css';
@import 'alva-ui/src/button/button.css';
```

### Theme switching

Tokens default to **light** mode. To activate dark mode:

```html
<!-- explicit dark -->
<html data-theme="dark">

<!-- explicit light (overrides system preference) -->
<html data-theme="light">

<!-- follows system preference automatically (no attribute needed) -->
```

---

## Button

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'Primary' \| 'Secondary' \| 'Tertiary'` | `'Primary'` | Figma "Type" variant axis |
| `label` | `string` | `'Button'` | Button text when no `children` |
| `showIconLeft` | `boolean` | `false` | Renders left icon slot |
| `showIconRight` | `boolean` | `false` | Renders right icon slot |
| `iconLeftGlyph` | `ReactNode` | — | Icon element for left slot |
| `iconRightGlyph` | `ReactNode` | — | Icon element for right slot |
| `disabled` | `boolean` | `false` | Disabled state |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | Native button type |

All native `<button>` attributes are forwarded. The component also accepts a `ref`.

### Icon contract

Icons must use **`fill="currentColor"`** (or `stroke="currentColor"`). The parent slot sets `color` to the correct semantic token; glyphs inherit it via `currentColor`. This mirrors Figma's `_mask + _color` pattern — the glyph vector is never token-bound directly.

### Usage

```tsx
import { Button } from 'alva-ui';

// Text only
<Button variant="Primary" label="Save" />

// With icons
<Button
  variant="Secondary"
  label="Edit"
  showIconLeft
  iconLeftGlyph={<EditIcon />}    // SVG with fill="currentColor"
/>

// Submit
<Button variant="Primary" type="submit" label="Submit" />

// Disabled
<Button variant="Tertiary" label="Unavailable" disabled />

// Children override label
<Button variant="Primary">Custom content</Button>
```

### State coverage

All states come from CSS pseudo-classes — no extra props needed:

| State | Trigger |
|---|---|
| default | — |
| hover | `:hover` |
| pressed | `:active` |
| focus | `:focus-visible` |
| disabled | `disabled` attribute |

---

## Token architecture

| Collection | CSS selector | Purpose |
|---|---|---|
| `primitives/*` | `:root` | Base colors, spacing, border, typography |
| `semantic/*` light | `:root, [data-theme="light"]` | Theme-aware aliases |
| `semantic/*` dark | `[data-theme="dark"]`, `@media (prefers-color-scheme: dark)` | Dark mode overrides |
| `responsive/*` | `:root` + `@media` breakpoints | Spacing & typography responsive scale |

Token naming follows the ALVA convention:
- `--primitives-color-pink-500`
- `--semantic-surface-action-primary-default`
- `--responsive-spacing-lg`

---

## Rules

- Never hardcode visible colors — always bind to `semantic/*`.
- Never hardcode `strokeWeight` — use `--primitives-border-width-*`.
- Never use `_deprecated/*` tokens.
- Icon glyphs must not have token bindings on the vector itself.
