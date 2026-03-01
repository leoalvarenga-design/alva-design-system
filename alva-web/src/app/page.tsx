import { Button, Card, Input } from "alva-ui";

const Row = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section style={{ display: "flex", flexDirection: "column", gap: 12 }}>
    <h2 style={{ margin: 0, fontSize: 14, opacity: 0.7 }}>{title}</h2>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
      {children}
    </div>
  </section>
);

const Stack = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section style={{ display: "flex", flexDirection: "column", gap: 12 }}>
    <h2 style={{ margin: 0, fontSize: 14, opacity: 0.7 }}>{title}</h2>
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {children}
    </div>
  </section>
);

const ArrowLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M14 7l-5 5 5 5V7z" />
  </svg>
);

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M10 17l5-5-5-5v10z" />
  </svg>
);

const Star = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 17.3l-6.18 3.7 1.64-7.03L2 9.24l7.19-.61L12 2l2.81 6.63 7.19.61-5.46 4.73 1.64 7.03L12 17.3z" />
  </svg>
);

export default function Home() {
  return (
    <main
      style={{
        padding: 40,
        display: "flex",
        flexDirection: "column",
        gap: 28,
        maxWidth: 1100,
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16 }}>
        <div>
          <h1 style={{ margin: 0 }}>ALVA UI Gallery</h1>
          <p style={{ margin: "6px 0 0", opacity: 0.7 }}>
            Variants + states + icons + light/dark (via your Theme Switcher)
          </p>
        </div>
        <div style={{ opacity: 0.7, fontSize: 12 }}>
          Use the ThemeSwitcher (top-right) to toggle light/dark
        </div>
      </div>

      <Row title="Button • Primary">
        <Button variant="Primary" label="Default" />
        <Button variant="Primary" label="Icon left" showIconLeft iconLeftGlyph={<Star />} />
        <Button
          variant="Primary"
          label="With icons"
          showIconLeft
          showIconRight
          iconLeftGlyph={<ArrowLeft />}
          iconRightGlyph={<ArrowRight />}
        />
        <Button variant="Primary" label="Disabled" disabled showIconLeft iconLeftGlyph={<Star />} />
      </Row>

      <Row title="Button • Secondary">
        <Button variant="Secondary" label="Default" />
        <Button variant="Secondary" label="Icon right" showIconRight iconRightGlyph={<ArrowRight />} />
        <Button
          variant="Secondary"
          label="With icons"
          showIconLeft
          showIconRight
          iconLeftGlyph={<ArrowLeft />}
          iconRightGlyph={<ArrowRight />}
        />
        <Button variant="Secondary" label="Disabled" disabled showIconRight iconRightGlyph={<ArrowRight />} />
      </Row>

      <Row title="Button • Tertiary">
        <Button variant="Tertiary" label="Default" />
        <Button variant="Tertiary" label="Icon left" showIconLeft iconLeftGlyph={<Star />} />
        <Button
          variant="Tertiary"
          label="With icons"
          showIconLeft
          showIconRight
          iconLeftGlyph={<ArrowLeft />}
          iconRightGlyph={<ArrowRight />}
        />
        <Button variant="Tertiary" label="Disabled" disabled showIconLeft iconLeftGlyph={<Star />} />
      </Row>

      <Stack title="Input • Default / Error / Success">
        <Input labelText="Email" placeholderText="Enter your email" helperText="Helper text" />
        <Input
          labelText="Email"
          placeholderText="Enter your email"
          helperText="Error helper text"
          status="Error"
        />
        <Input
          labelText="Email"
          placeholderText="Enter your email"
          helperText="Success helper text"
          status="Success"
        />
      </Stack>

      <Row title="Card • Default (CTA inside, fullWidth)">
        <Card
          title="Demo Card"
          body="This is a demo card rendered from the ALVA UI package."
          cta={<Button variant="Primary" label="Button" fullWidth />}
        />
      </Row>

      <Row title="Card • ShowCTA=false">
        <Card
          title="No CTA"
          body="Same card, CTA hidden."
          showCTA={false}
        />
      </Row>

      <Row title="Card • CTA fullWidth">
        <Card
          title="Full-width CTA"
          body="O botão abaixo ocupa 100% da largura do card."
          cta={<Button variant="Primary" label="Full Width CTA" fullWidth />}
        />
      </Row>

      <Row title="Width test • Button fullWidth (mesma largura do Card)">
        <div style={{ width: 360, border: "1px dashed rgba(0,0,0,0.2)", padding: 12 }}>
          <Button variant="Primary" label="Should be full width" fullWidth />
        </div>
      </Row>
    </main>
  );
}
