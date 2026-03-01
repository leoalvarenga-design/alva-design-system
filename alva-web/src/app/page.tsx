import type { ReactNode } from "react";
import { Button, Card, Field, Input } from "alva-ui";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

// ── Glyph icons ─────────────────────────────────────────────────────────────

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 17.3l-6.18 3.7 1.64-7.03L2 9.24l7.19-.61L12 2l2.81 6.63 7.19.61-5.46 4.73 1.64 7.03L12 17.3z" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M10 17l5-5-5-5v10z" />
    </svg>
  );
}

// ── Gallery helpers ─────────────────────────────────────────────────────────

type ForceState = "hover" | "pressed" | "focus";

/**
 * Wraps a component and applies [data-force-hover|pressed|focus] so that
 * gallery.css can override the same CSS custom properties that button.css /
 * field.css apply on :hover / :active / :focus-visible.
 */
function StateCell({
  state,
  label,
  children,
}: {
  state?: ForceState;
  label?: string;
  children: ReactNode;
}) {
  return (
    <div
      className="gallery-cell"
      data-force-hover={state === "hover" ? "" : undefined}
      data-force-pressed={state === "pressed" ? "" : undefined}
      data-force-focus={state === "focus" ? "" : undefined}
    >
      {children}
      {label && <span className="gallery-cell__label">{label}</span>}
    </div>
  );
}

function SectionHeading({ title, tag }: { title: string; tag: string }) {
  return (
    <div className="gallery-section__heading">
      <span className="gallery-section__title">{title}</span>
      <code className="gallery-section__tag">{tag}</code>
    </div>
  );
}

