import { IAddressModel } from "../../models/AddressModel";
import { IDbConnection } from "../../interfaces/DbConnectionInterfaces";
import { IPersonAttributes } from "../../models/PersonModel";

import Service from './service';

class Business {
    constructor() { }

    findById(db: IDbConnection, id: number, companyId: number) {
        return Service.findById(db, id, companyId);
    }

    findAll(db: IDbConnection, companyId: number) {
        return Service.findAll(db, companyId);
    }

    create(db: IDbConnection, person: IPersonAttributes) {
        return Service.create(db, person);
    }

    createBulk(db: IDbConnection, people: [IPersonAttributes]) {
        return Service.createBulk(db, people);
    }

    update(db: IDbConnection, id: number, person: IPersonAttributes, companyId: number) {
        return Service.update(db, id, person, companyId);
    }
}

export default new Business();