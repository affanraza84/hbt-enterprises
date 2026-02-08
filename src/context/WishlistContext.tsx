"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Product } from "@/types/product";
import toast from "react-hot-toast";

interface WishlistContextType {
  items: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  clearWishlist: () => void;
  wishlistCount: number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Product[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load wishlist from LocalStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedWishlist = localStorage.getItem("hbt_wishlist");
      if (savedWishlist) {
        try {
          const parsed = JSON.parse(savedWishlist);
          setItems(parsed);
        } catch (e) {
          console.error("[Wishlist] Failed to load wishlist:", e);
        }
      }
      setIsInitialized(true);
    }
  }, []);

  // Save wishlist to LocalStorage whenever items change
  useEffect(() => {
    if (isInitialized && typeof window !== "undefined") {
      localStorage.setItem("hbt_wishlist", JSON.stringify(items));
    }
  }, [items, isInitialized]);

  const addToWishlist = (product: Product) => {
    setItems((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        toast("Already in your wishlist!", { icon: "❤️" });
        return prev;
      }
      toast.success("Added to wishlist!");
      return [...prev, product];
    });
  };

  const removeFromWishlist = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== productId));
    toast.success("Removed from wishlist");
  };

  const isInWishlist = (productId: string) => {
    return items.some((item) => item.id === productId);
  };

  const clearWishlist = () => {
    setItems([]);
    toast.success("Wishlist cleared");
  };

  const wishlistCount = items.length;

  return (
    <WishlistContext.Provider
      value={{
        items,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        clearWishlist,
        wishlistCount,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}
