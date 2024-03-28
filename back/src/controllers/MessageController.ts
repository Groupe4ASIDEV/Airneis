    import Koa from 'koa';
    import Response from '../helpers/Response';
    import { Message } from '../models/MessageModel';

    export default {
        getAll: async (context: Koa.Context) => {
            const messages = await Message.find();

            if (messages.length == 0) {
                return Response.resourceNotFound(context, 'NO_MESSAGE_FOUND');
            }

            return Response.success(context, messages);
        },
        getOneById: async (context: Koa.Context) => {
            const body = context.request.body;
            const id = body.id;

            if (!id) {
                return Response.badRequest(context, 'INVALID_ID');
            }

            const message = await Message.findById(id);

            if (!message) {
                return Response.resourceNotFound(context, 'MESSAGE_NOT_FOUND');
            }

            return Response.success(context, message);
        },
        create: async (context: Koa.Context) => {
            const body = context.request.body;
            const { email, title, description } =
                body;

            const message = new Message({
                email,
                title,
                description
            });

            await message.save();

            return Response.success(context, message);
        },
        update: async (context: Koa.Context) => {
            const id = context.params.id;
            const updateData = context.request.body;
            const  { email, title, description } =
                updateData;
            const allowedUpdates = {
                email,
                title,
                description
            };

            if (!id) {
                return Response.badRequest(context, 'INVALID_ID');
            }

            const message = await Message.findByIdAndUpdate(id, allowedUpdates, {
                new: true,
            });

            if (!message) {
                return Response.resourceNotFound(context, 'MESSAGE_NOT_FOUND');
            }

            return Response.success(context, message);
        },
        delete: async (context: Koa.Context) => {
            const id = context.params.id;

            if (!id) {
                return Response.badRequest(context, 'INVALID_ID');
            }

            const message = await Message.findById(id);

            if (!message) {
                return Response.resourceNotFound(context, 'MESSAGE_NOT_FOUND');
            }

            await Message.deleteOne({ _id: id });

            return Response.success(context);
        },
        deleteMany: async (context: Koa.Context) => {
            const body = context.request.body;
            const ids = body.ids;
    
            if (!ids || !Array.isArray(ids) || ids.length === 0) {
                return Response.badRequest(context, 'INVALID_IDS');
            }

            const messages = await Message.find({ _id: { $in: ids } });

            if (messages.length !== ids.length) {
                return Response.resourceNotFound(context, 'SOME_MESSAGES_NOT_FOUND');
            }

            await Message.deleteMany({ _id: { $in: ids } });

            return Response.success(context);
        },
    };
