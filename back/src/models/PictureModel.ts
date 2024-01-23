import mongoose, { model } from 'mongoose';

export type Picture = {
    url: string;
    alt: string;
};

const pictureSchema = new mongoose.Schema<Picture>({
    url: { type: String, required: true },
    alt: { type: String, required: true },
});

export const Picture = model<Picture>('Picture', pictureSchema);
