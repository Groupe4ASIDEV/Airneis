import Router from 'koa-router';
import StatusController from '../controllers/StatusController';
import UserController from '../controllers/UserController';
import AuthController from '../controllers/AuthController';

const router: Router = new Router();
router.get('/status', StatusController.status);

const userRouter = new Router({ prefix: '/user' });
// user CRUD
userRouter.get('/', UserController.getAll);
userRouter.post('/', UserController.getOneById);
userRouter.post('/create', UserController.create);
userRouter.put('/update/:id', UserController.update);
userRouter.post('/delete', UserController.deleteMany);
userRouter.delete('/delete/:id', UserController.delete);
// auth management
userRouter.post('/signup', AuthController.signUp);
userRouter.post('/signin', AuthController.signIn);
userRouter.get('/signout', AuthController.signOut);
//----------------------------------------------------//
const productRouter = new Router({ prefix: '/product' });
// product CRUD
productRouter.get('/', UserController.getAll);
productRouter.post('/', UserController.getOneById);
productRouter.post('/create', UserController.create);
productRouter.put('/update/:id', UserController.update);
productRouter.post('/delete', UserController.deleteMany);
productRouter.delete('/delete/:id', UserController.delete);

router.use(userRouter.routes(), userRouter.allowedMethods());

export default router;
