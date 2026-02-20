"use client";

import { useCart } from "@/context/CartContext";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/Button";
import toast from "react-hot-toast";
import { ShoppingCart, Zap } from "lucide-react";
import { useRouter } from "next/navigation";

import { useUser } from "@clerk/nextjs";

interface ProductActionsProps {
  product: Product;
}

export function ProductActions({ product }: ProductActionsProps) {
  const { addToCart } = useCart();
  const router = useRouter();
  const { isSignedIn } = useUser();

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleBuyNow = () => {
    if (!isSignedIn) {
      // Let CartContext spawn the LoginRequiredModal, but don't redirect
      addToCart(product);
      return;
    }
    
    addToCart(product);
    router.push("/cart");
  };

  return (
    <div className="flex flex-col gap-3 mb-8">
      <div className="flex gap-3">
        <Button 
            variant="outline" 
            size="lg" 
            onClick={handleAddToCart}
            className="flex-1 h-12 text-base font-bold bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white"
        >
          <ShoppingCart className="w-5 h-5 mr-2" />
          Add to Cart
        </Button>
        <Button 
            size="lg" 
            onClick={handleBuyNow}
            className="flex-1 h-12 text-base font-bold bg-yellow-400 hover:bg-yellow-500 text-black border-none"
        >
          <Zap className="w-5 h-5 mr-2" />
          Buy Now
        </Button>
      </div>
      <Button 
        size="lg" 
        className="w-full h-12 text-base font-bold bg-[#003087] hover:bg-[#00205b] text-white"
      >
        Connect to store
      </Button>
    </div>
  );
}
