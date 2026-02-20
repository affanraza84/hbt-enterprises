import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ChevronRight, ShoppingBag, Package } from "lucide-react";
import { ProductGrid } from "@/components/product/ProductGrid";
import { ProductService } from "@/services/product.service";

export default async function OrderSuccessPage() {
  // Fetch a mix of recommended products
  const products = await ProductService.getProducts();
  const recommendedProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 pb-20">
      {/* Success Banner Section */}
      <div className="bg-white dark:bg-black pt-24 pb-16 px-4 mb-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-100 dark:bg-green-900/30 mb-8">
            <CheckCircle2 className="w-12 h-12 text-green-600 dark:text-green-500" />
          </div>
          
          <h1 className="text-4xl font-black mb-4 tracking-tight">
            Thanks for shopping!
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-10 max-w-xl mx-auto">
            Your payment was successful and your order has been received. We've sent a confirmation email with your order details.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/orders" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="w-full sm:w-auto h-14 px-8 text-lg font-bold bg-[#003087] hover:bg-[#00205b] text-white"
              >
                <Package className="w-5 h-5 mr-2" />
                Track My Order
              </Button>
            </Link>
            
            <Link href="/" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto h-14 px-8 text-lg font-bold border-2 border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Recommended Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black mb-2 tracking-tight">
              You might also like
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400">
              Check out these popular products
            </p>
          </div>
          <Link 
            href="/products" 
            className="hidden sm:flex items-center text-sm font-bold text-blue-600 hover:text-blue-700"
          >
            View All Products
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <ProductGrid products={recommendedProducts} />
        
        <div className="mt-8 text-center sm:hidden">
            <Link 
                href="/products" 
                className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700 bg-blue-50 dark:bg-blue-900/20 px-6 py-3 rounded-full"
            >
                View All Products
                <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
        </div>
      </div>
    </div>
  );
}
