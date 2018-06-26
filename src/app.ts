import * as express from 'express';
import * as morgan from 'morgan';
import { UserRoutes, CompanyRoutes, PersonRoutes } from './routes/routes';



class App {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.middleware(this.express);
        this.routes(this.express);
    }

    middleware(express: express.Application) {
        express.use(morgan('dev'));
    }

    routes(express: express.Application) {
        UserRoutes(express);
        CompanyRoutes(express);
        PersonRoutes(express);
    }
}

export default new App().express;