import { forwardRef } from 'react';
import type { ButtonProps } from './button.types';

/**
 * ALVA Button
 *
 * Mirrors the Figma "Button" component set (node 192:1625).
 *
 * Variant axis  → `variant` prop  (Primary | Secondary | Tertiary)
 * State axis    → CSS pseudo-classes (:hover, :active, :focus-visible, :disabled)
 * Props         → Label, showIconLeft, showIconRight, iconLeftGlyph, iconRightGlyph
 *
 * Icon contract (Figma MASK + _COLOR pattern):
 *   Pass any ReactNode to `iconLeftGlyph` / `iconRightGlyph`.
 *   The glyph SVG must use `fill="currentColor"` or `stroke="currentColor"`.
 *   The icon slot sets `color: var(--alva-btn-icon-color)` so the visible color
 *   is driven entirely by the component's semantic token — never bound directly
 *   to the glyph vector, matching Figma's _mask + _color structure.
 *
 * CSS requirement:
 *   Import `alva-ui/src/button/button.css` and `alva-ui/src/tokens/alva.css`
 *   once at your app root before rendering any Button.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      variant = 'Primary',
      label = 'Button',
      showIconLeft = false,
      showIconRight = false,
      iconLeftGlyph,
      iconRightGlyph,
      className,
      children,
      disabled = false,
      type = 'button',
      ...rest
    },
    ref,
  ) {
    const rootClass = ['alva-button', className].filter(Boolean).join(' ');

    return (
      <button
        ref={ref}
        type={type}
        className={rootClass}
        data-variant={variant}
        disabled={disabled}
        aria-disabled={disabled}
        {...rest}
      >
        {showIconLeft && iconLeftGlyph != null && (
          <span
            className="alva-button__icon alva-button__icon--left"
            aria-hidden="true"
          >
            {iconLeftGlyph}
          </span>
        )}

        <span className="alva-button__label">{children ?? label}</span>

        {showIconRight && iconRightGlyph != null && (
          <span
            className="alva-button__icon alva-button__icon--right"
            aria-hidden="true"
          >
            {iconRightGlyph}
          </span>
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';
