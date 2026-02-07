import { Product } from '@/types/product';
import {
    TV_IMAGES,
    SMARTPHONE_IMAGES,
    LAPTOP_IMAGES,
    MICROWAVE_IMAGES,
    REFRIGERATOR_IMAGES,
    WASHING_MACHINE_IMAGES,
    AC_IMAGES,
    ACCESSORY_IMAGES,
    SOUNDBAR_IMAGES,
    FEATURED_IMAGES
} from '@/data/images';

const MOCK_PRODUCTS: Product[] = [
    // --- TELEVISIONS ---
    {
        id: 'tv-samsung-32-hd', name: 'Samsung 80 cm (32inches) HD SMART LED TV', price: 13990, originalPrice: 17900,
        slug: 'samsung-32-hd-smart', category: 'Television', images: TV_IMAGES['tv-samsung-32-hd'], description: 'HD Smart LED TV with vibrant colors.', stock: 10, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 120, brand: 'SAMSUNG',
        keyFeatures: ['HD Resolution', 'Smart TV', 'Vibrant Colors'], offers: [], specs: { 'Screen Size': '32 Inch', 'Resolution': 'HD' }
    },
    {
        id: 'tv-samsung-43-fhd', name: 'Samsung 108 cm (43 inches) FHD SMART LED TV', price: 23500, originalPrice: 27500,
        slug: 'samsung-43-fhd-smart', category: 'Television', images: TV_IMAGES['tv-samsung-43-fhd'], description: 'Full HD Smart TV for clear visuals.', stock: 15, createdAt: new Date(), updatedAt: new Date(), rating: 4.6, reviewsCount: 200, brand: 'SAMSUNG',
        keyFeatures: ['Full HD Resolution', 'Smart Hub', 'HDR'], offers: ['No Cost EMI'], specs: { 'Screen Size': '43 Inch', 'Resolution': 'Full HD' }
    },
    {
        id: 'tv-samsung-43-crystal-4k', name: 'Samsung 108 cm (43 inches) Crystal 4K Smart LED TV', price: 26500, originalPrice: 39500,
        slug: 'samsung-43-crystal-4k', category: 'Television', images: TV_IMAGES['tv-samsung-43-crystal-4k'], description: 'Crystal 4K Processor for life-like color.', stock: 20, createdAt: new Date(), updatedAt: new Date(), rating: 4.7, reviewsCount: 350, brand: 'SAMSUNG',
        keyFeatures: ['Crystal Processor 4K', 'PurColor', '3-Side Bezel-less'], offers: [], specs: { 'Screen Size': '43 Inch', 'Resolution': '4K' }
    },
    {
        id: 'tv-samsung-43-qled', name: 'Samsung 108 cm (43 inches) SMART QLED TV', price: 34990, originalPrice: 50600,
        slug: 'samsung-43-qled', category: 'Television', images: TV_IMAGES['tv-samsung-43-qled'], description: 'QLED technology for brilliant brightness.', stock: 12, createdAt: new Date(), updatedAt: new Date(), rating: 4.8, reviewsCount: 150, brand: 'SAMSUNG',
        keyFeatures: ['Quantum Dot Technology', 'Dual LED', 'Quantum HDR'], offers: [], specs: { 'Screen Size': '43 Inch', 'Display': 'QLED' }
    },
    {
        id: 'tv-samsung-55-crystal-4k', name: 'Samsung 138 cm (55 inches) Crystal 4K UHD TV', price: 38990, originalPrice: 63900,
        slug: 'samsung-55-crystal-4k', category: 'Television', images: TV_IMAGES['tv-samsung-55-crystal-4k'], description: 'Experience 4K UHD resolution.', stock: 8, createdAt: new Date(), updatedAt: new Date(), rating: 4.7, reviewsCount: 220, brand: 'SAMSUNG',
        keyFeatures: ['Crystal Processor 4K', 'OTS Lite', 'Q-Symphony'], offers: [], specs: { 'Screen Size': '55 Inch', 'Resolution': '4K' }
    },
    {
        id: 'tv-samsung-65-crystal-4k', name: 'Samsung 163 cm (65inch) Crystal 4K TV', price: 58990, originalPrice: 58990,
        slug: 'samsung-65-crystal-4k', category: 'Television', images: TV_IMAGES['tv-samsung-65-crystal-4k'], description: 'Currently Unavailable.', stock: 0, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 80, brand: 'SAMSUNG',
        keyFeatures: ['Crystal Display', '4K Processor', 'HDR'], offers: [], specs: { 'Screen Size': '65 Inch', 'Resolution': '4K' }
    },
    {
        id: 'tv-samsung-75-4k', name: 'Samsung 179 cm (75 inch) 4K Ultra HD Remote Control', price: 79990, originalPrice: 123900,
        slug: 'samsung-75-4k', category: 'Television', images: TV_IMAGES['tv-samsung-75-4k'], description: 'Massive 75 inch 4K display.', stock: 5, createdAt: new Date(), updatedAt: new Date(), rating: 4.9, reviewsCount: 40, brand: 'SAMSUNG',
        keyFeatures: ['4K Ultra HD', 'Smart Remote', 'Voice Assistant'], offers: [], specs: { 'Screen Size': '75 Inch', 'Resolution': '4K' }
    },
    {
        id: 'tv-lg-32-webos', name: 'LG 80 CM (32 inches) WebOS LED TV', price: 14490, originalPrice: 21240,
        slug: 'lg-32-webos', category: 'Television', images: TV_IMAGES['tv-lg-32-webos'], description: 'Smart TV with WebOS.', stock: 15, createdAt: new Date(), updatedAt: new Date(), rating: 4.4, reviewsCount: 110, brand: 'LG',
        keyFeatures: ['WebOS', 'Dynamic Color Enhancer', 'Dolby Audio'], offers: [], specs: { 'Screen Size': '32 Inch', 'OS': 'WebOS' }
    },
    {
        id: 'tv-lg-43-4k', name: 'LG 108 CM (43INCH) 4K Ultra HD WebOS LED TV', price: 30490, originalPrice: 46090,
        slug: 'lg-43-4k-webos', category: 'Television', images: TV_IMAGES['tv-lg-43-4k'], description: 'Real 4K picture quality.', stock: 18, createdAt: new Date(), updatedAt: new Date(), rating: 4.6, reviewsCount: 250, brand: 'LG',
        keyFeatures: ['4K Upscaling', 'AI Brightness', 'WebOS'], offers: [], specs: { 'Screen Size': '43 Inch', 'Resolution': '4K' }
    },
    {
        id: 'tv-lg-55-4k', name: 'LG 139 cm (55 inches) 4K Ultra HD WebOS LED TV', price: 39990, originalPrice: 66990,
        slug: 'lg-55-4k-webos', category: 'Television', images: TV_IMAGES['tv-lg-55-4k'], description: 'Cinematic experience at home.', stock: 10, createdAt: new Date(), updatedAt: new Date(), rating: 4.7, reviewsCount: 180, brand: 'LG',
        keyFeatures: ['Filmmaker Mode', 'HDR10 Pro', 'Game Optimizer'], offers: [], specs: { 'Screen Size': '55 Inch', 'Resolution': '4K' }
    },
    {
        id: 'tv-lg-65-4k', name: 'LG 164 cm (65 inch) 4K LED Smart WebOS TV', price: 59500, originalPrice: 105990,
        slug: 'lg-65-4k-webos', category: 'Television', images: TV_IMAGES['tv-lg-65-4k'], description: 'Big screen entertainment.', stock: 8, createdAt: new Date(), updatedAt: new Date(), rating: 4.8, reviewsCount: 120, brand: 'LG',
        keyFeatures: ['α5 Gen5 AI Processor', 'ThinkQ AI', 'Magic Remote'], offers: [], specs: { 'Screen Size': '65 Inch', 'Resolution': '4K' }
    },
    {
        id: 'tv-lg-75-4k', name: 'LG 190 CM (75 INCH) Ultra HD WebOS LED TV', price: 115000, originalPrice: 269900,
        slug: 'lg-75-4k-webos', category: 'Television', images: TV_IMAGES['tv-lg-75-4k'], description: 'Ultimate viewing experience.', stock: 3, createdAt: new Date(), updatedAt: new Date(), rating: 4.9, reviewsCount: 30, brand: 'LG',
        keyFeatures: ['Real 4K', 'Slim Design', 'Cloud Gaming'], offers: [], specs: { 'Screen Size': '75 Inch', 'Resolution': '4K' }
    },
    {
        id: 'tv-bush-32-smart', name: 'Bush 32 Inch Smart LED TV', price: 7990, originalPrice: 15990,
        slug: 'bush-32-smart', category: 'Television', images: TV_IMAGES['tv-bush-32-smart'], description: 'Affordable smart entertainment.', stock: 25, createdAt: new Date(), updatedAt: new Date(), rating: 4.0, reviewsCount: 50, brand: 'BUSH',
        keyFeatures: ['Smart Connectivity', 'HD Ready', 'Clear Sound'], offers: [], specs: { 'Screen Size': '32 Inch', 'Resolution': 'HD' }
    },
    {
        id: 'tv-bush-43-smart', name: 'Bush Smart 43 Inch LED TV', price: 15500, originalPrice: 25990,
        slug: 'bush-43-smart', category: 'Television', images: TV_IMAGES['tv-bush-43-smart'], description: 'Smart TV for everyone.', stock: 20, createdAt: new Date(), updatedAt: new Date(), rating: 4.2, reviewsCount: 75, brand: 'BUSH',
        keyFeatures: ['FHD Resolution', 'Multiple Ports', 'Smart Apps'], offers: [], specs: { 'Screen Size': '43 Inch', 'Resolution': 'FHD' }
    },
    {
        id: 'tv-bush-50-4k', name: 'Bush Smart 50 Inch 4K LED TV', price: 21990, originalPrice: 39990,
        slug: 'bush-50-4k', category: 'Television', images: TV_IMAGES['tv-bush-50-4k'], description: '4K clarity at a great price.', stock: 15, createdAt: new Date(), updatedAt: new Date(), rating: 4.3, reviewsCount: 60, brand: 'BUSH',
        keyFeatures: ['4K UHD', 'Smart Interface', 'Wide Viewing Angle'], offers: [], specs: { 'Screen Size': '50 Inch', 'Resolution': '4K' }
    },
    {
        id: 'tv-bush-55-4k', name: 'Bush Smart 55 Inch 4K LED TV', price: 29990, originalPrice: 49990,
        slug: 'bush-55-4k', category: 'Television', images: TV_IMAGES['tv-bush-55-4k'], description: 'Immersive 4K experience.', stock: 12, createdAt: new Date(), updatedAt: new Date(), rating: 4.3, reviewsCount: 45, brand: 'BUSH',
        keyFeatures: ['4K Display', 'Smart Features', 'Thin Bezel'], offers: [], specs: { 'Screen Size': '55 Inch', 'Resolution': '4K' }
    },
    {
        id: 'tv-bush-65-4k', name: 'Bush Smart 65 Inch 4K TV', price: 39990, originalPrice: 65990,
        slug: 'bush-65-4k', category: 'Television', images: TV_IMAGES['tv-bush-65-4k'], description: 'Large screen 4K entertainment.', stock: 10, createdAt: new Date(), updatedAt: new Date(), rating: 4.4, reviewsCount: 30, brand: 'BUSH',
        keyFeatures: ['Big Screen', '4K Ultra HD', 'Premium Sound'], offers: [], specs: { 'Screen Size': '65 Inch', 'Resolution': '4K' }
    },
    {
        id: 'tv-bush-75-smart', name: 'Bush Smart 75 Inch', price: 65990, originalPrice: 99990,
        slug: 'bush-75-smart', category: 'Television', images: TV_IMAGES['tv-bush-75-smart'], description: 'Currently Not Available.', stock: 0, createdAt: new Date(), updatedAt: new Date(), rating: 0, reviewsCount: 0, brand: 'BUSH',
        keyFeatures: ['75 Inch Display'], offers: [], specs: { 'Screen Size': '75 Inch' }
    },
    {
        id: 'tv-daisun-32-smart', name: 'Daisun Smart 32 Inch TV', price: 10990, originalPrice: 16990,
        slug: 'daisun-32-smart', category: 'Television', images: TV_IMAGES['tv-daisun-32-smart'], description: 'Budget friendly smart TV.', stock: 30, createdAt: new Date(), updatedAt: new Date(), rating: 4.1, reviewsCount: 40, brand: 'DAISUN',
        keyFeatures: ['Smart Features', 'HD Ready', 'Energy Efficient'], offers: [], specs: { 'Screen Size': '32 Inch', 'Resolution': 'HD' }
    },
    {
        id: 'tv-daisun-43-smart', name: 'Daisun Smart 43 Inch TV', price: 18990, originalPrice: 26990,
        slug: 'daisun-43-smart', category: 'Television', images: TV_IMAGES['tv-daisun-43-smart'], description: 'Value for money 43 inch TV.', stock: 25, createdAt: new Date(), updatedAt: new Date(), rating: 4.2, reviewsCount: 60, brand: 'DAISUN',
        keyFeatures: ['Full HD', 'Smart Connectivity', 'Sleek Design'], offers: [], specs: { 'Screen Size': '43 Inch', 'Resolution': 'FHD' }
    },
    {
        id: 'tv-daisun-55-4k', name: 'Daisun 55 Inch 4K TV', price: 30990, originalPrice: 56990,
        slug: 'daisun-55-4k', category: 'Television', images: TV_IMAGES['tv-daisun-55-4k'], description: 'Affordable 4K option.', stock: 15, createdAt: new Date(), updatedAt: new Date(), rating: 4.3, reviewsCount: 50, brand: 'DAISUN',
        keyFeatures: ['4K Resolution', 'Smart TV', 'HDMI inputs'], offers: [], specs: { 'Screen Size': '55 Inch', 'Resolution': '4K' }
    },
    {
        id: 'tv-daisun-55-webos', name: 'Daisun WebOS 55 Inch 4K TV', price: 34990, originalPrice: 61990,
        slug: 'daisun-55-webos', category: 'Television', images: TV_IMAGES['tv-daisun-55-webos'], description: 'WebOS powered 4K TV.', stock: 12, createdAt: new Date(), updatedAt: new Date(), rating: 4.4, reviewsCount: 45, brand: 'DAISUN',
        keyFeatures: ['WebOS Interface', '4K UHD', 'Magic Remote Support'], offers: [], specs: { 'Screen Size': '55 Inch', 'OS': 'WebOS' }
    },
    {
        id: 'tv-daisun-65-smart', name: 'Daisun 65 Inch', price: 45990, originalPrice: 75990,
        slug: 'daisun-65-smart', category: 'Television', images: TV_IMAGES['tv-daisun-65-smart'], description: 'Currently Not Available.', stock: 0, createdAt: new Date(), updatedAt: new Date(), rating: 0, reviewsCount: 0, brand: 'DAISUN',
        keyFeatures: ['65 Inch Display'], offers: [], specs: { 'Screen Size': '65 Inch' }
    },
    {
        id: 'tv-cellecor-32-fhd', name: 'Cellecor Smart 32 Inch Full HD TV', price: 9990, originalPrice: 20990,
        slug: 'cellecor-32-fhd', category: 'Television', images: TV_IMAGES['tv-cellecor-32-fhd'], description: 'Full HD in 32 inch size.', stock: 20, createdAt: new Date(), updatedAt: new Date(), rating: 4.2, reviewsCount: 30, brand: 'CELLECOR',
        keyFeatures: ['Full HD Resolution', 'Smart Features', 'A+ Grade Panel'], offers: [], specs: { 'Screen Size': '32 Inch', 'Resolution': 'FHD' }
    },
    {
        id: 'tv-cellecor-43-smart', name: 'Cellecor Smart 43 Inch TV', price: 18490, originalPrice: 39990,
        slug: 'cellecor-43-smart', category: 'Television', images: TV_IMAGES['tv-cellecor-43-smart'], description: 'Smart entertainment hub.', stock: 18, createdAt: new Date(), updatedAt: new Date(), rating: 4.3, reviewsCount: 50, brand: 'CELLECOR',
        keyFeatures: ['Smart TV', 'Connectivity Options', 'Dynamic Contrast'], offers: [], specs: { 'Screen Size': '43 Inch' }
    },
    {
        id: 'tv-cellecor-55-google', name: 'Cellecor Smart Google 55 Inch TV', price: 33990, originalPrice: 69990,
        slug: 'cellecor-55-google', category: 'Television', images: TV_IMAGES['tv-cellecor-55-google'], description: 'Google TV experience.', stock: 15, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 70, brand: 'CELLECOR',
        keyFeatures: ['Google TV', 'Voice Control', '4K UHD'], offers: [], specs: { 'Screen Size': '55 Inch', 'OS': 'Google TV' }
    },
    {
        id: 'tv-cellecor-65-google', name: 'Cellecor Smart Google 65 Inch TV', price: 48490, originalPrice: 89990,
        slug: 'cellecor-65-google', category: 'Television', images: TV_IMAGES['tv-cellecor-65-google'], description: 'Large screen Google TV.', stock: 10, createdAt: new Date(), updatedAt: new Date(), rating: 4.6, reviewsCount: 40, brand: 'CELLECOR',
        keyFeatures: ['Google TV', 'Big Screen', 'Dolby Audio'], offers: [], specs: { 'Screen Size': '65 Inch', 'OS': 'Google TV' }
    },
    {
        id: 'tv-cellecor-75-google', name: 'Cellecor Smart Google 75 Inch', price: 0, originalPrice: 0,
        slug: 'cellecor-75-google', category: 'Television', images: TV_IMAGES['tv-cellecor-75-google'], description: 'Currently Not Available.', stock: 0, createdAt: new Date(), updatedAt: new Date(), rating: 0, reviewsCount: 0, brand: 'CELLECOR',
        keyFeatures: ['75 Inch Display', 'Google TV'], offers: [], specs: { 'Screen Size': '75 Inch' }
    },

    // --- SMARTPHONES ---
    {
        id: 'ph-1',
        name: 'Samsung Galaxy S24 Ultra',
        description: 'Galaxy AI is here. Epic titanium design. The absolute pinnacle of Samsung smartphone technology.',
        price: 129999,
        originalPrice: 134999,
        slug: 'samsung-s24-ultra',
        images: SMARTPHONE_IMAGES['ph-1'],
        category: 'Smart Phone',
        stock: 45,
        createdAt: new Date(),
        updatedAt: new Date(),
        rating: 4.8,
        reviewsCount: 1240,
        brand: 'SAMSUNG',
        modelNumber: 'SM-S928B',
        joyPrice: true,
        keyFeatures: ['Circle to Search with Google', 'Live Translate', 'Note Assist with Galaxy AI', '200MP Wide-angle Camera', 'Titanium Frame'],
        offers: ['Get ₹5000 Instant Discount on HDFC Bank Cards', 'Exchange Bonus up to ₹7000', 'No Cost EMI up to 12 months'],
        specs: { 'Processor': 'Snapdragon 8 Gen 3', 'Display': '6.8" QHD+ Dynamic AMOLED 2X', 'Camera': '200MP + 50MP + 12MP + 10MP', 'Battery': '5000 mAh' },
        emi: 'Standard EMI From ₹ 6,303/month'
    },
    {
        id: 'ph-2', name: 'Apple iPhone 15 Pro Max (256 GB)', price: 148900, originalPrice: 159900,
        slug: 'iphone-15-pro-max', category: 'Smart Phone', images: SMARTPHONE_IMAGES['ph-2'], description: 'Titanium design, A17 Pro chip.', stock: 10, createdAt: new Date(), updatedAt: new Date(), rating: 4.8, reviewsCount: 1200, brand: 'APPLE',
        keyFeatures: ['A17 Pro Chip', '48MP Main Camera', 'Titanium Design', 'USB-C'], offers: ['₹4000 Cashback HDFC'], specs: { 'Screen': '6.7 Inch Super Retina XDR', 'Chip': 'A17 Pro', 'Storage': '256 GB' }
    },
    {
        id: 'ph-3', name: 'OnePlus 12 5G (16GB RAM, 512GB Storage)', price: 69999, originalPrice: 74999,
        slug: 'oneplus-12', category: 'Smart Phone', images: SMARTPHONE_IMAGES['ph-3'], description: 'Smooth Beyond Belief.', stock: 20, createdAt: new Date(), updatedAt: new Date(), rating: 4.7, reviewsCount: 600, brand: 'ONEPLUS',
        keyFeatures: ['Snapdragon 8 Gen 3', '4th Gen Hasselblad Camera', '100W SUPERVOOC'], offers: ['Additional Exchange Bonus ₹2000'], specs: { 'RAM': '16 GB', 'Storage': '512 GB', 'Battery': '5400 mAh' }
    },
    {
        id: 'ph-4', name: 'Google Pixel 8 Pro 5G', price: 98999, originalPrice: 106999,
        slug: 'google-pixel-8-pro', category: 'Smart Phone', images: SMARTPHONE_IMAGES['ph-4'], description: 'The power of Google AI.', stock: 12, createdAt: new Date(), updatedAt: new Date(), rating: 4.6, reviewsCount: 450, brand: 'GOOGLE',
        keyFeatures: ['Tensor G3 Chip', 'Super Actua Display', 'Best Take', 'Magic Editor'], offers: ['Pixel Buds @ ₹999'], specs: { 'Camera': '50MP + 48MP + 48MP', 'OS': 'Android 14' }
    },
    {
        id: 'ph-5', name: 'Nothing Phone (2) 5G', price: 36999, originalPrice: 49999,
        slug: 'nothing-phone-2', category: 'Smart Phone', images: SMARTPHONE_IMAGES['ph-5'], description: 'Come to the bright side.', stock: 25, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 320, brand: 'NOTHING',
        keyFeatures: ['Glyph Interface', 'Nothing OS 2.0', 'Snapdragon 8+ Gen 1'], offers: ['Instant Discount ₹3000'], specs: { 'Display': '6.7" OLED', 'Battery': '4700 mAh' }
    },
    {
        id: 'ph-5a', name: 'Nothing Phone (2a)', price: 23999, originalPrice: 25999,
        slug: 'nothing-phone-2a', category: 'Smart Phone', images: SMARTPHONE_IMAGES['ph-5a'], description: 'Powerfully unique.', stock: 25, createdAt: new Date(), updatedAt: new Date(), rating: 4.4, reviewsCount: 67, brand: 'NOTHING',
        keyFeatures: ['Mediatek Dimensity 7200 Pro', '50MP Dual Camera', 'Adaptive 120Hz AMOLED'], offers: ['Bank Offer ₹2000'], specs: { 'RAM': '8 GB', 'Storage': '128 GB' }
    },
    {
        id: 'ph-6', name: 'Xiaomi 14 Ultra 5G Leica', price: 99999, originalPrice: 119999,
        slug: 'xiaomi-14-ultra', category: 'Smart Phone', images: SMARTPHONE_IMAGES['ph-6'], description: 'Lens to Legend.', stock: 8, createdAt: new Date(), updatedAt: new Date(), rating: 4.7, reviewsCount: 200, brand: 'XIAOMI',
        keyFeatures: ['Leica Summilux Lens', 'Snapdragon 8 Gen 3', 'WQHD+ AMOLED'], offers: ['₹5000 off on Exchange'], specs: { 'Camera': 'Quad 50MP', 'Battery': '5000 mAh' }
    },

    // --- LAPTOPS & PRINTERS ---
    {
        id: 'lp-1', name: 'Apple MacBook Air M3 Chip 13-inch', price: 114900, originalPrice: 134900,
        slug: 'macbook-air-m3', category: 'Laptop', images: LAPTOP_IMAGES['lp-1'], description: 'Lean. Mean. M3 Machine.', stock: 15, createdAt: new Date(), updatedAt: new Date(), rating: 4.9, reviewsCount: 320, brand: 'APPLE',
        keyFeatures: ['Supercharged by M3', 'Up to 18 hrs battery', 'Liquid Retina Display'], offers: ['Student Discount'], specs: { 'Chip': 'Apple M3', 'RAM': '8GB', 'SSD': '256GB' }
    },
    {
        id: 'lp-2', name: 'HP Pavilion 15 12th Gen Intel Core i5', price: 62990, originalPrice: 78000,
        slug: 'hp-pavilion-15', category: 'Laptop', images: LAPTOP_IMAGES['lp-2'], description: 'Performance that lasts.', stock: 18, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 210, brand: 'HP',
        keyFeatures: ['Intel Core i5 12th Gen', 'Backlit Keyboard', 'Bang & Olufsen Audio'], offers: ['Free Mouse'], specs: { 'Processor': 'i5-1240P', 'RAM': '16GB', 'Storage': '512GB SSD' }
    },
    {
        id: 'lp-3', name: 'Canon Pixma G3000 All-in-One Ink Tank Colour Printer', price: 12499, originalPrice: 15995,
        slug: 'canon-pixma-g3000', category: 'Printer', images: LAPTOP_IMAGES['lp-3'], description: 'High volume printing.', stock: 25, createdAt: new Date(), updatedAt: new Date(), rating: 4.4, reviewsCount: 500, brand: 'CANON',
        keyFeatures: ['High Yield Ink Bottles', 'Wireless Printing', 'Integrated Ink Tanks'], offers: ['Extra Ink Bottle'], specs: { 'Type': 'Ink Tank', 'Connectivity': 'Wi-Fi, USB' }
    },
    {
        id: 'lp-4', name: 'Dell XPS 13 Plus Laptop Evo Core i7', price: 199990, originalPrice: 240000,
        slug: 'dell-xps-13', category: 'Laptop', images: LAPTOP_IMAGES['lp-4'], description: 'Designed to be the best.', stock: 5, createdAt: new Date(), updatedAt: new Date(), rating: 4.7, reviewsCount: 150, brand: 'DELL',
        keyFeatures: ['Zero-lattice Keyboard', 'Capacitive Touch Row', 'OLED 3.5K Display'], offers: ['No Cost EMI'], specs: { 'Processor': 'i7-1360P', 'RAM': '32GB', 'SSD': '1TB' }
    },
    {
        id: 'lp-5', name: 'ASUS ROG Zephyrus G14 Gaming Laptop', price: 149990, originalPrice: 180990,
        slug: 'asus-rog-g14', category: 'Laptop', images: LAPTOP_IMAGES['lp-5'], description: 'World\'s most powerful 14-inch gaming laptop.', stock: 8, createdAt: new Date(), updatedAt: new Date(), rating: 4.8, reviewsCount: 220, brand: 'ASUS',
        keyFeatures: ['AniMe Matrix LED', 'AMD Ryzen 9', 'RTX 4060', 'Nebula Display'], offers: ['Game Pass Included'], specs: { 'Processor': 'Ryzen 9 7940HS', 'GPU': 'RTX 4060 8GB' }
    },
    {
        id: 'lp-6', name: 'Epson EcoTank L3250 Wi-Fi All-in-One Ink Tank Printer', price: 13999, originalPrice: 16999,
        slug: 'epson-ecotank-l3250', category: 'Printer', images: LAPTOP_IMAGES['lp-6'], description: 'Economical and Eco-friendly.', stock: 20, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 400, brand: 'EPSON',
        keyFeatures: ['Heat-Free Technology', 'Smart Panel App', 'Spill-free Refilling'], offers: ['1 Year Extended Warranty'], specs: { 'Print Speed': '33 ppm', 'Cost per page': '7 paise' }
    },

    // --- MICROWAVES ---
    {
        id: 'mw-1', name: 'LG 28 L Convection Microwave Oven', price: 11990, originalPrice: 16490,
        slug: 'lg-28l-convection', category: 'Microwave', images: MICROWAVE_IMAGES['mw-1'], description: 'All in one convection oven.', stock: 25, createdAt: new Date(), updatedAt: new Date(), rating: 4.6, reviewsCount: 380, brand: 'LG',
        keyFeatures: ['Charcoal Lighting Heater', 'Diet Fry', 'Indian Roti Basket'], offers: ['Starter Kit Included'], specs: { 'Capacity': '28L', 'Type': 'Convection' }
    },
    {
        id: 'mw-2', name: 'Samsung 28 L Convection Microwave Oven', price: 11590, originalPrice: 15500,
        slug: 'samsung-28l-convection', category: 'Microwave', images: MICROWAVE_IMAGES['mw-2'], description: 'Curd making and tandoor technology.', stock: 20, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 310, brand: 'SAMSUNG',
        keyFeatures: ['Slim Fry Technology', 'Tandoor Technology', 'Curd Making'], offers: ['10% Cashback'], specs: { 'Capacity': '28L', 'Power': '900W' }
    },
    {
        id: 'mw-3', name: 'IFB 20 L Convection Microwave Oven', price: 9490, originalPrice: 13490,
        slug: 'ifb-20l-convection', category: 'Microwave', images: MICROWAVE_IMAGES['mw-3'], description: 'Multi-stage cooking.', stock: 15, createdAt: new Date(), updatedAt: new Date(), rating: 4.4, reviewsCount: 190, brand: 'IFB',
        keyFeatures: ['Keep Warm', 'Deodorize', 'Auto Cook Menus'], offers: [], specs: { 'Capacity': '20L', 'Control': 'Keypad' }
    },
    {
        id: 'mw-4', name: 'Panasonic 27 L Convection Microwave Oven', price: 12990, originalPrice: 16990,
        slug: 'panasonic-27l-convection', category: 'Microwave', images: MICROWAVE_IMAGES['mw-4'], description: 'Magic grill technology.', stock: 12, createdAt: new Date(), updatedAt: new Date(), rating: 4.7, reviewsCount: 220, brand: 'PANASONIC',
        keyFeatures: ['Twin Turbo Cooking', 'Magic Grill', 'Zero Oil Recipes'], offers: ['Free Glass Bowl'], specs: { 'Capacity': '27L', 'Turntable': 'Glass' }
    },
    {
        id: 'mw-5', name: 'Bajaj 17 L Solo Microwave Oven', price: 4990, originalPrice: 6500,
        slug: 'bajaj-17l-solo', category: 'Microwave', images: MICROWAVE_IMAGES['mw-5'], description: 'Compact and efficient.', stock: 30, createdAt: new Date(), updatedAt: new Date(), rating: 4.3, reviewsCount: 150, brand: 'BAJAJ',
        keyFeatures: ['Cooking Complete Alarm', 'Defrost', 'Mechanical Knob'], offers: [], specs: { 'Capacity': '17L', 'Type': 'Solo' }
    },
    {
        id: 'mw-6', name: 'Morphy Richards 25 L Convection Microwave Oven', price: 10990, originalPrice: 14990,
        slug: 'morphy-richards-25l', category: 'Microwave', images: MICROWAVE_IMAGES['mw-6'], description: 'Premium design.', stock: 10, createdAt: new Date(), updatedAt: new Date(), rating: 4.4, reviewsCount: 110, brand: 'MORPHY RICHARDS',
        keyFeatures: ['Combination Cooking', 'Stainless Steel Cavity', 'Child Lock'], offers: ['2 Years Warranty'], specs: { 'Capacity': '25L', 'Color': 'Silver' }
    },

    // --- REFRIGERATORS ---
    {
        id: 'ref-1', name: 'Samsung 236 L 3 Star Digital Inverter Frost Free Double Door', price: 24990, originalPrice: 31990,
        slug: 'samsung-236l-double-door', category: 'Refrigerator', images: REFRIGERATOR_IMAGES['ref-1'], description: 'Convertible 3-in-1.', stock: 12, createdAt: new Date(), updatedAt: new Date(), rating: 4.6, reviewsCount: 280, brand: 'SAMSUNG',
        keyFeatures: ['Digital Inverter', 'Convertible 3-in-1', 'Stabilizer Free Operation'], offers: ['Exchange Up To ₹4000'], specs: { 'Capacity': '236L', 'Star Rating': '3 Star' }
    },
    {
        id: 'ref-2', name: 'LG 242 L 3 Star Smart Inverter Frost-Free Double Door', price: 25990, originalPrice: 33990,
        slug: 'lg-242l-double-door', category: 'Refrigerator', images: REFRIGERATOR_IMAGES['ref-2'], description: 'Smart diagnosis.', stock: 15, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 210, brand: 'LG',
        keyFeatures: ['Smart Inverter Compressor', 'Door Cooling+', 'Smart Diagnosis'], offers: [], specs: { 'Capacity': '242L', 'Cooling': 'Frost Free' }
    },
    {
        id: 'ref-3', name: 'Whirlpool 265 L 3 Star Inverter Frost-Free Double Door', price: 27490, originalPrice: 35100,
        slug: 'whirlpool-265l-double-door', category: 'Refrigerator', images: REFRIGERATOR_IMAGES['ref-3'], description: 'Intellisense inverter.', stock: 10, createdAt: new Date(), updatedAt: new Date(), rating: 4.4, reviewsCount: 150, brand: 'WHIRLPOOL',
        keyFeatures: ['Intellisense Inverter', '12 Days Garden Fresh', 'Zeolite Technology'], offers: [], specs: { 'Capacity': '265L', 'Compressor': 'Inverter' }
    },
    {
        id: 'ref-4', name: 'Haier 190 L 4 Star Single Door Refrigerator', price: 14990, originalPrice: 19900,
        slug: 'haier-190l-single-door', category: 'Refrigerator', images: REFRIGERATOR_IMAGES['ref-4'], description: '1 Hour Icing Technology.', stock: 18, createdAt: new Date(), updatedAt: new Date(), rating: 4.3, reviewsCount: 120, brand: 'HAIER',
        keyFeatures: ['1 Hour Icing Technology', 'Stabiliser Free', 'Toughened Glass Shelves'], offers: ['Instant ₹500 Off'], specs: { 'Capacity': '190L', 'Door': 'Single' }
    },
    {
        id: 'ref-5', name: 'Godrej 223 L 3 Star Nano Shield Technology Inverter Frost Free', price: 22990, originalPrice: 28990,
        slug: 'godrej-223l-double-door', category: 'Refrigerator', images: REFRIGERATOR_IMAGES['ref-5'], description: 'Nano shield disinfection.', stock: 8, createdAt: new Date(), updatedAt: new Date(), rating: 4.2, reviewsCount: 90, brand: 'GODREJ',
        keyFeatures: ['Nano Shield Disinfection', 'Inverter Compressor', 'Cool Shower Technology'], offers: [], specs: { 'Capacity': '223L', 'Color': 'Blue' }
    },
    {
        id: 'ref-6', name: 'Samsung 653 L 3 Star Convertible 5-in-1 Side by Side Refrigerator', price: 79990, originalPrice: 103000,
        slug: 'samsung-653l-side-by-side', category: 'Refrigerator', images: REFRIGERATOR_IMAGES['ref-6'], description: 'SpaceMax technology.', stock: 5, createdAt: new Date(), updatedAt: new Date(), rating: 4.8, reviewsCount: 350, brand: 'SAMSUNG',
        keyFeatures: ['Convertible 5-in-1', 'SpaceMax Technology', 'Twin Cooling Plus'], offers: ['EMI from ₹4000'], specs: { 'Capacity': '653L', 'Type': 'Side by Side' }
    },
    {
        id: 'ref-feat-lg', name: 'LG French Door Refrigerator', description: 'Keep your food fresh with linear cooling technology.', price: 84990, slug: 'lg-french-door-fridge', images: REFRIGERATOR_IMAGES['ref-feat-lg'], category: 'Refrigerator', stock: 15, createdAt: new Date(), updatedAt: new Date(), brand: 'LG',
        keyFeatures: ['Linear Cooling', 'Door Cooling+', 'Hygiene Fresh+'], offers: [], specs: { 'Capacity': '594L', 'Compressor': 'Inverter Linear' }
    },

    // --- WASHING MACHINES ---
    {
        id: 'wm-1', name: 'LG 8 Kg 5 Star Inverter Fully Automatic Front Load', price: 34990, originalPrice: 45990,
        slug: 'lg-8kg-front-load', category: 'Washing Machine', images: WASHING_MACHINE_IMAGES['wm-1'], description: 'Direct Drive Motor.', stock: 15, createdAt: new Date(), updatedAt: new Date(), rating: 4.8, reviewsCount: 320, brand: 'LG',
        keyFeatures: ['AI Direct Drive', 'Steam Wash', 'ThinQ'], offers: ['5% off on Prepaid'], specs: { 'Capacity': '8 Kg', 'Type': 'Front Load' }
    },
    {
        id: 'wm-2', name: 'Samsung 7 Kg 5 Star Inverter Fully Automatic Top Load', price: 18990, originalPrice: 22500,
        slug: 'samsung-7kg-top-load', category: 'Washing Machine', images: WASHING_MACHINE_IMAGES['wm-2'], description: 'Eco Bubble Technology.', stock: 20, createdAt: new Date(), updatedAt: new Date(), rating: 4.6, reviewsCount: 150, brand: 'SAMSUNG',
        keyFeatures: ['Eco Bubble', 'Digital Inverter', 'Soft Close Lid'], offers: [], specs: { 'Capacity': '7 Kg', 'Type': 'Top Load' }
    },
    {
        id: 'wm-3', name: 'Whirlpool 7.5 Kg 5 Star Stainwash Pro Top Load', price: 16490, originalPrice: 20400,
        slug: 'whirlpool-7.5kg-top-load', category: 'Washing Machine', images: WASHING_MACHINE_IMAGES['wm-3'], description: 'Hard water wash.', stock: 10, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 89, brand: 'WHIRLPOOL',
        keyFeatures: ['Hard Water Wash', 'Zero Pressure Fill', 'Spiro Wash'], offers: [], specs: { 'Capacity': '7.5 Kg', 'Heater': 'Yes' }
    },
    {
        id: 'wm-4', name: 'IFB 8 Kg 5 Star AI Powered Front Load', price: 36990, originalPrice: 48990,
        slug: 'ifb-8kg-ai-front-load', category: 'Washing Machine', images: WASHING_MACHINE_IMAGES['wm-4'], description: 'AI powered wash.', stock: 8, createdAt: new Date(), updatedAt: new Date(), rating: 4.7, reviewsCount: 205, brand: 'IFB',
        keyFeatures: ['AI Powered', 'Oxyjet Technology', 'Power Steam'], offers: ['Exchange Bonus'], specs: { 'Capacity': '8 Kg', 'RPM': '1400' }
    },
    {
        id: 'wm-5', name: 'Bosch 7 Kg 5 Star Inverter Touch Control Front Load', price: 30990, originalPrice: 39500,
        slug: 'bosch-7kg-front-load', category: 'Washing Machine', images: WASHING_MACHINE_IMAGES['wm-5'], description: 'Hygiene Wash.', stock: 12, createdAt: new Date(), updatedAt: new Date(), rating: 4.8, reviewsCount: 180, brand: 'BOSCH',
        keyFeatures: ['Hygiene Wash', 'Anti-Tangle', 'Vario Drum'], offers: [], specs: { 'Capacity': '7 Kg', 'Motor': 'EcoSilence Drive' }
    },
    {
        id: 'wm-6', name: 'Haier 8.5 Kg 5 Star Anti-Bacterial Vortex Top Load', price: 22990, originalPrice: 32000,
        slug: 'haier-8.5kg-top-load', category: 'Washing Machine', images: WASHING_MACHINE_IMAGES['wm-6'], description: 'Oceanus Wave Drum.', stock: 18, createdAt: new Date(), updatedAt: new Date(), rating: 4.4, reviewsCount: 95, brand: 'HAIER',
        keyFeatures: ['Oceanus Wave Drum', 'Double Magic Filter', 'Near Zero Pressure'], offers: [], specs: { 'Capacity': '8.5 Kg', 'Body': 'Steel' }
    },
    {
        id: 'wm-feat-whirl', name: 'Whirlpool Front Load Washer', description: 'Advanced stain removal and steam clean technology.', price: 34990, slug: 'whirlpool-front-load', images: WASHING_MACHINE_IMAGES['wm-feat-whirl'], category: 'Washing Machine', stock: 20, createdAt: new Date(), updatedAt: new Date(), brand: 'WHIRLPOOL',
        keyFeatures: ['FreshCare+', '6th Sense SoftMove', 'Steam Refresh'], offers: ['Installation Free'], specs: { 'Capacity': '7 Kg', 'Energy': '5 Star' }
    },

    // --- AIR CONDITIONERS ---
    {
        id: 'ac-1', name: 'Voltas 1.5 Ton 5 Star Inverter Split AC', price: 38990, originalPrice: 68990,
        slug: 'voltas-1.5-split', category: 'Air Conditioner', images: AC_IMAGES['ac-1'], description: 'Quick cooling and energy efficient.', stock: 20, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 300, brand: 'VOLTAS',
        keyFeatures: ['Adjustable Cooling', 'Anti-Dust Filter', 'Copper Condenser'], offers: ['Free Installation'], specs: { 'Capacity': '1.5 Ton', 'Rating': '5 Star' }
    },
    {
        id: 'ac-2', name: 'LG 1.5 Ton 5 Star AI DUAL Inverter Split AC', price: 44490, originalPrice: 78990,
        slug: 'lg-1.5-split-ai', category: 'Air Conditioner', images: AC_IMAGES['ac-2'], description: 'AI Convertible 6-in-1.', stock: 18, createdAt: new Date(), updatedAt: new Date(), rating: 4.7, reviewsCount: 410, brand: 'LG',
        keyFeatures: ['AI Convertible 6-in-1', 'Viraat Mode', 'HD Filter'], offers: ['Cashback on Select Cards'], specs: { 'Capacity': '1.5 Ton', 'Compressor': 'Dual Inverter' }
    },
    {
        id: 'ac-3', name: 'Daikin 1.5 Ton 5 Star Inverter Split AC', price: 45490, originalPrice: 67200,
        slug: 'daikin-1.5-split', category: 'Air Conditioner', images: AC_IMAGES['ac-3'], description: 'Dew clean technology.', stock: 15, createdAt: new Date(), updatedAt: new Date(), rating: 4.8, reviewsCount: 350, brand: 'DAIKIN',
        keyFeatures: ['Dew Clean Technology', 'Triple Display', 'PM 2.5 Filter'], offers: [], specs: { 'Capacity': '1.5 Ton', 'Coil': 'Copper' }
    },
    {
        id: 'ac-4', name: 'Carrier 1.5 Ton 5 Star AI Flexicool Inverter Split AC', price: 41990, originalPrice: 76000,
        slug: 'carrier-1.5-split', category: 'Air Conditioner', images: AC_IMAGES['ac-4'], description: 'Convertible 6-in-1.', stock: 12, createdAt: new Date(), updatedAt: new Date(), rating: 4.4, reviewsCount: 220, brand: 'CARRIER',
        keyFeatures: ['Convertible 6-in-1', 'Dual Filtration', 'Aqua Clear Protection'], offers: [], specs: { 'Capacity': '1.5 Ton', 'Refrigerant': 'R32' }
    },
    {
        id: 'ac-5', name: 'Blue Star 1.5 Ton 5 Star Inverter Split AC', price: 42990, originalPrice: 75000,
        slug: 'blue-star-1.5-split', category: 'Air Conditioner', images: AC_IMAGES['ac-5'], description: 'Turbo cool.', stock: 10, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 180, brand: 'BLUE STAR',
        keyFeatures: ['Turbo Cool', '5-in-1 Convertible', 'Smart Ready'], offers: [], specs: { 'Capacity': '1.5 Ton', 'Noise': 'Low' }
    },
    {
        id: 'ac-6', name: 'Panasonic 1.5 Ton 5 Star Wi-Fi Inverter Smart Split AC', price: 42990, originalPrice: 63400,
        slug: 'panasonic-1.5-smart-split', category: 'Air Conditioner', images: AC_IMAGES['ac-6'], description: 'Miraie App enabled.', stock: 14, createdAt: new Date(), updatedAt: new Date(), rating: 4.6, reviewsCount: 290, brand: 'PANASONIC',
        keyFeatures: ['7-in-1 Convertible', 'Wi-Fi Enabled', 'PM 0.1 Filter'], offers: ['Smart Plug Free'], specs: { 'Capacity': '1.5 Ton', 'App': 'Miraie' }
    },
    {
        id: 'ac-7', name: 'LG 1.5 Ton AC', price: 34500, originalPrice: 55000, slug: 'lg-ac-1.5', category: 'Air Conditioner', images: AC_IMAGES['ac-7'], description: '', stock: 12, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 45, brand: 'LG',
        keyFeatures: ['Dual Inverter', 'Ocean Black Fins', 'Low Gas Detection'], offers: [], specs: { 'Capacity': '1.5 Ton', 'Star': '3 Star' }
    },

    // --- ACCESSORIES , AUDIO & WEARABLES ---
    {
        id: 'acc-1', name: 'Apple Watch Series 9 GPS', price: 41900, originalPrice: 44900,
        slug: 'apple-watch-s9', category: 'Smartwatch', images: ACCESSORY_IMAGES['acc-1'], description: 'Smarter. Brighter. Mightier.', stock: 20, createdAt: new Date(), updatedAt: new Date(), rating: 4.8, reviewsCount: 300, brand: 'APPLE',
        keyFeatures: ['S9 SiP', 'Double Tap Gesture', 'Brighter Display'], offers: ['Card Offer ₹2500'], specs: { 'Size': '41mm', 'Case': 'Aluminum' }
    },
    {
        id: 'acc-2', name: 'Samsung Galaxy Watch 6 Classic', price: 36999, originalPrice: 42999,
        slug: 'samsung-watch-6', category: 'Smartwatch', images: ACCESSORY_IMAGES['acc-2'], description: 'Focus on your health.', stock: 15, createdAt: new Date(), updatedAt: new Date(), rating: 4.7, reviewsCount: 250, brand: 'SAMSUNG',
        keyFeatures: ['Rotating Bezel', 'Sleep Tracking', 'Sapphire Crystal'], offers: [], specs: { 'Size': '43mm', 'Connectivity': 'Bluetooth' }
    },
    {
        id: 'acc-3', name: 'Sony WF-1000XM5 TWS', price: 24990, originalPrice: 29990,
        slug: 'sony-wf-1000xm5', category: 'Headphones', images: ACCESSORY_IMAGES['acc-3'], description: 'The Best Noise Cancelling.', stock: 25, createdAt: new Date(), updatedAt: new Date(), rating: 4.6, reviewsCount: 180, brand: 'SONY',
        keyFeatures: ['Active Noise Cancellation', 'Hi-Res Audio', 'Multipoint Connection'], offers: [], specs: { 'Battery': '8H + 16H', 'Driver': '8.4mm' }
    },
    {
        id: 'acc-4', name: 'AirPods Pro (2nd Generation)', price: 24900, originalPrice: 26900,
        slug: 'airpods-pro-2', category: 'Headphones', images: ACCESSORY_IMAGES['acc-4'], description: 'Magic like you’ve never heard.', stock: 30, createdAt: new Date(), updatedAt: new Date(), rating: 4.9, reviewsCount: 1500, brand: 'APPLE',
        keyFeatures: ['H2 Chip', 'Adaptive Audio', 'Conversation Awareness'], offers: [], specs: { 'Charging': 'USB-C/MagSafe', 'Type': 'In-ear' }
    },
    {
        id: 'acc-5', name: 'Logitech MX Master 3S', price: 9995, originalPrice: 10995,
        slug: 'logitech-mx-master-3s', category: 'Accessories', images: ACCESSORY_IMAGES['acc-5'], description: 'Performance mastered.', stock: 18, createdAt: new Date(), updatedAt: new Date(), rating: 4.9, reviewsCount: 400, brand: 'LOGITECH',
        keyFeatures: ['8000 DPI Sensor', 'Quiet Clicks', 'MagSpeed Scrolling'], offers: [], specs: { 'Connectivity': 'Bluetooth/Bolt', 'Buttons': '7' }
    },
    {
        id: 'acc-6', name: 'Dell 7-in-1 USB-C Hub', price: 6999, originalPrice: 9999,
        slug: 'dell-usb-hub', category: 'Accessories', images: ACCESSORY_IMAGES['acc-6'], description: 'Connectivity simplified.', stock: 40, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 120, brand: 'DELL',
        keyFeatures: ['4K HDMI', 'Power Delivery', 'Compact Design'], offers: [], specs: { 'Ports': '7', 'Interface': 'USB-C' }
    },
    {
        id: 'audio-sony-feat', name: 'Sony WH-1000XM5', price: 29990, originalPrice: 34990, slug: 'sony-wh-1000xm5', category: 'Audio', images: ACCESSORY_IMAGES['audio-sony-feat'], description: '', stock: 10, createdAt: new Date(), updatedAt: new Date(), rating: 4.8, reviewsCount: 124, brand: 'SONY',
        keyFeatures: ['Two Processors Control 8 Mics', 'Auto NC Optimizer', 'Up to 30 Hours Battery'], offers: [], specs: { 'Type': 'Over-ear', 'Color': 'Silver' }
    },

    // --- SOUNDBARS ---
    {
        id: 'sb-1', name: 'JBL Cinema SB271, Dolby Digital Soundbar', price: 12999, originalPrice: 16999,
        slug: 'jbl-cinema-sb271', category: 'Soundbar', images: SOUNDBAR_IMAGES['sb-1'], description: 'Deep bass.', stock: 20, createdAt: new Date(), updatedAt: new Date(), rating: 4.4, reviewsCount: 350, brand: 'JBL',
        keyFeatures: ['220W Output', 'Wireless Subwoofer', 'Dolby Digital'], offers: [], specs: { 'Channel': '2.1', 'Bluetooth': 'Yes' }
    },
    {
        id: 'sb-2', name: 'Sony HT-S20R Real 5.1ch Dolby Digital Soundbar', price: 17990, originalPrice: 23990,
        slug: 'sony-ht-s20r', category: 'Soundbar', images: SOUNDBAR_IMAGES['sb-2'], description: 'Cinematic sound.', stock: 15, createdAt: new Date(), updatedAt: new Date(), rating: 4.6, reviewsCount: 800, brand: 'SONY',
        keyFeatures: ['400W Power', '5.1 Channel', 'USB Playback'], offers: [], specs: { 'Surround': 'Dolby Digital', 'HDMI': 'ARC' }
    },
    {
        id: 'sb-3', name: 'boAt Aavante Bar 1500 2.1 Channel', price: 4999, originalPrice: 12999,
        slug: 'boat-aavante-1500', category: 'Soundbar', images: SOUNDBAR_IMAGES['sb-3'], description: 'Boat signature sound.', stock: 30, createdAt: new Date(), updatedAt: new Date(), rating: 4.3, reviewsCount: 1500, brand: 'BOAT',
        keyFeatures: ['120W RMS', 'Sleek Design', 'Multiple EQ Modes'], offers: [], specs: { 'Subwoofer': 'Wired', 'Remote': 'Yes' }
    },
    {
        id: 'sb-4', name: 'Samsung HW-Q990C 11.1.4ch Soundbar', price: 99990, originalPrice: 129990,
        slug: 'samsung-q990c', category: 'Soundbar', images: SOUNDBAR_IMAGES['sb-4'], description: 'Wireless Dolby Atmos.', stock: 5, createdAt: new Date(), updatedAt: new Date(), rating: 4.9, reviewsCount: 120, brand: 'SAMSUNG',
        keyFeatures: ['11.1.4 Channel', 'Q-Symphony', 'SpaceFit Sound Pro'], offers: [], specs: { 'Sound': 'Dolby Atmos', 'Speakers': '22' }
    },
    {
        id: 'sb-5', name: 'Bose Smart Soundbar 900', price: 104900, originalPrice: 114900,
        slug: 'bose-soundbar-900', category: 'Soundbar', images: SOUNDBAR_IMAGES['sb-5'], description: 'Most immersive.', stock: 8, createdAt: new Date(), updatedAt: new Date(), rating: 4.8, reviewsCount: 200, brand: 'BOSE',
        keyFeatures: ['Voice Control', 'ADAPTiQ', 'SimpleSync'], offers: ['EMI Available'], specs: { 'Color': 'Black', 'Wi-Fi': 'Yes' }
    },
    {
        id: 'sb-6', name: 'Zebronics Juke Bar 9700 Pro', price: 14999, originalPrice: 22999,
        slug: 'zebronics-9700-pro', category: 'Soundbar', images: SOUNDBAR_IMAGES['sb-6'], description: 'Dolby Atmos.', stock: 25, createdAt: new Date(), updatedAt: new Date(), rating: 4.2, reviewsCount: 450, brand: 'ZEBRONICS',
        keyFeatures: ['Dolby Atmos', 'Quad Drivers', 'Wall Mountable'], offers: [], specs: { 'Output': '450W', 'Bluetooth': 'v5.0' }
    },

    // --- FEATURED & OTHERS ---
    {
        id: 'feat-4', name: 'Dyson V15 Detect', price: 65900,
        slug: 'dyson-v15', category: 'Home Appliances', images: FEATURED_IMAGES['feat-4'], description: 'Powerful cleaning.', stock: 8, createdAt: new Date(), updatedAt: new Date(), rating: 4.6, reviewsCount: 34, brand: 'DYSON',
        keyFeatures: ['Laser Dust Detection', 'Piezo Sensor', 'Root Cyclone'], offers: [], specs: { 'Run time': '60 mins', 'Bin': '0.77 L' }
    },
    {
        id: 'feat-5', name: 'PlayStation 5 Slim', price: 54990,
        slug: 'ps5-slim', category: 'Gaming', images: FEATURED_IMAGES['feat-5'], description: 'Play Has No Limits.', stock: 15, createdAt: new Date(), updatedAt: new Date(), rating: 4.9, reviewsCount: 200, brand: 'SONY',
        keyFeatures: ['Ultra-High Speed SSD', 'Ray Tracing', 'Haptic Feedback'], offers: [], specs: { 'Storage': '1TB SSD', 'Edition': 'Disc' }
    },
    {
        id: 'feat-8', name: 'GoPro Hero 12', price: 39990, originalPrice: 45000,
        slug: 'gopro-hero-12', category: 'Camera', images: FEATURED_IMAGES['feat-8'], description: 'Capture everything.', stock: 8, createdAt: new Date(), updatedAt: new Date(), rating: 4.7, reviewsCount: 78, brand: 'GOPRO',
        keyFeatures: ['5.3K Video', 'HyperSmooth 6.0', 'HDR Photo + Video'], offers: ['Free SD Card'], specs: { 'Waterproof': '10m', 'Battery': 'Enduro' }
    },
    {
        id: 'cooler-7', name: 'Honeywell Desert Cooler', description: 'Powerful airflow for large living spaces.', price: 14990, slug: 'honeywell-desert-cooler', images: FEATURED_IMAGES['cooler-7'], category: 'Cooler', stock: 100, createdAt: new Date(), updatedAt: new Date(), brand: 'HONEYWELL',
        keyFeatures: ['Honeycomb Pads', 'Inverter Compatible', 'Ice Chamber'], offers: [], specs: { 'Tank': '55L', 'Air Delivery': '4000 m3/hr' }
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
            p.description?.toLowerCase().includes(lowerQuery) ||
            p.category.toLowerCase().includes(lowerQuery) ||
            p.brand?.toLowerCase().includes(lowerQuery)
        );
    }
};
