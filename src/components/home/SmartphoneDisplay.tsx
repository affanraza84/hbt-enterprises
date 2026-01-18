"use client";

import Link from "next/link";
import { ProductCard } from "@/components/product/ProductCard";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

// Mock Data for Smart Phones
const SMARTPHONES: Product[] = [
  {
    id: "ph-1", name: "Samsung Galaxy S24 Ultra 5G AI Smartphone", price: 129999, originalPrice: 134999,
    slug: "samsung-s24-ultra", category: "Smart Phone", images: [], description: "", stock: 15, createdAt: new Date(), updatedAt: new Date(), rating: 4.9, reviewsCount: 850
  },
  {
    id: "ph-2", name: "Apple iPhone 15 Pro Max (256 GB)", price: 148900, originalPrice: 159900,
    slug: "iphone-15-pro-max", category: "Smart Phone", images: [], description: "", stock: 10, createdAt: new Date(), updatedAt: new Date(), rating: 4.8, reviewsCount: 1200
  },
  {
    id: "ph-3", name: "OnePlus 12 5G (16GB RAM, 512GB Storage)", price: 69999, originalPrice: 74999,
    slug: "oneplus-12", category: "Smart Phone", images: [], description: "", stock: 20, createdAt: new Date(), updatedAt: new Date(), rating: 4.7, reviewsCount: 600
  },
  {
    id: "ph-4", name: "Google Pixel 8 Pro 5G", price: 98999, originalPrice: 106999,
    slug: "google-pixel-8-pro", category: "Smart Phone", images: [], description: "", stock: 12, createdAt: new Date(), updatedAt: new Date(), rating: 4.6, reviewsCount: 450
  },
  {
    id: "ph-5", name: "Nothing Phone (2) 5G", price: 36999, originalPrice: 49999,
    slug: "nothing-phone-2", category: "Smart Phone", images: [], description: "", stock: 25, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 320
  },
  {
    id: "ph-6", name: "Xiaomi 14 Ultra 5G Leica", price: 99999, originalPrice: 119999,
    slug: "xiaomi-14-ultra", category: "Smart Phone", images: [], description: "", stock: 8, createdAt: new Date(), updatedAt: new Date(), rating: 4.7, reviewsCount: 200
  },
];

export function SmartphoneDisplay() {
  const marqueeItems = [...SMARTPHONES, ...SMARTPHONES, ...SMARTPHONES]; 

  return (
    <section className="py-12 bg-white dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-800 transition-colors duration-300">
      <div className="container mx-auto px-4 mb-8">
        <div className="flex items-center justify-between">
            <div>
                <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">Connect & Create</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white font-heading">
                    Smart Phones
                </h2>
            </div>
            
            <Link href="/products?category=smart-phone">
                <Button variant="outline" className="gap-2 border-neutral-200 dark:border-neutral-700 hover:border-accent hover:text-accent dark:text-neutral-300 dark:hover:text-accent transition-all group">
                    View All
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
            </Link>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
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
