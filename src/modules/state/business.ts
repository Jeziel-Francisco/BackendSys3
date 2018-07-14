import Service from './service';

import { IDbConnection } from "../../interfaces/DbConnectionInterfaces";

class Business {
    constructor() { }

    finAll(db: IDbConnection) {
        return Service.findAll(db);
    }
}

export default new Business();