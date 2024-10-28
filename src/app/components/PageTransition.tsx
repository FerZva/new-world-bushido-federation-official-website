"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface PageTransitionProps {
  logo: string; // ruta o URL del logo de la compañía
}

const PageTransition: React.FC<PageTransitionProps> = ({ logo }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulamos el tiempo de carga de cada página
    const handleLoading = setTimeout(() => setLoading(false), 800);

    return () => clearTimeout(handleLoading);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 flex items-center justify-center bg-white z-50"
        >
          <motion.img
            src={logo}
            alt="Company Logo"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.5 }}
            className="w-24 h-24"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransition;
