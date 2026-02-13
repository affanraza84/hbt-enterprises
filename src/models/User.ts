import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IUser extends Document {
    clerkId: string;
    email?: string;
    phone: string;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema: Schema = new Schema(
    {
        clerkId: { type: String, required: true, unique: true },
        email: { type: String, required: false },
        phone: { type: String, required: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        address: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        pincode: { type: String, required: true },
    },
    { timestamps: true }
);

// Prevent model overwrite during hot reload
const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
