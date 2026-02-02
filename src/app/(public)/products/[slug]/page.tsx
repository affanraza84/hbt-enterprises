import { notFound } from 'next/navigation';
import { ProductService } from '@/services/product.service';
import { formatCurrency } from '@/lib/helpers';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Share2, Tag, Check, Award } from 'lucide-react';
import { ProductImageGallery } from '@/components/product/ProductImageGallery';
import { ProductBuyingSidebar } from '@/components/product/ProductBuyingSidebar';
import { ProductCard } from '@/components/product/ProductCard';

export const revalidate = 3600;

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage(props: ProductPageProps) {
  const params = await props.params;
  const product = await ProductService.getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  // Calculate discount
  const discountAmount = (product.originalPrice || product.price) - product.price;
  const discountPercentage = product.originalPrice 
    ? Math.round((discountAmount / product.originalPrice) * 100)
    : 0;
  
  // Date Logic for "Get it between"
  const today = new Date();
  const dateOptions: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short' };
  const startDate = new Date(today); startDate.setDate(today.getDate() + 3);
  const endDate = new Date(today); endDate.setDate(today.getDate() + 5);
  const deliveryDateString = `${startDate.toLocaleDateString('en-US', dateOptions)} to ${endDate.toLocaleDateString('en-US', dateOptions)}`;

  return (
    <div className="bg-white dark:bg-neutral-900 min-h-screen text-neutral-900 dark:text-white pb-20 font-sans">
      
      {/* Breadcrumbs */}
      <div className="bg-white dark:bg-neutral-900 border-b border-neutral-100 dark:border-neutral-800">
        <div className="container mx-auto px-4 py-3">
             <nav className="flex items-center text-xs text-neutral-500 overflow-x-auto whitespace-nowrap">
                  <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                  <ChevronRight className="w-3 h-3 mx-2" />
                  <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
                  <ChevronRight className="w-3 h-3 mx-2" />
                  <span className="hover:text-primary transition-colors cursor-pointer capitalize">{product.category}</span>
                  <ChevronRight className="w-3 h-3 mx-2" />
                  <span className="font-semibold text-neutral-900 dark:text-white truncate max-w-[200px]">{product.name}</span>
             </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Images (5/12) */}
            <div className="lg:col-span-6 xl:col-span-5 relative">
                 <div className="sticky top-24">
                     {/* Share Button (Absolute) */}
                     <button className="absolute right-0 top-0 z-10 w-8 h-8 rounded-full bg-white shadow-sm border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-blue-600 max-lg:hidden">
                        <Share2 className="w-4 h-4" />
                     </button>
                     <ProductImageGallery images={product.images || []} name={product.name} />
                 </div>
            </div>

            {/* Center Column: Details (4/12) */}
            <div className="lg:col-span-6 xl:col-span-4 flex flex-col pt-2">
                {/* Brand */}
                {product.brand && (
                    <div className="mb-2">
                        <span className="text-red-600 font-bold text-lg flex items-center gap-1">
                             {/* Placeholder generic logo text if SVG not avail */}
                             {product.brand}
                        </span>
                    </div>
                )}
                
                {/* Title */}
                <h1 className="text-xl md:text-2xl font-medium text-neutral-900 dark:text-white leading-tight mb-2">
                    {product.name} {product.rating && `(${product.rating} Star)`}
                </h1>

                {/* Code */}
                {product.modelNumber && (
                    <p className="text-xs text-neutral-500 mb-3">Product Code <span className="text-neutral-700">{product.modelNumber}</span></p>
                )}

                {/* Review | Stock */}
                <div className="flex items-center gap-4 text-xs font-medium mb-6">
                    <button className="text-blue-600 hover:underline">Add Review</button>
                    {product.stock > 0 ? (
                        <span className="text-green-600">
                             {product.stock < 5 ? `Only ${product.stock} Left` : "Stock Available"}
                        </span>
                    ) : (
                        <span className="text-red-500 font-medium">Out of Stock</span>
                    )}
                </div>
                
                <div className="h-px bg-neutral-200 dark:bg-neutral-700 mb-6 w-full" />

                {/* Price Section */}
                <div className="mb-6">
                     <p className="text-sm text-neutral-500 mb-1">
                        M.R.P.: <span className="line-through">{formatCurrency(product.originalPrice || product.price * 1.2)}</span>
                     </p>
                     <div className="flex items-center gap-3 mb-1">
                         <span className="text-red-500 font-bold text-sm">Joy Price:</span>
                         <span className="text-3xl font-bold text-blue-600">
                             {formatCurrency(product.price)}
                         </span>
                         <span className="text-xs font-bold text-neutral-900 dark:text-white">Free Delivery</span>
                     </div>
                     <div className="flex items-center gap-2 text-sm font-medium mb-1">
                         <span className="text-neutral-500">You Save:</span>
                         <span className="text-blue-600 font-bold">
                             {formatCurrency(discountAmount)} ({discountPercentage}%)
                         </span>
                     </div>
                     <p className="text-[10px] text-neutral-500 font-medium">Inclusive of all taxes</p>
                </div>

                <div className="mb-6 text-sm text-neutral-800 dark:text-neutral-300">
                    Get it between <span className="font-bold">{deliveryDateString}</span>
                </div>
                
                {/* Offers Box (Simplified) */}
                <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden mb-8">
                     <div className="bg-neutral-50 dark:bg-neutral-800 px-4 py-2 border-b border-neutral-200 dark:border-neutral-700 flex items-center gap-2">
                        <Tag className="w-4 h-4 text-blue-500" />
                        <span className="text-sm font-bold text-blue-600">Save Extra</span> 
                        <span className="text-xs text-neutral-500">with offers</span>
                     </div>
                     <div className="p-4 bg-white dark:bg-neutral-900/50 space-y-3">
                         {/* Static offers rows matching reference */}
                         <div className="flex gap-3 items-start text-xs text-neutral-700 dark:text-neutral-300 border-b border-neutral-100 dark:border-neutral-800 pb-2">
                             <span className="text-blue-600 font-bold mt-0.5 min-w-[90px]">Exchange Offer:</span>
                             <span>Up to {formatCurrency(product.exchangeBonus || 1000)} off on Exchange</span>
                         </div>
                         <div className="flex gap-3 items-start text-xs text-neutral-700 dark:text-neutral-300 border-b border-neutral-100 dark:border-neutral-800 pb-2">
                             <span className="text-blue-600 font-bold mt-0.5 min-w-[90px]">EMI:</span>
                             <span>Standard EMI From ₹ {formatCurrency(product.price / 12)} / Month. | <span className="text-blue-600 cursor-pointer hover:underline">View Plans</span></span>
                         </div>
                         <div className="flex gap-3 items-start text-xs text-neutral-700 dark:text-neutral-300 border-b border-neutral-100 dark:border-neutral-800 pb-2">
                             <span className="text-blue-600 font-bold mt-0.5 min-w-[90px]">GST Invoice:</span>
                             <span>Get GST invoice and save up to 28% on business purchases.</span>
                         </div>
                     </div>
                </div>

                {/* Key Features */}
                {product.keyFeatures && (
                    <div>
                        <h3 className="font-bold text-sm mb-3">Key Features</h3>
                        <ul className="space-y-1">
                            {product.keyFeatures.map((feat, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                                    <span className="mt-1 w-1 h-1 bg-neutral-400 rounded-full flex-shrink-0" />
                                    <span>{feat}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {/* Right Column: Sidebar (3/12) */}
            <div className="lg:col-span-12 xl:col-span-3">
                <ProductBuyingSidebar product={product} />
            </div>

        </div>
      </div>

       {/* Related Products Section */}
       <div className="border-t border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 mt-12">
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-2xl font-bold font-heading mb-8 text-neutral-900 dark:text-white">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {(await ProductService.getProducts())
                    .filter(p => p.category === product.category && p.id !== product.id)
                    .slice(0, 4)
                    .map(relatedProduct => (
                        <div key={relatedProduct.id} className="h-full">
                            <ProductCard product={relatedProduct} />
                        </div>
                    ))
                }
            </div>
        </div>
      </div>
    </div>
  );
}
