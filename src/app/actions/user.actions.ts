"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";

export async function syncCartToClerk(cartItems: { productId: string; quantity: number }[]) {
    const { userId } = await auth();
    if (!userId) return { success: false, message: "Unauthorized" };

    try {
        const client = await clerkClient();
        await client.users.updateUserMetadata(userId, {
            unsafeMetadata: {
                cart: cartItems,
            },
        });
        return { success: true };
    } catch (error) {
        console.error("[Clerk] Failed to sync cart:", error);
        return { success: false, message: "Failed to sync cart" };
    }
}

export async function syncWishlistToClerk(productIds: string[]) {
    const { userId } = await auth();
    if (!userId) return { success: false, message: "Unauthorized" };

    try {
        const client = await clerkClient();
        await client.users.updateUserMetadata(userId, {
            unsafeMetadata: {
                wishlist: productIds,
            },
        });
        return { success: true };
    } catch (error) {
        console.error("[Clerk] Failed to sync wishlist:", error);
        return { success: false, message: "Failed to sync wishlist" };
    }
}
