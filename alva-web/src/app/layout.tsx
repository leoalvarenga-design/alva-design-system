import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ALVA UI — Component Demo",
  description: "Demo app for the ALVA Design System component library.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
