"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const BRANDS = [
  { id: 1, name: "Sony", logo: "https://cdn.simpleicons.org/sony/000000" },
  { id: 2, name: "Samsung", logo: "https://cdn.simpleicons.org/samsung" },
  { id: 3, name: "LG", logo: "https://cdn.simpleicons.org/lg" },
  { id: 5, name: "HP", logo: "https://cdn.simpleicons.org/hp" },
  { id: 6, name: "Apple", logo: "https://cdn.simpleicons.org/apple" },
  { id: 9, name: "JBL", logo: "https://cdn.simpleicons.org/jbl" },
  { id: 10, name: "OnePlus", logo: "https://cdn.simpleicons.org/oneplus" },
  { id: 11, name: "Lenovo", logo: "https://cdn.simpleicons.org/lenovo/000000" },
  { id: 13, name: "Realme", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Realme_logo.svg" },
  { id: 14, name: "Xiaomi", logo: "https://cdn.simpleicons.org/xiaomi" },
];

export function BrandShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300;
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="py-16 bg-neutral-50 dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-neutral-900 dark:text-white mb-4">
            Top Brands
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white dark:bg-neutral-800 rounded-full shadow-lg flex items-center justify-center text-neutral-900 dark:text-white hover:bg-accent hover:text-white dark:hover:bg-accent transition-all opacity-0 group-hover:opacity-100 disabled:opacity-50"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Scroll Area */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide py-4 px-2 snap-x"
          >
            {BRANDS.map((brand) => (
              <div
                key={brand.id}
                className="flex-shrink-0 w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] bg-white rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex items-center justify-center snap-center cursor-pointer border border-neutral-100 dark:border-none p-6"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 160px, 180px"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white dark:bg-neutral-800 rounded-full shadow-lg flex items-center justify-center text-neutral-900 dark:text-white hover:bg-accent hover:text-white dark:hover:bg-accent transition-all opacity-0 group-hover:opacity-100"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
