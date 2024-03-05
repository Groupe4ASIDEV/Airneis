import mongoose, { model, Types, Schema } from 'mongoose';

export type Product = {
    label: string;
    description: string;
    price: number;
    stock: number;
    isPriority : boolean;
    categories: Types.ObjectId[];
    materials: Types.ObjectId[];
    pictures: Types.ObjectId[];
};

const productSchema = new mongoose.Schema<Product>({
    label: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    isPriority: { type: Boolean, required: true },
    categories: { type: [Types.ObjectId] },
    materials: { type: [Types.ObjectId] },
    pictures: { type: [Types.ObjectId] },
});

export const Product = model<Product>('Product', productSchema);
