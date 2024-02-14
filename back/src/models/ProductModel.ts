import mongoose, { model, Types, Schema } from 'mongoose';

export type Product = {
    label: string;
    description: string;
    price: number;
    stock: number;
    categories: Types.ObjectId[];
    materials: Types.ObjectId[];
    pictures: Types.ObjectId[];
};

const productSchema = new mongoose.Schema<Product>({
    label: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    categories: { type: [Types.ObjectId] },
    materials: { type: [Types.ObjectId] },
    pictures: { type: [Types.ObjectId] },
});

export const Product = model<Product>('Product', productSchema);
