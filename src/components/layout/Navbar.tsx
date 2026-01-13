"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Search, ShoppingCart, User, Menu as MenuIcon, X } from "lucide-react";
import { useSearch } from "@/providers/search-provider";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar({ className }: { className?: string }) {
  const { openSearch } = useSearch();
  const [active, setActive] = useState<string | null>(null);
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
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-neutral-light/90 backdrop-blur-md border-neutral-default py-2 shadow-sm"
          : "bg-neutral-light border-transparent py-4",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
            {/* Logo Section */}
             <div className="flex-shrink-0 flex items-center gap-2">
                <Link href="/" className="group flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent to-blue-600 border border-white/10 shadow-[0_0_15px_rgba(0,198,255,0.3)] flex items-center justify-center text-primary-dark font-bold text-xs tracking-tighter group-hover:scale-105 transition-transform duration-300">
                        <span className="text-white">HBT</span>
                    </div>
                    <div>
                        <span className="block font-heading font-bold text-xl leading-none text-primary tracking-tight">HBT Enterprises</span>
                        <span className="block text-[10px] font-medium text-neutral-500 tracking-widest uppercase mt-0.5 group-hover:text-accent transition-colors">Premium Tech Gear</span>
                    </div>
                </Link>
             </div>

            {/* Desktop Navigation (Center) - Aceternity Menu */}
            <div className="hidden lg:block relative z-50">
                <Menu setActive={setActive}>
                    <MenuItem setActive={setActive} active={active} item="Television">
                         <div className="text-sm grid grid-cols-2 gap-10 p-4 w-[30rem]">
                            <ProductItem
                              title="Neo QLED 8K"
                              href="/products/category/television"
                              src=""
                              description="Experience the future of display technology with infinite contrast."
                            />
                            <ProductItem
                              title="OLED 4K Series"
                              href="/products/category/television"
                              src=""
                              description="Self-lit pixels for perfect black and infinite contrast."
                            />
                             <div className="col-span-2 grid grid-cols-2 gap-4 border-t border-neutral-200 pt-4 mt-2">
                                <HoveredLink href="/products/category/tv-32-43">32&quot; - 43&quot; TVs</HoveredLink>
                                <HoveredLink href="/products/category/tv-50-55">50&quot; - 55&quot; TVs</HoveredLink>
                                <HoveredLink href="/products/category/tv-65-plus">65&quot; & Above</HoveredLink>
                                <HoveredLink href="/products/category/smart-tv">Android Smart TVs</HoveredLink>
                             </div>
                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Refrigerator">
                        <div className="flex flex-col space-y-4 text-sm p-4 w-64">
                            <HoveredLink href="/products/category/single-door">Single Door Fridges</HoveredLink>
                            <HoveredLink href="/products/category/double-door">Double Door Frost Free</HoveredLink>
                            <HoveredLink href="/products/category/side-by-side">Side by Side Premium</HoveredLink>
                            <HoveredLink href="/products/category/mini-fridge">Compact & Mini Fridges</HoveredLink>
                            <HoveredLink href="/products/category/convertible">Convertible Series</HoveredLink>
                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Washing Machine">
                         <div className="flex flex-col space-y-4 text-sm p-4 w-64">
                            <HoveredLink href="/products/category/front-load">Front Load Fully Automatic</HoveredLink>
                            <HoveredLink href="/products/category/top-load">Top Load Fully Automatic</HoveredLink>
                            <HoveredLink href="/products/category/semi-automatic">Semi-Automatic Machines</HoveredLink>
                            <HoveredLink href="/products/category/dryers">Washer Dryers</HoveredLink>
                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Smart Phone">
                        <div className="text-sm grid grid-cols-2 gap-6 p-4 w-[25rem]">
                           <div className="flex flex-col space-y-3">
                                <h4 className="text-primary font-bold mb-1">By Brand</h4>
                                <HoveredLink href="/products/brand/apple">iPhone</HoveredLink>
                                <HoveredLink href="/products/brand/samsung">Samsung</HoveredLink>
                                <HoveredLink href="/products/brand/google">Pixel</HoveredLink>
                                <HoveredLink href="/products/brand/oneplus">OnePlus</HoveredLink>
                           </div>
                           <div className="flex flex-col space-y-3">
                                <h4 className="text-primary font-bold mb-1">By Type</h4>
                                <HoveredLink href="/products/category/5g-phones">5G Mobiles</HoveredLink>
                                <HoveredLink href="/products/category/gaming-phones">Gaming Phones</HoveredLink>
                                <HoveredLink href="/products/category/foldables">Foldables</HoveredLink>
                                <HoveredLink href="/products/category/budget">Budget Friendly</HoveredLink>
                           </div>
                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Cooler">
                         <div className="flex flex-col space-y-4 text-sm p-4 w-60">
                            <HoveredLink href="/products/category/desert-cooler">Desert Coolers</HoveredLink>
                            <HoveredLink href="/products/category/personal-cooler">Personal Coolers</HoveredLink>
                            <HoveredLink href="/products/category/tower-cooler">Tower Coolers</HoveredLink>
                            <HoveredLink href="/products/category/window-cooler">Window Coolers</HoveredLink>
                        </div>
                    </MenuItem>
                </Menu>
            </div>

            {/* Right Utility Icons */}
            <div className="flex items-center gap-2 sm:gap-4">
                 <ThemeToggle />
                 <button 
                    onClick={openSearch}
                    className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors hover:bg-neutral-default rounded-full relative group"
                 >
                     <Search className="w-5 h-5 stroke-[1.5px]" />
                     <span className="sr-only">Search</span>
                 </button>
                 
                 <Link href="/login" className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors hover:bg-neutral-default rounded-full hidden sm:block">
                     <User className="w-5 h-5 stroke-[1.5px]" />
                 </Link>
                 
                 <Link href="/cart" className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors hover:bg-neutral-default rounded-full relative">
                     <ShoppingCart className="w-5 h-5 stroke-[1.5px]" />
                     <span className="absolute top-1.5 right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[9px] font-bold text-primary-dark ring-2 ring-white">
                        2
                     </span>
                 </Link>

                 {/* Mobile Menu Toggle */}
                 <button 
                    className="lg:hidden p-2 text-neutral-600 dark:text-neutral-400 hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                 >
                     {isMobileMenuOpen ? <X className="w-6 h-6"/> : <MenuIcon className="w-6 h-6"/> }
                 </button>
            </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-neutral-light border-b border-neutral-default shadow-xl py-4 px-4 flex flex-col space-y-4 animate-in slide-in-from-top-2">
            <Link href="/products/category/television" className="text-base font-medium text-primary py-2 border-b border-neutral-100">Television</Link>
            <Link href="/products/category/refrigerator" className="text-base font-medium text-primary py-2 border-b border-neutral-100">Refrigerator</Link>
            <Link href="/products/category/washing-machine" className="text-base font-medium text-primary py-2 border-b border-neutral-100">Washing Machine</Link>
            <Link href="/products/category/smartphone" className="text-base font-medium text-primary py-2 border-b border-neutral-100">Smart Phone</Link>
            <Link href="/products/category/cooler" className="text-base font-medium text-primary py-2 border-b border-neutral-100">Cooler</Link>
        </div>
      )}
    </header>
  );
}
