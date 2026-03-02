import './gallery.css';
import type { Meta, StoryObj } from '@storybook/react';
import { Card, Button } from 'alva-ui';

/**
 * **Card** is the primary content-container component of the ALVA DS.
 *
 * Figma public API (node 136:371):
 * - `title` — card heading (Poppins SemiBold, h6 token scale)
 * - `body` — body copy (Inter Regular, body-md token scale)
 * - `showCTA` — toggle the CTA slot visibility (default: `true`)
 * - `cta` — ReactNode slot; defaults to `<Button variant="Primary" label="Button" />`
 *   when omitted. For demo purposes pass `<Button fullWidth />` so the button
 *   fills the card's content area — this is the intended Figma demo layout.
 * - `image` — ReactNode slot for the image frame (defaults to a styled placeholder)
 *
 * Token bindings: border uses `--primitives-border-width-sm`, all spacing /
 * radius / colors come from `alva.css`.
 */
const meta: Meta<typeof Card> = {
  title:     'ALVA/Card',
  component: Card,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  args: {
    title:   'Card title',
    body:    'This is the card body text with additional information about the content.',
    showCTA: true,
    /*
     * Default demo: Button with fullWidth fills the card content width.
     * This matches the intended Figma demo layout.
     * The Card component itself does NOT default to fullWidth — see NaturalWidth.
     */
    cta: <Button variant="Primary" label="Get started" fullWidth />,
  },
  argTypes: {
    cta:   { control: false }, // ReactNode — not serialisable
    image: { control: false }, // ReactNode — not serialisable
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

// ── Demo stories ──────────────────────────────────────────────────────────────

/**
 * Default card: CTA spans full content width (Button fullWidth).
 * This is the intended demo layout faithful to the Figma design.
 */
export const Default: Story = {
  args: {
    title:   'Demo Card Title',
    body:    'This is the demo card body text with additional information.',
    showCTA: true,
    cta:     <Button variant="Primary" label="Get started" fullWidth />,
  },
};

/**
 * Natural-width CTA: Button at its intrinsic width, no fullWidth override.
 * Shows the component's raw behavior when `cta` is not provided / default.
 */
export const NaturalWidth: Story = {
  name: 'Natural width CTA (default)',
  args: {
    title:   'Natural CTA width',
    body:    'No fullWidth prop — the Button renders at its natural size.',
    showCTA: true,
    cta:     undefined, // let Card render its built-in default Button
  },
};

export const NoCTA: Story = {
  name: 'No CTA',
  args: {
    title:   'Content Card',
    body:    'The CTA slot is hidden. Useful for informational cards.',
    showCTA: false,
    cta:     undefined,
  },
};

export const SecondaryCTA: Story = {
  name: 'Secondary CTA',
  args: {
    title:   'Secondary action',
    body:    'Less prominent CTA for secondary actions.',
    showCTA: true,
    cta:     <Button variant="Secondary" label="Learn more" fullWidth />,
  },
};

export const TertiaryCTA: Story = {
  name: 'Tertiary CTA',
  args: {
    title:   'Tertiary action',
    body:    'Ghost button for low-emphasis actions.',
    showCTA: true,
    cta:     <Button variant="Tertiary" label="See details" fullWidth />,
  },
};

// ── Gallery ───────────────────────────────────────────────────────────────────

export const Gallery: Story = {
  name: 'Gallery',
  parameters: {
    layout:   'fullscreen',
    controls: { disable: true },
  },
  render: (_args) => (
    <div className="sb-gallery">

      {/* ── CTA variants ───────────────────────────────────────────── */}
      <div className="sb-gallery__section">
        <div className="sb-gallery__section-title">CTA variants — full width</div>
        <div className="sb-gallery__row" style={{ alignItems: 'flex-start' }}>
          <div className="sb-gallery__item">
            <Card
              title="Primary CTA"
              body="Default action button spanning the full card content width."
              showCTA
              cta={<Button variant="Primary" label="Get started" fullWidth />}
            />
            <span className="sb-gallery__item-label">Primary — fullWidth</span>
          </div>
          <div className="sb-gallery__item">
            <Card
              title="No CTA"
              body="Informational card — the CTA slot is hidden. Body copy can run a bit longer to show how text fills the card area."
              showCTA={false}
            />
            <span className="sb-gallery__item-label">showCTA=false</span>
          </div>
          <div className="sb-gallery__item">
            <Card
              title="Tertiary CTA"
              body="Low-emphasis ghost button for secondary or destructive actions."
              showCTA
              cta={<Button variant="Tertiary" label="See details" fullWidth />}
            />
            <span className="sb-gallery__item-label">Tertiary — fullWidth</span>
          </div>
        </div>
      </div>

      {/* ── Secondary CTA + comparison ─────────────────────────────── */}
      <div className="sb-gallery__section">
        <div className="sb-gallery__section-title">Secondary CTA + Natural width comparison</div>
        <div className="sb-gallery__row" style={{ alignItems: 'flex-start' }}>
          <div className="sb-gallery__item">
            <Card
              title="Secondary CTA"
              body="Alternative action with a less prominent style."
              showCTA
              cta={<Button variant="Secondary" label="Learn more" fullWidth />}
            />
            <span className="sb-gallery__item-label">Secondary — fullWidth</span>
          </div>
          <div className="sb-gallery__item">
            <Card
              title="Natural width (default)"
              body="Card with no `cta` prop — renders the built-in default Button at its natural content width."
              showCTA
            />
            <span className="sb-gallery__item-label">Default Button (no fullWidth)</span>
          </div>
        </div>
      </div>

    </div>
  ),
};
