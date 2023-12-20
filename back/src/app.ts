import Koa from 'koa';
import koaBody from 'koa-body';
import logger from 'koa-logger';
import router from './routes/router';
import cors from '@koa/cors';

const app = new Koa();

app.use(
    cors({
        origin: '*',
        credentials: true,
    })
);
app.use(koaBody());
app.use(logger());
app.use(router.routes()).use(router.allowedMethods());

export default app;
