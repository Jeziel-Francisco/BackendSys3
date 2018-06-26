import { Request, Response, NextFunction } from "express";

import db from './../models';

class Context {
    constructor() { }

    setContext(req: Request, res: Response, next: NextFunction) {
        req['context'] = db;
        next();
    }
}

export default new Context();