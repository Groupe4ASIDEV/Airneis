import mongoose, {model} from 'mongoose';

export type Material = {
    label: string;
    description: string;
};

const materialSchema = new mongoose.Schema<Material>({
    label: { type: String, required: true },
    description: { type: String, required: true },
});

export const Material = model<Material>('Material', materialSchema);