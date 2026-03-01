import type { InputHTMLAttributes, ReactNode } from 'react';
import type { FieldStatus } from '../field/field.types';

/**
 * Same status axis as Field — re-exported for convenience so consumers
 * don't need to import from the Field module.
 */
export type InputStatus = FieldStatus;

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'placeholder'> {
  // ── Figma Input-level API (node 199:1718) ───────────────────────────────

  /**
   * Figma "Status" variant axis.
   * Drives Field border/icon tokens AND HelperText color.
   * Disabled is also triggered by the native `disabled` attribute.
   * @default "Default"
   */
  status?: InputStatus;

  /**
   * Figma "showLabel" property (default: true).
   * Hides/shows the Label above the Field.
   * @default true
   */
  showLabel?: boolean;

  /**
   * Figma "showHelper" property (default: true).
   * Hides/shows the helper text below the Field.
   * @default true
   */
  showHelper?: boolean;

  /**
   * Figma "helperText" property.
   * Descriptive or error/success message below the Field.
   * @default "Helper text"
   */
  helperText?: string;

  // ── Label passthrough ───────────────────────────────────────────────────
  // Not exposed at the Figma Input level (live inside LabelInstance),
  // but surfaced here as first-class props for ergonomic API.

  /**
   * Text rendered by the Label component.
   * Maps to Figma LabelInstance → labelText.
   * @default "Label"
   */
  labelText?: string;

  /**
   * Appends a required `*` marker on the Label AND sets `required` on
   * the underlying `<input>`.
   * Sourced from InputHTMLAttributes; surfaced here for clarity.
   */
  // `required` inherited from InputHTMLAttributes

  /**
   * Appends an "Optional" badge on the Label.
   * Ignored when `required` is true.
   * @default false
   */
  optional?: boolean;

  // ── Field / input passthrough ───────────────────────────────────────────
  // Not exposed at the Figma Input level (live inside FieldInstance),
  // but surfaced here for ergonomic API.

  /**
   * Placeholder text forwarded to the Field.
   * Maps to Figma FieldInstance → placeholderText.
   */
  placeholderText?: string;

  /** Renders the left icon slot inside the Field. */
  showIconLeft?: boolean;

  /** Renders the right icon slot inside the Field. */
  showIconRight?: boolean;

  /**
   * SVG glyph for the left icon slot.
   * Must use `fill="currentColor"`. Color is driven by the Field's status token.
   */
  iconLeftGlyph?: ReactNode;

  /**
   * SVG glyph for the right icon slot.
   * Must use `fill="currentColor"`. Color is driven by the Field's status token.
   */
  iconRightGlyph?: ReactNode;
}
