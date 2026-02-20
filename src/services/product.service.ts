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
    FEATURED_IMAGES,
    COOLER_IMAGES
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
        id: 'tv-cellecor-75-google', name: 'Cellecor Smart Google 75 Inch', price: 55999, originalPrice: 99999,
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




    {
        id: 'ph-google-pixel-8-pro', name: 'Google Pixel 8 Pro (128 GB)', price: 79999, originalPrice: 106999,
        slug: 'google-pixel-8-pro', category: 'Smart Phone', images: SMARTPHONE_IMAGES['ph-google-pixel-8-pro'], description: 'The most pro Pixel ever.', stock: 15, createdAt: new Date(), updatedAt: new Date(), rating: 4.6, reviewsCount: 350, brand: 'GOOGLE',
        keyFeatures: ['Google Tensor G3', 'Super Actua Display', 'Pro Camera System'], offers: ['Bank Offer ₹4000'], specs: { 'Display': '6.7 inch', 'Battery': '5050 mAh', 'RAM': '12 GB' }
    },



    // --- Apple iPhones ---
    {
        id: 'ph-apple-15', name: 'Apple iPhone 15 (128 GB)', price: 70999, originalPrice: 79900,
        slug: 'apple-iphone-15', category: 'Smart Phone', images: SMARTPHONE_IMAGES['ph-apple-15'], description: 'Dynamic Island, 48MP Main camera, and USB-C.', stock: 30, createdAt: new Date(), updatedAt: new Date(), rating: 4.8, reviewsCount: 950, brand: 'APPLE',
        keyFeatures: ['Dynamic Island', '48MP Main Camera', 'A16 Bionic Chip'], offers: ['Instant Savings ₹4000'], specs: { 'Display': '6.1 inch', 'Chip': 'A16 Bionic', 'Storage': '128 GB' }
    },
    {
        id: 'ph-apple-15-plus', name: 'Apple iPhone 15 Plus (256 GB)', price: 89900, originalPrice: 99900,
        slug: 'apple-iphone-15-plus', category: 'Smart Phone', images: SMARTPHONE_IMAGES['ph-apple-15-plus'], description: 'Super-high-resolution photos and 2x Telephoto.', stock: 20, createdAt: new Date(), updatedAt: new Date(), rating: 4.9, reviewsCount: 420, brand: 'APPLE',
        keyFeatures: ['6.7 inch Display', 'All-day battery life', 'Durable color-infused glass'], offers: [], specs: { 'Display': '6.7 inch', 'Chip': 'A16 Bionic', 'Storage': '256 GB' }
    },
    {
        id: 'ph-apple-14', name: 'Apple iPhone 14 (128 GB)', price: 61999, originalPrice: 69900,
        slug: 'apple-iphone-14', category: 'Smart Phone', images: SMARTPHONE_IMAGES['ph-apple-14'], description: 'Vital safety features. Ceramic Shield.', stock: 40, createdAt: new Date(), updatedAt: new Date(), rating: 4.7, reviewsCount: 2100, brand: 'APPLE',
        keyFeatures: ['A15 Bionic chip', '12MP Main Camera', 'Action mode'], offers: [], specs: { 'Display': '6.1 inch', 'Chip': 'A15 Bionic', 'Storage': '128 GB' }
    },
    {
        id: 'ph-apple-13', name: 'Apple iPhone 13 (128 GB)', price: 49999, originalPrice: 59900,
        slug: 'apple-iphone-13', category: 'Smart Phone', images: SMARTPHONE_IMAGES['ph-apple-13'], description: 'Super bright Super Retina XDR display.', stock: 50, createdAt: new Date(), updatedAt: new Date(), rating: 4.8, reviewsCount: 5500, brand: 'APPLE',
        keyFeatures: ['A15 Bionic chip', 'Advanced dual-camera system', 'Durable design'], offers: [], specs: { 'Display': '6.1 inch', 'Chip': 'A15 Bionic', 'Storage': '128 GB' }
    },

    // --- Samsung Smartphones ---
    {
        id: 'ph-samsung-s23fe', name: 'Samsung Galaxy S23 FE 5G', price: 39999, originalPrice: 79999,
        slug: 'samsung-galaxy-s23-fe', category: 'Smart Phone', images: SMARTPHONE_IMAGES['ph-samsung-s23fe'], description: 'Iconic design with a floating camera.', stock: 25, createdAt: new Date(), updatedAt: new Date(), rating: 4.4, reviewsCount: 320, brand: 'SAMSUNG',
        keyFeatures: ['Nightography', 'High-resolution photo', 'Long lasting battery'], offers: ['Bank Offer ₹1000'], specs: { 'Display': '6.4 inch', 'Battery': '4500 mAh', 'RAM': '8 GB' }
    },
    {
        id: 'ph-samsung-a55', name: 'Samsung Galaxy A55 5G', price: 39999, originalPrice: 45999,
        slug: 'samsung-galaxy-a55', category: 'Smart Phone', images: SMARTPHONE_IMAGES['ph-samsung-a55'], description: 'Awesome design, awesome performance.', stock: 30, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 150, brand: 'SAMSUNG',
        keyFeatures: ['Metal Frame', 'Nightography', 'Knox Security'], offers: [], specs: { 'Display': '6.6 inch', 'Battery': '5000 mAh', 'RAM': '8 GB' }
    },
    {
        id: 'ph-samsung-a35', name: 'Samsung Galaxy A35 5G', price: 30999, originalPrice: 33999,
        slug: 'samsung-galaxy-a35', category: 'Smart Phone', images: SMARTPHONE_IMAGES['ph-samsung-a35'], description: 'Premium glass back design.', stock: 35, createdAt: new Date(), updatedAt: new Date(), rating: 4.3, reviewsCount: 110, brand: 'SAMSUNG',
        keyFeatures: ['Super AMOLED', '50MP Camera', 'IP67 Rating'], offers: [], specs: { 'Display': '6.6 inch', 'Battery': '5000 mAh', 'RAM': '8 GB' }
    },
    {
        id: 'ph-samsung-m34', name: 'Samsung Galaxy M34 5G', price: 15999, originalPrice: 24499,
        slug: 'samsung-galaxy-m34', category: 'Smart Phone', images: SMARTPHONE_IMAGES['ph-samsung-m34'], description: 'Monster display, monster battery.', stock: 60, createdAt: new Date(), updatedAt: new Date(), rating: 4.2, reviewsCount: 2500, brand: 'SAMSUNG',
        keyFeatures: ['120Hz sAMOLED', '6000 mAh Battery', '50MP No Shake Cam'], offers: [], specs: { 'Display': '6.5 inch', 'Battery': '6000 mAh', 'RAM': '6 GB' }
    },

    // --- Realme Smartphones ---
    {
        id: 'ph-realme-12pro-plus', name: 'Realme 12 Pro+ 5G', price: 29999, originalPrice: 34999,
        slug: 'realme-12-pro-plus', category: 'Smart Phone', images: SMARTPHONE_IMAGES['ph-realme-12pro-plus'], description: 'Portrait Master with Periscope Camera.', stock: 40, createdAt: new Date(), updatedAt: new Date(), rating: 4.6, reviewsCount: 520, brand: 'REALME',
        keyFeatures: ['Periscope Portrait Camera', 'Snapdragon 7s Gen 2', '120Hz Curved Vision'], offers: ['Exchange Bonus ₹2000'], specs: { 'Display': '6.7 inch', 'Battery': '5000 mAh', 'RAM': '8/12 GB' }
    },
    {
        id: 'ph-realme-12pro', name: 'Realme 12 Pro 5G', price: 25999, originalPrice: 29999,
        slug: 'realme-12-pro', category: 'Smart Phone', images: SMARTPHONE_IMAGES['ph-realme-12pro'], description: 'Luxury Watch Design.', stock: 35, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 300, brand: 'REALME',
        keyFeatures: ['Telephoto Portrait', '120Hz Curved Display', 'Snapdragon 6 Gen 1'], offers: [], specs: { 'Display': '6.7 inch', 'Battery': '5000 mAh', 'RAM': '8 GB' }
    },
    {
        id: 'ph-realme-narzo70', name: 'Realme Narzo 70 Pro 5G', price: 19999, originalPrice: 24999,
        slug: 'realme-narzo-70-pro', category: 'Smart Phone', images: SMARTPHONE_IMAGES['ph-realme-narzo70'], description: 'Best Camera in Segment.', stock: 50, createdAt: new Date(), updatedAt: new Date(), rating: 4.4, reviewsCount: 180, brand: 'REALME',
        keyFeatures: ['Sony IMX890 OIS', 'Glass Design', '67W SUPERVOOC'], offers: ['Coupon ₹2000'], specs: { 'Display': '6.67 inch', 'Battery': '5000 mAh', 'RAM': '8 GB' }
    },
    {
        id: 'ph-realme-c67', name: 'Realme C67 5G', price: 12999, originalPrice: 16999,
        slug: 'realme-c67', category: 'Smart Phone', images: SMARTPHONE_IMAGES['ph-realme-c67'], description: '5G Champion.', stock: 60, createdAt: new Date(), updatedAt: new Date(), rating: 4.3, reviewsCount: 800, brand: 'REALME',
        keyFeatures: ['33W Charge', '50MP Camera', 'Slim Design'], offers: [], specs: { 'Display': '6.72 inch', 'Battery': '5000 mAh', 'RAM': '4/6 GB' }
    },

    // --- Vivo Smartphones ---
    {
        id: 'ph-vivo-x100', name: 'Vivo X100 Pro 5G', price: 89999, originalPrice: 96999,
        slug: 'vivo-x100-pro', category: 'Smart Phone', images: SMARTPHONE_IMAGES['ph-vivo-x100'], description: 'Zeiss Co-engineered Photography.', stock: 15, createdAt: new Date(), updatedAt: new Date(), rating: 4.7, reviewsCount: 120, brand: 'VIVO',
        keyFeatures: ['Zeiss APO Floating Telephoto', 'Dimensity 9300', 'IP68'], offers: ['HDFC ₹5000 Off'], specs: { 'Display': '6.78 inch', 'Battery': '5400 mAh', 'RAM': '16 GB' }
    },
    {
        id: 'ph-vivo-v30', name: 'Vivo V30 Pro 5G', price: 41999, originalPrice: 46999,
        slug: 'vivo-v30-pro', category: 'Smart Phone', images: SMARTPHONE_IMAGES['ph-vivo-v30'], description: 'Zeiss Portrait Master.', stock: 25, createdAt: new Date(), updatedAt: new Date(), rating: 4.6, reviewsCount: 220, brand: 'VIVO',
        keyFeatures: ['Studio Quality Aura Light', 'Zeiss Style Portrait', 'Slimmest 5000mAh'], offers: [], specs: { 'Display': '6.78 inch', 'Battery': '5000 mAh', 'RAM': '8/12 GB' }
    },
    {
        id: 'ph-vivo-y200e', name: 'Vivo Y200e 5G', price: 19999, originalPrice: 23999,
        slug: 'vivo-y200e', category: 'Smart Phone', images: SMARTPHONE_IMAGES['ph-vivo-y200e'], description: 'Durable Eco-Fiber Leather.', stock: 40, createdAt: new Date(), updatedAt: new Date(), rating: 4.4, reviewsCount: 150, brand: 'VIVO',
        keyFeatures: ['120Hz sAMOLED', 'Durable Logic', 'Dual Stereo Speakers'], offers: [], specs: { 'Display': '6.67 inch', 'Battery': '5000 mAh', 'RAM': '6/8 GB' }
    },
    {
        id: 'ph-vivo-t3', name: 'Vivo T3 5G', price: 19999, originalPrice: 22999,
        slug: 'vivo-t3', category: 'Smart Phone', images: SMARTPHONE_IMAGES['ph-vivo-t3'], description: 'Turbo Performance.', stock: 45, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 300, brand: 'VIVO',
        keyFeatures: ['Sony IMX882 OIS', 'Dimensity 7200', '120Hz Display'], offers: [], specs: { 'Display': '6.67 inch', 'Battery': '5000 mAh', 'RAM': '8 GB' }
    },

    // --- Motorola Smartphones ---
    {
        id: 'ph-moto-edge50', name: 'Motorola Edge 50 Pro 5G', price: 31999, originalPrice: 36999,
        slug: 'moto-edge-50-pro', category: 'Smart Phone', images: SMARTPHONE_IMAGES['ph-moto-edge50'], description: 'Intelligence meets Art.', stock: 30, createdAt: new Date(), updatedAt: new Date(), rating: 4.6, reviewsCount: 400, brand: 'MOTOROLA',
        keyFeatures: ['AI Powered Camera', 'Pantone Validated Colors', '125W Charging'], offers: ['Launch Offer ₹2000'], specs: { 'Display': '6.7 inch pOLED', 'Battery': '4500 mAh', 'RAM': '8/12 GB' }
    },
    {
        id: 'ph-moto-g84', name: 'Motorola Moto G84 5G', price: 17999, originalPrice: 22999,
        slug: 'moto-g84', category: 'Smart Phone', images: SMARTPHONE_IMAGES['ph-moto-g84'], description: 'Breathtaking Colors.', stock: 50, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 850, brand: 'MOTOROLA',
        keyFeatures: ['120Hz pOLED', '12GB RAM', 'OIS Camera'], offers: [], specs: { 'Display': '6.55 inch', 'Battery': '5000 mAh', 'RAM': '12 GB' }
    },
    {
        id: 'ph-moto-g54', name: 'Motorola Moto G54 5G', price: 13999, originalPrice: 18999,
        slug: 'moto-g54', category: 'Smart Phone', images: SMARTPHONE_IMAGES['ph-moto-g54'], description: 'Best 5G Phone.', stock: 60, createdAt: new Date(), updatedAt: new Date(), rating: 4.3, reviewsCount: 1200, brand: 'MOTOROLA',
        keyFeatures: ['6000 mAh Battery', 'OIS Camera', 'Dimensity 7020'], offers: [], specs: { 'Display': '6.5 inch', 'Battery': '6000 mAh', 'RAM': '8/12 GB' }
    },
    {
        id: 'ph-moto-razr40', name: 'Motorola Razr 40', price: 44999, originalPrice: 99999,
        slug: 'moto-razr-40', category: 'Smart Phone', images: SMARTPHONE_IMAGES['ph-moto-razr40'], description: 'Iconic Flip Design.', stock: 15, createdAt: new Date(), updatedAt: new Date(), rating: 4.4, reviewsCount: 150, brand: 'MOTOROLA',
        keyFeatures: ['Flex View', 'External Display', 'Vegan Leather'], offers: [], specs: { 'Display': '6.9 inch', 'Battery': '4200 mAh', 'RAM': '8 GB' }
    },

    // --- Xiaomi Smartphones ---
    {
        id: 'ph-xiaomi-14', name: 'Xiaomi 14 5G', price: 69999, originalPrice: 79999,
        slug: 'xiaomi-14', category: 'Smart Phone', images: SMARTPHONE_IMAGES['ph-xiaomi-14'], description: 'Leica Co-engineered.', stock: 20, createdAt: new Date(), updatedAt: new Date(), rating: 4.7, reviewsCount: 350, brand: 'XIAOMI',
        keyFeatures: ['Leica Summilux Lens', 'Snapdragon 8 Gen 3', 'HyperOS'], offers: ['Exchange Bonus ₹5000'], specs: { 'Display': '6.36 inch', 'Battery': '4610 mAh', 'RAM': '12 GB' }
    },
    {
        id: 'ph-xiaomi-rn13pro-plus', name: 'Redmi Note 13 Pro+ 5G', price: 31999, originalPrice: 35999,
        slug: 'redmi-note-13-pro-plus', category: 'Smart Phone', images: SMARTPHONE_IMAGES['ph-xiaomi-rn13pro-plus'], description: 'SuperNote. SuperCamera.', stock: 40, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 1500, brand: 'XIAOMI',
        keyFeatures: ['200MP OIS Camera', 'IP68 Rating', '120W HyperCharge'], offers: [], specs: { 'Display': '6.67 inch Curved', 'Battery': '5000 mAh', 'RAM': '8/12 GB' }
    },
    {
        id: 'ph-xiaomi-rn13pro', name: 'Redmi Note 13 Pro 5G', price: 25999, originalPrice: 30999,
        slug: 'redmi-note-13-pro', category: 'Smart Phone', images: SMARTPHONE_IMAGES['ph-xiaomi-rn13pro'], description: 'SuperPower. SuperNote.', stock: 50, createdAt: new Date(), updatedAt: new Date(), rating: 4.4, reviewsCount: 2200, brand: 'XIAOMI',
        keyFeatures: ['200MP Camera', 'Snapdragon 7s Gen 2', '67W Carge'], offers: [], specs: { 'Display': '6.67 inch', 'Battery': '5100 mAh', 'RAM': '8/12 GB' }
    },
    {
        id: 'ph-xiaomi-13pro', name: 'Xiaomi 13 Pro 5G', price: 74999, originalPrice: 89999,
        slug: 'xiaomi-13-pro', category: 'Smart Phone', images: SMARTPHONE_IMAGES['ph-xiaomi-13pro'], description: 'Masterpiece in Sight.', stock: 10, createdAt: new Date(), updatedAt: new Date(), rating: 4.8, reviewsCount: 600, brand: 'XIAOMI',
        keyFeatures: ['Leica Professional Optical Lens', '1 Inch Sensor', 'Snapdragon 8 Gen 2'], offers: [], specs: { 'Display': '6.73 inch', 'Battery': '4820 mAh', 'RAM': '12 GB' }
    },

    // --- WASHING MACHINES ---


    // --- DIA SUN WASHING MACHINES ---
    {
        id: 'diasun-wm-90-half', name: 'Dia Sun 9.0 Kg Semi Automatic Top Load (Half Glass)', price: 1, originalPrice: 14990,
        slug: 'diasun-9kg-semi-automatic', category: 'Washing Machine', images: WASHING_MACHINE_IMAGES['diasun-wm-90-half'], description: 'Smart AI Clean Wash with Half Glass Lid.', stock: 50, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 25, brand: 'DIA SUN',
        keyFeatures: ['Smart AI Clean Wash', 'Half Glass Lid', '9.0 Kg Capacity'], offers: ['5 Year Warranty'], specs: { 'Capacity': '9.0 Kg', 'Type': 'Semi Automatic', 'Lid': 'Half Glass' }
    },
    {
        id: 'diasun-wm-11-full', name: 'Dia Sun 11 Kg Semi Automatic Top Load (Full Glass)', price: 13490, originalPrice: 18990,
        slug: 'diasun-11kg-full-glass', category: 'Washing Machine', images: WASHING_MACHINE_IMAGES['diasun-wm-11-full'], description: 'Large capacity with premium Full Glass design.', stock: 40, createdAt: new Date(), updatedAt: new Date(), rating: 4.6, reviewsCount: 30, brand: 'DIA SUN',
        keyFeatures: ['11 Kg Large Capacity', 'Full Glass Lid', 'Smart AI Wash'], offers: ['Free Installation'], specs: { 'Capacity': '11 Kg', 'Type': 'Semi Automatic', 'Lid': 'Full Glass' }
    },
    {
        id: 'diasun-wm-85-full', name: 'Dia Sun 8.5 Kg Semi Automatic Top Load (Full Glass)', price: 10490, originalPrice: 13990,
        slug: 'diasun-8.5kg-full-glass', category: 'Washing Machine', images: WASHING_MACHINE_IMAGES['diasun-wm-85-full'], description: 'Stylish Full Glass design with powerful wash.', stock: 45, createdAt: new Date(), updatedAt: new Date(), rating: 4.4, reviewsCount: 15, brand: 'DIA SUN',
        keyFeatures: ['8.5 Kg Capacity', 'Full Glass Lid', 'Rust Proof Body'], offers: [], specs: { 'Capacity': '8.5 Kg', 'Type': 'Semi Automatic', 'Lid': 'Full Glass' }
    },
    {
        id: 'diasun-wm-75-opaque', name: 'Dia Sun 7.5 Kg Semi Automatic Top Load (Opaque)', price: 8990, originalPrice: 11990,
        slug: 'diasun-7.5kg-opaque', category: 'Washing Machine', images: WASHING_MACHINE_IMAGES['diasun-wm-75-opaque'], description: 'Durable Opaque lid for rough use.', stock: 60, createdAt: new Date(), updatedAt: new Date(), rating: 4.3, reviewsCount: 40, brand: 'DIA SUN',
        keyFeatures: ['7.5 Kg Capacity', 'Opaque Lid', 'Smart Scrub Station'], offers: [], specs: { 'Capacity': '7.5 Kg', 'Type': 'Semi Automatic', 'Lid': 'Opaque' }
    },
    {
        id: 'diasun-wm-10-full', name: 'Dia Sun 10.0 Kg Semi Automatic Top Load (Blue Flower Design)', price: 12490, originalPrice: 16990,
        slug: 'diasun-10kg-blue-flower', category: 'Washing Machine', images: WASHING_MACHINE_IMAGES['diasun-wm-10-full'], description: 'Elegant Blue Flower design with 10kg capacity.', stock: 35, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 20, brand: 'DIA SUN',
        keyFeatures: ['10.0 Kg Capacity', 'Blue Flower Design', 'Powerful Motor'], offers: [], specs: { 'Capacity': '10.0 Kg', 'Type': 'Semi Automatic', 'Design': 'Blue Flower' }
    },
    {
        id: 'diasun-wm-105-grey', name: 'Dia Sun 10.5 Kg Semi Automatic Top Load (Grey Full Glass)', price: 13990, originalPrice: 17990,
        slug: 'diasun-10.5kg-grey-full-glass', category: 'Washing Machine', images: WASHING_MACHINE_IMAGES['diasun-wm-105-grey'], description: 'Premium Grey finish with Full Glass Lid.', stock: 30, createdAt: new Date(), updatedAt: new Date(), rating: 4.7, reviewsCount: 10, brand: 'DIA SUN',
        keyFeatures: ['10.5 Kg Capacity', 'Full Glass Lid', 'Smart AI Clean Wash'], offers: ['Free Installation'], specs: { 'Capacity': '10.5 Kg', 'Type': 'Semi Automatic', 'Lid': 'Full Glass' }
    },
    {
        id: 'diasun-wm-95-gold', name: 'Dia Sun 9.5 Kg Semi Automatic Top Load (Gold Abstract)', price: 11990, originalPrice: 15490,
        slug: 'diasun-9.5kg-gold-abstract', category: 'Washing Machine', images: WASHING_MACHINE_IMAGES['diasun-wm-95-gold'], description: 'Stunning Gold Abstract design on Glass Lid.', stock: 25, createdAt: new Date(), updatedAt: new Date(), rating: 4.6, reviewsCount: 15, brand: 'DIA SUN',
        keyFeatures: ['9.5 Kg Capacity', 'Gold Abstract Design', 'Smart AI Clean Wash'], offers: [], specs: { 'Capacity': '9.5 Kg', 'Type': 'Semi Automatic', 'Lid': 'Full Glass' }
    },
    {
        id: 'diasun-wm-75-maroon', name: 'Dia Sun 7.5 Kg Semi Automatic Top Load (Maroon Opaque)', price: 9490, originalPrice: 12490,
        slug: 'diasun-7.5kg-maroon-opaque', category: 'Washing Machine', images: WASHING_MACHINE_IMAGES['diasun-wm-75-maroon'], description: 'Durable Maroon and White design.', stock: 50, createdAt: new Date(), updatedAt: new Date(), rating: 4.4, reviewsCount: 30, brand: 'DIA SUN',
        keyFeatures: ['7.5 Kg Capacity', 'Opaque Lid', 'Smart AI Clean Wash'], offers: [], specs: { 'Capacity': '7.5 Kg', 'Type': 'Semi Automatic', 'Lid': 'Opaque' }
    },






    // --- COOLERS ---
    {
        id: 'cooler-air-punch-22', name: 'Air Punch 22" Long Tank', price: 9990, originalPrice: 12990,
        slug: 'air-punch-22-long-tank', category: 'Cooler', images: COOLER_IMAGES['cooler-air-punch-22'], description: 'Powerful desert cooler with 150L tank capacity.', stock: 50, createdAt: new Date(), updatedAt: new Date(), rating: 4.6, reviewsCount: 45, brand: 'AIR PUNCH',
        keyFeatures: ['150 Liters Tank Capacity', 'Large Honeycomb Pad', '22 Inch Ring Size', 'Auto Swing'], offers: ['Free Delivery'], specs: { 'Tank': '150 Liters', 'Height': '63 Inches', 'Type': 'Desert Cooler' }
    },
    {
        id: 'cooler-java-glass-lavender', name: 'Java Glass Top (Lavender)', price: 7490, originalPrice: 9990,
        slug: 'java-glass-top-lavender', category: 'Cooler', images: COOLER_IMAGES['cooler-java-glass-lavender'], description: 'Stylish glass top cooler in Lavender.', stock: 40, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 30, brand: 'JAVA',
        keyFeatures: ['100 Liters Tank Capacity', 'Glass Top', '16 Inch Blade Size', '3 Side Honeycomb Pads'], offers: [], specs: { 'Tank': '100 Liters', 'Height': '53 Inches', 'Color': 'Lavender' }
    },
    {
        id: 'cooler-jak-tower-grey', name: 'Jak Tower (Grey)', price: 8990, originalPrice: 11490,
        slug: 'jak-tower-grey', category: 'Cooler', images: COOLER_IMAGES['cooler-jak-tower-grey'], description: 'Modern tower cooler design in Grey.', stock: 35, createdAt: new Date(), updatedAt: new Date(), rating: 4.4, reviewsCount: 25, brand: 'JAK',
        keyFeatures: ['120 Liters Tank Capacity', '18 Inch Blade Size', 'Ice Box', '3 Side Honeycomb Pads'], offers: [], specs: { 'Tank': '120 Liters', 'Height': '56 Inches', 'Color': 'Grey' }
    },
    {
        id: 'cooler-jak-tower-brown', name: 'Jak Tower (Brown)', price: 8990, originalPrice: 11490,
        slug: 'jak-tower-brown', category: 'Cooler', images: COOLER_IMAGES['cooler-jak-tower-brown'], description: 'Modern tower cooler design in Brown.', stock: 35, createdAt: new Date(), updatedAt: new Date(), rating: 4.4, reviewsCount: 20, brand: 'JAK',
        keyFeatures: ['120 Liters Tank Capacity', '18 Inch Blade Size', 'Ice Box', '3 Side Honeycomb Pads'], offers: [], specs: { 'Tank': '120 Liters', 'Height': '56 Inches', 'Color': 'Brown' }
    },
    {
        id: 'cooler-java-glass-orange', name: 'Java Glass Top (Orange)', price: 7490, originalPrice: 9990,
        slug: 'java-glass-top-orange', category: 'Cooler', images: COOLER_IMAGES['cooler-java-glass-orange'], description: 'Stylish glass top cooler in Orange.', stock: 40, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 35, brand: 'JAVA',
        keyFeatures: ['100 Liters Tank Capacity', 'Glass Top', '16 Inch Blade Size', '3 Side Honeycomb Pads'], offers: [], specs: { 'Tank': '100 Liters', 'Height': '53 Inches', 'Color': 'Orange' }
    },
    {
        id: 'cooler-air-punch-18', name: 'Air Punch 18"', price: 8490, originalPrice: 10990,
        slug: 'air-punch-18', category: 'Cooler', images: COOLER_IMAGES['cooler-air-punch-18'], description: 'Compact desert cooler with 100L capacity.', stock: 45, createdAt: new Date(), updatedAt: new Date(), rating: 4.4, reviewsCount: 22, brand: 'AIR PUNCH',
        keyFeatures: ['100 Liters Tank Capacity', '18 Inch Blade Size', 'Auto Swing', '3 Side Honeycomb Pads'], offers: [], specs: { 'Tank': '100 Liters', 'Height': '58 Inches', 'Type': 'Desert Cooler' }
    },
    {
        id: 'cooler-durotek-aero-22', name: 'Durotek Aero Cool 22"', price: 10990, originalPrice: 21990,
        slug: 'durotek-aero-22', category: 'Cooler', images: COOLER_IMAGES['cooler-durotek-aero-22'], description: 'Commercial E-Frame cooler with 22 inch motor.', stock: 20, createdAt: new Date(), updatedAt: new Date(), rating: 4.7, reviewsCount: 15, brand: 'DUROTEK',
        keyFeatures: ['22" Aero Cool Flappy', '22 Inch Motor', '5 Ft Height', 'Heavy Metal Body'], offers: ['1 Year Warranty'], specs: { 'Height': '5 Ft', 'Motor': '22 Inch', 'Type': 'Commercial' }
    },
    {
        id: 'cooler-durotek-commando-14', name: 'Durotek Commando 14"', price: 3990, originalPrice: 8990,
        slug: 'durotek-commando-14', category: 'Cooler', images: COOLER_IMAGES['cooler-durotek-commando-14'], description: 'Compact commercial cooler with flappy swing.', stock: 30, createdAt: new Date(), updatedAt: new Date(), rating: 4.3, reviewsCount: 18, brand: 'DUROTEK',
        keyFeatures: ['14" Flappy Swing', '3 Side Honeycomb', '3 Ft Height', 'Compact Design'], offers: [], specs: { 'Height': '3 Ft', 'Type': 'Commercial', 'Swing': 'Flappy' }
    },
    {
        id: 'cooler-durotek-red', name: 'Durotek Red Cool', price: 5500, originalPrice: 11990,
        slug: 'durotek-red-cool', category: 'Cooler', images: COOLER_IMAGES['cooler-durotek-red'], description: 'Stylish Red & White cooler design.', stock: 25, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 12, brand: 'DUROTEK',
        keyFeatures: ['Red & White Body', 'High Air Delivery', 'Honeycomb Pads', 'Inverter Compatible'], offers: [], specs: { 'Color': 'Red/White', 'Type': 'Personal', 'Blade': '16 Inch' }
    },

    {
        id: 'cooler-durotek-air-punch-22', name: 'Durotek Air Punch 22"', price: 11490, originalPrice: 14990,
        slug: 'durotek-air-punch-22', category: 'Cooler', images: COOLER_IMAGES['cooler-durotek-air-punch-22'], description: 'Large commercial cooler with H-Frame Motor.', stock: 15, createdAt: new Date(), updatedAt: new Date(), rating: 4.8, reviewsCount: 8, brand: 'DUROTEK',
        keyFeatures: ['150 Liters Capacity', 'H-Frame Motor 5.40 Ft', '22" Air Punch Swing', 'Heavy Duty'], offers: ['Free Delivery'], specs: { 'Height': '5.40 Ft', 'Type': 'Commercial', 'Tank': '150 Liters' }
    },
    {
        id: 'cooler-durotek-vaayu-15', name: 'Durotek Vaayu 15" (3.5 Ft)', price: 4490, originalPrice: 9990,
        slug: 'durotek-vaayu-15', category: 'Cooler', images: COOLER_IMAGES['cooler-vaayu-smart'], description: 'Compact 3.5 Ft cooler with 15 inch motor.', stock: 30, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 15, brand: 'DUROTEK',
        keyFeatures: ['15 Inch Motor', '3.5 Ft Height', 'Honeycomb Pads', 'Efficient Cooling'], offers: [], specs: { 'Height': '3.5 Ft', 'Motor': '15 Inch' }
    },
    {
        id: 'cooler-durotek-commando-21', name: 'Durotek Commando 21"', price: 8500, originalPrice: 14990,
        slug: 'durotek-commando-21', category: 'Cooler', images: COOLER_IMAGES['cooler-durotek-commando-21'], description: '21 inch commercial cooler.', stock: 20, createdAt: new Date(), updatedAt: new Date(), rating: 4.6, reviewsCount: 10, brand: 'DUROTEK',
        keyFeatures: ['21" Flappy Swing', '3 Side Honeycomb', '4 Ft Height', '110 Motor'], offers: [], specs: { 'Height': '4 Ft', 'Type': 'Commercial', 'Motor': '110' }
    },
    {
        id: 'cooler-samat-45', name: 'Samat 45L', price: 3250, originalPrice: 5990,
        slug: 'samat-45l', category: 'Cooler', images: COOLER_IMAGES['cooler-samat-45'], description: '45 Liters capacity cooler.', stock: 30, createdAt: new Date(), updatedAt: new Date(), rating: 4.3, reviewsCount: 5, brand: 'SAMAT',
        keyFeatures: ['45 Liters Tank', 'Efficient Cooling', 'Compact Design'], offers: [], specs: { 'Tank': '45 Liters', 'Type': 'Personal' }
    },
    {
        id: 'cooler-durotek-storm-130', name: 'Durotek Storm 130L', price: 11990, originalPrice: 15990,
        slug: 'durotek-storm-130', category: 'Cooler', images: COOLER_IMAGES['cooler-durotek-storm-130'], description: '130 Liters capacity, Storm series.', stock: 15, createdAt: new Date(), updatedAt: new Date(), rating: 4.7, reviewsCount: 8, brand: 'DUROTEK',
        keyFeatures: ['130 Liters Tank', 'Storm Series', 'Heavy Duty'], offers: [], specs: { 'Tank': '130 Liters', 'Type': 'Desert Cooler' }
    },
    {
        id: 'cooler-durotek-spectra-16', name: 'Durotek Spectra 16"', price: 5990, originalPrice: 8990,
        slug: 'durotek-spectra-16', category: 'Cooler', images: COOLER_IMAGES['cooler-durotek-spectra-16'], description: 'Spectra Swing with 3 Side Honeycomb and Ice Chamber.', stock: 25, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 12, brand: 'DUROTEK',
        keyFeatures: ['Spectra Swing', '3 Side Honeycomb', 'Ice Chamber'], offers: [], specs: { 'Type': 'Personal', 'Swing': 'Spectra' }
    },
    {
        id: 'cooler-durotek-aero-cool-11', name: 'Durotek Aero Cool 11" (5 Ft)', price: 11990, originalPrice: 14990,
        slug: 'durotek-aero-cool-11', category: 'Cooler', images: COOLER_IMAGES['cooler-durotek-aero-cool-11'], description: '5 Ft height commercial cooler with Aero Cool technology.', stock: 15, createdAt: new Date(), updatedAt: new Date(), rating: 4.7, reviewsCount: 6, brand: 'DUROTEK',
        keyFeatures: ['11 Inch Motor', '5 Ft Height', 'Aero Cool'], offers: [], specs: { 'Height': '5 Ft', 'Motor': '11 Inch', 'Type': 'Commercial' }
    },
    {
        id: 'cooler-vaayu-smart-v2', name: 'Vaayu Smart Air Cooler (New)', price: 5500, originalPrice: 9990,
        slug: 'vaayu-smart-cooler-v2', category: 'Cooler', images: COOLER_IMAGES['cooler-vaayu-smart-v2'], description: 'Advanced smart cooler with enhanced features.', stock: 25, createdAt: new Date(), updatedAt: new Date(), rating: 4.7, reviewsCount: 5, brand: 'VAAYU',
        keyFeatures: ['Enhanced Smart Cooling', 'Premium Design', 'Honeycomb Pads', 'Remote Control'], offers: ['Introductory Offer'], specs: { 'Type': 'Smart Cooler', 'Color': 'Premium White/Blue' }
    },
    {
        id: 'cooler-durotek-glass-18', name: 'Durotek Glass Top 18"', price: 7990, originalPrice: 13990,
        slug: 'durotek-glass-top-18', category: 'Cooler', images: COOLER_IMAGES['cooler-durotek-glass-18'], description: 'Premium Glass Top cooler with 18 inch motor.', stock: 15, createdAt: new Date(), updatedAt: new Date(), rating: 4.6, reviewsCount: 8, brand: 'DUROTEK',
        keyFeatures: ['Glass Top', '18 Inch Motor', '4 Ft Height', 'Premium Finish'], offers: [], specs: { 'Height': '4 Ft', 'Motor': '18 Inch' }
    },

    {
        id: 'cooler-altitu-16', name: 'Altitu 16" (70 Ltr) with Wheel', price: 8990, originalPrice: 12990,
        slug: 'altitu-16-70l', category: 'Cooler', images: COOLER_IMAGES['cooler-altitu-16'], description: '16 inch cooler with 70 Liters capacity and wheels.', stock: 25, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 7, brand: 'ALTITU',
        keyFeatures: ['70 Liters Tank', '16 Inch Motor', 'With Wheels', 'High Air Delivery'], offers: [], specs: { 'Tank': '70 Liters', 'Motor': '16 Inch', 'Type': 'Commercial' }
    },
    {
        id: 'cooler-java-gt-100', name: 'Java GT 100', price: 7490, originalPrice: 14990,
        slug: 'java-gt-100', category: 'Cooler', images: COOLER_IMAGES['cooler-java-gt-100'], description: 'Premium Java cooler with 100L capacity and Glass Top.', stock: 25, createdAt: new Date(), updatedAt: new Date(), rating: 4.6, reviewsCount: 10, brand: 'JAVA',
        keyFeatures: ['100 Liters Tank', 'Glass Top', 'Heavy Duty Motor', 'Honeycomb Pads'], offers: [], specs: { 'Tank': '100 Liters', 'Type': 'Desert Cooler', 'Top': 'Glass' }
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
    {
        id: 'sb-7', name: 'LG S95QR 9.1.5ch Soundbar with Wireless Subwoofer', price: 89990, originalPrice: 109990,
        slug: 'lg-s95qr', category: 'Soundbar', images: SOUNDBAR_IMAGES['sb-7'], description: 'Premium IMAX Enhanced Audio.', stock: 6, createdAt: new Date(), updatedAt: new Date(), rating: 4.7, reviewsCount: 85, brand: 'LG',
        keyFeatures: ['810W Total Power', 'Meridian Audio', 'IMAX Enhanced'], offers: ['Bank Offer'], specs: { 'Channel': '9.1.5', 'Bluetooth': 'v5.0' }
    },
    {
        id: 'sb-8', name: 'Sony HT-A7000 7.1.2ch Premium Soundbar', price: 129990, originalPrice: 149990,
        slug: 'sony-ht-a7000', category: 'Soundbar', images: SOUNDBAR_IMAGES['sb-8'], description: 'Flagship 360 Spatial Sound.', stock: 4, createdAt: new Date(), updatedAt: new Date(), rating: 4.9, reviewsCount: 102, brand: 'SONY',
        keyFeatures: ['360 Spatial Sound Mapping', '8K/4K 120 Passthrough', 'Built-in Subwoofer'], offers: ['No Cost EMI'], specs: { 'Channel': '7.1.2', 'Wi-Fi': 'Yes' }
    },
    {
        id: 'sb-9', name: 'boAt Aavante Bar 3150D 260W Surround Sound', price: 11999, originalPrice: 24990,
        slug: 'boat-aavante-3150d', category: 'Soundbar', images: SOUNDBAR_IMAGES['sb-9'], description: 'Powerful theatre experience at home.', stock: 35, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 650, brand: 'BOAT',
        keyFeatures: ['260W Output', '5.1 Channel Surround', 'Dolby Audio'], offers: [], specs: { 'Subwoofer': 'Wired', 'HDMI': 'ARC' }
    },
    {
        id: 'sb-10', name: 'Samsung HW-B670/XL 5.1ch Soundbar', price: 29990, originalPrice: 39990,
        slug: 'samsung-hw-b670', category: 'Soundbar', images: SOUNDBAR_IMAGES['sb-10'], description: 'Elevate your sound experience with 3D audio.', stock: 18, createdAt: new Date(), updatedAt: new Date(), rating: 4.6, reviewsCount: 220, brand: 'SAMSUNG',
        keyFeatures: ['DTS Virtual:X', 'Bass Boost', 'Included Rear Speakers'], offers: ['Exchange Offer'], specs: { 'Channel': '5.1', 'Output': '600W' }
    },
    {
        id: 'sb-11', name: 'JBL Bar 500 Pro Dolby Atmos', price: 44999, originalPrice: 54999,
        slug: 'jbl-bar-500-pro', category: 'Soundbar', images: SOUNDBAR_IMAGES['sb-11'], description: 'Wireless bass enhancement.', stock: 11, createdAt: new Date(), updatedAt: new Date(), rating: 4.7, reviewsCount: 310, brand: 'JBL',
        keyFeatures: ['590W Total Power', 'MultiBeam technology', '10-inch subwoofer'], offers: [], specs: { 'Channel': '5.1', 'Wi-Fi': 'Yes' }
    },
    {
        id: 'sb-12', name: 'Sonos Arc Premium Smart Soundbar', price: 85000, originalPrice: 95000,
        slug: 'sonos-arc', category: 'Soundbar', images: SOUNDBAR_IMAGES['sb-12'], description: 'Brilliant sound for your TV, music, and more.', stock: 7, createdAt: new Date(), updatedAt: new Date(), rating: 4.8, reviewsCount: 190, brand: 'SONOS',
        keyFeatures: ['Voice Assistance Built-In', 'Trueplay Tuning', '11 High-Performance Drivers'], offers: [], specs: { 'Color': 'White/Black', 'HDMI': 'eARC' }
    },
    {
        id: 'sb-13', name: 'Mivi Fort S100 100W Soundbar', price: 3499, originalPrice: 8999,
        slug: 'mivi-fort-s100', category: 'Soundbar', images: SOUNDBAR_IMAGES['sb-13'], description: 'Budget friendly cinematic sound.', stock: 45, createdAt: new Date(), updatedAt: new Date(), rating: 4.1, reviewsCount: 950, brand: 'MIVI',
        keyFeatures: ['100W Output', '2.2 Channel', 'In-built Subwoofer'], offers: ['Bank Offer'], specs: { 'Bluetooth': 'v5.1', 'Remote': 'Yes' }
    },
    {
        id: 'sb-14', name: 'Zebronics Juke Bar 3900', price: 4299, originalPrice: 11999,
        slug: 'zebronics-3900', category: 'Soundbar', images: SOUNDBAR_IMAGES['sb-14'], description: 'Crystal clear sound with punchy bass.', stock: 40, createdAt: new Date(), updatedAt: new Date(), rating: 4.2, reviewsCount: 1110, brand: 'ZEBRONICS',
        keyFeatures: ['80W Output', '5.25 inch Subwoofer', 'LED Display'], offers: [], specs: { 'Channel': '2.1', 'HDMI': 'ARC' }
    },
    {
        id: 'sb-15', name: 'Blaupunkt SBW500 120W Soundbar', price: 6999, originalPrice: 14990,
        slug: 'blaupunkt-sbw500', category: 'Soundbar', images: SOUNDBAR_IMAGES['sb-15'], description: 'German audio technology.', stock: 22, createdAt: new Date(), updatedAt: new Date(), rating: 4.4, reviewsCount: 560, brand: 'BLAUPUNKT',
        keyFeatures: ['120W Peak Power', 'Deep Bass', 'EQ Modes'], offers: [], specs: { 'Subwoofer': 'Wooden', 'Channel': '2.1' }
    },
    {
        id: 'sb-16', name: 'Sony HT-G700 3.1ch Cinematic Soundbar', price: 39990, originalPrice: 47990,
        slug: 'sony-ht-g700', category: 'Soundbar', images: SOUNDBAR_IMAGES['sb-16'], description: 'Upscale audio to 7.1.2ch.', stock: 14, createdAt: new Date(), updatedAt: new Date(), rating: 4.7, reviewsCount: 295, brand: 'SONY',
        keyFeatures: ['Vertical Surround Engine', '400W Power', 'Wireless Subwoofer'], offers: ['Exchange Offer'], specs: { 'Sound': 'Dolby Atmos', 'HDMI': 'eARC' }
    },

    // --- FEATURED & OTHERS ---

    // --- AIR CONDITIONERS ---
    {
        id: 'ac-voltas-1.5-split', name: 'Voltas 1.5 Ton 3 Star Split AC', price: 32990, originalPrice: 54990,
        slug: 'voltas-1-5-split-ac', category: 'Air Conditioner', images: AC_IMAGES['ac-1'], description: 'High ambient cooling with adjustable modes.', stock: 15, createdAt: new Date(), updatedAt: new Date(), rating: 4.3, reviewsCount: 320, brand: 'VOLTAS',
        keyFeatures: ['1.5 Ton', '3 Star', 'Anti-dust Filter'], offers: ['Bank Offer'], specs: { 'Capacity': '1.5 Ton', 'Type': 'Split' }
    },
    {
        id: 'ac-lg-1.5-inverter', name: 'LG 1.5 Ton 5 Star AI Dual Inverter AC', price: 44990, originalPrice: 75990,
        slug: 'lg-1-5-inverter-ac', category: 'Air Conditioner', images: AC_IMAGES['ac-2'], description: 'Super convertable 6-in-1 cooling.', stock: 10, createdAt: new Date(), updatedAt: new Date(), rating: 4.6, reviewsCount: 450, brand: 'LG',
        keyFeatures: ['AI Dual Inverter', '5 Star', 'HD Filter'], offers: ['Free Installation'], specs: { 'Capacity': '1.5 Ton', 'Compressor': 'Dual Inverter' }
    },
    {
        id: 'ac-samsung-1.5-windfree', name: 'Samsung 1.5 Ton 5 Star WindFree AC', price: 46990, originalPrice: 72990,
        slug: 'samsung-1-5-windfree-ac', category: 'Air Conditioner', images: AC_IMAGES['ac-3'], description: 'Gentle cooling with WindFree technology.', stock: 12, createdAt: new Date(), updatedAt: new Date(), rating: 4.7, reviewsCount: 280, brand: 'SAMSUNG',
        keyFeatures: ['WindFree', '5 Star', 'Digital Inverter'], offers: [], specs: { 'Capacity': '1.5 Ton', 'Cooling': 'WindFree' }
    },
    {
        id: 'ac-voltas-1-ton-3', name: 'Voltas 1 Ton 3 Star Split AC', price: 28990, originalPrice: 48990,
        slug: 'voltas-1-ton-3-split', category: 'Air Conditioner', images: AC_IMAGES['ac-4'], description: 'Energy efficient cooling for small rooms.', stock: 8, createdAt: new Date(), updatedAt: new Date(), rating: 4.1, reviewsCount: 115, brand: 'VOLTAS',
        keyFeatures: ['1 Ton', '3 Star', 'Copper Condenser'], offers: [], specs: { 'Capacity': '1 Ton', 'Type': 'Split' }
    },
    {
        id: 'ac-voltas-1.5-inv', name: 'Voltas 1.5 Ton 5 Star Inverter AC', price: 38990, originalPrice: 65990,
        slug: 'voltas-1-5-inverter-5star', category: 'Air Conditioner', images: AC_IMAGES['ac-5'], description: 'Adjustable cooling with power savings.', stock: 22, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 410, brand: 'VOLTAS',
        keyFeatures: ['1.5 Ton', '5 Star', 'Adjustable Mode'], offers: ['Bank Offer'], specs: { 'Capacity': '1.5 Ton', 'Compressor': 'Inverter' }
    },
    {
        id: 'ac-voltas-2-ton-5', name: 'Voltas 2 Ton 5 Star Inverter AC', price: 49990, originalPrice: 82990,
        slug: 'voltas-2-ton-inverter-5star', category: 'Air Conditioner', images: AC_IMAGES['ac-6'], description: 'Massive cooling power for large spaces.', stock: 5, createdAt: new Date(), updatedAt: new Date(), rating: 4.8, reviewsCount: 88, brand: 'VOLTAS',
        keyFeatures: ['2 Ton', '5 Star', 'Turbo Cooling'], offers: [], specs: { 'Capacity': '2 Ton', 'Type': 'Split' }
    },
    {
        id: 'ac-voltas-window-1.5', name: 'Voltas 1.5 Ton 3 Star Window AC', price: 27990, originalPrice: 42990,
        slug: 'voltas-1-5-window-3star', category: 'Air Conditioner', images: AC_IMAGES['ac-7'], description: 'Compact and powerful window unit.', stock: 18, createdAt: new Date(), updatedAt: new Date(), rating: 4.2, reviewsCount: 220, brand: 'VOLTAS',
        keyFeatures: ['1.5 Ton', 'Window', 'Turbo Mode'], offers: ['Free Installation'], specs: { 'Capacity': '1.5 Ton', 'Type': 'Window' }
    },
    {
        id: 'ac-lg-1-ton-5', name: 'LG 1 Ton 5 Star AI Dual Inverter AC', price: 36990, originalPrice: 62990,
        slug: 'lg-1-ton-5star-inverter', category: 'Air Conditioner', images: AC_IMAGES['ac-1'], description: 'Perfect cooling for personal spaces powered by AI.', stock: 14, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 305, brand: 'LG',
        keyFeatures: ['1 Ton', '5 Star', 'AI Dual Inverter'], offers: [], specs: { 'Capacity': '1 Ton', 'Compressor': 'Dual Inverter' }
    },
    {
        id: 'ac-lg-2-ton-3', name: 'LG 2 Ton 3 Star AI DUAL Inverter Split AC', price: 52990, originalPrice: 84990,
        slug: 'lg-2-ton-3star-inverter', category: 'Air Conditioner', images: AC_IMAGES['ac-2'], description: 'Fast and quiet cooling for big rooms.', stock: 7, createdAt: new Date(), updatedAt: new Date(), rating: 4.4, reviewsCount: 156, brand: 'LG',
        keyFeatures: ['2 Ton', '3 Star', 'Ocean Black Protection'], offers: ['Bank Offer'], specs: { 'Capacity': '2 Ton', 'Type': 'Split' }
    },
    {
        id: 'ac-lg-1.5-window', name: 'LG 1.5 Ton 5 Star Inverter Window AC', price: 32990, originalPrice: 55990,
        slug: 'lg-1-5-window-5star', category: 'Air Conditioner', images: AC_IMAGES['ac-3'], description: 'Smart window AC with LG ThinQ.', stock: 11, createdAt: new Date(), updatedAt: new Date(), rating: 4.6, reviewsCount: 195, brand: 'LG',
        keyFeatures: ['1.5 Ton', 'Window', 'Inverter'], offers: [], specs: { 'Capacity': '1.5 Ton', 'Type': 'Window' }
    },
    {
        id: 'ac-lg-1.5-hotcold', name: 'LG 1.5 Ton 3 Star Hot & Cold AC', price: 42990, originalPrice: 68990,
        slug: 'lg-1-5-hot-cold-3star', category: 'Air Conditioner', images: AC_IMAGES['ac-4'], description: 'All weather comfort throughout the year.', stock: 4, createdAt: new Date(), updatedAt: new Date(), rating: 4.7, reviewsCount: 82, brand: 'LG',
        keyFeatures: ['Hot & Cold', '1.5 Ton', 'Dual Inverter'], offers: ['No Cost EMI'], specs: { 'Capacity': '1.5 Ton', 'Modes': 'Hot & Cold' }
    },
    {
        id: 'ac-sam-1-ton-3', name: 'Samsung 1 Ton 3 Star Inverter Split AC', price: 31990, originalPrice: 50990,
        slug: 'samsung-1-ton-3star-inv', category: 'Air Conditioner', images: AC_IMAGES['ac-5'], description: 'Energy efficient basic cooling.', stock: 26, createdAt: new Date(), updatedAt: new Date(), rating: 4.2, reviewsCount: 215, brand: 'SAMSUNG',
        keyFeatures: ['1 Ton', '3 Star', 'Digital Inverter'], offers: [], specs: { 'Capacity': '1 Ton', 'Type': 'Split' }
    },
    {
        id: 'ac-sam-2-ton-5', name: 'Samsung 2 Ton 5 Star WindFree AC', price: 56990, originalPrice: 92990,
        slug: 'samsung-2-ton-5star-windfree', category: 'Air Conditioner', images: AC_IMAGES['ac-6'], description: 'Maximum cooling with 23,000 microholes draft-free experience.', stock: 4, createdAt: new Date(), updatedAt: new Date(), rating: 4.9, reviewsCount: 140, brand: 'SAMSUNG',
        keyFeatures: ['2 Ton', 'WindFree', 'SmartThings App'], offers: ['Bank Offer'], specs: { 'Capacity': '2 Ton', 'Cooling': 'WindFree' }
    },
    {
        id: 'ac-sam-1.5-convertible', name: 'Samsung 1.5 Ton 3 Star Convertible 5-in-1', price: 35990, originalPrice: 58990,
        slug: 'samsung-1-5-convertible-3star', category: 'Air Conditioner', images: AC_IMAGES['ac-7'], description: 'Flexibility for varying cooling needs.', stock: 19, createdAt: new Date(), updatedAt: new Date(), rating: 4.4, reviewsCount: 300, brand: 'SAMSUNG',
        keyFeatures: ['5-in-1', '1.5 Ton', 'Anti Bacterial Filter'], offers: [], specs: { 'Capacity': '1.5 Ton', 'Modes': 'Convertible' }
    },
    {
        id: 'ac-sam-1.5-smart', name: 'Samsung 1.5 Ton 5 Star Smart AC with Wi-Fi', price: 43990, originalPrice: 70990,
        slug: 'samsung-1-5-smart-wifi-5star', category: 'Air Conditioner', images: AC_IMAGES['ac-1'], description: 'Smart AI Auto cooling with Wi-Fi connectivity.', stock: 14, createdAt: new Date(), updatedAt: new Date(), rating: 4.8, reviewsCount: 425, brand: 'SAMSUNG',
        keyFeatures: ['Wi-Fi enabled', 'AI Auto Cooling', '5 Star'], offers: ['Free Installation'], specs: { 'Capacity': '1.5 Ton', 'IoT': 'Yes' }
    },
    {
        id: 'ac-lg-1-ton-3', name: 'LG 1 Ton 3 Star AI Dual Inverter Split AC', price: 32990, originalPrice: 53990,
        slug: 'lg-1-ton-3star-inverter', category: 'Air Conditioner', images: AC_IMAGES['ac-2'], description: 'Fast cooling with energy efficiency.', stock: 20, createdAt: new Date(), updatedAt: new Date(), rating: 4.3, reviewsCount: 180, brand: 'LG',
        keyFeatures: ['1 Ton', '3 Star', 'Dual Inverter'], offers: [], specs: { 'Capacity': '1 Ton', 'Type': 'Split' }
    },

    // --- REFRIGERATORS ---
    {
        id: 'ref-samsung-side-by-side', name: 'Samsung 653 L Frost Free Side-By-Side Refrigerator', price: 79990, originalPrice: 112990,
        slug: 'samsung-side-by-side-ref', category: 'Refrigerator', images: REFRIGERATOR_IMAGES['ref-1'], description: 'Spacious side-by-side with digital inverter.', stock: 5, createdAt: new Date(), updatedAt: new Date(), rating: 4.8, reviewsCount: 110, brand: 'SAMSUNG',
        keyFeatures: ['653 Liters', 'Twin Cooling Plus', 'Digital Inverter'], offers: ['Exchange Offer'], specs: { 'Capacity': '653 L', 'Type': 'Side by Side' }
    },
    {
        id: 'ref-lg-double-door', name: 'LG 242 L 3 Star Frost-Free Double Door Refrigerator', price: 25990, originalPrice: 38990,
        slug: 'lg-242l-double-door', category: 'Refrigerator', images: REFRIGERATOR_IMAGES['ref-2'], description: 'Smart inverter compressor for saving energy.', stock: 20, createdAt: new Date(), updatedAt: new Date(), rating: 4.4, reviewsCount: 520, brand: 'LG',
        keyFeatures: ['242 Liters', 'Smart Inverter', 'Multi Air Flow'], offers: [], specs: { 'Capacity': '242 L', 'Type': 'Double Door' }
    },
    {
        id: 'ref-samsung-double-door', name: 'Samsung 236 L 3 Star Digital Inverter Double Door', price: 24990, originalPrice: 37990,
        slug: 'samsung-236l-double-door', category: 'Refrigerator', images: REFRIGERATOR_IMAGES['ref-6'], description: 'Curd master and voltage protection.', stock: 18, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 430, brand: 'SAMSUNG',
        keyFeatures: ['236 Liters', 'MoistFresh Zone', 'Toughened Glass'], offers: [], specs: { 'Capacity': '236 L', 'Type': 'Double Door' }
    },
    {
        id: 'ref-lg-french-door', name: 'LG 594 L Frost-Free French Door Refrigerator', price: 92990, originalPrice: 145990,
        slug: 'lg-french-door-ref', category: 'Refrigerator', images: REFRIGERATOR_IMAGES['ref-feat-lg'], description: 'Premium French Door design with Instaview.', stock: 3, createdAt: new Date(), updatedAt: new Date(), rating: 4.9, reviewsCount: 85, brand: 'LG',
        keyFeatures: ['594 Liters', 'Hygiene Fresh+', 'Instaview'], offers: ['No Cost EMI'], specs: { 'Capacity': '594 L', 'Type': 'French Door' }
    },
    {
        id: 'ref-s-192l', name: 'Samsung 192 L 3 Star Direct Cool Single Door', price: 15490, originalPrice: 20990,
        slug: 'samsung-192l-single-door', category: 'Refrigerator', images: REFRIGERATOR_IMAGES['ref-3'], description: 'Compact and efficient direct cool refrigerator.', stock: 35, createdAt: new Date(), updatedAt: new Date(), rating: 4.2, reviewsCount: 800, brand: 'SAMSUNG',
        keyFeatures: ['192 Liters', 'Direct Cool', 'Base Stand Drawer'], offers: [], specs: { 'Capacity': '192 L', 'Type': 'Single Door' }
    },
    {
        id: 'ref-s-215l', name: 'Samsung 215 L 4 Star Digi-Touch Single Door', price: 18990, originalPrice: 25990,
        slug: 'samsung-215l-digi-touch', category: 'Refrigerator', images: REFRIGERATOR_IMAGES['ref-4'], description: 'Digi-touch cool technology with impressive space.', stock: 25, createdAt: new Date(), updatedAt: new Date(), rating: 4.4, reviewsCount: 410, brand: 'SAMSUNG',
        keyFeatures: ['215 Liters', 'Digi-Touch Cool', '4 Star'], offers: [], specs: { 'Capacity': '215 L', 'Type': 'Single Door' }
    },
    {
        id: 'ref-s-256l', name: 'Samsung 256 L 3 Star Frost Free Double Door', price: 26990, originalPrice: 38990,
        slug: 'samsung-256l-frost-free', category: 'Refrigerator', images: REFRIGERATOR_IMAGES['ref-5'], description: 'All round cooling with easy slide shelf.', stock: 15, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 380, brand: 'SAMSUNG',
        keyFeatures: ['256 Liters', 'All Round Cooling', '3 Star'], offers: ['Bank Offer'], specs: { 'Capacity': '256 L', 'Type': 'Double Door' }
    },
    {
        id: 'ref-s-324l', name: 'Samsung 324 L 3 Star Double Door', price: 34990, originalPrice: 48990,
        slug: 'samsung-324l-double-door', category: 'Refrigerator', images: REFRIGERATOR_IMAGES['ref-1'], description: 'Spacious double door for regular family needs.', stock: 12, createdAt: new Date(), updatedAt: new Date(), rating: 4.6, reviewsCount: 220, brand: 'SAMSUNG',
        keyFeatures: ['324 Liters', 'Convertible', 'Digital Inverter'], offers: [], specs: { 'Capacity': '324 L', 'Type': 'Double Door' }
    },
    {
        id: 'ref-s-385l', name: 'Samsung 385 L 2 Star Frost Free', price: 41990, originalPrice: 59990,
        slug: 'samsung-385l-frost-free', category: 'Refrigerator', images: REFRIGERATOR_IMAGES['ref-2'], description: '5 in 1 convertible mode refrigerator.', stock: 8, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 160, brand: 'SAMSUNG',
        keyFeatures: ['385 Liters', 'Twin Cooling Plus', 'Deodorizing Filter'], offers: ['Exchange Offer'], specs: { 'Capacity': '385 L', 'Type': 'Double Door' }
    },
    {
        id: 'ref-lg-185l', name: 'LG 185 L 5 Star Direct-Cool Single Door', price: 17490, originalPrice: 24990,
        slug: 'lg-185l-single-door-5star', category: 'Refrigerator', images: REFRIGERATOR_IMAGES['ref-3'], description: 'Maximum efficiency with 5 star rating.', stock: 30, createdAt: new Date(), updatedAt: new Date(), rating: 4.4, reviewsCount: 710, brand: 'LG',
        keyFeatures: ['185 Liters', '5 Star', 'Toughened Glass'], offers: [], specs: { 'Capacity': '185 L', 'Type': 'Single Door' }
    },
    {
        id: 'ref-lg-201l', name: 'LG 201 L 4 Star Direct-Cool Single Door', price: 19490, originalPrice: 27990,
        slug: 'lg-201l-single-door-4star', category: 'Refrigerator', images: REFRIGERATOR_IMAGES['ref-4'], description: 'Fast ice making with elegant design.', stock: 22, createdAt: new Date(), updatedAt: new Date(), rating: 4.3, reviewsCount: 390, brand: 'LG',
        keyFeatures: ['201 Liters', '4 Star', 'Moist N Fresh'], offers: [], specs: { 'Capacity': '201 L', 'Type': 'Single Door' }
    },
    {
        id: 'ref-lg-260l', name: 'LG 260 L 3 Star Frost-Free Double Door', price: 27490, originalPrice: 40990,
        slug: 'lg-260l-frost-free-3star', category: 'Refrigerator', images: REFRIGERATOR_IMAGES['ref-5'], description: 'Multi Air Flow with Door Cooling+', stock: 16, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 460, brand: 'LG',
        keyFeatures: ['260 Liters', 'Door Cooling+', 'Smart Diagnosis'], offers: ['Bank Offer'], specs: { 'Capacity': '260 L', 'Type': 'Double Door' }
    },
    {
        id: 'ref-lg-343l', name: 'LG 343 L 3 Star Frost-Free Double Door', price: 37990, originalPrice: 53990,
        slug: 'lg-343l-frost-free-3star', category: 'Refrigerator', images: REFRIGERATOR_IMAGES['ref-6'], description: 'Convertible freezer with ThinQ.', stock: 10, createdAt: new Date(), updatedAt: new Date(), rating: 4.6, reviewsCount: 215, brand: 'LG',
        keyFeatures: ['343 Liters', 'LG ThinQ', 'Convertible'], offers: [], specs: { 'Capacity': '343 L', 'Type': 'Double Door' }
    },
    {
        id: 'ref-lg-sbs-688l', name: 'LG 688 L Frost-Free Smart Inverter Side-by-Side', price: 89990, originalPrice: 139990,
        slug: 'lg-688l-side-by-side', category: 'Refrigerator', images: REFRIGERATOR_IMAGES['ref-feat-lg'], description: 'Mega capacity with sophisticated design.', stock: 4, createdAt: new Date(), updatedAt: new Date(), rating: 4.8, reviewsCount: 130, brand: 'LG',
        keyFeatures: ['688 Liters', 'Water Dispenser', 'Smart Inverter'], offers: ['No Cost EMI'], specs: { 'Capacity': '688 L', 'Type': 'Side by Side' }
    },
    {
        id: 'ref-lg-471l', name: 'LG 471 L 3 Star Frost-Free Double Door', price: 54990, originalPrice: 79990,
        slug: 'lg-471l-double-door', category: 'Refrigerator', images: REFRIGERATOR_IMAGES['ref-1'], description: 'Hygiene Fresh+ block bacteria and odors.', stock: 7, createdAt: new Date(), updatedAt: new Date(), rating: 4.7, reviewsCount: 155, brand: 'LG',
        keyFeatures: ['471 Liters', 'Hygiene Fresh+', 'Linear Cooling'], offers: [], specs: { 'Capacity': '471 L', 'Type': 'Double Door' }
    },
    {
        id: 'ref-s-580l', name: 'Samsung 580 L Inverter French Door Refrigerator', price: 82990, originalPrice: 115990,
        slug: 'samsung-580l-french-door', category: 'Refrigerator', images: REFRIGERATOR_IMAGES['ref-6'], description: 'Elegant French door with convertible zones.', stock: 5, createdAt: new Date(), updatedAt: new Date(), rating: 4.9, reviewsCount: 112, brand: 'SAMSUNG',
        keyFeatures: ['580 Liters', 'Convertible 5in1', 'Digital Inverter'], offers: ['Bank Offer'], specs: { 'Capacity': '580 L', 'Type': 'French Door' }
    }
];

export const ProductService = {
    async getProducts(): Promise<Product[]> {
        return MOCK_PRODUCTS;
    },

    async getProductBySlug(slug: string): Promise<Product | null> {
        return MOCK_PRODUCTS.find(p => p.slug === slug) || null;
    },

    async getProductById(id: string): Promise<Product | null> {
        return MOCK_PRODUCTS.find(p => p.id === id) || null;
    },

    async getProductsByIds(ids: string[]): Promise<Product[]> {
        if (!ids || ids.length === 0) return [];
        return MOCK_PRODUCTS.filter(p => ids.includes(p.id));
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
