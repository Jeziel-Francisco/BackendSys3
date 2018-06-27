import * as express from 'express';
import * as morgan from 'morgan';
import { UserRoutes, CompanyRoutes, PersonRoutes } from './routes/routes';

import * as bodyParser from 'body-parser';

class App {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.middleware(this.express);
        this.routes(this.express);
    }

    middleware(express: express.Application) {
        express.use(morgan('dev'));
        express.use(bodyParser.urlencoded({ extended: true }));
        express.use(bodyParser.json())
    }

    routes(express: express.Application) {
        UserRoutes(express);
        CompanyRoutes(express);
        PersonRoutes(express);
    }
}

export default new App().express;