"use client";

import React from "react";
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

  // Hide on checkout
  if (pathname?.startsWith("/checkout")) return null;

  const navItems = [
    {
      label: "Home",
      href: "/",
      icon: Home,
      action: null,
    },
    {
      label: "Search",
      href: "#",
      icon: Search,
      action: (e: React.MouseEvent) => {
        e.preventDefault();
        openSearch();
      },
    },
    {
      label: "Cart",
      href: "/cart",
      icon: ShoppingCart,
      count: cartCount,
      action: null,
    },
    {
      label: "Profile",
      href: "/profile", // Or login if not auth
      icon: User,
      action: null,
    },
    {
      label: "Menu",
      href: "/categories", 
      icon: Menu,
      action: null,
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 pb-[env(safe-area-inset-bottom)] md:hidden">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={item.action || undefined}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full gap-1 active:scale-90 transition-transform duration-200",
                isActive
                  ? "text-primary dark:text-white"
                  : "text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300"
              )}
            >
              <div className="relative">
                <Icon
                  className={cn(
                    "w-6 h-6 transition-all duration-300",
                    isActive && "fill-current"
                  )}
                  strokeWidth={isActive ? 2.5 : 2}
                />
                {item.count && item.count > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[9px] font-bold text-white ring-2 ring-white dark:ring-neutral-900">
                    {item.count}
                  </span>
                )}
              </div>
              <span className="text-[10px] font-medium leading-none">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
