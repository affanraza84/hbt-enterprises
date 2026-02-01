"use client";

import Link from "next/link";
import { ProductCard } from "@/components/product/ProductCard";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

// Mock Data for Air Conditioners
const AIR_CONDITIONERS: Product[] = [
  {
    id: "ac-1", name: "Voltas 1.5 Ton 5 Star Inverter Split AC", price: 38990, originalPrice: 68990,
    slug: "voltas-1.5-split", category: "Air Conditioner", images: ["https://images.unsplash.com/photo-1614631446505-b0aa00640f0c?auto=format&fit=crop&w=600&q=80"], description: "", stock: 20, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 300
  },
  {
    id: "ac-2", name: "LG 1.5 Ton 5 Star AI DUAL Inverter Split AC", price: 44490, originalPrice: 78990,
    slug: "lg-1.5-split-ai", category: "Air Conditioner", images: ["https://images.unsplash.com/photo-1579042636952-44c136369b07?auto=format&fit=crop&w=600&q=80"], description: "", stock: 18, createdAt: new Date(), updatedAt: new Date(), rating: 4.7, reviewsCount: 410
  },
  {
    id: "ac-3", name: "Daikin 1.5 Ton 5 Star Inverter Split AC", price: 45490, originalPrice: 67200,
    slug: "daikin-1.5-split", category: "Air Conditioner", images: ["https://images.unsplash.com/photo-1542475510-9c299c85775f?auto=format&fit=crop&w=600&q=80"], description: "", stock: 15, createdAt: new Date(), updatedAt: new Date(), rating: 4.8, reviewsCount: 350
  },
  {
    id: "ac-4", name: "Carrier 1.5 Ton 5 Star AI Flexicool Inverter Split AC", price: 41990, originalPrice: 76000,
    slug: "carrier-1.5-split", category: "Air Conditioner", images: ["https://images.unsplash.com/photo-1614631446505-b0aa00640f0c?auto=format&fit=crop&w=600&q=80"], description: "", stock: 12, createdAt: new Date(), updatedAt: new Date(), rating: 4.4, reviewsCount: 220
  },
  {
    id: "ac-5", name: "Blue Star 1.5 Ton 5 Star Inverter Split AC", price: 42990, originalPrice: 75000,
    slug: "blue-star-1.5-split", category: "Air Conditioner", images: ["https://images.unsplash.com/photo-1612450849206-8fb509f61b36?auto=format&fit=crop&w=600&q=80"], description: "", stock: 10, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 180
  },
  {
    id: "ac-6", name: "Panasonic 1.5 Ton 5 Star Wi-Fi Inverter Smart Split AC", price: 42990, originalPrice: 63400,
    slug: "panasonic-1.5-smart-split", category: "Air Conditioner", images: ["https://images.unsplash.com/photo-1614631446505-b0aa00640f0c?auto=format&fit=crop&w=600&q=80"], description: "", stock: 14, createdAt: new Date(), updatedAt: new Date(), rating: 4.6, reviewsCount: 290
  },
];

export function AirConditionerDisplay() {
  const marqueeItems = [...AIR_CONDITIONERS, ...AIR_CONDITIONERS, ...AIR_CONDITIONERS]; 

  return (
    <section className="py-12 bg-white dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-800 transition-colors duration-300">
      <div className="container mx-auto px-4 mb-8">
        <div className="flex items-center justify-between">
            <div>
                <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">Summer Essentials</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white font-heading">
                    Air Conditioners
                </h2>
            </div>
            
            <Link href="/products?category=air-conditioner">
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
