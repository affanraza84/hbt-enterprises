"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const BANNERS = [
  {
    id: 1,
    title: "HOME ENTERTAINMENT",
    startPrice: "7,990",
    image: "https://i.pinimg.com/736x/7b/11/67/7b116779c895c2f538b56c44689752a5.jpg", // TV/Entertainment
    gradient: "from-[#2E0249] to-[#A91079]", // Deep Purple to Pink
    buttonColor: "bg-[#A91079] text-white hover:bg-[#A91079]/90",
    link: "/products?category=Television"
  },
  {
    id: 2,
    title: "SMART PHONES",
    startPrice: "9,999",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1000&auto=format&fit=crop", // Phone
    gradient: "from-[#1A1A2E] to-[#6A0572]", // Dark to Purple
    buttonColor: "bg-[#6A0572] text-white hover:bg-[#6A0572]/90",
    link: "/products?category=Smart Phone"
  },
  {
    id: 3,
    title: "WASHING MACHINE",
    startPrice: "16,490",
    image: "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=1000&auto=format&fit=crop", // Washing Machine
    gradient: "from-[#001D6E] to-[#0096FF]", // Dark Blue to Light Blue
    buttonColor: "bg-[#0096FF] text-white hover:bg-[#0096FF]/90",
    link: "/products?category=Washing Machine"
  },
  {
    id: 4,
    title: "HOME THEATRES",
    startPrice: "4,999",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1000&q=80", // Soundbar/Speaker
    gradient: "from-[#0F044C] to-[#141E61] via-[#005F99]", // Deep Blue mix
    buttonColor: "bg-[#141E61] text-white hover:bg-[#141E61]/90",
    link: "/products?category=Soundbar"
  }
];

export function CategoryBannerGrid() {
  return (
    <section className="py-16 bg-neutral-light dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BANNERS.map((banner) => (
            <div 
                key={banner.id} 
                className={`relative h-[250px] sm:h-[300px] rounded-2xl overflow-hidden flex items-center shadow-lg group bg-gradient-to-r ${banner.gradient}`}
            >
                {/* Abstract Waves/Glow Effect (CSS Overlay) */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700" />
                
                {/* Content Left */}
                <div className="relative z-10 flex-1 p-6 sm:p-10 flex flex-col justify-center h-full">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight uppercase font-heading mb-2 drop-shadow-md">
                        {banner.title}
                    </h3>
                    <p className="text-white/90 text-sm sm:text-base font-medium mb-6">
                        Starting from <span className="font-bold">₹{banner.startPrice}/-*</span>
                    </p>
                    <Link href={banner.link}>
                        <Button className={`${banner.buttonColor} border-none shadow-md px-6 py-2 h-auto text-sm font-bold uppercase tracking-wider`}>
                            Buy Now
                        </Button>
                    </Link>
                </div>

                {/* Image Right */}
                <div className="relative w-1/2 h-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-10" /> {/* Subtle shadow overlay */}
                    <Image
                        src={banner.image}
                        alt={banner.title}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 50vw, 33vw"
                    />
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
