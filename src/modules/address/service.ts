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

    createBulk(db: IDbConnection, address: IAddressAttibutes[]) {
        return db.Address.bulkCreate(address);
    }

    async update(db: IDbConnection, id: number, address: IAddressAttibutes) {
        let data = await db.Address.findById(id);

        if (!data) throw new Error(`id ${id} not found !`);

        return await data.update(address);
    }

    async remove(db: IDbConnection, id: number) {
        let data = await db.Address.findById(id);

        if (!data) throw new Error(`id ${id} not found !`);

        return await data.destroy();
    }
}

export default new Service();