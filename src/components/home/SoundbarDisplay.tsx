"use client";

import Link from "next/link";
import { ProductCard } from "@/components/product/ProductCard";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

// Mock Data for Soundbars
const SOUNDBARS: Product[] = [
  {
    id: "sb-1", name: "JBL Cinema SB271, Dolby Digital Soundbar", price: 12999, originalPrice: 16999,
    slug: "jbl-cinema-sb271", category: "Soundbar", images: [], description: "", stock: 20, createdAt: new Date(), updatedAt: new Date(), rating: 4.4, reviewsCount: 350
  },
  {
    id: "sb-2", name: "Sony HT-S20R Real 5.1ch Dolby Digital Soundbar", price: 17990, originalPrice: 23990,
    slug: "sony-ht-s20r", category: "Soundbar", images: [], description: "", stock: 15, createdAt: new Date(), updatedAt: new Date(), rating: 4.6, reviewsCount: 800
  },
  {
    id: "sb-3", name: "boAt Aavante Bar 1500 2.1 Channel Home Theatre Soundbar", price: 4999, originalPrice: 12999,
    slug: "boat-aavante-1500", category: "Soundbar", images: [], description: "", stock: 30, createdAt: new Date(), updatedAt: new Date(), rating: 4.3, reviewsCount: 1500
  },
  {
    id: "sb-4", name: "Samsung HW-Q990C 11.1.4ch Soundbar with Dolby Atmos", price: 99990, originalPrice: 129990,
    slug: "samsung-q990c", category: "Soundbar", images: [], description: "", stock: 5, createdAt: new Date(), updatedAt: new Date(), rating: 4.9, reviewsCount: 120
  },
  {
    id: "sb-5", name: "Bose Smart Soundbar 900 Dolby Atmos", price: 104900, originalPrice: 114900,
    slug: "bose-soundbar-900", category: "Soundbar", images: [], description: "", stock: 8, createdAt: new Date(), updatedAt: new Date(), rating: 4.8, reviewsCount: 200
  },
  {
    id: "sb-6", name: "Zebronics Juke Bar 9700 Pro Dolby Atmos", price: 14999, originalPrice: 22999,
    slug: "zebronics-9700-pro", category: "Soundbar", images: [], description: "", stock: 25, createdAt: new Date(), updatedAt: new Date(), rating: 4.2, reviewsCount: 450
  },
];

export function SoundbarDisplay() {
  const marqueeItems = [...SOUNDBARS, ...SOUNDBARS, ...SOUNDBARS]; 

  return (
    <section className="py-12 bg-white dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-800 transition-colors duration-300">
      <div className="container mx-auto px-4 mb-8">
        <div className="flex items-center justify-between">
            <div>
                <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">Immersive Audio</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white font-heading">
                    Soundbars
                </h2>
            </div>
            
            <Link href="/products?category=soundbar">
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
