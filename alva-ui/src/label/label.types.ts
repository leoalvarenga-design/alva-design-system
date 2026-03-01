import type { LabelHTMLAttributes } from 'react';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  /** Visible label text. */
  labelText: string;
  /**
   * Appends a `*` in the error semantic token color to signal a required field.
   * The asterisk is aria-hidden — required state should be communicated via the
   * associated input's `required` / `aria-required` attribute.
   * @default false
   */
  required?: boolean;
  /**
   * Appends an "Optional" badge in the neutral-disabled token color.
   * Ignored when `required` is true (required takes precedence).
   * @default false
   */
  optional?: boolean;
}
