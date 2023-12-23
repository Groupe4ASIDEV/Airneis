import mongoose, { Model, model } from 'mongoose';

export type Product = {
    label: string;
    description: string;
    price: number;
    stock: number;
};

const userSchema = new mongoose.Schema<Product>({
    label: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true }
});

export const Product = model<Product>('Product', userSchema);
