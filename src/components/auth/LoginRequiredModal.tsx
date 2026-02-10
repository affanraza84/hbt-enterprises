"use client";

import React, { useEffect, useState } from 'react';
import { X, Lock } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface LoginRequiredModalProps {
  isOpen: boolean;
  onClose: () => void;
  message?: string;
}

export function LoginRequiredModal({ isOpen, onClose, message = "You need to be signed in to perform this action." }: LoginRequiredModalProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      document.body.style.overflow = 'hidden';
    } else {
      const timer = setTimeout(() => setIsAnimating(false), 300);
      document.body.style.overflow = 'unset';
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen && !isAnimating) return null;

  return (
    <div className={cn(
      "fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300",
      isOpen ? "opacity-100 visible" : "opacity-0 invisible"
    )}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className={cn(
        "relative bg-white dark:bg-neutral-900 w-full max-w-sm rounded-2xl shadow-2xl p-6 transform transition-all duration-300",
        isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
      )}>
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
            <Lock className="w-8 h-8" />
          </div>
          
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
            Sign In Required
          </h3>
          
          <p className="text-neutral-600 dark:text-neutral-400 mb-6 text-sm">
            {message}
          </p>

          <div className="w-full space-y-3">
            <Link 
              href="/sign-in" 
              onClick={onClose}
              className="block w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-xl transition-colors shadow-lg shadow-primary/25"
            >
              Sign In Now
            </Link>
            
            <button 
              onClick={onClose}
              className="block w-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 font-medium py-3 rounded-xl transition-colors"
            >
              Maybe Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
