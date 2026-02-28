/**
 * Button CSS — generated from Figma "Button" component set (ALVA file).
 *
 * Token → CSS variable mapping convention:
 *   Figma: semantic/surface/action/primary/default
 *   CSS:   var(--semantic-surface-action-primary-default)
 *
 * Inject once at app root:
 *   import { BUTTON_CSS } from 'alva-ui';
 *   document.head.insertAdjacentHTML('beforeend', `<style>${BUTTON_CSS}</style>`);
 *
 * Or use a bundler CSS-loader on the companion button.css file.
 */

// ---------------------------------------------------------------------------
// CSS custom property reference map
// Documenting every Figma variable ID → CSS var used below.
// ---------------------------------------------------------------------------
//
// Surface
//   semantic/surface/action/primary/default   (VariableID:133:257)  → --semantic-surface-action-primary-default
//   semantic/surface/action/primary/hover     (VariableID:133:258)  → --semantic-surface-action-primary-hover
//   semantic/surface/action/primary/pressed   (VariableID:133:259)  → --semantic-surface-action-primary-pressed
//   semantic/surface/neutral/disabled/default (VariableID:133:256)  → --semantic-surface-neutral-disabled-default
//
// Text
//   semantic/text/on-surface/action/default   (VariableID:133:252)  → --semantic-text-on-surface-action-default
//   semantic/text/action/primary/default      (VariableID:133:244)  → --semantic-text-action-primary-default
//   semantic/text/on-surface/disabled/default (VariableID:133:253)  → --semantic-text-on-surface-disabled-default
//
// Icon (drives --alva-btn-icon-color, applied via currentColor on the icon slot)
//   semantic/icon/on-surface/action/default   (VariableID:133:287)  → --semantic-icon-on-surface-action-default
//   semantic/icon/action/primary/default      (VariableID:133:279)  → --semantic-icon-action-primary-default
//   semantic/icon/on-surface/disabled/default (VariableID:133:288)  → --semantic-icon-on-surface-disabled-default
//
// Border
//   semantic/border/action/primary/default    (VariableID:133:268)  → --semantic-border-action-primary-default
//   semantic/border/action/primary/hover      (VariableID:133:269)  → --semantic-border-action-primary-hover
//   semantic/border/action/primary/pressed    (VariableID:133:270)  → --semantic-border-action-primary-pressed
//   semantic/border/action/primary/focus      (VariableID:133:292)  → --semantic-border-action-primary-focus
//   semantic/border/neutral/primary/focus     (VariableID:133:293)  → --semantic-border-neutral-primary-focus
//   semantic/border/neutral/disabled/default  (VariableID:133:267)  → --semantic-border-neutral-disabled-default
//
// Spacing (responsive)
//   responsive/spacing/lg  → --responsive-spacing-lg   (paddingH)
//   responsive/spacing/sm  → --responsive-spacing-sm   (paddingV)
//   responsive/spacing/xs  → --responsive-spacing-xs   (gap)
//
// Border width — not variable-bound in the Figma file (hardcoded 1px).
// Maps to primitives tier to comply with ALVA token-architecture rule.
//   primitive value: 1px  → var(--primitives-border-width, 1px)

