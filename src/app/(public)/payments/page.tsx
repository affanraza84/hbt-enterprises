"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, CreditCard, Plus, Trash2, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function PaymentsPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
                <Link href="/profile" className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors">
                    <ArrowLeft className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
                </Link>
                <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">Payment Methods</h1>
            </div>
            <Button className="flex items-center gap-2 bg-primary text-white">
                <Plus className="w-4 h-4" /> Add New
            </Button>
        </div>

        <div className="space-y-6">
            {/* Credit Cards Section */}
            <div>
                <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-4">Saved Cards</h3>
                <div className="grid gap-4">
                    {/* Mock Visa Card */}
                    <div className="bg-gradient-to-br from-[#1a1f71] to-[#004e92] rounded-2xl p-6 text-white shadow-lg relative overflow-hidden max-w-sm">
                        <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="flex justify-between items-start mb-8 relative z-10">
                            <span className="font-mono text-sm opacity-80">HDFC Bank</span>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4 brightness-200 invert" />
                        </div>
                        <div className="font-mono text-xl tracking-widest mb-6 relative z-10">
                            **** **** **** 4242
                        </div>
                        <div className="flex justify-between items-end relative z-10">
                            <div>
                                <span className="block text-xs opacity-60 mb-1">Card Holder</span>
                                <span className="font-bold uppercase text-sm">Affan Raza</span>
                            </div>
                            <div>
                                <span className="block text-xs opacity-60 mb-1">Expires</span>
                                <span className="font-bold text-sm">12/28</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* UPI Section */}
            <div>
                <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-4">Saved UPI IDs</h3>
                <div className="bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 divide-y divide-neutral-100 dark:divide-neutral-700">
                    <div className="p-4 flex items-center justify-between">
                         <div className="flex items-center gap-4">
                             <div className="w-10 h-10 bg-neutral-100 dark:bg-neutral-700 rounded-lg flex items-center justify-center">
                                 <Smartphone className="w-5 h-5 text-neutral-600 dark:text-neutral-300" />
                             </div>
                             <div>
                                 <p className="font-bold text-neutral-900 dark:text-white">Google Pay</p>
                                 <p className="text-sm text-neutral-500">affan@okhdfcbank</p>
                             </div>
                         </div>
                         <button className="text-neutral-400 hover:text-red-500 transition-colors">
                             <Trash2 className="w-4 h-4" />
                         </button>
                    </div>
                    <div className="p-4 flex items-center justify-between">
                         <div className="flex items-center gap-4">
                             <div className="w-10 h-10 bg-neutral-100 dark:bg-neutral-700 rounded-lg flex items-center justify-center">
                                 <Smartphone className="w-5 h-5 text-neutral-600 dark:text-neutral-300" />
                             </div>
                             <div>
                                 <p className="font-bold text-neutral-900 dark:text-white">PhonePe</p>
                                 <p className="text-sm text-neutral-500">9876543210@ybl</p>
                             </div>
                         </div>
                         <button className="text-neutral-400 hover:text-red-500 transition-colors">
                             <Trash2 className="w-4 h-4" />
                         </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
