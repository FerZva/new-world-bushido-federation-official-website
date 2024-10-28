import type { Metadata } from "next";
import Header from "./components/Header";
import "./globals.css";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";
import WBFLogo from "./assets/WORLD-BUSHIDO.png";

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
        {/* <PageTransition logo="./assets/WORLD-BUSHIDO.png" /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
