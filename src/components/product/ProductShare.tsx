"use client";

import { Share2 } from 'lucide-react';
import { toast } from 'react-hot-toast';

interface ProductShareProps {
  productName: string;
  slug: string;
}

export function ProductShare({ productName, slug }: ProductShareProps) {
  
  const handleShare = async () => {
    const url = `${window.location.origin}/products/${slug}`;
    const shareData = {
      title: productName,
      text: `Check out ${productName} on HBT Enterprises!`,
      url: url,
    };

    try {
      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(url);
        toast.success("Link copied to clipboard!", {
            icon: '🔗',
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },
        });
      }
    } catch (err) {
      console.error("Error sharing:", err);
      // Fallback if share fails (e.g. user cancelled)
      // We don't necessarily want to show an error if the user just cancelled the share sheet
    }
  };

  return (
    <button 
      onClick={handleShare}
      className="absolute right-0 top-0 z-10 w-8 h-8 rounded-full bg-white shadow-sm border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-blue-600 transition-colors"
      aria-label="Share product"
    >
      <Share2 className="w-4 h-4" />
    </button>
  );
}
