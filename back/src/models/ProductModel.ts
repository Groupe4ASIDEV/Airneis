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
    categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
    materials: [{ type: Schema.Types.ObjectId, ref: 'Material' }],
    pictures: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Picture',
            default: [new Types.ObjectId('65ae6ebe1628cad26ad03d15')],
        },
    ],
});

export const Product = model<Product>('Product', productSchema);
