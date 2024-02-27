import Router from 'koa-router';
import FeaturedItemController from '../controllers/FeaturedItemController';

const featuredItemRouter = new Router({ prefix: '/featured-item' });
// Featured Item CRUD
featuredItemRouter.get('/', FeaturedItemController.getAll);
featuredItemRouter.post('/', FeaturedItemController.getOneById);
featuredItemRouter.post('/create', FeaturedItemController.create);
featuredItemRouter.put('/update/:id', FeaturedItemController.update);
featuredItemRouter.post('/delete', FeaturedItemController.deleteMany);
featuredItemRouter.delete('/delete/:id', FeaturedItemController.delete);

export default featuredItemRouter;
