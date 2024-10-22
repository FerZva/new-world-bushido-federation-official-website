import type { Metadata } from "next";
import Header from "./components/Header";
import "./globals.css";
import Footer from "./components/Footer";

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
      <body className="antialiased bg-slate-950 text-white w-full overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
