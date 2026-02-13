"use server";

import dbConnect from "@/lib/db";
import User from "@/models/User";
import { auth } from "@clerk/nextjs/server";

export async function getUserProfile() {
    const { userId } = await auth();
    if (!userId) return null;

    try {
        await dbConnect();
        const user = await User.findOne({ clerkId: userId }).lean();

        if (!user) return null;

        // Convert _id to string to be serializable
        return {
            ...user,
            _id: user._id.toString(),
            createdAt: user.createdAt?.toISOString(),
            updatedAt: user.updatedAt?.toISOString(),
        };
    } catch (error) {
        console.error("Failed to fetch user profile:", error);
        return null;
    }
}
