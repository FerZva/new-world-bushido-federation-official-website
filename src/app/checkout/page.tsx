"use client";
import { useCart } from "@/app/lib/cart";
import axios from "axios";

export default function CheckoutPage() {
  const { items, getTotal } = useCart();

  const handlePayment = async () => {
    try {
      const response = await axios.post("/api/checkout_sessions", {
        items,
        total: getTotal(),
      });
      // Handle successful payment response
      console.log("Payment successful:", response.data);
      window.location.href = response.data.sessionURL;
    } catch (error) {
      // Handle error
      console.error("Payment error:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <ul className="mb-4">
        {items.map((item) => (
          <li key={item.id}>
            {item.quantity}x {item.name} - ${item.price * item.quantity}
          </li>
        ))}
      </ul>
      <p className="text-lg font-semibold">Total a pagar: ${getTotal()}</p>
      <button
        className="mt-4 bg-blue-700 text-white px-4 py-2 rounded"
        onClick={handlePayment}
      >
        Confirmar Pago
      </button>
    </div>
  );
}
