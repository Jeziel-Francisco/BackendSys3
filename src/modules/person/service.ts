import { IDbConnection } from "../../interfaces/DbConnectionInterfaces";
import { IPersonAttributes, IPersonInstance } from "../../models/PersonModel";

class Service {
    constructor() { }

    findById(db: IDbConnection, id: number, companyId: number) {
        return db.Person.findOne({
            where: {
                id: id,
                companyId: companyId
            },
            attributes: ['id', 'name', 'fantasy', 'legal', 'registryFederal', 'registryMunicipal', 'registryState', 'consumerFinal'],
            include: [{
                model: db.Address,
                attributes: ['id', 'cep', 'place', 'neighborhood', 'number', 'complement', 'note',],
                include: [{
                    model: db.City,
                    attributes: ['id', 'name'],
                    include: [{
                        model: db.State,
                        attributes: ['id', 'code', 'name', 'initials']
                    }]
                }]
            }]
        });
    }

    findAll(db: IDbConnection, companyId: number) {
        return db.Person.findAll({
            where: {
                companyId: companyId
            },
            attributes: ['id', 'name', 'fantasy', 'legal', 'registryFederal', 'registryMunicipal', 'registryState', 'consumerFinal'],
            include: [{
                model: db.Address,
                attributes: ['id', 'cep', 'place', 'neighborhood', 'number', 'complement', 'note',],
                include: [{
                    model: db.City,
                    attributes: ['id', 'name'],
                    include: [{
                        model: db.State,
                        attributes: ['id', 'code', 'name', 'initials']
                    }]
                }]
            }]
        });
    }

    create(db: IDbConnection, person: IPersonAttributes) {
        return db.Person.create(person);
    }

    createBulk(db: IDbConnection, people: IPersonAttributes[]) {
        return db.Person.bulkCreate(people);
    }

    async update(db: IDbConnection, id: number, person: IPersonAttributes, companyId: number) {
        let data: IPersonInstance = await db.Person.findOne({
            where: {
                id: id,
                companyId: companyId
            },
            attributes: ['id', 'name', 'fantasy', 'legal', 'registryFederal', 'registryMunicipal', 'registryState', 'consumerFinal']
        });

        if (!data) throw new Error('Id not found');

        return await data.update(person);
    }
}

export default new Service();

