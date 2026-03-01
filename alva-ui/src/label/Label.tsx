import type { LabelProps } from './label.types';

/**
 * ALVA Label
 *
 * Renders a `<label>` element with optional required (*) or optional badges.
 *
 * Props
 *   labelText  → visible label string
 *   required   → appends `*` in error token color (aria-hidden)
 *   optional   → appends "Optional" in disabled token color; ignored when required=true
 *
 * All native `<label>` attributes (including `htmlFor`) are forwarded.
 *
 * CSS requirement
 *   Import `alva-ui/src/label/label.css` and `alva-ui/src/tokens/alva.css`
 *   once at your app root.
 */
export function Label({
  labelText,
  required = false,
  optional = false,
  className,
  ...rest
}: LabelProps) {
  const rootClass = ['alva-label', className].filter(Boolean).join(' ');

  return (
    <label className={rootClass} {...rest}>
      {labelText}
      {required && (
        <span className="alva-label__required" aria-hidden="true">
          *
        </span>
      )}
      {!required && optional && (
        <span className="alva-label__optional">Optional</span>
      )}
    </label>
  );
}

Label.displayName = 'Label';
