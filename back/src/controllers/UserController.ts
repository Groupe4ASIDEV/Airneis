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
        return Response.success(context, 'getOneById is working');
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
        return Response.success(context, 'delete is working');
    },
};