export const BUTTON_CSS = /* css */ `
/* ─────────────────────────────────────────────────────────────
   Base
───────────────────────────────────────────────────────────── */
.alva-button {
  /* Private icon-color channel — overridden per variant + state */
  --alva-btn-icon-color: currentColor;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--responsive-spacing-xs);
  padding: var(--responsive-spacing-sm) var(--responsive-spacing-lg);

  border-style: solid;
  border-width: var(--primitives-border-width-sm);
  border-color: transparent;
  border-radius: var(--primitives-border-radius-md, 8px);

  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  user-select: none;

  transition:
    background-color 0.15s ease,
    border-color 0.15s ease,
    color 0.15s ease;
}

.alva-button:focus-visible {
  outline: none;
}

/* ─────────────────────────────────────────────────────────────
   Icon slot — inherits color from --alva-btn-icon-color
───────────────────────────────────────────────────────────── */
.alva-button__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--alva-btn-icon-color);
}

/* ─────────────────────────────────────────────────────────────
   PRIMARY
   Filled surface — text + icon use "on-surface" tokens throughout.
───────────────────────────────────────────────────────────── */
.alva-button[data-variant="Primary"] {
  background-color: var(--semantic-surface-action-primary-default);
  border-color: transparent;
  color: var(--semantic-text-on-surface-action-default);
  --alva-btn-icon-color: var(--semantic-icon-on-surface-action-default);
}

.alva-button[data-variant="Primary"]:hover:not(:disabled) {
  background-color: var(--semantic-surface-action-primary-hover);
}

.alva-button[data-variant="Primary"]:active:not(:disabled) {
  background-color: var(--semantic-surface-action-primary-pressed);
}

.alva-button[data-variant="Primary"]:focus-visible {
  background-color: var(--semantic-surface-action-primary-default);
  border-color: var(--semantic-border-action-primary-focus);
}

.alva-button[data-variant="Primary"]:disabled {
  background-color: var(--semantic-surface-neutral-disabled-default);
  border-color: transparent;
  color: var(--semantic-text-on-surface-disabled-default);
  --alva-btn-icon-color: var(--semantic-icon-on-surface-disabled-default);
  cursor: not-allowed;
}

/* ─────────────────────────────────────────────────────────────
   SECONDARY
   Ghost — transparent by default; acquires Primary surface on hover/pressed.
   Per Figma spec: icon keeps action/primary token on hover/pressed while
   text switches to on-surface (faithfully reproduced).
───────────────────────────────────────────────────────────── */
.alva-button[data-variant="Secondary"] {
  background-color: transparent;
  border-color: transparent;
  color: var(--semantic-text-action-primary-default);
  --alva-btn-icon-color: var(--semantic-icon-action-primary-default);
}

.alva-button[data-variant="Secondary"]:hover:not(:disabled) {
  background-color: var(--semantic-surface-action-primary-hover);
  color: var(--semantic-text-on-surface-action-default);
  /* icon intentionally keeps action/primary per Figma Status=Hover,Type=Secondary */
  --alva-btn-icon-color: var(--semantic-icon-action-primary-default);
}

.alva-button[data-variant="Secondary"]:active:not(:disabled) {
  background-color: var(--semantic-surface-action-primary-pressed);
  color: var(--semantic-text-on-surface-action-default);
  --alva-btn-icon-color: var(--semantic-icon-action-primary-default);
}

.alva-button[data-variant="Secondary"]:focus-visible {
  border-color: var(--semantic-border-action-primary-focus);
}

.alva-button[data-variant="Secondary"]:disabled {
  background-color: transparent;
  border-color: transparent;
  color: var(--semantic-text-on-surface-disabled-default);
  --alva-btn-icon-color: var(--semantic-icon-on-surface-disabled-default);
  cursor: not-allowed;
}

/* ─────────────────────────────────────────────────────────────
   TERTIARY
   Outlined — border visible at rest; acquires Primary surface on hover/pressed.
   Focus ring uses neutral/primary/focus (different from Primary/Secondary).
───────────────────────────────────────────────────────────── */
.alva-button[data-variant="Tertiary"] {
  background-color: transparent;
  border-color: var(--semantic-border-action-primary-default);
  color: var(--semantic-text-action-primary-default);
  --alva-btn-icon-color: var(--semantic-icon-action-primary-default);
}

.alva-button[data-variant="Tertiary"]:hover:not(:disabled) {
  background-color: var(--semantic-surface-action-primary-hover);
  border-color: var(--semantic-border-action-primary-hover);
  color: var(--semantic-text-on-surface-action-default);
  --alva-btn-icon-color: var(--semantic-icon-on-surface-action-default);
}

.alva-button[data-variant="Tertiary"]:active:not(:disabled) {
  background-color: var(--semantic-surface-action-primary-pressed);
  border-color: var(--semantic-border-action-primary-pressed);
  color: var(--semantic-text-on-surface-action-default);
  --alva-btn-icon-color: var(--semantic-icon-on-surface-action-default);
}

.alva-button[data-variant="Tertiary"]:focus-visible {
  border-color: var(--semantic-border-neutral-primary-focus);
}

.alva-button[data-variant="Tertiary"]:disabled {
  background-color: var(--semantic-surface-neutral-disabled-default);
  border-color: var(--semantic-border-neutral-disabled-default);
  color: var(--semantic-text-on-surface-disabled-default);
  --alva-btn-icon-color: var(--semantic-icon-on-surface-disabled-default);
  cursor: not-allowed;
}
`;