function Sub({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="gallery-sub">
      <span className="gallery-sub__label">{label}</span>
      {children}
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

const BTN_STATES: Array<{ state?: ForceState; label: string; disabled?: boolean }> = [
  { label: "Default" },
  { state: "hover",   label: "Hover" },
  { state: "pressed", label: "Pressed" },
  { state: "focus",   label: "Focus" },
  { label: "Disabled", disabled: true },
];

export default function Home() {
  return (
    <>
      {/* ── Sticky header ─────────────────────────────────────────────── */}
      <header className="gallery-header">
        <div className="gallery-header__wordmark">
          <span className="gallery-header__name">ALVA UI</span>
          <span className="gallery-header__sub">Gallery</span>
        </div>
        <ThemeSwitcher />
      </header>

      <main className="gallery-main">

        {/* ═══════════════════════ BUTTON ═══════════════════════ */}
        <section className="gallery-section">
          <SectionHeading title="Button" tag="<Button />" />

          {/* State × Variant matrix */}
          <Sub label="States × Variants">
            <div className="gallery-matrix gallery-matrix--btn">
              {/* Column headers */}
              <span />
              {BTN_STATES.map(({ label }) => (
                <span key={label} className="gallery-matrix__col-header">{label}</span>
              ))}

              {/* Primary row */}
              <span className="gallery-matrix__row-label">Primary</span>
              {BTN_STATES.map(({ state, label, disabled }) => (
                <StateCell key={label} state={state}>
                  <Button variant="Primary" label="Label" disabled={disabled} />
                </StateCell>
              ))}

              {/* Secondary row */}
              <span className="gallery-matrix__row-label">Secondary</span>
              {BTN_STATES.map(({ state, label, disabled }) => (
                <StateCell key={label} state={state}>
                  <Button variant="Secondary" label="Label" disabled={disabled} />
                </StateCell>
              ))}

              {/* Tertiary row */}
              <span className="gallery-matrix__row-label">Tertiary</span>
              {BTN_STATES.map(({ state, label, disabled }) => (
                <StateCell key={label} state={state}>
                  <Button variant="Tertiary" label="Label" disabled={disabled} />
                </StateCell>
              ))}
            </div>
          </Sub>

          {/* Icon combos */}
          <Sub label="Icon combinations — Primary">
            <div className="gallery-row">
              <StateCell label="No icons">
                <Button variant="Primary" label="Label" />
              </StateCell>
              <StateCell label="Icon left">
                <Button variant="Primary" label="Label" showIconLeft iconLeftGlyph={<StarIcon />} />
              </StateCell>
              <StateCell label="Icon right">
                <Button variant="Primary" label="Label" showIconRight iconRightGlyph={<ArrowRightIcon />} />
              </StateCell>
              <StateCell label="Both icons">
                <Button
                  variant="Primary" label="Label"
                  showIconLeft  iconLeftGlyph={<StarIcon />}
                  showIconRight iconRightGlyph={<ArrowRightIcon />}
                />
              </StateCell>
              <StateCell label="fullWidth (280 px container)">
                <div style={{ width: 280 }}>
                  <Button variant="Primary" label="Label" fullWidth />
                </div>
              </StateCell>
            </div>
          </Sub>
        </section>

        {/* ═══════════════════════ FIELD ════════════════════════ */}
        <section className="gallery-section">
          <SectionHeading title="Field" tag="<Field />" />

          <Sub label="Status variants (hover + focus are CSS-forced)">
            <div className="gallery-row">
              <StateCell label="Default">
                <Field placeholderText="Value" />
              </StateCell>
              <StateCell label="Hover" state="hover">
                <Field placeholderText="Value" />
              </StateCell>
              <StateCell label="Focused" state="focus">
                <Field placeholderText="Value" />
              </StateCell>
              <StateCell label="Error">
                <Field placeholderText="Value" status="Error" />
              </StateCell>
              <StateCell label="Success">
                <Field placeholderText="Value" status="Success" />
              </StateCell>
              <StateCell label="Disabled">
                <Field placeholderText="Value" status="Disabled" />
              </StateCell>
            </div>
          </Sub>

          <Sub label="Icon combinations — Default">
            <div className="gallery-row">
              <StateCell label="No icons">
                <Field placeholderText="Value" />
              </StateCell>
              <StateCell label="Icon left">
                <Field placeholderText="Search…" showIconLeft iconLeftGlyph={<SearchIcon />} />
              </StateCell>
              <StateCell label="Icon right">
                <Field placeholderText="Value" showIconRight iconRightGlyph={<CloseIcon />} />
              </StateCell>
              <StateCell label="Both icons">
                <Field
                  placeholderText="Search…"
                  showIconLeft  iconLeftGlyph={<SearchIcon />}
                  showIconRight iconRightGlyph={<CloseIcon />}
                />
              </StateCell>
            </div>
          </Sub>
        </section>

        {/* ═══════════════════════ INPUT ════════════════════════ */}
        <section className="gallery-section">
          <SectionHeading title="Input" tag="<Input />" />

          <Sub label="Status variants + helper text">
            <div className="gallery-row">
              <StateCell label="Default">
                <Input
                  labelText="Label"
                  placeholderText="Value"
                  helperText="Helper text"
                />
              </StateCell>
              <StateCell label="Error">
                <Input
                  labelText="Label"
                  placeholderText="Value"
                  status="Error"
                  helperText="This field is required."
                />
              </StateCell>
              <StateCell label="Success">
                <Input
                  labelText="Label"
                  placeholderText="Value"
                  status="Success"
                  helperText="Looks good!"
                />
              </StateCell>
              <StateCell label="Disabled">
                <Input
                  labelText="Label"
                  placeholderText="Value"
                  helperText="Not available."
                  disabled
                />
              </StateCell>
            </div>
          </Sub>

          <Sub label="Label decorators + icons">
            <div className="gallery-row">
              <StateCell label="required">
                <Input
                  labelText="Label"
                  placeholderText="Value"
                  helperText="This field is required."
                  required
                />
              </StateCell>
              <StateCell label="optional">
                <Input
                  labelText="Label"
                  placeholderText="Value"
                  showHelper={false}
                  optional
                />
              </StateCell>
              <StateCell label="showHelper=false">
                <Input
                  labelText="Label"
                  placeholderText="Value"
                  showHelper={false}
                />
              </StateCell>
              <StateCell label="With icons">
                <Input
                  labelText="Label"
                  placeholderText="Search…"
                  helperText="Enter at least 3 chars."
                  showIconLeft  iconLeftGlyph={<SearchIcon />}
                  showIconRight iconRightGlyph={<CloseIcon />}
                />
              </StateCell>
            </div>
          </Sub>
        </section>

        {/* ═══════════════════════ CARD ═════════════════════════ */}
        <section className="gallery-section">
          <SectionHeading title="Card" tag="<Card />" />

          <Sub label="Variants">
            <div className="gallery-row">
              <StateCell label="Default — CTA fullWidth">
                <Card
                  title="Demo Card"
                  body="This is the demo card body text with additional information."
                  cta={<Button variant="Primary" label="Get started" fullWidth />}
                />
              </StateCell>

              <StateCell label="showCTA=false">
                <Card
                  title="No CTA"
                  body="Same card without the call-to-action button."
                  showCTA={false}
                />
              </StateCell>

              <StateCell label="Tertiary CTA">
                <Card
                  title="Custom CTA"
                  body="Using a Tertiary button as the card action."
                  cta={
                    <Button
                      variant="Tertiary" label="Learn more"
                      showIconRight iconRightGlyph={<ArrowRightIcon />}
                      fullWidth
                    />
                  }
                />
              </StateCell>
            </div>
          </Sub>
        </section>

      </main>
    </>
  );
}
