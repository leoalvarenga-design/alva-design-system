# Rule: Token Architecture (ALVA)

## Collections
- `primitives/*` = base values (theme-agnostic)
- `semantic/*` = theming (light/dark)
- `responsive/*` = breakpoints (mobile/tablet/desktop)

## Hard rules
1) Colors/surfaces/borders/icons MUST bind to `semantic/*`.
2) Typography + spacing MAY bind to `responsive/*`.
3) Radius/width/font-family/weight MAY bind to `primitives/*` only when no semantic equivalent exists.
4) `responsive/*` MAY reference `primitives/*` (never legacy / never `zzz_*` / never `_deprecated/*`).
5) Anything under `_deprecated/*` MUST NOT be used anywhere in components.
6) Never leave `strokeWeight` hardcoded — bind to `primitives/border/width/*`.