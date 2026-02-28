import { Button } from "alva-ui";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import type { ReactNode } from "react";

/* ── Inline SVGs — must use fill="currentColor" to honour ALVA's icon contract ── */
function ArrowRightIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.35 2.435c-.784.57-1.838-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.666 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.05 2.927z" />
    </svg>
  );
}

/* ── Layout helpers ── */
function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <h2
        style={{
          fontFamily: "var(--primitives-typography-font-family-heading)",
          fontSize: "var(--responsive-typography-fontsize-body-md)",
          fontWeight: "var(--primitives-typography-font-weight-semibold)",
          color: "var(--semantic-text-neutral-heading-default)",
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          paddingBottom: 8,
          borderBottom:
            "1px solid var(--semantic-border-neutral-primary-default)",
        }}
      >
        {title}
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "var(--responsive-spacing-md)",
        }}
      >
        {children}
      </div>
    </section>
  );
}

/* ── Page ── */
export default function Home() {
  return (
    <main
      style={{
        maxWidth: 800,
        margin: "0 auto",
        padding: "var(--responsive-spacing-2xl) var(--responsive-spacing-lg)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--responsive-spacing-2xl)",
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <div>
          <h1
            style={{
              fontFamily:
                "var(--primitives-typography-font-family-heading)",
              fontSize: "var(--responsive-typography-fontsize-h4)",
              fontWeight: "var(--primitives-typography-font-weight-bold)",
              color: "var(--semantic-text-neutral-heading-default)",
              lineHeight: "var(--responsive-typography-lineheight-h4)",
            }}
          >
            ALVA UI
          </h1>
          <p
            style={{
              marginTop: 4,
              fontSize: "var(--responsive-typography-fontsize-body-md)",
              color: "var(--semantic-text-neutral-body-default)",
            }}
          >
            Component library driven by Figma DS · Button demo
          </p>
        </div>
        <ThemeSwitcher />
      </header>

      {/* Primary */}
      <Section title="Primary">
        <Button variant="Primary" label="Default" />
        <Button
          variant="Primary"
          label="With icons"
          showIconLeft
          iconLeftGlyph={<ArrowLeftIcon />}
          showIconRight
          iconRightGlyph={<ArrowRightIcon />}
        />
        <Button
          variant="Primary"
          label="Icon left"
          showIconLeft
          iconLeftGlyph={<StarIcon />}
        />
        <Button
          variant="Primary"
          label="Icon right"
          showIconRight
          iconRightGlyph={<ArrowRightIcon />}
        />
      </Section>

      {/* Secondary */}
      <Section title="Secondary">
        <Button variant="Secondary" label="Default" />
        <Button
          variant="Secondary"
          label="With icons"
          showIconLeft
          iconLeftGlyph={<ArrowLeftIcon />}
          showIconRight
          iconRightGlyph={<ArrowRightIcon />}
        />
        <Button
          variant="Secondary"
          label="Star"
          showIconLeft
          iconLeftGlyph={<StarIcon />}
        />
      </Section>

      {/* Tertiary */}
      <Section title="Tertiary">
        <Button variant="Tertiary" label="Default" />
        <Button
          variant="Tertiary"
          label="With icons"
          showIconLeft
          iconLeftGlyph={<ArrowLeftIcon />}
          showIconRight
          iconRightGlyph={<ArrowRightIcon />}
        />
        <Button
          variant="Tertiary"
          label="Star"
          showIconLeft
          iconLeftGlyph={<StarIcon />}
        />
      </Section>

      {/* Disabled */}
      <Section title="Disabled">
        <Button variant="Primary" label="Primary" disabled />
        <Button variant="Secondary" label="Secondary" disabled />
        <Button variant="Tertiary" label="Tertiary" disabled />
        <Button
          variant="Primary"
          label="With icon"
          showIconLeft
          iconLeftGlyph={<StarIcon />}
          disabled
        />
      </Section>

      {/* Token proof */}
      <footer
        style={{
          paddingTop: "var(--responsive-spacing-lg)",
          borderTop: "1px solid var(--semantic-border-neutral-primary-default)",
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <p
          style={{
            fontSize: "var(--responsive-typography-fontsize-body-sm)",
            color: "var(--semantic-text-neutral-disabled-default)",
          }}
        >
          Toggle the theme switcher to prove semantic tokens respond to{" "}
          <code
            style={{
              fontFamily: "monospace",
              padding: "1px 4px",
              borderRadius: 3,
              background: "var(--semantic-surface-neutral-disabled-default)",
            }}
          >
            data-theme
          </code>{" "}
          on{" "}
          <code
            style={{
              fontFamily: "monospace",
              padding: "1px 4px",
              borderRadius: 3,
              background: "var(--semantic-surface-neutral-disabled-default)",
            }}
          >
            &lt;html&gt;
          </code>
          . Hover and focus buttons to verify all interaction states.
        </p>

        <p
          style={{
            fontSize: "var(--responsive-typography-fontsize-body-sm)",
            color: "var(--semantic-text-neutral-disabled-default)",
          }}
        >
          Tokens: <strong>primitives</strong> →{" "}
          <strong>semantic</strong> → component CSS custom properties.
          No hardcoded colors anywhere.
        </p>
      </footer>
    </main>
  );
}
