import mongoose from 'mongoose';

export type Address = {
    fullName: string;
    street: string;
    city: string;
    zipCode: string;
    state: string;
    country: string;
    furtherInformation: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
};

const addressSchema = new mongoose.Schema<Address>({
    fullName: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    zipCode: { type: String, required: true },
    state: { type: String },
    country: { type: String, required: true },
    furtherInformation: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
    deletedAt: { type: Date },
});

export const Address = mongoose.model<Address>('Address', addressSchema);
