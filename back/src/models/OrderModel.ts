import mongoose, { model, Types, Schema } from 'mongoose';
import { Address } from './AddressModel';

export enum StateEnum {
    CheckingOut = 'EN ATTENTE',
    Shipping = 'EN COURS',
    Delivered = 'LIVRÉE',
    Canceled = 'ANNULÉE',
}

export type Item = {
    productId: Types.ObjectId;
    label: string;
    description: string;
    pictures: Types.ObjectId[];
    price: number;
    quantity: number;
    returnedQuantity: number;
};

const itemSchema = new mongoose.Schema<Item>({
    productId: { type: Schema.Types.ObjectId, required: true },
    label: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    pictures: { type: [Types.ObjectId], required: true },
    quantity: { type: Number, required: true },
    returnedQuantity: { type: Number, default: 0 },
});

export type Order = {
    user: Types.ObjectId;
    shippingAddress: Address;
    billingAddress: Address;
    state: string;
    items: Item[];
    total: number;
    vat: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
};

const orderSchema = new mongoose.Schema<Order>({
    user: { type: Schema.Types.ObjectId, required: true },
    shippingAddress: { type: Address.schema, required: true },
    billingAddress: { type: Address.schema, required: true },
    state: {
        type: String,
        enum: Object.values(StateEnum),
        default: StateEnum.CheckingOut,
    },
    items: { type: [itemSchema], required: true },
    total: { type: Number, required: true },
    vat: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
    deletedAt: { type: Date },
});

export const Order = model<Order>('Order', orderSchema);
