import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RecallAI",
  description: "AI Powered Personal Knowledge Management Platform",
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