import { IDbConnection } from "../../interfaces/DbConnectionInterfaces";
import { ISaleAttibutes } from "../../models/SaleModel";

class Service {
    constructor() { }

    findByCompanyId(db: IDbConnection, companyId: number) {
        return db.Sale.findAll({
            where: {
                companyId: companyId
            },
            include: [
                {
                    model: db.Person,
                    attributes: ['id', 'name', 'fantasy', 'legal', 'registryFederal', 'registryState', 'consumerFinal']
                },
                {
                    model: db.Product
                }
            ]
        })
    }


    create(db: IDbConnection, sale: ISaleAttibutes) {
        return db.Sale.create(sale);
    }

    async update(db: IDbConnection, id: number, sale: ISaleAttibutes, companyId: number) {

    }
}

export default new Service();

