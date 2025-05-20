"use client";
import Header from "./components/Header";
import "./globals.css";
import Footer from "./components/Footer";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <AnimatePresence mode="wait">
        <motion.body
          className="antialiased bg-slate-950 text-white w-full overflow-x-hidden"
          key={pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <Header />
          {/* <PageTransition logo="./assets/WORLD-BUSHIDO.png" /> */}
          {children}
          <Footer />
          <Toaster />
        </motion.body>
      </AnimatePresence>
    </html>
  );
}
