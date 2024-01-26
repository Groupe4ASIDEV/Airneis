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
            return Response.badRequest(context);
        }

        if (!Object.values(DataEnum).includes(type)) {
            return Response.badRequest(context, 'INVALID_TYPE');
        }

        const featuredItem = new FeaturedItem({
            type,
            items,
        });

        await featuredItem.save();

        return Response.success(context, featuredItem);
    },
};
