import type { HTMLAttributes, ReactNode } from 'react';

/**
 * Mirrors Figma "size" variant axis on the Icon component set (node 190:691).
 * Values map to semantic icon size tokens:
 *   "16" → --semantic-icon-size-sm (16px)
 *   "20" → --semantic-icon-size-md (20px)
 *   "24" → --semantic-icon-size-lg (24px)
 */
export type IconSize = '16' | '20' | '24';

export interface IconProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'children'> {
  /**
   * Figma "size" variant axis — fixed container dimensions.
   * @default "20"
   */
  size?: IconSize;
  /**
   * Figma "Glyph" INSTANCE_SWAP equivalent.
   * Accepts any ReactNode; SVGs must use `fill="currentColor"` so that
   * the Icon's CSS `color` property drives the visible color — no token
   * binding on the glyph vector itself (mirrors Figma's contract).
   */
  glyph?: ReactNode;
  /**
   * Human-readable label. When provided: role="img" + aria-label are set.
   * When omitted: aria-hidden="true" (decorative icon).
   */
  'aria-label'?: string;
}
