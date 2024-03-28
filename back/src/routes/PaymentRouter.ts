import Router from 'koa-router';
import PaymentController from '../controllers/PaymentController';

const paymentRouter = new Router({ prefix: '/payment-intent' });
// payment CRUD
paymentRouter.post('/create', PaymentController.createPaymentIntent);

export default paymentRouter;
