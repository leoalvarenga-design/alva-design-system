import './gallery.css';
import type { Meta, StoryObj } from '@storybook/react';
import { Card, Button } from 'alva-ui';

/**
 * **Card** is the primary content-container component of the ALVA DS.
 *
 * Figma public API (node 136:371):
 * - `title` — card heading (Poppins SemiBold, h6 token scale)
 * - `body` — body copy (Inter Regular, body-md token scale)
 * - `showCTA` — toggle the CTA slot visibility (default: true)
 * - `cta` — ReactNode slot; defaults to `<Button variant="Primary" />` when omitted
 * - `image` — ReactNode slot for the image frame (defaults to placeholder div)
 *
 * Card border uses `--primitives-border-width-sm` (no fallback).
 * All spacing, radius and colors are driven by `alva.css` tokens.
 */
const meta: Meta<typeof Card> = {
  title:     'ALVA/Card',
  component: Card,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    title:   'Card title',
    body:    'This is the card body text with additional information about the content.',
    showCTA: true,
  },
  argTypes: {
    cta:   { control: false }, // ReactNode
    image: { control: false }, // ReactNode
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

// ── CTA variants ──────────────────────────────────────────────────────────────

export const Default: Story = {
  args: {
    title:   'Default Card',
    body:    'CTA uses the default Button (Primary). Pass the `cta` prop to override.',
    showCTA: true,
  },
};

export const NoCTA: Story = {
  name: 'No CTA',
  args: {
    title:   'Content Card',
    body:    'The CTA slot is hidden. Useful for informational cards.',
    showCTA: false,
  },
};

export const PrimaryCTA: Story = {
  name: 'Primary CTA (full width)',
  args: {
    title:   'Primary CTA',
    body:    'The CTA Button stretches to the full card width via fullWidth.',
    showCTA: true,
    cta:     <Button variant="Primary"   label="Get started" fullWidth />,
  },
};

export const SecondaryCTA: Story = {
  name: 'Secondary CTA (full width)',
  args: {
    title:   'Secondary CTA',
    body:    'Alternative action with a less prominent button.',
    showCTA: true,
    cta:     <Button variant="Secondary" label="Learn more" fullWidth />,
  },
};

export const TertiaryCTA: Story = {
  name: 'Tertiary CTA (full width)',
  args: {
    title:   'Tertiary CTA',
    body:    'Ghost button for low-emphasis actions.',
    showCTA: true,
    cta:     <Button variant="Tertiary"  label="See details" fullWidth />,
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
              body="Default action button spanning the full card width."
              showCTA
              cta={<Button variant="Primary" label="Get started" fullWidth />}
            />
            <span className="sb-gallery__item-label">Primary — fullWidth</span>
          </div>
          <div className="sb-gallery__item">
            <Card
              title="No CTA"
              body="Informational card — CTA slot is hidden. Body copy can run longer here."
              showCTA={false}
            />
            <span className="sb-gallery__item-label">showCTA=false</span>
          </div>
          <div className="sb-gallery__item">
            <Card
              title="Tertiary CTA"
              body="Low-emphasis ghost button for secondary actions."
              showCTA
              cta={<Button variant="Tertiary" label="See details" fullWidth />}
            />
            <span className="sb-gallery__item-label">Tertiary — fullWidth</span>
          </div>
        </div>
      </div>

      {/* ── With custom image slot ─────────────────────────────────── */}
      <div className="sb-gallery__section">
        <div className="sb-gallery__section-title">Image slot — custom content</div>
        <div className="sb-gallery__row" style={{ alignItems: 'flex-start' }}>
          <div className="sb-gallery__item">
            <Card
              title="Default image placeholder"
              body="The image slot renders a styled placeholder when no `image` prop is provided."
              showCTA
              cta={<Button variant="Primary" label="Open" fullWidth />}
            />
            <span className="sb-gallery__item-label">image omitted</span>
          </div>
          <div className="sb-gallery__item">
            <Card
              title="Secondary CTA"
              body="Second card to compare width consistency in a row."
              showCTA
              cta={<Button variant="Secondary" label="Learn more" fullWidth />}
            />
            <span className="sb-gallery__item-label">Secondary — fullWidth</span>
          </div>
        </div>
      </div>

    </div>
  ),
};
