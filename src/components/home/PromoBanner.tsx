"use client";

import { cn } from "@/lib/utils";

export function PromoBanner() {
  return (
    <div className="bg-accent overflow-hidden py-3">
      <div className="relative flex whitespace-nowrap overflow-hidden">
        <div className="flex gap-8 items-center min-w-full animate-marquee flex-shrink-0">
          {[...Array(10)].map((_, i) => (
             <div key={i} className="flex items-center gap-8 flex-shrink-0">
                <span className="text-sm font-bold text-primary-dark uppercase tracking-wider">
                    Limited Time Offer: Get 20% off on all Audio devices
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
             </div>
          ))}
        </div>
        <div className="flex gap-8 items-center min-w-full animate-marquee flex-shrink-0">
          {[...Array(10)].map((_, i) => (
             <div key={i} className="flex items-center gap-8 flex-shrink-0">
                <span className="text-sm font-bold text-primary-dark uppercase tracking-wider">
                    Limited Time Offer: Get 20% off on all Audio devices
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}
