import './gallery.css';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from 'alva-ui';
import type { IconSize } from 'alva-ui';
import { ArrowLeft, ArrowRight, Star, Search, Close } from './_icons';

/**
 * The **Icon** component wraps any SVG glyph in a fixed-size container
 * whose dimensions are driven by the `size` variant token
 * (`--semantic-icon-size-sm/md/lg`).
 *
 * Color contract: set `color` (or `--alva-icon-color`) on the Icon or any
 * ancestor — the glyph SVG uses `fill="currentColor"` to inherit it.
 * No token binding lives on the glyph itself, making it fully swap-safe.
 */
const meta: Meta<typeof Icon> = {
  title:     'ALVA/Icon',
  component: Icon,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    size:  '20',
    glyph: ArrowRight,
  },
  argTypes: {
    glyph: { control: false }, // ReactNode — not serialisable
    size: {
      control:  'inline-radio',
      options:  ['16', '20', '24'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

// ── Size variants ─────────────────────────────────────────────────────────────

export const Small: Story = {
  args: { size: '16', glyph: Star, 'aria-label': 'Star — 16 px' },
};

export const Medium: Story = {
  args: { size: '20', glyph: Star, 'aria-label': 'Star — 20 px' },
};

export const Large: Story = {
  args: { size: '24', glyph: Star, 'aria-label': 'Star — 24 px' },
};

// ── Decorative (no label) ─────────────────────────────────────────────────────

export const Decorative: Story = {
  name: 'Decorative (aria-hidden)',
  args: { size: '20', glyph: ArrowRight },
};

// ── Gallery ───────────────────────────────────────────────────────────────────

const SIZES: IconSize[] = ['16', '20', '24'];

const GLYPHS = [
  { label: 'ArrowLeft',  glyph: ArrowLeft  },
  { label: 'ArrowRight', glyph: ArrowRight },
  { label: 'Star',       glyph: Star       },
  { label: 'Search',     glyph: Search     },
  { label: 'Close',      glyph: Close      },
] as const;

const COLOR_OVERRIDES = [
  { label: 'Default (neutral)',  className: ''                        },
  { label: 'Action',             className: 'sb-gallery__icon-action' },
  { label: 'Error',              className: 'sb-gallery__icon-error'  },
  { label: 'Success',            className: 'sb-gallery__icon-success'},
] as const;

export const Gallery: Story = {
  name: 'Gallery',
  parameters: {
    layout:   'fullscreen',
    controls: { disable: true },
  },
  render: (_args) => (
    <div className="sb-gallery">

      {/* ── Size variants ──────────────────────────────────────────── */}
      <div className="sb-gallery__section">
        <div className="sb-gallery__section-title">Size variants — ArrowRight glyph</div>
        <div className="sb-gallery__grid--icon">
          {SIZES.map((size) => (
            <div key={size} className="sb-gallery__item sb-gallery__item--center">
              <Icon size={size} glyph={ArrowRight} aria-label={`ArrowRight ${size}px`} />
              <span className="sb-gallery__item-label">{size}px</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Glyph variety ──────────────────────────────────────────── */}
      <div className="sb-gallery__section">
        <div className="sb-gallery__section-title">Glyph variety — size 20</div>
        <div className="sb-gallery__grid--icon">
          {GLYPHS.map(({ label, glyph }) => (
            <div key={label} className="sb-gallery__item sb-gallery__item--center">
              <Icon size="20" glyph={glyph} aria-label={label} />
              <span className="sb-gallery__item-label">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Color overrides ────────────────────────────────────────── */}
      <div className="sb-gallery__section">
        <div className="sb-gallery__section-title">
          Color via <code>--alva-icon-color</code> — size 24
        </div>
        <div className="sb-gallery__grid--icon">
          {COLOR_OVERRIDES.map(({ label, className }) => (
            <div
              key={label}
              className={`sb-gallery__item sb-gallery__item--center${className ? ` ${className}` : ''}`}
            >
              <Icon size="24" glyph={Star} aria-label={label} />
              <span className="sb-gallery__item-label">{label}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  ),
};
