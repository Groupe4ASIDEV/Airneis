import mongoose, { Schema, Types, model } from 'mongoose';

export enum DataEnum {
    Carousel = 'CAROUSEL',
    CategoryList = 'CATEGORY_LIST',
    ProductList = 'PRODUCT_LIST',
}

export type FeaturedItem = {
    type: string;
    items: Types.ObjectId[];
};

const FeaturedItemSchema = new mongoose.Schema<FeaturedItem>({
    type: { type: String, required: true, enum: Object.values(DataEnum) },
    items: {
        type: [Schema.Types.ObjectId],
        required: true,
        validate: {
            validator: function (v: Types.ObjectId[]) {
                return validateItems(this, v);
            },
            message: () =>
                `Nombre d'items non autorisé pour le type sélectionné`,
        },
    },
});

function validateItems(doc: any, items: Types.ObjectId[]) {
    if (doc.type === DataEnum.Carousel || doc.type === DataEnum.CategoryList) {
        return items.length <= 3;
    } else if (doc.type === DataEnum.ProductList) {
        return items.length <= 9;
    }
    return true;
}

export const FeaturedItem = model<FeaturedItem>(
    'FeaturedItem',
    FeaturedItemSchema
);
