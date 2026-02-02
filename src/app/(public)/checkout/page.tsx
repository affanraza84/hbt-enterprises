import { ProductService } from '@/services/product.service';
import { formatCurrency } from '@/lib/helpers';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, Lock, ShieldCheck, Truck, CreditCard, Banknote } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export const revalidate = 3600;

interface CheckoutPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function CheckoutPage(props: CheckoutPageProps) {
  const searchParams = await props.searchParams;
  const productSlug = typeof searchParams.product === 'string' ? searchParams.product : undefined;
  
  // If no product specified, ideally redirect to cart, but for now we handle the "Buy Now" case.
  const product = productSlug ? await ProductService.getProductBySlug(productSlug) : null;

  if (!product) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <h1 className="text-2xl font-bold mb-4">Product not found</h1>
            <Link href="/" className="text-blue-600 hover:underline">Return Home</Link>
        </div>
    );
  }

  // Calculate generic shipping/tax logic for display
  const deliveryFee = 0; // Free delivery
  const tax = product.price * 0.18; // Est 18% GST included usually, but showing breakdown helps
  // Actually reference says "Inclusive of all taxes", so we show Price as Final. 
  // Maybe show breakdown of Base + Tax = Total.
  // For simplicity and matching "Joy Price", we treat product.price as the final reduced price.
  
  const discountAmount = product.originalPrice ? product.originalPrice - product.price : 0;

  return (
    <div className="bg-neutral-50 dark:bg-neutral-900 min-h-screen pb-20 font-sans">
      {/* Simple Header for Checkout */}
      <div className="bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 sticky top-0 z-30">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
              <Link href={`/products/${productSlug}`} className="flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                  Back to Product
              </Link>
              <div className="flex items-center gap-2 text-green-600">
                  <Lock className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Secure Checkout</span>
              </div>
          </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Column: Forms (7/12) */}
            <div className="lg:col-span-7 space-y-8">
                
                {/* 1. Contact Info */}
                <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm">
                    <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
                        Contact Information
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-neutral-500 uppercase">Email Address</label>
                            <Input placeholder="john@example.com" type="email" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-neutral-500 uppercase">Phone Number</label>
                            <Input placeholder="+91 98765 43210" type="tel" />
                        </div>
                    </div>
                </div>

                {/* 2. Shipping Address */}
                <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm">
                    <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">2</span>
                        Shipping Address
                    </h2>
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-neutral-500 uppercase">First Name</label>
                                <Input placeholder="John" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-neutral-500 uppercase">Last Name</label>
                                <Input placeholder="Doe" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-neutral-500 uppercase">Address</label>
                            <Input placeholder="Flat / House No / Floor / Building" />
                        </div>
                        <div className="space-y-2">
                            <Input placeholder="Colony / Street / Locality" />
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-neutral-500 uppercase">City</label>
                                <Input placeholder="City" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-neutral-500 uppercase">State</label>
                                <Input placeholder="State" />
                            </div>
                            <div className="space-y-2 col-span-2 md:col-span-1">
                                <label className="text-xs font-bold text-neutral-500 uppercase">Pincode</label>
                                <Input placeholder="110001" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. Payment Method */}
                <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm">
                    <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">3</span>
                        Payment
                    </h2>
                    
                    <div className="space-y-3">
                        <label className="flex items-center gap-4 p-4 border border-blue-600 bg-blue-50/50 dark:bg-blue-900/10 dark:border-blue-500 rounded-lg cursor-pointer transition-all">
                            <input type="radio" name="payment" defaultChecked className="w-4 h-4 text-blue-600" />
                            <div className="flex-1">
                                <span className="block font-bold text-sm text-neutral-900 dark:text-white">Credit / Debit Card</span>
                                <span className="block text-xs text-neutral-500">Visa, Mastercard, RuPay, Amex</span>
                            </div>
                            <CreditCard className="w-5 h-5 text-neutral-400" />
                        </label>

                        <label className="flex items-center gap-4 p-4 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 rounded-lg cursor-pointer transition-all">
                            <input type="radio" name="payment" className="w-4 h-4 text-blue-600" />
                            <div className="flex-1">
                                <span className="block font-bold text-sm text-neutral-900 dark:text-white">UPI / Net Banking</span>
                                <span className="block text-xs text-neutral-500">Google Pay, PhonePe, Paytm</span>
                            </div>
                            {/* Placeholder Icon */}
                            <SmartphoneIcon className="w-5 h-5 text-neutral-400" />
                        </label>

                        <label className="flex items-center gap-4 p-4 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 rounded-lg cursor-pointer transition-all">
                            <input type="radio" name="payment" className="w-4 h-4 text-blue-600" />
                            <div className="flex-1">
                                <span className="block font-bold text-sm text-neutral-900 dark:text-white">Cash on Delivery</span>
                                <span className="block text-xs text-neutral-500">Pay when you receive connection</span>
                            </div>
                            <Banknote className="w-5 h-5 text-neutral-400" />
                        </label>
                    </div>
                </div>

                <Button size="lg" className="w-full h-14 text-lg font-bold bg-yellow-400 hover:bg-yellow-500 text-black border-none">
                    Place Order & Pay {formatCurrency(product.price)}
                </Button>

            </div>

            {/* Right Column: Order Summary (5/12) */}
            <div className="lg:col-span-5">
                <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm sticky top-24">
                    <h2 className="text-lg font-bold mb-6">Order Summary</h2>
                    
                    {/* Product Card */}
                    <div className="flex gap-4 mb-6 pb-6 border-b border-neutral-100 dark:border-neutral-800">
                        <div className="relative w-20 h-20 bg-neutral-100 dark:bg-neutral-800 rounded-lg overflow-hidden flex-shrink-0">
                             {product.images && product.images[0] && (
                                 <Image 
                                    src={product.images[0]} 
                                    alt={product.name} 
                                    fill 
                                    className="object-contain p-2" 
                                 />
                             )}
                        </div>
                        <div className="flex-1">
                            <h3 className="text-sm font-medium text-neutral-900 dark:text-white line-clamp-2 mb-1">{product.name}</h3>
                            <p className="text-xs text-neutral-500 mb-2">{product.brand}</p>
                            <div className="flex items-center justify-between">
                                <p className="font-bold text-sm text-neutral-900 dark:text-white">Qty: 1</p>
                                <p className="font-bold text-blue-600">{formatCurrency(product.price)}</p>
                            </div>
                        </div>
                    </div>

                    {/* Price Breakdown */}
                    <div className="space-y-3 mb-6">
                        <div className="flex justify-between text-sm">
                            <span className="text-neutral-500">M.R.P. Total</span>
                            <span className="text-neutral-900 dark:text-white">{formatCurrency(product.originalPrice || product.price)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-neutral-500">Product Discount</span>
                            <span className="text-green-600">-{formatCurrency(discountAmount)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-neutral-500">Delivery Fee</span>
                            <span className="text-green-600">Free</span>
                        </div>
                         {product.exchangeBonus && (
                            <div className="flex justify-between text-sm">
                                <span className="text-neutral-500">Exchange Bonus Applied</span>
                                <span className="text-green-600">-{formatCurrency(product.exchangeBonus)}</span>
                            </div>
                         )}
                    </div>

                    <div className="h-px bg-neutral-100 dark:bg-neutral-800 mb-4" />

                    <div className="flex justify-between items-end mb-6">
                        <span className="text-base font-bold text-neutral-900 dark:text-white">Total Amount</span>
                        <div className="text-right">
                             <span className="block text-2xl font-bold text-blue-600">{formatCurrency(product.price)}</span>
                             <span className="text-[10px] text-neutral-500 uppercase font-bold">Inclusive of all taxes</span>
                        </div>
                    </div>

                    {/* Trust Badges */}
                    <div className="grid grid-cols-2 gap-4">
                         <div className="flex items-center gap-2 text-xs text-neutral-500 bg-neutral-50 dark:bg-neutral-800 p-2 rounded">
                            <ShieldCheck className="w-4 h-4 text-green-600" />
                            Secure Payment
                         </div>
                         <div className="flex items-center gap-2 text-xs text-neutral-500 bg-neutral-50 dark:bg-neutral-800 p-2 rounded">
                            <Truck className="w-4 h-4 text-blue-600" />
                            Free Shipping
                         </div>
                    </div>

                </div>
            </div>

        </div>
      </div>
    </div>
  );
}

// Helper icon
function SmartphoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  )
}
