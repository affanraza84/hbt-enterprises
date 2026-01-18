"use client";

import Link from "next/link";
import { ProductCard } from "@/components/product/ProductCard";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

// Mock Data for Washing Machines
const WASHING_MACHINES: Product[] = [
  {
    id: "wm-1", name: "LG 8 Kg 5 Star Inverter Fully Automatic Front Load", price: 34990, originalPrice: 45990,
    slug: "lg-8kg-front-load", category: "Washing Machine", images: [], description: "", stock: 15, createdAt: new Date(), updatedAt: new Date(), rating: 4.8, reviewsCount: 320
  },
  {
    id: "wm-2", name: "Samsung 7 Kg 5 Star Inverter Fully Automatic Top Load", price: 18990, originalPrice: 22500,
    slug: "samsung-7kg-top-load", category: "Washing Machine", images: [], description: "", stock: 20, createdAt: new Date(), updatedAt: new Date(), rating: 4.6, reviewsCount: 150
  },
  {
    id: "wm-3", name: "Whirlpool 7.5 Kg 5 Star Stainwash Pro Top Load", price: 16490, originalPrice: 20400,
    slug: "whirlpool-7.5kg-top-load", category: "Washing Machine", images: [], description: "", stock: 10, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 89
  },
  {
    id: "wm-4", name: "IFB 8 Kg 5 Star AI Powered Front Load", price: 36990, originalPrice: 48990,
    slug: "ifb-8kg-ai-front-load", category: "Washing Machine", images: [], description: "", stock: 8, createdAt: new Date(), updatedAt: new Date(), rating: 4.7, reviewsCount: 205
  },
  {
    id: "wm-5", name: "Bosch 7 Kg 5 Star Inverter Touch Control Front Load", price: 30990, originalPrice: 39500,
    slug: "bosch-7kg-front-load", category: "Washing Machine", images: [], description: "", stock: 12, createdAt: new Date(), updatedAt: new Date(), rating: 4.8, reviewsCount: 180
  },
  {
    id: "wm-6", name: "Haier 8.5 Kg 5 Star Anti-Bacterial Vortex Top Load", price: 22990, originalPrice: 32000,
    slug: "haier-8.5kg-top-load", category: "Washing Machine", images: [], description: "", stock: 18, createdAt: new Date(), updatedAt: new Date(), rating: 4.4, reviewsCount: 95
  },
];

export function WashingMachineDisplay() {
  // Duplicate items for seamless loop
  const marqueeItems = [...WASHING_MACHINES, ...WASHING_MACHINES, ...WASHING_MACHINES]; 

  return (
    <section className="py-12 bg-white dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-800 transition-colors duration-300">
      <div className="container mx-auto px-4 mb-8">
        <div className="flex items-center justify-between">
            {/* Title */}
            <div>
                <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">Premium Laundry Care</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white font-heading">
                    Washing Machines
                </h2>
            </div>
            
            {/* View All Button */}
            <Link href="/products?category=washing-machine">
                <Button variant="outline" className="gap-2 border-neutral-200 dark:border-neutral-700 hover:border-accent hover:text-accent dark:text-neutral-300 dark:hover:text-accent transition-all group">
                    View All
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
            </Link>
        </div>
      </div>

      {/* Marquee Section */}
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
