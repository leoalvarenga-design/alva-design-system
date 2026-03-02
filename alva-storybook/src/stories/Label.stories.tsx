import './gallery.css';
import type { Meta, StoryObj } from '@storybook/react';
import { Label } from 'alva-ui';

/**
 * **Label** renders an accessible `<label>` with optional required/optional
 * badges, all token-bound:
 *
 * - `required` → appends `*` in `--semantic-text-feedback-error-default`
 * - `optional` → appends "Optional" in `--semantic-text-neutral-disabled-default`
 * - Typography and gap driven by `--responsive-typography-*` and
 *   `--responsive-spacing-*` tokens.
 *
 * Figma source: Label component set (ALVA DS).
 */
const meta: Meta<typeof Label> = {
  title:     'ALVA/Label',
  component: Label,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    labelText: 'Email address',
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

// ── Variants ──────────────────────────────────────────────────────────────────

export const Default: Story = {
  args: { labelText: 'Full name' },
};

export const Required: Story = {
  args: { labelText: 'Email address', required: true },
};

export const Optional: Story = {
  args: { labelText: 'Phone number', optional: true },
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

      <div className="sb-gallery__section">
        <div className="sb-gallery__section-title">All variants</div>
        <div className="sb-gallery__row">
          <div className="sb-gallery__item">
            <Label labelText="Default label" />
            <span className="sb-gallery__item-label">Default</span>
          </div>
          <div className="sb-gallery__item">
            <Label labelText="Required field" required />
            <span className="sb-gallery__item-label">required</span>
          </div>
          <div className="sb-gallery__item">
            <Label labelText="Optional field" optional />
            <span className="sb-gallery__item-label">optional</span>
          </div>
          <div className="sb-gallery__item">
            <Label labelText="Both provided — required wins" required optional />
            <span className="sb-gallery__item-label">required + optional</span>
          </div>
        </div>
      </div>

      <div className="sb-gallery__section">
        <div className="sb-gallery__section-title">Long labels</div>
        <div className="sb-gallery__row">
          <div className="sb-gallery__item">
            <Label labelText="Billing address line 1" required />
            <span className="sb-gallery__item-label">required — long text</span>
          </div>
          <div className="sb-gallery__item">
            <Label labelText="Additional comments or notes" optional />
            <span className="sb-gallery__item-label">optional — long text</span>
          </div>
        </div>
      </div>

    </div>
  ),
};
