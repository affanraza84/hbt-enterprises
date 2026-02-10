import { ProductGrid } from '@/components/product/ProductGrid';
import { ProductService } from '@/services/product.service';
import { ProductSort } from '@/components/product/ProductSort';

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
  
  // Apply Sort
  const sort = typeof searchParams.sort === 'string' ? searchParams.sort : 'newest';
  
  if (sort === 'price_asc') {
    products.sort((a, b) => a.price - b.price);
  } else if (sort === 'price_desc') {
    products.sort((a, b) => b.price - a.price);
  } else {
    // Default to newest
    products.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }
  
  const title = q ? `Search Results for "${q}"` : (category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Products` : 'All Products');

  return (
    <div className="min-h-screen bg-neutral-light dark:bg-neutral-900">
      {/* Header */}
      <div className="bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
         <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
             <h1 className="text-3xl font-bold tracking-tight text-primary dark:text-white font-heading capitalize">
                {title.replace('-', ' ')}
             </h1>
             <p className="mt-4 text-base text-neutral-500 dark:text-neutral-400 max-w-2xl">
                Browse our complete catalog of high-performance electronics. 
                Filter by category or sort by price to find exactly what you need.
             </p>
         </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 pb-4 border-b border-neutral-200 dark:border-neutral-800 gap-4">
           <div className="text-sm text-neutral-500 dark:text-neutral-400">
               Showing <span className="font-bold text-primary dark:text-white">{products.length}</span> results
           </div>
           
           <ProductSort />
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
