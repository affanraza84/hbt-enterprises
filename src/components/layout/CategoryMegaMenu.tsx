"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, ChevronRight } from 'lucide-react';
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

// Data Structure based on User Images
const CATEGORIES = [
  {
    id: "accessories",
    label: "Accessories",
    subgroups: [
      {
        title: "Bluetooth Speakers",
        items: ["Saregama", "boAt", "Marshall", "LG", "Bose"],
      },
      {
        title: "Neckband & Earbuds",
        items: ["boAt", "URBAN", "Zebronics", "Marshall", "JBL"],
      },
      {
        title: "Smart Watch",
        items: ["boAt", "Fire Boltt", "Noise"],
      },
      {
        title: "Bluetooth Headphone",
        items: ["boAt", "Zebronics", "Marshall", "JBL"],
      },
      {
        title: "Wired Earphones",
        items: ["boAt", "Zebronics", "JBL"],
      },
    ],
  },
  {
    id: "air-conditioner",
    label: "Air Conditioner",
    subgroups: [
      {
        title: "Brand",
        items: [
          "Carrier",
          "Daikin",
          "Electrolux",
          "Godrej",
          "Hitachi",
          "Kelvinator",
          "LG",
          "Lloyd",
          "Mitsubishi",
          "O General",
          "Onida",
          "Samsung",
          "Voltas",
          "Blue Star",
          "HAIER",
        ],
      },
      {
        title: "Split AC",
        items: [
          "0.8 Ton",
          "1.0 Ton",
          "1.5 Ton",
          "1.8 Ton",
          "2.0 Ton",
          "2.2 Ton",
          "2.5 Ton",
          "1.9 Ton",
        ],
      },
      {
        title: "Window",
        items: ["1.1 TON", "1.0 Ton", "1.5 Ton", "2.0 Ton"],
      },
    ],
  },
  {
    id: "laptops-printer",
    label: "Laptops & Printer",
    subgroups: [
      {
        title: "Desktop",
        items: ["Pentium", "Intel Celeron", "All in one"],
      },
      {
        title: "Laptops",
        items: ["HP", "Lenovo"],
      },
      {
        title: "Printers",
        items: ["HP"],
      },
    ],
  },
  {
    id: "home-appliances",
    label: "Home Appliances",
    subgroups: [
      {
        title: "Refrigerator",
        items: ["Direct Cool", "Frost Free", "Side-By-Side", "Deep Freezer"],
      },
      {
        title: "Washing Machine",
        items: [
          "Semi Automatic",
          "Front Loading",
          "Top Loading",
          "Washer Dryer",
          "WashTower",
        ],
      },
      {
        title: "Dishwashers",
        items: ["Free Standing"],
      },
      {
        title: "Dryers",
        items: ["Condenser", "Vented", "Heat Pump Dryer"],
      },
      {
        title: "Air Purifiers",
        items: [], // No items shown in snippet but category exists
      },
      {
        title: "Water Purifier",
        items: ["RO", "RO + UV", "RO + UV + UF"],
      },
      {
        title: "Home Security",
        items: ["SAFE & LOCKERS"],
      },
    ],
  },
  {
    id: "home-entertainment",
    label: "Home Entertainment",
    subgroups: [
      {
        title: "Televisions",
        items: ["LED TV", "QLED TV", "OLED TV", "4K Ultra HD", "Smart TV"],
      },
      {
        title: "Audio Systems",
        items: ["Soundbars", "Home Theatre", "Party Speakers"],
      },
    ],
  },
  {
    id: "smart-phone",
    label: "Smart Phone",
    subgroups: [
      {
        title: "Brands",
        items: [
          "Apple",
          "Samsung",
          "OnePlus",
          "Xiaomi",
          "Vivo",
          "Oppo",
          "Realme",
        ],
      },
    ],
  },
  {
    id: "microwaves",
    label: "Microwaves",
    subgroups: [
      {
        title: "Types",
        items: ["Solo", "Grill", "Convection"],
      },
    ],
  },
  {
    id: "air-coolers",
    label: "Air Coolers",
    subgroups: [
      {
        title: "Types",
        items: ["Personal", "Desert", "Window", "Tower"],
      },
    ],
  },
];

export function CategoryMegaMenu() {
  const [activeCategory, setActiveCategory] = useState<string | null>(
    CATEGORIES[0].id,
  );
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const activeData = CATEGORIES.find((c) => c.id === activeCategory);

  // Robust check for dark mode
  const isDark = resolvedTheme === "dark";

  return (
    <div ref={menuRef} className="relative group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors rounded-t-md text-sm font-semibold uppercase tracking-wide border border-transparent dark:border-neutral-800"
      >
        <span>All Categories</span>
        <ChevronDown
          className={cn(
            "w-4 h-4 ml-1 transform transition-transform duration-200",
            isOpen ? "rotate-0" : "-rotate-90"
          )}
        />
      </button>

      {/* Dropdown Content */}
      <div
        style={{ backgroundColor: isDark ? "#000000" : "#ffffff" }}
        className={cn(
          "absolute left-0 top-full w-[800px] h-[500px] border border-neutral-200 dark:border-neutral-800 shadow-2xl flex z-50 transition-all duration-200 origin-top-left",
          isOpen
            ? "opacity-100 scale-100 visible"
            : "opacity-0 scale-95 invisible",
        )}
      >
        {/* Left Sidebar: Categories */}
        <div
          style={{ backgroundColor: isDark ? "#000000" : "#fafafa" }}
          className="w-1/3 border-r border-neutral-200 dark:border-neutral-800 overflow-y-auto"
        >
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              onMouseEnter={() => setActiveCategory(cat.id)}
              className={cn(
                "flex items-center justify-between px-4 py-3 cursor-pointer transition-colors border-b border-neutral-100 dark:border-neutral-900/50",
                activeCategory === cat.id
                  ? isDark
                    ? "bg-neutral-900 text-blue-400 border-l-4 border-blue-400"
                    : "bg-indigo-50 text-indigo-700 border-l-4 border-indigo-700"
                  : isDark
                    ? "text-gray-100 hover:text-white hover:bg-neutral-900"
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100",
              )}
            >
              <span
                className={cn(
                  "text-sm font-bold",
                  activeCategory === cat.id
                    ? "text-indigo-700 dark:text-blue-400"
                    : "",
                )}
              >
                {cat.label}
              </span>
              {activeCategory === cat.id && (
                <ChevronRight className="w-4 h-4 text-indigo-700 dark:text-blue-400" />
              )}
            </div>
          ))}
        </div>

        {/* Right Content: Subcategories */}
        <div
          style={{ backgroundColor: isDark ? "#000000" : "#ffffff" }}
          className="w-2/3 p-6 overflow-y-auto"
        >
          {activeData && (
            <div className="grid grid-cols-3 gap-8 content-start">
              {activeData.subgroups.map((group, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  <h3 className="text-neutral-900 dark:text-white text-sm font-semibold border-b border-neutral-200 dark:border-neutral-700 pb-2 mb-1">
                    {group.title}
                  </h3>
                  <ul className="space-y-2">
                    {group.items.map((item, i) => (
                      <li key={i}>
                        <Link
                          href={`/products?category=${activeData.id}&type=${item}`}
                          className="text-xs text-neutral-600 dark:text-neutral-300 hover:text-indigo-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1 before:content-['o'] before:text-[8px] before:mr-1 before:text-neutral-400 dark:before:text-neutral-500"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
