import type { Meta, StoryObj } from '@storybook/react';
import { Button } from 'alva-ui';

// ── Icon glyphs ──────────────────────────────────────────────────────────────
// Plain SVGs using stroke="currentColor" so button token color drives them.

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

// ── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Button> = {
  title: 'ALVA/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    variant: 'Primary',
    label: 'Button',
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

export const WithIconLeft: Story = {
  args: {
    variant: 'Primary',
    label: 'Back',
    showIconLeft: true,
    iconLeftGlyph: IconArrowLeft,
  },
};

export const WithIconRight: Story = {
  args: {
    variant: 'Primary',
    label: 'Next',
    showIconRight: true,
    iconRightGlyph: IconArrowRight,
  },
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
};

// ── State stories ─────────────────────────────────────────────────────────────

export const Disabled: Story = {
  args: {
    variant: 'Primary',
    label: 'Disabled',
    disabled: true,
  },
};

// ── Layout stories ────────────────────────────────────────────────────────────

export const FullWidth: Story = {
  args: {
    variant: 'Primary',
    label: 'Full Width',
    fullWidth: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: 280 }}>
        <Story />
      </div>
    ),
  ],
};
