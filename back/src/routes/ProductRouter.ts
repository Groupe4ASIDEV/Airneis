import Router from 'koa-router';
import ProductController from '../controllers/ProductController';

const productRouter = new Router({ prefix: '/product' });

productRouter.get('/', ProductController.getAll);
productRouter.post('/', ProductController.getOneById);
productRouter.post('/create', ProductController.create);
productRouter.put('/update/:id', ProductController.update);
productRouter.post('/delete', ProductController.deleteMany);
productRouter.delete('/delete/:id', ProductController.delete);

export default productRouter;
