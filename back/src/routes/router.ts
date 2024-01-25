import Router from 'koa-router';
import koaBody from 'koa-body';
import StatusController from '../controllers/StatusController';
import UserController from '../controllers/UserController';
import AuthController from '../controllers/AuthController';
import ProductController from '../controllers/ProductController';
import CategoryController from '../controllers/CategoryController';
import MaterialController from '../controllers/MaterialController';
import PictureController from '../controllers/PictureController';

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
//----------------------------------------------------//
const categoryRouter = new Router({ prefix: '/category' });
// category CRUD
categoryRouter.get('/', CategoryController.getAll);
categoryRouter.post('/', CategoryController.getOneById);
categoryRouter.post('/create', CategoryController.create);
categoryRouter.put('/update/:id', CategoryController.update);
categoryRouter.post('/delete', CategoryController.deleteMany);
categoryRouter.delete('/delete/:id', CategoryController.delete);
//----------------------------------------------------//
const materialRouter = new Router({ prefix: '/material' });
// material CRUD
materialRouter.get('/', MaterialController.getAll);
materialRouter.post('/', MaterialController.getOneById);
materialRouter.post('/create', MaterialController.create);
materialRouter.put('/update/:id', MaterialController.update);
materialRouter.post('/delete', MaterialController.deleteMany);
materialRouter.delete('/delete/:id', MaterialController.delete);
//----------------------------------------------------//

const pictureRouter = new Router({ prefix: '/picture' });
// picture management
pictureRouter.get('/', PictureController.getAll);
pictureRouter.get('/:id', PictureController.getOneById);
pictureRouter.post(
    '/upload',
    koaBody({
        multipart: true,
        formidable: {
            uploadDir: './src/uploads',
            keepExtensions: true,
        },
    }),
    PictureController.upload
);
pictureRouter.post('/delete', PictureController.deleteMany);
pictureRouter.delete('/delete/:id', PictureController.delete);

router.use(
    userRouter.routes(),
    userRouter.allowedMethods(),
    pictureRouter.routes(),
    pictureRouter.allowedMethods()
);
router.use(
    userRouter.routes(),
    userRouter.allowedMethods(),
    productRouter.routes(),
    productRouter.allowedMethods(),
    categoryRouter.routes(),
    categoryRouter.allowedMethods(),
    materialRouter.routes(),
    materialRouter.allowedMethods()
);

export default router;
