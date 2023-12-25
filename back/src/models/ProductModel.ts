import mongoose, {Model, model, Schema} from 'mongoose';
import {ObjectId} from "mongodb";

export type Product = {
    label: string;
    description: string;
    price: number;
    stock: number;
    category: ObjectId;
    material: ObjectId;
    pictures: ObjectId;

};

const userSchema = new mongoose.Schema<Product>({
    label: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true }
});

export const Product = model<Product>('Product', userSchema);
