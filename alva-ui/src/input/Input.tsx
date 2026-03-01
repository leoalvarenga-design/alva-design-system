import { forwardRef, useId } from 'react';
import { Label } from '../label/Label';
import { Field } from '../field/Field';
import type { InputProps } from './input.types';

/**
 * ALVA Input
 *
 * Composes Label + Field + helper text into a single form control.
 * Source: Figma component set "Input" (node 199:1718).
 *
 * Figma-level API (properties exposed on the Input component set)
 *   status      → "Status" variant axis — drives Field and helper text tokens
 *   showLabel   → "showLabel" property  — toggles Label visibility
 *   showHelper  → "showHelper" property — toggles helper text visibility
 *   helperText  → "helperText" property — helper text content
 *
 * Passthrough API (nested inside LabelInstance / FieldInstance in Figma;
 * surfaced as first-class props here for ergonomic use):
 *   labelText, optional, required → forwarded to <Label>
 *   placeholderText, showIconLeft, showIconRight,
 *   iconLeftGlyph, iconRightGlyph  → forwarded to <Field>
 *   All other InputHTMLAttributes  → forwarded to the inner <input>
 *
 * Accessibility
 *   · Label is linked to the input via `htmlFor` / `id`.
 *   · Helper text is linked via `aria-describedby`.
 *   · Field already sets `aria-invalid="true"` on Error status.
 *   · The `*` in Label is `aria-hidden`; required state lives on the <input>.
 *
 * The ref is forwarded to the inner <input> element (via Field).
 *
 * CSS requirement
 *   Import `alva-ui/src/input/input.css`, `alva-ui/src/label/label.css`,
 *   `alva-ui/src/field/field.css`, and `alva-ui/src/tokens/alva.css`
 *   once at your app root.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    // Figma Input-level API
    status = 'Default',
    showLabel = true,
    showHelper = true,
    helperText = 'Helper text',
    // Label passthrough
    labelText = 'Label',
    optional = false,
    // Field passthrough
    placeholderText,
    showIconLeft,
    showIconRight,
    iconLeftGlyph,
    iconRightGlyph,
    // Native input attrs (destructured to control forwarding)
    id: idProp,
    className,
    disabled,
    required,
    ...rest
  },
  ref,
) {
  const generatedId = useId();
  const id = idProp ?? generatedId;

  const isDisabled = disabled || status === 'Disabled';
  const resolvedStatus = isDisabled ? 'Disabled' : status;

  const helperId = `${id}-helper`;
  const rootClass = ['alva-input', className].filter(Boolean).join(' ');

  return (
    <div className={rootClass} data-status={resolvedStatus}>
      {showLabel && (
        <Label
          className="alva-input__label"
          labelText={labelText}
          required={required}
          optional={optional}
          htmlFor={id}
        />
      )}

      <Field
        ref={ref}
        className="alva-input__field"
        status={resolvedStatus}
        placeholderText={placeholderText}
        showIconLeft={showIconLeft}
        showIconRight={showIconRight}
        iconLeftGlyph={iconLeftGlyph}
        iconRightGlyph={iconRightGlyph}
        id={id}
        disabled={isDisabled}
        required={required}
        aria-describedby={showHelper && helperText ? helperId : undefined}
        {...rest}
      />

      {showHelper && helperText && (
        <span
          id={helperId}
          className="alva-input__helper"
          aria-live="polite"
        >
          {helperText}
        </span>
      )}
    </div>
  );
});

Input.displayName = 'Input';
