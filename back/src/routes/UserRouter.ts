import Router from 'koa-router';
import UserController from '../controllers/UserController';
import AuthController from '../controllers/AuthController';

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

export default userRouter;
