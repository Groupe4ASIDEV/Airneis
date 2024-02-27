import Router from 'koa-router';
import MaterialController from '../controllers/MaterialController';

const materialRouter = new Router({ prefix: '/material' });

materialRouter.get('/', MaterialController.getAll);
materialRouter.post('/', MaterialController.getOneById);
materialRouter.post('/create', MaterialController.create);
materialRouter.put('/update/:id', MaterialController.update);
materialRouter.post('/delete', MaterialController.deleteMany);
materialRouter.delete('/delete/:id', MaterialController.delete);

export default materialRouter;
