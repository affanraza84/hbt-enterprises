"use client";

import Link from "next/link";
import { ProductCard } from "@/components/product/ProductCard";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

// Mock Data for Refrigerators
const REFRIGERATORS: Product[] = [
  {
    id: "ref-1", name: "Samsung 236 L 3 Star Digital Inverter Frost Free Double Door", price: 24990, originalPrice: 31990,
    slug: "samsung-236l-double-door", category: "Refrigerator", images: [], description: "", stock: 12, createdAt: new Date(), updatedAt: new Date(), rating: 4.6, reviewsCount: 280
  },
  {
    id: "ref-2", name: "LG 242 L 3 Star Smart Inverter Frost-Free Double Door", price: 25990, originalPrice: 33990,
    slug: "lg-242l-double-door", category: "Refrigerator", images: [], description: "", stock: 15, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 210
  },
  {
    id: "ref-3", name: "Whirlpool 265 L 3 Star Inverter Frost-Free Double Door", price: 27490, originalPrice: 35100,
    slug: "whirlpool-265l-double-door", category: "Refrigerator", images: [], description: "", stock: 10, createdAt: new Date(), updatedAt: new Date(), rating: 4.4, reviewsCount: 150
  },
  {
    id: "ref-4", name: "Haier 190 L 4 Star Single Door Refrigerator", price: 14990, originalPrice: 19900,
    slug: "haier-190l-single-door", category: "Refrigerator", images: [], description: "", stock: 18, createdAt: new Date(), updatedAt: new Date(), rating: 4.3, reviewsCount: 120
  },
  {
    id: "ref-5", name: "Godrej 223 L 3 Star Nano Shield Technology Inverter Frost Free", price: 22990, originalPrice: 28990,
    slug: "godrej-223l-double-door", category: "Refrigerator", images: [], description: "", stock: 8, createdAt: new Date(), updatedAt: new Date(), rating: 4.2, reviewsCount: 90
  },
  {
    id: "ref-6", name: "Samsung 653 L 3 Star Convertible 5-in-1 Side by Side Refrigerator", price: 79990, originalPrice: 103000,
    slug: "samsung-653l-side-by-side", category: "Refrigerator", images: [], description: "", stock: 5, createdAt: new Date(), updatedAt: new Date(), rating: 4.8, reviewsCount: 350
  },
];

export function RefrigeratorDisplay() {
  const marqueeItems = [...REFRIGERATORS, ...REFRIGERATORS, ...REFRIGERATORS]; 

  return (
    <section className="py-12 bg-white dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-800 transition-colors duration-300">
      <div className="container mx-auto px-4 mb-8">
        <div className="flex items-center justify-between">
            <div>
                <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">Fresh & Cool</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white font-heading">
                    Refrigerators
                </h2>
            </div>
            
            <Link href="/products?category=refrigerator">
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
