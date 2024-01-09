import Router from 'koa-router';
import StatusController from '../controllers/StatusController';
import UserController from '../controllers/UserController';
import AuthController from '../controllers/AuthController';
import ProductController from "../controllers/ProductController";

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
productRouter.get('/', ProductController.getAll);
productRouter.post('/', ProductController.getOneById);
productRouter.post('/create', ProductController.create);
productRouter.put('/update/:id', ProductController.update);
productRouter.post('/delete', ProductController.deleteMany);
productRouter.delete('/delete/:id', ProductController.delete);

router.use(userRouter.routes(), userRouter.allowedMethods(), productRouter.routes(), productRouter.allowedMethods());

export default router;
