"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, ArrowLeft, ChevronDown } from "lucide-react";
import { CATEGORIES } from "@/components/layout/CategoryMegaMenu";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export default function CategoriesPage() {
  const router = useRouter();
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (id: string) => {
    setOpenCategory(openCategory === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-neutral-light dark:bg-neutral-900 pb-24 pt-4">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 px-4 py-3 flex items-center gap-4 shadow-sm mb-4">
        <button 
          onClick={() => router.back()}
          className="p-2 -ml-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />
        </button>
        <h1 className="text-lg font-bold text-primary dark:text-white">All Categories</h1>
      </div>

      <div className="px-4 space-y-3">
        {CATEGORIES.map((cat) => {
          const isOpen = openCategory === cat.id;
          return (
            <div key={cat.id} className="bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden shadow-sm transition-all duration-300">
              <button 
                onClick={() => toggleCategory(cat.id)}
                className="w-full px-4 py-4 bg-white dark:bg-neutral-800 flex items-center justify-between active:bg-neutral-50 dark:active:bg-neutral-700/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                    {/* Placeholder for icon if needed */}
                   <span className="font-bold text-base text-neutral-900 dark:text-white">{cat.label}</span>
                </div>
                <div className={cn(
                    "p-1 rounded-full transition-all duration-300",
                    isOpen ? "bg-accent/10 rotate-180" : "bg-neutral-100 dark:bg-neutral-700"
                )}>
                    <ChevronDown className={cn(
                        "w-5 h-5 transition-colors",
                        isOpen ? "text-accent" : "text-neutral-500 dark:text-neutral-400"
                    )} />
                </div>
              </button>
              
              <div className={cn(
                  "grid transition-all duration-300 ease-in-out",
                  isOpen ? "grid-rows-[1fr] opacity-100 border-t border-neutral-100 dark:border-neutral-700" : "grid-rows-[0fr] opacity-0"
              )}>
                <div className="overflow-hidden">
                    <div className="p-0 pb-2">
                    {cat.subgroups.map((group, idx) => (
                        <div key={idx} className="border-b border-neutral-50 dark:border-neutral-700/30 last:border-0 last:pb-0">
                        <div className="px-4 py-2 mt-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-accent/80">
                                {group.title}
                            </span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 px-3 pb-3">
                            {group.items.map((item, i) => (
                            <Link 
                                key={i}
                                href={`/products?category=${cat.id}&type=${item}`}
                                className="flex items-center justify-center text-center px-3 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-100 dark:border-neutral-700/50 text-sm text-neutral-700 dark:text-neutral-300 active:scale-95 transition-all hover:border-accent/30 hover:bg-accent/5 hover:text-accent"
                            >
                                {item}
                            </Link>
                            ))}
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
