"use client";

import { useState } from 'react';
import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { Input } from '@/components/ui/Input';
import { MapPin } from 'lucide-react';
import { formatCurrency } from '@/lib/helpers';

interface ProductBuyingSidebarProps {
  product: Product;
}

export function ProductBuyingSidebar({ product }: ProductBuyingSidebarProps) {
  const { addToCart } = useCart();
  const router = useRouter();
  const [pincode, setPincode] = useState("");

  const handleAddToCart = () => {
    addToCart(product);

  };

  const handleBuyNow = () => {
    router.push(`/checkout?product=${product.slug}`);
  };

  const handleConnectToStore = () => {
    toast.success("Connecting you to the nearest store...", {
        icon: '📞',
    });
    // Logic to open chat or store locator
  };

  const checkDelivery = () => {
      if(pincode.length === 6) {
          toast.success("Delivery available at " + pincode);
      } else {
          toast.error("Please enter a valid 6-digit pincode");
      }
  };

  return (
    <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 shadow-sm sticky top-24">
        {/* Exchange Section */}
        <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-3 mb-6">
            <h3 className="text-xs font-bold text-neutral-900 dark:text-white mb-1">With Exchange</h3>
            <p className="text-sm font-bold text-blue-600 mb-3">Up to {formatCurrency(product.exchangeBonus || 1000)} off</p>
            <button className="w-full h-9 rounded-full border border-neutral-800 text-neutral-900 dark:text-white font-bold text-xs hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                Exchange Offers
            </button>
        </div>

        {/* Delivery Section */}
        <div className="mb-6">
            <h3 className="font-bold text-sm mb-2 flex items-center gap-2">
                Delivery 
            </h3>
            <div className="flex gap-2">
                <div className="relative flex-1">
                    <Input 
                        placeholder="Enter Pincode" 
                        className="h-9 text-sm border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 focus-visible:ring-0 focus-visible:border-accent border-neutral-300 placeholder:text-neutral-400"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                    />
                    <MapPin className="absolute right-0 top-2 w-4 h-4 text-neutral-400" />
                </div>
                <button 
                    onClick={checkDelivery}
                    className="text-sm font-bold text-blue-600 hover:text-blue-700"
                >
                    Check
                </button>
            </div>
            <p className="text-xs text-neutral-500 mt-2">
                Check for delivery date and availability
            </p>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-3 mb-3">
            <button 
                onClick={handleAddToCart}
                className="col-span-1 h-12 rounded border border-neutral-800 text-neutral-900 font-bold text-sm hover:bg-neutral-50 transition-colors uppercase"
            >
                Add to Cart
            </button>
            <button 
                onClick={handleBuyNow}
                className="col-span-1 h-12 rounded bg-[#FFC700] text-black font-bold text-sm hover:bg-[#FDB900] transition-colors border border-[#FFC700] uppercase center"
            >
                Buy Now
            </button>
        </div>
        
        <button 
            onClick={handleConnectToStore}
            className="w-full h-12 rounded bg-[#003087] text-white font-bold text-sm hover:bg-[#00205b] transition-colors uppercase"
        >
            Connect to store
        </button>

    </div>
  );
}
