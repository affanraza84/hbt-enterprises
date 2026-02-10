"use client";

import Link from "next/link";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { CATEGORIES } from "@/components/layout/CategoryMegaMenu";
import { useRouter } from "next/navigation";

export default function CategoriesPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-neutral-light dark:bg-neutral-900 pb-20">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 px-4 py-4 flex items-center gap-4">
        <button 
          onClick={() => router.back()}
          className="p-2 -ml-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />
        </button>
        <h1 className="text-lg font-bold text-primary dark:text-white">All Categories</h1>
      </div>

      <div className="p-4 space-y-4">
        {CATEGORIES.map((cat) => (
          <div key={cat.id} className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden shadow-sm">
            <div className="px-4 py-3 bg-neutral-50 dark:bg-neutral-800/50 border-b border-neutral-100 dark:border-neutral-700 flex items-center justify-between">
              <h2 className="font-bold text-neutral-900 dark:text-white">{cat.label}</h2>
            </div>
            <div className="p-0">
              {cat.subgroups.map((group, idx) => (
                <div key={idx} className="border-b border-neutral-100 dark:border-neutral-700/50 last:border-0">
                  <div className="px-4 py-2 bg-neutral-50/50 dark:bg-neutral-900/30">
                     <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                        {group.title}
                     </span>
                  </div>
                  <div className="divide-y divide-neutral-100 dark:divide-neutral-700/50">
                    {group.items.map((item, i) => (
                      <Link 
                        key={i}
                        href={`/products?category=${cat.id}&type=${item}`}
                        className="flex items-center justify-between px-4 py-3 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700/30 active:bg-neutral-100 transition-colors"
                      >
                        {item}
                        <ChevronRight className="w-4 h-4 text-neutral-400" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
