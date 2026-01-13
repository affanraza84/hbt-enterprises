"use client";

import { Button } from "@/components/ui/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-neutral-light"
    >
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent/20 rounded-full blur-[120px] opacity-40 mix-blend-screen dark:mix-blend-screen" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] opacity-30" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-bold mb-6 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-accent mr-2 animate-pulse" />
              New Series X Release
            </motion.div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-primary mb-6 font-heading leading-tight">
              Upgrade Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-600">
                Digital Reality
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Experience the pinnacle of engineering with our curated collection of premium electronics. 
              Designed for professionals, engineered for performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/products">
                <Button size="xl" className="w-full sm:w-auto shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-shadow">
                  Shop Collection
                </Button>
              </Link>
              <Link href="/products?sort=newest">
                <Button variant="outline" size="xl" className="w-full sm:w-auto">
                  View New Arrivals
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div 
            style={{ y }}
            className="relative hidden lg:block"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -12 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring" }}
              className="relative z-10"
            >
               {/* Main Product Visual Placeholder */}
               <div className="relative aspect-square w-full max-w-lg mx-auto bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-[3rem] border border-white/20 shadow-2xl flex items-center justify-center group">
                  <div className="absolute inset-0 bg-accent/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  {/* Floating Elements */}
                  <motion.div 
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-20"
                  >
                    <div className="w-64 h-64 bg-gradient-to-tr from-accent to-blue-600 rounded-3xl shadow-xl flex items-center justify-center transform rotate-6 group-hover:rotate-12 transition-transform duration-500">
                      <div className="w-56 h-56 bg-neutral-900 rounded-2xl flex items-center justify-center">
                         <span className="text-6xl">⚡️</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Glass Card 1 */}
                  <motion.div 
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute -left-12 bottom-20 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <div>
                        <p className="text-xs text-neutral-400">Status</p>
                        <p className="text-sm font-bold text-white">In Stock</p>
                      </div>
                    </div>
                  </motion.div>

                   {/* Glass Card 2 */}
                   <motion.div 
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="absolute -right-8 top-20 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      </div>
                      <div>
                        <p className="text-xs text-neutral-400">Power</p>
                        <p className="text-sm font-bold text-white">Ultra Fast</p>
                      </div>
                    </div>
                  </motion.div>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
