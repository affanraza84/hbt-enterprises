"use client";

import { useState } from "react";
import { ProductCard } from "@/components/product/ProductCard";
import { Product } from "@/types/product";
import { cn } from "@/lib/utils";

// Mock Data for Display
const NEW_ARRIVALS: Product[] = [
  {
    id: "1", name: "Sony WH-1000XM5", price: 29990, originalPrice: 34990,
    slug: "sony-wh-1000xm5", category: "Audio", images: [], description: "", stock: 10, createdAt: new Date(), updatedAt: new Date(), rating: 4.8, reviewsCount: 124
  },
  {
    id: "2", name: "Samsung Galaxy S24 Ultra", price: 129999, originalPrice: 134999,
    slug: "samsung-s24-ultra", category: "Smart Phone", images: [], description: "", stock: 5, createdAt: new Date(), updatedAt: new Date(), rating: 4.9, reviewsCount: 89
  },
  {
    id: "3", name: "MacBook Air M3", price: 114900, originalPrice: 119900,
    slug: "macbook-air-m3", category: "Laptops", images: [], description: "", stock: 20, createdAt: new Date(), updatedAt: new Date(), rating: 4.7, reviewsCount: 56
  },
  {
    id: "4", name: "Dyson V15 Detect", price: 65900,
    slug: "dyson-v15", category: "Home Appliances", images: [], description: "", stock: 8, createdAt: new Date(), updatedAt: new Date(), rating: 4.6, reviewsCount: 34
  },
  {
    id: "5", name: "PlayStation 5 Slim", price: 54990,
    slug: "ps5-slim", category: "Gaming", images: [], description: "", stock: 15, createdAt: new Date(), updatedAt: new Date(), rating: 4.9, reviewsCount: 200
  },
];

const TRENDING: Product[] = [
  {
    id: "6", name: "Apple AirPods Pro 2", price: 24900,
    slug: "airpods-pro-2", category: "Audio", images: [], description: "", stock: 50, createdAt: new Date(), updatedAt: new Date(), rating: 4.8, reviewsCount: 500
  },
  {
    id: "7", name: "LG 1.5 Ton AC", price: 34500, originalPrice: 55000,
    slug: "lg-ac-1.5", category: "Air Conditioner", images: [], description: "", stock: 12, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 45
  },
  {
    id: "8", name: "GoPro Hero 12", price: 39990, originalPrice: 45000,
    slug: "gopro-hero-12", category: "Camera", images: [], description: "", stock: 8, createdAt: new Date(), updatedAt: new Date(), rating: 4.7, reviewsCount: 78
  },
  {
    id: "9", name: "Samsung 55\" 4K TV", price: 44990, originalPrice: 69900,
    slug: "samsung-4k-tv", category: "Smart TV", images: [], description: "", stock: 4, createdAt: new Date(), updatedAt: new Date(), rating: 4.6, reviewsCount: 112
  },
  {
    id: "10", name: "Nothing Phone (2a)", price: 23999,
    slug: "nothing-phone-2a", category: "Smart Phone", images: [], description: "", stock: 25, createdAt: new Date(), updatedAt: new Date(), rating: 4.4, reviewsCount: 67
  },
];

export function FeaturedDisplay() {
  const [activeTab, setActiveTab] = useState<"new" | "trending">("new");

  const products = activeTab === "new" ? NEW_ARRIVALS : TRENDING;

  // Duplicate items for seamless loop
  const marqueeItems = [...products, ...products, ...products]; 

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

      {/* Marquee Section */}
      <div className="relative w-full">
         <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
            {marqueeItems.map((product, idx) => (
                <div key={`${product.id}-${idx}`} className="w-[280px] sm:w-[320px] mx-4 flex-shrink-0">
                    <ProductCard product={product} />
                </div>
            ))}
         </div>
      </div>
    </section>
  );
}
