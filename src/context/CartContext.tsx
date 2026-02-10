"use client";

import { useUser } from "@clerk/nextjs";
import { LoginRequiredModal } from "@/components/auth/LoginRequiredModal";
import { createContext, useContext, useEffect, useState, ReactNode, useRef } from "react";
import toast from "react-hot-toast";
import { Product } from "@/types/product";
import { ProductService } from "@/services/product.service";
import { syncCartToClerk } from "@/app/actions/user.actions";

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
  isLoading: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { user, isLoaded, isSignedIn } = useUser();
  
  // Ref to track if the initial sync has happened to avoid overwriting server data with empty local state
  const initialSyncComplete = useRef(false);

  // Load cart logic
  useEffect(() => {
    const loadCart = async () => {
      if (!isLoaded) return;

      if (isSignedIn && user) {
        // User is logged in - load from Clerk metadata
        const savedCart = user.unsafeMetadata.cart as { productId: string; quantity: number }[] | undefined;
        
        if (savedCart && Array.isArray(savedCart) && savedCart.length > 0) {
          try {
            const productIds = savedCart.map(item => item.productId);
            // We need to implement getProductsByIds in ProductService, assuming we did
            const products = await ProductService.getProductsByIds(productIds);
            
            const hydratedCart: CartItem[] = products.map(product => {
              const savedItem = savedCart.find(item => item.productId === product.id);
              return {
                ...product,
                quantity: savedItem ? savedItem.quantity : 1
              };
            });
            
            setItems(hydratedCart);
          } catch (e) {
            console.error("[Cart] Failed to hydrate cart from server:", e);
          }
        } else {
             // If server cart is empty, check if we have a local cart to merge/upload? 
             // For now, let's just respect the server state (empty) or keep local if we want to support guest-to-user merge later.
             // Simple version: Server state wins on login.
             // Enhancement: Merge local cart into server cart.
             
             // Check local cart (guest cart)
             if (typeof window !== "undefined") {
                 const localCartJson = localStorage.getItem("hbt_cart");
                 if (localCartJson) {
                     try {
                         const localCart = JSON.parse(localCartJson) as CartItem[];
                         if (localCart.length > 0) {
                             // User logged in but has no server cart, but has local cart. 
                             // We should probably keep the local cart and it will auto-sync to server in the next effect.
                             setItems(localCart);
                             toast.success("Your cart has been restored!");
                         }
                     } catch (e) { console.error(e); }
                 }
             }
        }
      } else {
        // User is guest - load from LocalStorage
        if (typeof window !== "undefined") {
          const savedCart = localStorage.getItem("hbt_cart");
          if (savedCart) {
            try {
              const parsed = JSON.parse(savedCart);
              setItems(parsed);
            } catch (e) {
              console.error("[Cart] Failed to load local cart:", e);
              localStorage.removeItem("hbt_cart");
            }
          } else {
            setItems([]);
          }
        }
      }
      
      setIsInitialized(true);
      setIsLoading(false);
      initialSyncComplete.current = true;
    };

    loadCart();
  }, [isLoaded, isSignedIn, user]);


  // Sync changes logic
  useEffect(() => {
    if (!isInitialized || !initialSyncComplete.current) return;

    // 1. Save to LocalStorage (always backup locally for better UX/offline support)
    if (typeof window !== "undefined") {
        localStorage.setItem("hbt_cart", JSON.stringify(items));
    }

    // 2. Sync to Clerk if logged in
    if (isSignedIn) {
        const cartMetadata = items.map(item => ({
            productId: item.id,
            quantity: item.quantity
        }));
        
        // Debounce or just fire and forget? 
        // For simplicity, fire and forget but ideally we debounce this.
        const sync = async () => {
             await syncCartToClerk(cartMetadata);
        };
        sync();
    }
  }, [items, isInitialized, isSignedIn]);
  
  // Handle Logout Cleanup
  useEffect(() => {
      if (isLoaded && !isSignedIn && initialSyncComplete.current) {
          // User just logged out
          // We should ideally clear items, but we might want to keep them as "guest" items?
          // The requirement says: "when user signed out then the cart and wishlist should get empty"
          setItems([]);
          localStorage.removeItem("hbt_cart");
      }
  }, [isSignedIn, isLoaded]);


  const addToCart = (product: Product) => {
    // Check if user is signed in
    if (!isSignedIn) {
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
        isLoading
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
