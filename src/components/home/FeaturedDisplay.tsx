"use client";

import { useState, useRef } from "react";
import { ProductCard } from "@/components/product/ProductCard";
import { Product } from "@/types/product";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Mock Data for Display
const NEW_ARRIVALS: Product[] = [
  {
    id: "1", name: "Samsung Galaxy S24 Ultra", price: 129999, originalPrice: 134999,
    slug: "samsung-s24-ultra", category: "Smart Phone", images: ["https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=600&q=80"], description: "", stock: 45, createdAt: new Date(), updatedAt: new Date(), rating: 4.8, reviewsCount: 1240
  },
  {
    id: "2", name: "Zebronics Juke Bar 9700 Pro", price: 14999, originalPrice: 22999,
    slug: "zebronics-9700-pro", category: "Soundbar", images: ["https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80"], description: "", stock: 25, createdAt: new Date(), updatedAt: new Date(), rating: 4.2, reviewsCount: 450
  },
  {
    id: "3", name: "LG 8 Kg Front Load", price: 34990, originalPrice: 45990,
    slug: "lg-8kg-front-load", category: "Washing Machine", images: ["https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?auto=format&fit=crop&w=600&q=80"], description: "", stock: 15, createdAt: new Date(), updatedAt: new Date(), rating: 4.8, reviewsCount: 320
  },
  {
    id: "4", name: "Honeywell Desert Cooler", price: 14990,
    slug: "honeywell-desert-cooler", category: "Cooler", images: ["https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80"], description: "", stock: 100, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 89
  },
  {
    id: "cooler-durotek-aero-22", name: "Durotek Aero Cool 22\"", price: 10990, originalPrice: 21990,
    slug: "durotek-aero-22", category: "Cooler", images: ["/images/coolers/durotek-aero-22.jpg"], description: "Commercial E-Frame cooler", stock: 20, createdAt: new Date(), updatedAt: new Date(), rating: 4.7, reviewsCount: 15
  }
];

const TRENDING: Product[] = [
  {
    id: "6", name: "Nothing Phone (2a)", price: 23999,
    slug: "nothing-phone-2a", category: "Smart Phone", images: ["https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=800&q=80"], description: "", stock: 25, createdAt: new Date(), updatedAt: new Date(), rating: 4.4, reviewsCount: 67
  },
  {
    id: "sb-4", name: "Samsung HW-Q990C Soundbar", price: 99990, originalPrice: 129990,
    slug: "samsung-q990c", category: "Soundbar", images: ["https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?auto=format&fit=crop&w=800&q=80"], description: "Wireless Dolby Atmos.", stock: 5, createdAt: new Date(), updatedAt: new Date(), rating: 4.9, reviewsCount: 120
  },
  {
    id: "8", name: "Whirlpool Top Load", price: 16490, originalPrice: 20400,
    slug: "whirlpool-7.5kg-top-load", category: "Washing Machine", images: ["https://images.unsplash.com/photo-1626806775351-538068f2f480?auto=format&fit=crop&w=800&q=80"], description: "", stock: 10, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 89
  },
  {
    id: "9", name: "boAt Aavante Bar 1500", price: 4999, originalPrice: 12999,
    slug: "boat-aavante-1500", category: "Soundbar", images: ["https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80"], description: "", stock: 30, createdAt: new Date(), updatedAt: new Date(), rating: 4.3, reviewsCount: 1500
  },
  {
    id: "10", name: "Apple iPhone 15 Pro Max", price: 148900, originalPrice: 159900,
    slug: "iphone-15-pro-max", category: "Smart Phone", images: ["https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80"], description: "", stock: 10, createdAt: new Date(), updatedAt: new Date(), rating: 4.8, reviewsCount: 1200
  },
];

export function FeaturedDisplay() {
  const [activeTab, setActiveTab] = useState<"new" | "trending">("new");
  const scrollRef = useRef<HTMLDivElement>(null);

  const products = activeTab === "new" ? NEW_ARRIVALS : TRENDING;

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 350; // Card width + margin
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="py-16 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 mb-10">
        <div className="flex flex-col items-center justify-center">
            {/* Tabs */}
            <div className="flex items-center gap-8 border-b border-neutral-200 dark:border-neutral-800 pb-4 relative">
                <button 
                    onClick={() => setActiveTab("new")}
                    className={cn(
                        "text-2xl sm:text-3xl font-bold transition-colors duration-300 relative px-2",
                        activeTab === "new" ? "text-accent" : "text-neutral-400 hover:text-black dark:hover:text-white"
                    )}
                >
                    New Arrivals
                    {activeTab === "new" && (
                        <div className="absolute -bottom-[17px] left-0 right-0 h-1 bg-accent rounded-t-full shadow-[0_-2px_10px_rgba(0,198,255,0.5)]" />
                    )}
                </button>
                
                <button 
                    onClick={() => setActiveTab("trending")}
                    className={cn(
                        "text-2xl sm:text-3xl font-bold transition-colors duration-300 relative px-2",
                        activeTab === "trending" ? "text-accent" : "text-neutral-400 hover:text-black dark:hover:text-white"
                    )}
                >
                    Trending
                    {activeTab === "trending" && (
                        <div className="absolute -bottom-[17px] left-0 right-0 h-1 bg-accent rounded-t-full shadow-[0_-2px_10px_rgba(0,198,255,0.5)]" />
                    )}
                </button>
            </div>
        </div>
      </div>

      {/* Product List with Navigation */}
      <div className="relative w-full group container mx-auto px-4">
         {/* Navigation Buttons - Visible on large screens or on hover */}
         <div className="absolute top-1/2 -translate-y-1/2 left-0 z-10 hidden sm:flex items-center justify-center w-12 h-full bg-gradient-to-r from-white dark:from-neutral-900 to-transparent pointer-events-none">
            <button 
                onClick={() => scroll("left")}
                className="pointer-events-auto w-10 h-10 rounded-full bg-white dark:bg-neutral-800 shadow-lg border border-neutral-100 dark:border-neutral-700 flex items-center justify-center text-neutral-900 dark:text-white hover:bg-accent hover:text-white dark:hover:bg-accent transition-all opacity-0 group-hover:opacity-100"
                aria-label="Scroll left"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>
         </div>
         
         <div className="absolute top-1/2 -translate-y-1/2 right-0 z-10 hidden sm:flex items-center justify-center w-12 h-full bg-gradient-to-l from-white dark:from-neutral-900 to-transparent pointer-events-none">
             <button 
                onClick={() => scroll("right")}
                className="pointer-events-auto w-10 h-10 rounded-full bg-white dark:bg-neutral-800 shadow-lg border border-neutral-100 dark:border-neutral-700 flex items-center justify-center text-neutral-900 dark:text-white hover:bg-accent hover:text-white dark:hover:bg-accent transition-all opacity-0 group-hover:opacity-100"
                aria-label="Scroll right"
            >
                <ChevronRight className="w-5 h-5" />
            </button>
         </div>

         <div 
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x"
         >
            {products.map((product) => (
                <div key={product.id} className="w-[280px] sm:w-[320px] mr-6 flex-shrink-0 snap-start">
                    <ProductCard product={product} />
                </div>
            ))}
         </div>
      </div>
    </section>
  );
}
