import Koa from 'koa';
import Response from '../helpers/Response';
import { User } from '../models/UserModel';

export default {
    getAll: async (context: Koa.Context) => {
        const users = await User.getAll();
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
        const user = await User.getOneById(id);
        if (!user) {
            return Response.resourceNotFound(context, 'USER_NOT_FOUND');
        }
        return Response.success(context, user);
    },
    create: async (context: Koa.Context) => {
        const body = context.request.body;
        const fullName = body.fullName;
        const email = body.email;
        const password = body.password;
        const admin = body.admin;
        const validate = body.validated;

        if (!email || !password) {
            return Response.badRequest(context);
        }

        const user = new User({
            fullName: fullName,
            email: email,
            password: password,
            admin: admin,
            validate: validate,
        });
        await user.save();

        return Response.success(context, user);
    },
    update: async (context: Koa.Context) => {
        return Response.success(context, 'update is working');
    },
    delete: async (context: Koa.Context) => {
        const id = context.params.id;
        if (!id) {
            return Response.badRequest(context, 'INVALID_ID');
        }
        const user = await User.getOneById(id);
        if (!user) {
            return Response.resourceNotFound(context, 'USER_NOT_FOUND');
        }
        await User.deleteOne({ _id: id });
        return Response.success(context, 'USER_DELETED');
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
        return Response.success(context, `${ids.length}_USERS_DELETED`);
    },
};
