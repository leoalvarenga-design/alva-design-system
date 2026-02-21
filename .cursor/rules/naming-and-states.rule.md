# Rule: Naming & States (ALVA)

## Semantic token naming
`semantic/{category}/{group}/{role}/{state}`

Examples:
- `semantic/text/action/primary/default`
- `semantic/border/action/primary/focus`
- `semantic/surface/neutral/page/default`

## Scale rules
- Color scales: 100 → 800 (500 base)
- Spacing primitives: px numeric scale (0,1,2,4,6,8,12,16,24,32,48,64)

## Component state rules
- Interactive components MUST implement: `default`, `hover`, `pressed`, `disabled`
- Focus MUST use semantic border tokens (no raw colors)
- Feedback uses only `default`