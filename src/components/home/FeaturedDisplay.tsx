"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function FeaturedDisplay() {
  return (
    <section className="py-12 bg-neutral-light dark:bg-neutral-900/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Banner 1 - New Arrivals */}
            <div className="group relative overflow-hidden rounded-2xl h-[400px] md:h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-900 transition-transform duration-700 group-hover:scale-105" />
                {/* Simulated Image Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    <span className="text-9xl font-black text-primary">NEW</span>
                </div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/60 to-transparent">
                    <span className="text-accent text-sm font-bold uppercase tracking-widest mb-2">Fresh Drops</span>
                    <h3 className="text-3xl font-bold text-white mb-4">New Arrivals</h3>
                    <Link href="/products?sort=newest">
                        <Button className="bg-white text-black hover:bg-neutral-200 border-none w-full sm:w-auto">
                            Shop Now
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Banner 2 - Best Sellers */}
            <div className="group relative overflow-hidden rounded-2xl h-[400px] md:h-[500px]">
                 <div className="absolute inset-0 bg-gradient-to-bl from-accent/20 to-blue-600/20 dark:from-accent/10 dark:to-blue-900/40 transition-transform duration-700 group-hover:scale-105" />
                 {/* Simulated Image Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    <span className="text-9xl font-black text-primary">HOT</span>
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/60 to-transparent">
                    <span className="text-yellow-400 text-sm font-bold uppercase tracking-widest mb-2">Most Loved</span>
                    <h3 className="text-3xl font-bold text-white mb-4">Best Sellers</h3>
                    <Link href="/products?sort=popular">
                        <Button className="bg-white text-black hover:bg-neutral-200 border-none w-full sm:w-auto">
                            View Top Rated
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Banner 3 - Accessories (Hidden on smaller md screens to balance grid if needed, or shown as 3rd column) */}
            <div className="group relative overflow-hidden rounded-2xl h-[400px] md:h-[500px] md:col-span-2 lg:col-span-1">
                 <div className="absolute inset-0 bg-gradient-to-t from-neutral-800 to-neutral-700 transition-transform duration-700 group-hover:scale-105" />
                 
                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/60 to-transparent">
                    <span className="text-neutral-300 text-sm font-bold uppercase tracking-widest mb-2">Essentials</span>
                    <h3 className="text-3xl font-bold text-white mb-4">Accessories</h3>
                    <Link href="/products/category/accessories">
                        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black w-full sm:w-auto">
                            Browse Collection
                        </Button>
                    </Link>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
}
