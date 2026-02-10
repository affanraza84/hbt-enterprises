import { ProductGrid } from '@/components/product/ProductGrid';
import { ProductService } from '@/services/product.service';

export const revalidate = 3600;

interface ProductsPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ProductsPage(props: ProductsPageProps) {
  const searchParams = await props.searchParams;
  const q = typeof searchParams.q === 'string' ? searchParams.q : undefined;
  const category = typeof searchParams.category === 'string' ? searchParams.category : undefined;
  const type = typeof searchParams.type === 'string' ? searchParams.type : undefined;

  let products = await ProductService.getProducts();

  // If search query exists, prioritize search filter
  if (q) {
      products = await ProductService.searchProducts(q);
  }

  // Apply Category Filter
  if (category) {
      products = products.filter(p => 
          p.category.toLowerCase().replace(/\s+/g, '-') === category || 
          p.category.toLowerCase() === category.toLowerCase()
      );
  }

  // Apply Sub-Type Filter (if relevant, e.g. "Gaming Laptops")
  if (type) {
      // This is a naive check; ideally products have sub-types or tags. 
      // Checking description or name as fallback.
      products = products.filter(p => 
          p.name.toLowerCase().includes(type.toLowerCase()) || 
          p.description?.toLowerCase().includes(type.toLowerCase())
      );
  }
  
  const title = q ? `Search Results for "${q}"` : (category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Products` : 'All Products');

  return (
    <div className="min-h-screen bg-neutral-light">
      {/* Header */}
      <div className="bg-neutral-light border-b border-neutral-default">
         <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
             <h1 className="text-3xl font-bold tracking-tight text-primary font-heading capitalize">
                {title.replace('-', ' ')}
             </h1>
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

        {products.length > 0 ? (
            <ProductGrid 
                products={products} 
                isDense={category ? ['television', 'smart phone', 'washing machine', 'cooler', 'soundbar'].includes(category.toLowerCase()) : false} 
            />
        ) : (
            <div className="text-center py-20 text-neutral-500">
                <p className="text-xl">No products found.</p>
                <p className="text-sm mt-2">Try adjusting your search or filter to find what you're looking for.</p>
            </div>
        )}
      </div>
    </div>
  );
}
