import Koa from 'koa';
import Response from '../helpers/Response';
import { Product } from '../models/ProductModel';

export default {
    getAll: async (context: Koa.Context) => {
        const products = await Product.find();

        if (products.length === 0) {
            return Response.resourceNotFound(context, 'NO_PRODUCT_FOUND');
        }

        return Response.success(context, products);
    },

    getOneById: async (context: Koa.Context) => {
        const id = context.params.id;

        if (!id) {
            return Response.badRequest(context, 'INVALID_ID');
        }

        const product = await Product.findById(id);

        if (!product) {
            return Response.resourceNotFound(context, 'PRODUCT_NOT_FOUND');
        }

        return Response.success(context, product);
    },

    create: async (context: Koa.Context) => {
        const body = context.request.body;
        const { label, description, price, stock, pictures } = body;

        if (!label || !description || !price || !stock) {
            return Response.badRequest(context);
        }

        const product = new Product({
            label,
            description,
            price,
            stock,
            pictures,
        });

        await product.save();

        return Response.success(context, product);
    },

    update: async (context: Koa.Context) => {
        const id = context.params.id;
        const body = context.request.body;
        const { label, description, price, stock, pictures } = body;
        const allowedUpdates = {
            label,
            description,
            price,
            stock,
            pictures,
        };

        if (!id) {
            return Response.badRequest(context, 'INVALID_ID');
        }

        const product = await Product.findByIdAndUpdate(id, allowedUpdates, {
            new: true,
        });

        if (!product) {
            return Response.resourceNotFound(context, 'PRODUCT_NOT_FOUND');
        }

        return Response.success(context, product);
    },

    delete: async (context: Koa.Context) => {
        const id = context.params.id;

        if (!id) {
            return Response.badRequest(context, 'INVALID_ID');
        }

        const product = await Product.findById(id);

        if (!product) {
            return Response.resourceNotFound(context, 'PRODUCT_NOT_FOUND');
        }

        await Product.deleteOne({ _id: id });

        return Response.success(context, 'PRODUCT_DELETED');
    },

    deleteMany: async (context: Koa.Context) => {
        const body = context.request.body;
        const ids = body.ids;

        if (!ids || !Array.isArray(ids) || ids.length === 0) {
            return Response.badRequest(context, 'INVALID_IDS');
        }

        const products = await Product.find({ _id: { $in: ids } });

        if (products.length !== ids.length) {
            return Response.resourceNotFound(
                context,
                'SOME_PRODUCTS_NOT_FOUND'
            );
        }

        await Product.deleteMany({ _id: { $in: ids } });

        return Response.success(context, `${ids.length}_PRODUCTS_DELETED`);
    },
};
