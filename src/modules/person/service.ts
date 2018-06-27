import { IDbConnection } from "../../interfaces/DbConnectionInterfaces";
import { IPersonAttributes, IPersonInstance } from "../../models/PersonModel";

class Service {
    constructor() { }

    findById(db: IDbConnection, id: number) {
        return db.Person.findById(id);
    }

    findAll(db: IDbConnection, companyId: number) {
        return db.Person.find({ where: { companyId: companyId } });
    }

    create(db: IDbConnection, person: IPersonAttributes) {
        return db.Person.create(person);
    }

    async update(db: IDbConnection, id: number, person: IPersonAttributes) {
        let data: IPersonInstance = await db.Person.findById(id);

        if (!data) throw new Error('Id not found');

        return await data.update(person);
    }
}

export default new Service();

