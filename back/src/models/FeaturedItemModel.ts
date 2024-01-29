import mongoose, { Model, Schema, Types, model } from 'mongoose';

export enum DataEnum {
    Carousel = 'CAROUSEL',
    CategoryList = 'CATEGORY_LIST',
    ProductList = 'PRODUCT_LIST',
}

export type FeaturedItem = {
    type: string;
    items: Types.ObjectId[];
};

export type FeaturedItemStatic = Model<FeaturedItem> & {
    validateItems(type: string, items: Types.ObjectId[]): Promise<boolean>;
};

const FeaturedItemSchema = new mongoose.Schema<FeaturedItem>({
    type: { type: String, required: true, enum: Object.values(DataEnum) },
    items: {
        type: [Schema.Types.ObjectId],
        required: true,
    },
});

FeaturedItemSchema.statics = {
    async validateItems(type: string, items: Types.ObjectId[]) {
        if (type === DataEnum.Carousel || type === DataEnum.CategoryList) {
            return items.length <= 3;
        } else if (type === DataEnum.ProductList) {
            return items.length <= 9;
        }
    },
};

export const FeaturedItem = model<FeaturedItem, FeaturedItemStatic>(
    'FeaturedItem',
    FeaturedItemSchema
);
