import { IPersonAttributes } from "../../models/PersonModel";
import { IDbConnection } from "../../interfaces/DbConnectionInterfaces";

import Service from './service';

class Business {
    constructor() { }

    findById({ db }: { db: IDbConnection }, id: number) {
        return Service.findById(db, id);
    }

    findAll({ db }: { db: IDbConnection }, companyId: number) {
        return Service.findAll(db, companyId);
    }

    create({ db }: { db: IDbConnection }, person: IPersonAttributes) {
        return Service.create(db, person);
    }

    update({ db }: { db: IDbConnection }, id: number, person: IPersonAttributes) {
        return Service.update(db, id, person);
    }
}

export default new Business();