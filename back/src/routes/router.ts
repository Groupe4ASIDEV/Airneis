import Router from 'koa-router';
import StatusController from '../controllers/StatusController';

const router: Router = new Router({ prefix: '/status' });
router.get('/', StatusController.status);

export default router;
