"use client";

import { useWishlist } from "@/context/WishlistContext";
import { ProductCard } from "@/components/product/ProductCard";
import { Heart, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function WishlistPage() {
  const { items, clearWishlist } = useWishlist();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mb-6">
          <Heart className="w-10 h-10 text-neutral-400" />
        </div>
        <h1 className="text-3xl font-bold font-heading mb-2">Your wishlist is empty</h1>
        <p className="text-neutral-500 mb-8 max-w-md">
          Heart items you love to save them for later!
        </p>
        <Link href="/products">
          <Button size="lg" className="rounded-full">
            Start Shopping
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
           <h1 className="text-3xl font-bold font-heading mb-2">My Wishlist</h1>
           <p className="text-neutral-500">{items.length} items saved</p>
        </div>
        <Button variant="outline" onClick={clearWishlist} className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 border-red-200 dark:border-red-900/30">
           Clear Wishlist
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
