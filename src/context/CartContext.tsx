"use client";

import { useUser } from "@clerk/nextjs";
// import { useAuth } from "@/context/AuthContext";
import { LoginRequiredModal } from "@/components/auth/LoginRequiredModal";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import toast from "react-hot-toast";
import { Product } from "@/types/product";

export interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { isSignedIn } = useUser();
  const isAuthenticated = isSignedIn;

  // Load cart from LocalStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("hbt_cart");
      if (savedCart) {
        try {
          const parsed = JSON.parse(savedCart);
          setItems(parsed);

        } catch (e) {
          console.error("[Cart] Failed to load cart:", e);
        }
      }
      setIsInitialized(true);
    }
  }, []);

  // Save cart to LocalStorage whenever items change
  useEffect(() => {
    if (isInitialized && typeof window !== "undefined") {
        console.log("[Cart] Saving items:", items);
        localStorage.setItem("hbt_cart", JSON.stringify(items));
    }
  }, [items, isInitialized]);

  const addToCart = (product: Product) => {
    if (!isAuthenticated) {
      setIsLoginModalOpen(true);
      return;
    }

    toast.success(`item added to cart!`, {
        icon: '🛒',
        style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
        },
    });

    console.log("[Cart] Adding product:", product.name);
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    console.log("[Cart] Removing product:", productId);
    setItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    console.log("[Cart] Clearing cart");
    setItems([]);
  };

  // Safe calculations
  const cartTotal = items.reduce(
    (total, item) => total + (item.price || 0) * (item.quantity || 1),
    0
  );

  const cartCount = items.reduce((count, item) => count + (item.quantity || 1), 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
      }}
    >
      {children}
      <LoginRequiredModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
        message="Please sign in to add items to your cart."
      />
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
