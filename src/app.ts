import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as helmet from 'helmet';
import * as morgan from 'morgan';

import {
    AddressRoutes,
    CityRoutes,
    CompanyRoutes,
    NoteRoutes,
    PersonRoutes,
    SaleRoutes,
    StateRoutes,
    UserRoutes
} from './routes/routes';


class App {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.middleware(this.express);
        this.routes(this.express);
    }

    middleware(app: express.Application) {
        app.use(cors());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());

        if (process.env.NODE_ENV = 'development') {
            this.express.use(express.static('public'));
        }
    }

    routes(app: express.Application) {
        AddressRoutes(app);
        CityRoutes(app);
        CompanyRoutes(app);
        NoteRoutes(app);
        PersonRoutes(app);
        SaleRoutes(app);
        StateRoutes(app);
        UserRoutes(app);
    }
}

export default new App().express;