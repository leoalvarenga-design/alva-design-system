import type { ButtonHTMLAttributes, ReactNode } from 'react';

/** Maps to Figma variant axis "Type" */
export type ButtonVariant = 'Primary' | 'Secondary' | 'Tertiary';

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /**
   * Maps to Figma variant axis "Type".
   * @default "Primary"
   */
  variant?: ButtonVariant;

  /**
   * Maps to Figma component property "Label".
   * Rendered as the visible button label. Overridden by `children` if provided.
   * @default "Button"
   */
  label?: string;

  /**
   * Maps to Figma component property "showIconLeft".
   * When false the left icon slot is suppressed regardless of `iconLeftGlyph`.
   * @default false
   */
  showIconLeft?: boolean;

  /**
   * Maps to Figma component property "showIconRight".
   * When false the right icon slot is suppressed regardless of `iconRightGlyph`.
   * @default false
   */
  showIconRight?: boolean;

  /**
   * Maps to Figma INSTANCE_SWAP property "iconLeft".
   * Modelled as ReactNode; color is driven via `currentColor` (mirrors Figma _mask + _color pattern).
   */
  iconLeftGlyph?: ReactNode;

  /**
   * Maps to Figma INSTANCE_SWAP property "iconRight".
   * Modelled as ReactNode; color is driven via `currentColor` (mirrors Figma _mask + _color pattern).
   */
  iconRightGlyph?: ReactNode;

  /** Native button `type` attribute. */
  type?: 'button' | 'submit' | 'reset';
}
