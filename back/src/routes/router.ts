import Router from 'koa-router';
import StatusController from '../controllers/StatusController';
import UserController from '../controllers/UserController';

const router: Router = new Router();
router.get('/status', StatusController.status);

const userRouter = new Router({ prefix: '/user' });
userRouter.get('/', UserController.getAll);
userRouter.post('/', UserController.getOneById);
userRouter.post('/create', UserController.create);
userRouter.put('/update', UserController.update);
userRouter.delete('/delete/:id', UserController.delete);

router.use(userRouter.routes(), userRouter.allowedMethods());

export default router;
