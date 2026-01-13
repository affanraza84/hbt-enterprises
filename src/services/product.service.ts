import { Product } from '@/types/product';

const MOCK_PRODUCTS: Product[] = [
    {
        id: '1',
        name: 'Neo QLED 8K Smart TV',
        description: 'Experience infinity with the bezel-less Neo QLED 8K.',
        price: 3499.99,
        slug: 'neo-qled-8k',
        images: [],
        category: 'Television',
        stock: 10,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: '2',
        name: 'iPhone 15 Pro Max',
        description: 'Titanium design, A17 Pro chip, and the most advanced camera system.',
        price: 1199.00,
        slug: 'iphone-15-pro-max',
        images: [],
        category: 'Smart Phone',
        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: '3',
        name: 'Samsung Galaxy S24 Ultra',
        description: 'Galaxy AI is here. Epic titanium design.',
        price: 1299.99,
        slug: 'samsung-s24-ultra',
        images: [],
        category: 'Smart Phone',
        stock: 45,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: '4',
        name: 'LG French Door Refrigerator',
        description: 'Keep your food fresh with linear cooling technology.',
        price: 2499.00,
        slug: 'lg-french-door-fridge',
        images: [],
        category: 'Refrigerator',
        stock: 15,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: '5',
        name: 'Sony Bravia XR OLED',
        description: 'Pure black OLED contrast and cognitive intelligence.',
        price: 2799.00,
        slug: 'sony-bravia-oled',
        images: [],
        category: 'Television',
        stock: 8,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: '6',
        name: 'Whirlpool Front Load Washer',
        description: 'Advanced stain removal and steam clean technology.',
        price: 899.00,
        slug: 'whirlpool-front-load',
        images: [],
        category: 'Washing Machine',
        stock: 20,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: '7',
        name: 'Honeywell Desert Cooler',
        description: 'Powerful airflow for large living spaces.',
        price: 249.00,
        slug: 'honeywell-desert-cooler',
        images: [],
        category: 'Cooler',
        stock: 100,
        createdAt: new Date(),
        updatedAt: new Date()
    }
];

export const ProductService = {
    async getProducts(): Promise<Product[]> {
        return MOCK_PRODUCTS;
    },

    async getProductBySlug(slug: string): Promise<Product | null> {
        return MOCK_PRODUCTS.find(p => p.slug === slug) || null;
    },

    async searchProducts(query: string): Promise<Product[]> {
        if (!query) return [];
        const lowerQuery = query.toLowerCase();
        return MOCK_PRODUCTS.filter(p =>
            p.name.toLowerCase().includes(lowerQuery) ||
            p.description.toLowerCase().includes(lowerQuery) ||
            p.category.toLowerCase().includes(lowerQuery)
        );
    }
};
