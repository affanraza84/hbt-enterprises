import { ProductService } from '@/services/product.service';
import { formatCurrency } from '@/lib/helpers';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, Lock, ShieldCheck, Truck, CreditCard, Banknote } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { CheckoutForm } from '@/components/checkout/CheckoutForm';

export const revalidate = 3600;

interface CheckoutPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function CheckoutPage(props: CheckoutPageProps) {
  const searchParams = await props.searchParams;
  const productSlug = typeof searchParams.product === 'string' ? searchParams.product : undefined;
  
  // If no product specified, ideally redirect to cart, but for now we handle the "Buy Now" case.
  const product = productSlug ? await ProductService.getProductBySlug(productSlug) : null;

  // If product slug is provided but not found, show error.
  if (productSlug && !product) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <h1 className="text-2xl font-bold mb-4">Product not found</h1>
            <Link href="/" className="text-blue-600 hover:underline">Return Home</Link>
        </div>
    );
  }

  return (
    <div className="bg-neutral-50 dark:bg-neutral-900 min-h-screen pb-20 font-sans">
      {/* Simple Header for Checkout */}
      <div className="bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 sticky top-0 z-30">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
              {product ? (
                  <Link href={`/products/${productSlug}`} className="flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">
                      <ChevronLeft className="w-4 h-4" />
                      Back to Product
                  </Link>
              ) : (
                  <Link href="/cart" className="flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">
                      <ChevronLeft className="w-4 h-4" />
                      Back to Cart
                  </Link>
              )}
              <div className="flex items-center gap-2 text-green-600">
                  <Lock className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Secure Checkout</span>
              </div>
          </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <CheckoutForm product={product} razorpayKeyId={process.env.RAZORPAY_API_KEY!} />
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
