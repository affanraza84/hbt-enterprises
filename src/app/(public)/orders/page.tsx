"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Package, Truck, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";

// Mock Data
const MOCK_ORDERS = [
  {
    id: "ORD-7382-9012",
    date: "Feb 9, 2026",
    total: 129999,
    status: "In Transit",
    items: [
      { name: "Sony Bravia 55' 4K LED TV", image: "https://m.media-amazon.com/images/I/81LcL9m7TQL._SX679_.jpg" }
    ]
  },
  {
    id: "ORD-9921-8273",
    date: "Jan 15, 2026",
    total: 2499,
    status: "Delivered",
    items: [
      { name: "Wireless Earbuds Pro", image: "https://m.media-amazon.com/images/I/61SUj2aKoEL._SX679_.jpg" },
      { name: "Fast Charger 65W", image: "https://m.media-amazon.com/images/I/61D7rO2aWXL._SX679_.jpg" }
    ]
  }
];

export default function OrdersPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
            <Link href="/profile" className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors">
                <ArrowLeft className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
            </Link>
            <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">My Orders</h1>
        </div>

        {MOCK_ORDERS.length === 0 ? (
           <div className="bg-white dark:bg-neutral-800 rounded-2xl p-12 text-center shadow-sm border border-neutral-200 dark:border-neutral-700">
              <div className="w-20 h-20 bg-neutral-100 dark:bg-neutral-700 rounded-full flex items-center justify-center mx-auto mb-6 text-neutral-400">
                  <Package className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">No orders yet</h3>
              <p className="text-neutral-500 mb-8 max-w-sm mx-auto">Looks like you haven't bought anything yet. Explore our store to find amazing products!</p>
              <Link href="/products">
                  <Button className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-3 rounded-full">
                      Start Shopping
                  </Button>
              </Link>
           </div>
        ) : (
            <div className="space-y-6">
                {MOCK_ORDERS.map((order) => (
                    <div key={order.id} className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-sm border border-neutral-200 dark:border-neutral-700 hover:border-primary/30 transition-colors">
                        {/* Order Header */}
                        <div className="p-4 sm:p-6 bg-neutral-50 dark:bg-neutral-800/50 border-b border-neutral-200 dark:border-neutral-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="flex flex-col gap-1">
                                <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Order ID</span>
                                <span className="text-sm font-bold text-neutral-900 dark:text-white font-mono">{order.id}</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Date Placed</span>
                                <span className="text-sm font-medium text-neutral-900 dark:text-white">{order.date}</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Total Amount</span>
                                <span className="text-sm font-bold text-primary dark:text-white">₹{order.total.toLocaleString()}</span>
                            </div>
                             <div className="sm:ml-auto">
                                <Link href={`/orders/${order.id}`}>
                                    <Button variant="outline" size="sm" className="w-full sm:w-auto">
                                        View Details
                                    </Button>
                                </Link>
                             </div>
                        </div>

                        {/* Order Items & Status */}
                        <div className="p-4 sm:p-6 flex flex-col sm:flex-row gap-6">
                            {/* Images */}
                            <div className="flex -space-x-4 overflow-hidden py-2">
                                {order.items.map((item, i) => (
                                    <div key={i} className="relative w-16 h-16 rounded-lg border-2 border-white dark:border-neutral-800 overflow-hidden bg-white">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-contain p-1" />
                                    </div>
                                ))}
                            </div>

                            {/* Status */}
                            <div className="flex-1 flex flex-col justify-center gap-2">
                                <div className="flex items-center gap-2">
                                    {order.status === 'Delivered' ? (
                                        <CheckCircle className="w-5 h-5 text-green-500" />
                                    ) : (
                                        <Truck className="w-5 h-5 text-blue-500" />
                                    )}
                                    <span className={`font-bold ${order.status === 'Delivered' ? 'text-green-600' : 'text-blue-600'}`}>
                                        {order.status}
                                    </span>
                                </div>
                                <p className="text-sm text-neutral-500">
                                    {order.status === 'Delivered' 
                                        ? "Item has been delivered successfully."
                                        : "Your item is on the way and will arrive soon."}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )}
      </div>
    </div>
  );
}
