import Router from 'koa-router';
import StatusController from '../controllers/StatusController';
import UserController from '../controllers/UserController';

const router: Router = new Router();
router.get('/status', StatusController.status);

const userRouter = new Router({ prefix: '/user' });
userRouter.get('/', UserController.getAll);
userRouter.get('/:id', UserController.getOneById);
userRouter.put('/:id', UserController.update);
userRouter.delete('/:id', UserController.delete);
userRouter.post('/create', UserController.create);

router.use(userRouter.routes(), userRouter.allowedMethods());

export default router;
