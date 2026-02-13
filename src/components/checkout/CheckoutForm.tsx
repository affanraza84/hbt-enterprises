"use client";

import { useState } from 'react';
import Script from 'next/script';
import Image from 'next/image';
import { ChevronLeft, Lock, ShieldCheck, Truck, CreditCard, Banknote, Smartphone } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { formatCurrency } from '@/lib/helpers';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

import { useCart } from '@/context/CartContext';
import { useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { getUserProfile } from '@/app/actions/user-profile';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  slug: string;
  category: string;
  images: string[];
  description: string;
  brand?: string;
  exchangeBonus?: number;
}

interface CheckoutFormProps {
  product?: Product | null; // Optional product for "Buy Now"
  razorpayKeyId: string;
}

// Define Razorpay types
declare global {
  interface Window {
    Razorpay: any;
  }
}

export function CheckoutForm({ product, razorpayKeyId }: CheckoutFormProps) {
  const router = useRouter();
  const { items: cartItems, cartTotal, clearCart } = useCart();
  const { user, isLoaded } = useUser();
  const [loading, setLoading] = useState(false);
  
  // Determine if we are in "Buy Now" mode or "Cart Checkout" mode
  const isBuyNow = !!product;
  
  const checkoutItems = isBuyNow 
    ? [{ ...product, quantity: 1 }] 
    : cartItems;

  const totalAmount = isBuyNow ? product.price : cartTotal;
  const originalAmount = isBuyNow 
    ? (product.originalPrice || product.price) 
    : cartItems.reduce((acc, item) => acc + (item.originalPrice || item.price) * item.quantity, 0);

  // Form State
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  });

  // Pre-fill from Saved Profile or Clerk
  useEffect(() => {
    const fetchProfile = async () => {
        if (!user) return;
        
        // 1. Try to fetch from our DB
        const profile = await getUserProfile();
        
        if (profile) {
            setFormData(prev => ({
                ...prev,
                phone: profile.phone || prev.phone,
                firstName: profile.firstName || prev.firstName,
                lastName: profile.lastName || prev.lastName,
                address: profile.address || prev.address,
                city: profile.city || prev.city,
                state: profile.state || prev.state,
                pincode: profile.pincode || prev.pincode,
            }));
        } else {
            // 2. Fallback to Clerk details if no DB profile
            setFormData(prev => ({
                ...prev,
                firstName: user.firstName || '',
                lastName: user.lastName || '',
                // email: user.primaryEmailAddress?.emailAddress || '', // Email removed from form
            }));
        }
    };

    if (isLoaded && user) {
        fetchProfile();
    }
  }, [isLoaded, user]);

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
     if (!isBuyNow && cartItems.length === 0) {
         router.push('/cart'); 
     }
  }, [isBuyNow, cartItems, router]);

  // Auto-fill City/State based on Pincode
  useEffect(() => {
    if (formData.pincode.length === 6) {
        const fetchPincodeDetails = async () => {
            try {
                const response = await fetch(`https://api.postalpincode.in/pincode/${formData.pincode}`);
                const data = await response.json();
                if (data && data[0] && data[0].Status === 'Success') {
                    const postOffice = data[0].PostOffice[0];
                    setFormData(prev => ({
                        ...prev,
                        city: postOffice.District,
                        state: postOffice.State
                    }));
                    // Clear errors if any
                     setErrors(prev => ({ ...prev, city: '', state: '' }));
                }
            } catch (error) {
                console.error("Failed to fetch pincode details:", error);
            }
        };
        fetchPincodeDetails();
    }
  }, [formData.pincode]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
        setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
      const newErrors: Record<string, string> = {};
      if (!formData.phone) newErrors.phone = 'Phone is required';
      else if (formData.phone.length < 10) newErrors.phone = 'Invalid phone number';

      if (!formData.firstName) newErrors.firstName = 'First name is required';
      if (!formData.lastName) newErrors.lastName = 'Last name is required';
      if (!formData.address) newErrors.address = 'Address is required';
      if (!formData.city) newErrors.city = 'City is required';
      if (!formData.state) newErrors.state = 'State is required';
      if (!formData.pincode) newErrors.pincode = 'Pincode is required';

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
  };

  const handlePayment = async () => {
    if (!validateForm()) {
      toast.error('Please fill in all required fields');
      return;
    }

    setLoading(true);

    try {
      // 1. Create Order
      const response = await fetch('/api/payment/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: totalAmount,
          currency: 'INR',
        }),
      });

      const orderData = await response.json();

      if (!response.ok) {
        throw new Error(orderData.error || 'Failed to create order');
      }

      // 2. Initialize Razorpay options
      const options = {
        key: razorpayKeyId,
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'HBT Enterprises',
        description: `Payment for ${isBuyNow ? product.name : 'Cart Items'}`,
        order_id: orderData.id,
        handler: async function (response: any) {
          try {
            // 3. Verify Payment
            const verifyRes = await fetch('/api/payment/verify', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                customerDetails: formData,
                items: checkoutItems.map(item => ({
                    productId: item.id,
                    name: item.name,
                    price: item.price,
                    quantity: item.quantity,
                    image: item.images?.[0]
                })),
                amount: totalAmount,
                userId: user?.id, // Pass Clerk ID to save profile
              }),
            });

            if (verifyRes.ok) {
              toast.success('Payment successful! Order placed.');
              if (!isBuyNow) {
                  clearCart();
              }
              router.push('/order-success'); 
            } else {
              toast.error('Payment verification failed.');
            }
          } catch (error) {
            console.error('Verification error:', error);
            toast.error('Payment verification failed.');
          }
        },
        prefill: {
          name: `${formData.firstName} ${formData.lastName}`,
          contact: formData.phone,
        },
        theme: {
          color: '#3B82F6',
        },
      };

      // Open Razorpay
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();

    } catch (error) {
      console.error('Payment error:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isBuyNow && cartItems.length === 0) {
      return null; // Or loading spinner, useEffect will redirect
  }

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      
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
                        <Input 
                          label="Phone Number"
                          name="phone" 
                          placeholder="Enter phone number" 
                          type="tel" 
                          value={formData.phone}
                          onChange={handleInputChange}
                          error={errors.phone}
                          required
                        />
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
                            <Input 
                              label="First Name"
                              name="firstName" 
                              placeholder="Enter your first name" 
                              value={formData.firstName}
                              onChange={handleInputChange}
                              error={errors.firstName}
                              required
                            />
                        </div>
                        <div className="space-y-2">
                            <Input 
                              label="Last Name"
                              name="lastName" 
                              placeholder="Enter your last name" 
                              value={formData.lastName}
                              onChange={handleInputChange}
                              error={errors.lastName}
                              required
                            />
                        </div>
                    </div>
                    
                    {/* Pincode First */}
                    <div className="space-y-2">
                        <Input 
                          label="Pincode"
                          name="pincode" 
                          placeholder="Enter postal code" 
                          value={formData.pincode}
                          onChange={handleInputChange}
                          error={errors.pincode}
                          required
                          maxLength={6}
                        />
                    </div>

                    <div className="space-y-2">
                        <Input 
                          label="Address"
                          name="address" 
                          placeholder="Flat / House No / Floor / Building" 
                          value={formData.address}
                          onChange={handleInputChange}
                          error={errors.address}
                          required
                        />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Input 
                              label="City"
                              name="city" 
                              placeholder="City" 
                              value={formData.city}
                              onChange={handleInputChange}
                              error={errors.city}
                              required
                              // readOnly // Optional: if we want to force auto-fill
                            />
                        </div>
                        <div className="space-y-2">
                            <Input 
                              label="State"
                              name="state" 
                              placeholder="State" 
                              value={formData.state}
                              onChange={handleInputChange}
                              error={errors.state}
                              required
                              // readOnly
                            />
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
                            <span className="block font-bold text-sm text-neutral-900 dark:text-white">Credit / Debit Card / UPI</span>
                            <span className="block text-xs text-neutral-500">Secure payment via Razorpay</span>
                        </div>
                        <CreditCard className="w-5 h-5 text-neutral-400" />
                    </label>

                    <label className="flex items-center gap-4 p-4 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 rounded-lg cursor-pointer transition-all opacity-50 cursor-not-allowed">
                        <input type="radio" name="payment" disabled className="w-4 h-4 text-blue-600" />
                        <div className="flex-1">
                            <span className="block font-bold text-sm text-neutral-900 dark:text-white">Cash on Delivery</span>
                            <span className="block text-xs text-neutral-500">Currently unavailable</span>
                        </div>
                        <Banknote className="w-5 h-5 text-neutral-400" />
                    </label>
                </div>
            </div>

            <Button 
              size="lg" 
              className="w-full h-14 text-lg font-bold bg-yellow-400 hover:bg-yellow-500 text-black border-none"
              onClick={handlePayment}
              disabled={loading}
            >
                {loading ? 'Processing...' : `Place Order & Pay ${formatCurrency(totalAmount)}`}
            </Button>

        </div>

        {/* Right Column: Order Summary (5/12) */}
        <div className="lg:col-span-5">
            <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm sticky top-24">
                <h2 className="text-lg font-bold mb-6">Order Summary {checkoutItems.length > 1 && `(${checkoutItems.length} items)`}</h2>
                
                {/* Items List */}
                <div className="space-y-4 mb-6 pb-6 border-b border-neutral-100 dark:border-neutral-800 max-h-[400px] overflow-y-auto">
                    {checkoutItems.map((item, idx) => (
                        <div key={`${item.id}-${idx}`} className="flex gap-4">
                            <div className="relative w-16 h-16 bg-neutral-100 dark:bg-neutral-800 rounded-lg overflow-hidden flex-shrink-0">
                                 {item.images && item.images[0] && (
                                     <Image 
                                        src={item.images[0]} 
                                        alt={item.name} 
                                        fill 
                                        className="object-contain p-2" 
                                     />
                                 )}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-sm font-medium text-neutral-900 dark:text-white line-clamp-2 mb-1">{item.name}</h3>
                                <p className="text-xs text-neutral-500 mb-1">{item.brand || 'Brand'}</p>
                                <div className="flex items-center justify-between">
                                    <p className="font-bold text-xs text-neutral-900 dark:text-white">Qty: {item.quantity}</p>
                                    <p className="font-bold text-sm text-blue-600">{formatCurrency(item.price * item.quantity)}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                        <span className="text-neutral-500">M.R.P. Total</span>
                        <span className="text-neutral-900 dark:text-white">{formatCurrency(originalAmount)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-neutral-500">Product Discount</span>
                        <span className="text-green-600">-{formatCurrency(originalAmount - totalAmount)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-neutral-500">Delivery Fee</span>
                        <span className="text-green-600">Free</span>
                    </div>
                </div>

                <div className="h-px bg-neutral-100 dark:bg-neutral-800 mb-4" />

                <div className="flex justify-between items-end mb-6">
                    <span className="text-base font-bold text-neutral-900 dark:text-white">Total Amount</span>
                    <div className="text-right">
                         <span className="block text-2xl font-bold text-blue-600">{formatCurrency(totalAmount)}</span>
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
    </>
  );
}
