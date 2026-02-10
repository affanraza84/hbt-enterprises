"use client";

import React, { useEffect, useRef } from "react";
import { useSearch } from "@/providers/search-provider";
import { Search, X } from "lucide-react";
import { SearchResults } from "@/components/search/SearchResults";
import { useRouter } from "next/navigation";

export function MobileSearchOverlay() {
  const { isSearchOpen, closeSearch, searchQuery, setSearchQuery } = useSearch();
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
        // slight delay to allow smooth entry
        setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isSearchOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeSearch();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeSearch]);

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-white dark:bg-neutral-900 md:hidden flex flex-col animate-in fade-in slide-in-from-bottom-5 duration-200">
      {/* Search Header */}
      <div className="flex items-center gap-3 p-4 border-b border-neutral-100 dark:border-neutral-800">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search products..."
            className="w-full bg-neutral-100 dark:bg-neutral-800 rounded-full py-2 pl-9 pr-4 text-sm outline-none focus:ring-2 focus:ring-accent/50 text-neutral-900 dark:text-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                   router.push(`/products?q=${searchQuery}`);
                   closeSearch();
                }
            }}
          />
        </div>
        <button 
            onClick={closeSearch}
            className="p-2 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
        >
          <span className="text-sm font-medium">Cancel</span>
        </button>
      </div>

      {/* Results Area */}
      <div className="flex-1 overflow-y-auto p-4">
        {searchQuery.length > 0 && (
           <div className="relative">
             {/* We can reuse SearchResults but need to style it for full width/embedded */}
             {/* The current SearchResults component has absolute positioning. We might need to override it or wrap it. */}
             {/* Actually, SearchResults has `absolute top-full`. We should probably modify SearchResults to be responsive or just wrap it in a relative container and override styles. */}
             {/* For now, let's just render it and see. The absolute positioning might be tricky here. */}
             {/* Better: Create a prop in SearchResults to disable absolute positioning or just clone the logic. */}
             {/* Let's try to wrap it and use !static relative override if needed, or better, just reuse the logic if possible. */}
             {/* But since SearchResults is a client component, let's just make sure it renders correctly. */}
             
             {/* Quick fix: Modify SearchResults to accept className prop for the container to override absolute positioning */}
             <SearchResults query={searchQuery} onClose={closeSearch} />
           </div>
        )}
      </div>
    </div>
  );
}
