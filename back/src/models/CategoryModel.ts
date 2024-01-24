import mongoose, {model} from 'mongoose';

export type Category = {
    label: string;
    description: string;
};

const categorySchema = new mongoose.Schema<Category>({
    label: { type: String, required: true },
    description: { type: String, required: true },
});

export const Category = model<Category>('Category', categorySchema);