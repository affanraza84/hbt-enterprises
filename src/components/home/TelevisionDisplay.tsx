"use client";

import Link from "next/link";
import { ProductCard } from "@/components/product/ProductCard";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

// Mock Data for Televisions
const TELEVISIONS: Product[] = [
  {
    id: "tv-1", name: "Samsung 55 Inch 4K Ultra HD Smart LED TV", price: 44990, originalPrice: 69900,
    slug: "samsung-55-4k", category: "Television", images: [], description: "", stock: 10, createdAt: new Date(), updatedAt: new Date(), rating: 4.7, reviewsCount: 420
  },
  {
    id: "tv-2", name: "LG 43 Inch 4K Ultra HD Smart LED TV", price: 32990, originalPrice: 49990,
    slug: "lg-43-4k", category: "Television", images: [], description: "", stock: 15, createdAt: new Date(), updatedAt: new Date(), rating: 4.6, reviewsCount: 310
  },
  {
    id: "tv-3", name: "Sony Bravia 55 Inch 4K Ultra HD Smart LED Google TV", price: 57990, originalPrice: 99900,
    slug: "sony-55-4k", category: "Television", images: [], description: "", stock: 8, createdAt: new Date(), updatedAt: new Date(), rating: 4.8, reviewsCount: 550
  },
  {
    id: "tv-4", name: "Xiaomi 50 Inch 4K Ultra HD Smart Android OLED Vision TV", price: 29999, originalPrice: 39999,
    slug: "xiaomi-50-4k", category: "Television", images: [], description: "", stock: 20, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 200
  },
  {
    id: "tv-5", name: "TCL 65 Inch 4K Ultra HD Smart QLED Google TV", price: 51990, originalPrice: 109990,
    slug: "tcl-65-qled", category: "Television", images: [], description: "", stock: 5, createdAt: new Date(), updatedAt: new Date(), rating: 4.4, reviewsCount: 150
  },
  {
    id: "tv-6", name: "OnePlus 43 Inch Y Series 4K Ultra HD Smart Android LED TV", price: 24999, originalPrice: 29999,
    slug: "oneplus-43-4k", category: "Television", images: [], description: "", stock: 25, createdAt: new Date(), updatedAt: new Date(), rating: 4.3, reviewsCount: 180
  },
];

export function TelevisionDisplay() {
  const marqueeItems = [...TELEVISIONS, ...TELEVISIONS, ...TELEVISIONS]; 

  return (
    <section className="py-12 bg-white dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-800 transition-colors duration-300">
      <div className="container mx-auto px-4 mb-8">
        <div className="flex items-center justify-between">
            <div>
                <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">Cinematic Experience</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white font-heading">
                    Televisions
                </h2>
            </div>
            
            <Link href="/products?category=television">
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
