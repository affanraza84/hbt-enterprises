export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  slug: string;
  images: string[];
  category: string;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
  rating?: number;
  reviewsCount?: number;
  originalPrice?: number;
}

export interface ProductVariant {
  id: string;
  name: string;
  priceAdjustment: number;
}
