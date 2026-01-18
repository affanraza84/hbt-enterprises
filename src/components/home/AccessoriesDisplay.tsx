"use client";

import Link from "next/link";
import { ProductCard } from "@/components/product/ProductCard";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

// Mock Data for Accessories
const ACCESSORIES: Product[] = [
  {
    id: "acc-1", name: "Apple Watch Series 9 GPS", price: 41900, originalPrice: 44900,
    slug: "apple-watch-s9", category: "Smartwatch", images: [], description: "", stock: 20, createdAt: new Date(), updatedAt: new Date(), rating: 4.8, reviewsCount: 300
  },
  {
    id: "acc-2", name: "Samsung Galaxy Watch 6 Classic", price: 36999, originalPrice: 42999,
    slug: "samsung-watch-6", category: "Smartwatch", images: [], description: "", stock: 15, createdAt: new Date(), updatedAt: new Date(), rating: 4.7, reviewsCount: 250
  },
  {
    id: "acc-3", name: "Sony WF-1000XM5 TWS Noise Cancelling Earbuds", price: 24990, originalPrice: 29990,
    slug: "sony-wf-1000xm5", category: "Headphones", images: [], description: "", stock: 25, createdAt: new Date(), updatedAt: new Date(), rating: 4.6, reviewsCount: 180
  },
  {
    id: "acc-4", name: "AirPods Pro (2nd Generation) with USB-C", price: 24900, originalPrice: 26900,
    slug: "airpods-pro-2", category: "Headphones", images: [], description: "", stock: 30, createdAt: new Date(), updatedAt: new Date(), rating: 4.9, reviewsCount: 1500
  },
  {
    id: "acc-5", name: "Logitech MX Master 3S Advanced Wireless Mouse", price: 9995, originalPrice: 10995,
    slug: "logitech-mx-master-3s", category: "Accessories", images: [], description: "", stock: 18, createdAt: new Date(), updatedAt: new Date(), rating: 4.9, reviewsCount: 400
  },
  {
    id: "acc-6", name: "Dell 7-in-1 USB-C Hub Mobile Adapter", price: 6999, originalPrice: 9999,
    slug: "dell-usb-hub", category: "Accessories", images: [], description: "", stock: 40, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 120
  },
];

export function AccessoriesDisplay() {
  const marqueeItems = [...ACCESSORIES, ...ACCESSORIES, ...ACCESSORIES]; 

  return (
    <section className="py-12 bg-white dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-800 transition-colors duration-300">
      <div className="container mx-auto px-4 mb-8">
        <div className="flex items-center justify-between">
            <div>
                <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">Essential Gadgets</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white font-heading">
                    Accessories
                </h2>
            </div>
            
            <Link href="/products?category=accessories">
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
