import { IDbConnection } from "../../interfaces/DbConnectionInterfaces";
import { ISaleAttibutes, ISaleInstance } from "../../models/SaleModel";
import { ISaleProductAttibutes } from "../../models/SaleProductModel";

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


    createSale(db, sale: ISaleAttibutes) {
        return db.Sale.create(sale);
    }

    async updateSale(db: IDbConnection, id: number, companyId: number, sale: ISaleAttibutes) {
        let data: ISaleInstance = await db.Sale.findOne({
            where: {
                id: id,
                companyId: companyId
            }
        });
        if (!data) throw new Error(`Id ${id} not found !`);

        return data.update(sale);
    }

    createSaleProduct(db: IDbConnection, saleProduct: ISaleProductAttibutes) {
        return db.SaleProduct.create(saleProduct);
    }

    createBulkSaleProduct(db: IDbConnection, saleProduct: ISaleProductAttibutes[]) {
        return db.SaleProduct.bulkCreate(saleProduct);
    }
}

export default new Service();

