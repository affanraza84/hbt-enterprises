import { Product } from '@/types/product';

const MOCK_PRODUCTS: Product[] = [
    {
        id: '1',
        name: 'Neo QLED 8K Smart TV',
        description: 'Experience infinity with the bezel-less Neo QLED 8K.',
        price: 349990,
        slug: 'neo-qled-8k',
        images: ['https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80'],
        category: 'Television',
        stock: 10,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: '2',
        name: 'iPhone 15 Pro Max',
        description: 'Titanium design, A17 Pro chip, and the most advanced camera system.',
        price: 159900,
        slug: 'iphone-15-pro-max',
        images: ['https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=600&q=80'],
        category: 'Smart Phone',
        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: '3',
        name: 'Samsung Galaxy S24 Ultra',
        description: 'Galaxy AI is here. Epic titanium design. The absolute pinnacle of Samsung smartphone technology.',
        price: 129999,
        originalPrice: 134999,
        slug: 'samsung-s24-ultra',
        images: ['https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1610945265064-f6d21e1e473d?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1610945264669-563b2f293b1d?auto=format&fit=crop&w=800&q=80'],
        category: 'Smart Phone',
        stock: 45,
        createdAt: new Date(),
        updatedAt: new Date(),
        rating: 4.8,
        reviewsCount: 1240,
        brand: 'SAMSUNG',
        modelNumber: 'SM-S928B',
        sku: 'SM-S928B-TI-BLK',
        joyPrice: true,
        keyFeatures: [
            'Circle to Search with Google',
            'Live Translate',
            'Note Assist with Galaxy AI',
            '200MP Wide-angle Camera',
            'Titanium Frame'
        ],
        offers: [
            'Get ₹5000 Instant Discount on HDFC Bank Cards',
            'Exchange Bonus up to ₹7000',
            'No Cost EMI up to 12 months'
        ],
        specs: {
            'Processor': 'Snapdragon 8 Gen 3',
            'Display': '6.8" QHD+ Dynamic AMOLED 2X',
            'Camera': '200MP + 50MP + 12MP + 10MP',
            'Battery': '5000 mAh'
        },
        emi: 'Standard EMI From ₹ 6,303/month'
    },
    {
        id: '4',
        name: 'LG French Door Refrigerator',
        description: 'Keep your food fresh with linear cooling technology.',
        price: 84990,
        slug: 'lg-french-door-fridge',
        images: ['https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=600&q=80'],
        category: 'Refrigerator',
        stock: 15,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: '5',
        name: 'Sony Bravia XR OLED',
        description: 'Pure black OLED contrast and cognitive intelligence.',
        price: 249900,
        slug: 'sony-bravia-oled',
        images: ['https://images.unsplash.com/photo-1552975084-6e027cd345c2?auto=format&fit=crop&w=600&q=80'],
        category: 'Television',
        stock: 8,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: '6',
        name: 'Whirlpool Front Load Washer',
        description: 'Advanced stain removal and steam clean technology.',
        price: 34990,
        slug: 'whirlpool-front-load',
        images: ['https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?auto=format&fit=crop&w=600&q=80'],
        category: 'Washing Machine',
        stock: 20,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: '7',
        name: 'Honeywell Desert Cooler',
        description: 'Powerful airflow for large living spaces.',
        price: 14990,
        slug: 'honeywell-desert-cooler',
        images: ['https://images.unsplash.com/photo-1614631446505-b0aa00640f0c?auto=format&fit=crop&w=600&q=80'],
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
