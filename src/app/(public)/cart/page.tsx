"use client";

import { useCart } from "@/context/CartContext";
import { formatCurrency } from "@/lib/helpers";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { Trash2, Plus, Minus, Info } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  // If empty
  if (items.length === 0) {
    return (
      <div className="bg-white dark:bg-neutral-900 min-h-screen">
         <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-8 border-b-4 border-yellow-400 pb-2 inline-block">Shopping Cart (0 items)</h1>
             <div className="flex flex-col items-center justify-center py-20">
                <p className="text-xl mb-4 text-neutral-600 dark:text-neutral-400">Your cart is currently empty.</p>
                <Link href="/">
                    <Button className="bg-[#003087] hover:bg-[#00205b] text-white">
                        Continue Shopping
                    </Button>
                </Link>
             </div>
         </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-neutral-900 min-h-screen pb-20 font-sans text-neutral-800 dark:text-neutral-200">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Cart Items */}
            <div className="lg:col-span-8">
                {/* Header */}
                <div className="border-b border-neutral-200 dark:border-neutral-700 mb-6">
                    <h1 className="text-2xl font-bold text-neutral-900 dark:text-white pb-2 relative inline-block">
                        Shopping Cart <span className="text-[#003087] dark:text-blue-400">({items.length} items)</span>
                        <div className="absolute bottom-[-1px] left-0 w-full h-[4px] bg-yellow-400"></div>
                    </h1>
                </div>

                {/* Table Headers (Desktop) */}
                <div className="hidden md:grid grid-cols-12 gap-4 text-sm font-semibold text-neutral-500 border-b border-neutral-200 dark:border-neutral-700 pb-2 mb-4">
                    <div className="col-span-6">Product Details</div>
                    <div className="col-span-3 text-center">Quantity</div>
                    <div className="col-span-3 text-right">Subtotal</div>
                </div>

                {/* Items */}
                <div className="space-y-6">
                    {items.map((item) => {
                        const hasDiscount = item.originalPrice && item.originalPrice > item.price;
                        const discountPercentage = hasDiscount 
                            ? Math.round(((item.originalPrice! - item.price) / item.originalPrice!) * 100) 
                            : 0;

                        return (
                            <div key={item.id} className="border-b border-neutral-100 dark:border-neutral-800 pb-6">
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                                    
                                    {/* Product Details Column */}
                                    <div className="col-span-1 md:col-span-6 flex gap-6">
                                        {/* Image */}
                                        <div className="relative w-28 h-28 flex-shrink-0 bg-neutral-50 dark:bg-neutral-800 rounded-md overflow-hidden p-2">
                                            {item.images?.[0] ? (
                                                <Image 
                                                    src={item.images[0]} 
                                                    alt={item.name} 
                                                    fill 
                                                    className="object-contain"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-xs">No Img</div>
                                            )}
                                        </div>

                                        {/* Text Info */}
                                        <div className="flex flex-col gap-1">
                                            <Link href={`/products/${item.slug}`} className="text-[#003087] dark:text-blue-400 font-bold hover:underline mb-1 line-clamp-2">
                                                {item.name}
                                            </Link>
                                            
                                            {item.joyPrice && (
                                                <span className="text-xs font-bold text-neutral-900 dark:text-white mb-1">Joy Price</span>
                                            )}

                                            {/* Price Row */}
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-[#003087] dark:text-blue-400 font-bold text-lg">
                                                    {formatCurrency(item.price)}
                                                </span>
                                                {hasDiscount && (
                                                    <>
                                                        <span className="text-xs text-neutral-400 line-through decoration-neutral-400">
                                                            {formatCurrency(item.originalPrice!)}
                                                        </span>
                                                        <span className="bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm">
                                                            {discountPercentage}%
                                                        </span>
                                                    </>
                                                )}
                                            </div>

                                            {/* Pickup Info */}
                                            <div className="text-sm flex flex-wrap items-center gap-x-2 text-neutral-600 dark:text-neutral-400">
                                                <span>Available for Pick up</span>
                                                <button className="text-[#003087] dark:text-blue-400 font-semibold hover:underline">
                                                    Select Store
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Quantity Column */}
                                    <div className="col-span-1 md:col-span-3 flex items-start justify-center pt-2">
                                        <div className="flex items-center gap-3">
                                            <button 
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="w-8 h-8 rounded-full border border-neutral-300 dark:border-neutral-600 flex items-center justify-center text-neutral-500 hover:border-neutral-800 hover:text-neutral-800 transition-colors"
                                            >
                                                <Minus className="w-4 h-4" />
                                            </button>
                                            <div className="w-10 h-8 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center bg-white dark:bg-neutral-800 text-sm font-semibold">
                                                {item.quantity}
                                            </div>
                                            <button 
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="w-8 h-8 rounded-full border border-neutral-300 dark:border-neutral-600 flex items-center justify-center text-neutral-500 hover:border-neutral-800 hover:text-neutral-800 transition-colors"
                                            >
                                                <Plus className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Subtotal + Delete Column */}
                                    <div className="col-span-1 md:col-span-3 flex items-start justify-between md:justify-end gap-6 pt-2">
                                        <span className="text-xl font-bold text-neutral-800 dark:text-white">
                                            {formatCurrency(item.price * item.quantity)}
                                        </span>
                                        <button 
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-neutral-400 hover:text-red-500 transition-colors"
                                            title="Remove Item"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>

                                {/* Bottom Delivery Banner */}
                                <div className="mt-4 bg-neutral-50 dark:bg-neutral-800/50 p-3 rounded flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0" />
                                    <span className="text-sm text-neutral-700 dark:text-neutral-300">
                                        Free home delivery by <span className="font-semibold">2 to 4 days</span>
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
                
                {/* Clear Cart Link */}
                <div className="mt-6 flex justify-end">
                     <button onClick={clearCart} className="text-sm text-red-500 hover:underline">Clear all items</button>
                </div>
            </div>

            {/* Right Column: Order Summary */}
            <div className="lg:col-span-4 pl-0 lg:pl-8">
                <div className="sticky top-24">
                     {/* Header */}
                    <div className="border-b border-neutral-200 dark:border-neutral-700 mb-6">
                        <h2 className="text-xl font-bold text-neutral-900 dark:text-white pb-2 relative inline-block">
                            Order Summary
                            <div className="absolute bottom-[-1px] left-0 w-full h-[3px] bg-yellow-400"></div>
                        </h2>
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between text-sm text-neutral-600 dark:text-neutral-400">
                            <span>Sub Total({items.length} items)</span>
                            <span className="font-bold text-neutral-900 dark:text-white">{formatCurrency(cartTotal)}</span>
                        </div>
                        <div className="flex justify-between text-sm text-neutral-600 dark:text-neutral-400">
                            <span>Delivery Charge</span>
                            <span className="font-bold text-neutral-900 dark:text-white">Free</span>
                        </div>
                        
                        <div className="pt-8 pb-2">
                            <div className="flex justify-between items-baseline">
                                <span className="text-sm font-bold text-neutral-500 uppercase">Total:</span>
                                <span className="text-2xl font-bold text-neutral-900 dark:text-white">{formatCurrency(cartTotal)}</span>
                            </div>
                            <div className="text-right text-xs text-neutral-500 mt-1">
                                Price Are Inclusive of Taxes
                            </div>
                        </div>

                        <Button className="w-full h-12 bg-[#003087] hover:bg-[#00205b] text-white font-bold rounded-full text-base shadow-md">
                            Proceed to checkout
                        </Button>
                    </div>

                </div>
            </div>

        </div>
      </div>
    </div>
  );
}
