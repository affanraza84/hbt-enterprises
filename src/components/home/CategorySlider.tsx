"use client";

import Link from "next/link";
import { Smartphone, Laptop, Watch, Headphones, Gamepad2, Tv, Speaker, Camera, Cable, HardDrive } from "lucide-react";

// Expanded categories for "Stories" feel
const categories = [
  { name: "Cases", icon: Smartphone, href: "/products/category/cases" },
  { name: "Audio", icon: Headphones, href: "/products/category/audio" },
  { name: "Cables", icon: Cable, href: "/products/category/cables" },
  { name: "Chargers", icon: HardDrive, href: "/products/category/chargers" },
  { name: "Gaming", icon: Gamepad2, href: "/products/category/gaming" },
  { name: "Watches", icon: Watch, href: "/products/category/watch" },
  { name: "Laptop", icon: Laptop, href: "/products/category/laptop" },
  { name: "Speakers", icon: Speaker, href: "/products/category/speakers" },
  { name: "Camera", icon: Camera, href: "/products/category/camera" },
  { name: "Smart TV", icon: Tv, href: "/products/category/tv" },
];

export function CategorySlider() {
  return (
    <section className="py-8 sm:py-12 border-b border-neutral-default bg-white dark:bg-neutral-900/50">
      <div className="container mx-auto px-4">
        <div className="flex gap-4 sm:gap-8 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 justify-start sm:justify-center">
            {categories.map((cat, idx) => (
                <Link 
                    key={idx} 
                    href={cat.href}
                    className="flex flex-col items-center gap-2 snap-center flex-shrink-0 group"
                >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-[2px] bg-gradient-to-tr from-accent to-blue-600 group-hover:scale-105 transition-transform duration-300">
                        <div className="w-full h-full rounded-full bg-white dark:bg-neutral-900 border-2 border-transparent flex items-center justify-center relative overflow-hidden">
                             {/* Simple icon for now, could be an image later */}
                             <cat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary group-hover:text-accent transition-colors" />
                        </div>
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-primary text-center whitespace-nowrap">
                        {cat.name}
                    </span>
                </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
