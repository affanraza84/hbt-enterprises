import { ProductGrid } from '@/components/product/ProductGrid';
import { ProductService } from '@/services/product.service';

export const revalidate = 3600;

export default async function ProductsPage() {
  const products = await ProductService.getProducts();

  return (
    <div className="min-h-screen bg-neutral-light">
      {/* Header */}
      <div className="bg-neutral-light border-b border-neutral-default">
         <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
             <h1 className="text-3xl font-bold tracking-tight text-primary font-heading">All Products</h1>
             <p className="mt-4 text-base text-neutral-dark max-w-2xl">
                Browse our complete catalog of high-performance electronics. 
                Filter by category or sort by price to find exactly what you need.
             </p>
         </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-default">
           <div className="text-sm text-neutral-dark">
               Showing <span className="font-bold text-primary">{products.length}</span> results
           </div>
           
           {/* Simple Sort Placeholder */}
           <div className="flex items-center gap-2">
               <span className="text-sm text-neutral-500">Sort by:</span>
               <select className="text-sm border-none bg-transparent font-medium text-primary focus:ring-0 cursor-pointer">
                   <option>Newest</option>
                   <option>Price: Low to High</option>
                   <option>Price: High to Low</option>
               </select>
           </div>
        </div>

        <ProductGrid products={products} />
      </div>
    </div>
  );
}
