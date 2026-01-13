import { Product } from '@/types/product';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  if (!products || products.length === 0) {
      return (
          <div className="text-center py-20 bg-neutral-light rounded-xl border border-dashed border-neutral-default">
              <h3 className="text-lg font-medium text-primary">No products found</h3>
              <p className="text-neutral-500 mt-1">Check back later for new arrivals.</p>
          </div>
      );
  }

  return (
    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
