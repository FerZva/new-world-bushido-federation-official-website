"use client";
import React, { useState } from "react";
import { useCart } from "@/app/lib/cart";
import axios from "axios";
import { Loader } from "lucide-react";

export default function CartPage() {
  const { items, incrementQuantity, getTotal } = useCart();
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    try {
      const response = await axios.post("/api/checkout_sessions", {
        items,
        total: getTotal(),
        email: "fernandzva2019@gmail.com",
      });
      window.location.href = response.data.sessionURL;
    } catch (error) {
      console.error("Payment error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🛒 Shoping cart</h1>

      {items.length === 0 ? (
        <div className="text-center text-gray-500 text-lg">
          Your Shopping cart is empty.
        </div>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-4 bg-slate-800 shadow-sm border-slate-800 rounded-lg"
            >
              <div>
                <h2 className="font-semibold text-lg text-white">
                  {item.name}
                </h2>
                <p className="text-sm text-gray-300">
                  ${item.price.toFixed(2)} x {item.quantity} ={" "}
                  <span className="font-medium text-gray-400">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </p>
              </div>
              <button
                onClick={() => incrementQuantity(item.id)}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-lg px-3 py-1 rounded-lg shadow-inner"
              >
                +
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center mt-6 p-4 bg-slate-800 rounded-lg shadow-sm">
            <span className="text-xl font-semibold text-white">Total:</span>
            <span className="text-2xl font-bold text-green-600">
              ${getTotal().toFixed(2)}
            </span>
          </div>

          <button
            onClick={handlePayment}
            disabled={loading}
            className={`w-full mt-6 py-3 rounded-lg text-white text-lg font-semibold flex justify-center items-center gap-2 transition-all ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? (
              <>
                <Loader className="animate-spin w-5 h-5" />
                Loading...
              </>
            ) : (
              "proceed to checkout"
            )}
          </button>
        </div>
      )}
    </div>
  );
}
