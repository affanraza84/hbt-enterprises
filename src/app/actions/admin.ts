"use server";

import dbConnect from "@/lib/db";
import Order from "@/models/Order";
import User from "@/models/User";

const ADMIN_ACCESS_CODE = process.env.ADMIN_ACCESS_CODE;

export async function verifyAdmin(code: string) {
    if (!ADMIN_ACCESS_CODE) {
        console.error("ADMIN_ACCESS_CODE is not set in environment variables.");
        return false;
    }
    return code === ADMIN_ACCESS_CODE;
}

export async function getAdminData(code: string) {
    if (code !== ADMIN_ACCESS_CODE) {
        throw new Error("Unauthorized");
    }

    try {
        console.log("Connecting to DB...");
        await dbConnect();

        // Calculate Stats efficiently via DB aggregation
        const totalOrders = await Order.countDocuments();
        const totalUsers = await User.countDocuments();
        const revenueAggregation = await Order.aggregate([
            { $match: { paymentStatus: 'paid' } },
            { $group: { _id: null, totalRevenue: { $sum: "$amount" } } }
        ]);
        const totalRevenue = revenueAggregation.length > 0 ? revenueAggregation[0].totalRevenue : 0;

        // Fetch all Orders
        console.log("Fetching Orders...");
        const orders = await Order.find({}).sort({ createdAt: -1 }).lean();
        console.log(`Fetched ${orders.length} orders`);

        // Fetch all Users
        console.log("Fetching Users...");
        const users = await User.find({}).sort({ createdAt: -1 }).lean();
        console.log(`Fetched ${users.length} users`);

        // Serialize data (convert _id and dates to strings)
        const serializedOrders = orders.map(order => ({
            ...order,
            ...{ amount: order.amount || 0 }, // fallback gracefully
            _id: order._id.toString(),
            createdAt: order.createdAt?.toISOString(),
            updatedAt: order.updatedAt?.toISOString(),
            // Ensure fields are present
            customerDetails: order.customerDetails || {},
            items: (order.items || []).map((item: any) => ({
                ...item,
                _id: item._id ? item._id.toString() : undefined
            })),
        }));

        const serializedUsers = users.map(user => ({
            ...user,
            _id: user._id.toString(),
            createdAt: user.createdAt?.toISOString(),
            updatedAt: user.updatedAt?.toISOString(),
        }));

        return {
            stats: {
                totalOrders,
                totalUsers,
                totalRevenue
            },
            orders: serializedOrders,
            users: serializedUsers
        };

    } catch (error: any) {
        console.error("Failed to fetch admin data:", error);

        // Granular error checking
        if (error.message.includes("buffering timed out")) {
            throw new Error("Database connection timed out. Please check MONGODB_URI.");
        }

        // Return the actual error message for debugging
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        throw new Error(`Failed to fetch data: ${errorMessage}`);
    }
}
