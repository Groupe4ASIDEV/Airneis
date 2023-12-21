import Koa from 'koa';
import { User } from '../models/UserModel';
import Response from '../helpers/Response';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const secret = process.env.SECRET_KEY;
const env = process.env.NODE_ENV;

export default {
    signUp: async (context: Koa.Context) => {
        const body = context.request.body;
        const fullName = body.fullName;
        const email = body.email;
        const password = body.password;

        try {
            const hashedPassword = await bcrypt.hash(password, 12);
            const user = new User({
                fullName: fullName,
                email: email,
                password: hashedPassword,
            });

            await user.save();

            return Response.success(context, 'ACCOUNT_CREATED');
        } catch {
            return Response.error(context, 'COULD_NOT_REACH_SERVER');
        }
    },
    signIn: async (context: Koa.Context) => {
        const body = context.request.body;
        const email = body.email;
        const password = body.password;

        try {
            const user = await User.findOne({ email: email });
            if (!user) {
                return Response.resourceNotFound(context, 'USER_NOT_FOUND');
            }
            const validPassword = await bcrypt.compare(password, user.password);
            if (!validPassword) {
                return Response.badRequest(context, 'WRONG_PASSWORD');
            }

            if (!secret) {
                throw new Error('SECRET_KEY_NOT_FOUND');
            }
            const token = jwt.sign({ id: user.id }, secret, {
                expiresIn: '24h',
            });
            context.cookies.set('jwt', token, {
                httpOnly: env === 'production',
                secure: env === 'production',
                maxAge: 24 * 60 * 60 * 1000,
                sameSite: env === 'production' ? 'none' : 'lax',
            });

            return Response.success(context, 'USER_CONNECTED');
        } catch {
            return Response.error(context, 'COULD_NOT_REACH_SERVER');
        }
    },
    signOut: async (context: Koa.Context) => {
        context.cookies.set('jwt', null, {
            httpOnly: env === 'production',
            secure: env === 'production',
            maxAge: 0,
        });

        return Response.success(context, 'USER_DISCONNECTED');
    },
};
