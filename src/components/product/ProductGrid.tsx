import { Product } from '@/types/product';
import { ProductCard } from './ProductCard';
import { cn } from "@/lib/utils";

interface ProductGridProps {
  products: Product[];
  isDense?: boolean;
}

export function ProductGrid({ products, isDense = false }: ProductGridProps) {
  if (!products || products.length === 0) {
      return (
          <div className="text-center py-20 bg-neutral-light rounded-xl border border-dashed border-neutral-default">
              <h3 className="text-lg font-medium text-primary">No products found</h3>
              <p className="text-neutral-500 mt-1">Check back later for new arrivals.</p>
          </div>
      );
  }

  return (
    <div className={cn(
      "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8",
      isDense ? "grid-cols-2 gap-3 sm:gap-x-6 sm:gap-y-10" : "grid-cols-1 gap-y-10 gap-x-6"
    )}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
