"use client";

import React from 'react';
import Link from 'next/link';
import { 
  User, 
  Package, 
  Heart, 
  MapPin, 
  Settings, 
  LogOut, 
  ChevronRight, 
  HelpCircle,
  CreditCard,
  Bell
} from 'lucide-react';
import { cn } from '@/lib/utils';

import { useUser, useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfilePage() {
  const { user, isSignedIn } = useUser();
  const { signOut } = useClerk();
  const isAuthenticated = isSignedIn;
  const router = useRouter();
  
  const logout = async () => {
      await signOut();
      router.push("/");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md bg-white dark:bg-neutral-800 rounded-3xl shadow-xl p-8 text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <User className="w-10 h-10" />
            </div>
            
            <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3">
                Welcome to HBT
            </h1>
            
            <p className="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                Sign in to access your orders, wishlist, and saved addresses. Experience the best of shopping!
            </p>

            <Link 
                href="/sign-in" 
                className="block w-full bg-primary hover:bg-primary/90 text-white dark:text-neutral-900 font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/25 mb-4 active:scale-95"
            >
                Sign In / Sign Up
            </Link>


        </div>
      </div>
    );
  }

  // Map Clerk user data
  const displayUser = {
    name: user?.fullName || "User",
    email: user?.primaryEmailAddress?.emailAddress || "",
    avatar: user?.imageUrl || "https://api.dicebear.com/7.x/avataaars/svg?seed=User",
    stats: {
      orders: 0,
      wishlist: 0,
      reviews: 0
    }
  };

  const menuItems = [
    {
      title: "My Orders",
      icon: Package,
      href: "/orders",
      description: "Track, return, or buy things again"
    },
    {
      title: "My Wishlist",
      icon: Heart,
      href: "/wishlist",
      description: "Your favorite items saved for later"
    },
    {
      title: "Saved Addresses",
      icon: MapPin,
      href: "/addresses",
      description: "Manage your delivery locations"
    },
    {
      title: "Payment Methods",
      icon: CreditCard,
      href: "/payments",
      description: "Manage your saved cards and UPI"
    },
    {
      title: "Help Center",
      icon: HelpCircle,
      href: "/contact",
      description: "FAQs and customer support"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 pb-24 md:pb-12">
      {/* Header Section with Gradient */}
      <div className="relative bg-gradient-to-r from-primary to-accent pt-20 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full border-4 border-white/20 shadow-xl overflow-hidden mb-4 bg-white/10 backdrop-blur-sm">
             {/* Uses a placeholder avatar service */}
             <img src={displayUser.avatar} alt={displayUser.name} className="w-full h-full object-cover" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-1">{displayUser.name}</h1>
          <p className="text-white/80 text-sm">{displayUser.email}</p>
        </div>
      </div>

      {/* Stats Cards - Floating over header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white dark:bg-neutral-800 rounded-2xl p-4 shadow-lg text-center transform transition-transform hover:-translate-y-1 duration-300">
            <span className="block text-2xl font-bold text-primary dark:text-white mb-1">{displayUser.stats.orders}</span>
            <span className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Orders</span>
          </div>
          <div className="bg-white dark:bg-neutral-800 rounded-2xl p-4 shadow-lg text-center transform transition-transform hover:-translate-y-1 duration-300">
            <span className="block text-2xl font-bold text-primary dark:text-white mb-1">{displayUser.stats.wishlist}</span>
            <span className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Wishlist</span>
          </div>
          <div className="bg-white dark:bg-neutral-800 rounded-2xl p-4 shadow-lg text-center transform transition-transform hover:-translate-y-1 duration-300">
            <span className="block text-2xl font-bold text-primary dark:text-white mb-1">{displayUser.stats.reviews}</span>
            <span className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Reviews</span>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {menuItems.map((item, index) => (
            <Link 
              key={index} 
              href={item.href}
              className="group flex items-center p-4 bg-white dark:bg-neutral-800 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-700 hover:shadow-md hover:border-primary/20 dark:hover:border-primary/20 transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/5 dark:bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-200">
                <item.icon className="w-6 h-6" />
              </div>
              <div className="ml-4 flex-1">
                <h3 className="font-semibold text-neutral-900 dark:text-white group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
                  {item.description}
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-neutral-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>

        {/* Logout Section */}
        <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-700">
            <button 
                onClick={logout}
                className="w-full flex items-center justify-center gap-2 p-4 rounded-xl text-red-500 font-medium hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors"
            >
                <LogOut className="w-5 h-5" />
                Sign Out
            </button>
            <p className="text-center text-xs text-neutral-400 mt-4">
                Version 2.4.0 • HBT Enterprises
            </p>
        </div>
      </div>
    </div>
  );
}
