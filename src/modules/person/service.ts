import { IDbConnection } from "../../interfaces/DbConnectionInterfaces";
import { IPersonAttributes, IPersonInstance } from "../../models/PersonModel";

class Service {
    constructor() { }

    findAll(db: IDbConnection, companyId: number) {
        return db.Person.findAll({
            where: {
                companyId: companyId
            },
            include: [{
                model: db.Address,
                include: [{
                    model: db.City,
                    include: [{
                        model: db.State
                    }]
                }]
            }]
        });
    }

    create(db: IDbConnection, person: IPersonAttributes) {
        return db.Person.create(person);
    }

    async update(db: IDbConnection, id: number, person: IPersonAttributes, companyId: number) {
        let data: IPersonInstance = await db.Person.findOne({
            where: {
                id: id,
                companyId: companyId
            }
        });

        if (!data) throw new Error(`Id ${id} or ${companyId} companyId not found`);

        return await data.update(person);
    }
}

export default new Service();

