import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Product = {
  id: string;
  // add your real fields here (name, price, image, ...)
  name?: string;
  price?: number;
  image?: string;
  [key: string]: unknown;
};

export type CartItem = Product & {
  qty: number;
};

type CartContextValue = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

type CartProviderProps = {
  children: ReactNode;
};

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem("cart");
    if (!stored) return [];
    try {
      return JSON.parse(stored) as CartItem[];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart((prev): CartItem[] => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item): CartItem => {
          if (item.id === product.id) {
            return { ...item, qty: item.qty + 1 };
          }
          return item;
        });
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const value = useMemo(
    () => ({ cart, addToCart, removeFromCart, clearCart }),
    [cart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
