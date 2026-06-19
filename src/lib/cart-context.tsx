"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { products, type Product } from "./products";

export interface CartItem {
  productId: string;
  qty: number;
}

interface CartContextValue {
  items: CartItem[];
  add: (productId: string, qty?: number) => void;
  remove: (productId: string) => void;
  setQty: (productId: string, qty: number) => void;
  clear: () => void;
  count: number;
  total: number;
  detailed: Array<{ product: Product; qty: number; lineTotal: number }>;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);
const STORAGE_KEY = "uniqco_cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }, [items]);

  const value = useMemo<CartContextValue>(() => {
    const detailed = items
      .map((it) => {
        const product = products.find((p) => p.id === it.productId);
        if (!product) return null;
        return { product, qty: it.qty, lineTotal: +(product.price * it.qty).toFixed(2) };
      })
      .filter((x): x is { product: Product; qty: number; lineTotal: number } => !!x);

    return {
      items,
      add: (productId, qty = 1) =>
        setItems((prev) => {
          const existing = prev.find((i) => i.productId === productId);
          if (existing) return prev.map((i) => (i.productId === productId ? { ...i, qty: i.qty + qty } : i));
          return [...prev, { productId, qty }];
        }),
      remove: (productId) => setItems((prev) => prev.filter((i) => i.productId !== productId)),
      setQty: (productId, qty) =>
        setItems((prev) =>
          qty <= 0
            ? prev.filter((i) => i.productId !== productId)
            : prev.map((i) => (i.productId === productId ? { ...i, qty } : i)),
        ),
      clear: () => setItems([]),
      count: items.reduce((s, i) => s + i.qty, 0),
      total: +detailed.reduce((s, l) => s + l.lineTotal, 0).toFixed(2),
      detailed,
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
