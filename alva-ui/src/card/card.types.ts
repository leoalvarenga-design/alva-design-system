import type { HTMLAttributes, ReactNode } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  // ── Figma exposed properties (node 136:371) ─────────────────────────────

  /**
   * Figma "Title" TEXT property.
   * Rendered as the card heading in Poppins SemiBold h6 scale.
   * @default "Demo Card Title"
   */
  title?: string;

  /**
   * Figma "Body" TEXT property.
   * Rendered as body copy in Inter Regular body-md scale.
   * @default "This is the demo card body text with additional information."
   */
  body?: string;

  /**
   * Figma "ShowCTA" BOOLEAN property (default: true).
   * Toggles the CTA slot visibility.
   * @default true
   */
  showCTA?: boolean;

  /**
   * Figma "Instance" INSTANCE_SWAP property — code equivalent: ReactNode slot.
   * Default renders `<Button variant="Primary" label="Button" />` from alva-ui.
   * Pass any ReactNode to replace the default CTA.
   */
  cta?: ReactNode;

  // ── Extension (not in Figma API) ────────────────────────────────────────

  /**
   * Content for the image frame slot (Figma: "Image" frame, 312×180,
   * background: surface/neutral/disabled).
   * When omitted, the styled placeholder div is rendered.
   * Accepts any ReactNode (e.g. `<img>`, `<picture>`, a Next.js `<Image>`).
   */
  image?: ReactNode;
}
