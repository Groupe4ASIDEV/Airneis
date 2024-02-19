import Koa from 'koa';
import Response from '../helpers/Response';
import { Category } from '../models/CategoryModel';

export default {
    getAll: async (context: Koa.Context) => {
        const categories = await Category.find();

        if (categories.length === 0) {
            return Response.resourceNotFound(context, 'NO_CATEGORY_FOUND');
        }

        return Response.success(context, categories);
    },

    getOneById: async (context: Koa.Context) => {
        const body = context.request.body;
        const id = body.id;

        if (!id) {
            return Response.badRequest(context, 'INVALID_ID');
        }

        const category = await Category.findById(id);

        if (!category) {
            return Response.resourceNotFound(context, 'CATEGORY_NOT_FOUND');
        }

        return Response.success(context, category);
    },

    create: async (context: Koa.Context) => {
        const body = context.request.body;
        const { label, description, picture } = body;

        if (!label || !description) {
            return Response.badRequest(context);
        }

        const category = new Category({
            label,
            description,
            picture,
        });

        await category.save();

        return Response.success(context, category);
    },

    update: async (context: Koa.Context) => {
        const id = context.params.id;
        const body = context.request.body;
        const allowedUpdates = {
            name: body.name,
            description: body.description,
            picture: body.picture,
        };

        if (!id) {
            return Response.badRequest(context, 'INVALID_ID');
        }

        const category = await Category.findByIdAndUpdate(id, allowedUpdates, {
            new: true,
        });

        if (!category) {
            return Response.resourceNotFound(context, 'CATEGORY_NOT_FOUND');
        }

        return Response.success(context, category);
    },

    delete: async (context: Koa.Context) => {
        const id = context.params.id;

        if (!id) {
            return Response.badRequest(context, 'INVALID_ID');
        }

        const category = await Category.findById(id);

        if (!category) {
            return Response.resourceNotFound(context, 'CATEGORY_NOT_FOUND');
        }

        await Category.deleteOne({ _id: id });

        return Response.success(context, 'CATEGORY_DELETED');
    },

    deleteMany: async (context: Koa.Context) => {
        const body = context.request.body;
        const ids = body.ids;

        if (!ids || !Array.isArray(ids) || ids.length === 0) {
            return Response.badRequest(context, 'INVALID_IDS');
        }

        const categories = await Category.find({ _id: { $in: ids } });

        if (categories.length !== ids.length) {
            return Response.resourceNotFound(
                context,
                'SOME_CATEGORIES_NOT_FOUND'
            );
        }

        await Category.deleteMany({ _id: { $in: ids } });

        return Response.success(context, `${ids.length}_CATEGORIES_DELETED`);
    },
};
