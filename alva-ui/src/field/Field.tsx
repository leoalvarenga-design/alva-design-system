import { forwardRef } from 'react';
import type { FieldProps } from './field.types';

/**
 * ALVA Field
 *
 * Mirrors the Figma "Field" component set (node 197:538).
 *
 * Variant axes
 *   Status → `status` prop  (Default | Error | Success | Disabled)
 *   Filled state is web-native: ::placeholder colors the empty state,
 *   input text color handles the typed value — no prop required.
 *
 * Properties
 *   placeholderText   → native placeholder attribute
 *   showIconLeft/Right → renders icon slots
 *   iconLeftGlyph/iconRightGlyph → ReactNode INSTANCE_SWAP equivalents
 *
 * Icon color contract (mirrors Figma _mask + _color pattern)
 *   Each icon slot sets `color: var(--alva-field-icon-color)`.
 *   Glyph SVGs must use `fill="currentColor"` — the slot drives the visible
 *   color while the glyph vector remains token-free and swap-safe.
 *
 * Hover / Focus states
 *   Hover  → CSS :hover on the wrapper (Default status only; preserved for Error/Success)
 *   Focus  → CSS :focus-within on the wrapper (applies to all non-Disabled statuses)
 *
 * The ref is forwarded to the inner <input> element.
 *
 * CSS requirement
 *   Import `alva-ui/src/field/field.css` and `alva-ui/src/tokens/alva.css`
 *   once at your app root.
 */
export const Field = forwardRef<HTMLInputElement, FieldProps>(function Field(
  {
    status = 'Default',
    placeholderText = 'Value',
    showIconLeft = false,
    showIconRight = false,
    iconLeftGlyph,
    iconRightGlyph,
    className,
    disabled,
    ...rest
  },
  ref,
) {
  // Disabled can come from either the prop or the status axis
  const isDisabled = disabled || status === 'Disabled';
  const resolvedStatus = isDisabled ? 'Disabled' : status;
  const rootClass = ['alva-field', className].filter(Boolean).join(' ');

  return (
    <span
      className={rootClass}
      data-status={resolvedStatus}
    >
      {showIconLeft && iconLeftGlyph != null && (
        <span
          className="alva-field__icon alva-field__icon--left"
          aria-hidden="true"
        >
          {iconLeftGlyph}
        </span>
      )}

      <input
        ref={ref}
        className="alva-field__input"
        placeholder={placeholderText}
        disabled={isDisabled}
        aria-invalid={resolvedStatus === 'Error' ? 'true' : undefined}
        {...rest}
      />

      {showIconRight && iconRightGlyph != null && (
        <span
          className="alva-field__icon alva-field__icon--right"
          aria-hidden="true"
        >
          {iconRightGlyph}
        </span>
      )}
    </span>
  );
});

Field.displayName = 'Field';
