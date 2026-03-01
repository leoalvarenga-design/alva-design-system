import type { IconProps } from './icon.types';

/**
 * ALVA Icon
 *
 * Mirrors the Figma "Icon" component set (node 190:691).
 *
 * Variant axis  → `size` prop ("16" | "20" | "24")
 * Glyph swap    → `glyph` prop (ReactNode — SVG must use fill="currentColor")
 *
 * Color contract (mirrors Figma's Vector fill token binding):
 *   Default color: --semantic-icon-neutral-primary-default
 *   Override via: CSS `color` property on the component or any ancestor,
 *                 or via --alva-icon-color custom property for scoped overrides.
 *
 * Accessibility:
 *   - aria-label provided → role="img" (meaningful icon, screen-reader announced)
 *   - aria-label omitted  → aria-hidden="true" (decorative, screen-reader skipped)
 *
 * CSS requirement:
 *   Import `alva-ui/src/icon/icon.css` and `alva-ui/src/tokens/alva.css`
 *   once at your app root before rendering any Icon.
 */
export function Icon({
  size = '20',
  glyph,
  className,
  'aria-label': ariaLabel,
  ...rest
}: IconProps) {
  const rootClass = ['alva-icon', className].filter(Boolean).join(' ');

  const isDecorative = !ariaLabel;

  return (
    <span
      className={rootClass}
      data-size={size}
      role={isDecorative ? undefined : 'img'}
      aria-label={ariaLabel}
      aria-hidden={isDecorative || undefined}
      {...rest}
    >
      {glyph}
    </span>
  );
}

Icon.displayName = 'Icon';
