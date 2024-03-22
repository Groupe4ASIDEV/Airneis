import Koa from 'koa';
import Stripe from 'stripe';
import Response from '../helpers/Response';

const secretKey = process.env.PAYMENT_SECRET_KEY;

export default {
    createPaymentIntent: async (context: Koa.Context) => {
        const stripe = new Stripe(secretKey!, {
            apiVersion: '2023-10-16',
        });

        const body = context.request.body;
        const { amount, currency } = body;

        try {
            const paymentIntent = await stripe.paymentIntents.create({
                amount,
                currency,
            });

            return Response.success(context, paymentIntent.client_secret);
        } catch (error: any) {
            return Response.error(context, error.message);
        }
    },
};
