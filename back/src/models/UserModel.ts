import mongoose, { Types, model, Schema } from 'mongoose';

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
    defaultAddress: Types.ObjectId;
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
    defaultAddress: { type: Schema.Types.ObjectId },
});

export const User = model<User>('User', userSchema);
