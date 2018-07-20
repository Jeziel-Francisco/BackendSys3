import { IDbConnection } from "../../interfaces/DbConnectionInterfaces";
import { IPersonAttributes } from "../../models/PersonModel";

import Service from './service';

class Business {
    constructor() { }

    findAll(db: IDbConnection, companyId: any, company: [number]) {
        companyId = parseInt(companyId);
        if (company.indexOf(companyId) < 0) throw new Error(`Company ${companyId} does not belong to the user !`);

        return Service.findAll(db, companyId);
    }

    create(db: IDbConnection, person: IPersonAttributes, company: [number]) {
        if (company.indexOf(person.companyId) < 0) throw new Error(`Company ${person.companyId} does not belong to the user !`);
        return Service.create(db, person);
    }

    update(db: IDbConnection, id: number, person: IPersonAttributes, company: [number]) {
        if (company.indexOf(person.companyId) < 0) throw new Error(`Company ${person.companyId} does not belong to the user !`);
        return Service.update(db, id, person, person.companyId);
    }
}

export default new Business();