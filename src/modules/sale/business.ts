import { IDbConnection } from "../../interfaces/DbConnectionInterfaces";

import Service from './service';
import { ISaleAttibutes } from "../../models/SaleModel";
import { ISaleProductAttibutes } from "../../models/SaleProductModel";

class Business {
    constructor() { }

    findByCompanyId(db: IDbConnection, companyId: number) {
        return Service.findByCompanyId(db, companyId);
    }

    createSale(db: IDbConnection, sale: ISaleAttibutes) {
        return Service.createSale(db, sale);
    }

    updateSale(db: IDbConnection, id: number, companyId: number, sale: ISaleAttibutes) {
        return Service.updateSale(db, id, companyId, sale);
    }


    createSaleProduct(db: IDbConnection, saleProduct: ISaleProductAttibutes) {
        return Service.createSaleProduct(db, saleProduct);
    }

    createBulkSaleProduct(db: IDbConnection, saleProduct: ISaleProductAttibutes[]) {
        return Service.createBulkSaleProduct(db, saleProduct);
    }
}

export default new Business();