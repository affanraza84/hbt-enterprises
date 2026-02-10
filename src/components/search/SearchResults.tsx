"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatCurrency } from "@/lib/helpers";
import { ProductService } from "@/services/product.service";
import { Product } from "@/types/product";

interface SearchResultsProps {
  query: string;
  onClose: () => void;
  className?: string;
  mobileLayout?: boolean;
}

export function SearchResults({ query, onClose, className, mobileLayout = false }: SearchResultsProps) {
  const [results, setResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      if (!query.trim()) {
        setResults([]);
        return;
      }
      setIsLoading(true);
      // Simulate delay
      await new Promise((resolve) => setTimeout(resolve, 300));
      try {
        // Use the existing service logic
        const data = await ProductService.searchProducts(query);
        setResults(data);
      } catch (error) {
        console.error("Search failed", error);
      } finally {
        setIsLoading(false);
      }
    };

    const timeoutId = setTimeout(fetchResults, 300); // Debounce
    return () => clearTimeout(timeoutId);
  }, [query]);

  if (!query.trim() && results.length === 0) return null;

  return (
    <div className={cn(
        "bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl mt-2 shadow-xl overflow-hidden z-[100]",
        mobileLayout 
          ? "static w-full shadow-none border-0 bg-transparent dark:bg-transparent mt-4" 
          : "absolute top-full left-0 w-full max-h-[60vh] overflow-y-auto",
        className
    )}>
      {isLoading ? (
        <div className="flex justify-center py-6">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-accent"></div>
        </div>
      ) : results.length > 0 ? (
        <div className={cn(
          "py-2",
          mobileLayout ? "flex flex-nowrap overflow-x-auto gap-4 px-1 pb-4 snap-x hide-scrollbar" : ""
        )}>
          {!mobileLayout && (
            <div className="px-4 py-2 border-b border-neutral-100 dark:border-neutral-800">
               <p className="text-xs text-neutral-500 font-medium">Found {results.length} results</p>
            </div>
          )}
          
          {results.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              onClick={onClose}
              className={cn(
                "group transition-colors",
                mobileLayout 
                  ? "flex flex-col min-w-[200px] w-[200px] bg-white dark:bg-neutral-800 rounded-xl overflow-hidden border border-neutral-100 dark:border-neutral-700 snap-start"
                  : "flex items-center gap-4 px-4 py-3 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 border-b border-neutral-50 dark:border-neutral-800 last:border-0"
              )}
            >
              <div className={cn(
                "relative flex-shrink-0 overflow-hidden bg-neutral-100 dark:bg-neutral-800",
                mobileLayout ? "w-full aspect-square" : "h-10 w-10 rounded-md"
              )}>
                <Image
                  src={product.images[0] || 'https://images.unsplash.com/photo-1560393464-5c69a73c5770?q=80&w=200&auto=format&fit=crop'}
                  alt={product.name}
                  fill
                  sizes="200px"
                  className="object-cover"
                />
              </div>
              <div className={cn(
                "flex-1 min-w-0",
                mobileLayout ? "p-3" : ""
              )}>
                <h3 className={cn(
                  "font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-accent transition-colors truncate",
                  mobileLayout ? "text-sm mb-1" : "text-sm"
                )}>
                  {product.name}
                </h3>
                <p className={cn(
                  "text-neutral-500 truncate",
                  mobileLayout ? "text-[10px] mb-2" : "text-xs"
                )}>
                  {product.category}
                </p>
                
                <div className={cn(
                  "flex items-center",
                  mobileLayout ? "justify-between mt-auto" : "gap-3 hidden" 
                )}>
                    <span className="text-sm font-bold text-primary dark:text-white">
                      {formatCurrency(product.price)}
                    </span>
                    {mobileLayout && <div className="p-1.5 bg-neutral-100 dark:bg-neutral-700 rounded-lg text-neutral-600 dark:text-neutral-300">
                      <ChevronRight className="w-4 h-4" />
                    </div>}
                </div>
              </div>

              {!mobileLayout && (
                 <div className="flex items-center gap-3 ml-auto">
                    <span className="text-sm font-semibold text-primary dark:text-white">
                      {formatCurrency(product.price)}
                    </span>
                    <ChevronRight className="w-4 h-4 text-neutral-300 group-hover:text-accent transition-colors" />
                </div>
              )}
            </Link>
          ))}
          
          <Link 
            href={`/products?q=${query}`} 
            onClick={onClose} 
            className={cn(
              "text-sm font-medium text-accent hover:underline bg-neutral-50/50 dark:bg-neutral-800/30",
              mobileLayout 
                ? "flex flex-col items-center justify-center min-w-[120px] rounded-xl border-2 border-dashed border-neutral-200 dark:border-neutral-700 text-center p-4 snap-start"
                : "block text-center py-3"
            )}
          >
              <span>View all results</span>
              {mobileLayout && <ChevronRight className="w-5 h-5 mt-2 mx-auto" />}
          </Link>
        </div>
      ) : (
        <div className="text-center py-8 text-neutral-500">
          <p className="text-sm">No products found for &quot;{query}&quot;</p>
        </div>
      )}
    </div>
  );
}
