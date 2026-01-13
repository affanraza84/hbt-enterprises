import { notFound } from 'next/navigation';
import { ProductService } from '@/services/product.service';
import { Button } from '@/components/ui/Button';
import { formatCurrency } from '@/lib/helpers';

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

  return (
    <div className="bg-neutral-light min-h-screen">
      {/* Breadcrumb (Placeholder) */}
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 border-b border-neutral-default/50">
           <nav className="flex text-sm font-medium text-neutral-dark">
                <a href="/products" className="hover:text-primary">Products</a>
                <span className="mx-2">/</span>
                <span className="text-primary truncate">{product.name}</span>
           </nav>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
          {/* Product Image Gallery */}
          <div className="product-gallery">
             <div className="aspect-square w-full overflow-hidden rounded-2xl bg-white dark:bg-neutral-default border border-neutral-default p-8 flex items-center justify-center relative">
                 <div className="absolute top-4 right-4 z-10">
                     <button className="p-2 rounded-full hover:bg-neutral-light transition-colors text-neutral-dark">
                        <span className="sr-only">Wishlist</span>
                        ♥
                     </button>
                 </div>
                 <div className="w-1/2 h-1/2 bg-gradient-to-tr from-primary-light/20 to-accent/20 rounded-full blur-3xl absolute"></div>
                 {/* Image Placeholder */}
                 <span className="text-neutral-dark/30 font-bold text-6xl select-none">IMG</span>
             </div>
             {/* Thumbnails */}
             <div className="mt-4 grid grid-cols-4 gap-4">
                 {[1, 2, 3, 4].map(i => (
                     <div key={i} className={`aspect-square rounded-lg border bg-white dark:bg-neutral-default cursor-pointer ${i === 1 ? 'border-accent ring-1 ring-accent' : 'border-neutral-default hover:border-accent/50'}`}></div>
                 ))}
             </div>
          </div>

          {/* Product Info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0 lg:sticky lg:top-24 h-fit">
            <div className="mb-6">
                 <h1 className="text-4xl font-bold tracking-tight text-primary font-heading mb-2">{product.name}</h1>
                 <div className="flex items-center gap-4">
                     <p className="text-3xl font-bold text-primary">{formatCurrency(product.price)}</p>
                     <span className="inline-flex items-center rounded-full bg-success/10 px-2.5 py-0.5 text-xs font-medium text-success ring-1 ring-inset ring-success/20">
                        In Stock
                     </span>
                 </div>
            </div>

            <div className="prose prose-sm text-neutral-dark mb-8">
              <p>{product.description}</p>
            </div>
            
            {/* Tech Specs (Placeholder) */}
            <div className="border-t border-neutral-default py-6 mb-8">
                <h3 className="text-sm font-bold text-primary mb-4 uppercase tracking-wider">Technical Specifications</h3>
                <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                    <div className="border-l-2 border-accent pl-3">
                        <dt className="text-xs text-neutral-dark">Processor</dt>
                        <dd className="text-sm font-medium text-primary">Quantum Core X7</dd>
                    </div>
                    <div className="border-l-2 border-neutral-default pl-3">
                        <dt className="text-xs text-neutral-dark">Memory</dt>
                        <dd className="text-sm font-medium text-primary">64GB Unified</dd>
                    </div>
                </dl>
            </div>

            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-4 gap-4">
                   {/* Qty Selector Placeholder */}
                   <div className="col-span-1 flex items-center justify-center border border-neutral-default rounded-lg">
                       <span className="font-bold text-primary">1</span>
                   </div>
                   <Button size="lg" variant="primary" className="col-span-3">Add to Cart</Button>
              </div>
              <Button size="lg" variant="secondary" className="w-full bg-primary-light/10 text-primary border border-primary/10 hover:bg-primary-light/20">
                  Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
