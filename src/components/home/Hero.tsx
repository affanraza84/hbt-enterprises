"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const carouselData = [
  {
    src: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=1920&q=80",
    quote: "Premium Laptops",
    subtext: "Powerful performance meets elegant design. Ultra-fast processors and stunning displays for professionals.",
    link: "/products?category=laptops"
  },
  {
    src: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=1920&q=80",
    quote: "Wireless Audio",
    subtext: "Immerse yourself in crystal-clear sound. Premium headphones with active noise cancellation.",
    link: "/products?category=audio"
  },
  {
    src: "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?w=1920&q=80",
    quote: "Smart Displays",
    subtext: "Experience vivid colors and infinite contrast. 4K resolution with cutting-edge technology.",
    link: "/products?category=displays"
  },
  {
    src: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1920&q=80",
    quote: "Next-Gen Mobile",
    subtext: "The future in your pocket. Revolutionary cameras, blazing performance, and all-day battery life.",
    link: "/products?category=smartphones"
  }
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Preload images
    let loadedCount = 0;
    carouselData.forEach((imageObj) => {
      const img = new window.Image();
      img.onload = () => {
        loadedCount++;
        if (loadedCount === carouselData.length) {
          setIsLoaded(true);
        }
      };
      img.src = imageObj.src;
    });
  }, []);

  useEffect(() => {
    if (isLoaded) {
      setProgress(0);
      
      const nextSlide = () => {
        setDirection(1);
        setCurrent((prev) => (prev + 1) % carouselData.length);
        setProgress(0);
      };

      intervalRef.current = setInterval(nextSlide, 6000);

      progressIntervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + (100 / 60); // Smooth progress over 6 seconds
        });
      }, 100);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [isLoaded]);

  const goToSlide = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
    setProgress(0);
    
    if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setDirection(1);
            setCurrent((prev) => (prev + 1) % carouselData.length);
            setProgress(0);
        }, 6000);
    }
    
    if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = setInterval(() => {
          setProgress((prev) => {
            if (prev >= 100) return 0;
            return prev + (100 / 60);
          });
        }, 100);
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      opacity: 0,
      scale: 1.1,
      rotateY: direction > 0 ? 15 : -15,
    }),
    center: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      opacity: 0,
      scale: 0.9,
      rotateY: direction > 0 ? -15 : 15,
    })
  };

  const contentVariants = {
    enter: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    center: {
      opacity: 1,
      y: 0,
      scale: 1
    },
    exit: {
      opacity: 0,
      y: -50,
      scale: 0.9
    }
  };

  return (
    <section 
      className="relative w-full h-[85vh] sm:h-[70vh] md:h-[85vh] overflow-hidden bg-neutral-950"
      role="region"
      aria-label="Hero carousel"
      style={{ perspective: '2000px' }}
    >
      {!isLoaded && (
        <div className="absolute inset-0 bg-neutral-950 z-20 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="h-12 w-12 rounded-full border-4 border-accent border-t-transparent animate-spin" />
                <p className="text-neutral-400 text-sm font-light tracking-wider">Loading Experience...</p>
            </div>
        </div>
      )}

      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              opacity: { duration: 0.7, ease: "easeInOut" },
              scale: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
              rotateY: { duration: 1, ease: [0.22, 1, 0.36, 1] }
            }}
            className="absolute inset-0 w-full h-full"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Image
              src={carouselData[current].src}
              alt={carouselData[current].quote}
              fill
              className="object-cover object-center"
              priority={current === 0}
              quality={100}
            />

            {/* Dynamic Gradient Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle at 30% 50%, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.9) 100%)'
              }}
            />
            
            {/* Vignette Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

            <div className="absolute inset-0 flex items-center px-4 sm:px-12 md:px-20 container mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  variants={contentVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.2
                  }}
                  className="max-w-xl sm:max-w-2xl w-full"
                >
                  <div className="text-center sm:text-left pt-20 sm:pt-0">
                    {/* Animated Line */}
                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 80, opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.4,
                        ease: "easeOut" 
                      }}
                      className="h-0.5 bg-gradient-to-r from-accent via-accent to-transparent mb-6 mx-auto sm:mx-0"
                    />

                    {/* Title with Split Animation */}
                    <motion.h1
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -40 }}
                      transition={{ 
                        duration: 0.7, 
                        delay: 0.5,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-white font-heading leading-tight tracking-tight"
                      style={{ 
                        textShadow: '0 10px 40px rgba(0,0,0,0.8), 0 0 80px rgba(0,0,0,0.4)'
                      }}
                    >
                      {carouselData[current].quote}
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -40 }}
                      transition={{ 
                        duration: 0.7, 
                        delay: 0.65,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      className="text-base sm:text-lg md:text-xl font-light text-neutral-200 mb-10 leading-relaxed max-w-xl mx-auto sm:mx-0 px-2 sm:px-0"
                      style={{ textShadow: '0 4px 20px rgba(0,0,0,0.9)' }}
                    >
                      {carouselData[current].subtext}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -40 }}
                      transition={{ 
                        duration: 0.7, 
                        delay: 0.8,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start"
                    >
                      <Link href={carouselData[current].link} className="w-full sm:w-auto group">
                        <Button 
                          size="xl" 
                          className="w-full text-base sm:text-lg px-10 py-6 h-auto bg-accent hover:bg-accent-hover text-white shadow-2xl shadow-accent/30 transition-all duration-500 hover:shadow-accent/50 hover:-translate-y-1 font-medium tracking-wide"
                        >
                          <span className="flex items-center justify-center gap-2">
                            Shop Now
                            <motion.span
                              initial={{ x: 0 }}
                              animate={{ x: [0, 5, 0] }}
                              transition={{ 
                                duration: 1.5, 
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            >
                              →
                            </motion.span>
                          </span>
                        </Button>
                      </Link>
                      
                      <Link href="/products" className="w-full sm:w-auto group">
                         <Button 
                           variant="outline" 
                           size="xl" 
                           className="w-full text-base sm:text-lg px-10 py-6 h-auto border-2 border-white/50 text-white hover:bg-white hover:text-neutral-900 backdrop-blur-xl bg-white/5 transition-all duration-500 hover:-translate-y-1 font-medium tracking-wide"
                         >
                            Explore Collection
                         </Button>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Desktop Navigation with Progress */}
      <div className="absolute bottom-10 right-10 z-30 hidden sm:flex gap-3">
          {carouselData.map((_, index) => (
              <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="group relative"
                  aria-label={`Go to slide ${index + 1}`}
              >
                  <div className="relative h-16 w-1 rounded-full overflow-hidden bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
                      {current === index && (
                          <motion.div 
                              className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-accent to-accent/50"
                              initial={{ height: "0%" }}
                              animate={{ height: `${progress}%` }}
                              transition={{ duration: 0.1, ease: "linear" }}
                          />
                      )}
                  </div>
                  {current === index && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -inset-1 border border-accent/50 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
              </button>
          ))}
      </div>
      
      {/* Mobile Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:hidden z-30 bg-black/20 backdrop-blur-md px-4 py-3 rounded-full">
        {carouselData.map((_, index) => (
            <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative transition-all duration-500 rounded-full ${
                  current === index 
                    ? 'w-8 h-2.5 bg-accent' 
                    : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
            >
              {current === index && (
                <motion.div
                  className="absolute inset-0 bg-accent rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: progress / 100 }}
                  transition={{ duration: 0.1, ease: "linear" }}
                  style={{ transformOrigin: 'left' }}
                />
              )}
            </button>
        ))}
      </div>

      {/* Slide Counter */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="absolute top-8 right-8 z-30 hidden md:flex items-center gap-3 bg-black/30 backdrop-blur-xl px-5 py-3 rounded-full border border-white/10"
      >
        <span className="text-2xl font-bold text-white">{String(current + 1).padStart(2, '0')}</span>
        <div className="w-8 h-px bg-white/30" />
        <span className="text-sm text-white/60">{String(carouselData.length).padStart(2, '0')}</span>
      </motion.div>
    </section>
  );
}