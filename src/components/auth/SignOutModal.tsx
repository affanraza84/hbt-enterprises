"use client";

import React, { useEffect, useState } from 'react';
import { X, LogOut, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SignOutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function SignOutModal({ isOpen, onClose, onConfirm }: SignOutModalProps) {
  const [isAnimating, setIsAnimating] = useState(false);

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
          <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-4 text-red-500">
            <LogOut className="w-8 h-8 ml-1" />
          </div>
          
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
            Sign Out?
          </h3>
          
          <p className="text-neutral-600 dark:text-neutral-400 mb-6 text-sm">
            Are you sure you want to sign out of your account? You will need to sign in again to access your data.
          </p>

          <div className="w-full space-y-3">
            <button 
              onClick={onConfirm}
              className="block w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 rounded-xl transition-colors shadow-lg shadow-red-500/25"
            >
              Yes, Sign Out
            </button>
            
            <button 
              onClick={onClose}
              className="block w-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 font-medium py-3 rounded-xl transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
