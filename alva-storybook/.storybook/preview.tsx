import "alva-ui/src/tokens/alva.css";
import "alva-ui/src/button/button.css";
import "alva-ui/src/icon/icon.css";
import "alva-ui/src/label/label.css";
import "alva-ui/src/field/field.css";
import "alva-ui/src/input/input.css";
import "alva-ui/src/card/card.css";
import "./preview-baseline.css";

import { useEffect } from 'react';
import type { Preview, Decorator } from '@storybook/react';

/*
 * Theme decorator — reads `globals.theme` set by the toolbar control and applies
 * data-theme on the preview iframe's <html> element.
 *
 * "system" removes the attribute → alva.css @media(prefers-color-scheme:dark) takes over.
 * "light" / "dark" → explicit override regardless of system preference.
 *
 * This decorator runs on every story render, so theme persists as the user
 * navigates the sidebar (unlike a per-story useState, which resets on navigation).
 */
const withTheme: Decorator = (Story, context) => {
  const theme = (context.globals as Record<string, string>)['theme'] ?? 'light';

  useEffect(() => {
    const html = document.documentElement;
    if (theme === 'system') {
      html.removeAttribute('data-theme');
    } else {
      html.setAttribute('data-theme', theme);
    }
  }, [theme]);

  return <Story />;
};

const preview: Preview = {
  // ── Toolbar theme control ─────────────────────────────────────────────────
  globalTypes: {
    theme: {
      description: 'ALVA Design System color theme',
      toolbar: {
        title:        'Theme',
        icon:         'paintbrush',
        dynamicTitle: true,
        items: [
          { value: 'light',  title: '☀️  Light',  icon: 'sun'     },
          { value: 'dark',   title: '🌙  Dark',   icon: 'moon'    },
          { value: 'system', title: '⚙️  System', icon: 'browser' },
        ],
      },
    },
  },

  initialGlobals: {
    theme: 'light',
  },

  // ── Global decorators ─────────────────────────────────────────────────────
  decorators: [withTheme],

  // ── Global parameters ─────────────────────────────────────────────────────
  parameters: {
    /*
     * 'padded' gives every story consistent breathing room (24px padding from
     * the Storybook canvas edge).  Gallery stories override this individually
     * with layout: 'fullscreen'.
     */
    layout: 'padded',

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
