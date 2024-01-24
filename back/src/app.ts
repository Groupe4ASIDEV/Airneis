import Koa from 'koa';
import koaBody from 'koa-body';
import logger from 'koa-logger';
import router from './routes/router';
import cors from '@koa/cors';
import serve from 'koa-static';
import path from 'path';

const app = new Koa();

app.use(
    cors({
        origin: '*',
        credentials: true,
    })
);
app.use(koaBody());
app.use(logger());
app.use(serve(path.join(__dirname, 'uploads')));
app.use(router.routes()).use(router.allowedMethods());

export default app;
