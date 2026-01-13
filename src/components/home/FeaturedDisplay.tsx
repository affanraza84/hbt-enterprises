"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function FeaturedDisplay() {
  return (
    <section className="py-24 bg-white dark:bg-neutral-800/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary font-heading mb-4">Curated For You</h2>
            <p className="text-neutral-600 dark:text-neutral-400">
                Hand-picked selections of our most innovative and high-demand products.
                Discover what&apos;s trending in the tech world.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 min-h-[600px]">
            {/* Main Feature - Large Square */}
            <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-3xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-default">
                 {/* Background Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-accent/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                     <span className="text-[10rem] opacity-5 select-none font-black text-primary">VR</span>
                </div>
                
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                         <span className="inline-block px-3 py-1 rounded-full bg-accent text-white text-xs font-bold mb-3">
                            Trending Now
                         </span>
                        <h3 className="text-3xl font-bold text-white mb-2">Virtual Reality Pro</h3>
                        <p className="text-neutral-300 mb-6 line-clamp-2">
                            Immerse yourself in new worlds with ultra-low latency and 8K resolution.
                        </p>
                        <Button variant="primary" className="w-full sm:w-auto">Explore VR</Button>
                    </div>
                </div>
            </div>

            {/* Sub Feature 1 - Tall Vertical */}
            <div className="md:col-span-1 md:row-span-2 group relative overflow-hidden rounded-3xl bg-neutral-900 border border-neutral-800">
                 <div className="absolute inset-0 bg-gradient-to-b from-neutral-800 to-black opacity-50" />
                 <div className="absolute inset-x-0 top-0 p-6 z-10">
                     <h3 className="text-xl font-bold text-white mb-1">Premium Audio</h3>
                     <p className="text-sm text-neutral-400">Studio quality sound</p>
                 </div>
                 
                 <div className="absolute inset-0 flex items-center justify-center">
                     {/* Headphones Visual Placeholder */}
                     <div className="w-32 h-32 rounded-full border-4 border-neutral-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                         <div className="w-24 h-24 rounded-full bg-neutral-800 animate-pulse" />
                     </div>
                 </div>

                 <div className="absolute inset-x-0 bottom-0 p-6">
                    <Link href="/products/category/audio" className="text-accent text-sm font-bold flex items-center gap-2 hover:underline">
                        Shop Collection →
                    </Link>
                 </div>
            </div>

            {/* Sub Feature 2 - Small Box */}
            <div className="md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-3xl bg-white dark:bg-neutral-800 border border-neutral-default p-6 flex flex-col justify-between hover:border-accent transition-colors">
                 <div>
                    <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 flex items-center justify-center mb-4">
                        <span className="font-bold">Hot</span>
                    </div>
                    <h3 className="text-lg font-bold text-primary">Smart Home</h3>
                 </div>
                 <div className="flex justify-end">
                    <img src="/placeholder-smart-home.png" alt="" className="w-20 h-20 opacity-50 grayscale group-hover:grayscale-0 transition-all" />
                 </div>
            </div>

             {/* Sub Feature 3 - Small Box */}
             <div className="md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-3xl bg-accent/10 border border-accent/20 p-6 flex flex-col justify-between">
                <div>
                     <h3 className="text-lg font-bold text-accent mb-2">Join HBT Club</h3>
                     <p className="text-sm text-primary/80">Get exclusive rewards and early access.</p>
                 </div>
                 <Button variant="outline" size="sm" className="mt-4 border-accent text-accent hover:bg-accent hover:text-white">
                    Sign Up Free
                 </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
