import { notFound } from 'next/navigation';
import { ProductService } from '@/services/product.service';
import { Button } from '@/components/ui/Button';
import { formatCurrency } from '@/lib/helpers';
import Image from 'next/image';
import { ChevronRight, Heart, Share2, MapPin, Tag, Truck, ShieldCheck, RefreshCcw } from 'lucide-react';
import Link from 'next/link';
import { Input } from '@/components/ui/Input';

export const revalidate = 3600;

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await ProductService.getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  // Calculate discount percentage
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="bg-white dark:bg-neutral-900 min-h-screen text-neutral-900 dark:text-white pb-20">
      
      {/* Breadcrumbs */}
      <div className="border-b border-neutral-100 dark:border-neutral-800">
        <div className="container mx-auto px-4 py-3">
             <nav className="flex items-center text-xs text-neutral-500 overflow-x-auto whitespace-nowrap">
                  <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                  <ChevronRight className="w-3 h-3 mx-2" />
                  <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
                  <ChevronRight className="w-3 h-3 mx-2" />
                  <span className="hover:text-primary transition-colors cursor-pointer">{product.category}</span>
                  <ChevronRight className="w-3 h-3 mx-2" />
                  <span className="font-semibold text-neutral-900 dark:text-white">{product.brand || "Product"}</span>
             </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">
            
            {/* Left Column: Image Gallery */}
            <div className="flex flex-col gap-4">
                <div className="sticky top-24">
                    <div className="relative aspect-[4/3] w-full bg-neutral-50 dark:bg-neutral-800 rounded-3xl overflow-hidden mb-4 group">
                        {/* Action Buttons */}
                        <div className="absolute top-4 right-4 z-10 flex flex-col gap-3">
                            <button className="w-10 h-10 bg-white dark:bg-neutral-900 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform text-neutral-400 hover:text-red-500">
                                <Heart className="w-5 h-5" />
                            </button>
                            <button className="w-10 h-10 bg-white dark:bg-neutral-900 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform text-neutral-400 hover:text-accent">
                                <Share2 className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Main Image */}
                        <div className="w-full h-full relative p-8">
                             {product.images && product.images[0] ? (
                                <Image
                                    src={product.images[0]}
                                    alt={product.name}
                                    fill
                                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                             ) : (
                                <div className="w-full h-full flex items-center justify-center text-neutral-300 text-6xl font-bold bg-neutral-100 dark:bg-neutral-800">
                                    IMG
                                </div>
                             )}
                        </div>
                    </div>
                    
                    {/* Thumbnail Strip */}
                    {product.images && product.images.length > 1 && (
                        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                            {product.images.map((img, idx) => (
                                <button key={idx} className={`relative flex-shrink-0 w-20 h-20 rounded-xl border-2 overflow-hidden ${idx === 0 ? 'border-accent' : 'border-transparent hover:border-neutral-300 dark:hover:border-neutral-700'}`}>
                                    <Image src={img} alt={`View ${idx + 1}`} fill className="object-cover bg-neutral-50 dark:bg-neutral-800" />
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Right Column: Product Details */}
            <div className="flex flex-col">
                {/* Header */}
                <div className="mb-6 border-b border-neutral-100 dark:border-neutral-800 pb-6">
                    {product.brand && (
                        <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-2">{product.brand}</h2>
                    )}
                    <h1 className="text-3xl md:text-4xl font-bold font-heading leading-tight mb-2 text-neutral-900 dark:text-white">
                        {product.name}
                    </h1>
                    {product.modelNumber && (
                        <p className="text-sm text-neutral-500 mb-4">Product Code: {product.modelNumber}</p>
                    )}
                    
                    <div className="flex items-center gap-4">
                        {/* Rating */}
                        <div className="flex items-center gap-1 bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded">
                             <span className="text-sm font-bold">{product.rating || 4.5}</span>
                             <span className="text-nosuccess text-xs">★</span>
                        </div>
                        <span className="text-sm text-accent font-medium cursor-pointer hover:underline">
                             {product.reviewsCount || 0} Reviews
                        </span>
                        {product.stock > 0 ? (
                            <span className="text-sm text-success font-medium">Stock Available</span>
                        ) : (
                            <span className="text-sm text-red-500 font-medium">Out of Stock</span>
                        )}
                    </div>
                </div>

                {/* Pricing Block */}
                <div className="mb-8">
                     <p className="text-sm text-neutral-500 line-through mb-1">
                        M.R.P.: {formatCurrency(product.originalPrice || product.price * 1.2)}
                     </p>
                     <div className="flex items-baseline gap-3 mb-2">
                        {product.joyPrice && (
                            <span className="text-red-500 font-bold text-lg">Joy Price:</span>
                        )}
                        <span className="text-4xl font-bold text-accent">
                            {formatCurrency(product.price)}
                        </span>
                        <span className="text-sm font-medium text-neutral-900 dark:text-white">(Incl. of all taxes)</span>
                     </div>
                     
                     {discountPercentage > 0 && (
                        <p className="text-sm text-success font-bold mb-4">
                            You Save: {formatCurrency((product.originalPrice || product.price) - product.price)} ({discountPercentage}%)
                        </p>
                     )}

                     {product.emi && (
                        <div className="text-sm text-neutral-700 dark:text-neutral-300 font-medium bg-neutral-50 dark:bg-neutral-800/50 p-3 rounded-lg border border-neutral-200 dark:border-neutral-700 inline-block">
                             {product.emi} | <span className="text-accent cursor-pointer hover:underline">View Plans</span>
                        </div>
                     )}
                </div>

                {/* Delivery Check */}
                <div className="mb-8 p-5 bg-neutral-50 dark:bg-neutral-800/30 rounded-xl border border-neutral-100 dark:border-neutral-800">
                     <h3 className="text-sm font-bold text-neutral-900 dark:text-white uppercase mb-3 flex items-center gap-2">
                        <MapPin className="w-4 h-4" /> Delivery
                     </h3>
                     <div className="relative max-w-sm">
                        <Input 
                            placeholder="Enter Pincode" 
                            className="pr-20 bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 h-10 sm:h-12"
                        />
                        <button className="absolute right-1 top-1 bottom-1 px-4 text-sm font-bold text-accent hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded transition-colors">
                            Check
                        </button>
                     </div>
                     <div className="text-xs text-neutral-500 mt-2 flex gap-4">
                        <span className="flex items-center gap-1"><Truck className="w-3 h-3" /> Free Shipping</span>
                        <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Secure Transaction</span>
                     </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3 mb-8">
                    <div className="flex gap-3">
                        <Button variant="outline" size="lg" className="flex-1 h-12 text-base font-bold bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white">
                            Add to Cart
                        </Button>
                        <Button size="lg" className="flex-1 h-12 text-base font-bold bg-yellow-400 hover:bg-yellow-500 text-black border-none">
                            Buy Now
                        </Button>
                    </div>
                    <Button size="lg" className="w-full h-12 text-base font-bold bg-[#003087] hover:bg-[#00205b] text-white">
                        Connect to store
                    </Button>
                </div>

                {/* Offers */}
                {product.offers && product.offers.length > 0 && (
                    <div className="mb-8 border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden">
                        <div className="bg-[#eaf5ff] dark:bg-[#003087]/20 p-3 border-b border-neutral-200 dark:border-neutral-800 flex items-center gap-2">
                            <Tag className="w-4 h-4 text-accent" />
                            <h3 className="font-bold text-neutral-900 dark:text-white text-sm">Save Extra with {product.offers.length} offers</h3>
                        </div>
                        <div className="p-4 bg-white dark:bg-neutral-900/50">
                            <ul className="space-y-3">
                                {product.offers.map((offer, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                                        <span className="text-accent font-bold mt-0.5">•</span>
                                        <span>{offer}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}

                {/* Key Features */}
                {product.keyFeatures && product.keyFeatures.length > 0 && (
                    <div className="mb-8">
                        <h3 className="font-bold text-lg mb-4 text-neutral-900 dark:text-white">Key Features</h3>
                        <ul className="space-y-2">
                            {product.keyFeatures.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400">
                                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-400"></div>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                
                {/* Specs */}
                {product.specs && (
                     <div className="mb-8">
                        <h3 className="font-bold text-lg mb-4 text-neutral-900 dark:text-white">Specifications</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {Object.entries(product.specs).map(([key, value]) => (
                                <div key={key} className="flex flex-col p-3 bg-neutral-50 dark:bg-neutral-800/30 rounded-lg">
                                    <span className="text-xs text-neutral-500 uppercase tracking-widest mb-1">{key}</span>
                                    <span className="text-sm font-semibold text-neutral-900 dark:text-white">{value}</span>
                                </div>
                            ))}
                        </div>
                     </div>
                )}

            </div>
        </div>
      </div>
    </div>
  );
}
