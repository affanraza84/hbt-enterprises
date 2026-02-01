"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const PODIUM_ITEMS = [
  {
    id: 1,
    title: "MICROWAVE",
    price: "7,700",
    image: "https://images.unsplash.com/photo-1585659722983-48356c9a702b?auto=format&fit=crop&w=600&q=80", // Microwave
    link: "/products/lg-28l-convection", // Using existing slug
  },
  {
    id: 2,
    title: "SMARTPHONE",
    price: "8,240",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=600&q=80", // Samsung-syle phone
    link: "/products/samsung-s24-ultra", // Using existing slug
  },
  {
    id: 3,
    title: "TWS & HEADPHONES",
    price: "449",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80", // Headphones
    link: "/products/sony-wh-1000xm5", // Using existing slug
  },
  {
    id: 4,
    title: "SMARTWATCH",
    price: "1,399",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=600&q=80", // Smartwatch
    link: "/products/apple-watch-s9", // Using existing slug
  }
];

export function PurpleProductGrid() {
  return (
    <section className="py-16 bg-neutral-light dark:bg-neutral-900 overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PODIUM_ITEMS.map((item) => (
            <div 
                key={item.id} 
                className="relative group h-[400px] overflow-hidden rounded-2xl bg-gradient-to-b from-[#4A00E0] to-[#8E2DE2] flex flex-col items-center justify-between pt-10 pb-6 relative shadow-2xl hover:translate-y-[-5px] transition-transform duration-300"
            >
                {/* Background Wave Effect Simulation */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute bottom-0 w-full h-1/3 bg-white/5 rounded-t-[100%] scale-150 translate-y-12 blur-xl" />
                    <div className="absolute top-1/2 w-full h-1/2 bg-[#8E2DE2]/30 rounded-full blur-3xl" />
                </div>

                {/* Content Top */}
                <div className="text-center z-10 relative px-4">
                    <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight leading-none mb-2 drop-shadow-md">
                        {item.title}
                    </h3>
                    <p className="text-white/80 text-sm font-medium">
                        Starting from <span className="text-white font-bold">₹{item.price}/-*</span>
                    </p>
                </div>

                {/* Product Image on 'Podium' */}
                <div className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 my-auto flex items-center justify-center">
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>

                {/* Podium Base Visual */}
                <div className="absolute bottom-12 w-40 h-12 bg-white/20 rounded-[100%] blur-md z-0 group-hover:bg-white/30 transition-colors" />

                {/* Button Bottom */}
                <Link href={item.link} className="z-20 mt-4">
                    <Button size="sm" className="bg-[#1a0b2e] hover:bg-black text-white border border-white/10 shadow-lg px-8 font-bold uppercase tracking-widest text-xs rounded-lg">
                        Buy Now
                    </Button>
                </Link>

                {/* Overlay Gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a0845]/80 via-transparent to-transparent pointer-events-none z-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
