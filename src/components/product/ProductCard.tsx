import Link from 'next/link';
import { Product } from '@/types/product';
import { formatCurrency } from '@/lib/helpers';
import { Button } from '@/components/ui/Button';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative bg-neutral-light rounded-2xl overflow-hidden border border-neutral-default transition-all duration-300 hover:border-accent hover:shadow-[0_10px_40px_-10px_rgba(0,198,255,0.15)] flex flex-col h-full">
      {/* Image Container */}
      <div className="aspect-square bg-neutral-light/50 overflow-hidden relative p-8">
        <div className="absolute top-3 left-3 z-10">
            {/* Tag/Badge Placeholder */}
             <span className="inline-flex items-center px-2 py-1 rounded bg-neutral-light/80 backdrop-blur text-[10px] font-bold uppercase tracking-wider text-primary border border-neutral-default">
                New
             </span>
        </div>
        
        <div className="h-full w-full flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
           {/* Placeholder Icon/Image */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-neutral-default to-neutral-light shadow-inner flex items-center justify-center">
                 <span className="text-4xl">⚡️</span>
            </div>
        </div>

        {/* Quick Actions (Slide up on hover) */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none group-hover:pointer-events-auto flex gap-2 justify-center bg-gradient-to-t from-neutral-light via-neutral-light/90 to-transparent pt-8">
           <Button size="sm" variant="primary" className="shadow-lg w-full">
              Add to Cart
           </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-2">
            <p className="text-xs text-neutral-dark uppercase tracking-widest font-semibold">{product.category}</p>
        </div>
        <h3 className="text-base font-bold text-primary mb-1 line-clamp-1 group-hover:text-accent transition-colors">
          <Link href={`/products/${product.slug}`}>
            <span aria-hidden="true" className="absolute inset-0" />
            {product.name}
          </Link>
        </h3>
        <p className="text-sm text-neutral-dark line-clamp-2 mb-4 flex-grow">{product.description}</p>
        
        <div className="flex items-center justify-between mt-auto border-t border-neutral-default/50 pt-4">
            <p className="text-lg font-bold text-primary font-heading">
                {formatCurrency(product.price)}
            </p>
            <div className="flex text-amber-500 text-xs">
                 {/* Rating Placeholder */}
                 ★★★★★ <span className="text-neutral-dark ml-1">(42)</span>
            </div>
        </div>
      </div>
    </div>
  );
}
