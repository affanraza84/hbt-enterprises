'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export default function CheckoutPage() {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate checkout
        setTimeout(() => setIsLoading(false), 2000);
    };

  return (
    <div className="bg-neutral-light min-h-screen pb-24">
      <div className="bg-primary-dark pb-32 pt-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-white dark:text-primary font-heading">Secure Checkout</h1>
              <p className="mt-2 text-primary-light">Complete your purchase securely.</p>
          </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-24">
        <form className="lg:grid lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16" onSubmit={handleSubmit}>
          
          {/* Form Section */}
          <div className="lg:col-span-7 space-y-8">
            {/* Contact Info */}
            <div className="bg-white dark:bg-neutral-default rounded-2xl p-8 shadow-sm border border-neutral-default">
              <h2 className="text-lg font-bold text-primary mb-6 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-primary-dark">1</span>
                  Contact Information
              </h2>
              <div className="grid grid-cols-1 gap-y-6">
                <Input id="email-address" type="email" label="Email address" placeholder="you@example.com" required />
              </div>
            </div>

            {/* Shipping Info */}
            <div className="bg-white dark:bg-neutral-default rounded-2xl p-8 shadow-sm border border-neutral-default">
              <h2 className="text-lg font-bold text-primary mb-6 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-default text-xs font-bold text-primary">2</span>
                  Shipping Details
              </h2>
              <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                <Input id="first-name" type="text" label="First name" required />
                <Input id="last-name" type="text" label="Last name" required />
                <div className="sm:col-span-2">
                    <Input id="address" type="text" label="Address" required />
                </div>
                <div className="sm:col-span-1">
                    <Input id="city" type="text" label="City" required />
                </div>
                <div className="sm:col-span-1">
                    <Input id="postal-code" type="text" label="Postal code" required />
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="mt-8 lg:mt-0 lg:col-span-5">
            <div className="bg-white dark:bg-neutral-default rounded-2xl shadow-lg border border-neutral-default p-8 sticky top-24">
                <h2 className="text-lg font-medium text-primary mb-4">Order Summary</h2>
                
                <div className="flow-root mb-8">
                   <ul className="-my-4 divide-y divide-neutral-default">
                       {/* Placeholder Item */}
                       <li className="flex items-center space-x-4 py-4">
                           <div className="h-16 w-16 flex-none rounded-md bg-neutral-light border border-neutral-default"></div>
                           <div className="flex-auto">
                               <h3 className="text-base font-medium text-primary">Tech Item</h3>
                               <p className="text-sm text-neutral-dark">Qty 1</p>
                           </div>
                           <p className="flex-none text-base font-medium text-primary">$0.00</p>
                       </li>
                   </ul>
                </div>

                <div className="border-t border-neutral-default pt-4 space-y-4">
                    <div className="flex items-center justify-between text-base font-medium text-primary">
                        <p>Total</p>
                        <p>$0.00</p>
                    </div>
                </div>

                <div className="mt-8">
                    <Button type="submit" className="w-full" size="lg" isLoading={isLoading}>
                        Pay Now
                    </Button>
                    <p className="mt-4 text-center text-xs text-neutral-dark flex items-center justify-center gap-1">
                        🔒 Encrypted and Secure
                    </p>
                </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
