import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Better - The first AI-powered Mortgage",
  description: "Our tech unlocks lower rates, higher chances of approval, and a lightning-fast process from approval to closing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}