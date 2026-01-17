"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search, ChevronRight } from "lucide-react";
import { useSearch } from "@/providers/search-provider";
import { ProductService } from "@/services/product.service";
import { Product } from "@/types/product";
import { formatCurrency } from "@/lib/helpers";
import Link from "next/link";
import { Input } from "@/components/ui/Input";

export function SearchSidebar() {
  const { isSearchOpen, closeSearch, searchQuery, setSearchQuery } = useSearch();
  const [results, setResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
        // Slight delay to allow animation to start
        setTimeout(() => inputRef.current?.focus(), 100);
    }
    if (!isSearchOpen && searchQuery === "") {
        setResults([]);
    }
  }, [isSearchOpen, searchQuery]);

  useEffect(() => {
    const fetchResults = async () => {
        if (!searchQuery.trim()) {
            setResults([]);
            return;
        }
        setIsLoading(true);
        // Simulate delay
        await new Promise(resolve => setTimeout(resolve, 300));
        try {
            const data = await ProductService.searchProducts(searchQuery);
            setResults(data);
        } catch (error) {
            console.error("Search failed", error);
        } finally {
            setIsLoading(false);
        }
    };

    const timeoutId = setTimeout(fetchResults, 300); // Debounce
    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSearch}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-neutral-light border-l border-neutral-default z-[70] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-neutral-default">
                <h2 className="text-xl font-bold text-primary font-heading">Search</h2>
                <button
                    onClick={closeSearch}
                    className="p-2 rounded-full hover:bg-neutral-default text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>
            </div>

            {/* Input Area */}
            <div className="p-6">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search products..."
                        className="w-full bg-neutral-default border border-neutral-default rounded-lg pl-10 pr-4 py-3 text-primary placeholder:text-neutral-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            {/* Results */}
            <div className="flex-1 overflow-y-auto px-6 pb-6">
                {isLoading ? (
                    <div className="flex justify-center py-8">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
                    </div>
                ) : results.length > 0 ? (
                    <div className="space-y-4">
                        <p className="text-sm text-neutral-500">Found {results.length} results</p>
                        {results.map((product) => (
                            <Link 
                                key={product.id} 
                                href={`/products/${product.slug}`}
                                onClick={closeSearch}
                                className="flex items-start gap-4 p-3 rounded-xl bg-neutral-light border border-neutral-default hover:border-accent/50 hover:shadow-sm transition-all group"
                            >
                                <div className="h-16 w-16 rounded-md bg-neutral-default flex items-center justify-center flex-shrink-0">
                                     {/* Placeholder Image */}
                                    <div className="text-xs text-neutral-400 font-bold">IMG</div>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-sm font-bold text-primary group-hover:text-accent transition-colors truncate">
                                        {product.name}
                                    </h3>
                                    <p className="text-xs text-neutral-500 mb-2 truncate">
                                        {product.category}
                                    </p>
                                    <div className="flex items-center justify-between">
                                         <span className="text-sm font-medium text-primary">{formatCurrency(product.price)}</span>
                                         <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-accent transition-colors" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : searchQuery ? (
                    <div className="text-center py-12 text-neutral-500">
                        <p>No products found for "{searchQuery}"</p>
                    </div>
                ) : (
                    <div className="text-center py-12 text-neutral-500/50">
                        <Search className="w-12 h-12 mx-auto mb-4 opacity-20" />
                        <p>Start typing to search...</p>
                    </div>
                )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
