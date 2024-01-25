import mongoose, { model, Types } from 'mongoose';

export type Category = {
    label: string;
    description: string;
    pictures: Types.ObjectId[];
};

const categorySchema = new mongoose.Schema<Category>({
    label: { type: String, required: true },
    description: { type: String, required: true },
    pictures: [
        {
            type: Types.ObjectId,
            ref: 'Picture',
            default: [new Types.ObjectId('65ae6ebe1628cad26ad03d15')],
        },
    ],
});

export const Category = model<Category>('Category', categorySchema);
