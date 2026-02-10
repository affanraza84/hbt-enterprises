"use client";

import { useSearch } from "@/providers/search-provider";
import { Search, ArrowLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { SearchResults } from "./SearchResults";
import { cn } from "@/lib/utils";

export function MobileSearchOverlay() {
  const { isSearchOpen, closeSearch, searchQuery, setSearchQuery } = useSearch();
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (isSearchOpen) {
      setActive(true);
      // Small delay to ensure render before focus
      setTimeout(() => inputRef.current?.focus(), 100);
      // Disable body scroll
      document.body.style.overflow = 'hidden';
    } else {
        const timer = setTimeout(() => setActive(false), 300);
        document.body.style.overflow = '';
        return () => clearTimeout(timer);
    }
    return () => { document.body.style.overflow = ''; };
  }, [isSearchOpen]);

  if (!active) return null;

  const handleSearch = () => {
     if(searchQuery.trim()) {
        router.push(`/products?q=${encodeURIComponent(searchQuery)}`);
        closeSearch();
     }
  };

  return (
    <div className={cn(
        "fixed inset-0 z-[200] bg-white dark:bg-neutral-900 transition-opacity duration-300 flex flex-col md:hidden",
        isSearchOpen ? "opacity-100" : "opacity-0 pointer-events-none"
    )}>
        {/* Header */}
        <div className="flex items-center gap-2 p-4 border-b border-neutral-100 dark:border-neutral-800 shrink-0">
            <button onClick={closeSearch} className="p-2 -ml-2">
                <ArrowLeft className="w-6 h-6 text-neutral-500" />
            </button>
            <div className="flex-1 relative">
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search products..."
                    className="w-full bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white px-4 py-3 rounded-xl outline-none focus:ring-2 ring-primary/20 transition-all text-base"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
            </div>
            <button 
                onClick={handleSearch}
                className="p-3 bg-primary text-white rounded-xl"
            >
                <Search className="w-5 h-5" />
            </button>
        </div>

        {/* Results */}
        <div className="flex-1 overflow-y-auto p-4">
            {searchQuery && (
                <SearchResults query={searchQuery} onClose={closeSearch} mobileLayout={true} />
            )}
        </div>
    </div>
  );
}
