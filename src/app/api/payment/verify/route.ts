import { NextResponse } from 'next/server';
import crypto from 'crypto';
import dbConnect from '@/lib/db';
import Order from '@/models/Order';

export async function POST(request: Request) {
    try {
        await dbConnect();

        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
            customerDetails,
            items,
            amount,
        } = await request.json();

        const body = razorpay_order_id + '|' + razorpay_payment_id;

        const expectedSignature = crypto
            .createHmac('sha256', process.env.RAZORPAY_LIVE_SECRET_KEY!)
            .update(body.toString())
            .digest('hex');

        const isAuthentic = expectedSignature === razorpay_signature;

        if (isAuthentic) {
            // Save order to database
            const order = await Order.create({
                customerDetails,
                items,
                amount,
                razorpayOrderId: razorpay_order_id,
                razorpayPaymentId: razorpay_payment_id,
                razorpaySignature: razorpay_signature,
                paymentStatus: 'paid',
            });

            return NextResponse.json({
                message: 'Payment verified and order created',
                orderId: order._id,
            });
        } else {
            return NextResponse.json(
                { message: 'Invalid signature' },
                { status: 400 }
            );
        }
    } catch (error) {
        console.error('Error verifying payment:', error);
        return NextResponse.json(
            { message: 'Error verifying payment' },
            { status: 500 }
        );
    }
}
