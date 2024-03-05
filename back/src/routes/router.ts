import Router from 'koa-router';
import StatusController from '../controllers/StatusController';
import userRouter from './UserRouter';
import productRouter from './ProductRouter';
import categoryRouter from './CategoryRouter';
import materialRouter from './MaterialRouter';
import pictureRouter from './PictureRouter';
import featuredItemRouter from './FeaturedItemRouter';
import addressRouter from './AddressRouter';
import orderRouter from './OrderRouter';

const router: Router = new Router();
router.get('/status', StatusController.status);

router.use(
    userRouter.routes(),
    userRouter.allowedMethods(),
    pictureRouter.routes(),
    pictureRouter.allowedMethods(),
    productRouter.routes(),
    productRouter.allowedMethods(),
    categoryRouter.routes(),
    categoryRouter.allowedMethods(),
    materialRouter.routes(),
    materialRouter.allowedMethods(),
    featuredItemRouter.routes(),
    featuredItemRouter.allowedMethods(),
    addressRouter.routes(),
    addressRouter.allowedMethods(),
    orderRouter.routes(),
    orderRouter.allowedMethods()
);

export default router;
