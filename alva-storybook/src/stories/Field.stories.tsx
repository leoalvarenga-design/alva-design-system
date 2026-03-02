import './gallery.css';
import type { Meta, StoryObj } from '@storybook/react';
import { Field } from 'alva-ui';
import { ArrowLeft, Search, Close } from './_icons';

/**
 * **Field** is the base text-input primitive of the ALVA DS.
 *
 * Variant axis (Figma "Status"): `Default` · `Error` · `Success` · `Disabled`
 * Hover and Focused are handled natively via `:hover` / `:focus-within` in CSS.
 *
 * Icon slots (`showIconLeft` / `showIconRight`) accept any ReactNode whose
 * SVG uses `fill="currentColor"` — color is driven by `--alva-field-icon-color`,
 * which is reassigned per status token.
 *
 * All spacing, radius, border-width and typography are bound to `alva.css` tokens.
 * Figma source: Field component set (node 197:538).
 */
const meta: Meta<typeof Field> = {
  title:     'ALVA/Field',
  component: Field,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    status:          'Default',
    placeholderText: 'Value',
  },
  argTypes: {
    iconLeftGlyph:  { control: false },
    iconRightGlyph: { control: false },
  },
  /**
   * Auto-inject default glyphs when icon toggles are enabled via Controls
   * but no explicit glyph is provided. Mirrors the Button stories pattern.
   */
  render: (args) => {
    const iconLeft  = args.showIconLeft  ? (args.iconLeftGlyph  ?? Search)  : undefined;
    const iconRight = args.showIconRight ? (args.iconRightGlyph ?? Close)   : undefined;
    return (
      <Field
        {...args}
        iconLeftGlyph={iconLeft}
        iconRightGlyph={iconRight}
      />
    );
  },
};

export default meta;
type Story = StoryObj<typeof Field>;

// ── Status variants ───────────────────────────────────────────────────────────

export const Default: Story = {
  args: { status: 'Default', placeholderText: 'Enter a value' },
};

export const Error: Story = {
  args: { status: 'Error', placeholderText: 'Invalid value' },
};

export const Success: Story = {
  args: { status: 'Success', placeholderText: 'Valid value' },
};

export const Disabled: Story = {
  args: { status: 'Disabled', placeholderText: 'Disabled field' },
};

// ── Icon stories ──────────────────────────────────────────────────────────────

export const WithIconLeft: Story = {
  args: {
    showIconLeft:  true,
    iconLeftGlyph: Search,
    placeholderText: 'Search…',
  },
  argTypes: { showIconLeft: { control: false } },
};

export const WithIconRight: Story = {
  args: {
    showIconRight:  true,
    iconRightGlyph: Close,
    placeholderText: 'Clearable field',
  },
  argTypes: { showIconRight: { control: false } },
};

export const WithBothIcons: Story = {
  args: {
    showIconLeft:   true,
    iconLeftGlyph:  ArrowLeft,
    showIconRight:  true,
    iconRightGlyph: Close,
    placeholderText: 'With both icons',
  },
  argTypes: {
    showIconLeft:  { control: false },
    showIconRight: { control: false },
  },
};

// ── Gallery ───────────────────────────────────────────────────────────────────

const STATUS_STATES = [
  { label: 'Default',  status: 'Default'  as const },
  { label: 'Hover',    status: 'Default'  as const, force: 'hover'  as const },
  { label: 'Focus',    status: 'Default'  as const, force: 'focus'  as const },
  { label: 'Error',    status: 'Error'    as const },
  { label: 'Success',  status: 'Success'  as const },
  { label: 'Disabled', status: 'Disabled' as const },
] satisfies Array<{
  label:   string;
  status:  'Default' | 'Error' | 'Success' | 'Disabled';
  force?:  'hover' | 'focus';
}>;

const ICON_ROWS = [
  { label: 'No icons'   },
  { label: 'Left icon',  showIconLeft: true,  iconLeftGlyph: Search },
  { label: 'Right icon', showIconRight: true, iconRightGlyph: Close  },
  { label: 'Both icons', showIconLeft: true,  iconLeftGlyph: Search,
                         showIconRight: true, iconRightGlyph: Close  },
] satisfies Array<Record<string, unknown> & { label: string }>;

export const Gallery: Story = {
  name: 'Gallery',
  parameters: {
    layout:   'fullscreen',
    controls: { disable: true },
  },
  render: (_args) => (
    <div className="sb-gallery">

      {/* ── Status states — no icons ───────────────────────────────── */}
      <div className="sb-gallery__section">
        <div className="sb-gallery__section-title">Status states</div>
        <div className="sb-gallery__grid">
          {STATUS_STATES.map(({ label, status, force }) => (
            <div
              key={label}
              className="sb-gallery__item"
              data-force-hover={ force === 'hover' ? '' : undefined}
              data-force-focus={ force === 'focus' ? '' : undefined}
            >
              <Field status={status} placeholderText="Value" />
              <span className="sb-gallery__item-label">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Icon combinations — Default ────────────────────────────── */}
      <div className="sb-gallery__section">
        <div className="sb-gallery__section-title">Icon combinations — Default</div>
        <div className="sb-gallery__grid">
          {ICON_ROWS.map(({ label, ...props }) => (
            <div key={label} className="sb-gallery__item">
              <Field status="Default" placeholderText="Value" {...props} />
              <span className="sb-gallery__item-label">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Icon combinations — Error ──────────────────────────────── */}
      <div className="sb-gallery__section">
        <div className="sb-gallery__section-title">Icon combinations — Error</div>
        <div className="sb-gallery__grid">
          {ICON_ROWS.map(({ label, ...props }) => (
            <div key={label} className="sb-gallery__item">
              <Field status="Error" placeholderText="Invalid value" {...props} />
              <span className="sb-gallery__item-label">{label}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  ),
};
