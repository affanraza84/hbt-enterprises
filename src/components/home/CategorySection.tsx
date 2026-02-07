"use client";

import Link from "next/link";
import { ProductCard } from "@/components/product/ProductCard";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

interface CategorySectionProps {
  title: string;
  subtitle: string;
  products: Product[];
  viewAllLink: string;
}

export function CategorySection({ title, subtitle, products, viewAllLink }: CategorySectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 350; // Approx card width + margin
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  if (products.length === 0) return null;

  return (
    <section className="py-12 bg-white dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-800 transition-colors duration-300">
      <div className="container mx-auto px-4 mb-8">
        <div className="flex items-center justify-between">
            <div>
                <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">{subtitle}</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white font-heading">
                    {title}
                </h2>
            </div>
            
            <div className="flex items-center gap-4">
                <div className="flex gap-2">
                    <button 
                        onClick={() => scroll("left")}
                        className="w-10 h-10 rounded-full border border-neutral-200 dark:border-neutral-700 flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent dark:text-white transition-all disabled:opacity-50"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button 
                        onClick={() => scroll("right")}
                        className="w-10 h-10 rounded-full border border-neutral-200 dark:border-neutral-700 flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent dark:text-white transition-all disabled:opacity-50"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>

                <Link href={viewAllLink} className="hidden sm:block">
                    <Button variant="outline" className="gap-2 border-neutral-200 dark:border-neutral-700 hover:border-accent hover:text-accent dark:text-neutral-300 dark:hover:text-accent transition-all group">
                        View All
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </Link>
            </div>
        </div>
      </div>

      <div className="relative w-full group px-4 sm:px-0">
         <div 
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x"
         >
            {products.map((product) => (
                <div key={product.id} className="w-[280px] sm:w-[320px] mr-6 flex-shrink-0 snap-start">
                    <ProductCard product={product} />
                </div>
            ))}
         </div>
      </div>
    </section>
  );
}
