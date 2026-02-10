import { ProductGrid } from '@/components/product/ProductGrid';
import { ProductService } from '@/services/product.service';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export const revalidate = 3600;

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Map URL slugs to internal Product Categories
const CATEGORY_MAP: Record<string, { title: string; categories: string[] }> = {
  'air-conditioners': { title: 'Air Conditioners', categories: ['Air Conditioner'] },
  'laptops-printers': { title: 'Laptops & Printers', categories: ['Laptop', 'Printer'] },
  'home-appliances': { title: 'Home Appliances', categories: ['Refrigerator', 'Washing Machine', 'Microwave', 'Cooler', 'Home Appliances'] },
  'smart-phones': { title: 'Smartphones', categories: ['Smart Phone'] },
  'microwaves': { title: 'Microwaves', categories: ['Microwave'] },
  'air-coolers': { title: 'Air Coolers', categories: ['Cooler'] },
  'smart-home': { title: 'Smart Home', categories: ['Television', 'Soundbar', 'Audio', 'Smartwatch'] },
  'accessories': { title: 'Accessories', categories: ['Accessories', 'Headphones', 'Smartwatch', 'Audio', 'Soundbar', 'Camera'] },
  'gaming': { title: 'Gaming', categories: ['Gaming'] },
  'refrigerators': { title: 'Refrigerators', categories: ['Refrigerator'] },
  'washing-machines': { title: 'Washing Machines', categories: ['Washing Machine'] },
  'televisions': { title: 'Televisions', categories: ['Television'] },
  'soundbar': { title: 'Home Theatres', categories: ['Soundbar'] }
};

export default async function CategoryPage(props: CategoryPageProps) {
  const params = await props.params;
  const slug = params.slug.toLowerCase();
  
  const mapping = CATEGORY_MAP[slug];

  if (!mapping) {
     // If no exact match, fallback to trying to find a category that includes the slug
     // Or just return 404. For robustness, let's 404 so we don't show weird results.
     return notFound();
  }

  const allProducts = await ProductService.getProducts();
  const categoryProducts = allProducts.filter(p => 
      mapping.categories.includes(p.category)
  );

  return (
    <div className="min-h-screen bg-neutral-light">
      {/* Header */}
      <div className="bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
         <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
             <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white font-heading">
                {mapping.title}
             </h1>
             <p className="mt-4 text-base text-neutral-500 max-w-2xl">
                Explore our premium collection of {mapping.title.toLowerCase()}.
             </p>
         </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-200 dark:border-neutral-800">
           <div className="text-sm text-neutral-500">
               Showing <span className="font-bold text-neutral-900 dark:text-white">{categoryProducts.length}</span> results
           </div>
           
           <div className="flex items-center gap-2">
               <span className="text-sm text-neutral-500">Sort by:</span>
               <select className="text-sm border-none bg-transparent font-medium text-neutral-900 dark:text-white focus:ring-0 cursor-pointer">
                   <option>Newest</option>
                   <option>Price: Low to High</option>
                   <option>Price: High to Low</option>
               </select>
           </div>
        </div>

        {categoryProducts.length > 0 ? (
            <ProductGrid products={categoryProducts} isDense={['televisions', 'smart-phones', 'washing-machines', 'air-coolers', 'soundbar'].includes(slug)} />
        ) : (
            <div className="text-center py-20 text-neutral-500">
                <p className="text-xl">No products found in this category.</p>
                <Link href="/products" className="text-blue-600 hover:underline mt-2 inline-block">View all products</Link>
            </div>
        )}
      </div>
    </div>
  );
}
