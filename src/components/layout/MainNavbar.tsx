"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Search, ShoppingCart, Menu as MenuIcon, X } from "lucide-react";
import { useSearch } from "@/providers/search-provider";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { SearchResults } from "@/components/search/SearchResults";
import { CategoryMegaMenu } from "./CategoryMegaMenu";

export function MainNavbar({ className }: { className?: string }) {
  const { openSearch, searchQuery, setSearchQuery } = useSearch();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "sticky top-0 z-[100] w-full bg-white dark:bg-neutral-900 shadow-sm transition-all duration-300",
        className,
      )}
    >
      {/* 2. MAIN HEADER: Logo, Search, Cart */}
      <div
        className={cn(
          "bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 transition-all duration-300",
          isScrolled ? "py-2 shadow-sm" : "py-3 sm:py-4",
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-3">
          {/* Row 1: Logo & Actions */}
          <div className="flex items-center justify-between gap-4">
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <Link href="/" className="group flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent to-blue-600 border border-white/10 shadow-[0_0_15px_rgba(0,198,255,0.3)] flex items-center justify-center text-primary-dark font-bold text-xs tracking-tighter group-hover:scale-105 transition-transform duration-300">
                  <span className="text-white">HBT</span>
                </div>
                <div className="hidden sm:block">
                  <span className="block font-heading font-bold text-xl leading-none text-primary dark:text-white tracking-tight">
                    HBT Enterprises
                  </span>
                  <span className="block text-[10px] font-medium text-neutral-500 tracking-widest uppercase mt-0.5 group-hover:text-accent transition-colors">
                    Premium Tech Gear
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Search (Hidden on Mobile) */}
            <div className="hidden md:flex flex-1 max-w-2xl relative mx-8">
              <div className="w-full flex items-center relative rounded-full border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 focus-within:ring-2 focus-within:ring-accent/50 focus-within:border-accent transition-all overflow-hidden">
                <input
                  type="text"
                  placeholder="Search for products, brands & more"
                  className="w-full bg-transparent border-none px-6 py-2.5 text-sm outline-none text-neutral-800 dark:text-neutral-200 placeholder:text-neutral-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") openSearch();
                  }}
                />
                <button
                  onClick={openSearch}
                  className="bg-accent hover:bg-accent/90 text-white px-6 py-2.5 flex items-center justify-center transition-colors"
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right: Customer Care & Cart */}
            <div className="flex items-center gap-4 sm:gap-6">
              {/* Theme Toggle */}
              <div className="hidden lg:block">
                <ThemeToggle />
              </div>

              {/* Cart */}
              <div className="flex items-center gap-2">
                <Link href="/cart" className="group flex items-center gap-2">
                  <div className="relative p-2">
                    <ShoppingCart className="w-6 h-6 text-neutral-700 dark:text-neutral-300 group-hover:text-accent transition-colors" />
                    <span className="absolute -top-0 -right-0 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[9px] font-bold text-white ring-2 ring-white dark:ring-neutral-900 pointer-events-none">
                      2
                    </span>
                  </div>
                  <span className="hidden sm:block text-sm font-bold text-neutral-700 dark:text-neutral-300 group-hover:text-primary transition-colors">
                    My Cart
                  </span>
                </Link>
              </div>

              {/* Mobile Toggle */}
              <button
                className="lg:hidden p-2 text-neutral-600 dark:text-neutral-400 hover:text-primary"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <MenuIcon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Row 2: Mobile Search Bar */}
          <div className="md:hidden w-full relative z-10">
            <div className="w-full flex items-center relative rounded-full border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 focus-within:ring-2 focus-within:ring-accent/50 focus-within:border-accent transition-all overflow-hidden shadow-sm z-20">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-transparent border-none px-4 py-2 text-sm outline-none text-neutral-800 dark:text-neutral-200 placeholder:text-neutral-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="bg-accent hover:bg-accent/90 text-white px-4 py-2 flex items-center justify-center transition-colors">
                <Search className="w-4 h-4" />
              </button>
            </div>
            {/* Mobile Inline Results */}
            {searchQuery.length > 0 && (
              <SearchResults
                query={searchQuery}
                onClose={() => setSearchQuery("")}
              />
            )}
          </div>
        </div>
      </div>

      {/* 3. NAVIGATION BAR: Categories */}
      <div className="hidden lg:block bg-neutral-100 dark:bg-neutral-800/50 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-12 gap-8">
            {/* Left: Mega Menu */}
            <div className="relative z-50">
              <CategoryMegaMenu />
            </div>

            <div className="flex items-center gap-6">
              <Link
                href="/hot-deals"
                className="text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:text-accent transition-colors flex items-center gap-2"
              >
                Hot Deals
              </Link>
              <Link
                href="/stores"
                className="text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:text-accent transition-colors"
              >
                Brand Stores
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-neutral-light border-b border-neutral-default shadow-xl py-4 px-4 flex flex-col space-y-4 animate-in slide-in-from-top-2">
          <div className="pt-4 flex flex-col space-y-3">
            <Link href="/track-order" className="text-sm text-neutral-600">
              Track Order
            </Link>
            <Link href="/contact" className="text-sm text-neutral-600">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
