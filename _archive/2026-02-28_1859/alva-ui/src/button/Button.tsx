import { forwardRef } from 'react';
import type { ButtonProps } from './button.types';

/**
 * Button — generated from Figma "Button" component set (ALVA file, nodeId 192:1625).
 *
 * Variant axes (mirror Figma):
 *   variant  → Type:   Primary | Secondary | Tertiary
 *   disabled → Status: Disabled
 *   :hover   → Status: Hover
 *   :active  → Status: Pressed
 *   :focus-visible → Status: Focused
 *
 * Icon slots mirror the Figma _mask + _color pattern:
 *   Pass any ReactNode as iconLeftGlyph / iconRightGlyph.
 *   The wrapper applies `color: var(--alva-btn-icon-color)` so the glyph
 *   should use `currentColor` for its fill/stroke.
 *
 * CSS must be injected separately via BUTTON_CSS from button.styles.ts.
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
