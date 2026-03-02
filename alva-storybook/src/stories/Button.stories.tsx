import './gallery.css';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from 'alva-ui';
import { ArrowLeft, ArrowRight, Star } from './_icons';

// ── Meta ──────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Button> = {
  title: 'ALVA/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    variant: 'Primary',
    label:   'Button',
  },
  argTypes: {
    // ReactNode slots — not serialisable, disable in Controls
    iconLeftGlyph:  { control: false },
    iconRightGlyph: { control: false },
  },
  /**
   * Auto-injects a default glyph when a showIcon* toggle is true but no
   * explicit glyph was provided in args (e.g. via the Controls panel).
   * Stories that already set a glyph pass it through unchanged (the ?? guard
   * only fires when the value is undefined). Clearing the toggle clears the glyph.
   */
  render: (args) => {
    const iconLeft  = args.showIconLeft  ? (args.iconLeftGlyph  ?? ArrowLeft)  : undefined;
    const iconRight = args.showIconRight ? (args.iconRightGlyph ?? ArrowRight) : undefined;
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
// Glyphs are fixed; showIcon* toggles are hidden to avoid conflicting state.

export const WithIconLeft: Story = {
  args: {
    variant:       'Primary',
    label:         'Back',
    showIconLeft:  true,
    iconLeftGlyph: ArrowLeft,
  },
  argTypes: { showIconLeft: { control: false } },
};

export const WithIconRight: Story = {
  args: {
    variant:        'Primary',
    label:          'Next',
    showIconRight:  true,
    iconRightGlyph: ArrowRight,
  },
  argTypes: { showIconRight: { control: false } },
};

export const WithBothIcons: Story = {
  args: {
    variant:        'Primary',
    label:          'Continue',
    showIconLeft:   true,
    iconLeftGlyph:  ArrowLeft,
    showIconRight:  true,
    iconRightGlyph: ArrowRight,
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

// ── Gallery ───────────────────────────────────────────────────────────────────
// Fullscreen: all combinations on one screen for video recording.

const VARIANTS = ['Primary', 'Secondary', 'Tertiary'] as const;

const STATES = [
  { label: 'Default'  },
  { label: 'Hover',    force: 'hover'   as const },
  { label: 'Pressed',  force: 'pressed' as const },
  { label: 'Focus',    force: 'focus'   as const },
  { label: 'Disabled', disabled: true   },
] satisfies Array<{
  label:    string;
  force?:   'hover' | 'pressed' | 'focus';
  disabled?: boolean;
}>;

const ICON_COMBOS = [
  { label: 'No icons' },
  { label: 'Left only',  showIconLeft:  true, iconLeftGlyph:  ArrowLeft  },
  { label: 'Right only', showIconRight: true, iconRightGlyph: ArrowRight },
  { label: 'Both',       showIconLeft:  true, iconLeftGlyph:  ArrowLeft,
                         showIconRight: true, iconRightGlyph: ArrowRight },
  { label: 'Star left',  showIconLeft:  true, iconLeftGlyph:  Star       },
] satisfies Array<Record<string, unknown> & { label: string }>;

export const Gallery: Story = {
  name: 'Gallery',
  parameters: {
    layout:   'fullscreen',
    controls: { disable: true },
  },
  render: (_args) => {
    const matrixItems = VARIANTS.flatMap((v) => [
      <div key={`${v}-lbl`} className="sb-gallery__row-label">{v}</div>,
      ...STATES.map(({ label, force, disabled }) => (
        <div
          key={`${v}-${label}`}
          className="sb-gallery__cell"
          data-force-hover={   force === 'hover'   ? '' : undefined}
          data-force-pressed={ force === 'pressed' ? '' : undefined}
          data-force-focus={   force === 'focus'   ? '' : undefined}
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
            <div />
            {STATES.map(({ label }) => (
              <div key={label} className="sb-gallery__col-label">{label}</div>
            ))}
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
