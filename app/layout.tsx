import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Msy Rizkia Yuniandari | Portfolio",
  description:
    "Portfolio of Msy Rizkia Yuniandari - Front-End Developer and UI/UX Enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}