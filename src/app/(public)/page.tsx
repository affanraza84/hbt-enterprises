import { Hero } from "@/components/home/Hero";
import { CategorySlider } from "@/components/home/CategorySlider";
import { FeaturedDisplay } from "@/components/home/FeaturedDisplay";
import { PromoBanner } from "@/components/home/PromoBanner";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Suspense } from "react";
import { Loader } from "@/components/ui/Loader";
import { ProductService } from "@/services/product.service";

export default async function Home() {
  const products = await ProductService.getProducts();

  return (
    <>
      <Hero />
      <CategorySlider />
      <FeaturedDisplay />
      <PromoBanner />
      
      <section className="py-24 bg-neutral-light border-t border-neutral-default">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                 <h2 className="text-3xl sm:text-4xl font-bold text-primary font-heading mb-4">Latest Arrivals</h2>
                 <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                    Stay ahead of the curve with our newest additions. 
                    Merging cutting-edge technology with premium design.
                 </p>
            </div>
            <Suspense fallback={<div className="flex justify-center p-20"><Loader size="lg" /></div>}>
                <ProductGrid products={products} />
            </Suspense>
         </div>
      </section>
    </>
  );
}
