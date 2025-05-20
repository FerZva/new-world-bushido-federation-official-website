// components/CheckoutButton.tsx
"use client";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

interface CheckoutButtonProps {
  priceId: string;
}

export default function CheckoutButton({ priceId }: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    const stripe = await stripePromise;

    const response = await fetch("/api/checkout_sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: [{ id: priceId, quantity: 1, amount: 2000 }],
      }),
    });

    const { sessionId } = await response.json();

    const { error } = await stripe!.redirectToCheckout({ sessionId });

    if (error) {
      console.error("Error al redirigir al checkout:", error);
    }

    setLoading(false);
  };

  return (
    <button onClick={handleCheckout} disabled={loading}>
      {loading ? "Cargando..." : "Pagar"}
    </button>
  );
}
