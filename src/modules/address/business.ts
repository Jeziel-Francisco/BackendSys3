import { IAddressAttibutes } from "../../models/AddressModel";
import { IDbConnection } from "../../interfaces/DbConnectionInterfaces";

import Service from './service';

class Business {
    constructor() { }

    create(db: IDbConnection, address: IAddressAttibutes) {
        return Service.create(db, address);
    }

    createBulk(db: IDbConnection, address: IAddressAttibutes[]) {
        return Service.createBulk(db, address);
    }

    update(db: IDbConnection, id: number, address: IAddressAttibutes) {
        return Service.update(db, id, address);
    }

    remove(db: IDbConnection, id: number) {
        return Service.remove(db, id);
    }

}
export default new Business();