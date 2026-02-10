"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Heart, UserCircle, Info } from "lucide-react";
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

export function TopBar({ className }: { className?: string }) {
  const { user } = useUser();

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
               <Link href="/profile" className="flex items-center gap-2 text-primary hover:text-accent transition-colors group">
                   <div className="w-5 h-5 rounded-full bg-neutral-100 border border-neutral-200 overflow-hidden relative">
                        {user?.imageUrl ? (
                            <img src={user.imageUrl} alt="Profile" className="w-full h-full object-cover" />
                        ) : (
                            <UserCircle className="w-full h-full text-neutral-400" />
                        )}
                   </div>
                   <span className="text-xs font-bold group-hover:text-accent transition-colors">My Account</span>
               </Link>
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
