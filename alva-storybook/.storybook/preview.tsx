import "alva-ui/src/tokens/alva.css";
import "alva-ui/src/button/button.css";
import "alva-ui/src/icon/icon.css";
import "alva-ui/src/label/label.css";
import "alva-ui/src/field/field.css";
import "alva-ui/src/input/input.css";
import "alva-ui/src/card/card.css";
import "./preview-baseline.css";

import { useState, useEffect } from 'react';
import type { Preview } from '@storybook/react-vite';

/*
 * ThemeToggle — fixed button that flips data-theme on the canvas <html>.
 * Drives all semantic tokens between light / dark without any DS code change.
 */
function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <button
      onClick={() => setDark((d) => !d)}
      aria-label="Toggle light/dark theme"
      style={{
        position:   'fixed',
        top:        12,
        right:      12,
        zIndex:     9999,
        padding:    '4px 12px',
        background: 'var(--semantic-surface-neutral-primary-default, #fff)',
        border:     '1.5px solid var(--semantic-border-neutral-primary-default, #ccc)',
        borderRadius: 6,
        color:      'var(--semantic-text-neutral-body-default, #333)',
        cursor:     'pointer',
        fontSize:   '11px',
        fontWeight: 600,
        fontFamily: 'var(--primitives-typography-font-family-body, system-ui)',
        letterSpacing: '0.04em',
        display:    'inline-flex',
        alignItems: 'center',
        gap:        5,
        transition: 'background 200ms ease, color 200ms ease, border-color 200ms ease',
      }}
    >
      {dark ? '☀️' : '🌙'}&nbsp;{dark ? 'Light' : 'Dark'}
    </button>
  );
}

const preview: Preview = {
  decorators: [
    (Story) => (
      <>
        <ThemeToggle />
        <Story />
      </>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date:  /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
};

export default preview;
