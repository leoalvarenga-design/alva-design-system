import './gallery.css';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from 'alva-ui';

// ── Icon glyphs ───────────────────────────────────────────────────────────────
// SVGs use stroke/fill="currentColor" so the button's token color drives them.

const IconArrowLeft = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M13 8H3M7 12 3 8l4-4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconArrowRight = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconStar = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M8 2l1.546 3.13L13 5.78l-2.5 2.437.59 3.44L8 9.96l-3.09 1.697.59-3.44L3 5.78l3.454-.65L8 2z"
      fill="currentColor"
    />
  </svg>
);

// ── Meta ──────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Button> = {
  title: 'ALVA/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    variant: 'Primary',
    label: 'Button',
  },
  argTypes: {
    // ReactNode slots are not serialisable — disable the Controls panel for them.
    iconLeftGlyph:  { control: false },
    iconRightGlyph: { control: false },
  },
  /**
   * Global render: auto-injects a default glyph when showIconLeft/Right is
   * toggled via the Controls panel but no explicit glyph has been provided.
   * Stories that already set iconLeftGlyph/iconRightGlyph in their args pass
   * them through unchanged (the ?? guard only fires when the value is undefined).
   * When showIcon* is false the corresponding glyph is cleared entirely.
   */
  render: (args) => {
    const iconLeft  = args.showIconLeft  ? (args.iconLeftGlyph  ?? IconArrowLeft)  : undefined;
    const iconRight = args.showIconRight ? (args.iconRightGlyph ?? IconArrowRight) : undefined;
    return (
      <Button
        {...args}
        iconLeftGlyph={iconLeft}
        iconRightGlyph={iconRight}
      />
    );
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// ── Variant stories ───────────────────────────────────────────────────────────

export const Primary: Story = {
  args: { variant: 'Primary', label: 'Primary' },
};

export const Secondary: Story = {
  args: { variant: 'Secondary', label: 'Secondary' },
};

export const Tertiary: Story = {
  args: { variant: 'Tertiary', label: 'Tertiary' },
};

// ── Icon stories ──────────────────────────────────────────────────────────────
// Glyphs are fixed via args; meta's render() passes them through (args.iconLeftGlyph
// is defined, so the ?? default is never reached). The boolean toggles are hidden
// because flipping them in Controls would leave a glyph with no slot to render into.

export const WithIconLeft: Story = {
  args: {
    variant: 'Primary',
    label: 'Back',
    showIconLeft: true,
    iconLeftGlyph: IconArrowLeft,
  },
  argTypes: { showIconLeft: { control: false } },
};

export const WithIconRight: Story = {
  args: {
    variant: 'Primary',
    label: 'Next',
    showIconRight: true,
    iconRightGlyph: IconArrowRight,
  },
  argTypes: { showIconRight: { control: false } },
};

export const WithBothIcons: Story = {
  args: {
    variant: 'Primary',
    label: 'Continue',
    showIconLeft: true,
    iconLeftGlyph: IconArrowLeft,
    showIconRight: true,
    iconRightGlyph: IconArrowRight,
  },
  argTypes: {
    showIconLeft:  { control: false },
    showIconRight: { control: false },
  },
};

// ── State stories ─────────────────────────────────────────────────────────────

export const Disabled: Story = {
  args: { variant: 'Primary', label: 'Disabled', disabled: true },
};

// ── Layout stories ────────────────────────────────────────────────────────────

export const FullWidth: Story = {
  args: { variant: 'Primary', label: 'Full Width', fullWidth: true },
  decorators: [
    (Story) => (
      <div style={{ width: 280 }}>
        <Story />
      </div>
    ),
  ],
};

// ── Gallery story ─────────────────────────────────────────────────────────────
// Shows all main combinations on one screen. Uses [data-force-*] attrs + the
// CSS in gallery.css to simulate :hover / :active / :focus-visible states.

const VARIANTS = ['Primary', 'Secondary', 'Tertiary'] as const;

const STATES = [
  { label: 'Default'  },
  { label: 'Hover',    force: 'hover'   as const },
  { label: 'Pressed',  force: 'pressed' as const },
  { label: 'Focus',    force: 'focus'   as const },
  { label: 'Disabled', disabled: true   },
] satisfies Array<{
  label: string;
  force?: 'hover' | 'pressed' | 'focus';
  disabled?: boolean;
}>;

const ICON_COMBOS = [
  { label: 'No icons'   },
  { label: 'Left only',  showIconLeft:  true, iconLeftGlyph:  IconArrowLeft  },
  { label: 'Right only', showIconRight: true, iconRightGlyph: IconArrowRight },
  { label: 'Both',       showIconLeft:  true, iconLeftGlyph:  IconArrowLeft,
                         showIconRight: true, iconRightGlyph: IconArrowRight },
  { label: 'Star left',  showIconLeft:  true, iconLeftGlyph:  IconStar       },
] satisfies Array<Record<string, unknown> & { label: string }>;

export const Gallery: Story = {
  name: 'Gallery',
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
  },
  render: (_args) => {
    // Build the flat list of cells for the variant × state matrix.
    const matrixItems = VARIANTS.flatMap((v) => [
      <div key={`${v}-lbl`} className="sb-gallery__row-label">{v}</div>,
      ...STATES.map(({ label, force, disabled }) => (
        <div
          key={`${v}-${label}`}
          className="sb-gallery__cell"
          data-force-hover={force === 'hover'   ? '' : undefined}
          data-force-pressed={force === 'pressed' ? '' : undefined}
          data-force-focus={force === 'focus'   ? '' : undefined}
        >
          <Button variant={v} label={v} disabled={disabled} />
        </div>
      )),
    ]);

    return (
      <div className="sb-gallery">

        {/* ── States × Variants ─────────────────────────────────────── */}
        <div className="sb-gallery__section">
          <div className="sb-gallery__section-title">States × Variants</div>
          <div className="sb-gallery__matrix">
            {/* Column headers */}
            <div />
            {STATES.map(({ label }) => (
              <div key={label} className="sb-gallery__col-label">{label}</div>
            ))}
            {/* Rows */}
            {matrixItems}
          </div>
        </div>

        {/* ── Icon combinations ─────────────────────────────────────── */}
        <div className="sb-gallery__section">
          <div className="sb-gallery__section-title">Icon combinations — Primary</div>
          <div className="sb-gallery__row">
            {ICON_COMBOS.map(({ label, ...props }) => (
              <div key={label} className="sb-gallery__item">
                <Button variant="Primary" label="Button" {...props} />
                <span className="sb-gallery__item-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Full Width ────────────────────────────────────────────── */}
        <div className="sb-gallery__section">
          <div className="sb-gallery__section-title">Full Width — 280 px container</div>
          <div className="sb-gallery__row">
            {VARIANTS.map((v) => (
              <div key={v} className="sb-gallery__item">
                <div className="sb-gallery__fullwidth-container">
                  <Button variant={v} label={v} fullWidth />
                </div>
                <span className="sb-gallery__item-label">{v}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    );
  },
};
