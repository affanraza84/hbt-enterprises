"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Package, Truck, MapPin, Calendar, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { formatCurrency } from "@/lib/helpers";

// Mock Data (In a real app, fetch based on params.id)
const MOCK_ORDER = {
    id: "ORD-7382-9012",
    date: "Feb 9, 2026",
    total: 129999,
    status: "In Transit",
    paymentMethod: "Credit Card ending in 4242",
    address: {
        name: "Affan Raza",
        street: "123, Tech Park Road, Whitefield",
        city: "Bangalore",
        state: "Karnataka",
        pincode: "560066",
        phone: "9876543210"
    },
    items: [
      { 
          id: "prod_1",
          name: "Sony Bravia 55' 4K LED TV", 
          image: "https://m.media-amazon.com/images/I/81LcL9m7TQL._SX679_.jpg",
          price: 129999,
          quantity: 1
      }
    ]
};

export default function OrderDetailsPage({ params }: { params: { id: string } }) {
  // In a real app, use params.id to fetch data
  const order = MOCK_ORDER; 

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
            <Link href="/orders" className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors">
                <ArrowLeft className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
            </Link>
            <div>
                <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">Order Details</h1>
                <p className="text-sm text-neutral-500">ID: {order.id}</p>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Items & Status */}
            <div className="lg:col-span-2 space-y-6">
                {/* Status Card */}
                <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-sm border border-neutral-200 dark:border-neutral-700">
                    <h2 className="text-lg font-bold text-neutral-900 dark:text-white mb-4">Order Status</h2>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                            <Truck className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="font-bold text-lg text-blue-600 dark:text-blue-400">{order.status}</p>
                            <p className="text-sm text-neutral-500">Expected delivery by Feb 15, 2026</p>
                        </div>
                    </div>
                    {/* Progress Bar (Mock) */}
                    <div className="mt-6 relative">
                        <div className="h-2 bg-neutral-100 dark:bg-neutral-700 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-600 w-2/3 rounded-full"></div>
                        </div>
                        <div className="flex justify-between text-xs text-neutral-500 mt-2 font-medium">
                            <span>Placed</span>
                            <span>Shipped</span>
                            <span>Out for Delivery</span>
                            <span>Delivered</span>
                        </div>
                    </div>
                </div>

                {/* Items Card */}
                <div className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-sm border border-neutral-200 dark:border-neutral-700">
                    <div className="p-6 border-b border-neutral-200 dark:border-neutral-700">
                        <h2 className="text-lg font-bold text-neutral-900 dark:text-white">Items in Order</h2>
                    </div>
                    <div className="divide-y divide-neutral-100 dark:divide-neutral-700">
                        {order.items.map((item) => (
                            <div key={item.id} className="p-6 flex gap-4">
                                <div className="w-20 h-20 rounded-lg border border-neutral-200 dark:border-neutral-700 overflow-hidden bg-white shrink-0">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-contain p-2" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-neutral-900 dark:text-white mb-1">{item.name}</h3>
                                    <p className="text-sm text-neutral-500 mb-2">Qty: {item.quantity}</p>
                                    <p className="font-bold text-primary dark:text-white">{formatCurrency(item.price)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Column: Info */}
            <div className="space-y-6">
                {/* Shipping Address */}
                <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-sm border border-neutral-200 dark:border-neutral-700">
                    <h2 className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                        <MapPin className="w-4 h-4" /> Shipping Address
                    </h2>
                    <h3 className="font-bold text-neutral-900 dark:text-white mb-1">{order.address.name}</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-[200px]">
                        {order.address.street},<br />
                        {order.address.city}, {order.address.state} - {order.address.pincode}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                        Phone: {order.address.phone}
                    </p>
                </div>

                {/* Order Summary */}
                <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-sm border border-neutral-200 dark:border-neutral-700">
                     <h2 className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                        Order Summary
                    </h2>
                    <div className="space-y-3 text-sm">
                        <div className="flex justify-between text-neutral-600 dark:text-neutral-400">
                            <span>Subtotal</span>
                            <span>{formatCurrency(order.total)}</span>
                        </div>
                        <div className="flex justify-between text-neutral-600 dark:text-neutral-400">
                            <span>Delivery</span>
                            <span className="text-green-600">Free</span>
                        </div>
                        <div className="pt-3 border-t border-neutral-100 dark:border-neutral-700 flex justify-between font-bold text-lg text-neutral-900 dark:text-white">
                            <span>Total</span>
                            <span>{formatCurrency(order.total)}</span>
                        </div>
                    </div>
                </div>

                {/* Need Help */}
                <div className="bg-neutral-100 dark:bg-neutral-800/50 rounded-2xl p-6 text-center">
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                        Need help with this order?
                    </p>
                    <Link href="/contact">
                        <Button variant="outline" className="w-full bg-white dark:bg-neutral-800">
                            Contact Support
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
