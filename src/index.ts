import * as http from 'http';

import app from './app';
import db from './models';

import { normalizePort, onErrorServer, onListening } from './utils/utils';

const server = http.createServer(app);
const port = normalizePort(process.env.port || 8080);

db.sequelize.sync({ force: true }).then(() => {
    server.listen(port);
    server.on('error', onErrorServer(server));
    server.on('listening', onListening(server));
}).catch((error) => console.log(error));