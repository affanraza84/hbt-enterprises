import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IOrder extends Document {
    customerDetails: {
        email?: string;
        phone: string;
        firstName: string;
        lastName: string;
        address: string;
        city: string;
        state: string;
        pincode: string;
    };
    items: {
        productId: string;
        name: string;
        price: number;
        quantity: number;
        image?: string;
    }[];
    amount: number;
    currency: string;
    paymentStatus: 'pending' | 'paid' | 'failed';
    razorpayOrderId: string;
    razorpayPaymentId?: string;
    razorpaySignature?: string;
    createdAt: Date;
    updatedAt: Date;
}

const OrderSchema: Schema = new Schema(
    {
        customerDetails: {
            email: { type: String, required: false },
            phone: { type: String, required: true },
            firstName: { type: String, required: true },
            lastName: { type: String, required: true },
            address: { type: String, required: true },
            city: { type: String, required: true },
            state: { type: String, required: true },
            pincode: { type: String, required: true },
        },
        items: [
            {
                productId: { type: String, required: true },
                name: { type: String, required: true },
                price: { type: Number, required: true },
                quantity: { type: Number, required: true },
                image: { type: String },
            }
        ],
        amount: { type: Number, required: true }, // Total amount
        currency: { type: String, default: 'INR' },
        paymentStatus: {
            type: String,
            enum: ['pending', 'paid', 'failed'],
            default: 'pending',
        },
        razorpayOrderId: { type: String, required: true },
        razorpayPaymentId: { type: String },
        razorpaySignature: { type: String },
    },
    { timestamps: true }
);

// Prevent model overwrite during hot reload
const Order: Model<IOrder> = mongoose.models.Order || mongoose.model<IOrder>('Order', OrderSchema);

export default Order;
