import { IDbConnection } from "../../interfaces/DbConnectionInterfaces";

import Service from './service';
import { ISaleAttibutes } from "../../models/SaleModel";

class Business {
    constructor() { }

    findById(db: IDbConnection, id: number, companyId: number) {
    }

    create(db: IDbConnection, sale: ISaleAttibutes) {
        return Service.create(db, sale);
    }

    update(db: IDbConnection, id: number, person: ISaleAttibutes, companyId: number) {
    }
}

export default new Business();