# ALVA AI Context

This repository contains the ALVA Design System governance.

When generating or modifying components, always:

1. Follow `design-bible.md` for:
   - Component architecture patterns
   - Layout philosophy
   - Icon mask + _color structure
   - Composition rules (Label / Field / Input)
   - Token hierarchy

2. Follow rules in:
   - `.cursor/rules/tokens-architecture.rule.md`
   - `.cursor/rules/naming-and-states.rule.md`

Hard constraints:

- Never hardcode visible colors.
- Never hardcode strokeWeight.
- Never bind token directly to glyph Vector.
- Never use `_deprecated/*` tokens.
- Interactive components must implement proper states.
- Layout must be resize-safe.
- Icon swaps must preserve color via mask + _color pattern.

When unsure:
Prefer structural correctness over visual approximation.