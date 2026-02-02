"use client";

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface ProductImageGalleryProps {
  images: string[];
  name: string;
}

export function ProductImageGallery({ images, name }: ProductImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // If no images, use placeholder
  const displayImages = images.length > 0 ? images : ["/placeholder.png"];

  return (
    <div className="flex gap-4 h-[400px] lg:h-[500px]">
        {/* Vertical Thumbnails (Left) */}
        <div className="hidden sm:flex flex-col gap-2 w-16 h-full flex-shrink-0">
             <button className="flex items-center justify-center p-1 text-neutral-400 hover:text-primary">
                <ChevronUp className="w-4 h-4" />
             </button>
             
             <div className="flex-1 overflow-y-auto scrollbar-hide flex flex-col gap-2">
                {displayImages.map((img, idx) => (
                    <button 
                        key={idx}
                        onClick={() => setSelectedIndex(idx)}
                        className={cn(
                            "relative w-14 h-14 border rounded flex-shrink-0 overflow-hidden",
                            selectedIndex === idx ? "border-blue-600 ring-1 ring-blue-600" : "border-neutral-200 hover:border-neutral-400"
                        )}
                    >
                        <Image 
                            src={img} 
                            alt={`Thumbnail ${idx}`} 
                            fill 
                            className="object-contain p-1"
                        />
                    </button>
                ))}
            </div>

            <button className="flex items-center justify-center p-1 text-neutral-400 hover:text-primary">
                <ChevronDown className="w-4 h-4" />
             </button>
        </div>

        {/* Main Image (Right of thumbnails) */}
        <div className="flex-1 relative bg-white dark:bg-neutral-900 rounded-lg overflow-hidden border border-neutral-100 dark:border-neutral-800 flex items-center justify-center">
            {displayImages[selectedIndex] ? (
                <Image 
                    src={displayImages[selectedIndex]}
                    alt={name}
                    fill
                    className="object-contain p-4 transition-transform duration-500 hover:scale-105"
                    priority
                />
            ) : (
                <div className="text-neutral-300">No Image</div>
            )}
        </div>
    </div>
  );
}
