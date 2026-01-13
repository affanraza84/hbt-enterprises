'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function CartPage() {
  return (
    <div className="bg-neutral-light min-h-screen py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-primary font-heading mb-12">Shopping Chart</h1>
          
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
            {/* Cart Items */}
            <div className="lg:col-span-8">
                <div className="bg-white dark:bg-neutral-default rounded-2xl shadow-sm border border-neutral-default overflow-hidden">
                    <ul className="divide-y divide-neutral-default">
                         {/* Empty State for minimal build */}
                         <li className="p-12 text-center">
                             <div className="mx-auto w-24 h-24 bg-neutral-light rounded-full flex items-center justify-center mb-4">
                                 <svg className="w-10 h-10 text-neutral-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                             </div>
                             <h3 className="text-lg font-medium text-primary">Your cart is empty</h3>
                             <p className="mt-1 text-neutral-dark mb-6">Looks like you haven&apos;t added any tech gear yet.</p>
                             <Link href="/products">
                                <Button variant="outline">Continue Shopping</Button>
                             </Link>
                         </li>
                    </ul>
                </div>
            </div>
            
            {/* Order Summary */}
            <div className="mt-16 lg:mt-0 lg:col-span-4">
              <div className="rounded-2xl bg-white dark:bg-neutral-default border border-neutral-default shadow-sm p-6 lg:p-8 sticky top-24">
                <h2 className="text-lg font-bold text-primary mb-6">Order Summary</h2>
                
                <dl className="space-y-4">
                    <div className="flex items-center justify-between border-b border-neutral-default pb-4">
                        <dt className="text-sm text-neutral-dark">Subtotal</dt>
                        <dd className="text-sm font-medium text-primary">$0.00</dd>
                    </div>
                    <div className="flex items-center justify-between py-4">
                        <dt className="text-base font-bold text-primary">Total</dt>
                        <dd className="text-xl font-bold text-primary">$0.00</dd>
                    </div>
                </dl>
    
                <div className="mt-8">
                  <Link href="/checkout">
                      <Button className="w-full shadow-lg shadow-accent/20" size="lg">Proceed to Checkout</Button>
                  </Link>
                </div>
                
                <div className="mt-6 flex items-center justify-center gap-2 opacity-50">
                    {/* Trust badges placeholder */}
                    <div className="h-6 w-10 bg-neutral-default rounded"></div>
                    <div className="h-6 w-10 bg-neutral-default rounded"></div>
                    <div className="h-6 w-10 bg-neutral-default rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
