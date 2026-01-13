"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Smartphone, Laptop, Watch, Headphones, Gamepad2, Tv, Speaker, Camera } from "lucide-react";
import { Button } from "@/components/ui/Button";

const categories = [
  { name: "Phones", icon: Smartphone, href: "/products/category/smartphone", count: "125 Items" },
  { name: "Laptops", icon: Laptop, href: "/products/category/laptop", count: "89 Items" },
  { name: "Watches", icon: Watch, href: "/products/category/watch", count: "48 Items" },
  { name: "Audio", icon: Headphones, href: "/products/category/audio", count: "156 Items" },
  { name: "Gaming", icon: Gamepad2, href: "/products/category/gaming", count: "64 Items" },
  { name: "TV", icon: Tv, href: "/products/category/tv", count: "32 Items" },
  { name: "Speakers", icon: Speaker, href: "/products/category/audio", count: "78 Items" },
  { name: "Cameras", icon: Camera, href: "/products/category/camera", count: "24 Items" },
];

export function CategorySlider() {
  return (
    <section className="py-24 overflow-hidden bg-neutral-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
           <div>
              <h2 className="text-3xl font-bold text-primary font-heading mb-2">Detailed Categories</h2>
              <p className="text-neutral-500 dark:text-neutral-400">Explore our extensive catalog by department.</p>
           </div>
           <Link href="/products" className="hidden sm:block">
              <Button variant="ghost" className="group">
                  View All <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
           </Link>
        </div>
        
        <div className="relative">
             {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-neutral-light to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-neutral-light to-transparent z-10 pointer-events-none" />

            <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
                {categories.map((cat, idx) => (
                    <Link 
                        key={idx} 
                        href={cat.href}
                        className="snap-start flex-shrink-0 group"
                    >
                        <motion.div 
                            whileHover={{ y: -5 }}
                            className="w-48 h-56 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-default p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-accent/10"
                        >
                            <div className="w-16 h-16 rounded-full bg-neutral-100 dark:bg-neutral-700 flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                <cat.icon className="w-8 h-8" />
                            </div>
                            <div className="text-center">
                                <h3 className="font-bold text-primary mb-1">{cat.name}</h3>
                                <p className="text-xs text-neutral-500 dark:text-neutral-400">{cat.count}</p>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
