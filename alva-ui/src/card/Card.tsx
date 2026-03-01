import { Button } from '../button/Button';
import type { CardProps } from './card.types';

/**
 * ALVA Card
 *
 * Source: Figma component "Card" (node 136:371, single component, no variant axes).
 *
 * Figma-level API
 *   title    → "Title" TEXT property (Poppins SemiBold h6 scale)
 *   body     → "Body" TEXT property (Inter Regular body-md scale)
 *   showCTA  → "ShowCTA" BOOLEAN property — toggles the CTA slot
 *   cta      → "Instance" INSTANCE_SWAP equivalent — ReactNode slot.
 *              Defaults to `<Button variant="Primary" label="Button" />`.
 *              Pass any ReactNode to replace the default CTA.
 *
 * Extension (not in Figma API)
 *   image    → Content for the image frame slot (Figma: "Image" frame, 312×180).
 *              Renders a styled placeholder div when omitted.
 *
 * CSS requirement
 *   Import `alva-ui/src/card/card.css`, `alva-ui/src/button/button.css`,
 *   and `alva-ui/src/tokens/alva.css` once at your app root.
 */
export function Card({
  title = 'Demo Card Title',
  body = 'This is the demo card body text with additional information.',
  showCTA = true,
  cta,
  image,
  className,
  ...rest
}: CardProps) {
  const rootClass = ['alva-card', className].filter(Boolean).join(' ');

  const defaultCTA = <Button variant="Primary" label="Button" />;

  return (
    <div className={rootClass} {...rest}>
      <div className="alva-card__image">{image ?? null}</div>

      <p className="alva-card__title">{title}</p>

      <p className="alva-card__body">{body}</p>

      {showCTA && (
        <div className="alva-card__cta">{cta ?? defaultCTA}</div>
      )}
    </div>
  );
}

Card.displayName = 'Card';
