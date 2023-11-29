import './boot/config';
import app from './app';
//import needed file for db here
import Echo from './helpers/Echo';

async function main() {
    try {
        // DATABASE ----------------------------------
        // await db.connect();

        // APPLICATIONS ----------------------------------
        console.log('Starting app..');

        const appHostname: string = process.env.APP_HOSTNAME || 'localhost';
        const appPort: number = Number(process.env.APP_API_PORT) || 5000;

        const server = app.listen(appPort, appHostname);
        Echo.green(`Listening to http://${appHostname}:${appPort}`);
        return server;
    } catch (exception) {
        console.log('Stopping.');
        console.error(exception);
    }
}

main();
