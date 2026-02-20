"use client";

import Link from "next/link";
import {
  Headphones,
  Facebook,
  Twitter,
  Instagram,
  Mail,
  MessageCircle,
  CreditCard,
  Linkedin,
  Lock,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-neutral-100 dark:bg-neutral-950 text-neutral-600 dark:text-neutral-400 border-t border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Column 1: Brand & Contact */}
          <div className="space-y-8">
            {/* Brand Logo */}
            <Link href="/" className="inline-block group">
              <span className="font-heading font-black text-3xl text-neutral-900 dark:text-white tracking-tight group-hover:opacity-80 transition-opacity">
                HBT <span className="text-accent">Enterprises</span>
              </span>
              <span className="block text-[10px] font-bold tracking-[0.2em] text-neutral-400 uppercase mt-1">
                Selling Joyfully
              </span>
            </Link>

            {/* Contact Info */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border-2 border-accent text-accent flex items-center justify-center shrink-0">
                <Headphones className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">
                  Got questions? Call us!
                </p>
                <a
                  className="text-xl font-bold text-neutral-900 dark:text-white hover:text-accent transition-colors block whitespace-nowrap"
                >
                  965 7866 739
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/hbt_enterprises?igsh=cnN2anVlcnVvZnl0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-900 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:bg-accent hover:text-white dark:hover:bg-accent dark:hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <a
                href="mailto:arifbadmash488@gmail.com"
                className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-900 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:bg-accent hover:text-white dark:hover:bg-accent dark:hover:text-white transition-all"
                aria-label="Email Us"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Find it Fast (Double Width on MD?) - Adjusted to single column for grid flow but with internal grid */}
          <div className="lg:col-span-1">
            <h4 className="text-neutral-900 dark:text-accent font-bold mb-6 text-lg">
              Find it Fast
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
              <Link
                href="/products?category=television"
                className="hover:text-accent transition-colors"
              >
                Televisions
              </Link>
              <Link
                href="/products?category=washing-machine"
                className="hover:text-accent transition-colors"
              >
                Washing Machines
              </Link>

              <Link
                href="/products?category=smart-phone"
                className="hover:text-accent transition-colors"
              >
                Smart Phones
              </Link>
              <Link
                href="/products?category=cooler"
                className="hover:text-accent transition-colors"
              >
                Coolers
              </Link>

              <Link
                href="/products?category=soundbar"
                className="hover:text-accent transition-colors"
              >
                Soundbars
              </Link>
              <Link
                href="/products?category=refrigerator"
                className="hover:text-accent transition-colors"
              >
                Refrigerators
              </Link>

              <Link
                href="/products?category=air-conditioner"
                className="hover:text-accent col-span-2 transition-colors"
              >
                Air Conditioners
              </Link>
            </div>
          </div>

          {/* Column 3: My Account */}
          <div>
            <h4 className="text-neutral-900 dark:text-accent font-bold mb-6 text-lg">
              My Account
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/profile"
                  className="hover:text-accent transition-colors"
                >
                  My Account
                </Link>
              </li>
              <li>
                <Link
                  href="/wishlist"
                  className="hover:text-accent transition-colors"
                >
                  Wish List
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="hover:text-accent transition-colors"
                >
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: About */}
          <div>
            <h4 className="text-neutral-900 dark:text-accent font-bold mb-6 text-lg">
              About
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-accent transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/promise"
                  className="hover:text-accent transition-colors"
                >
                  Our Promise
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-accent transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Policies */}
          <div>
            <h4 className="text-neutral-900 dark:text-accent font-bold mb-6 text-lg">
              Policies
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-accent transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-accent transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="hover:text-accent transition-colors"
                >
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  href="/cancellation"
                  className="hover:text-accent transition-colors"
                >
                  Cancellation, Returns & Refunds
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Developer Badge */}
      <div className="bg-accent text-white py-4 relative overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center md:text-left">
            <p className="text-sm font-medium">
              &copy; {new Date().getFullYear()}{" "}
              <span className="font-bold">HBT Enterprises</span> - All rights
              reserved
            </p>
            
            {/* Compact Developer Badge */}
            <Link 
              href="https://www.linkedin.com/in/mohammad-affan-raza-b6039b288?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
              target="_blank"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/30 transition-all duration-300 group"
            >
              <span className="text-[10px] uppercase tracking-wider font-semibold opacity-70 group-hover:opacity-100 transition-opacity">
                Created by
              </span>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-xs group-hover:text-white transition-colors">
                  Affan Raza
                </span>
                <Linkedin className="w-3 h-3 opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>

            {/* Admin Access Link - Larger Button */}
            <Link
              href="/admin"
              className="ml-4 flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group"
              title="Admin Panel"
            >
              <Lock className="w-4 h-4 text-blue-500 group-hover:text-blue-400 transition-colors" />
              <span className="text-xs uppercase font-bold text-blue-500 group-hover:text-blue-400 transition-colors">
                Admin Access
              </span>
            </Link>
          </div>

          {/* Payment Icons */}
          <div className="flex items-center gap-3 opacity-90">
            {/* Visual representation of payment icons using Tailwind/Text or Placeholders */}
            {/* In a real app, these would be SVGs or Images */}
            <div
              className="h-8 w-12 bg-white rounded flex items-center justify-center text-blue-800 font-bold italic text-xs"
              title="Visa"
            >
              VISA
            </div>
            <div
              className="h-8 w-12 bg-white rounded flex items-center justify-center text-red-600 font-bold text-[10px]"
              title="Mastercard"
            >
              MC
            </div>
            <div
              className="h-8 w-12 bg-white rounded flex items-center justify-center text-blue-500 font-bold text-[10px]"
              title="Amex"
            >
              AMEX
            </div>
            <div
              className="h-8 w-12 bg-white rounded flex items-center justify-center text-neutral-800 font-bold text-[10px]"
              title="UPI"
            >
              UPI
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
