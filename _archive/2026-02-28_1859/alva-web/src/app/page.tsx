import { Button } from "alva-ui";

export default function Home() {
  return (
    <div style={{ padding: 40, display: "flex", gap: 16, flexWrap: "wrap" }}>
      <Button variant="Primary" label="Primary" />
      <Button variant="Secondary" label="Secondary" />
      <Button variant="Tertiary" label="Tertiary" />
    </div>
  );
}
