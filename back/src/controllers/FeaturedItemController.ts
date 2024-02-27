import Koa from 'koa';
import Response from '../helpers/Response';
import { DataEnum, FeaturedItem } from '../models/FeaturedItemModel';

export default {
    getAll: async (context: Koa.Context) => {
        const featuredItems = await FeaturedItem.find();

        if (featuredItems.length === 0) {
            return Response.resourceNotFound(context, 'NO_FEATURED_ITEM_FOUND');
        }

        return Response.success(context, featuredItems);
    },
    getOneById: async (context: Koa.Context) => {
        const body = context.request.body;
        const id = body.id;

        if (!id) {
            return Response.badRequest(context, 'INVALID_ID');
        }

        const featuredItem = await FeaturedItem.findById(id);

        if (!featuredItem) {
            return Response.resourceNotFound(
                context,
                'FEATURED_ITEM_NOT_FOUND'
            );
        }

        return Response.success(context, featuredItem);
    },
    create: async (context: Koa.Context) => {
        const body = context.request.body;
        const { type, items } = body;

        if (!type || !items) {
            return Response.badRequest(context, 'MISSING_TYPE_OR_ITEM(S)');
        }

        if (!Object.values(DataEnum).includes(type)) {
            return Response.badRequest(context, 'INVALID_TYPE');
        }

        const isValid = await FeaturedItem.validateItems(type, items);
        if (!isValid) {
            return Response.badRequest(context, 'TOO_MANY_ITEMS_FOR_THIS_TYPE');
        }

        const featuredItem = new FeaturedItem({
            type,
            items,
        });

        await featuredItem.save();

        return Response.success(context, featuredItem);
    },
    update: async (context: Koa.Context) => {
        const id = context.params.id;
        const body = context.request.body;
        const allowedUpdates = {
            type: body.type,
            items: body.items,
        };

        if (!id) {
            return Response.badRequest(context, 'INVALID_ID');
        }

        const isValid = await FeaturedItem.validateItems(
            allowedUpdates.type,
            allowedUpdates.items
        );
        if (!isValid) {
            return Response.badRequest(context, 'TOO_MANY_ITEMS_FOR_THIS_TYPE');
        }

        const featuredItem = await FeaturedItem.findByIdAndUpdate(
            id,
            allowedUpdates,
            {
                new: true,
            }
        );

        if (!featuredItem) {
            return Response.resourceNotFound(
                context,
                'FEATURED_ITEMS_NOT_FOUND'
            );
        }

        return Response.success(context, featuredItem);
    },
    delete: async (context: Koa.Context) => {
        const id = context.params.id;

        if (!id) {
            return Response.badRequest(context, 'INVALID_ID');
        }

        const featuredItem = await FeaturedItem.findById(id);

        if (!featuredItem) {
            return Response.resourceNotFound(
                context,
                'FEATURED_ITEMS_NOT_FOUND'
            );
        }

        await FeaturedItem.deleteOne({ _id: id });

        return Response.success(context);
    },
    deleteMany: async (context: Koa.Context) => {
        const body = context.request.body;
        const ids = body.ids;

        if (!ids || !Array.isArray(ids) || ids.length === 0) {
            return Response.badRequest(context, 'INVALID_IDS');
        }

        const featuredItems = await FeaturedItem.find({ _id: { $in: ids } });

        if (featuredItems.length !== ids.length) {
            return Response.resourceNotFound(
                context,
                'SOME_CATEGORIES_NOT_FOUND'
            );
        }

        await FeaturedItem.deleteMany({ _id: { $in: ids } });

        return Response.success(
            context,
            `${ids.length}_FEATURED_ITEMS_DELETED`
        );
    },
};
