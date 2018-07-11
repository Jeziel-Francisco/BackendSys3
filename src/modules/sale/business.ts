import { IDbConnection } from "../../interfaces/DbConnectionInterfaces";

import Service from './service';
import { ISaleAttibutes } from "../../models/SaleModel";

class Business {
    constructor() { }

    findByCompanyId(db: IDbConnection, companyId: number) {
        return Service.findByCompanyId(db, companyId);
    }

    create(db: IDbConnection, sale: ISaleAttibutes) {
        return Service.create(db, sale);
    }

    update(db: IDbConnection, id: number, person: ISaleAttibutes, companyId: number) {
    }
}

export default new Business();