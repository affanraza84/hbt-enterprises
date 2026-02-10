"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, ShoppingCart, Menu as MenuIcon, X, ChevronRight, ChevronDown, ArrowLeft, MapPin, Heart, Info, Phone, Home, Zap, ArrowRight } from "lucide-react";
import { useSearch } from "@/providers/search-provider";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { SearchResults } from "@/components/search/SearchResults";
import { CategoryMegaMenu, CATEGORIES } from "./CategoryMegaMenu";
import { useCart } from "@/context/CartContext";

export function MainNavbar({ className }: { className?: string }) {
  const router = useRouter();
  const { openSearch, closeSearch, isSearchOpen, searchQuery, setSearchQuery } = useSearch();
  const { cartCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileView, setMobileView] = useState<'main' | 'categories'>('main');
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);
  
  const desktopSearchRef = React.useRef<HTMLDivElement>(null);
  const mobileSearchRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        desktopSearchRef.current &&
        !desktopSearchRef.current.contains(event.target as Node) &&
        mobileSearchRef.current &&
        !mobileSearchRef.current.contains(event.target as Node)
      ) {
        closeSearch();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeSearch]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reset mobile view when menu is closed
  useEffect(() => {
    if (!isMobileMenuOpen) {
      const timeout = setTimeout(() => {
        setMobileView('main');
        setExpandedMobileCategory(null);
      }, 300); // 300ms to match potential transition duration
      return () => clearTimeout(timeout);
    }
  }, [isMobileMenuOpen]);

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
          <div className="flex items-center justify-between gap-4 relative">
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center gap-2 absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:left-auto">
              <Link href="/" className="group flex items-center gap-3">
                {/* Logo Icon */}
                <div className="w-10 h-10 rounded-xl bg-[#0A2540] dark:bg-white flex items-center justify-center relative overflow-hidden shadow-md group-hover:shadow-[0_0_15px_rgba(0,198,255,0.4)] transition-all duration-300 border border-white/10 dark:border-neutral-200">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#00C6FF]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="text-white dark:text-[#0A2540] font-['Orbitron'] font-black text-xs tracking-widest relative z-10">
                    HBT
                  </span>
                </div>
                
                {/* Logo Text */}
                <div className="flex flex-col justify-center">
                  <div className="flex items-baseline gap-1 leading-none">
                    <span className="font-['Orbitron'] font-black text-xl text-[#0A2540] dark:text-white tracking-wide group-hover:text-[#00C6FF] transition-colors duration-300">
                      HBT
                    </span>
                    <span className="font-heading font-medium text-lg text-[#0A2540] dark:text-white tracking-tight group-hover:text-[#00C6FF] transition-colors duration-300">
                      Enterprises
                    </span>
                  </div>
                  <span className="text-[9px] font-bold text-neutral-500 tracking-[0.3em] uppercase mt-0.5 group-hover:text-[#0A2540] dark:group-hover:text-neutral-300 transition-colors">
                    Premium Tech Gear
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Search (Hidden on Mobile) */}
            <div ref={desktopSearchRef} className="hidden md:flex flex-1 max-w-2xl relative mx-8">
              <div className="w-full flex items-center relative rounded-full border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 focus-within:ring-2 focus-within:ring-accent/50 focus-within:border-accent transition-all overflow-hidden">
                <input
                  type="text"
                  placeholder="Search for products, brands & more"
                  className="w-full bg-transparent border-none px-6 py-2.5 text-sm outline-none text-neutral-800 dark:text-neutral-200 placeholder:text-neutral-400"
                  value={searchQuery}
                  onFocus={openSearch}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if (!isSearchOpen) openSearch();
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                       router.push(`/products?q=${searchQuery}`);
                       closeSearch();
                    }
                  }}
                />
                <button
                  onClick={() => router.push(`/products?q=${searchQuery}`)}
                  className="bg-accent hover:bg-accent/90 text-white px-6 py-2.5 flex items-center justify-center transition-colors"
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>
              {searchQuery.length > 0 && isSearchOpen && (
                <SearchResults
                    query={searchQuery}
                    onClose={closeSearch}
                />
              )}
            </div>

            {/* Right: Customer Care & Cart */}
            <div className="flex items-center gap-4 sm:gap-6">
              {/* Theme Toggle */}
              <div>
                <ThemeToggle />
              </div>

              {/* Cart */}
              <div className="flex items-center gap-2">
                <Link href="/cart" className="group flex items-center gap-2">
                  <div className="relative p-2">
                    <ShoppingCart className="w-6 h-6 text-neutral-700 dark:text-neutral-300 group-hover:text-accent transition-colors" />
                    {cartCount > 0 && (
                        <span className="absolute -top-0 -right-0 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[9px] font-bold text-white ring-2 ring-white dark:ring-neutral-900 pointer-events-none">
                        {cartCount}
                        </span>
                    )}
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
          <div ref={mobileSearchRef} className="md:hidden w-full relative z-10">
            <div className="w-full flex items-center relative rounded-full border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 focus-within:ring-2 focus-within:ring-accent/50 focus-within:border-accent transition-all overflow-hidden shadow-sm z-20">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-transparent border-none px-4 py-2 text-sm outline-none text-neutral-800 dark:text-neutral-200 placeholder:text-neutral-400"
                value={searchQuery}
                onFocus={openSearch}
                onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if (!isSearchOpen) openSearch();
                }}
              />
              <button className="bg-accent hover:bg-accent/90 text-white px-4 py-2 flex items-center justify-center transition-colors">
                <Search className="w-4 h-4" />
              </button>
            </div>
            {/* Mobile Inline Results */}
            {searchQuery.length > 0 && isSearchOpen && (
              <SearchResults
                query={searchQuery}
                onClose={closeSearch}
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
        <div className="lg:hidden fixed top-[110px] left-0 w-full h-[calc(100vh-110px)] bg-neutral-light overflow-y-auto animate-in slide-in-from-right-5 z-40 pb-20">
             {mobileView === 'main' ? (
                <div className="flex flex-col p-4 space-y-1">
                   {/* Main Links */}
                   <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors font-medium">
                       <Home className="w-5 h-5 text-accent" />
                       Home
                   </Link>
                   <Link href="/hot-deals" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors font-medium">
                       <Zap className="w-5 h-5 text-warning" />
                       Hot Deals
                   </Link>
                   <Link href="/stores" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors font-medium">
                       <ArrowRight className="w-5 h-5 text-success" />
                       Brand Stores
                   </Link>

                   {/* All Categories Trigger */}
                   <button 
                      onClick={() => setMobileView('categories')}
                      className="flex items-center justify-between w-full px-4 py-3 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors font-medium text-left group"
                   >
                      <div className="flex items-center gap-3">
                        <MenuIcon className="w-5 h-5 text-primary" />
                        <span>All Categories</span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-neutral-400 group-hover:text-accent" />
                   </button>

                   <div className="h-px bg-neutral-200 dark:bg-neutral-800 my-2 mx-4" />

                   <Link href="/stores" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors font-medium">
                       <MapPin className="w-5 h-5" />
                       Store Locator
                   </Link>
                   <Link href="/wishlist" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors font-medium">
                       <Heart className="w-5 h-5" />
                       Wishlist
                   </Link>
                   <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors font-medium">
                       <Info className="w-5 h-5" />
                       About Us
                   </Link>
                   <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors font-medium">
                       <Phone className="w-5 h-5" />
                       Contact Us
                   </Link>
                </div>
             ) : (
                <div className="flex flex-col min-h-full">
                   {/* Categories Header */}
                   <div className="sticky top-0 bg-neutral-light z-10 border-b border-neutral-200 dark:border-neutral-800 px-4 py-4 flex items-center gap-3">
                      <button 
                         onClick={() => setMobileView('main')}
                         className="p-2 -ml-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors"
                       >
                         <ArrowLeft className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />
                       </button>
                       <span className="font-bold text-lg text-primary">All Categories</span>
                   </div>

                   {/* Categories Accordion */}
                   <div className="p-4 space-y-2">
                      {CATEGORIES.map((cat) => (
                         <div key={cat.id} className="border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden bg-white dark:bg-neutral-900/50">
                            <button 
                               onClick={() => setExpandedMobileCategory(expandedMobileCategory === cat.id ? null : cat.id)}
                               className="flex items-center justify-between w-full px-4 py-3 font-medium text-neutral-800 dark:text-neutral-200"
                            >
                               <span>{cat.label}</span>
                               <ChevronDown className={cn("w-4 h-4 text-neutral-400 transition-transform duration-200", expandedMobileCategory === cat.id ? "rotate-180" : "")} />
                            </button>
                            {expandedMobileCategory === cat.id && (
                               <div className="bg-neutral-50 dark:bg-black/50 border-t border-neutral-200 dark:border-neutral-800 px-4 py-2 space-y-4">
                                  {cat.subgroups.map((group, idx) => (
                                     <div key={idx} className="space-y-2">
                                        <h4 className="text-xs font-bold text-accent uppercase tracking-wider">{group.title}</h4>
                                        <div className="grid grid-cols-1 gap-1 pl-2 border-l-2 border-neutral-200 dark:border-neutral-800">
                                            {group.items.map((item, i) => (
                                                <Link 
                                                    key={i} 
                                                    href={`/products?category=${cat.id}&type=${item}`}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-white py-1 block transition-colors"
                                                >
                                                    {item}
                                                </Link>
                                            ))}
                                        </div>
                                     </div>
                                  ))}
                               </div>
                            )}
                         </div>
                      ))}
                   </div>
                </div>
             )}
        </div>
      )}
    </div>
  );
}
