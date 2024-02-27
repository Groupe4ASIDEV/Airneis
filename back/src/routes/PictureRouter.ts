import Router from 'koa-router';
import PictureController from '../controllers/PictureController';
import koaBody from 'koa-body';

const pictureRouter = new Router({ prefix: '/picture' });

pictureRouter.get('/', PictureController.getAll);
pictureRouter.post('/', PictureController.getOneById);
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

export default pictureRouter;
