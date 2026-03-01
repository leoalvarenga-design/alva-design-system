import type { InputHTMLAttributes, ReactNode } from 'react';

/**
 * Mirrors Figma "Status" variant axis on the Field component set (node 197:538).
 * Hover and Focused are handled by CSS pseudo-classes (:hover / :focus-within)
 * and are not exposed as explicit prop values.
 */
export type FieldStatus = 'Default' | 'Error' | 'Success' | 'Disabled';

export interface FieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'placeholder'> {
  /**
   * Figma "Status" variant axis.
   * Default, Error, Success drive border + icon tokens.
   * Disabled is also controlled by the native `disabled` attribute —
   * setting either will apply Disabled styling.
   * @default "Default"
   */
  status?: FieldStatus;
  /**
   * Figma "Filled" variant axis.
   * When omitted, CSS :placeholder-shown drives text color automatically
   * (empty → neutral/disabled token; value present → neutral/body token).
   * Set explicitly for controlled or static rendering overrides.
   */
  filled?: boolean;
  /**
   * Figma "placeholderText" prop — maps to the native placeholder attribute.
   * @default "Value"
   */
  placeholderText?: string;
  /** Figma "showIconLeft" prop — renders the left icon slot. */
  showIconLeft?: boolean;
  /** Figma "showIconRight" prop — renders the right icon slot. */
  showIconRight?: boolean;
  /**
   * Figma "iconLeftGlyph" INSTANCE_SWAP equivalent.
   * SVG must use fill="currentColor" — the slot drives visible color via
   * --alva-field-icon-color (mirrors Figma's _mask + _color pattern).
   */
  iconLeftGlyph?: ReactNode;
  /**
   * Figma "iconRightGlyph" INSTANCE_SWAP equivalent.
   * Same contract as iconLeftGlyph.
   */
  iconRightGlyph?: ReactNode;
}
