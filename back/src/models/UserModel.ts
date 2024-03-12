import mongoose, { Types, model, Schema } from 'mongoose';

export type Address = {
    label: string;
    addressId: Types.ObjectId;
};

const addressSchema = new mongoose.Schema<Address>({
    label: { type: String, required: true },
    addressId: { type: Schema.Types.ObjectId, required: true },
});

export type User = {
    fullName: string;
    email: string;
    phone: string;
    password: string;
    admin: boolean;
    validated: boolean;
    createdAt: Date;
    deletedAt: Date;
    updatedAt: Date;
    Addresses: Address[];
};

const userSchema = new mongoose.Schema<User>({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    password: { type: String, required: true },
    admin: { type: Boolean, required: true, default: false },
    validated: { type: Boolean, required: true, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
    deletedAt: { type: Date },
    Addresses: { type: [addressSchema] },
});

export const User = model<User>('User', userSchema);
