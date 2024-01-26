import mongoose, { model, Types, Schema } from 'mongoose';

export type Category = {
    label: string;
    description: string;
    picture: Types.ObjectId;
};

const categorySchema = new mongoose.Schema<Category>({
    label: { type: String, required: true },
    description: { type: String, required: true },
    picture: { type: Schema.Types.ObjectId },
});

export const Category = model<Category>('Category', categorySchema);
