"use client";

import Link from "next/link";
import { 
  Smartphone, 
  Laptop, 
  Headphones, 
  Gamepad2, 
  Tv, 
  Wind, 
  Printer, 
  Refrigerator, 
  Microwave, 
  Fan,
  Lightbulb
} from "lucide-react";

import { motion } from "framer-motion";

// Expanded categories based on user request and modern tech store needs
const categories = [
  { name: "Air Conditioner", icon: Wind, href: "/products/category/air-conditioner", animation: "spin" },
  { name: "Laptops & Printer", icon: Laptop, href: "/products/category/laptops-printer", animation: "scale" },
  { name: "Home Appliances", icon: Refrigerator, href: "/products/category/home-appliances", animation: "wiggle" },
  { name: "Home Entertainment", icon: Tv, href: "/products/category/home-entertainment", animation: "pulse" },
  { name: "Smart Phone", icon: Smartphone, href: "/products/category/smart-phone", animation: "shake" },
  { name: "Microwaves", icon: Microwave, href: "/products/category/microwaves", animation: "scale" },
  { name: "Air Coolers", icon: Fan, href: "/products/category/air-coolers", animation: "spin" },
  { name: "Smart Home", icon: Lightbulb, href: "/products/category/smart-home", animation: "pulse" },
  { name: "Accessories", icon: Headphones, href: "/products/category/accessories", animation: "bounce" },
  { name: "Gaming", icon: Gamepad2, href: "/products/category/gaming", animation: "shake" },
];

const iconVariants = {
  spin: { rotate: 360, transition: { duration: 2, repeat: Infinity, ease: "linear" } },
  shake: { x: [-2, 2, -2, 2, 0], transition: { duration: 0.5, repeat: Infinity, repeatDelay: 1 } },
  pulse: { scale: [1, 1.15, 1], transition: { duration: 1.5, repeat: Infinity } },
  bounce: { y: [0, -5, 0], transition: { duration: 1, repeat: Infinity } },
  wiggle: { rotate: [0, -10, 10, -10, 10, 0], transition: { duration: 1, repeat: Infinity, repeatDelay: 1 } },
  scale: { scale: [1, 1.1, 1], transition: { duration: 2, repeat: Infinity } },
  hover: (custom: string) => {
    switch (custom) {
      case "spin": return { rotate: 360, transition: { duration: 2, repeat: Infinity, ease: "linear" } };
      case "shake": return { x: [-3, 3, -3, 3, 0], rotate: [0, -5, 5, 0], transition: { duration: 0.5 } };
      case "pulse": return { scale: 1.2, filter: "brightness(1.2)", transition: { duration: 0.3 } };
      case "bounce": return { y: -8, transition: { type: "spring", stiffness: 300 } };
      case "wiggle": return { rotate: [0, -15, 15, -15, 15, 0], transition: { duration: 0.6 } };
      case "scale": return { scale: 1.15, transition: { type: "spring", stiffness: 300 } };
      default: return { scale: 1.1 };
    }
  }
};

export function CategorySlider() {
  return (
    <section className="py-10 border-b border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900/30">
      <div className="container mx-auto px-4">
        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 justify-start sm:justify-center">
            {categories.map((cat, idx) => (
                <Link 
                    key={idx} 
                    href={cat.href}
                    className="flex flex-col items-center gap-4 snap-center flex-shrink-0 group min-w-[110px]"
                >
                    <div className="relative">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Icon Container */}
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 flex items-center justify-center relative z-10 
                                      border border-neutral-200 dark:border-neutral-700 group-hover:border-accent dark:group-hover:border-accent
                                      shadow-sm group-hover:shadow-[0_0_20px_rgba(0,198,255,0.4)] transition-all duration-300 ease-out">
                             <motion.div
                                variants={iconVariants}
                                whileHover={cat.animation}
                                custom={cat.animation}
                             >
                               <cat.icon 
                                  className="w-9 h-9 text-neutral-500 dark:text-neutral-400 group-hover:text-accent transition-colors duration-300 stroke-[1.5px]" 
                               />
                             </motion.div>
                        </div>
                    </div>
                    
                    <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400 text-center whitespace-normal max-w-[110px] leading-tight 
                                   group-hover:text-primary dark:group-hover:text-white transition-colors duration-300">
                        {cat.name}
                    </span>
                </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
