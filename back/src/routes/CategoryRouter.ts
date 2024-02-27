import Router from 'koa-router';
import CategoryController from '../controllers/CategoryController';

const categoryRouter = new Router({ prefix: '/category' });

categoryRouter.get('/', CategoryController.getAll);
categoryRouter.post('/', CategoryController.getOneById);
categoryRouter.post('/create', CategoryController.create);
categoryRouter.put('/update/:id', CategoryController.update);
categoryRouter.post('/delete', CategoryController.deleteMany);
categoryRouter.delete('/delete/:id', CategoryController.delete);

export default categoryRouter;
