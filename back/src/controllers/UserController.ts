import Koa from 'koa';
import Response from '../helpers/Response';
import { User } from '../models/UserModel';

export default {
    getAll: async (context: Koa.Context) => {
        const users = await User.find();

        if (users.length == 0) {
            return Response.resourceNotFound(context, 'NO_USER_FOUND');
        }

        return Response.success(context, users);
    },
    getOneById: async (context: Koa.Context) => {
        const body = context.request.body;
        const id = body.id;

        if (!id) {
            return Response.badRequest(context, 'INVALID_ID');
        }

        const user = await User.findById(id);

        if (!user) {
            return Response.resourceNotFound(context, 'USER_NOT_FOUND');
        }

        return Response.success(context, user);
    },
    create: async (context: Koa.Context) => {
        const body = context.request.body;
        const { fullName, email, password, admin, validate, defaultAddress } =
            body;

        if (!email || !password) {
            return Response.badRequest(context);
        }

        const user = new User({
            fullName,
            email,
            password,
            admin,
            validate,
            defaultAddress,
        });

        await user.save();

        return Response.success(context, user);
    },
    update: async (context: Koa.Context) => {
        const id = context.params.id;
        const updateData = context.request.body;
        const { fullName, email, phone, password, validated, defaultAddress } =
            updateData;
        const allowedUpdates = {
            fullName,
            email,
            phone,
            password,
            validated,
            defaultAddress,
        };

        if (!id) {
            return Response.badRequest(context, 'INVALID_ID');
        }

        const user = await User.findByIdAndUpdate(id, allowedUpdates, {
            new: true,
        });

        if (!user) {
            return Response.resourceNotFound(context, 'USER_NOT_FOUND');
        }

        return Response.success(context, user);
    },
    delete: async (context: Koa.Context) => {
        const id = context.params.id;

        if (!id) {
            return Response.badRequest(context, 'INVALID_ID');
        }

        const user = await User.findById(id);

        if (!user) {
            return Response.resourceNotFound(context, 'USER_NOT_FOUND');
        }

        await User.deleteOne({ _id: id });

        return Response.success(context);
    },
    deleteMany: async (context: Koa.Context) => {
        const body = context.request.body;
        const ids = body.ids;

        if (!ids || !Array.isArray(ids) || ids.length === 0) {
            return Response.badRequest(context, 'INVALID_IDS');
        }

        const users = await User.find({ _id: { $in: ids } });

        if (users.length !== ids.length) {
            return Response.resourceNotFound(context, 'SOME_USERS_NOT_FOUND');
        }

        await User.deleteMany({ _id: { $in: ids } });

        return Response.success(context);
    },
};
