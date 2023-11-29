import Koa from 'koa';
import koaBody from 'koa-body';
import logger from 'koa-logger';

const app = new Koa();

app.use(koaBody());
app.use(logger());
app.use((ctx) => {
    ctx.body = 'Airneis API is running ' + process.env.APP_HOSTNAME;
});

export default app;
