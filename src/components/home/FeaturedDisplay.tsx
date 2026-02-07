"use client";

import { useState, useRef } from "react";
import { ProductCard } from "@/components/product/ProductCard";
import { Product } from "@/types/product";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Mock Data for Display
const NEW_ARRIVALS: Product[] = [
  {
    id: "1", name: "Sony WH-1000XM5", price: 29990, originalPrice: 34990,
    slug: "sony-wh-1000xm5", category: "Audio", images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80"], description: "", stock: 10, createdAt: new Date(), updatedAt: new Date(), rating: 4.8, reviewsCount: 124
  },
  {
    id: "2", name: "Samsung Galaxy S24 Ultra", price: 129999, originalPrice: 134999,
    slug: "samsung-s24-ultra", category: "Smart Phone", images: ["https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=600&q=80"], description: "", stock: 5, createdAt: new Date(), updatedAt: new Date(), rating: 4.9, reviewsCount: 89
  },
  {
    id: "3", name: "MacBook Air M3", price: 114900, originalPrice: 119900,
    slug: "macbook-air-m3", category: "Laptops", images: ["https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80"], description: "", stock: 20, createdAt: new Date(), updatedAt: new Date(), rating: 4.7, reviewsCount: 56
  },
  {
    id: "4", name: "Dyson V15 Detect", price: 65900,
    slug: "dyson-v15", category: "Home Appliances", images: ["https://images.unsplash.com/photo-1599652523502-1ce28d324493?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"], description: "", stock: 8, createdAt: new Date(), updatedAt: new Date(), rating: 4.6, reviewsCount: 34
  },
  {
    id: "5", name: "PlayStation 5 Slim", price: 54990,
    slug: "ps5-slim", category: "Gaming", images: ["https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=600&q=80"], description: "", stock: 15, createdAt: new Date(), updatedAt: new Date(), rating: 4.9, reviewsCount: 200
  },
];

const TRENDING: Product[] = [
  {
    id: "6", name: "Apple AirPods Pro 2", price: 24900,
    slug: "airpods-pro-2", category: "Audio", images: ["https://images.unsplash.com/photo-1603351154351-5cf233081d35?auto=format&fit=crop&w=600&q=80"], description: "", stock: 50, createdAt: new Date(), updatedAt: new Date(), rating: 4.8, reviewsCount: 500
  },
  {
    id: "7", name: "LG 1.5 Ton AC", price: 34500, originalPrice: 55000,
    slug: "lg-ac-1.5", category: "Air Conditioner", images: ["https://images.unsplash.com/photo-1614631446505-b0aa00640f0c?auto=format&fit=crop&w=600&q=80"], description: "", stock: 12, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 45
  },
  {
    id: "8", name: "GoPro Hero 12", price: 39990, originalPrice: 45000,
    slug: "gopro-hero-12", category: "Camera", images: ["https://images.unsplash.com/photo-1592155931558-515f2d527011?auto=format&fit=crop&w=600&q=80"], description: "", stock: 8, createdAt: new Date(), updatedAt: new Date(), rating: 4.7, reviewsCount: 78
  },
  {
    id: "9", name: "Samsung 55\" 4K TV", price: 44990, originalPrice: 69900,
    slug: "samsung-4k-tv", category: "Smart TV", images: ["https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80"], description: "", stock: 4, createdAt: new Date(), updatedAt: new Date(), rating: 4.6, reviewsCount: 112
  },
  {
    id: "10", name: "Nothing Phone (2a)", price: 23999,
    slug: "nothing-phone-2a", category: "Smart Phone", images: ["https://images.unsplash.com/photo-1603923407983-054ceb847846?auto=format&fit=crop&w=600&q=80"], description: "", stock: 25, createdAt: new Date(), updatedAt: new Date(), rating: 4.4, reviewsCount: 67
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
