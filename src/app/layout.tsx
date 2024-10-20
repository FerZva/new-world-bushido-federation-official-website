import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "World Bushido Federation",
  description: "The World Bushido Federation official website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"antialiased"}>{children}</body>
    </html>
  );
}
