import Router from 'koa-router';
import UserController from '../controllers/MessageController';

const messageRouter = new Router({ prefix: '/message' });

// user CRUD
messageRouter.get('/', UserController.getAll);
messageRouter.post('/', UserController.getOneById);
messageRouter.post('/create', UserController.create);
messageRouter.put('/update/:id', UserController.update);
messageRouter.post('/delete', UserController.deleteMany);
messageRouter.delete('/delete/:id', UserController.delete);

export default messageRouter;
