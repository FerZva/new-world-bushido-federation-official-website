"use client";
import { useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";

export default function Success() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "cliente@ejemplo.com";

  useEffect(() => {
    const sendEmail = async () => {
      try {
        await axios.post("/api/send-email", { email });
        console.log("Correo enviado con éxito.");
      } catch (error) {
        console.error("Error al enviar el correo:", error);
      }
    };

    sendEmail();
  }, [email]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md">
        <h1 className="text-2xl font-bold text-green-600 mb-4">
          ¡Pago Exitoso! ✅
        </h1>
        <p className="text-gray-700">
          Gracias por tu compra. Hemos enviado un correo de confirmación a{" "}
          <strong>{email}</strong>.
        </p>
      </div>
    </div>
  );
}
