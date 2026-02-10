"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/product';
import { formatCurrency } from '@/lib/helpers';
import { Button } from '@/components/ui/Button';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const isWishlisted = isInWishlist(product.id);

  // Mock rating if not present (remove mock logic when backend provides real data)
  const rating = product.rating || 4.5;
  const reviewsCount = product.reviewsCount || 0;
  
  // Discount Logic
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercentage = hasDiscount 
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100) 
    : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating if clicked near a link
    e.stopPropagation();
    
    addToCart(product);

  };

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="group/card relative bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 transition-all duration-300 hover:border-accent/50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] flex flex-col h-full overflow-hidden">
      
      {/* Image Container */}
      <div className={cn(
        "relative overflow-hidden bg-neutral-100 dark:bg-neutral-800/50 p-4 aspect-square"
      )}>
        {/* Wishlist Button */}
        <button 
          onClick={toggleWishlist}
          className={cn(
            "absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm flex items-center justify-center transition-all shadow-sm border border-neutral-200 dark:border-neutral-800 hover:scale-110",
            isWishlisted ? "text-red-500 fill-current" : "text-neutral-400 hover:text-red-500"
          )}
        >
           <Heart className={cn("w-4 h-4", isWishlisted && "fill-current")} />
        </button>

        {/* Badges */}
        <div className="absolute top-3 left-3 z-20 flex flex-col gap-1.5">
            {hasDiscount && (
                <span className="inline-flex px-2 py-1 rounded bg-accent text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                    {discountPercentage}% OFF
                </span>
            )}
            {product.stock <= 5 && (
                <span className="inline-flex px-2 py-1 rounded bg-red-500/90 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm backdrop-blur-sm">
                    Low Stock
                </span>
            )}
        </div>

        <Link href={`/products/${product.slug}`} className="block w-full h-full relative">
           {product.images && product.images[0] ? (
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className={cn(
                    "transition-transform duration-500 group-hover/card:scale-105 object-cover"
                )}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
           ) : (
                <div className="w-full h-full flex items-center justify-center text-4xl select-none">
                    ⚡️
                </div>
           )}
        </Link>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow gap-2">
        <div className="flex items-start justify-between gap-2">
            <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-1">{product.category}</p>
                <Link href={`/products/${product.slug}`}>
                    <h3 className="text-sm font-bold text-neutral-800 dark:text-neutral-100 leading-tight line-clamp-2 group-hover/card:text-primary dark:group-hover/card:text-accent transition-colors">
                    {product.name}
                    </h3>
                </Link>
            </div>
        </div>

        {/* Reviews */}
        <div className="flex items-center gap-1">
            <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                    <Star 
                        key={i} 
                        className={cn("w-3 h-3", i < Math.floor(rating) ? "fill-current" : "text-neutral-300 dark:text-neutral-700")} 
                    />
                ))}
            </div>
            <span className="text-[10px] text-neutral-500 font-medium">({reviewsCount} reviews)</span>
        </div>

        <div className="mt-auto pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-center gap-2">
             <div className="flex flex-col">
                 <div className="flex items-baseline gap-2">
                     <span className="text-lg font-bold text-primary dark:text-white">
                        {formatCurrency(product.price)}
                     </span>
                     {hasDiscount && (
                        <span className="text-xs text-neutral-400 line-through decoration-neutral-400">
                            {formatCurrency(product.originalPrice!)}
                        </span>
                     )}
                 </div>
             </div>
             
             {/* Add to Cart Button */}
             <Button 
                size="sm" 
                onClick={handleAddToCart}
                className="rounded-full shadow-sm hover:shadow-md transition-all active:scale-95 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-neutral-900 border border-neutral-200 dark:border-neutral-700 hover:border-transparent p-0 w-11 h-11 sm:w-auto sm:h-9 sm:px-4 flex items-center justify-center gap-2"
                aria-label="Add to Cart"
             >
                <ShoppingCart className="w-5 h-5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline text-xs font-bold">Add</span>
             </Button>
        </div>
      </div>
    </div>
  );
}
