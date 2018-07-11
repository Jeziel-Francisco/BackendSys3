import { IDbConnection } from "../../interfaces/DbConnectionInterfaces";
import { ISaleAttibutes } from "../../models/SaleModel";

class Service {
    constructor() { }

    findById(db: IDbConnection, id: number, companyId: number) {
    
    }


    create(db: IDbConnection, sale: ISaleAttibutes) {
        return db.Sale.create(sale);
    }

    async update(db: IDbConnection, id: number, sale: ISaleAttibutes, companyId: number) {
        
    }
}

export default new Service();

