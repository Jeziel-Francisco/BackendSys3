import { IDbConnection } from "../../interfaces/DbConnectionInterfaces";
import { IAddressAttibutes } from "../../models/AddressModel";

class Service {
    constructor() { }

    findByPersonId(db: IDbConnection, personId: number) {
        return db.Address.find({ where: { personId: personId } });
    }

    create(db: IDbConnection, address: IAddressAttibutes) {
        return db.Address.create(address);
    }

    async update(db: IDbConnection, id: number, address: IAddressAttibutes) {
        let data = await db.Address.findById(id);

        if (!data) throw new Error(`id ${id} not found !`);

        return await data.update(address);
    }

}