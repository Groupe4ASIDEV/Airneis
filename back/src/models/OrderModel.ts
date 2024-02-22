import mongoose, { model, Types, Schema } from 'mongoose';
import { Address } from './AddressModel';

export enum StateEnum {
    Preparation = 'PREPARATION',
    Shipping = 'SHIPPING',
    Delivered = 'DELIVERED',
}

export type Item = {
    item: Types.ObjectId;
    quantity: number;
};

const itemSchema = new mongoose.Schema<Item>({
    item: { type: Schema.Types.ObjectId },
    quantity: { type: Number, required: true },
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
        default: StateEnum.Preparation,
    },
    items: { type: [itemSchema], required: true },
    total: { type: Number, required: true },
    vat: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
    deletedAt: { type: Date },
});

export const Order = model<Order>('Order', orderSchema);
