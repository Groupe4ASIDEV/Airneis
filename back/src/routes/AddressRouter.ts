import Router from 'koa-router';
import AddressController from '../controllers/AddressController';

const addressRouter = new Router({ prefix: '/address' });
// address CRUD
addressRouter.get('/', AddressController.getAll);
addressRouter.get('/:id', AddressController.getOneById);
addressRouter.post('/create', AddressController.create);
addressRouter.put('/update/:id', AddressController.update);
addressRouter.post('/delete', AddressController.deleteMany);
addressRouter.delete('/delete/:id', AddressController.delete);

export default addressRouter;
