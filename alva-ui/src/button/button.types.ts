import type { ButtonHTMLAttributes, ReactNode } from 'react';

/** Mirrors Figma "Type" variant axis: Primary | Secondary | Tertiary */
export type ButtonVariant = 'Primary' | 'Secondary' | 'Tertiary';

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /** Figma: Type variant — visual hierarchy */
  variant?: ButtonVariant;
  /** Figma: Label prop — button text */
  label?: string;
  /** Figma: showIconLeft prop — renders the left icon slot */
  showIconLeft?: boolean;
  /** Figma: showIconRight prop — renders the right icon slot */
  showIconRight?: boolean;
  /**
   * Figma: iconLeft prop (INSTANCE_SWAP equivalent).
   * Accepts any ReactNode; SVGs must use `fill="currentColor"` or `stroke="currentColor"`
   * so that the parent's CSS custom property `--alva-btn-icon-color` drives visible color
   * (mirrors the Figma _mask + _color pattern without binding token to the glyph vector).
   */
  iconLeftGlyph?: ReactNode;
  /**
   * Figma: iconRight prop (INSTANCE_SWAP equivalent).
   * Same constraints as iconLeftGlyph.
   */
  iconRightGlyph?: ReactNode;
  /**
   * Expands the button to fill its container width.
   * Switches from `inline-flex` to `flex` + `width: 100%`.
   * @default false
   */
  fullWidth?: boolean;
  /** Native button type */
  type?: 'button' | 'submit' | 'reset';
}
