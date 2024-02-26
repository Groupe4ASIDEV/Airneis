import Koa from 'koa';
import Response from '../helpers/Response';
import { Order } from '../models/OrderModel';

export default {
    getAll: async (context: Koa.Context) => {
        const orders = await Order.find();

        if (orders.length == 0) {
            return Response.resourceNotFound(context, 'NO_ORDER_FOUND');
        }

        return Response.success(context, orders);
    },
    getAllByUser: async (context: Koa.Context) => {
        const body = context.request.body;
        const { userId } = body;

        if (!userId) {
            return Response.badRequest(context, 'INVALID_ID');
        }

        const orders = await Order.find({ user: userId });

        if (orders.length == 0) {
            return Response.resourceNotFound(context, 'NO_ORDER_FOUND');
        }
        return Response.success(context, orders);
    },
    getOneById: async (context: Koa.Context) => {
        const id = context.params.id;

        if (!id) {
            return Response.badRequest(context, 'INVALID_ID');
        }

        const order = await Order.findById(id);

        if (!order) {
            return Response.resourceNotFound(context, 'ORDER_NOT_FOUND');
        }

        return Response.success(context, order);
    },
    create: async (context: Koa.Context) => {
        const body = context.request.body;
        const { user, shippingAddress, billingAddress, items, total, vat } =
            body;

        if (
            !user ||
            !shippingAddress ||
            !billingAddress ||
            !items ||
            !total ||
            !vat
        ) {
            return Response.badRequest(context, 'MISSING_INFORMATION');
        }

        const order = new Order({
            user,
            shippingAddress,
            billingAddress,
            items,
            total,
            vat,
        });

        await order.save();

        return Response.success(context, order);
    },
    update: async (context: Koa.Context) => {
        const id = context.params.id;
        const body = context.request.body;
        const {
            user,
            shippingAddress,
            billingAddress,
            state,
            items,
            total,
            vat,
        } = body;
        const allowedUpdates = {
            user,
            shippingAddress,
            billingAddress,
            state,
            items,
            total,
            vat,
        };

        if (!id) {
            return Response.badRequest(context, 'INVALID_ID');
        }

        const order = await Order.findByIdAndUpdate(id, allowedUpdates, {
            new: true,
        });

        if (!order) {
            return Response.resourceNotFound(context, 'ORDER_NOT_FOUND');
        }

        return Response.success(context, order);
    },
    delete: async (context: Koa.Context) => {
        const id = context.params.id;

        if (!id) {
            return Response.badRequest(context, 'INVALID_ID');
        }

        const order = await Order.findById(id);

        if (!order) {
            return Response.resourceNotFound(context, 'ORDER_NOT_FOUND');
        }

        await order.deleteOne({ _id: id });

        return Response.success(context);
    },
    deleteMany: async (context: Koa.Context) => {
        const body = context.request.body;
        const ids = body.ids;

        if (!ids || !Array.isArray(ids) || ids.length === 0) {
            return Response.badRequest(context, 'INVALID_IDS');
        }

        const orders = await Order.find({ _id: { $in: ids } });

        if (orders.length !== ids.length) {
            return Response.resourceNotFound(context, 'SOME_ORDERS_NOT_FOUND');
        }

        await Order.deleteMany({ _id: { $in: ids } });

        return Response.success(context);
    },
};
