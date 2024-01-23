import Router from 'koa-router';
import StatusController from '../controllers/StatusController';
import UserController from '../controllers/UserController';
import AuthController from '../controllers/AuthController';
import koaBody from 'koa-body';
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

// picture management
const pictureRouter = new Router({ prefix: '/picture' });
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

export default router;
