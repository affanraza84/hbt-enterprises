import { Product } from '@/types/product';

const MOCK_PRODUCTS: Product[] = [
    // --- TELEVISIONS ---
    {
        id: 'tv-1', name: 'Samsung 55 Inch 4K Ultra HD Smart LED TV', price: 44990, originalPrice: 69900,
        slug: 'samsung-55-4k', category: 'Television', images: ['https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80'], description: 'Experience crystal clear colors and stunning detail.', stock: 10, createdAt: new Date(), updatedAt: new Date(), rating: 4.7, reviewsCount: 420, brand: 'SAMSUNG',
        keyFeatures: ['Crystal Processor 4K', 'OTS Lite', 'Q-Symphony', 'Boundless Screen'], offers: ['5% Cashback on HDFC', 'No Cost EMI'], specs: { 'Screen Size': '55 Inch', 'Resolution': '4K Ultra HD', 'Refresh Rate': '60 Hz' }, emi: 'From ₹2,100/mo'
    },
    {
        id: 'tv-feat', name: 'Neo QLED 8K Smart TV', description: 'Experience infinity with the bezel-less Neo QLED 8K.', price: 349990, slug: 'neo-qled-8k', images: ['https://images.unsplash.com/photo-1601944179066-29786cb9eddb?auto=format&fit=crop&w=800&q=80'], category: 'Television', stock: 10, createdAt: new Date(), updatedAt: new Date(), brand: 'SAMSUNG',
        keyFeatures: ['Quantum Matrix Technology Pro', 'Neural Quantum Processor 8K', 'Infinity Screen'], offers: ['Free Soundbar on Purchase'], specs: { 'Screen Size': '85 Inch', 'Resolution': '8K' }
    },
    {
        id: 'tv-2', name: 'LG 43 Inch 4K Ultra HD Smart LED TV', price: 32990, originalPrice: 49990,
        slug: 'lg-43-4k', category: 'Television', images: ['https://images.unsplash.com/photo-1577979749830-f1d742b96791?auto=format&fit=crop&w=800&q=80'], description: 'Real 4K Display with HDR10 Pro.', stock: 15, createdAt: new Date(), updatedAt: new Date(), rating: 4.6, reviewsCount: 310, brand: 'LG',
        keyFeatures: ['α5 Gen5 AI Processor 4K', 'Game Optimizer', 'AI Brightness Control'], offers: ['Exchange offer up to ₹3000'], specs: { 'Screen Size': '43 Inch', 'Resolution': '4K' }
    },
    {
        id: 'tv-3', name: 'Sony Bravia 55 Inch 4K Ultra HD Smart LED Google TV', price: 57990, originalPrice: 99900,
        slug: 'sony-55-4k', category: 'Television', images: ['https://images.unsplash.com/photo-1593784653056-143414518a92?auto=format&fit=crop&w=800&q=80'], description: 'X1 4K Processor for realistic picture.', stock: 8, createdAt: new Date(), updatedAt: new Date(), rating: 4.8, reviewsCount: 550, brand: 'SONY',
        keyFeatures: ['4K X-Reality PRO', 'Motionflow XR', 'Google TV'], offers: ['10% Instant Discount on SBI'], specs: { 'Screen Size': '55 Inch', 'Resolution': '4K' }
    },
    {
        id: 'tv-oled-feat', name: 'Sony Bravia XR OLED', description: 'Pure black OLED contrast and cognitive intelligence.', price: 249900, slug: 'sony-bravia-oled', images: ['https://images.unsplash.com/photo-1552975084-6e027cd345c2?auto=format&fit=crop&w=600&q=80'], category: 'Television', stock: 8, createdAt: new Date(), updatedAt: new Date(), brand: 'SONY',
        keyFeatures: ['Cognitive Processor XR', 'XR OLED Contrast Pro', 'Acoustic Surface Audio+'], offers: ['Free PS5 on select models'], specs: { 'Screen Size': '65 Inch', 'Panel': 'OLED' }
    },
    {
        id: 'tv-4', name: 'Xiaomi 50 Inch 4K Ultra HD Smart Android OLED Vision TV', price: 29999, originalPrice: 39999,
        slug: 'xiaomi-50-4k', category: 'Television', images: ['https://images.unsplash.com/photo-1509281373149-e957c629640d?auto=format&fit=crop&w=800&q=80'], description: 'Dolby Vision and 30W Sound.', stock: 20, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 200, brand: 'XIAOMI',
        keyFeatures: ['IMAX Enhanced', 'Dolby Vision IQ', 'Far-field mic'], offers: ['No Cost EMI'], specs: { 'Screen Size': '50 Inch', 'OS': 'Android TV 11' }
    },
    {
        id: 'tv-5', name: 'TCL 65 Inch 4K Ultra HD Smart QLED Google TV', price: 51990, originalPrice: 109990,
        slug: 'tcl-65-qled', category: 'Television', images: ['https://images.unsplash.com/photo-1567690187548-f03dfbc6f3df?auto=format&fit=crop&w=800&q=80'], description: 'QLED 4K for vibrant colors.', stock: 5, createdAt: new Date(), updatedAt: new Date(), rating: 4.4, reviewsCount: 150, brand: 'TCL',
        keyFeatures: ['Quantum Dot Technology', 'Dolby Vision & Atmos', 'Hands Free Voice Control'], offers: ['5% Cashback'], specs: { 'Screen Size': '65 Inch', 'Display': 'QLED' }
    },
    {
        id: 'tv-6', name: 'OnePlus 43 Inch Y Series 4K Ultra HD Smart Android LED TV', price: 24999, originalPrice: 29999,
        slug: 'oneplus-43-4k', category: 'Television', images: ['https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=800&q=80'], description: 'Bezel-less design and Dolby Audio.', stock: 25, createdAt: new Date(), updatedAt: new Date(), rating: 4.3, reviewsCount: 180, brand: 'ONEPLUS',
        keyFeatures: ['Gamma Engine', 'OxygenPlay', 'OnePlus Connect'], offers: ['Flat ₹1000 off'], specs: { 'Screen Size': '43 Inch', 'Sound': '24W Dolby Audio' }
    },
    {
        id: 'tv-feat-samsung', name: 'Samsung 55" 4K TV', price: 44990, originalPrice: 69900, slug: 'samsung-4k-tv', category: 'Smart TV', images: ['https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=600&q=80'], description: '', stock: 4, createdAt: new Date(), updatedAt: new Date(), rating: 4.6, reviewsCount: 112, brand: 'SAMSUNG',
        keyFeatures: ['Crystal 4K Processor', 'PurColor', 'PC on TV'], offers: ['Bank Offer applied'], specs: { 'Screen Size': '55 Inch', 'Resolution': '3840 x 2160' }
    },

    // --- SMARTPHONES ---
    {
        id: 'ph-1',
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
        joyPrice: true,
        keyFeatures: ['Circle to Search with Google', 'Live Translate', 'Note Assist with Galaxy AI', '200MP Wide-angle Camera', 'Titanium Frame'],
        offers: ['Get ₹5000 Instant Discount on HDFC Bank Cards', 'Exchange Bonus up to ₹7000', 'No Cost EMI up to 12 months'],
        specs: { 'Processor': 'Snapdragon 8 Gen 3', 'Display': '6.8" QHD+ Dynamic AMOLED 2X', 'Camera': '200MP + 50MP + 12MP + 10MP', 'Battery': '5000 mAh' },
        emi: 'Standard EMI From ₹ 6,303/month'
    },
    {
        id: 'ph-2', name: 'Apple iPhone 15 Pro Max (256 GB)', price: 148900, originalPrice: 159900,
        slug: 'iphone-15-pro-max', category: 'Smart Phone', images: ['https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80'], description: 'Titanium design, A17 Pro chip.', stock: 10, createdAt: new Date(), updatedAt: new Date(), rating: 4.8, reviewsCount: 1200, brand: 'APPLE',
        keyFeatures: ['A17 Pro Chip', '48MP Main Camera', 'Titanium Design', 'USB-C'], offers: ['₹4000 Cashback HDFC'], specs: { 'Screen': '6.7 Inch Super Retina XDR', 'Chip': 'A17 Pro', 'Storage': '256 GB' }
    },
    {
        id: 'ph-3', name: 'OnePlus 12 5G (16GB RAM, 512GB Storage)', price: 69999, originalPrice: 74999,
        slug: 'oneplus-12', category: 'Smart Phone', images: ['https://images.unsplash.com/photo-1629367494133-4a6835a89615?auto=format&fit=crop&w=800&q=80'], description: 'Smooth Beyond Belief.', stock: 20, createdAt: new Date(), updatedAt: new Date(), rating: 4.7, reviewsCount: 600, brand: 'ONEPLUS',
        keyFeatures: ['Snapdragon 8 Gen 3', '4th Gen Hasselblad Camera', '100W SUPERVOOC'], offers: ['Additional Exchange Bonus ₹2000'], specs: { 'RAM': '16 GB', 'Storage': '512 GB', 'Battery': '5400 mAh' }
    },
    {
        id: 'ph-4', name: 'Google Pixel 8 Pro 5G', price: 98999, originalPrice: 106999,
        slug: 'google-pixel-8-pro', category: 'Smart Phone', images: ['https://images.unsplash.com/photo-1598327105666-5b89351aff23?auto=format&fit=crop&w=800&q=80'], description: 'The power of Google AI.', stock: 12, createdAt: new Date(), updatedAt: new Date(), rating: 4.6, reviewsCount: 450, brand: 'GOOGLE',
        keyFeatures: ['Tensor G3 Chip', 'Super Actua Display', 'Best Take', 'Magic Editor'], offers: ['Pixel Buds @ ₹999'], specs: { 'Camera': '50MP + 48MP + 48MP', 'OS': 'Android 14' }
    },
    {
        id: 'ph-5', name: 'Nothing Phone (2) 5G', price: 36999, originalPrice: 49999,
        slug: 'nothing-phone-2', category: 'Smart Phone', images: ['https://images.unsplash.com/photo-1690048386377-cd0d93be8959?auto=format&fit=crop&w=800&q=80'], description: 'Come to the bright side.', stock: 25, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 320, brand: 'NOTHING',
        keyFeatures: ['Glyph Interface', 'Nothing OS 2.0', 'Snapdragon 8+ Gen 1'], offers: ['Instant Discount ₹3000'], specs: { 'Display': '6.7" OLED', 'Battery': '4700 mAh' }
    },
    {
        id: 'ph-5a', name: 'Nothing Phone (2a)', price: 23999, originalPrice: 25999,
        slug: 'nothing-phone-2a', category: 'Smart Phone', images: ['https://images.unsplash.com/photo-1709819771123-5e921f66a935?auto=format&fit=crop&w=800&q=80'], description: 'Powerfully unique.', stock: 25, createdAt: new Date(), updatedAt: new Date(), rating: 4.4, reviewsCount: 67, brand: 'NOTHING',
        keyFeatures: ['Mediatek Dimensity 7200 Pro', '50MP Dual Camera', 'Adaptive 120Hz AMOLED'], offers: ['Bank Offer ₹2000'], specs: { 'RAM': '8 GB', 'Storage': '128 GB' }
    },
    {
        id: 'ph-6', name: 'Xiaomi 14 Ultra 5G Leica', price: 99999, originalPrice: 119999,
        slug: 'xiaomi-14-ultra', category: 'Smart Phone', images: ['https://images.unsplash.com/photo-1710134446419-74d32026131f?auto=format&fit=crop&w=800&q=80'], description: 'Lens to Legend.', stock: 8, createdAt: new Date(), updatedAt: new Date(), rating: 4.7, reviewsCount: 200, brand: 'XIAOMI',
        keyFeatures: ['Leica Summilux Lens', 'Snapdragon 8 Gen 3', 'WQHD+ AMOLED'], offers: ['₹5000 off on Exchange'], specs: { 'Camera': 'Quad 50MP', 'Battery': '5000 mAh' }
    },

    // --- LAPTOPS & PRINTERS ---
    {
        id: 'lp-1', name: 'Apple MacBook Air M3 Chip 13-inch', price: 114900, originalPrice: 134900,
        slug: 'macbook-air-m3', category: 'Laptop', images: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca4?auto=format&fit=crop&w=800&q=80'], description: 'Lean. Mean. M3 Machine.', stock: 15, createdAt: new Date(), updatedAt: new Date(), rating: 4.9, reviewsCount: 320, brand: 'APPLE',
        keyFeatures: ['Supercharged by M3', 'Up to 18 hrs battery', 'Liquid Retina Display'], offers: ['Student Discount'], specs: { 'Chip': 'Apple M3', 'RAM': '8GB', 'SSD': '256GB' }
    },
    {
        id: 'lp-2', name: 'HP Pavilion 15 12th Gen Intel Core i5', price: 62990, originalPrice: 78000,
        slug: 'hp-pavilion-15', category: 'Laptop', images: ['https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=800&q=80'], description: 'Performance that lasts.', stock: 18, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 210, brand: 'HP',
        keyFeatures: ['Intel Core i5 12th Gen', 'Backlit Keyboard', 'Bang & Olufsen Audio'], offers: ['Free Mouse'], specs: { 'Processor': 'i5-1240P', 'RAM': '16GB', 'Storage': '512GB SSD' }
    },
    {
        id: 'lp-3', name: 'Canon Pixma G3000 All-in-One Ink Tank Colour Printer', price: 12499, originalPrice: 15995,
        slug: 'canon-pixma-g3000', category: 'Printer', images: ['https://images.unsplash.com/photo-1612815154858-60aa4c4603e1?auto=format&fit=crop&w=800&q=80'], description: 'High volume printing.', stock: 25, createdAt: new Date(), updatedAt: new Date(), rating: 4.4, reviewsCount: 500, brand: 'CANON',
        keyFeatures: ['High Yield Ink Bottles', 'Wireless Printing', 'Integrated Ink Tanks'], offers: ['Extra Ink Bottle'], specs: { 'Type': 'Ink Tank', 'Connectivity': 'Wi-Fi, USB' }
    },
    {
        id: 'lp-4', name: 'Dell XPS 13 Plus Laptop Evo Core i7', price: 199990, originalPrice: 240000,
        slug: 'dell-xps-13', category: 'Laptop', images: ['https://images.unsplash.com/photo-1593642632823-8f78536788c6?auto=format&fit=crop&w=800&q=80'], description: 'Designed to be the best.', stock: 5, createdAt: new Date(), updatedAt: new Date(), rating: 4.7, reviewsCount: 150, brand: 'DELL',
        keyFeatures: ['Zero-lattice Keyboard', 'Capacitive Touch Row', 'OLED 3.5K Display'], offers: ['No Cost EMI'], specs: { 'Processor': 'i7-1360P', 'RAM': '32GB', 'SSD': '1TB' }
    },
    {
        id: 'lp-5', name: 'ASUS ROG Zephyrus G14 Gaming Laptop', price: 149990, originalPrice: 180990,
        slug: 'asus-rog-g14', category: 'Laptop', images: ['https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80'], description: 'World\'s most powerful 14-inch gaming laptop.', stock: 8, createdAt: new Date(), updatedAt: new Date(), rating: 4.8, reviewsCount: 220, brand: 'ASUS',
        keyFeatures: ['AniMe Matrix LED', 'AMD Ryzen 9', 'RTX 4060', 'Nebula Display'], offers: ['Game Pass Included'], specs: { 'Processor': 'Ryzen 9 7940HS', 'GPU': 'RTX 4060 8GB' }
    },
    {
        id: 'lp-6', name: 'Epson EcoTank L3250 Wi-Fi All-in-One Ink Tank Printer', price: 13999, originalPrice: 16999,
        slug: 'epson-ecotank-l3250', category: 'Printer', images: ['https://images.unsplash.com/photo-1588619461337-1c251433f912?auto=format&fit=crop&w=800&q=80'], description: 'Economical and Eco-friendly.', stock: 20, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 400, brand: 'EPSON',
        keyFeatures: ['Heat-Free Technology', 'Smart Panel App', 'Spill-free Refilling'], offers: ['1 Year Extended Warranty'], specs: { 'Print Speed': '33 ppm', 'Cost per page': '7 paise' }
    },

    // --- MICROWAVES ---
    {
        id: 'mw-1', name: 'LG 28 L Convection Microwave Oven', price: 11990, originalPrice: 16490,
        slug: 'lg-28l-convection', category: 'Microwave', images: ['https://images.unsplash.com/photo-1585659722983-48356c9a702b?auto=format&fit=crop&w=800&q=80'], description: 'All in one convection oven.', stock: 25, createdAt: new Date(), updatedAt: new Date(), rating: 4.6, reviewsCount: 380, brand: 'LG',
        keyFeatures: ['Charcoal Lighting Heater', 'Diet Fry', 'Indian Roti Basket'], offers: ['Starter Kit Included'], specs: { 'Capacity': '28L', 'Type': 'Convection' }
    },
    {
        id: 'mw-2', name: 'Samsung 28 L Convection Microwave Oven', price: 11590, originalPrice: 15500,
        slug: 'samsung-28l-convection', category: 'Microwave', images: ['https://images.unsplash.com/photo-1574226511136-9b28f8f6880c?auto=format&fit=crop&w=800&q=80'], description: 'Curd making and tandoor technology.', stock: 20, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 310, brand: 'SAMSUNG',
        keyFeatures: ['Slim Fry Technology', 'Tandoor Technology', 'Curd Making'], offers: ['10% Cashback'], specs: { 'Capacity': '28L', 'Power': '900W' }
    },
    {
        id: 'mw-3', name: 'IFB 20 L Convection Microwave Oven', price: 9490, originalPrice: 13490,
        slug: 'ifb-20l-convection', category: 'Microwave', images: ['https://images.unsplash.com/photo-1626154546450-4d436c64604d?auto=format&fit=crop&w=800&q=80'], description: 'Multi-stage cooking.', stock: 15, createdAt: new Date(), updatedAt: new Date(), rating: 4.4, reviewsCount: 190, brand: 'IFB',
        keyFeatures: ['Keep Warm', 'Deodorize', 'Auto Cook Menus'], offers: [], specs: { 'Capacity': '20L', 'Control': 'Keypad' }
    },
    {
        id: 'mw-4', name: 'Panasonic 27 L Convection Microwave Oven', price: 12990, originalPrice: 16990,
        slug: 'panasonic-27l-convection', category: 'Microwave', images: ['https://images.unsplash.com/photo-1584252656913-75c128038f6b?auto=format&fit=crop&w=800&q=80'], description: 'Magic grill technology.', stock: 12, createdAt: new Date(), updatedAt: new Date(), rating: 4.7, reviewsCount: 220, brand: 'PANASONIC',
        keyFeatures: ['Twin Turbo Cooking', 'Magic Grill', 'Zero Oil Recipes'], offers: ['Free Glass Bowl'], specs: { 'Capacity': '27L', 'Turntable': 'Glass' }
    },
    {
        id: 'mw-5', name: 'Bajaj 17 L Solo Microwave Oven', price: 4990, originalPrice: 6500,
        slug: 'bajaj-17l-solo', category: 'Microwave', images: ['https://images.unsplash.com/photo-1549216093-6c8f9db00566?auto=format&fit=crop&w=800&q=80'], description: 'Compact and efficient.', stock: 30, createdAt: new Date(), updatedAt: new Date(), rating: 4.3, reviewsCount: 150, brand: 'BAJAJ',
        keyFeatures: ['Cooking Complete Alarm', 'Defrost', 'Mechanical Knob'], offers: [], specs: { 'Capacity': '17L', 'Type': 'Solo' }
    },
    {
        id: 'mw-6', name: 'Morphy Richards 25 L Convection Microwave Oven', price: 10990, originalPrice: 14990,
        slug: 'morphy-richards-25l', category: 'Microwave', images: ['https://images.unsplash.com/photo-1550964177-3e19875f80b2?auto=format&fit=crop&w=800&q=80'], description: 'Premium design.', stock: 10, createdAt: new Date(), updatedAt: new Date(), rating: 4.4, reviewsCount: 110, brand: 'MORPHY RICHARDS',
        keyFeatures: ['Combination Cooking', 'Stainless Steel Cavity', 'Child Lock'], offers: ['2 Years Warranty'], specs: { 'Capacity': '25L', 'Color': 'Silver' }
    },

    // --- REFRIGERATORS ---
    {
        id: 'ref-1', name: 'Samsung 236 L 3 Star Digital Inverter Frost Free Double Door', price: 24990, originalPrice: 31990,
        slug: 'samsung-236l-double-door', category: 'Refrigerator', images: ['https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=800&q=80'], description: 'Convertible 3-in-1.', stock: 12, createdAt: new Date(), updatedAt: new Date(), rating: 4.6, reviewsCount: 280, brand: 'SAMSUNG',
        keyFeatures: ['Digital Inverter', 'Convertible 3-in-1', 'Stabilizer Free Operation'], offers: ['Exchange Up To ₹4000'], specs: { 'Capacity': '236L', 'Star Rating': '3 Star' }
    },
    {
        id: 'ref-2', name: 'LG 242 L 3 Star Smart Inverter Frost-Free Double Door', price: 25990, originalPrice: 33990,
        slug: 'lg-242l-double-door', category: 'Refrigerator', images: ['https://images.unsplash.com/photo-1571175443880-49e1d58b794a?auto=format&fit=crop&w=800&q=80'], description: 'Smart diagnosis.', stock: 15, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 210, brand: 'LG',
        keyFeatures: ['Smart Inverter Compressor', 'Door Cooling+', 'Smart Diagnosis'], offers: [], specs: { 'Capacity': '242L', 'Cooling': 'Frost Free' }
    },
    {
        id: 'ref-3', name: 'Whirlpool 265 L 3 Star Inverter Frost-Free Double Door', price: 27490, originalPrice: 35100,
        slug: 'whirlpool-265l-double-door', category: 'Refrigerator', images: ['https://images.unsplash.com/photo-1536353284924-9220c464e262?auto=format&fit=crop&w=800&q=80'], description: 'Intellisense inverter.', stock: 10, createdAt: new Date(), updatedAt: new Date(), rating: 4.4, reviewsCount: 150, brand: 'WHIRLPOOL',
        keyFeatures: ['Intellisense Inverter', '12 Days Garden Fresh', 'Zeolite Technology'], offers: [], specs: { 'Capacity': '265L', 'Compressor': 'Inverter' }
    },
    {
        id: 'ref-4', name: 'Haier 190 L 4 Star Single Door Refrigerator', price: 14990, originalPrice: 19900,
        slug: 'haier-190l-single-door', category: 'Refrigerator', images: ['https://images.unsplash.com/photo-1584269664654-20bce628a383?auto=format&fit=crop&w=800&q=80'], description: '1 Hour Icing Technology.', stock: 18, createdAt: new Date(), updatedAt: new Date(), rating: 4.3, reviewsCount: 120, brand: 'HAIER',
        keyFeatures: ['1 Hour Icing Technology', 'Stabiliser Free', 'Toughened Glass Shelves'], offers: ['Instant ₹500 Off'], specs: { 'Capacity': '190L', 'Door': 'Single' }
    },
    {
        id: 'ref-5', name: 'Godrej 223 L 3 Star Nano Shield Technology Inverter Frost Free', price: 22990, originalPrice: 28990,
        slug: 'godrej-223l-double-door', category: 'Refrigerator', images: ['https://images.unsplash.com/photo-1627483262268-e32a6327c5b3?auto=format&fit=crop&w=800&q=80'], description: 'Nano shield disinfection.', stock: 8, createdAt: new Date(), updatedAt: new Date(), rating: 4.2, reviewsCount: 90, brand: 'GODREJ',
        keyFeatures: ['Nano Shield Disinfection', 'Inverter Compressor', 'Cool Shower Technology'], offers: [], specs: { 'Capacity': '223L', 'Color': 'Blue' }
    },
    {
        id: 'ref-6', name: 'Samsung 653 L 3 Star Convertible 5-in-1 Side by Side Refrigerator', price: 79990, originalPrice: 103000,
        slug: 'samsung-653l-side-by-side', category: 'Refrigerator', images: ['https://images.unsplash.com/photo-1585435465945-bef5a93f30a6?auto=format&fit=crop&w=800&q=80'], description: 'SpaceMax technology.', stock: 5, createdAt: new Date(), updatedAt: new Date(), rating: 4.8, reviewsCount: 350, brand: 'SAMSUNG',
        keyFeatures: ['Convertible 5-in-1', 'SpaceMax Technology', 'Twin Cooling Plus'], offers: ['EMI from ₹4000'], specs: { 'Capacity': '653L', 'Type': 'Side by Side' }
    },
    {
        id: 'ref-feat-lg', name: 'LG French Door Refrigerator', description: 'Keep your food fresh with linear cooling technology.', price: 84990, slug: 'lg-french-door-fridge', images: ['https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&w=600&q=80'], category: 'Refrigerator', stock: 15, createdAt: new Date(), updatedAt: new Date(), brand: 'LG',
        keyFeatures: ['Linear Cooling', 'Door Cooling+', 'Hygiene Fresh+'], offers: [], specs: { 'Capacity': '594L', 'Compressor': 'Inverter Linear' }
    },

    // --- WASHING MACHINES ---
    {
        id: 'wm-1', name: 'LG 8 Kg 5 Star Inverter Fully Automatic Front Load', price: 34990, originalPrice: 45990,
        slug: 'lg-8kg-front-load', category: 'Washing Machine', images: ['https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?auto=format&fit=crop&w=800&q=80'], description: 'Direct Drive Motor.', stock: 15, createdAt: new Date(), updatedAt: new Date(), rating: 4.8, reviewsCount: 320, brand: 'LG',
        keyFeatures: ['AI Direct Drive', 'Steam Wash', 'ThinQ'], offers: ['5% off on Prepaid'], specs: { 'Capacity': '8 Kg', 'Type': 'Front Load' }
    },
    {
        id: 'wm-2', name: 'Samsung 7 Kg 5 Star Inverter Fully Automatic Top Load', price: 18990, originalPrice: 22500,
        slug: 'samsung-7kg-top-load', category: 'Washing Machine', images: ['https://images.unsplash.com/photo-1626806775807-45e0766d0343?auto=format&fit=crop&w=800&q=80'], description: 'Eco Bubble Technology.', stock: 20, createdAt: new Date(), updatedAt: new Date(), rating: 4.6, reviewsCount: 150, brand: 'SAMSUNG',
        keyFeatures: ['Eco Bubble', 'Digital Inverter', 'Soft Close Lid'], offers: [], specs: { 'Capacity': '7 Kg', 'Type': 'Top Load' }
    },
    {
        id: 'wm-3', name: 'Whirlpool 7.5 Kg 5 Star Stainwash Pro Top Load', price: 16490, originalPrice: 20400,
        slug: 'whirlpool-7.5kg-top-load', category: 'Washing Machine', images: ['https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=800&q=80'], description: 'Hard water wash.', stock: 10, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 89, brand: 'WHIRLPOOL',
        keyFeatures: ['Hard Water Wash', 'Zero Pressure Fill', 'Spiro Wash'], offers: [], specs: { 'Capacity': '7.5 Kg', 'Heater': 'Yes' }
    },
    {
        id: 'wm-4', name: 'IFB 8 Kg 5 Star AI Powered Front Load', price: 36990, originalPrice: 48990,
        slug: 'ifb-8kg-ai-front-load', category: 'Washing Machine', images: ['https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=800&q=80'], description: 'AI powered wash.', stock: 8, createdAt: new Date(), updatedAt: new Date(), rating: 4.7, reviewsCount: 205, brand: 'IFB',
        keyFeatures: ['AI Powered', 'Oxyjet Technology', 'Power Steam'], offers: ['Exchange Bonus'], specs: { 'Capacity': '8 Kg', 'RPM': '1400' }
    },
    {
        id: 'wm-5', name: 'Bosch 7 Kg 5 Star Inverter Touch Control Front Load', price: 30990, originalPrice: 39500,
        slug: 'bosch-7kg-front-load', category: 'Washing Machine', images: ['https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=800&q=80'], description: 'Hygiene Wash.', stock: 12, createdAt: new Date(), updatedAt: new Date(), rating: 4.8, reviewsCount: 180, brand: 'BOSCH',
        keyFeatures: ['Hygiene Wash', 'Anti-Tangle', 'Vario Drum'], offers: [], specs: { 'Capacity': '7 Kg', 'Motor': 'EcoSilence Drive' }
    },
    {
        id: 'wm-6', name: 'Haier 8.5 Kg 5 Star Anti-Bacterial Vortex Top Load', price: 22990, originalPrice: 32000,
        slug: 'haier-8.5kg-top-load', category: 'Washing Machine', images: ['https://images.unsplash.com/photo-1545173168-9f1947eebb8f?auto=format&fit=crop&w=800&q=80'], description: 'Oceanus Wave Drum.', stock: 18, createdAt: new Date(), updatedAt: new Date(), rating: 4.4, reviewsCount: 95, brand: 'HAIER',
        keyFeatures: ['Oceanus Wave Drum', 'Double Magic Filter', 'Near Zero Pressure'], offers: [], specs: { 'Capacity': '8.5 Kg', 'Body': 'Steel' }
    },
    {
        id: 'wm-feat-whirl', name: 'Whirlpool Front Load Washer', description: 'Advanced stain removal and steam clean technology.', price: 34990, slug: 'whirlpool-front-load', images: ['https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=600&q=80'], category: 'Washing Machine', stock: 20, createdAt: new Date(), updatedAt: new Date(), brand: 'WHIRLPOOL',
        keyFeatures: ['FreshCare+', '6th Sense SoftMove', 'Steam Refresh'], offers: ['Installation Free'], specs: { 'Capacity': '7 Kg', 'Energy': '5 Star' }
    },

    // --- AIR CONDITIONERS ---
    {
        id: 'ac-1', name: 'Voltas 1.5 Ton 5 Star Inverter Split AC', price: 38990, originalPrice: 68990,
        slug: 'voltas-1.5-split', category: 'Air Conditioner', images: ['https://images.unsplash.com/photo-1612450849206-8fb509f61b36?auto=format&fit=crop&w=800&q=80'], description: 'Quick cooling and energy efficient.', stock: 20, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 300, brand: 'VOLTAS',
        keyFeatures: ['Adjustable Cooling', 'Anti-Dust Filter', 'Copper Condenser'], offers: ['Free Installation'], specs: { 'Capacity': '1.5 Ton', 'Rating': '5 Star' }
    },
    {
        id: 'ac-2', name: 'LG 1.5 Ton 5 Star AI DUAL Inverter Split AC', price: 44490, originalPrice: 78990,
        slug: 'lg-1.5-split-ai', category: 'Air Conditioner', images: ['https://images.unsplash.com/photo-1542475510-9c299c85775f?auto=format&fit=crop&w=800&q=80'], description: 'AI Convertible 6-in-1.', stock: 18, createdAt: new Date(), updatedAt: new Date(), rating: 4.7, reviewsCount: 410, brand: 'LG',
        keyFeatures: ['AI Convertible 6-in-1', 'Viraat Mode', 'HD Filter'], offers: ['Cashback on Select Cards'], specs: { 'Capacity': '1.5 Ton', 'Compressor': 'Dual Inverter' }
    },
    {
        id: 'ac-3', name: 'Daikin 1.5 Ton 5 Star Inverter Split AC', price: 45490, originalPrice: 67200,
        slug: 'daikin-1.5-split', category: 'Air Conditioner', images: ['https://images.unsplash.com/photo-1614631446505-b0aa00640f0c?auto=format&fit=crop&w=800&q=80'], description: 'Dew clean technology.', stock: 15, createdAt: new Date(), updatedAt: new Date(), rating: 4.8, reviewsCount: 350, brand: 'DAIKIN',
        keyFeatures: ['Dew Clean Technology', 'Triple Display', 'PM 2.5 Filter'], offers: [], specs: { 'Capacity': '1.5 Ton', 'Coil': 'Copper' }
    },
    {
        id: 'ac-4', name: 'Carrier 1.5 Ton 5 Star AI Flexicool Inverter Split AC', price: 41990, originalPrice: 76000,
        slug: 'carrier-1.5-split', category: 'Air Conditioner', images: ['https://images.unsplash.com/photo-1614631446505-b0aa00640f0c?auto=format&fit=crop&w=800&q=80'], description: 'Convertible 6-in-1.', stock: 12, createdAt: new Date(), updatedAt: new Date(), rating: 4.4, reviewsCount: 220, brand: 'CARRIER',
        keyFeatures: ['Convertible 6-in-1', 'Dual Filtration', 'Aqua Clear Protection'], offers: [], specs: { 'Capacity': '1.5 Ton', 'Refrigerant': 'R32' }
    },
    {
        id: 'ac-5', name: 'Blue Star 1.5 Ton 5 Star Inverter Split AC', price: 42990, originalPrice: 75000,
        slug: 'blue-star-1.5-split', category: 'Air Conditioner', images: ['https://images.unsplash.com/photo-1612450849206-8fb509f61b36?auto=format&fit=crop&w=800&q=80'], description: 'Turbo cool.', stock: 10, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 180, brand: 'BLUE STAR',
        keyFeatures: ['Turbo Cool', '5-in-1 Convertible', 'Smart Ready'], offers: [], specs: { 'Capacity': '1.5 Ton', 'Noise': 'Low' }
    },
    {
        id: 'ac-6', name: 'Panasonic 1.5 Ton 5 Star Wi-Fi Inverter Smart Split AC', price: 42990, originalPrice: 63400,
        slug: 'panasonic-1.5-smart-split', category: 'Air Conditioner', images: ['https://images.unsplash.com/photo-1579042636952-44c136369b07?auto=format&fit=crop&w=800&q=80'], description: 'Miraie App enabled.', stock: 14, createdAt: new Date(), updatedAt: new Date(), rating: 4.6, reviewsCount: 290, brand: 'PANASONIC',
        keyFeatures: ['7-in-1 Convertible', 'Wi-Fi Enabled', 'PM 0.1 Filter'], offers: ['Smart Plug Free'], specs: { 'Capacity': '1.5 Ton', 'App': 'Miraie' }
    },
    {
        id: 'ac-7', name: 'LG 1.5 Ton AC', price: 34500, originalPrice: 55000, slug: 'lg-ac-1.5', category: 'Air Conditioner', images: ['https://images.unsplash.com/photo-1542475510-9c299c85775f?auto=format&fit=crop&w=800&q=80'], description: '', stock: 12, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 45, brand: 'LG',
        keyFeatures: ['Dual Inverter', 'Ocean Black Fins', 'Low Gas Detection'], offers: [], specs: { 'Capacity': '1.5 Ton', 'Star': '3 Star' }
    },

    // --- ACCESSORIES , AUDIO & WEARABLES ---
    {
        id: 'acc-1', name: 'Apple Watch Series 9 GPS', price: 41900, originalPrice: 44900,
        slug: 'apple-watch-s9', category: 'Smartwatch', images: ['https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80'], description: 'Smarter. Brighter. Mightier.', stock: 20, createdAt: new Date(), updatedAt: new Date(), rating: 4.8, reviewsCount: 300, brand: 'APPLE',
        keyFeatures: ['S9 SiP', 'Double Tap Gesture', 'Brighter Display'], offers: ['Card Offer ₹2500'], specs: { 'Size': '41mm', 'Case': 'Aluminum' }
    },
    {
        id: 'acc-2', name: 'Samsung Galaxy Watch 6 Classic', price: 36999, originalPrice: 42999,
        slug: 'samsung-watch-6', category: 'Smartwatch', images: ['https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80'], description: 'Focus on your health.', stock: 15, createdAt: new Date(), updatedAt: new Date(), rating: 4.7, reviewsCount: 250, brand: 'SAMSUNG',
        keyFeatures: ['Rotating Bezel', 'Sleep Tracking', 'Sapphire Crystal'], offers: [], specs: { 'Size': '43mm', 'Connectivity': 'Bluetooth' }
    },
    {
        id: 'acc-3', name: 'Sony WF-1000XM5 TWS', price: 24990, originalPrice: 29990,
        slug: 'sony-wf-1000xm5', category: 'Headphones', images: ['https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=800&q=80'], description: 'The Best Noise Cancelling.', stock: 25, createdAt: new Date(), updatedAt: new Date(), rating: 4.6, reviewsCount: 180, brand: 'SONY',
        keyFeatures: ['Active Noise Cancellation', 'Hi-Res Audio', 'Multipoint Connection'], offers: [], specs: { 'Battery': '8H + 16H', 'Driver': '8.4mm' }
    },
    {
        id: 'acc-4', name: 'AirPods Pro (2nd Generation)', price: 24900, originalPrice: 26900,
        slug: 'airpods-pro-2', category: 'Headphones', images: ['https://images.unsplash.com/photo-1628210889224-53b2e308bb46?auto=format&fit=crop&w=800&q=80'], description: 'Magic like you’ve never heard.', stock: 30, createdAt: new Date(), updatedAt: new Date(), rating: 4.9, reviewsCount: 1500, brand: 'APPLE',
        keyFeatures: ['H2 Chip', 'Adaptive Audio', 'Conversation Awareness'], offers: [], specs: { 'Charging': 'USB-C/MagSafe', 'Type': 'In-ear' }
    },
    {
        id: 'acc-5', name: 'Logitech MX Master 3S', price: 9995, originalPrice: 10995,
        slug: 'logitech-mx-master-3s', category: 'Accessories', images: ['https://images.unsplash.com/photo-1615663245857-acda6b245fba?auto=format&fit=crop&w=800&q=80'], description: 'Performance mastered.', stock: 18, createdAt: new Date(), updatedAt: new Date(), rating: 4.9, reviewsCount: 400, brand: 'LOGITECH',
        keyFeatures: ['8000 DPI Sensor', 'Quiet Clicks', 'MagSpeed Scrolling'], offers: [], specs: { 'Connectivity': 'Bluetooth/Bolt', 'Buttons': '7' }
    },
    {
        id: 'acc-6', name: 'Dell 7-in-1 USB-C Hub', price: 6999, originalPrice: 9999,
        slug: 'dell-usb-hub', category: 'Accessories', images: ['https://images.unsplash.com/photo-1629759367060-f19114ad4737?auto=format&fit=crop&w=800&q=80'], description: 'Connectivity simplified.', stock: 40, createdAt: new Date(), updatedAt: new Date(), rating: 4.5, reviewsCount: 120, brand: 'DELL',
        keyFeatures: ['4K HDMI', 'Power Delivery', 'Compact Design'], offers: [], specs: { 'Ports': '7', 'Interface': 'USB-C' }
    },
    {
        id: 'audio-sony-feat', name: 'Sony WH-1000XM5', price: 29990, originalPrice: 34990, slug: 'sony-wh-1000xm5', category: 'Audio', images: ['https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=800&q=80'], description: '', stock: 10, createdAt: new Date(), updatedAt: new Date(), rating: 4.8, reviewsCount: 124, brand: 'SONY',
        keyFeatures: ['Two Processors Control 8 Mics', 'Auto NC Optimizer', 'Up to 30 Hours Battery'], offers: [], specs: { 'Type': 'Over-ear', 'Color': 'Silver' }
    },

    // --- SOUNDBARS ---
    {
        id: 'sb-1', name: 'JBL Cinema SB271, Dolby Digital Soundbar', price: 12999, originalPrice: 16999,
        slug: 'jbl-cinema-sb271', category: 'Soundbar', images: ['https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80'], description: 'Deep bass.', stock: 20, createdAt: new Date(), updatedAt: new Date(), rating: 4.4, reviewsCount: 350, brand: 'JBL',
        keyFeatures: ['220W Output', 'Wireless Subwoofer', 'Dolby Digital'], offers: [], specs: { 'Channel': '2.1', 'Bluetooth': 'Yes' }
    },
    {
        id: 'sb-2', name: 'Sony HT-S20R Real 5.1ch Dolby Digital Soundbar', price: 17990, originalPrice: 23990,
        slug: 'sony-ht-s20r', category: 'Soundbar', images: ['https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=800&q=80'], description: 'Cinematic sound.', stock: 15, createdAt: new Date(), updatedAt: new Date(), rating: 4.6, reviewsCount: 800, brand: 'SONY',
        keyFeatures: ['400W Power', '5.1 Channel', 'USB Playback'], offers: [], specs: { 'Surround': 'Dolby Digital', 'HDMI': 'ARC' }
    },
    {
        id: 'sb-3', name: 'boAt Aavante Bar 1500 2.1 Channel', price: 4999, originalPrice: 12999,
        slug: 'boat-aavante-1500', category: 'Soundbar', images: ['https://images.unsplash.com/photo-1621252179027-94459d27d3ee?auto=format&fit=crop&w=800&q=80'], description: 'Boat signature sound.', stock: 30, createdAt: new Date(), updatedAt: new Date(), rating: 4.3, reviewsCount: 1500, brand: 'BOAT',
        keyFeatures: ['120W RMS', 'Sleek Design', 'Multiple EQ Modes'], offers: [], specs: { 'Subwoofer': 'Wired', 'Remote': 'Yes' }
    },
    {
        id: 'sb-4', name: 'Samsung HW-Q990C 11.1.4ch Soundbar', price: 99990, originalPrice: 129990,
        slug: 'samsung-q990c', category: 'Soundbar', images: ['https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=800&q=80'], description: 'Wireless Dolby Atmos.', stock: 5, createdAt: new Date(), updatedAt: new Date(), rating: 4.9, reviewsCount: 120, brand: 'SAMSUNG',
        keyFeatures: ['11.1.4 Channel', 'Q-Symphony', 'SpaceFit Sound Pro'], offers: [], specs: { 'Sound': 'Dolby Atmos', 'Speakers': '22' }
    },
    {
        id: 'sb-5', name: 'Bose Smart Soundbar 900', price: 104900, originalPrice: 114900,
        slug: 'bose-soundbar-900', category: 'Soundbar', images: ['https://images.unsplash.com/photo-1594950669894-0d7042a96939?auto=format&fit=crop&w=800&q=80'], description: 'Most immersive.', stock: 8, createdAt: new Date(), updatedAt: new Date(), rating: 4.8, reviewsCount: 200, brand: 'BOSE',
        keyFeatures: ['Voice Control', 'ADAPTiQ', 'SimpleSync'], offers: ['EMI Available'], specs: { 'Color': 'Black', 'Wi-Fi': 'Yes' }
    },
    {
        id: 'sb-6', name: 'Zebronics Juke Bar 9700 Pro', price: 14999, originalPrice: 22999,
        slug: 'zebronics-9700-pro', category: 'Soundbar', images: ['https://images.unsplash.com/photo-1615655406736-b37c4fabf923?auto=format&fit=crop&w=800&q=80'], description: 'Dolby Atmos.', stock: 25, createdAt: new Date(), updatedAt: new Date(), rating: 4.2, reviewsCount: 450, brand: 'ZEBRONICS',
        keyFeatures: ['Dolby Atmos', 'Quad Drivers', 'Wall Mountable'], offers: [], specs: { 'Output': '450W', 'Bluetooth': 'v5.0' }
    },

    // --- FEATURED & OTHERS ---
    {
        id: 'feat-4', name: 'Dyson V15 Detect', price: 65900,
        slug: 'dyson-v15', category: 'Home Appliances', images: ['https://images.unsplash.com/photo-1558317374-a3594743e9c7?auto=format&fit=crop&w=800&q=80'], description: 'Powerful cleaning.', stock: 8, createdAt: new Date(), updatedAt: new Date(), rating: 4.6, reviewsCount: 34, brand: 'DYSON',
        keyFeatures: ['Laser Dust Detection', 'Piezo Sensor', 'Root Cyclone'], offers: [], specs: { 'Run time': '60 mins', 'Bin': '0.77 L' }
    },
    {
        id: 'feat-5', name: 'PlayStation 5 Slim', price: 54990,
        slug: 'ps5-slim', category: 'Gaming', images: ['https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=800&q=80'], description: 'Play Has No Limits.', stock: 15, createdAt: new Date(), updatedAt: new Date(), rating: 4.9, reviewsCount: 200, brand: 'SONY',
        keyFeatures: ['Ultra-High Speed SSD', 'Ray Tracing', 'Haptic Feedback'], offers: [], specs: { 'Storage': '1TB SSD', 'Edition': 'Disc' }
    },
    {
        id: 'feat-8', name: 'GoPro Hero 12', price: 39990, originalPrice: 45000,
        slug: 'gopro-hero-12', category: 'Camera', images: ['https://images.unsplash.com/photo-1592155931558-515f2d527011?auto=format&fit=crop&w=800&q=80'], description: 'Capture everything.', stock: 8, createdAt: new Date(), updatedAt: new Date(), rating: 4.7, reviewsCount: 78, brand: 'GOPRO',
        keyFeatures: ['5.3K Video', 'HyperSmooth 6.0', 'HDR Photo + Video'], offers: ['Free SD Card'], specs: { 'Waterproof': '10m', 'Battery': 'Enduro' }
    },
    {
        id: 'cooler-7', name: 'Honeywell Desert Cooler', description: 'Powerful airflow for large living spaces.', price: 14990, slug: 'honeywell-desert-cooler', images: ['https://images.unsplash.com/photo-1614631446505-b0aa00640f0c?auto=format&fit=crop&w=600&q=80'], category: 'Cooler', stock: 100, createdAt: new Date(), updatedAt: new Date(), brand: 'HONEYWELL',
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
