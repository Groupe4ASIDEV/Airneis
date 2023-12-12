import mongoose, { model } from 'mongoose';

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
};

const userSchema = new mongoose.Schema<User>({
    fullName: { type: String },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    password: { type: String, required: true },
    admin: { type: Boolean, required: true, default: false },
    validated: { type: Boolean, required: true, default: false },
    createdAt: { type: Date, default: Date.now },
    deletedAt: { type: Date },
    updatedAt: { type: Date },
});

export const User = model<User>('User', userSchema);
