import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function POST(request: Request) {
    try {
        if (!process.env.RAZORPAY_API_KEY || !process.env.RAZORPAY_LIVE_SECRET_KEY) {
            console.error("Razorpay keys are missing");
            return NextResponse.json({ error: 'Server configuration error: Razorpay keys missing' }, { status: 500 });
        }

        const { amount, currency = 'INR' } = await request.json();

        // 1. Initialize Razorpay
        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_API_KEY,
            key_secret: process.env.RAZORPAY_LIVE_SECRET_KEY,
        });

        // 2. Validate amount
        if (!amount || amount <= 0) {
            return NextResponse.json({ error: 'Invalid amount' }, { status: 400 });
        }

        const options = {
            amount: Math.round(amount * 100), // amount in smallest currency unit (paise)
            currency,
            receipt: `receipt_${Date.now()}`,
        };

        const order = await instance.orders.create(options);

        if (!order) {
            throw new Error("Razorpay returned null order");
        }

        return NextResponse.json(order);
    } catch (error: any) { // Type as any for error object access
        console.error('Error creating Razorpay order:', error);

        // Return clearer error to client
        const errorMessage = error.message || 'Error creating order';
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
