"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Heart, UserCircle, Info } from "lucide-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

export function TopBar({ className }: { className?: string }) {
  return (
    <div className={cn("hidden md:block w-full z-50 bg-neutral-light", className)}>
      <div className="bg-neutral-light text-[11px] font-medium py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-end items-center gap-6">
           <Link href="/stores" className="flex items-center gap-1.5 text-primary hover:text-accent transition-colors">
              <MapPin className="w-3.5 h-3.5" />
              <span>Store Locator</span>
           </Link>
           <span className="text-primary/20">|</span>
           <Link href="/about" className="flex items-center gap-1.5 text-primary hover:text-accent transition-colors">
              <Info className="w-3.5 h-3.5" />
              <span>About Us</span>
           </Link>
           <span className="text-primary/20">|</span>
           <Link href="/contact" className="flex items-center gap-1.5 text-primary hover:text-accent transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span>Contact Us</span>
           </Link>
           <span className="text-primary/20">|</span>
           <SignedOut>
              <Link href="/sign-in" className="flex items-center gap-1.5 text-primary hover:text-accent transition-colors">
                  <UserCircle className="w-3.5 h-3.5" />
                  <span>Register / Sign in</span>
              </Link>
           </SignedOut>
           <SignedIn>
              <div className="flex items-center gap-1.5 text-primary">
                  <UserButton afterSignOutUrl="/" />
                  <span className="text-xs">My Account</span>
              </div>
           </SignedIn>
           <span className="text-primary/20">|</span>
           <div className="flex items-center gap-1.5 text-primary hover:text-accent transition-colors relative">
               <Link href="/wishlist" className="flex items-center gap-1.5">
                   <Heart className="w-3.5 h-3.5" />
                   <span>Wishlist</span>
               </Link>
           </div>
        </div>
      </div>
    </div>
  );
}
