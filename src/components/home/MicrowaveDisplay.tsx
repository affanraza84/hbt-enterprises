"use client";

import Link from "next/link";
import { ProductCard } from "@/components/product/ProductCard";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

// Mock Data for Microwaves
const MICROWAVES: Product[] = [
  {
    id: "mw-1", name: "LG 28 L Convection Microwave Oven", price: 11990, originalPrice: 16490,
    slug: "lg-28l-convection", category: "Microwave", images: [], description: "", stock: 25, createdAt: new Date(), updatedAt: new Date(), rating: 4.6, reviewsCount: 380
  },
  {
    id: "mw-2", name: "Samsung 28 L Convection Microwave Oven", price: 11590, originalPrice: 15500,
    slug: "samsung-28l-convection", category: "Microwave", images: [], description: "", stock: 20, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 310
  },
  {
    id: "mw-3", name: "IFB 20 L Convection Microwave Oven", price: 9490, originalPrice: 13490,
    slug: "ifb-20l-convection", category: "Microwave", images: [], description: "", stock: 15, createdAt: new Date(), updatedAt: new Date(), rating: 4.4, reviewsCount: 190
  },
  {
    id: "mw-4", name: "Panasonic 27 L Convection Microwave Oven", price: 12990, originalPrice: 16990,
    slug: "panasonic-27l-convection", category: "Microwave", images: [], description: "", stock: 12, createdAt: new Date(), updatedAt: new Date(), rating: 4.7, reviewsCount: 220
  },
  {
    id: "mw-5", name: "Bajaj 17 L Solo Microwave Oven", price: 4990, originalPrice: 6500,
    slug: "bajaj-17l-solo", category: "Microwave", images: [], description: "", stock: 30, createdAt: new Date(), updatedAt: new Date(), rating: 4.3, reviewsCount: 150
  },
  {
    id: "mw-6", name: "Morphy Richards 25 L Convection Microwave Oven", price: 10990, originalPrice: 14990,
    slug: "morphy-richards-25l", category: "Microwave", images: [], description: "", stock: 10, createdAt: new Date(), updatedAt: new Date(), rating: 4.4, reviewsCount: 110
  },
];

export function MicrowaveDisplay() {
  const marqueeItems = [...MICROWAVES, ...MICROWAVES, ...MICROWAVES]; 

  return (
    <section className="py-12 bg-white dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-800 transition-colors duration-300">
      <div className="container mx-auto px-4 mb-8">
        <div className="flex items-center justify-between">
            <div>
                <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">Smart Kitchen</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white font-heading">
                    Microwaves
                </h2>
            </div>
            
            <Link href="/products?category=microwave">
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
