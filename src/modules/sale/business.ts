import { IDbConnection } from "../../interfaces/DbConnectionInterfaces";

import Service from './service';
import { ISaleAttibutes } from "../../models/SaleModel";

class Business {
    constructor() { }

    findAllCompanyUsers(db: IDbConnection, company: [number]) {
        return Service.findAllCompanyUsers(db, company);
    }

    create(db: IDbConnection, sale: ISaleAttibutes, company: [number]) {
        if (company.indexOf(sale.companyId) < 0) throw new Error(`Company ${sale.companyId} does not belong to the user!`);

        return Service.create(db, sale);
    }

    update(db: IDbConnection, id: number, sale: ISaleAttibutes, company: [number]) {
        if (company.indexOf(sale.id) < 0) throw new Error(`Company ${sale.companyId} does not belong to the user !`);

        return Service.update(db, id, sale, sale.companyId);
    }
}

export default new Business();