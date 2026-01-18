"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Star, ShieldCheck, Truck, Zap } from "lucide-react";

// Product Data for the Hero Carousel
// Product Data for the Hero Carousel
const heroProducts = [
  {
    id: 1,
    name: "Premium Wireless Audio",
    tagline: "Immersive Soundscape",
    description: "Experience crystal-clear sound with active noise cancellation and 40-hour battery life. Designed for audiophiles who demand perfection.",
    price: "₹24,999",
    rating: 4.9,
    image: "/images/hero/headphone.png",
    accent: "bg-blue-500", // Tailwind color class for blobs
    link: "/products?category=audio"
  },
  {
    id: 2,
    name: "Next-Gen Smartwatch",
    tagline: "Your Health, Elevated",
    description: "Track your fitness, monitor your health, and stay connected with a stunning bezel-less display. The future of wearables is here.",
    price: "₹34,999",
    rating: 4.8,
    image: "/images/hero/smartwatch.png",
    accent: "bg-purple-500",
    link: "/products?category=wearables"
  },
  {
    id: 3,
    name: "Console Gaming",
    tagline: "Power Your Play",
    description: "Unleash next-level gaming performance with ultra-fast loading and ray-tracing graphics. Dominate the competition.",
    price: "₹49,999",
    rating: 5.0,
    image: "/images/hero/carousel/gaming.png",
    accent: "bg-emerald-500",
    link: "/products?category=gaming"
  },
  {
    id: 4,
    name: "Smart Living Hub",
    tagline: "Control Your World",
    description: "Seamlessly connect and control all your smart devices from one intuitive hub. Simplify your life with intelligent automation.",
    price: "₹16,999",
    rating: 4.7,
    image: "/images/hero/carousel/smarthome.png",
    accent: "bg-orange-500",
    link: "/products?category=smarthome"
  }
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroProducts.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentProduct = heroProducts[currentIndex];

  return (
    <section className="relative w-full min-h-[90vh] md:min-h-[85vh] bg-neutral-light overflow-hidden flex items-center">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 transition-colors duration-1000 ${currentProduct.accent}`} />
        <div className={`absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[100px] opacity-15 transition-colors duration-1000 ${currentProduct.accent}`} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full h-full py-12 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-8 items-center h-full">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-8 order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary/80 text-xs font-semibold tracking-wide uppercase"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>New Arrivals 2026</span>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentProduct.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-primary leading-[1.1] tracking-tight">
                  {currentProduct.tagline}
                </h1>
                <p className="text-base md:text-lg text-neutral-dark max-w-lg mx-auto md:mx-0 leading-relaxed">
                  {currentProduct.description}
                </p>
              </motion.div>
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Button size="xl" className="rounded-full px-8 !bg-primary !text-neutral-light hover:brightness-110 shadow-lg shadow-primary/20">
                Shop Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="xl" className="rounded-full px-8 border-neutral-default text-primary hover:bg-neutral-default/50">
                View Details
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-center gap-6 pt-4 text-sm font-medium text-neutral-dark"
            >
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-accent" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <span>2 Year Warranty</span>
              </div>
              <div className="flex items-center gap-1">
                 <div className="flex">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-warning text-warning" />
                    ))}
                 </div>
                 <span className="ml-1 text-primary">({currentProduct.rating})</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Product Image */}
          <div className="relative order-1 md:order-2 flex justify-center items-center h-[400px] md:h-[600px]">
             {/* Circular Backdrop */}
             <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-primary/5 rounded-full animate-[spin_60s_linear_infinite]" />
             <div className="absolute w-[250px] h-[250px] md:w-[400px] md:h-[400px] border border-accent/10 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
             
             <AnimatePresence mode="wait">
               <motion.div
                 key={currentProduct.id}
                 initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                 animate={{ opacity: 1, scale: 1, rotate: 0 }}
                 exit={{ opacity: 0, scale: 1.1, rotate: -5 }}
                 transition={{ 
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    duration: 0.6 
                 }}
                 className="relative w-full h-full max-w-[500px] max-h-[500px]"
               >
                 <Image
                   src={currentProduct.image}
                   alt={currentProduct.name}
                   fill
                   className="object-contain drop-shadow-2xl"
                   priority
                 />
               </motion.div>
             </AnimatePresence>

             {/* Floating Price Tag */}
             <AnimatePresence mode="wait">
                <motion.div
                    key={currentProduct.price}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ delay: 0.3 }}
                    className="absolute -bottom-4 right-4 md:bottom-10 md:right-10 bg-neutral-light border border-neutral-default p-4 rounded-xl shadow-2xl z-20"
                >
                    <p className="text-xs text-neutral-dark font-medium mb-1">Starting at</p>
                    <p className="text-2xl font-bold text-primary">{currentProduct.price}</p>
                </motion.div>
             </AnimatePresence>
          </div>

        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {heroProducts.map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentIndex ? "w-8 bg-accent" : "w-2 bg-neutral-default hover:bg-neutral-dark"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                />
            ))}
        </div>
      </div>
    </section>
  );
}