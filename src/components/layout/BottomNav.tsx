"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, ShoppingCart, User, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { useSearch } from "@/providers/search-provider";

export function BottomNav() {
  const pathname = usePathname();
  const { cartCount } = useCart();
  const { openSearch } = useSearch();

  // Hide BottomNav on these specific routes if needed
  // if (pathname.startsWith("/checkout")) return null;

  const navItems = [
    {
      label: "Home",
      href: "/",
      icon: Home,
    },
    {
      label: "Search",
      href: "#", 
      icon: Search,
      action: (e: React.MouseEvent) => {
        e.preventDefault();
        openSearch();
      }
    },
    {
      label: "Cart",
      href: "/cart",
      icon: ShoppingCart,
      badge: cartCount > 0 ? cartCount : null
    },
    {
      label: "Profile",
      href: "/profile", // Or /sign-in
      icon: User,
    },
    {
      label: "Menu",
      href: "/categories",
      icon: Menu,
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 pb-[env(safe-area-inset-bottom)] md:hidden shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href) && item.href !== "#";
          
          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={item.action}
              className={cn(
                "relative flex flex-col items-center justify-center w-full h-full gap-1 active:scale-90 transition-transform duration-200",
                isActive ? "text-primary dark:text-white" : "text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300"
              )}
            >
              <div className="relative">
                <item.icon className={cn("w-6 h-6", isActive && "fill-current")} strokeWidth={isActive ? 2.5 : 2} />
                {item.badge && (
                  <span className="absolute -top-1 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[9px] font-bold text-white ring-2 ring-white dark:ring-neutral-900 pointer-events-none">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className="text-[10px] font-medium">{item.label}</span>
              
              {/* Active Indicator */}
              {isActive && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary dark:bg-white rounded-b-full shadow-[0_2px_8px_rgba(var(--primary),0.3)]" />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
