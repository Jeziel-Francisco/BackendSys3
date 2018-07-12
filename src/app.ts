import * as express from 'express';
import * as morgan from 'morgan';
import { UserRoutes, CompanyRoutes, PersonRoutes, NoteRoutes, AddressRoutes, SaleRoutes } from './routes/routes';
import * as cors from 'cors';
import * as helmet from 'helmet';

import * as bodyParser from 'body-parser';

class App {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.middleware(this.express);
        this.routes(this.express);
    }

    middleware(express: express.Application) {
        // express.use(helmet({ hidePoweredBy: true }));
        express.use(cors());
        // express.use(morgan('dev'));
        express.use(bodyParser.urlencoded({ extended: true }));
        express.use(bodyParser.json());
    }

    routes(express: express.Application) {
        AddressRoutes(express);
        CompanyRoutes(express);
        NoteRoutes(express);
        PersonRoutes(express);
        UserRoutes(express);
        SaleRoutes(express);
    }
}

export default new App().express;