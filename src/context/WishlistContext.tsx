"use client";

import { createContext, useContext, useEffect, useState, ReactNode, useRef } from "react";
import { Product } from "@/types/product";
import toast from "react-hot-toast";
import { useUser } from "@clerk/nextjs";
import { ProductService } from "@/services/product.service";
import { syncWishlistToClerk } from "@/app/actions/user.actions";

interface WishlistContextType {
  items: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  clearWishlist: () => void;
  wishlistCount: number;
  isLoading: boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Product[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { user, isLoaded, isSignedIn } = useUser();
  const initialSyncComplete = useRef(false);

  // Load wishlist logic
  useEffect(() => {
    const loadWishlist = async () => {
      if (!isLoaded) return;

      if (isSignedIn && user) {
        // User is logged in - load from Clerk metadata
        const savedWishlistIds = user.unsafeMetadata.wishlist as string[] | undefined;

        if (savedWishlistIds && Array.isArray(savedWishlistIds) && savedWishlistIds.length > 0) {
          try {
            const products = await ProductService.getProductsByIds(savedWishlistIds);
            setItems(products);
          } catch (e) {
            console.error("[Wishlist] Failed to hydrate wishlist from server:", e);
          }
        } 
         // Logic for guest->user merge could go here similar to CartContext
      } else {
        // Guest mode
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
        }
      }
      setIsInitialized(true);
      setIsLoading(false);
      initialSyncComplete.current = true;
    };

    loadWishlist();
  }, [isLoaded, isSignedIn, user]);

  // Sync logic
  useEffect(() => {
    if (!isInitialized || !initialSyncComplete.current) return;

    if (typeof window !== "undefined") {
      localStorage.setItem("hbt_wishlist", JSON.stringify(items));
    }

    if (isSignedIn) {
      const productIds = items.map(item => item.id);
      const sync = async () => {
        await syncWishlistToClerk(productIds);
      };
      sync();
    }
  }, [items, isInitialized, isSignedIn]);

  // Logout cleanup
  useEffect(() => {
      if (isLoaded && !isSignedIn && initialSyncComplete.current) {
          setItems([]);
          localStorage.removeItem("hbt_wishlist");
      }
  }, [isSignedIn, isLoaded]);

  const addToWishlist = (product: Product) => {
    // Optional: Force login? Or allow guest wishlist?
    // Using guest wishlist for better UX.
    
    // Check existence BEFORE setting state to avoid side-effects in updater
    const exists = items.some((item) => item.id === product.id);
    
    if (exists) {
      toast("Already in your wishlist!", { icon: "❤️" });
      return;
    }

    toast.success("Added to wishlist!");
    setItems((prev) => [...prev, product]);
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
        isLoading
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
