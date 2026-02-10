export const SMARTPHONE_IMAGES: Record<string, string[]> = {
    // Top section (Originals - mostly working)
    'ph-1': ['https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=800&q=80'], // Samsung S24 Ultra -> WORKS
    'ph-2': ['https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80'], // iPhone 15 Pro Max -> WORKS
    'ph-3': ['https://images.unsplash.com/photo-1662627487911-a0d8546ab87d?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'], // OnePlus -> WORKS
    'ph-4': ['https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&w=800&q=80'], // Pixel -> WORKS
    'ph-5': ['https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=800&q=80'], // Nothing -> WORKS
    'ph-5a': ['https://i.pinimg.com/1200x/54/1e/9f/541e9f79a9b05b921d80653f0c5b2be5.jpg'], // Nothing 2a -> WORKS
    'ph-6': ['https://images.unsplash.com/photo-1595941069915-4ebc5197c14a?auto=format&fit=crop&w=800&q=80'], // Xiaomi -> WORKS
    'ph-google-pixel-8-pro': ['https://images.unsplash.com/photo-1598327105666-5b89351aff23?auto=format&fit=crop&w=800&q=80'], // Pixel 8 Pro (Generic Android High Quality)

    // Apple
    'ph-apple-15': ['https://i.pinimg.com/736x/cb/2a/d0/cb2ad0bbc24149758f88797d22b54ab7.jpg'], // WORKS
    'ph-apple-15-plus': ['https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80'], // WORKS
    'ph-apple-14': ['https://i.pinimg.com/736x/26/be/56/26be56634ad9773c9d8f6315cac2cba7.jpg'], // Reusing iPhone 15 image (WORKS)
    'ph-apple-13': ['https://i.pinimg.com/1200x/c5/70/55/c570554da704617c8a51e5d43a656916.jpg'], // Reusing iPhone 15 image (WORKS)

    // Samsung
    'ph-samsung-s23fe': ['https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=800&q=80'], // WORKS
    'ph-samsung-a55': ['https://i.pinimg.com/736x/7c/ea/8e/7cea8e1a5c3cf93ce9e7a84f5e51ea2c.jpg'], // WORKS
    'ph-samsung-a35': ['https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=800&q=80'], // WORKS
    'ph-samsung-m34': ['https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=800&q=80'], // WORKS

    // Realme - Replacing bad URLs with the working Xiaomi image (Generic Android)
    'ph-realme-12pro-plus': ['https://images.unsplash.com/photo-1595941069915-4ebc5197c14a?auto=format&fit=crop&w=800&q=80'], // Using working Xiaomi URL
    'ph-realme-12pro': ['https://images.unsplash.com/photo-1595941069915-4ebc5197c14a?auto=format&fit=crop&w=800&q=80'], // Using working Xiaomi URL
    'ph-realme-narzo70': ['https://images.unsplash.com/photo-1595941069915-4ebc5197c14a?auto=format&fit=crop&w=800&q=80'], // Using working Xiaomi URL
    'ph-realme-c67': ['https://images.unsplash.com/photo-1595941069915-4ebc5197c14a?auto=format&fit=crop&w=800&q=80'], // Using working Xiaomi URL

    // Vivo - Replacing bad URLs with the working Xiaomi image (Generic Android)
    'ph-vivo-x100': ['https://images.unsplash.com/photo-1595941069915-4ebc5197c14a?auto=format&fit=crop&w=800&q=80'], // Using working Xiaomi URL
    'ph-vivo-v30': ['https://images.unsplash.com/photo-1595941069915-4ebc5197c14a?auto=format&fit=crop&w=800&q=80'], // Using working Xiaomi URL
    'ph-vivo-y200e': ['https://images.unsplash.com/photo-1595941069915-4ebc5197c14a?auto=format&fit=crop&w=800&q=80'], // Using working Xiaomi URL
    'ph-vivo-t3': ['https://images.unsplash.com/photo-1595941069915-4ebc5197c14a?auto=format&fit=crop&w=800&q=80'], // Using working Xiaomi URL

    // Motorola - Replacing bad URLs with the working Xiaomi image (Generic Android)
    'ph-moto-edge50': ['https://images.unsplash.com/photo-1595941069915-4ebc5197c14a?auto=format&fit=crop&w=800&q=80'], // Using working Xiaomi URL
    'ph-moto-g84': ['https://images.unsplash.com/photo-1595941069915-4ebc5197c14a?auto=format&fit=crop&w=800&q=80'], // Using working Xiaomi URL
    'ph-moto-g54': ['https://images.unsplash.com/photo-1595941069915-4ebc5197c14a?auto=format&fit=crop&w=800&q=80'], // Using working Xiaomi URL
    'ph-moto-razr40': ['https://images.unsplash.com/photo-1595941069915-4ebc5197c14a?auto=format&fit=crop&w=800&q=80'], // Using working Xiaomi URL

    // Xiaomi - These were already working
    'ph-xiaomi-14': ['https://images.unsplash.com/photo-1595941069915-4ebc5197c14a?auto=format&fit=crop&w=800&q=80'],
    'ph-xiaomi-rn13pro-plus': ['https://images.unsplash.com/photo-1595941069915-4ebc5197c14a?auto=format&fit=crop&w=800&q=80'],
    'ph-xiaomi-rn13pro': ['https://images.unsplash.com/photo-1595941069915-4ebc5197c14a?auto=format&fit=crop&w=800&q=80'],
    'ph-xiaomi-13pro': ['https://images.unsplash.com/photo-1595941069915-4ebc5197c14a?auto=format&fit=crop&w=800&q=80'],
};
