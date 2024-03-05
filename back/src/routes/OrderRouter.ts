import Router from 'koa-router';
import OrderController from '../controllers/OrderController';

const orderRouter = new Router({ prefix: '/order' });
// order CRUD
orderRouter.get('/', OrderController.getAll);
orderRouter.post('/', OrderController.getAllByUser);
orderRouter.get('/:id', OrderController.getOneById);
orderRouter.post('/create', OrderController.create);
orderRouter.put('/update/:id', OrderController.update);
orderRouter.post('/delete', OrderController.deleteMany);
orderRouter.delete('/delete/:id', OrderController.delete);

export default orderRouter;
