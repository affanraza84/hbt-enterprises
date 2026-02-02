import { Hero } from "@/components/home/Hero";
import { CategorySlider } from "@/components/home/CategorySlider";
import { FeaturedDisplay } from "@/components/home/FeaturedDisplay";
import { CategoryBannerGrid } from "@/components/home/CategoryBannerGrid";
import { PurpleProductGrid } from "@/components/home/PurpleProductGrid";
import { TechInnovationPromo } from "@/components/home/TechInnovationPromo";
import { WhyChooseHBT } from "@/components/home/WhyChooseHBT";
import { BrandShowcase } from "@/components/home/BrandShowcase";
import { PromoBanner } from "@/components/home/PromoBanner";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Suspense } from "react";
import { Loader } from "@/components/ui/Loader";
import { ProductService } from "@/services/product.service";
import { CategorySection } from "@/components/home/CategorySection";

export default async function Home() {
  const products = await ProductService.getProducts();

  // Helper to filter products
  const getProductsByCategory = (category: string) => 
    products.filter(p => p.category === category);
  
  const getProductsByCategories = (categories: string[]) => 
    products.filter(p => categories.includes(p.category));

  return (
    <>
      <Hero />
      <CategorySlider />
      <FeaturedDisplay />
      
      <CategorySection 
        title="Washing Machines" 
        subtitle="Laundry Care" 
        products={getProductsByCategory('Washing Machine')} 
        viewAllLink="/products?category=washing-machine" 
      />

      <CategoryBannerGrid />

      <CategorySection 
        title="Televisions" 
        subtitle="Cinematic Experience" 
        products={getProductsByCategory('Television')} 
        viewAllLink="/products?category=television" 
      />

      <CategorySection 
        title="Refrigerators" 
        subtitle="Cooling Solutions" 
        products={getProductsByCategory('Refrigerator')} 
        viewAllLink="/products?category=refrigerator" 
      />

      <CategorySection 
        title="Air Conditioners" 
        subtitle="Climate Control" 
        products={getProductsByCategory('Air Conditioner')} 
        viewAllLink="/products?category=air-conditioner" 
      />

      <CategorySection 
        title="Microwaves" 
        subtitle="Kitchen Essentials" 
        products={getProductsByCategory('Microwave')} 
        viewAllLink="/products?category=microwave" 
      />

      <PurpleProductGrid />

      <CategorySection 
        title="Smart Phones" 
        subtitle="Connect & Create" 
        products={getProductsByCategory('Smart Phone')} 
        viewAllLink="/products?category=smart-phone" 
      />

      <CategorySection 
        title="Laptops & Printers" 
        subtitle="Work & Play" 
        products={getProductsByCategories(['Laptop', 'Printer'])} 
        viewAllLink="/products?category=laptops" 
      />

      <CategorySection 
        title="Soundbars" 
        subtitle="Immersive Audio" 
        products={getProductsByCategory('Soundbar')} 
        viewAllLink="/products?category=soundbar" 
      />

      <CategorySection 
        title="Accessories" 
        subtitle="Essential Gadgets" 
        products={getProductsByCategories(['Smartwatch', 'Headphones', 'Accessories', 'Audio'])} 
        viewAllLink="/products?category=accessories" 
      />

      <TechInnovationPromo />
      <WhyChooseHBT />
      <BrandShowcase />
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
