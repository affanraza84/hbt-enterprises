import { Hero } from "@/components/home/Hero";
import { CategorySlider } from "@/components/home/CategorySlider";
import { FeaturedDisplay } from "@/components/home/FeaturedDisplay";
import { CategoryBannerGrid } from "@/components/home/CategoryBannerGrid";
import { PurpleProductGrid } from "@/components/home/PurpleProductGrid";

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
        title="Televisions" 
        subtitle="Cinematic Experience" 
        products={getProductsByCategory('Television').slice(0, 6)} 
        viewAllLink="/products?category=television" 
      />

      <CategorySection 
        title="Washing Machines" 
        subtitle="Laundry Care" 
        products={getProductsByCategory('Washing Machine').slice(0, 6)} 
        viewAllLink="/products?category=washing-machine" 
      />

      <CategorySection 
        title="Smart Phones" 
        subtitle="Connect & Create" 
        products={getProductsByCategory('Smart Phone').slice(0, 6)} 
        viewAllLink="/products?category=smart-phone" 
      />

      <CategoryBannerGrid />

      <CategorySection 
        title="Coolers" 
        subtitle="Beat the Heat" 
        products={getProductsByCategory('Cooler').slice(0, 6)} 
        viewAllLink="/products?category=cooler" 
      />

      <CategorySection 
        title="Soundbars" 
        subtitle="Immersive Audio" 
        products={getProductsByCategory('Soundbar').slice(0, 6)} 
        viewAllLink="/products?category=soundbar" 
      />

      <PurpleProductGrid />

      <CategorySection 
        title="Refrigerators" 
        subtitle="Cooling Solutions" 
        products={getProductsByCategory('Refrigerator').slice(0, 6)} 
        viewAllLink="/products?category=refrigerator" 
      />

      <CategorySection 
        title="Air Conditioners" 
        subtitle="Climate Control" 
        products={getProductsByCategory('Air Conditioner').slice(0, 6)} 
        viewAllLink="/products?category=air-conditioner" 
      />




      <WhyChooseHBT />
      <BrandShowcase />
      <PromoBanner />
      

    </>
  );
}
