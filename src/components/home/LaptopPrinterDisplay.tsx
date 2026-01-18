"use client";

import Link from "next/link";
import { ProductCard } from "@/components/product/ProductCard";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

// Mock Data for Laptops & Printers
const LAPTOPS_PRINTERS: Product[] = [
  {
    id: "lp-1", name: "Apple MacBook Air M3 Chip 13-inch", price: 114900, originalPrice: 134900,
    slug: "macbook-air-m3", category: "Laptop", images: [], description: "", stock: 15, createdAt: new Date(), updatedAt: new Date(), rating: 4.9, reviewsCount: 320
  },
  {
    id: "lp-2", name: "HP Pavilion 15 12th Gen Intel Core i5", price: 62990, originalPrice: 78000,
    slug: "hp-pavilion-15", category: "Laptop", images: [], description: "", stock: 18, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 210
  },
  {
    id: "lp-3", name: "Canon Pixma G3000 All-in-One Ink Tank Colour Printer", price: 12499, originalPrice: 15995,
    slug: "canon-pixma-g3000", category: "Printer", images: [], description: "", stock: 25, createdAt: new Date(), updatedAt: new Date(), rating: 4.4, reviewsCount: 500
  },
  {
    id: "lp-4", name: "Dell XPS 13 Plus Laptop Evo Core i7", price: 199990, originalPrice: 240000,
    slug: "dell-xps-13", category: "Laptop", images: [], description: "", stock: 5, createdAt: new Date(), updatedAt: new Date(), rating: 4.7, reviewsCount: 150
  },
  {
    id: "lp-5", name: "ASUS ROG Zephyrus G14 Gaming Laptop", price: 149990, originalPrice: 180990,
    slug: "asus-rog-g14", category: "Laptop", images: [], description: "", stock: 8, createdAt: new Date(), updatedAt: new Date(), rating: 4.8, reviewsCount: 220
  },
  {
    id: "lp-6", name: "Epson EcoTank L3250 Wi-Fi All-in-One Ink Tank Printer", price: 13999, originalPrice: 16999,
    slug: "epson-ecotank-l3250", category: "Printer", images: [], description: "", stock: 20, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 400
  },
];

export function LaptopPrinterDisplay() {
  const marqueeItems = [...LAPTOPS_PRINTERS, ...LAPTOPS_PRINTERS, ...LAPTOPS_PRINTERS]; 

  return (
    <section className="py-12 bg-white dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-800 transition-colors duration-300">
      <div className="container mx-auto px-4 mb-8">
        <div className="flex items-center justify-between">
            <div>
                <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">Work & Play</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white font-heading">
                    Laptops & Printers
                </h2>
            </div>
            
            <Link href="/products?category=laptops">
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
