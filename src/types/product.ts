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

  // Extended details
  brand?: string;
  modelNumber?: string;
  sku?: string;
  joyPrice?: boolean; // Toggle for "Joy Price" branding
  keyFeatures?: string[];
  offers?: string[];
  specs?: Record<string, string>;
  emi?: string;
  deliveryAvailable?: boolean;
}

export interface ProductVariant {
  id: string;
  name: string;
  priceAdjustment: number;
}
