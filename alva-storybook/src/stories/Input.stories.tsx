import './gallery.css';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from 'alva-ui';
import { Search, Close } from './_icons';

/**
 * **Input** composes `Label` + `Field` + helper text into a single,
 * Figma-faithful form control.
 *
 * Figma public API (node 199:1718):
 * - `status` — same axis as Field (`Default` · `Error` · `Success` · `Disabled`)
 * - `showLabel` / `showHelper` — toggle label and helper text visibility
 * - `helperText` — descriptive or error/success message
 * - `labelText`, `required`, `optional` — forwarded to `Label`
 * - `placeholderText`, `showIconLeft/Right`, `iconLeft/RightGlyph` — forwarded to `Field`
 *
 * Helper text color follows the status token automatically; no extra prop needed.
 */
const meta: Meta<typeof Input> = {
  title:     'ALVA/Input',
  component: Input,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    status:      'Default',
    labelText:   'Label',
    helperText:  'Helper text',
    showLabel:   true,
    showHelper:  true,
    placeholderText: 'Value',
  },
  argTypes: {
    iconLeftGlyph:  { control: false },
    iconRightGlyph: { control: false },
  },
  render: (args) => {
    const iconLeft  = args.showIconLeft  ? (args.iconLeftGlyph  ?? Search) : undefined;
    const iconRight = args.showIconRight ? (args.iconRightGlyph ?? Close)  : undefined;
    return (
      <Input
        {...args}
        iconLeftGlyph={iconLeft}
        iconRightGlyph={iconRight}
      />
    );
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

// ── Status variants ───────────────────────────────────────────────────────────

export const Default: Story = {
  args: { status: 'Default' },
};

export const Error: Story = {
  args: {
    status:     'Error',
    helperText: 'This field is required.',
  },
};

export const Success: Story = {
  args: {
    status:     'Success',
    helperText: 'Looks good!',
  },
};

export const Disabled: Story = {
  args: {
    status:      'Disabled',
    placeholderText: 'Disabled input',
  },
};

// ── Label / Helper visibility ─────────────────────────────────────────────────

export const WithoutLabel: Story = {
  args: { showLabel: false },
};

export const WithoutHelper: Story = {
  args: { showHelper: false },
};

export const FieldOnly: Story = {
  name: 'Field only (no label, no helper)',
  args: { showLabel: false, showHelper: false },
};

// ── Required / Optional ───────────────────────────────────────────────────────

export const RequiredField: Story = {
  args: { labelText: 'Email address', required: true, helperText: 'We won\'t share your email.' },
};

export const OptionalField: Story = {
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

      {/* ── Status × full Input ────────────────────────────────────── */}
      <div className="sb-gallery__section">
        <div className="sb-gallery__section-title">Status variants — label + helper visible</div>
        <div className="sb-gallery__grid">
          <div className="sb-gallery__item">
            <Input
              status="Default"
              labelText="Default"
              helperText="Helper text"
              placeholderText="Value"
            />
            <span className="sb-gallery__item-label">Default</span>
          </div>
          <div className="sb-gallery__item">
            <Input
              status="Error"
              labelText="Email"
              helperText="Invalid email address."
              placeholderText="user@example.com"
            />
            <span className="sb-gallery__item-label">Error</span>
          </div>
          <div className="sb-gallery__item">
            <Input
              status="Success"
              labelText="Username"
              helperText="Username is available."
              placeholderText="your_handle"
            />
            <span className="sb-gallery__item-label">Success</span>
          </div>
          <div className="sb-gallery__item">
            <Input
              status="Disabled"
              labelText="Account ID"
              helperText="Read-only field."
              placeholderText="ALVA-00123"
            />
            <span className="sb-gallery__item-label">Disabled</span>
          </div>
        </div>
      </div>

      {/* ── Label / helper visibility ──────────────────────────────── */}
      <div className="sb-gallery__section">
        <div className="sb-gallery__section-title">Label / helper visibility</div>
        <div className="sb-gallery__grid">
          <div className="sb-gallery__item">
            <Input
              showLabel={true}
              showHelper={true}
              labelText="Full input"
              helperText="All parts visible"
              placeholderText="Value"
            />
            <span className="sb-gallery__item-label">Label + Helper</span>
          </div>
          <div className="sb-gallery__item">
            <Input
              showLabel={false}
              showHelper={true}
              helperText="No label above"
              placeholderText="Value"
            />
            <span className="sb-gallery__item-label">No label</span>
          </div>
          <div className="sb-gallery__item">
            <Input
              showLabel={true}
              showHelper={false}
              labelText="Label only"
              placeholderText="Value"
            />
            <span className="sb-gallery__item-label">No helper</span>
          </div>
          <div className="sb-gallery__item">
            <Input
              showLabel={false}
              showHelper={false}
              placeholderText="Field only"
            />
            <span className="sb-gallery__item-label">Field only</span>
          </div>
        </div>
      </div>

      {/* ── Required / Optional + icons ───────────────────────────── */}
      <div className="sb-gallery__section">
        <div className="sb-gallery__section-title">Required · Optional · Icon slots</div>
        <div className="sb-gallery__grid">
          <div className="sb-gallery__item">
            <Input
              labelText="Email address"
              required
              helperText="We'll never share your email."
              placeholderText="user@example.com"
            />
            <span className="sb-gallery__item-label">required</span>
          </div>
          <div className="sb-gallery__item">
            <Input
              labelText="Phone number"
              optional
              helperText="For account recovery only."
              placeholderText="+1 (555) 000-0000"
            />
            <span className="sb-gallery__item-label">optional</span>
          </div>
          <div className="sb-gallery__item">
            <Input
              labelText="Search"
              showIconLeft
              iconLeftGlyph={Search}
              placeholderText="Search…"
              helperText="Enter a search term"
            />
            <span className="sb-gallery__item-label">icon left</span>
          </div>
          <div className="sb-gallery__item">
            <Input
              labelText="Clearable"
              showIconRight
              iconRightGlyph={Close}
              placeholderText="Type something"
              helperText="Click × to clear"
            />
            <span className="sb-gallery__item-label">icon right</span>
          </div>
        </div>
      </div>

    </div>
  ),
};
