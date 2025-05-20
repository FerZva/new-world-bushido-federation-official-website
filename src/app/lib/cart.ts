import { create } from "zustand";
import { Product } from "@/app/services/types";

type CartItem = Product & { quantity: number };

type CartState = {
  items: CartItem[];
  addToCart: (product: Product) => void;
  incrementQuantity: (id: number) => void;
  getTotal: () => number;
};

export const useCart = create<CartState>((set, get) => ({
  items: [],
  addToCart: (product) => {
    const items = get().items;
    const existing = items.find((item) => item.id === product.id);
    if (existing) {
      set({
        items: items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      });
    } else {
      set({ items: [...items, { ...product, quantity: 1 }] });
    }
  },
  incrementQuantity: (id) => {
    set({
      items: get().items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  },
  getTotal: () =>
    get().items.reduce((total, item) => total + item.price * item.quantity, 0),
}));
