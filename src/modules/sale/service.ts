import { IDbConnection } from "../../interfaces/DbConnectionInterfaces";
import { ISaleAttibutes, ISaleInstance } from "../../models/SaleModel";
import { Op } from 'sequelize';

class Service {
    constructor() { }

    findAllCompanyUsers(db: IDbConnection, company: [number]) {
        return db.Sale.findAll({
            where: {
                companyId: { [Op.in]: company }
            },
            include: [
                {
                    model: db.Person
                },
                {
                    model: db.SaleProduct,
                    include: [
                        { model: db.Product }
                    ]
                }
            ]
        });
    }

    create(db, sale: ISaleAttibutes) {
        return db.Sale.create(sale);
    }

    async update(db: IDbConnection, id: number, sale: ISaleAttibutes, companyId: number) {
        let data: ISaleInstance = await db.Sale.findOne({
            where: {
                id: id,
                companyId: companyId
            }
        });
        if (!data) throw new Error(`Id ${id} not found !`);

        return data.update(sale);
    }
}

export default new Service();

