"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { ArrowDownUp, TrendingUp, DollarSign, Clock } from "lucide-react";

export function ProductSort() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSort = searchParams.get("sort") || "newest";

  const sortOptions = [
    { label: "Newest Arrivals", value: "newest", icon: Clock },
    { label: "Price: Low to High", value: "price_asc", icon: TrendingUp },
    { label: "Price: High to Low", value: "price_desc", icon: DollarSign },
  ];

  const handleSort = (sortValue: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", sortValue);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="w-full mb-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 shadow-sm">
        <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 min-w-fit">
          <ArrowDownUp className="w-4 h-4" />
          <span className="text-sm font-medium">Sort by:</span>
        </div>
        
        <div className="flex flex-wrap gap-2 w-full">
          {sortOptions.map((option) => {
             const isActive = currentSort === option.value;
             const Icon = option.icon;
             return (
              <button
                key={option.value}
                onClick={() => handleSort(option.value)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border",
                  isActive
                    ? "bg-primary text-white dark:text-neutral-900 border-primary shadow-md shadow-primary/20"
                    : "bg-neutral-50 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-100 border-neutral-200 dark:border-neutral-700 hover:border-primary/50 hover:active:border-primary hover:bg-white dark:hover:bg-neutral-700 transition-colors"
                )}
              >
                <Icon className={cn("w-3.5 h-3.5", isActive ? "text-white dark:text-neutral-900" : "text-neutral-500 dark:text-neutral-300")} />
                {option.label}
              </button>
             );
          })}
        </div>
      </div>
    </div>
  );
}
