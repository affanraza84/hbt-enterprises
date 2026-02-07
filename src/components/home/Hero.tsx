"use client";

import { ProductService } from "@/services/product.service";
import { Product } from "@/types/product";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ShoppingBag, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export function Hero() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const allProducts = await ProductService.getProducts();
        // Get 30 products for the 5x6 matrix
        setProducts(allProducts.slice(0, 30));
      } catch (error) {
        console.error("Failed to fetch products for hero matrix", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="relative w-full bg-slate-50 dark:bg-neutral-950 py-12 px-4 sm:px-6 lg:px-8 min-h-[70vh] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-blob" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-2000" />
          <div className="absolute top-[20%] left-[20%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-[1920px] mx-auto relative z-10">
          {/* Header */}
          <div className="mb-12 text-center space-y-4">
            
            <motion.h2 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight"
            >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 dark:from-white dark:via-neutral-300 dark:to-white">
                    Curated for Your Lifestyle
                </span>
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto"
            >
                Discover the latest in premium tech, tailored just for you.
            </motion.p>
          </div>

          {/* 
             Matrix Grid
          */}
          {loading ? (
             <div className="grid grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 animate-pulse">
                {[...Array(30)].map((_, i) => (
                    <div key={i} className="aspect-[3/4] bg-neutral-200 dark:bg-neutral-800 rounded-2xl" />
                ))}
             </div>
          ) : (
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 xl:gap-5">
                {products.map((product, index) => (
                    <Link href={`/products/${product.slug}`} key={product.id || index} className="group block h-full select-none">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.03 }}
                        className="relative aspect-[3/4] bg-white dark:bg-neutral-800/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ring-1 ring-neutral-200/50 dark:ring-neutral-700/50 group-hover:ring-indigo-500/30 dark:group-hover:ring-indigo-400/30 group-hover:-translate-y-1 h-full flex flex-col group/card"
                    >
                        {/* Image Container */}
                        <div className="relative flex-1 p-0 bg-gradient-to-b from-neutral-50/50 to-white/50 dark:from-neutral-800/50 dark:to-neutral-900/50 overflow-hidden">
                            <div className="relative w-full h-full mix-blend-multiply dark:mix-blend-normal">
                                <Image 
                                    src={product.images[0] || '/placeholder.png'} 
                                    alt={product.name}
                                    fill
                                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 12vw"
                                    className="object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                                />
                            </div>
                            
                            {/* Discount Badge */}
                            {product.originalPrice && product.originalPrice > product.price && (
                                <div className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                                    -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                                </div>
                            )}


                        </div>
                        
                        {/* Content */}
                        <div className="p-4 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm border-t border-neutral-100 dark:border-neutral-700 relative z-20">
                            <p className="text-[10px] text-indigo-600 dark:text-indigo-400 font-bold tracking-wide uppercase mb-1 line-clamp-1">
                                {product.brand || product.category}
                            </p>
                            <h3 className="text-neutral-900 dark:text-neutral-100 text-sm font-semibold leading-tight line-clamp-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                {product.name}
                            </h3>
                            <div className="flex items-center gap-2 mt-2">
                                <p className="text-neutral-900 dark:text-white text-base font-bold">
                                    ₹{product.price.toLocaleString()}
                                </p>
                                {product.originalPrice && (
                                    <p className="text-neutral-400 text-xs line-through">
                                        ₹{product.originalPrice.toLocaleString()}
                                    </p>
                                )}
                            </div>
                        </div>
                    </motion.div>
                    </Link>
                ))}
            </div>
          )}
      </div>
    </section>
  );
}