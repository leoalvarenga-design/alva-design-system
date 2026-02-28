'use client';

import { useState } from 'react';

type ExplicitTheme = 'light' | 'dark';

/**
 * Toggles data-theme="light" | "dark" on <html>.
 * When neither is set, alva.css follows prefers-color-scheme automatically.
 */
export function ThemeSwitcher() {
  const [theme, setTheme] = useState<ExplicitTheme | null>(null);

  const toggle = () => {
    const next: ExplicitTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
  };

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '8px 16px',
        borderRadius: 'var(--primitives-border-radius-lg)',
        border: `1px solid var(--semantic-border-neutral-primary-default)`,
        background: 'var(--semantic-surface-neutral-primary-default)',
        color: 'var(--semantic-text-neutral-body-default)',
        fontFamily: 'var(--primitives-typography-font-family-body)',
        fontSize: '14px',
        fontWeight: 500,
        cursor: 'pointer',
        transition: 'background 120ms ease, border-color 120ms ease',
      }}
    >
      {theme === 'dark' ? (
        <>
          <SunIcon />
          Light
        </>
      ) : (
        <>
          <MoonIcon />
          Dark
        </>
      )}
      <span
        style={{
          marginLeft: 4,
          padding: '1px 6px',
          borderRadius: 4,
          background: 'var(--semantic-surface-action-primary-default)',
          color: 'var(--semantic-text-on-surface-action-default)',
          fontSize: 11,
          fontWeight: 600,
        }}
      >
        {theme ?? 'system'}
      </span>
    </button>
  );
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path d="M8 3a5 5 0 1 0 0 10A5 5 0 0 0 8 3ZM1 8a1 1 0 0 1 1-1h1a1 1 0 0 1 0 2H2a1 1 0 0 1-1-1Zm11 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1ZM8 12a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1ZM8 2a1 1 0 0 1 1 1V2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1ZM3.05 3.05a1 1 0 0 1 1.414 0l.707.707a1 1 0 1 1-1.414 1.414l-.707-.707a1 1 0 0 1 0-1.414Zm8.486 8.486a1 1 0 0 1 1.414 0l.707.707a1 1 0 1 1-1.414 1.414l-.707-.707a1 1 0 0 1 0-1.414ZM3.05 12.95a1 1 0 0 1 0-1.414l.707-.707a1 1 0 1 1 1.414 1.414l-.707.707a1 1 0 0 1-1.414 0Zm8.486-8.486a1 1 0 0 1 0-1.414l.707-.707a1 1 0 1 1 1.414 1.414l-.707.707a1 1 0 0 1-1.414 0Z" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278Z" />
    </svg>
  );
}
