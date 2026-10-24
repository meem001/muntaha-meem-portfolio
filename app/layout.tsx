import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muntaha Meem — Full-Stack Developer",
  description: "Portfolio of Muntaha Meem, a full-stack developer building thoughtful digital products.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
